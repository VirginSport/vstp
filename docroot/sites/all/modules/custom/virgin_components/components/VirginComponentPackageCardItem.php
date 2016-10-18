<?php

/**
 * @file
 * Contains VirginComponentPackageCardItem class
 */

/**
 * Class VirginComponentPackageCardItem
 */
class VirginComponentPackageCardItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_package_card';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_package_card';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
