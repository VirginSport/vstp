<?php

/**
 * @file
 * Contains VirginComponentNewsletter class
 */

/**
 * Class VirginComponentGrid
 */
class VirginComponentGrid implements VirginComponentsInterface {

  public function supports($entity_type, $bundle) {
    return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_grid';
  }

  public function themeSuggestion() {
    return 'virgin_components__fpp__vs_grid';
  }

  public function preProcess(&$variables) {
    // TODO: Implement preProcess() method.
  }
}
