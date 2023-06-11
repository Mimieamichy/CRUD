const wrapper = document.querySelector('.wrapper');
const btnPopUp = document.getElementById('#btn-popUp');
const iconClose = document.querySelector('.i');

btnPopUp.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
})