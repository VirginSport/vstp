
<div class="v-element vs-newsletter">
  <div class="container">
    <div class="row grid-align-middle--md-up">
      
      <div class="col-xs-12 col-md-6 hidden-sm-down">
        <div class="vs-newsletter__image-wrapper clearfix">
          <?php print theme('virginsport_picture', array('atom_id' => $field_newsletter_image[0]['sid'], 'image_style' => 'virgin_original', 'image_classes' => 'vs-newsletter__image')); ?>
          <div class="vs-newsletter__image-caption"><?php print $image_caption; ?></div>
        </div>
      </div>
      
      <div class="col-xs-12 col-md-6">
        <div class="vs-newsletter__content">
            <h3 class="vs-newslettter__title"><?php print $title; ?></h3>
            <div class="vs-newslettter__text"><?php print $description; ?></div>
            <div class="vs-newslettter__form">
              <validator name="vs_newsletter_form_validator">
                <form @submit.prevent novalidate class="vs-newsletter-form__form">
                  <input type="hidden" v-model="form.list" name="list" value="<?php print $list; ?>">

                  <div class="vs-form-group">
                    <input
                      class="form-control vs-newsletter__input"
                      id="newsletter-email"
                      type="text"
                      name="newsletter-email"
                      v-model="form.newsletter_email"
                      value="<?php print $default_email; ?>"
                    >
                    <label class="vs-focus-label" for="newsletter"><?php print t('Email Address'); ?></label>
                    <div class="vs-newsletter__message-wrapper">
                      <p v-if="invalid_email" class="vs-newsletter__error-label"><?php print t('Invalid email.')?></p>
                      <p v-if="form.submitted" class="vs-newsletter__message-label"><?php print t('Woohoo – you’re in!')?></p>
                      <p v-if="form.error" class="vs-newsletter__error-label"><?php print t('There was an error submitting your request.')?></p>
                    </div>
                    <div class="vs-newsletter__button-wrapper text-xs-center text-md-left">
                      <button :disabled="waitingSubmit" v-on:click="submit" class="btn vs-btn vs-btn--min-sm vs-newsletter__button"><?php print t('Submit'); ?></button>
                    </div>
                  </div>
                </form>
              </validator>
            </div>

        </div>
      </div>
  
      <div class="col-xs-12 col-md-6 hidden-md-up">
        <div class="vs-newsletter__image-wrapper">
          <?php print theme('virginsport_picture', array('atom_id' => $field_newsletter_image[0]['sid'], 'image_style' => 'virgin_original', 'image_classes' => 'vs-newsletter__image')); ?>
          <div class="vs-newsletter__image-caption"><?php print $image_caption; ?></div>
        </div>
      </div>
      
    </div>
  </div>
</div>
