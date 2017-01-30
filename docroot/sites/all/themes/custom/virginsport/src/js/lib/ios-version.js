export default () => {
  /*
   * Outputs a float representing the iOS version if user is using an iOS browser i.e. iPhone, iPad
   * Possible values include:
   *	3 - v3.0
   *	4.0 - v4.0
   *	4.14 - v4.1.4
   *	false - Not iOS
   *
   	* @see https://gist.github.com/Craga89/2829457
   */

  var iosVersion = parseFloat(
      ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
        .replace('undefined', '3_2').replace('_', '.').replace('_', '')
    ) || false;

  return iosVersion;
}
