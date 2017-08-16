import bootstrap from 'bootstrap.native/dist/bootstrap-native';
import Drupal from '../lib/drupal';
import Vue from '../lib/vue';
import $ from '../lib/jquery';
import url from '../helper/url';
import blur from '../helper/input-blur';

export default () => {
  // Init vue for page components
  initVue('.v-element.vs-newsletter__content');
  initVue('.v-element.vs-newsletter-footer');
}

// Vue.validator('email', function (val) {
//   return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
// })

function mailIsValid(val) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
}

/**
 * Generates a random unique identifier
 *
 * @returns {string}
 */
function id() {
  return 'vs-newsletter-form-' + (Math.random().toString(36) + '00000000000000000').slice(2, 10 + 2);
}

/**
 *  Get url base path
 * @returns {string}
 */
function path() {
  return '//' + window.location.hostname + Drupal.settings.basePath + Drupal.settings.pathPrefix;
}

/**
 * Execute on the given selector
 *
 * @param selector
 *  The element selector
 * @param inModal
 *  A boolean value to tell view if this form is running on page context or in a modal
 */
function initVue(selector, inModal = false) {
  if (!$(selector).length) {
    return;
  }

  new Vue({
    el: selector,
    compiled() {},
    ready() {
      this.$el.classList.add('v-element--ready');
      if(this.form.newsletter_email != "") {
        $('[name=newsletter-email]').addClass('vs-form-control--not-empty');
      }
    },
    methods: {
      /**
       * Conditions to check if form is valid outside vue-validator
       */
      formValid() {
        return true;
      },

      submit() {
        this.submitted = true;
        let self = this;
        this.waitingSubmit = true;

        this.form.submitted = false;
        this.form.error = false;

        if(!mailIsValid(this.form.newsletter_email)) {
          this.invalid_email = true;
          self.waitingSubmit = false;
          return ;
        }

        this.invalid_email = false;

        this.$http.post(path() + 'ajax/newsletter-form/post', this.form).then((response) => {
          // success callback
          let data = JSON.parse(response.data);

          if (data.result) {
            self.form.submitted = true;
          } else {
            self.form.error = true;
          }

          self.waitingSubmit = false;
        });
      }
    },
    data: {
      waitingSubmit: false,
      submitted: false,
      loading: false,
      invalid_email: false,
      form: {
        submitted: false,
        error: false,
        newsletter_email: '',
        list: '',
      }
    }
  });
}
