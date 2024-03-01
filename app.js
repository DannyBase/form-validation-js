// Form Blur Event Listeners
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('con-password').addEventListener('input', validatePassword2);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z ]{3,50}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}


function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePassword() {
  const password = document.getElementById('password')
  if (password.value.length < 6) {
    password.classList.add('is-invalid');
  }else{
    password.classList.remove('is-invalid');
  }
}


function validatePassword2() {
  const password = document.getElementById('password')
  const password2 = document.getElementById('con-password')
  if (password.value !== password2.value) {
    password2.classList.add('is-invalid');
  }else{
    password2.classList.remove('is-invalid');
  }
}