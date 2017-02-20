<?php
/**
 * @file
 * Handles Virgin user theme related logic.
 */

/**
 * Implements hook_preprocess_HOOK() for virgin user tickets theme.
 */
function virgin_user_preprocess_virgin_user__ticket(&$vars) {
  $event = $vars['event'];
  $event_grapher = new VirginEntityGrapher('node', node_load($event->nid));
  $event_state_grapher = $event_grapher->relation('field_event_state');
  $event_start_date = $event_state_grapher->fieldGetOne('field_start_date');
  $event_end_date = $event_state_grapher->fieldGetOne('field_end_date');
  $event_timezone = $event_state_grapher->fieldGetOne('field_timezone');
  $start_date = virgin_date($event_start_date, $event_timezone);

  $ticket_type = $vars['ticket_type'];
  $ticket_type_grapher = new VirginEntityGrapher('node', node_load($ticket_type->nid));
  $ticket_type_state_grapher = $ticket_type_grapher->relation('field_ticket_type_state');
  $ticket_level = $ticket_type_state_grapher->fieldGetOne('field_ticket_level');

  // TODO update keys in css instead of mapping here
  $ticket_level_properties = virgin_ticket_banner_properties();
  if (!empty($ticket_level_properties[$ticket_level])) {
    $ticket_properties = $ticket_level_properties[$ticket_level];

    switch ($ticket_properties['color']) {
      case 'gold':
        $class = 'vip';
        break;

      case 'festival':
        $class = 'hero';
        break;

      default:
        $class = 'standard';
    }

    $vars['ticket_properties'] = $ticket_properties;
    $vars['ticket_class'] = $class;
  }

  // Compare user profile DOB and name with participant DOB and name
  $user = $vars['user'];
  $user_grapher = new VirginEntityGrapher('user', user_load($user->uid));
  $user_dob = strtotime($user_grapher->fieldGetOne('field_birth_date'));
  $user_name = preg_replace('/\s+/', '', $user_grapher->fieldGetOne('field_first_name') . $user_grapher->fieldGetOne('field_last_name'));

  $ticket = $vars['ticket'];
  $ticket_user_dob = strtotime($ticket->date_of_birth);
  $ticket_user_name = preg_replace('/\s+/', '', $ticket->first_name . $ticket->last_name);

  // Get the number of days remaining for event
  $vars['member_is_participant'] = ($user_dob == $ticket_user_dob && $user_name == $ticket_user_name);
  $vars['ticket_type_title'] = $ticket_type_grapher->fieldGetOne('title_field');;
  $vars['brand_color'] = $ticket_type_grapher->fieldGetOne('field_brand_color');
  $vars['brand_pattern'] = $ticket_type_grapher->fieldGetOne('field_brand_pattern');
  $vars['ticket_start_time'] = $start_date->format('g:ia');
  $vars['event_grapher'] = $event_grapher;
  $vars['event_state_grapher'] = $event_state_grapher;
  $vars['event_start_date'] = $event_start_date;
  $vars['event_end_date'] = $event_end_date;
  $vars['event_started'] = $event_start_date < time();
  $vars['event_past'] = $event_end_date < time();
  $vars['event_date'] = $start_date->format('l, d M Y');
}

/**
 * Implements hook_preprocess_HOOK() for virgin user edit theme.
 */
function virgin_user_preprocess_virgin_user__edit(&$vars) {
  if (empty($vars['user'])) {
    return;
  }

  $user = $vars['user'];

  $user_grapher = new VirginEntityGrapher('user', user_load($user->uid));
  $vars['user_grapher'] = $user_grapher;
  $vars['user_name'] = check_plain($user_grapher->fieldGetOne('field_first_name') . ' ' . $user_grapher->fieldGetOne('field_last_name'));
  $vars['user_birth_date'] = date('d M Y', strtotime($user_grapher->fieldGetOne('field_birth_date')));

  $gender_key = $user_grapher->fieldGetOne('field_gender');
  $field = field_info_field('field_gender');
  $vars['user_gender'] = empty($field['settings']['allowed_values'][$gender_key]) ? '' : $field['settings']['allowed_values'][$gender_key];

  // Generate the purchase history path
  try {
    $sugar_id = $user_grapher->fieldGetOne('field_sugar_id');
    $purchase_history_path = virgin_attendly_client()->buildPurchaseHistoryPath($sugar_id);
    $vars['purchase_history_path'] = $purchase_history_path;

  } catch (\Exception $e) {
    watchdog(
      'virgin_user',
      'An error ocurred while building the purchase history URL: @err',
      array('@err' => $e->getMessage()),
      WATCHDOG_ERROR
    );
  }
}

/**
 * Implements hook_preprocess_HOOK() for virgin_user__claim_ticket.
 */
function virgin_user_preprocess_virgin_user__claim_ticket(&$vars) {
  global $user;

  if (empty($vars['ticket'])) {
    return;
  }

  $event = virgin_event_with_uuid($vars['ticket']['event_id']);

  if (empty($event)) {
    return;
  }

  $account_g = new VirginEntityGrapher('user', user_load($user->uid));
  $event_g = new VirginEntityGrapher('node', $event);
  $user_sugar_id = $account_g->fieldGetOne('field_sugar_id');
  $image = $event_g->relation('field_card_image');
  $purchaser_names = explode(' ', $vars['ticket']['purchaser_contact_tickets_name']);
  $email = empty($user->mail) ? '' : $user->mail;

  $list = array(
    'event_name' => check_plain($event_g->fieldGetOne('title_field')),
    'event_image' => $image->getEntityType() != 'scald_atom' ? NULL : $image->getEntity(),
    'recipient' => $vars['ticket']['first_name'],
    'recipient_email' => $vars['ticket']['email'],
    'purchaser' => reset($purchaser_names),
    'uses_purchaser_email' => $vars['ticket']['uses_purchaser_email'],
    'is_purchaser' => ($vars['ticket']['purchaser_contact_id'] == $user_sugar_id),
    'is_recipient' => ($vars['ticket']['email'] == $email),
    'claimed_by_me' => ($vars['ticket']['contact_id'] == $user_sugar_id),
    'has_been_claimed' => $vars['ticket']['has_been_claimed'],
  );

  // Find out which name should be shown in the claim card
  if (user_is_logged_in() && !$list['is_purchaser'] && !$list['is_recipient']) {
    $logged_name = $account_g->fieldGetOne('field_first_name');
  } elseif ($list['is_purchaser']) {
    $logged_name = $list['purchaser'];
  } else {
    $logged_name = $list['recipient'];
  }

  $list['logged_name'] = check_plain($logged_name);

  $vars = array_merge($vars, $list);
}
