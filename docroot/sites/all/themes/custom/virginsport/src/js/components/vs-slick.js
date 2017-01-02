import 'slick-carousel';
import Drupal from '../lib/drupal';

export default () => {
  Drupal.behaviors.virginSportSlick = {
    attach: () => findSlicks()
  };
};

function findSlicks() {
  let $sliders = $('.vs-video-banner__slider').not('.vs-video-banner__slider--found');

  $sliders
    .addClass('vs-video-banner__slider--found')
    .each((idx, el) => {
      let $el = $(el);

      $el.slick({
        arrows: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              centerPadding: 0,
              autoplay: true
            }
          }, {
            breakpoint: 768,
            settings: "unslick"
          }
        ]
      });
    })
  ;
}
