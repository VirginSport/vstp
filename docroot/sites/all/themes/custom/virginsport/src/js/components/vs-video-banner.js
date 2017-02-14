import 'slick-carousel';
import Drupal from '../lib/drupal';
import onResize from '../helper/on-resize';
import iosVersion from '../lib/ios-version';

const minIosVersion = 10;
const xs_max = 544;

export default () => {
  Drupal.behaviors.virginSportSlick = {
    attach: () => init()
  };

};

onResize(() => {
  playVideos();
});

function init() {
  let $headRegion = $('.vs-head-region');

  // Scroll to content area on homepage
  $headRegion.find('.vs-video__arrow').click(function(event) {
    var target = $headRegion.next('.vs-region');

    $('html, body').animate({
      scrollTop:$(target).offset().top
    }, 'slow');

    event.preventDefault();
  });

  let iosV = iosVersion();
  // Check if is ios and the version is supported
  let supportedVersion = !iosV || iosV >= minIosVersion;

  if (supportedVersion) {
    playVideos();
  } else {
    $headRegion.find('.vs-video__video-wrapper, .vs-video-banner__slider').addClass('ios-unsupported');
  }

  findSlicks(!supportedVersion);
}

function playVideos() {
  if ($(window).width() >= xs_max) {
    $('.vs-head-region .vs-video__video').each(function() {
      let self = this;
      setTimeout(function() {
        self.play();
      }, 0);
    });
  }
}

function findSlicks(applyResponsive = true) {
  let $sliders = $('.vs-video-banner__slider').not('.vs-video-banner__slider--found');

  $sliders
    .addClass('vs-video-banner__slider--found')
    .each((idx, el) => {
      let $el = $(el);

      let properties = {
        arrows: false,
        centerPadding: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              centerPadding: 0,
              autoplay: true
            }
          }
        ]
      };

      if (applyResponsive) {
        properties.responsive.push({
          breakpoint: 768,
          settings: "unslick"
        });
      }

      $el.slick(properties);
    })
  ;
}
