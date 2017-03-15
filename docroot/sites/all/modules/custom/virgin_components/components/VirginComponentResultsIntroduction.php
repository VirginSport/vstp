<?php

/**
 * @file
 * Contains VirginComponentResultsIntroduction class
 */

/**
 * Class VirginComponentResultsIntroduction
 */
class VirginComponentResultsIntroduction implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_results_introduction';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_results_introduction';
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

    $fg = $virgin->relation('field_festival_reference');
    $variables['atom'] = $fg->relation('field_hero_image_results');
    $variables['title'] = $fg->fieldGetOne('title_field');
    $variables['brand_color'] = $fg->fieldGetOne('field_brand_color');
    $variables['description'] = $fg->fieldRendered('field_description_results');
    $variables['cta_links'] = $virgin->fieldGetAll('field_cta_links');
  }
}
