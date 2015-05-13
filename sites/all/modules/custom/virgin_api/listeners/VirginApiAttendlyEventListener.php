<?php

/**
 * Listens for attendly event webhook events
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

  }

  /**
   * Executed when an event is updated on Attendly
   *
   * @param \ObserverEventInterface $event
   */
  private function onUpdate(ObserverEventInterface $event) {

  }
}
