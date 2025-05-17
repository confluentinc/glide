package healthcheck

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/aws/aws-sdk-go-v2/service/lambda"
	lambdaTypes "github.com/aws/aws-sdk-go-v2/service/lambda/types"
	"github.com/briandowns/spinner"
	"github.com/common-fate/clio"
	"github.com/common-fate/clio/clierr"
	"github.com/common-fate/common-fate/pkg/cfaws"
	"github.com/common-fate/common-fate/pkg/config"
	"github.com/common-fate/common-fate/pkg/deploy"
	"github.com/common-fate/common-fate/pkg/handler"
	"github.com/common-fate/common-fate/pkg/service/healthchecksvc"
	"github.com/common-fate/common-fate/pkg/storage"
	"github.com/common-fate/ddb"
	"github.com/joho/godotenv"
	"github.com/sethvargo/go-envconfig"
	"github.com/urfave/cli/v3"
)

// this command can be run in dev with:
// go run cf/cmd/cli/main.go healthcheck

var Command = cli.Command{
	Name:        "healthcheck",
	Description: "healthcheck a deployment",
	Usage:       "healthcheck a deployment",
	Flags:       []cli.Flag{&cli.StringSliceFlag{Name: "deployment-mappings"}},
	Subcommands: []*cli.Command{
		&LocalCommand,
		&LambdaCommand,
	},
}

var LocalCommand = cli.Command{
	Name:        "local",
	Description: "healthcheck a deployment locally",
	Usage:       "healthcheck a deployment locally",
	Action: cli.ActionFunc(func(c *cli.Context) error {
		ctx := c.Context
		// Read from the .env file
		var cfg config.HealthCheckerConfig
		_ = godotenv.Load()
		err := envconfig.Process(ctx, &cfg)
		if err != nil {
			return err
		}
		db, err := ddb.New(ctx, cfg.TableName)
		if err != nil {
			return err
		}
		for _, dm := range c.StringSlice("deployment-mappings") {
			kv := strings.Split(dm, ":")
			if len(kv) != 2 {
				return errors.New("deployment-mapping is invalid")
			}
			handler.LocalDeploymentMap[kv[0]] = kv[1]
		}

		hc := healthchecksvc.Service{
			DB:            db,
			RuntimeGetter: healthchecksvc.DefaultGetter{},
		}

		err = hc.Check(ctx)
		if err != nil {
			return err
		}

		q := storage.ListHandlers{}
		_, err = db.Query(ctx, &q)
		if err != nil {
			return err
		}

		for _, handler := range q.Result {
			clio.Infow(fmt.Sprintf("Handler %s is healthy: %v", handler.ID, handler.Healthy), "diagnostics", handler.Diagnostics)
		}

		return nil
	}),
}

var LambdaCommand = cli.Command{
	Name:        "lambda",
	Description: "healthcheck a deployment by invoking the lambda function",
	Usage:       "healthcheck a deployment by invoking the lambda function",
	Action: cli.ActionFunc(func(c *cli.Context) error {
		ctx := c.Context

		dc, err := deploy.LoadConfig(deploy.DefaultFilename)
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

		if o.HealthcheckFunctionName == "" {
			return clierr.New("The healthcheck function name is not yet available. You may need to update your deployment to use this feature.")
		}
		si := spinner.New(spinner.CharSets[14], 100*time.Millisecond)
		si.Suffix = " invoking healthcheck sync lambda function"
		si.Writer = os.Stderr
		si.Start()

		lambdaClient := lambda.NewFromConfig(cfg)
		res, err := lambdaClient.Invoke(ctx, &lambda.InvokeInput{
			FunctionName:   &o.HealthcheckFunctionName,
			InvocationType: lambdaTypes.InvocationTypeRequestResponse,
			Payload:        []byte("{}"),
		})
		si.Stop()
		if err != nil {
			return err
		}
		b, err := json.Marshal(res)
		if err != nil {
			return err
		}
		clio.Debugf("healthcheck sync lambda invoke response: %s", string(b))
		if res.FunctionError != nil {
			return fmt.Errorf("healthcheck sync failed with lambda execution error: %s", *res.FunctionError)
		} else if res.StatusCode == 200 {

			clio.Successf("Successfully synced the healthcheck")
		} else {
			return fmt.Errorf("healthcheck sync failed with lambda invoke status code: %d", res.StatusCode)
		}

		// Read from the .env file
		var hccfg config.HealthCheckerConfig
		_ = godotenv.Load()
		err = envconfig.Process(ctx, &hccfg)
		if err != nil {
			return err
		}
		db, err := ddb.New(ctx, hccfg.TableName)
		if err != nil {
			return err
		}
		q := storage.ListHandlers{}
		_, err = db.Query(ctx, &q)
		if err != nil {
			return err
		}

		for _, handler := range q.Result {
			clio.Infow(fmt.Sprintf("Handler %s is healthy: %v", handler.ID, handler.Healthy), "diagnostics", handler.Diagnostics)
		}

		return nil
	}),
}
