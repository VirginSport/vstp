<?php

/**
 * @file
 * Contains VirginUserBasketEventData class
 */

/**
 * VirginUserBasketEventData contains the data for a basket event
 */
class VirginUserBasketEventData {

  /**
   * @var stdClass
   */
  protected $account;

  /**
   * @var array
   */
  protected $ticket_regos;

  /**
   * Constructor
   *
   * @param stdClass $account
   *  The user account object to whom this basket event is related to
   * @param array $ticket_regos
   *  The list of ticket registration IDs affected by this event
   */
  public function __construct($account, $ticket_regos = array()) {
    $this->account = $account;
    $this->ticket_regos = $ticket_regos;
  }

  /**
   * Get the user account object to whom this basket event is related to
   *
   * @return \stdClass
   */
  public function getAccount() {
    return $this->account;
  }

  /**
   * Get the list of ticket rego IDs affected by this event
   *
   * @return string[]
   */
  public function getTicketRegos() {
    return $this->ticket_regos;
  }
}
