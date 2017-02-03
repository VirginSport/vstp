<?php

/**
 * @file
 * Contains VirginComponentPromotionalBanner class
 */

/**
 * Class VirginComponentPromationalBanner
 */
class VirginComponentPromotionalBanner implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_promo_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_promotional_banner';
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

    $variables['component_heading'] = $virgin->fieldGetOne('field_component_heading');
    $variables['promo_banners'] = $virgin->fieldRendered('field_promo_banners');
    $variables['apply_constraint'] = $virgin->fieldGetOne('field_constrained_width');
  }
}
