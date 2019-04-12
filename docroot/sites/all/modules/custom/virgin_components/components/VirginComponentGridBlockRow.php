<?php

/**
 * @file
 * Contains VirginComponentNewsletter class
 */

/**
 * Class VirginComponentGridBlockRow
 */
class VirginComponentGridBlockRow implements VirginComponentsInterface {
  
  public function supports($entity_type, $bundle) {
    $supported = array('vs_grid_row', 'vs_grid_row_6');
    return $entity_type == 'paragraphs_item' && in_array($bundle, $supported);
  }
  
  public function themeSuggestion() {
    return 'virgin_components__p__vs_grid_row';
  }
  
  public function preProcess(&$variables) {

    if (empty($variables['elements']['#entity'])) {
      return;
    }

    $variables['p'] = $variables['elements']['#entity'];
    $virgin = new VirginEntityGrapher('paragraphs_item', $variables['p']);

    $variables['row_title'] = $virgin->fieldGetOne('title_field');
    $variables['row_description'] = $virgin->fieldGetOne('field_component_heading');
    $variables['grid_elements'] = $virgin->fieldRendered('field_team');
  }
}
