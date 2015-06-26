(function ($) {

  $(document).ready(run);

  function run () {
    var controller = new ScrollMagic.Controller();

    var timeline = new TimelineMax();

    var $module = $('#virgin-module-text');
    var $title = $module.find('h1');
    var $images = $module.find('img');

    var scene = new ScrollMagic.Scene({
      triggerElement: $title,
      duration: '200%'
    });

    timeline
      .add(tween($images.get(0), 0.6, { y: '60%', opacity: 0.8 }), 0)
      .add(tween($images.get(1), 0.7, { y: '90%', opacity: 0.8 }), 0)
      .add(tween($images.get(2), 0.5, { y: '20%', opacity: 0.8 }), 0)
      .add(tween($images.get(3), 0.7, { y: '50%', opacity: 0.83 }), 0)
      .add(tween($images.get(4), 0.8, { y: '60%', opacity: 0.83 }), 0)
      .add(tween($images.get(5), 0.9, { y: '90%', opacity: 0.83 }), 0)
      .add(tween($images.get(6), 0.5, { y: '120%', opacity: 0.83 }), 0)
      .add(tween($images.get(7), 0.5, { y: '140%', opacity: 0.83 }), 0)
    ;

    scene
      .setTween(timeline)
      .addTo(controller)
    ;

    function tween(target, duration, vars) {
      return new TweenMax.from(target, duration, vars);
    }
  }

}(jQuery));
