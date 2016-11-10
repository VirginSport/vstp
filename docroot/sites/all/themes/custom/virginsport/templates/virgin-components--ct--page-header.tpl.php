<?php
/**

 *  The label of the link that appears below the button
 */

// Get number of days remaining to festival
?>

<div class="vs-hero-banner">
  <div class="vs-hero-banner__background--fixed"  style="<?php print $atom ? virginsport_atom_background($atom->getEntity()) : ''; ?>"></div>

  <div class="vs-hero-banner__background vs-hero-banner__default-background">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <?php if (!empty($title)): ?>
            <h2 class="vs-hero-banner__title"><?php print $title; ?></h2>
          <?php endif; ?>

          <?php if (!empty($body)): ?>
            <div class="vs-hero-banner__date"><?php print $body; ?></div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>
