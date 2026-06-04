# 📦 Deployment Guide — cssadewale Portfolio v3.0
## Complete Step-by-Step Instructions for Every Platform

---

## PART 1: PREPARATION (Do This First)

### Step 1 — Confirm Your File Structure
Your `portfolio-v3` folder must contain exactly these files before you do anything:
```
portfolio-v3/
├── index.html
├── about.html
├── projects.html
├── journey.html
├── cv.html
├── README.md
├── DEPLOYMENT.md
├── .gitignore
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── images/
    │   ├── README.md
    │   └── profile.jpg          ← ADD THIS (your photo)
    └── docs/
        ├── cv-datascientist.html
        └── cv-educator.html
```

### Step 2 — Add Your Profile Photo
1. Get a good square photo of yourself (minimum 300×300px)
2. Compress it at https://tinypng.com if it's larger than 400KB
3. Rename it to exactly: `profile.jpg`
4. Copy it into the `assets/images/` folder
5. The site will automatically find it

### Step 3 — Set Up Your Contact Form (One-Time)
The contact form sends messages to your email using Formspree (free).

1. Go to https://formspree.io
2. Click "Get Started" — sign up with your Gmail
3. Click "New Form" → name it "cssadewale contact"
4. Copy the form ID (looks like: `xpznkwqr`)
5. Open `index.html` in any text editor
6. Find this line (around line 360):
   ```
   action="https://formspree.io/f/your-form-id"
   ```
7. Replace `your-form-id` with your actual form ID:
   ```
   action="https://formspree.io/f/xpznkwqr"
   ```
8. Save the file

---

## PART 2A: DEPLOY TO CLOUDFLARE PAGES (RECOMMENDED)

Cloudflare Pages is the best option because:
- Completely free (no limits on bandwidth or sites)
- Supports custom domains for free
- Fast CDN worldwide (great for Nigeria)
- Works perfectly with GitHub

### Step 1 — Create a GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up"
3. Username: `cssadewale` (you already have this account — log in)

### Step 2 — Create a New GitHub Repository
1. Log in to https://github.com as `cssadewale`
2. Click the `+` button (top right) → "New repository"
3. Repository name: `cssadewale-portfolio` (or just `portfolio`)
4. Description: "My personal portfolio — AI-Augmented Solutions Developer"
5. Visibility: **Public** (required for free GitHub Pages / Cloudflare)
6. ✅ Do NOT add README (you already have one)
7. Click **"Create repository"**
8. Copy the repository URL shown (looks like: `https://github.com/cssadewale/portfolio.git`)

### Step 3 — Upload Files to GitHub

#### Option A: Using GitHub Web Interface (No terminal needed — EASIEST)
1. On the new empty repository page, click **"uploading an existing file"**
2. Drag ALL files from your `portfolio-v3` folder into the upload area
   - IMPORTANT: You must also drag in the `assets` folder and all its subfolders
   - Drag `index.html`, `about.html`, `projects.html`, `journey.html`, `cv.html`
   - Drag the entire `assets` folder (with `css/`, `js/`, `images/`, `docs/` inside)
   - Drag `README.md`, `DEPLOYMENT.md`, `.gitignore`
3. Scroll down — in the "Commit changes" box, type: `Add portfolio v3.0`
4. Click **"Commit changes"** (green button)
5. Wait 10–30 seconds while files upload
6. You should now see all your files listed in the repo

#### Option B: Using GitHub Desktop App (Easy, no command line)
1. Download GitHub Desktop: https://desktop.github.com
2. Sign in with your GitHub account
3. Click "Clone a repository" → paste your repo URL → choose a local folder
4. Open the cloned folder and copy all `portfolio-v3` contents into it
5. In GitHub Desktop, you'll see all changed files listed
6. In the bottom left, type commit message: `Add portfolio v3.0`
7. Click **"Commit to main"**
8. Click **"Push origin"** (blue button)

#### Option C: Using Git Command Line (For terminal users)
```bash
# Navigate to your portfolio folder
cd portfolio-v3

# Initialize git
git init

# Add the GitHub remote (replace URL with your repo URL)
git remote add origin https://github.com/cssadewale/portfolio.git

# Stage all files
git add .

# Commit
git commit -m "Add portfolio v3.0"

# Push to GitHub
git push -u origin main
```

### Step 4 — Connect Cloudflare Pages to GitHub
1. Go to https://dash.cloudflare.com
2. If you don't have an account, sign up free (use your Gmail)
3. In the left sidebar, click **"Workers & Pages"**
4. Click **"Create application"** → **"Pages"** tab → **"Connect to Git"**
5. Click **"Connect GitHub"**
6. A GitHub window opens — click **"Authorize Cloudflare Pages"**
7. Select your repository: `cssadewale-portfolio` (or whatever you named it)
8. Click **"Begin setup"**

