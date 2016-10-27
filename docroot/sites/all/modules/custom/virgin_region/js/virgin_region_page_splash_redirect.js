(function () {

    /**
     *  Get a cookie value
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

    var regionHostname = getCookie('vs_region_hostname');

    if (regionHostname && location.hostname != regionHostname) {
        var protocol = location.protocol;

        location.href = protocol + '//' + regionHostname;
    }

}());
