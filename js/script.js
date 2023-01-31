const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

menu.addEventListener('click', () => {
  setTimeout(()=>  logo.classList.toggle('off'), 200);
  setTimeout(()=>  navbar.classList.toggle('active'), 200);
  setTimeout(()=>  menu.classList.toggle('fa-times'), 200);
});

navbar.addEventListener('click', () => {
  logo.classList.remove('off');
  navbar.classList.remove('active');
  menu.classList.remove('fa-times');
});

const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('.error');

function validateEmail() {
  const emailRegex = /^[a-z]+@[a-z-0-9-]+\.[a-z-0-9-.]+$/;
  if (!emailRegex.test(email.value)) {
    return false;
  }
  return true;
}

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (!validateEmail(email)) {
    emailError.textContent = 'Entered value needs to be an e-mail address and in lower case';
  }
}

email.addEventListener('input', () => {
  if (validateEmail(email)) {
    emailError.innerHTML = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', (event) => {
  if (!validateEmail(email.value)) {
    showError();
    event.preventDefault();
  }
});
