$(function() {
  toggleMenu ();
});

window.onload = function() {
  console.log('window onload');
  $('.loading-container').addClass('is-hide');
};

function showMenu() {
  $('.menu-btn').addClass('show');
  $('.nav-overlay').removeClass('is-hide');
  $('.menu').addClass('show');
}

function hideMenu() {
  $('.menu-btn').removeClass('show');
  $('.nav-overlay').addClass('is-hide');
  $('.menu').removeClass('show');
}

function toggleMenu () {
  $('.menu-btn, .nav-overlay').on('click', function() {
    if ($('.menu-btn').hasClass('show')) hideMenu(); 
    else showMenu();
  })
}


