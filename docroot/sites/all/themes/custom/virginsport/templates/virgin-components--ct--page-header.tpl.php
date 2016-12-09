<?php
/**
 * @file virgin-components--ct--page-header.tpl.php
 * Template for the festival header
 *
 * Variables available:
 * @var string $title
 *  The title of the page
 * @var string $body
 *  The content of the page
 * @var bool $is_small
 *  If page header is to be rendered in a smaller size
 */
?>

<div class="vs-hero-banner <?php empty($is_small) ? '' : print 'vs-hero-banner--small'; ?>">
  <div class="vs-hero-banner__background--fixed"  style="<?php print $atom ? virginsport_atom_background($atom->getEntity()) : ''; ?>"></div>

  <div class="vs-hero-banner__background vs-hero-banner__default-background">
    <?php if ($variables['show_sharer']==1):?>
    <div class="vs-hero-banner__social-wrapper">
      <?php print theme('virginsport_share_buttons', array('subject' => $title, 'url' => url(current_path(), array('absolute' => TRUE)))); ?>
    </div>
    <?php endif; ?>
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
