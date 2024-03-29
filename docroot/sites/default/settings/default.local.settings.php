<?php

/**
 * For a single database configuration, the following is sufficient:
 **/
$databases = array (
  'default' =>
    array (
      'default' =>
        array (
          'database' => 'drupal',
          'username' => 'root',
          'password' => '',
          'host' => 'localhost',
          'port' => '3306',
          'driver' => 'mysql',
          'prefix' => '',
        ),
    ),
);

$base_url = 'http://127.0.0.1:8888';

// Disable virus scanning on uploaded files.
$conf['clamav_enabled'] = 0;
$conf['clamav_enable_element_image_widget'] = 0;
$conf['clamav_enable_element_file_widget'] = 0;
$conf['cron_safe_threshold'] = 0;
$conf['error_level'] = 1;
$conf['stage_file_proxy_origin'] = '';

// Uncomment to disable caching locally.
//$conf['cache'] = FALSE;
//$conf['preprocess_css'] = FALSE;
//$conf['preprocess_js'] = FALSE;

// Uncomment if you are running a local solr instance.
//$conf['apachesolr_default_environment'] = 'solr';

// Attendly Integration
//$conf['virgin_attendly_env'] = 'development';
//$conf['virgin_attendly_url'] = 'https://register-dev.virginsport.com';
//$conf['virgin_attendly_api_url'] = 'https://api-dev.virginsport.com';
//$conf['virgin_attendly_api_user'] = 'attendly-user';
//$conf['virgin_attendly_api_pass'] = 'attendly-api-token';

// DrupalRaceday Integration
//$conf['virgin_raceday_url'] = 'https://drupalraceday.virginsport.com';
