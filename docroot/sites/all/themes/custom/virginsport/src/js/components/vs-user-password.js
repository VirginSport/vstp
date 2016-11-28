import $ from '../lib/jquery';
import Vue from '../lib/vue';
import blur from '../helper/input-blur';

blur();

let fieldMap = {
  'input#edit-name': 'field_mail'
};

export default () => {
  let selector = '.v-element.vs-user-password';

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
        let form = $('.vs-user-password--form-drupal form').submit();
      }
    },
    data: {
      profile: {
        field_mail: ''
      }
    }
  });
};
