<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
?>

<?php print $messages; ?>

<button class="vs-menu-trigger vs-menu-trigger--menu">
  <span class="vs-menu-trigger__bar">
    <span class="sr-only"><?php print t('Toggle menu'); ?></span>
  </span>
</button>

<div class="vs-overlay">
  <div class="vs-mobile-menu">
    <div class="vs-mobile-menu__inner">
      <ul class="vs-mobile-menu__menu">
        <?php foreach ($main_menu as $item): ?>
          <li class="vs-mobile-menu__item">
            <a class="vs-mobile-menu__link" href="<?php print $item['url']; ?>"><?php print $item['title']; ?></a>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</div>

<div class="vs-overlay-blur">

  <div class="vs-header">
    <div class="container-fluid clearfix">
      <div class="vs-header__logo-wrapper">
        <a class="vs-header__logo" href="<?php print url($front_page); ?>">
          <span class="sr-only"><?php print t('Virgin Sport'); ?></span>
        </a>
      </div>

      <div class="vs-header__nav-wrapper">
        <ul class="vs-header__nav">
          <?php foreach ($main_menu as $item): ?>
            <li class="vs-header__nav-item">
              <a class="vs-header__nav-link" href="<?php print $item['url']; ?>"><?php print $item['title']; ?></a>
            </li>
          <?php endforeach; ?>
        </ul>

        <?php if (!$logged_in): ?>
        <div class="vs-user-menu">
          <a class="vs-user-menu__trigger vs-user-menu__trigger--not-logged" href="<?php print url('/user/login'); ?>">&nbsp;</a>
        </div>
        <?php endif; ?>

        <?php if ($logged_in): ?>
        <div class="vs-user-menu">
          <a class="vs-user-menu__trigger" href="#">
            <?php print $account['initials']; ?>
          </a>
          <ul class="vs-user-dropdown">
            <li class="vs-user-dropdown__item vs-user-dropdown__item--header">
              <?php print $account['first_name'] . ' ' . $account['last_name']; ?>
            </li>
            <li class="vs-user-dropdown__item">
              <a class="vs-user-dropdown__link btn vs-btn vs-btn--min-sm" href="<?php print url('/user'); ?>"><?php print t('View profile'); ?></a>
            </li>
            <li class="vs-user-dropdown__item">
              <a class="vs-user-dropdown__link--logout btn btn-link btn-block" href="<?php print url('/user/logout'); ?>"><?php print t('Sign out'); ?></a>
            </li>
          </ul>
        </div>
        <?php endif; ?>

        <div class="vs-header__basket">
          <span class="vs-header__basket__value">0</span>
        </div>
        <button class="vs-menu-trigger">
          <span class="vs-menu-trigger__bar">
            <span class="sr-only">toggle menu</span>
          </span>
        </button>
      </div>
    </div>
  </div>

  <div class="page-wrapper">
    <?php if ($page_manager): ?>
      <?php print render($page['content']); ?>
    <?php endif; ?>

    <?php if (!$page_manager): ?>
      <div class="vs-region vs-region--no-padding">
        <div class="vs-hero-banner">
          <div class="vs-hero-banner__background">
            <div class="container">
              <div class="row">
                <div class="col-xs-12">
                  <h2 class="vs-hero-banner__title"><?php print $title; ?></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="vs-region vs-region--light-gray">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <?php print render($page['content']); ?>

              <?php if (!empty($tabs)): ?>
                <div id="tabs">
                  <?php print render($tabs); ?>
                </div>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </div>
    <?php endif; ?>
  </div>

  <div class="vs-footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-3 col-lg-2">
          <div class="btn-group dropup vs-footer__language">
            <!-- TODO The region picker is not yet finished -->
          </div>
        </div>

        <div class="col-xs-12 col-md-6 col-lg-7 col-xl-6">
          <ul class="vs-footer__menu">
            <?php foreach ($footer_menu as $item): ?>
            <li class="vs-footer__menu-item">
              <a class="vs-footer__menu-item__link" href="<?php print $item['url']; ?>"><?php print $item['title']; ?></a>
            </li>
            <?php endforeach; ?>
          </ul>
        </div>

        <div class="col-xs-12 col-md-3 col-xl-4">
          <ul class="list-inline vs-footer__social-list">
            <?php foreach ($social_networks as $network): ?>
              <li class="vs-footer__social-item">
                <a class="vs-footer__social vs-footer__social--<?php print $network['key']; ?>" href="<?php print $network['url']; ?>">
                  <span class="sr-only"><?php print t('Visit our @name', array('@name' => $network['label'])); ?></span>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
