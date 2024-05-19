// test progress counter
const testSlides = document.querySelectorAll('.test__slide');
const slidesCount = testSlides.length;
const oneSlideInPercent = Math.round(100 / slidesCount);
let testPercentage = 0;
const testProgress = document.querySelector('.test__pagination-result-num');
testProgress.innerHTML = testPercentage;


document.body.addEventListener('click', function (e) {
  // select variant
  if (e.target.closest('.test__variant')) {
    const selectVariant = e.target.closest('.test__variant');
    if (selectVariant.classList.contains('_active')) {
      return;
    } else {
      const variants = document.querySelectorAll('.test__variant');
      const nextButtonPlush = document.querySelector('.test__next-plush');
      const nextButton = document.querySelector('.test__next');
      for (variant of variants) {
        variant.classList.remove('_active');
      }
      selectVariant.classList.add('_active');
      nextButton.classList.add('_active');
      nextButtonPlush.classList.add('_active');
    }
  }
  // test progress counter and button reset
  if (e.target.closest('.test__next')) {
    const nextButtonPlush = document.querySelector('.test__next-plush');
    const nextButton = document.querySelector('.test__next');
    nextButtonPlush.classList.remove('_active');
    nextButton.classList.remove('_active');
    if (testPercentage === 100) {
      return;
    } else {
      testPercentage = testPercentage + oneSlideInPercent;
      console.log(testPercentage);
      testProgress.innerHTML = testPercentage;
    }
  }
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
  // accordion
  if (e.target.closest('.accordion__clickable')) {
    const clicked = e.target.closest('.accordion__clickable');
    const activeItem = clicked.parentNode;
    if (activeItem.classList.contains('_active')) {
      activeItem.classList.remove('_active')
      return;
    } else {
      const items = document.querySelectorAll('.accordion__item');
      for (item of items) {
        item.classList.remove('_active');
        activeItem.classList.add('_active');
      }
    }
  }
})
// test Swiper
let testSwiper = new Swiper('.kitchen-test__swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.kitchen-test__pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.kitchen-test__next',
  },
  allowTouchMove: false,
})
// portfolio swiper 
const portfolioSwiper = new Swiper('.portfolio-kitchens__swiper', {
  pagination: {
    el: '.portfolio-kitchens__pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.portfolio-kitchens__next',
    prevEl: '.portfolio-kitchens__prev',
  },
  slidesPerView: 'auto',
  direction: 'vertical',
})
// portfolio hover
document.addEventListener('mouseover', function (e) {
  if (e.target.closest('.portfolio__img-wrapper')) {
    const portfolioItemHover = e.target.closest('.portfolio__img-wrapper');
    portfolioItemHover.classList.add('_active');
  }
})
document.addEventListener('mouseout', function (e) {
  if (e.target.closest('.portfolio__img-wrapper')) {
    const portfolioItemHover = e.target.closest('.portfolio__img-wrapper');
    portfolioItemHover.classList.remove('_active');
  }
})
const productionSwiper = new Swiper('.production__swiper', {
  navigation: {
    nextEl: '.production__next',
    prevEl: '.production__prev',
  },
})
const furnitureSwiper = new Swiper('.furniture__swiper', {
  navigation: {
    nextEl: '.furniture__next',
    prevEl: '.furniture__prev',
  },
  pagination: {
    el: '.furniture__pagination',
    type: 'progressbar',
  },
})