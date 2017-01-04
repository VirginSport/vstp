import $ from '../lib/jquery';
import bootstrap from 'bootstrap.native/dist/bootstrap-native';
import cookie from 'js-cookie';
import Drupal from '../lib/drupal';
import qs from 'qs';

export default () => {
  let basketCount = 0;
  let $sticky_basket = $('.vs-sticky-basket');

  // If there's no sticky basket in the page, bailout.
  if (!$sticky_basket.length) {
    return;
  }

  /**
   * Apply class to fix element on bottom
   */
  function pinBasket() {
    $sticky_basket.addClass('vs-sticky-basket--bottom');
  }

  /**
   * Apply class to remove element from bottom
   */
  function unpinBasket() {
    $sticky_basket.removeClass('vs-sticky-basket--bottom');
  }

  /**
   * Logic for sticky basket
   */
  function stickyBasket() {


    let basket_height = $sticky_basket.outerHeight();
    let basket_offset_top = $sticky_basket.offset().top;
    let offset = window.innerHeight + (window.scrollY || window.pageYOffset);

    // On scroll up if we pass the top line of the element stick it just below the window bottom
    if (offset < basket_offset_top) {
      $sticky_basket.addClass('vs-sticky-basket--top');
    }

    // On scroll down if we pass the top line less the basket height (to avoid fast scroll element flip flop)
    // remove top class and put it on original position and remove reset opacity to restore original opacity 0
    // and hide transition
    if (offset > basket_offset_top - basket_height) {
      $sticky_basket.removeClass('vs-sticky-basket--top').removeClass('vs-sticky-basket--reset-opacity');
    }

    // Pin element if on scroll up we pass its bottom line and basket has items
    if (basketCount && offset < basket_offset_top + basket_height) {
      pinBasket();
    }

    // Unpin element if on scroll down we pass its bottom line
    if (offset > basket_offset_top + basket_height) {
      unpinBasket();
    }
  }

  // Basket counter event listener
  $('.vs-header__basket__value').on('basket_counter_changed', function (event, value) {
    // update basketCount with new value
    basketCount = value;

    // Apply sticky basket logic
    stickyBasket();

    if (value > 0) {
      // If basket has items reveal sticky bar with transition
      $sticky_basket.addClass('vs-sticky-basket--reveal').removeClass('vs-sticky-basket--reset-opacity');
      pinBasket();
    } else {
      // If basket does not have items move sticky bar to its original position
      $sticky_basket.addClass('vs-sticky-basket--reset-opacity').removeClass('vs-sticky-basket--reveal');
      unpinBasket();
    }
  });

  // Apply sticky basket logic
  stickyBasket();

  // Apply sticky basket every time a scroll occur
  $(window).scroll(stickyBasket);
};
