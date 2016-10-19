<?php
/**
 * @file
 * virgin_base.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function virgin_base_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function virgin_base_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function virgin_base_image_default_styles() {
  $styles = array();

  // Exported image style: virgin_flag.
  $styles['virgin_flag'] = array(
    'label' => 'Virgin Flag',
    'effects' => array(
      3 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 152,
          'height' => 94,
          'upscale' => 1,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}
