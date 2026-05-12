# Living Cost Atlas — Claude Context

> Auto-loaded by Claude Code at session start. No copy-paste needed.

**Site:** https://www.livingcostatlas.com — static SPA, Vercel, zero backend.
**Stack:** Vanilla JS + Vite 5, Python 3.12 + ReportLab 4 for PDFs, Stripe Checkout links.
**Deploy:** push to `main` → Vercel auto-deploys in ~12s.

---

## Critical constraint

**All `.js` source files must be ASCII-only.** Vite/Rollup on Vercel's Linux runtime fails
in 1-3s with `Failed to parse source for import analysis` if any `.js` contains non-ASCII
(emojis, accented chars, curly quotes). Use HTML entities: `&#x1F30D;` for 🌍, `e` for `é`, etc.

---

## The three data files (single sources of truth)

| File | What it owns | When to touch |
|---|---|---|
| `src/data/cityDB.js` | Hard numbers for 50 cities (costs, visa, infra, safety) | Adding any city to the free catalog |
| `src/data/ebookCatalog.js` | 13 paid products: price, Stripe link, PDF path, cover image | Changing price, Stripe link, or adding a 14th ebook |
| `scripts/data/cityIntel.js` | Rich editorial for the 13 ebook cities (prose, neighborhoods, pros/cons) | Editing ebook content or adding a 14th city's editorial |
| `scripts/data/lcaCityMeta.cjs` | PDF overrides: accent color, infra notes, transport/utility line items | Tweaking PDF output or adding a 14th city's PDF data |

> `cityDB.js` accommodation costs are **daily nightly-rate equivalents**, not monthly rent.
> The bridge applies `× 30 × 0.55` (RENT_CAL = 0.55) to convert to realistic long-term rent.

---

## PDF generation pipeline

```
node scripts/generate-lca-report.cjs <slug>           # full 25-page PDF
node scripts/generate-lca-report.cjs <slug> --preview # 5-page preview
```

Output paths:
- Full: `public/ebooks/LivingCostAtlas_{City}_2026.pdf`
- Preview: `public/ebooks/preview/LivingCostAtlas_{City}_Preview.pdf`
- Cover PNG: `public/images/ebooks/{slug}-cover-v2.png`

Cover PNG generation (after PDF is built):
```python
import pypdfium2 as pdfium; from PIL import Image
pdf = pdfium.PdfDocument('public/ebooks/LivingCostAtlas_{City}_2026.pdf')
pdf[0].render(scale=2.0).to_pil().resize((600,850),Image.LANCZOS).convert('RGB').save('public/images/ebooks/{slug}-cover-v2.png','PNG',optimize=True)
```

The 13 active slugs: `lisbon bangkok mexico-city dubai amsterdam bali barcelona berlin chiang-mai medellin paris prague tokyo`

---

## How to add a FREE city (cityDB only)

User provides: city name, country, continent, lat/lng, approximate costs (rent center/suburb
per day, food budget/standard/premium per day, monthly transport, monthly coworking), visa type,
infra scores (transport/health/english/airport out of 100), safety index, avg wifi (Mbps), tags.

**Touch only:** `src/data/cityDB.js` — copy any existing entry as template.
Then: `npm run build` smoke test → commit → push.

---

## How to add a PAID ebook (14th city)

User provides the following. If any field is missing, ask for it before starting.

### Mandatory from user
1. **City name + slug** (e.g. `singapore`, `Singapore`)
2. **Country**
3. **Accent color** — hex that evokes the city for the PDF cover (e.g. `#E63946`)
4. **Stripe payment link** — user creates at stripe.com → Products → Payment Links, EUR 4.99
   Success URL: `https://www.livingcostatlas.com/ebook/{slug}/success`

### Editorial (for `cityIntel.js`)
5. **5 neighborhoods**: name, character description, one-liner, bestFor, rentRatio vs average
6. **4 peer cities** (slugs already in cityDB) for the comparison section
7. **Executive summary** (3 paragraphs of opening narrative)
8. **Cuisine notes** (1 paragraph), **culture notes** (1 paragraph)
9. **6 risks** (title + level HIGH/MED/LOW + 2-sentence assessment)
10. **Who should move**: paragraph each for remoteWorker, digitalNomad, family, retiree, entrepreneur
11. **8 pros** (title + 1-sentence detail), **8 cons** (title + 1-sentence detail)
12. **Verdict paragraphs**: nomads, families, founders (1 paragraph each)
13. **Closing statement** (1-2 sentences)
14. **QoL scores** (0-100 each): costOfLiving, internetSpeed, safety, healthcare, nightlife, expat, outdoors — each with a 1-line note

