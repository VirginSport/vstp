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

/*
 * Conditional requirement
 */
Vue.validator('conditional_required', {
  message: 'field is required',
  /**
   * Validate a field is required conditionally to other fields populated
   *
   * @param val1
   *  The field value
   * @param values
   *  An array of the conditional fields values
   * @returns boolean
   */
  check: function (val1, values) {
    let conditionalEmpty = true;

    // Check if any of the conditional fields has a value
    for (let i = 0; i < values.length; i++) {
      let value = values[i];

      if (value && value.length) {
        conditionalEmpty = false;
        break;
      }
    }

    // If any of the conditional fields has value make field required
    if (!conditionalEmpty) {
      return val1 && val1.length;
    }

    // Otherwise the field is valid
    return true;
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
