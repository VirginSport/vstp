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

  $('[vs-ticket-event]').click(function() {
    // Push event to google tag manager data layer
    if (dataLayer) {
      dataLayer.push({
        'event' : $(this).attr('vs-ticket-event'),
        'TicketLevel' : $(this).attr('vs-ticket-level')
      });
    }
  });

  $('[vs-share-event]').click(function() {
    // Push event to google tag manager data layer
    if (dataLayer) {
      dataLayer.push({
        'event' : 'Socialshare',
        'ContentType' : $('meta[name="vs-content-type"]').attr('content'),
        'EventType' : $('meta[name="vs-event-type"]').attr('content'),
        'EventName' : $('meta[name="vs-event-name"]').attr('content'),
        'FestivalName' : $('meta[name="vs-festival-name"]').attr('content'),
        'VSExperience' : '',
        'SocialMediaType' : $(this).attr('vs-share-event'),
        'Location' : $(this).attr('vs-location')
      });
    }
  });
};
