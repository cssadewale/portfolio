/*
 * ═══════════════════════════════════════════════════════════════════════════
 *  CSSADEWALE PORTFOLIO — MAIN JAVASCRIPT v3.0
 *  Author  : Adewale Samson Adeagbo
 *  Site    : cssadewale.pages.dev
 *
 *  FEATURES IN THIS FILE
 *  ─────────────────────
 *  01. Mobile Navigation Toggle
 *  02. Active Nav Link Highlighter
 *  03. Scroll-to-Top Button
 *  04. Intersection Observer (scroll animations)
 *  05. Profile Photo Manager (upload + URL + GitHub path)
 *  06. Photo Modal (open / close / backdrop)
 *  07. CV Tab Switcher
 *  08. Project Filter Chips
 *  09. Progress Bar Animator
 *  10. Stat Counter Animator
 *  11. Smooth Scroll for anchor links
 *  12. Dark-mode meta colour persistence
 *  13. Form submission feedback
 *  14. Keyboard accessibility (Escape closes modals)
 * ═══════════════════════════════════════════════════════════════════════════
 */

'use strict';

/* ─────────────────────────────────────────────────────────────────
   01. MOBILE NAVIGATION TOGGLE
   Clicking the hamburger button shows/hides the mobile drawer.
   The burger icon animates into an × when open.
───────────────────────────────────────────────────────────────── */
function initMobileNav() {
  const burger = document.querySelector('.nav-burger');
  const drawer = document.getElementById('nav-mobile');
  if (!burger || !drawer) return;

  burger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close drawer when any mobile nav link is clicked
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ─────────────────────────────────────────────────────────────────
   02. ACTIVE NAV LINK HIGHLIGHTER
   Marks the correct nav link as active based on the current page URL.
───────────────────────────────────────────────────────────────── */
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('/').pop().split('#')[0] || 'index.html';
    if (linkPage === path) link.classList.add('active');
    else link.classList.remove('active');
  });
}

