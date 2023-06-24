#!/bin/sh

aws s3api create-bucket --bucket $TF_VAR_s3_bucket_name --region $TF_VAR_region