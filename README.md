# Living Cost Atlas

> Cost-of-living calculator + premium relocation guides for digital nomads, remote workers and expats.

**Live site:** https://www.livingcostatlas.com
**Production branch:** `main`
**Hosting:** Vercel (auto-deploy on push to `main`)

---

## What this is

A static SPA serving:

1. **Free tools** — cost calculator (50+ cities), city comparison, nomad/country rankings, interactive map
2. **Paid eBooks** — 13 premium 25-page PDF relocation guides (EUR 4.99 each via Stripe)

The site has zero backend. Everything is pre-built at deploy time. PDFs are generated locally by a Python/ReportLab pipeline and committed to the repo as static assets.

---

## Tech stack

| Layer | Choice |
|---|---|
| **Frontend** | Vanilla JavaScript (ES modules) — no React, no JSX, no framework |
| **Build** | Vite 5 |
| **Styles** | Plain CSS (in `src/styles/`) + inline styles in templates |
| **Routing** | Custom SPA router (`src/router/`) |
| **Maps** | Leaflet (only the map component, lazy-loaded) |
| **PDF engine** | Python 3.12 + ReportLab 4 (`scripts/lca_report_engine.py`) |
| **Hosting** | Vercel (static) |
| **Payments** | Stripe Checkout links (no Stripe SDK in code) |
| **Analytics** | GA4 (gtag) |
| **Forms** | Web3Forms (newsletter capture) |

**Important constraint:** all `.js` source files are **ASCII-only**. Vite/Rollup on Vercel's Linux runtime rejects non-ASCII characters (emojis, accented chars) at the import-analysis stage and the build fails in 1-3 seconds with `Failed to parse source for import analysis`. Use HTML entities (`&#x1F30D;`) for emojis in templates.

---

## Quick start

```bash
# 1. Install Node deps
npm install

# 2. Run dev server (http://localhost:3000)
npm run dev

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```

For the PDF pipeline, you also need Python 3.12 + ReportLab:

```bash
# Windows
winget install --id Python.Python.3.12 -e --scope user
python -m pip install reportlab pypdfium2 Pillow
```

---

## Most common tasks

```bash
# Generate the full 25-page PDF for one city
node scripts/generate-lca-report.cjs lisbon

# Generate the 5-page preview (the one linked from /ebook/lisbon)
node scripts/generate-lca-report.cjs lisbon --preview

# Regenerate ALL 13 PDFs (full + preview)
for slug in lisbon bangkok mexico-city dubai amsterdam bali barcelona berlin chiang-mai medellin paris prague tokyo; do
  node scripts/generate-lca-report.cjs $slug
  node scripts/generate-lca-report.cjs $slug --preview
done
```

Common modifications:

- **Change a price:** edit `PRICE` in `src/data/ebookCatalog.js`, then regenerate previews
- **Update a Stripe link:** edit `stripeLink` for the city in `src/data/ebookCatalog.js`
- **Edit eBook editorial content** (neighborhoods, pros/cons, verdicts...): `scripts/data/cityIntel.js`
- **Tweak PDF design** (colors, layout, sections): `scripts/lca_report_engine.py`

Detailed how-tos are in [`docs/COOKBOOK.md`](docs/COOKBOOK.md).

---

## Documentation

| Doc | What's in it |
|---|---|
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Project structure, data flow, key files, design decisions |
| [`docs/COOKBOOK.md`](docs/COOKBOOK.md) | Recipes for common changes (add city, change price, fix build, etc.) |

---

## Brand constants

| Token | Value | Where |
|---|---|---|
| Brand navy | `#1e1b4b` | All UI + PDF |
| Brand gold | `#d4a843` | Accents, CTAs |
| Brand indigo | `#4f46e5` | Secondary |
| Light indigo | `#c7d2fe` | Cool light tone |
| Font family | Helvetica / Arial (system) | Web + PDF |
| Logo file | `public/favicon.svg` | Browser tab |
| OG image | `public/og-image.png` (1200x630) | Social shares |

---

## Repository layout

```
tripcostt/
├── README.md                      ← you are here
├── docs/                          ← architecture + cookbook
├── index.html                     ← Vite entry point
├── package.json
├── vercel.json                    ← deploy config
├── vite.config.js
├── public/                        ← static assets served as-is
│   ├── ebooks/                    ← 13 full PDFs + preview/ subfolder
│   ├── images/ebooks/             ← 13 cover PNGs
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/                           ← frontend application
│   ├── data/                      ← cityDB + ebookCatalog + service layers
│   ├── pages/                     ← route components (one per route)
│   ├── components/                ← reusable UI components
│   ├── layouts/                   ← MainLayout (nav + footer wrapper)
│   ├── router/                    ← custom SPA router
│   ├── logic/                     ← page meta, analytics, budget calc
│   └── styles/
└── scripts/                       ← PDF generation pipeline (Python + Node)
    ├── lca_report_engine.py       ← the ReportLab PDF engine
    ├── generate-lca-report.cjs    ← Node bridge: builds payload + invokes Python
    └── data/
        ├── cityIntel.js           ← rich editorial content (neighborhoods, pros/cons, ...)
        └── lcaCityMeta.cjs        ← per-city PDF overrides (accents, infra notes, ...)
```

---

## Deployment

Vercel auto-deploys on every push to `main`. Build takes ~12 seconds.

If a build errors, see [`docs/COOKBOOK.md`](docs/COOKBOOK.md) section **"Vercel build failed"** for the standard checklist (most common cause: non-ASCII character in a `.js` source file).

---

## License & ownership

Proprietary. Contact the maintainer before reusing code or content.
