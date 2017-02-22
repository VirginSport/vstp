import $ from '../lib/jquery';
import Vue from '../lib/vue';
import Drupal from '../lib/drupal';
import {getRacedayEvent, getRacedayRace, getRacedayParticipant} from '../helper/raceday';
import moment from 'moment';

import "moment-duration-format";

export default () => {
  Drupal.behaviors.virginResults = {
    attach: () => initResultsComponents()
  };
}

/**
 * Initialize results components
 */
function initResultsComponents() {
  let targetElement = '.vs-results-container';

  if (!document.querySelector(targetElement)) {
    return;
  }

  let raceDayUrl = Drupal.settings.virgin.raceDayUrl;

  Vue.component('vs-results', {
    cache: false,
    props: [
      'showTop',
      'isCard',
      'ticketId',
      'brandColor',
      'hasTeaser',
      'hasFilter',
      'hasSubFilter',
      'resultsPath',
      'replayPath',
      'photoPath',
      'festivalId',
      'eventId',
      'eventName',
      'eventDate',
      'eventDescription',
      'maxRows'
    ],
    template: '#tpl-vs-results',
    ready() {
      this.filter.limit = this.maxRows;

      this.getRaces();
    },
    methods: {
      getRace(id) {
        if (this.event && this.event.races.length) {
          for (let i = 0; i < this.event.races.length; i++) {
            let race = this.event.races[i];
            if (id == race.id) {
              return race;
            }
          }
        }

        return null;
      },

      /**
       * Load the available races
       */
      getRaces() {
        getRacedayEvent(raceDayUrl, this.festivalId).then((result) => {
          if (result.data) {
            this.event = result.data;

            let firstRace = this.event.races.length ? this.event.races[0] : {};
            this.filter.race = this.eventID ? this.getRace(this.eventID) : firstRace;

            if (!this.ticketId) {
              this.findRaceResults();
            }

            window.setTimeout(() => {
              $('#input-race')
                .trigger("chosen:updated")
                .on("change", e =>  {
                  let $el = $(e.currentTarget);

                  this.filter.race = this.getRace($el.val());
                })
              ;
            }, 0);
          }
        });
      },

      /**
       *
       */
      applySubFilter(name, key) {
        if (name == 'category') {
          if (key == '') {
            delete this.filter[name];
          } else {
            let prefix = '*';
            this.filter[name] = prefix + key;
          }
        } else {
          this.filter[name] = key;
        }
      },

      /**
       *
       */
      applySubFilterSearch(name, key) {
        this.applySubFilter(name, key);
        this.findRaceResults();
      },

      /**
       *
       */
      findRaceResults() {
        this.clearRaceResults();

        let loadProperty = 'find';

        if (this.showTop) {
          this.getGenderResults(loadProperty);
        } else {
          this.getRaceResults(loadProperty);
        }
      },

      /**
       *
       */
      clearRaceResults() {
        this.ranks = [];
        this.noResults = false;
        this.filter.offset = this.filter.originalOffset;
      },

      /**
       *
       */
      getGenderResults(loadingProperty) {
        this.loading[loadingProperty] = true;

        // Get male results
        getRacedayRace(raceDayUrl, this.festivalId, this.filter.race.id, { params: { gender: 'male', limit: this.maxRows } }).then((result) => {
          this.genderRanks.male = result.data;

          // Get female results
          getRacedayRace(raceDayUrl, this.festivalId, this.filter.race.id, { params: { gender: 'female', limit: this.maxRows } }).then((result) => {
            this.genderRanks.female = result.data;

            this.loading[loadingProperty] = true;
          });
        });
      },

      /**
       *
       */
      getRaceResults(loadingProperty) {
        let filter = JSON.parse(JSON.stringify(this.filter));
        delete filter.race;

        let params = {params: filter};

        this.loading[loadingProperty] = true;

        getRacedayRace(raceDayUrl, this.festivalId, this.filter.race.id, params).then((result) => {

          if (result.data) {
            this.noResults = this.filter.offset + this.filter.limit >= result.meta.total;

            this.ranks.push.apply(this.ranks, result.data);
            this.filter.offset += this.filter.limit;
          } else {
            this.noResults = true;
          }

          this.ready = true;
          this.loading[loadingProperty] = false;
        });
      }
    },
    data() {
      return {
        event: '',
        noResults: false,
        loading: {
          find: false,
          more: false
        },
        filter: {
          'ready': false,
          'ranks': [],
          'originalOffset': 0,
          'limit': 0,
          'race': {},
          'gender': '',
          'category': '',
          'age': '',
          'unit': 'miles'
        },
        ranks: [],
        genderRanks: {
          'male': [],
          'female': []
        }
      };
    }
  });

  Vue.component('vs-results-ranking', {
    cache: false,
    methods: {
      onClick(key) {
        if (key != this.activeKey) {
          this.callback(this.model, key)
        }

        this.activeKey = key;
      }
    },
    props: [
      'label',
      'callback',
      'model',
      'options',
      'activeKey'
    ],
    template: '#tpl-vs-results-ranking'
  });

  Vue.component('vs-result-share', {
    cache: false,
    methods: {},
    props: [
      'url'
    ],
    template: '#tpl-vs-result-share'
  });

  Vue.component('vs-result', {
    cache: false,
    props: [
      'index',
      'multiple',
      'loading',
      'race',
      'ticketId',
      'rank',
      'unit',
      'isOpen',
      'brandColor'
    ],
    template: '#tpl-vs-result',
    data() {
      return {
        ready: false,
        result: null,
        cachedPassings: [],
        maxAverage: []
      }
    },
    ready() {
      // If isOpen set to true load the participant details
      if (this.isOpen) {
        // because participant details makes the toggle default isOpen to false
        this.isOpen = false;
        this.getParticipantDetails(this.ticketId ? this.ticketId : this.rank.participantId)
      }
    },
    methods: {
      getSortedStages() {
        return this.race.stages.sort((a, b) => {
          if (a.distance > b.distance) return 1;
          if (a.distance < b.distance) return -1;
          return 0
        });
      },

      getStagePass(stageID) {
        let p = this.result.passings;

        for (let i = 0; i < p.length; i++) {

          if (p[i].stageId === stageID) {
            return p[i];
          }
        }

        return null;
      },

      getDistanceFormatted(meters) {
        return this.unit == 'km' ? meters * 0.001 : meters * 0.000621371192;
      },

      getTotalDistance() {
        let stages = this.race.stages;
        let distance = stages.length ? stages[stages.length - 1].distance : 0;

        return this.getDistanceFormatted(distance);
      },

      diff(startTime, endTime) {
        let start = moment.unix(startTime);
        let end = moment.unix(endTime);

        return end.diff(start);
      },

      diffFormat(format, startTime, endTime) {
        let diff = moment.duration(this.diff(startTime, endTime));

        return diff.format(format, { trim: false });
      },

      timeStampFormat(format, timeStamp) {
        let diff = moment.duration(timeStamp);

        return diff.format(format, { trim: false });
      },

      formatTime(format, timestamp) {
        return moment.unix(timestamp).format(format);
      },

      getPassings() {
        if (this.cachedPassings[this.unit]) {
          return this.cachedPassings[this.unit];
        }

        this.max = 0;
        let list = [];

        this.getSortedStages().forEach((s, index) => {
          let p = this.getStagePass(s.id);

          if (p !== null) {
            let startTime = index == 0 ? moment().format("yyyy-mm-dd") : list[index - 1].pass.chipTime;
            let distance = index == 0 ? s.distance : s.distance - list[index - 1].stage.distance;
            let average = this.diff(startTime, p.chipTime) / this.getDistanceFormatted(distance);
            this.maxAverage[this.unit] = this.max > average ? this.max : average;

            list.push({
              startTime: startTime,
              average: average,
              stage: s,
              pass: p
            });
          }
        });

        this.initialTime = this.lastTime = moment();

        if (list.length > 1) {
          this.initialTime = list[1].startTime;
          this.lastTime = list[list.length - 1].pass.chipTime;
        }

        this.cachedPassings[this.unit] = list;
        return list;
      },

      getParticipantDetails(participantID) {
        if (this.result) {
          return this.toggleOpen();
        }

        this.loading = true;

        getRacedayParticipant(raceDayUrl, participantID).then((result) => {
          if (result.data) {
            this.result = result.data;
            this.toggleOpen();
          }

          this.ready = true;
          this.loading = false;
        });
      },

      toggleOpen() {
        this.isOpen = this.isOpen ? !this.multiple : true;

        let $el = $(this.$el).find('.vs-result__body');

        window.setTimeout(() => {
          if (this.isOpen) {
            $el.css('max-height', `${$el[0].scrollHeight}px`);
            $el.find('.vs-result__progress-state').removeClass('vs-result__progress-state--force-zero');
          } else {
            $el.css('max-height', 0);
            $el.find('.vs-result__progress-state').addClass('vs-result__progress-state--force-zero');
          }
        }, 100);
      }
    }
  });


  new Vue({
    cache: false,
    el: targetElement
  });

  // Apply chosen after behaviors
  if (Drupal.behaviors.chosen) {
    Drupal.behaviors.chosen.attach(document, Drupal.settings);
  }
}