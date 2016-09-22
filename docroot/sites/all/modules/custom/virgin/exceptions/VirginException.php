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
   * @var string
   */
  protected $redirectPath;

  /**
   * Constructor
   *
   * @param string $message
   *  The error message
   * @param string $userMessage
   *  A safe message to be shown to the users
   * @param string $redirectPath
   *  Path to redirect user on exception
   */
  public function __construct($message = '', $userMessage = '', $redirectPath = '') {
    $this->userMessage = $userMessage;
    $this->redirectPath = $redirectPath;

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

  /**
   * Gets the redirect path for the exception
   *
   * @return string
   */
  public function getRedirectPath() {
    return $this->redirectPath;
  }
}
