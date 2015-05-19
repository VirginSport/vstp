<?php

/**
 * @file
 * Contains the VirginApiSugarEventListener class
 */

/**
 * Listens for Drupal event related events and syncs information to SugarCRM
 *
 * This class creates and updates event information on SugarCRM when Events are
 * modified on Drupal.
 *
 * @see VirginApiAttendlyEventListener::onCreate()
 * @see VirginApiAttendlyEventListener::onUpdate()
 * @see virgin_api_node_update()
 */
class VirginApiSugarEventListener implements ObserverObserverInterface {

  /**
   * {@inheritdoc}
   */
  public function onNotify(ObserverEventInterface $event) {

    // If SugarCRM is not configured, do not attempt to do anything.
    if (!sugarcrm_is_configured()) {
      return;
    }

    switch ($event->getType()) {

      case 'drupal:event_state:create':
      case 'drupal:event_state:update':
        $this->onEventStateCreateOrUpdate($event);
        break;

      case 'drupal:event:update':
        $this->onEventUpdate($event);
        break;
    }
  }

  /**
   * Executed when an Event State is created on Drupal
   *
   * @param \ObserverEventInterface $event
   */
  private function onEventStateCreateOrUpdate(ObserverEventInterface $event) {
    $event_state = $event->getData();
    $sugar_id = $this->getSugarID($event_state);
    $data = $this->transformNodeToData($event_state);
    $sugar_id = $this->saveDataToSugar($data, $sugar_id);
    $this->setSugarId($event_state, $sugar_id);
  }

  /**
   * Executed when an Event is updated on Drupal
   *
   * @param \ObserverEventInterface $event
   */
  private function onEventUpdate(ObserverEventInterface $event) {

    $event_node = $event->getData();

    // Get the event state from the event node.
    $event_state = $this->getEventEventState($event_node);

    // Drupal might be using information from cache. This might create sync
    // problems. Ensure the relevant nodes are reloaded again from the database.
    entity_get_controller('node')->resetCache(array($event_node->nid, $event_state->nid));

    // Run the update on SugarCRM.
    $sugar_id = $this->getSugarID($event_state);
    $data = $this->transformNodeToData($event_state);
    $sugar_id = $this->saveDataToSugar($data, $sugar_id);
    $this->setSugarId($event_state, $sugar_id);
  }

  /**
   * Transforms an "Event State" object into data to be consumed by SugarCRM
   *
   * @param stdClass $node
   *  The Drupal 'event_state' node entity.
   * @return stdClass
   *  The data to be posted to SugarCRM.
   *
   * @TODO format_date() uses the website timezone. Ensure consistent timezone handling in all systems.
   */
  private function transformNodeToData($node) {
    $state_wrapper = entity_metadata_wrapper('node', $node);

    $description = $state_wrapper->field_description->value();
    $start_date = $state_wrapper->field_event_start_date->value();
    $end_date = $state_wrapper->field_event_end_date->value();
    $registration_date = $state_wrapper->field_event_reg_end_date->value();
    $date_format = 'c'; // ISO 8601 - 2004-02-12T15:19:21+00:00

    $data = array(
      'name' => $state_wrapper->title->value(),
      'attendly_id' => $state_wrapper->field_event_id->value(),
      'attendly_group_id' => $state_wrapper->field_event_parent_id->value(),
      'start_date' => format_date($start_date, 'custom', $date_format),
      'end_date' => format_date($end_date, 'custom', $date_format),
      'registration_end_date' => format_date($registration_date, 'custom', $date_format),
      'about' => empty($description['value']) ? '' : $description['value'],
      'status' => $state_wrapper->field_event->field_event_status->label()
    );

    return $data;
  }

  /**
   * Get the SugarCRM ID from the given Event State
   *
   * @param $node
   *  The event state node.
   * @return string|null
   *  Either a string with the SugarCRM ID, or NULL if there is none.
   */
  private function getSugarID($node) {
    $state_wrapper = entity_metadata_wrapper('node', $node);
    $sugar_id = $state_wrapper->field_sugar_id->value();

    if (!empty($sugar_id)) {
      return (string) $sugar_id;
    }

    return NULL;
  }

  /**
   * Sets the SugarCRM ID on a given Event State
   *
   * @param $node
   *  The event state node.
   * @param $sugar_id
   *  The sugar id.
   */
  private function setSugarId($node, $sugar_id) {
    $state_wrapper = entity_metadata_wrapper('node', $node);
    $state_wrapper->field_sugar_id->set($sugar_id);

    node_save($node);
  }

  /**
   * Saves an Event to SugarCRM
   *
   * If the Event already exists, instead of creating it, it's updated.
   *
   * @param $data
   *  The data to be posted to SugarCRM
   * @param string $sugar_id
   *  The Event SugarCRM ID.
   * @return string
   *  The SugarCRM ID for passed Event.
   */
  private function saveDataToSugar($data, $sugar_id = NULL) {

    // If there's no Sugar ID it's because we haven't synced the event before.
    if (empty($sugar_id)) {
      $response = sugarcrm_client()->postEndpoint('EM_Event', $data);
    }
    else {
      // In case we have the Sugar ID, attempt to update it instead on Sugar.
      // If it fails with a 404 it's because the event was not found on Sugar.
      // In this case, we'll create it there instead.
      try {
        $response = sugarcrm_client()->putEndpoint('EM_Event/' . $sugar_id, $data);
      } catch (\Guzzle\Http\Exception\ClientErrorResponseException $e) {
        if ($e->getResponse()->getStatusCode() == 404) {
          $response = sugarcrm_client()->postEndpoint('EM_Event', $data);
        }
        else {
          throw $e;
        }
      }
    }

    return $response['id'];
  }

  /**
   * Gets the Event State of an Event
   *
   * @param $node
   *  The "Event" node.
   * @return stdClass
   *  The "Event State" node.
   */
  private function getEventEventState($node) {
    $query = new EntityFieldQuery();

    $query
      ->entityCondition('entity_type', 'node')
      ->entityCondition('bundle', 'event_state')
      ->fieldCondition('field_event', 'target_id', $node->nid, '=')
      ->execute()
    ;

    if (!empty($query->ordered_results)) {
      $entity_id = $query->ordered_results[0]->entity_id;
      $entity = entity_load_single('node', $entity_id);
    }

    return empty($entity) ? FALSE : $entity;
  }
}
