(function ($) {

  const VIRGIN_REGION_REGION_COOKIE = 'vs_region_hostname';
  const VIRGIN_REGION_BASKET_REGION_COOKIE = 'vs_basket_region_hostname';

  /**
   * Executes on document ready
   */
  $(document).ready(function () {
    // If region is not available like in splash page bail out
    if (!Drupal.settings.virgin_region.region_available) {
      return;
    }

    // Persist the current region on cookie if cookie is empty
    var region_cookie = getCookie(VIRGIN_REGION_REGION_COOKIE);

    if (!region_cookie) {
      createCookie(VIRGIN_REGION_REGION_COOKIE, location.hostname, 365);
      createCookie(VIRGIN_REGION_BASKET_REGION_COOKIE, location.hostname, 365);
    }
  });
  
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
   * Get a cookie value
   *
   * @param name
   *  The name of the cookie
   * @returns string|null
   *  The cookie value or null if not found
   */
  function getCookie(name) {
    var encodedName = encodeURIComponent(name) + "=";
    
    // Split cookie list string into an array, by default cookies are
    // separated by a ; and white space
    var cookieList = document.cookie.split('; ');
    
    for (var i = 0; i < cookieList.length; i++) {
      var cookie = cookieList[i];
      
      // If encoded name exists return the value portion of cookie, that comes
      // after the encoded name
      if (cookie.indexOf(encodedName) === 0) {
        var cookieValue = cookie.substring(encodedName.length, cookie.length);
        return decodeURIComponent(cookieValue);
      }
    }
    
    // Default cookie value
    return null;
  }

}(jQuery));
