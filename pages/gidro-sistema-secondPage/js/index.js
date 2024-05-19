// slider variables
const slides = document.querySelectorAll('.about-slider__slide');
const sliderWindow = document.querySelector('.about-us__img-content');
const sliderLine = document.querySelector('.about-slider__slider-line');
let count = 0;
let width;
document.body.addEventListener('click', function (event) {
  // menu burger
  if (event.target.closest('.header__menu-icon')) {
    const menuIcon = document.querySelector('.header__menu-icon');
    const menuBody = document.querySelector('.menu');
    const headerMiddle = document.querySelector('.header__header-middle');
    const headerMiddleActive = document.querySelector('.header__header-middle ._active');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    if (headerMiddleActive) {
      headerMiddle.classList.remove('_active');
    } else {
      setTimeout(() => {
        headerMiddle.classList.add('_active');
      }, 200);
    }
  }
})
//swiper
const swiper = new Swiper('.about-us__img-content', {
  navigation: {
    nextEl: '.about-slider__next-button',
    prevEl: '.about-slider__prev-button',
  }
});