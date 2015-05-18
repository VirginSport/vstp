<?php
/**
 * @file
 * virgin_taxonomy.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function virgin_taxonomy_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}
