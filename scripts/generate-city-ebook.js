/**
 * generate-city-ebook.js
 * Generates a Living Cost Atlas eBook PDF for any city
 * Usage: node scripts/generate-city-ebook.js <city-slug>
 * ASCII-only comments (Vite constraint)
 */
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const slug = process.argv[2];
const isPreview = process.argv.includes('--preview');
if (!slug) {
  console.error('Usage: node scripts/generate-city-ebook.js <city-slug> [--preview]');
  process.exit(1);
}

// Dynamically import city data
const mod = await import(
  'file:///' + path.resolve(__dirname, '..', 'src', 'data', 'cityService.js').replace(/\\/g, '/')
);
const { getCityBySlug, getAllCities, compareCities } = mod;

// Hand-authored per-city intelligence (real neighborhoods, peer cities, exec summary, etc.)
const intelMod = await import(
  'file:///' + path.resolve(__dirname, 'data', 'cityIntel.js').replace(/\\/g, '/')
);
const CITY_INTEL = intelMod.CITY_INTEL || {};
const intel = CITY_INTEL[slug] || null;
const SETUP_GUIDES = intelMod.SETUP_GUIDES || {};
const setup = SETUP_GUIDES[slug] || null;
const CITY_SCAMS = intelMod.CITY_SCAMS || {};
const scams = CITY_SCAMS[slug] || null;
const CITY_VISAS = intelMod.CITY_VISAS || {};
const visa = CITY_VISAS[slug] || null;
const NEIGHBORHOOD_PHOTOS = intelMod.NEIGHBORHOOD_PHOTOS || {};
const photoSpec = NEIGHBORHOOD_PHOTOS[slug] || [];

// Resolve Wikipedia thumbnails at build time.
async function fetchWithRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(url, { headers: { 'User-Agent': 'LivingCostAtlas/1.0 (livingcostatlas.com)' } });
    if (res.ok) return res;
    if (res.status === 429 && i < tries - 1) { await new Promise(r => setTimeout(r, 1500 * (i + 1))); continue; }
    return res;
  }
}
async function resolvePhotos(specs) {
  const out = [];
  for (const spec of specs) {
    try {
      const res = await fetchWithRetry(`https://en.wikipedia.org/api/rest_v1/page/summary/${spec.article}`);
      if (!res || !res.ok) { out.push(null); continue; }
      const j = await res.json();
      const thumb = (j.thumbnail && j.thumbnail.source) || (j.originalimage && j.originalimage.source) || null;
      if (thumb) {
        // Force a 640px variant -- keeps PDF under 2 MB while staying sharp.
        let url = thumb.replace(/\/\d+px-/, '/640px-');
        // If no /thumb/ segment (non-standard images), leave as-is.
        out.push({ url, caption: spec.caption, source: j.content_urls && j.content_urls.desktop && j.content_urls.desktop.page });
      } else {
        out.push(null);
      }
    } catch (e) {
      out.push(null);
    }
  }
  return out;
}
const photos = await resolvePhotos(photoSpec);

const city = getCityBySlug(slug);
if (!city) {
  console.error(`City not found: ${slug}`);
  console.log('Available:', getAllCities().map(c => c.slug).join(', '));
  process.exit(1);
}

const cityName = city.name;
const countryName = city.country;
const cur = city.currencySymbol || '$';
const OUT = isPreview
  ? path.resolve(__dirname, '..', 'public', 'ebooks', 'preview',
      `LivingCostAtlas_${cityName.replace(/\s+/g, '_')}_Preview.pdf`)
  : path.resolve(__dirname, '..', 'public', 'ebooks',
      `LivingCostAtlas_${cityName.replace(/\s+/g, '_')}_2026.pdf`);
if (isPreview) {
  const previewDir = path.dirname(OUT);
  if (!fs.existsSync(previewDir)) fs.mkdirSync(previewDir, { recursive: true });
}

// -- Brand tokens --------------------------------------------------------
const NAVY    = '#1e1b4b';
const NAVY2   = '#0f172a';
const INDIGO  = '#4f46e5';
const GOLD    = '#d4a843';
const GOLD_L  = '#e8c97a';
const WHITE   = '#ffffff';
const GRAY    = '#6b7280';
const LGRAY   = '#f1f5f9';
const RED     = '#b91c1c';
const GREEN   = '#15803d';
const AMBER   = '#b45309';

// -- Derived data --------------------------------------------------------
const rentCenter = city.costs.accommodation.center * 30;
const rentSuburb = city.costs.accommodation.suburb * 30;
const foodBudget = city.costs.food.budget;
const foodStd    = city.costs.food.standard;
const foodPrem   = city.costs.food.premium;
const transport  = city.costs.transport;
const cowork     = city.costs.coworking;
const wifi       = city.digitalNomad?.wifiSpeed || 50;
const safetyIdx  = city.safety?.safetyIndex || 70;
const nomadScore = city.digitalNomad?.overallScore || 70;
const crimeLevel = city.safety?.crimeLevel || 'Moderate';
const visaType   = city.visa?.type || 'Tourist Visa';
const visaRemote = city.visa?.remoteFriendly;
const visaIncome = city.visa?.minIncomeRequirement || 0;
const visaDays   = city.visa?.processingTimeDays || 60;
const visaStay   = city.visa?.stayDurationMonths || 12;
const taxTop     = city.tax?.personalIncomeTaxTopRate || 0;
const taxCorp    = city.tax?.corporateTax || 0;
const taxCG      = city.tax?.capitalGainsTax || 0;
const inflation  = city.macro?.inflationRate || 3;
const curStab    = city.macro?.currencyStability || 'Medium';
const rentVol    = city.macro?.rentVolatilityIndex || 5;
const pubTrans   = city.infrastructure?.publicTransportQuality || 60;
const healthcare = city.infrastructure?.healthcareQuality || 70;
const english    = city.infrastructure?.englishProficiency || 60;
const airport    = city.infrastructure?.airportConnectivity || 70;

// Budget profiles
const budgetTotal = rentSuburb + foodBudget * 30 + transport;
const stdTotal    = rentCenter + foodStd * 30 + transport + cowork;
const premTotal   = rentCenter * 2 + foodPrem * 30 + transport * 2 + cowork * 2;

// LCA Index (same formula as Lisbon)
const affordScore = Math.min(10, Math.max(1, 10 - (rentCenter / 1000)));
const infraScore  = ((pubTrans + healthcare + english + airport) / 4) / 10;
const safeScore   = safetyIdx / 10;
const qolScore    = ((safetyIdx + pubTrans + healthcare) / 3) / 10;
const econScore   = curStab === 'High' ? 7.5 : curStab === 'Very High' ? 8.5 : 6;
const lcaIndex    = (affordScore * 0.30 + infraScore * 0.20 + safeScore * 0.15 + qolScore * 0.20 + econScore * 0.15).toFixed(2);
const lcaVerdict  = lcaIndex >= 7.5 ? 'STRONG BUY' : lcaIndex >= 6.5 ? 'BUY' : lcaIndex >= 5 ? 'HOLD' : 'CAUTION';

// Peer cities for comparison: prefer hand-authored peerCities from cityIntel,
// falling back to same-continent top-nomad-score neighbours.
const allCities = getAllCities();
let peers;
if (intel && Array.isArray(intel.peerCities) && intel.peerCities.length) {
  peers = intel.peerCities
    .map(p => {
      const c = getCityBySlug(p.slug);
      if (c) c.__peerRationale = p.rationale;
      return c;
    })
    .filter(Boolean);
}
if (!peers || peers.length === 0) {
  peers = allCities
    .filter(c => c.continent === city.continent && c.slug !== slug)
    .sort((a, b) => Math.abs((a.digitalNomad?.overallScore || 0) - nomadScore) - Math.abs((b.digitalNomad?.overallScore || 0) - nomadScore))
    .slice(0, 4);
}

