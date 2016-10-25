<?php
/**
 * @file virgin-components--p--vs-teaser.tpl.php
 * Main template for virgin components paragraph vs_teaser
 *
 * Variables available:
 * title
 * body
 * teaser_images
 * arrangement
 * outline
 * alignment
 * cta_links
 */

?>

<div class="vs-teaser">

  <!-- Portrait Template -->
  <?php if($arrangement == 'portrait'): ?>
    <?php if($alignment=="right"): ?><div class="vs-teaser__layout-1-a vs-teaser--portrait vs-teaser--reverse">
    <?php else: ?><div class="vs-teaser__layout-1-a vs-teaser--portrait"><?php endif; ?>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <div class="vs-teaser__image-scale">
              <img class="vs-teaser__image-a" src="../img/teaser-portrait-one.png">
              <span class="vs-teaser__title hidden-md-up"><?php print $outline; ?></span>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <h3 class="vs-teaser__subtitle"><?php print $title; ?></h3>
            <p class="vs-teaser__text"><?php print $body; ?></p>
            <span class="vs-teaser__title hidden-sm-down"><?php print $outline; ?></span>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>

<!--    <!-- Landscape Template -->-->
<!--  --><?php //if($arrangement == 'landscape'): ?>
<!--    <div class="vs-teaser__layout-1-b vs-teaser--landscape">-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div class="col-xs-12 col-md-6">-->
<!--            <h3 class="vs-teaser__subtitle">Hackney Local Store</h3>-->
<!--            <p class="vs-teaser__text">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae. </p>-->
<!--          </div>-->
<!--          <div class="col-xs-12 col-md-6">-->
<!--            <img class="vs-teaser__image-a" src="../img/teaser-landscape-three.png">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <!-- Landscape Template : Reverse Template -->-->
<!--    <div class="vs-teaser__layout-1-b vs-teaser--landscape vs-teaser--reverse">-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div class="col-xs-12 col-md-6">-->
<!--            <h3 class="vs-teaser__subtitle">Hackney Local Store</h3>-->
<!--            <p class="vs-teaser__text">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae. </p>-->
<!--          </div>-->
<!--          <div class="col-xs-12 col-md-6">-->
<!--            <img class="vs-teaser__image-a" src="../img/teaser-landscape-three.png">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!---->
<!--  --><?php //endif; ?>
<!---->
<!--  <!-- Portrait Landscape -->-->
<!---->
<!--  <div class="vs-teaser__layout-2-c vs-teaser--portrait-landscape">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <h3 class="vs-teaser__subtitle hidden-md-up">Hackney Culture</h3>-->
<!--          <p class="vs-teaser__text hidden-md-up">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae. </p>-->
<!--          <p class="vs-teaser__text hidden-md-up">Magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elem</p>-->
<!--          <div class="vs-teaser__image-scale">-->
<!--            <img class="vs-teaser__image-a hidden-sm-down" src="../img/teaser-portrait-four.png">-->
<!--            <img class="vs-teaser__image-b" src="../img/teaser-landscape-four.png">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <h3 class="vs-teaser__subtitle hidden-sm-down">Hackney Culture</h3>-->
<!--          <p class="vs-teaser__text hidden-sm-down">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae.  Praesent et magna ac enim.</p>-->
<!--          <p class="vs-teaser__text hidden-sm-down">Magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elem</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!---->
<!--  <!-- Portrait Landscape : Reverse Template -->-->
<!---->
<!--  <div class="vs-teaser__layout-2-c vs-teaser--portrait-landscape vs-teaser--reverse">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <h3 class="vs-teaser__subtitle hidden-md-up">Hackney Culture</h3>-->
<!--          <p class="vs-teaser__text hidden-md-up">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae. </p>-->
<!--          <p class="vs-teaser__text hidden-md-up">Magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elem</p>-->
<!--          <div class="vs-teaser__image-scale">-->
<!--            <img class="vs-teaser__image-a hidden-sm-down" src="../img/teaser-portrait-four.png">-->
<!--            <img class="vs-teaser__image-b" src="../img/teaser-landscape-four.png">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <h3 class="vs-teaser__subtitle hidden-sm-down">Hackney Culture</h3>-->
<!--          <p class="vs-teaser__text hidden-sm-down">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae.  Praesent et magna ac enim.</p>-->
<!--          <p class="vs-teaser__text hidden-sm-down">Magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elem</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!---->
<!--  <!-- Portrait, Upper Portrait, Portrait -->-->
<!---->
<!--  <div class="vs-teaser__layout-3-a vs-teaser--portrait-upperportrait-portrait">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <span class="vs-teaser__title">Hackney</span>-->
<!--          <h3 class="vs-teaser__subtitle hidden-sm-down">#Making Move</h3>-->
<!--          <p class="vs-teaser__text hidden-sm-down">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae. </p>-->
<!--        </div>-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <div class="vs-teaser__image-scale">-->
<!--            <img class="vs-teaser__image-b" src="../img/teaser-landscape-six.png">-->
<!--            <h3 class="vs-teaser__subtitle hidden-md-up">#Making Move</h3>-->
<!--            <p class="vs-teaser__text hidden-md-up">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae. </p>-->
<!--            <img class="vs-teaser__image-a hidden-sm-down" src="../img/teaser-landscape-seven.png">-->
<!--            <img class="vs-teaser__image-c hidden-sm-down" src="../img/teaser-landscape-five.png">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!---->
<!--  <!-- Portrait, Upper Portrait, Portrait : Reverse Template -->-->
<!---->
<!--  <div class="vs-teaser__layout-3-a vs-teaser--portrait-upperportrait-portrait vs-teaser--reverse">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <span class="vs-teaser__title">Hackney</span>-->
<!--          <h3 class="vs-teaser__subtitle hidden-sm-down">#Making Move</h3>-->
<!--          <p class="vs-teaser__text hidden-sm-down">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae. </p>-->
<!--        </div>-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <div class="vs-teaser__image-scale">-->
<!--            <img class="vs-teaser__image-b" src="../img/teaser-landscape-six.png">-->
<!--            <h3 class="vs-teaser__subtitle hidden-md-up">#Making Move</h3>-->
<!--            <p class="vs-teaser__text hidden-md-up">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae. </p>-->
<!--            <img class="vs-teaser__image-a hidden-sm-down" src="../img/teaser-landscape-seven.png">-->
<!--            <img class="vs-teaser__image-c hidden-sm-down" src="../img/teaser-landscape-five.png">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!---->
<!---->
<!--  <!-- QUESTIONS!!!!!-->-->
<!---->
<!--  <!-- ???? -->-->
<!---->
<!--  <div class="vs-teaser__layout-2-a vs-teaser--landscape-lowerlandscape">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <span class="vs-teaser__title">Sport for</span>-->
<!--          <img class="hidden-md-up vs-teaser__image-a" src="../img/teaser-landscape-one.png">-->
<!--          <h3 class="vs-teaser__subtitle">Sporting events for everyone</h3>-->
<!--          <p class="vs-teaser__text">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae. Praesent et magna sit amet libero semper facilisis vel ac enim.</p>-->
<!--        </div>-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <div class="vs-teaser__image-scale">-->
<!--            <img class="hidden-sm-down vs-teaser__image-a" src="../img/teaser-landscape-one.png">-->
<!--            <img class="vs-teaser__image-b hidden-sm-down" src="../img/teaser-landscape-two.png">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!---->
<!--  <!-- ???? - Reverse Template-->-->
<!---->
<!--  <div class="vs-teaser__layout-2-a vs-teaser--landscape-lowerlandscape vs-teaser--reverse">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <span class="vs-teaser__title">Sport for</span>-->
<!--          <img class="hidden-md-up vs-teaser__image-a" src="../img/teaser-landscape-one.png">-->
<!--          <h3 class="vs-teaser__subtitle">Sporting events for everyone</h3>-->
<!--          <p class="vs-teaser__text">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae. Praesent et magna sit amet libero semper facilisis vel ac enim.</p>-->
<!--        </div>-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <div class="vs-teaser__image-scale">-->
<!--            <img class="hidden-sm-down vs-teaser__image-a" src="../img/teaser-landscape-one.png">-->
<!--            <img class="vs-teaser__image-b hidden-sm-down" src="../img/teaser-landscape-two.png">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!---->
<!--  <!-- ???? -->-->
<!---->
<!--  <div class="vs-teaser__layout-2-b vs-teaser--portrait-upperportrait">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <h3 class="vs-teaser__subtitle hidden-md-up">Sweating or Suporting</h3>-->
<!--          <p class="vs-teaser__text hidden-md-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>-->
<!--          <div class="vs-teaser__image-scale">-->
<!--            <img class="vs-teaser__image-a" src="../img/teaser-portrait-three.png">-->
<!--            <img class="vs-teaser__image-b hidden-sm-down" src="../img/teaser-portrait-two.png">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <h3 class="vs-teaser__subtitle hidden-sm-down">Sweating or Suporting</h3>-->
<!--          <p class="vs-teaser__text hidden-sm-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>-->
<!--          <h3 class="vs-teaser__subtitle">Join the Fun</h3>-->
<!--          <p class="vs-teaser__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>-->
<!--          <button class="btn vs-btn vs-btn--orange-light vs-teaser__cta-btn hidden-sm-down">Learn more</button>-->
<!--          <img class="vs-teaser__image-b hidden-md-up" src="../img/teaser-portrait-two.png">-->
<!--          <button class="btn vs-btn vs-btn--orange-light vs-teaser__cta-btn hidden-md-up">Learn more</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!---->
<!--  <!-- ???? - Reverse Template-->-->
<!---->
<!--  <div class="vs-teaser__layout-2-b vs-teaser--portrait-upperportrait vs-teaser--reverse">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <h3 class="vs-teaser__subtitle hidden-md-up">Sweating or Suporting</h3>-->
<!--          <p class="vs-teaser__text hidden-md-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>-->
<!--          <div class="vs-teaser__image-scale">-->
<!--            <img class="vs-teaser__image-a" src="../img/teaser-portrait-three.png">-->
<!--            <img class="vs-teaser__image-b hidden-sm-down" src="../img/teaser-portrait-two.png">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-xs-12 col-md-6">-->
<!--          <h3 class="vs-teaser__subtitle hidden-sm-down">Sweating or Suporting</h3>-->
<!--          <p class="vs-teaser__text hidden-sm-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>-->
<!--          <h3 class="vs-teaser__subtitle">Join the Fun</h3>-->
<!--          <p class="vs-teaser__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>-->
<!--          <button class="btn vs-btn vs-btn--orange-light vs-teaser__cta-btn hidden-sm-down">Learn more</button>-->
<!--          <img class="vs-teaser__image-b hidden-md-up" src="../img/teaser-portrait-two.png">-->
<!--          <button class="btn vs-btn vs-btn--orange-light vs-teaser__cta-btn hidden-md-up">Learn more</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!---->
<!--  <!-- ???? -->-->
<!---->
<!--  <div class="vs-teaser__layout-2-d vs-teaser--landscape-square">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-xs-12 col-md-5">-->
<!--          <span class="vs-teaser__title hidden-sm-down hidden-lg-up">Join in</span>-->
<!--          <h3 class="vs-teaser__subtitle">Intro copy</h3>-->
<!--          <p class="vs-teaser__text">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae.  Praesent et magna sit amet libero semper facilisis vel ac enim. Praesent et magna sit amet libero semper facilisis vel ac enim.</p>-->
<!--          <button class="btn vs-btn vs-btn--min-sm vs-btn--transparent vs-teaser__cta-btn hidden-sm-down">View past festivals</button>-->
<!--        </div>-->
<!--        <div class="col-xs-12 col-md-7">-->
<!--          <div class="vs-teaser__image-scale">-->
<!--            <span class="vs-teaser__title hidden-md-up">Join in</span>-->
<!--            <img class="vs-teaser__image-a hidden-sm-down" src="../img/teaser-square-one.png">-->
<!--            <img class="vs-teaser__image-b" src="../img/teaser-landscape-eight.png">-->
<!--            <button class="btn vs-btn vs-btn--min-sm vs-btn--transparent vs-teaser__cta-btn hidden-md-up">View past festivals</button>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-xs-12">-->
<!--          <span class="vs-teaser__title hidden-md-down">Join in</span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!---->
<!--  <!-- ???? - Reverse Template-->-->
<!---->
<!--  <div class="vs-teaser__layout-2-d vs-teaser--landscape-square vs-teaser--reverse">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-xs-12 col-md-5">-->
<!--          <span class="vs-teaser__title hidden-sm-down hidden-lg-up">Join in</span>-->
<!--          <h3 class="vs-teaser__subtitle">Intro copy</h3>-->
<!--          <p class="vs-teaser__text">Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae.  Praesent et magna sit amet libero semper facilisis vel ac enim. Praesent et magna sit amet libero semper facilisis vel ac enim.</p>-->
<!--          <button class="btn vs-btn vs-btn--min-sm vs-btn--transparent vs-teaser__cta-btn hidden-sm-down">View past festivals</button>-->
<!--        </div>-->
<!--        <div class="col-xs-12 col-md-7">-->
<!--          <div class="vs-teaser__image-scale">-->
<!--            <span class="vs-teaser__title hidden-md-up">Join in</span>-->
<!--            <img class="vs-teaser__image-a hidden-sm-down" src="../img/teaser-square-one.png">-->
<!--            <img class="vs-teaser__image-b" src="../img/teaser-landscape-eight.png">-->
<!--            <button class="btn vs-btn vs-btn--min-sm vs-btn--transparent vs-teaser__cta-btn hidden-md-up">View past festivals</button>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-xs-12">-->
<!--          <span class="vs-teaser__title hidden-md-down">Join in</span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

</div>
