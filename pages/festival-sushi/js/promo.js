document.body.addEventListener('click', function(e) {
  // menu burger
  if (e.target.closest('.header-top__menu-icon')) {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.header-top__menu-icon');
    menuIcon.classList.toggle('_active');
    menu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  }
})