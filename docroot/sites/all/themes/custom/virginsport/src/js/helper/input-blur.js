import $ from '../lib/jquery';

/**
 * Add class to fields on blur event based on input value
 */
export default () => {
  $(document).ready(function() {
    $('.vs-form-group .form-control').on('blur', function() {
      if($(this).val()) {
        $(this).addClass('vs-form-control--not-empty');
      } else {
        $(this).removeClass('vs-form-control--not-empty');
      }
    });
  });
};
