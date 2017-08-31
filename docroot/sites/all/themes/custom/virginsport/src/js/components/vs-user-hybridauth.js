import $ from '../lib/jquery';
import Vue from '../lib/vue';
import blur from '../helper/input-blur';

blur();

let fieldMap = {
  'input#edit-email': 'field_mail',
  'select#edit-gender': 'field_gender',
};

export default () => {
  let selector = '.v-element.vs-user-hybridauth-form';

  if(!$(selector).length) {
    return ;
  }

  new Vue({
    el: selector,
    compiled() {

    },
    ready() {
      this.$el.classList.add('v-element--ready');
    },
    methods: {
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
        // Make submitted equals to true to show erros if any
        this.submitted = true;

        if (!this.$vs_user_hybridauth_validator.valid) {
          return;
        }

        this.applyValues();

        let form = $('.vs-user-hybridauth-form-drupal form').submit();

        this.submitted = false;
      }
    },
    data: {
      submitted: false,
      profile: {
        field_mail: '',
        field_gender: '',
      }
    }
  });
};