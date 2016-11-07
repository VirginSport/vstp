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
      <a class="vs-share-button__icon-button vs-share-button__icon-twitter" href="http://twitter.com/share?url=<?php print urlencode($url); ?>"><i class="icon-twitter"></i><span></span></a>
      <a class="vs-share-button__icon-button vs-share-button__icon-facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php print urlencode($url); ?>"><i class="icon-facebook"></i><span></span></a>
      <a class="vs-share-button__icon-button vs-share-button__icon-email" href="mailto:?subject=<?php print urlencode($subject); ?>"><i class="icon-email-filled"></i><span></span></a>
    </div>
    <a class="vs-share-button__icon-button vs-share-button__icon-share" href="#">
      <i class="icon-share"></i><span></span>
    </a>
  </div>
</div>
