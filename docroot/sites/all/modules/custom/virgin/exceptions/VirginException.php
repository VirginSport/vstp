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
   * @return string
   */
  public function getRedirectPath() {
    // If current path is not the same as redirectPath simply redirect it
    if (current_path() != $this->redirectPath) {
      return $this->redirectPath;
    }

    // Otherwise we have to handle paths to avoid redirect loops
    $menu_path = menu_get_item($this->redirectPath);

    $handledPaths = module_invoke_all('virgin_exception_redirect_paths');

    // Defaults to front path
    $redirectPath = '<front>';

    // If current menu path is in handled paths
    if (!empty($menu_path['path']) && in_array($menu_path['path'], $handledPaths)) {
      // Remove destination because we want to redirect to a specific path
      unset($_GET['destination']);

      $redirectPath = $this->redirectPath;
    }

    return $redirectPath;
  }
}
