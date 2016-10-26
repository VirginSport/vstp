let $ = window.jQuery;

export default function () {
  let $body = $('body');
  let $header = $('.vs-header');

  userDropdown($body, $header);
  mobileMenu($body, $header);
}

/**
 * Activates the user dropdown
 *
 * @param $body
 * @param $header
 */
function userDropdown($body, $header) {
  let isOpen = false;
  let $menu = $header.find('.vs-user-menu');
  let $trigger = $menu.find('.vs-user-menu__trigger');
  let $dropdown = $menu.find('.vs-user-dropdown');
  
  // The user dropdown is closed if the user clicks anywhere in
  // the page but the dropdown area while the dropdown is open.
  $body.on('click', (e) => {
    if (isOpen && !$.contains($menu[0], e.target)) {
      close();
    }
  });
  
  // Toggle the dropdown states
  $trigger.on('click', (e) => {
    e.preventDefault();

    if (isOpen) {
      close();
    } else {
      open();
    }
  });
  
  function open() {
    $trigger.addClass('vs-user-menu__trigger--active');
    $dropdown.addClass('vs-user-dropdown--open');
    isOpen = true;
  }
  
  function close() {
    $trigger.removeClass('vs-user-menu__trigger--active');
    $dropdown.removeClass('vs-user-dropdown--open');
    isOpen = false;
  }
}

/**
 * Activates the mobile menu
 *
 * @param $body
 * @param $header
 */
function mobileMenu($body, $header) {
  let $trigger = $body.find('.vs-menu-trigger');
  
  $trigger.on('click', () => {
    $body.toggleClass('vs-menu-open');
  });
}
