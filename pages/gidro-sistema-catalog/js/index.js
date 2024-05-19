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
      }, 500);
    }
  }
  // tabs 
  if (event.target.closest('.tabs__code')) {
    const tabsParametrs = document.querySelector('.tabs__parametrs');
    const parametrsIcon = document.querySelector('.tabs__icon-parametrs');
    const tabsCode = document.querySelector('.tabs__code');
    const codeIcon = document.querySelector('.tabs__icon-code');
    const brandsFirstWindow = document.querySelector('.brands__first-window');
    const brandsSecondWindow = document.querySelector('.brands__second-window');
    tabsParametrs.classList.remove('_active');
    parametrsIcon.src = ('img/brands/parametrs-white.svg');
    tabsCode.classList.add('_active');
    codeIcon.src = ('img/brands/code-blue.svg');
    brandsFirstWindow.classList.remove('_active');
    brandsSecondWindow.classList.add('_active');
  } 
  if (event.target.closest('.tabs__parametrs')) {
    const tabsParametrs = document.querySelector('.tabs__parametrs');
    const parametrsIcon = document.querySelector('.tabs__icon-parametrs');
    const tabsCode = document.querySelector('.tabs__code');
    const codeIcon = document.querySelector('.tabs__icon-code');
    const brandsFirstWindow = document.querySelector('.brands__first-window');
    const brandsSecondWindow = document.querySelector('.brands__second-window');
    tabsParametrs.classList.add('_active');
    parametrsIcon.src = ('img/brands/parametrs-blue.svg');
    tabsCode.classList.remove('_active');
    codeIcon.src = ('img/brands/code-white.svg');
    brandsFirstWindow.classList.add('_active');
    brandsSecondWindow.classList.remove('_active');
  }
})

// search brand
const brandInput = document.querySelector('.brands__form');
brandInput.oninput = function () {
  let value = this.value.trim();
  value = value.toLowerCase();
  let brandsNames = document.querySelectorAll('.brands__name');
  if (value != ' ') {
    for (brandName of brandsNames) {
      if (brandName.innerText.toLowerCase().search(value) == -1) {
        const deletedItem = brandName.closest('.brands__item');
        deletedItem.classList.add('_hidden');
      } else {
        const deletedItem = brandName.closest('.brands__item');
        deletedItem.classList.remove('_hidden');
      }
    }
  } else {
    for (brandName of brandsNames) {
      const deletedItem = brandName.closest('.brands__item');
      deletedItem.classList.remove('_hidden');
    }
  }
} 