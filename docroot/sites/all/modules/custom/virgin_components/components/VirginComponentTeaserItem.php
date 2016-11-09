<?php

/**
 * @file
 * Contains VirginComponentTeaserItem class
 */

/**
 * Class VirginComponentTeaserItem
 */
class VirginComponentTeaserItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_teaser';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_teaser';
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
    $variables['title'] = $virgin->fieldGetOne('title_field');
    $variables['body'] = $virgin->fieldRendered('field_body');
    $variables['teaser_images'] = $virgin->fieldGetAll('field_card_images');
    $variables['arrangement'] = $virgin->fieldGetOne('field_teaser_layout');
    $variables['outline'] = $virgin->fieldGetOne('field_outline_title');
    $variables['alignment'] = $virgin->fieldGetOne('field_alignment');
    $variables['cta_links'] = $virgin->fieldGetAll('field_cta_links');
  }
}
