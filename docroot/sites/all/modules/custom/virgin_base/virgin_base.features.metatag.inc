<?php
/**
 * @file
 * virgin_base.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function virgin_base_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node.
  $config['node'] = array(
    'instance' => 'node',
    'disabled' => FALSE,
    'config' => array(
      'title' => array(
        'value' => '[node:title] | [current-page:pager][site:name]',
      ),
      'description' => array(
        'value' => '[node:summary]',
      ),
      'article:modified_time' => array(
        'value' => '[node:changed:custom:c]',
      ),
      'article:published_time' => array(
        'value' => '[node:created:custom:c]',
      ),
      'og:description' => array(
        'value' => '[node:summary]',
      ),
      'og:title' => array(
        'value' => '[node:title]',
      ),
      'og:updated_time' => array(
        'value' => '[node:changed:custom:c]',
      ),
      'twitter:title' => array(
        'value' => '[node:title]',
      ),
      'twitter:description' => array(
        'value' => '[node:summary]',
      ),
    ),
  );

  // Exported Metatag config instance: node:event.
  $config['node:event'] = array(
    'instance' => 'node:event',
    'disabled' => FALSE,
    'config' => array(
      'description' => array(
        'value' => '[node:field_description]',
      ),
      'og:description' => array(
        'value' => '[node:field_description]',
      ),
      'og:image' => array(
        'value' => '[node:field_header_image]',
      ),
      'twitter:image' => array(
        'value' => '[node:field_header_image]',
      ),
      'twitter:description' => array(
        'value' => '[node:field_description]',
      ),
    ),
  );

  // Exported Metatag config instance: node:festival.
  $config['node:festival'] = array(
    'instance' => 'node:festival',
    'disabled' => FALSE,
    'config' => array(
      'description' => array(
        'value' => '[node:field_description]',
      ),
      'og:description' => array(
        'value' => '[node:field_description]',
      ),
      'og:image' => array(
        'value' => '[node:field_header_image]',
      ),
      'twitter:image' => array(
        'value' => '[node:field_header_image]',
      ),
      'twitter:description' => array(
        'value' => '[node:field_description]',
      ),
    ),
  );

  // Exported Metatag config instance: node:page.
  $config['node:page'] = array(
    'instance' => 'node:page',
    'disabled' => FALSE,
    'config' => array(
      'og:image' => array(
        'value' => '[node:field_header_image]',
      ),
      'twitter:image' => array(
        'value' => '[node:field_header_image]',
      ),
    ),
  );

  return $config;
}
