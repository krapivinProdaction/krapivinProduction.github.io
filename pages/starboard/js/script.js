const menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
  const  menuBody = document.querySelector('.menu__body');
  const logo = document.querySelector('.header__logo');
  const containerHeader = document.querySelector('.header__container');
  menuIcon.addEventListener("click", function (e) {
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    logo.classList.toggle('_active');
    containerHeader.classList.toggle('_active');
  })
}

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.testimonials__pagination',
    type: 'bullets',
    clickable: true,
  },
});