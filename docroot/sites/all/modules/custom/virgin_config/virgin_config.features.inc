<?php
/**
 * @file
 * virgin_config.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function virgin_config_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_image_default_styles().
 */
function virgin_config_image_default_styles() {
  $styles = array();

  // Exported image style: one_fourth.
  $styles['one_fourth'] = array(
    'label' => 'One Fourth',
    'effects' => array(
      1 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 400,
          'height' => '',
          'upscale' => 0,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: one_half.
  $styles['one_half'] = array(
    'label' => 'One Half',
    'effects' => array(
      4 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 800,
          'height' => 500,
          'upscale' => 0,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}
