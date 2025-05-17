package main

import (
	"fmt"
	"os"

	"github.com/common-fate/common-fate/cmd/devcli/commands/cache"
	"github.com/common-fate/common-fate/cmd/devcli/commands/db"
	"github.com/common-fate/common-fate/cmd/devcli/commands/events"
	"github.com/common-fate/common-fate/cmd/devcli/commands/groups"
	"github.com/common-fate/common-fate/cmd/devcli/commands/healthcheck"
	registry "github.com/common-fate/common-fate/cmd/devcli/commands/provider-registry"
	"github.com/common-fate/common-fate/cmd/devcli/commands/request"
	"github.com/common-fate/common-fate/cmd/devcli/commands/slack"
	"github.com/common-fate/common-fate/cmd/devcli/commands/targetgroup"
	"github.com/fatih/color"
	"github.com/urfave/cli/v3"
	"go.uber.org/zap"
)

func main() {
	app := &cli.App{
		Name:        "commonfate",
		Writer:      color.Output,
		Version:     "v0.0.1",
		HideVersion: false,
		Commands: []*cli.Command{
			&groups.GroupsCommand,
			&db.DBCommand,
			&events.EventsCommand,
			&slack.SlackCommand,
			&cache.CacheCommand,
			&healthcheck.Command,
			&registry.Command,
			&targetgroup.Command,
			&request.RequestCommand,
		},
	}

	logCfg := zap.NewDevelopmentConfig()
	logCfg.DisableStacktrace = true

	log, err := logCfg.Build()
	if err != nil {
		fmt.Printf("%s\n", err)
		os.Exit(1)
	}
	zap.ReplaceGlobals(log)

	err = app.Run(os.Args)
	if err != nil {
		fmt.Fprintf(os.Stderr, "%s\n", err)
		os.Exit(1)
	}
}
