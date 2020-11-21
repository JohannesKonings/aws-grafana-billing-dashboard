# aws-grafana-billing-dashboard

A Grafana dashboard for AWS billing metrics which is deployable via Terraform.

## local provisioning

Rename the file `.env_template` to `.env` and fill in the values for the env variables.

Than run the Terraform commands.

## Terraform

`source .env`

`terrafrom init`

`terraform validate`

`terraform plan`

`terraform apply`
