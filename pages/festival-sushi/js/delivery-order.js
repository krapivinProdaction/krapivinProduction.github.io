//cutlery counter variables
let count = 1;

document.body.addEventListener('click', function(e) {
  // menu burger
  if (e.target.closest('.header-top__menu-icon')) {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.header-top__menu-icon');
    menuIcon.classList.toggle('_active');
    menu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  }
  // tabs
  if (e.target.closest('.order__delivery-tab')) {
    const pickupTab = document.querySelector('.order__pickup-tab');
    const deliveryTab = document.querySelector('.order__delivery-tab');
    const firstAdressForm = document.querySelector('.data-forms__container');
    const secondAdressForm = document.querySelector('.data-forms__small-wrapper');
    const selectAdress = document.querySelector('.order-details__adress-title');
    const pickupTabText = document.querySelector('.order__tab-name-pickup');
    const deliveryTabText = document.querySelector('.order__tab-name-delivery');
    pickupTabText.classList.remove('_active');
    pickupTab.classList.remove('_active');
    firstAdressForm.classList.remove('_hidden');
    secondAdressForm.classList.remove('_hidden');
    selectAdress.innerHTML = 'Мои адреса доставки';
    deliveryTab.classList.add('_active');
    deliveryTabText.classList.add('_active');
  }
  if (e.target.closest('.order__pickup-tab')) {
    const pickupTab = document.querySelector('.order__pickup-tab');
    const deliveryTab = document.querySelector('.order__delivery-tab');
    const firstAdressForm = document.querySelector('.data-forms__container');
    const secondAdressForm = document.querySelector('.data-forms__small-wrapper');
    const selectAdress = document.querySelector('.order-details__adress-title');
    const deliveryTabText = document.querySelector('.order__tab-name-delivery');
    const pickupTabText = document.querySelector('.order__tab-name-pickup');
    deliveryTabText.classList.remove('_active');
    deliveryTab.classList.remove('_active');
    firstAdressForm.classList.add('_hidden');
    secondAdressForm.classList.add('_hidden');
    pickupTabText.classList.add('_active');
    selectAdress.innerHTML = 'Выберите пункт самовывоза';
    pickupTab.classList.add('_active');
  }

  //cutlery counter
  if (e.target.closest('.cutlery__counter-minus')) {
    --count;
    if (count < 1) {
      count = 1;
    }
    const result = document.querySelector('.cutlery__counter-result');
    result.innerHTML = count;
  }
  if (e.target.closest('.cutlery__counter-plus')) {
    ++count;
    const result = document.querySelector('.cutlery__counter-result');
    result.innerHTML = count;
  }

  // time and date
  if (e.target.closest('.order-time__option-faster')) {
    const dateAndTime = document.querySelector('.order-time__time-wrapper');
    dateAndTime.classList.add('_hidden');
  }
  if (e.target.closest('.order-time__option-time')) {
    const dateAndTime = document.querySelector('.order-time__time-wrapper');
    dateAndTime.classList.remove('_hidden');
  }
})