import Vue from 'vue';
import VueValidator from 'vue-validator';
import VueResource from 'vue-resource';

Vue.use(VueValidator);
Vue.use(VueResource);

// VALIDATORS ----------------------------------------------------------------------------------------------------------

/*
 * Check if is a valid email
 */
Vue.validator('email', {
  message: 'invalid email address',
  check: function (val) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
  }
});

/*
 * Check if properties values match
 */
Vue.validator('match', {
  message: 'the values do not match',
  check: function (val1, val2) {
    return val1 == val2;
  }
});

// DIRECTIVES ----------------------------------------------------------------------------------------------------------

/**
 * Directive to simulate init function
 */
Vue.directive('init', function (data) {
  if (!this.vm || !this.vm.init) {
    return;
  }

  this.vm.init(data);
});

export default Vue;
