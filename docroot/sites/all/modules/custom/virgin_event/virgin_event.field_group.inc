<?php
/**
 * @file
 * virgin_event.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function virgin_event_field_group_info() {
  $field_groups = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_global|node|event|form';
  $field_group->group_name = 'group_global';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_tabs';
  $field_group->data = array(
    'label' => 'Global',
    'weight' => '20',
    'children' => array(
      0 => 'field_brand_color',
      1 => 'field_brand_pattern',
      2 => 'field_caption',
      3 => 'field_card_image',
      4 => 'field_description',
      5 => 'field_event_state',
      6 => 'field_event_status',
      7 => 'field_gameface_id',
      8 => 'field_hashtag',
      9 => 'field_header_image',
      10 => 'field_mylaps_id',
      11 => 'title_field',
      12 => 'field_logo',
      13 => 'field_show_in_festival_menu',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-global field-group-htab',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_global|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_results|node|event|form';
  $field_group->group_name = 'group_results';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_tabs';
  $field_group->data = array(
    'label' => 'Results',
    'weight' => '21',
    'children' => array(
      0 => 'field_description_results',
      1 => 'field_results_summary',
      2 => 'field_results_overview_content',
      3 => 'field_results_overview_image',
      4 => 'field_results_url',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-results field-group-htab',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_results|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_tabs|node|event|form';
  $field_group->group_name = 'group_tabs';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Tabs',
    'weight' => '0',
    'children' => array(
      0 => 'group_global',
      1 => 'group_results',
    ),
    'format_type' => 'htabs',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => 'group-tabs field-group-htabs',
        'id' => '',
      ),
    ),
  );
  $field_groups['group_tabs|node|event|form'] = $field_group;

  // Translatables
  // Included for use with string extractors like potx.
  t('Global');
  t('Results');
  t('Tabs');

  return $field_groups;
}
