<?php

/**
 * @file
 * Contains VirginComponentPromotionalBanner class
 */

/**
 * Class VirginComponentPromationalBanner
 */
class VirginComponentPromotionalBanner implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_promo_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_promotional_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
