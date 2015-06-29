(function ($) {

  $(document).ready(run);

  function run () {

    var $module = $('#virgin-module-text');

    // If the module does not exist, bail out.
    if (!$module.length) {
      return;
    }

    var controller = new ScrollMagic.Controller();

    var $title = $module.find('h1');
    var $images = $module.find('img');

    var scene = new ScrollMagic.Scene({
      triggerElement: $title,
      duration: '200%'
    });

    var timeline = new TimelineMax();

    tween(timeline, $images.get(0), 0.6, { y: '60%', opacity: 0.8 });
    tween(timeline, $images.get(1), 0.7, { y: '90%', opacity: 0.8 });
    tween(timeline, $images.get(2), 0.5, { y: '20%', opacity: 0.8 });
    tween(timeline, $images.get(3), 0.7, { y: '50%', opacity: 0.83 });
    tween(timeline, $images.get(4), 0.8, { y: '60%', opacity: 0.83 });
    tween(timeline, $images.get(5), 0.9, { y: '90%', opacity: 0.83 });
    tween(timeline, $images.get(6), 0.5, { y: '120%', opacity: 0.83 });
    tween(timeline, $images.get(7), 0.5, { y: '140%', opacity: 0.83 });

    scene
      .setTween(timeline)
      .addTo(controller)
    ;

    function tween(timeline, target, duration, vars) {
      if (!target) return;

      timeline.add(new TweenMax.from(target, duration, vars), 0);
    }
  }

}(jQuery));
