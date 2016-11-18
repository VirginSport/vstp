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
}
