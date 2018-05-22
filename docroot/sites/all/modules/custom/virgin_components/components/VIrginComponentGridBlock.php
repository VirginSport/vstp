<?php

/**
 * @file
 * Contains VirginComponentNewsletter class
 */

/**
 * Class VirginComponentGrid
 */
class VIrginComponentGridBlock implements VirginComponentsInterface {
  
  public function supports($entity_type, $bundle) {
    return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_grid';
  }
  
  public function themeSuggestion() {
    return 'virgin_components__fpp__vs_grid';
  }
  
  public function preProcess(&$variables) {

    if (empty($variables['elements']['#fieldable_panels_pane'])) {
      return;
    }

    $variables['fpp'] = $variables['elements']['#fieldable_panels_pane'];
    $virgin = new VirginEntityGrapher('fieldable_panels_pane', $variables['fpp']);

    $variables['heading_title'] = $virgin->fieldGetOne('field_component_heading');
    $variables['heading_description'] = $virgin->fieldGetOne('field_page_body');
    $variables['paragraphs'] = $virgin->fieldRendered('field_team');
  }
}
