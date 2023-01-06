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


 function validate () {
  var email = document.getElementById('text').ariaValueMax;

  var regx = /^([a-zA-z0-9\._]+)@([a-z]+)(.[a-z]+)?$/

  if(regx.text(email)) {
    alert('You have provided a valid Email ID')
    return true;
  }

  else {
    alert('sorry your email is invalid')
    return false;
  }
 }