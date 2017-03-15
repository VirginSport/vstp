import $ from '../lib/jquery';
import url from '../helper/url';

export default () => {
  overrideMailTo();
  share();
  hrefCopy();
};

/**
 * Override the share links mailto address subject
 *
 * Because the share buttons are rendered before the metatag module runs it's
 * not possible to set the mailto subject line with the page title, thus it
 * must be set via javascript. This currently only is applied to components
 * in the .vs-head-region, the first region.
 */
function overrideMailTo() {
  let pageTitle = $('head title').text();
  let $mails = $('.vs-head-region .vs-share-button__icon-email');

  $mails.each((idx, el) => {
    let $mail = $(el);
    let href = $mail.attr('href');
    let q = url.query(href);

    if (!q.hasOwnProperty('subject')) {
      return;
    }

    let encodedBody = encodeURIComponent(q.body);
    let encodedSubject = encodeURIComponent(pageTitle);

    $mail.attr('href', `mailto:?subject=${encodedSubject}&body=${encodedBody}`)
  });
}

function share() {
  let $body = $('body');

  $body.on('click', '.vs-share-button', function(e) {
    if ($(this).find('.vs-share-button__icon-share--active').length) {
      $(this).find('.vs-share-button__icon-share').removeClass('vs-share-button__icon-share--active');
      $(this).find('.vs-share-button__social-links').removeClass('vs-share-button__social-links--active');
      $(this).find('.vs-share-button__content').removeClass('vs-share-button__content--active');
      $body.removeClass('vs-mobile-sharer-open');
    }

    else {
      $(this).find('.vs-share-button__icon-share').addClass('vs-share-button__icon-share--active');
      $(this).find('.vs-share-button__social-links').addClass('vs-share-button__social-links--active');
      $(this).find('.vs-share-button__content').addClass('vs-share-button__content--active');
      $body.addClass('vs-mobile-sharer-open');
    }
    e.stopPropagation();
  });

  $body.on('click', '.vs-share-button__icon-button--popup', function(e) {
    let w = 700;
    let h = 350;
    e.preventDefault();
    window.open($(this).attr('href'), $(this).attr('title'), 'width=' + w + ',height=' + h + ',menubar=no,location=no,status=no');
    e.stopPropagation();
  });

  $(document).bind('click touchend', function () {
    $('.vs-share-button .vs-share-button__icon-share').removeClass('vs-share-button__icon-share--active');
    $('.vs-share-button .vs-share-button__social-links').removeClass('vs-share-button__social-links--active');
    $('.vs-share-button').removeClass('vs-share-button__content--active');
    $body.removeClass('vs-mobile-sharer-open');
  });
}

function hrefCopy() {
  let email = '';
  let facebook = '';
  let twitter = '';

  $('.vs-share-button').click(function () {
    email = $(this).find('.vs-share-button__icon-button.vs-share-button__icon-email').attr('href');
    facebook = $(this).find('.vs-share-button__icon-button.vs-share-button__icon-facebook').attr('href');
    twitter = $(this).find('.vs-share-button__icon-button.vs-share-button__icon-twitter').attr('href');

    $('.vs-mobile-sharer .vs-share-button__icon-button.vs-share-button__icon-email').attr('href', email);
    $('.vs-mobile-sharer .vs-share-button__icon-button.vs-share-button__icon-facebook').attr('href', facebook);
    $('.vs-mobile-sharer .vs-share-button__icon-button.vs-share-button__icon-twitter').attr('href', twitter);
  });
}
