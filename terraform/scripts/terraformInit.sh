#!/bin/sh
cat > ./backend.tf << EOF
terraform {
  backend "s3" {
    bucket = "${TF_VAR_s3_bucket_name}"
    key    = "${TF_VAR_backend_key}"
    region = "${TF_VAR_region}"
  }
}
EOF

terraform init -input=false