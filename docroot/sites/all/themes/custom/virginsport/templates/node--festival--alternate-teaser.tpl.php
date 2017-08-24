<?php

/**
 * @file
 * Default theme implementation to display a node of type festival with
 * view mode teaser.
 *
 * Available variables:
 * - $grapher: EntityGrapher object.
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all,
 *   or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct URL of the current node.
 * - $display_submitted: Whether submission information should be displayed.
 * - $submitted: Submission information created from $name and $date during
 *   template_preprocess_node().
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - node: The current template type; for example, "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser
 *     listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type; for example, story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode; for example, "full", "teaser".
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined; for example, $node->body becomes $body. When needing to
 * access a field's raw values, developers/themers are strongly encouraged to
 * use these variables. Otherwise they will have to explicitly specify the
 * desired field language; for example, $node->body['en'], thus overriding any
 * language negotiation rule that was previously applied.
 *
 * @var VirginEntityGrapher $grapher
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 *
 * @ingroup themeable
 */

$title = $grapher->fieldGetOne('title_field');
$brand_color = $grapher->fieldGetOne('field_brand_color');
$brand_pattern = $grapher->fieldGetOne('field_brand_pattern');
$past_description = $grapher->fieldRendered('field_description_short_past');
$card_atom = $grapher->relation('field_card_image')->getEntity();

$festival_state = $grapher->relation('field_festival_state');
$start_date = $festival_state->fieldGetOne('field_start_date');
$end_date = $festival_state->fieldGetOne('field_end_date');
$timezone = $festival_state->fieldGetOne('field_timezone');

$review_url = $grapher->fieldGetOne('field_review_url', '', 'url');
$results_url = $grapher->fieldGetOne('field_results_url', '', 'url');
$replay_url = $grapher->fieldGetOne('field_replay_url', '', 'url');

?>

<div class="vs-card-past">
  <div class="container">
    <div class="row">
      <div class="vs-card-past__container-wrapper">
        <div class="vs-card-past__container">
          <?php print theme('virginsport_color', array('brand_color' => $brand_color, 'brand_pattern' => $brand_pattern)); ?>

          <div class="vs-card-past__image" style="<?php print virginsport_atom_background($card_atom); ?>"></div>

          <div class="col-xs-12 col-md-7 col-lg-8 vs-card-past__content">
            <h4 class="vs-card-past__title"><?php print check_plain($title); ?></h4>
            <div class="vs-card-past__date"><?php print virginsport_date_interval($start_date, $end_date, $timezone); ?></div>
            <p class="vs-card-past__text"><?php print strip_tags($past_description,'<br>'); ?></p>
          </div>

          <div class="col-xs-12 col-md-5 col-lg-4 vs-card-past__ctas-content">
            <div class="vs-card-past__ctas-wrapper">

              <?php if (!empty($review_url)): ?>
              <div class="vs-card-past__cta-wrapper">
                <a class="vs-card-past__cta--read-review" href="<?php print url($review_url); ?>">
                  <i class="icon-review"></i>
                  <?php print t('Recap'); ?>
                </a>
              </div>
              <?php endif; ?>

              <?php if (!empty($results_url)): ?>
              <div class="vs-card-past__cta-wrapper">
                <a class="vs-card-past__cta--full-results" href="<?php print url($results_url); ?>">
                  <i class="icon-results-medal"></i>
                  <?php print t('Results'); ?>
                </a>
              </div>
              <?php endif; ?>

              <?php if (!empty($replay_url)): ?>
              <div class="vs-card-past__cta-wrapper">
                <a class="vs-card-past__cta--replay-run" href="<?php print url($replay_url); ?>">
                  <i class="icon-replay"></i>
                  <?php print t('Replay Run'); ?>
                </a>
              </div>
              <?php endif ;?>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
