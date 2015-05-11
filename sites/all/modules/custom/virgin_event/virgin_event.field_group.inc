<?php
/**
 * @file
 * virgin_event.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function virgin_event_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_charities|node|event|form';
  $field_group->group_name = 'group_charities';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Charities',
    'weight' => '24',
    'children' => array(),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Charities',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-charities field-group-fieldset ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_charities|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_course|node|event|form';
  $field_group->group_name = 'group_course';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Course',
    'weight' => '20',
    'children' => array(
      0 => 'field_course_image',
      1 => 'field_course_link',
      2 => 'field_course_file',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Course',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-course field-group-fieldset ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_course|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_food|node|event|form';
  $field_group->group_name = 'group_food';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Food',
    'weight' => '17',
    'children' => array(
      0 => 'field_food_title',
      1 => 'field_food_description',
      2 => 'field_food_image',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Food',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-food field-group-fieldset ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_food|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_inspiration|node|event|form';
  $field_group->group_name = 'group_inspiration';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Inspiration',
    'weight' => '14',
    'children' => array(
      0 => 'field_inspiration_title',
      1 => 'field_inspiration_description',
      2 => 'field_inspiration_image',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Inspiration',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-inspiration field-group-fieldset ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_inspiration|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_music|node|event|form';
  $field_group->group_name = 'group_music';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Music',
    'weight' => '18',
    'children' => array(
      0 => 'field_music',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Music',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-music field-group-fieldset ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_music|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_pricing|node|event|form';
  $field_group->group_name = 'group_pricing';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Pricing',
    'weight' => '22',
    'children' => array(
      0 => 'field_pricing',
      1 => 'field_volunteer_link',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Pricing',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-pricing field-group-fieldset ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_pricing|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_race|node|event|form';
  $field_group->group_name = 'group_race';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Race Information',
    'weight' => '16',
    'children' => array(
      0 => 'field_race_tips',
      1 => 'field_race_schedule',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Race Information',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-race field-group-fieldset ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_race|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_spectators|node|event|form';
  $field_group->group_name = 'group_spectators';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Spectators',
    'weight' => '15',
    'children' => array(
      0 => 'field_spectators_title',
      1 => 'field_spectators_description',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Spectators',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-spectators field-group-fieldset ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_spectators|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_sponsors|node|event|form';
  $field_group->group_name = 'group_sponsors';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Sponsors',
    'weight' => '25',
    'children' => array(),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Sponsors',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-sponsors field-group-fieldset ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_sponsors|node|event|form'] = $field_group;

  return $export;
}
