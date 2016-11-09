<?php
/**
 * @file
 * Virgin ticket confirm claim page template.
 */
?>

<div class="vs-head-region">
  <div class="vs-region vs-region--no-padding">
    <div class="vs-hero-banner vs-hero-banner__default-background">
      <div class="vs-hero-banner__background">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2 class="vs-hero-banner__title">
                <?php print t('Claim Ticket'); ?>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="vs-region vs-region--gradient-default" data-vs-region-curved="1" data-vs-region-color="default" data-vs-region-overlap="medium">
  <?php print $claim_ticket; ?>
</div>
