<?php
/**
 * @file virgin-components--p--vs-grid.tpl.php
 * Main template for virgin components paragraph vs_grid_block_item
 *
 * Variables available:
 * $member_name - The team member name
 * $member_description - The team member description
 * $member_image - The team member image atom
 * $member_link - The team member button link
 * $image_link - The team member image link
 */

?>

<div class="col-xs-12 col-sm-6 col-lg-3">
  <div class="vs-grid__element-wrapper">
    <?php if (!empty($member_image)): ?>
      <?php if (!empty($image_link)): ?>
        <?php print $image_link ?>
      <?php endif; ?>
      <div class="vs-grid__element-image" style="<?php print virginsport_atom_background($member_image->getEntity()); ?>"></div>
    <?php endif; ?>
    <?php if (!empty($member_name)): ?>
      <div class="vs-grid__element-title"><?php print($member_name) ?></div>
    <?php endif; ?>
    <?php if (!empty($member_description)): ?>
      <div class="vs-grid__element-description"><?php print($member_description) ?></div>
    <?php endif; ?>
    <?php if (!empty($member_link)): ?>
      <?php print
        theme('virginsport_cta_links',
          [
            'links' => $member_link,
            'classes' => 'vs-btn--outline-black vs-grid__element-button',
          ]
        );
      ?>
    <?php endif; ?>
  </div>
</div>
