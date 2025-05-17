package backup

import (
	"github.com/common-fate/clio"
	"github.com/common-fate/common-fate/pkg/deploy"
	"github.com/urfave/cli/v3"
)

var BackupStatus = cli.Command{
	Name:        "status",
	Description: "View the status of a backup",
	Flags: []cli.Flag{
		&cli.StringFlag{Name: "arn", Usage: "The ARN of the backup to check", Required: true},
	},
	Subcommands: []*cli.Command{},
	Action: func(c *cli.Context) error {
		ctx := c.Context
		backupOutput, err := deploy.BackupStatus(ctx, c.String("arn"))
		if err != nil {
			return err
		}
		clio.Infof("Backup details\n%s", deploy.BackupDetailsToString(backupOutput.BackupDetails))
		return nil
	},
}
