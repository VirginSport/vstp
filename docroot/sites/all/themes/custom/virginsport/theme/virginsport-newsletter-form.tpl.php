<?php
  // Form-id in case multiple newsletter forms are available in one page
  $form_id = uniqid();
?>
<div class="v-element <?php print empty($wrapper_classes) ? '' : $wrapper_classes; ?>">
  <h3 class="vs-newslettter__title"><?php print $title; ?></h3>
  <?php if ($description != ''): ?>
    <div class="vs-newslettter__text"><?php print $description; ?></div>
  <?php endif; ?>
  <div class="vs-newslettter__form">
    <validator name="vs_newsletter_form_validator">
      <form @submit.prevent novalidate class="vs-newsletter-form__form">
        <input type="hidden" v-model="form.id" name="id" value="<?php print $id; ?>">
        <input type="hidden" v-model="form.type" name="type" value="<?php print $type; ?>">

        <div class="vs-form-group">
          <?php if (!$show_email_input && !empty($default_email)): ?>
            <input type="hidden" v-model="form.newsletter_email" name="newsletter_email" value="<?php print $default_email; ?>">
          <?php else: ?>
            <input
              class="form-control vs-newsletter__input"
              id="newsletter-email-<?php print $form_id; ?>"
              type="text"
              name="newsletter-email"
              v-model="form.newsletter_email"
              value="<?php print $default_email; ?>"
              v-validate:newsletter_email="['required', 'email']"
            >
            <label class="vs-focus-label" for="newsletter-email-<?php print $form_id; ?>"><?php print t('Email Address'); ?></label>
          <?php endif; ?>
          <div class="vs-newsletter__message-wrapper">
            <p v-if="($vs_newsletter_form_validator.newsletter_email.dirty || submitted) && $vs_newsletter_form_validator.newsletter_email.required" class="vs-newsletter__error-label"><?php print t('Email is required'); ?></p>
            <p v-if="!$vs_newsletter_form_validator.newsletter_email.required && $vs_newsletter_form_validator.newsletter_email.email" class="vs-newsletter__error-label"><?php print t('Invalid email.')?></p>
            <p v-if="form.submitted" class="vs-newsletter__message-label"><?php print t('Woohoo – you’re in!')?></p>
            <p v-if="form.error" class="vs-newsletter__error-label"><?php print t('There was an error submitting your request.')?></p>
          </div>
          <?php if ($inline_button): ?>
          <button v-if="!form.submitted" :disabled="waitingSubmit" v-on:click="submit" class="btn vs-btn vs-newsletter__btn-inline"><?php print $cta_copy; ?></button>
          <button v-else class="btn vs-btn vs-newsletter__btn-inline" disabled><?php print t('Sent'); ?></button>
          <?php else: ?>
          <div class="vs-newsletter__button-wrapper text-xs-center text-md-left">
            <button v-if="!form.submitted" :disabled="waitingSubmit" v-on:click="submit" class="btn vs-btn vs-btn--min-sm vs-newsletter__button"><?php print $cta_copy; ?></button>
            <button v-else class="btn vs-btn vs-btn--min-sm vs-newsletter__button" disabled><?php print t('Sent'); ?></button>
          </div>
          <?php endif; ?>
          <div class="vs-newsletter__message-wrapper">
            <p class="vs-newsletter__message-label">
              <?php print virgin_region_get_newsletter_disclaimer(); ?>
            </p>
          </div>
        </div>
      </form>
    </validator>
  </div>
</div>
