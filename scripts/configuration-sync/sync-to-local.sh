#!/usr/bin/env bash

# Import LOCAL configuration
LOCAL_CONF=./local/local.conf

if [ -f "$LOCAL_CONF" ]
then
  source $LOCAL_CONF
else
  echo "ERROR: Config file $LOCAL_CONF has not been configured. Refer to README." 1>&2 ;
  exit 1;
fi

# Halt if a potentially destructive target has been set
if [[ "$LOCAL_ALIAS" =~ "@virginsport01" || "$LOCAL_ALIAS" =~ ".dev" || "$LOCAL_ALIAS" =~ ".test" || "$LOCAL_ALIAS" =~ ".prod" || "$LOCAL_ALIAS" =~ ".prelaunch" ]]; then
  echo "Critical Error: $LOCAL_ALIAS references a cloud environment. This script must only be used to update a local site alias."
  exit 1
else
  echo "Copy files and db FROM $CLOUD_ALIAS => $LOCAL_ALIAS and scrub user data. You will be asked to confirm each step."
fi

#==== DRUSH COMMANDS ====
read -p " - Are you sure? (n) to skip this step. (y/n): " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # Sync local with target environment
  drush $LOCAL_ALIAS sql-drop
  drush $LOCAL_ALIAS sql-sync $CLOUD_ALIAS $LOCAL_ALIAS
  drush $LOCAL_ALIAS rsync $CLOUD_ALIAS:%files/ $LOCAL_ALIAS:%files
fi

source shared-drush-conf.sh

if [[ ! -z ${DRUPAL_ENABLE_MODULES} ]]
then
  # Local development configuration
  echo 'Enabling local development modules'
  echo #
  drush $LOCAL_ALIAS en $DRUPAL_ENABLE_MODULES --y
fi

if [ ! -z $CLOUD_NODE_REGION_DOMAIN ]
then
  # Update region node hostname to use a local domain
  echo "Updating region node hostname from *$CLOUD_NODE_REGION_DOMAIN => *$LOCAL_NODE_REGION_DOMAIN"
  echo #
  drush $LOCAL_ALIAS sql-query "UPDATE field_data_field_hostname SET field_hostname_value = REPLACE(field_hostname_value,'$CLOUD_NODE_REGION_DOMAIN','$LOCAL_NODE_REGION_DOMAIN');"
  drush $LOCAL_ALIAS cc all
fi
