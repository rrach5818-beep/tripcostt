---
name: city-ebook
description: >
  Generate a premium multi-page PDF relocation eBook for any city in the Living Cost Atlas database,
  plus a matching cover image. Use this skill whenever the user asks to create an ebook, generate a
  PDF guide, build a city report, or make a relocation guide for a city. Also triggers when the user
  wants to add a new city to the ebook catalog, produce a downloadable city guide, or says things like
  "generate the ebook for barcelona", "create a PDF for bangkok", "add tokyo to the ebooks".
---

# City eBook Generator

Generate a premium Living Cost Atlas relocation intelligence PDF for any city, plus a cover image and landing page catalog entry.

## What this skill produces

1. **Cover image** (PNG, 600x850) at `public/images/ebooks/{slug}-cover.png`
2. **Full PDF eBook** (A4, ~20-28 pages) at `public/ebooks/LivingCostAtlas_{City}_2026.pdf`
3. **Updated EbookPage catalog** in `src/pages/EbookPage.js` so the landing page works at `/ebook/{slug}`

## How to use

### Step 1: Identify the city

The user provides a city slug (e.g. "barcelona", "bangkok"). Verify it exists in the database:

```js
import { getCityBySlug } from './src/data/cityService.js';
const city = getCityBySlug('barcelona');
```

If the city doesn't exist, tell the user and list available slugs.

### Step 2: Generate the cover image

Run the parametrized cover generator:

```bash
node scripts/generate-city-cover.js <slug>
```

This creates `public/images/ebooks/{slug}-cover.png`.

If this script doesn't exist yet, create it by reading `scripts/generate-cover-image.js` as a reference and parametrizing it for any city. The key things to change per city: the city name, country name, and the output path. Keep the exact same design: gold top bar, navy background, diagonal gold stripe, "LCA" watermark.

### Step 3: Generate the PDF

Run the parametrized PDF generator:

```bash
node scripts/generate-city-ebook.js <slug>
```

This creates `public/ebooks/LivingCostAtlas_{City}_2026.pdf`.

If this script doesn't exist yet, **create it** based on `scripts/generate-lisbon-ebook.js`. This is the most important step. Read the Lisbon script carefully and parametrize it. Details below.

### Step 4: Update the EbookPage catalog

Add the new city to the `EBOOKS` object in `src/pages/EbookPage.js`. Read the existing Lisbon entry as a template. Each entry needs: city, country, price, currency, pages, pdfPath, coverImage, stripeLink, highlights, and stats (from the city data).

### Step 5: Commit and deploy

Stage the new files (cover image, PDF, updated scripts) and deploy.

---

## PDF Generator Architecture

The generator script must follow these rules (learned from the Lisbon version):

### Critical constraints

- **ASCII only in JS comments** -- Vite/Rollup on Vercel rejects unicode in .js files
- **ES modules** -- the project uses `"type": "module"` in package.json, so use `import` not `require`
- **Puppeteer** is installed as a devDependency
- **Headers are embedded in HTML** -- do NOT use Puppeteer's `displayHeaderFooter` (it overlaps content). Instead, insert header bars directly in the HTML after each `pageBreak()`
- **Margin: 0** in Puppeteer PDF options, padding handled via `.page-content` CSS class

### Brand tokens

```
NAVY    = '#1e1b4b'
NAVY2   = '#0f172a'
INDIGO  = '#4f46e5'
GOLD    = '#d4a843'
GOLD_L  = '#e8c97a'
```

### Section structure (adapt for each city)

The PDF has 13 sections. Each uses data from `cityService.js`:

