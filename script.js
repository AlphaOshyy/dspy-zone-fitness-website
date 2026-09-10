const nav=document.querySelector('.nav');
const menu=document.querySelector('.menu');
const links=document.querySelectorAll('.nav-links a');

document.documentElement.classList.add('js');

window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',window.scrollY>30));
menu?.addEventListener('click',()=>nav?.classList.toggle('mobile-open'));
links.forEach(link=>link.addEventListener('click',()=>nav?.classList.remove('mobile-open')));

const navMap={Programs:'programs.html',Team:'trainers.html',Travel:'travel.html',Locations:'contact.html'};
links.forEach(link=>{const label=link.textContent.trim();if(navMap[label])link.href=navMap[label]});

if(!document.querySelector('.nav-links a[href="membership.html"]') && document.querySelector('.nav-links')){
  const a=document.createElement('a');a.href='membership.html';a.textContent='Membership';a.setAttribute('aria-label','Membership');document.querySelector('.nav-links').insertBefore(a,document.querySelector('.nav-links').lastElementChild);a.addEventListener('click',()=>nav?.classList.remove('mobile-open'));
}

const revealItems=document.querySelectorAll('.hero-content .reveal,.hero-bottom .reveal,.program-card,.coach,.gallery>div,.location-list>div');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});
  revealItems.forEach((el,i)=>{el.style.setProperty('--delay',`${Math.min(i*60,360)}ms`);observer.observe(el)});
}else revealItems.forEach(el=>el.classList.add('is-visible'));
