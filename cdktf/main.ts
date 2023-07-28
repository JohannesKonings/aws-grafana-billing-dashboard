import { Construct } from "constructs";
import { App, TerraformStack, S3Backend } from "cdktf";
import { provider, dashboard, dataSource } from "./.gen/providers/grafana";
import { grafanaConfig } from "./config";
import * as fs from "node:fs";

class GrafanaStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // new S3Backend(this, {
    //   bucket: "cdktf-grafana",
    //   key: "state",
    //   region: grafanaConfig.region,
    // });

    const grafanaProvider = new provider.GrafanaProvider(this, "cdktf-grafana-provider", {
      url: grafanaConfig.url,
      auth: grafanaConfig.apiKey,
    });

    new dataSource.DataSource(this, "cdktf-grafana-datasource", {
      name: "cdktf-cloudwatch",
      type: "cloudwatch",
      jsonDataEncoded: JSON.stringify({
        authType: "keys",
        defaultRegion: grafanaConfig.region,
      }),
      secureJsonDataEncoded: JSON.stringify({
        accessKey: grafanaConfig.awsAccessKey,
        secretKey: grafanaConfig.awsSecretKey,
      }),
      provider: grafanaProvider,
    });

    const configJson = fs.readFileSync("./dashboards/aws-billing.json", "utf8");
    new dashboard.Dashboard(this, "cdkt-grafana-dashboard", {
      configJson: configJson,
      overwrite: true,
      provider: grafanaProvider,
    });
    // new dashboard.Dashboard(this, "cdkt-grafana-dashboard", {
    //   configJson: JSON.stringify({
    //     title: "cdktf test dashboard",
    //     panels: [
    //       {
    //         title: "My Panel",
    //         type: "graph",
    //         gridPos: {
    //           x: 0,
    //           y: 0,
    //           w: 12,
    //           h: 8,
    //         },
    //         targets: [
    //           {
    //             refId: "A",
    //             query: "prometheus",
    //           },
    //         ],
    //       },
    //     ],
    //   }),
    //   overwrite: true,
    //   provider: grafanaProvider,
    // });

  }
}

const app = new App();
new GrafanaStack(app, "cdktf-grafana");
app.synth();
