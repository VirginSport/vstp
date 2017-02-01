import $ from '../lib/jquery';

export default () => {
  share();
  hrefCopy();
};

function share() {

  $('.vs-share-button').click(function(e) {
    if ($(this).find('.vs-share-button__icon-share--active').length) {
      $(this).find('.vs-share-button__icon-share').removeClass('vs-share-button__icon-share--active');
      $(this).find('.vs-share-button__social-links').removeClass('vs-share-button__social-links--active');
      $(this).find('.vs-share-button__content').removeClass('vs-share-button__content--active');
      $('body').removeClass('vs-mobile-sharer-open');
    }

    else {
      $(this).find('.vs-share-button__icon-share').addClass('vs-share-button__icon-share--active');
      $(this).find('.vs-share-button__social-links').addClass('vs-share-button__social-links--active');
      $(this).find('.vs-share-button__content').addClass('vs-share-button__content--active');
      $('body').addClass('vs-mobile-sharer-open');
    }
    e.stopPropagation();
  });

  $('.vs-share-button__icon-button--popup').click(function (e) {
    var w = 700;
    var h = 350;
    e.preventDefault();
    window.open($(this).attr('href'), $(this).attr('title'), 'width=' + w + ',height=' + h + ',menubar=no,location=no,status=no');
    e.stopPropagation();
  });

  $(document).bind('click touchend', function () {
    $('.vs-share-button .vs-share-button__icon-share').removeClass('vs-share-button__icon-share--active');
    $('.vs-share-button .vs-share-button__social-links').removeClass('vs-share-button__social-links--active');
    $('.vs-share-button').removeClass('vs-share-button__content--active');
    $('body').removeClass('vs-mobile-sharer-open');
  });
}

function hrefCopy() {
  var email = '';
  var facebook = '';
  var twitter = '';

  $('.vs-share-button').click(function () {
    email = $(this).find('.vs-share-button__icon-button.vs-share-button__icon-email').attr('href');
    facebook = $(this).find('.vs-share-button__icon-button.vs-share-button__icon-facebook').attr('href');
    twitter = $(this).find('.vs-share-button__icon-button.vs-share-button__icon-twitter').attr('href');

    $('.vs-mobile-sharer .vs-share-button__icon-button.vs-share-button__icon-email').attr('href', email);
    $('.vs-mobile-sharer .vs-share-button__icon-button.vs-share-button__icon-facebook').attr('href', facebook);
    $('.vs-mobile-sharer .vs-share-button__icon-button.vs-share-button__icon-twitter').attr('href', twitter);
  });
}
