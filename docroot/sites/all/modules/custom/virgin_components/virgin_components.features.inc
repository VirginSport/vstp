<?php
/**
 * @file
 * virgin_components.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function virgin_components_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "fieldable_panels_panes" && $api == "fieldable_panels_pane_type") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_image_default_styles().
 */
function virgin_components_image_default_styles() {
  $styles = array();

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

  // Exported image style: vs_teaser_landscape_hdpi.
  $styles['vs_teaser_landscape_hdpi'] = array(
    'label' => 'vs_teaser_landscape_hdpi',
    'effects' => array(
      7 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 976,
          'height' => 650,
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

  // Exported image style: vs_teaser_portrait_hdpi.
  $styles['vs_teaser_portrait_hdpi'] = array(
    'label' => 'vs_teaser_portrait_hdpi',
    'effects' => array(
      5 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 820,
          'height' => 1120,
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

  // Exported image style: vs_teaser_square_hdpi.
  $styles['vs_teaser_square_hdpi'] = array(
    'label' => 'vs_teaser_square_hdpi',
    'effects' => array(
      6 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 558,
          'height' => 558,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_paragraphs_info().
 */
function virgin_components_paragraphs_info() {
  $items = array(
    'vs_accordion_item' => array(
      'name' => 'Accordion Item',
      'bundle' => 'vs_accordion_item',
      'locked' => '1',
    ),
    'vs_cta_block' => array(
      'name' => 'CTA Block',
      'bundle' => 'vs_cta_block',
      'locked' => '1',
    ),
    'vs_custom_banner' => array(
      'name' => 'Custom Banner',
      'bundle' => 'vs_custom_banner',
      'locked' => '1',
    ),
    'vs_event_festival_banner' => array(
      'name' => 'Event/Festival Banner',
      'bundle' => 'vs_event_festival_banner',
      'locked' => '1',
    ),
    'vs_package_card' => array(
      'name' => 'Package Card',
      'bundle' => 'vs_package_card',
      'locked' => '1',
    ),
    'vs_slide' => array(
      'name' => 'Slide',
      'bundle' => 'vs_slide',
      'locked' => '1',
    ),
    'vs_teaser' => array(
      'name' => 'Teaser',
      'bundle' => 'vs_teaser',
      'locked' => '1',
    ),
    'vs_ticket_card' => array(
      'name' => 'Ticket Card',
      'bundle' => 'vs_ticket_card',
      'locked' => '1',
    ),
    'vs_untimed_event_card' => array(
      'name' => 'Untimed Event Card',
      'bundle' => 'vs_untimed_event_card',
      'locked' => '1',
    ),
  );
  return $items;
}
