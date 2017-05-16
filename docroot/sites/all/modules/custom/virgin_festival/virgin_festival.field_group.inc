<?php
/**
 * @file
 * virgin_festival.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function virgin_festival_field_group_info() {
  $field_groups = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_call_to_action|node|festival|form';
  $field_group->group_name = 'group_call_to_action';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'festival';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_past_state';
  $field_group->data = array(
    'label' => 'Call To action',
    'weight' => '6',
    'children' => array(
      0 => 'field_cta_link',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-call-to-action field-group-fieldset',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_call_to_action|node|festival|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_global|node|festival|form';
  $field_group->group_name = 'group_global';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'festival';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_tabs';
  $field_group->data = array(
    'label' => 'Global',
    'weight' => '12',
    'children' => array(
      0 => 'field_brand_color',
      1 => 'field_brand_pattern',
      2 => 'field_description',
      3 => 'field_hashtag',
      4 => 'field_header_image',
      5 => 'field_region',
      6 => 'field_status',
      7 => 'title_field',
      8 => 'field_logo',
      9 => 'field_alert',
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
  $field_groups['group_global|node|festival|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = TRUE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_menu_tab|node|festival|form';
  $field_group->group_name = 'group_menu_tab';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'festival';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Menu',
    'weight' => '20',
    'children' => array(
      0 => 'group_menu',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Menu',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-menu-tab field-group-tab',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $field_groups['group_menu_tab|node|festival|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_menu|node|festival|form';
  $field_group->group_name = 'group_menu';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'festival';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_tabs';
  $field_group->data = array(
    'label' => 'Menu',
    'weight' => '13',
    'children' => array(
      0 => 'field_links',
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
  $field_groups['group_menu|node|festival|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_past_state|node|festival|form';
  $field_group->group_name = 'group_past_state';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'festival';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_tabs';
  $field_group->data = array(
    'label' => 'Past State',
    'weight' => '14',
    'children' => array(
      0 => 'field_card_image_past',
      1 => 'field_description_short_past',
      2 => 'field_replay_url',
      3 => 'field_results_url',
      4 => 'field_review_url',
      5 => 'group_call_to_action',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-past-state field-group-htab',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_past_state|node|festival|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_results|node|festival|form';
  $field_group->group_name = 'group_results';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'festival';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_tabs';
  $field_group->data = array(
    'label' => 'Results',
    'weight' => '15',
    'children' => array(
      0 => 'field_caption',
      1 => 'field_card_image_results',
      2 => 'field_description_results',
      3 => 'field_hero_image_results',
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
  $field_groups['group_results|node|festival|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_tabs|node|festival|form';
  $field_group->group_name = 'group_tabs';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'festival';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Tabs',
    'weight' => '0',
    'children' => array(
      0 => 'group_global',
      1 => 'group_menu',
      2 => 'group_past_state',
      3 => 'group_results',
      4 => 'group_upcoming_state',
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
  $field_groups['group_tabs|node|festival|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_upcoming_state|node|festival|form';
  $field_group->group_name = 'group_upcoming_state';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'festival';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_tabs';
  $field_group->data = array(
    'label' => 'Upcoming State',
    'weight' => '13',
    'children' => array(
      0 => 'field_card_image',
      1 => 'field_description_short',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-upcoming-state field-group-htab',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_upcoming_state|node|festival|form'] = $field_group;

  // Translatables
  // Included for use with string extractors like potx.
  t('Call To action');
  t('Global');
  t('Menu');
  t('Past State');
  t('Results');
  t('Tabs');
  t('Upcoming State');

  return $field_groups;
}
