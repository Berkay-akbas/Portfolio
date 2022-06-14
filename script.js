const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

menu.addEventListener('click', () => {
  logo.classList.toggle('off');
  navbar.classList.toggle('active');
  menu.classList.toggle('fa-times');
});

navbar.addEventListener('click', () => {
  logo.classList.remove('off');
  navbar.classList.remove('active');
  menu.classList.remove('fa-times');
});