let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('menu__btn--active');
	menu.classList.toggle('nav--active');
})

menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
      menuBtn.classList.toggle('menu__btn--active');
      menu.classList.toggle('nav--active');
  })
})
