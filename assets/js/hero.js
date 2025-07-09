// hero.js
document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.hero__content');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          content.classList.add('is-visible');
          observer.unobserve(content);
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(content);
});
