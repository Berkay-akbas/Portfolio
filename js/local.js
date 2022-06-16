const addUserData = (e) => {
  let userData = {
    userName: document.getElementById('name').value,
    userMail: document.getElementById('mail').value,
    userText: document.getElementById('msg').value,
  }
  localStorage.setItem('userData', JSON.stringify(userData));
};

document.getElementById('submitform').addEventListener('click', addUserData);

window.onload = function() {
  document.getElementById('name').value = JSON.parse(window.localStorage.getItem('userData')).userName;
  document.getElementById('mail').value = JSON.parse(window.localStorage.getItem('userData')).userMail;
  document.getElementById('msg').value = JSON.parse(window.localStorage.getItem('userData')).userText;asd
}
