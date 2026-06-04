# cssadewale Portfolio v3.0
**Adewale Samson Adeagbo — AI-Augmented Solutions Developer · Data Scientist · STEM Educator**

🌐 **Live Site:** https://cssadewale.pages.dev  
📁 **GitHub:** https://github.com/cssadewale  
📧 **Email:** adeagboadewalesamson@gmail.com

---

## 📂 Project Structure

```
portfolio-v3/
│
├── index.html              ← Homepage (hero, identity, HMG, projects, skills, contact)
├── about.html              ← Full story, teaching history, philosophy, HMG subsidiaries
├── projects.html           ← All 34 projects across EdTech, DataTech, FaithTech
├── journey.html            ← Learning journey timeline, capability bars, road ahead
├── cv.html                 ← Dual CV switcher (Data Scientist + Educator)
├── README.md               ← This file
├── .gitignore              ← Files to exclude from Git
│
└── assets/
    ├── css/
    │   └── style.css       ← Global shared stylesheet (all pages link here)
    │
    ├── js/
    │   └── main.js         ← All JavaScript features (nav, photo, animations, etc.)
    │
    ├── images/
    │   ├── README.md       ← Instructions for adding your profile photo
    │   └── profile.jpg     ← 👈 ADD YOUR PHOTO HERE (rename to profile.jpg)
    │
    └── docs/
        ├── cv-datascientist.html  ← Standalone printable Data Scientist CV
        └── cv-educator.html       ← Standalone printable Educator CV
```

---

## ✨ Features

### Core Features (inherited from v2, enhanced)
- ✅ Full multi-page portfolio (Home, About, Projects, Journey, CV)
- ✅ Dark theme with gold professional accent
- ✅ Three Builder Identity framework (EdTech, DataTech, FaithTech)
- ✅ Mobile-responsive with hamburger navigation
- ✅ Photo upload modal (URL, Google Drive link, or device upload)
- ✅ Dual CV with tab switcher (Data Scientist / Educator)
- ✅ All 34 projects with live links
- ✅ HMG Concepts 4-subsidiary structure

### New Enterprise Features in v3
- ✅ **Reading progress bar** — thin gold bar at top shows scroll progress
- ✅ **Scroll-to-top button** — appears after scrolling 400px
- ✅ **Scroll animations** — elements animate in as you scroll (IntersectionObserver)
- ✅ **Stat counter animation** — numbers count up when scrolled into view
- ✅ **Progress bar animation** — skill bars animate from 0% to value on scroll
- ✅ **Photo auto-detection from repo** — drop `profile.jpg` in `assets/images/` and it loads automatically for ALL visitors
- ✅ **Photo persists via localStorage** — browser saves your photo choice
- ✅ **Keyboard accessibility** — Escape closes modals; ARIA labels throughout
- ✅ **Form inline feedback** — contact form shows success/error without page reload
- ✅ **SEO meta tags** — title, description, Open Graph (LinkedIn/FB), Twitter Card
- ✅ **Print styles** — CV pages print cleanly (Ctrl+P → Save as PDF)
- ✅ **Standalone printable CVs** — professional A4-format CV files in `assets/docs/`
- ✅ **Shared CSS system** — one `style.css` drives all pages consistently
- ✅ **Shared JS system** — one `main.js` handles all interactions site-wide
- ✅ **rel="noopener"** on all external links (security best practice)
- ✅ **canonical URL tags** on all pages (SEO)

---

## 📸 Adding Your Profile Photo

**Option 1 (Best — works for all visitors):**
1. Rename your photo to `profile.jpg`
2. Place it in `assets/images/`
3. Push to GitHub → Done. All visitors see it automatically.

**Option 2 (Browser-only):**
1. Open the live website
2. Click the ✏️ pencil icon on the profile photo
3. Paste a URL or Google Drive share link

**Option 3 (Device upload):**
- Click ✏️ → "Upload from Device"
- Saved in your browser's localStorage (this device only)

See `assets/images/README.md` for full instructions.

---

## 🚀 Deployment Guide

### Option A: Cloudflare Pages (Recommended — Free)
1. Log in to https://dash.cloudflare.com
2. Go to **Pages** → **Create a project**
3. Connect GitHub and select your repo
4. Framework preset: **None**
5. Build command: *(leave empty)*
6. Build output directory: *(leave empty or put `/`)*
7. Click **Save and Deploy**
8. Your site is live at `your-repo-name.pages.dev`
9. Optional: Add custom domain in Pages settings

### Option B: GitHub Pages (Free)
1. Push all files to a GitHub repo
2. Go to repo Settings → Pages
3. Source: **Deploy from branch** → `main` → `/ (root)`
4. Click Save → Site live at `yourusername.github.io/repo-name`

### Option C: Vercel (Free)
1. Go to https://vercel.com
2. Import your GitHub repo
3. Framework: **Other**
4. Deploy → Live instantly

---

## ⚙️ One-Time Setup Tasks

| Task | Where | What to do |
|------|--------|-----------|
| Contact form | `index.html` line ~360 | Replace `your-form-id` with real Formspree ID |
| Photo | `assets/images/` | Add `profile.jpg` |
| CV download | `cv.html` | Update PDF download links when you have PDFs |
| Meta image | `index.html` head | The og:image URL updates automatically once you push `profile.jpg` |

### How to get a free Formspree ID:
1. Go to https://formspree.io
2. Sign up free (50 submissions/month free)
3. Create a new form → copy the form ID
4. Replace `your-form-id` in `index.html`

---

## 🔧 Customisation Guide

### Changing colours
All colours are CSS variables in `assets/css/style.css` under `:root { ... }`  
The main ones you might want to change:
```css
--gold:     #f5b342;   /* Primary accent — CTA buttons, headings */
--edtech:   #22c55e;   /* EdTech Builder colour (green)  */
--datatech: #818cf8;   /* DataTech Builder colour (indigo) */
--faith:    #38bdf8;   /* FaithTech Builder colour (sky blue) */
```

### Adding a new project
In `projects.html`, copy an existing `.proj-card` block and update:
- `.proj-name` — project name
- `.proj-desc` — description
- `.proj-metrics` — key metrics
- `.proj-stack` — tech tags
- `.proj-links` — live app and GitHub URLs

### Updating the stat numbers
In `index.html`, find the stats bar section and update `data-count` attributes:
```html
<div class="stat-num" data-count="34">34</div>
```

---

## 📋 Technology Stack

| Layer | Technology | Why |
|-------|------------|-----|
| HTML  | HTML5 (semantic) | Structure + SEO |
| CSS   | Vanilla CSS3 + Custom Properties | Zero dependencies, fast |
| JS    | Vanilla JavaScript (ES6+) | Zero frameworks, no build step |
| Icons | Emoji | No icon font CDN needed |
| Forms | Formspree (free tier) | No backend needed |
| Hosting | Cloudflare Pages / GitHub Pages | Free forever |
| Photos | GitHub repo + localStorage | Dual fallback system |

**No npm. No build process. No frameworks. Drop the files → it works.**

---

## 📞 Contact

**Adewale Samson Adeagbo**  
WhatsApp: +234 810 086 6322  
Email: adeagboadewalesamson@gmail.com  
Portfolio: https://cssadewale.pages.dev

*© 2025–2026 Adewale Samson Adeagbo · HMG Concepts · All Rights Reserved*
