<?php

/**
 * @file
 * Contains VirginComponentHootsuiteSocialFeed class
 */

/**
 * Class VirginComponentHootsuiteSocialFeed
 */
class VirginComponentHootsuiteSocialFeed implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_hootsuite_feed';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_hootsuite_social_feed';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
