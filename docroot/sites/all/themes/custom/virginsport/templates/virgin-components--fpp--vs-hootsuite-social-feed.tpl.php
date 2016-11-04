<?php
/**
 * @file virgin-components--fpp--vs-hootsuite-social-feed.tpl.php
 * Main template for virgin components fieldable panel panes vs_hootsuite_feed
 *
 * Variables available:
 * $title - The campaign title
 * $campaign_url - The campaign url
 */
?>

<iframe width="100%" height="500px" frameBorder="0" scrolling="no" src="<?php print $campaign_url; ?>?hidesections=header,footer,navigation,&redirect=false" id="bk_iframe" onload="resizeCrossDomainIframe('bk_iframe', 'http://virginsport.hscampaigns.com');" allowfullscreen></iframe>
