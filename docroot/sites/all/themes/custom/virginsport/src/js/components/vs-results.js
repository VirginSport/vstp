import Vue from '../lib/vue';
import {getRankings, getResult, getStages} from './vs-results-mocks';

export default () => {
  Vue.component('vs-results', {
    cache: false,
    props: [
      'brandColor',
      'hasTeaser',
      'hasFilter',
      'hasSubFilter',
      'resultsPath',
      'replayPath',
      'photoPath',
      'isTruncated',
      'eventName',
      'eventDate',
      'eventDescription',
      'maxRows'
    ],
    template: '#tpl-vs-results',
    data() {
      return {
        // FIXME replace with actual search code
        rankings: getRankings(),
        stages: getStages(),
      };
    }
  });
  
  Vue.component('vs-results-ranking', {
    cache: false,
    props: [
      'label',
      'options',
      'activeKey'
    ],
    template: '#tpl-vs-results-ranking'
  });
  
  Vue.component('vs-result', {
    cache: false,
    props: [
      'rank',
      'stages',
      'isOpen',
      'brandColor'
    ],
    template: '#tpl-vs-result',
    data() {
      return {
        result: getResult(),
        cachedPassings: null
      }
    },
    methods: {
      getSortedStages() {
        return this.stages.sort((a, b) => {
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
      
      // TODO remove me once average progress is actually calculated
      getRandomProgress() {
        return Math.random() * 100;
      },
      
      getPassings() {
        if (this.cachedPassings) {
          return this.cachedPassings;
        }
        
        let list = [];
        
        this.getSortedStages().forEach((s) => {
          let p = this.getStagePass(s.id);
          if (p !== null) {
            list.push({
              stage: s,
              pass: p
            });
          }
        });
        
        this.cachedPassings = list;
        return list;
      },
      
      toggleOpen() {
        this.isOpen = this.isOpen ? false : true;
      },
    }
  });
  
  new Vue({
    cache: false,
    el: 'body'
  })
}
