<?php
/**
 * @file virgin-components--fpp--vs-grid.tpl.php
 * Main template for virgin components fieldable panel panes vs_grid
 */
?>

<div class="vs-grid">
  <div class="container">
    <div class="vs-grid__wrapper">
      <div class="row">
        <div class="col-xs-12">
          <div class="vs-grid__title">Meet the team</div>
        </div>
        <div class="col-xs-12 col-md-8">
          <p class="vs-grid__text">Conveniently matrix unique e-tailers for inexpensive outsourcing. Efficiently actualize backward-compatible convergence after backend data. Authoritatively brand business innovation through integrated meta-services. Distinctively create adaptive expertise before integrated ROI. Efficiently aggregate viral opportunities through diverse expertise.</p>
        </div>
      </div>
      <div class="row center-elements">
        <?php foreach(range(1,4) as $i) { ?>
          <div class="col-xs-12 col-sm-6 col-lg-3">
            <div class="vs-grid__element-wrapper">
              <img src="https://placeimg.com/40<?php print $i; ?>/40<?php print $i; ?>/people" class="img-fluid vs-grid__element-image" />
              <div class="vs-grid__element-title">Name of dude</div>
              <div class="vs-grid__element-description">Collaboratively procrastinate cross-media imperatives and diverse processes. Interactively reintermediate</div>
              <button class="btn vs-btn vs-btn--outline-black vs-grid__element-button">Learn more</button>
            </div>
          </div>
        <?php } ?>
        <div class="col-xs-12 col-sm-6 col-lg-3">
          <div class="vs-grid__element-wrapper">
            <img src="https://placeimg.com/400/400/people" class="img-fluid vs-grid__element-image" />
            <div class="vs-grid__element-description">Distinctively whiteboard high-quality meta-services after standardized e-markets. Globally initiate.</div>
            <button class="btn vs-btn vs-btn--outline-black vs-grid__element-button">Learn more</button>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-3">
          <div class="vs-grid__element-wrapper">
            <img src="https://placeimg.com/401/401/people" class="img-fluid vs-grid__element-image" />
            <div class="vs-grid__element-title">Name of dude</div>
            <button class="btn vs-btn vs-btn--outline-black vs-grid__element-button">Learn more</button>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-3">
          <div class="vs-grid__element-wrapper">
            <a href="#" class="vs-grid__element-link">
              <img src="https://placeimg.com/402/402/people" class="img-fluid vs-grid__element-image" />
              <div class="vs-grid__element-title">Name of dude</div>
              <div class="vs-grid__element-description">Rapidiously transform virtual core competencies without equity invested materials.</div>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-3">
          <div class="vs-grid__element-wrapper">
            <img src="https://placeimg.com/403/403/people" class="img-fluid vs-grid__element-image" />
          </div>
        </div>
        <?php foreach(range(1,2) as $i) { ?>
          <div class="col-xs-12 col-sm-6 col-lg-3">
            <div class="vs-grid__element-wrapper">
              <img src="https://placeimg.com/40<?php print $i; ?>/40<?php print $i; ?>/people" class="img-fluid vs-grid__element-image" />
              <div class="vs-grid__element-title">Name of dude</div>
              <div class="vs-grid__element-description">Collaboratively procrastinate cross-media imperatives and diverse processes. Interactively reintermediate</div>
              <button class="btn vs-btn vs-btn--outline-black vs-grid__element-button">Learn more</button>
            </div>
          </div>
        <?php } ?>
      </div>
    </div>
  </div>
</div>
