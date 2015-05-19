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
 */
class VirginApiSugarEventListener implements ObserverObserverInterface {

  /**
   * {@inheritdoc}
   */
  public function onNotify(ObserverEventInterface $event) {
    switch ($event->getType()) {

      case 'drupal:event_state:create':
        $this->onCreate($event);
        break;

      case 'drupal:event_state:update':
        $this->onUpdate($event);
        break;
    }
  }

  /**
   * Executed when an event is created on Drupal
   *
   * @param \ObserverEventInterface $event
   */
  private function onCreate(ObserverEventInterface $event) {
    $data = $this->transformNodeToData($event->getData());
  }

  /**
   * Executed when an event is updated on Drupal
   *
   * @param \ObserverEventInterface $event
   */
  private function onUpdate(ObserverEventInterface $event) {
    $data = $this->transformNodeToData($event->getData());
  }

  /**
   * Transforms an "Event State" object into data to be consumed by SugarCRM
   *
   * @param stdClass $node
   *  The Drupal 'event_state' node entity.
   * @return stdClass
   *  The data to be posted to SugarCRM.
   */
  private function transformNodeToData($node) {
    $state_wrapper = entity_metadata_wrapper('node', $node);

    $description = $state_wrapper->field_description->value();
    $start_date = $state_wrapper->field_event_start_date->value();
    $end_date = $state_wrapper->field_event_end_date->value();
    $registration_date = $state_wrapper->field_event_reg_end_date->value();
    $date_format = 'c';

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
}