### Numbers (for `lcaCityMeta.cjs`)
15. **Facts**: population city, population metro, official language, timezone, climate type, sunshine hours/year, visa options summary, healthcare quality summary, avg local salary (USD)
16. **Internet**: provider name, monthly cost EUR
17. **Mobile**: provider, 20GB plan cost, unlimited plan cost
18. **Transport**: monthly pass name + cost, Uber/ride per trip, monthly car total estimate, bike rental, airport transfer, intercity bus/train
19. **Utilities**: electricity, gas, water, condo fee, total (EUR/month)
20. **Coworking**: 2-3 cowork space names
21. **Gym**: budget chain cost, boutique cost
22. **Entertainment**: cinema ticket, streaming total, monthly leisure budget
23. **Insurance**: basic health plan, international plan (EUR/month)
24. **School**: annual international school fee, monthly equiv, 2-3 school names
25. **Infra notes** (required, 8 categories): startup_ecosystem, banking, tax_env, visa_options, office_market, transit_system, healthcare_sys, intl_schools

### Steps once data is collected
```bash
# 1. Add cityDB entry (if not already present)
#    → src/data/cityDB.js

# 2. Add editorial entry
#    → scripts/data/cityIntel.js  (use Lisbon as template, line ~921)

# 3. Add PDF meta overrides + accent color
#    → scripts/data/lcaCityMeta.cjs  (use Lisbon as template, line ~92)

# 4. Add to ebook catalog
#    → src/data/ebookCatalog.js  (one entry + add slug to EBOOK_LIST)

# 5. Generate PDFs
node scripts/generate-lca-report.cjs {slug}
node scripts/generate-lca-report.cjs {slug} --preview

# 6. Generate cover PNG
python -c "import pypdfium2 as pdfium; from PIL import Image; pdf=pdfium.PdfDocument('public/ebooks/LivingCostAtlas_{City}_2026.pdf'); pdf[0].render(scale=2.0).to_pil().resize((600,850),Image.LANCZOS).convert('RGB').save('public/images/ebooks/{slug}-cover-v2.png','PNG',optimize=True)"

# 7. Add to public/sitemap.xml (two entries: /ebook/{slug} and /city/{slug})

# 8. npm run build  →  commit  →  push
```

---

## Common operations

| Task | What to change |
|---|---|
| Change ebook price | `PRICE` constant in `src/data/ebookCatalog.js`, then regenerate all 13 previews |
| Update a Stripe link | `stripeLink` in `src/data/ebookCatalog.js` only |
| Edit ebook prose | `scripts/data/cityIntel.js`, then `node scripts/generate-lca-report.cjs {slug}` |
| Change a city's accent color | `ACCENTS` map in `scripts/data/lcaCityMeta.cjs` (~line 730), then regenerate PDF + cover PNG |
| Fix Vercel build (fails in 1-3s) | Non-ASCII in a `.js` file — run the python scanner in `docs/COOKBOOK.md` |
| Bust CDN cache on a static asset | Rename the file (e.g. `cover-v2.png` → `cover-v3.png`), update all references in `src/` |

Full recipes: `docs/COOKBOOK.md`. Architecture deep-dive: `docs/ARCHITECTURE.md`.

---

## ebookCatalog.js entry shape (reference)

```js
'{slug}': entry('{slug}', '{City}', '{Country}', {
  pages: 25,
  nomadScore: 82,   // digitalNomad.overallScore from cityDB
  safety: 78,       // safety.safetyIndex from cityDB
  avgRent: 1400,    // realistic monthly rent (center, long-term)
  wifi: 120,        // Mbps
  stripeLink: 'https://buy.stripe.com/...',
}),
```

Cover image auto-resolved from `public/images/ebooks/{slug}-cover-v2.png`.

---

## Repo layout (essential paths only)

```
src/data/cityDB.js           50-city numbers dataset
src/data/ebookCatalog.js     13 paid products (price, Stripe, PDF paths)
src/pages/                   one file per route
src/layouts/MainLayout.js    nav + footer + cookie banner
scripts/generate-lca-report.cjs   Node bridge: builds JSON payload → spawns Python
scripts/lca_report_engine.py      ReportLab PDF engine
scripts/data/cityIntel.js         editorial prose for 13 cities
scripts/data/lcaCityMeta.cjs      per-city PDF overrides + accent colors
public/ebooks/               13 full PDFs + preview/ subfolder
public/images/ebooks/        13 cover PNGs (*-cover-v2.png)
public/sitemap.xml
docs/ARCHITECTURE.md
docs/COOKBOOK.md
```
