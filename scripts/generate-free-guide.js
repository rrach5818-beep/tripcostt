/**
 * generate-free-guide.js
 * Generates the FREE lead magnet PDF:
 * "Top 10 Cities for Digital Nomads 2026 -- Free Preview"
 * Usage: node scripts/generate-free-guide.js
 * ASCII-only comments (Vite constraint)
 */
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mod = await import(
  'file:///' + path.resolve(__dirname, '..', 'src', 'data', 'cityService.js').replace(/\\/g, '/')
);
const { getCityBySlug } = mod;

const OUT = path.resolve(
  __dirname, '..', 'public', 'ebooks',
  'LivingCostAtlas_FreeGuide_Top10_2026.pdf'
);

// Brand tokens
const NAVY   = '#1e1b4b';
const INDIGO = '#4f46e5';
const GOLD   = '#d4a843';
const GOLD_L = '#e8c97a';
const WHITE  = '#ffffff';
const GRAY   = '#6b7280';
const LGRAY  = '#f1f5f9';

// Top 10 curated cities for the free guide
const TOP10 = [
  'lisbon', 'barcelona', 'bangkok', 'chiang-mai', 'medellin',
  'mexico-city', 'bali', 'prague', 'berlin', 'tokyo'
];

const cities = TOP10.map(slug => {
  const c = getCityBySlug(slug);
  const rentCenter = Math.round(c.costs.accommodation.center * 30);
  const foodStd = c.costs.food.standard;
  const monthly = rentCenter + foodStd * 30 + c.costs.transport + (c.costs.coworking || 0);
  return {
    slug: c.slug,
    name: c.name,
    country: c.country,
    currencySymbol: c.currencySymbol || '$',
    rent: rentCenter,
    monthly,
    nomadScore: c.digitalNomad?.overallScore || 70,
    wifi: c.digitalNomad?.wifiSpeed || 80,
    safety: c.safety?.safetyIndex || 70,
    description: c.description || ''
  };
});

// Rank by nomadScore desc
cities.sort((a, b) => b.nomadScore - a.nomadScore);

function coverPage() {
  return `
  <section class="page cover">
    <div class="gold-bar"></div>
    <div class="stripe"></div>
    <div class="watermark">LCA</div>
    <div class="cover-inner">
      <div class="kicker">LIVING COST ATLAS &middot; FREE PREVIEW</div>
      <h1 class="cover-title">Top 10 Cities for<br/>Digital Nomads</h1>
      <div class="cover-year">2026 Edition</div>
      <div class="cover-sub">
        A curated preview of the 10 best destinations<br/>
        for remote workers, ranked by data.
      </div>
      <div class="cover-footer">
        <div class="cover-footer-item">
          <div class="cf-num">10</div>
          <div class="cf-lbl">Cities Ranked</div>
        </div>
        <div class="cover-footer-item">
          <div class="cf-num">100%</div>
          <div class="cf-lbl">Free</div>
        </div>
        <div class="cover-footer-item">
          <div class="cf-num">2026</div>
          <div class="cf-lbl">Data</div>
        </div>
      </div>
    </div>
  </section>`;
}

function headerBar(pageLabel) {
  return `
    <div class="hdr-bar">
      <div class="hdr-left">LIVING COST ATLAS &middot; TOP 10 FREE PREVIEW</div>
      <div class="hdr-right">${pageLabel}</div>
    </div>`;
}

function introPage() {
  return `
  <section class="page">
    ${headerBar('Introduction')}
    <div class="content-wrap">
      <div class="section-eyebrow">WELCOME</div>
      <h2 class="section-title">How to use this guide</h2>
      <p class="lead">
        This free preview ranks the 10 most attractive cities for digital
        nomads in 2026, based on data from our full Living Cost Atlas database.
      </p>
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">&#9733;</div>
          <div class="info-title">Nomad Score</div>
          <div class="info-desc">Weighted composite of affordability, infrastructure, safety, and quality of life (0-100).</div>
        </div>
        <div class="info-card">
          <div class="info-icon">&#36;</div>
          <div class="info-title">Monthly Budget</div>
          <div class="info-desc">Realistic single-person estimate: rent (center), food, transport, and coworking.</div>
        </div>
        <div class="info-card">
          <div class="info-icon">&#128241;</div>
          <div class="info-title">WiFi Speed</div>
          <div class="info-desc">Average download speed in Mbps. Above 50 Mbps is sufficient for video calls.</div>
        </div>
        <div class="info-card">
          <div class="info-icon">&#128737;</div>
          <div class="info-title">Safety Index</div>
          <div class="info-desc">Crime perception and statistical safety score (higher = safer).</div>
        </div>
      </div>
      <div class="callout">
        <div class="callout-title">&#128073; Want deeper data?</div>
        <div class="callout-body">
          Each city has a dedicated 22-page Living Cost Atlas eBook with
          neighborhood analysis, visa and tax guides, 3 budget profiles,
          risk factors, and peer city comparisons. Find them at
          <strong>livingcostatlas.com/ebooks</strong>.
        </div>
      </div>
    </div>
  </section>`;
}

