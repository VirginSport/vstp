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