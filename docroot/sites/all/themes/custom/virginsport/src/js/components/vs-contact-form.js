import bootstrap from 'bootstrap.native/dist/bootstrap-native';
import Drupal from '../lib/drupal';
import Vue from '../lib/vue';
import $ from '../lib/jquery';
import url from '../helper/url';
import blur from '../helper/input-blur';

blur();

let modal = init();

export default () => {
  // Init vue for page components
  initVue('.v-element.vs-contact-form');
  initVue('.v-element.vs-contact-form.vs-contact-form--register');

  // Bind links with virgin type contact_form or register_interest_form to open forms in modal
  $(document).ready(() => {
    $('[virgin-type][virgin-type!="link"]').each(function() {
      bind($(this));
    });
  });
};

/**
 * Add modal container to page
 * 
 * @returns {bootstrap.Modal}
 */
function init() {
  let html = `
    <div id="vs-contact-form-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content"></div>
      </div>
    </div>
  `;

  let $modal = $(html);
  $modal.appendTo('body');

  return new bootstrap.Modal($modal.get(0));
}

/**
 *
 * @param {jQuery} $el
 */
function bind($el) {
  // Build url based on link parameters
  let base = id();
  let query = url.query($el.attr('href'));
  query['virgin_type'] = $el.attr('virgin-type');
  let params = $.param(query);

  let ajax = new Drupal.ajax(base, $el.get(0), {
    url: '//' + window.location.hostname + Drupal.settings.basePath + Drupal.settings.pathPrefix + 'ajax/contact-form?' + params,
    event: 'click'
  });

  ajax.commands.vsContactForm = function (ajax, response, status) {
    // Open modal with forms template
    modal.open();
    modal.content(response.data);

    // Apply vue to template
    initVue('.modal .v-element.vs-contact-form', true);

    // Run attachBehaviors to run libraries like chosen and apply to new elements
    Drupal.attachBehaviors();
    
    // Attach blur event to new form elements
    blur();
  };

  Drupal.ajax[base] = ajax;
}

/**
 * Generates a random unique identifier
 *
 * @returns {string}
 */
function id() {
  return 'vs-contact-form-' + (Math.random().toString(36) + '00000000000000000').slice(2, 10 + 2);
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
       * Called from vue directive init @see vue.js
       */
      init(data) {
        // If data is undefined bail out
        if (!data) {
          return;
        }

        // Init comes from a custom directive because vue core doesn't have it
        if (data.events) {
          this._data.form.events = data.events;
        }

        if (data.event_id) {
          this._data.form.event_ids = [data.event_id];
        }

        // Update chosen
        this.updateChosen();
      },

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

            if (name == 'festival_id') {
              self.festivalChange();
            }
          }
        });
      },

      /**
       * Update chosen value based on model
       */
      updateChosen() {
        window.setTimeout(() => {
          $(selector).find('select').trigger("chosen:updated");
        }, 0);
      },

      /**
       * Triggered when the festival dropdown change
       */
      festivalChange() {
        let self = this;
        self.loading = true;

        this.$http.get(path() + `ajax/festival/${this.form.festival_id}/events`).then((response) => {
          if(response.data) {
            // List of events
            let events = JSON.parse(response.data);

            // Set events property and trigger update chosen to update lists
            self.form.events = events;
            self.updateChosen();
            self.loading = false;
          }
        });
      },

      /**
       * Conditions to check if form is valid outside vue-validator
       */
      formValid() {
        return this.form.event_ids && this.form.event_ids.length;
      },

      closeModal() {
        modal.close();
      },

      submit() {
        let self = this;

        this.$http.post(path() + 'ajax/contact-form/post', this.form).then((response) => {
          // success callback
          self.form.submitted = true;
        }, (response) => {
          self.form.error = true;
        });
      }
    },
    data: {
      inModal: inModal,
      loading: false,
      form: {
        submitted: false,
        error: false,
        about: '',
        message: '',
        type: '',
        festival_id: '',
        over_12: '',
        events: {},
        event_ids: []
      }
    }
  });
}
