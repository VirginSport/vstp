import $ from '../lib/jquery';
import bootstrap from 'bootstrap.native/dist/bootstrap-native';
import cookie from 'js-cookie';
import Drupal from '../lib/drupal';
import qs from 'qs';

/**
 * Keeps track of the current request basket hostname
 *
 * @type {string}
 */
let basketHostname = cookie.get('vs_basket_region_hostname') || cookie.get('vs_region_hostname');

/**
 * Contains the name of the basket counter cookie name
 *
 * @type {*}
 * @see totalBasketItems()
 */
let basketCounterCookieName = undefined;

/**
 * Contains the basket modal instance
 *
 * @type {*}
 * @see modal()
 */
let basketModal = undefined;

export default () => {
  $(document).ready(() => {
    bindRegionChangeTriggers();
    enableBasketCounter();
  });
};

/**
 * Keeps track of the number of items stored in the basket via a cookie
 * and updates the basket counter with that number.
 */
function enableBasketCounter() {
  let $link = $('.vs-header__link');
  let $counter = $link.find('.vs-header__basket__value');

  window.setInterval(() => {
    let total = totalBasketItems();

    if ($counter.html() != total) {
      if (!$counter.hasClass('vs-header__basket__value__ready')) {
        $counter.addClass('vs-header__basket__value__ready');
      }

      $counter.trigger('basket_counter_changed', total);
      $counter.html(total);
    }
  }, 500)
};

/**
 * Counts the total number of items a user has in his basket
 *
 * @returns {Number}
 */
function totalBasketItems() {
  if (!basketCounterCookieName) {
    basketCounterCookieName = $('.vs-header__link').attr('data-basket-cookie');
  }

  let total = cookie.get(basketCounterCookieName);

  return total ? parseInt(total) : 0;
}

/**
 * Binds all the behaviour related to region change triggers
 */
function bindRegionChangeTriggers() {

  // If no region information is available, bailout now
  if (!Drupal.settings.vsRegions) {
    return;
  }

  // Otherwise fetch the available information
  let origin = undefined;
  let destinations = [];

  Drupal.settings.vsRegions.forEach((r) => {
    if (r.active) {
      origin = r;
      return;
    }
    destinations.push(r);
  });

  // Get the region-change query parameter from the URL
  let querystring = window.location.search.substring(1); // Remove the initial ? symbol
  let query = qs.parse(querystring);
  let regionChange = query['region-change'] || null;

  destinations.forEach((destination) => {

    // For all the regions that exist, with the exception of the
    // current region, do a lookup for all the links in the page
    // that might point to that hostname, and if the user clicks
    // in one of those links show him a region change modal.
    $(`[href^="${destination.address}"]`).on('click', function (e) {
      if (totalBasketItems() > 0 && basketHostname != destination.hostname) {
        e.preventDefault();
        showRegionChangeModal(origin, destination, $(this).attr('href'));
      }
    });

    // Also do a lookup for all the links that point to ticket
    // operations for content of different regions
    $(`[vs-ticket-hostname="${destination.hostname}"]`).on('click', function (e) {
      e.preventDefault();
      showTicketsRegionChangeModal(origin, destination, $(this).attr('href'));
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
  let args = {
    '@origin1': origin.title,
    '@origin2': origin.title,
    '@dest1': destination.title,
    '@dest2': destination.title
  };

  let message = Drupal.t('Going to the @dest1 site will allow you to add @dest2 tickets to your basket, but will mean losing your @origin1 tickets. Would you like to stay on the @origin2 site and complete your purchases first?', args);
  let continueBtn = Drupal.t('Continue to @dest1 site*', args);
  let continueNotice = Drupal.t('*@origin1 tickets will be removed from basket', args)
  let stayBtn = Drupal.t('Stay on @origin1 site', args);

  // Build the modal HTML contents
  let content = `
    <div class="row">
      <div class="col-xs-12">
        <p>${message}</p>
      </div>

      <div class="col-xs-6">
        <a href="${path}" class="btn vs-btn vs-btn--sm vs-btn--outline-black vs-basket-modal__continue">${continueBtn}</a>
        <p>${continueNotice}</p>
      </div>

      <div class="col-xs-6">
        <a href="#" class="btn vs-btn vs-btn--sm vs-basket-modal__stay">${stayBtn}</a>
      </div>
    </div>
  `;

  modal().content(content);

  // Bind events to the buttons in the modal
  let $dialog = $(modal().dialog);

  // If the user wants to continue, then wipe all the basket
  // cookies and set the basket hostname to be the same as
  // the destination hostname.
  $dialog.find('.vs-basket-modal__continue').on('click', (e) => {
    deleteBasketCookies();
    setBasketHostnameCookie(destination.hostname);
  });

  // If the user however wishes to stay, then do nothing.
  $dialog.find('.vs-basket-modal__stay').on('click', (e) => {
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
  let args = {
    '@origin1': origin.title,
    '@dest1': destination.title,
    '@dest2': destination.title
  };

  let message = Drupal.t('To add @dest1 tickets to your basket we need to take you to the @dest2 site.', args);
  let continueBtn = Drupal.t('Continue', args);
  let continueNotice = Drupal.t('*@origin1 tickets will be removed from basket', args)

  // Build the modal HTML contents
  let content = `
    <div class="row">
      <div class="col-xs-12">
        <p>${message}</p>
      </div>

      <div class="col-xs-6">
        <a href="${destination.address + path}" class="btn vs-btn vs-btn--sm vs-basket-modal__continue">${continueBtn}</a>
        <p>${continueNotice}</p>
      </div>
    </div>
  `;

  modal().content(content);

  // Bind events to the buttons in the modal
  let $dialog = $(modal().dialog);

  // If the user wants to continue, then wipe all the basket
  // cookies and set the basket hostname to be the same as
  // the destination hostname.
  $dialog.find('.vs-basket-modal__continue').on('click', (e) => {
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
 cookie.set('vs_basket_region_hostname', hostname, { domain: Drupal.settings.virgin.cookieDomain });
}

/**
 * Removes all basket related cookies in order to reset the user's
 * basket session.
 */
function deleteBasketCookies() {
  for (let cookieName in cookie.get()) {
    if (cookieName.substring(0, "attendly-".length) == "attendly-") {
      cookie.remove(cookieName, { domain: Drupal.settings.virgin.cookieDomain });
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

  let html = `
    <div id="vs-basket-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <button type="button" class="modal-dialog__close" data-dismiss="modal" aria-label="Close"></button>
        <div class="modal-content"></div>
      </div>
    </div>
  `;

  let $modal = $(html);
  $modal.appendTo('body');
  basketModal = new bootstrap.Modal($modal.get(0));

  return basketModal;
}
