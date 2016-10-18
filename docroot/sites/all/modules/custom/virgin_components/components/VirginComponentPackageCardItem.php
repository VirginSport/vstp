<?php

/**
 * @file
 * Contains VirginComponentPackageCardItem class
 */

/**
 * Class VirginComponentPackageCardItem
 */
class VirginComponentPackageCardItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_package_card';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_package_card';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {

    $variables['p'] = $variables['paragraphs_item'];
    $virgin = new VirginEntityGrapher('paragraphs_item', $variables['p']);

    $variables['title'] = $virgin->fieldGetOne('title_field');
    $variables['description'] = $virgin->fieldRendered('field_description');
    $event_grapher = $virgin->relation('field_package_reference');

    $variables['event_title'] = $event_grapher->fieldGetOne('title_field');
    $variables['event_description'] = $event_grapher->fieldRendered('field_description');
    $variables['event_image'] = $event_grapher->relation('field_card_image');

  }
}
