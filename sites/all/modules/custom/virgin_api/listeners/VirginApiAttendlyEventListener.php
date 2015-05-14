<?php

/**
 * @file
 * Contains the VirginApiAttendlyEventListener class
 */

/**
 * Listens for attendly event webhook events
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
  }

  /**
   * Executed when an event is updated on Attendly
   *
   * @param \ObserverEventInterface $event
   */
  private function onUpdate(ObserverEventInterface $event) {
    $node = $this->transformDataToNode($event->getData());

    node_save($node);
  }

  /**
   * Transforms an event webhook data to a node.
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

    // Check if the event already exists locally.
    $node = virgin_api_get_entity_by_attendly_id('node', 'event', $event->ID);

    // If it doesn't, create a new event.
    if (empty($node)) {
      $node = new stdClass();
      $node->type = 'event';
    }

    // Ensure the node is ready for changes.
    node_object_prepare($node);

    // Fill in the information.
    $node_wrapper = entity_metadata_wrapper('node', $node);
    $node_wrapper->title->set($event->Name);
    $node_wrapper->language->set($language->language);
    $node_wrapper->field_event_id->set($event->ID);
    $node_wrapper->field_event_parent_id->set($event->GroupID);
    $node_wrapper->field_event_start_date->set(strtotime($event->Start));
    $node_wrapper->field_event_end_date->set(strtotime($event->Stop));
    $node_wrapper->field_event_reg_end_date->set(strtotime($event->Deadline));
    $node_wrapper->field_twitter_hashtag->set($event->Hashtag);
    $node_wrapper->body->set(array('value' => $event->Description, 'format' => 'full_html'));

    // Purge all previously set ticket types.
    $node_wrapper->field_ticket_types->set(array());

    // Re-set the ticket types from the passed data.
    foreach ($tickets as $ticket) {
      $collection = entity_create('field_collection_item', array('field_name' => 'field_ticket_types'));
      $collection->setHostEntity('node', $node);

      $collection_wrapper = entity_metadata_wrapper('field_collection_item', $collection);
      $collection_wrapper->field_title->set($ticket->Name);
      $collection_wrapper->field_short_description->set($ticket->Description);

      // Store the ticket value as a formatted currency string.
      $formatter = new NumberFormatter(locale_get_default(), NumberFormatter::CURRENCY);
      $value = $formatter->formatCurrency($ticket->Price, $event->Currency);
      $collection_wrapper->field_value->set($value);
    }

    return $node;
  }
}
