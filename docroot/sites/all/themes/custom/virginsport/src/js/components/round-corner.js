import classColors from '../vars/class-colors';

/**
 * Adjustment value to the gradient rotation so that
 * the gradient rotation value is the same for both
 * CSS declarion and JS declaration.
 *
 * @type {number}
 */
const GRADIENT_ROTATE_ADJUST = -90;

/**
 * The number of pixels the curved part has.
 *
 * @type {number}
 */
const OFFSET_TOP = 50;

/**
 * RoundCorner creates an SVG rounded background to a given element
 */
export default class RoundCorner {
  
  /**
   * @param {Element} el
   */
  constructor(el) {
    this.el = el;
    this.lastWidth = 0;
    this.lastHeight = 0;
  
    this.setup();
    this.update();
  }
  
  /**
   * Update the SVG element
   */
  update() {
    let width = this.el.offsetWidth;
    let height = this.el.offsetHeight;
    
    // If the height did not change since last update, bailout
    if (this.lastWidth == width && this.lastHeight == height) {
      return;
    }
    
    this.lastHeight = height;
    this.lastWidth = width;

    // Otherwise update the round corners
    setAttributes(this.svg, {
      viewBox: `0 0 ${width} ${height + OFFSET_TOP}`
    });

    setAttributes(this.path, {
      d: getPath(width, height)
    });
  }
  
  /**
   * Setup the SVG element
   */
  setup() {
    this.pathID = id();
    this.gradientID = id();
    
    // Given the SVG is position absolutely inside the parent element
    // the parent element must be relatively positioned.
    setAttributes(this.el, {
      style: 'position: relative;'
    });
    
    this.svg = element(null, 'svg', {
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      preserveAspectRatio: 'xMinYMax slice',
      style: `position: absolute; top: -${OFFSET_TOP}px; left: 0; bottom: 0; right: 0; z-index: 0`
    });
  
    this.path = element(this.svg, 'path', {
      id: this.pathID,
      fill: `url(#${this.gradientID})`
    });
    
    // Fetch the gradient rules from the parent
    let g = getGradient(this.el);
  
    // Setup the gradient in the SVG
    this.gradient = element(this.svg, 'linearGradient', {
      id: this.gradientID,
      gradientUnits: 'userSpaceOnUse',
      gradientTransform: `rotate(${g.rotate + GRADIENT_ROTATE_ADJUST})`,
      x1: '0%',
      y1: '0%',
      x2: '100%',
      y2: '0%'
    });

    element(this.gradient, 'stop', {
      offset: '0%',
      'stop-color': g.from,
      'stop-opacity': 1
    });
  
    element(this.gradient, 'stop', {
      offset: '100%',
      'stop-color': g.to,
      'stop-opacity': 1
    });

    // Append the svg to the container element
    this.el.appendChild(this.svg);
  }
}

/**
 * Generates the SVG path definition for the round corner
 *
 * @returns {string}
 */
function getPath(w, h) {
  let cx_ratio = 0.199;
  let cx = w * cx_ratio;
  let cy = 0;
  
  return `M0 ${OFFSET_TOP} C ${cx} ${cy}, ${w - cx} ${cy}, ${w} ${OFFSET_TOP} V ${h + OFFSET_TOP} H 0 V 0 Z`;
}

/**
 * Generates a random unique identifier
 *
 * @returns {string}
 */
function id() {
  return 'svg__' + (Math.random().toString(36)+'00000000000000000').slice(2, 10+2);
}

/**
 * Creates an svg namespaced element
 *
 * @param {Element} parent
 *  The parent element
 * @param {string} name
 *  The element name, i.e 'circle'
 * @returns {Element}
 */
function element(parent, name, attrs) {
  let el = window.document.createElementNS('http://www.w3.org/2000/svg', name);
  
  if (attrs) {
    setAttributes(el, attrs);
  }
  
  if (parent) {
    parent.appendChild(el);
  }
  
  return el;
}

/**
 * Applies the given attributes to the given element
 *
 * @param {Element} el
 *  The element to which the attributes are to be applied
 * @param attrs
 *  The attributes to be applied
 */
function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

/**
 * Get the gradient configuration from the container element
 *
 * @param {Element} el
 */
function getGradient(el) {
  let classes = el.classList;
  
  for (let i = 0; i < classes.length; i++) {
    if (classColors.hasOwnProperty(classes[i])) {
      return classColors[classes[i]];
    }
  }
  
  return colors['default'];
}
