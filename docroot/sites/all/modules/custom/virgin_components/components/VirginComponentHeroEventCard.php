<?php

/**
 * @file
 * Contains VirginComponentHeroEventCard class
 */

/**
 * Class VirginComponentHeroEventCard
 */
class VirginComponentHeroEventCard implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
    // TODO
    return '';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
