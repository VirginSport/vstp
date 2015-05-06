<?php
/**
 * @file
 * virgin_rich_page.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function virgin_rich_page_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "panelizer" && $api == "panelizer") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function virgin_rich_page_node_info() {
  $items = array(
    'rich_page' => array(
      'name' => t('Rich Page'),
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
