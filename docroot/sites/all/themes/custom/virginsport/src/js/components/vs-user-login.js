import $ from '../lib/jquery';
import Vue from '../lib/vue';
import blur from '../helper/input-blur';

blur();

let fieldMap = {
  'input#edit-name': 'name',
  'input#edit-pass': 'password'
};

export default () => {
  let selector = '.v-element.vs-user-login';

  if (!$(selector).length) {
    return;
  }

  new Vue({
    el: selector,
    compiled() {
      this.setValues();
    },
    ready() {
      this.$el.classList.add('v-element--ready');
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
