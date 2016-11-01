import $ from '../lib/jquery';

export default () => {
  share();
};

function share() {
  $('.icon-share').click(function () {
    if ($('.vs-share-button__icon-share--active').length > 0){
      $('.vs-share-button__icon-share').removeClass('vs-share-button__icon-share--active');
      $('.vs-share-button__social-links').removeClass('vs-share-button__social-links--active');
      $('.vs-share-button__content').removeClass('vs-share-button__content--active');
    }
    else {
      $('.vs-share-button__icon-share').addClass('vs-share-button__icon-share--active');
      $('.vs-share-button__social-links').addClass('vs-share-button__social-links--active');
      $('.vs-share-button__content').addClass('vs-share-button__content--active');
    }
  })
}
