import $ from '../lib/jquery';

/**
 * Adjust hero banner image if there is some kind of relative content before vs-header
 */
export default () => {
  $(document).ready(function () {
    let $heroBannerEl = $('.vs-head-region .vs-hero-banner__background--fixed')
    let $notificationEl = $('.vs-notification--not-sticky');

    // If hero banner does not exist on current page bail out, we don't need to check
    // notification element because it is always available
    if (!$heroBannerEl.length) {
      return;
    }

    // Adjust hero banner heigth
    function adjustHeroBannerHeight() {
      // Hero banner was styled with min-height so lets get its value
      let heroBannerHeight = parseInt($heroBannerEl.css('min-height'));
      // Read notification element height
      let notificationHeight = $notificationEl.height();

      // Adjust hero banner height with notification height
      $heroBannerEl.height(heroBannerHeight + notificationHeight);
    }

    // Close removes notification so we need to readjust hero banner height
    $notificationEl.find('.vs-notification__close').click(adjustHeroBannerHeight);

    // Every time page is resized check for changes
    $(window).resize(adjustHeroBannerHeight);

    // Adjust on page load
    adjustHeroBannerHeight();
  });
};
