<?php

/**
 * @file
 * Contains VirginComponentBasicCustomBlock class
 */

/**
 * Class VirginComponentBasicCustomBlock
 */
class VirginComponentBasicContentBlock implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_basic_content_block';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_basic_content_block';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    if (empty($variables['elements']['#fieldable_panels_pane'])) {
      return;
    }

    $variables['fpp'] = $variables['elements']['#fieldable_panels_pane'];
    $virgin = new VirginEntityGrapher('fieldable_panels_pane', $variables['fpp']);

    // The related fields of basic content block
    $variables['component_heading'] = $virgin->fieldGetOne('field_component_heading');
    $variables['scrollable_image'] = $virgin->relation('field_scrollable_image');
    $variables['hero_image_grapher'] = $virgin->relation('field_hero_image');
    $variables['hero_image_title'] = $virgin->fieldGetOne('field_hero_image_title');
    $variables['hero_image_size'] = $virgin->fieldGetOne('field_hero_image_size');
    $variables['content_align_to'] = $virgin->fieldGetOne('field_content_align_to');
    $variables['content_heading'] = $virgin->fieldGetOne('field_content_heading');
    $variables['content_sub_heading'] = $virgin->fieldGetOne('field_content_subheading');
    $variables['page_body'] = $virgin->fieldGetOne('field_page_body');
    $variables['cta_links'] = $virgin->fieldGetAll('field_cta_links');
  }
}