// Neighborhoods: hand-authored when available, generic fallback otherwise.
let neighborhoods;
if (intel && Array.isArray(intel.neighborhoods) && intel.neighborhoods.length) {
  neighborhoods = intel.neighborhoods.map(n => {
    const low = Math.round(rentCenter * n.rentRatio * 0.9);
    const high = Math.round(rentCenter * n.rentRatio * 1.15);
    return {
      name: n.name,
      type: n.character,
      rent: `${cur}${low.toLocaleString()} -- ${cur}${high.toLocaleString()}`,
      desc: n.oneLineDesc,
      bestFor: n.bestFor
    };
  });
} else {
  neighborhoods = [
    { name: `${cityName} City Centre`, type: 'Premium Urban Core', rent: `${cur}${rentCenter.toLocaleString()} -- ${cur}${Math.round(rentCenter * 1.3).toLocaleString()}`, desc: `The historic and commercial heart of ${cityName}. Walking distance to major landmarks, restaurants, and coworking spaces. Most expensive but most convenient.`, bestFor: 'Professionals who prioritize convenience and lifestyle over cost.' },
    { name: 'Business District', type: 'Modern Commercial', rent: `${cur}${Math.round(rentCenter * 0.9).toLocaleString()} -- ${cur}${Math.round(rentCenter * 1.15).toLocaleString()}`, desc: `Modern area with corporate offices, international restaurants, and newer apartment buildings.`, bestFor: 'Remote professionals working with local companies or startups.' },
    { name: 'Creative Quarter', type: 'Trendy / Emerging', rent: `${cur}${Math.round(rentCenter * 0.75).toLocaleString()} -- ${cur}${rentCenter.toLocaleString()}`, desc: `Up-and-coming area popular with artists, freelancers, and young professionals.`, bestFor: 'Digital nomads and creative freelancers seeking community.' },
    { name: 'Residential Suburb', type: 'Family-Friendly', rent: `${cur}${rentSuburb.toLocaleString()} -- ${cur}${Math.round(rentSuburb * 1.2).toLocaleString()}`, desc: `Quieter residential area with parks, schools, and supermarkets.`, bestFor: 'Families and those seeking work-life balance on a moderate budget.' },
    { name: 'Expat Hub', type: 'International Community', rent: `${cur}${Math.round(rentCenter * 0.85).toLocaleString()} -- ${cur}${Math.round(rentCenter * 1.1).toLocaleString()}`, desc: `Established international community with English-friendly services.`, bestFor: 'Expats relocating long-term who want an easier cultural transition.' },
  ];
}

// -- Reusable HTML helpers -----------------------------------------------

function headerBar() {
  return `<div style="background:${NAVY};padding:10px 40px;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${WHITE}">LIVING COST ATLAS RELOCATION INTELLIGENCE | CONFIDENTIAL</span>
    <span style="font-size:8px;font-weight:600;letter-spacing:1px;color:${GOLD}">${cityName.toUpperCase()} 2026 -- COST OF LIVING REPORT</span>
  </div>
  <div style="height:3px;background:linear-gradient(90deg,${GOLD},${GOLD_L})"></div>`;
}

function goldRule() {
  return `<div style="height:3px;background:linear-gradient(90deg,${GOLD},${GOLD_L});margin:18px 0 24px;border-radius:2px"></div>`;
}

function sectionTitle(num, title) {
  return `<h2 style="font-size:26px;font-weight:800;color:${NAVY};margin:0 0 4px">${num}. ${title}</h2>${goldRule()}`;
}

function tbl(headers, rows, opts = {}) {
  const hdrBg = opts.hdrBg || NAVY;
  const hdrColor = opts.hdrColor || GOLD;
  const stripe = opts.stripe !== false;
  let h = `<table style="width:100%;border-collapse:collapse;margin:16px 0 20px;font-size:10px"><thead><tr>`;
  headers.forEach(hd => { h += `<th style="background:${hdrBg};color:${hdrColor};padding:10px 12px;text-align:left;font-weight:700;font-size:9px;letter-spacing:0.5px">${hd}</th>`; });
  h += `</tr></thead><tbody>`;
  rows.forEach((row, i) => {
    const bg = stripe && i % 2 === 1 ? LGRAY : WHITE;
    h += `<tr>`;
    row.forEach((cell, ci) => {
      const fw = ci === 0 ? '600' : '400';
      h += `<td style="padding:9px 12px;border-bottom:1px solid #e2e8f0;background:${bg};color:${NAVY};font-weight:${fw}">${cell}</td>`;
    });
    h += `</tr>`;
  });
  h += `</tbody></table>`;
  return h;
}

function scoreColor(v) {
  if (v >= 8) return GREEN;
  if (v >= 6) return AMBER;
  return RED;
}

function scoreBadge(v) {
  const c = scoreColor(v);
  return `<span style="display:inline-block;background:${c};color:white;font-weight:800;font-size:13px;padding:4px 10px;border-radius:4px;margin-right:6px">${v}</span><span style="font-size:10px;color:${GRAY}">/ 10</span>`;
}

function riskBadge(level) {
  const colors = { 'HIGH': RED, 'MODERATE': AMBER, 'LOW': GREEN };
  const c = colors[level] || GRAY;
  return `<span style="display:inline-block;background:${c};color:white;font-weight:700;font-size:8px;padding:4px 10px;border-radius:4px;letter-spacing:0.5px">${level}</span>`;
}

function commentary(text) {
  return `<p style="font-size:10px;color:${GRAY};line-height:1.6;margin:8px 0 20px"><strong style="color:${NAVY}">Commentary.</strong> ${text}</p>`;
}

function pageBreak() {
  return `<div style="page-break-after:always"></div>${headerBar()}`;
}

// -- Pages ---------------------------------------------------------------

function coverPage() {
  const nameUpper = cityName.toUpperCase();
  const countryUpper = countryName.toUpperCase();
  return `
<div style="width:100%;min-height:100vh;margin:-20px -40px 0 -40px;padding:0;position:relative;overflow:hidden;page-break-after:always">
  <div style="width:100%;height:8px;background:linear-gradient(90deg,${GOLD},${GOLD_L})"></div>
  <div style="position:absolute;top:0;left:0;width:28px;height:100%;background:${NAVY2}"></div>
  <div style="background:#1a2332;padding:50px 60px 40px 70px;min-height:48vh;position:relative">
    <div style="font-size:22px;font-weight:900;color:${GOLD};letter-spacing:2px">LIVING COST ATLAS</div>
    <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:4px;border-bottom:1px solid rgba(255,255,255,0.15);padding-bottom:12px;display:inline-block">RELOCATION INTELLIGENCE SERIES &middot; 2026</div>
    <h1 style="font-size:32px;font-weight:600;color:${WHITE};margin:50px 0 16px;line-height:1.3">The Complete Cost of Living<br>& Relocation Guide</h1>
    <div style="font-size:${nameUpper.length + countryUpper.length > 30 ? '40' : '52'}px;font-weight:900;color:${GOLD};letter-spacing:2px;margin:20px 0 8px;line-height:1.1">${nameUpper}, ${countryUpper}</div>
    <div style="font-size:14px;color:${GOLD_L};letter-spacing:8px;margin-bottom:16px">2 0 2 6  E D I T I O N</div>
    <div style="width:80px;height:3px;background:${GOLD};margin:20px 0"></div>
    <p style="font-size:13px;color:rgba(255,255,255,0.55);font-style:italic;margin-top:16px">Data-Driven Insights for Remote Workers, Expats & Global Professionals</p>
    <p style="font-size:9px;color:rgba(255,255,255,0.35);margin-top:40px">Prepared by <strong style="color:rgba(255,255,255,0.55)">Living Cost Atlas Analytics Division</strong> | Relocation Intelligence Report | 2026</p>
  </div>
  <div style="width:100%;height:20px;background:linear-gradient(135deg,${GOLD} 0%,${GOLD_L} 100%);transform:skewY(-1.5deg);margin:-10px 0"></div>
  <div style="background:${NAVY2};padding:60px 70px;min-height:42vh;position:relative;overflow:hidden">
    <div style="position:absolute;bottom:-20px;right:30px;font-size:260px;font-weight:900;color:rgba(255,255,255,0.035);letter-spacing:-10px;line-height:1">LCA</div>
    <div style="position:absolute;bottom:30px;left:70px;right:70px">
      <div style="height:1px;background:rgba(255,255,255,0.08);margin-bottom:12px"></div>
      <div style="display:flex;justify-content:space-between">
        <span style="font-size:8px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3)">LIVING COST ATLAS RELOCATION INTELLIGENCE | CONFIDENTIAL</span>
        <span style="font-size:8px;font-weight:600;letter-spacing:1px;color:${GOLD}">${nameUpper} 2026 -- COST OF LIVING REPORT</span>
      </div>
    </div>
  </div>
</div>`;
}

