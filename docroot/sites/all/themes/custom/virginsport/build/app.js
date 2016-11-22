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
	    requireAll(__webpack_require__(38));
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

	var _vsBasket = __webpack_require__(4);

	var _vsBasket2 = _interopRequireDefault(_vsBasket);

	var _vsContactForm = __webpack_require__(13);

	var _vsContactForm2 = _interopRequireDefault(_vsContactForm);

	var _vsHeader = __webpack_require__(21);

	var _vsHeader2 = _interopRequireDefault(_vsHeader);

	var _vsIframe = __webpack_require__(24);

	var _vsIframe2 = _interopRequireDefault(_vsIframe);

	var _vsIpe = __webpack_require__(29);

	var _vsIpe2 = _interopRequireDefault(_vsIpe);

	var _vsRegion = __webpack_require__(30);

	var _vsRegion2 = _interopRequireDefault(_vsRegion);

	var _vsUserProfile = __webpack_require__(32);

	var _vsUserProfile2 = _interopRequireDefault(_vsUserProfile);

	var _vsUserLogin = __webpack_require__(34);

	var _vsUserLogin2 = _interopRequireDefault(_vsUserLogin);

	var _vsUserRegister = __webpack_require__(35);

	var _vsUserRegister2 = _interopRequireDefault(_vsUserRegister);

	var _vsSharer = __webpack_require__(36);

	var _vsSharer2 = _interopRequireDefault(_vsSharer);

	var _bootstrap = __webpack_require__(37);

	var _bootstrap2 = _interopRequireDefault(_bootstrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Components
	(0, _vsBasket2.default)();
	(0, _vsContactForm2.default)();
	(0, _vsHeader2.default)();
	(0, _vsIframe2.default)();
	(0, _vsIpe2.default)();
	(0, _vsRegion2.default)();
	(0, _vsUserProfile2.default)();
	(0, _vsUserLogin2.default)();
	(0, _vsUserRegister2.default)();
	(0, _vsSharer2.default)();

	// Libs


	(0, _bootstrap2.default)();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _bootstrapNative = __webpack_require__(6);

	var _bootstrapNative2 = _interopRequireDefault(_bootstrapNative);

	var _jsCookie = __webpack_require__(7);

	var _jsCookie2 = _interopRequireDefault(_jsCookie);

	var _drupal = __webpack_require__(8);

	var _drupal2 = _interopRequireDefault(_drupal);

	var _qs = __webpack_require__(9);

	var _qs2 = _interopRequireDefault(_qs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Keeps track of the current request basket hostname
	 *
	 * @type {string}
	 */
	var basketHostname = _jsCookie2.default.get('vs_basket_region_hostname') || _jsCookie2.default.get('vs_region_hostname');

	/**
	 * Contains the name of the basket counter cookie name
	 *
	 * @type {*}
	 * @see totalBasketItems()
	 */
	var basketCounterCookieName = undefined;

	/**
	 * Contains the basket modal instance
	 *
	 * @type {*}
	 * @see modal()
	 */
	var basketModal = undefined;

	exports.default = function () {
	  (0, _jquery2.default)(document).ready(function () {
	    bindRegionChangeTriggers();
	    enableBasketCounter();
	  });
	};

	/**
	 * Keeps track of the number of items stored in the basket via a cookie
	 * and updates the basket counter with that number.
	 */


	function enableBasketCounter() {
	  var $link = (0, _jquery2.default)('.vs-header__link');
	  var $counter = $link.find('.vs-header__basket__value');

	  window.setInterval(function () {
	    $counter.html(totalBasketItems());
	  }, 500);
	};

	/**
	 * Counts the total number of items a user has in his basket
	 *
	 * @returns {Number}
	 */
	function totalBasketItems() {
	  if (!basketCounterCookieName) {
	    basketCounterCookieName = (0, _jquery2.default)('.vs-header__link').attr('data-basket-cookie');
	  }

	  var total = _jsCookie2.default.get(basketCounterCookieName);

	  return total ? parseInt(total) : 0;
	}

	/**
	 * Binds all the behaviour related to region change triggers
	 */
	function bindRegionChangeTriggers() {

	  // If no region information is available, bailout now
	  if (!_drupal2.default.settings.vsRegions) {
	    return;
	  }

	  // Otherwise fetch the available information
	  var origin = undefined;
	  var destinations = [];

	  _drupal2.default.settings.vsRegions.forEach(function (r) {
	    if (r.active) {
	      origin = r;
	      return;
	    }
	    destinations.push(r);
	  });

	  // Get the region-change query parameter from the URL
	  var querystring = window.location.search.substring(1); // Remove the initial ? symbol
	  var query = _qs2.default.parse(querystring);
	  var regionChange = query['region-change'] || null;

	  destinations.forEach(function (destination) {

	    // For all the regions that exist, with the exception of the
	    // current region, do a lookup for all the links in the page
	    // that might point to that hostname, and if the user clicks
	    // in one of those links show him a region change modal.
	    (0, _jquery2.default)('[href^="' + destination.address + '"]').on('click', function (e) {
	      if (totalBasketItems() > 0 && basketHostname != destination.hostname) {
	        e.preventDefault();
	        showRegionChangeModal(origin, destination, (0, _jquery2.default)(this).attr('href'));
	      }
	    });

	    // Also do a lookup for all the links that point to ticket
	    // operations for content of different regions
	    (0, _jquery2.default)('[vs-ticket-hostname="' + destination.hostname + '"]').on('click', function (e) {
	      e.preventDefault();
	      showTicketsRegionChangeModal(origin, destination, (0, _jquery2.default)(this).attr('href'));
	    });

	    // If there's a region change query parameter and it matches
	    // one of the regions, show the region change modal to let
	    // the user select if he wants to change region.
	    if (regionChange == destination.hostname) {
	      showRegionChangeModal(origin, destination, destination.address);
	    }
	  });
	}

	/**
	 * Shows the region change modal where the user can opt to go change region
	 * or to stay in his current region.
	 *
	 * @param {{ title, hostname }} origin
	 *  The origin region
	 * @param {{ title, hostname }} destination
	 *  The destination origin
	 * @param {string} path
	 *  The URL in the destination region where the user wants to go to
	 */
	function showRegionChangeModal(origin, destination, path) {
	  var args = {
	    '@origin1': origin.title,
	    '@origin2': origin.title,
	    '@dest1': destination.title,
	    '@dest2': destination.title
	  };

	  var message = _drupal2.default.t('Going to the @dest1 site will allow you to add @dest2 tickets to your basket, but will mean losing your @origin1 tickets. Would you like to stay on the @origin2 site and complete your purchases first?', args);
	  var continueBtn = _drupal2.default.t('Continue to @dest1 site*', args);
	  var continueNotice = _drupal2.default.t('*@origin1 tickets will be removed from basket', args);
	  var stayBtn = _drupal2.default.t('Stay on @origin1 site', args);

	  // Build the modal HTML contents
	  var content = '\n    <div class="row">\n      <div class="col-xs-12">\n        <p>' + message + '</p>\n      </div>\n      \n      <div class="col-xs-6">\n        <a href="' + path + '" class="btn vs-btn vs-btn--sm vs-btn--outline-black vs-basket-modal__continue">' + continueBtn + '</a>\n        <p>' + continueNotice + '</p>\n      </div>\n      \n      <div class="col-xs-6">\n        <a href="#" class="btn vs-btn vs-btn--sm vs-basket-modal__stay">' + stayBtn + '</a>\n      </div>\n    </div>\n  ';

	  modal().content(content);

	  // Bind events to the buttons in the modal
	  var $dialog = (0, _jquery2.default)(modal().dialog);

	  // If the user wants to continue, then wipe all the basket
	  // cookies and set the basket hostname to be the same as
	  // the destination hostname.
	  $dialog.find('.vs-basket-modal__continue').on('click', function (e) {
	    deleteBasketCookies();
	    setBasketHostnameCookie(destination.hostname);
	  });

	  // If the user however wishes to stay, then do nothing.
	  $dialog.find('.vs-basket-modal__stay').on('click', function (e) {
	    e.preventDefault();
	    modal().close();
	  });

	  // And finally, open the modal
	  modal().open();
	}

	/**
	 * Shows the region change modal where the user can opt to go change region
	 * or to stay in his current region.
	 *
	 * @param {{ title, hostname, address }} origin
	 *  The origin region
	 * @param {{ title, hostname, address }} destination
	 *  The destination origin
	 * @param {string} path
	 *  The URL in the destination region where the user wants to go to
	 */
	function showTicketsRegionChangeModal(origin, destination, path) {
	  var args = {
	    '@origin1': origin.title,
	    '@dest1': destination.title,
	    '@dest2': destination.title
	  };

	  var message = _drupal2.default.t('To add @dest1 tickets to your basket we need to take you to the @dest2 site.', args);
	  var continueBtn = _drupal2.default.t('Continue', args);
	  var continueNotice = _drupal2.default.t('*@origin1 tickets will be removed from basket', args);

	  // Build the modal HTML contents
	  var content = '\n    <div class="row">\n      <div class="col-xs-12">\n        <p>' + message + '</p>\n      </div>\n      \n      <div class="col-xs-6">\n        <a href="' + (destination.address + path) + '" class="btn vs-btn vs-btn--sm vs-basket-modal__continue">' + continueBtn + '</a>\n        <p>' + continueNotice + '</p>\n      </div>\n    </div>\n  ';

	  modal().content(content);

	  // Bind events to the buttons in the modal
	  var $dialog = (0, _jquery2.default)(modal().dialog);

	  // If the user wants to continue, then wipe all the basket
	  // cookies and set the basket hostname to be the same as
	  // the destination hostname.
	  $dialog.find('.vs-basket-modal__continue').on('click', function (e) {
	    deleteBasketCookies();
	    setBasketHostnameCookie(destination.hostname);
	  });

	  // And finally, open the modal
	  modal().open();
	}

	/**
	 * Sets the preferred basket region hostname cookie
	 *
	 * @param {string} hostname
	 */
	function setBasketHostnameCookie(hostname) {
	  _jsCookie2.default.set('vs_basket_region_hostname', hostname, { domain: _drupal2.default.settings.virgin.cookieDomain });
	}

	/**
	 * Removes all basket related cookies in order to reset the user's
	 * basket session.
	 */
	function deleteBasketCookies() {
	  for (var cookieName in _jsCookie2.default.get()) {
	    if (cookieName.substring(0, "attendly-".length) == "attendly-") {
	      _jsCookie2.default.remove(cookieName, { domain: _drupal2.default.settings.virgin.cookieDomain });
	    }
	  }
	}

	/**
	 * Returns the vs-basket modal instance
	 *
	 * @returns {{}}
	 */
	function modal() {
	  if (basketModal) {
	    return basketModal;
	  }

	  var html = '\n    <div id="vs-basket-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">\n      <div class="modal-dialog">\n        <div class="modal-content"></div>\n      </div>\n    </div>\n  ';

	  var $modal = (0, _jquery2.default)(html);
	  $modal.appendTo('body');
	  basketModal = new _bootstrapNative2.default.Modal($modal.get(0));

	  return basketModal;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = window.jQuery;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Native Javascript for Bootstrap 3 v1.0.51 | © dnp_theme | MIT-License
	(function (root, factory) {
	  if (true) {
	    // AMD support:
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // CommonJS-like:
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    var bsn = factory();
	    root.Affix = bsn.Affix;
	    root.Alert = bsn.Alert;
	    root.Button = bsn.Button;
	    root.Carousel = bsn.Carousel;
	    root.Collapse = bsn.Collapse;
	    root.Dropdown = bsn.Dropdown;
	    root.Modal = bsn.Modal;
	    root.Popover = bsn.Popover;
	    root.ScrollSpy = bsn.ScrollSpy;
	    root.Tab = bsn.Tab;
	    root.Tooltip = bsn.Tooltip;
	  }
	}(this, function () {
	  // Native Javascript for Bootstrap 3 | Internal Utility Functions
	  // by dnp_theme
	  
	  var addClass = function(el,c) { // where modern browsers fail, use classList
	      if (el.classList) { el.classList.add(c); } else { el.className += ' '+c; el.offsetWidth; }
	    },
	    removeClass = function(el,c) {
	      if (el.classList) { el.classList.remove(c); } else { el.className = el.className.replace(c,'').replace(/^\s+|\s+$/g,''); }
	    },
	    isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat( RegExp.$1 ) : false,
	    getClosest = function (el, s) { //el is the element and s the selector of the closest item to find
	    // source http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
	      var f = s.charAt(0);
	      for ( ; el && el !== document; el = el.parentNode ) {// Get closest match
	        if ( f === '.' ) {// If selector is a class
	          if ( document.querySelector(s) !== undefined ) { return el; }
	        }
	        if ( f === '#' ) { // If selector is an ID
	          if ( el.id === s.substr(1) ) { return el; }
	        }
	      }
	      return false;
	    },
	    isElementInViewport = function(t) { // check if this.tooltip is in viewport
	      var r = t.getBoundingClientRect();
	      return (
	        r.top >= 0 &&
	        r.left >= 0 &&
	        r.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	        r.right <= (window.innerWidth || document.documentElement.clientWidth)
	      )
	  };
	  
	  // Native Javascript for Bootstrap 3 | Affix
	  // by dnp_theme
	  
	  //AFFIX DEFINITION
	  var Affix = function(element,options) {
	    options = options || {};
	  
	    this.element = typeof element === 'object' ? element : document.querySelector(element);
	    this.options = {};
	    this.options.target = options.target ? ((typeof(options.target) === 'object') ? options.target : document.querySelector(options.target)) : null; // target is an object
	    this.options.offsetTop = options.offsetTop && options.offsetTop ? ( options.offsetTop === 'function' ? options.offsetTop() : parseInt(options.offsetTop,0) ) : 0; // offset option is an integer number or function to determine that number
	    this.options.offsetBottom = options.offsetBottom && options.offsetBottom ? ( options.offsetBottom === 'function' ? options.offsetBottom() : parseInt(options.offsetBottom,0) ) : null;
	  
	    if (!this.element && !(this.options.target || this.options.offsetTop || this.options.offsetBottom ) ) { return; }
	  
	    var self = this;
	  
	    this.processOffsetTop = function () {
	      if ( this.options.target !== null ) {
	        return this.options.target.getBoundingClientRect().top + this.scrollOffset();
	      } else if ( this.options.offsetTop !== null ) {
	        return this.options.offsetTop
	      }
	    }
	    this.processOffsetBottom = function () {
	      if ( this.options.offsetBottom !== null ) {
	        var maxScroll = this.getMaxScroll();
	        return maxScroll - this.element.offsetHeight - this.options.offsetBottom
	      }
	    }
	    this.checkPosition = function () {
	      this.getPinOffsetTop = this.processOffsetTop
	      this.getPinOffsetBottom = this.processOffsetBottom
	    }
	    this.scrollOffset = function () {
	      return window.pageYOffset || document.documentElement.scrollTop
	    }
	    this.pinTop = function () {
	      if ( !/\baffix/.test(this.element.className) ) {
	        this.element.className += ' affix';
	        this.affixed = true
	      }
	    }
	    this.unPinTop = function () {
	      if ( /\baffix/.test(this.element.className) ) {
	        this.element.className = this.element.className.replace(' affix','');
	        this.affixed = false
	      }
	    }
	    this.pinBottom = function () {
	      if ( !/\baffix-bottom/.test(this.element.className) ) {
	        this.element.className += ' affix-bottom';
	        this.affixedBottom = true
	      }
	    }
	    this.unPinBottom = function () {
	      if ( /\baffix-bottom/.test(this.element.className) ) {
	        this.element.className = this.element.className.replace(' affix-bottom','');
	        this.affixedBottom = false
	      }
	    }
	    this.updatePin = function () {
	      if (this.affixed === false && (parseInt(this.processOffsetTop(),0) - parseInt(this.scrollOffset(),0) < 0)) {
	        this.pinTop();
	      } else if (this.affixed === true && (parseInt(this.scrollOffset(),0) <= parseInt(this.getPinOffsetTop(),0) )) {
	        this.unPinTop()
	      }
	  
	      if (this.affixedBottom === false && (parseInt(this.processOffsetBottom(),0) - parseInt(this.scrollOffset(),0) < 0)) {
	        this.pinBottom();
	      } else if (this.affixedBottom === true && (parseInt(this.scrollOffset(),0) <= parseInt(this.getPinOffsetBottom(),0) )) {
	        this.unPinBottom()
	      }
	    }
	    this.updateAffix = function () { // Unpin and check position again
	      this.unPinTop();
	      this.unPinBottom();
	      this.checkPosition()
	  
	      this.updatePin() // If any case update values again
	    }
	    this.getMaxScroll = function(){
	      return Math.max( document.body.scrollHeight, document.body.offsetHeight,
	        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight )
	    }
	    this.scrollEvent = function(){
	      window.addEventListener('scroll', function() {
	        self.updatePin()
	      }, false);
	  
	    }
	    this.resizeEvent = function(){
	      var dl = (isIE && isIE < 10) ? 500 : 50;
	      window.addEventListener('resize', function () {
	        setTimeout(function(){
	          self.updateAffix()
	        },dl);
	      }, false);
	    }
	    // init
	    this.affixed = false;
	    this.affixedBottom = false;
	    this.getPinOffsetTop = 0;
	    this.getPinOffsetBottom = null;
	  
	    //actions
	    this.checkPosition();
	    this.updateAffix();
	    this.scrollEvent();
	    this.resizeEvent()
	  };
	  
	  (function () {
	    // AFFIX DATA API
	    // =================
	    var Affixes = document.querySelectorAll('[data-spy="affix"]'), i = 0, afl = Affixes.length;
	    for (i;i<afl;i++) {
	      var item = Affixes[i], options = {};
	        options.offsetTop     = item.getAttribute('data-offset-top');
	        options.offsetBottom  = item.getAttribute('data-offset-bottom');
	        options.target        = item.getAttribute('data-target');
	  
	      if ( item && (options.offsetTop !== null || options.offsetBottom !== null || options.target !== null) ) { //don't do anything unless we have something valid to pin
	        new Affix(item, options);
	      }
	    }
	  })();
	  // Native Javascript for Bootstrap 3 | Alert
	  // by dnp_theme
	  
	  // ALERT DEFINITION
	  // ===================
	  var Alert = function( element ) {
	    this.btn = typeof element === 'object' ? element : document.querySelector(element);
	    this.alert = null;
	    this.duration = 150; // default alert transition duration
	  
	    var self = this;
	  
	    this.close = function(e) {
	      var target = e.target;
	      self.btn = target.getAttribute('data-dismiss') === 'alert' && target.className === 'close' ? target : target.parentNode;
	      self.alert = self.btn.parentNode;
	  
	      if ( self.alert !== null && self.btn.getAttribute('data-dismiss') === 'alert' && /\bin/.test(self.alert.className) ) {
	        self.alert.className = self.alert.className.replace(' in','');
	        setTimeout(function() {
	          self.alert && self.alert.parentNode.removeChild(self.alert);
	        }, self.duration);
	      }
	    }
	    document.addEventListener('click', this.close, false); //delegate to all alerts, including those inserted later into the DOM
	  };
	  
	  (function () {
	    // ALERT DATA API
	    // =================
	    var Alerts = document.querySelectorAll('[data-dismiss="alert"]'), i = 0, all = Alerts.length;
	    for (i;i<all;i++) {
	      new Alert(Alerts[i]);
	    }
	  })();
	  // Native Javascript for Bootstrap 3 | Button
	  // by dnp_theme
	  
	  // BUTTON DEFINITION
	  // ===================
	  var Button = function( element, option ) {
	    this.btn = typeof element === 'object' ? element : document.querySelector(element);
	    this.option = typeof option === 'string' ? option : null;
	  
	    var self = this,
	      changeEvent = (('CustomEvent' in window) && window.dispatchEvent)
	        ? new CustomEvent('bs.button.change') : null; // The custom event that will be triggered on demand
	  
	    // assign event to a trigger function
	    function triggerChange(t) { if (changeEvent) { t.dispatchEvent(changeEvent); } }
	  
	    this.setState = function() {
	      if ( this.option === 'loading' ) {
	        addClass(this.btn,'disabled');
	        this.btn.setAttribute('disabled','disabled');
	      }
	      this.btn.innerHTML = this.state;
	    }
	  
	    this.reset = function() {
	      if ( /\bdisabled/.test(this.btn.className) || this.btn.getAttribute('disabled') === 'disabled' ) {
	        removeClass(this.btn,'disabled');
	        this.btn.removeAttribute('disabled');
	      }
	      this.btn.innerHTML = this.btn.getAttribute('data-original-text');
	    }
	  
	    this.toggle = function(e) {
	      var parent = e.target.parentNode,
	        label = e.target.tagName === 'LABEL' ? e.target : parent.tagName === 'LABEL' ? parent : null; // the .btn label
	  
	      if ( !label ) return; //react if a label or its immediate child is clicked
	  
	      var target = this, //e.currentTarget || e.srcElement; // the button group, the target of the handler function
	        labels = target.querySelectorAll('.btn'), ll = labels.length, i = 0, // all the button group buttons
	        input = label.getElementsByTagName('INPUT')[0];
	  
	      if ( !input ) return; //return if no input found
	  
	      //manage the dom manipulation
	      if ( input.type === 'checkbox' ) { //checkboxes
	        if ( !input.checked ) {
	          addClass(label,'active');
	          input.getAttribute('checked');
	          input.setAttribute('checked','checked');
	          input.checked = true;
	        } else {
	          removeClass(label,'active');
	          input.getAttribute('checked');
	          input.removeAttribute('checked');
	          input.checked = false;
	        }
	        triggerChange(input); //trigger the change for the input
	        triggerChange(self.btn); //trigger the change for the btn-group
	      }
	  
	      if ( input.type === 'radio' ) { // radio buttons
	        if ( !input.checked ) { // don't trigger if already active
	          addClass(label,'active');
	          input.setAttribute('checked','checked');
	          input.checked = true;
	          triggerChange(self.btn);
	          triggerChange(input); //trigger the change
	  
	          for (i;i<ll;i++) {
	            var l = labels[i];
	            if ( l !== label && /\bactive/.test(l.className) )  {
	              var inp = l.getElementsByTagName('INPUT')[0];
	              removeClass(l,'active');
	              inp.removeAttribute('checked');
	              inp.checked = false;
	              triggerChange(inp); // trigger the change
	            }
	          }
	        }
	      }
	    }
	    // init
	    if ( /\bbtn/.test(this.btn.className) ) {
	      if ( this.option && this.option !== 'reset' ) {
	  
	        this.state = this.btn.getAttribute('data-'+this.option+'-text') || null;
	  
	        !this.btn.getAttribute('data-original-text') && this.btn.setAttribute('data-original-text',self.btn.innerHTML.replace(/^\s+|\s+$/g, ''));
	        this.setState();
	  
	      } else if ( this.option === 'reset' ) {
	        this.reset();
	      }
	    }
	    if ( /\bbtn-group/.test(this.btn.className) ) {
	      this.btn.addEventListener('click', this.toggle, false);
	    }
	  };
	  
	  (function () {
	    // BUTTON DATA API
	    // =================
	    var Buttons = document.querySelectorAll('[data-toggle=button]'), i = 0, btl = Buttons.length;
	    for (i;i<btl;i++) {
	      new Button(Buttons[i]);
	    }
	  
	    var ButtonGroups = document.querySelectorAll('[data-toggle=buttons]'), j = 0, bgl = ButtonGroups.length;
	    for (j;j<bgl;j++) {
	      new Button(ButtonGroups[j]);
	    }
	  })();
	  // Native Javascript for Bootstrap 3 | Carousel
	  // by dnp_theme
	  
	  // CAROUSEL DEFINITION
	  // ===================
	  var Carousel = function( element, options ) {
	    options = options || {};
	  
	    this.carousel = (typeof element === 'object') ? element : document.querySelector( element );
	    this.options = {}; //replace extend
	    this.options.keyboard = options.keyboard === 'true' ? true : false;
	    this.options.pause = options.pause ? options.pause : 'hover'; // false / hover
	  
	    // bootstrap carousel default transition duration / option
	    this.duration = 600;
	    this.options.duration = (isIE && isIE < 10) ? 0 : (parseInt(options.duration) || this.duration);
	  
	    var items = this.carousel.querySelectorAll('.item'), il=items.length; //this is an object
	    this.controls = this.carousel.querySelectorAll('.carousel-control');
	    this.prev = this.controls[0];
	    this.next = this.controls[1];
	    this.slides = []; for (var i = 0; i < il; i++) { this.slides.push(items[i]); } // this is an array
	    this.indicator = this.carousel.querySelector( ".carousel-indicators" ); // object
	    this.indicators = this.carousel.querySelectorAll( ".carousel-indicators li" ); // object
	    this.total    = this.slides.length;
	    this.timer    = null;
	    this.direction  = null;
	    this.index    = 0;
	  
	    var self = this;
	  
	    if (options.interval === 'false' ) {
	      this.options.interval = false;
	    } else {
	      this.options.interval = parseInt(options.interval) || 5000;
	    }
	  
	    this.cycle = function(e) {
	  
	      this.direction = 'left';
	      this.timer = setInterval(function() {
	        self.index++;
	        if( self.index == self.slides.length ) {
	          self.index = 0;
	        }
	        self._slideTo( self.index, e );
	  
	      }, this.options.interval);
	    }
	    this.pause = function() {
	      var pauseHandler = function () {
	        if ( self.options.interval !==false && !/\bpaused/.test(self.carousel.className) ) {
	          self.carousel.className += ' paused';
	          clearInterval( self.timer );
	          self.timer = null;
	        }
	      };
	      var resumeHandler = function() {
	        if ( self.options.interval !==false && /\bpaused/.test(self.carousel.className) ) {
	          self.cycle();
	          self.carousel.className = self.carousel.className.replace(/\bpaused/,'');
	        }
	      };
	      self.carousel.addEventListener( "mouseenter", pauseHandler, false);
	      self.carousel.addEventListener( "mouseleave", resumeHandler, false);
	      self.carousel.addEventListener( "touchstart", pauseHandler, false);
	      self.carousel.addEventListener( "touchend", resumeHandler, false);
	    }
	    this._slideTo = function( next, e ) {
	      var active = this._getActiveIndex(); // the current active
	      //determine type
	      var direction = this.direction;
	      var dr = direction === 'left' ? 'next' : 'prev';
	      var slid = null, slide = null;
	  
	      //register events
	      if (('CustomEvent' in window) && window.dispatchEvent) {
	        slid =  new CustomEvent("slid.bs.carousel");
	        slide = new CustomEvent("slide.bs.carousel");
	      }
	      if (slide) { this.carousel.dispatchEvent(slide); } //here we go with the slide
	  
	      this._removeEventListeners();
	      clearInterval(this.timer);
	      this.timer = null;
	      this._curentPage( this.indicators[next] );
	  
	      if ( /\bslide/.test(this.carousel.className) && !(isIE && isIE < 10) ) {
	        this.slides[next].className += (' '+dr);
	        this.slides[next].offsetWidth;
	        this.slides[next].className += (' '+direction);
	        this.slides[active].className += (' '+direction);
	  
	        setTimeout(function() { //we're gonna fake waiting for the animation to finish, cleaner and better
	          self._addEventListeners();
	  
	          self.slides[next].className += ' active';
	          self.slides[active].className = self.slides[active].className.replace(' active','');
	  
	          self.slides[next].className = self.slides[next].className.replace(' '+dr,'');
	          self.slides[next].className = self.slides[next].className.replace(' '+direction,'');
	          self.slides[active].className = self.slides[active].className.replace(' '+direction,'');
	  
	          if ( self.options.interval !== false && !/\bpaused/.test(self.carousel.className) ){
	            clearInterval(self.timer); self.cycle();
	          }
	          if (slid) { self.carousel.dispatchEvent(slid); } //here we go with the slid
	        }, this.options.duration + 100 );
	      } else {
	        this.slides[next].className += ' active';
	        this.slides[next].offsetWidth;
	        this.slides[active].className = this.slides[active].className.replace(' active','');
	        setTimeout(function() {
	          self._addEventListeners();
	          if ( self.options.interval !== false && !/\bpaused/.test(self.carousel.className) ){
	            clearInterval(self.timer); self.cycle();
	          }
	          if (slid) { self.carousel.dispatchEvent(slid); } //here we go with the slid
	        }, this.options.duration + 100 );
	      }
	    }
	    this._addEventListeners = function () {
	      this.next && this.next.addEventListener( "click", this.controlsHandler, false);
	      this.prev && this.prev.addEventListener( "click", this.controlsHandler, false);
	  
	      this.indicator && this.indicator.addEventListener( "click", this.indicatorHandler, false);
	  
	      this.options.keyboard === true && window.addEventListener('keydown', this.keyHandler, false);
	    }
	    this._removeEventListeners = function () { // prevent mouse bubbles while animating
	      this.next && this.next.removeEventListener( "click", this.controlsHandler, false);
	      this.prev && this.prev.removeEventListener( "click", this.controlsHandler, false);
	  
	      this.indicator && this.indicator.removeEventListener( "click", this.indicatorHandler, false);
	  
	      this.options.keyboard === true && window.removeEventListener('keydown', this.keyHandler, false);
	    }
	    this._getActiveIndex = function () {
	      return this.slides.indexOf(this.carousel.querySelector('.item.active'));
	    }
	    this._curentPage = function( p ) {
	      for( var i = 0; i < this.indicators.length; ++i ) {
	        var a = this.indicators[i];
	        a.className = "";
	      }
	      if (p) p.className = "active";
	    }
	    this.indicatorHandler = function(e) {
	      e.preventDefault();
	      var target = e.target;
	      var active = self._getActiveIndex(); // the current active
	  
	      if ( target && !/\bactive/.test(target.className) && target.getAttribute('data-slide-to') ) {
	        var n = parseInt( target.getAttribute('data-slide-to'), 10 );
	  
	        self.index = n;
	  
	        if( self.index == 0 ) {
	          self.index = 0;
	        } else if ( self.index == self.total - 1 ) {
	          self.index = self.total - 1;
	        }
	  
	          //determine direction first
	        if  ( (active < self.index ) || (active === self.total - 1 && self.index === 0 ) ) {
	          self.direction = 'left'; // next
	        } else if  ( (active > self.index) || (active === 0 && self.index === self.total -1 ) ) {
	          self.direction = 'right'; // prev
	        }
	      } else { return false; }
	  
	      self._slideTo( self.index, e ); //Do the slide
	    }
	    this.controlsHandler = function (e) {
	      var target = e.currentTarget || e.srcElement;
	  
	      if ( target === self.next ) {
	        self.index++;
	        self.direction = 'left'; //set direction first
	  
	        if( self.index == self.total - 1 ) {
	          self.index = self.total - 1;
	        } else if ( self.index == self.total ){
	          self.index = 0;
	        }
	      } else if ( target === self.prev ) {
	        self.index--;
	        self.direction = 'right'; //set direction first
	  
	        if( self.index == 0 ) {
	          self.index = 0;
	        } else if ( self.index < 0 ){
	          self.index = self.total - 1
	        }
	      }
	  
	      self._slideTo( self.index, e ); //Do the slide
	    }
	    this.keyHandler = function (e) {
	      switch (e.which) {
	        case 39:
	          e.preventDefault();
	          self.index++;
	          self.direction = 'left';
	          if( self.index == self.total - 1 ) { self.index = self.total - 1; } else
	          if ( self.index == self.total ){ self.index = 0 }
	          break;
	        case 37:
	          e.preventDefault();
	          self.index--;
	          self.direction = 'right';
	          if( self.index == 0 ) { self.index = 0; } else
	          if ( self.index < 0 ){ self.index = self.total - 1 }
	          break;
	        default: return;
	      }
	      self._slideTo( self.index, e ); //Do the slide
	    }
	  
	    // init
	    if ( this.options.interval !== false ){
	      this.cycle();
	    }
	  
	    if ( this.options && this.options.pause === 'hover' && this.options.interval !== false ) {
	      this.pause();
	    }
	    this._addEventListeners();
	    this.next && this.next.addEventListener( "click", function(e){e.preventDefault()}, false);
	    this.prev && this.prev.addEventListener( "click", function(e){e.preventDefault()}, false);
	  };
	  
	  (function () {
	    // CAROUSEL DATA API
	    // =================
	    var Carousels = document.querySelectorAll('[data-ride="carousel"]'), i = 0, crl = Carousels.length;
	    for (i;i<crl;i++) {
	      var c = Carousels[i], options = {};
	      options.interval = c.getAttribute('data-interval') && c.getAttribute('data-interval');
	      options.pause = c.getAttribute('data-pause') && c.getAttribute('data-pause') || 'hover';
	      options.keyboard = c.getAttribute('data-keyboard') && c.getAttribute('data-keyboard') || false;
	      options.duration = c.getAttribute('data-duration') && c.getAttribute('data-duration') || false;
	      new Carousel(c, options)
	    }
	  })();
	  // Native Javascript for Bootstrap 3 | Collapse
	  // by dnp_theme
	  
	  // COLLAPSE DEFINITION
	  // ===================
	  var Collapse = function( element, options ) {
	    options = options || {};
	  
	    this.btn = typeof element === 'object' ? element : document.querySelector(element);
	    this.accordion = null;
	    this.collapse = null;
	    this.duration = 300; // default collapse transition duration
	    this.options = {};
	    this.options.duration = (isIE && isIE < 10) ? 0 : (options.duration || this.duration);
	    var self = this;
	    var getOuterHeight = function (el) {
	      var s = el && (el.currentStyle || window.getComputedStyle(el)), // the getComputedStyle polyfill would do this for us, but we want to make sure it does
	        btp = /px/.test(s.borderTopWidth) ? Math.round(s.borderTopWidth.replace('px','')) : 0,
	        mtp = /px/.test(s.marginTop)  ? Math.round(s.marginTop.replace('px',''))    : 0,
	        mbp = /px/.test(s.marginBottom)  ? Math.round(s.marginBottom.replace('px',''))  : 0,
	        mte = /em/.test(s.marginTop)  ? Math.round(s.marginTop.replace('em','')    * parseInt(s.fontSize)) : 0,
	        mbe = /em/.test(s.marginBottom)  ? Math.round(s.marginBottom.replace('em','')  * parseInt(s.fontSize)) : 0;
	      return el.clientHeight + parseInt( btp ) + parseInt( mtp ) + parseInt( mbp ) + parseInt( mte ) + parseInt( mbe ); //we need an accurate margin value
	    };
	  
	    this.toggle = function(e) {
	      e.preventDefault();
	  
	      if (!/\bin/.test(self.collapse.className)) {
	        self.open();
	      } else {
	        self.close();
	      }
	    },
	    this.close = function() {
	      this._close(this.collapse);
	      addClass(this.btn,'collapsed');
	    },
	    this.open = function() {
	      this._open(this.collapse);
	      removeClass(this.btn,'collapsed');
	  
	      if ( this.accordion !== null ) {
	        var active = this.accordion.querySelectorAll('.collapse.in'), al = active.length, i = 0;
	        for (i;i<al;i++) {
	          if ( active[i] !== this.collapse) this._close(active[i]);
	        }
	      }
	    }
	    this._open = function(c) {
	      this.removeEvent();
	      addClass(c,'in');
	      c.setAttribute('aria-expanded','true');
	      addClass(c,'collapsing');
	      setTimeout(function() {
	        c.style.height = self.getMaxHeight(c) + 'px'
	        c.style.overflowY = 'hidden';
	      }, 0);
	      setTimeout(function() {
	        c.style.height = '';
	        c.style.overflowY = '';
	        removeClass(c,'collapsing');
	        self.addEvent();
	      }, this.options.duration);
	    }
	    this._close = function(c) {
	      this.removeEvent();
	      c.setAttribute('aria-expanded','false');
	      c.style.height = this.getMaxHeight(c) + 'px'
	      setTimeout(function() {
	        c.style.height = '0px';
	        c.style.overflowY = 'hidden';
	        addClass(c,'collapsing');
	      }, 0);
	  
	      setTimeout(function() {
	        removeClass(c,'collapsing');
	        removeClass(c,'in');
	        c.style.overflowY = '';
	        c.style.height = '';
	        self.addEvent();
	      }, this.options.duration);
	    }
	    this.getMaxHeight = function(l) { // get collapse trueHeight and border
	      var h = 0;
	      for (var k = 0, ll = l.children.length; k < ll; k++) {
	        h += getOuterHeight(l.children[k]);
	      }
	      return h;
	    }
	    this.removeEvent = function() {
	      this.btn.removeEventListener('click', this.toggle, false);
	    }
	    this.addEvent = function() {
	      this.btn.addEventListener('click', this.toggle, false);
	    }
	    this.getTarget = function() {
	      var t = this.btn,
	        h = t.href && t.getAttribute('href').replace('#',''),
	        d = t.getAttribute('data-target') && ( t.getAttribute('data-target') ),
	        id = h || ( d && /#/.test(d)) && d.replace('#',''),
	        cl = (d && d.charAt(0) === '.') && d, //the navbar collapse trigger targets a class
	        c = id && document.getElementById(id) || cl && document.querySelector(cl);
	      return c;
	    }
	  
	    // init
	    this.addEvent();
	    this.collapse = this.getTarget();
	    this.accordion = this.btn.getAttribute('data-parent')
	      && getClosest(this.btn, this.btn.getAttribute('data-parent'));
	  };
	  
	  (function () {
	    // COLLAPSE DATA API
	    // =================
	    var Collapses = document.querySelectorAll('[data-toggle="collapse"]'), i = 0, cll = Collapses.length;
	    for (i;i<cll;i++) {
	      var item = Collapses[i], options = {};
	      options.duration = item.getAttribute('data-duration');
	      new Collapse(item,options);
	    }
	  })();
	  // Native Javascript for Bootstrap 3 | Dropdown
	  // by dnp_theme
	  
	  // DROPDOWN DEFINITION
	  // ===================
	  var Dropdown = function( element) {
	    this.menu = typeof element === 'object' ? element : document.querySelector(element);
	    var self = this;
	  
	    this.handle = function(e) { // fix some Safari bug with <button>
	      var target = e.target || e.currentTarget,
	          children = [], c = self.menu.parentNode.getElementsByTagName('*');
	      /\#$/g.test(target.href) && e.preventDefault();
	  
	      for ( var i=0, l = c.length||0; i<l; i++) { l && children.push(c[i]); }
	      if ( target === self.menu || target.parentNode === self.menu || target.parentNode.parentNode === self.menu ) {
	        self.toggle(e);
	      }  else if ( children && children.indexOf(target) > -1  ) {
	        return;
	      } else { self.close(); }
	    }
	    this.toggle = function(e) {
	      if (/\bopen/.test(this.menu.parentNode.className)) {
	        this.close();
	        document.removeEventListener('keydown', this.key, false);
	      } else {
	        this.menu.parentNode.className += ' open';
	        this.menu.setAttribute('aria-expanded',true);
	        document.addEventListener('keydown', this.key, false);
	      }
	    }
	    this.key = function(e) {
	      if (e.which == 27) {self.close();}
	    }
	    this.close = function() {
	      self.menu.parentNode.className = self.menu.parentNode.className.replace(/\bopen/,'');
	      self.menu.setAttribute('aria-expanded',false);
	    }
	    this.menu.setAttribute('tabindex', '0'); // Fix onblur on Chrome | Safari
	    document.addEventListener('click', this.handle, false);
	  };
	  
	  (function () {
	    // DROPDOWN DATA API
	    // =================
	    var Dropdowns = document.querySelectorAll('[data-toggle=dropdown]'), i = 0, ddl = Dropdowns.length;
	    for (i;i<ddl;i++) {
	      new Dropdown(Dropdowns[i]);
	    }
	  })();
	  // Native Javascript for Bootstrap 3 | Modal
	  // by dnp_theme
	  
	  //MODAL DEFINITION
	  // ===============
	  var Modal = function(element, options) { // element is the is the modal
	    options = options || {};
	    this.modal = typeof element === 'object' ? element : document.querySelector(element);
	    this.options = {};
	    this.options.backdrop = options.backdrop === 'false' ? false : true;
	    this.options.keyboard = options.keyboard === 'false' ? false : true;
	    this.options.content = options.content;
	    this.duration = options.duration || 300; // the default modal fade duration option
	    this.options.duration = (isIE && isIE < 10) ? 0 : this.duration;
	    this.scrollbarWidth = 0;
	    this.dialog = this.modal.querySelector('.modal-dialog');
	    this.timer = 0;
	  
	    var self = this,
	      getWindowWidth = function() {
	        var htmlRect = document.documentElement.getBoundingClientRect(),
	          fullWindowWidth = window.innerWidth || (htmlRect.right - Math.abs(htmlRect.left));
	        return fullWindowWidth;
	      },
	      setScrollbar = function () {
	        var bodyStyle = window.getComputedStyle(document.body), bodyPad = parseInt((bodyStyle.paddingRight), 10);
	        if (self.bodyIsOverflowing) { document.body.style.paddingRight = (bodyPad + self.scrollbarWidth) + 'px'; }
	      },
	      resetScrollbar = function () {
	        document.body.style.paddingRight = '';
	      },
	      measureScrollbar = function () { // thx walsh
	        var scrollDiv = document.createElement('div');
	        scrollDiv.className = 'modal-scrollbar-measure';
	        document.body.appendChild(scrollDiv);
	        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	        document.body.removeChild(scrollDiv);
	        return scrollbarWidth;
	      },
	      checkScrollbar = function () {
	        self.bodyIsOverflowing = document.body.clientWidth < getWindowWidth();
	        self.modalIsOverflowing = self.modal.scrollHeight > document.documentElement.clientHeight;
	        self.scrollbarWidth = measureScrollbar();
	      };
	  
	    this.open = function() {
	      var currentOpen = document.querySelector('.modal.in');
	      if (currentOpen){
	        clearTimeout(currentOpen.getAttribute('data-timer'));
	        removeClass(currentOpen,'in');
	        setTimeout( function() {
	          currentOpen.setAttribute('aria-hidden', true);
	          currentOpen.style.display = '';
	        }, this.options.duration/2);
	      }
	  
	      if ( this.options.backdrop ) {
	        this.createOverlay();
	      } else { this.overlay = null }
	  
	      if ( this.overlay ) {
	        setTimeout( function() {
	          addClass(self.overlay,'in');
	        }, 0);
	      }
	  
	      clearTimeout(self.modal.getAttribute('data-timer'));
	      this.timer = setTimeout( function() {
	        self.modal.style.display = 'block';
	  
	        checkScrollbar();
	        self.adjustDialog();
	        setScrollbar();
	  
	        self.resize();
	        self.dismiss();
	        self.keydown();
	  
	        addClass(document.body,'modal-open');
	        addClass(self.modal,'in');
	        self.modal.setAttribute('aria-hidden', false);
	      }, this.options.duration/2);
	      this.modal.setAttribute('data-timer',this.timer);
	    }
	    this.close = function() {
	  
	      if ( this.overlay ) {
	        removeClass(this.overlay,'in');
	      }
	      removeClass(this.modal,'in');
	      this.modal.setAttribute('aria-hidden', true);
	  
	      clearTimeout(this.modal.getAttribute('data-timer'));
	      this.timer = setTimeout( function() {
	        removeClass(document.body,'modal-open');
	        self.resize();
	        self.resetAdjustments();
	        resetScrollbar();
	  
	        self.dismiss();
	        self.keydown();
	        self.modal.style.display = '';
	      }, this.options.duration/2);
	      this.modal.setAttribute('data-timer',this.timer);
	  
	      setTimeout( function() {
	        if (!document.querySelector('.modal.in')) {  self.removeOverlay(); }
	      }, this.options.duration);
	    }
	    this.content = function( content ) {
	      return this.modal.querySelector('.modal-content').innerHTML = content;
	    }
	    this.createOverlay = function() {
	      var backdrop = document.createElement('div'), overlay = document.querySelector('.modal-backdrop');
	      backdrop.setAttribute('class','modal-backdrop fade');
	  
	      if ( overlay ) {
	        this.overlay = overlay;
	      } else {
	        this.overlay = backdrop;
	        document.body.appendChild(backdrop);
	      }
	    }
	    this.removeOverlay = function() {
	      var overlay = document.querySelector('.modal-backdrop');
	      if ( overlay !== null && overlay !== undefined ) {
	        document.body.removeChild(overlay)
	      }
	    }
	    this.keydown = function() {
	      function keyHandler(e) {
	        if (self.options.keyboard && e.which == 27) {
	          self.close();
	        }
	      }
	      if (!/\bin/.test(this.modal.className)) {
	        document.addEventListener('keydown', keyHandler, false);
	      } else {
	        document.removeEventListener('keydown', keyHandler, false);
	      }
	    }
	    this.trigger = function() {
	      var triggers = document.querySelectorAll('[data-toggle="modal"]'), tgl = triggers.length, i = 0;
	      for ( i;i<tgl;i++ ) {
	        triggers[i].addEventListener('click', function(e) {
	          e.preventDefault();
	          var b = this, // var b = e.target,
	          s = b.getAttribute('data-target') && b.getAttribute('data-target').replace('#','')
	          || b.getAttribute('href') && b.getAttribute('href').replace('#','');
	          if ( document.getElementById( s ) === self.modal ) {
	            self.open()
	          }
	        })
	      }
	    }
	    this._resize = function() {
	      var overlay = this.overlay||document.querySelector('.modal-backdrop'),
	        dim = { w: document.documentElement.clientWidth + 'px', h: document.documentElement.clientHeight + 'px' };
	      if ( overlay !== null && /\bin/.test(overlay.className) ) {
	        overlay.style.height = dim.h; overlay.style.width = dim.w;
	      }
	    }
	    this.oneResize = function() {
	      function oneResize() {
	        self._resize();
	        self.handleUpdate();
	        window.removeEventListener('resize', oneResize, false);
	      }
	      window.addEventListener('resize', oneResize, false);
	    }
	    this.resize = function() {
	      function resizeHandler() {
	        self._resize();
	        self.handleUpdate();
	      }
	  
	      if (!/\bin/.test(this.modal.className)) {
	        window.addEventListener('resize', this.oneResize, false);
	      } else {
	        window.removeEventListener('resize', this.oneResize, false);
	      }
	    }
	    this.dismiss = function() {
	      function dismissHandler(e) {
	        if ( e.target.parentNode.getAttribute('data-dismiss') === 'modal' || e.target.getAttribute('data-dismiss') === 'modal' || e.target === self.modal ) {
	        // if ( this.parentNode.getAttribute('data-dismiss') === 'modal' || this.getAttribute('data-dismiss') === 'modal' || this === self.modal ) {
	          e.preventDefault(); self.close()
	        }
	      }
	      if (!/\bin/.test(this.modal.className)) {
	        this.modal.addEventListener('click', dismissHandler, false);
	      } else {
	        this.modal.removeEventListener('click', dismissHandler, false);
	      }
	    }
	    // these following methods are used to handle overflowing modals
	    this.handleUpdate = function () {
	      this.adjustDialog();
	    }
	    this.adjustDialog = function () {
	      this.modal.style.paddingLeft = !this.bodyIsOverflowing && this.modalIsOverflowing ? this.scrollbarWidth + 'px' : '';
	      this.modal.style.paddingRight = this.bodyIsOverflowing && !this.modalIsOverflowing ? this.scrollbarWidth + 'px' : '';
	    }
	    this.resetAdjustments = function () {
	      this.modal.style.paddingLeft = '';
	      this.modal.style.paddingRight = '';
	    }
	    //init
	    this.trigger();
	    if ( this.options.content && this.options.content !== undefined ) {
	      this.content( this.options.content );
	    }
	  };
	  
	  (function () {
	    // DATA API
	    var Modals = document.querySelectorAll('.modal'), mdl = Modals.length, i = 0;
	    for ( i;i<mdl;i++ ) {
	      var modal = Modals[i], options = {};
	      options.keyboard = modal.getAttribute('data-keyboard');
	      options.backdrop = modal.getAttribute('data-backdrop');
	      options.duration = modal.getAttribute('data-duration');
	      new Modal(modal,options)
	    }
	  })();
	  // Native Javascript for Bootstrap 3 | Popover
	  // by dnp_theme
	  
	  // POPOVER DEFINITION
	  // ===================
	  var Popover = function( element,options ) {
	    options = options || {};
	    this.link = typeof element === 'object' ? element : document.querySelector(element);
	    this.title = this.link.getAttribute('data-title') || null;
	    this.content = this.link.getAttribute('data-content') || null;
	    this.popover = null;
	    this.options = {};
	    this.options.template = options.template ? options.template : null;
	    this.options.trigger = options.trigger ? options.trigger : 'hover';
	    this.options.animation = options.animation && options.animation !== 'true' ? options.animation : 'true';
	    this.options.placement = options.placement ? options.placement : 'top';
	    this.options.delay = parseInt(options.delay) || 100;
	    this.options.dismiss = options.dismiss && options.dismiss === 'true' ? true : false;
	    this.duration = 150;
	    this.options.duration = (isIE && isIE < 10) ? 0 : (options.duration || this.duration);
	    this.options.container = document.body;
	    if ( !this.content && !this.options.template ) return;
	    this.timer = 0 // the link own event timer
	  
	    var self = this, events = ('onmouseleave' in this.link) ? [ 'mouseenter', 'mouseleave'] : [ 'mouseover', 'mouseout' ];
	  
	    this.toggle = function(e) {
	      if (self.popover === null) {
	        self.open()
	      } else {
	        self.close()
	      }
	    }
	    this.open = function(e) {
	      clearTimeout(self.link.getAttribute('data-timer'));
	      self.timer = setTimeout( function() {
	        if (self.popover === null) {
	          self.createPopover();
	          self.stylePopover();
	          self.updatePopover()
	        }
	      }, self.options.duration );
	      self.link.setAttribute('data-timer',self.timer);
	    }
	    this.dismiss = function(e) {
	      if (self.popover && e.target === self.popover.querySelector('.close')) {
	        self.close();
	      }
	    }
	    this.close = function(e) {
	      clearTimeout(self.link.getAttribute('data-timer'));
	      self.timer = setTimeout( function() {
	        if (self.popover && self.popover !== null && /\bin/.test(self.popover.className)) {
	          self.popover.className = self.popover.className.replace(' in','');
	          setTimeout(function() {
	            self.removePopover(); // for performance/testing reasons we can keep the popovers if we want
	          }, self.options.duration);
	        }
	  
	      }, self.options.delay + self.options.duration);
	      self.link.setAttribute('data-timer',self.timer);
	    }
	    //remove the popover
	    this.removePopover = function() {
	      this.popover && this.options.container.removeChild(this.popover);
	      this.popover = null;
	      this.timer = null
	    }
	    this.createPopover = function() {
	      this.popover = document.createElement('div');
	  
	      if ( this.content !== null && this.options.template === null ) { //create the popover from data attributes
	  
	        this.popover.setAttribute('role','tooltip');
	  
	        var popoverArrow = document.createElement('div');
	        popoverArrow.setAttribute('class','arrow');
	  
	        if (this.title !== null) {
	          var popoverTitle = document.createElement('h3');
	          popoverTitle.setAttribute('class','popover-title');
	  
	          if (this.options.dismiss) {
	            popoverTitle.innerHTML = this.title + '<button type="button" class="close">×</button>';
	          } else {
	            popoverTitle.innerHTML = this.title;
	          }
	          this.popover.appendChild(popoverTitle);
	        }
	  
	        var popoverContent = document.createElement('div');
	        popoverContent.setAttribute('class','popover-content');
	  
	        this.popover.appendChild(popoverArrow);
	        this.popover.appendChild(popoverContent);
	  
	        //set popover content
	        if (this.options.dismiss && this.title === null) {
	          popoverContent.innerHTML = this.content + '<button type="button" class="close">×</button>';
	        } else {
	          popoverContent.innerHTML = this.content;
	        }
	  
	      } else {  // or create the popover from template
	        var template = document.createElement('div');
	        template.innerHTML = this.options.template;
	        this.popover.innerHTML = template.firstChild.innerHTML;
	      }
	  
	      //append to the container
	      this.options.container.appendChild(this.popover);
	      this.popover.style.display = 'block';
	    }
	    this.stylePopover = function(pos) {
	      var rect = this.link.getBoundingClientRect(),
	          placement = pos || this.options.placement,
	          animation = this.options.animation === 'true' ? 'fade' : '';
	  
	      this.popover.setAttribute('class','popover '+placement+' '+animation);
	  
	      var ld = { w: rect.right - rect.left, h: rect.bottom - rect.top }, //link real dimensions
	          pd = { w : this.popover.offsetWidth, h: this.popover.offsetHeight }, //popover real dimensions
	          sYo = this.getScroll().y, sXo = this.getScroll().x; //window vertical and horizontal scroll
	  
	      //apply styling
	      if ( /top/.test(placement) ) { //TOP
	        this.popover.style.top = rect.top + sYo - pd.h + 'px';
	        this.popover.style.left = rect.left + sXo - pd.w/2 + ld.w/2 + 'px'
	  
	      } else if ( /bottom/.test(placement) ) { //BOTTOM
	        this.popover.style.top = rect.top + sYo + ld.h + 'px';
	        this.popover.style.left = rect.left + sXo - pd.w/2 + ld.w/2 + 'px';
	  
	      } else if ( /left/.test(placement) ) { //LEFT
	        this.popover.style.top = rect.top + sYo - pd.h/2 + ld.h/2 + 'px';
	        this.popover.style.left = rect.left + sXo - pd.w + 'px';
	  
	      } else if ( /right/.test(placement) ) { //RIGHT
	        this.popover.style.top = rect.top + sYo - pd.h/2 + ld.h/2 + 'px';
	        this.popover.style.left = rect.left + sXo + ld.w + 'px';
	      }
	    }
	    this.updatePopover = function() {
	      var placement = null;
	      if ( !isElementInViewport(this.popover) ) {
	        placement = this.updatePlacement();
	      } else {
	        placement = this.options.placement;
	      }
	  
	      this.stylePopover(placement);
	      this.popover.className += ' in';
	    }
	    this.updatePlacement = function() {
	      var pos = this.options.placement;
	      if ( /top/.test(pos) ) { //TOP
	        return 'bottom';
	      } else if ( /bottom/.test(pos) ) { //BOTTOM
	        return 'top';
	      } else if ( /left/.test(pos) ) { //LEFT
	        return 'right';
	      } else if ( /right/.test(pos) ) { //RIGHT
	        return 'left';
	      }
	    }
	    this.getScroll = function() {
	      return {
	        y : window.pageYOffset || document.documentElement.scrollTop,
	        x : window.pageXOffset || document.documentElement.scrollLeft
	      }
	    }
	    // init
	    if (this.options.trigger === 'hover') {
	      this.link.addEventListener(events[0], this.open, false);
	      if (!this.options.dismiss) { this.link.addEventListener(events[1], this.close, false); }
	    } else if (this.options.trigger === 'click') {
	      this.link.addEventListener('click', this.toggle, false);
	      if (!this.options.dismiss) { this.link.addEventListener('blur', this.close, false); }
	    } else if (this.options.trigger === 'focus') {
	      this.link.addEventListener('focus', this.toggle, false);
	      if (!this.options.dismiss) { this.link.addEventListener('blur', this.close, false);  }
	    }
	  
	    if (this.options.dismiss) {  document.addEventListener('click', this.dismiss, false); }
	  
	    if (!(isIE && isIE < 9) ) { // dismiss on window resize
	      window.addEventListener('resize', this.close, false );
	    }
	  };
	  
	  (function () {
	    // POPOVER DATA API
	    // =================
	    var Popovers = document.querySelectorAll('[data-toggle=popover]'), i = 0, ppl = Popovers.length;
	    for (i;i<ppl;i++){
	      var item = Popovers[i], options = {};
	      options.trigger = item.getAttribute('data-trigger'); // click / hover / focus
	      options.animation = item.getAttribute('data-animation'); // true / false
	      options.duration = item.getAttribute('data-duration');
	      options.placement = item.getAttribute('data-placement');
	      options.dismiss = item.getAttribute('data-dismiss');
	      options.delay = item.getAttribute('data-delay');
	      new Popover(item,options);
	    }
	  })();
	  // Native Javascript for Bootstrap 3 | ScrollSpy
	  // by dnp_theme
	  
	  //SCROLLSPY DEFINITION
	  var ScrollSpy = function(element,item,options) {
	    options = options || {};
	  
	    //this is the container element we spy it's elements on
	    this.element = typeof element === 'object' ? element : document.querySelector(element);
	  
	    this.options = {};
	    // this is the UL menu component our scrollSpy object will target, configure and required by the container element
	    this.options.target = options.target ? (typeof options.target === 'object' ? options.target : document.querySelector(options.target)) : null;
	  
	    //we need to determine the index of each menu item
	    this.items = this.options.target && this.options.target.getElementsByTagName('A');
	  
	    this.item = item;
	    // the parent LI element
	    this.parent = this.item.parentNode;
	  
	    // the upper level LI ^ UL ^ LI, this is required for dropdown menus
	    this.parentParent = this.parent.parentNode.parentNode;
	  
	    this.tg = this.item.href && document.getElementById(this.item.getAttribute('href').replace('#',''));
	    this.active = false;
	    this.topEdge = 0;
	    this.bottomEdge = 0;
	    var self = this;
	  
	    //determine which is the real scrollTarget
	    if ( this.element.offsetHeight < this.element.scrollHeight ) { // or this.scrollHeight()
	      this.scrollTarget = this.element;
	    } else {
	      this.scrollTarget = window;
	    }
	  
	    if ( !this.options.target ) { return; }
	  
	    this.topLimit = function () { // the target offset
	      if ( this.scrollTarget === window ) {
	        return this.tg.getBoundingClientRect().top + this.scrollOffset() - 5
	      } else {
	        return this.tg.offsetTop;
	      }
	    }
	    this.bottomLimit = function () {
	      return this.topLimit() + this.tg.clientHeight
	    }
	    this.checkEdges = function () {
	      this.topEdge = this.topLimit();
	      this.bottomEdge = this.bottomLimit()
	    }
	    this.scrollOffset = function () {
	      if ( this.scrollTarget === window ) {
	        return window.pageYOffset || document.documentElement.scrollTop
	      } else {
	        return this.element.scrollTop
	      }
	    }
	    this.activate = function () {
	      if ( this.parent && this.parent.tagName === 'LI' && !/\bactive/.test(this.parent.className) ) {
	        addClass(this.parent,'active');
	        if ( this.parentParent && this.parentParent.tagName === 'LI' // activate the dropdown as well
	          && /\bdropdown/.test(this.parentParent.className)
	          && !/\bactive/.test(this.parentParent.className) ) { addClass(this.parentParent,'active'); }
	        this.active = true
	      }
	    }
	    this.deactivate = function () {
	      if ( this.parent && this.parent.tagName === 'LI' && /\bactive/.test(this.parent.className) ) {
	        removeClass(this.parent,'active');
	        if ( this.parentParent && this.parentParent.tagName === 'LI' // deactivate the dropdown as well
	          && /\bdropdown/.test(this.parentParent.className)
	          && /\bactive/.test(this.parentParent.className) ) { removeClass(this.parentParent,'active'); }
	        this.active = false
	      }
	    }
	    this.toggle = function () {
	      if ( this.active === false
	        && ( this.bottomEdge > this.scrollOffset() && this.scrollOffset() >= this.topEdge )) { //regular use, scroll just entered the element's topLimit or bottomLimit
	          this.activate();
	      } else if (this.active === true && (this.bottomEdge <= this.scrollOffset() && this.scrollOffset() < this.topEdge )) {
	        this.deactivate()
	      }
	    }
	    this.refresh = function () { // check edges again
	      this.deactivate();
	      this.checkEdges();
	  
	      this.toggle() // If any case update values again
	    }
	    this.scrollEvent = function(){
	      function onSpyScroll() {
	        self.refresh();
	      }
	      this.scrollTarget.addEventListener('scroll', onSpyScroll, false);
	    }
	    this.resizeEvent = function(){
	      function onSpyResize() {
	        self.refresh()
	      }
	      window.addEventListener('resize', onSpyResize, false);
	    }
	    this.scrollHeight = function() {
	      if ( this.scrollTarget === window ) {
	        return Math.max( document.body.scrollHeight, document.body.offsetHeight,
	          document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
	      } else {
	        return this.element.scrollHeight
	      }
	    }
	  
	    // init
	    if ( this.item.getAttribute('href') && this.item.getAttribute('href').indexOf('#') > -1 ) {
	      //actions
	      this.checkEdges();
	      this.refresh()
	      this.scrollEvent();
	      if (!(isIE && isIE < 9)) { this.resizeEvent(); }
	    }
	  };
	  
	  (function () {
	    //SCROLLSPY DATA API
	    //=============
	    var scrollSpyes = document.querySelectorAll('[data-spy="scroll"]'), i = 0, ssl = scrollSpyes.length; // mostly is the document.body or a large container with many elements having id="not-null-id"
	    for (i;i<ssl;i++) {
	      var spy = scrollSpyes[i], options = {};
	      options.target = spy.getAttribute('data-target') || null;  // this must be a .nav component with id="not-null"
	      if ( options.target !== null ) {
	        var menu = options.target === 'object' ?  options.target : document.querySelector(options.target),
	          items = menu.querySelectorAll('a'), j = 0, il = items.length;
	        for (j;j<il;j++) {
	          var item = items[j];
	          if ( item.href && item.getAttribute('href') !== '#' )
	          new ScrollSpy(spy, item, options);
	        }
	      }
	    }
	  })();
	  // Native Javascript for Bootstrap 3 | Tab
	  // by dnp_theme
	  
	  // TAB DEFINITION
	  // ===================
	  var Tab = function( element,options ) {
	    options = options || {};
	    this.tab = typeof element === 'object' ? element : document.querySelector(element);
	    this.tabs = this.tab.parentNode.parentNode;
	    this.dropdown = this.tabs.querySelector('.dropdown');
	    if ( /\bdropdown-menu/.test(this.tabs.className) ) {
	      this.dropdown = this.tabs.parentNode;
	      this.tabs = this.tabs.parentNode.parentNode;
	    }
	    this.options = options;
	  
	    // default tab transition duration
	    this.duration = 150;
	    this.options.duration = (isIE && isIE < 10)  ? 0 : (options.duration || this.duration);
	  
	    var self = this;
	  
	    this.handle = function(e) {
	      e = e || window.e; e.preventDefault();
	      var next = e.target; //the tab we clicked is now the next tab
	      var nextContent = document.getElementById(next.getAttribute('href').replace('#','')); //this is the actual object, the next tab content to activate
	  
	      // get current active tab and content
	      var activeTab = self.getActiveTab();
	      var activeContent = self.getActiveContent();
	  
	      if ( !/\bactive/.test(next.parentNode.className) ) {
	        // toggle "active" class name
	        removeClass(activeTab,'active');
	        addClass(next.parentNode,'active');
	  
	        // handle dropdown menu "active" class name
	        if ( self.dropdown ) {
	          if ( !(/\bdropdown-menu/.test(self.tab.parentNode.parentNode.className)) ) {
	            if (/\bactive/.test(self.dropdown.className)) removeClass(self.dropdown,'active');
	          } else {
	            if (!/\bactive/.test(self.dropdown.className)) addClass(self.dropdown,'active');
	          }
	        }
	  
	        //1. hide current active content first
	        removeClass(activeContent,'in');
	  
	        setTimeout(function() {
	          //2. toggle current active content from view
	          removeClass(activeContent,'active');
	          addClass(nextContent,'active');
	        }, self.options.duration);
	        setTimeout(function() {
	          //3. show next active content
	          addClass(nextContent,'in');
	        }, self.options.duration*2);
	      }
	    }
	    this.getActiveTab = function() {
	      var activeTabs = this.tabs.querySelectorAll('.active');
	      if ( activeTabs.length === 1 && !/\bdropdown/.test(activeTabs[0].className) ) {
	        return activeTabs[0]
	      } else if ( activeTabs.length > 1 ) {
	        return activeTabs[activeTabs.length-1]
	      }
	    }
	    this.getActiveContent = function() {
	      console.log(this.getActiveTab())
	      console.log(this.getActiveTab().getElementsByTagName('A'))
	      var a = this.getActiveTab().getElementsByTagName('A')[0].getAttribute('href').replace('#','');
	      return a && document.getElementById(a)
	    }
	  
	    // init
	    this.tab.addEventListener('click', this.handle, false);
	  };
	  
	  (function () {
	    // TAB DATA API
	    // =================
	    var Tabs = document.querySelectorAll("[data-toggle='tab'], [data-toggle='pill']"), tbl = Tabs.length, i=0;
	    for ( i;i<tbl;i++ ) {
	      var tab = Tabs[i], options = {};
	      options.duration = tab.getAttribute('data-duration') && tab.getAttribute('data-duration') || false;
	      new Tab(tab,options);
	    }
	  })();
	  // Native Javascript for Bootstrap 3 | Tooltip
	  // by dnp_theme
	  
	  // TOOLTIP DEFINITION
	  // ===================
	  var Tooltip = function( element,options ) {
	    options = options || {};
	  
	    this.link = typeof element === 'object' ? element : document.querySelector(element);
	    this.title = this.link.getAttribute('title') || this.link.getAttribute('data-original-title');
	    this.tooltip = null;
	    this.options = {};
	    this.options.animation = options.animation && options.animation !== 'fade' ? options.animation : 'fade';
	    this.options.placement = options.placement ? options.placement : 'top';
	    this.options.delay = parseInt(options.delay) || 100;
	    this.duration = 150;
	    this.options.duration = isIE && isIE < 10 ? 0 : (options.duration || this.duration);
	    this.options.container = options.container || document.body;
	    if ( !this.title ) return;
	    this.timer = 0 // the link own event timer
	  
	    var self = this, events = ('onmouseleave' in this.link) ? [ 'mouseenter', 'mouseleave'] : [ 'mouseover', 'mouseout' ];
	  
	    this.open = function(e) {
	      clearTimeout(self.link.getAttribute('data-timer'));
	      self.timer = setTimeout( function() {
	        if (self.tooltip === null) {
	          self.createToolTip();
	          self.styleTooltip();
	          self.updateTooltip()
	        }
	      }, self.options.duration );
	      self.link.setAttribute('data-timer',self.timer);
	    }
	    this.close = function(e) {
	      clearTimeout(self.link.getAttribute('data-timer'));
	      self.timer = setTimeout( function() {
	        if (self.tooltip && self.tooltip !== null) {
	          self.tooltip.className = self.tooltip.className.replace(' in','');
	          setTimeout(function() {
	            self.removeToolTip(); // for performance/testing reasons we can keep the tooltips if we want
	          }, self.options.duration);
	        }
	      }, self.options.delay + self.options.duration);
	      self.link.setAttribute('data-timer',self.timer);
	    }
	    //remove the tooltip
	    this.removeToolTip = function() {
	      this.tooltip && this.options.container.removeChild(this.tooltip);
	      this.tooltip = null;
	    }
	    //create the tooltip structure
	    this.createToolTip = function() {
	      this.tooltip = document.createElement('div');
	      this.tooltip.setAttribute('role','tooltip');
	  
	      var tooltipArrow = document.createElement('div');
	      tooltipArrow.setAttribute('class','tooltip-arrow');
	      var tooltipInner = document.createElement('div');
	      tooltipInner.setAttribute('class','tooltip-inner');
	  
	      this.tooltip.appendChild(tooltipArrow);
	      this.tooltip.appendChild(tooltipInner);
	  
	      //set tooltip content
	      tooltipInner.innerHTML = this.title;
	  
	      //append to the container
	      this.options.container.appendChild(this.tooltip);
	    }
	    this.styleTooltip = function(pos) {
	      var rect = this.link.getBoundingClientRect(),
	          placement = pos || this.options.placement;
	  
	      this.tooltip.setAttribute('class','tooltip '+placement+' '+this.options.animation);
	  
	      var ld = { w: rect.right - rect.left, h: rect.bottom - rect.top }, //link real dimensions
	          td = { w : this.tooltip.offsetWidth, h: this.tooltip.offsetHeight }, //tooltip real dimensions
	          sYo = this.getScroll().y, sXo = this.getScroll().x; //window vertical and horizontal scroll
	  
	      //apply styling
	      if ( /top/.test(placement) ) { //TOP
	        this.tooltip.style.top = rect.top + sYo - td.h + 'px';
	        this.tooltip.style.left = rect.left + sXo - td.w/2 + ld.w/2 + 'px'
	  
	      } else if ( /bottom/.test(placement) ) { //BOTTOM
	        this.tooltip.style.top = rect.top + sYo + ld.h + 'px';
	        this.tooltip.style.left = rect.left + sXo - td.w/2 + ld.w/2 + 'px';
	  
	      } else if ( /left/.test(placement) ) { //LEFT
	        this.tooltip.style.top = rect.top + sYo - td.h/2 + ld.h/2 + 'px';
	        this.tooltip.style.left = rect.left + sXo - td.w + 'px';
	  
	      } else if ( /right/.test(placement) ) { //RIGHT
	        this.tooltip.style.top = rect.top + sYo - td.h/2 + ld.h/2 + 'px';
	        this.tooltip.style.left = rect.left + sXo + ld.w + 'px';
	      }
	    }
	    this.updateTooltip = function() {
	      var placement = null;
	      if ( !isElementInViewport(this.tooltip) ) {
	        placement = this.updatePlacement();
	      } else {
	        placement = this.options.placement;
	      }
	      this.styleTooltip(placement);
	      this.tooltip.className += ' in';
	    }
	    this.updatePlacement = function() {
	      var pos = this.options.placement;
	      if ( /top/.test(pos) ) { //TOP
	        return 'bottom';
	      } else if ( /bottom/.test(pos) ) { //BOTTOM
	        return 'top';
	      } else if ( /left/.test(pos) ) { //LEFT
	        return 'right';
	      } else if ( /right/.test(pos) ) { //RIGHT
	        return 'left';
	      }
	    }
	    this.getScroll = function() {
	      return {
	        y : window.pageYOffset || document.documentElement.scrollTop,
	        x : window.pageXOffset || document.documentElement.scrollLeft
	      }
	    }
	    // init
	    this.link.addEventListener(events[0], this.open, false);
	    this.link.addEventListener(events[1], this.close, false);
	    //remove title from link
	    this.link.setAttribute('data-original-title',this.title);
	    this.link.removeAttribute('title');
	  };
	  
	  (function () {
	    // TOOLTIP DATA API
	    // =================
	    var Tooltips = document.querySelectorAll('[data-toggle=tooltip]'), i = 0, tpl = Tooltips.length;
	    for (i;i<tpl;i++){
	      var item = Tooltips[i], options = {};
	      options.animation = item.getAttribute('data-animation');
	      options.placement = item.getAttribute('data-placement');
	      options.duration = item.getAttribute('data-duration');
	      options.delay = item.getAttribute('data-delay');
	      new Tooltip(item,options);
	    }
	  })();
	  
	  return {
	    Affix: Affix,
	    Alert: Alert,
	    Button: Button,
	    Carousel: Carousel,
	    Collapse: Collapse,
	    Dropdown: Dropdown,
	    Modal: Modal,
	    Popover: Popover,
	    ScrollSpy: ScrollSpy,
	    Tab: Tab,
	    Tooltip: Tooltip
	  };
	}));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.1.3
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		var registeredInModuleLoader = false;
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			registeredInModuleLoader = true;
		}
		if (true) {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function init (converter) {
			function api (key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}

				// Write

				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);

					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}

					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}

					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}

					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);

					return (document.cookie = [
						key, '=', value,
						attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
						attributes.path ? '; path=' + attributes.path : '',
						attributes.domain ? '; domain=' + attributes.domain : '',
						attributes.secure ? '; secure' : ''
					].join(''));
				}

				// Read

				if (!key) {
					result = {};
				}

				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');

					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);

						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						if (key === name) {
							result = cookie;
							break;
						}

						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}

				return result;
			}

			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};

			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = window.Drupal;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stringify = __webpack_require__(10);
	var Parse = __webpack_require__(12);

	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Utils = __webpack_require__(11);

	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) {
	        return prefix + '[]';
	    },
	    indices: function indices(prefix, key) {
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) {
	        return prefix;
	    }
	};

	var defaults = {
	    delimiter: '&',
	    strictNullHandling: false,
	    skipNulls: false,
	    encode: true,
	    encoder: Utils.encode
	};

	var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encoder ? encoder(prefix) : prefix;
	        }

	        obj = '';
	    }

	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || Utils.isBuffer(obj)) {
	        if (encoder) {
	            return [encoder(prefix) + '=' + encoder(obj)];
	        }
	        return [prefix + '=' + String(obj)];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }

	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];

	        if (skipNulls && obj[key] === null) {
	            continue;
	        }

	        if (Array.isArray(obj)) {
	            values = values.concat(stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	        } else {
	            values = values.concat(stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	        }
	    }

	    return values;
	};

	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
	    var encoder = encode ? (typeof options.encoder === 'function' ? options.encoder : defaults.encoder) : null;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var objKeys;
	    var filter;

	    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }

	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        objKeys = filter = options.filter;
	    }

	    var keys = [];

	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }

	    if (sort) {
	        objKeys.sort(sort);
	    }

	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];

	        if (skipNulls && obj[key] === null) {
	            continue;
	        }

	        keys = keys.concat(stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	    }

	    return keys.join(delimiter);
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	var hexTable = (function () {
	    var array = new Array(256);
	    for (var i = 0; i < 256; ++i) {
	        array[i] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();
	    }

	    return array;
	}());

	exports.arrayToObject = function (source, options) {
	    var obj = options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};

	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            target[source] = true;
	        } else {
	            return [target, source];
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }

	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }

	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];

	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};

	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};

	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }

	    var string = typeof str === 'string' ? str : String(str);

	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);

	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }

	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }

	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)];
	    }

	    return out;
	};

	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }

	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0; i < obj.length; ++i) {
	            if (obj[i] && typeof obj[i] === 'object') {
	                compacted.push(exports.compact(obj[i], refs));
	            } else if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (var j = 0; j < keys.length; ++j) {
	        var key = keys[j];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};

	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};

	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }

	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Utils = __webpack_require__(11);

	var defaults = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000,
	    strictNullHandling: false,
	    plainObjects: false,
	    allowPrototypes: false,
	    allowDots: false,
	    decoder: Utils.decode
	};

	var parseValues = function parseValues(str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[options.decoder(part)] = '';

	            if (options.strictNullHandling) {
	                obj[options.decoder(part)] = null;
	            }
	        } else {
	            var key = options.decoder(part.slice(0, pos));
	            var val = options.decoder(part.slice(pos + 1));

	            if (Object.prototype.hasOwnProperty.call(obj, key)) {
	                obj[key] = [].concat(obj[key]).concat(val);
	            } else {
	                obj[key] = val;
	            }
	        }
	    }

	    return obj;
	};

	var parseObject = function parseObject(chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};

	var parseKeys = function parseKeys(givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }

	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^\.\[]+)/g, '[$1]') : givenKey;

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && Object.prototype.hasOwnProperty(segment[1])) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }

	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return parseObject(keys, val, options);
	};

	module.exports = function (str, opts) {
	    var options = opts || {};

	    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }

	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? Object.create(null) : {};
	    }

	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj, options);
	    }

	    return Utils.compact(obj);
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bootstrapNative = __webpack_require__(6);

	var _bootstrapNative2 = _interopRequireDefault(_bootstrapNative);

	var _drupal = __webpack_require__(8);

	var _drupal2 = _interopRequireDefault(_drupal);

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _url = __webpack_require__(19);

	var _url2 = _interopRequireDefault(_url);

	var _inputBlur = __webpack_require__(20);

	var _inputBlur2 = _interopRequireDefault(_inputBlur);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _inputBlur2.default)();

	var modal = init();

	exports.default = function () {
	  // Init vue for page components
	  initVue('.v-element.vs-contact-form');
	  initVue('.v-element.vs-contact-form.vs-contact-form--register');

	  // Bind links with virgin type contact_form or register_interest_form to open forms in modal
	  (0, _jquery2.default)(document).ready(function () {
	    (0, _jquery2.default)('[virgin-type][virgin-type!="link"]').each(function () {
	      bind((0, _jquery2.default)(this));
	    });
	  });
	};

	/**
	 * Add modal container to page
	 * 
	 * @returns {bootstrap.Modal}
	 */


	function init() {
	  var html = '\n    <div id="vs-contact-form-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">\n      <div class="modal-dialog">\n        <div class="modal-content"></div>\n      </div>\n    </div>\n  ';

	  var $modal = (0, _jquery2.default)(html);
	  $modal.appendTo('body');

	  return new _bootstrapNative2.default.Modal($modal.get(0));
	}

	/**
	 *
	 * @param {jQuery} $el
	 */
	function bind($el) {
	  // Build url based on link parameters
	  var base = id();
	  var query = _url2.default.query($el.attr('href'));
	  query['virgin_type'] = $el.attr('virgin-type');
	  var params = _jquery2.default.param(query);

	  var ajax = new _drupal2.default.ajax(base, $el.get(0), {
	    url: '//' + window.location.hostname + _drupal2.default.settings.basePath + _drupal2.default.settings.pathPrefix + 'ajax/contact-form?' + params,
	    event: 'click'
	  });

	  ajax.commands.vsContactForm = function (ajax, response, status) {
	    // Open modal with forms template
	    modal.open();
	    modal.content(response.data);

	    // Apply vue to template
	    initVue('.modal .v-element.vs-contact-form', true);

	    // Run attachBehaviors to run libraries like chosen and apply to new elements
	    _drupal2.default.attachBehaviors();

	    // Attach blur event to new form elements
	    (0, _inputBlur2.default)();
	  };

	  _drupal2.default.ajax[base] = ajax;
	}

	/**
	 * Generates a random unique identifier
	 *
	 * @returns {string}
	 */
	function id() {
	  return 'vs-contact-form-' + (Math.random().toString(36) + '00000000000000000').slice(2, 10 + 2);
	}

	/**
	 *  Get url base path
	 * @returns {string}
	 */
	function path() {
	  return '//' + window.location.hostname + _drupal2.default.settings.basePath + _drupal2.default.settings.pathPrefix;
	}

	/**
	 * Execute on the given selector
	 *
	 * @param selector
	 *  The element selector
	 * @param inModal
	 *  A boolean value to tell view if this form is running on page context or in a modal
	 */
	function initVue(selector) {
	  var inModal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  if (!(0, _jquery2.default)(selector).length) {
	    return;
	  }

	  new _vue2.default({
	    el: selector,
	    compiled: function compiled() {
	      this.bindLists();
	    },
	    ready: function ready() {
	      this.$el.classList.add('v-element--ready');
	    },

	    methods: {
	      /**
	       * Called from vue directive init @see vue.js
	       */
	      init: function init(data) {
	        // If data is undefined bail out
	        if (!data) {
	          return;
	        }

	        // Init comes from a custom directive because vue core doesn't have it
	        if (data.events) {
	          this._data.form.events = data.events;
	        }

	        if (data.event_id) {
	          this._data.form.event_ids = [data.event_id];
	        }

	        // Update chosen
	        this.updateChosen();
	      },


	      /**
	       * Because of a conflict with chosen and vue v-model is not updated
	       */
	      bindLists: function bindLists() {
	        var self = this;
	        (0, _jquery2.default)(selector).find('select').on("change", function () {
	          var $el = (0, _jquery2.default)(this);
	          var name = $el.attr('name');
	          if (self.form[name] != $el.val()) {
	            self.form[name] = $el.val();

	            if (name == 'festival_id') {
	              self.festivalChange();
	            }
	          }
	        });
	      },


	      /**
	       * Update chosen value based on model
	       */
	      updateChosen: function updateChosen() {
	        window.setTimeout(function () {
	          (0, _jquery2.default)(selector).find('select').trigger("chosen:updated");
	        }, 0);
	      },


	      /**
	       * Triggered when the festival dropdown change
	       */
	      festivalChange: function festivalChange() {
	        var self = this;
	        self.loading = true;

	        this.$http.get(path() + ('ajax/festival/' + this.form.festival_id + '/events')).then(function (response) {
	          if (response.data) {
	            // List of events
	            var events = JSON.parse(response.data);

	            // Set events property and trigger update chosen to update lists
	            self.form.events = events;
	            self.updateChosen();
	            self.loading = false;
	          }
	        });
	      },


	      /**
	       * Conditions to check if form is valid outside vue-validator
	       */
	      formValid: function formValid() {
	        return true;
	      },
	      closeModal: function closeModal() {
	        modal.close();
	      },
	      submit: function submit() {
	        var self = this;

	        this.$http.post(path() + 'ajax/contact-form/post', this.form).then(function (response) {
	          // success callback
	          self.form.submitted = true;
	        }, function (response) {
	          self.form.error = true;
	        });
	      }
	    },
	    data: {
	      inModal: inModal,
	      loading: false,
	      form: {
	        submitted: false,
	        error: false,
	        about: '',
	        message: '',
	        type: '',
	        festival_id: '',
	        over_12: '',
	        events: {},
	        event_ids: []
	      }
	    }
	  });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(15);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueValidator = __webpack_require__(17);

	var _vueValidator2 = _interopRequireDefault(_vueValidator);

	var _vueResource = __webpack_require__(18);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueValidator2.default);
	_vue2.default.use(_vueResource2.default);

	// VALIDATORS ----------------------------------------------------------------------------------------------------------

	/*
	 * Check if is a valid email
	 */
	_vue2.default.validator('email', {
	  message: 'invalid email address',
	  check: function check(val) {
	    return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
	    );
	  }
	});

	/*
	 * Check if properties values match
	 */
	_vue2.default.validator('match', {
	  message: 'the values do not match',
	  check: function check(val1, val2) {
	    return val1 == val2;
	  }
	});

	// DIRECTIVES ----------------------------------------------------------------------------------------------------------

	/**
	 * Directive to simulate init function
	 */
	_vue2.default.directive('init', function (data) {
	  if (!this.vm || !this.vm.init) {
	    return;
	  }

	  this.vm.init(data);
	});

	exports.default = _vue2.default;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([^-])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc = undefined;

	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var noop = function noop() {};
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) setTimeout(noop);
	    };
	  } else if (typeof MutationObserver !== 'undefined') {
	    // use MutationObserver where native Promise is not available,
	    // e.g. IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = setTimeout;
	  }

	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;

	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;

	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

	function peek() {
	  return str.charCodeAt(index + 1);
	}

	function next() {
	  return str.charCodeAt(++index);
	}

	function eof() {
	  return index >= len;
	}

	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}

	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}

	function isExpStart(chr) {
	  return expStartChr[chr];
	}

	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}

	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}

	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;

	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }

	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }

	    next();

	    if (inExp === 0) {
	      break;
	    }
	  }
	}

	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */

	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }

	  return str.slice(start + 1, index) || null;
	}

	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}

	function parseFilter() {
	  var filter = {};
	  var args;

	  state = filterState;
	  filter.name = parseExpression().trim();

	  state = filterArgState;
	  args = parseFilterArguments();

	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}

	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }

	  return args;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;

	  var filters;

	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIOS: isIOS,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('v-if')) {
	      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
	    }

	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;

	  var groupedMap = {};
	  var i, j, k, l;
	  var index = 0;
	  var priorities = [];
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	      priorities.push(priority);
	    }
	    array.push(dir);
	  }

	  priorities.sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;

	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }

	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.28';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * vue-validator v2.1.7
	 * (c) 2016 kazuya kawaguchi
	 * Released under the MIT License.
	 */
	'use strict';

	var babelHelpers = {};
	babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	babelHelpers.classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	babelHelpers.createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	babelHelpers.inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	babelHelpers.possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	babelHelpers;
	/**
	 * Utilties
	 */

	// export default for holding the Vue reference
	var exports$1 = {};
	/**
	 * warn
	 *
	 * @param {String} msg
	 * @param {Error} [err]
	 *
	 */

	function warn(msg, err) {
	  if (window.console) {
	    console.warn('[vue-validator] ' + msg);
	    if (err) {
	      console.warn(err.stack);
	    }
	  }
	}

	/**
	 * empty
	 *
	 * @param {Array|Object} target
	 * @return {Boolean}
	 */

	function empty(target) {
	  if (target === null || target === undefined) {
	    return true;
	  }

	  if (Array.isArray(target)) {
	    if (target.length > 0) {
	      return false;
	    }
	    if (target.length === 0) {
	      return true;
	    }
	  } else if (exports$1.Vue.util.isPlainObject(target)) {
	    for (var key in target) {
	      if (exports$1.Vue.util.hasOwn(target, key)) {
	        return false;
	      }
	    }
	  }

	  return true;
	}

	/**
	 * each
	 *
	 * @param {Array|Object} target
	 * @param {Function} iterator
	 * @param {Object} [context]
	 */

	function each(target, iterator, context) {
	  if (Array.isArray(target)) {
	    for (var i = 0; i < target.length; i++) {
	      iterator.call(context || target[i], target[i], i);
	    }
	  } else if (exports$1.Vue.util.isPlainObject(target)) {
	    var hasOwn = exports$1.Vue.util.hasOwn;
	    for (var key in target) {
	      if (hasOwn(target, key)) {
	        iterator.call(context || target[key], target[key], key);
	      }
	    }
	  }
	}

	/**
	 * pull
	 *
	 * @param {Array} arr
	 * @param {Object} item
	 * @return {Object|null}
	 */

	function pull(arr, item) {
	  var index = exports$1.Vue.util.indexOf(arr, item);
	  return ~index ? arr.splice(index, 1) : null;
	}

	/**
	 * trigger
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Object} [args]
	 */

	function trigger(el, event, args) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(event, true, false);

	  if (args) {
	    for (var prop in args) {
	      e[prop] = args[prop];
	    }
	  }

	  // Due to Firefox bug, events fired on disabled
	  // non-attached form controls can throw errors
	  try {
	    el.dispatchEvent(e);
	  } catch (e) {}
	}

	/**
	 * Forgiving check for a promise
	 *
	 * @param {Object} p
	 * @return {Boolean}
	 */

	function isPromise(p) {
	  return p && typeof p.then === 'function';
	}

	/**
	 * Togging classes
	 *
	 * @param {Element} el
	 * @param {String} key
	 * @param {Function} fn
	 */

	function toggleClasses(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }

	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	/**
	 * Fundamental validate functions
	 */

	/**
	 * required
	 *
	 * This function validate whether the value has been filled out.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 */

	function required(val) {
	  if (Array.isArray(val)) {
	    if (val.length !== 0) {
	      var valid = true;
	      for (var i = 0, l = val.length; i < l; i++) {
	        valid = required(val[i]);
	        if (!valid) {
	          break;
	        }
	      }
	      return valid;
	    } else {
	      return false;
	    }
	  } else if (typeof val === 'number' || typeof val === 'function') {
	    return true;
	  } else if (typeof val === 'boolean') {
	    return val;
	  } else if (typeof val === 'string') {
	    return val.length > 0;
	  } else if (val !== null && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object') {
	    return Object.keys(val).length > 0;
	  } else if (val === null || val === undefined) {
	    return false;
	  }
	}

	/**
	 * pattern
	 *
	 * This function validate whether the value matches the regex pattern
	 *
	 * @param val
	 * @param {String} pat
	 * @return {Boolean}
	 */

	function pattern(val, pat) {
	  if (typeof pat !== 'string') {
	    return false;
	  }

	  var match = pat.match(new RegExp('^/(.*?)/([gimy]*)$'));
	  if (!match) {
	    return false;
	  }

	  return new RegExp(match[1], match[2]).test(val);
	}

	/**
	 * minlength
	 *
	 * This function validate whether the minimum length.
	 *
	 * @param {String|Array} val
	 * @param {String|Number} min
	 * @return {Boolean}
	 */

	function minlength(val, min) {
	  if (typeof val === 'string') {
	    return isInteger(min, 10) && val.length >= parseInt(min, 10);
	  } else if (Array.isArray(val)) {
	    return val.length >= parseInt(min, 10);
	  } else {
	    return false;
	  }
	}

	/**
	 * maxlength
	 *
	 * This function validate whether the maximum length.
	 *
	 * @param {String|Array} val
	 * @param {String|Number} max
	 * @return {Boolean}
	 */

	function maxlength(val, max) {
	  if (typeof val === 'string') {
	    return isInteger(max, 10) && val.length <= parseInt(max, 10);
	  } else if (Array.isArray(val)) {
	    return val.length <= parseInt(max, 10);
	  } else {
	    return false;
	  }
	}

	/**
	 * min
	 *
	 * This function validate whether the minimum value of the numberable value.
	 *
	 * @param {*} val
	 * @param {*} arg minimum
	 * @return {Boolean}
	 */

	function min(val, arg) {
	  return !isNaN(+val) && !isNaN(+arg) && +val >= +arg;
	}

	/**
	 * max
	 *
	 * This function validate whether the maximum value of the numberable value.
	 *
	 * @param {*} val
	 * @param {*} arg maximum
	 * @return {Boolean}
	 */

	function max(val, arg) {
	  return !isNaN(+val) && !isNaN(+arg) && +val <= +arg;
	}

	/**
	 * isInteger
	 *
	 * This function check whether the value of the string is integer.
	 *
	 * @param {String} val
	 * @return {Boolean}
	 * @private
	 */

	function isInteger(val) {
	  return (/^(-?[1-9]\d*|0)$/.test(val)
	  );
	}

	var validators = Object.freeze({
	  required: required,
	  pattern: pattern,
	  minlength: minlength,
	  maxlength: maxlength,
	  min: min,
	  max: max
	});

	function Asset (Vue) {
	  var extend = Vue.util.extend;

	  // set global validators asset
	  var assets = Object.create(null);
	  extend(assets, validators);
	  Vue.options.validators = assets;

	  // set option merge strategy
	  var strats = Vue.config.optionMergeStrategies;
	  if (strats) {
	    strats.validators = function (parent, child) {
	      if (!child) {
	        return parent;
	      }
	      if (!parent) {
	        return child;
	      }
	      var ret = Object.create(null);
	      extend(ret, parent);
	      for (var key in child) {
	        ret[key] = child[key];
	      }
	      return ret;
	    };
	  }

	  /**
	   * Register or retrieve a global validator definition.
	   *
	   * @param {String} id
	   * @param {Function} definition
	   */

	  Vue.validator = function (id, definition) {
	    if (!definition) {
	      return Vue.options['validators'][id];
	    } else {
	      Vue.options['validators'][id] = definition;
	    }
	  };
	}

	function Override (Vue) {
	  // override _init
	  var init = Vue.prototype._init;
	  Vue.prototype._init = function (options) {
	    if (!this._validatorMaps) {
	      this._validatorMaps = Object.create(null);
	    }
	    init.call(this, options);
	  };

	  // override _destroy
	  var destroy = Vue.prototype._destroy;
	  Vue.prototype._destroy = function () {
	    destroy.apply(this, arguments);
	    this._validatorMaps = null;
	  };
	}

	var VALIDATE_UPDATE = '__vue-validator-validate-update__';
	var PRIORITY_VALIDATE = 4096;
	var PRIORITY_VALIDATE_CLASS = 32;
	var REGEX_FILTER = /[^|]\|[^|]/;
	var REGEX_VALIDATE_DIRECTIVE = /^v-validate(?:$|:(.*)$)/;
	var REGEX_EVENT = /^v-on:|^@/;

	var classId = 0; // ID for validation class


	function ValidateClass (Vue) {
	  var vIf = Vue.directive('if');
	  var FragmentFactory = Vue.FragmentFactory;
	  var _Vue$util = Vue.util;
	  var toArray = _Vue$util.toArray;
	  var replace = _Vue$util.replace;
	  var createAnchor = _Vue$util.createAnchor;

	  /**
	   * `v-validate-class` directive
	   */

	  Vue.directive('validate-class', {
	    terminal: true,
	    priority: vIf.priority + PRIORITY_VALIDATE_CLASS,

	    bind: function bind() {
	      var _this = this;

	      var id = String(classId++);
	      this.setClassIds(this.el, id);

	      this.vm.$on(VALIDATE_UPDATE, this.cb = function (classIds, validation, results) {
	        if (classIds.indexOf(id) > -1) {
	          validation.updateClasses(results, _this.frag.node);
	        }
	      });

	      this.setupFragment();
	    },
	    unbind: function unbind() {
	      this.vm.$off(VALIDATE_UPDATE, this.cb);
	      this.teardownFragment();
	    },
	    setClassIds: function setClassIds(el, id) {
	      var childNodes = toArray(el.childNodes);
	      for (var i = 0, l = childNodes.length; i < l; i++) {
	        var element = childNodes[i];
	        if (element.nodeType === 1) {
	          var hasAttrs = element.hasAttributes();
	          var attrs = hasAttrs && toArray(element.attributes);
	          for (var k = 0, _l = attrs.length; k < _l; k++) {
	            var attr = attrs[k];
	            if (attr.name.match(REGEX_VALIDATE_DIRECTIVE)) {
	              var existingId = element.getAttribute(VALIDATE_UPDATE);
	              var value = existingId ? existingId + ',' + id : id;
	              element.setAttribute(VALIDATE_UPDATE, value);
	            }
	          }
	        }

	        if (element.hasChildNodes()) {
	          this.setClassIds(element, id);
	        }
	      }
	    },
	    setupFragment: function setupFragment() {
	      this.anchor = createAnchor('v-validate-class');
	      replace(this.el, this.anchor);

	      this.factory = new FragmentFactory(this.vm, this.el);
	      this.frag = this.factory.create(this._host, this._scope, this._frag);
	      this.frag.before(this.anchor);
	    },
	    teardownFragment: function teardownFragment() {
	      if (this.frag) {
	        this.frag.remove();
	        this.frag = null;
	        this.factory = null;
	      }

	      replace(this.anchor, this.el);
	      this.anchor = null;
	    }
	  });
	}

	function Validate (Vue) {
	  var FragmentFactory = Vue.FragmentFactory;
	  var parseDirective = Vue.parsers.directive.parseDirective;
	  var _Vue$util = Vue.util;
	  var inBrowser = _Vue$util.inBrowser;
	  var bind = _Vue$util.bind;
	  var on = _Vue$util.on;
	  var off = _Vue$util.off;
	  var createAnchor = _Vue$util.createAnchor;
	  var replace = _Vue$util.replace;
	  var camelize = _Vue$util.camelize;
	  var isPlainObject = _Vue$util.isPlainObject;

	  // Test for IE10/11 textarea placeholder clone bug

	  function checkTextareaCloneBug() {
	    if (inBrowser) {
	      var t = document.createElement('textarea');
	      t.placeholder = 't';
	      return t.cloneNode(true).value === 't';
	    } else {
	      return false;
	    }
	  }
	  var hasTextareaCloneBug = checkTextareaCloneBug();

	  /**
	   * `v-validate` directive
	   */

	  Vue.directive('validate', {
	    deep: true,
	    terminal: true,
	    priority: PRIORITY_VALIDATE,
	    params: ['group', 'field', 'detect-blur', 'detect-change', 'initial', 'classes'],

	    paramWatchers: {
	      detectBlur: function detectBlur(val, old) {
	        if (this._invalid) {
	          return;
	        }
	        this.validation.detectBlur = this.isDetectBlur(val);
	        this.validator.validate(this.field);
	      },
	      detectChange: function detectChange(val, old) {
	        if (this._invalid) {
	          return;
	        }
	        this.validation.detectChange = this.isDetectChange(val);
	        this.validator.validate(this.field);
	      }
	    },

	    bind: function bind() {
	      var el = this.el;

	      if (process.env.NODE_ENV !== 'production' && el.__vue__) {
	        warn('v-validate="' + this.expression + '" cannot be used on an instance root element.');
	        this._invalid = true;
	        return;
	      }

	      if (process.env.NODE_ENV !== 'production' && (el.hasAttribute('v-if') || el.hasAttribute('v-for'))) {
	        warn('v-validate cannot be used `v-if` or `v-for` build-in terminal directive ' + 'on an element. these is wrapped with `<template>` or other tags: ' + '(e.g. <validator name="validator">' + '<template v-if="hidden">' + '<input type="text" v-validate:field1="[\'required\']">' + '</template>' + '</validator>).');
	        this._invalid = true;
	        return;
	      }

	      if (process.env.NODE_ENV !== 'production' && !(this.arg || this.params.field)) {
	        warn('you need specify field name for v-validate directive.');
	        this._invalid = true;
	        return;
	      }

	      var validatorName = this.vm.$options._validator;
	      if (process.env.NODE_ENV !== 'production' && !validatorName) {
	        warn('you need to wrap the elements to be validated in a <validator> element: ' + '(e.g. <validator name="validator">' + '<input type="text" v-validate:field1="[\'required\']">' + '</validator>).');
	        this._invalid = true;
	        return;
	      }

	      var raw = el.getAttribute('v-model');

	      var _parseModelRaw = this.parseModelRaw(raw);

	      var model = _parseModelRaw.model;
	      var filters = _parseModelRaw.filters;

	      this.model = model;

	      this.setupFragment();
	      this.setupValidate(validatorName, model, filters);
	      this.listen();
	    },
	    update: function update(value, old) {
	      if (!value || this._invalid) {
	        return;
	      }

	      if (isPlainObject(value) || old && isPlainObject(old)) {
	        this.handleObject(value, old, this.params.initial);
	      } else if (Array.isArray(value) || old && Array.isArray(old)) {
	        this.handleArray(value, old, this.params.initial);
	      }

	      var options = { field: this.field };
	      if (this.frag) {
	        options.el = this.frag.node;
	      }
	      this.validator.validate(options);
	    },
	    unbind: function unbind() {
	      if (this._invalid) {
	        return;
	      }

	      this.unlisten();
	      this.teardownValidate();
	      this.teardownFragment();

	      this.model = null;
	    },
	    parseModelRaw: function parseModelRaw(raw) {
	      if (REGEX_FILTER.test(raw)) {
	        var parsed = parseDirective(raw);
	        return { model: parsed.expression, filters: parsed.filters };
	      } else {
	        return { model: raw };
	      }
	    },
	    setupValidate: function setupValidate(name, model, filters) {
	      var params = this.params;
	      var validator = this.validator = this.vm._validatorMaps[name];

	      this.field = camelize(this.arg ? this.arg : params.field);

	      this.validation = validator.manageValidation(this.field, model, this.vm, this.getElementFrom(this.frag), this._scope, filters, params.initial, this.isDetectBlur(params.detectBlur), this.isDetectChange(params.detectChange));

	      isPlainObject(params.classes) && this.validation.setValidationClasses(params.classes);

	      params.group && validator.addGroupValidation(params.group, this.field);
	    },
	    listen: function listen() {
	      var model = this.model;
	      var validation = this.validation;
	      var el = this.getElementFrom(this.frag);

	      this.onBlur = bind(validation.listener, validation);
	      on(el, 'blur', this.onBlur);
	      if ((el.type === 'radio' || el.tagName === 'SELECT') && !model) {
	        this.onChange = bind(validation.listener, validation);
	        on(el, 'change', this.onChange);
	      } else if (el.type === 'checkbox') {
	        if (!model) {
	          this.onChange = bind(validation.listener, validation);
	          on(el, 'change', this.onChange);
	        } else {
	          this.onClick = bind(validation.listener, validation);
	          on(el, 'click', this.onClick);
	        }
	      } else {
	        if (!model) {
	          this.onInput = bind(validation.listener, validation);
	          on(el, 'input', this.onInput);
	        }
	      }
	    },
	    unlisten: function unlisten() {
	      var el = this.getElementFrom(this.frag);

	      if (this.onInput) {
	        off(el, 'input', this.onInput);
	        this.onInput = null;
	      }

	      if (this.onClick) {
	        off(el, 'click', this.onClick);
	        this.onClick = null;
	      }

	      if (this.onChange) {
	        off(el, 'change', this.onChange);
	        this.onChange = null;
	      }

	      if (this.onBlur) {
	        off(el, 'blur', this.onBlur);
	        this.onBlur = null;
	      }
	    },
	    teardownValidate: function teardownValidate() {
	      if (this.validator && this.validation) {
	        var el = this.getElementFrom(this.frag);

	        this.params.group && this.validator.removeGroupValidation(this.params.group, this.field);

	        this.validator.unmanageValidation(this.field, el);

	        this.validator = null;
	        this.validation = null;
	        this.field = null;
	      }
	    },
	    setupFragment: function setupFragment() {
	      this.anchor = createAnchor('v-validate');
	      replace(this.el, this.anchor);

	      this.factory = new FragmentFactory(this.vm, this.shimNode(this.el));
	      this.frag = this.factory.create(this._host, this._scope, this._frag);
	      this.frag.before(this.anchor);
	    },
	    teardownFragment: function teardownFragment() {
	      if (this.frag) {
	        this.frag.remove();
	        this.frag = null;
	        this.factory = null;
	      }

	      replace(this.anchor, this.el);
	      this.anchor = null;
	    },
	    handleArray: function handleArray(value, old, initial) {
	      var _this = this;

	      old && this.validation.resetValidation();

	      each(value, function (val) {
	        _this.validation.setValidation(val, undefined, undefined, initial);
	      });
	    },
	    handleObject: function handleObject(value, old, initial) {
	      var _this2 = this;

	      old && this.validation.resetValidation();

	      each(value, function (val, key) {
	        if (isPlainObject(val)) {
	          if ('rule' in val) {
	            var msg = 'message' in val ? val.message : null;
	            var init = 'initial' in val ? val.initial : null;
	            _this2.validation.setValidation(key, val.rule, msg, init || initial);
	          }
	        } else {
	          _this2.validation.setValidation(key, val, undefined, initial);
	        }
	      });
	    },
	    isDetectBlur: function isDetectBlur(detectBlur) {
	      return detectBlur === undefined || detectBlur === 'on' || detectBlur === true;
	    },
	    isDetectChange: function isDetectChange(detectChange) {
	      return detectChange === undefined || detectChange === 'on' || detectChange === true;
	    },
	    isInitialNoopValidation: function isInitialNoopValidation(initial) {
	      return initial === 'off' || initial === false;
	    },
	    shimNode: function shimNode(node) {
	      var ret = node;
	      if (hasTextareaCloneBug) {
	        if (node.tagName === 'TEXTAREA') {
	          ret = node.cloneNode(true);
	          ret.value = node.value;
	          var i = ret.childNodes.length;
	          while (i--) {
	            ret.removeChild(ret.childNodes[i]);
	          }
	        }
	      }
	      return ret;
	    },
	    getElementFrom: function getElementFrom(frag) {
	      return frag.single ? frag.node : frag.node.nextSibling;
	    }
	  });
	}

	/**
	 * BaseValidation class
	 */

	var BaseValidation = function () {
	  function BaseValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, BaseValidation);

	    this.field = field;
	    this.touched = false;
	    this.dirty = false;
	    this.modified = false;

	    this._modified = false;
	    this._model = model;
	    this._filters = filters;
	    this._validator = validator;
	    this._vm = vm;
	    this._el = el;
	    this._forScope = scope;
	    this._init = this._getValue(el);
	    this._validators = {};
	    this._detectBlur = detectBlur;
	    this._detectChange = detectChange;
	    this._classes = {};
	  }

	  BaseValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this = this;

	    var scope = this._getScope();
	    var model = this._model;

	    this._initial = initial;

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      this._classIds = classIds.split(',');
	    }

	    if (model) {
	      el.value = this._evalModel(model, this._filters);
	      this._unwatch = scope.$watch(model, function (val, old) {
	        if (val !== old) {
	          if (_this.guardValidate(el, 'input')) {
	            return;
	          }

	          _this.handleValidate(el, { noopable: _this._initial });
	          if (_this._initial) {
	            _this._initial = null;
	          }
	        }
	      }, { deep: true });
	    }
	  };

	  BaseValidation.prototype.unmanageElement = function unmanageElement(el) {
	    this._unwatch && this._unwatch();
	  };

	  BaseValidation.prototype.resetValidation = function resetValidation() {
	    var _this2 = this;

	    var keys = Object.keys(this._validators);
	    each(keys, function (key, index) {
	      _this2._validators[key] = null;
	      delete _this2._validators[key];
	    });
	  };

	  BaseValidation.prototype.resetValidationNoopable = function resetValidationNoopable() {
	    each(this._validators, function (descriptor, key) {
	      if (descriptor.initial && !descriptor._isNoopable) {
	        descriptor._isNoopable = true;
	      }
	    });
	  };

	  BaseValidation.prototype.setValidation = function setValidation(name, arg, msg, initial) {
	    var validator = this._validators[name];
	    if (!validator) {
	      validator = this._validators[name] = {};
	      validator.name = name;
	    }

	    validator.arg = arg;
	    if (msg) {
	      validator.msg = msg;
	    }

	    if (initial) {
	      validator.initial = initial;
	      validator._isNoopable = true;
	    }
	  };

	  BaseValidation.prototype.setValidationClasses = function setValidationClasses(classes) {
	    var _this3 = this;

	    each(classes, function (value, key) {
	      _this3._classes[key] = value;
	    });
	  };

	  BaseValidation.prototype.willUpdateFlags = function willUpdateFlags() {
	    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	    touched && this.willUpdateTouched(this._el, 'blur');
	    this.willUpdateDirty(this._el);
	    this.willUpdateModified(this._el);
	  };

	  BaseValidation.prototype.willUpdateTouched = function willUpdateTouched(el, type) {
	    if (type && type === 'blur') {
	      this.touched = true;
	      this._fireEvent(el, 'touched');
	    }
	  };

	  BaseValidation.prototype.willUpdateDirty = function willUpdateDirty(el) {
	    if (!this.dirty && this._checkModified(el)) {
	      this.dirty = true;
	      this._fireEvent(el, 'dirty');
	    }
	  };

	  BaseValidation.prototype.willUpdateModified = function willUpdateModified(el) {
	    this.modified = this._checkModified(el);
	    if (this._modified !== this.modified) {
	      this._fireEvent(el, 'modified', { modified: this.modified });
	      this._modified = this.modified;
	    }
	  };

	  BaseValidation.prototype.listener = function listener(e) {
	    if (this.guardValidate(e.target, e.type)) {
	      return;
	    }

	    this.handleValidate(e.target, { type: e.type });
	  };

	  BaseValidation.prototype.handleValidate = function handleValidate(el) {
	    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var _ref$type = _ref.type;
	    var type = _ref$type === undefined ? null : _ref$type;
	    var _ref$noopable = _ref.noopable;
	    var noopable = _ref$noopable === undefined ? false : _ref$noopable;

	    this.willUpdateTouched(el, type);
	    this.willUpdateDirty(el);
	    this.willUpdateModified(el);

	    this._validator.validate({ field: this.field, el: el, noopable: noopable });
	  };

	  BaseValidation.prototype.validate = function validate(cb) {
	    var _this4 = this;

	    var noopable = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var el = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var _ = exports$1.Vue.util;

	    var results = {};
	    var errors = [];
	    var valid = true;

	    this._runValidators(function (descriptor, name, done) {
	      var asset = _this4._resolveValidator(name);
	      var validator = null;
	      var msg = null;

	      if (_.isPlainObject(asset)) {
	        if (asset.check && typeof asset.check === 'function') {
	          validator = asset.check;
	        }
	        if (asset.message) {
	          msg = asset.message;
	        }
	      } else if (typeof asset === 'function') {
	        validator = asset;
	      }

	      if (descriptor.msg) {
	        msg = descriptor.msg;
	      }

	      if (noopable) {
	        results[name] = false;
	        return done();
	      }

	      if (descriptor._isNoopable) {
	        results[name] = false;
	        descriptor._isNoopable = null;
	        return done();
	      }

	      if (validator) {
	        var value = _this4._getValue(_this4._el);
	        _this4._invokeValidator(_this4._vm, validator, value, descriptor.arg, function (ret, err) {
	          if (!ret) {
	            valid = false;
	            if (err) {
	              // async error message
	              errors.push({ validator: name, message: err });
	              results[name] = err;
	            } else if (msg) {
	              var error = { validator: name };
	              error.message = typeof msg === 'function' ? msg.call(_this4._vm, _this4.field, descriptor.arg) : msg;
	              errors.push(error);
	              results[name] = error.message;
	            } else {
	              results[name] = !ret;
	            }
	          } else {
	            results[name] = !ret;
	          }

	          done();
	        });
	      } else {
	        done();
	      }
	    }, function () {
	      // finished
	      _this4._fireEvent(_this4._el, valid ? 'valid' : 'invalid');

	      var props = {
	        valid: valid,
	        invalid: !valid,
	        touched: _this4.touched,
	        untouched: !_this4.touched,
	        dirty: _this4.dirty,
	        pristine: !_this4.dirty,
	        modified: _this4.modified
	      };
	      if (!empty(errors)) {
	        props.errors = errors;
	      }
	      _.extend(results, props);

	      _this4.willUpdateClasses(results, el);

	      cb(results);
	    });
	  };

	  BaseValidation.prototype.resetFlags = function resetFlags() {
	    this.touched = false;
	    this.dirty = false;
	    this.modified = false;
	    this._modified = false;
	  };

	  BaseValidation.prototype.reset = function reset() {
	    this.resetValidationNoopable();
	    this.resetFlags();
	    this._init = this._getValue(this._el);
	  };

	  BaseValidation.prototype.willUpdateClasses = function willUpdateClasses(results) {
	    var _this5 = this;

	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    if (this._checkClassIds(el)) {
	      (function () {
	        var classIds = _this5._getClassIds(el);
	        _this5.vm.$nextTick(function () {
	          _this5.vm.$emit(VALIDATE_UPDATE, classIds, _this5, results);
	        });
	      })();
	    } else {
	      this.updateClasses(results);
	    }
	  };

	  BaseValidation.prototype.updateClasses = function updateClasses(results) {
	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    this._updateClasses(el || this._el, results);
	  };

	  BaseValidation.prototype.guardValidate = function guardValidate(el, type) {
	    if (type && type === 'blur' && !this.detectBlur) {
	      return true;
	    }

	    if (type && type === 'input' && !this.detectChange) {
	      return true;
	    }

	    if (type && type === 'change' && !this.detectChange) {
	      return true;
	    }

	    if (type && type === 'click' && !this.detectChange) {
	      return true;
	    }

	    return false;
	  };

	  BaseValidation.prototype._getValue = function _getValue(el) {
	    return el.value;
	  };

	  BaseValidation.prototype._getScope = function _getScope() {
	    return this._forScope || this._vm;
	  };

	  BaseValidation.prototype._getClassIds = function _getClassIds(el) {
	    return this._classIds;
	  };

	  BaseValidation.prototype._checkModified = function _checkModified(target) {
	    return this._init !== this._getValue(target);
	  };

	  BaseValidation.prototype._checkClassIds = function _checkClassIds(el) {
	    return this._getClassIds(el);
	  };

	  BaseValidation.prototype._fireEvent = function _fireEvent(el, type, args) {
	    trigger(el, type, args);
	  };

	  BaseValidation.prototype._evalModel = function _evalModel(model, filters) {
	    var scope = this._getScope();

	    var val = null;
	    if (filters) {
	      val = scope.$get(model);
	      return filters ? this._applyFilters(val, null, filters) : val;
	    } else {
	      val = scope.$get(model);
	      return val === undefined || val === null ? '' : val;
	    }
	  };

	  BaseValidation.prototype._updateClasses = function _updateClasses(el, results) {
	    this._toggleValid(el, results.valid);
	    this._toggleTouched(el, results.touched);
	    this._togglePristine(el, results.pristine);
	    this._toggleModfied(el, results.modified);
	  };

	  BaseValidation.prototype._toggleValid = function _toggleValid(el, valid) {
	    var _util$Vue$util = exports$1.Vue.util;
	    var addClass = _util$Vue$util.addClass;
	    var removeClass = _util$Vue$util.removeClass;

	    var validClass = this._classes.valid || 'valid';
	    var invalidClass = this._classes.invalid || 'invalid';

	    if (valid) {
	      toggleClasses(el, validClass, addClass);
	      toggleClasses(el, invalidClass, removeClass);
	    } else {
	      toggleClasses(el, validClass, removeClass);
	      toggleClasses(el, invalidClass, addClass);
	    }
	  };

	  BaseValidation.prototype._toggleTouched = function _toggleTouched(el, touched) {
	    var _util$Vue$util2 = exports$1.Vue.util;
	    var addClass = _util$Vue$util2.addClass;
	    var removeClass = _util$Vue$util2.removeClass;

	    var touchedClass = this._classes.touched || 'touched';
	    var untouchedClass = this._classes.untouched || 'untouched';

	    if (touched) {
	      toggleClasses(el, touchedClass, addClass);
	      toggleClasses(el, untouchedClass, removeClass);
	    } else {
	      toggleClasses(el, touchedClass, removeClass);
	      toggleClasses(el, untouchedClass, addClass);
	    }
	  };

	  BaseValidation.prototype._togglePristine = function _togglePristine(el, pristine) {
	    var _util$Vue$util3 = exports$1.Vue.util;
	    var addClass = _util$Vue$util3.addClass;
	    var removeClass = _util$Vue$util3.removeClass;

	    var pristineClass = this._classes.pristine || 'pristine';
	    var dirtyClass = this._classes.dirty || 'dirty';

	    if (pristine) {
	      toggleClasses(el, pristineClass, addClass);
	      toggleClasses(el, dirtyClass, removeClass);
	    } else {
	      toggleClasses(el, pristineClass, removeClass);
	      toggleClasses(el, dirtyClass, addClass);
	    }
	  };

	  BaseValidation.prototype._toggleModfied = function _toggleModfied(el, modified) {
	    var _util$Vue$util4 = exports$1.Vue.util;
	    var addClass = _util$Vue$util4.addClass;
	    var removeClass = _util$Vue$util4.removeClass;

	    var modifiedClass = this._classes.modified || 'modified';

	    if (modified) {
	      toggleClasses(el, modifiedClass, addClass);
	    } else {
	      toggleClasses(el, modifiedClass, removeClass);
	    }
	  };

	  BaseValidation.prototype._applyFilters = function _applyFilters(value, oldValue, filters, write) {
	    var resolveAsset = exports$1.Vue.util.resolveAsset;
	    var scope = this._getScope();

	    var filter = void 0,
	        fn = void 0,
	        args = void 0,
	        arg = void 0,
	        offset = void 0,
	        i = void 0,
	        l = void 0,
	        j = void 0,
	        k = void 0;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this._vm.$options, 'filters', filter.name);
	      if (!fn) {
	        continue;
	      }

	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') {
	        continue;
	      }

	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? scope.$get(arg.value) : arg.value;
	        }
	      }

	      value = fn.apply(this._vm, args);
	    }

	    return value;
	  };

	  BaseValidation.prototype._runValidators = function _runValidators(fn, cb) {
	    var validators = this._validators;
	    var length = Object.keys(validators).length;

	    var count = 0;
	    each(validators, function (descriptor, name) {
	      fn(descriptor, name, function () {
	        ++count;
	        count >= length && cb();
	      });
	    });
	  };

	  BaseValidation.prototype._invokeValidator = function _invokeValidator(vm, validator, val, arg, cb) {
	    var future = validator.call(this, val, arg);
	    if (typeof future === 'function') {
	      // function 
	      future(function () {
	        // resolve
	        cb(true);
	      }, function (msg) {
	        // reject
	        cb(false, msg);
	      });
	    } else if (isPromise(future)) {
	      // promise
	      future.then(function () {
	        // resolve
	        cb(true);
	      }, function (msg) {
	        // reject
	        cb(false, msg);
	      }).catch(function (err) {
	        cb(false, err.message);
	      });
	    } else {
	      // sync
	      cb(future);
	    }
	  };

	  BaseValidation.prototype._resolveValidator = function _resolveValidator(name) {
	    var resolveAsset = exports$1.Vue.util.resolveAsset;
	    return resolveAsset(this._vm.$options, 'validators', name);
	  };

	  babelHelpers.createClass(BaseValidation, [{
	    key: 'vm',
	    get: function get() {
	      return this._vm;
	    }
	  }, {
	    key: 'el',
	    get: function get() {
	      return this._el;
	    }
	  }, {
	    key: 'detectChange',
	    get: function get() {
	      return this._detectChange;
	    },
	    set: function set(val) {
	      this._detectChange = val;
	    }
	  }, {
	    key: 'detectBlur',
	    get: function get() {
	      return this._detectBlur;
	    },
	    set: function set(val) {
	      this._detectBlur = val;
	    }
	  }]);
	  return BaseValidation;
	}();

	/**
	 * CheckboxValidation class
	 */

	var CheckboxValidation = function (_BaseValidation) {
	  babelHelpers.inherits(CheckboxValidation, _BaseValidation);

	  function CheckboxValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, CheckboxValidation);

	    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

	    _this._inits = [];
	    return _this;
	  }

	  CheckboxValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this2 = this;

	    var scope = this._getScope();
	    var item = this._addItem(el, initial);

	    var model = item.model = this._model;
	    if (model) {
	      var value = this._evalModel(model, this._filters);
	      if (Array.isArray(value)) {
	        this._setChecked(value, item.el);
	        item.unwatch = scope.$watch(model, function (val, old) {
	          if (val !== old) {
	            if (_this2.guardValidate(item.el, 'change')) {
	              return;
	            }

	            _this2.handleValidate(item.el, { noopable: item.initial });
	            if (item.initial) {
	              item.initial = null;
	            }
	          }
	        });
	      } else {
	        el.checked = value || false;
	        this._init = el.checked;
	        item.init = el.checked;
	        item.value = el.value;
	        item.unwatch = scope.$watch(model, function (val, old) {
	          if (val !== old) {
	            if (_this2.guardValidate(el, 'change')) {
	              return;
	            }

	            _this2.handleValidate(el, { noopable: item.initial });
	            if (item.initial) {
	              item.initial = null;
	            }
	          }
	        });
	      }
	    } else {
	      var options = { field: this.field, noopable: initial };
	      if (this._checkClassIds(el)) {
	        options.el = el;
	      }
	      this._validator.validate(options);
	    }
	  };

	  CheckboxValidation.prototype.unmanageElement = function unmanageElement(el) {
	    var found = -1;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        found = index;
	        if (item.unwatch && item.model) {
	          item.unwatch();
	          item.unwatch = null;
	          item.model = null;
	        }
	      }
	    });
	    if (found === -1) {
	      return;
	    }

	    this._inits.splice(found, 1);
	    this._validator.validate({ field: this.field });
	  };

	  CheckboxValidation.prototype.willUpdateFlags = function willUpdateFlags() {
	    var _this3 = this;

	    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	    each(this._inits, function (item, index) {
	      touched && _this3.willUpdateTouched(item.el, 'blur');
	      _this3.willUpdateDirty(item.el);
	      _this3.willUpdateModified(item.el);
	    });
	  };

	  CheckboxValidation.prototype.reset = function reset() {
	    this.resetValidationNoopable();
	    this.resetFlags();
	    each(this._inits, function (item, index) {
	      item.init = item.el.checked;
	      item.value = item.el.value;
	    });
	  };

	  CheckboxValidation.prototype.updateClasses = function updateClasses(results) {
	    var _this4 = this;

	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    if (el) {
	      // for another element
	      this._updateClasses(el, results);
	    } else {
	      each(this._inits, function (item, index) {
	        _this4._updateClasses(item.el, results);
	      });
	    }
	  };

	  CheckboxValidation.prototype._addItem = function _addItem(el, initial) {
	    var item = {
	      el: el,
	      init: el.checked,
	      value: el.value,
	      initial: initial
	    };

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      item.classIds = classIds.split(',');
	    }

	    this._inits.push(item);
	    return item;
	  };

	  CheckboxValidation.prototype._setChecked = function _setChecked(values, el) {
	    for (var i = 0, l = values.length; i < l; i++) {
	      var value = values[i];
	      if (!el.disabled && el.value === value && !el.checked) {
	        el.checked = true;
	      }
	    }
	  };

	  CheckboxValidation.prototype._getValue = function _getValue(el) {
	    var _this5 = this;

	    if (!this._inits || this._inits.length === 0) {
	      return el.checked;
	    } else {
	      var _ret = function () {
	        var vals = [];
	        each(_this5._inits, function (item, index) {
	          item.el.checked && vals.push(item.el.value);
	        });
	        return {
	          v: vals
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
	    }
	  };

	  CheckboxValidation.prototype._getClassIds = function _getClassIds(el) {
	    var classIds = void 0;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        classIds = item.classIds;
	      }
	    });
	    return classIds;
	  };

	  CheckboxValidation.prototype._checkModified = function _checkModified(target) {
	    var _this6 = this;

	    if (this._inits.length === 0) {
	      return this._init !== target.checked;
	    } else {
	      var _ret2 = function () {
	        var modified = false;
	        each(_this6._inits, function (item, index) {
	          if (!modified) {
	            modified = item.init !== item.el.checked;
	          }
	        });
	        return {
	          v: modified
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
	    }
	  };

	  return CheckboxValidation;
	}(BaseValidation);

	/**
	 * RadioValidation class
	 */

	var RadioValidation = function (_BaseValidation) {
	  babelHelpers.inherits(RadioValidation, _BaseValidation);

	  function RadioValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, RadioValidation);

	    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

	    _this._inits = [];
	    return _this;
	  }

	  RadioValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this2 = this;

	    var scope = this._getScope();
	    var item = this._addItem(el, initial);

	    var model = item.model = this._model;
	    if (model) {
	      var value = this._evalModel(model, this._filters);
	      this._setChecked(value, el, item);
	      item.unwatch = scope.$watch(model, function (val, old) {
	        if (val !== old) {
	          if (_this2.guardValidate(item.el, 'change')) {
	            return;
	          }

	          _this2.handleValidate(el, { noopable: item.initial });
	          if (item.initial) {
	            item.initial = null;
	          }
	        }
	      });
	    } else {
	      var options = { field: this.field, noopable: initial };
	      if (this._checkClassIds(el)) {
	        options.el = el;
	      }
	      this._validator.validate(options);
	    }
	  };

	  RadioValidation.prototype.unmanageElement = function unmanageElement(el) {
	    var found = -1;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        found = index;
	      }
	    });
	    if (found === -1) {
	      return;
	    }

	    this._inits.splice(found, 1);
	    this._validator.validate({ field: this.field });
	  };

	  RadioValidation.prototype.willUpdateFlags = function willUpdateFlags() {
	    var _this3 = this;

	    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	    each(this._inits, function (item, index) {
	      touched && _this3.willUpdateTouched(item.el, 'blur');
	      _this3.willUpdateDirty(item.el);
	      _this3.willUpdateModified(item.el);
	    });
	  };

	  RadioValidation.prototype.reset = function reset() {
	    this.resetValidationNoopable();
	    this.resetFlags();
	    each(this._inits, function (item, index) {
	      item.init = item.el.checked;
	      item.value = item.el.value;
	    });
	  };

	  RadioValidation.prototype.updateClasses = function updateClasses(results) {
	    var _this4 = this;

	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    if (el) {
	      // for another element
	      this._updateClasses(el, results);
	    } else {
	      each(this._inits, function (item, index) {
	        _this4._updateClasses(item.el, results);
	      });
	    }
	  };

	  RadioValidation.prototype._addItem = function _addItem(el, initial) {
	    var item = {
	      el: el,
	      init: el.checked,
	      value: el.value,
	      initial: initial
	    };

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      item.classIds = classIds.split(',');
	    }

	    this._inits.push(item);
	    return item;
	  };

	  RadioValidation.prototype._setChecked = function _setChecked(value, el, item) {
	    if (el.value === value) {
	      el.checked = true;
	      this._init = el.checked;
	      item.init = el.checked;
	      item.value = value;
	    }
	  };

	  RadioValidation.prototype._getValue = function _getValue(el) {
	    var _this5 = this;

	    if (!this._inits || this._inits.length === 0) {
	      return el.checked;
	    } else {
	      var _ret = function () {
	        var vals = [];
	        each(_this5._inits, function (item, index) {
	          item.el.checked && vals.push(item.el.value);
	        });
	        return {
	          v: vals
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
	    }
	  };

	  RadioValidation.prototype._getClassIds = function _getClassIds(el) {
	    var classIds = void 0;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        classIds = item.classIds;
	      }
	    });
	    return classIds;
	  };

	  RadioValidation.prototype._checkModified = function _checkModified(target) {
	    var _this6 = this;

	    if (this._inits.length === 0) {
	      return this._init !== target.checked;
	    } else {
	      var _ret2 = function () {
	        var modified = false;
	        each(_this6._inits, function (item, index) {
	          if (!modified) {
	            modified = item.init !== item.el.checked;
	          }
	        });
	        return {
	          v: modified
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
	    }
	  };

	  return RadioValidation;
	}(BaseValidation);

	/**
	 * SelectValidation class
	 */

	var SelectValidation = function (_BaseValidation) {
	  babelHelpers.inherits(SelectValidation, _BaseValidation);

	  function SelectValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, SelectValidation);

	    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

	    _this._multiple = _this._el.hasAttribute('multiple');
	    return _this;
	  }

	  SelectValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this2 = this;

	    var scope = this._getScope();
	    var model = this._model;

	    this._initial = initial;

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      this._classIds = classIds.split(',');
	    }

	    if (model) {
	      var value = this._evalModel(model, this._filters);
	      var values = !Array.isArray(value) ? [value] : value;
	      this._setOption(values, el);
	      this._unwatch = scope.$watch(model, function (val, old) {
	        var values1 = !Array.isArray(val) ? [val] : val;
	        var values2 = !Array.isArray(old) ? [old] : old;
	        if (values1.slice().sort().toString() !== values2.slice().sort().toString()) {
	          if (_this2.guardValidate(el, 'change')) {
	            return;
	          }

	          _this2.handleValidate(el, { noopable: _this2._initial });
	          if (_this2._initial) {
	            _this2._initial = null;
	          }
	        }
	      });
	    }
	  };

	  SelectValidation.prototype.unmanageElement = function unmanageElement(el) {
	    this._unwatch && this._unwatch();
	  };

	  SelectValidation.prototype._getValue = function _getValue(el) {
	    var ret = [];

	    for (var i = 0, l = el.options.length; i < l; i++) {
	      var option = el.options[i];
	      if (!option.disabled && option.selected) {
	        ret.push(option.value);
	      }
	    }

	    return ret;
	  };

	  SelectValidation.prototype._setOption = function _setOption(values, el) {
	    for (var i = 0, l = values.length; i < l; i++) {
	      var value = values[i];
	      for (var j = 0, m = el.options.length; j < m; j++) {
	        var option = el.options[j];
	        if (!option.disabled && option.value === value && (!option.hasAttribute('selected') || !option.selected)) {
	          option.selected = true;
	        }
	      }
	    }
	  };

	  SelectValidation.prototype._checkModified = function _checkModified(target) {
	    var values = this._getValue(target).slice().sort();
	    if (this._init.length !== values.length) {
	      return true;
	    } else {
	      var inits = this._init.slice().sort();
	      return inits.toString() !== values.toString();
	    }
	  };

	  return SelectValidation;
	}(BaseValidation);

	/**
	 * Validator class
	 */

	var Validator$1 = function () {
	  function Validator(name, dir, groups, classes) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Validator);

	    this.name = name;

	    this._scope = {};
	    this._dir = dir;
	    this._validations = {};
	    this._checkboxValidations = {};
	    this._radioValidations = {};
	    this._groups = groups;
	    this._groupValidations = {};
	    this._events = {};
	    this._modified = false;
	    this._classes = classes;

	    each(groups, function (group) {
	      _this._groupValidations[group] = [];
	    });
	  }

	  Validator.prototype.enableReactive = function enableReactive() {
	    var vm = this._dir.vm;

	    // define the validation scope
	    exports$1.Vue.util.defineReactive(vm, this.name, this._scope);
	    vm._validatorMaps[this.name] = this;

	    // define the validation resetting meta method to vue instance
	    this._defineResetValidation();

	    // define the validate manually meta method to vue instance
	    this._defineValidate();

	    // define manually the validation errors
	    this._defineSetValidationErrors();
	  };

	  Validator.prototype.disableReactive = function disableReactive() {
	    var vm = this._dir.vm;
	    vm.$setValidationErrors = null;
	    delete vm['$setValidationErrors'];
	    vm.$validate = null;
	    delete vm['$validate'];
	    vm.$resetValidation = null;
	    delete vm['$resetValidation'];
	    vm._validatorMaps[this.name] = null;
	    delete vm._validatorMaps[this.name];
	    vm[this.name] = null;
	    delete vm[this.name];
	  };

	  Validator.prototype.registerEvents = function registerEvents() {
	    var isSimplePath = exports$1.Vue.parsers.expression.isSimplePath;

	    var attrs = this._dir.el.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var event = attrs[i].name;
	      if (REGEX_EVENT.test(event)) {
	        var value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        event = event.replace(REGEX_EVENT, '');
	        this._events[this._getEventName(event)] = this._dir.vm.$eval(value, true);
	      }
	    }
	  };

	  Validator.prototype.unregisterEvents = function unregisterEvents() {
	    var _this2 = this;

	    each(this._events, function (handler, event) {
	      _this2._events[event] = null;
	      delete _this2._events[event];
	    });
	  };

	  Validator.prototype.manageValidation = function manageValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validation = null;

	    if (el.tagName === 'SELECT') {
	      validation = this._manageSelectValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    } else if (el.type === 'checkbox') {
	      validation = this._manageCheckboxValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    } else if (el.type === 'radio') {
	      validation = this._manageRadioValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    } else {
	      validation = this._manageBaseValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    }

	    validation.setValidationClasses(this._classes);

	    return validation;
	  };

	  Validator.prototype.unmanageValidation = function unmanageValidation(field, el) {
	    if (el.type === 'checkbox') {
	      this._unmanageCheckboxValidation(field, el);
	    } else if (el.type === 'radio') {
	      this._unmanageRadioValidation(field, el);
	    } else if (el.tagName === 'SELECT') {
	      this._unmanageSelectValidation(field, el);
	    } else {
	      this._unmanageBaseValidation(field, el);
	    }
	  };

	  Validator.prototype.addGroupValidation = function addGroupValidation(group, field) {
	    var indexOf = exports$1.Vue.util.indexOf;

	    var validation = this._getValidationFrom(field);
	    var validations = this._groupValidations[group];

	    validations && !~indexOf(validations, validation) && validations.push(validation);
	  };

	  Validator.prototype.removeGroupValidation = function removeGroupValidation(group, field) {
	    var validation = this._getValidationFrom(field);
	    var validations = this._groupValidations[group];

	    validations && pull(validations, validation);
	  };

	  Validator.prototype.validate = function validate() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var _ref$el = _ref.el;
	    var el = _ref$el === undefined ? null : _ref$el;
	    var _ref$field = _ref.field;
	    var field = _ref$field === undefined ? null : _ref$field;
	    var _ref$touched = _ref.touched;
	    var touched = _ref$touched === undefined ? false : _ref$touched;
	    var _ref$noopable = _ref.noopable;
	    var noopable = _ref$noopable === undefined ? false : _ref$noopable;
	    var _ref$cb = _ref.cb;
	    var cb = _ref$cb === undefined ? null : _ref$cb;

	    if (!field) {
	      // all
	      each(this.validations, function (validation, key) {
	        validation.willUpdateFlags(touched);
	      });
	      this._validates(cb);
	    } else {
	      // each field
	      this._validate(field, touched, noopable, el, cb);
	    }
	  };

	  Validator.prototype.setupScope = function setupScope() {
	    var _this3 = this;

	    this._defineProperties(function () {
	      return _this3.validations;
	    }, function () {
	      return _this3._scope;
	    });

	    each(this._groups, function (name) {
	      var validations = _this3._groupValidations[name];
	      var group = {};
	      exports$1.Vue.set(_this3._scope, name, group);
	      _this3._defineProperties(function () {
	        return validations;
	      }, function () {
	        return group;
	      });
	    });
	  };

	  Validator.prototype.waitFor = function waitFor(cb) {
	    var method = '$activateValidator';
	    var vm = this._dir.vm;

	    vm[method] = function () {
	      cb();
	      vm[method] = null;
	    };
	  };

	  Validator.prototype._defineResetValidation = function _defineResetValidation() {
	    var _this4 = this;

	    this._dir.vm.$resetValidation = function (cb) {
	      _this4._resetValidation(cb);
	    };
	  };

	  Validator.prototype._defineValidate = function _defineValidate() {
	    var _this5 = this;

	    this._dir.vm.$validate = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var field = null;
	      var touched = false;
	      var cb = null;

	      each(args, function (arg, index) {
	        if (typeof arg === 'string') {
	          field = arg;
	        } else if (typeof arg === 'boolean') {
	          touched = arg;
	        } else if (typeof arg === 'function') {
	          cb = arg;
	        }
	      });

	      _this5.validate({ field: field, touched: touched, cb: cb });
	    };
	  };

	  Validator.prototype._defineSetValidationErrors = function _defineSetValidationErrors() {
	    var _this6 = this;

	    this._dir.vm.$setValidationErrors = function (errors) {
	      _this6._setValidationErrors(errors);
	    };
	  };

	  Validator.prototype._validate = function _validate(field) {
	    var touched = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var noopable = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	    var _this7 = this;

	    var el = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	    var cb = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

	    var scope = this._scope;

	    var validation = this._getValidationFrom(field);
	    if (validation) {
	      validation.willUpdateFlags(touched);
	      validation.validate(function (results) {
	        exports$1.Vue.set(scope, field, results);
	        _this7._fireEvents();
	        cb && cb();
	      }, noopable, el);
	    }
	  };

	  Validator.prototype._validates = function _validates(cb) {
	    var _this8 = this;

	    var scope = this._scope;

	    this._runValidates(function (validation, key, done) {
	      validation.validate(function (results) {
	        exports$1.Vue.set(scope, key, results);
	        done();
	      });
	    }, function () {
	      // finished
	      _this8._fireEvents();
	      cb && cb();
	    });
	  };

	  Validator.prototype._getValidationFrom = function _getValidationFrom(field) {
	    return this._validations[field] || this._checkboxValidations[field] && this._checkboxValidations[field].validation || this._radioValidations[field] && this._radioValidations[field].validation;
	  };

	  Validator.prototype._resetValidation = function _resetValidation(cb) {
	    each(this.validations, function (validation, key) {
	      validation.reset();
	    });
	    this._validates(cb);
	  };

	  Validator.prototype._setValidationErrors = function _setValidationErrors(errors) {
	    var _this9 = this;

	    var extend = exports$1.Vue.util.extend;

	    // make tempolaly errors

	    var temp = {};
	    each(errors, function (error, index) {
	      if (!temp[error.field]) {
	        temp[error.field] = [];
	      }
	      temp[error.field].push(error);
	    });

	    // set errors
	    each(temp, function (values, field) {
	      var results = _this9._scope[field];
	      var newResults = {};

	      each(values, function (error) {
	        if (error.validator) {
	          results[error.validator] = error.message;
	        }
	      });

	      results.valid = false;
	      results.invalid = true;
	      results.errors = values;
	      extend(newResults, results);

	      var validation = _this9._getValidationFrom(field);
	      validation.willUpdateClasses(newResults, validation.el);

	      exports$1.Vue.set(_this9._scope, field, newResults);
	    });
	  };

	  Validator.prototype._manageBaseValidation = function _manageBaseValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validation = this._validations[field] = new BaseValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	    validation.manageElement(el, initial);
	    return validation;
	  };

	  Validator.prototype._unmanageBaseValidation = function _unmanageBaseValidation(field, el) {
	    var validation = this._validations[field];
	    if (validation) {
	      validation.unmanageElement(el);
	      exports$1.Vue.delete(this._scope, field);
	      this._validations[field] = null;
	      delete this._validations[field];
	    }
	  };

	  Validator.prototype._manageCheckboxValidation = function _manageCheckboxValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validationSet = this._checkboxValidations[field];
	    if (!validationSet) {
	      var validation = new CheckboxValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	      validationSet = { validation: validation, elements: 0 };
	      this._checkboxValidations[field] = validationSet;
	    }

	    validationSet.elements++;
	    validationSet.validation.manageElement(el, initial);
	    return validationSet.validation;
	  };

	  Validator.prototype._unmanageCheckboxValidation = function _unmanageCheckboxValidation(field, el) {
	    var validationSet = this._checkboxValidations[field];
	    if (validationSet) {
	      validationSet.elements--;
	      validationSet.validation.unmanageElement(el);
	      if (validationSet.elements === 0) {
	        exports$1.Vue.delete(this._scope, field);
	        this._checkboxValidations[field] = null;
	        delete this._checkboxValidations[field];
	      }
	    }
	  };

	  Validator.prototype._manageRadioValidation = function _manageRadioValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validationSet = this._radioValidations[field];
	    if (!validationSet) {
	      var validation = new RadioValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	      validationSet = { validation: validation, elements: 0 };
	      this._radioValidations[field] = validationSet;
	    }

	    validationSet.elements++;
	    validationSet.validation.manageElement(el, initial);
	    return validationSet.validation;
	  };

	  Validator.prototype._unmanageRadioValidation = function _unmanageRadioValidation(field, el) {
	    var validationSet = this._radioValidations[field];
	    if (validationSet) {
	      validationSet.elements--;
	      validationSet.validation.unmanageElement(el);
	      if (validationSet.elements === 0) {
	        exports$1.Vue.delete(this._scope, field);
	        this._radioValidations[field] = null;
	        delete this._radioValidations[field];
	      }
	    }
	  };

	  Validator.prototype._manageSelectValidation = function _manageSelectValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validation = this._validations[field] = new SelectValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	    validation.manageElement(el, initial);
	    return validation;
	  };

	  Validator.prototype._unmanageSelectValidation = function _unmanageSelectValidation(field, el) {
	    var validation = this._validations[field];
	    if (validation) {
	      validation.unmanageElement(el);
	      exports$1.Vue.delete(this._scope, field);
	      this._validations[field] = null;
	      delete this._validations[field];
	    }
	  };

	  Validator.prototype._fireEvent = function _fireEvent(type) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }

	    var handler = this._events[this._getEventName(type)];
	    handler && this._dir.vm.$nextTick(function () {
	      handler.apply(null, args);
	    });
	  };

	  Validator.prototype._fireEvents = function _fireEvents() {
	    var scope = this._scope;

	    scope.touched && this._fireEvent('touched');
	    scope.dirty && this._fireEvent('dirty');

	    if (this._modified !== scope.modified) {
	      this._fireEvent('modified', scope.modified);
	      this._modified = scope.modified;
	    }

	    var valid = scope.valid;
	    this._fireEvent(valid ? 'valid' : 'invalid');
	  };

	  Validator.prototype._getEventName = function _getEventName(type) {
	    return this.name + ':' + type;
	  };

	  Validator.prototype._defineProperties = function _defineProperties(validationsGetter, targetGetter) {
	    var _this10 = this;

	    var bind = exports$1.Vue.util.bind;

	    each({
	      valid: { fn: this._defineValid, arg: validationsGetter },
	      invalid: { fn: this._defineInvalid, arg: targetGetter },
	      touched: { fn: this._defineTouched, arg: validationsGetter },
	      untouched: { fn: this._defineUntouched, arg: targetGetter },
	      modified: { fn: this._defineModified, arg: validationsGetter },
	      dirty: { fn: this._defineDirty, arg: validationsGetter },
	      pristine: { fn: this._definePristine, arg: targetGetter },
	      errors: { fn: this._defineErrors, arg: validationsGetter }
	    }, function (descriptor, name) {
	      Object.defineProperty(targetGetter(), name, {
	        enumerable: true,
	        configurable: true,
	        get: function get() {
	          return bind(descriptor.fn, _this10)(descriptor.arg);
	        }
	      });
	    });
	  };

	  Validator.prototype._runValidates = function _runValidates(fn, cb) {
	    var length = Object.keys(this.validations).length;

	    var count = 0;
	    each(this.validations, function (validation, key) {
	      fn(validation, key, function () {
	        ++count;
	        count >= length && cb();
	      });
	    });
	  };

	  Validator.prototype._walkValidations = function _walkValidations(validations, property, condition) {
	    var _this11 = this;

	    var hasOwn = exports$1.Vue.util.hasOwn;
	    var ret = condition;

	    each(validations, function (validation, key) {
	      if (ret === !condition) {
	        return;
	      }
	      if (hasOwn(_this11._scope, validation.field)) {
	        var target = _this11._scope[validation.field];
	        if (target && target[property] === !condition) {
	          ret = !condition;
	        }
	      }
	    });

	    return ret;
	  };

	  Validator.prototype._defineValid = function _defineValid(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'valid', true);
	  };

	  Validator.prototype._defineInvalid = function _defineInvalid(scopeGetter) {
	    return !scopeGetter().valid;
	  };

	  Validator.prototype._defineTouched = function _defineTouched(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'touched', false);
	  };

	  Validator.prototype._defineUntouched = function _defineUntouched(scopeGetter) {
	    return !scopeGetter().touched;
	  };

	  Validator.prototype._defineModified = function _defineModified(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'modified', false);
	  };

	  Validator.prototype._defineDirty = function _defineDirty(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'dirty', false);
	  };

	  Validator.prototype._definePristine = function _definePristine(scopeGetter) {
	    return !scopeGetter().dirty;
	  };

	  Validator.prototype._defineErrors = function _defineErrors(validationsGetter) {
	    var _this12 = this;

	    var hasOwn = exports$1.Vue.util.hasOwn;
	    var isPlainObject = exports$1.Vue.util.isPlainObject;
	    var errors = [];

	    each(validationsGetter(), function (validation, key) {
	      if (hasOwn(_this12._scope, validation.field)) {
	        var target = _this12._scope[validation.field];
	        if (target && !empty(target.errors)) {
	          each(target.errors, function (err, index) {
	            var error = { field: validation.field };
	            if (isPlainObject(err)) {
	              if (err.validator) {
	                error.validator = err.validator;
	              }
	              error.message = err.message;
	            } else if (typeof err === 'string') {
	              error.message = err;
	            }
	            errors.push(error);
	          });
	        }
	      }
	    });

	    return empty(errors) ? undefined : errors.sort(function (a, b) {
	      return a.field < b.field ? -1 : 1;
	    });
	  };

	  babelHelpers.createClass(Validator, [{
	    key: 'validations',
	    get: function get() {
	      var extend = exports$1.Vue.util.extend;

	      var ret = {};
	      extend(ret, this._validations);

	      each(this._checkboxValidations, function (dataset, key) {
	        ret[key] = dataset.validation;
	      });

	      each(this._radioValidations, function (dataset, key) {
	        ret[key] = dataset.validation;
	      });

	      return ret;
	    }
	  }]);
	  return Validator;
	}();

	function Validator (Vue) {
	  var FragmentFactory = Vue.FragmentFactory;
	  var vIf = Vue.directive('if');
	  var _Vue$util = Vue.util;
	  var isArray = _Vue$util.isArray;
	  var isPlainObject = _Vue$util.isPlainObject;
	  var createAnchor = _Vue$util.createAnchor;
	  var replace = _Vue$util.replace;
	  var extend = _Vue$util.extend;
	  var camelize = _Vue$util.camelize;

	  /**
	   * `validator` element directive
	   */

	  Vue.elementDirective('validator', {
	    params: ['name', 'groups', 'lazy', 'classes'],

	    bind: function bind() {
	      var params = this.params;

	      if (process.env.NODE_ENV !== 'production' && !params.name) {
	        warn('validator element requires a \'name\' attribute: ' + '(e.g. <validator name="validator1">...</validator>)');
	        return;
	      }

	      this.validatorName = '$' + camelize(params.name);
	      if (!this.vm._validatorMaps) {
	        throw new Error('Invalid validator management error');
	      }

	      var classes = {};
	      if (isPlainObject(this.params.classes)) {
	        classes = this.params.classes;
	      }

	      this.setupValidator(classes);
	      this.setupFragment(params.lazy);
	    },
	    unbind: function unbind() {
	      this.teardownFragment();
	      this.teardownValidator();
	    },
	    getGroups: function getGroups() {
	      var params = this.params;
	      var groups = [];

	      if (params.groups) {
	        if (isArray(params.groups)) {
	          groups = params.groups;
	        } else if (!isPlainObject(params.groups) && typeof params.groups === 'string') {
	          groups.push(params.groups);
	        }
	      }

	      return groups;
	    },
	    setupValidator: function setupValidator(classes) {
	      var validator = this.validator = new Validator$1(this.validatorName, this, this.getGroups(), classes);
	      validator.enableReactive();
	      validator.setupScope();
	      validator.registerEvents();
	    },
	    teardownValidator: function teardownValidator() {
	      this.validator.unregisterEvents();
	      this.validator.disableReactive();

	      if (this.validatorName) {
	        this.validatorName = null;
	        this.validator = null;
	      }
	    },
	    setupFragment: function setupFragment(lazy) {
	      var _this = this;

	      var vm = this.vm;

	      this.validator.waitFor(function () {
	        _this.anchor = createAnchor('vue-validator');
	        replace(_this.el, _this.anchor);
	        extend(vm.$options, { _validator: _this.validatorName });
	        _this.factory = new FragmentFactory(vm, _this.el.innerHTML);
	        vIf.insert.call(_this);
	      });

	      !lazy && vm.$activateValidator();
	    },
	    teardownFragment: function teardownFragment() {
	      vIf.unbind.call(this);
	    }
	  });
	}

	function ValidatorError (Vue) {
	  /**
	   * ValidatorError component
	   */

	  var error = {
	    name: 'validator-error',

	    props: {
	      field: {
	        type: String,
	        required: true
	      },
	      validator: {
	        type: String
	      },
	      message: {
	        type: String,
	        required: true
	      },
	      partial: {
	        type: String,
	        default: 'validator-error-default'
	      }
	    },

	    template: '<div><partial :name="partial"></partial></div>',

	    partials: {}
	  };

	  // only use ValidatorError component
	  error.partials['validator-error-default'] = '<p>{{field}}: {{message}}</p>';

	  return error;
	}

	function Errors (Vue) {
	  var _ = Vue.util;
	  var error = ValidatorError(Vue); // import ValidatorError component

	  /**
	   * ValidatorErrors component
	   */

	  var errors = {
	    name: 'validator-errors',

	    props: {
	      validation: {
	        type: Object,
	        required: true
	      },
	      group: {
	        type: String,
	        default: null
	      },
	      field: {
	        type: String,
	        default: null
	      },
	      component: {
	        type: String,
	        default: 'validator-error'
	      }
	    },

	    computed: {
	      errors: function errors() {
	        var _this = this;

	        if (this.group !== null) {
	          return this.validation[this.group].errors;
	        } else if (this.field !== null) {
	          var target = this.validation[this.field];
	          if (!target.errors) {
	            return;
	          }

	          return target.errors.map(function (error) {
	            var err = { field: _this.field };
	            if (_.isPlainObject(error)) {
	              if (error.validator) {
	                err.validator = error.validator;
	              }
	              err.message = error.message;
	            } else if (typeof error === 'string') {
	              err.message = error;
	            }
	            return err;
	          });
	        } else {
	          return this.validation.errors;
	        }
	      }
	    },

	    template: '<template v-for="error in errors">' + '<component :is="component" :partial="partial" :field="error.field" :validator="error.validator" :message="error.message">' + '</component>' + '</template>',

	    components: {}
	  };

	  // define 'partial' prop
	  errors.props['partial'] = error.props['partial'];

	  // only use ValidatorErrors component
	  errors.components[error.name] = error;

	  // install ValidatorErrors component
	  Vue.component(errors.name, errors);

	  return errors;
	}

	/**
	 * plugin
	 *
	 * @param {Function} Vue
	 * @param {Object} options
	 */

	function plugin(Vue) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (plugin.installed) {
	    warn('already installed.');
	    return;
	  }

	  exports$1.Vue = Vue;
	  Asset(Vue);
	  Errors(Vue);

	  Override(Vue);
	  Validator(Vue);
	  ValidateClass(Vue);
	  Validate(Vue);
	}

	plugin.version = '2.1.7';

	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use(plugin);
	}

	module.exports = plugin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 18 */
