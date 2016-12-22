<?php
/**
 * @file
 * Code for the virgin_region_handler_filter_region class.
 */

/**
 * Class virgin_region_handler_filter_region
 *
 * Filters views content from the current or other regions.
 */
class virgin_region_handler_filter_region extends views_handler_filter_boolean_operator {

  /**
   * @inheritdoc
   */
  function construct() {
    parent::construct();

    $this->value_value = t('Show content related to a region');
  }

  /**
   * @inheritdoc
   */
  function expose_form(&$form, &$form_state) {
    parent::expose_form($form,$form_state);

    // Override description to allow to insert the bundles that should be filtered by region
    $form['expose']['description'] = array(
      '#type' => 'textfield',
      '#default_value' => $this->options['expose']['description'],
      '#description' => t('Enter entity bundles separated by a comma'),
      '#title' => t('Entity Bundles'),
      '#size' => 60,
    );
  }

    /**
   * @inheritdoc
   */
  function get_value_options() {
    if (!isset($this->value_options)) {
      $this->value_title = t('Region');
      $this->value_options = array (
        '1' => t('Current region'),
        '0' => t('Other regions')
      );
    }
  }

  /**
   * @inheritdoc
   */
  function query() {
    $this->ensure_my_table();

    $current_region = virgin_region_current();
    $entity_bundles = '';

    // Have to check the entity bundles because we might have another entities with the same id
    if (!empty($this->options['expose']['description'])) {
      $entity_bundles = explode(',', $this->options['expose']['description']);
    }

    // If region was not found do not apply this filter
    if (empty($current_region)) {
      return;
    }

    // Region relationship is handled by field_region
    $region_table = 'field_data_field_region';

    // Only show results with a related region
    $join = new views_join();
    $join->construct($region_table, 'node', 'nid', 'entity_id', array(), 'INNER');
    $this->query->add_relationship($region_table, $join, $this->table_alias, $this->relationship);

    // Get results related to current region by default
    $symbol = '=';

    // Get results related to every regions except current
    if (empty($this->value)) {
      $symbol = '!=';
    }

    $this->query->add_where($this->options['group'], $region_table . '.field_region_target_id', $current_region['nid'], $symbol);

    if (!empty($entity_bundles)) {
      $this->query->add_where($this->options['group'], $region_table . '.bundle', $entity_bundles, 'IN');
    }
  }
}