function tocPage() {
  const items = [
    ['01','Executive Summary','3'],['02','Quick Fact Sheet','5'],['03','Detailed Cost Breakdown','7'],
    ['04','Monthly Budget Scenarios','10'],['05','Neighborhood Analysis','12'],['06','Work Infrastructure','14'],
    ['07','Safety & Quality of Life','15'],['08','City Comparison','16'],
    ['09','Pros & Cons Summary','18'],['10','Who Should Move?','19'],
    ['11','Risk Factors','20'],['12','LCA Index Methodology','21'],
    ['13','Final Verdict','22'],
    ['A','Appendix A -- First 30 Days','24'],
    ['B','Appendix B -- Scams & Gotchas','26'],
    ['C','Appendix C -- Visa Deep-Dive','27']
  ];
  let rows = items.map(([n,t,p]) => `
    <tr>
      <td style="padding:14px 12px;border-bottom:1px solid #e2e8f0;font-weight:800;color:${GOLD};font-size:13px;width:50px">${n}</td>
      <td style="padding:14px 12px;border-bottom:1px solid #e2e8f0;font-size:13px;color:${NAVY};font-weight:500">${t}</td>
      <td style="padding:14px 12px;border-bottom:1px solid #e2e8f0;font-size:13px;color:${NAVY};font-weight:700;text-align:right;width:50px">${p}</td>
    </tr>`).join('');

  return `
  <h1 style="font-size:30px;font-weight:800;color:${NAVY};margin-bottom:8px">Table of Contents</h1>
  ${goldRule()}
  <table style="width:100%;border-collapse:collapse">
    <thead><tr>
      <th style="background:${NAVY};color:${GOLD};padding:10px 12px;text-align:left;font-size:9px;letter-spacing:1px"></th>
      <th style="background:${NAVY};color:${GOLD};padding:10px 12px;text-align:left;font-size:9px;letter-spacing:1px">Section</th>
      <th style="background:${NAVY};color:${GOLD};padding:10px 12px;text-align:right;font-size:9px;letter-spacing:1px">Page</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>
  ${pageBreak()}`;
}

function execSummary() {
  const openerHtml = (intel && Array.isArray(intel.execSummary) && intel.execSummary.length)
    ? intel.execSummary
        .map(p => `<p style="font-size:11px;color:#374151;line-height:1.7;margin-bottom:14px">${p}</p>`)
        .join('')
    : `<p style="font-size:11px;color:#374151;line-height:1.7;margin-bottom:20px">${cityName} has positioned itself as a compelling relocation destination for remote workers, digital nomads, and international professionals. As of 2026, the ${countryName} ${city.continent === 'Europe' ? 'capital' : 'city'} offers a distinctive combination of ${city.tags.slice(0, 3).join(', ')}-oriented lifestyle, ${curStab.toLowerCase()} economic stability, and a cost profile that ${affordScore >= 6 ? 'remains competitive' : 'requires careful budgeting'} relative to its peer cities.</p>`;
  return `
  ${sectionTitle('01','Executive Summary')}
  ${openerHtml}

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin:24px 0 8px">Estimated Monthly Living Costs -- 2026</h3>
  ${tbl(
    ['Resident Profile',`Monthly Estimate (${city.currency})`,  'Lifestyle Descriptor'],
    [
      ['Budget Nomad',`${cur}${budgetTotal.toLocaleString()} -- ${cur}${Math.round(budgetTotal * 1.3).toLocaleString()}`,'Shared housing, local transport, home cooking'],
      ['Standard Remote Professional',`${cur}${stdTotal.toLocaleString()} -- ${cur}${Math.round(stdTotal * 1.3).toLocaleString()}`,'Private 1BR, coworking, regular dining out'],
      ['Premium Lifestyle Expat',`${cur}${premTotal.toLocaleString()} -- ${cur}${Math.round(premTotal * 1.5).toLocaleString()}+`,'Prime district, premium services']
    ]
  )}

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin:20px 0 8px">Key Strengths</h3>
  ${tbl(
    ['Strength','Commentary'],
    [
      [visaRemote ? 'Remote-Friendly Visa' : 'Visa Access', visaRemote ? `${visaType} available for remote workers. ${visaIncome ? `Minimum income requirement: ${cur}${visaIncome.toLocaleString()}/month.` : ''}` : `Entry via ${visaType}. ${visaStay}-month stay available.`],
      ['Digital Infrastructure',`Average WiFi speeds of ${wifi} Mbps. ${cowork > 0 ? `Coworking from ${cur}${cowork}/month.` : ''}`],
      ['Safety Profile',`Safety index: ${safetyIdx}/100. Crime level: ${crimeLevel}.`],
      ['Healthcare',`Healthcare quality score: ${healthcare}/100.`],
      ['English Proficiency',`English proficiency: ${english}/100 -- ${english >= 80 ? 'excellent' : english >= 60 ? 'good' : 'moderate'} for international residents.`]
    ]
  )}

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin:20px 0 8px">Key Risks</h3>
  ${tbl(
    ['Risk Factor','Impact Summary'],
    [
      ['Cost Trajectory',`Inflation rate: ${inflation}%. Rent volatility index: ${rentVol}/10. ${rentVol >= 7 ? 'Housing costs are rising significantly.' : 'Market relatively stable.'}`],
      ['Tax Burden',`Top personal income tax rate: ${taxTop}%. Corporate tax: ${taxCorp}%. Capital gains: ${taxCG}%.`],
      ['Currency Risk',`Currency stability: ${curStab}. ${curStab === 'Medium' || curStab === 'Low' ? 'Exchange rate fluctuations may impact purchasing power.' : 'Minimal FX risk.'}`]
    ],
    { hdrBg: '#7f1d1d', hdrColor: WHITE }
  )}

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin:20px 0 8px">Living Cost Atlas Index Score -- ${cityName} 2026</h3>
  ${tbl(
    ['Dimension','Weight','Score','Contribution'],
    [
      ['Affordability','30%',`${affordScore.toFixed(1)} / 10`,`${(affordScore * 0.30).toFixed(2)}`],
      ['Infrastructure','20%',`${infraScore.toFixed(1)} / 10`,`${(infraScore * 0.20).toFixed(2)}`],
      ['Safety','15%',`${safeScore.toFixed(1)} / 10`,`${(safeScore * 0.15).toFixed(2)}`],
      ['Quality of Life','20%',`${qolScore.toFixed(1)} / 10`,`${(qolScore * 0.20).toFixed(2)}`],
      ['Economic Stability','15%',`${econScore.toFixed(1)} / 10`,`${(econScore * 0.15).toFixed(2)}`],
      [`<strong>COMPOSITE</strong>`,`<strong>100%</strong>`,'--',`<strong>${lcaIndex} / 10</strong>`]
    ]
  )}
  <p style="font-size:10px;color:#374151;line-height:1.6"><strong>${lcaIndex}/10 (${lcaVerdict})</strong> -- ${lcaVerdict === 'STRONG BUY' ? `${cityName} ranks in the upper quartile of relocation destinations.` : lcaVerdict === 'BUY' ? `${cityName} represents solid value for international residents.` : `${cityName} offers selective appeal; careful planning recommended.`}</p>
  ${pageBreak()}`;
}

