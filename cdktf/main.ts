import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { provider, dashboard } from "./.gen/providers/grafana";
import { grafanaConfig } from "./config"

class GrafanaStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const grafanaProvider = new provider.GrafanaProvider(this, "cdktf-grafana-provider", {
      url: grafanaConfig.url,
      auth: grafanaConfig.apiKey,
    });

    new dashboard.Dashboard(this, "cdkt-grafana-dashboard", {
      configJson: JSON.stringify({
        title: "cdktf test dashboard",
        panels: [
          {
            title: "My Panel",
            type: "graph",
            gridPos: {
              x: 0,
              y: 0,
              w: 12,
              h: 8,
            },
            targets: [
              {
                refId: "A",
                query: "prometheus",
              },
            ],
          },
        ],
      }),
      overwrite: true,
      provider: grafanaProvider,
    });

  }
}

const app = new App();
new GrafanaStack(app, "cdktf-grafana");
app.synth();
