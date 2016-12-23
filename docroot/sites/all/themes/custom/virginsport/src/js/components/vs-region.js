import onResize from '../helper/on-resize';
import $ from '../lib/jquery';

/**
 * Adjustment value to the gradient rotation so that
 * the gradient rotation value is the same for both
 * CSS declarion and JS declaration.
 *
 * @type {number}
 */
const GRADIENT_ROTATE_ADJUST = 90;

/**
 * The height to width ratio of the curve
 *
 * @type {number}
 */
const CURVE_WIDTH_HEIGHT_RATIO = 0.041;

/**
 * A list of selectors for which the margin
 * bottom does not apply.
 *
 * @type {string[]}
 */
const SPACERLESS_LAST_COMPONENTS = [
  '.vs-hero-banner',
];

/**
 * A list of selectors for which the margin
 * bottom does not apply who have the
 * space applied as a padding.
 *
 * @type {string[]}
 */
const SELF_PADDED_COMPONENTS = [
  '.vs-introduction__container-wrapper',
  '.vs-cta-block__item'
];

/**
 * The list of regions being tracked
 *
 * @type {Region[]}
 */
const regions = [];

/**
 * Tracks if the vs-region script has run at least once
 *
 * @type {boolean}
 */
let hasRun = false;

export default () => {

  // Callback function to update the region
  let update = () => {
    regions.forEach(r => r.update());
  };
  
  // Whenever the window is resized, check if the elements need to be resized
  onResize(update);

  // The elements might have changed size during an ajax request or other user
  // interactions, as such run update at an interval to ensure the background
  // occupies the full size of the element.
  window.setInterval(update, 500);
  
  // Register a behaviour handler to find if regions have been added via AJAX
  // or initial page load
  Drupal.behaviors.virginSportCurve = {
    attach: () => findRegions()
  };
};

/**
 * Find and track all regions for changes
 */
function findRegions() {
  let $regions = $('.vs-region').not('.vs-region--found');
  
  $regions
    .addClass('vs-region--found')
    .each((idx, el) => {
      
      // Create regions
      regions.push(new Region(el, regions[idx - 1]));
      
      // Find if spacer needs to be hidden due to some components being the last
      // components in the region.
      let $region = $(el);
      let spacerless_components = SPACERLESS_LAST_COMPONENTS.concat(SELF_PADDED_COMPONENTS);
      let spacerless_component_selector = spacerless_components.join(',');
      let self_padded_components_selector = SELF_PADDED_COMPONENTS.join(',');
      
      // Make sure the element preceding the region background, if it's one of
      // the spacerless components, mark them as such.
      let $prev = $region.find('.vs-region__bg').prev();
      let $prevChildren = $prev.find(spacerless_component_selector);
      let $prevComponent = $prev.filter(spacerless_component_selector);
      
      // Find if the component is self padded, and if it is, mark it as such
      $prevChildren.filter(self_padded_components_selector).addClass('vs-region-self-padded');
      $prevComponent.filter(self_padded_components_selector).addClass('vs-region-self-padded');
      
      if ($prevChildren.length || $prevComponent.length) {
        $region.addClass('vs-region--hide-bg-spacer');
      }
    })
  ;

  if (!hasRun) {
    $('html').attr('vs-region-loading', '');
    hasRun = true;
  }
}

/**
 * Region applies an SVG background to a given element
 */
class Region {
  
  /**
   * @param {Element} el
   */
  constructor(el, previousRegion) {
    this.el = el;
    this.lastWidth = 0;
    this.lastHeight = 0;
    this.isCurved = el.getAttribute('data-vs-region-curved') == true;
    this.previousRegion = previousRegion;
    
    this.setup();
    this.update();
  }

