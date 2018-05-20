console.log('You are at ' + window.location);

const Request = document.querySelector('.request');
const Popup = document.querySelector('.popup');
const ClosePopup = document.querySelector('.closePopup');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const Menu = document.querySelector('.menu');

Request.addEventListener('click',function(){
  Popup.style.display = 'flex';
})
ClosePopup.addEventListener('click',function(){
  Popup.style.display = 'none';
})
openMenu.addEventListener('click',function(){
	Menu.style.left = '0vw';
})
closeMenu.addEventListener('click',function(){
	Menu.style.left = '-50vw';
})

//console.log(closeMenu);
