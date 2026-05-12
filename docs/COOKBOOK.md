# Cookbook

Recipes for the most common changes. Each recipe is a precise, copy-paste checklist.

If you're new to this project, read [`ARCHITECTURE.md`](ARCHITECTURE.md) first.

---

## Table of contents

- [Add a new city to the paid catalog](#add-a-new-city-to-the-paid-catalog)
- [Change the price of all eBooks](#change-the-price-of-all-ebooks)
- [Update Stripe payment links](#update-stripe-payment-links)
- [Regenerate one or all PDFs](#regenerate-one-or-all-pdfs)
- [Modify the PDF cover design](#modify-the-pdf-cover-design)
- [Edit a city's editorial content](#edit-a-citys-editorial-content)
- [Change a city's accent color](#change-a-citys-accent-color)
- [Add or remove a PDF section](#add-or-remove-a-pdf-section)
- [Update the OG/social-share image](#update-the-ogsocial-share-image)
- [Bust the CDN cache on a static asset](#bust-the-cdn-cache-on-a-static-asset)
- [Vercel build failed: standard checklist](#vercel-build-failed-standard-checklist)
- [Add a new page/route](#add-a-new-pageroute)
- [Update the cookie consent banner](#update-the-cookie-consent-banner)

---

## Add a new city to the paid catalog

You want to expand from 13 to 14+ paid eBooks. Roughly **3-4 hours** of work per city, mostly editorial.

### 1. Verify the city is in `cityDB.js`
```bash
grep '"slug":' src/data/cityDB.js | grep -i "your-city"
```
If absent, add a full cityDB entry first (see the existing 50 entries for the schema).

### 2. Add editorial content to `scripts/data/cityIntel.js`
Add a new entry inside the `CITY_INTEL` object. Use Lisbon (line ~921) as a template — copy its structure entirely:

- `neighborhoods` (5)
- `peerCities` (4)
- `execSummary` (3 paragraphs)
- `cuisineNotes`, `cultureNotes`
- `risks` (6)
- `whoShouldMove` (5 segments)
- `prosCons` (8 pros + 8 cons)
- `verdictParagraphs` (nomads / families / founders)
- `closingStatement`
- `qolScores` (7 dimensions)

Then add entries inside `SETUP_GUIDES`, `CITY_SCAMS`, `CITY_VISAS`, `NEIGHBORHOOD_PHOTOS` (search the existing structure).

### 3. Add PDF overrides to `scripts/data/lcaCityMeta.cjs`
Add an entry to the `CITIES` object. Use Lisbon (line ~92) as a template. Fields:

- `facts` (population, language, timezone, climate, visa, healthcare, salary)
- `internet`, `mobile`, `food`, `transport`, `utilities`, `cowork`, `gym`, `entertainment`, `insurance`, `school`
- `infraNotes` (8 categories) — **required**
- `infraScores`, `indexScores`, `indexRationale`, `verdicts`, `defaultNotes`

Also add the slug to the `ACCENTS` map with a hex color that evokes the city.

### 4. Create the Stripe product
- Go to dashboard.stripe.com → Products → Add product
- Name: `Living Cost Atlas — {City} 2026 Cost of Living Guide`
- Price: `EUR 4.99`
- Create a Payment Link with success URL `https://www.livingcostatlas.com/ebook/{slug}/success`
- Copy the `https://buy.stripe.com/...` URL

### 5. Add to `src/data/ebookCatalog.js`
```js
'new-slug': entry('new-slug', 'New City', 'Country', {
  pages: 22, nomadScore: 75, safety: 80, avgRent: 1500, wifi: 100,
  stripeLink: 'https://buy.stripe.com/XXX'
}),
```
Also add the slug to `EBOOK_LIST` for display order.

### 6. Generate PDFs
```bash
node scripts/generate-lca-report.cjs new-slug
node scripts/generate-lca-report.cjs new-slug --preview
```

### 7. Generate the cover PNG (for catalog thumbnails)
```bash
python -c "
import pypdfium2 as pdfium
from PIL import Image
pdf = pdfium.PdfDocument('public/ebooks/LivingCostAtlas_New_City_2026.pdf')
bitmap = pdf[0].render(scale=2.0).to_pil()
bitmap.resize((600, 850), Image.LANCZOS).convert('RGB').save('public/images/ebooks/new-slug-cover-v2.png', 'PNG', optimize=True)
"
```

### 8. Add to `public/sitemap.xml`
Two entries:
```xml
<url><loc>https://www.livingcostatlas.com/ebook/new-slug</loc></url>
```
(plus the matching `/city/new-slug` entry if not already present)

### 9. Build, commit, push
```bash
npm run build && rm -rf dist  # smoke test
git add -A
git commit -m "feat(ebooks): add new-slug to the paid catalog"
git push origin main
```

---

## Change the price of all eBooks

```bash
# 1. Edit the PRICE constant
sed -i "s/const PRICE = 4.99;/const PRICE = 7.99;/" src/data/ebookCatalog.js

# 2. Regenerate the 13 previews (price appears in the preview CTA box)
for slug in lisbon bangkok mexico-city dubai amsterdam bali barcelona berlin chiang-mai medellin paris prague tokyo; do
  node scripts/generate-lca-report.cjs $slug --preview
done

# 3. Update Stripe products to match (manually in Stripe dashboard).
#    Stripe is the source of truth at checkout; the JS price is only for display.

# 4. Commit + push
git add src/data/ebookCatalog.js public/ebooks/preview/
git commit -m "feat(pricing): drop ebook price 4.99 -> 7.99 EUR"
git push origin main
```

Full PDFs do NOT display the price (only the preview CTA does), so no need to regenerate them.

---

## Update Stripe payment links

Single source of truth: `src/data/ebookCatalog.js`. Find the city, replace its `stripeLink` URL, commit, push.

```bash
git add src/data/ebookCatalog.js
git commit -m "fix(pricing): update Stripe link for {city}"
git push origin main
```

No PDF regeneration needed — Stripe links only appear on the website.

---

## Regenerate one or all PDFs

### One city, full PDF
```bash
node scripts/generate-lca-report.cjs lisbon
# → public/ebooks/LivingCostAtlas_Lisbon_2026.pdf
```

### One city, 5-page preview
```bash
node scripts/generate-lca-report.cjs lisbon --preview
# → public/ebooks/preview/LivingCostAtlas_Lisbon_Preview.pdf
```

### All 13 cities, full + preview
```bash
for slug in lisbon bangkok mexico-city dubai amsterdam bali barcelona berlin chiang-mai medellin paris prague tokyo; do
  node scripts/generate-lca-report.cjs $slug
  node scripts/generate-lca-report.cjs $slug --preview
done
```

### Common errors

- **`PermissionError: [Errno 13]`** — the PDF is open in a viewer (Adobe etc.). Close it and retry.
- **`City "X" missing in cityIntel.js`** — add the entry per the "Add a new city" recipe.
- **`Failed to import`** — usually a syntax error in `cityIntel.js`. Check `node -c scripts/data/cityIntel.js`.

---

## Modify the PDF cover design

The cover is drawn by `cover_canvas(c, doc)` in `scripts/lca_report_engine.py` (around line 195). Key levers:

- `NAVY`, `GOLD`, `accent` colors — modify the constants block
- Left accent bar width — `c.rect(0, 0, 14*mm, PAGE_H, ...)`
- Top/bottom stripes — `c.rect(0, ..., PAGE_W, 3.5*mm, ...)`
- Watermark — `c.drawString(PAGE_W*0.26, 12*mm, "LCA")` with `Helvetica-Bold` size 180
- Title typography — see `add_cover()` for the text layout

After editing:

```bash
# Smoke test on Lisbon, render the cover
node scripts/generate-lca-report.cjs lisbon
python -c "
import pypdfium2 as pdfium
pdf = pdfium.PdfDocument('public/ebooks/LivingCostAtlas_Lisbon_2026.pdf')
pdf[0].render(scale=1.0).to_pil().save('public/ebooks/_check_cover.png')
"
# Inspect _check_cover.png, iterate, then regenerate all 13 + their PNG covers.
```

---

## Edit a city's editorial content

All editorial prose for the 13 cities lives in `scripts/data/cityIntel.js`. Modify the relevant field, then:

```bash
node scripts/generate-lca-report.cjs <slug>
node scripts/generate-lca-report.cjs <slug> --preview
```

Then commit the updated `cityIntel.js` + the two regenerated PDFs.

**Quality bar:** keep ASCII-only (no `é`, `–`, `'`, `"`, etc.). Use `--` for em-dashes and straight quotes `'` and `"`. Vite/Rollup will reject UTF-8 special chars on Vercel.

---

## Change a city's accent color

Edit `scripts/data/lcaCityMeta.cjs`, find the `ACCENTS` map (around line 730), change the hex for that slug. Then:

```bash
node scripts/generate-lca-report.cjs <slug>
node scripts/generate-lca-report.cjs <slug> --preview

# Regenerate the PNG cover thumbnail too
python -c "
import pypdfium2 as pdfium
from PIL import Image
city_file = 'Tokyo'   # adjust
slug = 'tokyo'
pdf = pdfium.PdfDocument(f'public/ebooks/LivingCostAtlas_{city_file}_2026.pdf')
bitmap = pdf[0].render(scale=2.0).to_pil()
bitmap.resize((600, 850), Image.LANCZOS).convert('RGB').save(f'public/images/ebooks/{slug}-cover-v2.png', 'PNG', optimize=True)
"
```

**Tip:** if the accent looks too dark/muted on the navy background, bump saturation and/or brightness. Verify by rendering at 1.0 scale (not 2.0) which approximates the catalog-thumbnail size.

---

## Add or remove a PDF section

Edit the `# ── RUN ───` block near the bottom of `scripts/lca_report_engine.py` (around line 1130). To add a new section:

1. Write a new function `add_my_section()` following the pattern of `add_facts()`, `add_costs()`, etc. Use `tbl()` for tables and `section_hdr()` for the header.
2. Add `add_my_section()` to the runlist.
3. Update the TOC in `add_toc()` (line ~264) — add a row with the title and starting page.
4. Regenerate all 13 PDFs.

To remove a section: comment out the call in the runlist, regenerate.

---

## Update the OG/social-share image

`public/og-image.png` (1200×630) is loaded by every share. To redesign:

```bash
python << 'PY'
from PIL import Image, ImageDraw, ImageFont
import os

NAVY = (30, 27, 75); NAVY_DARK = (20, 18, 58)
GOLD = (212, 168, 67); WHITE = (255, 255, 255)
INDIGO = (79, 70, 229); LT_INDIGO = (199, 210, 254)
WATERMARK = (42, 37, 112)

W, H = 1200, 630
img = Image.new('RGB', (W, H), NAVY)
d = ImageDraw.Draw(img)

# ... your design here ...

img.save('public/og-image.png', 'PNG', optimize=True)
PY
```

Test the result via https://www.opengraph.xyz/ after deploying.

---

## Bust the CDN cache on a static asset

Vercel's CDN edge ignores `?v=N` query strings for cache invalidation. The reliable fix is to **rename the file**:

```bash
# Example: cover.png is stale on the CDN
mv public/images/ebooks/bangkok-cover.png public/images/ebooks/bangkok-cover-v3.png

# Update every reference in src/
grep -rln "bangkok-cover-v2.png" src/ | xargs sed -i "s/bangkok-cover-v2.png/bangkok-cover-v3.png/g"

# Commit + push
git add -A
git commit -m "fix: bust CDN cache by renaming bangkok-cover.png"
git push origin main
```

---

## Vercel build failed: standard checklist

Symptom: deployment errors in **1-3 seconds** with `Failed to parse source for import analysis`.

```bash
# 1. Local build must work
npm run build

# 2. If local works but Vercel fails → almost certainly non-ASCII in a .js file
python << 'PY'
import os, sys
sys.stdout.reconfigure(encoding='utf-8')
for root, dirs, files in os.walk('src'):
    if 'node_modules' in root: continue
    for fn in files:
        if not fn.endswith('.js'): continue
        p = os.path.join(root, fn)
        with open(p, encoding='utf-8') as f: c = f.read()
        bad = [(i, ch) for i, ch in enumerate(c) if ord(ch) > 127]
        if bad:
            print(f'{p}: {len(bad)} non-ASCII -- first at offset {bad[0][0]}: {bad[0][1]!r}')
PY
```

For each flagged file: replace emojis with HTML entities (e.g. 🌍 → `&#x1F30D;`), accented chars with ASCII equivalents (`é` → `e`), curly quotes with straight (`'` → `'`), em-dashes with `--`.

If the build still fails after that, click the failed deployment in the Vercel dashboard → "Build Logs" tab and read the actual error.

---

## Add a new page/route

1. Create `src/pages/MyNewPage.js` that exports:
   ```js
   export function MyNewPage(params) {
     setPageMeta({ title: 'My Page', description: '...' });
     return MainLayout('<section>...</section>');
   }
   ```
2. Register the route in `src/router/routes.js`:
   ```js
   const pages = {
     ...
     myNew: lazy(() => import('../pages/MyNewPage.js')),
   };
   export const routes = [
     ...
     { path: '/my-new', component: async (p) => (await pages.myNew.load()).MyNewPage(p) },
   ];
   ```
3. Add a nav link if visible in `src/layouts/MainLayout.js`.
4. Add to `public/sitemap.xml` for SEO indexing.

---

## Update the cookie consent banner

The banner lives in `src/components/CookieConsent.js`. It writes to `localStorage.lca_cookie_consent` and is mounted by `MainLayout.js`. To customize:

- Wording — edit the HTML template inside `CookieConsent.js`
- Show/hide logic — `localStorage` key check at the top of the component
- Categories (analytics, etc.) — add toggles in the banner + check them in `src/logic/analytics.js` before calling `gtag()`

Test by clearing `localStorage` in the browser devtools and reloading — the banner should reappear.
