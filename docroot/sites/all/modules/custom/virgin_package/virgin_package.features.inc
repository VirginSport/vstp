<?php

/**
 * @file
 * virgin_package.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function virgin_package_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function virgin_package_node_info() {
  $items = array(
    'package' => array(
      'name' => t('Package'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'package_state' => array(
      'name' => t('Package State'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
