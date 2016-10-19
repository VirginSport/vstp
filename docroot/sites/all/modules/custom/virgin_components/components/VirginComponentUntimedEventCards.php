<?php

/**
 * @file
 * Contains VirginComponentUntimedEventCards class
 */

/**
 * Class VirginComponentUntimedEventCards
 */
class VirginComponentUntimedEventCards implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_untimed_event_cards';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_untimed_event_cards';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
