---
name: lca-city-report
description: >
  Generate a premium, VIP-grade PDF relocation intelligence report for any city — branded
  Living Cost Atlas, styled as a World Bank / consulting document (navy + gold, A4, 13 sections,
  25-40 pages equivalent). Use this skill when the user asks to "generate an ebook", "create a
  city guide", "make a cost of living PDF", "relocation report", "génère un rapport pour [ville]",
  "fais un guide pour [ville]", or any request combining a city name with report/PDF/guide/ebook.
  This is the SINGLE authoritative generator for the Living Cost Atlas paid eBook catalog —
  it replaces the older Node/Puppeteer generator and unifies data from cityDB.js + cityIntel.js
  with web-sourced gaps, then produces the PDF via the ReportLab engine that originally
  produced the Lisbon reference guide.
---

# Living Cost Atlas — City Relocation Report Skill

## What this skill produces

A single print-ready PDF at
`public/ebooks/LivingCostAtlas_{City}_2026.pdf`
matching the quality and style of `LivingCostAtlas_Lisbon_2026.pdf` — dark navy + gold branding,
24-30 pages, 13 analytical sections, color-coded tables, score cards, budget breakdowns,
verdict paragraphs. Same moteur ReportLab qui a produit le Lisbon de référence.

**Not** to be confused with:
- `city-ebook` skill — the older Node/Puppeteer-based generator (now superseded)
- `anthropic-skills:tripcost-report` — the generic TripCost-branded version (this skill is the
  LCA-branded fork sitting inside the project, wired to project data)

---

## Workflow (6 steps)

### STEP 1 — Verify the city exists in the project database

```js
// Read src/data/cityDB.js and check for the slug
```

If the slug is missing, tell the user and list available slugs from `cityDB.js`.
The slug drives filename generation: slug `mexico-city` → `LivingCostAtlas_Mexico_City_2026.pdf`.

### STEP 2 — Pull hand-authored intel

Read `scripts/data/cityIntel.js` and look for `CITY_INTEL[slug]`. If present it provides the
HIGH-SIGNAL fields: real neighborhoods with rent ratios + character + descriptions, regionally
appropriate peer cities with rationales, 3-paragraph exec summary, cuisine + culture notes,
real risks, hand-authored pros/cons, who-should-move verdicts.

**Always use this when available** — it's the difference between "generic placeholder" and
"premium guide a human would pay for".

If the slug is NOT in cityIntel, you MUST author it first (5 neighborhoods, 4 peer cities,
3 exec paragraphs, cuisineNotes, cultureNotes, 4-6 risks, 5 who-should-move profiles,
8 pros + 8 cons) using web search. See `references/cityIntel-template.md`.

### STEP 3 — Build the full CITY dict

Map data from cityDB + cityIntel + web search into the ReportLab `CITY` dict schema defined in
`references/city-data-template.md`. The schema has ~100 fields covering:

- 8 rent categories (studio/1BR/2BR/3BR × centre/outside + coliving + short-term)
- 5 utility line items
- 6 internet/mobile fields
- 12 food/dining items (groceries + 7 dining price points: lunch, mid-range, fine, fastfood, coffee, beer, wine)
- 12 transport items (pass, rideshare, petrol, parking, car total, bike, airport, intercity)
- 4 coworking tiers + named premium spaces
- Gym, cinema, streaming, health insurance × 2, school
- 3 budget profiles with LOW-HIGH ranges
- 5 neighborhoods with `pros[4]` + `cons[4]` each
- 8 infra scores + justifications
- 7 QoL scores + justifications
- 4 peer cities with vs_rent/vs_food/vs_total percentages + LCA score + visa
- 8 pros + 8 cons (tuples)
- 5 who-should-move profiles with color-coded verdicts (green/teal/amber/red)
- 6 risks with color severity
- 5-dimension LCA Index scores + rationale
- 3 separate verdict paragraphs (nomads / families / founders) + closing statement

**Data-filling rules:**
1. If cityDB has the value → use it
2. If cityIntel has the value → use it (overrides cityDB for narrative fields)
3. If neither has it → web search once: `"[city] cost of living expat 2025 2026 rent coworking"` and fill
4. If genuinely unknown → use `"N/A"` or a reasonable range with a note

**Money rules:** all amounts in `currency_sym`. Currency chosen by region:
- EU/Europe → EUR
- Americas / SE Asia English-speaking / Gulf → USD
- Africa / Francophone → EUR or USD

### STEP 4 — Inject and run the ReportLab engine

1. Copy `scripts/pdf_generator.py` to a working path (e.g. `/tmp/lca_gen.py` on Linux, or
   `scripts/lca_gen_temp.py` in the project).
2. Replace the placeholder `CITY = {...}` dict at the top (lines 13-21) with the fully populated
   dict from Step 3.
3. Run `python scripts/lca_gen_temp.py`
4. Output lands at `public/ebooks/LivingCostAtlas_{CityName}_{Year}.pdf`

**Python requirements:** `reportlab` must be installed (`pip install reportlab` — ~10 MB).

### STEP 5 — Also write the HTML mirror (optional)

The existing Node generator also writes an HTML version next to the PDF. To stay compatible with
any HTML preview tooling, optionally keep the HTML generation path from
`scripts/generate-city-ebook.js` for the same slug. The PDF is what's sold; HTML is a preview.

