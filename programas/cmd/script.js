const loginForm = document.getElementById('login-form');
const username_box = document.getElementById('username_box');
const password_box = document.getElementById('password_box');

username_box.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            password_box.classList.remove('hide')
            username_box.classList.add('hide');

        }
    });
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '192.168.69.431' && password === '8361') {
    window.location.href = 'sus.html';
  } else {
    alert('Usuário ou senha incorretos. Tente novamente.');
  }
});
