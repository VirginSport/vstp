#!/usr/bin/env bash

# Executes common drush tasks between environments based on ./{env}/{env}.conf
# This script is shared between sync-to-local.sh and configure-cloud-env.sh

read -p "Configure $TARGET_ALIAS settings. Are you sure? (y/n): " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then

  # Update the database, reset features and clear caches
  drush $TARGET_ALIAS updb --y
  drush $TARGET_ALIAS mcf
  drush $TARGET_ALIAS fra --y
  drush $TARGET_ALIAS cc all

  # Configure settings for target environment
  echo 'Drupal configuration'
  drush $TARGET_ALIAS upwd $DRUPAL_ADMIN_USER --password=$DRUPAL_ADMIN_PASS
  drush $TARGET_ALIAS vset virgin_get_in_touch_url $DRUPAL_GET_IN_TOUCH_URL
  drush $TARGET_ALIAS vset hybridauth_provider_Facebook_keys_id $DRUPAL_FACEBOOK_KEYS_ID
  drush $TARGET_ALIAS vset hybridauth_provider_Facebook_keys_secret $DRUPAL_FACEBOOK_KEYS_SECRET
  drush $TARGET_ALIAS vset site_mail $DRUPAL_SITE_EMAIL
  drush $TARGET_ALIAS vset update_notify_emails $DRUPAL_NOTIFY_EMAILS
  drush $TARGET_ALIAS vset update_notification_threshold $DRUPAL_NOTIFY_THRESHOLD
  if [ -z $DRUPAL_SMTP_USER ]
  then
    drush $TARGET_ALIAS vset smtp_username $DRUPAL_SMTP_USER
    drush $TARGET_ALIAS vset smtp_password $DRUPAL_SMTP_PASS
  fi
  echo 'RaceDay Cloud integration configuration'
  drush $TARGET_ALIAS vset virgin_raceday_url $RACEDAY_URL
  echo 'SugarCRM integration configuration'
  drush $TARGET_ALIAS vset sugarcrm_url $SUGARCRM_URL
  drush $TARGET_ALIAS vset sugarcrm_username $SUGARCRM_USERNAME
  drush $TARGET_ALIAS vset sugarcrm_password $SUGARCRM_PASSWORD
  drush $TARGET_ALIAS vset virgin_cipher_key $SUGARCRM_VIRGIN_CIPHER_KEY
  drush $TARGET_ALIAS vset virgin_api_access_token $SUGARCRM_VIRGIN_API_ACCESS_TOKEN
  echo 'Attendly integration configuration'
  drush $TARGET_ALIAS vset virgin_attendly_env $ATTENDLY_ENV
  drush $TARGET_ALIAS vset virgin_attendly_url $ATTENDLY_URL
  drush $TARGET_ALIAS vset virgin_attendly_api_url $ATTENDLY_API_URL
  drush $TARGET_ALIAS vset virgin_attendly_api_user $ATTENDLY_API_USER
  drush $TARGET_ALIAS vset virgin_attendly_api_pass $ATTENDLY_API_PASS

  if [ -z $DRUPAL_SHIELD_USER ]
  then
    echo 'Disabling shield'
    drush $TARGET_ALIAS eval "variable_set('shield_user', NULL);"
    drush $TARGET_ALIAS eval "variable_set('shield_pass', NULL);"
  else
    echo 'Configuring shield username and password'
    drush $TARGET_ALIAS vset shield_user $DRUPAL_SHIELD_USER
    drush $TARGET_ALIAS vset shield_pass $DRUPAL_SHIELD_PASS
    drush $TARGET_ALIAS vset shield_paths $DRUPAL_SHIELD_PATHS
  fi

  if [ -z $REGION_DEFAULT_HOSTNAME ]
  then
    echo 'Disabling default region'
    # This format is necessary to set null as opposed to empty string
    drush $TARGET_ALIAS eval "variable_set('vs_region_default_hostname', NULL);"
    drush $TARGET_ALIAS cc all
  else
    drush $TARGET_ALIAS vset vs_region_default_hostname $REGION_DEFAULT_HOSTNAME
  fi

fi