/* ─────────────────────────────────────────────────────────────────
   03. SCROLL-TO-TOP BUTTON
   A small button appears after scrolling 400px down.
   Clicking it smoothly scrolls back to the top.
───────────────────────────────────────────────────────────────── */
function initScrollTop() {
  // Create button dynamically
  const btn = document.createElement('button');
  btn.id = 'scroll-top-btn';
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'Back to top');
  btn.style.cssText = `
    position:fixed; bottom:2rem; right:1.5rem; z-index:800;
    width:40px; height:40px; border-radius:50%;
    background:linear-gradient(135deg,#f5b342,#e8960a);
    color:#070b14; font-size:1.1rem; font-weight:900;
    border:none; cursor:pointer; box-shadow:0 4px 16px rgba(245,179,66,.3);
    display:none; align-items:center; justify-content:center;
    transition:opacity .3s, transform .3s;
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─────────────────────────────────────────────────────────────────
   04. INTERSECTION OBSERVER — SCROLL ANIMATIONS
   Elements with class `.animate-on-scroll` fade in when
   they enter the viewport. Staggered delay supported via
   data-delay="200" attribute (milliseconds).
───────────────────────────────────────────────────────────────── */
function initScrollAnimations() {
  const targets = document.querySelectorAll('.animate-on-scroll');
  if (!targets.length || !('IntersectionObserver' in window)) {
    // Fallback: just make everything visible
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────────────
   05. PROFILE PHOTO MANAGER
   Handles loading and saving the profile photo.

   Priority order:
   1. A file named "profile.jpg" / "profile.png" inside /assets/images/
      (uploaded to the GitHub repo — recommended for production)
   2. A URL saved in localStorage (set via the photo modal)
   3. The emoji placeholder

   HOW TO USE GITHUB PHOTO UPLOAD:
   - Add your photo to the repo as: assets/images/profile.jpg
   - The site automatically detects and loads it.
   - No code change needed.
───────────────────────────────────────────────────────────────── */
const PHOTO_KEY = 'cssadewale_photo_v3';

function initPhotoManager() {
  // Attempt to load from the GitHub repo path first
  const repoPaths = [
    'assets/images/profile.jpg',
    'assets/images/profile.jpeg',
    'assets/images/profile.png',
    'assets/images/profile.webp'
  ];

  function applyPhotoToAllSlots(src) {
    document.querySelectorAll('[data-photo-slot]').forEach(slot => {
      // Each slot has a <img> and an optional <span> placeholder
      const img = slot.querySelector('img[data-photo-img]');
      const ph  = slot.querySelector('[data-photo-placeholder]');
      if (img) {
        img.src = src;
        img.style.display = 'block';
        img.onerror = () => {
          // If URL fails to load, revert to placeholder
          img.style.display = 'none';
          if (ph) ph.style.display = 'block';
        };
      }
      if (ph) ph.style.display = 'none';
    });
  }

  // Try each repo path silently
  function tryRepoPaths(paths, index = 0) {
    if (index >= paths.length) {
      // No repo photo found — try localStorage
      const saved = localStorage.getItem(PHOTO_KEY);
      if (saved) applyPhotoToAllSlots(saved);
      return;
    }
    const testImg = new Image();
    testImg.onload = () => {
      applyPhotoToAllSlots(paths[index]);
      localStorage.removeItem(PHOTO_KEY); // repo photo takes priority
    };
    testImg.onerror = () => tryRepoPaths(paths, index + 1);
    testImg.src = paths[index];
  }

  tryRepoPaths(repoPaths);
}

/* ─────────────────────────────────────────────────────────────────
   06. PHOTO MODAL
   Opens and closes the photo update modal.
   Handles URL input, Google Drive link conversion, and file upload.
───────────────────────────────────────────────────────────────── */
function openPhotoModal()  {
  const m = document.getElementById('photo-modal');
  if (m) { m.classList.add('open'); m.focus(); }
}
function closePhotoModal() {
  const m = document.getElementById('photo-modal');
  if (m) m.classList.remove('open');
}

function setPhotoFromUrl() {
  let url = (document.getElementById('photo-url-input') || {}).value || '';
  url = url.trim();
  if (!url) return;

  // Convert Google Drive share link → direct embed URL
  let finalUrl = url;
  const m1 = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m1) finalUrl = `https://drive.google.com/uc?export=view&id=${m1[1]}`;
  else if (m2) finalUrl = `https://drive.google.com/uc?export=view&id=${m2[1]}`;

  saveAndApplyPhoto(finalUrl);
}

function setPhotoFromFile(input) {
  if (!input.files || !input.files[0]) return;
  const reader = new FileReader();
  reader.onload = e => saveAndApplyPhoto(e.target.result);
  reader.readAsDataURL(input.files[0]);
}

function saveAndApplyPhoto(src) {
  localStorage.setItem(PHOTO_KEY, src);
  document.querySelectorAll('[data-photo-slot]').forEach(slot => {
    const img = slot.querySelector('img[data-photo-img]');
    const ph  = slot.querySelector('[data-photo-placeholder]');
    if (img) { img.src = src; img.style.display = 'block'; }
    if (ph)  { ph.style.display = 'none'; }
  });
  closePhotoModal();
}

function initPhotoModal() {
  const modal = document.getElementById('photo-modal');
  if (!modal) return;

  // Close on backdrop click
  modal.addEventListener('click', e => { if (e.target === modal) closePhotoModal(); });

  // Wire up buttons
  const applyBtn = document.getElementById('photo-url-apply');
  if (applyBtn) applyBtn.addEventListener('click', setPhotoFromUrl);

  const fileInput = document.getElementById('photo-file-input');
  if (fileInput) fileInput.addEventListener('change', () => setPhotoFromFile(fileInput));

  const fileTrigger = document.getElementById('photo-file-trigger');
  if (fileTrigger) fileTrigger.addEventListener('click', () => fileInput && fileInput.click());

  const editBtns = document.querySelectorAll('[data-open-photo-modal]');
  editBtns.forEach(btn => btn.addEventListener('click', openPhotoModal));

  const closeBtns = document.querySelectorAll('[data-close-photo-modal]');
  closeBtns.forEach(btn => btn.addEventListener('click', closePhotoModal));
}

