# Boutique Capital Partners — website

A static, multi-page marketing site. No build step, no framework — just HTML, the
design-system stylesheet/bundle, and a few Babel-rendered React section files.

## Deploy to Vercel

1. Push this repo to GitHub (or upload the zip and create a repo from it).
2. In Vercel → **Add New… → Project → Import** the repo.
3. Framework preset: **Other** (it's a static site). Leave **Build Command** empty
   and **Output Directory** as the repo root (the defaults work — zero config).
4. **Deploy.** `/` serves `index.html`; the other pages are at `/river-road.html`,
   `/fund-documents.html`, `/meet-the-team.html`, `/insights.html`, `/puffin.html`.

`vercel.json` only sets long-cache headers on `/assets/*`. `.vercelignore` keeps the
design-system authoring folders and research captures out of the deployment.

## Pages

| URL | File | What it is |
|---|---|---|
| `/` | `index.html` | Homepage (selectivity-led) |
| `/river-road.html` | `river-road.html` | River Road fund page |
| `/fund-documents.html` | `fund-documents.html` | Fund information & document centre (pro-investor gated) |
| `/meet-the-team.html` | `meet-the-team.html` | Who we are |
| `/insights.html` | `insights.html` | Insights hub |
| `/puffin.html` | `puffin.html` | Atlantic Puffin partnership |

Each page loads `styles.css` + `_ds_bundle.js` (the design system), its own
`*-sections.jsx` (Babel-compiled in the browser), and `site-polish.js` (shared
scroll/motion layer). All assets live in `assets/`.

> Note: React/Babel run in the browser via CDN (fine for a marketing site). If you
> later want a production build (pre-compiled, no CDN, no in-browser Babel), that's a
> straightforward next step — ask and it can be set up with Vite.

## Local preview

Any static server from the repo root, e.g. `npx serve .` then open the printed URL.
Opening the files directly via `file://` also works.
