import $ from '../lib/jquery';
import Drupal from '../lib/drupal';

export default () => {
  Drupal.behaviors.virginSportCtaLinks = {
    attach: () => {
      let hostname = $('[data-vs-hostname]').attr('data-vs-hostname');

      $('[virgin-region-modal]').each((idx, el) => {
        $(el).attr('vs-ticket-hostname', hostname);
      });
    }
  }
};