### STEP 6 — Update the EbookPage catalog

If this is a NEW city not already in the catalog, add it to `EBOOKS` in `src/pages/EbookPage.js`
with `city`, `country`, `price: 9.99`, `currency: 'EUR'`, `pages`, `pdfPath`, `coverImage`,
`stripeLink`, `highlights`, `stats`.

For cover image, run `node scripts/generate-city-cover.js <slug>`.

---

## Quality Rules (inherited from tripcost-report)

- **NEVER** hard-code Lisbon data — all city values come from the `CITY` dict
- All table column widths must sum to exactly `USABLE_W = 481.9 pt` (A4 with 18mm margins)
- Every table cell must use `Paragraph()` objects — never raw strings in cells
- Monetary ranges must always include the currency symbol
- The LCA Index score must be computed from the 5 weighted dimensions, not invented
- Visa section must reflect real visa options for the target country
- Brand: "Living Cost Atlas" — never "TripCost" in user-facing text

## LCA Index formula

```
Index = (Affordability × 0.30) + (Infrastructure × 0.20) +
        (Safety × 0.15) + (Quality of Life × 0.20) + (Economic Stability × 0.15)
```

Score interpretation:
- 8.0-10: STRONG BUY
- 6.5-7.99: BUY
- 5.0-6.49: HOLD
- <5.0: CAUTION

## Dimension scoring guide

**Affordability (0-10):**
- 9-10: < $1,000/mo total budget possible (Tbilisi, Chiang Mai)
- 7-8: $1,200-$2,000 (Medellin, Lisbon 2020)
- 5-6: $2,000-$3,500 (Lisbon 2026, Barcelona)
- 3-4: $4,000-$6,000 (London, Paris)
- 1-2: >$6,000 (Singapore, Zurich, NYC)

Scoring Quick-Reference by city type:

| City Type              | Afford | Safety | QoL |
|------------------------|--------|--------|-----|
| SE Asia (BKK, HCMC)    | 8-9    | 5-6    | 7-8 |
| Latam (MDE, CDMX)      | 7-8    | 4-6    | 7-8 |
| Eastern EU (Tbilisi)   | 7-8    | 7-8    | 7-8 |
| Western EU (Lisbon)    | 5-6    | 8-9    | 8-9 |
| Gulf (Dubai)           | 5-6    | 8-9    | 7-8 |
| Premium (Singapore)    | 2-3    | 8-9    | 8-9 |

---

## 13 Report Sections

| #  | Section                  | Key Content                                               |
|----|--------------------------|-----------------------------------------------------------|
| 01 | Executive Summary        | Cost tiers, strengths, risks, LCA Index                   |
| 02 | Quick Fact Sheet         | 20+ parameters in a single reference table                |
| 03 | Detailed Cost Breakdown  | Housing, utilities, internet, food, transport, other      |
| 04 | Monthly Budget Scenarios | Budget / Standard / Premium with itemized breakdown       |
| 05 | Neighborhood Analysis    | 5 districts with pros/cons/best-for                       |
| 06 | Work Infrastructure      | 8 categories scored 1-10 + justifications                 |
| 07 | Safety & Quality of Life | 7 dimensions scored 1-10 + justifications                 |
| 08 | City Comparison          | vs. 4 peer cities with rent/food/total % differentials    |
| 09 | Pros & Cons              | Color-coded green/red parallel tables                     |
| 10 | Who Should Move?         | 5 profiles with colored verdict badges                    |
| 11 | Risk Factors             | 6 risks with color-coded severity                         |
| 12 | LCA Index Methodology    | Formula, dimension breakdown, scoring reference           |
| 13 | Final Verdict            | Hero score card + 3 verdict paragraphs + closing + disclaimer |

---

## Common Issues

| Problem | Fix |
|---|---|
| `AssertionError: Widths X != 481.9` | Recalculate column widths to sum to `U` |
| Text overflow in cells | Wrap cell content in `Paragraph()` — never raw strings |
| `ImportError: reportlab` | `pip install reportlab` |
| Font rendering boxes on unicode | Use `<sub>`/`<sup>` tags in Paragraph, never raw `₂` `³` |
| PDF not generated | Check Python traceback; usually a missing key in `CITY` dict |
| Branding shows "TripCost" | Grep the pdf_generator.py — should be fully rebranded |

---

## File References

- `references/city-data-template.md` — Full `CITY` dict schema (~100 fields)
- `scripts/pdf_generator.py` — ReportLab PDF engine (1,012 lines, LCA-branded)
- `../../../scripts/data/cityIntel.js` — Hand-authored per-city intel (12 cities)
- `../../../src/data/cityDB.js` — Basic costs + metadata for 50 cities
- `../../../src/pages/EbookPage.js` — Catalog to update for new cities

## Relation to the other city generator skill

The older `city-ebook` skill (in `.claude/skills/city-ebook/`) uses a Node/Puppeteer HTML-to-PDF
pipeline with the simpler cityIntel schema. It still works but produces lower-density output
(~4-5 pros, single verdict paragraph, no detailed cost-line breakdowns, no vs_% peer table).

**Use `lca-city-report` (this skill) as the default for paid eBooks going forward.** Use
`city-ebook` only for quick iterations or when ReportLab isn't available.
