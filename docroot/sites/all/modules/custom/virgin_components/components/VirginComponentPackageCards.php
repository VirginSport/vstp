<?php

/**
 * @file
 * Contains VirginComponentPackageCards class
 */

/**
 * Class VirginComponentPackageCards
 */
class VirginComponentPackageCards implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_package_cards';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_package_cards';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
