import Vue from '../lib/vue';
import Drupal from '../lib/drupal';
import {getRacedayEvent, getRacedayParticipant} from '../helper/raceday';
import moment from 'moment';
import "moment-duration-format";

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
          this.participantId = data.ticket_id;
          this.festivalId = data.festival_id;
          this.eventId = data.event_id;
          this.unit = data.unit;

          if (!this.festivalId || !this.participantId) {
            return;
          }

          getRacedayEvent(raceDayUrl, this.festivalId).then((result) => {
            if (!result.data) {
              return;
            }

            this.event = result.data;

            this.race = this.event.races.find((el) => {
              if (el.id == this.eventId)
                return true;
            });

            getRacedayParticipant(raceDayUrl, this.participantId).then((result) => {
              if (result.data) {
                this.participant = result.data;
                this.$el.classList.add('v-element--ready');
              }
            });
          });
        },

        getAverageDistance() {
          // Chiptime is provided in seconds, convert it to hours
          let numHours = this.participant.chipTime / 60 / 60;

          return Math.round((this.getTotalDistance() / numHours) * 100) / 100;
        },

        getTotalDistance() {
          let stages = this.race.stages;
          let distance = stages.length ? stages[stages.length - 1].distance : 0;

          // If unit is km return its value, otherwise return in miles
          return this.unit == 'km' ? distance * 0.001 : distance * 0.000621371192;
        }
      },
      data: {
        race : null,
        event : null,
        participant: null,
        participantId : ''
      }
    });
  });
}
