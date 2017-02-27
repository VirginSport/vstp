<?php
/**
 * @file
 * Share buttons template.
 *
 * @var string $url
 *  The URL to be shared
 * @var string subject
 *  The subject of what is being shared
 */
?>

<div class="vs-share-button">
  <div class="vs-share-button__content">
    <div class="hidden-xs-down vs-share-button__social-links">
      <a
        class="vs-share-button__icon-button vs-share-button__icon-twitter vs-share-button__icon-button--popup"
        href="http://twitter.com/share?url=<?php print urlencode($url); ?>"
        vs-share-event="twitter"
        vs-location="<?php print $location; ?>"
      >
        <i class="icon-twitter"></i>
        <span></span>
      </a>
      <a
        class="vs-share-button__icon-button vs-share-button__icon-facebook vs-share-button__icon-button--popup"
        href="http://www.facebook.com/sharer/sharer.php?u=<?php print urlencode($url); ?>"
        vs-share-event="facebook"
        vs-location="<?php print $location; ?>"
      >
        <i class="icon-facebook"></i>
        <span></span>
      </a>
      <a
        class="vs-share-button__icon-button vs-share-button__icon-email"
        href="mailto:?subject=<?php print urlencode($subject); ?>&body=<?php print urlencode($url); ?>"
        vs-share-event="email"
        vs-location="<?php print $location; ?>"
      >
        <i class="icon-email-filled"></i>
        <span></span>
      </a>
    </div>
    <a
      class="vs-share-button__icon-button vs-share-button__icon-share"
      vs-share-event="share button"
      vs-location="<?php print $location; ?>"
    >
      <i class="icon-share"></i>
      <span></span>
    </a>
  </div>
</div>
