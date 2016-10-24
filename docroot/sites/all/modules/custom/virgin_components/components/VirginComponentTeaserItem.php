<?php

/**
 * @file
 * Contains VirginComponentTeaserItem class
 */

/**
 * Class VirginComponentTeaserItem
 */
class VirginComponentTeaserItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_teaser';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_teaser';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    $x=0;
  }
}
