import Drupal from '../lib/drupal';
import Vue from '../lib/vue';
import $ from '../lib/jquery';

export default () => {
  // Init vue for page components
  initVue('.v-element.vs-newsletter__content');
  initVue('.v-element.vs-newsletter-footer');
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

        if(!this.$vs_newsletter_form_validator.valid) {
          self.waitingSubmit = false;
          return ;
        }

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
      form: {
        submitted: false,
        error: false,
        newsletter_email: '',
        id: '',
        type: '',
      }
    },
    watch: {
      'form.newsletter_email': function(val, oldVal) {
        // Change the submitted status so the user can submit the form again
        // if the email is changed
        if (this.form.submitted) {
          this.form.submitted = false;
        }
      }
    }
  });
}
