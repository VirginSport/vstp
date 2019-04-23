import $ from '../lib/jquery';
import bootstrap from 'bootstrap.native/dist/bootstrap-native';

const xs_max = 544;

export default () => {
  let $videoBlock = $('video.vs-video-block__video');

  $videoBlock.each(function(idx, el) {
    el.play();
  });

  // When user click on play button start modal video and pause background video
  $('.vs-video__play-button').click(function() {
    const $body = $('body');

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

      // Trigger slider resize to avoid white screens on slick
      $('.slider').resize();
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
};
