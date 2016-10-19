<?php

/**
 * @file
 * Contains VirginComponentCTABlockItem class
 */

/**
 * Class VirginComponentCTABlockItem
 */
class VirginComponentCTABlockItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_cta_block';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_cta_block';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    $variables['p'] = $variables['elements']['#entity'];
    $virgin = new VirginEntityGrapher('paragraphs_item', $variables['p']);
    $variables['title'] = $virgin->fieldGetOne('title_field');
    $variables['description'] = $virgin->fieldRendered('field_description_short');
    $variables['cta_type'] = $virgin->fieldGetOne('field_cta_type');
    $variables['card_image'] = $virgin->relation('field_cta_card_image');
    $variables['image_effect'] = $virgin->fieldGetOne('field_image_effect');
  }
}
