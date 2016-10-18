<?php

/**
 * @file
 * Contains VirginComponentHeroBannerBlock class
 */

/**
 * Class VirginComponentHeroBannerBlock
 */
class VirginComponentHeroBannerBlock implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_hero_banner_block';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_hero_banner_block';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
