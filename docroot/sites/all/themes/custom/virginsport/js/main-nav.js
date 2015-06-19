(function ($) {

  $(document).ready(run);

  function run () {
    var $nav = $('#main-nav');
    var $burger = $nav.find('.burger');

    $burger.click(function () {
      $nav.toggleClass('main-nav-open');
    });
  }

}(jQuery));
