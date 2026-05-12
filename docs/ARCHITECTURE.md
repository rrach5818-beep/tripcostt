# Architecture

This doc explains how the project is wired. After reading it, you should be able to find any feature in under 60 seconds.

---

## 1. Bird's-eye view

```
                  ┌────────────────────────────┐
   User (browser) │   livingcostatlas.com      │
                  │   (Vercel CDN, static)     │
                  └─────────────┬──────────────┘
                                │
                  Vite-bundled SPA loads index.html
                                │
                ┌───────────────┴───────────────┐
                ▼                               ▼
       [page modules]                  [static PDF/PNG assets]
        src/pages/*.js                  public/ebooks/*.pdf
                                        public/images/ebooks/*.png

                Catalog data is bundled in JS:
                src/data/cityDB.js       (50 cities, costs/visa/infra)
                src/data/ebookCatalog.js (13 paid products)
```

PDFs are NOT generated on the fly. They live as static files in `public/ebooks/` and are pre-built locally by a Python script before each release.

```
   Edit cityIntel.js          ──→  node scripts/generate-lca-report.cjs lisbon
   (rich editorial content)                      │
                                                 ▼
                                  Builds JSON payload + spawns Python:
                                  scripts/lca_report_engine.py
                                                 │
                                                 ▼
                                  public/ebooks/LivingCostAtlas_Lisbon_2026.pdf
                                                 │
                                  git commit + push to main → Vercel auto-deploy
```

---

## 2. Routing (SPA)

`src/main.js` bootstraps the app and registers routes from `src/router/routes.js`. The router is a small custom hash-pushState handler — no `react-router` or similar.

| Path | File | What it does |
|---|---|---|
| `/` | `HomePage.js` | Hero, profiles, map, top cities, CTA |
| `/destinations` | `DestinationsPage.js` | Grid of all 50 cities with filters |
| `/city/:slug` | `CityPage.js` | Single city deep page (costs, FAQ, eBook promo) |
| `/calculator` | `CalculatorPage.js` | City-vs-city comparison tool |
| `/compare/:cities` | `CityComparisonPage.js` | Shareable comparison URL |
| `/nomad` | `NomadPage.js` | Top digital nomad city rankings |
| `/best-cities` | `BestCitiesHubPage.js` | SEO hub for "Best Cities for X" |
| `/best-cities/:country` | `BestCitiesPage.js` | Per-country city ranking |
| `/best-countries` | `BestCountriesPage.js` | Top country rankings |
| `/ebooks` | `EbooksPage.js` | Catalog grid of the 13 paid guides |
| `/ebook/:slug` | `EbookPage.js` | Single eBook landing (cover, Stripe CTA, preview) |
| `/ebook/:slug/success` | `EbookSuccessPage.js` | Post-Stripe download page |
| `/resources` | `ResourcesPage.js` | Free PDFs + research links |
| `/about` | `AboutPage.js` | About / mission |
| `/privacy`, `/terms`, `/legal` | static legal pages |

Each page module exports a function `(params) => htmlString` that returns markup wrapped by `MainLayout`.

**404 fallback:** unknown paths render a "Page not found" stub via `src/router/index.js`.

---

## 3. Data architecture

There are **three datasets** and a clear separation of concerns:

### 3.1 `src/data/cityDB.js`
Hard numbers for **50 cities**. Each entry has:

```js
{
  id, slug, name, country, countryCode, continent,
  currency, currencySymbol,
  lat, lng,                        // for the map
  image,                           // hero/listing photo URL
  description,
  costs: {
    accommodation: { center, suburb },   // nightly-rate equivalent
    food: { budget, standard, premium }, // per-day food costs
    transport, coworking                  // monthly
  },
  visa: { type, remoteFriendly, stayDurationMonths, processingTimeDays, minIncomeRequirement },
  tax: { personalIncomeTaxTopRate, corporateTax, capitalGainsTax },
  infrastructure: { publicTransportQuality, healthcareQuality, englishProficiency, airportConnectivity },
  safety: { safetyIndex, crimeLevel },
  macro: { inflationRate, currencyStability, rentVolatilityIndex },
  digitalNomad: { overallScore, wifiSpeed, coworkingCost, safetyScore },
  tags, lastUpdated
}
```

> **Rent unit gotcha:** `accommodation.center` is a *daily nightly-rate equivalent*, NOT a long-term monthly rent. The PDF generator applies a 0.55 calibration coefficient (`meta.rentCalibration ?? 0.55`) to convert to realistic long-term rent. Display the raw `× 30` only for the "daily comfort cost" framing.

