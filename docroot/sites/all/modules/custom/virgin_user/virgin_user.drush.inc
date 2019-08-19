<?php

/**
 * Implements hook_drush_command().
 */
function virgin_user_drush_command() {
  $items['virgin-users-obfuscate-users'] = array(
    'description' => 'obfuscate users',
    'callback'    => 'drush_virgin_user_obfuscate_users',
    'options'     => array(
      'amount' => 'The number of users to generate',
    ),
  );

  return $items;
}

/**
 * A drush command to obfuscate email addresses.
 */
function drush_virgin_user_obfuscate_users() {
  $result = db_query(
    'SELECT * FROM users WHERE mail NOT LIKE \'%manifesto.co.uk%\' AND mail NOT LIKE \'%virginsport.com%\' AND uid <> 0 AND uid <> 1 LIMIT 100'
  );

  while ($row = $result->fetch()) {
    echo 'Obfuscating user ' . $row->uid . PHP_EOL;

    db_update('users')
      ->fields(array(
        'mail' => $row->uid . '@virginsport.test',
      ))
      ->condition('uid', $row->uid, '=')
      ->execute();
  }
}