function quickFactSheet() {
  return `
  ${sectionTitle('02','Quick Fact Sheet')}
  ${tbl(
    ['Parameter','Value / Estimate','Context'],
    [
      ['Country',`${countryName}`,`${city.continent}`],
      ['Currency',`${city.currency} (${cur})`,`Stability: ${curStab}`],
      ['Rent -- 1BR City Centre',`${cur}${rentCenter.toLocaleString()} / month`,'Varies by district'],
      ['Rent -- 1BR Outside Centre',`${cur}${rentSuburb.toLocaleString()} / month`,'Commuter accessible'],
      ['Coworking (Hot Desk)',`${cur}${cowork} / month`,'Available citywide'],
      ['Internet Speed (avg.)',`${wifi} Mbps`,''],
      ['Safety Index',`${safetyIdx} / 100`,`Crime: ${crimeLevel}`],
      ['Visa',`${visaType}`,`${visaRemote ? 'Remote-worker friendly' : 'Standard entry'}`],
      ['Visa Processing',`${visaDays} days`,`Stay: ${visaStay} months`],
      ['Min. Income Req.',visaIncome ? `${cur}${visaIncome.toLocaleString()}/month` : 'None specified','For visa qualification'],
      ['Top Income Tax',`${taxTop}%`,'Personal income'],
      ['Corporate Tax',`${taxCorp}%`,''],
      ['Inflation Rate',`${inflation}%`,'Annual'],
      ['Public Transport',`${pubTrans} / 100`,''],
      ['Healthcare Quality',`${healthcare} / 100`,''],
      ['English Proficiency',`${english} / 100`,''],
      ['Airport Connectivity',`${airport} / 100`,''],
      ['Nomad Score',`${nomadScore} / 100`,'LCA composite']
    ]
  )}
  ${pageBreak()}`;
}

function detailedCostBreakdown() {
  return `
  ${sectionTitle('03','Detailed Cost Breakdown')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">Itemized monthly cost estimates across major expenditure categories for international residents in ${cityName}. All figures in ${city.currency} and reflect Q1 2026 estimates.</p>

  <h3 style="font-size:14px;font-weight:700;color:${NAVY};margin:16px 0 8px">Housing</h3>
  ${tbl(
    ['Accommodation Type',`Monthly Cost (${cur})`, 'Notes'],
    [
      ['Studio / 1BR -- City Centre',`${cur}${rentCenter.toLocaleString()}`,'Average; varies by district'],
      ['Studio / 1BR -- Outside Centre',`${cur}${rentSuburb.toLocaleString()}`,'Commuter areas'],
      ['2BR -- City Centre',`${cur}${Math.round(rentCenter * 1.5).toLocaleString()}`,'Estimated from 1BR rate'],
      ['2BR -- Outside Centre',`${cur}${Math.round(rentSuburb * 1.5).toLocaleString()}`,'Family-suitable'],
      ['Shared Room / Coliving',`${cur}${Math.round(rentSuburb * 0.5).toLocaleString()}`,'Budget option'],
      ['Short-term (Airbnb-style)',`${cur}${Math.round(rentCenter * 1.8).toLocaleString()}`,'Monthly rate; higher daily']
    ]
  )}

  <h3 style="font-size:14px;font-weight:700;color:${NAVY};margin:16px 0 8px">Food & Dining</h3>
  ${tbl(
    ['Category',`Daily Cost (${cur})`,'Monthly Estimate'],
    [
      ['Budget (cooking at home)',`${cur}${foodBudget}`,`${cur}${(foodBudget * 30).toLocaleString()}`],
      ['Standard (mix of cooking & dining)',`${cur}${foodStd}`,`${cur}${(foodStd * 30).toLocaleString()}`],
      ['Premium (frequent dining out)',`${cur}${foodPrem}`,`${cur}${(foodPrem * 30).toLocaleString()}`]
    ]
  )}
  ${intel && intel.cuisineNotes ? `<p style="font-size:10px;color:#374151;line-height:1.6;margin:10px 0 0;font-style:italic">${intel.cuisineNotes}</p>` : ''}

  <h3 style="font-size:14px;font-weight:700;color:${NAVY};margin:16px 0 8px">Transport & Connectivity</h3>
  ${tbl(
    ['Item',`Monthly Cost (${cur})`],
    [
      ['Public Transport Pass',`${cur}${transport}`],
      ['Coworking (Hot Desk)',`${cur}${cowork}`],
      ['Internet (Home)',`${cur}${Math.round(transport * 0.4)}`],
      ['Mobile Plan',`${cur}${Math.round(transport * 0.25)}`]
    ]
  )}
  ${pageBreak()}`;
}

function budgetScenarios() {
  return `
  ${sectionTitle('04','Monthly Budget Scenarios')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:20px">Three archetypal resident profiles for ${cityName} 2026.</p>

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin-bottom:8px">Profile 1 -- Budget Nomad</h3>
  ${tbl(
    ['Expense',`Amount (${cur})`],
    [
      ['Accommodation (shared/suburb)',`${cur}${rentSuburb.toLocaleString()}`],
      ['Food (home cooking)',`${cur}${(foodBudget * 30).toLocaleString()}`],
      ['Transport',`${cur}${transport}`],
      ['Internet + Mobile',`${cur}${Math.round(transport * 0.5)}`],
      ['Entertainment',`${cur}${Math.round(transport * 0.8)}`],
      [`<strong>TOTAL</strong>`,`<strong>${cur}${budgetTotal.toLocaleString()} -- ${cur}${Math.round(budgetTotal * 1.3).toLocaleString()}</strong>`]
    ]
  )}

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin:24px 0 8px">Profile 2 -- Standard Remote Professional</h3>
  ${tbl(
    ['Expense',`Amount (${cur})`],
    [
      ['Accommodation (1BR centre)',`${cur}${rentCenter.toLocaleString()}`],
      ['Food (mixed)',`${cur}${(foodStd * 30).toLocaleString()}`],
      ['Transport',`${cur}${transport}`],
      ['Coworking',`${cur}${cowork}`],
      ['Internet + Mobile',`${cur}${Math.round(transport * 0.5)}`],
      ['Entertainment + Dining',`${cur}${Math.round(transport * 2)}`],
      [`<strong>TOTAL</strong>`,`<strong>${cur}${stdTotal.toLocaleString()} -- ${cur}${Math.round(stdTotal * 1.3).toLocaleString()}</strong>`]
    ]
  )}

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin:24px 0 8px">Profile 3 -- Premium Lifestyle Expat</h3>
  ${tbl(
    ['Expense',`Amount (${cur})`],
    [
      ['Accommodation (premium 2BR)',`${cur}${Math.round(rentCenter * 2).toLocaleString()}`],
      ['Food (premium)',`${cur}${(foodPrem * 30).toLocaleString()}`],
      ['Transport (car + public)',`${cur}${(transport * 2)}`],
      ['Coworking (dedicated)',`${cur}${cowork * 2}`],
      ['Healthcare + Insurance',`${cur}${Math.round(rentCenter * 0.15)}`],
      ['Entertainment + Travel',`${cur}${Math.round(transport * 4)}`],
      [`<strong>TOTAL</strong>`,`<strong>${cur}${premTotal.toLocaleString()} -- ${cur}${Math.round(premTotal * 1.5).toLocaleString()}+</strong>`]
    ]
  )}
  ${pageBreak()}`;
}

function neighborhoodAnalysis() {
  let html = `${sectionTitle('05','Neighborhood Analysis')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">Five neighborhood profiles for ${cityName} evaluating rental economics, lifestyle character, and demographic fit.</p>`;

  neighborhoods.forEach((n, i) => {
    const ph = photos[i];
    const imgBlock = ph ? `
    <div style="margin:6px 0 8px;page-break-inside:avoid">
      <img src="${ph.url}" alt="${ph.caption}" style="width:100%;max-height:180px;object-fit:cover;border-radius:3px;border:1px solid #e2e8f0" />
      <p style="font-size:8.5px;color:${GRAY};font-style:italic;margin:4px 0 0">${ph.caption} -- photo via Wikimedia Commons (CC licence)</p>
    </div>` : '';
    html += `
    <h3 style="font-size:15px;font-weight:700;color:${NAVY};margin:${i > 0 ? '20' : '8'}px 0 4px">${n.name}</h3>
    <p style="font-size:10px;color:${GRAY};font-style:italic;margin-bottom:6px">District Type: ${n.type} | Est. 1BR Rent: ${n.rent}/month</p>
    ${imgBlock}
    <p style="font-size:10px;color:#374151;line-height:1.5;margin-bottom:4px">${n.desc}</p>
    <p style="font-size:10px;margin-bottom:12px"><strong>Best For --</strong> ${n.bestFor}</p>`;
  });
  html += pageBreak();
  return html;
}

