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

 const formContact = document.getElementById('form');

function validateEmail () {
 const email = document.getElementById('email').value;
 const error = document.getElementById('errorMessage');
 if(email.toLowerCase() !== email) {
  error.innerHTML = 'Please enter your email in lowercase';
  error.style.display = 'block';
  error.style.color = '#FFF';
  error.style.fontSize = 'larger';
   return false;
 }

 document.getElementById('errorMessage').innerHTML = '';
 return true;
}

formContact.addEventListener('submit', validateEmail);