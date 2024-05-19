// menu
const menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
  const  menuBody = document.querySelector('.menu__body');
  menuIcon.addEventListener("click", function (e) {
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  })
}
// courses buttons
const coursesButtonsLists = document.querySelector('.courses-img__buttons');
if (coursesButtonsLists) {
  const coursesButtons = document.querySelectorAll('.courses-img__button');
  for (let button of coursesButtons) {
    button.addEventListener('click', function (event) {
      // heart buttons
      if (event.target.closest('.heart1')) {
        const activateCoursButton = document.querySelector('.heart1');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.heart2')) {
        const activateCoursButton = document.querySelector('.heart2');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.heart3')) {
        const activateCoursButton = document.querySelector('.heart3');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.heart4')) {
        const activateCoursButton = document.querySelector('.heart4');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.heart5')) {
        const activateCoursButton = document.querySelector('.heart5');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.heart6')) {
        const activateCoursButton = document.querySelector('.heart6');
        activateCoursButton.classList.toggle('_active')
      }
      // shopping cart buttons
      if (event.target.closest('.buscket1')) {
        const activateCoursButton = document.querySelector('.buscket1');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.buscket2')) {
        const activateCoursButton = document.querySelector('.buscket2');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.buscket3')) {
        const activateCoursButton = document.querySelector('.buscket3');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.buscket4')) {
        const activateCoursButton = document.querySelector('.buscket4');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.buscket5')) {
        const activateCoursButton = document.querySelector('.buscket5');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.buscket6')) {
        const activateCoursButton = document.querySelector('.buscket6');
        activateCoursButton.classList.toggle('_active')
      }
      // eyes buttons
      if (event.target.closest('.eye1')) {
        const activateCoursButton = document.querySelector('.eye1');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.eye2')) {
        const activateCoursButton = document.querySelector('.eye2');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.eye3')) {
        const activateCoursButton = document.querySelector('.eye3');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.eye4')) {
        const activateCoursButton = document.querySelector('.eye4');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.eye5')) {
        const activateCoursButton = document.querySelector('.eye5');
        activateCoursButton.classList.toggle('_active')
      }
      if (event.target.closest('.eye6')) {
        const activateCoursButton = document.querySelector('.eye6');
        activateCoursButton.classList.toggle('_active')
      }
    })
  }
}