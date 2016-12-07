import $ from '../lib/jquery';
import bootstrap from 'bootstrap.native/dist/bootstrap-native';
import cookie from 'js-cookie';
import Drupal from '../lib/drupal';
import qs from 'qs';

export default () => {
  let basketCount = 0;
  let $el = $('.vs-sticky-basket');

  function pinBasket() {
    $el.addClass('vs-sticky-basket--bottom');
  }

  function unpinBasket() {
    $el.removeClass('vs-sticky-basket--bottom');
  }

  function stickyBasket() {
    var $sticky_basket = $('.vs-sticky-basket');
    
    // If there's no sticky basket in the page, bailout.
    if (!$sticky_basket.length) {
      return;
    }

    var basket_height = $sticky_basket.outerHeight();
    var basket_offset_top = $sticky_basket.offset().top;
    var offset = window.innerHeight + window.scrollY;

    if (offset < basket_offset_top) {
      $el.addClass('vs-sticky-basket--top');
    }

    if (offset > basket_offset_top) {
      $el.removeClass('vs-sticky-basket--top');
    }

    if (!basketCount) {
      return;
    }

    if (offset < basket_offset_top + basket_height) {
      pinBasket();
    }

    if (offset > basket_offset_top + basket_height) {
     unpinBasket();
    }
  }

  $('.vs-header__basket__value').on('basket_counter_changed', function (event, value) {
    basketCount = value;

    stickyBasket();

    if (value > 0) {
      $el.addClass('vs-sticky-basket--reveal');
      pinBasket();
    } else {
      $el.removeClass('vs-sticky-basket--reveal');
      unpinBasket();
    }
  });

  stickyBasket();

  $(window).scroll(stickyBasket);
};
