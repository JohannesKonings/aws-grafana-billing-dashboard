provider "grafana" {
  url  = var.grafana_url
  auth = var.grafana_api_key
}

resource "grafana_data_source" "cloudwatch" {
  type = "cloudwatch"
  name = "CloudWatch"

  json_data {
    default_region = var.region
    auth_type      = "keys"
  }

  secure_json_data {
    access_key = var.access_key_grafana
    secret_key = var.secret_key_grafana
  }
}

resource "grafana_dashboard" "metrics" {
  config_json = file("dashboards/aws-billing.json")
}
