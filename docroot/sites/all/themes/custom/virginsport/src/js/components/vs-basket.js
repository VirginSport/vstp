import $ from '../lib/jquery';
import cookie from 'js-cookie';

export default () => {
  basketCounter();
};

/**
 * Keeps track of the number of items stored in the basket via a cookie
 * and updates the basket counter with that number.
 */
function basketCounter() {
  let $link = $('.vs-header__link');
  let $counter = $link.find('.vs-header__basket__value');
  let basketCookie = $link.attr('data-basket-cookie');
  
  window.setInterval(() => {
    $counter.html(cookie.get(basketCookie));
  }, 500)
};
