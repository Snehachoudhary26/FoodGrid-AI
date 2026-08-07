// FoodGrid AI — site interactions
// 1) Splash intro timing
// 2) Scroll-reveal animations for sections/cards
// 3) Nav bar shadow on scroll
// 4) Animated counting numbers in the stats bar

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1) Splash intro ---------- */
  // Currently set to play on EVERY visit/refresh, per your request.
  const splash = document.getElementById('splash');
  // Total splash runtime: 3.2s spin + 1.1s burst = 4.3s, then a 0.7s fade
  // (delay baked into the #splash.hide animation in style.css), ending ~4.6s.
  const SPLASH_TOTAL = 4600;

  splash.classList.add('hide'); // CSS animation-delay handles the timing
  setTimeout(() => { splash.style.display = 'none'; }, SPLASH_TOTAL);

  /* ---- Optional: play splash only once per browser session ----
  if (sessionStorage.getItem('fg_splash_shown')) {
    splash.style.display = 'none';
    document.getElementById('home').style.opacity = 1;
    document.getElementById('home').style.transform = 'none';
  } else {
    sessionStorage.setItem('fg_splash_shown', 'true');
  }
  ------------------------------------------------------------- */


  /* ---------- 2) Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));


  /* ---------- 3) Nav shadow on scroll ---------- */
  const header = document.querySelector('header');
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();


  /* ---------- 4) Animated counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimal || '0', 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = (decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-US')) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(el => counterObserver.observe(el));


  /* ---------- 5) Progress bar fill (Freshness Prediction card) ---------- */
  const bars = document.querySelectorAll('.progress-fill');
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('filled');
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(el => barObserver.observe(el));

});

/* ---------- 6) Mobile menu toggle ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }
});
