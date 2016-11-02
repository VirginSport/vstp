import Vue from 'vue';
import VueValidator from 'vue-validator';

Vue.use(VueValidator);

/*
 * Check if is a valid email
 */
Vue.validator('email', {
  message: 'invalid email address',
  check: function (val) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
  }
});

export default Vue;
