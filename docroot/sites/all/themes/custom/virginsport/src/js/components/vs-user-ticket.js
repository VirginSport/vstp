import Vue from '../lib/vue';
import Drupal from '../lib/drupal';
import {getRacedayParticipant} from '../helper/raceday';

export default () => {
  Drupal.behaviors.virginUserTicket = {
    attach: () => initUserTicket()
  };
}

/**
 * Initialize ticket component
 */
function initUserTicket() {
  $('.vs-ticket-card').each(($index, el) => {
    let $el = $(el);

    new Vue({
      cache: false,
      el: `#${$el.attr('id')}`,
      methods: {
        /**
         * Called from vue directive init @see vue.js
         */
        init(data) {
          let raceDayUrl = Drupal.settings.virgin.raceDayUrl;
          this.participantId = data;

          getRacedayParticipant(raceDayUrl, this.participantId).then((result) => {
            if (result.data) {
              this.participant = result.data;
              this.$el.classList.add('v-element--ready');
            }
          });
        }
      },
      data: {
        participantId : '',
        participant: {}
      }
    });
  });
}