1. **Cover Page** -- City name, country, branded design
2. **Table of Contents** -- Section list with page numbers
3. **Executive Summary** -- LCA Index score, cost overview, key strengths/risks
4. **Quick Fact Sheet** -- Reference table (population, currency, rent, visa, climate, etc.)
5. **Detailed Cost Breakdown** -- Housing, food, transport, utilities, coworking, entertainment
6. **Budget Scenarios** -- 3 profiles: Budget Nomad, Standard Professional, Premium Expat
7. **Neighborhood Analysis** -- 3-5 neighborhoods with rent ranges and character descriptions
8. **Work Infrastructure** -- Internet speed, coworking ecosystem, digital readiness scores
9. **Safety & Quality of Life** -- Safety index, healthcare, climate, walkability
10. **City Comparison** -- Compare with 4 peer cities (use same continent or similar profile)
11. **Pros & Cons** -- Balanced assessment
12. **Who Should Move** -- 5 profiles with verdicts (Remote Workers, Families, Retirees, Entrepreneurs, Budget Nomads)
13. **Risk Factors** -- Economic, bureaucratic, housing, safety risks
14. **LCA Methodology** -- Scoring formula (same for all cities)
15. **Final Verdict** -- Overall recommendation

### Data mapping from cityDB

Use these fields from the city object:

| PDF Section | cityDB Fields |
|---|---|
| Costs | `costs.accommodation.center`, `costs.accommodation.suburb`, `costs.food.budget/standard/premium`, `costs.transport`, `costs.coworking` |
| Safety | `safety.safetyIndex`, `safety.crimeLevel` |
| Infrastructure | `infrastructure.publicTransportQuality/healthcareQuality/englishProficiency/airportConnectivity` |
| Visa | `visa.type`, `visa.remoteFriendly`, `visa.minIncomeRequirement`, `visa.processingTimeDays`, `visa.stayDurationMonths` |
| Tax | `tax.personalIncomeTaxTopRate`, `tax.corporateTax`, `tax.capitalGainsTax` |
| Macro | `macro.inflationRate`, `macro.currencyStability`, `macro.rentVolatilityIndex` |
| Digital Nomad | `digitalNomad.overallScore`, `digitalNomad.wifiSpeed`, `digitalNomad.coworkingCost`, `digitalNomad.safetyScore` |
| General | `name`, `country`, `currency`, `currencySymbol`, `continent`, `tags`, `description` |

### Generating city-specific content

For data NOT in cityDB (neighborhoods, cultural details, visa specifics), the generator should create reasonable estimates based on available data. Use these strategies:

- **Neighborhoods**: Generate 3-5 based on city context. Use generic archetypes: "City Centre / Historic Core", "Business District", "Emerging / Up-and-coming Area", "Residential Suburb", "Waterfront / Premium Area". Estimate rents as percentages of `costs.accommodation.center`.
- **Budget profiles**: Calculate from cityDB costs: Budget = accommodation.suburb + food.budget*30 + transport; Standard = accommodation.center + food.standard*30 + transport + coworking; Premium = center*2 + food.premium*30 + transport*2 + coworking*2.
- **Peer cities**: Pick 4 comparison cities from the same continent or similar tags using `getAllCities()`.
- **Visa details**: Use `visa.type` and format accordingly.

### Helper functions to reuse

The Lisbon script has these reusable helpers -- copy them exactly:

- `headerBar()` -- navy bar + gold line
- `goldRule()` -- decorative gold divider
- `sectionTitle(num, title)` -- section heading with number
- `tbl(headers, rows, opts)` -- styled table with optional striping and header colors
- `scoreBadge(v, label)` -- colored score display
- `riskBadge(level)` -- risk level badge
- `pageBreak()` -- page break + header bar
- `footerBar(pageNum)` -- copyright footer
- `commentary(text)` -- analysis paragraph

### Puppeteer PDF options

```js
await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
  displayHeaderFooter: false
});
```

Use `page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 60000 })` to avoid timeouts.

---

## Reference files

- `scripts/generate-lisbon-ebook.js` -- the original Lisbon generator (read for full section templates)
- `scripts/generate-cover-image.js` -- the cover image generator
- `src/pages/EbookPage.js` -- the landing page catalog
- `src/data/cityService.js` -- city data access functions
- `src/data/cityDB.js` -- raw city database (50 cities)
