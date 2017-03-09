import $ from '../lib/jquery';
import Vue from '../lib/vue';

export default () => {
  let selector = '.vs-user-password-reset';

  if (!$(selector).length) {
    return;
  }

  new Vue({
    el: selector,
    methods: {
      submit() {
        $('.vs-user-password-reset__drupal-form button').click();
      }
    }
  });
};
