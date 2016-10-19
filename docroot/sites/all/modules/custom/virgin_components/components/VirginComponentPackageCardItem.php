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
    if (empty($variables['elements']['#entity'])) {
      return;
    }

    $variables['p'] = $variables['elements']['#entity'];
    $virgin = new VirginEntityGrapher('paragraphs_item', $variables['p']);

    $variables['title'] = $virgin->fieldGetOne('title_field');
    $variables['description'] = $virgin->fieldRendered('field_description');
    $package_grapher = $virgin->relation('field_package_reference');

    $variables['package_title'] = $package_grapher->fieldGetOne('title_field');
    $variables['package_description'] = $package_grapher->fieldRendered('field_description');
    $variables['card_image'] = $package_grapher->relation('field_card_image');
    $variables['package_price'] = $package_grapher->fieldGetOne('field_price', '', 'amount');
    $variables['package_currency'] = $package_grapher->fieldGetOne('field_price', '', 'currency');
    $variables['package_nid'] = $package_grapher->property('nid');
  }
}
