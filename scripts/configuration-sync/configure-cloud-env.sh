#!/usr/bin/env bash

if [ $# -eq 0 ]
then
  echo "Error: no environment specified (prelaunch|stg|dev)"
  echo "Usage: ./configure-cloud-env.sh {env}"
  echo "This script loads configuration from ./env/env.conf"
  exit 1;
fi

CLOUD_ENV=$1
CONFIG_FILE="./$CLOUD_ENV/$CLOUD_ENV.conf"
if [ -f "$CONFIG_FILE" ]
then
  source $CONFIG_FILE
else
  echo "ERROR: Config file $CONFIG_FILE has not been configured. Refer to README." 1>&2 ;
  exit 1;
fi

read -p "Configure $TARGET_ALIAS settings. Are you sure? (y/n): " -n 1 -r
echo #
if [[ $REPLY =~ ^[Yy]$ ]]
then
  source shared-drush-conf.sh
else
  echo "exit."
  exit 1;
fi