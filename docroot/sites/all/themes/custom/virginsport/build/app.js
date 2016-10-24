/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Webpack JS entry file
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);

	// Build images into build folder, requireAll is not available on compiled js file
	if (typeof requireAll === 'function') {
	    requireAll(__webpack_require__(10));
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vsHeader = __webpack_require__(4);

	var _vsHeader2 = _interopRequireDefault(_vsHeader);

	var _vsRegion = __webpack_require__(5);

	var _vsRegion2 = _interopRequireDefault(_vsRegion);

	var _vsIpe = __webpack_require__(9);

	var _vsIpe2 = _interopRequireDefault(_vsIpe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _vsHeader2.default)();
	(0, _vsRegion2.default)();
	(0, _vsIpe2.default)();

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var $body = $('body');
	  var $header = $('.vs-header');

	  userDropdown($body, $header);
	  mobileMenu($body, $header);
	};

	var $ = window.jQuery;

	/**
	 * Activates the user dropdown
	 *
	 * @param $body
	 * @param $header
	 */
	function userDropdown($body, $header) {
	  var isOpen = false;
	  var $menu = $header.find('.vs-user-menu');
	  var $trigger = $menu.find('.vs-user-menu__trigger');
	  var $dropdown = $menu.find('.vs-user-dropdown');

	  // The user dropdown is closed if the user clicks anywhere in
	  // the page but the dropdown area while the dropdown is open.
	  $body.on('click', function (e) {
	    if (isOpen && !$.contains($menu[0], e.target)) {
	      close();
	    }
	  });

	  // Toggle the dropdown states
	  $trigger.on('click', function () {
	    if (isOpen) {
	      close();
	    } else {
	      open();
	    }
	  });

	  function open() {
	    $trigger.addClass('vs-user-menu__trigger--active');
	    $dropdown.addClass('vs-user-dropdown--open');
	    isOpen = true;
	  }

	  function close() {
	    $trigger.removeClass('vs-user-menu__trigger--active');
	    $dropdown.removeClass('vs-user-dropdown--open');
	    isOpen = false;
	  }
	}

	/**
	 * Activates the mobile menu
	 *
	 * @param $body
	 * @param $header
	 */
	function mobileMenu($body, $header) {
	  var $trigger = $body.find('.vs-menu-trigger');

	  $trigger.on('click', function () {
	    $body.toggleClass('vs-menu-open');
	  });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _brandColors = __webpack_require__(6);

	var _brandColors2 = _interopRequireDefault(_brandColors);

	var _onResize = __webpack_require__(7);

	var _onResize2 = _interopRequireDefault(_onResize);

	var _jquery = __webpack_require__(8);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Adjustment value to the gradient rotation so that
	 * the gradient rotation value is the same for both
	 * CSS declarion and JS declaration.
	 *
	 * @type {number}
	 */
	var GRADIENT_ROTATE_ADJUST = -90;

	/**
	 * The height to width ratio of the curve
	 *
	 * @type {number}
	 */
	var CURVE_WIDTH_HEIGHT_RATIO = 0.041;

	/**
	 * A list of selectors for which the margin
	 * bottom does not apply.
	 *
	 * @type {string[]}
	 */
	var SPACERLESS_LAST_COMPONENTS = ['.vs-cta-block', '.vs-hero-banner'];

	/**
	 * The list of regions being tracked
	 *
	 * @type {Region[]}
	 */
	var regions = [];

	exports.default = function () {

	  // Callback function to update the region
	  var update = function update() {
	    regions.forEach(function (r) {
	      return r.update();
	    });
	  };

	  // Whenever the window is resized, check if the elements need to be resized
	  (0, _onResize2.default)(update);

	  // The elements might have changed size during an ajax request or other user
	  // interactions, as such run update at an interval to ensure the background
	  // occupies the full size of the element.
	  window.setInterval(update, 500);

	  // Register a behaviour handler to find if regions have been added via AJAX
	  // or initial page load
	  Drupal.behaviors.virginSportCurve = {
	    attach: function attach() {
	      findRegions();
	    }
	  };
	};

	/**
	 * Find and track all regions for changes
	 */


	function findRegions() {
	  var $regions = (0, _jquery2.default)('.vs-region').not('.vs-region--found');

	  $regions.addClass('vs-region--found').each(function (idx, el) {

	    // Create regions
	    regions.push(new Region(el, regions[idx - 1]));

	    // Find it spacer needs to be removed
	    var $region = (0, _jquery2.default)(el);
	    var $last = $region.find('.panels-ipe-portlet-wrapper').last();
	    var $cta = $last.find(SPACERLESS_LAST_COMPONENTS.join(','));

	    if ($cta.length) {
	      $region.addClass('vs-region--hide-bg-spacer');
	    }
	  });
	}

	/**
	 * Region applies an SVG background to a given element
	 */

	var Region = function () {

	  /**
	   * @param {Element} el
	   */
	  function Region(el, previousRegion) {
	    _classCallCheck(this, Region);

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


	  _createClass(Region, [{
	    key: 'update',
	    value: function update() {
	      var width = this.el.offsetWidth;
	      var height = this.el.offsetHeight;

	      // If the height did not change since last update, bailout
	      if (this.lastWidth == width && this.lastHeight == height) {
	        return;
	      }

	      this.lastHeight = height;
	      this.lastWidth = width;

	      // Compute the heights
	      var curveHeight = width * CURVE_WIDTH_HEIGHT_RATIO;
	      var svgHeight = this.isCurved ? height + curveHeight : height;
	      var offsetHeight = this.isCurved ? curveHeight * -1 : 0;

	      // And update the drawn path properties accordingly
	      setAttributes(this.svg, {
	        viewBox: '0 0 ' + width + ' ' + svgHeight,
	        style: 'position: absolute; top: ' + offsetHeight + 'px; left: 0; bottom: 0; right: 0; z-index: 0'
	      });

	      setAttributes(this.spacer, {
	        style: 'height: ' + curveHeight + 'px'
	      });

	      setAttributes(this.path, {
	        d: getCurvePath(width, height)
	      });

	      if (!this.isCurved) {
	        setAttributes(this.svg, { style: 'display: none' });
	      }

	      if (this.previousRegion && this.previousRegion.spacer) {
	        setAttributes(this.previousRegion.spacer, {
	          'data-vs-region-overlap': this.el.getAttribute('data-vs-region-overlap'),
	          'data-vs-region-curved': this.el.getAttribute('data-vs-region-curved')
	        });
	      }
	    }

	    /**
	     * Setup the SVG and Spacer elements
	     */

	  }, {
	    key: 'setup',
	    value: function setup() {
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
	        fill: 'url(#' + this.gradientID + ')'
	      });

	      // Fetch the gradient rules from the parent
	      var g = getGradient(this.el);

	      // Setup the gradient in the SVG
	      this.gradient = element(this.svg, 'linearGradient', {
	        id: this.gradientID,
	        gradientUnits: 'userSpaceOnUse',
	        gradientTransform: 'rotate(' + (parseInt(g.rotate) + GRADIENT_ROTATE_ADJUST) + ')',
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

	      // Create a spacer element to cover region spacing
	      this.spacer = window.document.createElement('div');

	      setAttributes(this.spacer, {
	        class: 'vs-region__bg-spacer'
	      });

	      // Finally, append the svg and spacer to the container element
	      this.el.appendChild(this.svg);
	      this.el.appendChild(this.spacer);
	    }
	  }]);

	  return Region;
	}();

	/**
	 * Generates the SVG path definition for the round corner
	 *
	 * @returns {string}
	 */


	function getCurvePath(w, h) {
	  var cx_ratio = 0.3;
	  var cx = w * cx_ratio;
	  var cy = 0;
	  var y = w * CURVE_WIDTH_HEIGHT_RATIO;

	  return 'M0 ' + y + ' C ' + cx + ' ' + cy + ', ' + (w - cx) + ' ' + cy + ', ' + w + ' ' + y + ' V ' + (h + y) + ' H 0 V 0 Z';
	}

	/**
	 * Generates a random unique identifier
	 *
	 * @returns {string}
	 */
	function id() {
	  return 'svg__' + (Math.random().toString(36) + '00000000000000000').slice(2, 10 + 2);
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
	  var el = window.document.createElementNS('http://www.w3.org/2000/svg', name);

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
	  for (var key in attrs) {
	    el.setAttribute(key, attrs[key]);
	  }
	}

	/**
	 * Get the gradient configuration from the container element
	 *
	 * @param {Element} el
	 */
	function getGradient(el) {
	  var color = el.getAttribute('data-vs-region-color');

	  if (_brandColors2.default.hasOwnProperty(color)) {
	    return _brandColors2.default[color];
	  }

	  return _brandColors2.default['default'];
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _black, _gray, _white;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  default: {
	    from: '#F0F0F0',
	    to: '#F0F0F0',
	    rotate: 0
	  },

	  // Extra Colors
	  black: (_black = {
	    from: '#000000'
	  }, _defineProperty(_black, 'from', '#000000'), _defineProperty(_black, 'rotate', 0), _black),
	  gray: (_gray = {
	    from: '#F0F0F0'
	  }, _defineProperty(_gray, 'from', '#F0F0F0'), _defineProperty(_gray, 'rotate', 0), _gray),
	  white: (_white = {
	    from: '#FFFFFF'
	  }, _defineProperty(_white, 'from', '#FFFFFF'), _defineProperty(_white, 'rotate', 0), _white),

	  // Virgin Brand Colors
	  blue: {
	    from: '#1F85FF',
	    to: '#4231CB',
	    rotate: 135
	  },
	  teal: {
	    from: '#01B9C0',
	    to: '#001642',
	    rotate: 135
	  },
	  orange: {
	    from: '#FF5858',
	    to: '#FFE386',
	    rotate: 135
	  },
	  purple: {
	    from: '#9D50BB',
	    to: '#3A2899',
	    rotate: 135
	  },
	  brown: {
	    from: '#840324',
	    to: '#061161',
	    rotate: 135
	  },
	  rose: {
	    from: '#F857A6',
	    to: '#FF5858',
	    rotate: 135
	  },
	  violet: {
	    from: '#FB8B5F',
	    to: '#504EA1',
	    rotate: 135
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var callbacks = [];

	window.addEventListener('resize', function () {
	  window.requestAnimationFrame(function () {
	    callbacks.forEach(function (cb) {
	      return cb();
	    });
	  });
	});

	/**
	 * Executes the given callback everytime the window is resized
	 *
	 * @param {function} callback
	 */

	exports.default = function (callback) {
	  callbacks.push(callback);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = window.jQuery;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(8);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  window.Drupal.behaviors.virginIPE = {
	    attach: function attach() {
	      (0, _jquery2.default)('.panels-ipe-portlet-wrapper').each(function (idx, el) {
	        var $wrapper = (0, _jquery2.default)(el);
	        var $first = $wrapper.find('.panels-ipe-portlet-content > *').first();
	        var classes = $first.attr("class");

	        if (classes && classes.length) {
	          classes = classes.split(' ');
	        } else {
	          return;
	        }

	        classes = classes.map(function (c) {
	          return 'panels-ipe--' + c;
	        });

	        $wrapper.addClass(classes.join(' '));
	      });
	    }
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./banner-example.png": 11,
		"./basket.png": 12,
		"./basket.svg": 13,
		"./card-untimed-event-example1.png": 14,
		"./card-untimed-event-example1@2x.png": 15,
		"./card-untimed-event-example2.png": 16,
		"./card-untimed-event-example2@2x.png": 17,
		"./card-untimed-event-example3.png": 18,
		"./card-upcoming-example.png": 19,
		"./close.svg": 20,
		"./content-block-example.png": 21,
		"./hero-event-card-example.png": 22,
		"./hero-event-card-example@2x.png": 23,
		"./splash-page-pattern.png": 24,
		"./vs-claim-ticket-example.png": 25,
		"./vs-cta-block/vs-cta-block-1col-example1.png": 26,
		"./vs-cta-block/vs-cta-block-2col-example1.png": 27,
		"./vs-cta-block/vs-cta-block-2col-example2.png": 28,
		"./vs-cta-block/vs-cta-block-3col-example1.png": 29,
		"./vs-cta-block/vs-cta-block-3col-example2.png": 30,
		"./vs-cta-block/vs-cta-block-3col-example3.png": 31,
		"./vs-footer-uk-flag.png": 32,
		"./vs-footer-uk-flag.svg": 33,
		"./vs-footer-us-flag.png": 34,
		"./vs-header-user.svg": 35,
		"./vs-logo-alternate.png": 36,
		"./vs-logo-alternate.svg": 37,
		"./vs-logo-red.png": 38,
		"./vs-logo-red@2x.png": 39,
		"./vs-logo-small.png": 40,
		"./vs-logo-small.svg": 41,
		"./vs-logo.png": 42,
		"./vs-logo.svg": 43,
		"./vs-package-card-example1.png": 44,
		"./vs-package-card-example2.png": 45,
		"./vs-promo-banner-example.png": 46,
		"./vs-region-select-uk.png": 47,
		"./vs-region-select-uk@2x.png": 48,
		"./vs-region-select-us.png": 49,
		"./vs-region-select-us@2x.png": 50,
		"./vs-uk-flag.svg": 51,
		"./vs-us-flag.svg": 52
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 10;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/banner-example.png";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/basket.png";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/basket.svg";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-untimed-event-example1.png";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-untimed-event-example1@2x.png";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-untimed-event-example2.png";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-untimed-event-example2@2x.png";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-untimed-event-example3.png";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-upcoming-example.png";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/close.svg";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/content-block-example.png";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/hero-event-card-example.png";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/hero-event-card-example@2x.png";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/splash-page-pattern.png";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-claim-ticket-example.png";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-1col-example1.png";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-2col-example1.png";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-2col-example2.png";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-3col-example1.png";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-3col-example2.png";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-3col-example3.png";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-footer-uk-flag.png";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-footer-uk-flag.svg";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-footer-us-flag.png";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-header-user.svg";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo-alternate.png";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo-alternate.svg";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo-red.png";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo-red@2x.png";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo-small.png";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo-small.svg";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo.png";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo.svg";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-package-card-example1.png";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-package-card-example2.png";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-promo-banner-example.png";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-region-select-uk.png";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-region-select-uk@2x.png";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-region-select-us.png";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-region-select-us@2x.png";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-uk-flag.svg";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-us-flag.svg";

/***/ }
/******/ ]);