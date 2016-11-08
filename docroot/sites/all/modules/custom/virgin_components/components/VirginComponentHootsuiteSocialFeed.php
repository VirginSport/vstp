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
    if (empty($variables['elements']['#fieldable_panels_pane'])) {
      return;
    }

    $variables['fpp'] = $variables['elements']['#fieldable_panels_pane'];
    $virgin = new VirginEntityGrapher('fieldable_panels_pane', $variables['fpp']);

    $variables['title'] = $virgin->fieldGetOne('title_field');
    $variables['campaign_url'] = $virgin->fieldGetOne('field_hootsuite_campaign_url');
  }
}
