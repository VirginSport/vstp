<?php

/**
 * @file
 * Contains VirginComponentAccordion class
 */

/**
 * Class VirginComponentAccordion
 */
class VirginComponentAccordion implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
    return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_accordion';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
    return 'virgin_components__fpp__vs_accordion';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
