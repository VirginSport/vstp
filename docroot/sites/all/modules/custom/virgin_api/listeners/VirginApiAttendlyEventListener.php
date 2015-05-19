<?php

/**
 * @file
 * Contains the VirginApiAttendlyEventListener class
 */

/**
 * Listens for attendly event webhook events
 *
 * This class creates and updates event information on Drupal when Attendly
 * triggers event related webhooks.
 *
 * @see _virgin_api_attendly_webhook_action()
 */
class VirginApiAttendlyEventListener implements ObserverObserverInterface {

  /**
   * {@inheritdoc}
   */
  public function onNotify(ObserverEventInterface $event) {
    switch ($event->getType()) {

      case 'attendly:webhook:event_create':
        $this->onCreate($event);
        break;

      case 'attendly:webhook:event_update':
        $this->onUpdate($event);
        break;
    }
  }

  /**
   * Executed when an event is created on Attendly
   *
   * @param \ObserverEventInterface $event
   */
  private function onCreate(ObserverEventInterface $event) {
    $node = $this->transformDataToNode($event->getData());

    node_save($node);

    observer_notify('drupal:event_state:create', $node);
  }

  /**
   * Executed when an event is updated on Attendly
   *
   * @param \ObserverEventInterface $event
   */
  private function onUpdate(ObserverEventInterface $event) {
    $node = $this->transformDataToNode($event->getData());

    node_save($node);

    observer_notify('drupal:event_state:update', $node);
  }

  /**
   * Transforms an event webhook data to a event state node.
   *
   * @param $data
   *  The webhook transformed data.
   * @return \stdClass
   *  A node entity.
   */
  private function transformDataToNode($data) {
    global $language;

    // Shortcut to the required data.
    // TODO validate the presence of required data, or thrown an error now.
    $event = $data->EventData->Event;
    $tickets = $data->EventData->Tickets;

    // Check if the event state already exists locally.
    $state = virgin_api_get_entity_by_attendly_id('node', 'event_state', $event->ID);

    // If it doesn't, create a new event state.
    if (empty($state)) {
      $state = new stdClass();
      $state->type = 'event_state';
    }

    // Ensure the node is ready for changes.
    node_object_prepare($state);

    // Fill in the information.
    $state_wrapper = entity_metadata_wrapper('node', $state);
    $state_wrapper->title->set($event->Name);
    $state_wrapper->language->set($language->language);
    $state_wrapper->field_event_id->set($event->ID);
    $state_wrapper->field_event_parent_id->set($event->GroupID);
    $state_wrapper->field_event_start_date->set(strtotime($event->Start));
    $state_wrapper->field_event_end_date->set(strtotime($event->Stop));
    $state_wrapper->field_event_reg_end_date->set(strtotime($event->Deadline));
    $state_wrapper->field_twitter_hashtag->set($event->Hashtag);
    $state_wrapper->field_link->set(array('url' => $event->URL));
    $state_wrapper->field_description->set(array('value' => $event->Description, 'format' => 'full_html'));

    // Purge all previously set ticket types.
    $state_wrapper->field_ticket_types->set(array());

    // Re-set the ticket types from the passed data.
    foreach ($tickets as $ticket) {
      $ticket_type = entity_create('field_collection_item', array('field_name' => 'field_ticket_types'));
      $ticket_type->setHostEntity('node', $state);

      $ticket_type_wrapper = entity_metadata_wrapper('field_collection_item', $ticket_type);
      $ticket_type_wrapper->field_title->set($ticket->Name);
      $ticket_type_wrapper->field_short_description->set($ticket->Description);
      $ticket_type_wrapper->field_ticket_id->set($ticket->ID);
      $ticket_type_wrapper->field_earlybird->set($ticket->Earlybird);
      $ticket_type_wrapper->field_earlybird_date->set(strtotime($ticket->EarlybirdDate));
      $ticket_type_wrapper->field_type->set($ticket->Type);
      $ticket_type_wrapper->field_mode->set($ticket->Mode);

      // Store value field with as formatted currency strings.
      $formatter = new NumberFormatter(locale_get_default(), NumberFormatter::CURRENCY);

      $value = $formatter->formatCurrency($ticket->Price, $event->Currency);
      $ticket_type_wrapper->field_value->set($value);

      $earlybird_value = $formatter->formatCurrency($ticket->Price, $event->Currency);
      $ticket_type_wrapper->field_earlybird_value->set($earlybird_value);
    }

    // Check if an host event exists, if it doesn't create it now.
    $event = $state_wrapper->field_event->value();

    if (empty($event)) {
      $event = new stdClass();
      $event->type = 'event';

      node_object_prepare($event);

      $event_wrapper = entity_metadata_wrapper('node', $event);
      $event_wrapper->title->set($state_wrapper->title->value());
      $event_wrapper->language->set($language->language);

      node_save($event);

      // Set the newly created event as the host of this event state.
      $state_wrapper->field_event->set($event);
    }

    return $state;
  }
}
