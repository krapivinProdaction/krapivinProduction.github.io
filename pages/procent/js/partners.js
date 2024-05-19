document.body.addEventListener('click', function(e) {
  // menu burger
  if (e.target.closest('.header-top__menu-icon')) {
    const menuIcon = document.querySelector('.header-top__menu-icon');
    const menuBody = document.querySelector('.header__menu');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  }
  
  // accordion 
  if (e.target.closest('.questions-accordion__item')) {
    const questionItemPressed = e.target.closest('.questions-accordion__item');
    const accordionElement = questionItemPressed.parentNode;
    if (accordionElement.classList.contains('_active')) {
      accordionElement.classList.remove('_active');
      return;
    } else {
      const itemWrappers = document.querySelectorAll('.questions-accordion__item-wrapper');
      for (itemWrapper of itemWrappers) {
        itemWrapper.classList.remove('_active');
      }
      accordionElement.classList.add('_active');
    }
  }
})

const partnersSwiper2 = new Swiper('.partners-text__swiper', {
  navigation: {
    nextEl: '.partners-text__next',
    prevEl: '.partners-text__prev',
  },
  slidesPerView: 'auto',
  slidesPerGroup: 1,
})