package commands

import (
	"github.com/common-fate/clio"
	"github.com/common-fate/common-fate/pkg/deploy"
	"github.com/urfave/cli/v3"
)

var StatusCommand = cli.Command{
	Name:        "status",
	Description: "Check the status of a Common Fate deployment",
	Usage:       "Check the status of a Common Fate deployment",
	Action: func(c *cli.Context) error {
		ctx := c.Context

		dc, err := deploy.ConfigFromContext(ctx)
		if err != nil {
			return err
		}

		o, err := dc.LoadOutput(ctx)
		if err != nil {
			return err
		}
		o.PrintTable()

		ss, err := dc.GetStackStatus(ctx)

		if err != nil {
			return err
		}

		clio.Infof("Cloudformation stack status: %s", ss)

		return nil
	},
}
