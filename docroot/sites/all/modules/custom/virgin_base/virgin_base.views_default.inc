<?php
/**
 * @file
 * virgin_base.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function virgin_base_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'event_reference';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Event Reference';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_event_state_target_id']['id'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_event_state_target_id']['table'] = 'field_data_field_event_state';
  $handler->display->display_options['relationships']['field_event_state_target_id']['field'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_event_state_target_id']['label'] = 'Event state';
  $handler->display->display_options['relationships']['field_event_state_target_id']['required'] = TRUE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_festival_state_target_id']['id'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['table'] = 'field_data_field_festival_state';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['field'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['relationship'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['label'] = 'Festival state';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['required'] = TRUE;
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['id'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['field'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['relationship'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['label'] = 'Festival';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['required'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['relationship'] = 'field_festival_state_target_id';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'event' => 'event',
  );
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type_1']['id'] = 'type_1';
  $handler->display->display_options['filters']['type_1']['table'] = 'node';
  $handler->display->display_options['filters']['type_1']['field'] = 'type';
  $handler->display->display_options['filters']['type_1']['relationship'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['filters']['type_1']['value'] = array(
    'festival' => 'festival',
  );
  /* Filter criterion: Content: End Date (field_end_date) */
  $handler->display->display_options['filters']['field_end_date_value']['id'] = 'field_end_date_value';
  $handler->display->display_options['filters']['field_end_date_value']['table'] = 'field_data_field_end_date';
  $handler->display->display_options['filters']['field_end_date_value']['field'] = 'field_end_date_value';
  $handler->display->display_options['filters']['field_end_date_value']['relationship'] = 'field_festival_state_target_id';
  $handler->display->display_options['filters']['field_end_date_value']['operator'] = '>';
  $handler->display->display_options['filters']['field_end_date_value']['expose']['operator_id'] = 'field_end_date_value_op';
  $handler->display->display_options['filters']['field_end_date_value']['expose']['label'] = 'End Date (field_end_date)';
  $handler->display->display_options['filters']['field_end_date_value']['expose']['operator'] = 'field_end_date_value_op';
  $handler->display->display_options['filters']['field_end_date_value']['expose']['identifier'] = 'field_end_date_value';
  $handler->display->display_options['filters']['field_end_date_value']['default_date'] = 'now -30days';

  /* Display: Entity Reference */
  $handler = $view->new_display('entityreference', 'Entity Reference', 'entityreference_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'entityreference_style';
  $handler->display->display_options['style_options']['search_fields'] = array(
    'title' => 'title',
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entityreference_fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $translatables['event_reference'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Event state'),
    t('Festival state'),
    t('Festival'),
    t('Nid'),
    t('End Date (field_end_date)'),
    t('Entity Reference'),
  );
  $export['event_reference'] = $view;

  $view = new view();
  $view->name = 'festival_event_reference';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Festival - Event Reference';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['query']['options']['disable_sql_rewrite'] = TRUE;
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_festival_state_target_id_1']['id'] = 'field_festival_state_target_id_1';
  $handler->display->display_options['relationships']['field_festival_state_target_id_1']['table'] = 'field_data_field_festival_state';
  $handler->display->display_options['relationships']['field_festival_state_target_id_1']['field'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id_1']['label'] = 'Festival state from Festival';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_event_state_target_id']['id'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_event_state_target_id']['table'] = 'field_data_field_event_state';
  $handler->display->display_options['relationships']['field_event_state_target_id']['field'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_event_state_target_id']['label'] = 'Event state from Event';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_festival_state_target_id']['id'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['table'] = 'field_data_field_festival_state';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['field'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['relationship'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['label'] = 'Festival state from Event';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['id'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['field'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['relationship'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['label'] = 'Festival from Event';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title_1']['hide_empty'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  $handler->display->display_options['filter_groups']['operator'] = 'OR';
  $handler->display->display_options['filter_groups']['groups'] = array(
    1 => 'AND',
    2 => 'AND',
  );
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type_2']['id'] = 'type_2';
  $handler->display->display_options['filters']['type_2']['table'] = 'node';
  $handler->display->display_options['filters']['type_2']['field'] = 'type';
  $handler->display->display_options['filters']['type_2']['value'] = array(
    'festival' => 'festival',
  );
  $handler->display->display_options['filters']['type_2']['group'] = 1;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type_1']['id'] = 'type_1';
  $handler->display->display_options['filters']['type_1']['table'] = 'node';
  $handler->display->display_options['filters']['type_1']['field'] = 'type';
  $handler->display->display_options['filters']['type_1']['relationship'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['filters']['type_1']['value'] = array(
    'festival' => 'festival',
  );
  $handler->display->display_options['filters']['type_1']['group'] = 2;
  /* Filter criterion: Content: End Date (field_end_date) */
  $handler->display->display_options['filters']['field_end_date_value']['id'] = 'field_end_date_value';
  $handler->display->display_options['filters']['field_end_date_value']['table'] = 'field_data_field_end_date';
  $handler->display->display_options['filters']['field_end_date_value']['field'] = 'field_end_date_value';
  $handler->display->display_options['filters']['field_end_date_value']['relationship'] = 'field_festival_state_target_id';
  $handler->display->display_options['filters']['field_end_date_value']['operator'] = '>';
  $handler->display->display_options['filters']['field_end_date_value']['group'] = 2;
  $handler->display->display_options['filters']['field_end_date_value']['form_type'] = 'date_text';
  $handler->display->display_options['filters']['field_end_date_value']['default_date'] = 'now - 30 days';
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'event' => 'event',
  );
  $handler->display->display_options['filters']['type']['group'] = 2;
  /* Filter criterion: Content: End Date (field_end_date) */
  $handler->display->display_options['filters']['field_end_date_value_1']['id'] = 'field_end_date_value_1';
  $handler->display->display_options['filters']['field_end_date_value_1']['table'] = 'field_data_field_end_date';
  $handler->display->display_options['filters']['field_end_date_value_1']['field'] = 'field_end_date_value';
  $handler->display->display_options['filters']['field_end_date_value_1']['relationship'] = 'field_festival_state_target_id_1';
  $handler->display->display_options['filters']['field_end_date_value_1']['operator'] = '>';
  $handler->display->display_options['filters']['field_end_date_value_1']['form_type'] = 'date_text';
  $handler->display->display_options['filters']['field_end_date_value_1']['default_date'] = 'now - 30 days';

  /* Display: Entity Reference */
  $handler = $view->new_display('entityreference', 'Entity Reference', 'entityreference_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'entityreference_style';
  $handler->display->display_options['style_options']['search_fields'] = array(
    'title' => 'title',
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entityreference_fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $translatables['festival_event_reference'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Festival state from Festival'),
    t('Event state from Event'),
    t('Festival state from Event'),
    t('Festival from Event'),
    t('Entity Reference'),
  );
  $export['festival_event_reference'] = $view;

  $view = new view();
  $view->name = 'package_reference';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Package Reference';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_package_state_target_id']['id'] = 'field_package_state_target_id';
  $handler->display->display_options['relationships']['field_package_state_target_id']['table'] = 'field_data_field_package_state';
  $handler->display->display_options['relationships']['field_package_state_target_id']['field'] = 'field_package_state_target_id';
  $handler->display->display_options['relationships']['field_package_state_target_id']['label'] = 'Package state';
  $handler->display->display_options['relationships']['field_package_state_target_id']['required'] = TRUE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_festival_state_target_id']['id'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['table'] = 'field_data_field_festival_state';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['field'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['relationship'] = 'field_package_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['label'] = 'Festival state';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['required'] = TRUE;
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['id'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['field'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['relationship'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['label'] = 'Festival';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['required'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'package' => 'package',
  );
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = '1';
  $handler->display->display_options['filters']['status']['group'] = 1;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type_1']['id'] = 'type_1';
  $handler->display->display_options['filters']['type_1']['table'] = 'node';
  $handler->display->display_options['filters']['type_1']['field'] = 'type';
  $handler->display->display_options['filters']['type_1']['relationship'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['filters']['type_1']['value'] = array(
    'festival' => 'festival',
  );
  /* Filter criterion: Content: End Date (field_end_date) */
  $handler->display->display_options['filters']['field_end_date_value']['id'] = 'field_end_date_value';
  $handler->display->display_options['filters']['field_end_date_value']['table'] = 'field_data_field_end_date';
  $handler->display->display_options['filters']['field_end_date_value']['field'] = 'field_end_date_value';
  $handler->display->display_options['filters']['field_end_date_value']['relationship'] = 'field_festival_state_target_id';
  $handler->display->display_options['filters']['field_end_date_value']['operator'] = '<';
  $handler->display->display_options['filters']['field_end_date_value']['default_date'] = 'now';

  /* Display: Entity Reference */
  $handler = $view->new_display('entityreference', 'Entity Reference', 'entityreference_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'entityreference_style';
  $handler->display->display_options['style_options']['search_fields'] = array(
    'title' => 'title',
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entityreference_fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $translatables['package_reference'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('Package state'),
    t('Festival state'),
    t('Festival'),
    t('Entity Reference'),
  );
  $export['package_reference'] = $view;

  $view = new view();
  $view->name = 'ticket_reference';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Ticket Reference';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_ticket_type_state_target_id']['id'] = 'field_ticket_type_state_target_id';
  $handler->display->display_options['relationships']['field_ticket_type_state_target_id']['table'] = 'field_data_field_ticket_type_state';
  $handler->display->display_options['relationships']['field_ticket_type_state_target_id']['field'] = 'field_ticket_type_state_target_id';
  $handler->display->display_options['relationships']['field_ticket_type_state_target_id']['label'] = 'ticket_type_state';
  $handler->display->display_options['relationships']['field_ticket_type_state_target_id']['required'] = TRUE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_event_state_target_id']['id'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_event_state_target_id']['table'] = 'field_data_field_event_state';
  $handler->display->display_options['relationships']['field_event_state_target_id']['field'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_event_state_target_id']['relationship'] = 'field_ticket_type_state_target_id';
  $handler->display->display_options['relationships']['field_event_state_target_id']['label'] = 'Event state';
  $handler->display->display_options['relationships']['field_event_state_target_id']['required'] = TRUE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_festival_state_target_id']['id'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['table'] = 'field_data_field_festival_state';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['field'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['relationship'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['label'] = 'Festival state';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['required'] = TRUE;
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['id'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['field'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['relationship'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['label'] = 'Festival';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['required'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'ticket_type' => 'ticket_type',
  );
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = '1';
  $handler->display->display_options['filters']['status']['group'] = 1;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type_1']['id'] = 'type_1';
  $handler->display->display_options['filters']['type_1']['table'] = 'node';
  $handler->display->display_options['filters']['type_1']['field'] = 'type';
  $handler->display->display_options['filters']['type_1']['relationship'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['filters']['type_1']['value'] = array(
    'festival' => 'festival',
  );

  /* Display: Entity Reference */
  $handler = $view->new_display('entityreference', 'Entity Reference', 'entityreference_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'entityreference_style';
  $handler->display->display_options['style_options']['search_fields'] = array(
    'title' => 'title',
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entityreference_fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $translatables['ticket_reference'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('ticket_type_state'),
    t('Event state'),
    t('Festival state'),
    t('Festival'),
    t('Entity Reference'),
  );
  $export['ticket_reference'] = $view;

  $view = new view();
  $view->name = 'vs_upcoming_festivals';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Upcoming Festivals';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['group_by'] = TRUE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'node';
  $handler->display->display_options['row_options']['links'] = FALSE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_festival_state_target_id']['id'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['table'] = 'field_data_field_festival_state';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['field'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['label'] = 'Festival state';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['required'] = TRUE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Start Date */
  $handler->display->display_options['fields']['field_start_date']['id'] = 'field_start_date';
  $handler->display->display_options['fields']['field_start_date']['table'] = 'field_data_field_start_date';
  $handler->display->display_options['fields']['field_start_date']['field'] = 'field_start_date';
  $handler->display->display_options['fields']['field_start_date']['relationship'] = 'field_festival_state_target_id';
  $handler->display->display_options['fields']['field_start_date']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
    'show_remaining_days' => 0,
  );
  /* Sort criterion: Content: Start Date (field_start_date) */
  $handler->display->display_options['sorts']['field_start_date_value']['id'] = 'field_start_date_value';
  $handler->display->display_options['sorts']['field_start_date_value']['table'] = 'field_data_field_start_date';
  $handler->display->display_options['sorts']['field_start_date_value']['field'] = 'field_start_date_value';
  $handler->display->display_options['sorts']['field_start_date_value']['relationship'] = 'field_festival_state_target_id';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'festival' => 'festival',
  );
  /* Filter criterion: Content: Regional content */
  $handler->display->display_options['filters']['virgin_region']['id'] = 'virgin_region';
  $handler->display->display_options['filters']['virgin_region']['table'] = 'node';
  $handler->display->display_options['filters']['virgin_region']['field'] = 'virgin_region';
  $handler->display->display_options['filters']['virgin_region']['value'] = '1';
  $handler->display->display_options['filters']['virgin_region']['exposed'] = TRUE;
  $handler->display->display_options['filters']['virgin_region']['expose']['operator_id'] = '';
  $handler->display->display_options['filters']['virgin_region']['expose']['label'] = 'Show content related to a region';
  $handler->display->display_options['filters']['virgin_region']['expose']['operator'] = 'virgin_region_op';
  $handler->display->display_options['filters']['virgin_region']['expose']['identifier'] = 'virgin_region';
  $handler->display->display_options['filters']['virgin_region']['expose']['required'] = TRUE;
  $handler->display->display_options['filters']['virgin_region']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
  );
  /* Filter criterion: Content: Start Date (field_start_date) */
  $handler->display->display_options['filters']['field_start_date_value']['id'] = 'field_start_date_value';
  $handler->display->display_options['filters']['field_start_date_value']['table'] = 'field_data_field_start_date';
  $handler->display->display_options['filters']['field_start_date_value']['field'] = 'field_start_date_value';
  $handler->display->display_options['filters']['field_start_date_value']['relationship'] = 'field_festival_state_target_id';
  $handler->display->display_options['filters']['field_start_date_value']['operator'] = '>';
  $handler->display->display_options['filters']['field_start_date_value']['default_date'] = 'today';

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'vs_upcoming_festivals_pane');
  $handler->display->display_options['pane_title'] = 'Upcoming Festivals';
  $handler->display->display_options['pane_category']['name'] = 'Lists';
  $handler->display->display_options['pane_category']['weight'] = '0';
  $handler->display->display_options['allow']['use_pager'] = 0;
  $handler->display->display_options['allow']['items_per_page'] = 0;
  $handler->display->display_options['allow']['offset'] = 0;
  $handler->display->display_options['allow']['link_to_view'] = 0;
  $handler->display->display_options['allow']['more_link'] = 0;
  $handler->display->display_options['allow']['path_override'] = 0;
  $handler->display->display_options['allow']['title_override'] = 0;
  $handler->display->display_options['allow']['exposed_form'] = 'exposed_form';
  $handler->display->display_options['allow']['fields_override'] = 0;
  $translatables['vs_upcoming_festivals'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Festival state'),
    t('Start Date'),
    t('Show content related to a region'),
    t('Content pane'),
    t('Upcoming Festivals'),
    t('Lists'),
  );
  $export['vs_upcoming_festivals'] = $view;

  return $export;
}
