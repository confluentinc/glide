package release

import (
	"fmt"

	"github.com/common-fate/common-fate/pkg/deploy"
	"github.com/urfave/cli/v3"
)

var getCommand = cli.Command{
	Name:  "get",
	Usage: "Get the release version specified in your Common Fate configuration file",
	Action: func(c *cli.Context) error {
		ctx := c.Context

		dc, err := deploy.ConfigFromContext(ctx)
		if err != nil {
			return err
		}

		fmt.Println(dc.Deployment.Release)
		return nil
	},
}
