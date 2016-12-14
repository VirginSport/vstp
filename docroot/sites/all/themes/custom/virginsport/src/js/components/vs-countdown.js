import $ from '../lib/jquery';
import Drupal from '../lib/drupal';
import moment from 'moment-timezone/index';

export default () => {
  Drupal.behaviors.virginSportCountdown = {
    attach: () => findCountdowns()
  }
}

/**
 * Looks for all countdowns timers and renders the number of days left
 */
function findCountdowns() {
  let $containers = $('[data-vs-countdown-ts]').not('vs-countdown--found');
  
  $containers
    .addClass('vs-countdown--found')
    .each((index, el) => {
      let $container = $(el);
      let $wrappers = $container.find('.vs-hero-banner__days-left-wrapper');
      let $togo = $container.find('.vs-hero-banner__days-left');
      let $label = $container.find('.vs-hero-banner__days-label');
      
      let date = $container.attr('data-vs-countdown-ts');
      let timezone = $container.attr('data-vs-countdown-tz');
      let eventDate = moment.tz(date, timezone);
      let daysLeft = eventDate.diff(moment(), 'days');
      
      if (daysLeft < 1 || daysLeft > 30) {
        return;
      }
      
      let label = (daysLeft > 1) ? Drupal.t('Days to go') : Drupal.t('Day to go');
      
      $togo.html(daysLeft);
      $label.html(label);
      $wrappers.css('display', '');
    })
  ;
}
