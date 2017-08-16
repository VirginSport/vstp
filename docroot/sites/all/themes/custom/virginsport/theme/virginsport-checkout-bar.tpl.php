<?php
/**
 * @file
 * Virgin checkout bar template.
 *
 */
?>
<div
  class="vs-region vs-region--gradient-default vs-region--no-padding vs-region--hide-bg-spacer">
  <div class="vs-sticky-basket">
    <div class="vs-sticky-basket__wrapper">
      <div class="container">
        <div class="row">
          <div class="col-xs-6 text-xs-center text-md-left">
            <?php if ($node): ?>
              <a
                class="btn vs-btn vs-btn--lg vs-btn--link vs-sticky-basket__btn vs-sticky-basket__btn--left"
                href="<?php print url('node/' . $node->nid); ?>">
                <svg
                  class="vs-sticky-basket__chevron vs-sticky-basket__chevron--back"
                  viewBox="0 4 7 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    fill-rule="evenodd"
                    points="0 9.67 5.67 4 6.75 5.08 2.16 9.67 6.75 14.26 5.67 15.34"
                    stroke="none"
                  ></polygon>
                </svg>
                <span
                  class="vs-sticky-basket__btn-label"><?php print t('Back'); ?></span>
              </a>
            <?php endif; ?>
          </div>
          <div class="col-xs-6 text-xs-center text-md-right">
            <a
              class="btn vs-btn vs-btn--lg vs-btn--gradient-<?php print $brand_color; ?> vs-sticky-basket__btn vs-sticky-basket__btn--right"
              href="<?php print url($basket_url); ?>"
            >
                <span
                  class="vs-sticky-basket__btn-label"><?php print t('View Basket'); ?></span>
              <svg
                class="vs-sticky-basket__chevron vs-sticky-basket__chevron--next"
                viewBox="0 4 7 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill-rule="evenodd"
                  points="0 9.67 5.67 4 6.75 5.08 2.16 9.67 6.75 14.26 5.67 15.34"
                  stroke="none"
                ></polygon>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
