<?php

/**
 * @file
 * virgin_base.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function virgin_base_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'scald_atom-image-field_alternative_text'.
  $field_instances['scald_atom-image-field_alternative_text'] = array(
    'bundle' => 'image',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'scald_atom',
    'field_name' => 'field_alternative_text',
    'label' => 'Alternative Text',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 32,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Alternative Text');

  return $field_instances;
}
