import $ from '../lib/jquery';

const VIRGIN_DEFAULT_COLOR = 'red';

/**
 * This class list must be used on pictures.scss file to fix image loading on
 * Internet Explorer 10+
 */

const BACKGROUND_SELECTORS = [
  '.vs-card-past__image',
  '.vs-package-card-wrapper',
  '.vs-card-untimed-event__image',
  '.vs-claim-ticket__background',
  '.vs-festival-profile-header__background',
  '.vs-carousel__image',
  '.vs-promo-banner__background',
  '.vs-hero-banner__background--fixed',
  '.vs-promo-banner__background',
  '.vs-hero-event-card__image',
  '.vs-card-upcoming__image',
  '.vs-cta-block__background--with-image-limited-opacity',
  '.vs-basic-content-block__hero-image',
  '.vs-photo-gallery__thumbnail'
];

export default () => {
  let bgColor = $('.vs-hero-banner').attr('data-color') || VIRGIN_DEFAULT_COLOR;

  let $bgs = $(BACKGROUND_SELECTORS.join(','));

  $bgs.each((idx, el) => {
    let $bg = $(el);

    let bgImage = window.getComputedStyle(el)['backgroundImage'];
    let bgUrl = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

    let notLoaded = () => {
      $bg.addClass('vs-placeholder-bg');
      $bg.addClass('vs-placeholder-bg--' + bgColor);
    };

    let hasLoaded = () => {
      $bg.addClass('vs-placeholder-bg--disabled')
    };

    onImageLoad(bgUrl, notLoaded, hasLoaded);
  });

  $('.picture-wrapper').each((idx, el) => {
    let $picture_wrapper = $(el);
    let $placeholder = $picture_wrapper.find('.picture-wrapper__placeholder');

    // Skip this picture if placeholder does not exist
    if (!$placeholder.length) {
      return;
    }

    let $source = $picture_wrapper.find('source');
    let srcUrl = $source.attr('srcset');
    let srcWidth = $source.attr('data-width');
    let srcHeight = $source.attr('data-height');

    let $img = $picture_wrapper.find('img');
    let imgWidth = $img.css('width');
    let imgHeight = $img.css('height');

    // Calculate image aspect ratio based on css defined property and
    if (imgWidth.length) {
      let percentage = parseInt(imgWidth) / srcWidth;

      imgHeight = Math.ceil(srcHeight * percentage);
    }
    else if (imgHeight.length) {
      let percentage = parseInt(imgHeight) / srcHeight;

      imgWidth = Math.ceil(srcWidth * percentage);
    }

    $placeholder.css('height', imgHeight);
    $placeholder.css('width', imgWidth);

    let notLoaded = () => {
      $placeholder.addClass('picture-wrapper__placeholder');
      $placeholder.addClass('picture-wrapper__placeholder--' + bgColor);
    };

    let hasLoaded = () => {
      $placeholder.addClass('picture-wrapper__placeholder--disabled')
    };

    onImageLoad(srcUrl, notLoaded, hasLoaded);
  });


  function onImageLoad(src, notLoadedCallback, loadedCallback) {
    let tempImg = new Image();
    tempImg.src = src;

    notLoadedCallback();

    tempImg.onload = () => {
      window.setTimeout(() => {
        loadedCallback();
      }, 100);
    };
  }
};