  /**
   * Update the SVG element
   */
  update() {
    
    // If the parent element is not visible, bailout
    if (this.el.offsetParent === null) {
      return;
    }
    
    let width = this.el.offsetWidth;
    let height = this.el.offsetHeight;
    
    // If the height did not change since last update, bailout
    if (this.lastWidth == width && this.lastHeight == height) {
      return;
    }
    
    this.lastHeight = height;
    this.lastWidth = width;

    // Compute the heights
    let curveHeight = width * CURVE_WIDTH_HEIGHT_RATIO;
    let svgHeight = this.isCurved ? (height + curveHeight) : height;
    let offsetHeight = this.isCurved ? curveHeight * -1 : 0;
    
    // And update the drawn path properties accordingly
    setAttributes(this.svg, {
      viewBox: `0 0 ${width} ${svgHeight}`,
      style: `position: absolute; top: ${offsetHeight}px; left: 0; bottom: 0; right: 0; z-index: 0`
    });
    
    setAttributes(this.spacer, {
      style: `height: ${curveHeight}px`
    });

    setAttributes(this.path, {
      d: getCurvePath(width, height)
    });

    if (!this.isCurved) {
      setAttributes(this.svg, { style: 'display: none' });
    }
    
    if (this.previousRegion && this.previousRegion.spacer) {
      setAttributes(this.previousRegion.el, {
        'data-vs-next-region-overlap': this.el.getAttribute('data-vs-region-overlap'),
        'data-vs-next-region-curved': this.el.getAttribute('data-vs-region-curved')
      });

      setAttributes(this.previousRegion.spacer, {
        'data-vs-region-overlap': this.el.getAttribute('data-vs-region-overlap'),
        'data-vs-region-curved': this.el.getAttribute('data-vs-region-curved')
      });
    }
  
    // Apply the background rotation
    let style = window.getComputedStyle(this.svg);
    let bgRotation = parseInt(style['backgroundSize'], 10);
    
    // If for some reason rotation could not be parsed, fallback to 0
    bgRotation = isNaN(bgRotation) ? 0 : bgRotation;
  
    setAttributes(this.gradient, {
      gradientTransform: `rotate(${bgRotation + GRADIENT_ROTATE_ADJUST})`
    });

    $('body').trigger('vs_region__finished');
  }

  /**
   * Setup the SVG and Spacer elements
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
      class: 'vs-region__bg'
    });
  
    this.path = element(this.svg, 'path', {
      id: this.pathID,
      fill: `url(#${this.gradientID})`
    });
  
    // Setup the gradient in the SVG
    this.gradient = element(this.svg, 'linearGradient', {
      id: this.gradientID,
      gradientUnits: 'userSpaceOnUse',
      x1: '0%',
      y1: '0%',
      x2: '100%',
      y2: '0%'
    });

    element(this.gradient, 'stop', {
      offset: '0%',
      'stop-color': '#fff',
      'stop-opacity': 1,
      class: 'stop-a'
    });
  
    element(this.gradient, 'stop', {
      offset: '100%',
      'stop-color': '#fff',
      'stop-opacity': 1,
      class: 'stop-b'
    });
    
    // Setup background image
    let background = 'http://uk-dev.virginsport.com/sites/default/files/styles/virgin_original/public/thumbnails/image/festival_hackney_background_top_content.jpg?itok=PVujQ357';
  
    if (background) {
      this.patternID = id();
  
      this.defs = element(this.svg, 'defs');
  
      this.pattern = element(this.defs, 'pattern', {
        id: this.patternID,
        patternUnits: 'userSpaceOnUse',
        width: '100%',
        height: '100%',
        x: 0,
        y: 0
      });
  
      this.image = element(this.pattern, 'image', {
        x: 0,
        y: 0,
        width: '100%',
        height: '100%',
        preserveAspectRatio: 'xMinYMin slice'
      });
  
      setAttributes(this.path, {
        fill: `url(#${this.patternID})`
      });
  
      this.svg.setAttributeNS( "http://www.w3.org/1999/xmlns", "xlink", "http://www.w3.org/1999/xlink");
      this.image.setAttributeNS( "http://www.w3.org/1999/xlink", "href", background);
    }

    // Create a spacer element to cover region spacing
    this.spacer = window.document.createElement('div');
    
    setAttributes(this.spacer, {
      class: 'vs-region__bg-spacer'
    });

    // Finally, append the svg and spacer to the container element
    this.el.appendChild(this.svg);
    this.el.appendChild(this.spacer);
  }
}

/**
 * Generates the SVG path definition for the round corner
 *
 * @returns {string}
 */
function getCurvePath(w, h) {
  let cx_ratio = 0.3;
  let cx = w * cx_ratio;
  let cy = 0;
  let y = w * CURVE_WIDTH_HEIGHT_RATIO;
  
  return `M0 ${y} C ${cx} ${cy}, ${w - cx} ${cy}, ${w} ${y} V ${h + y} H 0 V 0 Z`;
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
