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

  // Exported image style: virgin_original.
  $styles['virgin_original'] = array(
    'label' => 'Virgin Original',
    'effects' => array(),
  );

  // Exported image style: virgin_small_flag.
  $styles['virgin_small_flag'] = array(
    'label' => 'Virgin Small Flag',
    'effects' => array(
      1 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 30,
          'height' => 18,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: vs_teaser_landscape.
  $styles['vs_teaser_landscape'] = array(
    'label' => 'teaser landscape',
    'effects' => array(
      7 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 488,
          'height' => 325,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: vs_teaser_portrait.
  $styles['vs_teaser_portrait'] = array(
    'label' => 'teaser portrait',
    'effects' => array(
      5 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 410,
          'height' => 560,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: vs_teaser_square.
  $styles['vs_teaser_square'] = array(
    'label' => 'teaser square',
    'effects' => array(
      6 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 279,
          'height' => 279,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}
