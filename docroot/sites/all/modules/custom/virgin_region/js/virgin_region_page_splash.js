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
   * Gets the query parameters in the URL
   *
   * @returns {{}}
   *  An object containing the list of URL query parameters
   */
  function query() {
    return (function(a) {
      if (a == "") return {};
      var b = {};
      for (var i = 0; i < a.length; ++i) {
        var p=a[i].split('=', 2);
        if (p.length != 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
      }
      return b;
    })(window.location.search.substr(1).split('&'))
  }
  
  /**
   * Executes on document ready
   */
  $(document).ready(function () {
    var params = query();

    // Register a click handler to all the region selection links to
    // ensure the user preference is set, or that a redirection
    // happens if a destination parameter was set in the URL.
    $('a[region-hostname]').click(function (e) {
      var $el = $(this);

      // Store the region preference cookie to last for a year
      createCookie('vs_region_hostname', $el.attr('region-hostname'), 365);
  
      // If there's a destination parameter in the URL stop the
      // default behaviour of the link, and redirect the user
      // to the hostname he selected appended with the destination
      // path and additional query parameters if passed.
      if (params.destination) {
        e.preventDefault();
  
        var redirect_params = '';
        if (params['destination-params']) {
          redirect_params = '?' + $.param(JSON.parse(window.atob(params['destination-params'])));
        }
  
        window.location = $el.attr('href') + params.destination + redirect_params;
      }
    });
  });
  
}(jQuery));