function cityCard(c, rank) {
  const tier = c.nomadScore >= 80 ? 'TIER 1' : c.nomadScore >= 70 ? 'TIER 2' : 'TIER 3';
  const tierColor = c.nomadScore >= 80 ? '#15803d' : c.nomadScore >= 70 ? '#b45309' : '#6b7280';
  return `
    <div class="city-card">
      <div class="city-head">
        <div class="city-rank">#${rank}</div>
        <div class="city-name-wrap">
          <div class="city-name">${c.name}</div>
          <div class="city-country">${c.country}</div>
        </div>
        <div class="city-tier" style="background:${tierColor}">${tier}</div>
      </div>
      <div class="city-stats">
        <div class="cs">
          <div class="cs-val">${c.nomadScore}</div>
          <div class="cs-lbl">Nomad Score</div>
        </div>
        <div class="cs">
          <div class="cs-val">${c.currencySymbol}${c.monthly.toLocaleString()}</div>
          <div class="cs-lbl">Monthly Budget</div>
        </div>
        <div class="cs">
          <div class="cs-val">${c.wifi}</div>
          <div class="cs-lbl">WiFi Mbps</div>
        </div>
        <div class="cs">
          <div class="cs-val">${c.safety}</div>
          <div class="cs-lbl">Safety /100</div>
        </div>
      </div>
      <div class="city-desc">${c.description}</div>
    </div>
  `;
}

function rankingPage1() {
  const cards = cities.slice(0, 5).map((c, i) => cityCard(c, i + 1)).join('');
  return `
  <section class="page">
    ${headerBar('Top 1-5')}
    <div class="content-wrap">
      <div class="section-eyebrow">THE RANKING</div>
      <h2 class="section-title">Top 5 Cities for Digital Nomads 2026</h2>
      <p class="lead">Ranked by overall Nomad Score -- the higher, the better.</p>
      <div class="cards-list">${cards}</div>
    </div>
  </section>`;
}

function rankingPage2() {
  const cards = cities.slice(5, 10).map((c, i) => cityCard(c, i + 6)).join('');
  return `
  <section class="page">
    ${headerBar('Top 6-10')}
    <div class="content-wrap">
      <div class="section-eyebrow">THE RANKING</div>
      <h2 class="section-title">Cities 6 to 10</h2>
      <p class="lead">Strong secondary picks with excellent value or unique advantages.</p>
      <div class="cards-list">${cards}</div>
    </div>
  </section>`;
}

function comparisonTable() {
  const rows = cities.map((c, i) => `
    <tr>
      <td class="rk">${i + 1}</td>
      <td class="nm">${c.name}<div class="nm-sub">${c.country}</div></td>
      <td class="ns">${c.nomadScore}</td>
      <td>${c.currencySymbol}${c.monthly.toLocaleString()}</td>
      <td>${c.wifi} Mbps</td>
      <td>${c.safety}/100</td>
    </tr>
  `).join('');
  return `
  <section class="page">
    ${headerBar('Comparison')}
    <div class="content-wrap">
      <div class="section-eyebrow">AT A GLANCE</div>
      <h2 class="section-title">All 10 Cities Compared</h2>
      <p class="lead">Quick-scan comparison of the full ranking.</p>
      <table class="compare-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>City</th>
            <th>Nomad Score</th>
            <th>Monthly</th>
            <th>WiFi</th>
            <th>Safety</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="callout callout-gold">
        <div class="callout-title">Methodology note</div>
        <div class="callout-body">
          Nomad Score combines affordability (30%), infrastructure (20%),
          safety (15%), quality of life (20%), and economic stability (15%).
          Monthly budget assumes rent in the center, standard restaurant
          food, daily transport, and a coworking subscription.
        </div>
      </div>
    </div>
  </section>`;
}

