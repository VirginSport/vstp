<?php
/**
 * @file
 * Default theme implementation to display the basic html structure of a single
 * Drupal page.
 *
 * Variables:
 * - $css: An array of CSS files for the current page.
 * - $language: (object) The language the site is being displayed in.
 *   $language->language contains its textual representation.
 *   $language->dir contains the language direction. It will either be 'ltr' or
 *   'rtl'.
 * - $rdf_namespaces: All the RDF namespace prefixes used in the HTML document.
 * - $grddl_profile: A GRDDL profile allowing agents to extract the RDF data.
 * - $head_title: A modified version of the page title, for use in the TITLE
 *   tag.
 * - $head_title_array: (array) An associative array containing the string parts
 *   that were used to generate the $head_title variable, already prepared to be
 *   output as TITLE tag. The key/value pairs may contain one or more of the
 *   following, depending on conditions:
 *   - title: The title of the current page, if any.
 *   - name: The name of the site.
 *   - slogan: The slogan of the site, if any, and if there is no title.
 * - $head: Markup for the HEAD section (including meta tags, keyword tags, and
 *   so on).
 * - $styles: Style tags necessary to import all CSS files for the page.
 * - $scripts: Script tags necessary to load the JavaScript files and settings
 *   for the page.
 * - $page_top: Initial markup from any modules that have altered the
 *   page. This variable should always be output first, before all other dynamic
 *   content.
 * - $page: The rendered page content.
 * - $page_bottom: Final closing markup from any modules that have altered the
 *   page. This variable should always be output last, after all other dynamic
 *   content.
 * - $classes String of classes that can be used to style contextually through
 *   CSS.
 *
 * @see bootstrap_preprocess_html()
 * @see template_preprocess()
 * @see template_preprocess_html()
 * @see template_process()
 *
 * @ingroup themeable
 */
?>

<!DOCTYPE html>

<html vs-region-loading="true" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces;?>>
  <head profile="<?php print $grddl_profile; ?>">
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>
    <!-- Viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <!-- Favicons -->
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php print $current_path; ?>/favicons/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="512x512"  href="<?php print $current_path; ?>/favicons/android-chrome-512x512.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php print $current_path; ?>/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php print $current_path; ?>/favicons/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php print $current_path; ?>/favicons/apple-touch-icon.png">
    <meta name="apple-mobile-web-app-status-bar-style" content="#FF5555">
    <meta name="msapplication-TileColor" content="#FF5555">
    <meta name="msapplication-TileImage" content="<?php print $current_path;  ?>/favicons/mstile-150x150.png">
    <meta name="theme-color" content="#FF5555">

    <?php foreach ($gtm_metadata as $key => $value): ?>
      <meta name="<?php print $key; ?>" content="<?php print check_plain($value); ?>">
    <?php endforeach; ?>

    <!-- Stylesheets -->
    <?php print $styles; ?>

    <!-- Render Blocking Scripts -->
    <script>
      window.document.documentElement.setAttribute('vs-region-loading', 'true');
    </script>

    <?php if(!empty($gtm_code) && !empty($ua_code)) : ?>
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', '<?php print $ua_code ?>', 'auto');
        ga('require', '<?php print $gtm_code ?>');
        ga('send', 'pageview');
      </script>
    <?php endif; ?>

    <!-- Google Tag Manager Data Layer -->
    <script>
      dataLayer = <?php print $gtm_data_layer; ?>;
    </script>
    <!-- End Google Tag Manager Data Layer -->

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MDT6W8');</script>
    <!-- End Google Tag Manager -->
  </head>

  <body class="<?php print $classes; ?>" <?php print $attributes;?>>
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDT6W8" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div id="skip-link">
      <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
    </div>

    <?php print $page_top; ?>

    <?php print $page; ?>

    <!-- Non-blocking Scripts -->
    <?php print $scripts; ?>

    <!-- Push collected events to Google Tag Manager Data Layer -->
    <script>
      window.addEventListener('load', function() {
        <?php foreach ($data_layer_events as $event): ?>
        dataLayer.push(<?php print $event; ?>);
        <?php endforeach; ?>
      });
    </script>
    <!-- End Push collected events to Google Tag Manager Data Layer -->

    <?php print $page_bottom; ?>
  </body>
</html>
