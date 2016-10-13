<?php
/**
 * @file
 * Contains the VirginGrapher class
 */

/**
 * VirginGrapher is an helper class to navigate over an array graph
 */
class VirginGrapher {

  /**
   * @var mixed
   */
  protected $data;

  /**
   * Constructor
   *
   * @param $data
   *  The data to be navigated by the grapher
   */
  public function __construct($data) {
    $this->data = $data;
  }

  /**
   * Get a grapher object from a given property name
   *
   * @param string $name
   *  The property name
   * @return VirginGrapher
   *  The property grapher
   */
  public function get($name) {
    $data = (empty($this->data) || !isset($this->data[$name])) ? null : $this->data[$name];
    return new VirginGrapher($data);
  }

  /**
   * Returns an array of grapher objects with all the items in the current grapher
   *
   * @param \Closure $callback
   *  An optional callback that will be invoked for each item in the grapher
   * @return VirginGrapher[]
   *  A list of grapher instances
   */
  public function all(\Closure $callback = null) {
    $all = array();

    if (!is_array($this->data)) {
      return $all;
    }

    foreach ($this->data as $item) {
      $grapher = new VirginGrapher($item);
      $all[] = $grapher;

      if ($callback) {
        $callback($grapher);
      }
    }

    return $all;
  }

  /**
   * Gets a grapher object from the current grapher at the given position
   *
   * @param $position
   *  The position in the grapher list
   * @return VirginGrapher
   *  The grapher object at that position
   */
  public function index($position) {
    if (!is_array($this->data) || empty($this->data[$position])) {
      return new VirginGrapher(null);
    }

    return new VirginGrapher($this->data[$position]);
  }

  /**
   * Get a grapher instance from the grapher object at the first position
   *
   * @return VirginGrapher
   *  The grapher object at the first position
   */
  public function first() {
    return new VirginGrapher(reset($this->data));
  }

  /**
   * Get a grapher instance from the grapher object at the last position
   *
   * @return VirginGrapher
   *  The grapher object at the last position
   */
  public function last() {
    return new VirginGrapher(end($this->data));
  }

  /**
   * Returns a filtered list grapher objects
   *
   * @param \Closure $callback
   *  The callback that is called for each instance, only truthful
   *  returns will be kept.
   * @return VirginGrapher[]
   */
  public function filter(\Closure $callback = null) {
    $filtered = array();

    foreach ($this->all() as $item) {
      if ($callback($item)) {
        $filtered[] = $item;
      }
    }

    return $filtered;
  }

  /**
   * Gets the scalar value of the grapher object
   *
   * If the grapher raw data is not a scalar, the default value will be used.
   *
   * @param bool|float|int|string $default
   *  The default value to be returned if the raw grapher data isn't a scalar
   * @return bool|float|int|string
   *  The value of the grapher instance
   */
  public function value($default = '') {
    return is_scalar($this->data) ? $this->data : $default;
  }

  /**
   * Gets the array value of the grapher object
   *
   * If the grapher raw data is not an array, an empty array will be returned.
   *
   * @return array
   */
  public function items() {
    return is_array($this->data) ? $this->data : array();
  }

  /**
   * Returns the raw value contained in the grapher object
   *
   * @return mixed
   */
  public function raw() {
    return $this->data;
  }
}
