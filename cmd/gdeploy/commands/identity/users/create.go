package users

import (
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/cognitoidentityprovider"
	"github.com/aws/aws-sdk-go-v2/service/cognitoidentityprovider/types"
	"github.com/common-fate/clio"
	"github.com/common-fate/clio/clierr"
	"github.com/common-fate/common-fate/pkg/cfaws"
	"github.com/common-fate/common-fate/pkg/deploy"
	"github.com/urfave/cli/v3"
)

var CreateCommand = cli.Command{
	Name: "create",
	Flags: []cli.Flag{
		&cli.StringFlag{Name: "username", Aliases: []string{"u"}, Usage: "The username of the user to create (should be an email address)", Required: true},
		&cli.StringFlag{Name: "given-name", Usage: "The user's given name"},
		&cli.StringFlag{Name: "family-name", Usage: "The user's family name"},
		&cli.BoolFlag{Name: "admin", Aliases: []string{"a"}, Usage: "Whether to make the user a Common Fate administrator"},
	},
	Description: "Create a Cognito user",
	Action: func(c *cli.Context) error {
		ctx := c.Context

		username := c.String("username")
		f := c.Path("file")
		dc, err := deploy.ConfigFromContext(ctx)
		if err != nil {
			return err
		}

		cfg, err := cfaws.ConfigFromContextOrDefault(ctx)
		if err != nil {
			return err
		}
		adminGroup := dc.Deployment.Parameters.AdministratorGroupID

		o, err := dc.LoadOutput(ctx)
		if err != nil {
			return err
		}
		cog := cognitoidentityprovider.NewFromConfig(cfg)

		in := cognitoidentityprovider.AdminCreateUserInput{
			UserPoolId: &o.UserPoolID,
			Username:   &username,
		}

		givenName := c.String("given-name")
		if givenName != "" {
			in.UserAttributes = append(in.UserAttributes, types.AttributeType{
				Name:  aws.String("given_name"),
				Value: &givenName,
			})
		}

		familyName := c.String("family-name")
		if familyName != "" {
			in.UserAttributes = append(in.UserAttributes, types.AttributeType{
				Name:  aws.String("family_name"),
				Value: &familyName,
			})
		}

		_, err = cog.AdminCreateUser(ctx, &in)
		if err != nil {
			return err
		}

		clio.Successf("created user %s", username)

		if c.Bool("admin") {
			if adminGroup == "" {
				return clierr.New(fmt.Sprintf("The AdministratorGroupID parameter is not set in %s. Set the parameter in the Parameters section and then call 'gdeploy identity groups members add --username %s --group <the admin group ID>' to make the user a Common Fate administrator.", f, username))
			}

			_, err = cog.AdminAddUserToGroup(ctx, &cognitoidentityprovider.AdminAddUserToGroupInput{
				GroupName:  &adminGroup,
				Username:   &username,
				UserPoolId: &o.UserPoolID,
			})
			if err != nil {
				return err
			}

			clio.Successf("added user %s to administrator group '%s'", username, adminGroup)
		}
		clio.Warn("Run 'gdeploy identity sync' to sync your changes now.")

		return nil
	},
}
