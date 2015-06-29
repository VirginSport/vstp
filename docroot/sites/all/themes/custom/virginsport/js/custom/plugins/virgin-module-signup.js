(function ($) {

  $(document).ready(run);

  function run () {
    var $module = $('#virgin-module-signup');

    // Slider
    var $slider = $module.find('.signup-slider');

    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      mobileFirst: true,
      arrows: false,
      //autoplay: true,
      autoplaySpeed: 600,
      //cssEase: 'linear',
      speed: 800,
      pauseOnHover: false,
      infinite: true
    });

    // Facts
    var $facts = $module.find('.facts');
    var $factLink = $module.find('.fact-link');

    $facts.slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      adaptiveHeight: true,
      fade: true
    });

    $factLink.on('click', function (e) {
      e.preventDefault();
      $facts.slick('slickNext');
    });

    // Slider Timeline
    var $floaters = $module.find('[floater]');

    var sliderController = new ScrollMagic.Controller();

    var $signupContainer = $module.find('.signup-container');

    var sliderScene = new ScrollMagic.Scene({
      triggerElement: $signupContainer,
      triggerHook: 'onEnter',
      duration: function () {
        return Math.round($signupContainer.height());
      }
    });

    var sliderTimeline = new TimelineMax();

    tween(sliderTimeline, $floaters.get(0), 3, { y: '-50%', opacity: 0.8 });
    tween(sliderTimeline, $floaters.get(1), 3, { y: '-300%', opacity: 0.8 });
    tween(sliderTimeline, $floaters.get(2), 3, { y: '-100%', opacity: 0.8, scale: 0.05 });

    tween(sliderTimeline, $floaters.get(3), 3, { y: '-230%', opacity: 0.5, scale: 0.05 });
    tween(sliderTimeline, $floaters.get(4), 3, { y: '300%', opacity: 0.83 });

    sliderScene
      .setTween(sliderTimeline)
      .addTo(sliderController)
    ;

    // Facts Timeline
    var factController = new ScrollMagic.Controller();
    var $factsContainer = $module.find('.facts-container');

    var factScene = new ScrollMagic.Scene({
      triggerElement: $factsContainer,
      triggerHook: 'onEnter',
      duration: function () {
        return Math.round($factsContainer.height());
      }
    });

    var factTimeline = new TimelineMax();

    tween(factTimeline, $floaters.get(5), 4, { y: '-300%', opacity: 0.83 });
    tween(factTimeline, $floaters.get(6), 4, { y: '-100%', opacity: 0.83 });
    tween(factTimeline, $floaters.get(7), 4, { y: '-100%', opacity: 0.83 });
    tween(factTimeline, $floaters.get(8), 4, { y: '-200%', opacity: 0.83 });
    tween(factTimeline, $floaters.get(9), 4, { y: '-100%', opacity: 0.83 });
    tween(factTimeline, $floaters.get(10), 4, { y: '-130%', opacity: 0.83 });
    tween(factTimeline, $floaters.get(11), 4, { y: '-200%', opacity: 0.83 });

    factScene
      .setTween(factTimeline)
      .addTo(factController)
    ;

    function tween(timeline, target, duration, vars, direction) {
      var dir = direction || 'from';
      if (!target) return;

      timeline.add(new TweenMax[dir](target, duration, vars), 0);
    }
  }

}(jQuery));
