<?php

/**
 * @file
 * Contains VirginComponentEventFestivalBannerItem class
 */

/**
 * Class VirginComponentEventFestivalBannerItem
 */
class VirginComponentEventFestivalBannerItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_event_festival_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_event_festival_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
