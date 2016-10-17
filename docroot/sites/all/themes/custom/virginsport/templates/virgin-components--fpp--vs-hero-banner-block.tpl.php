<?php
/**
 * @file virgin-components--fpp--vs-hero-banner-block.tpl.php
 * Main template for virgin components fieldable panel panes vs_hero_banner_block
 *
 *  Variables available:
 *  $hero_banner_title - The component title
 *  $hero_banner_subheading - The component sub title
 *  $hero_banner_image - The hero image atom VirginEntityGrapher
 *  $cta_links - An array of links
 */
?>

<vs-hero-banner _ngcontent-wml-3="" ng-reflect-title="Hackney Festival" ng-reflect-date="03 - 07 Aug 16">
    <div class="vs-hero-banner__background" style="<?php print virginsport_atom_background($hero_banner_image->getEntity()); ?>">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <?php if(!empty($hero_banner_title)): ?>
                        <h2 class="vs-hero-banner__title"><?php print $hero_banner_title; ?></h2>
                    <?php endif; ?>
                    <?php if(!empty($hero_banner_subheading)): ?>
                        <div class="vs-hero-banner__date"><?php print $hero_banner_subheading; ?></div>
                    <?php endif; ?>
                    <div class="vs-hero-banner__button-wrapper">
                        <?php print
                            theme('virginsport_cta_links',
                                array(
                                    'links' => $cta_links,
                                    'classes' => 'vs-btn--min-sm vs-hero-banner__button'
                                )
                            );
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</vs-hero-banner>
