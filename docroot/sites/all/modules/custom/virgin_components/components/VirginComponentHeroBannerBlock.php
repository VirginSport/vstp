<?php

/**
 * @file
 * Contains VirginComponentHeroBannerBlock class
 */

/**
 * Class VirginComponentHeroBannerBlock
 */
class VirginComponentHeroBannerBlock implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
    return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_hero_banner_block';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
    return 'virgin_components__fpp__vs_hero_banner_block';
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
    $variables['hero_banner_title'] = $virgin->fieldGetOne('title_field');
    $variables['hero_banner_subheading'] = $virgin->fieldGetOne('field_description');
    $variables['show_share'] = $virgin->fieldGetOne('field_has_share_button');
    $variables['hero_banner_image'] = $virgin->relation('field_hero_image');
    $variables['cta_links'] = $virgin->fieldGetAll('field_cta_links');
    $variables['apply_constraint'] = $virgin->fieldGetOne('field_constrained_width');
    $variables['vs_classes'] = $virgin->fieldGetOne('field_hero_banner_shorter') ? 'vs-hero-banner--small' : '';
  }
}
