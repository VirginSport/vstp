<?php

/**
 * @file
 * Page callbacks file for the virgin_event module.
 */

/**
 * Page callback for the event photos.
 */
function virgin_event_page_photos($node, $bib_number = NULL) {
  global $user;

  if ($node->type != 'event') {
    drupal_goto('node/' . $node->nid);
  }

  $query = array();

  if ($bib_number) {
    $user_grapher = new VirginEntityGrapher('user', user_load($user->uid));

    $name = sprintf('%s %s', $user_grapher->fieldGetOne('field_first_name'), $user_grapher->fieldGetOne('field_last_name'));

    $query = array('name' => $name, 'bib_number' => $bib_number);
  }

  $g = new VirginEntityGrapher('node', $node);
  $url = sprintf('https://rm.gamefacemedia.com/races/%s/embed', $g->fieldGetOne('field_gameface_id'));

  $vars = array(
    'url' => url($url, array('query' => $query))
  );

  return theme('virgin_event__photos', array('vars' => $vars));
}
