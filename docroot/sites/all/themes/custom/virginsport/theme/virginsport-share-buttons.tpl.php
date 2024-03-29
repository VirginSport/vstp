<?php
/**
 * @file
 * Share buttons template.
 *
 * @var bool $use_placeholder
 *  If the url will be provided by a VueJs variable
 * @var string $url
 *  The URL to be shared
 * @var string subject
 *  The subject of what is being shared
 */
?>

<div class="vs-share-button <?php print $classes; ?>">
  <div class="vs-share-button__content">
    <div class="hidden-xs-down vs-share-button__social-links">
      <a
        class="vs-share-button__icon-button vs-share-button__icon-twitter vs-share-button__icon-button--popup"
        href="http://twitter.com/share?text=<?php print check_plain($twitter_text); ?>&url=<?php print $use_placeholder ? '{{ url }}' : urlencode($url); ?>"
        vs-share-event="twitter"
        vs-location="<?php print $location; ?>"
      >
        <i class="icon-twitter"></i>
        <span></span>
      </a>
      <a
        class="vs-share-button__icon-button vs-share-button__icon-facebook vs-share-button__icon-button--popup"
        href="http://www.facebook.com/sharer/sharer.php?title=<?php print check_plain($facebook_text); ?>&u=<?php print $use_placeholder ? '{{ url }}' : urlencode($url); ?>"
        vs-share-event="facebook"
        vs-location="<?php print $location; ?>"
      >
        <i class="icon-facebook"></i>
        <span></span>
      </a>
      <a
        class="vs-share-button__icon-button vs-share-button__icon-email"
        href="mailto:?subject=<?php print check_plain($subject); ?>&body=<?php print $body ? check_plain($body) : urlencode($url); ?>"
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
