<?php
/**
 * @file virgin-components--fpp--vs-basic-content-block.tpl.php
 * Main template for virgin components fieldable panel panes vs_basic_content_block
 *
 * Variables available:
 *  $hero_image_grapher - The hero image atom VirginEntityGrapher
 *  $hero_image_title - The hero image title
 *  $page_body - The page body content
 *  $cta_links - An array of links
 *  $content_heading - The component title
 *  $content_sub_heading - The component sub title
 *  $content_align_to - Align content to left or center
 *  $scrollable_image - The hero image atom VirginEntityGrapher
 *  $hero_image_size - View options for scrollable image
 *  $cta_links - An array with links and its attributes
 *
 */
?>

<div class="vs-region vs-region--light-gray">
  <div class="vs-basic-content-block">
  <div class="container">
    <div class="vs-basic-content-block-wrapper">
      <?php if(!empty($hero_image_grapher->property('sid'))): ?>
      <div class="row">
        <div class="col-xs-12">
          <div
            class="vs-basic-content-block__hero-image"
            style="<?php print virginsport_atom_background($hero_image_grapher->getEntity()); ?>"
          >
            <?php if (!empty($hero_image_title)): ?>
            <div class="row">
              <div class="col-xs-10 offset-xs-1">
                <h2 class="vs-basic-content-block__hero-title">
                  <?php print $hero_image_title; ?>
                </h2>
              </div>
            </div>
            <?php endif; ?>
          </div>
        </div>
      </div>
      <?php endif; ?>

      <div class="row">
        <?php if(!empty($content_heading)): ?>
          <div class="col-xs-12 col-md-3">
            <h4 class="vs-basic-content-block__static-title">
              <?php print $content_heading ?>
            </h4>
          </div>
        <div class="col-xs-12 col-md-9">
        <?php else: ?>
        <div class="col-xs-12">
        <?php endif; ?>
          <div class="vs-basic-content-block__text-wrapper <?php print $content_align_to == 'left' ? '' : 'text-xs-center'; ?>">
            <?php if (!empty($page_body)): ?>
              <h5 class="vs-basic-content-block__date">
                <?php print $content_sub_heading ?>
              </h5>
            <?php endif; ?>

            <?php if (!empty($page_body)): ?>
              <p>
                <?php print $page_body ?>
              </p>
            <?php endif; ?>

            <?php if(!empty($scrollable_image->property('sid'))): ?>
              <?php if ($hero_image_size == 'scale_to_fit'): ?>
                <div class="vs-scroller vs-scroller--basic-content-block vs-scroller--exact-size">
                  <?php print theme('virginsport_picture', array('atom_id' => $scrollable_image->property('sid'), 'image_style' => 'virgin_original', 'image_classes' => 'img-fluid')); ?>
                </div>
              <?php else: ?>
                <div class="vs-scroller vs-scroller--basic-content-block">
                  <?php print theme('virginsport_picture', array('atom_id' => $scrollable_image->property('sid'), 'image_style' => 'virgin_original')); ?>
                </div>
              <?php endif; ?>
            <?php endif; ?>

            <?php foreach ($cta_links as $cta_link): ?>
              <a
                href="<?php print url($cta_link['url']); ?>"
                class="btn vs-btn vs-btn--min vs-btn--gradient-blue <?php print !empty($cta_link['attributes']['class']) ? $cta_link['attributes']['class'] : ''; ?>"
              >
                <?php print $cta_link['title']; ?>
              </a>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
