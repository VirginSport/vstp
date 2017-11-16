import Drupal from '../lib/drupal';
import Vue from '../lib/vue';
import $ from '../lib/jquery';

export default () => {
  // Init vue for page components
  initVue('.v-element.vs-request-bundle-form');
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
    compiled() {
      this.bindLists();
    },
    ready() {
      this.$el.classList.add('v-element--ready');
    },
    methods: {
      /**
       * Because of a conflict with chosen and vue v-model is not updated
       */
      bindLists() {
        let self = this;
        $(selector).find('select').on("change", function () {
          let $el = $(this);
          let name = $el.attr('name');
          if (self.form[name] != $el.val()) {
            self.form[name] = $el.val();
          }
        });
      },
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

        if(!this.$vs_request_bundle_form_validator.valid) {
          self.waitingSubmit = false;
          return ;
        }

        this.$http.post(path() + 'ajax/request-bundle-form/post', this.form).then((response) => {
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
      form: {
        submitted: false,
        error: false,
        organization_name: '',
        event_id: '',
        tickets: '',
        payment_type: '',
        additional_info: '',
      }
    },
  });
}
