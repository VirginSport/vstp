<?php

/**
 * @file
 * Contains the VirginUserEvents class
 */

/**
 * Class VirginUserEvents
 *
 * Contains the observer module events types for the events that virgin_user
 * module emits.
 */
class VirginUserEvents {

  /**
   * Emitted before the user edit profile form is rendered and the fields
   * are mapped to the form.
   */
  const BEFORE_USER_EDITS = 'virgin_user:before_user_edits';

  /**
   * Emitted when a user is created in Drupal but is not yet saved to the
   * database.
   */
  const USER_CREATED = 'virgin_user:user_created';

  /**
   * Emitted when a user is edited in Drupal but is not yet saved to the
   * database.
   */
  const USER_UPDATED = 'virgin_user:user_updated';

  /**
   * Emitted when a user has finished the checkout of his basket
   */
  const BASKET_CHECKOUT = 'virgin_user:basket_checkout';

  /**
   * Emitted when a user has finished the checkout of his basket but the
   * system should immediatly attempt to sync with SugarCRM.
   */
  const NO_SYNC_BASKET_CHECKOUT = 'virgin_user:no_sync_basket_checkout';

  /**
   * Emitted whenever the system wants to ensure the user ticket
   * information is up to date.
   */
  const CHECK_TICKET_SYNC = 'virgin_user:check_ticket_sync';
}
