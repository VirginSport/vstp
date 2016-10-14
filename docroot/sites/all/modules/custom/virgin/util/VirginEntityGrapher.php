<?php

/**
 * @file
 * Contains the VirginEntityGrapher class
 */

/**
 * VirginEntityGrapher is an helper class to navigate over an entity object
 */
class VirginEntityGrapher {

  /**
   * The entity object
   *
   * @var object
   */
  protected $entity;

  /**
   * The entity type
   *
   * @var string
   */
  protected $entity_type;

  /**
   * The entity wrapper
   *
   * @var EntityDrupalWrapper
   */
  protected $entity_wrapper;

  /**
   * Constructor
   *
   * @param $entity_type
   *  The entity type
   * @param $entity
   *  The data array
   */
  public function __construct($entity_type, $entity) {
    $this->entity_type = $entity_type;
    $this->entity = $entity;
    $this->entity_wrapper = entity_metadata_wrapper($entity_type, $entity);
  }

  /**
   * Returns the value of a given property
   *
   * @param $property
   *  The property name
   * @param string $default
   *  The value to be returned if the property does not exist or is empty
   * @return bool|float|int|string
   *  The property value or the default value
   */
  public function property($property, $default = '') {
    $value = empty($this->entity->{$property}) ? $default : $this->entity->{$property};

    return $value;
  }

  /**
   * Returns the value of a property of a single row of a given field
   *
   * @param $name
   *  The field name
   * @param string $default
   *  The default value if the field is empty
   * @param string $property
   *  The property of the field to be returned
   * @param int $index
   *  The index of the field row to be returned
   * @return bool|float|int|string
   *  The value of the property in the field or the default if empty
   */
  public function fieldGetOne($name, $default = '', $property = 'value', $index = 0) {
    $language = $this->fieldLanguage($name);

    $value = empty($this->entity->{$name}[$language][$index][$property]) ? $default : $this->entity->{$name}[$language][$index][$property];

    return $value;
  }

  /**
   * Get the rendered field
   *
   * @param $name
   *  The name of the field
   * @return string
   *  The field output
   */
  public function fieldRendered($name) {
    $language = $this->fieldLanguage($name);

    // Creates a renderable array of the field, needs to be used to invoke
    // hooks related with field render
    $elements = field_view_field($this->entity_type, $this->entity, $name, array(), $language);

    // Get the rendered field
    return drupal_render($elements);
  }

  /**
   * Returns all the row values of a property of a a given field
   *
   * @param $name
   *  The field name
   * @param string $property
   *  The property of the field to be returned
   * @return bool|float|int|string
   *  The value of the property in the field or the default if empty
   */
  public function fieldGetAll($name, $property = 'value') {
    $language = $this->fieldLanguage($name);
    $values = array();

    if (!empty($this->entity->{$name}[$language])) {
      foreach ($this->entity->{$name}[$language] as $row) {
        if (!empty($row[$property])) {
          $values[] = $row[$property];
        }
      }
    }

    return $values;
  }

  /**
   * Returns a VirginEntityGrapher object with the loaded relationship
   *
   * @param $name
   *  The relationship field name
   * @param int $index
   *  The array index of relationship if multiple
   * @return \VirginEntityGrapher
   * The current VirginEntityGrapher or a new one with the relationship object
   */
  public function relation($name, $index = 0) {
    $language = $this->fieldLanguage($name);

    // Load wrapper for current entity
    $entity_wrapper = $this->entity_wrapper->language($language);

    // If property relationship does not exist return current grapher
    if (empty($entity_wrapper->{$name})) {
      return $this;
    }

    $entity = $entity_wrapper->{$name};

    // If field is multiple get the index
    if (!empty($this->entity->{$name}[$language]) && count($this->entity->{$name}[$language]) > 1) {
      $entity = $this->entity->{$name}[$language][$index];
    }

    // If relationship exists on index return a new VirginEntityGrapher with it
    if (!empty($entity->value())) {
      // Get relationship entity type
      $entity_type = $entity->type();

      return new VirginEntityGrapher($entity_type, $entity->value());
    }

    // If entity relationship not found return current VirginEntityGrapher
    return $this;
  }

  /**
   * Returns an array of VirginEntityGrapher objects with the loaded relationship
   *
   * @param $name
   *  The relationship field name
   * @return VirginEntityGrapher[]
   * An array of VirginEntityGrapher objects with the loaded relationships or
   * the current VirginEntityGrapher if no relationship exists
   */
  public function allRelations($name) {
    $language = $this->fieldLanguage($name);

    $entity_wrapper = $this->entity_wrapper->language($language);

    // The array to be populated with relationship entity graphers
    $entity_graphers = array();
    $index = 0;

    // Because I want to have access to each entity wrapper type, will use
    // an incremented index and a while entity relationship exists add it
    // to entity graphers array
    while (!empty($entity_wrapper->{$name}) && !empty($entity_wrapper->{$name}[$index++]->value())) {
      // Get relationship entity type
      $entity_type = $entity_wrapper->{$name}[$index]->type();

      $entity_graphers[] = new VirginEntityGrapher($entity_type, $entity_wrapper->{$name}[$index]->value());
    }

    // If entity relationships not found return current VirginEntityGrapher
    if (empty($entity_graphers)) {
      return array($this);
    }

    return $entity_graphers;
  }

  /**
   * Finds the language-key for a given field
   *
   * @param $name
   *  The field name
   * @return string
   *  The language key
   */
  protected function fieldLanguage($name) {
    $language = empty($this->entity->language) ? LANGUAGE_NONE : $this->entity->language;

    if (empty($this->entity->{$name}[$language]) && !empty($this->entity->{$name}[LANGUAGE_NONE])) {
      $language = LANGUAGE_NONE;
    }

    return $language;
  }
}
