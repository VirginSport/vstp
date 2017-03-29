import $ from '../lib/jquery';

export default () => {
  let $bar = $('.vs-bar');

  // If there's no sticky bar in the page, bailout.
  if (!$bar.length) {
    return;
  }

  /**
   * Apply class to fix element on bottom
   */
  function pinBar() {
    $bar.addClass('vs-bar--bottom');
  }

  /**
   * Apply class to remove element from bottom
   */
  function unpinBar() {
    $bar.removeClass('vs-bar--bottom');
  }

  /**
   * Logic for sticky bar
   */
  function stickyBar() {
    let bar_height = $bar.outerHeight();
    let bar_offset_top = $bar.offset().top;
    let offset = window.innerHeight + window.scrollY;

    // On scroll up if we pass the top line of the element stick it just below the window bottom
    if (offset < bar_offset_top) {
      $bar.addClass('vs-bar--top');
    }

    // On scroll down if we pass the top line less the bar height (to avoid fast scroll element flip flop)
    // remove top class and put it on original position and remove reset opacity to restore original opacity 0
    // and hide transition
    if (offset > bar_offset_top - bar_height) {
      $bar.removeClass('vs-bar--top').removeClass('vs-bar--reset-opacity');
    }

    // Pin element if on scroll up we pass its bottom line and bar has items
    if (offset < bar_offset_top + bar_height) {
      pinBar();
    }

    // Unpin element if on scroll down we pass its bottom line
    if (offset > bar_offset_top + bar_height) {
      unpinBar();
    }
  }

  // Apply sticky bar logic
  stickyBar();

  // Apply sticky bar every time a scroll occur
  $(window).scroll(stickyBar);
};
