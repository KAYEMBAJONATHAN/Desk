const hamburger = document.querySelector('.hamburger');
const navnavMenu = document.querySelector('.navnav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navnavMenu.classList.toggle('active')
})

document.querySelectorAll('navnav-link').forEach(n => 
 n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  hamburger.classList.remove('active')
 }))


const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error')

 function validateForm() {

  clearMesaages();
  let errorFlages = false;

 if(nameInput.value.length < 1) {
  errorNodes[0].innerText = 'Name cannot be  blank';
  nameInput.classList.add('error-border')
  errorFlages = true;
  }

  if(!emailIsValid(email.value)) {
    errorNodes[1].innerText = 'Invalid email'
    email.classList.add('error-border');
    errorFlages = true;
  }

  

  if(!errorFlages) {
    success.innerText = 'success!'
  }
}

function clearMesaages () {
  for(let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = '';
  }
  success.innerText = '';
  nameInput.classList.remove('error-border');
  email.classList.remove('error-border');
  message.classList.remove('error-border');
}

function emailIsValid(email) {
  let pattern = '/\s+@\s+\.\s+/';
  return pattern.test(email);
}

