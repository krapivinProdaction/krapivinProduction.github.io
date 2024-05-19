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

  //tabs 
  if (e.target.closest('.portfolio-tabs__kitchen')) {
    const pressedTab = e.target.closest('.portfolio-tabs__kitchen');
    if (pressedTab.classList.contains('_active')) {
      return;
    } else {
      const tabs = document.querySelectorAll('.portfolio-tabs__button');
      const tabsContent = document.querySelectorAll('.portfolio-tabs-content__content');
      const pressedTabContent = document.querySelector('.portfolio-tabs-content__kitchen');
      for (tab of tabs) {
        tab.classList.remove('_active');
      }
      for (tabContent of tabsContent) {
        tabContent.classList.remove('_active');
      }
      pressedTab.classList.add('_active');
      pressedTabContent.classList.add('_active');
    }
  }
  if (e.target.closest('.portfolio-tabs__wardrobe')) {
    const pressedTab = e.target.closest('.portfolio-tabs__wardrobe');
    if (pressedTab.classList.contains('_active')) {
      return;
    } else {
      const tabs = document.querySelectorAll('.portfolio-tabs__button');
      const tabsContent = document.querySelectorAll('.portfolio-tabs-content__content');
      const pressedTabContent = document.querySelector('.portfolio-tabs-content__wardrobe');
      for (tab of tabs) {
        tab.classList.remove('_active');
      }
      for (tabContent of tabsContent) {
        tabContent.classList.remove('_active');
      }
      pressedTab.classList.add('_active');
      pressedTabContent.classList.add('_active');
    }
  }
  if (e.target.closest('.portfolio-tabs__cushioned')) {
    const pressedTab = e.target.closest('.portfolio-tabs__cushioned');
    if (pressedTab.classList.contains('_active')) {
      return;
    } else {
      const tabs = document.querySelectorAll('.portfolio-tabs__button');
      const tabsContent = document.querySelectorAll('.portfolio-tabs-content__content');
      const pressedTabContent = document.querySelector('.portfolio-tabs-content__cushioned');
      for (tab of tabs) {
        tab.classList.remove('_active');
      }
      for (tabContent of tabsContent) {
        tabContent.classList.remove('_active');
      }
      pressedTab.classList.add('_active');
      pressedTabContent.classList.add('_active');
    }
  }
  if (e.target.closest('.portfolio-tabs__bedroom')) {
    const pressedTab = e.target.closest('.portfolio-tabs__bedroom');
    if (pressedTab.classList.contains('_active')) {
      return;
    } else {
      const tabs = document.querySelectorAll('.portfolio-tabs__button');
      const tabsContent = document.querySelectorAll('.portfolio-tabs-content__content');
      const pressedTabContent = document.querySelector('.portfolio-tabs-content__bedroom');
      for (tab of tabs) {
        tab.classList.remove('_active');
      }
      for (tabContent of tabsContent) {
        tabContent.classList.remove('_active');
      }
      pressedTab.classList.add('_active');
      pressedTabContent.classList.add('_active');
    }
  }
  if (e.target.closest('.portfolio-tabs__kidroom')) {
    const pressedTab = e.target.closest('.portfolio-tabs__kidroom');
    if (pressedTab.classList.contains('_active')) {
      return;
    } else {
      const tabs = document.querySelectorAll('.portfolio-tabs__button');
      const tabsContent = document.querySelectorAll('.portfolio-tabs-content__content');
      const pressedTabContent = document.querySelector('.portfolio-tabs-content__kidroom');
      for (tab of tabs) {
        tab.classList.remove('_active');
      }
      for (tabContent of tabsContent) {
        tabContent.classList.remove('_active');
      }
      pressedTab.classList.add('_active');
      pressedTabContent.classList.add('_active');
    }
  }
  if (e.target.closest('.portfolio-tabs__business')) {
    const pressedTab = e.target.closest('.portfolio-tabs__business');
    if (pressedTab.classList.contains('_active')) {
      return;
    } else {
      const tabs = document.querySelectorAll('.portfolio-tabs__button');
      const tabsContent = document.querySelectorAll('.portfolio-tabs-content__content');
      const pressedTabContent = document.querySelector('.portfolio-tabs-content__business');
      for (tab of tabs) {
        tab.classList.remove('_active');
      }
      for (tabContent of tabsContent) {
        tabContent.classList.remove('_active');
      }
      pressedTab.classList.add('_active');
      pressedTabContent.classList.add('_active');
    }
  }
  if (e.target.closest('.portfolio-tabs__living')) {
    const pressedTab = e.target.closest('.portfolio-tabs__living');
    if (pressedTab.classList.contains('_active')) {
      return;
    } else {
      const tabs = document.querySelectorAll('.portfolio-tabs__button');
      const tabsContent = document.querySelectorAll('.portfolio-tabs-content__content');
      const pressedTabContent = document.querySelector('.portfolio-tabs-content__living');
      for (tab of tabs) {
        tab.classList.remove('_active');
      }
      for (tabContent of tabsContent) {
        tabContent.classList.remove('_active');
      }
      pressedTab.classList.add('_active');
      pressedTabContent.classList.add('_active');
    }
  }
})