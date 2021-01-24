
// header
const header = document.querySelector('header');
window.addEventListener('scroll', ()=> {
      header.classList.toggle('sticky', window.scrollY > 0);
} );


// burger menu
const burger = document.getElementById('burger');
const navUl = document.getElementById('navUl');
burger.addEventListener('click', ()=> {
      
      burger.classList.toggle('toggle');
      navUl.classList.toggle('toggle');
});

navUl.addEventListener('click', ()=> {
      burger.classList.remove('toggle');
      navUl.classList.remove('toggle');
});












