import 'slick-carousel';
import Drupal from '../lib/drupal';


export default () => {
  Drupal.behaviors.virginSportCarousel = {
    attach: () => initCarousels()
  }
}

/**
 * Initialize carousel
 */
function initCarousels() {

  var carousels = $('.vs-carousel').not('.vs-carousel-found');

  carousels.addClass('vs-carousel-found');

  carousels.each(function(i, obj) {

    var wrapper = $(this).find(".vs-carousel__item-wrapper");

    var autoplay = wrapper.hasClass("autoplay") == 'true';
    var hasAutoplay = ($(this).find(".vs-carousel__item-wrapper.autoplay").length > 0);

    // Classes to be aplied to the 'slick-dots' element
    // given that the specified selector apply to the
    // currently active slide.
    // Default behaviour is for promo banners with images
    // and no heading.
    var slickDotsClasses = [
      // Promo Banner without image
      {
        selector: ".vs-promo-banner__content-wrapper:first-child",
        class: 'promo-banner-no-image'
      }
    ];
    if (hasAutoplay) {
      wrapper.slick({
        "slidesToScroll": 1,
        "arrows": true,
        "focusOnSelect": true,
        "infinite": false,
        "dots": true,
        "adaptiveHeight": true,
        "autoplay": true,
        "autoplaySpeed": 5000,
        "responsive": [
          {
            "breakpoint": 992,
            "settings": {
              "arrows": false
            }
          }
        ]
      });
    }
    else{
      wrapper.slick({
        "slidesToScroll": 1,
        "arrows": true,
        "focusOnSelect": true,
        "infinite": false,
        "dots": true,
        "adaptiveHeight": true,
        "autoplay": false,
        "autoplaySpeed": 5000,
        "responsive": [
          {
            "breakpoint": 992,
            "settings": {
              "arrows": false
            }
          }
        ]
      });
    }


    wrapper.on('beforeChange', function(e, slick, currentSlide, nextSlide) {

      var dots = wrapper.find(".slick-dots");

      // Propagate slide content classes to the wrapper
      var currentSlide = wrapper.find(".slick-slide:nth-child(" + (currentSlide + 1) + ")");
      var targetSlide = wrapper.find(".slick-slide:nth-child(" + (nextSlide + 1) + ")");

      var currentSlideContent = currentSlide.find("vs-promo-banner, .vs-promo-banner, .vs-carousel__image");
      var targetSlideContent = targetSlide.find("vs-promo-banner, .vs-promo-banner, .vs-carousel__image");

      if (currentSlideContent.length) {
        currentSlideContent[0].classList.forEach(function(className) {
          wrapper.removeClass(className);
        });
      }

      if (targetSlideContent.length) {
        targetSlideContent[0].classList.forEach(function(className) {
          wrapper.addClass(className);
        });
      }

      // Update the class list of the slick-dots element
      // according to the presence of elements in the currently
      // active slide
      slickDotsClasses.forEach(function(obj) {
        if (targetSlide.find(obj.selector).length) {
          dots.addClass(obj.class);
          return;
        }

        dots.removeClass(obj.class);
      })
    });

    wrapper.slick('slickGoTo', 0);
  });
}
