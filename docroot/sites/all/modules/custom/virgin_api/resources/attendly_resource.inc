<?php

/**
 * @file
 * Contains the attendly services resources.
 */

/**
 * Attendly webhook services action callback
 */
function _virgin_api_attendly_webhook_action() {
  $json = file_get_contents('php://input');
  $data = json_decode($json);

  // Validate the minimum required data structure.
  if (empty($data) || empty($data->Type) || !is_string($data->Type)) {
    services_error('Not Acceptable', 406, new stdClass());
  }

  // Notify the registered listeners.
  try {
    observer_notify('attendly:webhook:' . $data->Type, $data);
  } catch (Exception $e) {
    watchdog_exception('virgin_api', $e, 'Attendly Webhook Failed!', array(), WATCHDOG_CRITICAL);
    services_error('Service Unavailable', 503, new stdClass());
  }

  // Return an empty response object.
  return new stdClass();
}
