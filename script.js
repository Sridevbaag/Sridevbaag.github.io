// ================================================================
//  SRIDEV BAG — PORTFOLIO  |  script.js
// ================================================================
'use strict';

// ── Preloader ────────────────────────────────────────────────────
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  setTimeout(() => pre.classList.add('hidden'), 600);
});

// ── EmailJS init ─────────────────────────────────────────────────
emailjs.init('_EFUuHM3aoLfX2hL1');

// ── Scroll Progress Bar ──────────────────────────────────────────
const scrollBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total    = document.documentElement.scrollHeight - window.innerHeight;
  scrollBar.style.width = `${(scrolled / total) * 100}%`;
}, { passive: true });

// ── Header — shrink on scroll ────────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Active nav link on scroll ────────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${target.id}`);
      });
    });
  },
  { threshold: 0.4 }
);
sections.forEach((s) => sectionObserver.observe(s));

// ── Mobile Menu ──────────────────────────────────────────────────
const menuBtn    = document.getElementById('menu-btn');
const mobileNav  = document.getElementById('mobile-nav');
const mobileClose= document.getElementById('mobile-close');
const mobLinks   = document.querySelectorAll('.mob-link');

function openMenu()  {
  mobileNav.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobLinks.forEach((l) => l.addEventListener('click', closeMenu));

// ── Theme Toggle ─────────────────────────────────────────────────
const themeBtn = document.getElementById('theme-toggle');
const body     = document.body;

// Restore saved preference
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  themeBtn.querySelector('i').className = 'fas fa-moon';
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  const isDark = !body.classList.contains('light');
  const icon   = themeBtn.querySelector('i');
  icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ── Typing Animation ─────────────────────────────────────────────
const words   = [
  'Chrome Extensions.',
  'Android Apps.',
  'Web Experiences.',
  'Full Stack Projects.',
  'AI-powered Tools.',
  'Things that matter.',
];
let wIndex = 0, cIndex = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  if (!typedEl) return;
  const word = words[wIndex];

  if (!deleting) {
    typedEl.textContent = word.slice(0, cIndex + 1);
    cIndex++;
    if (cIndex === word.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
    setTimeout(type, 75);
  } else {
    typedEl.textContent = word.slice(0, cIndex - 1);
    cIndex--;
    if (cIndex === 0) {
      deleting = false;
      wIndex   = (wIndex + 1) % words.length;
      setTimeout(type, 300);
      return;
    }
    setTimeout(type, 40);
  }
}
setTimeout(type, 800);

// ── Reveal on Scroll ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('visible');
        revealObserver.unobserve(target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ── Custom Cursor ─────────────────────────────────────────────────
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = `${mx}px`;
  cursor.style.top  = `${my}px`;
});

function animateFollower() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  cursorFollower.style.left = `${fx}px`;
  cursorFollower.style.top  = `${fy}px`;
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Scale cursor on interactive elements
document.querySelectorAll('a, button, .project-card, .contact-item').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursorFollower.style.transform = 'translate(-50%,-50%) scale(1.8)';
    cursorFollower.style.borderColor = 'rgba(240,165,0,0.7)';
  });
  el.addEventListener('mouseleave', () => {
    cursorFollower.style.transform = 'translate(-50%,-50%) scale(1)';
    cursorFollower.style.borderColor = 'rgba(240,165,0,0.4)';
  });
});

// ── Smooth anchor scroll (offset for fixed header) ───────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = header.offsetHeight + 16;
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth',
    });
  });
});

// ── Contact Form — EmailJS ───────────────────────────────────────
const form       = document.getElementById('contact-form');
const statusEl   = document.getElementById('form-status');
const submitBtn  = form?.querySelector('.form-submit');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btnText = submitBtn.querySelector('.btn-text');
  const origText = btnText.textContent;

  // Loading state
  btnText.textContent = 'Sending…';
  submitBtn.disabled  = true;
  statusEl.textContent = '';
  statusEl.className   = '';

  const params = {
    user_name:  document.getElementById('user_name').value.trim(),
    user_email: document.getElementById('user_email').value.trim(),
    message:    document.getElementById('message').value.trim(),
    time:       new Date().toLocaleString(),
  };

  try {
    await emailjs.send('service_pvz4gue', 'template_qw3qgg6', params);
    statusEl.textContent = '✅ Message sent! I\'ll reply within 24 hours.';
    statusEl.className   = 'success';
    form.reset();
  } catch (err) {
    console.error('EmailJS error:', err);
    statusEl.textContent = '❌ Something went wrong. Try emailing directly.';
    statusEl.className   = 'error';
  } finally {
    btnText.textContent = origText;
    submitBtn.disabled  = false;
    setTimeout(() => {
      statusEl.textContent = '';
      statusEl.className   = '';
    }, 6000);
  }
});

// ── Stats counter animation ──────────────────────────────────────
function animateCounter(el, target, duration = 1200) {
  const isSymbol = isNaN(parseInt(target));
  if (isSymbol) return;

  const end   = parseInt(target);
  const step  = end / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= end) {
      el.textContent = target; // Keep original (e.g. "3+" or "6")
      clearInterval(timer);
      return;
    }
    el.textContent = Math.floor(current);
  }, 16);
}

// Trigger counters when About section enters view
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      target.querySelectorAll('.stat-num').forEach((el) => {
        animateCounter(el, el.textContent);
      });
      statsObserver.unobserve(target);
    });
  },
  { threshold: 0.4 }
);

const aboutSection = document.getElementById('about');
if (aboutSection) statsObserver.observe(aboutSection);
