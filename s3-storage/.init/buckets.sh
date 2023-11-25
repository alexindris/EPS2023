#!/bin/bash
awslocal s3api \
create-bucket --bucket s3storage \
--create-bucket-configuration LocationConstraint=eu-west-3 \
--region eu-west-3
