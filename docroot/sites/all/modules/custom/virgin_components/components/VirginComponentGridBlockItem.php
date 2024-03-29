<?php

/**
 * @file
 * Contains VirginComponentNewsletter class
 */

/**
 * Class VirginComponentGridBlockItem
 */
class VirginComponentGridBlockItem implements VirginComponentsInterface {
  
  public function supports($entity_type, $bundle) {
    return $entity_type == 'paragraphs_item' && $bundle == 'vs_team_members';
  }
  
  public function themeSuggestion() {
    return 'virgin_components__p__vs_grid';
  }
  
  public function preProcess(&$variables) {

    if (empty($variables['elements']['#entity'])) {
      return;
    }


    $p = $variables['elements']['#entity'];
    $virgin = new VirginEntityGrapher('paragraphs_item', $p);

    $host = $p->hostEntity();

    if ($host) {
      $variables['parent_bundle'] = $host->bundle();
    }

    $variables['p'] = $p;
    $variables['member_image'] = $virgin->relation('field_card_image');
    $variables['member_name'] = $virgin->fieldGetOne('title_field');
    $variables['member_description'] = $virgin->fieldGetOne('field_image_caption');
    $variables['member_link'] = $virgin->fieldGetAll('field_cta_link');
    $variables['image_link'] = $virgin->fieldGetOne('field_image_link','','url');
    $link_attributes = $virgin->fieldGetOne('field_image_link','','attributes');
    $variables['image_link__target'] = isset($link_attributes['target']) ? $link_attributes['target'] : '';
  }
}
