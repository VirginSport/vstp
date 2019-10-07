(function ($) {

  /**
   * Executes on document ready
   */
  $(document).ready(function () {
    var params = query();

    // Fetch any destination parameters in the URL
    var redirect_params = '';
    if (params['destination-params']) {
      redirect_params = '?' + $.param(JSON.parse(window.atob(params['destination-params'])));
    }

    // Check if the region cookie is set, and if it is redirect the user to
    // that hostname.
    var regionHostname = getCookie('vs_region_hostname');

    if (regionHostname && location.hostname != regionHostname) {
      if (params.destination) {
        location.href = location.protocol + '//' + regionHostname + params.destination + redirect_params;
      } else {
        location.href = location.protocol + '//' + regionHostname;
      }

      return;
    }

    // Check if there's a region marked as default, and if it is then redirect
    // the user to that region.
    var $default = $('[vs-region-default="1"]').first();

    if ($default.length) {
      createCookie('vs_region_hostname', $default.attr('vs-region-hostname'), 365);
      //createCookie('vs_basket_region_hostname', $default.attr('vs-region-hostname'), 365);

      if (params.destination) {
        location.href = $default.attr('href') + params.destination + redirect_params;
      } else {
        location.href = $default.attr('href');
      }

      return;
    }

    // Finally register a click handler to all the region selection links in
    // the page, and ensure the user preferences are set before the user is
    // redirected to the region he selected.
    $('a[vs-region-hostname]').click(function (e) {
      var $el = $(this);

      // Store the region preference cookie to last for a year
      createCookie('vs_region_hostname', $el.attr('vs-region-hostname'), 365);
      //createCookie('vs_basket_region_hostname', $el.attr('vs-region-hostname'), 365);

      // If there's a destination parameter in the URL stop the default link
      // behaviour, and redirect the user to the hostname he selected appended
      // with the destination path and query parameters.
      if (params.destination) {
        e.preventDefault();
        window.location = $el.attr('href') + params.destination + redirect_params;
      }
    });
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

}(jQuery));
