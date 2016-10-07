<?php

/**
 * @file
 * Contains the SugarcrmGuzzle class
 */

use Guzzle\Common\Event;
use Spinegar\Sugar7Wrapper\Clients\Guzzle;

/**
 * Class SugarcrmGuzzle
 *
 * Overrides the base class by ensuring the oauth token is stored and re-used
 * across page requests.
 */
class SugarcrmGuzzle extends Guzzle {

  /**
   * {@inheritdoc}
   */
  public function connect() {
    $token = variable_get(SUGARCRM_VAR_OAUTH_TOKEN, NULL);

    if (empty($token)) {
      $token = $this->getNewAuthToken();
      variable_set(SUGARCRM_VAR_OAUTH_TOKEN, $token);
    }

    // If we were not able to fetch a token still, bail out.
    if (empty($token)) {
      return false;
    }

    // Otherwise, set the token and register callbacks for auth failures.
    $this->setToken($token);
    $eventDispatcher = $this->client->getEventDispatcher();
    $eventDispatcher->addListener('request.before_send', array($this, 'beforeSendRequest'));
    $eventDispatcher->addListener('request.error', array($this, 'refreshToken'));

    return true;
  }

  /**
   * {@inheritdoc}
   */
  public function refreshToken(Event $event) {
    if ($event['response']->getStatusCode() === 401) {
      $token = $this->getNewAuthToken();

      variable_set(SUGARCRM_VAR_OAUTH_TOKEN, $token);
      $this->setToken($token);

      $event['response'] = $event['request']->send();
      $event->stopPropagation();
    }
  }
}
