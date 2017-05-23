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
  // Init vue for each component
  $('.vs-results-container').each((idx, el) => {
    initVueComponent($(el));
  });

  // Create sequential animations
  let $body = $('body');
  let events = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  let animationName = 'progress-state';

  $body.on(events, '.vs-result__time:nth-child(2) .vs-result__progress-state', (e) => {
    let $el = $(e.currentTarget).closest('.vs-result');
    let className = 'vs-result--first-child';

    if(e.originalEvent.animationName == animationName) {
      $el.addClass(className)
    } else {
      $el.removeClass(className)
    }
  });

  $body.on(events, '.vs-result__time:nth-last-child(2) .vs-result__progress-state', (e) => {
    let $el = $(e.currentTarget).closest('.vs-result');
    let className = 'vs-result--last-child';

    if(e.originalEvent.animationName == animationName) {
      $el.addClass(className)
    } else {
      $el.removeClass(className)
    }
  });

  // Apply chosen after behaviors
  if (Drupal.behaviors.chosen) {
    Drupal.behaviors.chosen.attach(document, Drupal.settings);
  }
}

/**
 * Initialize results components
 */
function initVueComponent($el) {
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
      'maxRows',
      'unit'
    ],
    template: '#tpl-vs-results',
    ready() {
      this.filter.limit = this.maxRows;
      this.filter.unit = this.unit;

      !!this.ticketId ? this.getParticipantDetails(this.ticketId) : this.getRaces();
    },
    methods: {
      getParticipantDetails(participantID) {
        getRacedayParticipant(raceDayUrl, participantID).then((result) => {
          if (!result || !result.data) {
            return;
          }

          this.participant = result.data;
          this.festivalId = result.data.eventId;
          this.eventId = result.data.raceId;

          this.getRaces();
        }).catch(() => {
          $(this.$el).addClass('vs-results--not-found');
        });
      },

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
            let race = null;

            if (this.eventId) {
              race = this.getRace(this.eventId);
            }

            this.filter.race = race ? race : firstRace;

            if (!this.ticketId) {
              this.findRaceResults();
            }

            window.setTimeout(() => {
              let $el = $(this.$el);

              $el.find('#input-race')
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
        if (!key || key == 0) {
          delete this.filter[name];
          return;
        }

        this.filter[name] = key;
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

        let filter = JSON.parse(JSON.stringify(this.filter));
        delete filter.race;
        let params = { params: filter };
        params.params.gender = 'male';

        // Check if race is available
        let raceId = this.filter.race ? this.filter.race.id : null;

        // Get male results
        getRacedayRace(raceDayUrl, this.festivalId, raceId, params).then((result) => {
          this.genderRanks.male = result.data;
          params.params.gender = 'female';

          // Get female results
          getRacedayRace(raceDayUrl, this.festivalId, raceId, params).then((result) => {
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
        participant: '',
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
          'race': {
            'id': ''
          },
          'gender': '',
          'category': '',
          'age': 0,
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
    ready() {
      if (this.isSelect) {
        this.bindSelect();
      }
    },
    methods: {
      onClick(key) {
        if (key != this.activeKey) {
          this.callback(this.model, key)
        }

        this.activeKey = key;
      },

      /**
       * Because of a conflict with chosen and vue v-model is not updated
       */
      bindSelect() {
        let $select = $(this.$el).find('select');

        $select.on("change", (e) => {
          let $el = $(e.currentTarget);
          this.onClick($el.val());
        });
      }
    },
    props: [
      'label',
      'isSelect',
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
      'url',
      'finishTime',
      'participantName'
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
      'participant',
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

        this.result = this.participant;

        if (!this.result) {
          this.getParticipantDetails(this.ticketId ? this.ticketId : this.rank.participantId)
        }
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
        // Floor value to avoid bypassing total value
        let value = Math.floor(timestamp / 1000);
        return moment.unix(value).format(format);
      },

      getPassingMillisecs(passing) {
        // Floor value to avoid bypassing total value
        return Math.floor(passing.millisecs / 1000);
      },

      getPassings() {
        if (this.cachedPassings[this.unit]) {
          return this.cachedPassings[this.unit];
        }

        this.maxAverage[this.unit] = 0;
        let list = [];
        let totalTime = 0;

        this.getSortedStages().forEach((s, index) => {
          let p = this.getStagePass(s.id);

          if (p !== null) {
            let startTime = (index == 0) ? 0 : this.getPassingMillisecs(list[index - 1].pass);
            let passingTime = (index == 0) ? 0 : this.diff(startTime, this.getPassingMillisecs(p));
            let distance = (index == 0) ? s.distance : s.distance - list[index - 1].stage.distance;
            let average = (index == 0) ? 0 : this.diff(startTime, this.getPassingMillisecs(p)) / this.getDistanceFormatted(distance);

            // Increment total time to calculate then difference with chipTime
            totalTime += passingTime;

            if (this.maxAverage[this.unit] < average) {
              this.maxAverage[this.unit] = average;
            }

            list.push({
              startTime: startTime,
              passingTime: passingTime,
              average: average,
              stage: s,
              pass: p
            });
          }
        });

        this.initialTime = this.lastTime = moment();

        if (list.length > 1) {
          let chiptime = this.rank ? this.rank.chipTime : this.result.chipTime;

          // Add rounding difference between all calculated passings
          // and total time to first passing
          list[1].passingTime += (chiptime * 1000) - totalTime;

          this.initialTime = list[1].startTime;
          this.lastTime = this.getPassingMillisecs(list[list.length - 1].pass);
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
          } else {
            $el.removeClass('vs-result--last-child').css('max-height', 0);
          }
        }, 100);
      }
    }
  });

  new Vue({
    cache: false,
    el: `#${$el.attr('id')}`
  });
}
