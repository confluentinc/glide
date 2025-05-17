package slack

import (
	"github.com/common-fate/clio"
	"github.com/common-fate/common-fate/pkg/deploy"
	"github.com/urfave/cli/v3"
)

var disableSlackCommand = cli.Command{
	Name:        "disable",
	Description: "disable slack integration",
	Action: func(c *cli.Context) error {
		ctx := c.Context
		f := c.Path("file")

		dc, err := deploy.ConfigFromContext(ctx)
		if err != nil {
			return err
		}

		dc.Deployment.Parameters.NotificationsConfiguration.Slack = nil
		err = dc.Save(f)
		if err != nil {
			return err
		}
		clio.Success("Successfully disabled Slack")
		clio.Warn("Your changes won't be applied until you redeploy. Run 'gdeploy update' to apply the changes to your CloudFormation deployment.")
		return nil
	},
}
