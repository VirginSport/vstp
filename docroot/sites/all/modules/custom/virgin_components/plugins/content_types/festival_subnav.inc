<?php

/**
 * @file
 * Declares the Festival Header ctools content-type plugin.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Festival Subnav'),
  'description' => '',
  'category' => 'VirginSport',
  'required context' => array(
    new ctools_context_required(t('Node'), 'node')
  ),
  'defaults' => array(),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_components_festival_subnav_content_type_render($subtype, $conf, $panel_args, $context) {
  if (empty($context) || empty($context[0]->data)) {
    return;
  }

  // Get a shortcut to the node.
  $node = $context[0]->data;
  $g = new VirginEntityGrapher('node', $node);

  // Ensure the festival node is available
  switch ($g->property('type')) {

    // If it's a festival do nothing, as we got everything we need
    case 'festival';
      break;

    case 'page':
      $g = $g->relation('field_festival');
      break;

    // For events there isn't direct relation to the festival, as
    // find the festival via a query indirection
    case 'event':
      $sql = "
        select fs2.entity_id as festival_nid
        from {field_data_field_event_state} es
        join {field_data_field_festival_state} fs1 on fs1.entity_id = es.field_event_state_target_id and fs1.entity_type = 'node' and fs1.bundle = 'event_state'
        join {field_data_field_festival_state} fs2 on fs2.field_festival_state_target_id = fs1.field_festival_state_target_id and fs2.bundle = 'festival'
        join {node} n on n.nid = fs2.entity_id and n.status = 1
        where es.entity_id = :id
        limit 1
      ";

      $result = db_query($sql, array(':id' => $g->property('nid')));
      $festival_nid = $result->fetchField();

      if (empty($festival_nid)) {
        return;
      }

      $g = new VirginEntityGrapher('node', node_load($festival_nid));

      break;
    default:
      return;
  }

  // If for some reason, the grapher does not contain a festival
  // bailout now.
  if ($g->property('type') != 'festival') {
    return;
  }

  $festival_links = $g->fieldGetAll('field_links');

  if (!empty($festival_links)) {
    $links = array();

    foreach ($festival_links as $link) {
      $url = $link['url'];

      // For some reason after/while saving the page in panels IPE where this
      // component is included, the attributes property is a serialized array,
      // therefore saving and subsequent render fails with an error 500. The
      // following workaround ensures rendering in these circumstances will not
      // fail due to the attributes being serialized.
      if (is_string($link['attributes'])) {
        $link['attributes'] = @unserialize($link['attributes']);

        if (!is_array($link['attributes'])) {
          continue;
        }
      }

      // Proceed to render the link using the un-serialized attributes property
      $attributes = $link['attributes'] + array('virgin_show' => '', 'target' => '');

      if (empty($attributes['virgin_show'])) {
        continue;
      }

      $target = empty($attributes['target']) ? '' : $attributes['target'];

      $links[] = virgin_components_festival_subnav_content_type_get_link($link['title'], $url, $attributes['virgin_show'], $target);
    }
  } else {
    $links = virgin_components_festival_subnav_automatic_links($g);
  }

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_components__ct__festival_subnav', array('links' => $links));
  $block->title = '';

  return $block;
}

/**
 * Get the festival automatic links
 *
 * @param VirginEntityGrapher $festival_grapher
 * @return array links
 */
function virgin_components_festival_subnav_automatic_links($festival_grapher) {
  $festival_nid = $festival_grapher->property('nid');
  $festival_state_grapher = $festival_grapher->relation('field_festival_state');

  // Fixed urls for Festival subnav --------------------------------------------
  $url = 'node/' . $festival_grapher->property('nid');
  $title = $festival_grapher->fieldGetOne('title_field');
  $links = array(
    virgin_components_festival_subnav_content_type_get_link($title, $url)
  );

  // Related festival events ---------------------------------------------------
  $sql = "
    select ev.nid as event_id
    from {node} n
    join {field_data_field_festival_state} fs on fs.field_festival_state_target_id = n.nid
    join {field_data_field_event_state} es on es.entity_type = 'node' and es.field_event_state_target_id = fs.entity_id
    join {field_data_field_show_in_festival_menu} sh on sh.entity_type = 'node' and sh.entity_id = es.entity_id    
    join {field_data_title_field} t on t.entity_type = 'node' and t.entity_id = es.entity_id
    join {node} ev on ev.nid = es.entity_id
    where n.nid = :id and ev.status = 1 and sh.field_show_in_festival_menu_value = 1
    group by ev.nid
  ";

  $results = db_query($sql, array(':id' => $festival_state_grapher->property('nid')));

  $event_links = array();
  foreach ($results as $item) {
    $event_grapher = new VirginEntityGrapher('node', node_load($item->event_id));

    $title = $event_grapher->fieldGetOne('title_field');
    $url = 'node/' . $item->event_id;

    $event_links[] = virgin_components_festival_subnav_content_type_get_link($title, $url);
  }

  $links = array_merge($links, virgin_components_festival_subnav_content_type_order_links_array($event_links));

  // Custom Pages --------------------------------------------------------------

  $festival_status = $festival_grapher->fieldGetOne('field_status');

  $show_tickets_states = array(
    'open'
  );

  if (in_array($festival_status, $show_tickets_states)) {
    $links[] = virgin_components_festival_subnav_content_type_get_link(t('Passes'), 'node/' . $festival_nid . '/tickets');
  }

  // Related festival pages ----------------------------------------------------
  $sql = "
      select p.nid as page_id, t.title_field_value as page_title
      from {node} n
      join {field_data_field_festival} f on f.field_festival_target_id = n.nid
      join {field_data_field_show_in_festival_menu} sh on sh.entity_type = 'node' and sh.entity_id = f.entity_id
      join {field_data_title_field} t on t.entity_type = 'node' and t.entity_id = f.entity_id
      join {node} p on p.nid = f.entity_id
      where n.nid = :id and p.status = 1 
      and p.type = 'page' and sh.field_show_in_festival_menu_value = 1
      group by p.nid
  ";

  $results = db_query($sql, array(':id' => $festival_grapher->property('nid')));

  $page_links = array();
  foreach ($results as $item) {
    $page_grapher = new VirginEntityGrapher('node', node_load($item->page_id));

    $title = $page_grapher->fieldGetOne('title_field');
    $url = 'node/' . $item->page_id;

    $page_links[] = virgin_components_festival_subnav_content_type_get_link($title, $url);
  }

  $links = array_merge($links, virgin_components_festival_subnav_content_type_order_links_array($page_links));

  return $links;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_components_festival_subnav_content_type_edit_form($form, &$form_state) {
  return $form;
}

/**
 *  Get a link array structure
 *
 * @return array
 */
function virgin_components_festival_subnav_content_type_get_link($title, $url, $show = TRUE, $target = '') {
  return array(
    'url' => url($url),
    'title' => $title,
    'active' => current_path() == $url,
    'show' => $show,
    'target' => $target,
  );
}

/**
 *  Sort links array alphabetically
 *
 * @return array
 */
function virgin_components_festival_subnav_content_type_order_links_array(&$links) {
  usort($links, function ($a, $b) {
    return strcasecmp( $a['title'], $b['title'] );
  });

  return $links;
}
