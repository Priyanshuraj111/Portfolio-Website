// Hamburger Menu Toggle
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list .mobile-menu');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// Event listener for hamburger menu click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

// Event listener for scroll event to change header background color
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.classList.add('scrolled');  // add scrolled class for dark background
  } else {
    header.classList.remove('scrolled');  // remove scrolled class for transparent background
  }
});

// Close the mobile menu when clicking a menu item
menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
  });
});
