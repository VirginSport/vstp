site="$1"
target_env="$2"
source_branch="$3"
deployed_tag="$4"
repo_url="$5"
repo_type="$6"

drush_alias=$site'.'$target_env

if [ "$target_env" != 'prod' ]; then
  echo "$site.$target_env: The $source_branch branch has been updated on $target_env."
  #
  # Backs up all databases in the current environment
  #
  echo "Backing up database(s)..."
  for db in $(drush @$drush_alias ac-database-list | awk '{print $3}'); do
    echo "Backing up ${db}..."
    drush @$drush_alias ac-database-instance-backup $db
  done
  #
  # Update database and feature revert
  #
  echo "Updating database."
  drush @$drush_alias updb -y

  echo "Clearing memcache."
  drush @$drush_alias mcf

  echo "Running feature revert."
  drush @$drush_alias fra -y
  #
  # Clear Drupal cache
  #
  echo "Clearing Drupal cache."
  drush @$drush_alias cc all
  #
  # Clear Varnish cache for all domains on this environment
  #
  for domain in $(drush @$drush_alias ac-domain-list | awk '{print $3}'); do
    if [[ $domain == *"amazonaws"* ]]; then
      echo "This is an ELB, skipping varnish cache clear for ${domain}..."
    else
      echo "Clearing Varnish cache for ${domain}..."
      drush @$drush_alias ac-domain-purge $domain
    fi
  done
else
  echo "$site.$target_env: The $source_branch branch has been updated on $target_env."
fi
