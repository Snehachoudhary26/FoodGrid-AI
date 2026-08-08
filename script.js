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

/* ---------- 7) Chat Agent widget ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('chatAgentTrigger');
  const panel = document.getElementById('chatAgent');
  const overlay = document.getElementById('chatAgentOverlay');
  const closeBtn = document.getElementById('chatAgentClose');
  const body = document.getElementById('chatAgentBody');
  const form = document.getElementById('chatAgentForm');
  const input = document.getElementById('chatAgentInput');

  if (!trigger || !panel) return;

  const openPanel = () => { panel.classList.add('open'); overlay.classList.add('open'); };
  const closePanel = () => { panel.classList.remove('open'); overlay.classList.remove('open'); };

  trigger.addEventListener('click', openPanel);
  closeBtn.addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);

  // Canned responses. Swap this object for a real API call to add live AI
  // (e.g. fetch('/api/chat', {method:'POST', body: JSON.stringify({message})}))
  const RESPONSES = {
    donate: "Donating food is simple! Upload a photo of your surplus produce using our AI Vision Scan. Our system instantly identifies the items, predicts remaining shelf life, and schedules a cold-chain pickup. Click \u2018Donate Surplus Food\u2019 on the homepage to start!",
    track: "To track a dispatch, enter your 8-digit Order ID or check our Live Global Impact map. Our GPS system monitors location and cargo temperature in real time.",
    ngo: "Verified non-profits and food banks receive donated surplus food completely free. Fill out our registration form on the Partners page to start receiving automated local delivery alerts!",
    impact: "To date, the FoodGrid AI network has diverted over 1,250,000 kg of food from landfills, prevented 7,420 tons of CO\u2082 emissions, and delivered 3.8 million meals across 52 cities worldwide.",
    default: "I can help with food donation, delivery tracking, NGO registration, and impact metrics. Try one of the quick options above, or ask me something specific!"
  };

  const KEYWORDS = [
    [/donat|surplus|scan|pickup/i, 'donate'],
    [/track|deliver|order|gps|dispatch/i, 'track'],
    [/ngo|nonprofit|non-profit|register|food bank/i, 'ngo'],
    [/impact|metric|stat|co2|meals|kg/i, 'impact'],
  ];

  function addMessage(text, who) {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + who;
    div.innerHTML = `<p>${text}</p>`;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function respondTo(topicOrText) {
    let key = RESPONSES[topicOrText] ? topicOrText : null;
    if (!key) {
      for (const [pattern, topic] of KEYWORDS) {
        if (pattern.test(topicOrText)) { key = topic; break; }
      }
    }
    const reply = RESPONSES[key] || RESPONSES.default;
    setTimeout(() => addMessage(reply, 'bot'), 350);
  }

  body.querySelectorAll('.chat-quick-replies button').forEach(btn => {
    btn.addEventListener('click', () => {
      addMessage(btn.textContent, 'user');
      respondTo(btn.dataset.topic);
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      addMessage(text, 'user');
      respondTo(text);
      input.value = '';
    });
  }
});