function ctaPage() {
  return `
  <section class="page">
    ${headerBar('Next Step')}
    <div class="content-wrap cta-wrap">
      <div class="cta-badge">&#127873; OFFER</div>
      <h2 class="cta-title">Ready for the full picture?</h2>
      <p class="cta-sub">
        Each city has a dedicated 22-page in-depth eBook covering neighborhoods,
        visas, taxes, detailed budgets, risk factors, and more.
      </p>
      <div class="cta-grid">
        <div class="cta-item">
          <div class="cta-num">22</div>
          <div class="cta-lbl">Pages per city</div>
        </div>
        <div class="cta-item">
          <div class="cta-num">3</div>
          <div class="cta-lbl">Budget profiles</div>
        </div>
        <div class="cta-item">
          <div class="cta-num">5</div>
          <div class="cta-lbl">Neighborhoods analyzed</div>
        </div>
        <div class="cta-item">
          <div class="cta-num">&euro;9.99</div>
          <div class="cta-lbl">Single payment</div>
        </div>
      </div>
      <div class="cta-url">
        livingcostatlas.com/ebooks
      </div>
      <div class="cta-foot">
        Thank you for downloading this free preview. Stay nomadic!
      </div>
    </div>
  </section>`;
}

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Living Cost Atlas -- Top 10 Digital Nomad Cities 2026 (Free Preview)</title>
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  html, body { margin: 0; padding: 0; font-family: 'Inter', 'Helvetica', Arial, sans-serif; color: ${NAVY}; }
  .page {
    width: 210mm; min-height: 297mm; position: relative; overflow: hidden;
    page-break-after: always; background: ${WHITE};
  }
  .page:last-child { page-break-after: auto; }

  /* -- Cover -- */
  .cover {
    background: linear-gradient(135deg, ${NAVY} 0%, ${INDIGO} 100%);
    color: ${WHITE};
  }
  .gold-bar { position: absolute; top: 0; left: 0; right: 0; height: 12mm; background: ${GOLD}; }
  .stripe {
    position: absolute; top: -40mm; right: -60mm; width: 200mm; height: 140mm;
    background: linear-gradient(135deg, rgba(212,168,67,0.08) 0%, rgba(212,168,67,0.22) 100%);
    transform: rotate(-18deg); border-radius: 12mm;
  }
  .watermark {
    position: absolute; bottom: 20mm; right: 18mm;
    font-size: 120pt; font-weight: 900; letter-spacing: -4pt;
    color: rgba(255,255,255,0.06); line-height: 1;
  }
  .cover-inner { position: absolute; top: 40mm; left: 22mm; right: 22mm; bottom: 22mm; }
  .kicker {
    font-size: 9pt; letter-spacing: 2.5pt; color: ${GOLD_L}; font-weight: 700; margin-bottom: 22mm;
  }
  .cover-title {
    font-size: 52pt; line-height: 1.05; font-weight: 900; margin: 0 0 8mm 0;
    letter-spacing: -1.5pt;
  }
  .cover-year {
    font-size: 22pt; color: ${GOLD}; font-weight: 700; margin-bottom: 12mm;
  }
  .cover-sub {
    font-size: 13pt; color: rgba(255,255,255,0.85); line-height: 1.55;
    max-width: 120mm;
  }
  .cover-footer {
    position: absolute; bottom: 0; left: 0; right: 0;
    display: flex; gap: 12mm; padding-top: 10mm;
    border-top: 1px solid rgba(255,255,255,0.2);
  }
  .cover-footer-item { text-align: left; }
  .cf-num { font-size: 24pt; font-weight: 900; color: ${GOLD_L}; line-height: 1; }
  .cf-lbl { font-size: 8pt; letter-spacing: 1pt; color: rgba(255,255,255,0.75); margin-top: 2mm; text-transform: uppercase; }

  /* -- Header bar for inner pages -- */
  .hdr-bar {
    background: ${NAVY}; color: ${WHITE};
    padding: 4mm 14mm; display: flex; justify-content: space-between;
    font-size: 8pt; letter-spacing: 1.2pt; font-weight: 600;
  }
  .hdr-right { color: ${GOLD_L}; }

  .content-wrap { padding: 10mm 14mm 14mm; }
  .section-eyebrow {
    font-size: 8pt; letter-spacing: 2pt; color: ${INDIGO}; font-weight: 700; margin-bottom: 4mm;
  }
  .section-title {
    font-size: 22pt; font-weight: 800; margin: 0 0 4mm 0; line-height: 1.15;
    letter-spacing: -0.5pt;
  }
  .lead {
    font-size: 10.5pt; color: ${GRAY}; line-height: 1.5; margin: 0 0 8mm 0;
  }

  /* -- Intro info grid -- */
  .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; margin-bottom: 6mm; }
  .info-card {
    padding: 6mm; background: ${LGRAY}; border-radius: 3mm;
    border-left: 2mm solid ${INDIGO};
  }
  .info-icon { font-size: 16pt; margin-bottom: 2mm; color: ${INDIGO}; }
  .info-title { font-size: 11pt; font-weight: 800; margin-bottom: 1.5mm; }
  .info-desc { font-size: 9pt; color: ${GRAY}; line-height: 1.45; }

  .callout {
    margin-top: 6mm; padding: 6mm 7mm; background: ${NAVY}; color: ${WHITE};
    border-radius: 3mm;
  }
  .callout-title { font-size: 11pt; font-weight: 800; margin-bottom: 2mm; color: ${GOLD_L}; }
  .callout-body { font-size: 9.5pt; line-height: 1.55; }
  .callout-gold { background: ${GOLD}; color: ${NAVY}; }
  .callout-gold .callout-title { color: ${NAVY}; }

  /* -- City cards -- */
  .cards-list { display: flex; flex-direction: column; gap: 4mm; }
  .city-card {
    background: ${WHITE}; border: 1px solid #e5e7eb; border-radius: 3mm;
    padding: 5mm 6mm; break-inside: avoid;
  }
  .city-head { display: flex; align-items: center; gap: 5mm; margin-bottom: 3mm; }
  .city-rank {
    font-size: 20pt; font-weight: 900; color: ${INDIGO}; letter-spacing: -1pt;
    min-width: 14mm;
  }
  .city-name-wrap { flex: 1; }
  .city-name { font-size: 15pt; font-weight: 800; line-height: 1.1; }
  .city-country { font-size: 9pt; color: ${GRAY}; margin-top: 0.5mm; }
  .city-tier {
    color: ${WHITE}; padding: 1.5mm 4mm; border-radius: 2mm;
    font-size: 7.5pt; font-weight: 700; letter-spacing: 1pt;
  }
  .city-stats {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 3mm;
    margin-bottom: 3mm;
  }
  .cs {
    background: ${LGRAY}; padding: 3mm; border-radius: 2mm; text-align: center;
  }
  .cs-val { font-size: 12pt; font-weight: 800; color: ${NAVY}; line-height: 1; }
  .cs-lbl { font-size: 7pt; color: ${GRAY}; margin-top: 1.5mm; letter-spacing: 0.5pt; text-transform: uppercase; }
  .city-desc { font-size: 9pt; color: ${GRAY}; line-height: 1.5; font-style: italic; }

  /* -- Comparison table -- */
  .compare-table {
    width: 100%; border-collapse: collapse; font-size: 9.5pt; margin-top: 4mm;
  }
  .compare-table th {
    background: ${NAVY}; color: ${WHITE}; padding: 3mm; text-align: left;
    font-size: 8pt; letter-spacing: 1pt; font-weight: 700;
  }
  .compare-table td {
    padding: 3mm; border-bottom: 1px solid #e5e7eb;
  }
  .compare-table tr:nth-child(even) td { background: ${LGRAY}; }
  .rk { font-weight: 900; color: ${INDIGO}; }
  .nm { font-weight: 700; }
  .nm-sub { font-size: 8pt; color: ${GRAY}; font-weight: 400; }
  .ns { font-weight: 800; color: ${NAVY}; }

  /* -- CTA page -- */
  .cta-wrap { text-align: center; padding: 30mm 18mm; }
  .cta-badge {
    display: inline-block; background: ${GOLD}; color: ${NAVY};
    padding: 2mm 5mm; border-radius: 10mm; font-size: 9pt; font-weight: 800;
    letter-spacing: 1pt; margin-bottom: 10mm;
  }
  .cta-title {
    font-size: 30pt; font-weight: 900; margin: 0 0 6mm 0; line-height: 1.1;
    letter-spacing: -1pt;
  }
  .cta-sub {
    font-size: 12pt; color: ${GRAY}; line-height: 1.55; margin: 0 0 14mm 0;
    max-width: 140mm; margin-left: auto; margin-right: auto;
  }
  .cta-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 4mm;
    margin-bottom: 14mm;
  }
  .cta-item {
    padding: 6mm 3mm; background: ${LGRAY}; border-radius: 3mm;
    border-top: 3mm solid ${INDIGO};
  }
  .cta-num {
    font-size: 22pt; font-weight: 900; color: ${NAVY}; line-height: 1;
    letter-spacing: -1pt;
  }
  .cta-lbl { font-size: 8.5pt; color: ${GRAY}; margin-top: 2mm; }
  .cta-url {
    background: ${NAVY}; color: ${GOLD_L}; padding: 6mm;
    border-radius: 3mm; font-size: 16pt; font-weight: 800; letter-spacing: 0.5pt;
    margin-bottom: 10mm;
  }
  .cta-foot {
    font-size: 10pt; color: ${GRAY}; font-style: italic;
  }

</style>
</head>
<body>
  ${coverPage()}
  ${introPage()}
  ${rankingPage1()}
  ${rankingPage2()}
  ${comparisonTable()}
  ${ctaPage()}
</body>
</html>
`;

const HTML_OUT = OUT.replace('.pdf', '.html');
fs.writeFileSync(HTML_OUT, html);
console.log('HTML written:', HTML_OUT);

(async () => {
  console.log('Generating Top 10 Free Preview...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.pdf({
    path: OUT,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    displayHeaderFooter: false
  });
  await browser.close();
  const size = (fs.statSync(OUT).size / 1024).toFixed(1);
  console.log('PDF generated:', OUT);
  console.log('File size:', size, 'KB');
})();
