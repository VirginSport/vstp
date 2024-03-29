<?php

/**
 * @file
 * Class for Export UI to manage Fieldable Panels Pane bundles.
 */

/**
 * Fieldable Panels Panes type Export UI plugin class.
 */
class fieldable_panels_pane extends ctools_export_ui {

  /**
   * Add some additional operations for handling entities.
   */
  public function build_operations($item) {
    $base_path = ctools_export_ui_plugin_base_path($this->plugin);
    $name = $item->{$this->plugin['export']['key']};

    if (user_access('administer fieldable panels panes') || user_access('access fieldable panels panes master list')) {
      $operations['list'] = array(
        'title' => t('List'),
        'href' => $base_path . '/' . $name . '/list',
      );
    }

    if (user_access('administer fieldable panels panes') || user_access('create fieldable ' . $name)) {
      $operations['add_entity'] = array(
        'title' => t('Add Entity'),
        'href' => $base_path . '/' . $name . '/add',
      );
    }
    if (user_access('administer fieldable panels panes')) {
      $operations['edit_entity'] = array(
        'title' => t('Edit'),
        'href' => $base_path . '/' . $name . '/edit',
      );
      $operations['delete_entity'] = array(
        'title' => t('Delete'),
        'href' => $base_path . '/' . $name . '/delete',
      );
      $operations['export_entity'] = array(
        'title' => t('Export'),
        'href' => $base_path . '/' . $name . '/export',
      );
      if (module_exists('field_ui')) {
        $operations['field'] = array(
          'title' => t('Manage Fields'),
          'href' => $base_path . '/' . $name . '/fields',
        );
        $operations['display'] = array(
          'title' => t('Manage Display'),
          'href' => $base_path . '/' . $name . '/display',
        );
      }
    }
    return $operations;
  }

  /**
   * {@inheritdoc}
   */
  public function edit_form(&$form, &$form_state) {
    parent::edit_form($form, $form_state);

    // Allow users to jump right into adding fields.
    if (module_exists('field_ui')) {
      $form['buttons']['save_continue'] = array(
        '#type' => 'submit',
        '#value' => t('Save and add fields'),
        '#access' => $form_state['op'] == 'add' || $form_state['op'] == 'clone',
      );
    }
  }

  /**
   * {@inheritdoc}
   */
  public function edit_form_submit(&$form, &$form_state) {
    parent::edit_form_submit($form, $form_state);

    // Update the form state "op" so we can properly redirect.
    if ($form_state['triggering_element']['#parents'][0] == 'save_continue') {
      $form_state['op'] = 'save_continue';
    }
  }

  /**
   * {@inheritdoc}
   */
  public function edit_save_form($form_state) {
    parent::edit_save_form($form_state);

    // Ensure menu gets rebuild after saving a new type.
    entity_info_cache_clear();
    menu_rebuild();

    if ($form_state['op'] === 'save_continue') {
      $this->plugin['redirect']['save_continue'] = $this->field_admin_path($form_state['values']['name'], 'fields');
    }
  }

  /**
   * {@inheritdoc}
   */
  public function delete_form_submit(&$form_state) {
    parent::delete_form_submit($form_state);

    // Remove fields associated to bundles that are being deleted.
    if ($form_state['op'] == 'delete') {
      field_attach_delete_bundle('fieldable_panels_pane', $form_state['item']->name);
      entity_info_cache_clear();
    }
  }

  /**
   * List entities page.
   */
  public function list_entities_page($js, $input, $item, $step = NULL) {
    drupal_set_title($this->get_page_title('list_entity', $item));

    return views_embed_view('fieldable_pane_entities', 'default', $item->name);
  }

  /**
   * Add entity page.
   */
  public function add_entity_page($js, $input, $item, $step = NULL) {
    $args = func_get_args();
    drupal_set_title($this->get_page_title('add_entity', $item));

    $form_state = array(
      'entity' => fieldable_panels_panes_create(array('bundle' => $item->name)),
      'add submit' => TRUE,
      'plugin' => $this->plugin,
      'object' => &$this,
      'ajax' => $js,
      'item' => $item,
      'op' => 'add_entity',
      'no_redirect' => TRUE,
      'rerender' => TRUE,
      'step' => $step,
      'function args' => $args,
    );

    // Default these to reusable.
    $form_state['entity']->reusable = TRUE;
    $output = drupal_build_form('fieldable_panels_panes_entity_edit_form', $form_state);
    if (!empty($form_state['executed'])) {
      $this->redirect($form_state['op'], $form_state['item']);
    }

    return $output;
  }

  /**
   * List footer.
   */
  public function list_footer($form_state) {
    ctools_include('export');
    $items = ctools_export_crud_load_all('fieldable_panels_pane_type');
    $entity_info = entity_get_info('fieldable_panels_pane');

    $header = array(t('Name'), array('data' => t('Operations'), 'colspan' => 2));
    $rows = array();

    if (!empty($entity_info['bundles'])) {
      foreach ($entity_info['bundles'] as $bundle => $info) {
        // Filter out bundles that already exist as ctools exportable objects.
        if (isset($items[$bundle])) {
          continue;
        }

        $row = array();

        $label = check_plain($info['label']);
        $label .= ' <small>' . t('(Machine name: @type)', array('@type' => $bundle)) . '</small>';

        $row[] = $label;

        $operations = array();

        if (user_access('administer fieldable panels panes') || user_access('access fieldable panels panes master list')) {
          $operations['list'] = array(
            'title' => t('list'),
            'href' => 'admin/structure/fieldable-panels-panes/' . $bundle,
          );
        }
        if (user_access('administer fieldable panels panes')) {
          $operations['add'] = array(
            'title' => t('add'),
            'href' => 'admin/structure/fieldable-panels-panes/' . $bundle . '/add',
          );
          $operations['edit'] = array(
            'title' => t('edit'),
            'href' => 'admin/structure/fieldable-panels-panes/' . $bundle . '/edit',
          );
          $operations['delete'] = array(
            'title' => t('delete'),
            'href' => 'admin/structure/fieldable-panels-panes/' . $bundle . '/delete',
          );
          $operations['export'] = array(
            'title' => t('export'),
            'href' => 'admin/structure/fieldable-panels-panes/' . $bundle . '/export',
          );
          if (module_exists('field_ui')) {
            $operations['fields'] = array(
              'title' => t('manage fields'),
              'href' => $this->field_admin_path($bundle, 'fields'),
            );
            $operations['display'] = array(
              'title' => t('manage display'),
              'href' => $this->field_admin_path($bundle, 'display'),
            );
          }
        }

        $ops = theme('links', array(
          'links' => $operations,
          'attributes' => array('class' => array('links', 'inline')),
        ));

        $row[] = $ops;
        $rows[] = $row;
      }

      if (!empty($rows)) {
        $variables = array(
          'caption' => t('Legacy bundles that are not managed by the bundle administrative UI are listed here.'),
          'header' => $header,
          'rows' => $rows,
        );

        return theme('table', $variables);
      }
    }
  }

  /**
   * Helper method to derive paths to field UI operations.
   */
  public function field_admin_path($name, $op) {
    return _field_ui_bundle_admin_path('fieldable_panels_pane', $name) . '/' . $op;
  }

}
