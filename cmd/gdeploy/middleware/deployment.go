package middleware

import (
	"fmt"
	"net/url"

	"github.com/AlecAivazis/survey/v2"
	"github.com/common-fate/clio"
	"github.com/common-fate/clio/clierr"
	"github.com/common-fate/common-fate/internal/build"
	"github.com/common-fate/common-fate/pkg/deploy"
	"github.com/hashicorp/go-version"
	"github.com/urfave/cli/v3"
)

func RequireDeploymentConfig() cli.BeforeFunc {
	return func(c *cli.Context) error {
		f := c.Path("file")
		dc, err := deploy.LoadConfig(f)
		if err == deploy.ErrConfigNotExist {
			_, err2 := deploy.LoadConfig(deploy.DeprecatedDefaultFilename)
			if err2 == nil {
				return clierr.New(fmt.Sprintf("Tried to load Common Fate deployment configuration from %s but the file doesn't exist.", f),
					deploy.DeprecatedDefaultFilenameWarning)
			}
			return clierr.New(fmt.Sprintf("Tried to load Common Fate deployment configuration from %s but the file doesn't exist.", f),
				clierr.Info(`
To fix this, take one of the following actions:
  a) run this command from a folder which contains a Common Fate deployment configuration file (like 'deployment.yml')
  b) run 'gdeploy init' to set up a new deployment configuration file
`),
			)
		}
		if err != nil {
			return fmt.Errorf("failed to load config with error: %s", err)
		}

		if dc.Version != 2 {
			return fmt.Errorf("unexpected deployment config file version found, expected version: 2 found version: %d", dc.Version)
		}

		c.Context = deploy.SetConfigInContext(c.Context, dc)
		return nil
	}
}

func PreventDevUsage() cli.BeforeFunc {
	return func(c *cli.Context) error {
		ctx := c.Context
		dc, err := deploy.ConfigFromContext(ctx)
		if err != nil {
			return err
		}
		if dc.Deployment.Dev != nil && *dc.Deployment.Dev {
			return clierr.New("Unsupported command used on development deployment", clierr.Warnf("It looks like you tried to use an unsupported command on your development stack: '%s'.", c.Command.Name), clierr.Info("If you were trying to update your stack, use 'mage deploy:dev', if you didn't expect to see this message, check you are in the correct directory!"))
		}
		return nil
	}
}

// BeforeFunc wrapper for IsReleaseVersionDifferent func.
// Prompt user to save `gdeploy` version as release version to `deployment.yml`
// if release version  and gdeploy version is different.
func VerifyGDeployCompatibility() cli.BeforeFunc {
	return func(c *cli.Context) error {
		ctx := c.Context
		dc, err := deploy.ConfigFromContext(ctx)
		if err != nil {
			return err
		}

		isMismatch, isBuildGreater, err := IsReleaseVersionDifferent(dc.Deployment, build.Version, c.Bool("ignore-version-mismatch"))
		if err != nil {
			return err
		}
		if isMismatch {
			var shouldUpdate bool
			e := fmt.Sprintf("Incompatible release version detected. Expected v%s got %s.", build.Version, dc.Deployment.Release)
			if !isBuildGreater {
				return clierr.New(
					e,
					clierr.Warnf(`It looks like your gdeploy version is older than your deployment config release version.
This may have happened if you have updated the deployment config without updating gdeploy CLI first.
It is important to ensure your version of gdeploy CLI matches your release, otherwise you could experience potentially unexpected behaviour.

You should take one of the following actions:
	a) Update to the latest version of gdeploy then run this command again.
	b) If you changed your deployment config release version manually, you can change it back to 'v%s' and continue using your current version of gdeploy.
	c) If you need to skip this check, you can pass the '--ignore-version-mismatch' flag e.g 'gdeploy --ignore-version-mismatch <COMMAND>'
`, build.Version),
				)
			}
			clio.Error(e)
			clio.Info("It looks like your gdeploy version is greater that your deployment config release version.")
			clio.Info("If you are updating your deployment, simply follow the prompts.")
			clio.Info("If you were not intending to update your deployment, try installing the version of gdeploy that your stack was deployed with instead.")
			clio.Warn("It is important to ensure your version of gdeploy matches your release, otherwise you could experience potentially unexpected behaviour.\nIf you need to skip this check, you can pass the '--ignore-version-mismatch' flag e.g 'gdeploy --ignore-version-mismatch <COMMAND>'")
			prompt := &survey.Confirm{
				Message: fmt.Sprintf("Would you like to update your 'deployment.yml' to release v%s?", build.Version),
			}
			err = survey.AskOne(prompt, &shouldUpdate)
			if err != nil {
				return err
			}
			if shouldUpdate {
				dc.Deployment.Release = fmt.Sprintf("v%s", build.Version)
				err := dc.Save(c.Path("file"))
				if err != nil {
					return err
				}
				clio.Successf("Release version updated to v%s", build.Version)
				clio.Warn("To complete the update, run 'gdeploy update' to apply the changes to your CloudFormation deployment.")
				return nil
			}
			return clierr.New("Please ensure that your gdeploy version matches your release version in 'deployment.yml'.")
		}
		return nil

	}
}

// Validate if the passed deployment configuration's release value and gdeploy version matches or not.
// Returns true if version same.
// Returns false if we can skip this check.
// Returns error for anything else.
func IsReleaseVersionDifferent(d deploy.Deployment, buildVersion string, ignoreMismatch bool) (isDifferent bool, isBuildGreater bool, err error) {
	// skip compatibility check for dev deployments.
	if d.Dev != nil && *d.Dev {
		return false, true, nil
	}
	if ignoreMismatch {
		clio.Warnf("Ignoring version mismatch between gdeploy CLI (v%s) and deployment release version (%s) because the '--ignore-version-mismatch' flag was provided", buildVersion, d.Release)
		return false, true, nil
	}
	// this check allows a local build of Gdeploy to be used for UAT on releases
	if buildVersion == "dev" {
		clio.Warn("Skipping version compatibility check for dev gdeploy build")
		return false, true, nil
	}
	parsedBuildVersion, err := version.NewVersion(buildVersion)
	if err != nil {
		return false, true, clierr.New(err.Error(), clierr.Warn("Unexpected error encountered while checking build version compatibility. If you see this, let us know via an issue on Github. You can skip this warning by passing the '--ignore-version-mismatch' flag e.g 'gdeploy --ignore-version-mismatch <COMMAND>'"))
	}
	parsedReleaseVersion, err := version.NewVersion(d.Release)
	if err != nil {
		// maybe its a url instead of a semver
		// release value are added as URL for UAT. In such case it should skip this check.
		_, err := url.ParseRequestURI(d.Release)
		if err == nil {
			clio.Warn("Skipping version compatibility check for release because you are using a URL")
			return false, true, nil
		}
	}

	if err != nil {
		return true, false, nil
	}
	return !parsedBuildVersion.Equal(parsedReleaseVersion), parsedBuildVersion.GreaterThan(parsedReleaseVersion), nil
}
