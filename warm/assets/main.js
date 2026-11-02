(() => {
  // gold sunburst rays
  const g = document.getElementById('rays');
  if (g) { let s = ''; for (let i = 0; i < 40; i++) { const long = i % 2 === 0; s += `<line x1="0" y1="-38" x2="0" y2="${long ? -96 : -74}" stroke-width="${long ? 2.6 : 1.6}" transform="rotate(${i * 9})"/>`; } g.innerHTML = s; }
  // optional heading font swap: ?font=elegant
  if (new URLSearchParams(location.search).get('font') === 'elegant') document.documentElement.classList.add('font-elegant');
  const els = document.querySelectorAll('.reveal');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) els.forEach(e => e.classList.add('in'));
  else {
    const io = new IntersectionObserver(en => en.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .08, rootMargin: '0px 0px -24px 0px' });
    els.forEach(e => io.observe(e));
  }
  const h = document.querySelector('.header');
  const on = () => h.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', on, { passive: true }); on();
})();