### Step 5 — Configure the Deployment
On the "Set up builds and deployments" screen:
- **Project name:** `cssadewale` (this becomes your URL: cssadewale.pages.dev)
- **Production branch:** `main`
- **Framework preset:** `None`
- **Build command:** *(leave completely empty)*
- **Build output directory:** *(leave completely empty)*
- **Root directory:** *(leave completely empty)*
- Click **"Save and Deploy"**

### Step 6 — Wait for Deployment
1. You'll see a progress bar — usually takes 30–90 seconds
2. When it says **"Success"** with a green checkmark, click the URL shown
3. Your site is now live! The URL will be: `cssadewale.pages.dev`

### Step 7 — (Optional) Custom Domain
If you want `www.cssadewale.com` instead of `cssadewale.pages.dev`:
1. In your Cloudflare Pages project, click **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter your domain name
4. Follow the DNS instructions Cloudflare gives you

### Step 8 — Future Updates (Making Changes)
Every time you update any file:
1. Edit the file on your computer
2. Upload it to GitHub (using web interface or GitHub Desktop)
3. Cloudflare automatically detects the change and redeploys
4. New version is live in about 60 seconds

---

## PART 2B: DEPLOY TO GITHUB PAGES (Alternative — Free)

### Step 1 — Complete Steps 1–3 from Part 2A (Create repo and upload files)

### Step 2 — Enable GitHub Pages
1. On your GitHub repository page, click **"Settings"** (top tab)
2. In the left sidebar, scroll down and click **"Pages"**
3. Under "Source", select **"Deploy from a branch"**
4. Branch: **main** | Folder: **/ (root)**
5. Click **"Save"**

### Step 3 — Access Your Site
- GitHub will show a banner: "Your site is published at..."
- URL format: `https://cssadewale.github.io/portfolio/`
- Note: Takes 2–5 minutes to go live the first time

### Difference from Cloudflare Pages:
- GitHub Pages URL has your repo name in it (unless the repo is named exactly `cssadewale.github.io`)
- To get `cssadewale.github.io` as the URL: rename your repo to `cssadewale.github.io`

---

## PART 2C: DEPLOY TO VERCEL (Alternative — Free)

1. Go to https://vercel.com → Sign up with GitHub
2. Click **"Add New Project"**
3. Select your GitHub repository
4. Framework Preset: **Other**
5. Leave all build settings empty
6. Click **"Deploy"**
7. Live at: `your-project.vercel.app`

---

## PART 3: TESTING YOUR LIVE SITE

After deployment, test these things:
- [ ] Homepage loads correctly at your URL
- [ ] Navigation links work (About, Projects, Journey, CV, Contact)
- [ ] Mobile menu opens/closes (view on phone or use browser dev tools)
- [ ] Profile photo shows (if you added `profile.jpg`)
- [ ] Photo upload modal works (click the ✏️ icon)
- [ ] Stat numbers count up when you scroll to the stats bar
- [ ] Contact form submits (sends you an email from Formspree)
- [ ] Printable CV opens: `your-url/assets/docs/cv-datascientist.html`
- [ ] Educator CV opens: `your-url/assets/docs/cv-educator.html`
- [ ] Ctrl+P on CV pages produces a clean printed layout

---

## PART 4: SHARING YOUR PORTFOLIO

Once live, share it like this:

**On LinkedIn:**
> I've just updated my portfolio: https://cssadewale.pages.dev — featuring 34 deployed projects across EdTech, DataTech, and FaithTech domains.

**Email signature:**
> Portfolio: https://cssadewale.pages.dev | GitHub: github.com/cssadewale

**CV header:**
> cssadewale.pages.dev

**WhatsApp bio:**
> AI-Augmented Solutions Developer | cssadewale.pages.dev

---

## TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Site shows old version | Clear browser cache (Ctrl+Shift+R) or wait 2 minutes |
| Photo not showing | Check filename is exactly `profile.jpg`, check it's in `assets/images/` |
| Contact form not working | Make sure you replaced `your-form-id` with your real Formspree ID |
| Links broken | Check that all files are in the correct folder structure |
| Mobile menu not working | Make sure `assets/js/main.js` was uploaded |
| Styles not loading | Make sure `assets/css/style.css` was uploaded |

---

## SUPPORT

WhatsApp: +234 810 086 6322  
Email: adeagboadewalesamson@gmail.com

*Last updated: June 2026*
