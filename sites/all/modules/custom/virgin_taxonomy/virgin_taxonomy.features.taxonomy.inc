<?php
/**
 * @file
 * virgin_taxonomy.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function virgin_taxonomy_taxonomy_default_vocabularies() {
  return array(
    'event_flag' => array(
      'name' => 'Event Flag',
      'machine_name' => 'event_flag',
      'description' => 'This vocabulary is used to identify the flag of an Event. An example would be "Vitality Run Series"',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'event_type' => array(
      'name' => 'Event Type',
      'machine_name' => 'event_type',
      'description' => 'This vocabulary is used to identify different types of Events',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'target_audience' => array(
      'name' => 'Target Audience',
      'machine_name' => 'target_audience',
      'description' => 'This vocabulary is used to identify content target audiences',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}
