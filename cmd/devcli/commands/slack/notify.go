package slack

import (
	"github.com/common-fate/common-fate/pkg/deploy"
	"github.com/urfave/cli/v3"
)

var SlackCommand = cli.Command{
	Name:        "slack",
	Subcommands: []*cli.Command{&requestMessageCommand},

	Action: cli.ShowSubcommandHelp,
}

var requestMessageCommand = cli.Command{
	Name: "request-message",
	Flags: []cli.Flag{&cli.PathFlag{Name: "file", Aliases: []string{"f"}, Value: deploy.DefaultFilename, Usage: "The deployment configuration yml file path"},
		&cli.StringFlag{Name: "request-id", Required: true},
		&cli.StringFlag{Name: "reviewer-id"},
	},

	Action: func(c *cli.Context) error {
		// ctx := c.Context
		// f := c.Path("file")
		// dc, err := deploy.LoadConfig(f)
		// if err != nil {
		// 	return err
		// }
		// currentConfig := dc.Deployment.Parameters.NotificationsConfiguration.Slack
		// if currentConfig == nil {
		// 	return fmt.Errorf("slack is not yet configured, configure it now by running 'gdeploy notifications slack configure'")
		// }
		// var slack slacknotifier.SlackNotifier
		// err = slack.Init(ctx, dc.Deployment.Parameters.NotificationsConfiguration)
		// if err != nil {
		// 	return err
		// }
		// stackOutput, err := dc.LoadOutput(ctx)
		// if err != nil {
		// 	return err
		// }

		// db, err := ddb.New(ctx, stackOutput.DynamoDBTable)
		// slack.DB = db
		// if err != nil {
		// 	return err
		// }

		// id := c.String("request-id")
		// if id == "" {
		// 	return fmt.Errorf("request-id is required")
		// }

		// q := storage.GetRequestV2{ID: id}
		// _, err = db.Query(ctx, &q)
		// if err != nil {
		// 	return err
		// }

		// r := c.String("reviewer-id")

		// requestEvent := gevent.RequestEventPayload{
		// 	// Request:    *q.Result,
		// 	ReviewerID: r,
		// }
		// m, err := json.Marshal(requestEvent)
		// if err != nil {
		// 	return err
		// }
		// return slack.HandleRequestEvent(ctx, zap.S(), events.CloudWatchEvent{
		// 	Detail:     json.RawMessage(m),
		// 	DetailType: gevent.RequestCreatedType,
		// })
		return nil
	},
}