function workInfrastructure() {
  return `
  ${sectionTitle('06','Work Infrastructure & Digital Readiness')}
  ${tbl(
    ['Dimension','Score','Assessment'],
    [
      ['Internet Speed',`${wifi} Mbps`,wifi >= 100 ? 'Excellent -- fiber widely available' : wifi >= 50 ? 'Good -- adequate for remote work' : 'Moderate -- may need backup'],
      ['Coworking Ecosystem',`${cur}${cowork}/mo`,cowork <= 200 ? 'Affordable coworking market' : 'Mid-to-premium pricing'],
      ['Public Transport',`${pubTrans}/100`,pubTrans >= 80 ? 'World-class transit system' : pubTrans >= 60 ? 'Functional public transport' : 'Car may be needed'],
      ['English Proficiency',`${english}/100`,english >= 80 ? 'Excellent -- business-ready' : english >= 60 ? 'Good -- functional for daily life' : 'Limited -- local language beneficial'],
      ['Airport Connectivity',`${airport}/100`,airport >= 85 ? 'Major international hub' : airport >= 70 ? 'Good connections' : 'Limited direct routes']
    ]
  )}
  ${commentary(`${cityName}'s digital infrastructure ${wifi >= 80 ? 'positions it well' : 'is adequate'} for remote workers. ${english >= 70 ? 'Strong English proficiency reduces friction for international professionals.' : 'Learning basic local language phrases is recommended.'}`)}
  ${pageBreak()}`;
}

function safetyQoL() {
  const qol = intel && intel.qolScores ? intel.qolScores : null;
  const baseRows = [
    ['Safety Index',`${safetyIdx}/100`,`Crime level: ${crimeLevel}`],
    ['Healthcare Quality',`${healthcare}/100`,'Public + private options'],
    ['Public Transport',`${pubTrans}/100`,'Daily commute viability'],
    ['English Proficiency',`${english}/100`,'Ease of integration'],
    ['Airport Access',`${airport}/100`,'Travel connectivity'],
    ['Nomad Score',`${nomadScore}/100`,'Overall remote-worker suitability']
  ];
  const qolRows = qol ? [
    ['Climate',`${qol.climate.score}/10`, qol.climate.note],
    ['Walkability',`${qol.walkability.score}/10`, qol.walkability.note],
    ['Healthcare',`${qol.healthcare.score}/10`, qol.healthcare.note],
    ['Safety (Lived)',`${qol.safety.score}/10`, qol.safety.note],
    ['Culture & Arts',`${qol.culture.score}/10`, qol.culture.note],
    ['Air Quality',`${qol.air_quality.score}/10`, qol.air_quality.note],
    ['Green Space',`${qol.green_space.score}/10`, qol.green_space.note]
  ] : null;
  return `
  ${sectionTitle('07','Safety & Quality of Life')}
  ${tbl(['Dimension','Score','Notes'], baseRows)}
  ${qolRows ? `
    <h3 style="font-size:13px;font-weight:700;color:${NAVY};margin:22px 0 8px;border-bottom:2px solid ${GOLD};padding-bottom:4px">Seven-Dimension Lived Quality Scorecard</h3>
    ${tbl(['Dimension','Score','Notes'], qolRows)}
  ` : ''}
  ${commentary(`${cityName} scores ${safetyIdx}/100 on safety, placing it ${safetyIdx >= 85 ? 'among the safest cities globally' : safetyIdx >= 70 ? 'in the safe-to-moderate range' : 'below the safety threshold for some relocators'}. Healthcare at ${healthcare}/100 ${healthcare >= 80 ? 'meets international standards' : 'may require private insurance for full coverage'}.`)}
  ${pageBreak()}`;
}

function cityComparison() {
  let compRows = peers.map(p => {
    const pRent = p.costs.accommodation.center * 30;
    const diff = ((pRent - rentCenter) / rentCenter * 100).toFixed(0);
    return [
      p.name,
      `${p.currencySymbol || '$'}${pRent.toLocaleString()}`,
      `${diff > 0 ? '+' : ''}${diff}%`,
      `${p.safety?.safetyIndex || '--'}/100`,
      `${p.digitalNomad?.overallScore || '--'}/100`
    ];
  });

  return `
  ${sectionTitle('08',`City Comparison -- ${cityName} vs. Peer Cities`)}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">${cityName} benchmarked against regionally appropriate peers. Rent differentials are expressed as percentage relative to ${cityName}.</p>
  ${peers.some(p => p.__peerRationale) ? `<ul style="font-size:10px;color:#374151;line-height:1.55;margin:0 0 14px 18px">${peers.filter(p => p.__peerRationale).map(p => `<li style="margin-bottom:3px"><strong>${p.name}</strong> -- ${p.__peerRationale}</li>`).join('')}</ul>` : ''}
  ${tbl(
    ['City','1BR Rent','vs. ' + cityName,'Safety','Nomad Score'],
    [
      [`<strong>${cityName} (baseline)</strong>`,`${cur}${rentCenter.toLocaleString()}`,'--',`${safetyIdx}/100`,`${nomadScore}/100`],
      ...compRows
    ]
  )}
  ${commentary(`Among peer cities, ${cityName} ${affordScore >= 7 ? 'offers competitive value' : 'sits at a moderate price point'}. ${peers.length > 0 ? `${peers[0].name} provides the closest comparison in lifestyle and cost profile.` : ''}`)}
  ${pageBreak()}`;
}

function prosCons() {
  // Hand-authored pros/cons when available
  if (intel && intel.prosCons && Array.isArray(intel.prosCons.pros) && Array.isArray(intel.prosCons.cons)) {
    const prosRows = intel.prosCons.pros.map(([k, v]) => [k, v]);
    const consRows = intel.prosCons.cons.map(([k, v]) => [k, v]);
    return `
    ${sectionTitle('09','Pros & Cons Summary')}
    <h3 style="font-size:16px;font-weight:700;color:${GREEN};margin-bottom:8px">Strengths</h3>
    ${tbl(['Strength','Detail'], prosRows)}
    <h3 style="font-size:16px;font-weight:700;color:${RED};margin:24px 0 8px">Limitations</h3>
    ${tbl(['Limitation','Detail'], consRows, { hdrBg: '#7f1d1d', hdrColor: WHITE })}
    ${pageBreak()}`;
  }
  const strengths = [];
  const limitations = [];

  if (safetyIdx >= 80) strengths.push(['High Safety',`Safety index ${safetyIdx}/100 -- one of the safer cities in ${city.continent}.`]);
  else if (safetyIdx >= 60) strengths.push(['Adequate Safety',`Safety index ${safetyIdx}/100 -- standard precautions apply.`]);
  else limitations.push(['Safety Concerns',`Safety index ${safetyIdx}/100 -- above-average vigilance recommended.`]);

  if (wifi >= 80) strengths.push(['Fast Internet',`${wifi} Mbps average -- excellent for remote work.`]);
  else limitations.push(['Internet Speed',`${wifi} Mbps -- may be limiting for bandwidth-heavy work.`]);

  if (visaRemote) strengths.push(['Remote Worker Visa',`${visaType} available.`]);
  else limitations.push(['No Dedicated Nomad Visa',`Entry via ${visaType}. May limit long-term stays.`]);

  if (affordScore >= 7) strengths.push(['Affordable',`Competitive cost of living relative to peer cities.`]);
  else limitations.push(['Cost Pressure',`Rents and cost of living above average for the region.`]);

  if (english >= 75) strengths.push(['English-Friendly',`English proficiency: ${english}/100.`]);
  else limitations.push(['Language Barrier',`English proficiency: ${english}/100. Local language skills helpful.`]);

  if (pubTrans >= 75) strengths.push(['Great Transit',`Public transport quality: ${pubTrans}/100.`]);
  if (healthcare >= 80) strengths.push(['Quality Healthcare',`Healthcare score: ${healthcare}/100.`]);
  if (taxTop <= 20) strengths.push(['Low Tax Burden',`Top personal rate: ${taxTop}%.`]);
  else if (taxTop >= 40) limitations.push(['High Tax Burden',`Top personal rate: ${taxTop}%.`]);
  if (inflation >= 6) limitations.push(['High Inflation',`${inflation}% annual inflation erodes purchasing power.`]);

  // Ensure at least 4 of each
  while (strengths.length < 4) strengths.push(['Growing Market',`${cityName} is developing its appeal for international residents.`]);
  while (limitations.length < 4) limitations.push(['Market Maturity',`Some services for expats are still developing.`]);

  return `
  ${sectionTitle('09','Pros & Cons Summary')}
  <h3 style="font-size:16px;font-weight:700;color:${GREEN};margin-bottom:8px">Strengths</h3>
  ${tbl(['Strength','Detail'], strengths.slice(0, 6))}
  <h3 style="font-size:16px;font-weight:700;color:${RED};margin:24px 0 8px">Limitations</h3>
  ${tbl(['Limitation','Detail'], limitations.slice(0, 6), { hdrBg: '#7f1d1d', hdrColor: WHITE })}
  ${pageBreak()}`;
}

function whoShouldMove() {
  // Hand-authored profiles + culture intro when available
  if (intel && intel.whoShouldMove) {
    const labels = {
      remoteWorker: 'Solo Remote Workers',
      digitalNomad: 'Digital Nomads (3-6 months)',
      family: 'Relocating Families',
      retiree: 'Retirees',
      entrepreneur: 'Entrepreneurs'
    };
    let html = `${sectionTitle('10',`Who Should Move to ${cityName}?`)}`;
    if (intel.cultureNotes) {
      html += `<p style="font-size:11px;color:#374151;line-height:1.65;margin-bottom:16px">${intel.cultureNotes}</p>`;
    }
    Object.entries(labels).forEach(([key, name]) => {
      const prof = intel.whoShouldMove[key];
      if (!prof) return;
      const verdict = prof.verdict || 'CONDITIONAL';
      const vColor = verdict === 'RECOMMENDED' ? GREEN : verdict === 'NOT RECOMMENDED' ? RED : AMBER;
      html += `
      <h3 style="font-size:14px;font-weight:700;color:${NAVY};margin:16px 0 4px">${name}</h3>
      <p style="font-size:10px;margin-bottom:4px"><span style="display:inline-block;background:${vColor};color:white;font-weight:700;font-size:8px;padding:3px 10px;border-radius:4px">${verdict}</span></p>
      <p style="font-size:10px;color:#374151;line-height:1.5;margin-bottom:8px">${prof.detail}</p>`;
    });
    html += pageBreak();
    return html;
  }
  const profiles = [
    ['Solo Remote Workers',nomadScore >= 75 ? 'RECOMMENDED' : 'CONDITIONAL', nomadScore >= 75 ? `${cityName} offers a strong environment for remote workers with ${wifi} Mbps WiFi and coworking at ${cur}${cowork}/month.` : `${cityName} is workable but may require adaptation. ${wifi < 50 ? 'Internet speeds may be limiting.' : ''}`],
    ['Digital Nomads (3-6 months)',visaRemote && affordScore >= 6 ? 'RECOMMENDED' : 'CONDITIONAL', visaRemote ? `${visaType} enables legal stays. Budget nomads can operate from ${cur}${budgetTotal.toLocaleString()}/month.` : `No dedicated nomad visa; tourist visa allows ${visaStay}-month stays.`],
    ['Relocating Families',healthcare >= 75 && safetyIdx >= 75 ? 'RECOMMENDED' : 'CONDITIONAL', `Safety: ${safetyIdx}/100. Healthcare: ${healthcare}/100. ${healthcare >= 75 ? 'International schooling available.' : 'Research schooling options carefully.'}`],
    ['Retirees',safetyIdx >= 75 && affordScore >= 6 ? 'RECOMMENDED' : 'CONDITIONAL', `${safetyIdx >= 75 ? 'Safe environment' : 'Moderate safety'}. Healthcare at ${healthcare}/100. Cost of living ${affordScore >= 6 ? 'manageable' : 'requires careful planning'} on retirement income.`],
    ['Entrepreneurs',taxCorp <= 20 && english >= 65 ? 'RECOMMENDED' : 'CONDITIONAL', `Corporate tax: ${taxCorp}%. ${english >= 65 ? 'Business-friendly English environment.' : 'Local language may be needed for business.'}`]
  ];

  let html = `${sectionTitle('10',`Who Should Move to ${cityName}?`)}`;
  profiles.forEach(([name, verdict, detail]) => {
    const vColor = verdict === 'RECOMMENDED' ? GREEN : AMBER;
    html += `
    <h3 style="font-size:14px;font-weight:700;color:${NAVY};margin:16px 0 4px">${name}</h3>
    <p style="font-size:10px;margin-bottom:4px"><span style="display:inline-block;background:${vColor};color:white;font-weight:700;font-size:8px;padding:3px 10px;border-radius:4px">${verdict}</span></p>
    <p style="font-size:10px;color:#374151;line-height:1.5;margin-bottom:8px">${detail}</p>`;
  });
  html += pageBreak();
  return html;
}

function riskFactors() {
  // Hand-authored risks when available
  if (intel && Array.isArray(intel.risks) && intel.risks.length) {
    const rows = intel.risks.map(r => [r.vector, riskBadge(r.level), r.assessment]);
    return `
    ${sectionTitle('11','Risk Factors & Economic Outlook')}
    ${tbl(['Risk Vector','Level','Assessment'], rows)}
    ${pageBreak()}`;
  }
  return `
  ${sectionTitle('11','Risk Factors & Economic Outlook')}
  ${tbl(
    ['Risk Vector','Level','Assessment'],
    [
      ['Housing Cost Inflation',riskBadge(rentVol >= 7 ? 'HIGH' : rentVol >= 5 ? 'MODERATE' : 'LOW'),`Rent volatility index: ${rentVol}/10. ${rentVol >= 7 ? 'Significant upward pressure on rents.' : 'Market relatively stable.'}`],
      ['Currency / FX Risk',riskBadge(curStab === 'High' || curStab === 'Very High' ? 'LOW' : 'MODERATE'),`Currency stability: ${curStab}. Inflation: ${inflation}%.`],
      ['Tax Policy Risk',riskBadge(taxTop >= 40 ? 'MODERATE' : 'LOW'),`Top rate: ${taxTop}%. Tax policy ${taxTop >= 40 ? 'may change -- monitor updates' : 'currently favorable'}.`],
      ['Visa / Regulatory',riskBadge(visaDays >= 90 ? 'MODERATE' : 'LOW'),`Processing: ${visaDays} days. ${visaRemote ? 'Remote visa available.' : 'No dedicated remote visa.'}`],
      ['Safety',riskBadge(safetyIdx >= 75 ? 'LOW' : safetyIdx >= 55 ? 'MODERATE' : 'HIGH'),`Safety index: ${safetyIdx}/100. Crime: ${crimeLevel}.`],
      ['Infrastructure',riskBadge(pubTrans >= 70 ? 'LOW' : 'MODERATE'),`Transit: ${pubTrans}/100. Healthcare: ${healthcare}/100.`]
    ]
  )}
  ${pageBreak()}`;
}

function methodologyPage() {
  return `
  ${sectionTitle('12','Living Cost Atlas Index Methodology')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">The LCA Index is a composite scoring framework providing standardized relocation intelligence across global cities.</p>
  ${tbl(
    ['Dimension','Weight','Data Sources'],
    [
      ['Affordability','30%','Rent indices, grocery costs, transport, coworking pricing'],
      ['Infrastructure','20%','Internet speed, public transport, healthcare, airport connectivity'],
      ['Safety','15%','Crime indices, political stability, emergency services'],
      ['Quality of Life','20%','Climate, walkability, culture, healthcare access'],
      ['Economic Stability','15%','Currency stability, inflation, GDP growth, policy environment']
    ]
  )}
  <div style="background:${LGRAY};border:2px solid #e2e8f0;border-radius:8px;padding:16px 20px;margin:16px 0 20px;text-align:center">
    <p style="font-size:11px;font-weight:700;color:${NAVY};margin:0"><strong>LCA Index</strong> = (Affordability x 0.30) + (Infrastructure x 0.20) + (Safety x 0.15) + (Quality of Life x 0.20) + (Economic Stability x 0.15)</p>
  </div>
  ${tbl(
    ['Score Range','Classification','Guidance'],
    [
      ['8.0 -- 10.0','STRONG BUY','Top-tier destination; plan actively'],
      ['6.5 -- 7.99','BUY','Solid destination; proceed with planning'],
      ['5.0 -- 6.49','HOLD','Selective appeal; detailed research required'],
      ['Below 5.0','CAUTION','Significant trade-offs; specialist advice recommended']
    ]
  )}
  ${pageBreak()}`;
}

function finalVerdict() {
  return `
  ${sectionTitle('13','Final Verdict')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:20px">Living Cost Atlas's assessment of ${cityName} as a 2026 relocation destination.</p>

  <div style="display:flex;gap:0;margin:20px 0 28px">
    <div style="flex:1;background:${NAVY};padding:20px;text-align:center;border-radius:8px 0 0 8px">
      <div style="font-size:10px;color:${GOLD};font-weight:600;letter-spacing:1px;margin-bottom:8px">LCA Index</div>
      <div style="font-size:40px;font-weight:900;color:${WHITE}">${lcaIndex}</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.5)">out of 10.0</div>
    </div>
    <div style="flex:1;background:${NAVY};padding:20px;text-align:center;border-left:1px solid rgba(255,255,255,0.1)">
      <div style="font-size:10px;color:${GOLD};font-weight:600;letter-spacing:1px;margin-bottom:8px">Classification</div>
      <div style="font-size:22px;font-weight:900;color:${WHITE};margin-top:10px">${lcaVerdict}</div>
    </div>
    <div style="flex:1;background:${NAVY};padding:20px;text-align:center;border-left:1px solid rgba(255,255,255,0.1);border-radius:0 8px 8px 0">
      <div style="font-size:10px;color:${GOLD};font-weight:600;letter-spacing:1px;margin-bottom:8px">Recommendation</div>
      <div style="font-size:22px;font-weight:900;color:${WHITE};margin-top:10px">${lcaVerdict === 'STRONG BUY' || lcaVerdict === 'BUY' ? 'PROCEED<br>WITH PLANNING' : 'RESEARCH<br>FURTHER'}</div>
    </div>
  </div>

  <div style="background:${LGRAY};border-left:4px solid ${GOLD};padding:10px 16px;margin:8px 0 20px">
    <p style="font-size:10px;color:${NAVY};font-weight:600;margin:0">${cityName} scores ${lcaIndex}/10 on the Living Cost Atlas Index, classified as ${lcaVerdict}. ${lcaVerdict === 'STRONG BUY' ? 'This is one of the strongest relocation destinations available.' : lcaVerdict === 'BUY' ? `${cityName} offers solid fundamentals for international residents.` : `Prospective relocators should conduct thorough due diligence before committing.`}</p>
  </div>

  ${intel && intel.verdictParagraphs ? `
    <h3 style="font-size:13px;font-weight:700;color:${NAVY};margin:22px 0 8px;border-bottom:2px solid ${GOLD};padding-bottom:4px">Verdict for Digital Nomads</h3>
    <p style="font-size:11px;color:#374151;line-height:1.65;margin-bottom:14px">${intel.verdictParagraphs.nomads || ''}</p>
    <h3 style="font-size:13px;font-weight:700;color:${NAVY};margin:18px 0 8px;border-bottom:2px solid ${GOLD};padding-bottom:4px">Verdict for Families</h3>
    <p style="font-size:11px;color:#374151;line-height:1.65;margin-bottom:14px">${intel.verdictParagraphs.families || ''}</p>
    <h3 style="font-size:13px;font-weight:700;color:${NAVY};margin:18px 0 8px;border-bottom:2px solid ${GOLD};padding-bottom:4px">Verdict for Founders &amp; Entrepreneurs</h3>
    <p style="font-size:11px;color:#374151;line-height:1.65;margin-bottom:14px">${intel.verdictParagraphs.founders || ''}</p>
  ` : ''}

  ${intel && intel.closingStatement ? `
    <div style="background:${NAVY};color:${WHITE};padding:16px 20px;margin:20px 0;border-radius:8px;border-left:4px solid ${GOLD}">
      <div style="font-size:10px;color:${GOLD};font-weight:700;letter-spacing:1.5px;margin-bottom:6px">CLOSING STATEMENT</div>
      <p style="font-size:11px;line-height:1.65;margin:0">${intel.closingStatement}</p>
    </div>
  ` : ''}

  <p style="font-size:10px;color:${GRAY};text-align:center;margin-top:30px">&#169; 2026 Living Cost Atlas. All rights reserved.</p>`;
}


// -- Assemble full HTML --------------------------------------------------

function setupGuideAppendix() {
  if (!setup) return '';
  const bankRows = (setup.banking || []).map(([name, detail]) => [name, detail]);
  const simRows  = (setup.sim || []).map(([name, detail]) => [name, detail]);
  const coRows   = (setup.coworking || []).map(([name, area, detail]) => [name, area, detail]);
  const appsHtml = (setup.apps || []).map(a => `<li style="margin-bottom:4px">${a}</li>`).join('');
  const tlHtml   = (setup.timeline || []).map((t,i) => `
    <div style="display:flex;align-items:flex-start;margin-bottom:10px">
      <div style="flex:0 0 56px;background:${GOLD};color:${NAVY};font-weight:800;font-size:10px;padding:6px 8px;border-radius:3px;text-align:center">W${i+1}</div>
      <p style="flex:1;font-size:10.5px;color:#374151;line-height:1.55;margin:0 0 0 10px">${t}</p>
    </div>`).join('');
  return `
  ${sectionTitle('A','Appendix: Getting Set Up -- Your First 30 Days')}
  <p style="font-size:11px;color:#374151;line-height:1.7;margin-bottom:16px">A practical field handbook for the first month in ${cityName}. Banking, mobile, coworking, essential apps, and a week-by-week bureaucracy timeline -- the real operational sequence that determines whether your relocation stalls or stabilises.</p>

  <h3 style="font-size:13px;font-weight:700;color:${NAVY};margin:20px 0 8px;border-bottom:2px solid ${GOLD};padding-bottom:4px">Banking</h3>
  ${tbl(['Provider','Notes'], bankRows)}

  <h3 style="font-size:13px;font-weight:700;color:${NAVY};margin:22px 0 8px;border-bottom:2px solid ${GOLD};padding-bottom:4px">Mobile / SIM</h3>
  ${tbl(['Operator','Plan & Price'], simRows)}

  <h3 style="font-size:13px;font-weight:700;color:${NAVY};margin:22px 0 8px;border-bottom:2px solid ${GOLD};padding-bottom:4px">Coworking -- Named Recommendations</h3>
  ${tbl(['Space','Area','Price & Vibe'], coRows)}

  <h3 style="font-size:13px;font-weight:700;color:${NAVY};margin:22px 0 8px;border-bottom:2px solid ${GOLD};padding-bottom:4px">Essential Apps</h3>
  <ul style="font-size:10.5px;color:#374151;line-height:1.55;margin:0 0 14px 18px">${appsHtml}</ul>

  <h3 style="font-size:13px;font-weight:700;color:${NAVY};margin:22px 0 10px;border-bottom:2px solid ${GOLD};padding-bottom:4px">Week-by-Week Timeline</h3>
  ${tlHtml}

  ${pageBreak()}`;
}

function scamsAppendix() {
  if (!scams || !scams.length) return '';
  const rows = scams.map(([title, detail]) => [title, detail]);
  return `
  ${sectionTitle('B','Appendix: Common Scams & Gotchas')}
  <p style="font-size:11px;color:#374151;line-height:1.7;margin-bottom:14px">The defensive manual. These are the recurring scams, rent-hustles, and bureaucratic traps that cost new arrivals real money in ${cityName}. Each entry is a known-pattern with the counter-move in one line.</p>
  ${tbl(['Scam / Gotcha','How to defuse'], rows, { headerBg: NAVY, headerColor: GOLD })}
  <p style="font-size:10px;color:${GRAY};margin-top:12px;font-style:italic">Patterns rotate; treat this as a baseline, not an exhaustive list. When in doubt, walk away.</p>
  ${pageBreak()}`;
}

function visaAppendix() {
  if (!visa) return '';
  const p = visa.primary;
  const primaryRows = [
    ['Eligibility', p.eligibility],
    ['Processing Time', p.processing],
    ['Cost', p.cost],
    ['Stay Duration', p.stay],
    ['Perks & Benefits', p.perks]
  ];
  const secRows = (visa.secondary || []).map(([name, detail]) => [name, detail]);
  const pitfalls = (visa.pitfalls || []).map(x => `<li style="margin-bottom:6px">${x}</li>`).join('');
  return `
  ${sectionTitle('C','Appendix: Visa Deep-Dive')}
  <p style="font-size:11px;color:#374151;line-height:1.7;margin-bottom:14px">The full operational read on ${cityName}\'s long-stay pathways -- primary visa route, secondary fallbacks, and the non-obvious pitfalls that derail applicants. Cross-reference with your citizenship and tax residency before filing.</p>

  <div style="background:${LGRAY};padding:14px 16px;border-left:4px solid ${GOLD};margin-bottom:14px">
    <div style="font-size:9px;font-weight:800;color:${GOLD};letter-spacing:1.2px;margin-bottom:4px">PRIMARY PATHWAY</div>
    <h3 style="font-size:15px;font-weight:800;color:${NAVY};margin:0 0 6px">${p.name}</h3>
    <p style="font-size:10.5px;color:#374151;line-height:1.6;margin:0">${p.intro}</p>
  </div>

  ${tbl(['Field','Detail'], primaryRows)}

  <h3 style="font-size:13px;font-weight:700;color:${NAVY};margin:22px 0 8px;border-bottom:2px solid ${GOLD};padding-bottom:4px">Secondary Pathways</h3>
  ${tbl(['Route','Summary'], secRows)}

  <h3 style="font-size:13px;font-weight:700;color:${NAVY};margin:22px 0 8px;border-bottom:2px solid ${GOLD};padding-bottom:4px">Non-Obvious Pitfalls</h3>
  <ul style="font-size:10.5px;color:#374151;line-height:1.6;margin:0 0 10px 18px">${pitfalls}</ul>

  <p style="font-size:9.5px;color:${GRAY};font-style:italic;margin-top:10px">Immigration rules change; verify current fees and thresholds on the official government portal before filing. This guide reflects 2026 Q1 status.</p>
  ${pageBreak()}`;
}

function previewUpsellPage() {
  return `
  <div style="padding:60px 40px 40px;text-align:center">
    <div style="display:inline-block;background:${GOLD};color:${NAVY};font-size:10px;font-weight:800;letter-spacing:2px;padding:6px 14px;border-radius:3px;margin-bottom:20px">END OF FREE PREVIEW</div>
    <h1 style="font-size:34px;font-weight:800;color:${NAVY};margin:10px 0 16px;line-height:1.15">You&apos;ve seen 5 of ${cityName === 'Lisbon' ? '26' : '28'} pages.</h1>
    <p style="font-size:14px;color:#374151;line-height:1.7;max-width:520px;margin:0 auto 24px">The complete <strong>Living Cost Atlas ${cityName} 2026</strong> guide includes:</p>
    <ul style="list-style:none;padding:0;max-width:460px;margin:0 auto 28px;text-align:left;font-size:12px;line-height:1.8;color:#111827">
      <li style="padding:4px 0"><span style="color:${GOLD};font-weight:800">+</span>&nbsp; Detailed cost breakdown across 6 categories</li>
      <li style="padding:4px 0"><span style="color:${GOLD};font-weight:800">+</span>&nbsp; 3 monthly budget scenarios (Nomad / Standard / Premium)</li>
      <li style="padding:4px 0"><span style="color:${GOLD};font-weight:800">+</span>&nbsp; 5 real neighborhood profiles with rent + photos</li>
      <li style="padding:4px 0"><span style="color:${GOLD};font-weight:800">+</span>&nbsp; Peer-city benchmark vs 4 regional alternatives</li>
      <li style="padding:4px 0"><span style="color:${GOLD};font-weight:800">+</span>&nbsp; Full 7-dimension Quality-of-Life scorecard</li>
      <li style="padding:4px 0"><span style="color:${GOLD};font-weight:800">+</span>&nbsp; "Who Should Move?" verdicts by 5 profiles</li>
      <li style="padding:4px 0"><span style="color:${GOLD};font-weight:800">+</span>&nbsp; 6 named risk factors with mitigation</li>
      <li style="padding:4px 0"><span style="color:${GOLD};font-weight:800">+</span>&nbsp; Appendix A: First 30 Days operational handbook</li>
      <li style="padding:4px 0"><span style="color:${GOLD};font-weight:800">+</span>&nbsp; Appendix B: 6 city-specific scams &amp; defences</li>
      <li style="padding:4px 0"><span style="color:${GOLD};font-weight:800">+</span>&nbsp; Appendix C: Visa deep-dive + pitfalls</li>
    </ul>
    <div style="background:${NAVY};color:${WHITE};padding:22px 24px;border-radius:4px;max-width:420px;margin:0 auto 16px">
      <div style="font-size:10px;color:${GOLD};letter-spacing:1.5px;margin-bottom:6px">COMPLETE GUIDE</div>
      <div style="font-size:32px;font-weight:800;color:${WHITE};margin-bottom:2px">&euro;9.99</div>
      <div style="font-size:10.5px;color:#cbd5e1;margin-bottom:12px">One-time, instant download, lifetime updates to 2026 edition.</div>
      <div style="display:inline-block;background:${GOLD};color:${NAVY};font-size:13px;font-weight:800;letter-spacing:1.2px;padding:11px 26px;border-radius:3px">livingcostatlas.com/ebook/${slug}</div>
    </div>
    <p style="font-size:9px;color:${GRAY};font-style:italic;margin-top:14px">Thank you for reading the preview. -- Living Cost Atlas research team</p>
  </div>`;
}

function buildPreviewHTML() {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #111827; background: #fff; }
.page-content { padding: 20px 40px 40px; }
h2 { page-break-after: avoid; }
table { page-break-inside: auto; }
tr { page-break-inside: avoid; }
</style></head>
<body>
  ${coverPage()}
  <div class="page-content">
    ${headerBar()}
    ${execSummary()}
    ${quickFactSheet()}
    ${previewUpsellPage()}
  </div>
</body></html>`;
}

function buildFullHTML() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @page {
    size: A4;
    margin: 0;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 11px;
    color: #111827;
    background: #fff;
  }
  .page-content {
    padding: 20px 40px 40px;
  }
  h2 { page-break-after: avoid; }
  table { page-break-inside: auto; }
  tr { page-break-inside: avoid; }
</style>
</head>
<body>
  ${coverPage()}
  <div class="page-content">
    ${headerBar()}
    ${tocPage()}
    ${execSummary()}
    ${quickFactSheet()}
    ${detailedCostBreakdown()}
    ${budgetScenarios()}
    ${neighborhoodAnalysis()}
    ${workInfrastructure()}
    ${safetyQoL()}
    ${cityComparison()}
    ${prosCons()}
    ${whoShouldMove()}
    ${riskFactors()}
    ${methodologyPage()}
    ${finalVerdict()}
    ${setupGuideAppendix()}
    ${scamsAppendix()}
    ${visaAppendix()}
  </div>
</body>
</html>`;
}

// -- Generate PDF --------------------------------------------------------

async function main() {
  console.log(`Generating Living Cost Atlas ${cityName} 2026 eBook...`);

  const html = isPreview ? buildPreviewHTML() : buildFullHTML();

  const htmlPath = OUT.replace('.pdf', '.html');
  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log('HTML written to', htmlPath);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle2', timeout: 120000 });

  await page.pdf({
    path: OUT,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    displayHeaderFooter: false
  });

  await browser.close();
  console.log('PDF generated:', OUT);

  const stats = fs.statSync(OUT);
  console.log('File size:', (stats.size / 1024).toFixed(1), 'KB');
}

main().catch(err => { console.error(err); process.exit(1); });
