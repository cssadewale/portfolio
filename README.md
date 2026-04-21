# Adewale Samson Adeagbo — Personal Portfolio Website

> **AI-Augmented Solutions Developer · Data Scientist · STEM Educator (15+ Years) · Founder, HMG Concepts · Lagos, Nigeria**

[![Live Site](https://img.shields.io/badge/Live%20Site-cssadewale.pages.dev-F5A623?style=for-the-badge&logo=cloudflare&logoColor=white)](https://cssadewale.pages.dev)
[![GitHub](https://img.shields.io/badge/GitHub-cssadewale-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cssadewale)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-adewalesamsonadeagbo-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/adewalesamsonadeagbo)
[![License](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)](LICENSE)

---

## Table of Contents

- [About This Project](#about-this-project)
- [Live Demo](#live-demo)
- [What Makes This Portfolio Different](#what-makes-this-portfolio-different)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Page-by-Page Breakdown](#page-by-page-breakdown)
- [Admin Panel — Full Feature Reference](#admin-panel--full-feature-reference)
- [Data Architecture — How Content Updates Work](#data-architecture--how-content-updates-work)
- [Security Architecture](#security-architecture)
- [GitHub API Deploy System](#github-api-deploy-system)
- [SEO Implementation](#seo-implementation)
- [Getting Started — Fresh Installation](#getting-started--fresh-installation)
- [Setting Up GitHub API Deploy](#setting-up-github-api-deploy)
- [First Login and Password Setup](#first-login-and-password-setup)
- [Customisation Guide](#customisation-guide)
- [File Reference](#file-reference)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Featured Projects Showcased](#featured-projects-showcased)
- [Contact](#contact)

---

## About This Project

This is the full source code for my personal professional portfolio website — a static, multi-page site that presents my work as a Data Scientist, Machine Learning Engineer, 15+ year STEM Educator, and founder of HMG Concepts.

The portfolio was built entirely using **AI-Augmented development** — not because I studied web development, but because as a data scientist I think and observe problems clearly, and I leveraged AI as a collaborator to operate competently in an unfamiliar technical field. The development environment was an **Android tablet** running Acode editor, with no laptop, no local server, and a ₦0 budget. This working method is itself part of my identity as an AI-Augmented Solutions Developer, and it is documented honestly throughout the portfolio.

The site is powered by a custom **GitHub-API-driven admin panel** (v3.0) that allows one-click deployment from any device — no code editing required after setup. Every content change made in the admin panel is committed to GitHub via the GitHub Contents API and deployed automatically by Cloudflare Pages in 30–60 seconds.

---

## Live Demo

| Page | URL |
|------|-----|
| **Homepage** | [cssadewale.pages.dev](https://cssadewale.pages.dev/) |
| **About** | [cssadewale.pages.dev/about.html](https://cssadewale.pages.dev/about.html) |
| **Projects** | [cssadewale.pages.dev/projects.html](https://cssadewale.pages.dev/projects.html) |
| **Journey** | [cssadewale.pages.dev/journey.html](https://cssadewale.pages.dev/journey.html) |
| **CV** | [cssadewale.pages.dev/cv.html](https://cssadewale.pages.dev/cv.html) |
| **Admin Panel** | `/admin.html` *(password protected, noindex)* |

---

## What Makes This Portfolio Different

### 1. Built on an Android Tablet with Zero Budget

Every HTML file, every CSS rule, every JavaScript function in this repository was written using Acode editor on an Android tablet. No laptop. No local development server. No build tools. The constraint forced a working method that is now a core part of the story this portfolio tells.

### 2. AI-Augmented, Not Web Dev Trained

This site exists not because I completed a web development course, but because I have a data scientist's ability to think through problems clearly and the confidence to use AI as a collaborator across technical domains I have not formally studied. The result is a production-grade, fully SEO-optimised, admin-powered portfolio — delivered from a mobile device.

### 3. GitHub-API-Powered Admin Panel

The admin panel (`admin.html`) is a fully featured content management system that operates entirely in the browser with no backend server. It communicates directly with the GitHub Contents API to commit changes to the repository, which triggers an automatic Cloudflare Pages rebuild. The entire deploy cycle — from clicking "Push Live" to changes appearing on the live site — takes 30–60 seconds.

### 4. Cross-Device Data Sync

All content lives in `portfolio-data.json` on GitHub. The admin panel fetches the latest version of this file on every login. Changes made on a phone in Lagos appear on a laptop in London the next time admin is opened — because both devices read from the same GitHub source of truth, not from browser storage.

### 5. Zero-Plaintext Password Security

The admin password is stored as a **SHA-256 cryptographic hash** inside `portfolio-data.json` on GitHub. The GitHub Personal Access Token (PAT) used for API calls is stored in `sessionStorage` only — it disappears when the browser tab is closed and is never written to the repository or to `localStorage`. Neither the password nor the token ever appears in plaintext in any file in this repository.

---

## Tech Stack

### Frontend
| Technology | Version / Notes | Purpose |
|-----------|----------------|---------|
| **HTML5** | Semantic, ARIA-compliant | Page structure and content |
| **CSS3** | Custom properties, Grid, Flexbox | Styling and layout |
| **Vanilla JavaScript** | ES2020+ (async/await, Web Crypto API) | Interactivity and admin logic |
| **Plus Jakarta Sans** | Google Fonts | Primary heading and UI font |
| **Lora** | Google Fonts | Body text / prose font |
| **JetBrains Mono** | Google Fonts | Monospace / code font |
| **Font Awesome 6.5.1** | CDN | All icons throughout the site |

### Hosting & Infrastructure (All Free)
| Service | Purpose |
|---------|---------|
| **Cloudflare Pages** | Primary hosting — auto-deploys from GitHub on every commit |
| **GitHub Pages** | CBT Pro (`cssadewale.github.io/cbt-system`) |
| **GitHub** | Source code repository and content database (`portfolio-data.json`) |
| **GitHub Contents API** | Admin panel deploys content directly to the repository |
| **Formspree** | Contact form endpoint — no backend required |

### Design System (CSS Custom Properties)
```css
--gold:            #F5A623   /* Primary accent — headings, highlights, CTAs */
--gold-light:      #fbbf5a   /* Hover states */
--emerald:         #10b981   /* Success states, EdTech category */
--royal-blue:      #1B3A6B   /* Background gradient, card backgrounds */
--royal-blue-light:#2451a0   /* Border accents */
--bg-dark:         #0a0e1a   /* Page background */
--bg-card:         #0f1628   /* Card backgrounds */
--text-white:      #FFFFFF   /* Primary headings */
--text-light:      #dce8f8   /* Secondary text */
--text-body:       #c6d8f0   /* Body text */
--text-muted:      #9db2cc   /* Captions, labels, metadata */
--font-head:       'Plus Jakarta Sans', sans-serif
--font-body:       'Lora', serif
--font-mono:       'JetBrains Mono', monospace
```

---

## Project Structure

```
portfolio/
│
├── index.html                  # Homepage — hero, about, skills, projects, certifications,
│                               #   testimonials, YouTube, contact
├── about.html                  # Full story — three chapters, teaching table, HMG Concepts
├── projects.html               # All 12 projects — featured CBT Pro + 11-card grid with filters
├── journey.html                # Career timeline 2009–2026 with sidebar navigation
├── cv.html                     # Two-tab CV — Data Scientist + Educator
│
├── shared.css                  # Global design system — used by all 5 portfolio pages
│                               #   (nav, footer, fade-up animations, buttons, badges)
│
├── portfolio-loader.js         # Live data bridge — fetches portfolio-data.json on every
│                               #   page load and injects content into DOM elements
├── portfolio-data.json         # Single source of truth — all editable content, photos
│                               #   (base64), password hash, deploy timestamp
│
├── admin.html                  # Admin Panel v3.0 — password protected, noindex
│                               #   GitHub-API powered, full CMS, cross-device sync
├── github-fix.html             # GitHub connection diagnostic tool — finds correct repo name,
│                               #   tests token, saves settings to admin panel
├── seo-check.html              # SEO self-diagnostic — 7 automated checks with fix instructions
│
├── sitemap.xml                 # XML sitemap — 5 URLs, submitted to Google Search Console
├── robots.txt                  # Crawler permissions — allows all except admin/diagnostic pages
├── og-image.html               # Template for creating og-image.png social share preview
├── og-image.png                # [Create manually] 1200×630px social preview image
│
└── googleXXXXXXXXXXXXXXXX.html # [Replace] Google Search Console verification file
```

---

## Page-by-Page Breakdown

### `index.html` — Homepage (1,307 lines)

The homepage is the primary entry point and longest file. It contains all major content sections:

**Sections in order:**
1. **Navigation** — Fixed top nav with scroll-triggered background, mobile hamburger drawer (ARIA-compliant, ESC-closeable, body scroll lock)
2. **Hero** — Full-viewport section with animated typewriter titles, circular photo ring, hero statement, CTA buttons, live project badge
3. **About** — Two-column layout: profile photo + three-chapter story (educator, builder, data scientist), stats strip, pull quote
4. **Skills** — Five skill groups in a responsive grid: Data Science & ML, Data Analysis & BI, Web & EdTech, Tools & AI, Currently Active
5. **Projects** — CBT Pro featured card (problem/solution/impact format) + 11 project cards with category filter bar
6. **Certifications** — 12 certification cards including 3 active programme badges
7. **Testimonials** — Student and colleague quote cards
8. **YouTube** — HMG Concepts channel section with three featured video cards
9. **Contact** — Three contact cards (WhatsApp, Email, LinkedIn), availability badge, Formspree-powered contact form
10. **Footer** — Brand, navigation, contact links, built-by attribution

**JavaScript features:**
- Animated starfield canvas background (`#canvas-bg`)
- Typewriter title cycle with configurable word array
- IntersectionObserver scroll animations (`.fade-up` class)
- Scroll-to-section smooth navigation
- Hamburger menu with full accessibility support
- Contact form submission with loading state and success/error feedback
- Auto-scroll to `#contact` from any CTA button

---

### `about.html` — Full Story (417 lines)

A long-form narrative page structured as three chapters plus an organisation section.

**Structure:**
- **Chapter 01 — The Educator:** 15+ years across Nursery, Primary, and Secondary levels; teaching table listing all schools and subjects
- **Chapter 02 — The Dream That Came Before the Code:** The origin of HMG Concepts, the decision to study CS Education at LASU, the 3MTT turning point
- **Chapter 03 — The AI-Augmented Solutions Developer:** What the identity means in practice, three active programmes, the deployment record
- **Work Philosophy:** Six philosophy cards (Problem First, Constraints Are the Brief, Learning Deliberately, Built for Nigerian Realities, Explainability Matters, Teaching Authentically)
- **HMG Concepts block:** Four subsidiary cards (HMG Academy, HMG Technologies, HMG Media, HMG Concepts parent brand) with exam scope badges

**Teaching table includes:**
- His Marvellous Grace, Fredaks Group of Schools, Anchor Heights, Dave Model School, Lifeline, De Glorious College, Ennycharles, Chrisville, Angel High School, God of Seed Academy, and others
- Also tutors via: Tuteria, Gate Academy, DoLessons, Prepclass

---

### `projects.html` — 12 Projects (540 lines)

**Stats bar:** 12 projects · 8 ML models · 1 EdTech platform · 4 EdTech ML tools · 7 industries · ₦0 budget

**Filter bar:** All 12 · EdTech · Machine Learning · NLP · Classification · HR Analytics

**Featured: CBT Pro (CBT.ng)**
- Stack: HTML5, CSS3, Vanilla JS, Supabase (PostgreSQL + RLS), Gemini API, GitHub Pages
- Features: 7-column CSV question upload, timed sessions, per-student question randomisation, anti-cheat tab-switch detection, flag-for-review, auto-marking, result certificates with WhatsApp share, 4-tab teacher analytics dashboard

**ML Projects (7):**

| Project | Type | Key Metric | Live |
|---------|------|-----------|------|
| Insurance Claim Prediction | Binary Classification | RF · SMOTE · SHAP · 7,014 records | [App](https://adewale-insurance-claim-prediction.streamlit.app/) |
| Yakub Staff Promotion | HR Analytics | RF · F1=0.411 · AUC=0.891 | [App](https://yakub-promotion-prediction.streamlit.app/) |
| Bank Customer Churn | Banking | GB · F1=0.609 · AUC=0.868 | [App](https://adewale-bank-customer-churn-prediction.streamlit.app/) |
| TruthLens Fake News Detector | NLP | XGBoost · TF-IDF · Acc=86.75% · AUC=0.9393 | [App](https://adewale-fake-news-detector.streamlit.app/) |
| NeuroWell Burnout Predictor | Regression | GB · R²=0.855 · RMSE=0.072 | [App](https://adewale-burnout-prediction.streamlit.app/) |
| SwiftChain Delivery Delay | Multi-class | GB · Acc=62% · F1=0.579 (leakage fixed) | [App](https://adewale-swiftchain-delivery-prediction.streamlit.app/) |
| Income Level Prediction | FinTech | RF · SMOTE · 5-Model Comparison | [App](https://adewale-income-level-prediction.streamlit.app/) |

**EdTech ML Tools (4):**

| Project | Type | Live |
|---------|------|------|
| Student At-Risk Predictor | RF · SHAP · Synthetic Nigerian Data · 2 modes | [App](https://student-at-risk-predictor.streamlit.app/) |
| Student Performance Tracker v3 | Streamlit · Plotly · 4 tabs | [App](https://adewale-student-performance-tracker.streamlit.app/) |
| Student Study Plan Generator | Rule-Based AI · WAEC/NECO prep | [App](https://student-study-plan-generator.streamlit.app/) |
| CBT Question Bank Manager | Streamlit · SQLite | [App](https://adewale-cbt-question-bank.streamlit.app/) |

---

### `journey.html` — Learning Timeline (451 lines)

A two-column layout: sticky sidebar era navigator + main timeline with era groups.

**Eras covered (reverse chronological):**
- **2025–2026:** Three simultaneous active programmes (DeepTech_Ready DSN × 3MTT × Google.org, WorldQuant University Applied DS Lab, Kodecamp Cohort 6); IBM SkillsBuild Hub Ambassador Cohort 4; DSN × Microsoft Elevate AI Developers (AI-900)
- **2025:** 12 projects deployed; 3MTT Programme certification (Dec 2025) — the turning point
- **2024:** WorldQuant University enrolment; CBT Pro first live deployment
- **2023:** B.Sc.(Ed) Computer Science Education — Lagos State University (LASU)
- **2015:** Founded HMG Concepts; Piano & Music Theory Certificate (Rotop Music Academy, 2013)
- **2009:** First classroom — Chrisville Schools

**Also includes:** Skill growth progress bars (self-assessed) and "What's Next" section (Deep Learning, AI-900, CBT Pro Phase 6 & 7)

---

### `cv.html` — Two-Tab CV (1,009 lines)

**Tab 1 — Data Scientist CV:** Professional summary, technical skills, work experience, ML project list with metrics, current learning programmes, education, certifications

**Tab 2 — Educator CV:** 15+ years teaching record, schools, subjects (Maths, Further Maths, Physics, Chemistry, Computer Science), exam preparation (WAEC, NECO, GCE, UTME, Post-UTME, IGCSE), individual tutoring platforms

Both tabs include a download button linking to Google Drive CVs and a professional headshot slot.

---

## Admin Panel — Full Feature Reference

The admin panel (`admin.html`, v3.0) is a single-file, fully self-contained CMS. It requires no server, no npm, no build step. Open it in any browser, log in, and manage every aspect of the portfolio.

### Access
- **URL:** `yoursite.pages.dev/admin.html` (or whatever you rename it to)
- **Password:** SHA-256 hashed, stored in `portfolio-data.json` on GitHub
- **Lockout:** 5 failed attempts locks the session until page refresh
- **Google:** Not indexed (`<meta name="robots" content="noindex,nofollow">` + `Disallow: /admin.html` in robots.txt)

### Sidebar Panels (21 total)

#### Overview
| Panel | Description |
|-------|-------------|
| **Dashboard** | Stats row (projects, certs, milestones, messages, media), quick actions, recent activity, site status (hosting, data source, last pushed, password status) |
| **Messages** | Contact form inbox — view, reply (mailto), mark read/unread, delete. Formspree ID configuration. All messages stored in `portfolio-data.json` and synced across devices. |
| **Activity Log** | Full session log of every action taken, with timestamps. Clearable. |

#### Content
| Panel | Description |
|-------|-------------|
| **Hero Section** | Full Name, Hero Statement, Availability Badge, Live Project Badge, Typewriter Titles (add/remove individual titles) |
| **About / Story** | Three chapter paragraphs (The Educator, The Builder, The Data Scientist), pull quote |
| **Projects** | Full CRUD for all 12 projects: name, category, type (ML/EdTech/NLP/Analytics), problem statement, key metric, GitHub URL, live app URL, tech stack, status (live/draft). Edit and delete existing. Add new. Each save triggers a GitHub push. |
| **Skills & Tools** | Skill groups editable in-place: rename group, edit skill badges (comma-separated). Add new groups. Delete groups. |
| **Journey** | Add milestones with date, tag (active/milestone/cert/work/edu), title, organisation, description. Edit existing. Delete. Reorder. |
| **Certifications** | Add certifications with issuer, name, year, status (active/completed), optional verify URL. Delete. |
| **Testimonials** | Add testimonials with quote text, name, role. Delete. WhatsApp message generator for collecting new testimonials. |
| **YouTube** | Channel name, handle, description. Add/remove featured video cards (title + category). |
| **Contact Info** | WhatsApp (primary + secondary), Email (primary + personal), Location, Availability status, "What I'm looking for" text. |
| **CV / Resume** | Google Drive links for Data Scientist CV and Educator CV. Professional summary text. |

#### Media
| Panel | Description |
|-------|-------------|
| **Photo Manager** | Upload photos to three specific slots: **Hero** (circular ring, 400×400px), **About** (portrait card, 600×800px), **CV** (headshot, 400×500px). Drag-and-drop or click to upload. Max 3MB per photo. Photos stored as base64 in `portfolio-data.json` and pushed to GitHub. Appear on the live site on next page load. |
| **Media Library** | Upload multiple images and documents (max 5MB each). Filter by type (all/images/documents). Click a file to copy its data URL or delete it. File count shown on dashboard. |
| **File Uploads** | Upload CV PDF (confirms file details, links to Google Drive instructions). Upload certificate images/PDFs (logged for reference). |

#### Site Settings
| Panel | Description |
|-------|-------------|
| **Show / Hide** | Toggle visibility of 9 homepage sections independently: Hero, About, Skills, Projects, Journey, YouTube, Certifications, Testimonials, Contact. Content is preserved when hidden. |
| **SEO & Meta** | Page title (character counter), Meta description (character counter), Keywords, OG/social share image URL. Live Google search result preview updates as you type. |
| **Branding** | Color pickers for Gold accent, Emerald, Royal Blue, Background. Footer slogan and copyright text. Reset to defaults button. |
| **Navigation** | Nav CTA button text and link URL. |
| **Social Links** | LinkedIn, GitHub, YouTube, X/Twitter, Instagram, WhatsApp, HMG Website — all in one form. |

#### Deploy & System
| Panel | Description |
|-------|-------------|
| **Push Live** | One-click deploy button with real-time status, 35-second countdown progress bar, commit link after successful push, manual JSON download fallback. |
| **GitHub Settings** | Username, repository name, branch, Personal Access Token. Save and Test Connection (tests token validity, finds actual repo name if wrong, auto-corrects branch). Links to GitHub Fix Tool. Token stored in `sessionStorage` only — never in the repo. |
| **Password** | Security model explanation (SHA-256, GitHub-stored, never plaintext). Change password form with strength meter. Changing password immediately pushes the new hash to GitHub. |
| **Backup** | Download full JSON backup with timestamp. Restore from backup file. Factory reset with double confirmation. |
| **SEO Check** | Links to `seo-check.html` diagnostic tool. Quick fix summary for "Couldn't fetch" sitemap error. Links to live sitemap, robots.txt, Search Console, XML validator. |
| **Help** | Full feature guide, cross-device sync explanation, security model, deploy workflow summary, useful external links. |

### Admin Topbar
- **Sync status indicator** — shows "Synced with GitHub" (green), "Not synced" (orange), or "Syncing..." (spinning) in real time
- **View Site** — opens live site in new tab
- **Messages** — shortcut to inbox with unread badge
- **Push Live** — quick deploy button available from every panel without navigating to Deploy panel
- **Logout** — clears session including GitHub token from `sessionStorage`

---

## Data Architecture — How Content Updates Work

```
┌─────────────────────────────────────────────────────────┐
│                    ADMIN PANEL                          │
│  (browser, any device, any location)                    │
│                                                         │
│  1. Admin opens admin.html                              │
│  2. Fetches portfolio-data.json from GitHub API         │
│     → gets latest content (cross-device sync)           │
│  3. Admin edits content in forms                        │
│  4. Clicks "Push Live"                                  │
│  5. Browser calls GitHub Contents API PUT               │
│     → commits new portfolio-data.json to repo           │
└───────────────────────┬─────────────────────────────────┘
                        │  GitHub Contents API
                        ▼
┌─────────────────────────────────────────────────────────┐
│                  GITHUB REPOSITORY                      │
│                                                         │
│  portfolio-data.json  ◄── new commit lands here         │
│  (single source of truth for all content)               │
└───────────────────────┬─────────────────────────────────┘
                        │  Cloudflare Pages detects commit
                        ▼
┌─────────────────────────────────────────────────────────┐
│               CLOUDFLARE PAGES                          │
│                                                         │
│  Auto-rebuilds and deploys in 30–60 seconds             │
└───────────────────────┬─────────────────────────────────┘
                        │  Visitor opens any page
                        ▼
┌─────────────────────────────────────────────────────────┐
│              PORTFOLIO-LOADER.JS                        │
│                                                         │
│  Runs on every page load                                │
│  1. Fetches portfolio-data.json (cache-busted)          │
│  2. Injects content into DOM elements                   │
│  3. Applies visibility settings                         │
│  4. Updates photos from base64 data                     │
│  Pages show latest data instantly                       │
└─────────────────────────────────────────────────────────┘
```

### `portfolio-data.json` — Structure

```json
{
  "_pwHash":      "sha256 hash of admin password",
  "_lastPushed":  "ISO 8601 timestamp of last deploy",
  "hero":         { name, statement, badge, liveBadge, typewriter[] },
  "about":        { p1, p2, p3, quote },
  "projects":     [ { id, name, cat, type, problem, metric, github, live, stack[], status } ],
  "certifications": [ { id, issuer, name, year, status, url } ],
  "journey":      [ { id, date, tag, title, org, desc } ],
  "testimonials": [ { id, text, name, role } ],
  "skills":       [ { group, icon, items[] } ],
  "youtube":      { name, handle, url, desc, videos[] },
  "contact":      { wa1, wa2, email, email2, location, avail, looking },
  "social":       { linkedin, github, youtube, twitter, instagram, whatsapp, hmg },
  "seo":          { title, desc, kw, ogImg },
  "visibility":   { hero, about, skills, projects, journey, youtube, certifications, testimonials, contact },
  "cv":           { linkDS, linkEdu, summary },
  "navigation":   { ctaTxt, ctaLink },
  "branding":     { gold, emerald, blue, bg, slogan, copyright },
  "form":         { formspreeId, notifEmail },
  "photos":       { hero, about, cv },
  "media":        [ { id, name, type, data, size, date } ],
  "messages":     [ { name, email, subject, message, date, read } ]
}
```

---

## Security Architecture

### Admin Password

| Property | Implementation |
|----------|---------------|
| **Algorithm** | SHA-256 via Web Crypto API (`crypto.subtle.digest`) |
| **Storage** | `portfolio-data.json` on GitHub — hash only, never plaintext |
| **Cross-device** | Same hash file read on every device — change password once, update everywhere |
| **First run** | If `_pwHash` is empty, any password is accepted and immediately hashed and stored |
| **Lockout** | 5 failed attempts locks the session — page refresh required |

The SHA-256 implementation uses the browser's native Web Crypto API:
```javascript
async function sha256(str) {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(str)
  );
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}
```
No external libraries. No server round-trips. No plaintext password anywhere.

### GitHub Personal Access Token

| Property | Implementation |
|----------|---------------|
| **Storage** | `sessionStorage` only — never `localStorage`, never GitHub, never `portfolio-data.json` |
| **Lifetime** | Cleared when the browser tab is closed |
| **Scope required** | `repo` (classic PAT) |
| **API usage** | Only sent to `api.github.com` during actual deploy/fetch calls |
| **On logout** | `sessionStorage.removeItem('gh_token')` — immediately cleared |

### Admin Page Discoverability

The admin page is hidden from search engines via two independent mechanisms:

1. **Meta tag in `admin.html`:** `<meta name="robots" content="noindex,nofollow">`
2. **`robots.txt` directive:** `Disallow: /admin.html`

---

## GitHub API Deploy System

The deploy system uses the [GitHub Contents API](https://docs.github.com/en/rest/repos/contents) (`PUT /repos/{owner}/{repo}/contents/{path}`) to commit `portfolio-data.json` directly to the repository without requiring Git to be installed or any CLI tools.

### Deploy Flow (Step by Step)

```
1. User clicks "Push Changes Live Now"

2. Admin calls GET /repos/{user}/{repo}/contents/portfolio-data.json
   → Retrieves current file SHA (required for updates)
   → If file doesn't exist yet → SHA = null (create mode)

3. Admin builds PUT request:
   {
     "message": "Portfolio update [timestamp] — admin panel",
     "content": "<base64 encoded JSON>",
     "branch":  "main",
     "sha":     "<file SHA from step 2>"
   }

4. PUT /repos/{user}/{repo}/contents/portfolio-data.json
   → Authorization: token <PAT from sessionStorage>

5. On 200 OK:
   → Commit URL extracted from response
   → 35-second countdown begins
   → Cloudflare Pages detects new commit
   → Auto-deploys updated site

6. On error:
   → HTTP 401 → Token invalid → create a new PAT
   → HTTP 403 → Token missing 'repo' scope → recreate with correct scope
   → HTTP 404 → Repo name wrong → use github-fix.html to find correct name
   → HTTP 422 → Branch doesn't exist → check branch name (main vs master)
```

### Error Handling

Every API error returns a human-readable message in the admin's deploy status box. For "not found" errors, the admin automatically fetches the user's full repository list and displays it so the correct repo name can be identified without leaving the admin panel.

---

## SEO Implementation

Every page has a complete SEO implementation. Here is what is included on each page:

### Meta Tags (all pages)
```html
<!-- Core -->
<title>Unique, keyword-rich title per page (50–60 chars)</title>
<meta name="description" content="Compelling description (150–160 chars)" />
<meta name="keywords" content="Page-specific keywords" />
<meta name="author" content="Adewale Samson Adeagbo" />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
<meta name="language" content="English" />
<meta name="geo.region" content="NG-LA" />
<meta name="geo.placename" content="Lagos, Nigeria" />
<link rel="canonical" href="https://cssadewale.pages.dev/page.html" />

<!-- Open Graph (LinkedIn, WhatsApp, Facebook) -->
<meta property="og:type" content="website" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:url" content="..." />
<meta property="og:image" content="https://cssadewale.pages.dev/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_NG" />

<!-- Twitter / X Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@cssadewale" />
<meta name="twitter:creator" content="@cssadewale" />
```

### Schema.org JSON-LD Structured Data
Each page has a page-specific JSON-LD block:
- `index.html` — `Person`, `Organization` (HMG Concepts), `WebSite` — full graph
- `about.html` — `AboutPage` with `mainEntity: Person`
- `projects.html` — `CollectionPage` with `hasPart: SoftwareApplication[]` (CBT Pro, TruthLens, Student At-Risk Predictor)
- `journey.html` — `ProfilePage`
- `cv.html` — `ResumeAction`

### Supporting Files
- **`sitemap.xml`** — 5 URLs with `priority` and `changefreq` values. Submit at [Google Search Console](https://search.google.com/search-console/).
- **`robots.txt`** — Allows all crawlers, disallows admin/diagnostic pages, includes `Sitemap:` directive pointing to sitemap.xml.

### Target Keywords
| Tier | Keywords |
|------|---------|
| **Tier 1** (rank within 2–3 weeks) | `Adewale Samson Adeagbo`, `Adewale Adeagbo data scientist` |
| **Tier 2** (rank within 1–2 months) | `data scientist Nigeria portfolio`, `CBT Pro Nigeria`, `HMG Concepts` |
| **Tier 3** (rank within 2–4 months) | `data scientist Lagos hire`, `STEM tutor Lagos secondary school`, `machine learning projects Nigeria` |
| **Tier 4** (rank within 3–6 months) | `further mathematics tutor Lagos`, `EdTech Nigeria CBT exam platform` |

---

## Getting Started — Fresh Installation

### Prerequisites

- A GitHub account
- A Cloudflare account (free tier)
- A GitHub Personal Access Token with `repo` scope

No Node.js. No npm. No build tools. No local server. All you need is a browser.

### Step 1 — Fork or Clone the Repository

**Option A — Fork (recommended for your own portfolio):**
1. Click **Fork** at the top right of this page
2. Rename the fork to match your intended Cloudflare Pages URL (e.g. `yourname.pages.dev`)

**Option B — Clone and push to new repo:**
```bash
git clone https://github.com/cssadewale/portfolio.git
cd portfolio
# Edit files as needed
git remote set-url origin https://github.com/YOURUSERNAME/YOURREPO.git
git push -u origin main
```

**Option C — Upload files directly (mobile/tablet workflow):**
1. Create a new repository on GitHub
2. Click **"Add file" → "Upload files"**
3. Select all files from this package
4. Commit changes

### Step 2 — Connect to Cloudflare Pages

1. Log into [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to **Workers & Pages → Create → Pages**
3. Click **"Connect to Git"** → authorise Cloudflare to access your GitHub account
4. Select your portfolio repository
5. **Build settings:**
   - Build command: *(leave blank — this is a static site)*
   - Build output directory: `/` *(root)*
6. Click **"Save and Deploy"**
7. Cloudflare assigns you a URL: `your-repo-name.pages.dev`
8. Every subsequent push to your `main` branch auto-deploys in 30–60 seconds

### Step 3 — Update All URLs to Match Your Domain

Open a text editor and do a global find-and-replace:

| Find | Replace with |
|------|-------------|
| `cssadewale.pages.dev` | `yoursite.pages.dev` |
| `cssadewale` (GitHub username) | `yourgithubusername` |
| `Adewale Samson Adeagbo` | Your full name |
| `hmgconcepts@gmail.com` | Your email |
| `+2348100866322` | Your WhatsApp number |

Files to update: `index.html`, `about.html`, `projects.html`, `journey.html`, `cv.html`, `admin.html`, `sitemap.xml`, `robots.txt`

---

## Setting Up GitHub API Deploy

This is a one-time setup that takes approximately 5 minutes.

### Step 1 — Create a GitHub Personal Access Token

1. Log into GitHub → click your profile picture → **Settings**
2. Scroll to the bottom of the left sidebar → click **Developer settings**
3. Click **Personal access tokens → Tokens (classic)**
4. Click **"Generate new token (classic)"**
5. **Note:** Enter `Portfolio Admin` (or any label you prefer)
6. **Expiration:** Set to `No expiration` (or 1 year — you can regenerate when it expires)
7. **Select scopes:** Tick only the top-level **`repo`** checkbox
   - This grants read/write access to your repositories
   - Do not tick anything else
8. Scroll to the bottom → click **"Generate token"**
9. **Copy the token immediately** — it starts with `ghp_` and is only shown once
10. Store it somewhere safe temporarily (e.g. your notes app)

> **Security note:** This token gives write access to your GitHub repos. Do not share it, do not paste it into any file, and do not commit it to GitHub. The admin panel stores it in `sessionStorage` only — it disappears when you close the tab.

### Step 2 — Enter Settings in Admin Panel

1. Open `admin.html` on your site
2. Log in (see [First Login and Password Setup](#first-login-and-password-setup))
3. In the sidebar, go to **GitHub Settings**
4. Fill in:
   - **GitHub Username:** Your exact GitHub username (e.g. `cssadewale`)
   - **Repository Name:** The exact repo name as it appears on GitHub (e.g. `cssadewale.pages.dev`)
   - **Branch:** `main` (or `master` — check your repo's default branch)
   - **Personal Access Token:** Paste the `ghp_...` token you generated
5. Click **"Save Settings"**
6. Click **"Test Connection"**

### Step 3 — Verify Connection

The Test Connection button performs three checks:
1. Validates your token against the GitHub API `/user` endpoint
2. Confirms the repository exists and is accessible
3. Checks your write permissions
4. Auto-corrects the branch name if it differs from your setting

A green status message confirms you are ready to deploy.

### Step 4 — First Deploy

1. Make any small edit in the admin panel (e.g. change a word in the Hero Statement)
2. Click **"Push Changes Live Now"** (either the topbar button or the Deploy panel)
3. Watch the status update: *Connecting → Pushing → Pushed to GitHub → Rebuilding...*
4. After ~35 seconds, open your live site and confirm the change is visible

---

## First Login and Password Setup

### On a New Installation (First Time Ever)

When `portfolio-data.json` has no `_pwHash` entry (or the file doesn't exist yet), the admin panel operates in first-run mode:

1. Open `admin.html`
2. The "First-Time Setup" message is shown below the login box
3. **Type any password you want** — this becomes your admin password
4. Click **"Access Dashboard"**
5. You are logged in immediately
6. **Go to GitHub Settings panel first** — enter your repo and token
7. **Then go to the Password panel** — confirm your password is correctly set
8. Click **"Change Password & Push"** — this pushes the SHA-256 hash to GitHub
9. From this point, the same password works on every device that opens your admin panel

### On Any Subsequent Device

1. Open `admin.html`
2. Enter your password (the one you set in step 7 above)
3. The admin fetches `portfolio-data.json` from GitHub and reads the stored hash
4. Hash comparison validates your login
5. After login, enter your GitHub token in the **GitHub Settings** panel (takes 10 seconds)
6. All your content, projects, photos, and settings load immediately from GitHub

> **If you forget your password:** Create a new `portfolio-data.json` with `"_pwHash": ""` and push it to GitHub. On next login, the first-run flow activates and you can set a new password.

---

## Customisation Guide

### Changing the Colour Scheme

All colours are defined as CSS custom properties in `shared.css`. The admin Branding panel also exposes them as colour pickers for no-code changes.

To change manually, edit these variables in `shared.css`:
```css
:root {
  --gold:            #F5A623;  /* Change to any hex colour */
  --emerald:         #10b981;
  --royal-blue:      #1B3A6B;
  --bg-dark:         #0a0e1a;
}
```

### Changing Fonts

Fonts are loaded from Google Fonts. To change them:
1. Go to [fonts.google.com](https://fonts.google.com)
2. Select your preferred fonts
3. Replace the Google Fonts `<link>` tags in all HTML files
4. Update the `--font-head`, `--font-body`, `--font-mono` variables in `shared.css`

### Adding a New Page

1. Copy `about.html` as a template
2. Update the `<title>`, `<meta name="description">`, and `<link rel="canonical">` tags
3. Replace the page content inside the `<section>` tags
4. Add the page to `sitemap.xml`
5. Add a navigation link in all other HTML pages
6. Upload to GitHub

### Connecting the Contact Form

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy the form ID (e.g. `xabc1234`)
3. In `index.html`, find `YOUR_FORMSPREE_ID` and replace it with your actual ID
4. Or use the **Messages → Form Settings** panel in admin and push the change live

### Setting Up Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console/)
2. Add property as **URL prefix**: `https://yoursite.pages.dev/`
3. Download the HTML verification file Google provides
4. Upload it to your GitHub repo root
5. Click "Verify" in Search Console
6. Go to **Indexing → Sitemaps** → type `sitemap.xml` → click Submit
7. Use the **URL Inspection Tool** to request indexing for each of your 5 pages

---

## File Reference

| File | Size | Description |
|------|------|-------------|
| `index.html` | ~100KB / 1,307 lines | Homepage — all sections |
| `about.html` | ~35KB / 417 lines | Full story — three chapters, HMG Concepts |
| `projects.html` | ~44KB / 540 lines | 12 projects with filters and featured CBT Pro |
| `journey.html` | ~38KB / 451 lines | Career timeline 2009–2026 |
| `cv.html` | ~57KB / 1,009 lines | Two-tab CV (Data Scientist + Educator) |
| `shared.css` | ~10KB / 133 lines | Global design system for all portfolio pages |
| `portfolio-loader.js` | ~19KB / 417 lines | Live data bridge — fetches and injects content |
| `admin.html` | ~143KB / 1,946 lines | Full CMS admin panel v3.0 |
| `github-fix.html` | ~20KB / 363 lines | GitHub connection diagnostic and fix tool |
| `seo-check.html` | ~31KB / 461 lines | SEO self-diagnostic — 7 automated checks |
| `sitemap.xml` | ~1KB / 33 lines | XML sitemap — 5 URLs |
| `robots.txt` | ~381B / 13 lines | Crawler permissions |
| `og-image.html` | ~6.5KB / 112 lines | Social preview image template (screenshot to PNG) |
| `SEO-COMPLETE-INSTRUCTIONS.md` | ~16KB / 366 lines | Step-by-step Google indexing guide |
| `portfolio-data.json` | *generated* | Content database — created on first admin deploy |
| `og-image.png` | *create manually* | 1200×630px social share preview |
| `googleXXXXXXXXXXXXXXXX.html` | *replace* | Google Search Console verification |

---

## Deployment

### Cloudflare Pages (Primary — Recommended)

Cloudflare Pages is the recommended hosting solution. It is free, fast, and automatically deploys on every `git push` or GitHub API commit.

**Setup:**
1. Log into [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Workers & Pages → Create → Pages → Connect to Git**
3. Select your repository
4. Build command: *(leave blank)*
5. Build output directory: `/`
6. Click **"Save and Deploy"**

**Auto-deploy trigger:** Every commit to your `main` branch — including commits made by the admin panel via GitHub API — triggers a new build within seconds.

**Custom domain (optional):**
1. In Cloudflare Pages → your project → **Custom domains**
2. Add your domain (e.g. `adewalesamsonadeagbo.com`)
3. Cloudflare handles SSL/TLS automatically

### GitHub Pages (Alternative)

GitHub Pages can also host this site. It deploys directly from your repository.

1. Go to your GitHub repo → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
4. Save

Your site will be available at `yourusername.github.io/reponame`. To use a custom domain, add a `CNAME` file to the repo root.

> **Note:** CBT Pro is hosted separately on GitHub Pages at `cssadewale.github.io/cbt-system`. The main portfolio is on Cloudflare Pages.

---

## Troubleshooting

### "Repository not found" when testing GitHub connection

**Cause:** The repo name in GitHub Settings does not exactly match your GitHub repository name. Repo names are case-sensitive.

**Fix:**
1. Open `github-fix.html` from your live site
2. Enter your token and click **"Verify Token & Find My Repos"**
3. The tool lists all your repositories — click **"Use This Repo"** next to the correct one
4. Click **"Save Settings & Open Admin Panel"**
5. Test connection again — it should now show green

### "Deploy failed: Token invalid or expired"

**Cause:** Your GitHub Personal Access Token has expired, been deleted, or was not copied correctly.

**Fix:**
1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Delete the old token if it exists
3. Generate a new classic token with `repo` scope
4. Copy it immediately (shown only once)
5. In admin → GitHub Settings → paste the new token → Save → Test

### "Couldn't fetch" error in Google Search Console

This is the most common first-time setup issue. Run through this checklist:

1. **Open `https://yoursite.pages.dev/sitemap.xml` in your browser**
   - If you see a 404 → `sitemap.xml` was not uploaded to GitHub. Upload it and redeploy.
   - If you see XML → the file exists, proceed to step 2.

2. **Check what URL you submitted in Search Console**
   - Go to Search Console → Sitemaps
   - The URL shown should be exactly `https://yoursite.pages.dev/sitemap.xml`
   - If it shows anything else (double domain, wrong path) → delete and resubmit by typing only `sitemap.xml` in the input field

3. **Use the SEO Check tool** (`seo-check.html`)
   - Open it from your live site
   - It runs 7 automated checks and shows the exact fix for each failure

4. **Don't wait — use URL Inspection instead**
   - Even if the sitemap errors persist, go to Search Console → URL Inspection
   - Paste each page URL and click "Request Indexing"
   - This works independently of the sitemap

### Admin changes not showing on the live site

**Most likely cause:** `portfolio-loader.js` is not included in the HTML pages.

**Check:** Open any portfolio page → View Source → look for `<script src="portfolio-loader.js"></script>` before `</body>`. If missing, add it to all 5 HTML files.

**Second cause:** `portfolio-data.json` has not been pushed to GitHub yet. Go to admin → Deploy → "Push Changes Live Now".

### Photos not appearing on the live site

Photos are stored as base64 data in `portfolio-data.json`. They appear only after `portfolio-loader.js` runs and only if `portfolio-data.json` has been pushed to GitHub.

**Check:**
1. In admin → Photo Manager → confirm the slot shows "✓ Photo set" with a thumbnail
2. Click "Push Changes Live Now" to commit the updated `portfolio-data.json`
3. Open the live site and hard-refresh (Ctrl+Shift+R on desktop)

### Site not deploying after GitHub commit

1. Log into [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to **Workers & Pages → your project → Deployments**
3. Check if the latest deployment shows a build error
4. If yes, the error message in the Cloudflare dashboard will show what failed

---

## Featured Projects Showcased

All projects are deployed live. The portfolio showcases work across 7 industries.

### EdTech
- **[CBT Pro (CBT.ng)](https://cssadewale.github.io/cbt-system/teacher.html)** — Free CBT exam platform, live in Nigerian secondary schools. HTML5/CSS3/Vanilla JS/Supabase/Gemini API. Built on Android tablet.
- **[Student At-Risk Predictor](https://student-at-risk-predictor.streamlit.app/)** — Identifies failing students before exam season. Random Forest + SHAP + synthetic Nigerian data.
- **[Student Performance Tracker v3](https://adewale-student-performance-tracker.streamlit.app/)** — 4-tab analytics dashboard for teachers. Streamlit + Plotly.
- **[Student Study Plan Generator](https://student-study-plan-generator.streamlit.app/)** — Personalised WAEC/NECO revision schedules. Rule-based AI.
- **[CBT Question Bank Manager](https://adewale-cbt-question-bank.streamlit.app/)** — Organise and reuse question sets. Streamlit + SQLite.

### Machine Learning
- **[Bank Customer Churn](https://adewale-bank-customer-churn-prediction.streamlit.app/)** — Gradient Boosting · F1=0.609 · AUC=0.868
- **[Insurance Claim Prediction](https://adewale-insurance-claim-prediction.streamlit.app/)** — Random Forest · SMOTE · SHAP · 7,014 records
- **[Yakub Staff Promotion](https://yakub-promotion-prediction.streamlit.app/)** — HR Analytics · RF · F1=0.411 · AUC=0.891
- **[Income Level Prediction](https://adewale-income-level-prediction.streamlit.app/)** — Financial Inclusion · RF · SMOTE · 5-model comparison
- **[SwiftChain Delivery Delay](https://adewale-swiftchain-delivery-prediction.streamlit.app/)** — Logistics · GB Multiclass · Acc=62% · F1=0.579 *(documents data leakage fix)*
- **[NeuroWell Burnout Predictor](https://adewale-burnout-prediction.streamlit.app/)** — Regression · R²=0.855 · RMSE=0.072

### NLP
- **[TruthLens Fake News Detector](https://adewale-fake-news-detector.streamlit.app/)** — XGBoost + TF-IDF · Accuracy=86.75% · AUC=0.9393 *(3MTT Capstone 2 — first NLP + XGBoost project)*

---

## Contact

**Adewale Samson Adeagbo**
Data Scientist · ML Engineer · STEM Educator (15+ Years) · AI-Augmented Solutions Developer · Founder, HMG Concepts

| Channel | Details |
|---------|---------|
| **Portfolio** | [cssadewale.pages.dev](https://cssadewale.pages.dev) |
| **Email** | hmgconcepts@gmail.com |
| **WhatsApp** | [+2348100866322](https://wa.me/2348100866322) |
| **LinkedIn** | [adewalesamsonadeagbo](https://linkedin.com/in/adewalesamsonadeagbo) |
| **GitHub** | [cssadewale](https://github.com/cssadewale) |
| **YouTube** | [@hmgconcepts](https://youtube.com/@hmgconcepts) |
| **HMG Concepts** | [hmgconcepts.business.site](https://hmgconcepts.business.site) |

**Currently open to:** Data science, ML, and data analyst roles · EdTech collaborations · CBT Pro school partnerships · Remote work globally

---

## Licence

This project is licensed under the MIT Licence. You are free to use, fork, adapt, and build upon this work — with attribution.

See [`LICENSE`](LICENSE) for full terms.

---

*Built with HTML · CSS · JavaScript · AI Collaboration · An Android Tablet · Zero Budget*

*"Learning Deliberately. Building Authentically."*
