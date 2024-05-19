document.body.addEventListener('click', function (e) {
  // menu burger
  if (e.target.closest('.header-top__burger')) {
    const burger = e.target.closest('.header-top__burger');
    const menuBody = document.querySelector('.header__menu');
    const header = document.querySelector('.header');
    menuBody.classList.toggle('_active');
    header.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
  }
})

// photo swiper
const photoSwiper = new Swiper('.photos__swiper', {
  pagination: {
    el: '.photos__pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.photos__next',
    prevEl: '.photos__prev',
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  initialSlide: 2,
  breakpoints: {
    280: {
      initialSlide: 1,
    },
    1520: {
      initialSlide: 2,
    },
  }
})