

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

// const form  = document.getElementsByTagName('form')[0];
// const email = document.getElementById('mail');
// const emailError = document.querySelector('#mail + span.error');




// email.addEventListener('input', function (event) {
//   function validateEmail() {
//     var emailRegex = /^[a-z]+@[a-z-0-9-]+\.[a-z-0-9-.]+$/;
//     if (!emailRegex.test('input')) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   if (validateEmail('input')) {
//     emailError.textContent = '';
//     emailError.className = 'error'
//   } else {
//     showError();
//   }
// });

// form.addEventListener('submit', function (event) {
//   // if the email field is valid, we let the form submit

//   if(!email.validity.valid) {
//     // If it isn't, we display an appropriate error message
//     showError();
//     // Then we prevent the form from being sent by canceling the event
//     event.preventDefault();
//   }
// });

// function showError() {
//   if(emailtext == '') {
//     // If the field is empty,
//     // display the following error message.
//     emailError.textContent = 'You need to enter an e-mail address.';
//   } else if(email.validity.typeMismatch) {
//     // If the field doesn't contain an email address,
//     // display the following error message.
//     emailError.textContent = 'Entered value needs to be an e-mail address.';
//   } else if(email.validity.tooShort) {
//     // If the data is too short,
//     // display the following error message.
//     emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
//   }

//   // Set the styling appropriately
//   emailError.className = 'error active';
// }

const form = document.querySelector('#form');
const nameValue = document.querySelector('#name');
const email = document.querySelector('#email');
const messageValue = document.querySelector('#message');

const setError = (element, message) => {
  const inputBox = element.parentElement;
  const errorShow = inputBox.querySelector('.error');
  errorShow.innerText = message;
  inputBox.classList.add('error');
  inputBox.classList.remove('success');
};

const setSuccess = (element) => {
  const inputBox = element.parentElement;
  const errorShow = inputBox.querySelector('.error');
  errorShow.innerText = '';
  inputBox.classList.add('success');
  inputBox.classList.remove('error');
};

const isMailValid = (email) => {
  const regX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  return regX.test(String(email).toLowerCase());
};

const validateForm = () => {
  const nameValues = nameValue.value.trim();
  const emailValue = email.value.trim();
  const messageValues = messageValue.value.trim();

  if (nameValues === '') {
    setError(nameValue, 'name is required');
  } else {
    setSuccess(nameValue);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isMailValid(emailValue)) {
    setError(email, 'provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (messageValues === '') {
    setError(messageValue, 'description is required');
  } else {
    setSuccess(messageValue);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

