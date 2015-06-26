<?php
/**
 * @file
 * virgin_home.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function virgin_home_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_container|node|home_page|form';
  $field_group->group_name = 'group_container';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'home_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Container',
    'weight' => '1',
    'children' => array(
      0 => 'group_text',
    ),
    'format_type' => 'htabs',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => 'group-container field-group-htabs ',
      ),
    ),
  );
  $export['group_container|node|home_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_text|node|home_page|form';
  $field_group->group_name = 'group_text';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'home_page';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_container';
  $field_group->data = array(
    'label' => 'Text Module',
    'weight' => '43',
    'children' => array(
      0 => 'field_hp_text_title',
      1 => 'field_hp_text_description',
      2 => 'field_hp_text_link',
      3 => 'field_hp_text_images',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-text field-group-htab ',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_text|node|home_page|form'] = $field_group;

  return $export;
}
