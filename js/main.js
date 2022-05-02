const elHeader = document.querySelector('.site-header__list')
const elNavToggler = document.querySelector('.site-header__btn')

elNavToggler.addEventListener('click', function() {
  elHeader.classList.toggle('site-header__list--active')
})