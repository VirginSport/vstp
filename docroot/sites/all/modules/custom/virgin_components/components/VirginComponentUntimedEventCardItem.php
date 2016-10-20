<?php

/**
 * @file
 * Contains VirginComponentUntimedEventCardItem class
 */

/**
 * Class VirginComponentUntimedEventCardItem
 */
class VirginComponentUntimedEventCardItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_untimed_event_card';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_untimed_event_card';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
