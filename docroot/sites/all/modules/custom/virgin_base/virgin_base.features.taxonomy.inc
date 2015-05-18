<?php
/**
 * @file
 * virgin_base.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function virgin_base_taxonomy_default_vocabularies() {
  return array(
    'event_type' => array(
      'name' => 'Event Type',
      'machine_name' => 'event_type',
      'description' => 'This vocabulary is used to identify different types of Events',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}
