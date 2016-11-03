import $ from '../lib/jquery';

export default () => {
  share();
};

function share() {

  $('.vs-share-button__icon-button.vs-share-button__icon-share').click(function(e) {
    if ($('.vs-share-button .vs-share-button__icon-share--active').length > 0) {
      $('.vs-share-button .vs-share-button__icon-share').removeClass('vs-share-button__icon-share--active');
      $('.vs-share-button .vs-share-button__social-links').removeClass('vs-share-button__social-links--active');
      $('.vs-share-button .vs-share-button__content').removeClass('vs-share-button__content--active');
      $('body').removeClass('vs-mobile-sharer-open');
    }

    else {
      $('.vs-share-button .vs-share-button__icon-share').addClass('vs-share-button__icon-share--active');
      $('.vs-share-button .vs-share-button__social-links').addClass('vs-share-button__social-links--active');
      $('.vs-share-button .vs-share-button__content').addClass('vs-share-button__content--active');
      $('body').addClass('vs-mobile-sharer-open');
    }
    e.stopPropagation();
  });

  $('.vs-share-button__social-links .vs-share-button__icon-button').click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function() {
    $('.vs-share-button .vs-share-button__icon-share').removeClass('vs-share-button__icon-share--active');
    $('.vs-share-button .vs-share-button__social-links').removeClass('vs-share-button__social-links--active');
    $('.vs-share-button .vs-share-button__content').removeClass('vs-share-button__content--active');
    $('body').removeClass('vs-mobile-sharer-open');
  });

}
