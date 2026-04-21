/**
 * portfolio-loader.js
 * Adewale Samson Adeagbo Portfolio — Live Data Bridge
 *
 * HOW IT WORKS:
 * 1. Every HTML page loads this script
 * 2. This script fetches portfolio-data.json from the same folder
 * 3. It reads the data and injects it into the correct DOM elements
 * 4. When admin pushes an update to GitHub, portfolio-data.json changes
 * 5. On next page load, the new data appears — automatically, instantly
 *
 * NO server needed. NO backend. Works perfectly on GitHub Pages + Cloudflare Pages.
 * The admin panel writes portfolio-data.json to GitHub. This script reads it.
 */

(async function PortfolioLoader() {
  'use strict';

  // ── Fetch the data file ──
  let DATA = null;
  try {
    const res = await fetch('./portfolio-data.json?v=' + Date.now());
    if (!res.ok) return; // If file doesn't exist yet, silently exit
    DATA = await res.json();
  } catch (e) {
    return; // Network error — page already has static fallback content
  }

  if (!DATA) return;

  // ── Helper: safely set text content ──
  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el && value !== undefined && value !== null) el.textContent = value;
  }

  function setHTML(selector, value) {
    const el = document.querySelector(selector);
    if (el && value !== undefined && value !== null) el.innerHTML = value;
  }

  function setAttr(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el && value) el.setAttribute(attr, value);
  }

  function setAll(selector, value) {
    document.querySelectorAll(selector).forEach(el => { if (value) el.textContent = value; });
  }

  // ── Detect which page we are on ──
  const path = window.location.pathname;
  const isHome = path === '/' || path.endsWith('index.html') || path === '';
  const isAbout = path.endsWith('about.html');
  const isProjects = path.endsWith('projects.html');
  const isJourney = path.endsWith('journey.html');
  const isCV = path.endsWith('cv.html');

  // ════════════════════════════════════════════════════════
  //  GLOBAL — runs on EVERY page
  // ════════════════════════════════════════════════════════

  // SEO meta tags
  if (DATA.seo) {
    document.title = DATA.seo.title || document.title;
    setAttr('meta[name="description"]', 'content', DATA.seo.desc);
    setAttr('meta[name="keywords"]', 'content', DATA.seo.keywords);
    setAttr('meta[property="og:title"]', 'content', DATA.seo.ogTitle);
    setAttr('meta[property="og:description"]', 'content', DATA.seo.ogDesc);
    if (DATA.seo.ogImage) setAttr('meta[property="og:image"]', 'content', DATA.seo.ogImage);
  }

  // Nav CTA button
  if (DATA.nav && DATA.nav.ctaLink) {
    const navCta = document.querySelector('.nav-cta');
    if (navCta) {
      navCta.href = DATA.nav.ctaLink;
      if (DATA.nav.ctaText) navCta.innerHTML = `<i class="fas fa-download"></i> ${DATA.nav.ctaText}`;
    }
  }

  // Social links (nav & footer)
  if (DATA.social) {
    const socials = {
      linkedin: DATA.social.linkedin,
      github: DATA.social.github,
      youtube: DATA.social.youtube,
      twitter: DATA.social.twitter,
      instagram: DATA.social.instagram
    };
    document.querySelectorAll('a[href*="linkedin.com/in/"]').forEach(el => { if (socials.linkedin) el.href = socials.linkedin; });
    document.querySelectorAll('a[href*="github.com/css"]').forEach(el => { if (socials.github) el.href = socials.github; });
    document.querySelectorAll('a[href*="youtube.com/@"]').forEach(el => { if (socials.youtube) el.href = socials.youtube; });
    document.querySelectorAll('a[href*="x.com/css"]').forEach(el => { if (socials.twitter) el.href = socials.twitter; });
    document.querySelectorAll('a[href*="instagram.com/css"]').forEach(el => { if (socials.instagram) el.href = socials.instagram; });
    document.querySelectorAll('a[href*="wa.me/"]').forEach(el => { if (DATA.social.whatsapp) el.href = DATA.social.whatsapp; });
  }

  // Footer
  if (DATA.footer) {
    setText('.footer-slogan', DATA.footer.slogan);
    setText('.footer-tagline', DATA.footer.tagline);
    setText('.footer-copy', DATA.footer.copyright);
  }

  // Contact info in footer
  if (DATA.contact && DATA.contact.email) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(el => { el.href = 'mailto:' + DATA.contact.email; });
  }

  // ════════════════════════════════════════════════════════
  //  HOMEPAGE (index.html)
  // ════════════════════════════════════════════════════════

  if (isHome) {

    // Hero
    if (DATA.hero) {
      setText('.hero-name', null); // Don't replace — name stays static (has styled spans)
      const statement = document.querySelector('.hero-statement');
      if (statement && DATA.hero.statement) statement.textContent = DATA.hero.statement;

      const eyebrow = document.querySelector('.hero-eyebrow');
      if (eyebrow && DATA.hero.badge) eyebrow.textContent = DATA.hero.badge;

      const badge = document.querySelector('.hero-badge');
      if (badge && DATA.hero.liveBadge) badge.innerHTML = `<span class="dot"></span> ${DATA.hero.liveBadge}`;

      // Typewriter words
      if (DATA.hero.typewriter && window._typewriterWords) {
        window._typewriterWords = DATA.hero.typewriter;
      }
    }

    // Hero photo — from photoSlots if set
    const heroPhotos = JSON.parse(localStorage.getItem('photo_slots') || '{}');
    if (heroPhotos.hero) {
      const ring = document.querySelector('.hero-photo-ring');
      if (ring) {
        const img = document.createElement('img');
        img.src = heroPhotos.hero;
        img.alt = 'Adewale Samson Adeagbo';
        img.className = 'hero-photo';
        img.loading = 'eager';
        const placeholder = ring.querySelector('.hero-photo-placeholder');
        if (placeholder) placeholder.replaceWith(img);
      }
    }

    // About section
    if (DATA.about) {
      const paras = document.querySelectorAll('.about-story p');
      const texts = [DATA.about.p1, DATA.about.p2, DATA.about.p3, DATA.about.p4].filter(Boolean);
      paras.forEach((p, i) => { if (texts[i]) p.innerHTML = texts[i]; });
      const quote = document.querySelector('.pullquote p');
      if (quote && DATA.about.quote) quote.textContent = DATA.about.quote;
    }

    // About photo
    if (heroPhotos.about) {
      const frame = document.querySelector('.about-frame .about-photo');
      if (frame) {
        const img = document.createElement('img');
        img.src = heroPhotos.about;
        img.alt = 'Adewale Adeagbo';
        img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:var(--radius-lg)';
        frame.innerHTML = '';
        frame.appendChild(img);
      }
    }

    // Stats strip
    if (DATA.about && DATA.about.stats) {
      const statItems = document.querySelectorAll('.stats-strip .stat-item');
      DATA.about.stats.forEach((s, i) => {
        if (statItems[i]) {
          const numEl = statItems[i].querySelector('.stat-number');
          const lblEl = statItems[i].querySelector('.stat-label');
          if (numEl && s.n) numEl.textContent = s.n;
          if (lblEl && s.l) lblEl.textContent = s.l;
        }
      });
    }

    // Skills
    if (DATA.skills) {
      const skillsGrid = document.querySelector('.skills-grid');
      if (skillsGrid) {
        // Only rebuild if data differs from static — check group count
        const existingGroups = skillsGrid.querySelectorAll('.skill-group');
        if (DATA.skills.length !== existingGroups.length) {
          // Rebuild skills grid
          const full = DATA.skills[DATA.skills.length - 1]; // last group = full width
          skillsGrid.innerHTML = DATA.skills.map((s, i) => `
            <div class="skill-group fade-up${i > 0 ? ' fade-up-delay-' + Math.min(i, 3) : ''}"${i === DATA.skills.length - 1 ? ' style="grid-column:1/-1"' : ''}>
              <div class="skill-group-title"><i class="${s.icon}"></i> ${s.group}</div>
              ${s.subtitle ? `<p class="skill-group-subtitle">${s.subtitle}</p>` : ''}
              <div class="skill-badges">
                ${s.items.map(b => `<span class="badge${s.group.toLowerCase().includes('active') || s.group.toLowerCase().includes('learning') ? ' active-now' : ''}">${b}</span>`).join('')}
              </div>
            </div>`).join('');
        }
      }
    }

    // Projects grid — inject from data
    if (DATA.projects) {
      injectProjectsGrid(DATA.projects);
    }

    // Certifications
    if (DATA.certifications) {
      const certsGrid = document.querySelector('.certs-grid');
      if (certsGrid) {
        certsGrid.innerHTML = DATA.certifications.map((c, i) => `
          <div class="cert-card fade-up${i % 3 > 0 ? ' fade-up-delay-' + i % 3 : ''}${c.status === 'active' ? ' active-now' : ''}">
            <div class="cert-icon"><i class="${getCertIcon(c.issuer)}"></i></div>
            <div class="cert-issuer">${c.issuer}</div>
            <div class="cert-name">${c.name}</div>
            ${c.status === 'active' ? '<div class="cert-now-badge">&#127802; Currently Active</div>' : `<div class="cert-year">${c.year}</div>`}
          </div>`).join('');
      }
    }

    // Testimonials
    if (DATA.testimonials) {
      const testiGrid = document.querySelector('.testimonials-grid');
      if (testiGrid && DATA.testimonials.length > 0) {
        testiGrid.innerHTML = DATA.testimonials.map((t, i) => `
          <div class="testi-card fade-up${i > 0 ? ' fade-up-delay-' + i : ''}">
            <div class="testi-quote-icon"><i class="fas fa-quote-left"></i></div>
            <p class="testi-text">"${t.text}"</p>
            <div class="testi-author">
              <div class="testi-avatar">${t.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}</div>
              <div><div class="testi-name">${t.name}</div><div class="testi-role">${t.role}</div></div>
            </div>
          </div>`).join('');
      }
    }

    // YouTube
    if (DATA.youtube) {
      const ytName = document.querySelector('.yt-name');
      const ytHandle = document.querySelector('.yt-handle');
      const ytDesc = document.querySelector('.yt-desc');
      if (ytName && DATA.youtube.name) ytName.textContent = DATA.youtube.name;
      if (ytHandle && DATA.youtube.handle) ytHandle.textContent = DATA.youtube.handle;
      if (ytDesc && DATA.youtube.desc) ytDesc.textContent = DATA.youtube.desc;
      if (DATA.youtube.url) {
        document.querySelectorAll('a[href*="youtube.com/@"]').forEach(el => el.href = DATA.youtube.url);
      }
      // Inject video cards
      if (DATA.youtube.videos) {
        const ytGrid = document.querySelector('.yt-video-grid');
        if (ytGrid) {
          ytGrid.innerHTML = DATA.youtube.videos.map(v => `
            <div class="yt-card">
              <a href="${DATA.youtube.url}" target="_blank">
                <div class="yt-thumb"><div class="yt-play"><i class="fas fa-play"></i></div></div>
              </a>
              <div class="yt-card-body">
                <div class="yt-card-title">${v.title}</div>
                <div class="yt-card-meta">${v.meta}</div>
              </div>
            </div>`).join('');
        }
      }
    }

    // Contact section
    if (DATA.contact) {
      const lookingEl = document.querySelector('.contact-intro');
      if (lookingEl && DATA.contact.looking) {
        lookingEl.innerHTML = `I am actively seeking <strong>data science, ML, or data analyst roles.</strong> ${DATA.contact.looking}`;
      }
      // Contact card values
      const waCard = document.querySelector('.contact-card-icon.wa + div .contact-card-value');
      if (waCard && DATA.contact.wa) waCard.textContent = '+' + DATA.contact.wa;
      const emailCard = document.querySelector('.contact-card-icon.email + div .contact-card-value');
      if (emailCard && DATA.contact.email) emailCard.textContent = DATA.contact.email;
    }

    // Visibility toggles — hide/show sections
    if (DATA.visibility) {
      Object.entries(DATA.visibility).forEach(([section, show]) => {
        const el = document.getElementById(section) || document.querySelector(`section#${section}`);
        if (el) el.style.display = show ? '' : 'none';
      });
    }

    // Re-observe new fade-up elements
    setTimeout(() => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.07 });
      document.querySelectorAll('.fade-up:not(.visible)').forEach(el => obs.observe(el));
    }, 100);
  }

  // ════════════════════════════════════════════════════════
  //  PROJECTS PAGE
  // ════════════════════════════════════════════════════════

  if (isProjects && DATA.projects) {
    injectProjectsGrid(DATA.projects);
    // Update stats bar
    const stats = document.querySelectorAll('.pstat-n');
    if (stats[0]) stats[0].textContent = DATA.projects.length;
  }

  // ════════════════════════════════════════════════════════
  //  ABOUT PAGE
  // ════════════════════════════════════════════════════════

  if (isAbout && DATA.about) {
    const chapterParas = document.querySelectorAll('.chapter p');
    if (chapterParas.length > 0 && DATA.about.p1) {
      // Inject chapter 1 first paragraph
      if (chapterParas[0]) chapterParas[0].innerHTML = DATA.about.p1;
    }
    const quotes = document.querySelectorAll('.pullquote p');
    if (quotes[0] && DATA.about.quote) quotes[0].textContent = DATA.about.quote;
  }

  // ════════════════════════════════════════════════════════
  //  JOURNEY PAGE
  // ════════════════════════════════════════════════════════

  if (isJourney && DATA.journey) {
    // Sidebar stats
    const sidebarStats = document.querySelectorAll('.sidebar-stat-n');
    if (sidebarStats[0]) sidebarStats[0].textContent = '15+';
    if (sidebarStats[1] && DATA.projects) sidebarStats[1].textContent = DATA.projects.length;
    if (sidebarStats[2]) sidebarStats[2].textContent = DATA.certifications ? DATA.certifications.filter(c => c.status === 'active').length : 3;
  }

  // ════════════════════════════════════════════════════════
  //  CV PAGE
  // ════════════════════════════════════════════════════════

  if (isCV) {
    if (DATA.cv) {
      // Update download links
      if (DATA.cv.linkDS) {
        document.querySelectorAll('a[href*="drive.google.com"]').forEach(el => { el.href = DATA.cv.linkDS; });
      }
    }
    // CV photo
    const heroPhotos = JSON.parse(localStorage.getItem('photo_slots') || '{}');
    if (heroPhotos.cv) {
      const cvPhoto = document.querySelector('.cv-photo-placeholder, .profile-photo');
      if (cvPhoto) {
        cvPhoto.style.backgroundImage = `url('${heroPhotos.cv}')`;
        cvPhoto.style.backgroundSize = 'cover';
        cvPhoto.style.backgroundPosition = 'center';
      }
    }
  }

  // ════════════════════════════════════════════════════════
  //  HELPERS
  // ════════════════════════════════════════════════════════

  function injectProjectsGrid(projects) {
    // Find existing project grids and update metrics/links
    // We do targeted updates to avoid destroying existing styled HTML
    projects.forEach(p => {
      // Find matching card by project name
      const cards = document.querySelectorAll('.project-card, .featured-banner');
      cards.forEach(card => {
        const nameEl = card.querySelector('.project-name, .featured-title');
        if (!nameEl) return;
        const cardName = nameEl.textContent.trim().toLowerCase();
        const pName = p.name.toLowerCase();
        if (cardName.includes(pName.slice(0, 20)) || pName.includes(cardName.slice(0, 20))) {
          // Update live app link
          if (p.live) {
            card.querySelectorAll('.btn-demo').forEach(btn => {
              if (btn.href && !btn.href.includes('teacher') && !btn.href.includes('student')) {
                btn.href = p.live;
              }
            });
          }
          // Update github link
          if (p.github) {
            card.querySelectorAll('.btn-code, a[href*="github.com"]').forEach(btn => {
              btn.href = p.github;
            });
          }
          // Update metric if exists
          if (p.metric) {
            const metricEl = card.querySelector('.project-metric');
            if (metricEl) metricEl.textContent = p.metric;
          }
        }
      });
    });
  }

  function getCertIcon(issuer) {
    if (!issuer) return 'fas fa-certificate';
    const i = issuer.toLowerCase();
    if (i.includes('google')) return 'fab fa-google';
    if (i.includes('microsoft') || i.includes('azure')) return 'fas fa-cloud';
    if (i.includes('ibm')) return 'fas fa-award';
    if (i.includes('3mtt') || i.includes('federal')) return 'fas fa-bolt';
    if (i.includes('worldquant')) return 'fas fa-globe';
    if (i.includes('kodecamp')) return 'fas fa-laptop-code';
    if (i.includes('lasu') || i.includes('university')) return 'fas fa-graduation-cap';
    if (i.includes('jobberman')) return 'fas fa-users';
    if (i.includes('music') || i.includes('rotop')) return 'fas fa-music';
    if (i.includes('datacamp')) return 'fas fa-chart-line';
    return 'fas fa-certificate';
  }

})();
