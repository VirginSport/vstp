(function ($) {
  
  /**
   * Create cookie function
   *
   * @param name
   *  The name of the cookie
   * @param value
   *  The value of the cookie
   * @param days
   *  The number of days to expire
   */
  function createCookie(name, value, days) {
    // Convert days to timestamp
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    
    // Global drupal cookie domain variable provided by virgin_Region
    var cookieDomain = Drupal.settings.virgin_region.cookie_domain;
    
    // Set the cookie parameters
    var cookieParts = [
      (encodeURIComponent(name) + "=" + encodeURIComponent(value)),
      "; expires=" + date.toGMTString(),
      "; path=/",
      "; domain=" + cookieDomain
    ];
    
    // Save the cookie
    document.cookie = cookieParts.join('');
  }
  
  /**
   * Executes on document ready
   */
  $(document).ready(function () {

    // Register a click handler to all the region selection links to
    // ensure the user preference is set.
    $('a[region-hostname]').click(function () {

      // Store the region preference cookie to last for a year
      createCookie('vs_region_hostname', $(this).attr('region-hostname'), 365);
    });
  });
  
}(jQuery));
