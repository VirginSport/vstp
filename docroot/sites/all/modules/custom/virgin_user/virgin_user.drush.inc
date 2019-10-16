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
    "SELECT u.uid FROM users u
            LEFT JOIN users_roles ur ON u.uid = ur.uid
            WHERE u.uid <> 0 AND u.uid <> 1
            AND u.mail NOT LIKE '%@manifesto.co.uk%' AND u.mail NOT LIKE '%@virginsport.com%'
            AND ur.uid IS NULL AND ur.rid IS NULL"
  );

  while ($row = $result->fetch()) {
    echo 'Obfuscating user ' . $row->uid . PHP_EOL;
    db_update('users')
      ->fields(array(
        'mail' => $row->uid . '@virginsport.test',
      ))
      ->condition('uid', $row->uid, '=')
      ->execute();

    echo 'Deleting user ' . $row->uid . PHP_EOL;
    user_cancel(
      array('user_cancel_notify' => FALSE),
      $row->uid,
      'user_cancel_reassign'
    );
    $batch =& batch_get();
    $batch['progressive'] = FALSE;
    batch_process();
  }
}
