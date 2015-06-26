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
<span id="top"></span>

<div id="account-menu">
  <div class="container">
    <ul class="horizontal menu pull-right">
      <?php if (user_is_anonymous()): ?>
        <li><a href="<?php print url('user/register'); ?>"><?php print t('Register'); ?></a></li>
        <li><a href="<?php print url('user/login'); ?>"><?php print t('Login'); ?></a></li>
      <?php endif; ?>

      <?php if (user_is_logged_in()): ?>
        <li><a href="<?php print url('user'); ?>"><?php print t('My Account'); ?></a></li>
        <li>
          <a href="<?php print url('user/logout'); ?>">
            <span><?php print t('Hi @name!', array('@name' => $account['first_name'])); ?></span>
            (<?php print t('Logout'); ?>)
          </a>
        </li>
      <?php endif; ?>
    </ul>
  </div>
</div>
<!-- /#account-menu -->

<div id="header-background" color-target>
  <?php foreach ($color_fills as $color): ?>
    <div color-fill="<?php print $color; ?>"></div>
  <?php endforeach; ?>
</div>
<!-- /#header-background -->

<div id="header" color-target>
  <?php foreach ($color_fills as $color): ?>
    <div color-fill="<?php print $color; ?>"></div>
  <?php endforeach; ?>

  <div class="container">
    <a href="<?php print url('<front>'); ?>" class="logo"><?php print $site_name; ?></a>

    <span id="burger">
      <span class="burger-bars">
        <span class="burger-bar top"></span>
        <span class="burger-bar middle"></span>
        <span class="burger-bar bottom"></span>
      </span>
    </span>
  </div>
</div>
<!-- /#header -->

<nav id="main-menu" color-target>
  <div color-container>
    <?php foreach ($color_fills as $color): ?>
      <div color-fill="<?php print $color; ?>"></div>
    <?php endforeach; ?>

    <ul class="menu-parent">
      <?php if (!empty($main_menu)) print render($main_menu); ?>
    </ul>
  </div>
</nav>
<!-- /#main-menu -->

<section id="content">
  <?php if (!$page_manager): ?>
    <div class="container">
    <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
    <a id="main-content"></a>
    <?php print render($title_prefix); ?>
    <?php if (!empty($title)): ?>
      <h1 class="page-header"><?php print $title; ?></h1>
    <?php endif; ?>
    <?php print render($title_suffix); ?>
    <?php print $messages; ?>
    <?php if (!empty($tabs)): ?>
      <?php print render($tabs); ?>
    <?php endif; ?>
    <?php if (!empty($action_links)): ?>
      <ul class="action-links"><?php print render($action_links); ?></ul>
    <?php endif; ?>
  <?php endif; ?>
  <?php print render($page['content']); ?>
  <?php if (!$page_manager): ?>
    </div>
  <?php endif; ?>
</section>
<!-- /#content -->

<footer id="footer">
  <div class="footer-navigation">
    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-3 col-lg-3">
          <span class="logo">
            <?php print t('Virgin Sport'); ?>
          </span>
        </div>

        <div class="col-xs-12 col-md-9 col-lg-9">
          <div class="row">

            <div class="col-xs-12 col-md-7">
              <ul id="footer-menu" class="horizontal menu">
                <?php if (!empty($footer_menu)) print render($footer_menu); ?>
              </ul>
            </div>

            <div class="col-xs-12 col-md-4">
              <ul id="social-networks" class="horizontal menu">
                <?php foreach ($social_networks as $network): ?>
                  <li>
                    <a target="_blank" href="<?php print $network['url']; ?>" class="icon <?php print $network['key']; ?>">
                      <span class="sr-only"><?php print $network['label']; ?></span>
                    </a>
                  </li>
                <?php endforeach; ?>
              </ul>
            </div>
          </div>
        </div>

        <a id="goto-top" href="#"><?php print t('TOP'); ?></a>
      </div>
    </div>
  </div>

  <div class="footer-meta">
    <div class="container">
      <span class="copyright">
        <?php print t('© @year Virgin Sport. All rights reserved.', array('@year' => date('Y'))); ?>
      </span>
    </div>
  </div>
</footer>
<!-- /#footer -->
