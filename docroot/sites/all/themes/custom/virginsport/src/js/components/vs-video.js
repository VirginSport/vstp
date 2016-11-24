import $ from '../lib/jquery';

export default () => {
  let $header_top = $('.vs-header--top');
  let $video = $('.vs-video__video');
  let $modal_video = $('#vs-video-modal video');
  let $body = $('body');

  // Add fade out to header if video playing and page is on top
  setTimeout(function() {
    $header_top.removeClass('vs-header--video-fade-out');
    $header_top.addClass('vs-header--video-fade-in');
  }, 5000);

  $body.mousemove(function() {
    $header_top.addClass('vs-header--video-fade-out');
  });

  // When user click on play button start modal video and pause background video
  $('.vs-video__play-button').click(function() {
    $body.toggleClass('vs-video-modal--opened');

    // Pause background video
    $video.trigger('pause');

    // Start overlay video
    $modal_video.trigger('play');
  });

  // When user dismiss modal pause video and start background video
  $('#vs-video-modal').on('hidden.bs.modal', function() {
    // Start background video
    $video.trigger('play');

    // Pause overlay video
    $modal_video.trigger('pause');

    $body.removeClass('vs-video-modal--opened');
  });

  // Scroll to content area on homepage
  $('.vs-video__arrow').click(function(event) {
    var target = $('.vs-region--gradient-home');

    $('html, body').animate({
      scrollTop:$(target).offset().top
    }, 'slow');
    event.preventDefault();
  });

  $(window).resize(function() {
    if ($(window).width() >= 544) {
      $video.each(function() {
        let self = this;
        setTimeout(function() {
          self.play();
        }, 0);
      });
    }
  }).resize();
};
