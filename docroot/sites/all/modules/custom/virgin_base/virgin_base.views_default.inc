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
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Status (field_event_status) */
  $handler->display->display_options['filters']['field_event_status_value']['id'] = 'field_event_status_value';
  $handler->display->display_options['filters']['field_event_status_value']['table'] = 'field_data_field_event_status';
  $handler->display->display_options['filters']['field_event_status_value']['field'] = 'field_event_status_value';
  $handler->display->display_options['filters']['field_event_status_value']['value'] = array(
    'announced' => 'announced',
    'in-progress' => 'in-progress',
    'open' => 'open',
  );
  $handler->display->display_options['filters']['field_event_status_value']['group'] = 1;
  $handler->display->display_options['filters']['field_event_status_value']['reduce_duplicates'] = TRUE;
  /* Filter criterion: Content: Event Type (field_event_type) */
  $handler->display->display_options['filters']['field_event_type_value']['id'] = 'field_event_type_value';
  $handler->display->display_options['filters']['field_event_type_value']['table'] = 'field_data_field_event_type';
  $handler->display->display_options['filters']['field_event_type_value']['field'] = 'field_event_type_value';
  $handler->display->display_options['filters']['field_event_type_value']['relationship'] = 'field_event_state_target_id';
  $handler->display->display_options['filters']['field_event_type_value']['value'] = array(
    'untimed_event' => 'untimed_event',
  );
  $handler->display->display_options['filters']['field_event_type_value']['group'] = 1;
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
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_event_state_target_id']['id'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_event_state_target_id']['table'] = 'field_data_field_event_state';
  $handler->display->display_options['relationships']['field_event_state_target_id']['field'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_event_state_target_id']['label'] = 'Event state';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_festival_state_target_id']['id'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['table'] = 'field_data_field_festival_state';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['field'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['relationship'] = 'field_event_state_target_id';
  $handler->display->display_options['relationships']['field_festival_state_target_id']['label'] = 'Festival state';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['id'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['field'] = 'reverse_field_festival_state_node';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['relationship'] = 'field_festival_state_target_id';
  $handler->display->display_options['relationships']['reverse_field_festival_state_node']['label'] = 'Festival';
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
  $handler->display->display_options['filter_groups']['groups'] = array(
    1 => 'OR',
  );
  /* Filter criterion: Content: Status (field_status) */
  $handler->display->display_options['filters']['field_status_value']['id'] = 'field_status_value';
  $handler->display->display_options['filters']['field_status_value']['table'] = 'field_data_field_status';
  $handler->display->display_options['filters']['field_status_value']['field'] = 'field_status_value';
  $handler->display->display_options['filters']['field_status_value']['value'] = array(
    'announced' => 'announced',
    'open' => 'open',
    'in-progress' => 'in-progress',
  );
  $handler->display->display_options['filters']['field_status_value']['group'] = 1;
  $handler->display->display_options['filters']['field_status_value']['expose']['operator_id'] = 'field_status_value_op';
  $handler->display->display_options['filters']['field_status_value']['expose']['label'] = 'Status (field_status)';
  $handler->display->display_options['filters']['field_status_value']['expose']['operator'] = 'field_status_value_op';
  $handler->display->display_options['filters']['field_status_value']['expose']['identifier'] = 'field_status_value';
  $handler->display->display_options['filters']['field_status_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
  );
  $handler->display->display_options['filters']['field_status_value']['reduce_duplicates'] = TRUE;
  /* Filter criterion: Content: Status (field_event_status) */
  $handler->display->display_options['filters']['field_event_status_value']['id'] = 'field_event_status_value';
  $handler->display->display_options['filters']['field_event_status_value']['table'] = 'field_data_field_event_status';
  $handler->display->display_options['filters']['field_event_status_value']['field'] = 'field_event_status_value';
  $handler->display->display_options['filters']['field_event_status_value']['value'] = array(
    'announced' => 'announced',
    'in-progress' => 'in-progress',
    'open' => 'open',
  );
  $handler->display->display_options['filters']['field_event_status_value']['reduce_duplicates'] = TRUE;

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
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('Event state'),
    t('Festival state'),
    t('Festival'),
    t('Status (field_status)'),
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
  $view->name = 'upcoming_festivals';
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
  /* Filter criterion: Content: Start Date (field_start_date) */
  $handler->display->display_options['filters']['field_start_date_value']['id'] = 'field_start_date_value';
  $handler->display->display_options['filters']['field_start_date_value']['table'] = 'field_data_field_start_date';
  $handler->display->display_options['filters']['field_start_date_value']['field'] = 'field_start_date_value';
  $handler->display->display_options['filters']['field_start_date_value']['relationship'] = 'field_festival_state_target_id';
  $handler->display->display_options['filters']['field_start_date_value']['operator'] = '>';
  $handler->display->display_options['filters']['field_start_date_value']['default_date'] = 'today';

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'panel_pane_1');
  $translatables['upcoming_festivals'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Festival state'),
    t('Start Date'),
    t('Content pane'),
    t('View panes'),
  );
  $export['upcoming_festivals'] = $view;

  return $export;
}
