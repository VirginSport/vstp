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
  $field_group->identifier = 'group_cta|node|event|form';
  $field_group->group_name = 'group_cta';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_tabs';
  $field_group->data = array(
    'label' => 'CTA',
    'weight' => '14',
    'children' => array(
      0 => 'field_cta_link_announced',
      1 => 'field_cta_link_in_progress',
      2 => 'field_cta_link_open',
      3 => 'field_cta_link_over',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-cta field-group-htab',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_cta|node|event|form'] = $field_group;

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
    'weight' => '13',
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
      11 => 'field_show_in_festival_menu',
      12 => 'title_field',
      13 => 'field_logo',
      14 => 'field_show_time',
      15 => 'field_hide_event_dates',
      16 => 'field_hide_dates',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
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
    'weight' => '15',
    'children' => array(
      0 => 'field_description_results',
      1 => 'field_gameface_url',
      2 => 'field_results_overview_content',
      3 => 'field_results_overview_image',
      4 => 'field_results_summary',
      5 => 'field_results_url',
      6 => 'field_replay_url',
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
      0 => 'group_cta',
      1 => 'group_global',
      2 => 'group_results',
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
  t('CTA');
  t('Global');
  t('Results');
  t('Tabs');

  return $field_groups;
}
