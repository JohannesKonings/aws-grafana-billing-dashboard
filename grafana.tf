provider "grafana" {
  url  = var.grafana_url
  auth = var.grafana_api_key
}

resource "grafana_data_source" "cloudwatch" {
  type = "cloudwatch"
  name = "cloudwatch"

  json_data {
    default_region = "us-east-1"
    auth_type      = "keys"
  }

  secure_json_data {
    access_key = var.access_key
    secret_key = var.secret_key
  }
}
