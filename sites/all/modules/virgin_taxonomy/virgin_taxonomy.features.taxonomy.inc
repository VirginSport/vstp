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
