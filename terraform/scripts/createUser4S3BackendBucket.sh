#!/bin/sh

aws iam create-user --user-name terraform_state

aws iam create-access-key --user-name terraform_state