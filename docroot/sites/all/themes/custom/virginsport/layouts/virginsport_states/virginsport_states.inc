<?php

/**
 * Defines virginsport panels layout.
 */

$plugin = array(
  'title' => t('Virgin Sport States'),
  'category' => t('VirginSport'),
  'icon' => 'icon.png',
  'theme' => 'virginsport_states',
  'admin css' => 'virginsport_states.admin.css',
  'regions' => array(
    'first' => t('Header'),
    'announced_first' => t('Announced (first)'),
    'announced_second' => t('Announced (second)'),
    'announced_third' => t('Announced (third)'),
    'announced_fourth' => t('Announced (fourth)'),
    'announced_fifth' => t('Announced (fifth)'),
    'announced_sixth' => t('Announced (sixth)'),
    'open_first' => t('Open (first)'),
    'open_second' => t('Open (second)'),
    'open_third' => t('Open (third)'),
    'open_fourth' => t('Open (fourth)'),
    'open_fifth' => t('Open (fifth)'),
    'open_sixth' => t('Open (sixth)'),
    'in_progress_first' => t('In Progress (first)'),
    'in_progress_second' => t('In Progress (second)'),
    'in_progress_third' => t('In Progress (third)'),
    'in_progress_fourth' => t('In Progress (fourth)'),
    'in_progress_fifth' => t('In Progress (fifth)'),
    'in_progress_sixth' => t('In Progress (sixth)'),
    'over_first' => t('Over (first)'),
    'over_second' => t('Over (second)'),
    'over_third' => t('Over (third)'),
    'over_fourth' => t('Over (fourth)'),
    'over_fifth' => t('Over (fifth)'),
    'over_sixth' => t('Over (sixth)'),
    'closed_first' => t('Closed (first)'),
    'closed_second' => t('Closed (second)'),
    'closed_third' => t('Closed (third)'),
    'closed_fourth' => t('Closed (fourth)'),
    'closed_fifth' => t('Closed (fifth)'),
    'closed_sixth' => t('Closed (sixth)'),
  ),
);

/**
 * Implements hook_preprocess_THEME()
 */
function virginsport_preprocess_virginsport_states(&$vars) {

  // Fetch the entity from the panelizer context
  if (empty($vars['display']->context['panelizer']->data->type)) {
    return;
  }

  // Get the state of the entity
  $entity = $vars['display']->context['panelizer']->data;
  $entity_type = $entity->type;
  $g = new VirginEntityGrapher('node', $entity);

  $vars['entity_type'] = $entity_type;

  switch ($entity_type) {
    case 'event':
      $state = $g->fieldGetOne('field_event_status');
      break;

    case 'festival':
      $state = $g->fieldGetOne('field_status');;
      break;

    default:
      $state = '';
      break;
  }

  $vars['state'] = check_plain($state);

  // In administration mode, all regions are rendered without exception
  if ($vars['renderer']->access) {
    $vars['editor_mode'] = TRUE;
    return;
  }

  // Otherwise, mark the editor mode as disabled
  $vars['editor_mode'] = FALSE;

  // Remove regions that are not whitelisted or prefixed with the state
  // of the entity.
  $whitelisted_regions = array(
    'first'
  );

  foreach ($vars['content'] as $key => $content) {
    if (in_array($key, $whitelisted_regions)) {
      continue;
    }

    if (strpos($key, $state . '_') === FALSE) {
      $vars['content'][$key] = '';
    }
  }
}
