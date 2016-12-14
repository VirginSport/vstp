import $ from '../lib/jquery';

/**
 * Update google tag manager dataLayer with events occurred on the website
 */
export default () => {
  $('[virgin-event]').click(function() {
    // Push event too google tag manager data layer
    if (dataLayer) {
      dataLayer.push({ 'event': $(this).attr('virgin-event') })
    }
  });
};
