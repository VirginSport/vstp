import $ from '../lib/jquery';
import bootstrap from 'bootstrap.native/dist/bootstrap-native';

let xs_max = 544;

export default () => {
  // Add fade out to header if video playing and page is on top
  if ( $('.vs-head-region .vs-video').length ) {
    setTimeout(function () {
      let $header_top = $('.vs-header--top');

      $header_top.removeClass('vs-header--video-fade-out');
      $header_top.addClass('vs-header--video-fade-in');
    }, 5000);
  }

  $('body').mousemove(function() {
    $('.vs-header--top').addClass('vs-header--video-fade-out');
  });

  // When user click on play button start modal video and pause background video
  $('.vs-video__play-button').click(function() {
    let $body = $('body');

    $body.toggleClass('vs-video-modal--opened');

    // Pause background video
    $('.vs-video__video').trigger('pause');

    // Start overlay video
    let $modal_video_id = $('.vs-video__play-button').attr('data-target');
    let $modal_element = $(`#${$modal_video_id}`).detach();

    // Append modal element to body to avoid z-index issues
    $body.append($modal_element);

    let modal = new bootstrap.Modal($modal_element.get(0));
    modal.open();

    function modalClose() {
      // CLose modal
      modal.close();

      // Toggle videos
      $('.vs-video__video').trigger('play');
      $modal_element.find('video').trigger('pause');

      // Remove class from body
      setTimeout(function () {
        $body.removeClass('vs-video-modal--opened');
      }, 200);
    }

    let $video = $modal_element.find('video');

    if ($video.length && $(window).width() <= xs_max) {
      let videoDom = $video.get(0);

      if (videoDom.requestFullscreen) {
        videoDom.requestFullscreen();
      } else if (videoDom.mozRequestFullScreen) {
        videoDom.mozRequestFullScreen();
      } else if (videoDom.webkitRequestFullscreen) {
        videoDom.webkitRequestFullscreen();
      }

      $video.bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
        let fullscreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;

        if (!fullscreen) {
          modalClose();
        }
      });

    }

    $video.trigger('play');

    $body.keyup(function(e) {
      // When user clicks on esc close modal
      if(e.which == 27){
        modalClose();
      }
    });

    $('.vs-video__close').click(function(e) {
      modalClose();
    });
  });

  // Scroll to content area on homepage
  $('.vs-video__arrow').click(function(event) {
    var target = $('.vs-head-region').next('.vs-region');

    $('html, body').animate({
      scrollTop:$(target).offset().top
    }, 'slow');
    event.preventDefault();
  });

  $(window).resize(function() {
    if ($(window).width() >= xs_max) {
      $('.vs-video__video').each(function() {
        let self = this;
        setTimeout(function() {
          self.play();
        }, 0);
      });
    }
  }).resize();
};
