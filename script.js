const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.nav-links a');

// Load the polish layer separately so GitHub Pages can refresh it cleanly.
const polish = document.createElement('link');
polish.rel = 'stylesheet';
polish.href = 'polish.css?v=2';
document.head.appendChild(polish);

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

menu?.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
});

links.forEach(link => link.addEventListener('click', () => nav.classList.remove('mobile-open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.program-card, .coach, .gallery > div, .location-list > div').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(el);
});
