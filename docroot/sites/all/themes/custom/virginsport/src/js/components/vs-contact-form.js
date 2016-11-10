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
    $('[virgin-type=contact_form], [virgin-type=register_interest_form]').each(function() {
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
        $('select').on("change", function () {
          let $el = $(this);
          let name = $el.attr('name');
          if (self.form[name] = $el.val()) {
            self.form[name] = $el.val();
          }
        });
      },

      closeModal() {
        modal.close();
      },

      submit() {
        let self = this;
        let url = '//' + window.location.hostname + Drupal.settings.basePath + Drupal.settings.pathPrefix;

        this.$http.post(url + 'ajax/contact-form/post', this.form).then((response) => {
          // success callback
          self.form.submitted = true;
        }, (response) => {
          self.form.error = true;
        });
      }
    },
    data: {
      inModal: inModal,
      form: {
        submitted: false,
        error: false,
        about: '',
        message: '',
        type: '',
        festival_id: '',
        over_12: '',
        event_ids: []
      }
    }
  });
}
