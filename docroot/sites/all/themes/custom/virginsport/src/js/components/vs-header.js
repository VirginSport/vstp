import $ from '../lib/jquery';
import Headroom from 'headroom.js';
import onResize from '../helper/on-resize';

let mainNavOffset = 0;

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
  let $trigger = $menu.find('.vs-user-menu__trigger:not(.vs-user-menu__trigger--not-logged)');
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
 * Update main nav offset based on relative elements that might appear before it
 */
function updateMainNavOffset(vsHeader) {
  // Get non sticky notifications height
  var notificationsHeight = $('.vs-notification--not-sticky').innerHeight();

  // increment main nav offset with notifications height
  vsHeader.offset = mainNavOffset + notificationsHeight;
}

/**
 * Applies all required header animations
 *
 * @param $body
 * @param $header
 */
function headerAnimation() {

  // Dom elements for headroom
  let header = document.querySelector('.vs-header');
  var $header = $(header);
  let subnav = document.querySelector('.vs-subnav');

  if (!header) {
    return;
  }

  // Jquery elements
  let headerProperties = {
    offset: mainNavOffset,
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

    onNotTop: function() {
      $('.vs-user-menu__trigger').removeClass('vs-user-menu__trigger--active');
      $('.vs-user-dropdown').removeClass('vs-user-dropdown--open');
    }
  };

  if (subnav) {
    var $subnav = $(subnav);
    var $subnavContainer = $('.vs-header__nav-wrapper');
    var subnavCloneClass = 'vs-subnav--clone';
    var subnavPinnedClass = 'vs-subnav--pinned-on-main-nav';
    let subnavRegionColor = $subnav.closest('.vs-region').attr('data-vs-region-color');
    var subnavColorClass = `vs-region--gradient-${subnavRegionColor}`;

    // The deviation is the menu header height that sh$(`.vs-subnav:not(.${subnavCloneClass})`).offset().topould be contemplated as an increment to subnav offset
    var getOffsets = function () {
      // Get subnav distance to top
      return {
        offset: parseInt($(`.vs-subnav:not(.${subnavCloneClass})`).offset().top),
        offset_deviation: parseInt($(header).outerHeight())
      }
    };

    let offsets = getOffsets();

    // Headroom vs-subnav element
    var vsSubnav = new Headroom(subnav, {
      offset: offsets.offset,
      tolerance: 0,
      classes: {
        initial:    "animated",               // when element is initialised
        pinned:     "vs-subnav--pinned",              // when scrolling up
        unpinned:   "vs-subnav--unpinned",    // when scrolling down
        top:        "vs-subnav--top",         // when above offset
        notTop:     "vs-subnav--not-top",     // when below offset
        bottom:     "vs-subnav--bottom",      // when at bottom of scroll area
        notBottom:  "vs-subnav--not-bottom"   // when not at bottom of scroll area
      },
      onTop: function() {
        // Remove floating element
        $(`.${subnavCloneClass}`).remove();

        // Remove class hiding original subnav
        $subnav.removeClass('vs-subnav--hide');
      },
      onNotTop: function() {
        // Append floating element to avoid z-index restrictions
        let $subnavClone = $subnav.clone().addClass(subnavCloneClass).addClass(subnavColorClass).addClass(subnavPinnedClass);

        // Hide real subnav to avoid text above text with clone
        $subnav.addClass('vs-subnav--hide');

        // Append clone to DOM
        $subnavContainer.append($subnavClone);

        // To not flash the subnav going up add a delay to remove unpinned class
        window.setTimeout(() => {
          $header.removeClass('vs-header--unpinned');
        }, 500);
      }
    });

    headerProperties.onPin = function() {
      // If main nav is pinned, add offset to subnav
      $(`.${subnavCloneClass}, .vs-subnav`).addClass(subnavPinnedClass);

      let offsets = getOffsets();
      vsSubnav.offset = offsets.offset - offsets.offset_deviation;
    };

    headerProperties.onUnpin = function() {
      // If main nav is unpinned, remove subnav offset
      $(`.${subnavCloneClass}, .vs-subnav`).removeClass(subnavPinnedClass);

      offsets = getOffsets();
      vsSubnav.offset = offsets.offset - offsets.offset_deviation;
    };

    $(header).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', () => {
      // Because header changes its height, re-calculate offset after transition finished
      // finish processing elements
      offsets = getOffsets();
      vsSubnav.offset = offsets.offset - offsets.offset_deviation;

      // Only init subnav when header transition finished to use correct offset values
      vsSubnav.init();
    });
  }

  // Headroom vs-header element
  let vsHeader = new Headroom(header, headerProperties);

  vsHeader.init();

  // Update the main nav offset
  window.setTimeout(function () {
    updateMainNavOffset(vsHeader);
  }, 500);

  onResize(() => {
    updateMainNavOffset(vsHeader);

    // If vs-subnav element doesn't exist we don't need to do nothing
    if (!subnav) {
      return;
    }

    let scrollTop = $(document).scrollTop();
    let subNavWrapperPosition = $(`.vs-subnav:not(.${subnavCloneClass})`).offset();

    let mainNav = $(header);
    let mainNavPinned = mainNav.hasClass('vs-header--pinned');
    let offsets = getOffsets();
    // If main nav has class pinned remove its height from subnav distance to top
    let offset = mainNavPinned ? scrollTop < subNavWrapperPosition.top - mainNav.outerHeight() : scrollTop < subNavWrapperPosition.top;

    let $subnavClone = $(`.${subnavCloneClass}`);

    if (offset) {
      vsSubnav.offset = offsets.offset - offsets.offset_deviation;

      // Remove floating element
      $(`.${subnavCloneClass}`).remove();

      // Hide real subnav to avoid text above text with clone
      $subnav.removeClass('vs-subnav--hide');
    } else {

      if (!$subnavClone.length) {
        // Append floating element to avoid z-index restrictions
        $subnavClone = $(subnav).clone().addClass(subnavCloneClass).addClass(subnavColorClass).addClass(subnavPinnedClass);

        // Hide real subnav to avoid text above text with clone
        $subnav.addClass('vs-subnav--hide');

        $subnavContainer.append($subnavClone);
      }

      $subnavClone.addClass('vs-subnav--not-top').removeClass('vs-subnav--top');
    }
  });
}
