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
        href="http://twitter.com/share?url=<?php print $use_placeholder ? '{{ url }}' : urlencode($url); ?>"
        vs-share-event="twitter"
      >
        <i class="icon-twitter"></i>
        <span></span>
      </a>
      <a
        class="vs-share-button__icon-button vs-share-button__icon-facebook vs-share-button__icon-button--popup"
        href="http://www.facebook.com/sharer/sharer.php?u=<?php print $use_placeholder ? '{{ url }}' : urlencode($url); ?>"
        vs-share-event="facebook"
      >
        <i class="icon-facebook"></i>
        <span></span>
      </a>
      <a
        class="vs-share-button__icon-button vs-share-button__icon-email"
        href="mailto:?subject=<?php print urlencode($subject); ?>&body=<?php print $use_placeholder ? '{{ url }}' : urlencode($url); ?>"
        vs-share-event="email"
      >
        <i class="icon-email-filled"></i>
        <span></span>
      </a>
    </div>
    <a
      class="vs-share-button__icon-button vs-share-button__icon-share"
      vs-share-event="share button"
    >
      <i class="icon-share"></i>
      <span></span>
    </a>
  </div>
</div>
