# aws-grafana-billing-dashboard

![deploy to grafana](https://github.com/JohannesKonings/aws-grafana-billing-dashboard/workflows/deploy%20to%20grafana/badge.svg)

A Grafana dashboard for AWS billing metrics which is deployable via Terraform.

## local provisioning

Rename the file `.env_template` to `.env` and fill in the values for the env variables.

Than run the Terraform commands.

## Terraform

`source .env`

`terraform init`

`terraform validate`

`terraform plan`

`terraform apply`
