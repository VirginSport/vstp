import bootstrap from 'bootstrap.native/dist/bootstrap-native';
import 'slick-carousel';
import Drupal from '../lib/drupal';

export default () => {
  Drupal.behaviors.virginSportPhotoGallery = {
    attach: () => initPhotoGalleries()
  }
}

/**
 * Activates the user dropdown
 *
 * @param $body
 * @param $header
 */
// Initialize the photo gallery sliders
function initPhotoGalleries() {

  var photoGalleries =
    $(".vs-photo-gallery:not(.photo-gallery-initialized), .vs-photo-gallery:not(.photo-gallery-initialized)");

  photoGalleries.each(function(i, obj) {

    var _ = $(this);

    var $root = _.find(".vs-photo-gallery-wrapper");
    var $fsRoot = _.find(".vs-photo-gallery-wrapper--fullscreen");

    var $closeButton = _.find(".close");
    var $imageWrapper = $root.find(".vs-photo-gallery__image-wrapper");
    var $fsImageWrapper = $fsRoot.find(".vs-photo-gallery__image-wrapper");

    var $thumbnailsWrapper = $root.find(".vs-photo-gallery__thumbnails-wrapper");
    var $fsThumbnailsWrapper = $fsRoot.find(".vs-photo-gallery__thumbnails-wrapper");

    var thumbnailsVisible = $thumbnailsWrapper.length;
    $fsRoot = $fsRoot.detach();
    $('body').append($fsRoot);
    let modal = new bootstrap.Modal($fsRoot.get(0));

    // Setup slick for the image and thumbnail wrappers
    var imageWrapperBaseOptions = {
      "slidesToScroll": 1,
      "arrows": true,
      "focusOnSelect": true,
      "infinite": false
    };

    var thumbnailsWrapperBaseOptions = {
      "slidesToScroll": 1,
      "slidesToShow": 3,
      "arrows": false,
      "focusOnSelect": true,
      "centerMode": false,
      "variableWidth": true,
      "infinite": false,
      "swipeToSlide": true
    };

    $imageWrapper.slick(
      $.extend(
        thumbnailsVisible ?
        {
          "asNavFor": $thumbnailsWrapper[0]
        } :
        {},
        imageWrapperBaseOptions,
        {
          "dots": !thumbnailsVisible,
          "responsive": [
            {
              "breakpoint": 768,
              "settings": {
                "arrows": false,
                "dots": true
              }
            },
            {
              "breakpoint": 1440,
              "settings": {
                "arrows": false
              }
            }]
        })
    );

    $thumbnailsWrapper.slick(
      $.extend(
        {},
        thumbnailsWrapperBaseOptions,
        {
          "asNavFor": $imageWrapper[0]
        })
    );

    $fsImageWrapper.slick(
      $.extend(
        thumbnailsVisible ?
        {
          "asNavFor": $fsThumbnailsWrapper[0]
        } :
        {},
        imageWrapperBaseOptions)
    );

    $fsThumbnailsWrapper.slick(
      $.extend(
        {},
        thumbnailsWrapperBaseOptions,
        {
          "asNavFor": $fsImageWrapper[0]
        })
    );

    // Set the width of the thumbnail areas to ensure these are
    // always centered horizontally.
    var thumbnailsWrapperWidth = 0;

    $thumbnailsWrapper.find(".slick-slide")
      .each(function(i, obj) {
        thumbnailsWrapperWidth += $(this).width();
      })
      .keyup(function(e) {
        if (e.keyCode == 37) {
          console.log("imageWrapper.slick('slickPrev');");
          $imageWrapper.slick('slickPrev');
        }

        if (e.keyCode == 39) {
          console.log("imageWrapper.slick('slickNext');");
          $imageWrapper.slick('slickNext');
        }
      });

    $thumbnailsWrapper.width(thumbnailsWrapperWidth);

    thumbnailsWrapperWidth = 0;
    $fsThumbnailsWrapper.find(".slick-slide")
      .each(function(i, obj) { thumbnailsWrapperWidth += $(this).width(); });

    $fsThumbnailsWrapper.width(thumbnailsWrapperWidth);

    // Slick has reported bugs regarding syncing of slide selection
    // between multiple instances.
    // This work-around ensures selection is synced between the inline
    // and fullscreen instances, while also ensuring that focus for
    // keyboard-based navigation is placed properly.
    $imageWrapper.on('afterChange', function(e, slick, currentSlide) {

      var selectedFsSlide = $fsImageWrapper.slick('slickCurrentSlide');

      if (currentSlide != selectedFsSlide) {
        $fsImageWrapper.slick('slickGoTo', currentSlide);
      }
    });

    $fsImageWrapper.on('afterChange', function(e, slick, currentSlide) {

      var selectedInlineSlide = $imageWrapper.slick('slickCurrentSlide');

      if (currentSlide != selectedInlineSlide) {
        $imageWrapper.slick('slickGoTo', currentSlide);
      }

      if (fsOpen()) {
        $fsImageWrapper.find(".slick-current").focus();
      }
    });

    var fsOpen = function() {
      return $fsImageWrapper.parents("body.modal-open").length;
    }

    // Set the handlers for opening the fullscreen view
    $fsRoot.on('show.bs.modal', function(e) {

      // We need to ensure the fullscreen slide is selected
      // only when the modal is open, or it might not appear.
      // Bootstrap has event 'shown.bs.modal' (with an 'n')
      // but it does not fire when the target element has the 'fade'
      // class, so we detect the transition duration instead.
      var transitionDelay = parseFloat($fsRoot.css("transition-delay"));
      var transitionDuration = parseFloat($fsRoot.css("transition-duration"));

      var delay = (transitionDelay + transitionDuration) * 1000;

      window.setTimeout(function() {
        var selectedFsSlide = $fsImageWrapper.slick('slickCurrentSlide');
        $fsImageWrapper.slick('slickGoTo', selectedFsSlide);
      }, delay);
    });

    // Ensure navigation controls are always shown when
    // the fullscreen view is opened
    $fsRoot.on('hidden.bs.modal', function(e) {
      $fsRoot.removeClass('hide-controls');
    })

    $closeButton.click(function () {
      modal.close();
      window.setTimeout(function () {
        $thumbnailsWrapper.find(".slick-current").focus();
      }, 0);
    });

    $fsImageWrapper.find(".slick-current")
      .keyup(function (e) {
        if (e.keyCode == 27) {
          modal.close();

          window.setTimeout(function () {
            $thumbnailsWrapper.find(".slick-current").focus();
          }, 0);
        }
      });

    // Detect image mouse clicks (but not drags) and set up
    // the handlers for opening the fullscreen view and
    // toggling controls
    var mouseX = 0;
    var mouseY = 0;

    $.merge($imageWrapper, $fsImageWrapper).find(".slick-slide")
      .mousedown(function(e) {
        mouseX = e.screenX;
        mouseY = e.screenY;
      });

    $.merge($imageWrapper, $fsImageWrapper).find(".slick-slide")
      .mouseup(function(e) {
        if (mouseX == e.screenX && mouseY == e.screenY) {
          if (fsOpen()) {
            $fsRoot.toggleClass("hide-controls");
            return;
          }

          var selectedFsSlide = $fsImageWrapper.slick('slickCurrentSlide');
          $fsImageWrapper.slick('slickGoTo', selectedFsSlide);

          modal.open();
        }
      });

    // All done
    $(this).addClass("photo-gallery-initialized");
  });
}


