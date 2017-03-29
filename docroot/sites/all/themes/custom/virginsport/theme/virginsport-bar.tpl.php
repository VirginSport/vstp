<?php
/**
 * @file
 * Virgin bar template.
 *
 *  $classes: The component classes
 *  $url: The url
 *  $label: The url label
 */
?>

<?php if(!empty($url)): ?>
  <div class="vs-bar vs-bar--reveal<?php print $classes; ?>">
    <div class="vs-bar__wrapper">
      <div class="container">
        <div class="row">
          <div class="col-xs-6 text-xs-center text-md-left">
            <a class="btn vs-btn vs-btn--lg vs-btn--link vs-bar__btn vs-bar__btn--left" href="<?php print $url; ?>">
              <svg class="vs-bar__chevron vs-bar__chevron--back" viewBox="0 4 7 12" xmlns="http://www.w3.org/2000/svg">
                <polygon fill-rule="evenodd" points="0 9.67 5.67 4 6.75 5.08 2.16 9.67 6.75 14.26 5.67 15.34" stroke="none"></polygon>
              </svg>
              <span class="vs-bar__btn-label"><?php print $label; ?></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php endif; ?>
