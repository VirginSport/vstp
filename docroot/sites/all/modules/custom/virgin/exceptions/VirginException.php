<?php

/**
 * @file
 * Contains the VirginException exception class
 */

/**
 * Extends the base Exception by adding an optional user message
 *
 * The optional user message is to be used as a safe carrier of messages fit
 * to be shown by the system to the users without disclosure of information
 * they should not have access to.
 */
class VirginException extends Exception {

  /**
   * @var string
   */
  protected $userMessage;

  /**
   * Constructor
   *
   * @param string $message
   *  The error message
   * @param string $userMessage
   *  A safe message to be shown to the users
   */
  public function __construct($message = '', $userMessage = '') {
    $this->userMessage = $userMessage;

    parent::__construct($message);
  }

  /**
   * Checks if this exceptions contains a user message.
   *
   * @return bool
   *  TRUE it has the user message, FALSE otherwise.
   */
  public function hasUserMessage() {
    return !empty($this->userMessage);
  }

  /**
   * Gets the exception user message
   *
   * @return string
   */
  public function getUserMessage() {
    return $this->userMessage;
  }
}
