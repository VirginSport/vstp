
export default {
  query: query
}

/**
 * Gets the query parameters in the URL
 *
 * @param {string} url
 *  The url to be parsed for query parameters
 * @returns {{}}
 *  An object containing the list of URL query parameters
 */
function query(url) {
  return (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
      var p=a[i].split('=', 2);
      if (p.length != 2) continue;
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  })(url.substr(1).split('&'))
}
