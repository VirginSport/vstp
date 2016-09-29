site="$1"
target_env="$2"
source_branch="$3"
deployed_tag="$4"
repo_url="$5"
repo_type="$6"

drush_alias=$site'.'$target_env
domain="${site}${target_env}.prod.acquia-sites.com"

if [ "$target_env" != 'prod' ]; then
    echo "$site.$target_env: The $source_branch branch has been updated on $target_env."
    echo "Updating database."
    drush @$drush_alias updb -y
    echo "Running feature revert."
    drush @$drush_alias fra -y
    echo "Clearing Drupal cache."
    drush @$drush_alias cc all
    echo "Clearing Varnish cache."
    drush @$drush_alias ac-domain-purge $domain
else
    echo "$site.$target_env: The $source_branch branch has been updated on $target_env."
fi
