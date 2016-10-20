<?php
/**
 * @file
 * virgin_roles.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function virgin_roles_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "scald" && $api == "context_config") {
    return array("version" => "1");
  }
}
