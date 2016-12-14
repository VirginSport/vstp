<?php

/**
 * @file
 * Contains VirginComponentEventFestivalBannerItem class
 */

/**
 * Class VirginComponentEventFestivalBannerItem
 */
class VirginComponentEventFestivalBannerItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_event_festival_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_event_festival_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    if (empty($variables['elements']['#entity'])) {
      return;
    }

    // TODO update labels for each state
    $status_labels = array(
      'announced' => t('Learn More'),
      'in-progress' => t('Learn More'),
      'open' => t('Learn More'),
      'closed' => t('Learn More'),
      'over' => t('Learn More')
    );

    $variables['p'] = $variables['elements']['#entity'];
    $virgin = new VirginEntityGrapher('paragraphs_item', $variables['p']);

    $node_grapher = $virgin->relation('field_festival_event_reference');
    $hero_image_grapher = $node_grapher->relation('field_header_image');

    // In case we're rendering a promo banner for an event and the
    // event does not have a header image, fallback to the festival
    // header image where this event is taking place.
    if (
      $node_grapher->property('type') == 'event' &&
      $hero_image_grapher->getEntityType() != 'scald_atom'
    ) {
      $festival_grapher = $this->getEventFestival($node_grapher->property('nid'));

      if ($festival_grapher) {
        $hero_image_grapher = $festival_grapher->relation('field_header_image');
      }
    }

    $variables['node_grapher'] = $node_grapher;
    $variables['card_title'] = $node_grapher->fieldGetOne('title_field');
    $variables['card_description'] = $node_grapher->fieldRendered('field_description');
    $variables['hero_image_grapher'] = $hero_image_grapher;
    $variables['hero_image_caption'] = $node_grapher->fieldGetOne('field_caption');
    $variables['hashtag'] = $node_grapher->fieldGetOne('field_hashtag');
    $variables['brand_color'] = $node_grapher->fieldGetOne('field_brand_color');

    if (!empty($node_grapher->fieldGetOne('field_event_status'))) {
      $event_status = $node_grapher->fieldGetOne('field_event_status');
      $variables['cta_label'] = empty($status_labels[$event_status]) ? '' : $status_labels[$event_status];
    }

    if (!empty($node_grapher->fieldGetOne('field_status'))) {
      $festival_status = $node_grapher->fieldGetOne('field_status');
      $variables['cta_label'] = empty($status_labels[$festival_status]) ? '' : $status_labels[$festival_status];
    }
  }

  /**
   * Fetch a grapher object containing the festival related to the given
   * event ID
   *
   * @param $event_nid
   *  The event node ID
   * @return \VirginEntityGrapher|NULL
   *  A grapher containing the festival, or NULL if no related festival could
   *  be found.
   */
  protected function getEventFestival($event_nid) {
    $sql = "
        SELECT fs2.entity_id AS festival_nid
        FROM {field_data_field_event_state} es
        JOIN {field_data_field_festival_state} fs1
          ON fs1.entity_id = es.field_event_state_target_id
          AND fs1.entity_type = 'node'
          AND fs1.bundle = 'event_state'
        JOIN {field_data_field_festival_state} fs2
          ON fs2.field_festival_state_target_id = fs1.field_festival_state_target_id
          AND fs2.bundle = 'festival'
        WHERE es.entity_id = :id
        LIMIT 1
      ";

    $result = db_query($sql, array(':id' => $event_nid));
    $festival_nid = $result->fetchField();

    if (empty($festival_nid)) {
      return NULL;
    }

    return new VirginEntityGrapher('node', node_load($festival_nid));
  }
}
