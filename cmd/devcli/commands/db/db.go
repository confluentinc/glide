package db

import "github.com/urfave/cli/v3"

var DBCommand = cli.Command{
	Name:        "db",
	Subcommands: []*cli.Command{&createCommand, &destroyCommand},
	Action:      cli.ShowSubcommandHelp,
}
