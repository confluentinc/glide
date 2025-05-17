package slackwebhook

import (
	"github.com/urfave/cli/v3"
)

var Command = cli.Command{
	Name:        "slack-webhook",
	Description: "configure and enable slack webhook integration",
	Subcommands: []*cli.Command{&add, &remove},
}
