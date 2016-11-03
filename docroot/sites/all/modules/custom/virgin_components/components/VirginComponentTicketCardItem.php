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

    $ticket_grapher = $virgin->relation('field_ticket_reference');
    $variables['title'] = $ticket_grapher->fieldGetOne('title_field');
    $variables['description'] = $ticket_grapher->fieldRendered('field_description');
    $variables['card_color'] = $ticket_grapher->fieldGetOne('field_brand_color');
    $variables['card_pattern'] = $ticket_grapher->fieldGetOne('field_brand_pattern');
    $variables['price'] = $ticket_grapher->fieldGetOne('field_price', '', 'amount');
    $variables['currency'] = $ticket_grapher->fieldGetOne('field_price', '', 'currency');
    $variables['nid'] = $ticket_grapher->property('nid');

    $ticket_type_state_grapher = $ticket_grapher->relation('field_ticket_type_state');
    $ticket_level = $ticket_type_state_grapher->fieldGetOne('field_ticket_level');
    $ticket_level_properties = virgin_ticket_banner_properties();

    if (!empty($ticket_level_properties[$ticket_level])) {
      $ticket_properties = $ticket_level_properties[$ticket_level];

      switch ($ticket_properties['color']) {
        case 'gold':
          $class = 'vip';
          break;

        case 'festival':
          $class = 'hero';
          break;

        default:
          $class = 'pass';
      }

      $variables['ticket_properties'] = $ticket_properties;
      $variables['ticket_class'] = $class;
    }
  }
}
