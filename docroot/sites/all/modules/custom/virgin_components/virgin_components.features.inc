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
    'vs_grid_row' => array(
      'name' => 'Grid Row',
      'bundle' => 'vs_grid_row',
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
    'vs_team_members' => array(
      'name' => 'Grid Element',
      'bundle' => 'vs_team_members',
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
