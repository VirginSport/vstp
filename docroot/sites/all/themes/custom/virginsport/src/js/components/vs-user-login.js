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
      this.bindValues();
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
       * Check if password is not empty or has been autocompleted by google chrome
       */
      passwordValid() {
        return this.profile.password.length || $(selector).find('input[type=password]:-webkit-autofill').length;
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
