// assets/js/header.js

document.addEventListener('DOMContentLoaded', () => {
  // ===== 1. DOM 元素擷取 =====
  const header      = document.querySelector('.site-header');
  const burgerBtn   = document.querySelector('.burger');
  const navMenu     = document.querySelector('.nav-menu');
  const navLinks    = document.querySelectorAll('.nav-menu > ul > li > a');

  // ===== 2. Event Handlers =====

  // 滾動時切換 .scrolled
  function handleScroll() {
    const isScrolled = window.scrollY > 100;
    header.classList.toggle('scrolled', isScrolled);
  }

  // 點擊漢堡鈕開關選單
  function handleBurgerClick() {
    navMenu.classList.toggle('active');
    burgerBtn.classList.toggle('open');
  }

  // ===== 3. 綁定事件 =====
  window.addEventListener('scroll', handleScroll);
  burgerBtn.addEventListener('click', handleBurgerClick);
  
});