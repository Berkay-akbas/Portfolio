const addUserData = () => {
  const userData = {
    userName: document.getElementById('name').value,
    userMail: document.getElementById('mail').value,
    userText: document.getElementById('msg').value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
};
const userDatas = JSON.parse(window.localStorage.getItem('userData'));
window.onload = function parseData() {
  if (localStorage.getItem('userData') === null) { return; }
  for (let i = 0; i < Object.values(userDatas).length; i += 1) {
    document.querySelectorAll('.input-box')[i].value = Object.values(userDatas)[i];
  }
};
document.getElementById('submitform').addEventListener('click', addUserData);
