<?php

/**
 * @file
 * Page callbacks file for the virgin_festival module.
 */

/**
 * Page callback for the list of tickets page in a festival.
 */
function virgin_festival_page_tickets($node) {

  // If this isn't a festival node-type, redirect the user to the
  // node path.
  if ($node->type != 'festival') {
    drupal_goto('node/' . $node->nid);
    return;
  }

  ctools_include('content');
  ctools_include('context');

  $festival_context = ctools_context_create('node', $node);
  $context = array('festival' => $festival_context);

  // Render the festival header and subnav components
  $header = ctools_content_render('festival_header', null, array(), array(), array('festival' => $node));
  $subnav = ctools_content_render('festival_subnav', 'festival_subnav', array(), array(), array(), $context);

  // Build the iframe url
  $g = new VirginEntityGrapher('node', $node);
  $attendly_id = $g->relation('field_festival_state')->fieldGetOne('field_attendly_id');
  $iframe_url = sprintf('%s/e/%s/iframe', variable_get(VIRGIN_VAR_ATTENDLY_URL), $attendly_id);

  // Build the view basket url
  $attendly_url = variable_get(VIRGIN_VAR_ATTENDLY_URL);
  $basket_url = sprintf('%s/e/checkout', $attendly_url);

  return theme('virgin_festival__tickets', array(
    'node' => $node,
    'basket_url' => $basket_url,
    'iframe_url' => $iframe_url,
    'header' => empty($header->content) ? '' : $header->content,
    'subnav' => empty($subnav->content) ? '' : $subnav->content
  ));
}