/* ─────────────────────────────────────────────────────────────────
   07. CV TAB SWITCHER
   Switches between the Data Scientist CV and the Educator CV.
───────────────────────────────────────────────────────────────── */
function initCVTabs() {
  const buttons = document.querySelectorAll('[data-cv-tab]');
  if (!buttons.length) return;
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.cvTab;
      document.querySelectorAll('.cv-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('[data-cv-tab]').forEach(b => b.classList.remove('active'));
      const panel = document.getElementById('cv-' + target);
      if (panel) panel.classList.add('active');
      btn.classList.add('active');
    });
  });
}

/* ─────────────────────────────────────────────────────────────────
   08. PROJECT FILTER CHIPS
   Clicking a chip filters visible project cards by data-category.
   "All" chip shows everything.
───────────────────────────────────────────────────────────────── */
function initProjectFilters() {
  const chips = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  if (!chips.length || !cards.length) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ─────────────────────────────────────────────────────────────────
   09. PROGRESS BAR ANIMATOR
   Animates .progress-fill elements from 0 to their target width
   when they scroll into view. Width is set via data-width="88".
───────────────────────────────────────────────────────────────── */
function initProgressBars() {
  const bars = document.querySelectorAll('.progress-fill[data-width]');
  if (!bars.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => {
    bar.style.width = '0%'; // Start from zero
    observer.observe(bar);
  });
}

/* ─────────────────────────────────────────────────────────────────
   10. STAT COUNTER ANIMATOR
   Counts up numbers inside [data-count] elements when visible.
   e.g. <span data-count="34">0</span> → animates to 34
───────────────────────────────────────────────────────────────── */
function initStatCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const dur    = 1500;
      const start  = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / dur, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(eased * target);
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  counters.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────────────
   11. SMOOTH SCROLL FOR ANCHOR LINKS
   Ensures all internal # links scroll smoothly with nav offset.
───────────────────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navH = document.querySelector('.nav') ? 70 : 0;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────────────────────────────
   12. KEYBOARD ACCESSIBILITY
   Pressing Escape closes any open modal or mobile drawer.
───────────────────────────────────────────────────────────────── */
function initKeyboardA11y() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closePhotoModal();
      const drawer = document.getElementById('nav-mobile');
      const burger = document.querySelector('.nav-burger');
      if (drawer && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        if (burger) { burger.classList.remove('open'); }
        document.body.style.overflow = '';
      }
    }
  });
}

/* ─────────────────────────────────────────────────────────────────
   13. CONTACT FORM SUBMISSION FEEDBACK
   Shows inline success/error message without page reload.
   Works with Formspree (free tier).
───────────────────────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const msgEl = document.getElementById('form-message');
  if (!msgEl) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }

    try {
      const data = new FormData(form);
      const res  = await fetch(form.action, {
        method: 'POST', body: data, headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        msgEl.textContent = '✓ Message sent! I will respond within 24 hours.';
        msgEl.style.color = 'var(--live)';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      msgEl.textContent = '✗ Something went wrong. Please WhatsApp me directly.';
      msgEl.style.color = 'var(--rose)';
    } finally {
      if (btn) { btn.textContent = 'Send Message →'; btn.disabled = false; }
      msgEl.style.display = 'block';
      setTimeout(() => { msgEl.style.display = 'none'; }, 6000);
    }
  });
}

/* ─────────────────────────────────────────────────────────────────
   14. READING PROGRESS BAR
   A thin gold bar at the very top that fills as you scroll down.
───────────────────────────────────────────────────────────────── */
function initReadingProgress() {
  const bar = document.createElement('div');
  bar.id = 'reading-progress';
  bar.style.cssText = `
    position:fixed; top:0; left:0; height:3px; z-index:2000;
    background:linear-gradient(90deg,#f5b342,#fcd27a);
    width:0%; transition:width .1s linear; pointer-events:none;
  `;
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const doc   = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────────────────
   INITIALISE EVERYTHING ON DOM READY
───────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNav();
  initScrollTop();
  initScrollAnimations();
  initPhotoManager();
  initPhotoModal();
  initCVTabs();
  initProjectFilters();
  initProgressBars();
  initStatCounters();
  initSmoothScroll();
  initKeyboardA11y();
  initContactForm();
  initReadingProgress();
});
