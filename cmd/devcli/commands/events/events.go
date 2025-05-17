package events

import "github.com/urfave/cli/v3"

var EventsCommand = cli.Command{
	Name:        "event",
	Subcommands: []*cli.Command{&requestCommand},
	Action:      cli.ShowSubcommandHelp,
}
