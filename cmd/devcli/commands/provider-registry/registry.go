package registry

import (
	"context"
	"errors"
	"net/http"
	"os"

	"github.com/common-fate/clio/clierr"
	"github.com/common-fate/common-fate/internal/build"
	"github.com/common-fate/provider-registry-sdk-go/pkg/providerregistrysdk"
	"github.com/olekukonko/tablewriter"
	"github.com/urfave/cli/v3"
)

var Command = cli.Command{
	Name:        "provider-registry",
	Description: "Invoke registry apis",
	Usage:       "Invoke registry apis",
	Subcommands: []*cli.Command{
		&ListCommand,
	},
}

var ListCommand = cli.Command{
	Name:        "list",
	Description: "List providers",
	Usage:       "List providers",
	Flags: []cli.Flag{
		&cli.StringFlag{Name: "registry-api-url", Value: build.ProviderRegistryAPIURL, EnvVars: []string{"COMMONFATE_PROVIDER_REGISTRY_API_URL"}, Hidden: true},
	},
	After: func(c *cli.Context) error {

		ctx := context.Background()
		registryClient, err := providerregistrysdk.NewClientWithResponses(c.String("registry-api-url"))
		if err != nil {
			return errors.New("error configuring provider registry client")
		}

		//check that the provider type matches one in our registry
		res, err := registryClient.ListAllProvidersWithResponse(ctx)
		if err != nil {
			return err
		}

		switch res.StatusCode() {
		case http.StatusOK:
			table := tablewriter.NewWriter(os.Stdout)
			table.SetHeader([]string{"name", "team", "version", "FunctionZipS3Path", "CFNTemplateS3Path"})
			table.SetAutoWrapText(false)
			table.SetAutoFormatHeaders(true)
			table.SetHeaderAlignment(tablewriter.ALIGN_LEFT)
			table.SetAlignment(tablewriter.ALIGN_LEFT)
			table.SetCenterSeparator("")
			table.SetColumnSeparator("")
			table.SetRowSeparator("")
			table.SetHeaderLine(false)
			table.SetBorder(false)

			if res.JSON200 != nil {
				for _, d := range res.JSON200.Providers {

					table.Append([]string{
						d.Name, d.Publisher, d.Version, d.LambdaAssetS3Arn, d.CfnTemplateS3Arn,
					})
				}
			}

			table.Render()
		case http.StatusInternalServerError:
			return errors.New(res.JSON500.Error)
		default:
			return clierr.New("Unhandled response from the Common Fate API", clierr.Infof("Status Code: %d", res.StatusCode()), clierr.Error(string(res.Body)))
		}
		return nil

	},
}
