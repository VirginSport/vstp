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
  '#edit-field-contact-number input': 'field_contact_number',
  '#edit-field-marketing-optin input': 'field_marketing_optin',
  '#edit-field-uk-athletics-number input': 'field_uk_athletics_number',
  '#edit-field-medical-conditions select': 'field_medical_conditions',
  '#edit-field-medical-conditions-other textarea': 'field_medical_conditions_other',
  '#edit-field-medications textarea': 'field_medications',
  '#edit-field-allergies textarea': 'field_allergies',
  '#edit-field-agree-share-medical-info input': 'field_agree_share_medical_info',
  '#edit-field-address-line-1 input': 'field_address_line_1',
  '#edit-field-address-line-2 input': 'field_address_line_2',
  '#edit-field-address-city input': 'field_address_city',
  '#edit-field-address-state input': 'field_address_state',
  '#edit-field-address-postcode input': 'field_address_postcode',
  '#edit-field-region select': 'field_region',
  '#edit-field-address-country select': 'field_address_country'
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

      this.bindAutocomplete();
      this.bindLists();
      this.populateLists();
      this.setValues();
    },
    ready() {
      this.$el.classList.add('v-element--ready');
    },
    methods: {
      /**
       * Convert lists key to text
       */
      getListText(field, key) {
        if (!key.length) {
          return '';
        }
        return $(`[name=${field}]`).find(`option[value=${key}]`).text();
      },

      bindAutocomplete() {
        let acField = $('#google-autocomplete').get(0);

        places(acField, (p) => {
          this.profile.field_address_line_1 = `${p.long('route')} ${p.long('street_number')}`;
          this.profile.field_address_city = p.short('locality');
          this.profile.field_address_country = p.short('country');
          this.profile.field_address_state = p.short('administrative_area_level_1');
          this.profile.field_address_postcode = p.short('postal_code');
        });
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
        this.applyValues();
        let form = $('.vs-user-profile--form-drupal form').submit();
      }
    },
    data: {
      edit_mode: false,
      password_mode: false,
      require_password: true,
      address_manual: false,
      profile_clone: {},
      profile: {
        current_pass: '',
        pass1: '',
        pass2: '',
        field_mail: '',
        field_allergies: '',
        field_medications: '',
        field_contact_number: '',
        field_marketing_optin: '',
        field_uk_athletics_number: '',
        field_medical_conditions_other: '',
        field_agree_share_medical_info: '',
        field_address_line_1: '',
        field_address_line_2: '',
        field_address_city: '',
        field_address_state: '',
        field_address_postcode: '',
        field_region: [],
        field_address_country: [],
        field_medical_conditions: []
      }
    }
  });
};
