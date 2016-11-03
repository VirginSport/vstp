import $ from '../lib/jquery';
import places from '../lib/google-places';
import Vue from '../lib/vue';

let fieldMap = {
  'input#edit-name': 'name',
  'input#edit-pass': 'password'
};

export default () => {
  let selector = '#vs-user-login';

  if (!$(selector).length) {
    return;
  }

  new Vue({
    el: selector,
    compiled() {
      this.setValues();
    },  
    methods: {

      /**
       * Get values from drupal form into vue model
       */
      setValues() {
        for (let selector in fieldMap) {
          let field = fieldMap[selector];

          this.profile[field] = $(selector).val();
        }
      },

      /**
       * Apply vue model values to drupal form
       */
      applyValues() {
        for (let selector in fieldMap) {
          let field = fieldMap[selector];
          let value = this.profile[field];

          $(selector).val(value);
        }
      },

      submit() {
        this.applyValues();
        let form = $('.vs-user-login--form-drupal form').submit();
      }
    },
    data: {
      profile: {
        name: '',
        password: ''
      }
    }
  });
};
