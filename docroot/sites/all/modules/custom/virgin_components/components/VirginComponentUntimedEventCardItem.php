<?php

/**
 * @file
 * Contains VirginComponentUntimedEventCardItem class
 */

/**
 * Class VirginComponentUntimedEventCardItem
 */
class VirginComponentUntimedEventCardItem implements VirginComponentsInterface
{

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle)
  {
    return $entity_type == 'paragraphs_item' && $bundle == 'vs_untimed_event_card';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion()
  {
    return 'virgin_components__p__vs_untimed_event_card';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables)
  {
    if (empty($variables['elements']['#entity'])) {
      return;
    }

    $variables['p'] = $variables['elements']['#entity'];
    $virgin = new VirginEntityGrapher('paragraphs_item', $variables['p']);
    $event_grapher = $virgin->relation('field_untimed_event_reference');
    $event_state_grapher = $event_grapher->relation('field_event_state');
    $festival_state_grapher = $event_state_grapher->relation('field_festival_state');

    $query = db_select('node', 'n');
    $query->join('field_data_field_festival_state', 'fs', 'fs.field_festival_state_target_id = n.nid');
    $query->join('field_data_field_package_state', 'pkgs', 'pkgs.field_package_state_target_id = fs.entity_id');
    $query->join('node', 'pkg', 'pkg.nid = pkgs.entity_id');
    $query
      ->condition('n.nid', $festival_state_grapher->property('nid'), '=')
      ->condition('pkg.status', NODE_PUBLISHED, '=')
      ->condition('pkg.type', 'package', '=');

    $result = $query
      ->fields('pkg')
      ->range(0, 1)
      ->execute()
      ->fetchObject();

    $package = empty($result->nid) ? NULL : node_load($result->nid);
    $package_grapher = new VirginEntityGrapher('node', $package);

    $variables['package_price'] = $package_grapher->fieldGetOne('field_price', '', 'amount');
    $variables['package_currency'] = $package_grapher->fieldGetOne('field_price', '', 'currency');
  }
}
