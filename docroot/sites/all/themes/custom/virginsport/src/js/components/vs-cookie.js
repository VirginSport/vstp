import $ from '../lib/jquery';
import Drupal from '../lib/drupal';
import cookie from 'js-cookie';

const REGION_COOKIE = 'vs_region_hostname';

/**
 * Manage website cookies
 */
export default () => {
  Drupal.behaviors.virginsport = {
    attach: () => {
      addRegionCookie();
      addNoticeCookie();
    }
  };
};

/**
 * Adds the website cookie notice
 */
function addRegionCookie() {
  let region_cookie = cookie.get(REGION_COOKIE);

  if (!region_cookie) {
    cookie.set(REGION_COOKIE, location.hostname, { domain: Drupal.settings.virgin.cookieDomain })
  }
}

/**
 * Adds the website cookie notice
 */
function addNoticeCookie() {
  if (!Drupal.settings.virginsport || !Drupal.settings.virginsport.cookie_template) {
    return;
  }

  let cookie_class = 'vs-notification--cookie';
  let cookie_key = 'cookie_accepted';
  let cookie_accepted = cookie.get(cookie_key);

  // If cookie not accepted already add notification
  if (!cookie_accepted && !$(`.${cookie_class}`).length) {
    let cookie_template = Drupal.settings.virginsport.cookie_template;
    let $el = $(cookie_template).addClass(cookie_class);

    // Append cookie to notifications wrapper.
    $el.appendTo('.vs-notification--not-sticky');

    // Save cookie if user dismiss the notification and hide it.
    $el.find('.vs-notification__close').click(() => {
      cookie.set(cookie_key, 1, { domain: Drupal.settings.virgin.cookieDomain });
      $el.addClass('vs-notification--hide');
    });
  }
}
