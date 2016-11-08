<?php
/**
 * @file virgin-components--fpp--vs-hootsuite-social-feed.tpl.php
 * Main template for virgin components fieldable panel panes vs_hootsuite_feed
 *
 * Variables available:
 * @var $title
 *  The campaign title
 * @var $campaign_url
 *  The campaign url
 */
?>

<script src="//assets.hscampaigns.com/assets/js/iframe.min.js"></script>
<iframe width="100%" frameBorder="0" scrolling="no" src="<?php print $campaign_url; ?>?hidesections=header,footer,navigation,&redirect=false" id="bk_iframe" onload="resizeCrossDomainIframe('bk_iframe', '<?php print $campaign_url; ?>');" allowfullscreen></iframe>
