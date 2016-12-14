import $ from '../lib/jquery';
import Drupal from '../lib/drupal';
import onResize from '../helper/on-resize';

/**
 * The list of outlines being tracked
 *
 * @type {Outline[]}
 */
const outlines = [];

export default () => {

  // Callback function to update the outlines
  let update = () => {
    outlines.forEach(o => o.update());
  };
  
  // Whenever the window is resized, check if the elements need to be resized
  onResize(update);
  
  // The elements might have changed size during an ajax request or other user
  // interactions, as such run update at an interval to ensure the titles are
  // properly adjusted to the container's width.
  window.setInterval(update, 500);
  
  // Register a behaviour handler to find if outlines have been added via AJAX
  // or initial page load.
  Drupal.behaviors.virginSportOutline = {
    attach: () => findOutlines()
  }
}

/**
 * Find and track all outlines for changes
 */
function findOutlines() {
  let $outlines = $('.vs-outline').not('.vs-outline--applied');

  $outlines
    .addClass('vs-outline--applied')
    .each((idx, el) => {
      outlines.push(new Outline(el));
    })
  ;
}

/**
 * Outlines applies an SVG outlined text to an element
 */
class Outline {
  
  /**
   * @param {Element} el
   *  The element to have its text contents extracted and converted into
   *  an SVG outlined text.
   */
  constructor(el) {
    this.el = el;
    this.lastTextWidth = 0;
    
    this.setup();
    this.update();
  }
  
  /**
   * Update the SVG element
   */
  update() {
    
    // If the element is not visible, bail out
    if (this.el.offsetParent === null) {
      return;
    }
    
    // Keep tracking the text width, as it might change during page load, i.e,
    // font has loaded. If the text width has not changed since we ran update
    // bail out now.
    let textWidth = this.text.getComputedTextLength();
    
    if (textWidth == this.lastTextWidth) {
      return;
    } else {
      this.lastTextWidth = textWidth;
    }

    // Otherwise compute everything
    let style = window.getComputedStyle(this.el);
    let lineHeight = parseInt(style['lineHeight'], 10);
    let parentWidth = this.el.parentNode.clientWidth;
    let totalWidth = 0;
    let largestWordWidth = 0;
    let rows = [[]];
    
    // Distribute words per row based on their width and available width
    this.words.forEach(word => {
      let width = word.getComputedTextLength();
      let y = Math.floor((width + totalWidth) / parentWidth);
  
      if (width > largestWordWidth) {
        largestWordWidth = width;
      }
  
      if (y > (rows.length - 1) && totalWidth != 0) {
        rows.push([]);
      }
      
      rows[rows.length - 1].push(word);
      totalWidth += width > parentWidth ? parentWidth : width;
    });
    
    // Calculate the svg width from either the larger parent node or a word
    let svgWidth = (largestWordWidth > parentWidth) ? largestWordWidth : parentWidth;
    
    // Helper function to either remove trailing space or add a trailing space
    let adjustSpace = (column, removeSpace) => {
      var txt = column.textContent;
    
      if (removeSpace) {
        column.textContent = txt.trim();
      } else if (txt[txt.length - 1] != ' ') {
        column.textContent = txt + ' ';
      }
    };
    
    // Helper function to align a column to the left
    let alignLeft = (column, state, isLast) => {
      adjustSpace(column, isLast);
      
      setAttributes(column, {
        y: `${(state.row + 1) * lineHeight}px`,
        x: `${state.totalWidth}px`
      });
      
      state.totalWidth += column.getComputedTextLength();
    };
  
    // Helper function to align a column to the right
    let alignRight = (column, state, isLast) => {
      adjustSpace(column, isLast);
      
      let width = column.getComputedTextLength();
      let xOffset = svgWidth - width - state.totalWidth;
      
      setAttributes(column, {
        y: `${(state.row + 1) * lineHeight}px`,
        x: `${xOffset < 0 ? 0 : xOffset}px`
      });
      
      state.totalWidth += width;
    };
    
    // Align the words inside each row, to either left or right depending on
    // the element text align style.
    rows.forEach((row, idx) => {
      let state = {
        totalWidth: 0,
        row: idx
      };
      
      if (style.textAlign == 'left') {
        for (let i = 0; i < row.length; i++) {
          alignLeft(row[i], state, (i == row.length - 1));
        }
      } else {
        for (let i = (row.length - 1); i > -1; i--) {
          alignRight(row[i], state, (i == row.length - 1));
        }
      }
    });
    
    // Apply the gradient rotation
    let bgRotation = parseInt(style['backgroundSize'], 10);
  
    // If for some reason rotation could not be parsed, fallback to 0
    bgRotation = isNaN(bgRotation) ? 0 : bgRotation;
    
    setAttributes(this.gradient, {
      gradientTransform: `rotate(${bgRotation})`
    });
    
    // And finally, adjust the SVG element width and height from the text
    // element size.
    let textBox = this.text.getBBox();
    
    setAttributes(this.svg, {
      height: `${textBox.height}px`,
      width: `${svgWidth}px`
    });
  }
  
  /**
   * Setup the SVG element
   */
  setup() {
    
    // Build the SVG element
    this.svg = element(null, 'svg', {
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg'
    });
    
    // Build the gradient element
    let defs = element(this.svg, 'defs');
    
    let gradientID = id();
    
    this.gradient = element(defs, 'linearGradient', {
      id: gradientID,
      x1: '0%',
      y1: '0%',
      x2: '100%',
      y2: '0%',
      class: 'gradient'
    });
    
    element(this.gradient, 'stop', {
      offset: '0%',
      'stop-color': '#fff',
      class: 'stop-a'
    });
    
    element(this.gradient, 'stop', {
      offset: '100%',
      'stop-color': '#fff',
      class: 'stop-b'
    });
    
    // Build the text elements
    this.text = element(this.svg, 'text', {
      'stroke': `url(#${gradientID})`,
      'fill': 'transparent'
    });
    
    this.words = [];
  
    this.el.textContent.split(' ').forEach(w => {
      let word = element(this.text, 'tspan');
      word.textContent = w + ' ';
      this.words.push(word);
    });

    // Finally, clear out the container element contents and inject the svg
    // into it.
    this.el.innerHTML = '';
    this.el.appendChild(this.svg);
  }
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
