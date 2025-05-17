package members

import (
	"github.com/aws/aws-sdk-go-v2/service/cognitoidentityprovider"
	"github.com/common-fate/clio"
	"github.com/common-fate/common-fate/pkg/cfaws"
	"github.com/common-fate/common-fate/pkg/deploy"
	"github.com/urfave/cli/v3"
)

var MembersCommand = cli.Command{
	Name:        "members",
	Description: "Manage users for a group in the default cognito user pool.",
	Subcommands: []*cli.Command{&addCommand, &removeCommand},
	Action:      cli.ShowSubcommandHelp,
}

var addCommand = cli.Command{
	Name: "add",
	Flags: []cli.Flag{
		&cli.StringFlag{Name: "username", Aliases: []string{"u"}, Usage: "The username of the user to add", Required: true},
		&cli.StringFlag{Name: "group", Aliases: []string{"g"}, Usage: "The group ID to add the user to", Required: true},
	},
	Description: "Add a Cognito user to a group",
	Action: func(c *cli.Context) error {
		ctx := c.Context

		username := c.String("username")
		group := c.String("group")

		dc, err := deploy.ConfigFromContext(ctx)
		if err != nil {
			return err
		}
		o, err := dc.LoadOutput(ctx)
		if err != nil {
			return err
		}
		cfg, err := cfaws.ConfigFromContextOrDefault(ctx)
		if err != nil {
			return err
		}
		cog := cognitoidentityprovider.NewFromConfig(cfg)

		_, err = cog.AdminAddUserToGroup(ctx, &cognitoidentityprovider.AdminAddUserToGroupInput{
			GroupName:  &group,
			Username:   &username,
			UserPoolId: &o.UserPoolID,
		})

		if err != nil {
			return err
		}

		clio.Successf("Added user %s to group '%s'", username, group)
		clio.Warn("Run 'gdeploy identity sync' to sync your changes now.")
		return nil
	},
}
