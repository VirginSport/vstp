import $ from '../lib/jquery';
import Drupal from '../lib/drupal';
import cookie from 'js-cookie';

/**
 * Adds the website cookie notice
 */
export default () => {
  Drupal.behaviors.virginsport = {
    attach: () => {
      let cookie_key = 'cookie_accepted';
      let cookie_accepted = cookie.get(cookie_key);

      // If cookie not accepted already add notification
      if (!cookie_accepted) {
        let cookie_template = Drupal.settings.virginsport.cookie_template;
        let $el = $(cookie_template);

        // Append cookie to notifications wrapper.
        $el.appendTo('.vs-notification:not(.vs-notification--sticky)');

        // Save cookie if user dismiss the notification and hide it.
        $el.find('.vs-notification__close').click(() => {
          cookie.set(cookie_key, 1, { domain: Drupal.settings.virgin.cookieDomain });
          $el.addClass('vs-notification--hide');
        });
      }
    }
  };
};
