<?php
/**
 * @file
 * virgin_user.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function virgin_user_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: user.
  $config['user'] = array(
    'instance' => 'user',
    'config' => array(
      'title' => array(
        'value' => '',
      ),
      'canonical' => array(
        'value' => '',
      ),
      'shortlink' => array(
        'value' => '',
      ),
      'og:type' => array(
        'value' => 'profile',
      ),
      'og:url' => array(
        'value' => '',
      ),
      'og:title' => array(
        'value' => '',
      ),
      'twitter:url' => array(
        'value' => '',
      ),
      'twitter:title' => array(
        'value' => '',
      ),
    ),
  );

  return $config;
}
