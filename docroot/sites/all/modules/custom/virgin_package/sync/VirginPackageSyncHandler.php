<?php
/**
 * @file
 * Contains the VirginPackageSyncHandler class
 */

/**
 * Class VirginPackageSyncHandler
 *
 * Syncs package data from SugarCRM to Drupal
 */
class VirginPackageSyncHandler implements VirginSyncSugarHandlerInterface {

  /**
   * {@inheritdoc}
   */
  public function bean() {
    return 'Packages';
  }

  /**
   * {@inheritdoc}
   */
  public function exists($external_id) {
    $q = new EntityFieldQuery();

    $result = $q
      ->entityCondition('entity_type', 'node')
      ->entityCondition('bundle', 'package_state')
      ->fieldCondition('field_sugar_id', 'value', $external_id)
      ->range(0,1)
      ->execute()
    ;

    return isset($result['node']);
  }

  /**
   * {@inheritdoc}
   */
  public function create(VirginGrapher $g, $external_id) {

    // Prepare the state and presentational entities
    $state = new stdClass();
    $package = new stdClass();

    $state->type = 'package_state';
    $package->type = 'package';

    node_object_prepare($state);
    node_object_prepare($package);

    // Map the state fields save the node
    $this->applyStateFields($g, $state);
    node_save($state);

    // Map the presentational fields and save the node
    $this->applyPackageFields($g, $package, $state);
    node_save($package);
  }

  /**
   * {@inheritdoc}
   */
  public function update(VirginGrapher $g, $external_id) {
    $state = $this->getNode('package_state', $external_id);

    if ($state) {
      $this->applyStateFields($g, $state);
      node_save($state);
    }
  }

  /**
   * Applies the grapher fields to the state node
   *
   * @param \VirginGrapher $g
   *  The grapher object
   * @param stdClass $node
   *  The state node
   * @return stdClass
   *  The state node
   */
  protected function applyStateFields(VirginGrapher $g, $node) {
    $w = entity_metadata_wrapper('node', $node);

    // Map fields that are available in the grapher
    $fields = array(
      'title' => $g->get('name')->value(),
      'title_field' => $g->get('name')->value(),
      'field_sugar_id' => $g->get('id')->value(),
      'field_attendly_id' => $g->get('attendly_package_id')->value(),
      'field_description' => array(
        'value' => $g->get('description')->value(),
        'format' => filter_default_format()
      )
    );

    // Map the festival state if it exists
    $festival_state = $this->getNode('festival_state', $g->get('festival_id')->value());
    if ($festival_state) {
      $fields['field_festival_state'] = $festival_state;
    }

    // Finally set the field values
    foreach ($fields as $key => $value) {
      $w->{$key}->set($value);
    }

    return $node;
  }

  /**
   * Applies the grapher fields to the presentational node
   *
   * @param \VirginGrapher $g
   *  The grapher object
   * @param stdClass $node
   *  The presentational node
   * @param $state
   *  The state node
   * @return \stdClass
   *  The presentational node
   */
  protected function applyPackageFields(VirginGrapher $g, $node, $state) {
    $w = entity_metadata_wrapper('node', $node);

    $fields = array(
      'title' => $g->get('name')->value(),
      'title_field' => $g->get('name')->value(),
      'field_description' => array(
        'value' => $g->get('description')->value(),
        'format' => filter_default_format()
      ),
      'field_package_state' => $state
    );

    foreach ($fields as $key => $value) {
      $w->{$key}->set($value);
    }

    return $node;
  }

  /**
   * Gets a node of a given type and external id
   *
   * @param $type
   *  The type of node
   * @param $external_id
   *  The external id of the node
   * @return \stdClass|null
   *  Either the fully loaded node object or null if not found
   */
  protected function getNode($type, $external_id) {
    $q = new EntityFieldQuery();

    $result = $q
      ->entityCondition('entity_type', 'node')
      ->entityCondition('bundle', $type)
      ->fieldCondition('field_sugar_id', 'value', $external_id)
      ->range(0,1)
      ->execute()
    ;

    if ($result['node']) {
      $ids = array_keys($result['node']);
      return node_load(reset($ids));
    }

    return null;
  }
}
