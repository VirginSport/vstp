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
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_hero_event_card';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_hero_event_card';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
