# Environment configuration scripts

## Overview

* ./sync-to-local.sh supports syncing a local development environment.
* ./configure-cloud-env.sh supports setting a remote environment to a predefined set of configuration, for example when copying production => staging.
* ./shared-drush-conf.sh is used by both scripts to set configuration.

## Prerequisites
1. Install drush aliases as per instructions here: https://docs.acquia.com/acquia-cloud/drush/aliases
2. Configure a local drush site alias for your development environment e.g. @virginsport.local 
3. Copy each example {env}.default.conf and rename to {env}.conf
4. Review and configure each .conf file per environment with usernames/accounts/tokens/passwords specific to that [environment as per Confluence](https://acquia-ps.atlassian.net/wiki/display/VSTP/Environments). 

Note: This script is *not intended to update production* and no prod configuration is provided. Recommend individual drush commands if setting changes are required.

## Usage 

Before running any configuration scripts ensure that the settings match the appropriate [environment's configuration](https://acquia-ps.atlassian.net/wiki/display/VSTP/Environments).

All scripts will run updb, memcache flush, feature revert and a cache clear in that order prior to setting configuration.

### Sync a remove environment to local:

    $ ./sync-to-local.sh

### Configure a remote cloud environment configuration:

    $ ./configure-remote.sh {env}

**Inputs**
* Env argument - (dev|stg|prelaunch) maps to a configuration file matching the following path: {env}/{env}.conf
