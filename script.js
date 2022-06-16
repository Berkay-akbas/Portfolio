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

const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

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
  // if the form contains valid data, we let it submit

  if (!validateEmail(email.value)) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});
