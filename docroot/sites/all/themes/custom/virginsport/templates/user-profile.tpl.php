<?php

/**
 * @file
 * Default theme implementation to present all user profile data.
 *
 * This template is used when viewing a registered member's profile page,
 * e.g., example.com/user/123. 123 being the users ID.
 *
 * Use render($user_profile) to print all profile items, or print a subset
 * such as render($user_profile['user_picture']). Always call
 * render($user_profile) at the end in order to print all remaining items. If
 * the item is a category, it will contain all its profile items. By default,
 * $user_profile['summary'] is provided, which contains data on the user's
 * history. Other data can be included by modules. $user_profile['user_picture']
 * is available for showing the account picture.
 *
 * Available variables:
 *   - $user_profile: An array of profile items. Use render() to print them.
 *   - Field variables: for each field instance attached to the user a
 *     corresponding variable is defined; e.g., $account->field_example has a
 *     variable $field_example defined. When needing to access a field's raw
 *     values, developers/themers are strongly encouraged to use these
 *     variables. Otherwise they will have to explicitly specify the desired
 *     field language, e.g. $account->field_example['en'], thus overriding any
 *     language negotiation rule that was previously applied.
 *
 * @see user-profile-category.tpl.php
 *   Where the html is handled for the group.
 * @see user-profile-item.tpl.php
 *   Where the html is handled for each item in the group.
 * @see template_preprocess_user_profile()
 *
 * @ingroup themeable
 */

$user_grapher = new VirginEntityGrapher('user', user_load($user->uid));
?>

<div class="vs-head-region">
  <div class="vs-region vs-region--no-padding">
    <div class="vs-hero-banner">
      <div class="vs-hero-banner__background">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2 class="vs-hero-banner__title"><?php print check_plain($user_grapher->fieldGetOne('field_first_name') . ' ' . $user_grapher->fieldGetOne('field_last_name')); ?></h2>
              <?php
              /*
               * TODO there is no field or area for entering this information at this point in time.
              <div class="vs-hero-banner-block__subtitle">
                <?php print t('Badder than Beyonce at running'); ?>
              </div>
              */
              ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="vs-region vs-region--gradient-default" data-vs-region-curved="1" data-vs-region-color="default">

  <div class="vs-subnav">
    <div class="vs-subnav__overlay"></div>

    <ul class="vs-subnav__list">
      <li class="vs-subnav__item">
        <a class="vs-subnav__link vs-subnav__link--active" href="<?php print url('user'); ?>">
          <?php print t('My Profile'); ?>
        </a>
      </li>
      <li class="vs-subnav__item">
        <a class="vs-subnav__link" href="<?php print url('user/' . $user->uid . '/edit') ?>">
          <?php print t('Account Details'); ?>
        </a>
      </li>
    </ul>
  </div>
</div>

<?php if(!empty($upcoming_festivals->content)): ?>
  <div class="vs-region vs-region--gradient-gray">
    <?php print $upcoming_festivals->content ?>
  </div>
<?php endif; ?>

<?php if(!empty($past_festivals->content)): ?>
  <div class="vs-region vs-region--gradient-gray">
      <div class="vs-festival-profile-header__title">
        <?php print t('Past Events'); ?>
      </div>
      <?php print $past_festivals->content; ?>
  </div>
<?php endif; ?>
