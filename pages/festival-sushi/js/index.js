const swiperEvents = new Swiper('.events__swiper', {
  navigation: {
    nextEl: '.events__next',
    prevEl: '.events__prev',
  },
  slidesPerView: 3,
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },
})
const foodMenu = new Swiper('.food-menu__category', {
  navigation: {
    nextEl: '.category__next',
    prevEl: '.category__prev',
  },
  slidesPerView: 6,
  breakpoints: {
    280: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 6,
    },
  },
})
// click delegation
document.body.addEventListener('click', function(e) {
  // category select
  if (e.target.closest('.category__item')) {
    const categoryItem = e.target.closest('.category__item');
    const categoryItems = document.querySelectorAll('.category__item');
    for (let item of categoryItems) {
      item.classList.remove('_active');
    }
    categoryItem.classList.add('_active');  
  }
  // filtres open
  if (e.target.closest('.filters__ingredients')) {
    const ingredientsIcon = document.querySelector('.ingredients__icon-orange');
    const ingredientsIconWrapper = document.querySelector('.ingredients__icon-wrapper');
    const ingredientsText = document.querySelector('.ingredients__text');
    const filtersBlock = document.querySelector('.filters__filtres');
    const filtersWrapper = document.querySelector('.food-menu__filters')
    filtersWrapper.classList.toggle('_active');
    filtersBlock.classList.toggle('_active');
    ingredientsText.classList.toggle('_active');
    ingredientsIconWrapper.classList.toggle('_active');
    ingredientsIcon.classList.toggle('_active');
  }
  // menu burger
  if (e.target.closest('.header-top__menu-icon')) {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.header-top__menu-icon');
    menuIcon.classList.toggle('_active');
    menu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  }
})