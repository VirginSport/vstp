import $ from '../lib/jquery';

export default () => {

  // Touch Device Detection
  let isTouchDevice = 'ontouchstart' in document.documentElement;

  if (isTouchDevice) {
    $('body').addClass('has-touch');
  }

};
