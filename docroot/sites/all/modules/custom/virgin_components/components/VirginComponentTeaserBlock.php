<?php

/**
 * @file
 * Contains VirginComponentTeaserBlock class
 */

/**
 * Class VirginComponentTeaserBlock
 */
class VirginComponentTeaserBlock implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_teaser_block';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_teaser_block';
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
    $variables['paragraphs'] = $virgin->fieldRendered('field_teasers');
    $variables['hero_banner_image'] = $virgin->relation('field_hero_image');
  }
}
