import $ from '../lib/jquery';
import Headroom from 'headroom.js';
import onResize from '../helper/on-resize';

export default function () {
  let $body = $('body');
  let $header = $('.vs-header');

  userDropdown($body, $header);
  mobileMenu($body, $header);
  headerAnimation($body, $header);
}

/**
 * Activates the user dropdown
 *
 * @param $body
 * @param $header
 */
function userDropdown($body, $header) {
  let isOpen = false;
  let $menu = $header.find('.vs-user-menu');
  let $trigger = $menu.find('.vs-user-menu__trigger');
  let $dropdown = $menu.find('.vs-user-dropdown');

  // The user dropdown is closed if the user clicks anywhere in
  // the page but the dropdown area while the dropdown is open.
  $body.on('click', (e) => {
    if (isOpen && !$.contains($menu[0], e.target)) {
      close();
    }
  });

  // Toggle the dropdown states
  $trigger.on('click', (e) => {
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
  let $trigger = $body.find('.vs-menu-trigger');

  $trigger.on('click', () => {
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

  let header = document.querySelector('.vs-header');
  let subnav = document.querySelector('.vs-subnav');

  let getOffsets = function () {
    let offset = 274;
    let offsetDeviation = 55;

    if (window.innerWidth >= 767) {
      offset = 545;
      offsetDeviation = 60;
    }

    return {
      offset: offset,
      offset_deviation: offsetDeviation
    }
  };

  let vsSubnav = new Headroom(subnav, {
    offset: 545,
    tolerance: 0,
    classes: {
      initial:    "animated",               // when element is initialised
      pinned:     "vs-subnav",              // when scrolling up
      unpinned:   "vs-subnav--unpinned",    // when scrolling down
      top:        "vs-subnav--top",         // when above offset
      notTop:     "vs-subnav--not-top",     // when below offset
      bottom:     "vs-subnav--bottom",      // when at bottom of scroll area
      notBottom:  "vs-subnav--not-bottom"   // when not at bottom of scroll area
    }
  });

  let vsHeader = new Headroom(header, {
    offset: 20,
    tolerance: 5,
    classes: {
      initial:    "animated",               // when element is initialised
      pinned:     "vs-header--pinned",      // when scrolling up
      unpinned:   "vs-header--unpinned",    // when scrolling down
      top:        "vs-header--top",         // when above offset
      notTop:     "vs-header--not-top",     // when below offset
      bottom:     "vs-header--bottom",      // when at bottom of scroll area
      notBottom:  "vs-header--not-bottom"   // when not at bottom of scroll area
    },

    onUnpin: function() {
      $('.vs-subnav').removeClass('vs-subnav--pinned-on-main-nav');
      let offsets = getOffsets();
      vsSubnav.offset = offsets.offset;
    },

    onNotTop: function() {
      $('.vs-user-menu__trigger').removeClass('vs-user-menu__trigger--active');
      $('.vs-user-dropdown').removeClass('vs-user-dropdown--open');
    },

     onPin: function() {
       $('.vs-subnav').addClass('vs-subnav--pinned-on-main-nav');
       let offsets = getOffsets();
       vsSubnav.offset = offsets.offset - offsets.offset_deviation;
     }
  });

  onResize(() => {
    let scrollTop = $(document).scrollTop();
    let subNavWrapperPosition = $('.vs-region--subnav-wrapper').position();
    let mainNav = $('.vs-header');
    let mainNavPinned = mainNav.hasClass('vs-header--pinned');
    let offsets = getOffsets();

    // If main nav has class pinned remove its height from subnav distance to top
    if (subNavWrapperPosition){
      let offset = mainNavPinned ? scrollTop < subNavWrapperPosition.top - mainNav.height() : scrollTop < subNavWrapperPosition.top;

      if (offset) {
        vsSubnav.offset = offsets.offset;
        subnav.removeClass('vs-subnav--unpinned').removeClass('vs-subnav--not-top').removeClass('vs-subnav--pinned-on-main-nav');
      } else {
        vsSubnav.offset = offsets.offset - offsets.offset_deviation;
        subnav.addClass('vs-subnav--unpinned').addClass('vs-subnav--not-top');

        if (mainNavPinned) {
          subnav.addClass('vs-subnav--pinned-on-main-nav');
        }
      }
    }
  });


  vsHeader.init();
  if (subnav){
    console.log("entrei dudeeeee");
    vsSubnav.init();
  }
}
