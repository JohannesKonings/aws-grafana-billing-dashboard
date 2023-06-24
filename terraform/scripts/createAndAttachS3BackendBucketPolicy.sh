#!/bin/bash

cat > ./scripts/policy << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::${TF_VAR_s3_bucket_name}"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::${TF_VAR_s3_bucket_name}/*"
    }
  ]
}
EOF

aws iam create-policy --policy-name terraform_state --policy-document file://scripts/policy

ARN=$(aws iam list-policies --query 'Policies[?PolicyName==`terraform_state`].Arn' --output text)

aws iam attach-user-policy --policy-arn $ARN --user-name terraform_state


