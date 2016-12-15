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
       * Check if password is not empty or has been auto-completed by google chrome
       */
      passwordValid() {
        let password_autofilled = false;

        // Because google chrome auto-complete does not fill password model until user interaction for security reasons,
        // we have to check initially if the field has been auto-completed using the selector above.
        // We had to use the drupal form input for initial verification, because vueJS input has a delay for google auto-complete.
        // If user does not changed the form password input, check on hidden drupal form if it has been auto-completed,
        // otherwise just check on vueJS model,
        if (this.password_changed) {
          return this.profile.password.length
        } else {
          password_autofilled = !!$(selector).find('.vs-user-login--form-drupal input[type=password]:-webkit-autofill').length;
        }

        return this.profile.password.length || password_autofilled;
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
        this.submitted = true;

        if (!this.$vs_user_login_validator.valid || !this.passwordValid()) {
          return;
        }
        
        this.applyValues();
        let form = $('.vs-user-login--form-drupal form').submit();
      }
    },
    data: {
      submitted: false,
      password_changed: false,
      profile: {
        name: '',
        password: ''
      }
    }
  });
};
