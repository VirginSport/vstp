<?php
/**
 * @file virgin-components--p--vs-accordion-item.tpl.php
 * Main template for virgin components paragraph vs_accordion_item
 *
 * Variables available:
 * TODO
 */

?>

<div class="panel vs-accordion__panel">
  <div
    class="panel-heading vs-accordion__panel-heading"
  >
    <a
      class="collapsed"
      data-toggle="collapse"
      href="#paragraph-item-<?php print $id; ?>"
      data-parent="#"
    >
      <?php if(!empty($title)): ?>
        <h4 class="vs-accordion__panel-title">
          <?php print $title; ?>
          <i class="vs-accordion__arrow">&gt;</i>
        </h4>
      <?php endif; ?>
      <div
        class="panel-collapse collapse vs-accordion__panel-text"
        role="tabpanel"
        id="paragraph-item-<?php print $id; ?>"
      >
        <?php if(!empty($content)): ?>
          <p>
            <?php print $content; ?>
          </p>
        <?php endif; ?>
      </div>
    </a>
  </div>
</div>
