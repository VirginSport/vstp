import $ from '../lib/jquery';

export default () => {

  // Touch Device Detection
  let isTouchDevice = 'ontouchstart' in document.documentElement;

  if (isTouchDevice) {
    $('.vs-user-menu__trigger').addClass('has-touch');
  }

};