### 3.2 `src/data/ebookCatalog.js`
**Single source of truth** for the 13 paid eBook products. Used by `EbookPage`, `EbooksPage`, `EbookSuccessPage`. Contains: slug, city, country, price, pages, nomadScore, safety, avgRent, wifi, pdfPath, previewPath, coverImage, stripeLink.

> If you change the price or a Stripe link, this is the only file to touch on the frontend.

### 3.3 `scripts/data/cityIntel.js`
Hand-authored **rich editorial** for the 13 cities that have a paid eBook. Each entry:

```js
{
  neighborhoods: [5 districts with name, rentRatio, character, oneLineDesc, bestFor],
  peerCities:    [4 slugs + rationale],
  execSummary:   [3 paragraphs of opening narrative],
  cuisineNotes:  string,
  cultureNotes:  string,
  risks:         [6 risk vectors with level + assessment],
  whoShouldMove: { remoteWorker, digitalNomad, family, retiree, entrepreneur },
  prosCons:      { pros: [[title, detail], ...], cons: [...] },
  verdictParagraphs: { nomads, families, founders },
  closingStatement: string,
  qolScores: { 7 dimensions with score + note }
}
```

This file is the most editorial-heavy. To add a 14th city, this is where you write the bulk of the prose.

### 3.4 `scripts/data/lcaCityMeta.cjs`
Per-city **PDF-engine overrides**: accent color, infra category scores + notes, index rationales, verdict recommendations, formatted utility/transport line items, schools, etc. Compiles with the data above into the final PDF payload.

---

## 4. PDF generation pipeline

```
   slug arg
     │
     ▼
┌────────────────────────────────────────────────────────────┐
│ scripts/generate-lca-report.cjs   (Node, CommonJS)         │
│                                                            │
│  1. loadCityDB()      ← evals src/data/cityDB.js          │
│  2. loadCityIntel()   ← requires scripts/data/cityIntel.js│
│  3. loadMeta()        ← requires scripts/data/lcaCityMeta │
│  4. buildPayload(slug) → composes a ~100-field CITY dict  │
│  5. fs.writeFileSync(.tmp/lca-{slug}.json, payload)       │
│  6. spawnSync(python, [engine], env={LCA_CITY_PAYLOAD,    │
│                                       LCA_OUTPUT_PATH,    │
│                                       LCA_PREVIEW_MODE?}) │
└────────────────────────────┬───────────────────────────────┘
                             │
                             ▼
┌────────────────────────────────────────────────────────────┐
│ scripts/lca_report_engine.py   (Python 3.12 + ReportLab)   │
│                                                            │
│  - reads CITY dict from JSON pointed by LCA_CITY_PAYLOAD   │
│  - builds a list of platypus flowables (story)            │
│  - if LCA_PREVIEW_MODE=1 → 5-page subset + CTA            │
│  - SimpleDocTemplate.build() writes to LCA_OUTPUT_PATH    │
└────────────────────────────────────────────────────────────┘
```

### Engine sections (full PDF, in order)

| # | Section | Function |
|---|---|---|
| 1 | Cover | `add_cover()` |
| - | Table of Contents | `add_toc()` |
| 2 | Quick Fact Sheet | `add_facts()` |
| 3 | Detailed Cost Breakdown | `add_costs()` |
| 4 | Monthly Budget Scenarios | `add_budgets()` |
| 5 | Neighborhood Analysis | `add_neighborhoods()` |
| 6 | Work Infrastructure | `add_infra()` |
| 7 | Quality of Life | `add_qol()` |
| 8 | City Comparison vs Peers | `add_comparison()` |
| 9 | Pros & Cons Synthesis | `add_pros_cons()` |
| 10 | Who Should Move | `add_who()` |
| 11 | Risk Factors | `add_risks()` |
| 12 | LCA Index Methodology | `add_methodology()` |
| 13 | Final Verdict | `add_verdict()` |

Plus `add_exec()` (Executive Summary, called between TOC and facts).

### Preview mode (`LCA_PREVIEW_MODE=1`)

Builds only: `add_cover()` + `add_exec()` + `add_preview_cta()`. Natural page count = 4-5 depending on `execSummary` length.

### Key engine helpers
- `tbl(data, widths, hdr_bg, ...)` — wrapped auto-height tables
- `gauge(score, label)` + `gauge_row(scores)` — circular score gauges (LCA Index)
- `section_hdr(text, num)` — section headers with gold rule
- `PS(name, **kw)` — paragraph style factory
- `cover_canvas(c, doc)` / `body_canvas(c, doc)` — page decoration (gold bands, accent stripes, watermarks)

### Brand colors (engine)

