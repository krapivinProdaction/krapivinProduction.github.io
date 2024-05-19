document.body.addEventListener('click', function(e) {
  // menu burger
  if (e.target.closest('.header-top__menu-icon')) {
    const menuIcon = document.querySelector('.header-top__menu-icon');
    const menuBody = document.querySelector('.header__menu');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  }
  // text more
  if (e.target.closest('.text__more-btn')) {
    const moreButton = document.querySelector('.text__more-btn');
    const hiddenTxt = document.querySelector('.text__hidden-content');
    hiddenTxt.classList.toggle('_active');
    moreButton.classList.toggle('_active');
    if (moreButton.classList.contains('_active')) {
      moreButton.innerHTML = 'Скрыть';
    } else {
      moreButton.innerHTML = 'ЧИТАТЬ далее';
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

const schoolSwiper1 = new Swiper('.school__swiper1', {
  navigation: {
    nextEl: '.cours__next1',
    prevEl: '.cours__prev1',
  },
  pagination: {
    el: '.cours__pagination1',
    type: 'bullets',
    clickable: true,
  },
})