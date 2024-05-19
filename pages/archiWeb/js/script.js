// glogal variables 
const menuIcon = document.querySelector('.menu__icon');
document.body.addEventListener('click', function (event) {
  // search form
  // when click
  if (event.target.closest('.menu__search-icon')) {
    const menuList = document.querySelector('.menu__list');
    const menuForms = document.querySelector('.menu__form');
    menuList.classList.toggle('_searched');
    menuForms.classList.toggle('_searched');
  }
  if (!event.target.closest('.menu__search-icon')) {
    let removeSearched = () => {
      if (event.target.closest('.menu__input-form')) {
        return;
      }
      const menuList = document.querySelector('.menu__list');
      const menuForms = document.querySelector('.menu__form');
      menuList.classList.remove('_searched');
      menuForms.classList.remove('_searched');
    }
    removeSearched();
  }
  // menu burger
  if (event.target.closest('.menu__icon'))  {
    const menuBody = document.querySelector('.menu__body');
    const image = document.querySelector('.main-section__bg-image');
    image.classList.toggle('_lock')
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  }

  if (event.target.closest('.projects__link')) {
      // tabs-buttons
    const tabButtons = document.querySelectorAll('.projects__link');
    for (let tabButton of tabButtons) {
      tabButton.classList.remove('_bold');
      if (event.target.closest('.first-link')) {
        const clickedTabButton = document.querySelector('.first-link');
        clickedTabButton.classList.add('_bold');
      }
      if (event.target.closest('.second-link')) {
        const clickedTabButton = document.querySelector('.second-link');
        clickedTabButton.classList.add('_bold');

      }
      if (event.target.closest('.third-link')) {
        const clickedTabButton = document.querySelector('.third-link');
        clickedTabButton.classList.add('_bold');

      }
      if (event.target.closest('.fourth-link')) {
        const clickedTabButton = document.querySelector('.fourth-link');
        clickedTabButton.classList.add('_bold');
      }
    }
    
    // tabs 
     const tabs = document.querySelectorAll('.projects__list');
     for (let tab of tabs) {
      tab.classList.remove('_opened');
      if (event.target.closest('.first-link')) {
        const clickedTab = document.querySelector('.projects__tab1');
        clickedTab.classList.add('_opened');
      }
      if (event.target.closest('.second-link')) {
        const clickedTab = document.querySelector('.projects__tab2');
        clickedTab.classList.add('_opened');
      }
      if (event.target.closest('.third-link')) {
        const clickedTab = document.querySelector('.projects__tab3');
        clickedTab.classList.add('_opened');
      }
      if (event.target.closest('.fourth-link')) {
        const clickedTab = document.querySelector('.projects__tab4');
        clickedTab.classList.add('_opened');
      }
     }
  } 
})

// close form when press escape
document.body.addEventListener('keydown', function (event) {
  if(event.code === 'Escape') {
      const menuList = document.querySelector('.menu__list');
      const menuForms = document.querySelector('.menu__form');
      menuList.classList.remove('_searched');
      menuForms.classList.remove('_searched');
  }
})

// header swiper initialize
const swiper = new Swiper('.main-section__swiper', {
  navigation: {
    nextEl: '.main-section__next',
    prevEl: '.main-section__prev',
  },
})
// testimonial swiper initialize
const swiper2 = new Swiper('.testimonial__swiper', {
  pagination: {
    el: '.testimonial__pagination',
    type: 'bullets',
    clickable: true,
  },
})