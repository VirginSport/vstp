import $ from '../lib/jquery';
import places from '../lib/google-places';
import Vue from '../lib/vue';
import blur from '../helper/input-blur';
import moment from 'moment-timezone/index';

blur();

let fieldMap = {
  'input#edit-mail': 'field_mail',
  'input#edit-mail-confirm': 'field_confirm_mail',
  'input#edit-pass-pass1': 'pass1',
  'input#edit-pass-pass2': 'pass2',
  '#edit-field-first-name input': 'field_first_name',
  '#edit-field-last-name input': 'field_last_name',
  '#edit-field-gender select': 'field_gender',
  '.date-day select': 'field_date_day',
  '.date-month select': 'field_date_month',
  '.date-year select': 'field_date_year',
};

export default () => {
  let selector = '.v-element.vs-user-register';

  if (!$(selector).length) {
    return;
  }

  new Vue({
    el: selector,
    compiled() {

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
       * Check if birth date is valid
       */
      validBirthDate() {
        let birthDateData = [
          this.profile.field_date_year,
          this.profile.field_date_month - 1,
          this.profile.field_date_day
        ];

        let birthDate = moment(birthDateData);

        return birthDate.isValid();
      },

      /**
       *  Check if user has more than parameter years
       *
       * @param age
       * The number of years the user must have at minimum
       */
      greaterThan(age = 13) {
        let now = moment();

        let birthDateData = [
          this.profile.field_date_year,
          this.profile.field_date_month - 1,
          this.profile.field_date_day
        ];

        let birthDate = moment(birthDateData); // another date
        let duration = moment.duration(now.diff(birthDate));
        let yearsNumber = duration.asYears();

        return yearsNumber > age;
      },

      /**
       * Update chosen value based on model
       */
      updateChosen() {
        window.setTimeout(() => {
          $('select').trigger("chosen:updated");
        }, 0);
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

      submit() {
        this.submitted = true;

        if (!this.$vs_user_register_validator.valid || !this.$vs_user_register_date_validator.valid || !this.validBirthDate()) {
          return;
        }

        // Prevent multiple clicks
        this.validSubmit = true;

        this.applyValues();
        let form = $('.vs-user-login--form-drupal form').submit();
      }
    },
    data: {
      submitted: false,
      validSubmit: false,
      address_manual: false,
      profile: {
        current_pass: '',
        pass1: '',
        pass2: '',
        field_mail: '',
        field_confirm_mail: '',
        field_first_name: '',
        field_last_name: '',
        field_date_day: '',
        field_date_month: '',
        field_date_year: '',
        field_gender: '',
        field_contact_number: '',
      }
    }
  });
};
