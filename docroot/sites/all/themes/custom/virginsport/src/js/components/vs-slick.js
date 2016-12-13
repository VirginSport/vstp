import 'slick-carousel';

export default () => {
  function slickify(){
    $('.slider').slick({
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: "unslick"
        },
        {
          breakpoint: 544,
          settings: {
            arrows: false,
            centerPadding: 0,
            autoplay: true
          }
        }
      ]
    });
  }

  slickify();
  $(window).resize(function(){
    var $windowWidth = $(window).width();
    if ($windowWidth < 768) {
      slickify();
    }
  });
};
