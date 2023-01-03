let ambuger = document.querySelector(".hamburger-menu");
let navMenu = document.querySelector(".nav-menu");

ambuger.addEventListener("click",  () => {
  ambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
  ambuger.classList.remove("active");
  navMenu.classList.remove("active")
}))