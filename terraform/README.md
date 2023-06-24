# aws-grafana-billing-dashboard terraform

![deploy to grafana](https://github.com/JohannesKonings/aws-grafana-billing-dashboard/workflows/deploy%20to%20grafana/badge.svg)

A Grafana dashboard for AWS billing metrics which is deployable via Terraform.

## enviroments variables

Rename the file `.env_template` to `.env` and fill in the values for the env variables.

Than run the command `source .env`

## Terraform S3 Backend

Run script `sh scripts/createS3BackendBucket.sh` to create a S3 Bucket, which will store the state of Terraform.

For that Bucket is a User with access and secret key necessary. That will be created with the script `sh scripts/createUser4S3BackendBucket.sh `.
The credentials from the script response needs to put into the .env file.
The script `createAndAttachS3BackendBucketPolicy.sh` creates and assigns the appropriate policy.

## local provisioning

Run the Terraform commands.

## Terraform

`sh scripts/terraformInit.sh`

`terraform validate`

`terraform plan`

`terraform apply`
