<?php
/**
 * @file
 * Facebook gender select template.
 */

?>

<div class="vs-head-region">
  <div class="vs-region vs-region--no-padding">
    <div class="vs-hero-banner vs-hero-banner--small">
      <div class="vs-hero-banner__background vs-hero-banner__default-background">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2 class="vs-hero-banner__title"><?php print t('Login'); ?></h2>
              <div class="vs-hero-banner-block__subtitle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="vs-region vs-region--gradient-default" data-vs-region-curved="1" data-vs-region-color="default">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-content-wrapper vs-content-wrapper--white">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
              <div class="vs-user-form__wrapper">
                <div class="hidden-xs-up">
                  <?php print drupal_render($vars['form']); ?>
                </div>
  
                <h4 class="vs-form-header"><?php print t('Required information'); ?></h4>
                
                <div class="vs-form-header__info">
                  <?php print t('Please fill in additional information to complete your registration.'); ?>
                </div>
  
                <div class="vs-form-group">
                  <input class="form-control" type="email" name="field_mail" id="field_mail">
                  <label class="vs-focus-label" for="field_mail"><?php print t('Email Address'); ?>*</label>
                </div>
  
                <div class="vs-form-group vs-form-group--radio-buttons vs-form-group--radio-buttons--inline">
                  <div class="vs-label-form-wrapper d-block">
                    <label class="vs-label" for="field_gender"><?php print t('Gender'); ?>*</label>
                  </div>
                  <div class="vs-form-radio">
                    <label class="vs-form-label vs-form-label--radio" for="gender_female"><?php print t('Female'); ?></label>
                  </div>
                  <div class="vs-form-radio">
                    <label class="vs-form-label vs-form-label--radio" for="gender_male"><?php print t('Male'); ?></label>
                  </div>
                </div>
  
                <div class="vs-form-submit">
                  <button class="btn vs-btn vs-btn--lg vs-btn--min-lg"><?php print ('Submit'); ?></button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
