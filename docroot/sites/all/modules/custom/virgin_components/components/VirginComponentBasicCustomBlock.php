<?php

/**
 * @file
 * Contains VirginComponentBasicCustomBlock class
 */

/**
 * Class VirginComponentBasicCustomBlock
 */
class VirginComponentBasicCustomBlock implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_basic_content_block';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_basic_content_block';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
