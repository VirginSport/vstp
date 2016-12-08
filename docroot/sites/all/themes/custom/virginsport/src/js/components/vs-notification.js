import $ from '../lib/jquery';

export default () => {
  $('.vs-notification .vs-notification__close').click(function() {
    $(this).closest('.vs-notification__wrapper').addClass('vs-notification--hide');
  });
};
