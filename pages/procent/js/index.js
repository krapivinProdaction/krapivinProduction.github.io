const calcSelect = document.querySelector('.calculator-forms__select-term');

const mainSwiper = new Swiper('.main-section__swiper', {
  navigation: {
    nextEl: '.main-section__next',
    prevEl: '.main-section__prev',
  },
  pagination: {
    el: '.main-section__pagination',
    type: 'fraction',
  },
})

const benefitSwiper = new Swiper('.benefit__swiper', {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.benefit__next',
    prevEl: '.benefit__prev',
  },
})

const teamSwiper = new Swiper('.team__swiper', {
  navigation: {
    nextEl: '.team__next',
    prevEl: '.team__prev',
  },
  pagination: {
    el: '.team__pagination',
    type: 'fraction',
  },

  slidesPerView: 4,
  slidesPerGroup: 4,

  breakpoints: {
    280: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
})

const casesSwiper = new Swiper('.cases__swiper', {
  navigation: {
    nextEl: '.cases__next',
    prevEl: '.cases__prev',
  },
  pagination: {
    el: '.cases__pagination',
    type: 'bullets',
    clickable: true,
  },
})

const schoolSwiper = new Swiper('.school__swiper', {
  navigation: {
    nextEl: '.cours__next',
    prevEl: '.cours__prev',
  },
  pagination: {
    el: '.cours__pagination',
    type: 'bullets',
    clickable: true,
  },
})


const partnersSwiper = new Swiper('.partners__swiper', {
  navigation: {
    nextEl: '.partners__next',
    prevEl: '.partners__prev',
  },
  slidesPerView: 'auto',
  slidesPerGroup: 1,
})

const partnershipSwiper = new Swiper('.partnerships__swiper', {
  navigation: {
    nextEl: '.partnerships__next',
    prevEl: '.partnerships__prev',
  },
  slidesPerView: 'auto',
  slidesPerGroup: 1,
})

const partnershipDevoloersSwiper = new Swiper('.partnerships__swiper-developers', {
  navigation: {
    nextEl: '.partnerships__next-developers',
    prevEl: '.partnerships__prev-developers',
  },
  slidesPerView: 'auto',
  slidesPerGroup: 1,
})

const rewiewsSwiper = new Swiper('.reviews__swiper', {
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev',
  },
  pagination: {
    el: '.reviews__pagination',
    type: 'fraction',
  },
})



document.body.addEventListener('click', function(e) {
  //open rewiew
  if (e.target.closest('.reviews__more')) {
    const moreButton = e.target.closest('.reviews__more');
    const hiddenTxt = moreButton.parentNode;
    if (hiddenTxt.classList.contains('_active')) {
      moreButton.innerHTML = 'Далее >';
    } else {
      moreButton.innerHTML = 'Скрыть';
    }
    hiddenTxt.classList.toggle('_active');
  }
  // tabs
  if (e.target.closest('.benefit__tab')) {
    const activeTab = e.target.closest('.benefit__tab');
    const tabs = document.querySelectorAll('.benefit__tab');
    if (activeTab.classList.contains('_active')) {
      return;
    } else {
      for (tab of tabs) {
        tab.classList.remove('_active');

        if (e.target.closest('.benefit__tab-popular')) {
          const tabContents = document.querySelectorAll('.benefit__tab-content');
          for (tabContent of tabContents) {
            tabContent.classList.remove('_active');
            const pressedTabContent = document.querySelector('.benefit__popular');
            pressedTabContent.classList.add('_active');
          }
        }
        if (e.target.closest('.benefit__tab-mortgage')) {
          const tabContents = document.querySelectorAll('.benefit__tab-content');
          for (tabContent of tabContents) {
            tabContent.classList.remove('_active');
            const pressedTabContent = document.querySelector('.benefit__mortgage');
            pressedTabContent.classList.add('_active');
          }
        }
        if (e.target.closest('.benefit__tab-credit')) {
          const tabContents = document.querySelectorAll('.benefit__tab-content');
          for (tabContent of tabContents) {
            tabContent.classList.remove('_active');
            const pressedTabContent = document.querySelector('.benefit__credit');
            pressedTabContent.classList.add('_active');
          }
        }
        if (e.target.closest('.benefit__tab-contribution')) {
          const tabContents = document.querySelectorAll('.benefit__tab-content');
          for (tabContent of tabContents) {
            tabContent.classList.remove('_active');
            const pressedTabContent = document.querySelector('.benefit__contribution');
            pressedTabContent.classList.add('_active');
          }
        }
        if (e.target.closest('.benefit__tab-promo')) {
          const tabContents = document.querySelectorAll('.benefit__tab-content');
          for (tabContent of tabContents) {
            tabContent.classList.remove('_active');
            const pressedTabContent = document.querySelector('.benefit__promo');
            pressedTabContent.classList.add('_active');
          }
        }
      }
      activeTab.classList.add('_active');
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

  // menu burger
  if (e.target.closest('.header-top__menu-icon')) {
    const menuIcon = document.querySelector('.header-top__menu-icon');
    const menuBody = document.querySelector('.header__menu');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    document.body.classList.toggle('_lock')
  }
})

const forms = document.querySelectorAll('form');
for (form of forms) {
  form.addEventListener('change', function(e) {
    // calculator select
    if (e.target.closest('.calculator-forms__select-term')) {
      const calcSelestPlaceholder = document.querySelector('.calculator-forms__select-placeholder');
      calcSelestPlaceholder.classList.add('_active');
    }
    // calculator date
    if (e.target.closest('.calculator-forms__date')) {
      const calculatorDate = document.querySelector('.calculator-forms__date');
      calculatorDate.style.color = '#070707';
    }
  })
}