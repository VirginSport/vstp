<?php

/**
 * @file
 * Contains VirginComponentCustomBanner class
 */

/**
 * Class VirginComponentCustomBanner
 */
class VirginComponentCustomBannerItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_custom_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_custom_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    if (empty($variables['elements']['#entity'])) {
        return;
    }

    $variables['p'] = $variables['elements']['#entity'];
    $virgin = new VirginEntityGrapher('paragraphs_item', $variables['p']);

    $variables['card_title'] = $virgin->fieldGetOne('title_field');
    $variables['card_description'] = $virgin->fieldRendered('field_description_short');
    $variables['hero_image_grapher'] = $virgin->relation('field_hero_image');
    $variables['hero_image_caption'] = $virgin->fieldGetOne('field_caption');
    $variables['cta_links'] = $virgin->fieldGetAll('field_cta_links');
    $variables['brand_color'] = $virgin->fieldGetOne('field_brand_color');
  }
}
