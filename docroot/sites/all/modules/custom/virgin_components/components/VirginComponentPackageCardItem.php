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
    $package_state_graper = $package_grapher->relation('field_package_state');

    $variables['package_title'] = $package_grapher->fieldGetOne('title_field');
    $variables['package_description'] = $package_grapher->fieldRendered('field_description');
    $variables['card_image'] = $package_grapher->relation('field_card_image');
    $variables['card_color'] = $package_grapher->fieldGetOne('field_brand_color');
    $variables['card_pattern'] = $package_grapher->fieldGetOne('field_brand_pattern');
    $variables['package_price'] = $package_grapher->fieldGetOne('field_price', '', 'amount');
    $variables['package_currency'] = $package_grapher->fieldGetOne('field_price', '', 'currency');
    $variables['package_nid'] = $package_grapher->property('nid');
    $variables['festival_nid'] = $this->getFestivalNID($package_state_graper->property('nid'));
  }

  /**
   * Gets the NID of the festival related to this package
   *
   * @param int $package_state_nid
   *  The NID of the package state
   * @return string
   *  The NID of the festival this package belongs to
   */
  protected function getFestivalNID($package_state_nid) {
    $sql = "
      SELECT f2.entity_id
      FROM field_data_field_festival_state f1
      JOIN field_data_field_festival_state f2
        ON f2.field_festival_state_target_id = f1.field_festival_state_target_id
        AND f2.bundle = 'festival'
      WHERE f1.bundle = 'package_state'
        AND f1.entity_id = :nid
    ";

    return db_query($sql, array(':nid' => $package_state_nid))->fetchField();
  }
}
