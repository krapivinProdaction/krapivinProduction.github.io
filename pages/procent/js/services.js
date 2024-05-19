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
  if (e.target.closest('.mortgage-variants__tab')) {
    if (e.target.closest('.mortgage-variants__tab').classList.contains('_active')) {
      return;
    } else {
      const tabs = document.querySelectorAll('.mortgage-variants__tab');
      const pressedTab = e.target.closest('.mortgage-variants__tab');
      const tabsContent = document.querySelectorAll('.mortgage-variants__tab-content');
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