<?php

/**
 * @file
 * Contains VirginComponentTeaserBlock class
 */

/**
 * Class VirginComponentTeaserBlock
 */
class VirginComponentTeaserBlock implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_teaser_block';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_teaser_block';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    $x = 0;
  }
}
