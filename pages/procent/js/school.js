document.body.addEventListener('click', function(e) {
  // menu burger
  if (e.target.closest('.header-top__menu-icon')) {
    const menuIcon = document.querySelector('.header-top__menu-icon');
    const menuBody = document.querySelector('.header__menu');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  } 

  // tabs 
  if (e.target.closest('.articles__tab')) {
    if (e.target.closest('.articles__tab').classList.contains('_active')) {
      return;
    } else {
      const tabs = document.querySelectorAll('.articles__tab');
      const pressedTab = e.target.closest('.articles__tab');
      const tabsContent = document.querySelectorAll('.articles__tab-content');
      const pressedTabName = pressedTab.getAttribute('data-tabName');
      const activatedContent = document.querySelector(`.${pressedTabName}`);
      for (tab of tabs) {
        tab.classList.remove('_active')
      }
      for (tabContent of tabsContent) {
        tabContent.classList.remove('_active');
      }
      pressedTab.classList.add('_active');
      activatedContent.classList.add('_active');
    }
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

const mortgageContentSwiper = new Swiper('.mortgage-content__swiper', {
  navigation: {
    nextEl: '.mortgage-content__next',
    prevEl: '.mortgage-content__prev',
  },
  pagination: {
    el: '.mortgage-content__pagination',
    type: 'fraction',
  },
})
const buisnessContentSwiper = new Swiper('.credit-for-buisness__swiper', {
  navigation: {
    nextEl: '.credit-for-buisness__next',
    prevEl: '.credit-for-buisness__prev',
  },
  pagination: {
    el: '.credit-for-buisness__pagination',
    type: 'fraction',
  },
})
const lifeExamplesSwiper = new Swiper('.life-examples__swiper', {
  navigation: {
    nextEl: '.life-examples__next',
    prevEl: '.life-examples__prev',
  },
  pagination: {
    el: '.life-examples__pagination',
    type: 'fraction',
  },
})
const financianConsultingSwiper = new Swiper('.financial-consulting__swiper', {
  navigation: {
    nextEl: '.financial-consulting__next',
    prevEl: '.financial-consulting__prev',
  },
  pagination: {
    el: '.financial-consulting__pagination',
    type: 'fraction',
  },
})
const onlineSwiper = new Swiper('.online__swiper', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.online__next',
    prevEl: '.online__prev',
  },
})
document.addEventListener('mouseover', function (e) {
  if (e.target.closest('.online__prev-plush')) {
    const button = document.querySelector('.online__prev');
    button.classList.toggle('_active');
  }
  if (e.target.closest('.online__next-plush')) {
    const button = document.querySelector('.online__next');
    button.classList.toggle('_active');
  }
})
document.addEventListener('mouseout', function (e) {
  if (e.target.closest('.online__prev-plush')) {
    const button = document.querySelector('.online__prev');
    button.classList.toggle('_active');
  }
  if (e.target.closest('.online__next-plush')) {
    const button = document.querySelector('.online__next');
    button.classList.toggle('_active');
  }
})
