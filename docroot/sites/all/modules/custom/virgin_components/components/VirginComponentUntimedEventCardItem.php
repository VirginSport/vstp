<?php

/**
 * @file
 * Contains VirginComponentUntimedEventCardItem class
 */

/**
 * Class VirginComponentUntimedEventCardItem
 */
class VirginComponentUntimedEventCardItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
    return $entity_type == 'paragraphs_item' && $bundle == 'vs_untimed_event_card';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
    return 'virgin_components__p__vs_untimed_event_card';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    if (empty($variables['elements']['#entity'])) {
      return;
    }

    $variables['p'] = $variables['elements']['#entity'];
    $paragraph_grapher = new VirginEntityGrapher('paragraphs_item', $variables['p']);
    $event_grapher = $paragraph_grapher->relation('field_untimed_event_reference');
    $event_state_grapher = $event_grapher->relation('field_event_state');
    $festival_state_grapher = $event_state_grapher->relation('field_festival_state');

    // Gets the festival related with the event

    $query = db_select('node', 'n');
    $query->join('field_data_field_festival_state', 'fs', 'fs.field_festival_state_target_id = n.nid');
    $query->join('node', 'f', 'f.nid = fs.entity_id');
    $query
      ->condition('n.nid', $festival_state_grapher->property('nid'), '=')
      ->condition('f.status', NODE_PUBLISHED, '=')
      ->condition('f.type', 'festival', '=');

    $result = $query
      ->fields('f', array('nid'))
      ->range(0, 1)
      ->execute()
      ->fetchObject();

    $festival = empty($result->nid) ? NULL : node_load($result->nid);  //loads the festival
    $festival_grapher = new VirginEntityGrapher('node', $festival);

    $start_date = $event_state_grapher->fieldGetOne('field_start_date');
    $timezone = $event_state_grapher->fieldGetOne('field_timezone');

    $variables['title'] = $event_grapher->fieldGetOne('title_field');
    $variables['description'] = $event_grapher->fieldRendered('field_description');
    $variables['card_image'] = $event_grapher->relation('field_card_image');
    $variables['card_pattern'] = $event_grapher->fieldGetOne('field_brand_pattern');
    $variables['brand_color'] = $event_grapher->fieldGetOne('field_brand_color');
    $variables['start_date'] = virgin_date($start_date, $timezone)->format('d M');
    $variables['festival_id'] = $festival_grapher->property('nid');
    $price = $paragraph_grapher->fieldGetOne('field_price', '', 'amount');
    $variables['event_price'] = $price;
    $variables['event_currency'] = $paragraph_grapher->fieldGetOne('field_price', '', 'currency');
    $variables['no_card_pattern_class'] = ($variables['card_pattern'] == 'none') ? 'vs-card-untimed-event--outline-remove' : '';
    $variables['ticket_hostname'] = $this->getTicketHostname($festival_grapher->property('nid'));

    $products = array(
      'name' => $event_grapher->property('title'),
      'id' => $event_state_grapher->fieldGetOne('field_attendly_id'),
      'price' => $price,
      'brand' => $festival_grapher->property('title'),
      'category' => $event_state_grapher->fieldGetOne('field_event_type'),
      'variant' => $event_grapher->property('title'),
    );

    $variables['products'] = drupal_json_encode(array($products));
  }

  /**
   * Gets the hostname of the region this ticket belongs to
   *
   * @param int $festival_nid
   *  The NID of the festival
   * @return string
   *  The hostname of the region this ticket belongs to
   */
  protected function getTicketHostname($festival_nid) {
    $sql = "
      SELECT h.field_hostname_value as hostname
      FROM {field_data_field_region} r
      JOIN {field_data_field_hostname} h
        ON h.entity_id = r.field_region_target_id
        AND h.bundle = 'region'
      WHERE r.bundle = 'festival'
      AND r.entity_id = :nid
    ";

    return db_query($sql, array(':nid' => $festival_nid))->fetchField();
  }
}
