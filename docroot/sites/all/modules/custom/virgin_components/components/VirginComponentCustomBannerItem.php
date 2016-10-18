<?php

/**
 * @file
 * Contains VirginComponentCustomBanner class
 */

/**
 * Class VirginComponentCustomBanner
 */
class VirginComponentCustomBannerItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_custom_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_custom_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
