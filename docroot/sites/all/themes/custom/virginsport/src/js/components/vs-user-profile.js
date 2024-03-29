import $ from '../lib/jquery';
import places from '../lib/google-places';
import Vue from '../lib/vue';
import blur from '../helper/input-blur';

blur();

let fieldMap = {
  'input#edit-current-pass': 'current_pass',
  'input#edit-pass-pass1': 'pass1',
  'input#edit-pass-pass2': 'pass2',
  'input#edit-mail': 'field_mail',
  '#edit-field-marketing-optin input': 'field_marketing_optin',
  '#edit-field-contact-number input': 'field_contact_number',
  '#edit-field-uk-athletics-number input': 'field_uk_athletics_number',
  '#edit-field-region select': 'field_region'
};

export default () => {
  let selector = '.v-element.vs-user-profile';

  if (!$(selector).length) {
    return;
  }

  new Vue({
    el: selector,
    compiled() {
      // Only require password id drupal form edit-current-pass element exists
      this.require_password = !(!$('input#edit-current-pass').length);

      // Show password mode by default if user comes from recover password
      if (!this.require_password) {
        this.password_mode = true;
      }

      this.bindLists();
      this.populateLists();
      this.setValues();
      this.bindValues();
    },
    ready() {
      this.$el.classList.add('v-element--ready');
    },
    methods: {

      /**
       * Update chosen value based on model
       */
      updateChosen() {
        window.setTimeout(() => {
          $('select').trigger("chosen:updated");
        }, 0);
      },

      /**
       * Convert lists key to text
       */
      getListText(field, key) {
        if (!key.length) {
          return '';
        }
        return $(`[name=${field}]`).find(`option[value=${key}]`).text();
      },

      bindValues() {
        let $el = $(this);
        let name = $el.attr('name');

        for (let selector in fieldMap) {
          let field = fieldMap[selector];
          if (this.profile[field]) {
            $('[name=' + field + ']').addClass('vs-form-control--not-empty');
          }
        }
      },

      /**
       * Because of a conflict with chosen and vue v-model is not updated
       */
      bindLists() {
        let self = this;
        $('select').on("change", function() {
          let $el = $(this);
          let name = $el.attr('name');

          for (let selector in fieldMap) {
            let field = fieldMap[selector];
            if (field == name) {
              self.profile[field] = $el.val();
            }
          }
        });
      },

      populateLists() {
        for (let selector in fieldMap) {
          if (selector.indexOf(' select') !== -1) {
            let field = fieldMap[selector];
            let $options = $(selector).find('> option').clone();

            $('[name=' + field + ']').append($options);
          }
        }
      },

      /**
       * Get values from drupal form into vue model
       */
      setValues() {
        for (let selector in fieldMap) {
          let field = fieldMap[selector];
          let element = $(selector);
          let value = element.val();

          if (element.is(':checkbox')) {
            value = element.prop('checked')
          }

          this.profile[field] = value;
        }
      },

      /**
       * Apply vue model values to drupal form
       */
      applyValues() {
        for (let selector in fieldMap) {
          let field = fieldMap[selector];
          let element = $(selector);
          let value = this.profile[field];
          element.val(value);

          if (element.is(':checkbox')) {
            element.prop('checked', value);
          }
        }
      },

      edit(op) {
        Vue.util.extend(this.profile_clone, this.profile);
        this[op] = true;
      },

      cancel(op) {
        Vue.util.extend(this.profile, this.profile_clone);
        this[op] = false;
      },

      submit() {
        // Make submitted equals to true to show erros if any
        this.submitted = true;

        if (this.password_mode && !this.$vs_user_password_validator.valid) {
          return;
        }

        if (!this.password_mode && !this.$vs_user_profile_validator.valid) {
          return;
        }
        
        this.applyValues();
        let form = $('.vs-user-profile--form-drupal form').submit();

        // Restore submitted
        this.submitted = false;
      }
    },
    data: {
      submitted: false,
      edit_mode: false,
      password_mode: false,
      require_password: true,
      address_manual: true,
      profile_clone: {},
      profile: {
        current_pass: '',
        pass1: '',
        pass2: '',
        field_mail: '',
        field_contact_number: '',
        field_marketing_optin: '',
        field_uk_athletics_number: '',
        field_region: []
      }
    }
  });
};
