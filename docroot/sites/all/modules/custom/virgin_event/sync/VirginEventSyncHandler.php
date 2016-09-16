<?php
/**
 * @file
 * Contains the VirginEventSyncHandler class
 */

/**
 * Class VirginEventSyncHandler
 *
 * Syncs event data from SugarCRM to Drupal
 */
class VirginEventSyncHandler implements VirginSyncSugarHandlerInterface {

  /**
   * {@inheritdoc}
   */
  public function bean() {
    return 'Events';
  }

  /**
   * {@inheritdoc}
   */
  public function exists($external_id) {
    $q = new EntityFieldQuery();

    $result = $q
      ->entityCondition('entity_type', 'node')
      ->entityCondition('bundle', 'event_state')
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
    $event = new stdClass();

    $state->type = 'event_state';
    $event->type = 'event';

    node_object_prepare($state);
    node_object_prepare($event);

    // Map the state fields save the node
    $this->applyStateFields($g, $state);
    node_save($state);

    // Map the presentational fields and save the node
    $this->applyEventFields($g, $event, $state);
    node_save($event);
  }

  /**
   * {@inheritdoc}
   */
  public function update(VirginGrapher $g, $external_id) {
    $state = $this->getNode('event_state', $external_id);

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
      'field_attendly_id' => $g->get('id')->value(),
      'field_description' => array(
        'value' => $g->get('description')->value(),
        'format' => filter_default_format()
      ),
      'field_event_type' => $g->get('event_type')->value(),
      'field_start_date' => strtotime($g->get('start_time')->value()),
      'field_end_date' => strtotime($g->get('stop_time')->value()),
      'field_timezone' => $g->get('timezone')->value(false),
      'field_has_merchandise' => $g->get('merchandise_available')->value(false),
      'field_has_teams' => $g->get('teams_available')->value(false),
      'field_has_fans' => $g->get('fans_available')->value(false),
      'field_has_marketing_questions' => $g->get('marketing_questions_available')->value(false),
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
  protected function applyEventFields(VirginGrapher $g, $node, $state) {
    $w = entity_metadata_wrapper('node', $node);

    $fields = array(
      'title_field' => $g->get('name')->value(),
      'field_description' => array(
        'value' => $g->get('description')->value(),
        'format' => filter_default_format()
      ),
      'field_event_state' => $state
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
