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

    // Floaters
  }

}(jQuery));