/***/ function(module, exports) {

	/*!
	 * vue-resource v1.0.3
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */

	'use strict';

	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */

	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;

	function Promise$1(executor) {

	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];

	    var promise = this;

	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}

	Promise$1.reject = function (r) {
	    return new Promise$1(function (resolve, reject) {
	        reject(r);
	    });
	};

	Promise$1.resolve = function (x) {
	    return new Promise$1(function (resolve, reject) {
	        resolve(x);
	    });
	};

	Promise$1.all = function all(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        var count = 0,
	            result = [];

	        if (iterable.length === 0) {
	            resolve(result);
	        }

	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;

	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }

	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};

	Promise$1.race = function race(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};

	var p$1 = Promise$1.prototype;

	p$1.resolve = function resolve(x) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        var called = false;

	        try {
	            var then = x && x['then'];

	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }

	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};

	p$1.reject = function reject(reason) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};

	p$1.notify = function notify() {
	    var promise = this;

	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];

	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};

	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;

	    return new Promise$1(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};

	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};

	/**
	 * Promise adapter.
	 */

	if (typeof Promise === 'undefined') {
	    window.Promise = Promise$1;
	}

	function PromiseObj(executor, context) {

	    if (executor instanceof Promise) {
	        this.promise = executor;
	    } else {
	        this.promise = new Promise(executor.bind(context));
	    }

	    this.context = context;
	}

	PromiseObj.all = function (iterable, context) {
	    return new PromiseObj(Promise.all(iterable), context);
	};

	PromiseObj.resolve = function (value, context) {
	    return new PromiseObj(Promise.resolve(value), context);
	};

	PromiseObj.reject = function (reason, context) {
	    return new PromiseObj(Promise.reject(reason), context);
	};

	PromiseObj.race = function (iterable, context) {
	    return new PromiseObj(Promise.race(iterable), context);
	};

	var p = PromiseObj.prototype;

	p.bind = function (context) {
	    this.context = context;
	    return this;
	};

	p.then = function (fulfilled, rejected) {

	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
	};

	p.catch = function (rejected) {

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new PromiseObj(this.promise.catch(rejected), this.context);
	};

	p.finally = function (callback) {

	    return this.then(function (value) {
	        callback.call(this);
	        return value;
	    }, function (reason) {
	        callback.call(this);
	        return Promise.reject(reason);
	    });
	};

	/**
	 * Utility functions.
	 */

	var debug = false;var util = {};var slice = [].slice;


	function Util (Vue) {
	    util = Vue.util;
	    debug = Vue.config.debug || !Vue.config.silent;
	}

	function warn(msg) {
	    if (typeof console !== 'undefined' && debug) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}

	function error(msg) {
	    if (typeof console !== 'undefined') {
	        console.error(msg);
	    }
	}

	function nextTick(cb, ctx) {
	    return util.nextTick(cb, ctx);
	}

	function trim(str) {
	    return str.replace(/^\s*|\s*$/g, '');
	}

	function toLower(str) {
	    return str ? str.toLowerCase() : '';
	}

	function toUpper(str) {
	    return str ? str.toUpperCase() : '';
	}

	var isArray = Array.isArray;

	function isString(val) {
	    return typeof val === 'string';
	}

	function isBoolean(val) {
	    return val === true || val === false;
	}

	function isFunction(val) {
	    return typeof val === 'function';
	}

	function isObject(obj) {
	    return obj !== null && typeof obj === 'object';
	}

	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}

	function isBlob(obj) {
	    return typeof Blob !== 'undefined' && obj instanceof Blob;
	}

	function isFormData(obj) {
	    return typeof FormData !== 'undefined' && obj instanceof FormData;
	}

	function when(value, fulfilled, rejected) {

	    var promise = PromiseObj.resolve(value);

	    if (arguments.length < 2) {
	        return promise;
	    }

	    return promise.then(fulfilled, rejected);
	}

	function options(fn, obj, opts) {

	    opts = opts || {};

	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }

	    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	}

	function each(obj, iterator) {

	    var i, key;

	    if (obj && typeof obj.length == 'number') {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }

	    return obj;
	}

	var assign = Object.assign || _assign;

	function merge(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source, true);
	    });

	    return target;
	}

	function defaults(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {

	        for (var key in source) {
	            if (target[key] === undefined) {
	                target[key] = source[key];
	            }
	        }
	    });

	    return target;
	}

	function _assign(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source);
	    });

	    return target;
	}

	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}

	/**
	 * Root Prefix Transform.
	 */

	function root (options, next) {

	    var url = next(options);

	    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }

	    return url;
	}

	/**
	 * Query Parameter Transform.
	 */

	function query (options, next) {

	    var urlParams = Object.keys(Url.options.params),
	        query = {},
	        url = next(options);

	    each(options.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });

	    query = Url.params(query);

	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }

	    return url;
	}

	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */

	function expand(url, params, variables) {

	    var tmpl = parse(url),
	        expanded = tmpl.expand(params);

	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }

	    return expanded;
	}

	function parse(template) {

	    var operators = ['+', '#', '.', '/', ';', '?', '&'],
	        variables = [];

	    return {
	        vars: variables,
	        expand: function (context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {

	                    var operator = null,
	                        values = [];

	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }

	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });

	                    if (operator && operator !== '+') {

	                        var separator = ',';

	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }

	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }
	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}

	function getValues(context, operator, key, modifier) {

	    var value = context[key],
	        result = [];

	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();

	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }

	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];

	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }

	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }

	    return result;
	}

	function isDefined(value) {
	    return value !== undefined && value !== null;
	}

	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}

	function encodeValue(operator, value, key) {

	    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);

	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}

	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}

	/**
	 * URL Template (RFC 6570) Transform.
	 */

	function template (options) {

	    var variables = [],
	        url = expand(options.url, options.params, variables);

	    variables.forEach(function (key) {
	        delete options.params[key];
	    });

	    return url;
	}

	/**
	 * Service for URL templating.
	 */

	var ie = document.documentMode;
	var el = document.createElement('a');

	function Url(url, params) {

	    var self = this || {},
	        options = url,
	        transform;

	    if (isString(url)) {
	        options = { url: url, params: params };
	    }

	    options = merge({}, Url.options, self.$options, options);

	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, self.$vm);
	    });

	    return transform(options);
	}

	/**
	 * Url options.
	 */

	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};

	/**
	 * Url transforms.
	 */

	Url.transforms = [template, query, root];

	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */

	Url.params = function (obj) {

	    var params = [],
	        escape = encodeURIComponent;

	    params.add = function (key, value) {

	        if (isFunction(value)) {
	            value = value();
	        }

	        if (value === null) {
	            value = '';
	        }

	        this.push(escape(key) + '=' + escape(value));
	    };

	    serialize(params, obj);

	    return params.join('&').replace(/%20/g, '+');
	};

	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */

	Url.parse = function (url) {

	    if (ie) {
	        el.href = url;
	        url = el.href;
	    }

	    el.href = url;

	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};

	function factory(handler, next, vm) {
	    return function (options) {
	        return handler.call(vm, options, next);
	    };
	}

	function serialize(params, obj, scope) {

	    var array = isArray(obj),
	        plain = isPlainObject(obj),
	        hash;

	    each(obj, function (value, key) {

	        hash = isObject(value) || isArray(value);

	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }

	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}

	/**
	 * XDomain client (Internet Explorer).
	 */

	function xdrClient (request) {
	    return new PromiseObj(function (resolve) {

	        var xdr = new XDomainRequest(),
	            handler = function (_ref) {
	            var type = _ref.type;


	            var status = 0;

	            if (type === 'load') {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }

	            resolve(request.respondWith(xdr.responseText, { status: status }));
	        };

	        request.abort = function () {
	            return xdr.abort();
	        };

	        xdr.open(request.method, request.getUrl());
	        xdr.timeout = 0;
	        xdr.onload = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = handler;
	        xdr.onprogress = function () {};
	        xdr.send(request.getBody());
	    });
	}

	/**
	 * CORS Interceptor.
	 */

	var ORIGIN_URL = Url.parse(location.href);
	var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();

	function cors (request, next) {

	    if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
	        request.crossOrigin = true;
	    }

	    if (request.crossOrigin) {

	        if (!SUPPORTS_CORS) {
	            request.client = xdrClient;
	        }

	        delete request.emulateHTTP;
	    }

	    next();
	}

	function crossOrigin(request) {

	    var requestUrl = Url.parse(Url(request));

	    return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
	}

	/**
	 * Body Interceptor.
	 */

	function body (request, next) {

	    if (isFormData(request.body)) {

	        request.headers.delete('Content-Type');
	    } else if (isObject(request.body) || isArray(request.body)) {

	        if (request.emulateJSON) {
	            request.body = Url.params(request.body);
	            request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
	        } else {
	            request.body = JSON.stringify(request.body);
	        }
	    }

	    next(function (response) {

	        Object.defineProperty(response, 'data', {
	            get: function () {
	                return this.body;
	            },
	            set: function (body) {
	                this.body = body;
	            }
	        });

	        return response.bodyText ? when(response.text(), function (text) {

	            var type = response.headers.get('Content-Type');

	            if (isString(type) && type.indexOf('application/json') === 0) {

	                try {
	                    response.body = JSON.parse(text);
	                } catch (e) {
	                    response.body = null;
	                }
	            } else {
	                response.body = text;
	            }

	            return response;
	        }) : response;
	    });
	}

	/**
	 * JSONP client.
	 */

	function jsonpClient (request) {
	    return new PromiseObj(function (resolve) {

	        var name = request.jsonp || 'callback',
	            callback = '_jsonp' + Math.random().toString(36).substr(2),
	            body = null,
	            handler,
	            script;

	        handler = function (_ref) {
	            var type = _ref.type;


	            var status = 0;

	            if (type === 'load' && body !== null) {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }

	            resolve(request.respondWith(body, { status: status }));

	            delete window[callback];
	            document.body.removeChild(script);
	        };

	        request.params[name] = callback;

	        window[callback] = function (result) {
	            body = JSON.stringify(result);
	        };

	        script = document.createElement('script');
	        script.src = request.getUrl();
	        script.type = 'text/javascript';
	        script.async = true;
	        script.onload = handler;
	        script.onerror = handler;

	        document.body.appendChild(script);
	    });
	}

	/**
	 * JSONP Interceptor.
	 */

	function jsonp (request, next) {

	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }

	    next(function (response) {

	        if (request.method == 'JSONP') {

	            return when(response.json(), function (json) {

	                response.body = json;

	                return response;
	            });
	        }
	    });
	}

	/**
	 * Before Interceptor.
	 */

	function before (request, next) {

	    if (isFunction(request.before)) {
	        request.before.call(this, request);
	    }

	    next();
	}

	/**
	 * HTTP method override Interceptor.
	 */

	function method (request, next) {

	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers.set('X-HTTP-Method-Override', request.method);
	        request.method = 'POST';
	    }

	    next();
	}

	/**
	 * Header Interceptor.
	 */

	function header (request, next) {

	    var headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[toLower(request.method)]);

	    each(headers, function (value, name) {
	        if (!request.headers.has(name)) {
	            request.headers.set(name, value);
	        }
	    });

	    next();
	}

	/**
	 * Timeout Interceptor.
	 */

	function timeout (request, next) {

	    var timeout;

	    if (request.timeout) {
	        timeout = setTimeout(function () {
	            request.abort();
	        }, request.timeout);
	    }

	    next(function (response) {

	        clearTimeout(timeout);
	    });
	}

	/**
	 * XMLHttp client.
	 */

	function xhrClient (request) {
	    return new PromiseObj(function (resolve) {

	        var xhr = new XMLHttpRequest(),
	            handler = function (event) {

	            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
	                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
	            });

	            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
	                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
	            });

	            resolve(response);
	        };

	        request.abort = function () {
	            return xhr.abort();
	        };

	        if (request.progress) {
	            if (request.method === 'GET') {
	                xhr.addEventListener('progress', request.progress);
	            } else if (/^(POST|PUT)$/i.test(request.method)) {
	                xhr.upload.addEventListener('progress', request.progress);
	            }
	        }

	        xhr.open(request.method, request.getUrl(), true);

	        if ('responseType' in xhr) {
	            xhr.responseType = 'blob';
	        }

	        if (request.credentials === true) {
	            xhr.withCredentials = true;
	        }

	        request.headers.forEach(function (value, name) {
	            xhr.setRequestHeader(name, value);
	        });

	        xhr.timeout = 0;
	        xhr.onload = handler;
	        xhr.onerror = handler;
	        xhr.send(request.getBody());
	    });
	}

	/**
	 * Base client.
	 */

	function Client (context) {

	    var reqHandlers = [sendRequest],
	        resHandlers = [],
	        handler;

	    if (!isObject(context)) {
	        context = null;
	    }

	    function Client(request) {
	        return new PromiseObj(function (resolve) {

	            function exec() {

	                handler = reqHandlers.pop();

	                if (isFunction(handler)) {
	                    handler.call(context, request, next);
	                } else {
	                    warn('Invalid interceptor of type ' + typeof handler + ', must be a function');
	                    next();
	                }
	            }

	            function next(response) {

	                if (isFunction(response)) {

	                    resHandlers.unshift(response);
	                } else if (isObject(response)) {

	                    resHandlers.forEach(function (handler) {
	                        response = when(response, function (response) {
	                            return handler.call(context, response) || response;
	                        });
	                    });

	                    when(response, resolve);

	                    return;
	                }

	                exec();
	            }

	            exec();
	        }, context);
	    }

	    Client.use = function (handler) {
	        reqHandlers.push(handler);
	    };

	    return Client;
	}

	function sendRequest(request, resolve) {

	    var client = request.client || xhrClient;

	    resolve(client(request));
	}

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	/**
	 * HTTP Headers.
	 */

	var Headers = function () {
	    function Headers(headers) {
	        var _this = this;

	        classCallCheck(this, Headers);


	        this.map = {};

	        each(headers, function (value, name) {
	            return _this.append(name, value);
	        });
	    }

	    Headers.prototype.has = function has(name) {
	        return getName(this.map, name) !== null;
	    };

	    Headers.prototype.get = function get(name) {

	        var list = this.map[getName(this.map, name)];

	        return list ? list[0] : null;
	    };

	    Headers.prototype.getAll = function getAll(name) {
	        return this.map[getName(this.map, name)] || [];
	    };

	    Headers.prototype.set = function set(name, value) {
	        this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
	    };

	    Headers.prototype.append = function append(name, value) {

	        var list = this.getAll(name);

	        if (list.length) {
	            list.push(trim(value));
	        } else {
	            this.set(name, value);
	        }
	    };

	    Headers.prototype.delete = function _delete(name) {
	        delete this.map[getName(this.map, name)];
	    };

	    Headers.prototype.forEach = function forEach(callback, thisArg) {
	        var _this2 = this;

	        each(this.map, function (list, name) {
	            each(list, function (value) {
	                return callback.call(thisArg, value, name, _this2);
	            });
	        });
	    };

	    return Headers;
	}();

	function getName(map, name) {
	    return Object.keys(map).reduce(function (prev, curr) {
	        return toLower(name) === toLower(curr) ? curr : prev;
	    }, null);
	}

	function normalizeName(name) {

	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	        throw new TypeError('Invalid character in header field name');
	    }

	    return trim(name);
	}

	/**
	 * HTTP Response.
	 */

	var Response = function () {
	    function Response(body, _ref) {
	        var url = _ref.url;
	        var headers = _ref.headers;
	        var status = _ref.status;
	        var statusText = _ref.statusText;
	        classCallCheck(this, Response);


	        this.url = url;
	        this.ok = status >= 200 && status < 300;
	        this.status = status || 0;
	        this.statusText = statusText || '';
	        this.headers = new Headers(headers);
	        this.body = body;

	        if (isString(body)) {

	            this.bodyText = body;
	        } else if (isBlob(body)) {

	            this.bodyBlob = body;

	            if (isBlobText(body)) {
	                this.bodyText = blobText(body);
	            }
	        }
	    }

	    Response.prototype.blob = function blob() {
	        return when(this.bodyBlob);
	    };

	    Response.prototype.text = function text() {
	        return when(this.bodyText);
	    };

	    Response.prototype.json = function json() {
	        return when(this.text(), function (text) {
	            return JSON.parse(text);
	        });
	    };

	    return Response;
	}();

	function blobText(body) {
	    return new PromiseObj(function (resolve) {

	        var reader = new FileReader();

	        reader.readAsText(body);
	        reader.onload = function () {
	            resolve(reader.result);
	        };
	    });
	}

	function isBlobText(body) {
	    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
	}

	/**
	 * HTTP Request.
	 */

	var Request = function () {
	    function Request(options) {
	        classCallCheck(this, Request);


	        this.body = null;
	        this.params = {};

	        assign(this, options, {
	            method: toUpper(options.method || 'GET')
	        });

	        if (!(this.headers instanceof Headers)) {
	            this.headers = new Headers(this.headers);
	        }
	    }

	    Request.prototype.getUrl = function getUrl() {
	        return Url(this);
	    };

	    Request.prototype.getBody = function getBody() {
	        return this.body;
	    };

	    Request.prototype.respondWith = function respondWith(body, options) {
	        return new Response(body, assign(options || {}, { url: this.getUrl() }));
	    };

	    return Request;
	}();

	/**
	 * Service for sending network requests.
	 */

	var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
	var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
	var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };

	function Http(options) {

	    var self = this || {},
	        client = Client(self.$vm);

	    defaults(options || {}, self.$options, Http.options);

	    Http.interceptors.forEach(function (handler) {
	        client.use(handler);
	    });

	    return client(new Request(options)).then(function (response) {

	        return response.ok ? response : PromiseObj.reject(response);
	    }, function (response) {

	        if (response instanceof Error) {
	            error(response);
	        }

	        return PromiseObj.reject(response);
	    });
	}

	Http.options = {};

	Http.headers = {
	    put: JSON_CONTENT_TYPE,
	    post: JSON_CONTENT_TYPE,
	    patch: JSON_CONTENT_TYPE,
	    delete: JSON_CONTENT_TYPE,
	    custom: CUSTOM_HEADERS,
	    common: COMMON_HEADERS
	};

	Http.interceptors = [before, timeout, method, body, jsonp, header, cors];

	['get', 'delete', 'head', 'jsonp'].forEach(function (method) {

	    Http[method] = function (url, options) {
	        return this(assign(options || {}, { url: url, method: method }));
	    };
	});

	['post', 'put', 'patch'].forEach(function (method) {

	    Http[method] = function (url, body, options) {
	        return this(assign(options || {}, { url: url, method: method, body: body }));
	    };
	});

	/**
	 * Service for interacting with RESTful services.
	 */

	function Resource(url, params, actions, options) {

	    var self = this || {},
	        resource = {};

	    actions = assign({}, Resource.actions, actions);

	    each(actions, function (action, name) {

	        action = merge({ url: url, params: assign({}, params) }, options, action);

	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });

	    return resource;
	}

	function opts(action, args) {

	    var options = assign({}, action),
	        params = {},
	        body;

	    switch (args.length) {

	        case 2:

	            params = args[0];
	            body = args[1];

	            break;

	        case 1:

	            if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                body = args[0];
	            } else {
	                params = args[0];
	            }

	            break;

	        case 0:

	            break;

	        default:

	            throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
	    }

	    options.body = body;
	    options.params = assign({}, options.params, params);

	    return options;
	}

	Resource.actions = {

	    get: { method: 'GET' },
	    save: { method: 'POST' },
	    query: { method: 'GET' },
	    update: { method: 'PUT' },
	    remove: { method: 'DELETE' },
	    delete: { method: 'DELETE' }

	};

	/**
	 * Install plugin.
	 */

	function plugin(Vue) {

	    if (plugin.installed) {
	        return;
	    }

	    Util(Vue);

	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = PromiseObj;

	    Object.defineProperties(Vue.prototype, {

	        $url: {
	            get: function () {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },

	        $http: {
	            get: function () {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },

	        $resource: {
	            get: function () {
	                return Vue.resource.bind(this);
	            }
	        },

	        $promise: {
	            get: function () {
	                var _this = this;

	                return function (executor) {
	                    return new Vue.Promise(executor, _this);
	                };
	            }
	        }

	    });
	}

	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}

	module.exports = plugin;

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  query: query
	};

	/**
	 * Gets the query parameters in the URL
	 *
	 * @param {string} url
	 *  The url to be parsed for query parameters
	 * @returns {{}}
	 *  An object containing the list of URL query parameters
	 */

	function query(url) {
	  return function (a) {
	    if (a == "") return {};
	    var b = {};
	    for (var i = 0; i < a.length; ++i) {
	      var p = a[i].split('=', 2);
	      if (p.length != 2) continue;
	      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
	    }
	    return b;
	  }(url.substr(url.indexOf('?') + 1).split('&'));
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Add class to fields on blur event based on input value
	 */
	exports.default = function () {
	  (0, _jquery2.default)(document).ready(function () {
	    (0, _jquery2.default)('.vs-form-group .form-control').on('blur', function () {
	      if ((0, _jquery2.default)(this).val()) {
	        (0, _jquery2.default)(this).addClass('vs-form-control--not-empty');
	      } else {
	        (0, _jquery2.default)(this).removeClass('vs-form-control--not-empty');
	      }
	    });
	  });
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var $body = (0, _jquery2.default)('body');
	  var $header = (0, _jquery2.default)('.vs-header');

	  userDropdown($body, $header);
	  mobileMenu($body, $header);
	  headerAnimation($body, $header);
	};

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _headroom = __webpack_require__(22);

	var _headroom2 = _interopRequireDefault(_headroom);

	var _onResize = __webpack_require__(23);

	var _onResize2 = _interopRequireDefault(_onResize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Activates the user dropdown
	 *
	 * @param $body
	 * @param $header
	 */
	function userDropdown($body, $header) {
	  var isOpen = false;
	  var $menu = $header.find('.vs-user-menu');
	  var $trigger = $menu.find('.vs-user-menu__trigger:not(.vs-user-menu__trigger--not-logged)');
	  var $dropdown = $menu.find('.vs-user-dropdown');

	  // The user dropdown is closed if the user clicks anywhere in
	  // the page but the dropdown area while the dropdown is open.
	  $body.on('click', function (e) {
	    if (isOpen && !_jquery2.default.contains($menu[0], e.target)) {
	      close();
	    }
	  });

	  // Toggle the dropdown states
	  $trigger.on('click', function (e) {
	    e.preventDefault();

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

	/**
	 * Applies all required header animations
	 *
	 * @param $body
	 * @param $header
	 */
	function headerAnimation() {

	  // Dom elements for headroom
	  var header = document.querySelector('.vs-header');
	  var subnav = document.querySelector('.vs-subnav');

	  if (!header) {
	    return;
	  }

	  // Jquery elements
	  var headerProperties = {
	    offset: 20,
	    tolerance: 5,
	    classes: {
	      initial: "animated", // when element is initialised
	      pinned: "vs-header--pinned", // when scrolling up
	      unpinned: "vs-header--unpinned", // when scrolling down
	      top: "vs-header--top", // when above offset
	      notTop: "vs-header--not-top", // when below offset
	      bottom: "vs-header--bottom", // when at bottom of scroll area
	      notBottom: "vs-header--not-bottom" // when not at bottom of scroll area
	    },

	    onNotTop: function onNotTop() {
	      (0, _jquery2.default)('.vs-user-menu__trigger').removeClass('vs-user-menu__trigger--active');
	      (0, _jquery2.default)('.vs-user-dropdown').removeClass('vs-user-dropdown--open');
	    }
	  };

	  if (subnav) {
	    var getOffsets;
	    var vsSubnav;

	    (function () {
	      // Get subnav distance to top
	      var jSubnavTop = (0, _jquery2.default)(subnav).offset().top;

	      // The deviation is the menu header height that should be contemplated as an increment to subnav offset

	      getOffsets = function getOffsets() {
	        var offsetDeviation = 55;

	        if (window.innerWidth >= 767) {
	          offsetDeviation = 60;
	        }

	        return {
	          offset: jSubnavTop,
	          offset_deviation: offsetDeviation
	        };
	      };

	      // Headroom vs-subnav element


	      vsSubnav = new _headroom2.default(subnav, {
	        offset: getOffsets().offset,
	        tolerance: 0,
	        classes: {
	          initial: "animated", // when element is initialised
	          pinned: "vs-subnav--pinned", // when scrolling up
	          unpinned: "vs-subnav--unpinned", // when scrolling down
	          top: "vs-subnav--top", // when above offset
	          notTop: "vs-subnav--not-top", // when below offset
	          bottom: "vs-subnav--bottom", // when at bottom of scroll area
	          notBottom: "vs-subnav--not-bottom" // when not at bottom of scroll area
	        }
	      });

	      // vs-header events to update vs-subnav offset

	      headerProperties.onPin = function () {
	        subnav.classList.add('vs-subnav--pinned-on-main-nav');
	        var offsets = getOffsets();
	        vsSubnav.offset = offsets.offset - offsets.offset_deviation;
	      };

	      headerProperties.onUnpin = function () {
	        subnav.classList.remove('vs-subnav--pinned-on-main-nav');
	        var offsets = getOffsets();
	        vsSubnav.offset = offsets.offset;
	      };

	      vsSubnav.init();
	    })();
	  }

	  // Headroom vs-header element
	  var vsHeader = new _headroom2.default(header, headerProperties);

	  vsHeader.init();

	  (0, _onResize2.default)(function () {
	    // If vs-subnav element doesn't exist we don't need to do nothing
	    if (!subnav) {
	      return;
	    }

	    var scrollTop = (0, _jquery2.default)(document).scrollTop();
	    var subNavWrapperPosition = (0, _jquery2.default)('.vs-region--subnav-wrapper').position();
	    var mainNav = (0, _jquery2.default)('.vs-header');
	    var mainNavPinned = mainNav.hasClass('vs-header--pinned');
	    var offsets = getOffsets();

	    // If main nav has class pinned remove its height from subnav distance to top
	    var offset = mainNavPinned ? scrollTop < subNavWrapperPosition.top - mainNav.height() : scrollTop < subNavWrapperPosition.top;

	    if (offset) {
	      vsSubnav.offset = offsets.offset;
	      subnav.classList.remove('vs-subnav--unpinned', 'vs-subnav--not-top', 'vs-subnav--pinned-on-main-nav');
	    } else {
	      vsSubnav.offset = offsets.offset - offsets.offset_deviation;
	      subnav.classList.add('vs-subnav--unpinned', 'vs-subnav--not-top');

	      if (mainNavPinned) {
	        subnav.classList.add('vs-subnav--pinned-on-main-nav');
	      }
	    }
	  });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
	 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
	 * License: MIT
	 */

	(function(root, factory) {
	  'use strict';

	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  else if (typeof exports === 'object') {
	    // COMMONJS
	    module.exports = factory();
	  }
	  else {
	    // BROWSER
	    root.Headroom = factory();
	  }
	}(this, function() {
	  'use strict';

	  /* exported features */
	  
	  var features = {
	    bind : !!(function(){}.bind),
	    classList : 'classList' in document.documentElement,
	    rAF : !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
	  };
	  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
	  
	  /**
	   * Handles debouncing of events via requestAnimationFrame
	   * @see http://www.html5rocks.com/en/tutorials/speed/animations/
	   * @param {Function} callback The callback to handle whichever event
	   */
	  function Debouncer (callback) {
	    this.callback = callback;
	    this.ticking = false;
	  }
	  Debouncer.prototype = {
	    constructor : Debouncer,
	  
	    /**
	     * dispatches the event to the supplied callback
	     * @private
	     */
	    update : function() {
	      this.callback && this.callback();
	      this.ticking = false;
	    },
	  
	    /**
	     * ensures events don't get stacked
	     * @private
	     */
	    requestTick : function() {
	      if(!this.ticking) {
	        requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
	        this.ticking = true;
	      }
	    },
	  
	    /**
	     * Attach this as the event listeners
	     */
	    handleEvent : function() {
	      this.requestTick();
	    }
	  };
	  /**
	   * Check if object is part of the DOM
	   * @constructor
	   * @param {Object} obj element to check
	   */
	  function isDOMElement(obj) {
	    return obj && typeof window !== 'undefined' && (obj === window || obj.nodeType);
	  }
	  
	  /**
	   * Helper function for extending objects
	   */
	  function extend (object /*, objectN ... */) {
	    if(arguments.length <= 0) {
	      throw new Error('Missing arguments in extend function');
	    }
	  
	    var result = object || {},
	        key,
	        i;
	  
	    for (i = 1; i < arguments.length; i++) {
	      var replacement = arguments[i] || {};
	  
	      for (key in replacement) {
	        // Recurse into object except if the object is a DOM element
	        if(typeof result[key] === 'object' && ! isDOMElement(result[key])) {
	          result[key] = extend(result[key], replacement[key]);
	        }
	        else {
	          result[key] = result[key] || replacement[key];
	        }
	      }
	    }
	  
	    return result;
	  }
	  
	  /**
	   * Helper function for normalizing tolerance option to object format
	   */
	  function normalizeTolerance (t) {
	    return t === Object(t) ? t : { down : t, up : t };
	  }
	  
	  /**
	   * UI enhancement for fixed headers.
	   * Hides header when scrolling down
	   * Shows header when scrolling up
	   * @constructor
	   * @param {DOMElement} elem the header element
	   * @param {Object} options options for the widget
	   */
	  function Headroom (elem, options) {
	    options = extend(options, Headroom.options);
	  
	    this.lastKnownScrollY = 0;
	    this.elem             = elem;
	    this.tolerance        = normalizeTolerance(options.tolerance);
	    this.classes          = options.classes;
	    this.offset           = options.offset;
	    this.scroller         = options.scroller;
	    this.initialised      = false;
	    this.onPin            = options.onPin;
	    this.onUnpin          = options.onUnpin;
	    this.onTop            = options.onTop;
	    this.onNotTop         = options.onNotTop;
	    this.onBottom         = options.onBottom;
	    this.onNotBottom      = options.onNotBottom;
	  }
	  Headroom.prototype = {
	    constructor : Headroom,
	  
	    /**
	     * Initialises the widget
	     */
	    init : function() {
	      if(!Headroom.cutsTheMustard) {
	        return;
	      }
	  
	      this.debouncer = new Debouncer(this.update.bind(this));
	      this.elem.classList.add(this.classes.initial);
	  
	      // defer event registration to handle browser 
	      // potentially restoring previous scroll position
	      setTimeout(this.attachEvent.bind(this), 100);
	  
	      return this;
	    },
	  
	    /**
	     * Unattaches events and removes any classes that were added
	     */
	    destroy : function() {
	      var classes = this.classes;
	  
	      this.initialised = false;
	      this.elem.classList.remove(classes.unpinned, classes.pinned, classes.top, classes.notTop, classes.initial);
	      this.scroller.removeEventListener('scroll', this.debouncer, false);
	    },
	  
	    /**
	     * Attaches the scroll event
	     * @private
	     */
	    attachEvent : function() {
	      if(!this.initialised){
	        this.lastKnownScrollY = this.getScrollY();
	        this.initialised = true;
	        this.scroller.addEventListener('scroll', this.debouncer, false);
	  
	        this.debouncer.handleEvent();
	      }
	    },
	    
	    /**
	     * Unpins the header if it's currently pinned
	     */
	    unpin : function() {
	      var classList = this.elem.classList,
	        classes = this.classes;
	      
	      if(classList.contains(classes.pinned) || !classList.contains(classes.unpinned)) {
	        classList.add(classes.unpinned);
	        classList.remove(classes.pinned);
	        this.onUnpin && this.onUnpin.call(this);
	      }
	    },
	  
	    /**
	     * Pins the header if it's currently unpinned
	     */
	    pin : function() {
	      var classList = this.elem.classList,
	        classes = this.classes;
	      
	      if(classList.contains(classes.unpinned)) {
	        classList.remove(classes.unpinned);
	        classList.add(classes.pinned);
	        this.onPin && this.onPin.call(this);
	      }
	    },
	  
	    /**
	     * Handles the top states
	     */
	    top : function() {
	      var classList = this.elem.classList,
	        classes = this.classes;
	      
	      if(!classList.contains(classes.top)) {
	        classList.add(classes.top);
	        classList.remove(classes.notTop);
	        this.onTop && this.onTop.call(this);
	      }
	    },
	  
	    /**
	     * Handles the not top state
	     */
	    notTop : function() {
	      var classList = this.elem.classList,
	        classes = this.classes;
	      
	      if(!classList.contains(classes.notTop)) {
	        classList.add(classes.notTop);
	        classList.remove(classes.top);
	        this.onNotTop && this.onNotTop.call(this);
	      }
	    },
	  
	    bottom : function() {
	      var classList = this.elem.classList,
	        classes = this.classes;
	      
	      if(!classList.contains(classes.bottom)) {
	        classList.add(classes.bottom);
	        classList.remove(classes.notBottom);
	        this.onBottom && this.onBottom.call(this);
	      }
	    },
	  
	    /**
	     * Handles the not top state
	     */
	    notBottom : function() {
	      var classList = this.elem.classList,
	        classes = this.classes;
	      
	      if(!classList.contains(classes.notBottom)) {
	        classList.add(classes.notBottom);
	        classList.remove(classes.bottom);
	        this.onNotBottom && this.onNotBottom.call(this);
	      }
	    },
	  
	    /**
	     * Gets the Y scroll position
	     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
	     * @return {Number} pixels the page has scrolled along the Y-axis
	     */
	    getScrollY : function() {
	      return (this.scroller.pageYOffset !== undefined)
	        ? this.scroller.pageYOffset
	        : (this.scroller.scrollTop !== undefined)
	          ? this.scroller.scrollTop
	          : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	    },
	  
	    /**
	     * Gets the height of the viewport
	     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
	     * @return {int} the height of the viewport in pixels
	     */
	    getViewportHeight : function () {
	      return window.innerHeight
	        || document.documentElement.clientHeight
	        || document.body.clientHeight;
	    },
	  
	    /**
	     * Gets the physical height of the DOM element
	     * @param  {Object}  elm the element to calculate the physical height of which
	     * @return {int}     the physical height of the element in pixels
	     */
	    getElementPhysicalHeight : function (elm) {
	      return Math.max(
	        elm.offsetHeight,
	        elm.clientHeight
	      );
	    },
	  
	    /**
	     * Gets the physical height of the scroller element
	     * @return {int} the physical height of the scroller element in pixels
	     */
	    getScrollerPhysicalHeight : function () {
	      return (this.scroller === window || this.scroller === document.body)
	        ? this.getViewportHeight()
	        : this.getElementPhysicalHeight(this.scroller);
	    },
	  
	    /**
	     * Gets the height of the document
	     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
	     * @return {int} the height of the document in pixels
	     */
	    getDocumentHeight : function () {
	      var body = document.body,
	        documentElement = document.documentElement;
	    
	      return Math.max(
	        body.scrollHeight, documentElement.scrollHeight,
	        body.offsetHeight, documentElement.offsetHeight,
	        body.clientHeight, documentElement.clientHeight
	      );
	    },
	  
	    /**
	     * Gets the height of the DOM element
	     * @param  {Object}  elm the element to calculate the height of which
	     * @return {int}     the height of the element in pixels
	     */
	    getElementHeight : function (elm) {
	      return Math.max(
	        elm.scrollHeight,
	        elm.offsetHeight,
	        elm.clientHeight
	      );
	    },
	  
	    /**
	     * Gets the height of the scroller element
	     * @return {int} the height of the scroller element in pixels
	     */
	    getScrollerHeight : function () {
	      return (this.scroller === window || this.scroller === document.body)
	        ? this.getDocumentHeight()
	        : this.getElementHeight(this.scroller);
	    },
	  
	    /**
	     * determines if the scroll position is outside of document boundaries
	     * @param  {int}  currentScrollY the current y scroll position
	     * @return {bool} true if out of bounds, false otherwise
	     */
	    isOutOfBounds : function (currentScrollY) {
	      var pastTop  = currentScrollY < 0,
	        pastBottom = currentScrollY + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
	      
	      return pastTop || pastBottom;
	    },
	  
	    /**
	     * determines if the tolerance has been exceeded
	     * @param  {int} currentScrollY the current scroll y position
	     * @return {bool} true if tolerance exceeded, false otherwise
	     */
	    toleranceExceeded : function (currentScrollY, direction) {
	      return Math.abs(currentScrollY-this.lastKnownScrollY) >= this.tolerance[direction];
	    },
	  
	    /**
	     * determine if it is appropriate to unpin
	     * @param  {int} currentScrollY the current y scroll position
	     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
	     * @return {bool} true if should unpin, false otherwise
	     */
	    shouldUnpin : function (currentScrollY, toleranceExceeded) {
	      var scrollingDown = currentScrollY > this.lastKnownScrollY,
	        pastOffset = currentScrollY >= this.offset;
	  
	      return scrollingDown && pastOffset && toleranceExceeded;
	    },
	  
	    /**
	     * determine if it is appropriate to pin
	     * @param  {int} currentScrollY the current y scroll position
	     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
	     * @return {bool} true if should pin, false otherwise
	     */
	    shouldPin : function (currentScrollY, toleranceExceeded) {
	      var scrollingUp  = currentScrollY < this.lastKnownScrollY,
	        pastOffset = currentScrollY <= this.offset;
	  
	      return (scrollingUp && toleranceExceeded) || pastOffset;
	    },
	  
	    /**
	     * Handles updating the state of the widget
	     */
	    update : function() {
	      var currentScrollY  = this.getScrollY(),
	        scrollDirection = currentScrollY > this.lastKnownScrollY ? 'down' : 'up',
	        toleranceExceeded = this.toleranceExceeded(currentScrollY, scrollDirection);
	  
	      if(this.isOutOfBounds(currentScrollY)) { // Ignore bouncy scrolling in OSX
	        return;
	      }
	  
	      if (currentScrollY <= this.offset ) {
	        this.top();
	      } else {
	        this.notTop();
	      }
	  
	      if(currentScrollY + this.getViewportHeight() >= this.getScrollerHeight()) {
	        this.bottom();
	      }
	      else {
	        this.notBottom();
	      }
	  
	      if(this.shouldUnpin(currentScrollY, toleranceExceeded)) {
	        this.unpin();
	      }
	      else if(this.shouldPin(currentScrollY, toleranceExceeded)) {
	        this.pin();
	      }
	  
	      this.lastKnownScrollY = currentScrollY;
	    }
	  };
	  /**
	   * Default options
	   * @type {Object}
	   */
	  Headroom.options = {
	    tolerance : {
	      up : 0,
	      down : 0
	    },
	    offset : 0,
	    scroller: window,
	    classes : {
	      pinned : 'headroom--pinned',
	      unpinned : 'headroom--unpinned',
	      top : 'headroom--top',
	      notTop : 'headroom--not-top',
	      bottom : 'headroom--bottom',
	      notBottom : 'headroom--not-bottom',
	      initial : 'headroom'
	    }
	  };
	  Headroom.cutsTheMustard = typeof features !== 'undefined' && features.rAF && features.bind && features.classList;

	  return Headroom;
	}));

/***/ },
/* 23 */
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _iframeResizer = __webpack_require__(25);

	var _iframeResizer2 = _interopRequireDefault(_iframeResizer);

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  (0, _jquery2.default)('.vs-iframe').iFrameResize({
	    checkOrigin: false
	  });
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	module.exports = __webpack_require__(26);


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.iframeResizer = __webpack_require__(27);
	exports.iframeResizerContentWindow = __webpack_require__(28);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * File: iframeResizer.js
	 * Desc: Force iframes to size to content.
	 * Requires: iframeResizer.contentWindow.js to be loaded into the target frame.
	 * Doc: https://github.com/davidjbradshaw/iframe-resizer
	 * Author: David J. Bradshaw - dave@bradshaw.net
	 * Contributor: Jure Mav - jure.mav@gmail.com
	 * Contributor: Reed Dadoune - reed@dadoune.com
	 */


	;(function(window) {
		'use strict';

		var
			count                 = 0,
			logEnabled            = false,
			hiddenCheckEnabled    = false,
			msgHeader             = 'message',
			msgHeaderLen          = msgHeader.length,
			msgId                 = '[iFrameSizer]', //Must match iframe msg ID
			msgIdLen              = msgId.length,
			pagePosition          = null,
			requestAnimationFrame = window.requestAnimationFrame,
			resetRequiredMethods  = {max:1,scroll:1,bodyScroll:1,documentElementScroll:1},
			settings              = {},
			timer                 = null,
			logId                 = 'Host Page',

			defaults              = {
				autoResize                : true,
				bodyBackground            : null,
				bodyMargin                : null,
				bodyMarginV1              : 8,
				bodyPadding               : null,
				checkOrigin               : true,
				inPageLinks               : false,
				enablePublicMethods       : true,
				heightCalculationMethod   : 'bodyOffset',
				id                        : 'iFrameResizer',
				interval                  : 32,
				log                       : false,
				maxHeight                 : Infinity,
				maxWidth                  : Infinity,
				minHeight                 : 0,
				minWidth                  : 0,
				resizeFrom                : 'parent',
				scrolling                 : false,
				sizeHeight                : true,
				sizeWidth                 : false,
				tolerance                 : 0,
				widthCalculationMethod    : 'scroll',
				closedCallback            : function(){},
				initCallback              : function(){},
				messageCallback           : function(){warn('MessageCallback function not defined');},
				resizedCallback           : function(){},
				scrollCallback            : function(){return true;}
			};

		function addEventListener(obj,evt,func){
			/* istanbul ignore else */ // Not testable in PhantonJS
			if ('addEventListener' in window){
				obj.addEventListener(evt,func, false);
			} else if ('attachEvent' in window){//IE
				obj.attachEvent('on'+evt,func);
			}
		}

		function removeEventListener(el,evt,func){
			/* istanbul ignore else */ // Not testable in phantonJS
			if ('removeEventListener' in window){
				el.removeEventListener(evt,func, false);
			} else if ('detachEvent' in window){ //IE
				el.detachEvent('on'+evt,func);
			}
		}

		function setupRequestAnimationFrame(){
			var
				vendors = ['moz', 'webkit', 'o', 'ms'],
				x;

			// Remove vendor prefixing if prefixed and break early if not
			for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1) {
				requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
			}

			if (!(requestAnimationFrame)){
				log('setup','RequestAnimationFrame not supported');
			}
		}

		function getMyID(iframeId){
			var retStr = 'Host page: '+iframeId;

			if (window.top!==window.self){
				if (window.parentIFrame && window.parentIFrame.getId){
					retStr = window.parentIFrame.getId()+': '+iframeId;
				} else {
					retStr = 'Nested host page: '+iframeId;
				}
			}

			return retStr;
		}

		function formatLogHeader(iframeId){
			return msgId + '[' + getMyID(iframeId) + ']';
		}

		function isLogEnabled(iframeId){
			return settings[iframeId] ? settings[iframeId].log : logEnabled;
		}

		function log(iframeId,msg){
			output('log',iframeId,msg,isLogEnabled(iframeId));
		}

		function info(iframeId,msg){
			output('info',iframeId,msg,isLogEnabled(iframeId));
		}

		function warn(iframeId,msg){
			output('warn',iframeId,msg,true);
		}

		function output(type,iframeId,msg,enabled){
			if (true === enabled && 'object' === typeof window.console){
				console[type](formatLogHeader(iframeId),msg);
			}
		}

		function iFrameListener(event){
			function resizeIFrame(){
				function resize(){
					setSize(messageData);
					setPagePosition(iframeId);
				}

				ensureInRange('Height');
				ensureInRange('Width');

				syncResize(resize,messageData,'init');
			}

			function processMsg(){
				var data = msg.substr(msgIdLen).split(':');

				return {
					iframe: settings[data[0]].iframe,
					id:     data[0],
					height: data[1],
					width:  data[2],
					type:   data[3]
				};
			}

			function ensureInRange(Dimension){
				var
					max  = Number(settings[iframeId]['max' + Dimension]),
					min  = Number(settings[iframeId]['min' + Dimension]),
					dimension = Dimension.toLowerCase(),
					size = Number(messageData[dimension]);

				log(iframeId,'Checking ' + dimension + ' is in range ' + min + '-' + max);

				if (size<min) {
					size=min;
					log(iframeId,'Set ' + dimension + ' to min value');
				}

				if (size>max) {
					size=max;
					log(iframeId,'Set ' + dimension + ' to max value');
				}

				messageData[dimension] = '' + size;
			}


			function isMessageFromIFrame(){
				function checkAllowedOrigin(){
					function checkList(){
						var
							i = 0,
							retCode = false;

						log(iframeId,'Checking connection is from allowed list of origins: ' + checkOrigin);

						for (; i < checkOrigin.length; i++) {
							if (checkOrigin[i] === origin) {
								retCode = true;
								break;
							}
						}
						return retCode;
					}

					function checkSingle(){
						var remoteHost  = settings[iframeId].remoteHost;
						log(iframeId,'Checking connection is from: '+remoteHost);
						return origin === remoteHost;
					}

					return checkOrigin.constructor === Array ? checkList() : checkSingle();
				}

				var
					origin      = event.origin,
					checkOrigin = settings[iframeId].checkOrigin;

				if (checkOrigin && (''+origin !== 'null') && !checkAllowedOrigin()) {
					throw new Error(
						'Unexpected message received from: ' + origin +
						' for ' + messageData.iframe.id +
						'. Message was: ' + event.data +
						'. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.'
					);
				}

				return true;
			}

			function isMessageForUs(){
				return msgId === (('' + msg).substr(0,msgIdLen)) && (msg.substr(msgIdLen).split(':')[0] in settings); //''+Protects against non-string msg
			}

			function isMessageFromMetaParent(){
				//Test if this message is from a parent above us. This is an ugly test, however, updating
				//the message format would break backwards compatibity.
				var retCode = messageData.type in {'true':1,'false':1,'undefined':1};

				if (retCode){
					log(iframeId,'Ignoring init message from meta parent page');
				}

				return retCode;
			}

			function getMsgBody(offset){
				return msg.substr(msg.indexOf(':')+msgHeaderLen+offset);
			}

			function forwardMsgFromIFrame(msgBody){
				log(iframeId,'MessageCallback passed: {iframe: '+ messageData.iframe.id + ', message: ' + msgBody + '}');
				callback('messageCallback',{
					iframe: messageData.iframe,
					message: JSON.parse(msgBody)
				});
				log(iframeId,'--');
			}

			function getPageInfo(){
				var
					bodyPosition   = document.body.getBoundingClientRect(),
					iFramePosition = messageData.iframe.getBoundingClientRect();

				return JSON.stringify({
					iframeHeight: iFramePosition.height,
					iframeWidth:  iFramePosition.width,
					clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
					clientWidth:  Math.max(document.documentElement.clientWidth,  window.innerWidth  || 0),
					offsetTop:    parseInt(iFramePosition.top  - bodyPosition.top,  10),
					offsetLeft:   parseInt(iFramePosition.left - bodyPosition.left, 10),
					scrollTop:    window.pageYOffset,
					scrollLeft:   window.pageXOffset
				});
			}

			function sendPageInfoToIframe(iframe,iframeId){
				function debouncedTrigger(){
					trigger(
						'Send Page Info',
						'pageInfo:' + getPageInfo(), 
						iframe, 
						iframeId
					);
				}

				debouce(debouncedTrigger,32);
			}


			function startPageInfoMonitor(){
				function setListener(type,func){
					function sendPageInfo(){
						if (settings[id]){
							sendPageInfoToIframe(settings[id].iframe,id);
						} else {
							stop();
						}
					}

					['scroll','resize'].forEach(function(evt){
						log(id, type +  evt + ' listener for sendPageInfo');
						func(window,evt,sendPageInfo);
					});
				}

				function stop(){
					setListener('Remove ', removeEventListener);
				}

				function start(){
					setListener('Add ', addEventListener);
				}
				
				var id = iframeId; //Create locally scoped copy of iFrame ID

				start();

				settings[id].stopPageInfo = stop;
			}

			function stopPageInfoMonitor(){
				if (settings[iframeId] && settings[iframeId].stopPageInfo){
					settings[iframeId].stopPageInfo();
					delete settings[iframeId].stopPageInfo;
				}
			}

			function checkIFrameExists(){
				var retBool = true;

				if (null === messageData.iframe) {
					warn(iframeId,'IFrame ('+messageData.id+') not found');
					retBool = false;
				}
				return retBool;
			}

			function getElementPosition(target){
				var iFramePosition = target.getBoundingClientRect();

				getPagePosition(iframeId);

				return {
					x: Math.floor( Number(iFramePosition.left) + Number(pagePosition.x) ),
					y: Math.floor( Number(iFramePosition.top)  + Number(pagePosition.y) )
				};
			}

			function scrollRequestFromChild(addOffset){
				/* istanbul ignore next */  //Not testable in Karma
				function reposition(){
					pagePosition = newPosition;
					scrollTo();
					log(iframeId,'--');
				}

				function calcOffset(){
					return {
						x: Number(messageData.width) + offset.x,
						y: Number(messageData.height) + offset.y
					};
				}

				function scrollParent(){
					if (window.parentIFrame){
						window.parentIFrame['scrollTo'+(addOffset?'Offset':'')](newPosition.x,newPosition.y);
					} else {
						warn(iframeId,'Unable to scroll to requested position, window.parentIFrame not found');
					}
				}

				var
					offset = addOffset ? getElementPosition(messageData.iframe) : {x:0,y:0},
					newPosition = calcOffset();

				log(iframeId,'Reposition requested from iFrame (offset x:'+offset.x+' y:'+offset.y+')');

				if(window.top!==window.self){
					scrollParent();
				} else {
					reposition();
				}
			}

			function scrollTo(){
				if (false !== callback('scrollCallback',pagePosition)){
					setPagePosition(iframeId);
				} else {
					unsetPagePosition();
				}
			}

			function findTarget(location){
				function jumpToTarget(){
					var jumpPosition = getElementPosition(target);

					log(iframeId,'Moving to in page link (#'+hash+') at x: '+jumpPosition.x+' y: '+jumpPosition.y);
					pagePosition = {
						x: jumpPosition.x,
						y: jumpPosition.y
					};

					scrollTo();
					log(iframeId,'--');
				}

				function jumpToParent(){
					if (window.parentIFrame){
						window.parentIFrame.moveToAnchor(hash);
					} else {
						log(iframeId,'In page link #'+hash+' not found and window.parentIFrame not found');
					}
				}

				var
					hash     = location.split('#')[1] || '',
					hashData = decodeURIComponent(hash),
					target   = document.getElementById(hashData) || document.getElementsByName(hashData)[0];

				if (target){
					jumpToTarget();
				} else if(window.top!==window.self){
					jumpToParent();
				} else {
					log(iframeId,'In page link #'+hash+' not found');
				}
			}

			function callback(funcName,val){
				return chkCallback(iframeId,funcName,val);
			}

			function actionMsg(){

				if(settings[iframeId].firstRun) firstRun();

				switch(messageData.type){
				case 'close':
					closeIFrame(messageData.iframe);
					break;
				case 'message':
					forwardMsgFromIFrame(getMsgBody(6));
					break;
				case 'scrollTo':
					scrollRequestFromChild(false);
					break;
				case 'scrollToOffset':
					scrollRequestFromChild(true);
					break;
				case 'pageInfo':
					sendPageInfoToIframe(settings[iframeId].iframe,iframeId);
					startPageInfoMonitor();
					break;
				case 'pageInfoStop':
					stopPageInfoMonitor();
					break;
				case 'inPageLink':
					findTarget(getMsgBody(9));
					break;
				case 'reset':
					resetIFrame(messageData);
					break;
				case 'init':
					resizeIFrame();
					callback('initCallback',messageData.iframe);
					callback('resizedCallback',messageData);
					break;
				default:
					resizeIFrame();
					callback('resizedCallback',messageData);
				}
			}

			function hasSettings(iframeId){
				var retBool = true;

				if (!settings[iframeId]){
					retBool = false;
					warn(messageData.type + ' No settings for ' + iframeId + '. Message was: ' + msg);
				}

				return retBool;
			}

			function iFrameReadyMsgReceived(){
				for (var iframeId in settings){
					trigger('iFrame requested init',createOutgoingMsg(iframeId),document.getElementById(iframeId),iframeId);
				}
			}

			function firstRun() {
				settings[iframeId].firstRun = false;
			}

			var
				msg = event.data,
				messageData = {},
				iframeId = null;

			if('[iFrameResizerChild]Ready' === msg){
				iFrameReadyMsgReceived();
			} else if (isMessageForUs()){
				messageData = processMsg();
				iframeId    = logId = messageData.id;

				if (!isMessageFromMetaParent() && hasSettings(iframeId)){
					log(iframeId,'Received: '+msg);

					if ( checkIFrameExists() && isMessageFromIFrame() ){
						actionMsg();
					}
				}
			} else {
				info(iframeId,'Ignored: '+msg);
			}

		}


		function chkCallback(iframeId,funcName,val){
			var
				func = null,
				retVal = null;

			if(settings[iframeId]){
				func = settings[iframeId][funcName];

				if( 'function' === typeof func){
					retVal = func(val);
				} else {
					throw new TypeError(funcName+' on iFrame['+iframeId+'] is not a function');
				}
			}

			return retVal;
		}

		function closeIFrame(iframe){
			var iframeId = iframe.id;

			log(iframeId,'Removing iFrame: '+iframeId);
			iframe.parentNode.removeChild(iframe);
			chkCallback(iframeId,'closedCallback',iframeId);
			log(iframeId,'--');
			delete settings[iframeId];
		}

		function getPagePosition(iframeId){
			if(null === pagePosition){
				pagePosition = {
					x: (window.pageXOffset !== undefined) ? window.pageXOffset : document.documentElement.scrollLeft,
					y: (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop
				};
				log(iframeId,'Get page position: '+pagePosition.x+','+pagePosition.y);
			}
		}

		function setPagePosition(iframeId){
			if(null !== pagePosition){
				window.scrollTo(pagePosition.x,pagePosition.y);
				log(iframeId,'Set page position: '+pagePosition.x+','+pagePosition.y);
				unsetPagePosition();
			}
		}

		function unsetPagePosition(){
			pagePosition = null;
		}

		function resetIFrame(messageData){
			function reset(){
				setSize(messageData);
				trigger('reset','reset',messageData.iframe,messageData.id);
			}

			log(messageData.id,'Size reset requested by '+('init'===messageData.type?'host page':'iFrame'));
			getPagePosition(messageData.id);
			syncResize(reset,messageData,'reset');
		}

		function setSize(messageData){
			function setDimension(dimension){
				messageData.iframe.style[dimension] = messageData[dimension] + 'px';
				log(
					messageData.id,
					'IFrame (' + iframeId +
					') ' + dimension +
					' set to ' + messageData[dimension] + 'px'
				);
			}

			function chkZero(dimension){
				//FireFox sets dimension of hidden iFrames to zero.
				//So if we detect that set up an event to check for
				//when iFrame becomes visible.

				/* istanbul ignore next */  //Not testable in PhantomJS
				if (!hiddenCheckEnabled && '0' === messageData[dimension]){
					hiddenCheckEnabled = true;
					log(iframeId,'Hidden iFrame detected, creating visibility listener');
					fixHiddenIFrames();
				}
			}

			function processDimension(dimension){
				setDimension(dimension);
				chkZero(dimension);
			}

			var iframeId = messageData.iframe.id;

			if(settings[iframeId]){
				if( settings[iframeId].sizeHeight) { processDimension('height'); }
				if( settings[iframeId].sizeWidth ) { processDimension('width'); }
			}
		}

		function syncResize(func,messageData,doNotSync){
			/* istanbul ignore if */  //Not testable in PhantomJS
			if(doNotSync!==messageData.type && requestAnimationFrame){
				log(messageData.id,'Requesting animation frame');
				requestAnimationFrame(func);
			} else {
				func();
			}
		}

		function trigger(calleeMsg,msg,iframe,id){
			function postMessageToIFrame(){
				var target = settings[id].targetOrigin;
				log(id,'[' + calleeMsg + '] Sending msg to iframe['+id+'] ('+msg+') targetOrigin: '+target);
				iframe.contentWindow.postMessage( msgId + msg, target );
			}

			function iFrameNotFound(){
				info(id,'[' + calleeMsg + '] IFrame('+id+') not found');
				if(settings[id]) {
					delete settings[id];
				}
			}

			function chkAndSend(){
				if(iframe && 'contentWindow' in iframe && (null !== iframe.contentWindow)){ //Null test for PhantomJS
					postMessageToIFrame();
				} else {
					iFrameNotFound();
				}
			}

			id = id || iframe.id;

			if(settings[id]) {
				chkAndSend();
			}

		}

		function createOutgoingMsg(iframeId){
			return iframeId +
				':' + settings[iframeId].bodyMarginV1 +
				':' + settings[iframeId].sizeWidth +
				':' + settings[iframeId].log +
				':' + settings[iframeId].interval +
				':' + settings[iframeId].enablePublicMethods +
				':' + settings[iframeId].autoResize +
				':' + settings[iframeId].bodyMargin +
				':' + settings[iframeId].heightCalculationMethod +
				':' + settings[iframeId].bodyBackground +
				':' + settings[iframeId].bodyPadding +
				':' + settings[iframeId].tolerance +
				':' + settings[iframeId].inPageLinks +
				':' + settings[iframeId].resizeFrom +
				':' + settings[iframeId].widthCalculationMethod;
		}

		function setupIFrame(iframe,options){
			function setLimits(){
				function addStyle(style){
					if ((Infinity !== settings[iframeId][style]) && (0 !== settings[iframeId][style])){
						iframe.style[style] = settings[iframeId][style] + 'px';
						log(iframeId,'Set '+style+' = '+settings[iframeId][style]+'px');
					}
				}

				function chkMinMax(dimension){
					if (settings[iframeId]['min'+dimension]>settings[iframeId]['max'+dimension]){
						throw new Error('Value for min'+dimension+' can not be greater than max'+dimension);
					}
				}

				chkMinMax('Height');
				chkMinMax('Width');

				addStyle('maxHeight');
				addStyle('minHeight');
				addStyle('maxWidth');
				addStyle('minWidth');
			}

			function newId(){
				var id = ((options && options.id) || defaults.id + count++);
				if  (null!==document.getElementById(id)){
					id = id + count++;
				}
				return id;
			}

			function ensureHasId(iframeId){
				logId=iframeId;
				if (''===iframeId){
					iframe.id = iframeId =  newId();
					logEnabled = (options || {}).log;
					logId=iframeId;
					log(iframeId,'Added missing iframe ID: '+ iframeId +' (' + iframe.src + ')');
				}


				return iframeId;
			}

			function setScrolling(){
				log(iframeId,'IFrame scrolling ' + (settings[iframeId].scrolling ? 'enabled' : 'disabled') + ' for ' + iframeId);
				iframe.style.overflow = false === settings[iframeId].scrolling ? 'hidden' : 'auto';
				iframe.scrolling      = false === settings[iframeId].scrolling ? 'no' : 'yes';
			}

			//The V1 iFrame script expects an int, where as in V2 expects a CSS
			//string value such as '1px 3em', so if we have an int for V2, set V1=V2
			//and then convert V2 to a string PX value.
			function setupBodyMarginValues(){
				if (('number'===typeof(settings[iframeId].bodyMargin)) || ('0'===settings[iframeId].bodyMargin)){
					settings[iframeId].bodyMarginV1 = settings[iframeId].bodyMargin;
					settings[iframeId].bodyMargin   = '' + settings[iframeId].bodyMargin + 'px';
				}
			}

			function checkReset(){
				// Reduce scope of firstRun to function, because IE8's JS execution
				// context stack is borked and this value gets externally
				// changed midway through running this function!!!
				var
					firstRun           = settings[iframeId].firstRun,
					resetRequertMethod = settings[iframeId].heightCalculationMethod in resetRequiredMethods;

				if (!firstRun && resetRequertMethod){
					resetIFrame({iframe:iframe, height:0, width:0, type:'init'});
				}
			}

			function setupIFrameObject(){
				if(Function.prototype.bind){ //Ignore unpolyfilled IE8.
					settings[iframeId].iframe.iFrameResizer = {

						close        : closeIFrame.bind(null,settings[iframeId].iframe),

						resize       : trigger.bind(null,'Window resize', 'resize', settings[iframeId].iframe),

						moveToAnchor : function(anchor){
							trigger('Move to anchor','moveToAnchor:'+anchor, settings[iframeId].iframe,iframeId);
						},

						sendMessage  : function(message){
							message = JSON.stringify(message);
							trigger('Send Message','message:'+message, settings[iframeId].iframe,iframeId);
						}
					};
				}
			}

			//We have to call trigger twice, as we can not be sure if all
			//iframes have completed loading when this code runs. The
			//event listener also catches the page changing in the iFrame.
			function init(msg){
				function iFrameLoaded(){
					trigger('iFrame.onload',msg,iframe);
					checkReset();
				}

				addEventListener(iframe,'load',iFrameLoaded);
				trigger('init',msg,iframe);
			}

			function checkOptions(options){
				if ('object' !== typeof options){
					throw new TypeError('Options is not an object');
				}
			}

			function copyOptions(options){
				for (var option in defaults) {
					if (defaults.hasOwnProperty(option)){
						settings[iframeId][option] = options.hasOwnProperty(option) ? options[option] : defaults[option];
					}
				}
			}

			function getTargetOrigin (remoteHost){
				return ('' === remoteHost || 'file://' === remoteHost) ? '*' : remoteHost;
			}

			function processOptions(options){
				options = options || {};
				settings[iframeId] = {
					firstRun	: true,
					iframe		: iframe,
					remoteHost	: iframe.src.split('/').slice(0,3).join('/')
				};

				checkOptions(options);
				copyOptions(options);

				settings[iframeId].targetOrigin = true === settings[iframeId].checkOrigin ? getTargetOrigin(settings[iframeId].remoteHost) : '*';
			}

			function beenHere(){
				return (iframeId in settings && 'iFrameResizer' in iframe);
			}

			var iframeId = ensureHasId(iframe.id);

			if (!beenHere()){
				processOptions(options);
				setScrolling();
				setLimits();
				setupBodyMarginValues();
				init(createOutgoingMsg(iframeId));
				setupIFrameObject();
			} else {
				warn(iframeId,'Ignored iFrame, already setup.');
			}
		}

		function debouce(fn,time){
			if (null === timer){
				timer = setTimeout(function(){
					timer = null;
					fn();
				}, time);
			}
		}

		/* istanbul ignore next */  //Not testable in PhantomJS
		function fixHiddenIFrames(){
			function checkIFrames(){
				function checkIFrame(settingId){
					function chkDimension(dimension){
						return '0px' === settings[settingId].iframe.style[dimension];
					}

					function isVisible(el) {
						return (null !== el.offsetParent);
					}

					if (isVisible(settings[settingId].iframe) && (chkDimension('height') || chkDimension('width'))){
						trigger('Visibility change', 'resize', settings[settingId].iframe,settingId);
					}
				}

				for (var settingId in settings){
					checkIFrame(settingId);
				}
			}

			function mutationObserved(mutations){
				log('window','Mutation observed: ' + mutations[0].target + ' ' + mutations[0].type);
				debouce(checkIFrames,16);
			}

			function createMutationObserver(){
				var
					target = document.querySelector('body'),

					config = {
						attributes            : true,
						attributeOldValue     : false,
						characterData         : true,
						characterDataOldValue : false,
						childList             : true,
						subtree               : true
					},

					observer = new MutationObserver(mutationObserved);

				observer.observe(target, config);
			}

			var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

			if (MutationObserver) createMutationObserver();
		}


		function resizeIFrames(event){
			function resize(){
				sendTriggerMsg('Window '+event,'resize');
			}

			log('window','Trigger event: '+event);
			debouce(resize,16);
		}

		/* istanbul ignore next */  //Not testable in PhantomJS
		function tabVisible() {
			function resize(){
				sendTriggerMsg('Tab Visable','resize');
			}

			if('hidden' !== document.visibilityState) {
				log('document','Trigger event: Visiblity change');
				debouce(resize,16);
			}
		}

		function sendTriggerMsg(eventName,event){
			function isIFrameResizeEnabled(iframeId) {
				return	'parent' === settings[iframeId].resizeFrom &&
						settings[iframeId].autoResize &&
						!settings[iframeId].firstRun;
			}

			for (var iframeId in settings){
				if(isIFrameResizeEnabled(iframeId)){
					trigger(eventName,event,document.getElementById(iframeId),iframeId);
				}
			}
		}

		function setupEventListeners(){
			addEventListener(window,'message',iFrameListener);

			addEventListener(window,'resize', function(){resizeIFrames('resize');});

			addEventListener(document,'visibilitychange',tabVisible);
			addEventListener(document,'-webkit-visibilitychange',tabVisible); //Andriod 4.4
			addEventListener(window,'focusin',function(){resizeIFrames('focus');}); //IE8-9
			addEventListener(window,'focus',function(){resizeIFrames('focus');});
		}


		function factory(){
			function init(options,element){
				function chkType(){
					if(!element.tagName) {
						throw new TypeError('Object is not a valid DOM element');
					} else if ('IFRAME' !== element.tagName.toUpperCase()) {
						throw new TypeError('Expected <IFRAME> tag, found <'+element.tagName+'>');
					}
				}

				if(element) {
					chkType();
					setupIFrame(element, options);
					iFrames.push(element);
				}
			}

			var iFrames;

			setupRequestAnimationFrame();
			setupEventListeners();

			return function iFrameResizeF(options,target){
				iFrames = []; //Only return iFrames past in on this call

				switch (typeof(target)){
				case 'undefined':
				case 'string':
					Array.prototype.forEach.call(
						document.querySelectorAll( target || 'iframe' ),
						init.bind(undefined, options)
					);
					break;
				case 'object':
					init(options,target);
					break;
				default:
					throw new TypeError('Unexpected data type ('+typeof(target)+')');
				}

				return iFrames;
			};
		}

		function createJQueryPublicMethod($){
			if (!$.fn) {
				info('','Unable to bind to jQuery, it is not fully loaded.');
			} else {
				$.fn.iFrameResize = function $iFrameResizeF(options) {
					function init(index, element) {
						setupIFrame(element, options);
					}

					return this.filter('iframe').each(init).end();
				};
			}
		}

		if (window.jQuery) { createJQueryPublicMethod(jQuery); }

		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module === 'object' && typeof module.exports === 'object') { //Node for browserfy
			module.exports = factory();
		} else {
			window.iFrameResize = window.iFrameResize || factory();
		}

	})(window || {});


/***/ },
/* 28 */
/***/ function(module, exports) {

	/*
	 * File: iframeResizer.contentWindow.js
	 * Desc: Include this file in any page being loaded into an iframe
	 *       to force the iframe to resize to the content size.
	 * Requires: iframeResizer.js on host page.
	 * Doc: https://github.com/davidjbradshaw/iframe-resizer
	 * Author: David J. Bradshaw - dave@bradshaw.net
	 * Contributor: Jure Mav - jure.mav@gmail.com
	 * Contributor: Ian Caunce - ian@hallnet.co.uk
	 */


	;(function(window, undefined) {
		'use strict';

		var
			autoResize            = true,
			base                  = 10,
			bodyBackground        = '',
			bodyMargin            = 0,
			bodyMarginStr         = '',
			bodyObserver          = null,
			bodyPadding           = '',
			calculateWidth        = false,
			doubleEventList       = {'resize':1,'click':1},
			eventCancelTimer      = 128,
			firstRun              = true,
			height                = 1,
			heightCalcModeDefault = 'bodyOffset',
			heightCalcMode        = heightCalcModeDefault,
			initLock              = true,
			initMsg               = '',
			inPageLinks           = {},
			interval              = 32,
			intervalTimer         = null,
			logging               = false,
			msgID                 = '[iFrameSizer]',  //Must match host page msg ID
			msgIdLen              = msgID.length,
			myID                  = '',
			observer              = null,
			resetRequiredMethods  = {max:1,min:1,bodyScroll:1,documentElementScroll:1},
			resizeFrom            = 'child',
			sendPermit            = true,
			target                = window.parent,
			targetOriginDefault   = '*',
			tolerance             = 0,
			triggerLocked         = false,
			triggerLockedTimer    = null,
			throttledTimer        = 16,
			width                 = 1,
			widthCalcModeDefault  = 'scroll',
			widthCalcMode         = widthCalcModeDefault,
			win                   = window,
			messageCallback       = function(){ warn('MessageCallback function not defined'); },
			readyCallback         = function(){},
			pageInfoCallback      = function(){},
			customCalcMethods     = {
				height: function(){
					warn('Custom height calculation function not defined');
					return document.documentElement.offsetHeight;
				}, 
				width: function(){
					warn('Custom width calculation function not defined');
					return document.body.scrollWidth;
				}
			};


		function addEventListener(el,evt,func){
			/* istanbul ignore else */ // Not testable in phantonJS
			if ('addEventListener' in window){
				el.addEventListener(evt,func, false);
			} else if ('attachEvent' in window){ //IE
				el.attachEvent('on'+evt,func);
			}
		}

		function removeEventListener(el,evt,func){
			/* istanbul ignore else */ // Not testable in phantonJS
			if ('removeEventListener' in window){
				el.removeEventListener(evt,func, false);
			} else if ('detachEvent' in window){ //IE
				el.detachEvent('on'+evt,func);
			}
		}

		function capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		//Based on underscore.js
		function throttle(func) {
			var
				context, args, result,
				timeout = null,
				previous = 0,
				later = function() {
					previous = getNow();
					timeout = null;
					result = func.apply(context, args);
					if (!timeout) {
						context = args = null;
					}
				};

			return function() {
				var now = getNow();

				if (!previous) {
					previous = now;
				}

				var remaining = throttledTimer - (now - previous);

				context = this;
				args = arguments;

				if (remaining <= 0 || remaining > throttledTimer) {
					if (timeout) {
						clearTimeout(timeout);
						timeout = null;
					}

					previous = now;
					result = func.apply(context, args);

					if (!timeout) {
						context = args = null;
					}

				} else if (!timeout) {
					timeout = setTimeout(later, remaining);
				}

				return result;
			};
		}

		var getNow = Date.now || function() {
			/* istanbul ignore next */ // Not testable in PhantonJS
			return new Date().getTime();
		};

		function formatLogMsg(msg){
			return msgID + '[' + myID + ']' + ' ' + msg;
		}

		function log(msg){
			if (logging && ('object' === typeof window.console)){
				console.log(formatLogMsg(msg));
			}
		}

		function warn(msg){
			if ('object' === typeof window.console){
				console.warn(formatLogMsg(msg));
			}
		}


		function init(){
			readDataFromParent();
			log('Initialising iFrame ('+location.href+')');
			readDataFromPage();
			setMargin();
			setBodyStyle('background',bodyBackground);
			setBodyStyle('padding',bodyPadding);
			injectClearFixIntoBodyElement();
			checkHeightMode();
			checkWidthMode();
			stopInfiniteResizingOfIFrame();
			setupPublicMethods();
			startEventListeners();
			inPageLinks = setupInPageLinks();
			sendSize('init','Init message from host page');
			readyCallback();
		}

		function readDataFromParent(){

			function strBool(str){
				return 'true' === str ? true : false;
			}

			var data = initMsg.substr(msgIdLen).split(':');

			myID               = data[0];
			bodyMargin         = (undefined !== data[1]) ? Number(data[1])   : bodyMargin; //For V1 compatibility
			calculateWidth     = (undefined !== data[2]) ? strBool(data[2])  : calculateWidth;
			logging            = (undefined !== data[3]) ? strBool(data[3])  : logging;
			interval           = (undefined !== data[4]) ? Number(data[4])   : interval;
			autoResize         = (undefined !== data[6]) ? strBool(data[6])  : autoResize;
			bodyMarginStr      = data[7];
			heightCalcMode     = (undefined !== data[8]) ? data[8]           : heightCalcMode;
			bodyBackground     = data[9];
			bodyPadding        = data[10];
			tolerance          = (undefined !== data[11]) ? Number(data[11]) : tolerance;
			inPageLinks.enable = (undefined !== data[12]) ? strBool(data[12]): false;
			resizeFrom         = (undefined !== data[13]) ? data[13]         : resizeFrom;
			widthCalcMode      = (undefined !== data[14]) ? data[14]         : widthCalcMode;
		}

		function readDataFromPage(){
			function readData(){
				var data = window.iFrameResizer;

				log('Reading data from page: ' + JSON.stringify(data));

				messageCallback     = ('messageCallback'         in data) ? data.messageCallback         : messageCallback;
				readyCallback       = ('readyCallback'           in data) ? data.readyCallback           : readyCallback;
				targetOriginDefault = ('targetOrigin'            in data) ? data.targetOrigin            : targetOriginDefault;
				heightCalcMode      = ('heightCalculationMethod' in data) ? data.heightCalculationMethod : heightCalcMode;
				widthCalcMode       = ('widthCalculationMethod'  in data) ? data.widthCalculationMethod  : widthCalcMode;
			}

			function setupCustomCalcMethods(calcMode, calcFunc){
				if ('function' === typeof calcMode) {
					log('Setup custom ' + calcFunc + 'CalcMethod');
					customCalcMethods[calcFunc] = calcMode;
					calcMode = 'custom';
				}

				return calcMode;
			}

			if(('iFrameResizer' in window) && (Object === window.iFrameResizer.constructor)) {
				readData();
				heightCalcMode = setupCustomCalcMethods(heightCalcMode, 'height');
				widthCalcMode  = setupCustomCalcMethods(widthCalcMode,  'width');
			}

			log('TargetOrigin for parent set to: ' + targetOriginDefault);
		}


		function chkCSS(attr,value){
			if (-1 !== value.indexOf('-')){
				warn('Negative CSS value ignored for '+attr);
				value='';
			}
			return value;
		}

		function setBodyStyle(attr,value){
			if ((undefined !== value) && ('' !== value) && ('null' !== value)){
				document.body.style[attr] = value;
				log('Body '+attr+' set to "'+value+'"');
			}
		}

		function setMargin(){
			//If called via V1 script, convert bodyMargin from int to str
			if (undefined === bodyMarginStr){
				bodyMarginStr = bodyMargin+'px';
			}

			setBodyStyle('margin',chkCSS('margin',bodyMarginStr));
		}

		function stopInfiniteResizingOfIFrame(){
			document.documentElement.style.height = '';
			document.body.style.height = '';
			log('HTML & body height set to "auto"');
		}


		function manageTriggerEvent(options){
			function handleEvent(){
				sendSize(options.eventName,options.eventType);
			}

			var listener = {
				add:    function(eventName){
					addEventListener(window,eventName,handleEvent);
				},
				remove: function(eventName){
					removeEventListener(window,eventName,handleEvent);
				}
			};

			if(options.eventNames && Array.prototype.map){
				options.eventName = options.eventNames[0];
				options.eventNames.map(listener[options.method]);
			} else {
				listener[options.method](options.eventName);
			}

			log(capitalizeFirstLetter(options.method) + ' event listener: ' + options.eventType);
		}

		function manageEventListeners(method){
			manageTriggerEvent({method:method, eventType: 'Animation Start',           eventNames: ['animationstart','webkitAnimationStart'] });
			manageTriggerEvent({method:method, eventType: 'Animation Iteration',       eventNames: ['animationiteration','webkitAnimationIteration'] });
			manageTriggerEvent({method:method, eventType: 'Animation End',             eventNames: ['animationend','webkitAnimationEnd'] });
			manageTriggerEvent({method:method, eventType: 'Input',                     eventName:  'input' });
			manageTriggerEvent({method:method, eventType: 'Mouse Up',                  eventName:  'mouseup' });
			manageTriggerEvent({method:method, eventType: 'Mouse Down',                eventName:  'mousedown' });
			manageTriggerEvent({method:method, eventType: 'Orientation Change',        eventName:  'orientationchange' });
			manageTriggerEvent({method:method, eventType: 'Print',                     eventName:  ['afterprint', 'beforeprint'] });
			manageTriggerEvent({method:method, eventType: 'Ready State Change',        eventName:  'readystatechange' });
			manageTriggerEvent({method:method, eventType: 'Touch Start',               eventName:  'touchstart' });
			manageTriggerEvent({method:method, eventType: 'Touch End',                 eventName:  'touchend' });
			manageTriggerEvent({method:method, eventType: 'Touch Cancel',              eventName:  'touchcancel' });
			manageTriggerEvent({method:method, eventType: 'Transition Start',          eventNames: ['transitionstart','webkitTransitionStart','MSTransitionStart','oTransitionStart','otransitionstart'] });
			manageTriggerEvent({method:method, eventType: 'Transition Iteration',      eventNames: ['transitioniteration','webkitTransitionIteration','MSTransitionIteration','oTransitionIteration','otransitioniteration'] });
			manageTriggerEvent({method:method, eventType: 'Transition End',            eventNames: ['transitionend','webkitTransitionEnd','MSTransitionEnd','oTransitionEnd','otransitionend'] });
			if('child' === resizeFrom){
				manageTriggerEvent({method:method, eventType: 'IFrame Resized',        eventName:  'resize' });
			}
		}

		function checkCalcMode(calcMode,calcModeDefault,modes,type){
			if (calcModeDefault !== calcMode){
				if (!(calcMode in modes)){
					warn(calcMode + ' is not a valid option for '+type+'CalculationMethod.');
					calcMode=calcModeDefault;
				}
				log(type+' calculation method set to "'+calcMode+'"');
			}

			return calcMode;
		}

		function checkHeightMode(){
			heightCalcMode = checkCalcMode(heightCalcMode,heightCalcModeDefault,getHeight,'height');
		}

		function checkWidthMode(){
			widthCalcMode = checkCalcMode(widthCalcMode,widthCalcModeDefault,getWidth,'width');
		}

		function startEventListeners(){
			if ( true === autoResize ) {
				manageEventListeners('add');
				setupMutationObserver();
			}
			else {
				log('Auto Resize disabled');
			}
		}

		function stopMsgsToParent(){
			log('Disable outgoing messages');
			sendPermit = false;
		}

		function removeMsgListener(){
			log('Remove event listener: Message');
			removeEventListener(window, 'message', receiver);
		}

		function disconnectMutationObserver(){
			if (null !== bodyObserver){
				/* istanbul ignore next */ // Not testable in PhantonJS
				bodyObserver.disconnect();
			}
		}

		function stopEventListeners(){
			manageEventListeners('remove');
			disconnectMutationObserver();
			clearInterval(intervalTimer);
		}

		function teardown(){
			stopMsgsToParent();
			removeMsgListener();
			if (true === autoResize) stopEventListeners();
		}

		function injectClearFixIntoBodyElement(){
			var clearFix = document.createElement('div');
			clearFix.style.clear   = 'both';
			clearFix.style.display = 'block'; //Guard against this having been globally redefined in CSS.
			document.body.appendChild(clearFix);
		}

		function setupInPageLinks(){

			function getPagePosition (){
				return {
					x: (window.pageXOffset !== undefined) ? window.pageXOffset : document.documentElement.scrollLeft,
					y: (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop
				};
			}

			function getElementPosition(el){
				var
					elPosition   = el.getBoundingClientRect(),
					pagePosition = getPagePosition();

				return {
					x: parseInt(elPosition.left,10) + parseInt(pagePosition.x,10),
					y: parseInt(elPosition.top,10)  + parseInt(pagePosition.y,10)
				};
			}

			function findTarget(location){
				function jumpToTarget(target){
					var jumpPosition = getElementPosition(target);

					log('Moving to in page link (#'+hash+') at x: '+jumpPosition.x+' y: '+jumpPosition.y);
					sendMsg(jumpPosition.y, jumpPosition.x, 'scrollToOffset'); // X&Y reversed at sendMsg uses height/width
				}

				var
					hash     = location.split('#')[1] || location, //Remove # if present
					hashData = decodeURIComponent(hash),
					target   = document.getElementById(hashData) || document.getElementsByName(hashData)[0];

				if (undefined !== target){
					jumpToTarget(target);
				} else {
					log('In page link (#' + hash + ') not found in iFrame, so sending to parent');
					sendMsg(0,0,'inPageLink','#'+hash);
				}
			}

			function checkLocationHash(){
				if ('' !== location.hash && '#' !== location.hash){
					findTarget(location.href);
				}
			}

			function bindAnchors(){
				function setupLink(el){
					function linkClicked(e){
						e.preventDefault();

						/*jshint validthis:true */
						findTarget(this.getAttribute('href'));
					}

					if ('#' !== el.getAttribute('href')){
						addEventListener(el,'click',linkClicked);
					}
				}

				Array.prototype.forEach.call( document.querySelectorAll( 'a[href^="#"]' ), setupLink );
			}

			function bindLocationHash(){
				addEventListener(window,'hashchange',checkLocationHash);
			}

			function initCheck(){ //check if page loaded with location hash after init resize
				setTimeout(checkLocationHash,eventCancelTimer);
			}

			function enableInPageLinks(){
				/* istanbul ignore else */ // Not testable in phantonJS
				if(Array.prototype.forEach && document.querySelectorAll){
					log('Setting up location.hash handlers');
					bindAnchors();
					bindLocationHash();
					initCheck();
				} else {
					warn('In page linking not fully supported in this browser! (See README.md for IE8 workaround)');
				}
			}

			if(inPageLinks.enable){
				enableInPageLinks();
			} else {
				log('In page linking not enabled');
			}

			return {
				findTarget:findTarget
			};
		}

		function setupPublicMethods(){
			log('Enable public methods');

			win.parentIFrame = {

				autoResize: function autoResizeF(resize){
					if (true === resize && false === autoResize) {
						autoResize=true;
						startEventListeners();
						//sendSize('autoResize','Auto Resize enabled');
					} else if (false === resize && true === autoResize) {
						autoResize=false;
						stopEventListeners();
					}

					return autoResize;
				},

				close: function closeF(){
					sendMsg(0,0,'close');
					teardown();
				},

				getId: function getIdF(){
					return myID;
				},

				getPageInfo: function getPageInfoF(callback){
					if ('function' === typeof callback){
						pageInfoCallback = callback;
						sendMsg(0,0,'pageInfo');
					} else {
						pageInfoCallback = function(){};
						sendMsg(0,0,'pageInfoStop');
					}
				},

				moveToAnchor: function moveToAnchorF(hash){
					inPageLinks.findTarget(hash);
				},

				reset: function resetF(){
					resetIFrame('parentIFrame.reset');
				},

				scrollTo: function scrollToF(x,y){
					sendMsg(y,x,'scrollTo'); // X&Y reversed at sendMsg uses height/width
				},

				scrollToOffset: function scrollToF(x,y){
					sendMsg(y,x,'scrollToOffset'); // X&Y reversed at sendMsg uses height/width
				},

				sendMessage: function sendMessageF(msg,targetOrigin){
					sendMsg(0,0,'message',JSON.stringify(msg),targetOrigin);
				},

				setHeightCalculationMethod: function setHeightCalculationMethodF(heightCalculationMethod){
					heightCalcMode = heightCalculationMethod;
					checkHeightMode();
				},

				setWidthCalculationMethod: function setWidthCalculationMethodF(widthCalculationMethod){
					widthCalcMode = widthCalculationMethod;
					checkWidthMode();
				},

				setTargetOrigin: function setTargetOriginF(targetOrigin){
					log('Set targetOrigin: '+targetOrigin);
					targetOriginDefault = targetOrigin;
				},

				size: function sizeF(customHeight, customWidth){
					var valString = ''+(customHeight?customHeight:'')+(customWidth?','+customWidth:'');
					//lockTrigger();
					sendSize('size','parentIFrame.size('+valString+')', customHeight, customWidth);
				}
			};
		}

		function initInterval(){
			if ( 0 !== interval ){
				log('setInterval: '+interval+'ms');
				intervalTimer = setInterval(function(){
					sendSize('interval','setInterval: '+interval);
				},Math.abs(interval));
			}
		}

		/* istanbul ignore next */  //Not testable in PhantomJS
		function setupBodyMutationObserver(){
			function addImageLoadListners(mutation) {
				function addImageLoadListener(element){
					if (false === element.complete) {
						log('Attach listeners to ' + element.src);
						element.addEventListener('load', imageLoaded, false);
						element.addEventListener('error', imageError, false);
						elements.push(element);
					}
				}

				if (mutation.type === 'attributes' && mutation.attributeName === 'src'){
					addImageLoadListener(mutation.target);
				} else if (mutation.type === 'childList'){
					Array.prototype.forEach.call(
						mutation.target.querySelectorAll('img'),
						addImageLoadListener
					);
				}
			}

			function removeFromArray(element){
				elements.splice(elements.indexOf(element),1);
			}

			function removeImageLoadListener(element){
				log('Remove listeners from ' + element.src);
				element.removeEventListener('load', imageLoaded, false);
				element.removeEventListener('error', imageError, false);
				removeFromArray(element);
			}

			function imageEventTriggered(event,type,typeDesc){
				removeImageLoadListener(event.target);
				sendSize(type, typeDesc + ': ' + event.target.src, undefined, undefined);
			}

			function imageLoaded(event) {
				imageEventTriggered(event,'imageLoad','Image loaded');
			}

			function imageError(event) {
				imageEventTriggered(event,'imageLoadFailed','Image load failed');
			}

			function mutationObserved(mutations) {
				sendSize('mutationObserver','mutationObserver: ' + mutations[0].target + ' ' + mutations[0].type);

				//Deal with WebKit asyncing image loading when tags are injected into the page
				mutations.forEach(addImageLoadListners);
			}

			function createMutationObserver(){
				var
					target = document.querySelector('body'),

					config = {
						attributes            : true,
						attributeOldValue     : false,
						characterData         : true,
						characterDataOldValue : false,
						childList             : true,
						subtree               : true
					};

				observer = new MutationObserver(mutationObserved);

				log('Create body MutationObserver');
				observer.observe(target, config);

				return observer;
			}

			var
				elements         = [],
				MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
				observer         = createMutationObserver();

			return {
				disconnect: function (){
					if ('disconnect' in observer){
						log('Disconnect body MutationObserver');
						observer.disconnect();
						elements.forEach(removeImageLoadListener);
					}
				}
			};
		}

		function setupMutationObserver(){
			var	forceIntervalTimer = 0 > interval;

			/* istanbul ignore if */ // Not testable in PhantomJS
			if (window.MutationObserver || window.WebKitMutationObserver){
				if (forceIntervalTimer) {
					initInterval();
				} else {
					bodyObserver = setupBodyMutationObserver();
				}
			} else {
				log('MutationObserver not supported in this browser!');
				initInterval();
			}
		}


		// document.documentElement.offsetHeight is not reliable, so
		// we have to jump through hoops to get a better value.
		function getComputedStyle(prop,el) {
			/* istanbul ignore next */  //Not testable in PhantomJS
			function convertUnitsToPxForIE8(value) {
				var PIXEL = /^\d+(px)?$/i;

				if (PIXEL.test(value)) {
					return parseInt(value,base);
				}

				var
					style = el.style.left,
					runtimeStyle = el.runtimeStyle.left;

				el.runtimeStyle.left = el.currentStyle.left;
				el.style.left = value || 0;
				value = el.style.pixelLeft;
				el.style.left = style;
				el.runtimeStyle.left = runtimeStyle;

				return value;
			}

			var retVal = 0;
			el =  el || document.body;

			/* istanbul ignore else */ // Not testable in phantonJS
			if (('defaultView' in document) && ('getComputedStyle' in document.defaultView)) {
				retVal = document.defaultView.getComputedStyle(el, null);
				retVal = (null !== retVal) ? retVal[prop] : 0;
			} else {//IE8
				retVal =  convertUnitsToPxForIE8(el.currentStyle[prop]);
			}

			return parseInt(retVal,base);
		}

		function chkEventThottle(timer){
			if(timer > throttledTimer/2){
				throttledTimer = 2*timer;
				log('Event throttle increased to ' + throttledTimer + 'ms');
			}
		}

		//Idea from https://github.com/guardian/iframe-messenger
		function getMaxElement(side,elements) {
			var
				elementsLength = elements.length,
				elVal          = 0,
				maxVal         = 0,
				Side           = capitalizeFirstLetter(side),
				timer          = getNow();

			for (var i = 0; i < elementsLength; i++) {
				elVal = elements[i].getBoundingClientRect()[side] + getComputedStyle('margin'+Side,elements[i]);
				if (elVal > maxVal) {
					maxVal = elVal;
				}
			}

			timer = getNow() - timer;

			log('Parsed '+elementsLength+' HTML elements');
			log('Element position calculated in ' + timer + 'ms');

			chkEventThottle(timer);

			return maxVal;
		}

		function getAllMeasurements(dimention){
			return [
				dimention.bodyOffset(),
				dimention.bodyScroll(),
				dimention.documentElementOffset(),
				dimention.documentElementScroll()
			];
		}

		function getTaggedElements(side,tag){
			function noTaggedElementsFound(){
				warn('No tagged elements ('+tag+') found on page');
				return height; //current height
			}

			var elements = document.querySelectorAll('['+tag+']');

			return 0 === elements.length ?  noTaggedElementsFound() : getMaxElement(side,elements);
		}

		function getAllElements(){
			return document.querySelectorAll('body *');
		}

		var
			getHeight = {
				bodyOffset: function getBodyOffsetHeight(){
					return  document.body.offsetHeight + getComputedStyle('marginTop') + getComputedStyle('marginBottom');
				},

				offset: function(){
					return getHeight.bodyOffset(); //Backwards compatability
				},

				bodyScroll: function getBodyScrollHeight(){
					return document.body.scrollHeight;
				},

				custom: function getCustomWidth(){
					return customCalcMethods.height();
				},

				documentElementOffset: function getDEOffsetHeight(){
					return document.documentElement.offsetHeight;
				},

				documentElementScroll: function getDEScrollHeight(){
					return document.documentElement.scrollHeight;
				},

				max: function getMaxHeight(){
					return Math.max.apply(null,getAllMeasurements(getHeight));
				},

				min: function getMinHeight(){
					return Math.min.apply(null,getAllMeasurements(getHeight));
				},

				grow: function growHeight(){
					return getHeight.max(); //Run max without the forced downsizing
				},

				lowestElement: function getBestHeight(){
					return Math.max(getHeight.bodyOffset(), getMaxElement('bottom',getAllElements()));
				},

				taggedElement: function getTaggedElementsHeight(){
					return getTaggedElements('bottom','data-iframe-height');
				}
			},

			getWidth = {
				bodyScroll: function getBodyScrollWidth(){
					return document.body.scrollWidth;
				},

				bodyOffset: function getBodyOffsetWidth(){
					return document.body.offsetWidth;
				},

				custom: function getCustomWidth(){
					return customCalcMethods.width();
				},

				documentElementScroll: function getDEScrollWidth(){
					return document.documentElement.scrollWidth;
				},

				documentElementOffset: function getDEOffsetWidth(){
					return document.documentElement.offsetWidth;
				},

				scroll: function getMaxWidth(){
					return Math.max(getWidth.bodyScroll(), getWidth.documentElementScroll());
				},

				max: function getMaxWidth(){
					return Math.max.apply(null,getAllMeasurements(getWidth));
				},

				min: function getMinWidth(){
					return Math.min.apply(null,getAllMeasurements(getWidth));
				},

				rightMostElement: function rightMostElement(){
					return getMaxElement('right', getAllElements());
				},

				taggedElement: function getTaggedElementsWidth(){
					return getTaggedElements('right', 'data-iframe-width');
				}
			};


		function sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth){

			function resizeIFrame(){
				height = currentHeight;
				width  = currentWidth;

				sendMsg(height,width,triggerEvent);
			}

			function isSizeChangeDetected(){
				function checkTolarance(a,b){
					var retVal = Math.abs(a-b) <= tolerance;
					return !retVal;
				}

				currentHeight = (undefined !== customHeight)  ? customHeight : getHeight[heightCalcMode]();
				currentWidth  = (undefined !== customWidth )  ? customWidth  : getWidth[widthCalcMode]();

				return	checkTolarance(height,currentHeight) || (calculateWidth && checkTolarance(width,currentWidth));
			}

			function isForceResizableEvent(){
				return !(triggerEvent in {'init':1,'interval':1,'size':1});
			}

			function isForceResizableCalcMode(){
				return (heightCalcMode in resetRequiredMethods) || (calculateWidth && widthCalcMode in resetRequiredMethods);
			}

			function logIgnored(){
				log('No change in size detected');
			}

			function checkDownSizing(){
				if (isForceResizableEvent() && isForceResizableCalcMode()){
					resetIFrame(triggerEventDesc);
				} else if (!(triggerEvent in {'interval':1})){
					logIgnored();
				}
			}

			var	currentHeight,currentWidth;

			if (isSizeChangeDetected() || 'init' === triggerEvent){
				lockTrigger();
				resizeIFrame();
			} else {
				checkDownSizing();
			}
		}

		var sizeIFrameThrottled = throttle(sizeIFrame);

		function sendSize(triggerEvent, triggerEventDesc, customHeight, customWidth){
			function recordTrigger(){
				if (!(triggerEvent in {'reset':1,'resetPage':1,'init':1})){
					log( 'Trigger event: ' + triggerEventDesc );
				}
			}

			function isDoubleFiredEvent(){
				return  triggerLocked && (triggerEvent in doubleEventList);
			}

			if (!isDoubleFiredEvent()){
				recordTrigger();
				sizeIFrameThrottled(triggerEvent, triggerEventDesc, customHeight, customWidth);
			} else {
				log('Trigger event cancelled: '+triggerEvent);
			}
		}

		function lockTrigger(){
			if (!triggerLocked){
				triggerLocked = true;
				log('Trigger event lock on');
			}
			clearTimeout(triggerLockedTimer);
			triggerLockedTimer = setTimeout(function(){
				triggerLocked = false;
				log('Trigger event lock off');
				log('--');
			},eventCancelTimer);
		}

		function triggerReset(triggerEvent){
			height = getHeight[heightCalcMode]();
			width  = getWidth[widthCalcMode]();

			sendMsg(height,width,triggerEvent);
		}

		function resetIFrame(triggerEventDesc){
			var hcm = heightCalcMode;
			heightCalcMode = heightCalcModeDefault;

			log('Reset trigger event: ' + triggerEventDesc);
			lockTrigger();
			triggerReset('reset');

			heightCalcMode = hcm;
		}

		function sendMsg(height,width,triggerEvent,msg,targetOrigin){
			function setTargetOrigin(){
				if (undefined === targetOrigin){
					targetOrigin = targetOriginDefault;
				} else {
					log('Message targetOrigin: '+targetOrigin);
				}
			}

			function sendToParent(){
				var
					size  = height + ':' + width,
					message = myID + ':' +  size + ':' + triggerEvent + (undefined !== msg ? ':' + msg : '');

				log('Sending message to host page (' + message + ')');
				target.postMessage( msgID + message, targetOrigin);
			}

			if(true === sendPermit){
				setTargetOrigin();
				sendToParent();
			}
		}

		function receiver(event) {
			function isMessageForUs(){
				return msgID === (''+event.data).substr(0,msgIdLen); //''+ Protects against non-string messages
			}

			function initFromParent(){
				function fireInit(){
					initMsg = event.data;
					target  = event.source;

					init();
					firstRun = false;
					setTimeout(function(){ initLock = false;},eventCancelTimer);
				}

				if (document.body){
					fireInit();
				} else {
					log('Waiting for page ready');
					addEventListener(window,'readystatechange',initFromParent);
				}
			}

			function resetFromParent(){
				if (!initLock){
					log('Page size reset by host page');
					triggerReset('resetPage');
				} else {
					log('Page reset ignored by init');
				}
			}

			function resizeFromParent(){
				sendSize('resizeParent','Parent window requested size check');
			}

			function moveToAnchor(){
				var anchor = getData();
				inPageLinks.findTarget(anchor);
			}

			function getMessageType(){
				return event.data.split(']')[1].split(':')[0];
			}

			function getData(){
				return event.data.substr(event.data.indexOf(':')+1);
			}

			function isMiddleTier(){
				return ('iFrameResize' in window);
			}

			function messageFromParent(){
				var msgBody = getData();

				log('MessageCallback called from parent: ' + msgBody );
				messageCallback(JSON.parse(msgBody));
				log(' --');
			}

			function pageInfoFromParent(){
				var msgBody = getData();
				log('PageInfoFromParent called from parent: ' + msgBody );
				pageInfoCallback(JSON.parse(msgBody));
				log(' --');
			}

			function isInitMsg(){
				//Test if this message is from a child below us. This is an ugly test, however, updating
				//the message format would break backwards compatibity.
				return event.data.split(':')[2] in {'true':1,'false':1};
			}

			function callFromParent(){
				switch (getMessageType()){
				case 'reset':
					resetFromParent();
					break;
				case 'resize':
					resizeFromParent();
					break;
				case 'inPageLink':
				case 'moveToAnchor':
					moveToAnchor();
					break;
				case 'message':
					messageFromParent();
					break;
				case 'pageInfo':
					pageInfoFromParent();
					break;
				default:
					if (!isMiddleTier() && !isInitMsg()){
						warn('Unexpected message ('+event.data+')');
					}
				}
			}

			function processMessage(){
				if (false === firstRun) {
					callFromParent();
				} else if (isInitMsg()) {
					initFromParent();
				} else {
					log('Ignored message of type "' + getMessageType() + '". Received before initialization.');
				}
			}

			if (isMessageForUs()){
				processMessage();
			}
		}

		//Normally the parent kicks things off when it detects the iFrame has loaded.
		//If this script is async-loaded, then tell parent page to retry init.
		function chkLateLoaded(){
			if('loading' !== document.readyState){
				window.parent.postMessage('[iFrameResizerChild]Ready','*');
			}
		}

		addEventListener(window, 'message', receiver);
		chkLateLoaded();

		

	})(window || {});


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(5);

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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _brandColors = __webpack_require__(31);

	var _brandColors2 = _interopRequireDefault(_brandColors);

	var _onResize = __webpack_require__(23);

	var _onResize2 = _interopRequireDefault(_onResize);

	var _jquery = __webpack_require__(5);

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
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _googlePlaces = __webpack_require__(33);

	var _googlePlaces2 = _interopRequireDefault(_googlePlaces);

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _inputBlur = __webpack_require__(20);

	var _inputBlur2 = _interopRequireDefault(_inputBlur);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _inputBlur2.default)();

	var fieldMap = {
	  'input#edit-current-pass': 'current_pass',
	  'input#edit-pass-pass1': 'pass1',
	  'input#edit-pass-pass2': 'pass2',
	  'input#edit-mail': 'field_mail',
	  '#edit-field-contact-number input': 'field_contact_number',
	  '#edit-field-marketing-optin input': 'field_marketing_optin',
	  '#edit-field-uk-athletics-number input': 'field_uk_athletics_number',
	  '#edit-field-medical-conditions select': 'field_medical_conditions',
	  '#edit-field-medical-conditions-other textarea': 'field_medical_conditions_other',
	  '#edit-field-medications textarea': 'field_medications',
	  '#edit-field-allergies textarea': 'field_allergies',
	  '#edit-field-agree-share-medical-info input': 'field_agree_share_medical_info',
	  '#edit-field-address-line-1 input': 'field_address_line_1',
	  '#edit-field-address-line-2 input': 'field_address_line_2',
	  '#edit-field-address-city input': 'field_address_city',
	  '#edit-field-address-state input': 'field_address_state',
	  '#edit-field-address-postcode input': 'field_address_postcode',
	  '#edit-field-region select': 'field_region',
	  '#edit-field-address-country select': 'field_address_country'
	};

	exports.default = function () {
	  var selector = '.v-element.vs-user-profile';

	  if (!(0, _jquery2.default)(selector).length) {
	    return;
	  }

	  new _vue2.default({
	    el: selector,
	    compiled: function compiled() {
	      // Only require password id drupal form edit-current-pass element exists
	      this.require_password = !!(0, _jquery2.default)('input#edit-current-pass').length;

	      this.bindAutocomplete();
	      this.bindLists();
	      this.populateLists();
	      this.setValues();
	      this.bindValues();
	    },
	    ready: function ready() {
	      this.$el.classList.add('v-element--ready');
	    },

	    methods: {

	      /**
	       * Update chosen value based on model
	       */
	      updateChosen: function updateChosen() {
	        window.setTimeout(function () {
	          (0, _jquery2.default)('select').trigger("chosen:updated");
	        }, 0);
	      },


	      /**
	       * Convert lists key to text
	       */
	      getListText: function getListText(field, key) {
	        if (!key.length) {
	          return '';
	        }
	        return (0, _jquery2.default)('[name=' + field + ']').find('option[value=' + key + ']').text();
	      },
	      bindValues: function bindValues() {
	        var $el = (0, _jquery2.default)(this);
	        var name = $el.attr('name');

	        for (var _selector in fieldMap) {
	          var field = fieldMap[_selector];
	          if (this.profile[field]) {
	            (0, _jquery2.default)('[name=' + field + ']').addClass('vs-form-control--not-empty');
	          }
	        }
	      },
	      bindAutocomplete: function bindAutocomplete() {
	        var _this = this;

	        var acField = (0, _jquery2.default)('#google-autocomplete').get(0);

	        (0, _googlePlaces2.default)(acField, function (p) {
	          _this.profile.field_address_line_1 = p.long('route') + ' ' + p.long('street_number');
	          _this.profile.field_address_city = p.short('locality');
	          _this.profile.field_address_country = p.short('country');
	          _this.profile.field_address_state = p.short('administrative_area_level_1');
	          _this.profile.field_address_postcode = p.short('postal_code');

	          _this.updateChosen();
	        });
	      },


	      /**
	       * Because of a conflict with chosen and vue v-model is not updated
	       */
	      bindLists: function bindLists() {
	        var self = this;
	        (0, _jquery2.default)('select').on("change", function () {
	          var $el = (0, _jquery2.default)(this);
	          var name = $el.attr('name');

	          for (var _selector2 in fieldMap) {
	            var field = fieldMap[_selector2];
	            if (field == name) {
	              self.profile[field] = $el.val();
	            }
	          }
	        });
	      },
	      populateLists: function populateLists() {
	        for (var _selector3 in fieldMap) {
	          if (_selector3.indexOf(' select') !== -1) {
	            var field = fieldMap[_selector3];
	            var $options = (0, _jquery2.default)(_selector3).find('> option').clone();

	            (0, _jquery2.default)('[name=' + field + ']').append($options);
	          }
	        }
	      },


	      /**
	       * Get values from drupal form into vue model
	       */
	      setValues: function setValues() {
	        for (var _selector4 in fieldMap) {
	          var field = fieldMap[_selector4];
	          var element = (0, _jquery2.default)(_selector4);
	          var value = element.val();

	          if (element.is(':checkbox')) {
	            value = element.prop('checked');
	          }

	          this.profile[field] = value;
	        }
	      },


	      /**
	       * Apply vue model values to drupal form
	       */
	      applyValues: function applyValues() {
	        for (var _selector5 in fieldMap) {
	          var field = fieldMap[_selector5];
	          var element = (0, _jquery2.default)(_selector5);
	          var value = this.profile[field];
	          element.val(value);

	          if (element.is(':checkbox')) {
	            element.prop('checked', value);
	          }
	        }
	      },
	      edit: function edit(op) {
	        _vue2.default.util.extend(this.profile_clone, this.profile);
	        this[op] = true;
	      },
	      cancel: function cancel(op) {
	        _vue2.default.util.extend(this.profile, this.profile_clone);
	        this[op] = false;
	      },
	      submit: function submit() {
	        this.applyValues();
	        var form = (0, _jquery2.default)('.vs-user-profile--form-drupal form').submit();
	      }
	    },
	    data: {
	      edit_mode: false,
	      password_mode: false,
	      require_password: true,
	      address_manual: false,
	      profile_clone: {},
	      profile: {
	        current_pass: '',
	        pass1: '',
	        pass2: '',
	        field_mail: '',
	        field_allergies: '',
	        field_medications: '',
	        field_contact_number: '',
	        field_marketing_optin: '',
	        field_uk_athletics_number: '',
	        field_medical_conditions_other: '',
	        field_agree_share_medical_info: '',
	        field_address_line_1: '',
	        field_address_line_2: '',
	        field_address_city: '',
	        field_address_state: '',
	        field_address_postcode: '',
	        field_region: [],
	        field_address_country: [],
	        field_medical_conditions: []
	      }
	    }
	  });
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isInited = false;
	var toBind = [];

	exports.default = function (el, cb) {
	  toBind.push({
	    element: el,
	    callback: cb
	  });

	  bind();
	};

	function bind() {
	  if (!isInited) {
	    return;
	  }

	  var _loop = function _loop(i) {
	    var bind = toBind[i];
	    var ac = new google.maps.places.Autocomplete(bind.element, { types: ['geocode'] });

	    ac.addListener('place_changed', function () {
	      var place = ac.getPlace();
	      var addr = {};

	      addr.long = function (name) {
	        return addr[name] && addr[name].long_name ? addr[name].long_name : '';
	      };

	      addr.short = function (name) {
	        return addr[name] && addr[name].short_name ? addr[name].short_name : '';
	      };

	      if (!place.address_components) {
	        return;
	      }

	      for (var i = 0; i < place.address_components.length; i++) {
	        var addressType = place.address_components[i].types[0];
	        addr[addressType] = place.address_components[i];
	      }

	      bind.callback(addr);
	    });

	    toBind.splice(i, 1);
	  };

	  for (var i = toBind.length - 1; i > -1; i--) {
	    _loop(i);
	  }
	}

	// Clean me up

	addLib();

	function addLib() {
	  var callback = 'initPlacesAutocomplete'; // Needs to be a global function
	  var key = 'AIzaSyA8cMG-CBDDRy-W2nS6yAN3rr41Mx4PhE8'; // TODO move to Drupal.settings somewhere!!!
	  var src = 'https://maps.googleapis.com/maps/api/js?key=' + key + '&libraries=places&callback=' + callback;

	  (0, _jquery2.default)('body').append('<script src="' + src + '"></script>');
	}

	window.initPlacesAutocomplete = function () {
	  ;
	  isInited = true;
	  bind();
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _inputBlur = __webpack_require__(20);

	var _inputBlur2 = _interopRequireDefault(_inputBlur);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _inputBlur2.default)();

	var fieldMap = {
	  'input#edit-name': 'name',
	  'input#edit-pass': 'password'
	};

	exports.default = function () {
	  var selector = '.v-element.vs-user-login';

	  if (!(0, _jquery2.default)(selector).length) {
	    return;
	  }

	  new _vue2.default({
	    el: selector,
	    compiled: function compiled() {
	      this.setValues();
	      this.bindValues();
	    },
	    ready: function ready() {
	      this.$el.classList.add('v-element--ready');
	    },

	    methods: {

	      /**
	       * Get values from drupal form into vue model
	       */
	      setValues: function setValues() {
	        for (var _selector in fieldMap) {
	          var field = fieldMap[_selector];

	          this.profile[field] = (0, _jquery2.default)(_selector).val();
	        }
	      },
	      bindValues: function bindValues() {
	        var $el = (0, _jquery2.default)(this);
	        var name = $el.attr('name');

	        for (var _selector2 in fieldMap) {
	          var field = fieldMap[_selector2];
	          if (this.profile[field]) {
	            (0, _jquery2.default)('[name=' + field + ']').addClass('vs-form-control--not-empty');
	          }
	        }
	      },


	      /**
	       * Apply vue model values to drupal form
	       */
	      applyValues: function applyValues() {
	        for (var _selector3 in fieldMap) {
	          var field = fieldMap[_selector3];
	          var value = this.profile[field];

	          (0, _jquery2.default)(_selector3).val(value);
	        }
	      },
	      submit: function submit() {
	        this.applyValues();
	        var form = (0, _jquery2.default)('.vs-user-login--form-drupal form').submit();
	      }
	    },
	    data: {
	      profile: {
	        name: '',
	        password: ''
	      }
	    }
	  });
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _googlePlaces = __webpack_require__(33);

	var _googlePlaces2 = _interopRequireDefault(_googlePlaces);

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _inputBlur = __webpack_require__(20);

	var _inputBlur2 = _interopRequireDefault(_inputBlur);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _inputBlur2.default)();

	var fieldMap = {
	  'input#edit-mail': 'field_mail',
	  'input#edit-mail-confirm': 'field_confirm_mail',
	  'input#edit-pass-pass1': 'pass1',
	  'input#edit-pass-pass2': 'pass2',
	  '#edit-field-first-name input': 'field_first_name',
	  '#edit-field-last-name input': 'field_last_name',
	  '#edit-field-gender select': 'field_gender',
	  '.date-day select': 'field_date_day',
	  '.date-month select': 'field_date_month',
	  '.date-year select': 'field_date_year',
	  '#edit-field-marketing-optin input': 'field_marketing_optin',
	  '#edit-field-contact-number input': 'field_contact_number',
	  '#edit-field-address-line-1 input': 'field_address_line_1',
	  '#edit-field-address-line-2 input': 'field_address_line_2',
	  '#edit-field-address-city input': 'field_address_city',
	  '#edit-field-address-state input': 'field_address_state',
	  '#edit-field-address-postcode input': 'field_address_postcode',
	  '#edit-field-address-country select': 'field_address_country'
	};

	exports.default = function () {
	  var selector = '.v-element.vs-user-register';

	  if (!(0, _jquery2.default)(selector).length) {
	    return;
	  }

	  new _vue2.default({
	    el: selector,
	    compiled: function compiled() {

	      this.bindAutocomplete();
	      this.bindLists();
	      this.populateLists();
	      this.setValues();
	      this.bindValues();
	    },
	    ready: function ready() {
	      this.$el.classList.add('v-element--ready');
	    },

	    methods: {

	      /**
	       * Update chosen value based on model
	       */
	      updateChosen: function updateChosen() {
	        window.setTimeout(function () {
	          (0, _jquery2.default)('select').trigger("chosen:updated");
	        }, 0);
	      },
	      bindValues: function bindValues() {
	        var $el = (0, _jquery2.default)(this);
	        var name = $el.attr('name');

	        for (var _selector in fieldMap) {
	          var field = fieldMap[_selector];
	          if (this.profile[field]) {
	            (0, _jquery2.default)('[name=' + field + ']').addClass('vs-form-control--not-empty');
	          }
	        }
	      },
	      bindAutocomplete: function bindAutocomplete() {
	        var _this = this;

	        var acField = (0, _jquery2.default)('#google-autocomplete').get(0);

	        (0, _googlePlaces2.default)(acField, function (p) {
	          _this.profile.field_address_line_1 = p.long('route') + ' ' + p.long('street_number');
	          _this.profile.field_address_city = p.short('locality');
	          _this.profile.field_address_country = p.short('country');
	          _this.profile.field_address_state = p.short('administrative_area_level_1');
	          _this.profile.field_address_postcode = p.short('postal_code');

	          _this.updateChosen();
	        });
	      },


	      /**
	       * Because of a conflict with chosen and vue v-model is not updated
	       */
	      bindLists: function bindLists() {
	        var self = this;
	        (0, _jquery2.default)('select').on("change", function () {
	          var $el = (0, _jquery2.default)(this);
	          var name = $el.attr('name');

	          for (var _selector2 in fieldMap) {
	            var field = fieldMap[_selector2];
	            if (field == name) {
	              self.profile[field] = $el.val();
	            }
	          }
	        });
	      },
	      populateLists: function populateLists() {
	        for (var _selector3 in fieldMap) {
	          if (_selector3.indexOf(' select') !== -1) {
	            var field = fieldMap[_selector3];
	            var $options = (0, _jquery2.default)(_selector3).find('> option').clone();

	            (0, _jquery2.default)('[name=' + field + ']').append($options);
	          }
	        }
	      },


	      /**
	       * Get values from drupal form into vue model
	       */
	      setValues: function setValues() {
	        for (var _selector4 in fieldMap) {
	          var field = fieldMap[_selector4];
	          var element = (0, _jquery2.default)(_selector4);
	          var value = element.val();

	          if (element.is(':checkbox')) {
	            value = element.prop('checked');
	          }

	          this.profile[field] = value;
	        }
	      },


	      /**
	       * Apply vue model values to drupal form
	       */
	      applyValues: function applyValues() {
	        for (var _selector5 in fieldMap) {
	          var field = fieldMap[_selector5];
	          var element = (0, _jquery2.default)(_selector5);
	          var value = this.profile[field];
	          element.val(value);

	          if (element.is(':checkbox')) {
	            element.prop('checked', value);
	          }
	        }
	      },
	      submit: function submit() {
	        this.applyValues();
	        var form = (0, _jquery2.default)('.vs-user-login--form-drupal form').submit();
	      }
	    },
	    data: {
	      address_manual: false,
	      profile: {
	        current_pass: '',
	        pass1: '',
	        pass2: '',
	        field_mail: '',
	        field_confirm_mail: '',
	        field_first_name: '',
	        field_last_name: '',
	        field_date_day: '',
	        field_date_month: '',
	        field_date_year: '',
	        field_gender: '',
	        field_contact_number: '',
	        field_marketing_optin: '',
	        field_address_line_1: '',
	        field_address_line_2: '',
	        field_address_city: '',
	        field_address_state: '',
	        field_address_postcode: '',
	        field_address_country: []
	      }
	    }
	  });
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  share();
	  hrefCopy();
	};

	function share() {

	  (0, _jquery2.default)('.vs-share-button').click(function (e) {
	    if ((0, _jquery2.default)(this).find('.vs-share-button__icon-share--active').length) {
	      (0, _jquery2.default)(this).find('.vs-share-button__icon-share').removeClass('vs-share-button__icon-share--active');
	      (0, _jquery2.default)(this).find('.vs-share-button__social-links').removeClass('vs-share-button__social-links--active');
	      (0, _jquery2.default)(this).find('.vs-share-button__content').removeClass('vs-share-button__content--active');
	      (0, _jquery2.default)('body').removeClass('vs-mobile-sharer-open');
	    } else {
	      (0, _jquery2.default)(this).find('.vs-share-button__icon-share').addClass('vs-share-button__icon-share--active');
	      (0, _jquery2.default)(this).find('.vs-share-button__social-links').addClass('vs-share-button__social-links--active');
	      (0, _jquery2.default)(this).find('.vs-share-button__content').addClass('vs-share-button__content--active');
	      (0, _jquery2.default)('body').addClass('vs-mobile-sharer-open');
	    }
	    e.stopPropagation();
	  });

	  (0, _jquery2.default)('.vs-share-button__social-links .vs-share-button__icon-button').click(function (e) {
	    var w = 700;
	    var h = 350;
	    e.preventDefault();
	    window.open((0, _jquery2.default)(this).attr('href'), (0, _jquery2.default)(this).attr('title'), 'width=' + w + ',height=' + h + ',menubar=no,location=no,status=no');
	    e.stopPropagation();
	  });

	  (0, _jquery2.default)(document).click(function () {
	    (0, _jquery2.default)('.vs-share-button .vs-share-button__icon-share').removeClass('vs-share-button__icon-share--active');
	    (0, _jquery2.default)('.vs-share-button .vs-share-button__social-links').removeClass('vs-share-button__social-links--active');
	    (0, _jquery2.default)('.vs-share-button').removeClass('vs-share-button__content--active');
	    (0, _jquery2.default)('body').removeClass('vs-mobile-sharer-open');
	  });
	}

	function hrefCopy() {
	  var email = '';
	  var facebook = '';
	  var twitter = '';

	  (0, _jquery2.default)('.vs-share-button').click(function () {
	    email = (0, _jquery2.default)(this).find('.vs-share-button__icon-button.vs-share-button__icon-email').attr('href');
	    facebook = (0, _jquery2.default)(this).find('.vs-share-button__icon-button.vs-share-button__icon-facebook').attr('href');
	    twitter = (0, _jquery2.default)(this).find('.vs-share-button__icon-button.vs-share-button__icon-twitter').attr('href');

	    (0, _jquery2.default)('.vs-mobile-sharer .vs-share-button__icon-button.vs-share-button__icon-email').attr('href', email);
	    (0, _jquery2.default)('.vs-mobile-sharer .vs-share-button__icon-button.vs-share-button__icon-facebook').attr('href', facebook);
	    (0, _jquery2.default)('.vs-mobile-sharer .vs-share-button__icon-button.vs-share-button__icon-twitter').attr('href', twitter);
	  });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bootstrapNative = __webpack_require__(6);

	var _bootstrapNative2 = _interopRequireDefault(_bootstrapNative);

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  window.Drupal.behaviors.virginBootstrap = {
	    attach: function attach() {
	      (0, _jquery2.default)('[data-toggle="vs-collapse"]').not('.vs-collapse--found').each(function (idx, el) {
	        var $el = (0, _jquery2.default)(el);

	        $el.addClass('vs-collapse--found');
	        new _bootstrapNative2.default.Collapse(el, { duration: $el.attr('data-duration') });
	      });

	      (0, _jquery2.default)('[data-toggle="tab"], [data-toggle="pill"]').each(function (idx, el) {
	        var $el = (0, _jquery2.default)(el);
	        var duration = $el.attr('data-duration') && $el.getAttribute('data-duration') || false;

	        new _bootstrapNative2.default.Tab(el, { duration: duration });
	      });

	      (0, _jquery2.default)('[data-toggle="tooltip"]').each(function (idx, el) {
	        var $el = (0, _jquery2.default)(el);
	        var properties = {
	          animation: $el.attr('data-animation'),
	          placement: $el.attr('data-placement'),
	          duration: $el.attr('data-duration'),
	          delay: $el.attr('data-delay')
	        };

	        new _bootstrapNative2.default.Tooltip(el, properties);
	      });
	    }
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./about-yourself.svg": 39,
		"./banner-example.png": 40,
		"./basket.png": 41,
		"./basket.svg": 42,
		"./card-untimed-event-example1.png": 43,
		"./card-untimed-event-example1@2x.png": 44,
		"./card-untimed-event-example2.png": 45,
		"./card-untimed-event-example2@2x.png": 46,
		"./card-untimed-event-example3.png": 47,
		"./card-upcoming-example.png": 48,
		"./chosen-arrow-down.png": 49,
		"./chosen-arrow-up.png": 50,
		"./close.svg": 51,
		"./content-block-example.png": 52,
		"./content-block-example2.png": 53,
		"./default-header-banner.jpg": 54,
		"./event-photos.svg": 55,
		"./fans.svg": 56,
		"./festival-profile-header-example.png": 57,
		"./festival-profile-header-example@2x.png": 58,
		"./full-results.svg": 59,
		"./header-arrow-down.svg": 60,
		"./header-play-button.svg": 61,
		"./header-profile.jpg": 62,
		"./hero-event-card-example.png": 63,
		"./hero-event-card-example@2x.png": 64,
		"./introduction-example.png": 65,
		"./join-team.svg": 66,
		"./splash-page-pattern.png": 67,
		"./teaser-landscape-eight.png": 68,
		"./teaser-landscape-eight@2x.png": 69,
		"./teaser-landscape-five.png": 70,
		"./teaser-landscape-five@2x.png": 71,
		"./teaser-landscape-four.png": 72,
		"./teaser-landscape-four@2x.png": 73,
		"./teaser-landscape-one.png": 74,
		"./teaser-landscape-one@2x.png": 75,
		"./teaser-landscape-seven.png": 76,
		"./teaser-landscape-seven@2x.png": 77,
		"./teaser-landscape-six.png": 78,
		"./teaser-landscape-six@2x.png": 79,
		"./teaser-landscape-three.png": 80,
		"./teaser-landscape-three@2x.png": 81,
		"./teaser-landscape-two.png": 82,
		"./teaser-landscape-two@2x.png": 83,
		"./teaser-portrait-five.png": 84,
		"./teaser-portrait-five@2x.png": 85,
		"./teaser-portrait-four.png": 86,
		"./teaser-portrait-four@2x.png": 87,
		"./teaser-portrait-one.png": 88,
		"./teaser-portrait-one@2x.png": 89,
		"./teaser-portrait-three.png": 90,
		"./teaser-portrait-three@2x.png": 91,
		"./teaser-portrait-two.png": 92,
		"./teaser-portrait-two@2x.png": 93,
		"./teaser-square-one.png": 94,
		"./teaser-square-one@2x.png": 95,
		"./video-poster.png": 96,
		"./vs-claim-ticket-example.png": 97,
		"./vs-color-circle-1.svg": 98,
		"./vs-color-wave-1.png": 99,
		"./vs-color-wave-1.svg": 100,
		"./vs-cta-block/vs-color-wave-1.png": 101,
		"./vs-cta-block/vs-cta-block-1col-example1.png": 102,
		"./vs-cta-block/vs-cta-block-2col-example1.png": 103,
		"./vs-cta-block/vs-cta-block-2col-example2.png": 104,
		"./vs-cta-block/vs-cta-block-3col-example1.png": 105,
		"./vs-cta-block/vs-cta-block-3col-example2.png": 106,
		"./vs-cta-block/vs-cta-block-3col-example3.png": 107,
		"./vs-footer-uk-flag.png": 108,
		"./vs-footer-uk-flag@2x.png": 109,
		"./vs-footer-us-flag.png": 110,
		"./vs-footer-us-flag@2x.png": 111,
		"./vs-header-user.svg": 112,
		"./vs-logo-alternate.png": 113,
		"./vs-logo-alternate.svg": 114,
		"./vs-logo-red.png": 115,
		"./vs-logo-red@2x.png": 116,
		"./vs-logo-small.png": 117,
		"./vs-logo-small.svg": 118,
		"./vs-logo.png": 119,
		"./vs-logo.svg": 120,
		"./vs-package-card-example1.png": 121,
		"./vs-package-card-example2.png": 122,
		"./vs-promo-banner-example.png": 123,
		"./vs-region-select-uk.png": 124,
		"./vs-region-select-uk@2x.png": 125,
		"./vs-region-select-us.png": 126,
		"./vs-region-select-us@2x.png": 127,
		"./vs-ticket-card-example.png": 128
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
	webpackContext.id = 38;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/about-yourself.svg";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/banner-example.png";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/basket.png";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/basket.svg";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-untimed-event-example1.png";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-untimed-event-example1@2x.png";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-untimed-event-example2.png";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-untimed-event-example2@2x.png";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-untimed-event-example3.png";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/card-upcoming-example.png";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/chosen-arrow-down.png";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/chosen-arrow-up.png";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/close.svg";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/content-block-example.png";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/content-block-example2.png";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/default-header-banner.jpg";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/event-photos.svg";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/fans.svg";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/festival-profile-header-example.png";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/festival-profile-header-example@2x.png";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/full-results.svg";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/header-arrow-down.svg";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/header-play-button.svg";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/header-profile.jpg";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/hero-event-card-example.png";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/hero-event-card-example@2x.png";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/introduction-example.png";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/join-team.svg";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/splash-page-pattern.png";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-eight.png";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-eight@2x.png";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-five.png";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-five@2x.png";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-four.png";

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-four@2x.png";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-one.png";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-one@2x.png";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-seven.png";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-seven@2x.png";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-six.png";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-six@2x.png";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-three.png";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-three@2x.png";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-two.png";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-landscape-two@2x.png";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-portrait-five.png";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-portrait-five@2x.png";

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-portrait-four.png";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-portrait-four@2x.png";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-portrait-one.png";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-portrait-one@2x.png";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-portrait-three.png";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-portrait-three@2x.png";

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-portrait-two.png";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-portrait-two@2x.png";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-square-one.png";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/teaser-square-one@2x.png";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/video-poster.png";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-claim-ticket-example.png";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/vs-color-circle-1.svg";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-color-wave-1.png";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/vs-color-wave-1.svg";

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-color-wave-1.png";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-1col-example1.png";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-2col-example1.png";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-2col-example2.png";

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-3col-example1.png";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-3col-example2.png";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-cta-block-3col-example3.png";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-footer-uk-flag.png";

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-footer-uk-flag@2x.png";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-footer-us-flag.png";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-footer-us-flag@2x.png";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/vs-header-user.svg";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo-alternate.png";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/vs-logo-alternate.svg";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo-red.png";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo-red@2x.png";

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo-small.png";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/vs-logo-small.svg";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-logo.png";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/vs-logo.svg";

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-package-card-example1.png";

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-package-card-example2.png";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-promo-banner-example.png";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-region-select-uk.png";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-region-select-uk@2x.png";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-region-select-us.png";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-region-select-us@2x.png";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/img/vs-ticket-card-example.png";

/***/ }
/******/ ]);