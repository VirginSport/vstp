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
    $variables['cta_copy'] = $virgin->fieldGetOne('field_cta_copy', t('Get Passes'));
    $variables['cta_ticket_link'] = $virgin->fieldRendered('field_cta_ticket_link');

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
      $variables['ticket_level'] = $ticket_level;
      $variables['ticket_hostname'] = $this->getTicketHostname($ticket_type_state_grapher->property('nid'));

      $event_nid = $this->getEventNID($ticket_type_state_grapher->property('nid'));
      $event_grapher = new VirginEntityGrapher('node', node_load($event_nid));
      $event_state_grapher = $event_grapher->relation('field_event_state');

      $festival_grapher = virgin_base_event_festival($event_grapher->property('nid'));
      $variables['festival_nid'] = $festival_grapher->property('nid');

      $products = array(
        'name' => $event_grapher->property('title'),
        'id' => $event_state_grapher->fieldGetOne('field_attendly_id'),
        'category' => $event_state_grapher->fieldGetOne('field_event_type'),
        'price' => $ticket_grapher->fieldGetOne('field_price', '', 'amount'),
        'brand' => $festival_grapher->property('title'),
        'variant' => $event_grapher->property('title'),
        'dimension6' => $ticket_level
      );

      $variables['products'] = drupal_json_encode(array($products));
    }
  }

  /**
   * Gets the hostname of the region this ticket belongs to
   *
   * @param int $ticket_type_state_nid
   *  The NID of the ticket type state
   * @return string
   *  The hostname of the region this ticket belongs to
   */
  protected function getTicketHostname($ticket_type_state_nid) {
    $sql = "
      SELECT h.field_hostname_value as hostname
      FROM {field_data_field_event_state} e
      JOIN {field_data_field_festival_state} f1
        ON f1.entity_id = e.field_event_state_target_id
      JOIN {field_data_field_festival_state} f2
        ON f2.field_festival_state_target_id = f1.field_festival_state_target_id
        AND f2.bundle = 'festival'
      JOIN {field_data_field_region} r
        ON r.entity_id = f2.entity_id
        AND r.bundle = 'festival'
      JOIN {field_data_field_hostname} h
        ON h.entity_id = r.field_region_target_id
        AND h.bundle = 'region'
      WHERE e.bundle = 'ticket_type_state'
        AND e.entity_id = :nid
    ";

    return db_query($sql, array(':nid' => $ticket_type_state_nid))->fetchField();
  }

  /**
   * Gets the NID of the event related to this ticket type
   *
   * @param int $ticket_type_state_nid
   *  The NID of the ticket type state
   * @return string
   *  The NID of the event this ticket type belongs to
   */
  protected function getEventNID($ticket_type_state_nid) {
    $sql = "
      SELECT ev.entity_id
      FROM field_data_field_event_state e
      JOIN field_data_field_event_state ev
        ON ev.field_event_state_target_id = e.field_event_state_target_id
      WHERE e.bundle = 'ticket_type_state'
        AND ev.bundle = 'event'
        AND e.entity_id = :nid
    ";

    return db_query($sql, array(':nid' => $ticket_type_state_nid))->fetchField();
  }
}
