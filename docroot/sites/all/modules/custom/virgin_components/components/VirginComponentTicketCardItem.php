<?php

/**
 * @file
 * Contains VirginComponentTicketCardItem class
 */

/**
 * Class VirginComponentTicketCardItem
 */
class VirginComponentTicketCardItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_ticket_card';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_ticket_card';
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

    $grapher = $virgin->relation('field_ticket_reference');
    $variables['title'] = $grapher->fieldGetOne('title_field');
    $variables['description'] = $grapher->fieldRendered('field_description');
    $variables['card_color'] = $grapher->fieldGetOne('field_brand_color');
    $variables['card_pattern'] = $grapher->fieldGetOne('field_brand_pattern');
    $variables['price'] = $grapher->fieldGetOne('field_price', '', 'amount');
    $variables['currency'] = $grapher->fieldGetOne('field_price', '', 'currency');
    $variables['nid'] = $grapher->property('nid');
  }
}