| Name | Value | Use |
|---|---|---|
| `NAVY` | `#1e1b4b` | Headers, tables, hero |
| `TEAL` | `#4f46e5` | Mid headings (despite the name, it's indigo) |
| `GOLD` | `#d4a843` | Accents, rules, score-high |
| `LT_TEAL` | `#c7d2fe` | Light cool tone |
| `accent` | per-city | Cover left bar + bottom stripe, preview CTA border |

Per-city accent colors live in `scripts/data/lcaCityMeta.cjs` (`ACCENTS` map).

---

## 5. Frontend structure

### `src/pages/`
One file per route. Returns an HTML string built with template literals. Convention: each page exports `PageNamePage(params)` and may also export `setupPageNameInteractivity()` for post-mount JS (e.g. Leaflet init, accordions).

### `src/components/`
Reusable UI pieces (Breadcrumb, NewsletterPopup, CookieConsent, ...).

### `src/layouts/MainLayout.js`
Wraps page content with header (nav), footer, cookie banner, structured-data tags.

### `src/logic/`
Pure functions: `setPageMeta()`, `injectSchema()`, `formatCurrency()`, `budgetCalculator()`, GA4 analytics wrappers, ranking helpers.

### `src/styles/`
- `tokens.css` — design tokens (colors, spacing, type scale)
- `components.css` — shared component styles
- `pages.css` — page-specific styles

---

## 6. Deployment

| Aspect | Value |
|---|---|
| Provider | Vercel |
| Production branch | `main` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Framework preset | `vite` |
| Root directory | `.` (project root) |
| Auto-deploy | on push to `main` |

`vercel.json` also defines:
- SPA fallback rewrite (`/(.*)` → `/index.html`)
- Security headers (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- CSP allowlist for `api.web3forms.com`, `*.tile.openstreetmap.org`, GA endpoints

**Known caveat:** the CDN ignores `?v=N` query strings for static-asset cache invalidation. To bust the CDN cache on a file that keeps the same path, rename it (e.g. `cover.png` → `cover-v2.png` and update references).

---

## 7. Design decisions worth knowing

1. **No backend on purpose.** Static + Stripe Checkout + Web3Forms = no servers to maintain, no database, no auth, ~$0/mo infra.

2. **Vanilla JS instead of React.** Bundle stays under 25 kB gzipped; render is faster than any React/Next equivalent for this scope.

3. **PDFs pre-built, not generated on demand.** Generating server-side per request would need a runtime (Python on Vercel = serverless function with cold starts + ReportLab in a Lambda layer). Pre-building is one-line tradeoff and the catalog rarely changes.

4. **Three datasets, three concerns.** `cityDB.js` = facts, `cityIntel.js` = prose, `lcaCityMeta.cjs` = PDF-formatting overrides. Mixing them would make any future migration painful.

5. **ASCII-only source.** Vite's import-analysis plugin on Linux rejects non-ASCII in `.js` files at parse time. We learned this the hard way (Apr 10 → Apr 28 build outage). Always use HTML entities for emojis (`&#x1F30D;`).

6. **Per-city accent color.** Single hex per city in `lcaCityMeta.cjs ACCENTS`. Used on the cover (left bar + horizontal stripes) AND the preview CTA border. Gives each ebook a distinct identity at thumbnail size.

7. **Rent calibration 0.55.** `cityDB.accommodation.center` is a daily nightly-rate equivalent. The PDF bridge multiplies by 30 × 0.55 = effective monthly long-term lease. Direct `× 30` (without 0.55) overstates real rent by ~2× and looks unprofessional.

8. **`Living Cost Atlas` suffix de-duplication.** `setPageMeta()` checks whether the caller-supplied title already contains the brand; only appends ` | Living Cost Atlas` if absent. Prevents the `"Title | Living Cost Atlas | Living Cost Atlas"` glitch.

---

## 8. Where to look when something breaks

| Symptom | Look here |
|---|---|
| Page renders blank | `src/router/index.js` (404 fallback) + browser console |
| Wrong city data | `src/data/cityDB.js` then `getCityBySlug()` in `cityService.js` |
| PDF looks wrong | `scripts/lca_report_engine.py` (specific `add_*` function) |
| Wrong price displayed | `src/data/ebookCatalog.js` (`PRICE` constant) |
| Wrong text in PDF (neighborhood, verdict, etc.) | `scripts/data/cityIntel.js` |
| PDF accent color off | `scripts/data/lcaCityMeta.cjs` (`ACCENTS` map) |
| Vercel build fails in 1-3s | Non-ASCII in a `.js` file — see [`COOKBOOK.md`](COOKBOOK.md) |
| OG image broken on share | `public/og-image.png` (regenerate with script in COOKBOOK) |
| Map markers missing | Leaflet init in `HomePage.setupHomeMapInteractivity()` |
| Stripe link 404 | `stripeLink` field in `ebookCatalog.js` — verify on Stripe dashboard |
