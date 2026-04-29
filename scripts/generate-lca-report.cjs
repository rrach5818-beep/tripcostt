#!/usr/bin/env node
/**
 * generate-lca-report.js
 *
 * Bridge: cityDB + cityIntel + lcaCityMeta -> CITY payload JSON -> Python ReportLab engine.
 *
 * Usage:
 *   node scripts/generate-lca-report.js <slug>
 *   node scripts/generate-lca-report.js lisbon
 *
 * Output: public/ebooks/LivingCostAtlas_<City>_2026.pdf
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const PYTHON = process.env.LCA_PYTHON || 'C:/Users/DELL/AppData/Local/Programs/Python/Python312/python.exe';
const ENGINE = path.join(__dirname, 'lca_report_engine.py');
const YEAR = '2026';
const ROOT = path.resolve(__dirname, '..');

// ── Load data sources ──────────────────────────────────────────────────────
function loadCityDB() {
  const src = fs.readFileSync(path.join(ROOT, 'src/data/cityDB.js'), 'utf-8');
  const m = src.match(/export\s+const\s+cityDB\s*=\s*(\[[\s\S]*\]);?\s*$/m);
  if (!m) throw new Error('Could not extract cityDB array from cityDB.js');
  const arr = eval(m[1]); // trusted local source
  const map = {};
  arr.forEach(c => { map[c.slug] = c; });
  return map;
}

function loadCityIntel() {
  // cityIntel.js uses ESM `export const`; tweak to CommonJS in a temp scope
  const src = fs.readFileSync(path.join(ROOT, 'scripts/data/cityIntel.js'), 'utf-8');
  const sandbox = { exports: {} };
  const cjs = src
    .replace(/export\s+const\s+/g, 'sandbox.')
    .replace(/^\s*\/\/.*$/gm, '');
  // eslint-disable-next-line no-new-func
  new Function('sandbox', cjs)(sandbox);
  return {
    intel: sandbox.CITY_INTEL || {},
    visas: sandbox.CITY_VISAS || {},
    scams: sandbox.CITY_SCAMS || {},
    setup: sandbox.SETUP_GUIDES || {},
  };
}

function loadMeta() {
  return require('./data/lcaCityMeta.cjs');
}

// ── Helpers ────────────────────────────────────────────────────────────────
function fmt(n) { return n.toLocaleString('en-US'); }
function range(low, high, sym) { return `${sym}${fmt(low)} – ${sym}${fmt(high)}`; }
function pct(score10) { return `${score10.toFixed(1)} / 10`; }

function englishLabel(score) {
  if (score >= 85) return 'Very High';
  if (score >= 70) return 'High';
  if (score >= 55) return 'Moderate';
  return 'Low';
}

function score10From100(v100) { return Math.max(0, Math.min(10, +(v100 / 10).toFixed(1))); }

// ── Build CITY payload ────────────────────────────────────────────────────
function buildPayload(slug) {
  const cityDB = loadCityDB();
  const { intel: CITY_INTEL } = loadCityIntel();
  const META = loadMeta();

  const city = cityDB[slug];
  if (!city) throw new Error(`City "${slug}" not found in cityDB.js`);
  const intel = CITY_INTEL[slug];
  if (!intel) throw new Error(`City "${slug}" missing in cityIntel.js -- add an entry first`);
  const meta = META[slug];
  if (!meta) throw new Error(`City "${slug}" missing in lcaCityMeta.js -- add an entry first`);

  const sym = city.currencySymbol && city.currencySymbol.trim() ? city.currencySymbol.trim() : (city.currency === 'THB' ? '฿' : city.currency || '$');
  const code = city.currency || 'USD';
  // cityDB stores nightly-rate equivalents; calibrate to long-term monthly lease.
  // Per-city override possible via meta.rentCalibration (default 0.55).
  const RENT_CAL = meta.rentCalibration ?? 0.55;
  const rentCenter = Math.round(city.costs.accommodation.center * 30 * RENT_CAL);
  const rentSuburb = Math.round(city.costs.accommodation.suburb * 30 * RENT_CAL);
  const foodB = city.costs.food.budget;
  const foodS = city.costs.food.standard;
  const foodP = city.costs.food.premium;
  const transport = city.costs.transport;
  const cowork = city.costs.coworking;
  const wifi = city.digitalNomad?.wifiSpeed || 100;

  // ── Rent ranges (derived from center daily × room multiplier × ±15%) ──
  const r = (mult) => {
    const lo = Math.round(rentCenter * mult * 0.85 / 50) * 50;
    const hi = Math.round(rentCenter * mult * 1.15 / 50) * 50;
    return `${sym}${fmt(lo)} – ${sym}${fmt(hi)}`;
  };
  const rs = (mult) => {
    const lo = Math.round(rentSuburb * mult * 0.85 / 50) * 50;
    const hi = Math.round(rentSuburb * mult * 1.15 / 50) * 50;
    return `${sym}${fmt(lo)} – ${sym}${fmt(hi)}`;
  };

  // ── Build neighborhoods (synthesize 4 pros / 4 cons) ──
  const neighborhoods = intel.neighborhoods.map((n, i) => {
    const rent1br_lo = Math.round(rentCenter * n.rentRatio * 0.85 / 50) * 50;
    const rent1br_hi = Math.round(rentCenter * n.rentRatio * 1.15 / 50) * 50;
    const rent2br_lo = Math.round(rentCenter * n.rentRatio * 1.5 * 0.85 / 50) * 50;
    const rent2br_hi = Math.round(rentCenter * n.rentRatio * 1.5 * 1.15 / 50) * 50;
    const overrides = (meta.neighborhoodOverrides || {})[n.name] || {};
    return {
      name: n.name,
      type: n.character,
      rent_1br: `${sym}${fmt(rent1br_lo)} – ${sym}${fmt(rent1br_hi)} / month`,
      rent_2br: `${sym}${fmt(rent2br_lo)} – ${sym}${fmt(rent2br_hi)} / month`,
      vibe: n.oneLineDesc,
      pros: overrides.pros || meta.defaultNeighborhoodPros(n),
      cons: overrides.cons || meta.defaultNeighborhoodCons(n),
      best_for: n.bestFor,
    };
  });

  // ── Peers (subject + 4 from cityIntel) ──
  const subject = {
    city: `${city.name}, ${city.country}`,
    is_subject: true,
    rent_1br: range(Math.round(rentCenter * 0.85), Math.round(rentCenter * 1.15), sym),
    vs_rent: 'Baseline',
    food_monthly: range(foodB * 30, foodS * 30, sym),
    vs_food: 'Baseline',
    total_std: range(rentCenter + foodS * 30 + transport + cowork - 200, rentCenter + foodS * 30 + transport + cowork + 400, sym),
    vs_total: 'Baseline 100%',
    lca_score: pct(score10From100(city.digitalNomad?.overallScore || 75)),
    visa: city.visa.type,
  };
  const subjectMonthly = rentCenter + foodS * 30 + transport + cowork;
  const peers = [subject];
  for (const p of intel.peerCities.slice(0, 4)) {
    const pcity = cityDB[p.slug];
    if (!pcity) continue;
    const pRent = Math.round(pcity.costs.accommodation.center * 30);
    const pFood = pcity.costs.food.standard * 30;
    const pTotal = pRent + pFood + (pcity.costs.transport || 0) + (pcity.costs.coworking || 0);
    const psym = pcity.currencySymbol && pcity.currencySymbol.trim() ? pcity.currencySymbol.trim() : (pcity.currency === 'THB' ? '฿' : pcity.currency || '$');
    const deltaTotal = ((pTotal - subjectMonthly) / subjectMonthly) * 100;
    const deltaRent = ((pRent - rentCenter) / rentCenter) * 100;
    const deltaFood = ((pFood - foodS * 30) / (foodS * 30)) * 100;
    const sign = (n) => (n >= 0 ? '+' : '');
    peers.push({
      city: `${pcity.name}, ${pcity.country}`,
      is_subject: false,
      rent_1br: range(Math.round(pRent * 0.85), Math.round(pRent * 1.15), psym),
      vs_rent: `${sign(deltaRent)}${deltaRent.toFixed(0)}%`,
      food_monthly: range(pcity.costs.food.budget * 30, pFood, psym),
      vs_food: `${sign(deltaFood)}${deltaFood.toFixed(0)}%`,
      total_std: range(Math.round(pTotal * 0.85), Math.round(pTotal * 1.15), psym),
      vs_total: `${sign(deltaTotal)}${deltaTotal.toFixed(0)}%`,
      lca_score: pct(score10From100(pcity.digitalNomad?.overallScore || 70)),
      visa: pcity.visa?.type || 'See country guide',
    });
  }

  // ── Pros / Cons ──
  const pros = (intel.prosCons?.pros || []).slice(0, 8);
  const cons = (intel.prosCons?.cons || []).slice(0, 8);

  // ── Who-should-move ──
  const verdictColor = (v) => v === 'RECOMMENDED' ? 'green' : v === 'CONDITIONAL' ? 'amber' : v === 'CAUTION' ? 'red' : 'teal';
  const verdictLabel = (v) => v === 'RECOMMENDED' ? 'STRONG RECOMMEND' : v === 'CONDITIONAL' ? 'CONDITIONAL' : v === 'CAUTION' ? 'CAUTION' : v;
  const w = intel.whoShouldMove || {};
  const who = [
    ['Solo Digital Nomads',                w.digitalNomad?.verdict ? verdictLabel(w.digitalNomad.verdict) : 'RECOMMEND', verdictColor(w.digitalNomad?.verdict), w.digitalNomad?.detail || 'See full report.'],
    ['Couples Without Children',           w.remoteWorker?.verdict ? verdictLabel(w.remoteWorker.verdict) : 'RECOMMEND', verdictColor(w.remoteWorker?.verdict), w.remoteWorker?.detail || 'See full report.'],
    ['Families with School-Age Children',  w.family?.verdict ? verdictLabel(w.family.verdict) : 'CONDITIONAL', verdictColor(w.family?.verdict), w.family?.detail || 'See full report.'],
    ['Startup Founders / Entrepreneurs',   w.entrepreneur?.verdict ? verdictLabel(w.entrepreneur.verdict) : 'CONDITIONAL', verdictColor(w.entrepreneur?.verdict), w.entrepreneur?.detail || 'See full report.'],
    ['Retirees',                           w.retiree?.verdict ? verdictLabel(w.retiree.verdict) : 'CONDITIONAL', verdictColor(w.retiree?.verdict), w.retiree?.detail || 'See full report.'],
  ];

  // ── Risks ──
  const risks = (intel.risks || []).slice(0, 6).map(r => {
    const lvl = r.level === 'HIGH' ? 'HIGH MONITOR' : r.level === 'MODERATE' ? 'MODERATE' : r.level;
    const col = r.level === 'HIGH' ? 'red' : r.level === 'MODERATE' ? 'amber' : r.level === 'LOW' ? 'green' : 'teal';
    return [r.vector, lvl, col, r.assessment];
  });

  // ── Infra scores 8-point ──
  const infraScores = {
    'Internet Reliability':          score10From100(Math.min(100, wifi * 0.55 + 35)),
    'Coworking Ecosystem':           score10From100((city.digitalNomad?.overallScore || 70) * 0.95),
    'Startup & Business Ecosystem':  meta.infraScores?.startup ?? 6.5,
    'English Language Friendliness': score10From100(city.infrastructure?.englishProficiency || 60),
    'Banking & Financial Services':  meta.infraScores?.banking ?? 6.5,
    'Tax System Complexity':         meta.infraScores?.tax ?? 6.0,
    'Visa & Residency Pathway':      meta.infraScores?.visa ?? (city.visa?.remoteFriendly ? 7.5 : 5.5),
    'Office Supply & Business Svcs': meta.infraScores?.office ?? 7.0,
  };
  const infraNotes = meta.infraNotes;

  // ── QoL scores 7-point (from cityIntel.qolScores) ──
  const qol = intel.qolScores || {};
  const qolScores = {
    'Crime Rate & Personal Safety':  qol.safety?.score ?? score10From100(city.safety?.safetyIndex || 65),
    'Healthcare Quality':            qol.healthcare?.score ?? score10From100(city.infrastructure?.healthcareQuality || 70),
    'Walkability':                   qol.walkability?.score ?? 6.5,
    'Public Transport Efficiency':   score10From100(city.infrastructure?.publicTransportQuality || 70),
    'Air Quality':                   qol.air_quality?.score ?? 6.5,
    'Climate Comfort':               qol.climate?.score ?? 7.0,
    'Cultural & Social Life':        qol.culture?.score ?? 7.5,
  };
  const qolNotes = {
    'Crime Rate & Personal Safety':  qol.safety?.note || `Safety Index ${city.safety?.safetyIndex || 'N/A'}/100. ${city.safety?.crimeLevel || 'Moderate'} crime overall.`,
    'Healthcare Quality':            qol.healthcare?.note || meta.defaultNotes?.healthcare || 'See methodology.',
    'Walkability':                   qol.walkability?.note || 'See methodology.',
    'Public Transport Efficiency':   meta.defaultNotes?.transit || 'See methodology.',
    'Air Quality':                   qol.air_quality?.note || 'See methodology.',
    'Climate Comfort':               qol.climate?.note || 'See methodology.',
    'Cultural & Social Life':        qol.culture?.note || 'See methodology.',
  };

  // ── Index 5-point ──
  const indexScores = {
    'Affordability':      meta.indexScores?.affordability ?? 7.0,
    'Infrastructure':     +(((infraScores['Internet Reliability'] + infraScores['Coworking Ecosystem'] + infraScores['Banking & Financial Services'] + infraScores['Office Supply & Business Svcs']) / 4).toFixed(1)),
    'Safety':             qolScores['Crime Rate & Personal Safety'],
    'Quality of Life':    +(((qolScores['Healthcare Quality'] + qolScores['Cultural & Social Life'] + qolScores['Public Transport Efficiency'] + qolScores['Air Quality']) / 4).toFixed(1)),
    'Economic Stability': meta.indexScores?.economic ?? 6.5,
  };

  // ── Verdicts ──
  const v = intel.verdictParagraphs || {};
  const verdictNomads   = [v.nomads   || 'See full report.', meta.verdicts?.nomads   || `Recommendation: see executive summary for ${city.name}.`];
  const verdictFamilies = [v.families || 'See full report.', meta.verdicts?.families || `Recommendation: see executive summary for ${city.name}.`];
  const verdictFounders = [v.founders || 'See full report.', meta.verdicts?.founders || `Recommendation: see executive summary for ${city.name}.`];

  return {
    name: meta.cityNameOverride || city.name,
    country: city.country,
    year: YEAR,
    currency_sym: sym,
    currency_code: code,
    accent_color: meta.accentColor || '#d4a843',
    pull_quote: meta.pullQuote || (intel.execSummary && intel.execSummary[0] ? intel.execSummary[0].split('. ')[0] + '.' : null),

    population_city:  meta.facts?.population_city   || 'N/A',
    population_metro: meta.facts?.population_metro  || 'N/A',
    official_lang:    meta.facts?.official_lang     || 'N/A',
    english_level:    englishLabel(city.infrastructure?.englishProficiency || 60),
    timezone:         meta.facts?.timezone          || 'N/A',
    climate_type:     meta.facts?.climate_type      || 'Temperate',
    sunshine_hours:   meta.facts?.sunshine_hours    || 'N/A',
    safety_index:     `${city.safety?.safetyIndex || 'N/A'} / 100`,
    visa_options:     meta.facts?.visa_options      || city.visa?.type || 'See country guide',
    healthcare:       meta.facts?.healthcare        || 'Public + Private',
    avg_local_salary: meta.facts?.avg_local_salary  || 'N/A',

    rent_studio_centre:  r(0.65),
    rent_studio_outside: rs(0.65),
    rent_1br_centre:     r(1.0),
    rent_1br_outside:    rs(1.0),
    rent_2br_centre:     r(1.45),
    rent_2br_outside:    rs(1.45),
    rent_3br_centre:     r(2.0),
    rent_3br_outside:    rs(2.0),
    rent_coliving:       r(0.55),
    rent_shortterm:      r(1.4),

    util_electricity:  meta.utilities?.electricity || `${sym}${fmt(Math.round(rentCenter*0.04))} – ${sym}${fmt(Math.round(rentCenter*0.08))}`,
    util_gas:          meta.utilities?.gas         || `${sym}${fmt(Math.round(rentCenter*0.005))} – ${sym}${fmt(Math.round(rentCenter*0.02))}`,
    util_water:        meta.utilities?.water       || `${sym}${fmt(Math.round(rentCenter*0.005))} – ${sym}${fmt(Math.round(rentCenter*0.012))}`,
    util_condo_fee:    meta.utilities?.condo_fee   || `${sym}${fmt(Math.round(rentCenter*0.02))} – ${sym}${fmt(Math.round(rentCenter*0.05))}`,
    util_total:        meta.utilities?.total       || `${sym}${fmt(Math.round(rentCenter*0.07))} – ${sym}${fmt(Math.round(rentCenter*0.16))}`,

    internet_speed:     `≈ ${wifi} Mbps (avg download)`,
    internet_providers: meta.internet?.providers || 'See local market',
    internet_cost:      meta.internet?.cost      || `${sym}${fmt(Math.round(wifi*0.2))} – ${sym}${fmt(Math.round(wifi*0.4))}`,
    mobile_providers:   meta.mobile?.providers   || 'See local market',
    mobile_20gb:        meta.mobile?.gb20        || `${sym}${fmt(Math.round(transport*0.15))} – ${sym}${fmt(Math.round(transport*0.30))}`,
    mobile_unlimited:   meta.mobile?.unlimited   || `${sym}${fmt(Math.round(transport*0.30))} – ${sym}${fmt(Math.round(transport*0.55))}`,

    grocery_solo_budget:  range(foodB*15, foodB*22, sym),
    grocery_solo_std:     range(foodS*12, foodS*18, sym),
    grocery_couple_std:   range(foodS*20, foodS*30, sym),
    grocery_shops:        meta.food?.shops         || 'Major supermarket chains',
    dining_lunch_menu:    `${sym}${fmt(Math.round(foodB*0.8))} – ${sym}${fmt(Math.round(foodB*1.5))}`,
    dining_midrange_2pax: `${sym}${fmt(Math.round(foodS*1.6))} – ${sym}${fmt(Math.round(foodS*2.5))}`,
    dining_finedining:    `${sym}${fmt(Math.round(foodP*1.2))} – ${sym}${fmt(Math.round(foodP*2.5))}+`,
    dining_fastfood:      `${sym}${fmt(Math.round(foodB*0.6))} – ${sym}${fmt(Math.round(foodB*1.0))}`,
    dining_coffee:        meta.food?.coffee || `${sym}${fmt(Math.max(1,Math.round(foodB*0.15)))} – ${sym}${fmt(Math.max(2,Math.round(foodB*0.25)))}`,

    transport_pass:           `${sym}${fmt(Math.round(transport*0.85))} – ${sym}${fmt(Math.round(transport*1.15))}`,
    transport_pass_name:      meta.transport?.pass_name || 'Monthly metro/transit pass',
    transport_rideshare_trip: meta.transport?.ride_trip || `${sym}${fmt(Math.max(2,Math.round(transport*0.08)))} – ${sym}${fmt(Math.max(5,Math.round(transport*0.20)))}`,
    transport_rideshare_month:meta.transport?.ride_month || `${sym}${fmt(Math.round(transport*1.5))} – ${sym}${fmt(Math.round(transport*3.0))}`,
    transport_petrol:         meta.transport?.petrol || 'See local market',
    transport_car_insurance:  meta.transport?.insurance || `${sym}${fmt(Math.round(transport*1.0))} – ${sym}${fmt(Math.round(transport*2.2))}`,
    transport_parking:        meta.transport?.parking || `${sym}${fmt(Math.round(transport*0.8))} – ${sym}${fmt(Math.round(transport*2.0))}`,
    transport_car_total:      meta.transport?.car_total || `${sym}${fmt(Math.round(transport*6))} – ${sym}${fmt(Math.round(transport*12))}`,
    transport_bike:           meta.transport?.bike || `${sym}${fmt(Math.round(transport*0.25))} – ${sym}${fmt(Math.round(transport*0.50))}`,
    transport_airport:        meta.transport?.airport || `${sym}${fmt(Math.max(2,Math.round(transport*0.05)))} – ${sym}${fmt(Math.max(8,Math.round(transport*0.20)))}`,
    transport_intercity:      meta.transport?.intercity || `${sym}${fmt(Math.round(transport*0.5))} – ${sym}${fmt(Math.round(transport*1.5))}`,

    cowork_hotdesk:        `${sym}${fmt(Math.round(cowork*0.55))} – ${sym}${fmt(Math.round(cowork*0.95))}`,
    cowork_dedicated:      `${sym}${fmt(Math.round(cowork*0.95))} – ${sym}${fmt(Math.round(cowork*1.6))}`,
    cowork_private:        `${sym}${fmt(Math.round(cowork*1.6))} – ${sym}${fmt(Math.round(cowork*3.2))}`,
    cowork_premium:        `${sym}${fmt(Math.round(cowork*1.0))} – ${sym}${fmt(Math.round(cowork*2.0))}`,
    cowork_premium_names:  meta.cowork?.names || 'WeWork, Regus, local boutique spaces',
    gym_chain:             meta.gym?.chain    || `${sym}${fmt(Math.round(cowork*0.10))} – ${sym}${fmt(Math.round(cowork*0.25))}`,
    gym_boutique:          meta.gym?.boutique || `${sym}${fmt(Math.round(cowork*0.30))} – ${sym}${fmt(Math.round(cowork*0.60))}`,
    entertainment_cinema:  meta.entertainment?.cinema || `${sym}${fmt(Math.max(3,Math.round(foodB*0.6)))} – ${sym}${fmt(Math.max(8,Math.round(foodB*1.0)))}`,
    entertainment_streaming: meta.entertainment?.streaming || `${sym}${fmt(Math.max(8,Math.round(foodB*0.7)))} – ${sym}${fmt(Math.max(15,Math.round(foodB*1.4)))}`,
    entertainment_monthly: meta.entertainment?.monthly || `${sym}${fmt(Math.round(foodS*4))} – ${sym}${fmt(Math.round(foodS*9))}`,
    health_insurance_basic: meta.insurance?.basic || `${sym}${fmt(Math.round(rentCenter*0.03))} – ${sym}${fmt(Math.round(rentCenter*0.07))}`,
    health_insurance_intl:  meta.insurance?.intl  || `${sym}${fmt(Math.round(rentCenter*0.07))} – ${sym}${fmt(Math.round(rentCenter*0.18))}`,
    school_annual:    meta.school?.annual  || 'N/A',
    school_monthly:   meta.school?.monthly || 'N/A',
    school_examples:  meta.school?.examples || 'See in-city listings',

    budget_nomad_low:    `${sym}${fmt(Math.round((rentSuburb + foodB*30 + transport)*0.9))}`,
    budget_nomad_high:   `${sym}${fmt(Math.round((rentSuburb + foodB*30 + transport + cowork)*1.1))}`,
    budget_std_low:      `${sym}${fmt(Math.round((rentCenter + foodS*30 + transport + cowork)*0.85))}`,
    budget_std_high:     `${sym}${fmt(Math.round((rentCenter + foodS*30 + transport + cowork)*1.20))}`,
    budget_premium_low:  `${sym}${fmt(Math.round((rentCenter*1.6 + foodP*30 + transport*2 + cowork*2)*0.9))}`,
    budget_premium_high: `${sym}${fmt(Math.round((rentCenter*2.2 + foodP*30 + transport*3 + cowork*3)*1.1))}`,

    neighborhoods,
    infra_scores: infraScores,
    infra_notes:  infraNotes,
    qol_scores:   qolScores,
    qol_notes:    qolNotes,
    peers,
    pros,
    cons,
    who,
    risks,
    index_scores: indexScores,
    index_rationale: meta.indexRationale || {
      'Affordability':      meta.indexScores?.affordability_note || 'See cost methodology.',
      'Infrastructure':     'Composite of internet, coworking, banking, office services.',
      'Safety':             `Numbeo-aligned safety index ${city.safety?.safetyIndex || 'N/A'}/100`,
      'Quality of Life':    'Composite of healthcare, culture, transit, air quality.',
      'Economic Stability': meta.indexScores?.economic_note || `Inflation ${city.macro?.inflationRate || 'N/A'}%, ${city.macro?.currencyStability || 'see report'} currency stability.`,
    },
    verdict_nomads:   verdictNomads,
    verdict_families: verdictFamilies,
    verdict_founders: verdictFounders,
    closing_statement: intel.closingStatement || `${city.name} ${YEAR} — see full executive summary.`,
  };
}

// ── Main ─────────────────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2);
  const slug = args.find(a => !a.startsWith('--'));
  const isPreview = args.includes('--preview');
  if (!slug) {
    console.error('Usage: node scripts/generate-lca-report.cjs <slug> [--preview]');
    process.exit(1);
  }
  const mode = isPreview ? 'PREVIEW (5-page teaser)' : 'FULL (25 pages)';
  console.log(`[LCA] Building ${mode} payload for: ${slug}`);
  const payload = buildPayload(slug);

  const tmpDir = path.join(ROOT, 'scripts', '.tmp');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
  const payloadPath = path.join(tmpDir, `lca-${slug}.json`);
  fs.writeFileSync(payloadPath, JSON.stringify(payload, null, 2), 'utf-8');

  const cityFile = payload.name.replace(/\s+/g, '_').replace(/,/g, '');
  let outputPath;
  if (isPreview) {
    const previewDir = path.join(ROOT, 'public', 'ebooks', 'preview');
    if (!fs.existsSync(previewDir)) fs.mkdirSync(previewDir, { recursive: true });
    outputPath = path.join(previewDir, `LivingCostAtlas_${cityFile}_Preview.pdf`);
  } else {
    const outDir = path.join(ROOT, 'public', 'ebooks');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    outputPath = path.join(outDir, `LivingCostAtlas_${cityFile}_${YEAR}.pdf`);
  }

  console.log(`[LCA] Spawning Python engine...`);
  const env = { ...process.env, LCA_CITY_PAYLOAD: payloadPath, LCA_OUTPUT_PATH: outputPath };
  if (isPreview) env.LCA_PREVIEW_MODE = '1';
  const result = spawnSync(PYTHON, [ENGINE], { env, stdio: 'inherit' });
  if (result.status !== 0) {
    console.error(`[LCA] Python engine failed with status ${result.status}`);
    process.exit(result.status || 1);
  }
  console.log(`[LCA] OK -> ${outputPath}`);
}

main();
