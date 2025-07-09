const header = document.querySelector('.site-header');
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

// Scroll → 加/移除 .scrolled
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 100);
});

// Burger Menu Toggle
burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  burger.classList.toggle('open');
});
