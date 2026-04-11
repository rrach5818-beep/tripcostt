/**
 * NomadPage -- Rankings V2
 * Podium top 3, sortable live table, category mini-rankings, SEO
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { getAllCities } from '../data/cityService.js';
import { setPageMeta, injectSchema } from '../logic/setPageMeta.js';
import { getMonthlyBudgetEstimate } from '../logic/scoreCalculator.js';

export function NomadPage() {

  const cities = getAllCities();

  const ranked = [...cities].sort((a, b) =>
    b.digitalNomad.overallScore - a.digitalNomad.overallScore
  );

  const top3        = ranked.slice(0, 3);
  const cheapest5   = [...cities].sort((a,b) => getMonthlyBudgetEstimate(a) - getMonthlyBudgetEstimate(b)).slice(0,5);
  const fastest5    = [...cities].sort((a,b) => b.digitalNomad.wifiSpeed - a.digitalNomad.wifiSpeed).slice(0,5);
  const safest5     = [...cities].sort((a,b) => b.digitalNomad.safetyScore - a.digitalNomad.safetyScore).slice(0,5);
  const visaFriendly5 = cities.filter(c => c.visa?.remoteFriendly)
    .sort((a,b) => b.digitalNomad.overallScore - a.digitalNomad.overallScore).slice(0,5);

  function sc(v, hi=80, mid=60) {
    return v >= hi ? '#10b981' : v >= mid ? '#f59e0b' : '#ef4444';
  }

  /* -- Podium top 3 --------------------------------------- */
  const medals = ['🥇','🥈','🥉'];
  const podiumOrder = [1, 0, 2]; // silver left, gold center, bronze right

  const podiumHtml = podiumOrder.map(i => {
    const c = top3[i];
    if (!c) return '';
    const budget = getMonthlyBudgetEstimate(c);
    const isGold = i === 0;
    return `
      <div class="rk-podium-card ${isGold ? 'rk-podium-card--gold' : ''}">
        <div class="rk-podium-medal">${medals[i]}</div>
        <div class="rk-podium-img-wrap">
          <img src="${c.image}" alt="${c.name}" loading="lazy" />
          <div class="rk-podium-img-overlay"></div>
        </div>
        <div class="rk-podium-body">
          <div class="rk-podium-score" style="color:${sc(c.digitalNomad.overallScore)}">
            ${c.digitalNomad.overallScore}<span>/100</span>
          </div>
          <div class="rk-podium-name">${c.name}</div>
          <div class="rk-podium-country">${c.country}</div>
          <div class="rk-podium-metrics">
            <span title="WiFi">📡 ${c.digitalNomad.wifiSpeed} Mbps</span>
            <span title="Safety">🛡 ${c.digitalNomad.safetyScore}</span>
            <span title="Budget">💰 ~$${budget.toLocaleString()}/mo</span>
          </div>
          <a href="/city/${c.slug}" data-link class="rk-podium-btn">View City -></a>
        </div>
      </div>
    `;
  }).join('');

  /* -- Table rows (pre-rendered, filtered client-side) ---- */
  const citiesJson = JSON.stringify(ranked.map(c => ({
    slug: c.slug, name: c.name, country: c.country,
    continent: c.continent, image: c.image,
    score:  c.digitalNomad.overallScore,
    wifi:   c.digitalNomad.wifiSpeed,
    safety: c.digitalNomad.safetyScore,
    cowork: c.digitalNomad.coworkingCost,
    budget: getMonthlyBudgetEstimate(c),
    visaOk: c.visa?.remoteFriendly ?? false,
    currency: c.currencySymbol ?? '$'
  })));

  /* -- Category mini-rankings ----------------------------- */
  function miniRank(title, icon, cities, valFn, unit) {
    return `
      <div class="rk-mini">
        <div class="rk-mini__title">${icon} ${title}</div>
        ${cities.map((c,i) => {
          const val = valFn(c);
          const max = valFn(cities[0]);
          const pct = max > 0 ? Math.round((val / max) * 100) : 0;
          const color = i === 0 ? '#f59e0b' : i === 1 ? '#9ca3af' : i === 2 ? '#b45309' : '#6366f1';
          return `
            <div class="rk-mini__row">
              <span class="rk-mini__rank" style="color:${color}">${i+1}</span>
              <a href="/city/${c.slug}" data-link class="rk-mini__name">${c.name}</a>
              <div class="rk-mini__bar-wrap">
                <div class="rk-mini__bar" style="width:${pct}%;background:${color}"></div>
              </div>
              <span class="rk-mini__val">${typeof val === 'number' && val > 100 ? '$'+val.toLocaleString() : val}${unit}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  /* -- Popular comparisons -------------------------------- */
  const comparisons = [
    ['lisbon','bangkok'], ['berlin','prague'], ['tokyo','seoul'],
    ['barcelona','bali'], ['dubai','singapore'], ['chiang-mai','medellin']
  ];

  const compareHtml = comparisons.map(([a, b]) => {
    const ca = cities.find(c => c.slug === a);
    const cb = cities.find(c => c.slug === b);
    if (!ca || !cb) return '';
    return `
      <a href="/calculator" data-link data-ca="${a}" data-cb="${b}" class="rk-compare-card">
        <div class="rk-compare-card__imgs">
          <img src="${ca.image}" alt="${ca.name}" />
          <img src="${cb.image}" alt="${cb.name}" />
        </div>
        <div class="rk-compare-card__label">
          ${ca.name} <span>vs</span> ${cb.name}
        </div>
      </a>
    `;
  }).join('');

  const content = `
    <style>
      /* -- Hero --------------------------- */
      .rk-hero {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);
        padding:60px 0 52px;position:relative;overflow:hidden;
      }
      .rk-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 80% at 80% 50%,rgba(99,102,241,0.2),transparent 70%);
      }
      .rk-hero__inner { position:relative;z-index:2; }
      .rk-hero__eyebrow {
        font-size:11px;font-weight:700;letter-spacing:3px;
        text-transform:uppercase;color:#818cf8;margin-bottom:12px;
      }
      .rk-hero__title {
        font-size:clamp(28px,4vw,50px);font-weight:900;color:#fff;
        letter-spacing:-0.025em;line-height:1.1;margin-bottom:12px;
      }
      .rk-hero__title em {
        font-style:normal;
        background:linear-gradient(90deg,#818cf8,#34d399);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      }
      .rk-hero__sub { font-size:15px;color:rgba(255,255,255,0.55);margin:0; }

      /* -- Summary stats ------------------- */
      .rk-stats {
        background:#fff;border-bottom:1px solid #e5e7eb;padding:20px 0;
      }
      .rk-stats__inner {
        display:flex;justify-content:center;gap:0;
      }
      .rk-stat {
        padding:0 36px;border-right:1px solid #e5e7eb;text-align:center;
      }
      .rk-stat:last-child { border-right:none; }
      .rk-stat strong { display:block;font-size:22px;font-weight:900;color:#1e1b4b;letter-spacing:-0.02em; }
      .rk-stat span   { font-size:11px;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:1px; }

      /* -- Podium -------------------------- */
      .rk-podium-wrap { padding:60px 0 48px;background:#f9fafb; }
      .rk-podium-grid {
        display:grid;grid-template-columns:1fr 1.15fr 1fr;
        gap:16px;align-items:end;margin-top:32px;
      }
      .rk-podium-card {
        background:#fff;border:1px solid #e5e7eb;border-radius:20px;
        overflow:hidden;transition:transform 0.2s,box-shadow 0.2s;
      }
      .rk-podium-card--gold {
        border-color:#f59e0b;
        box-shadow:0 0 0 3px rgba(245,158,11,0.15),0 16px 48px rgba(0,0,0,0.1);
        transform:translateY(-8px);
      }
      .rk-podium-medal {
        text-align:center;font-size:28px;padding:14px 0 0;
      }
      .rk-podium-img-wrap { position:relative;height:160px;overflow:hidden; }
      .rk-podium-img-wrap img { width:100%;height:100%;object-fit:cover;transition:transform 0.4s; }
      .rk-podium-card:hover .rk-podium-img-wrap img { transform:scale(1.05); }
      .rk-podium-img-overlay {
        position:absolute;inset:0;
        background:linear-gradient(to top,rgba(0,0,0,0.35),transparent 60%);
      }
      .rk-podium-body { padding:16px 18px 20px; }
      .rk-podium-score {
        font-size:32px;font-weight:900;letter-spacing:-0.03em;line-height:1;margin-bottom:4px;
      }
      .rk-podium-score span { font-size:14px;font-weight:500;color:#9ca3af; }
      .rk-podium-name { font-size:16px;font-weight:800;color:#111827;margin-bottom:2px; }
      .rk-podium-country { font-size:12px;color:#9ca3af;margin-bottom:12px; }
      .rk-podium-metrics {
        display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;
      }
      .rk-podium-metrics span {
        font-size:11px;font-weight:600;color:#374151;
        background:#f8fafc;border:1px solid #f1f5f9;
        padding:3px 8px;border-radius:999px;
      }
      .rk-podium-btn {
        display:block;text-align:center;background:#f8fafc;
        border:1.5px solid #e5e7eb;border-radius:10px;
        font-size:12px;font-weight:700;color:#4f46e5;
        padding:8px;text-decoration:none;transition:all 0.15s;
      }
      .rk-podium-btn:hover {
        background:#eef2ff;border-color:#c7d2fe;text-decoration:none;
      }

      /* -- Table section ------------------- */
      .rk-table-wrap { padding:56px 0;background:#fff; }
      .rk-table-top {
        display:flex;align-items:center;justify-content:space-between;
        flex-wrap:wrap;gap:12px;margin-bottom:24px;
      }
      .rk-table-title {
        font-size:22px;font-weight:800;color:#111827;letter-spacing:-0.02em;
      }
      .rk-table-controls { display:flex;gap:10px;align-items:center; }
      .rk-filter-chip {
        padding:6px 14px;border-radius:999px;border:1.5px solid #e5e7eb;
        font-size:12px;font-weight:600;color:#6b7280;background:#fff;
        cursor:pointer;transition:all 0.15s;
      }
      .rk-filter-chip:hover { border-color:#c7d2fe;color:#4f46e5; }
      .rk-filter-chip.is-active {
        background:linear-gradient(135deg,#6366f1,#8b5cf6);
        border-color:transparent;color:#fff;
      }
      .rk-search {
        border:1.5px solid #e5e7eb;border-radius:999px;
        padding:6px 14px;font-size:13px;outline:none;
        transition:border-color 0.15s;width:180px;
      }
      .rk-search:focus { border-color:#6366f1; }

      /* Table */
      .rk-table-scroll { overflow-x:auto;border-radius:16px;border:1px solid #e5e7eb; }
      .rk-table {
        width:100%;border-collapse:collapse;font-size:13px;
      }
      .rk-table thead tr { background:#f8fafc;border-bottom:1px solid #e5e7eb; }
      .rk-table th {
        padding:11px 16px;text-align:left;
        font-size:10px;font-weight:700;letter-spacing:1px;
        text-transform:uppercase;color:#9ca3af;white-space:nowrap;
        cursor:pointer;user-select:none;transition:color 0.15s;
      }
      .rk-table th:hover { color:#6366f1; }
      .rk-table th.is-sorted { color:#6366f1; }
      .rk-table th .sort-arrow { margin-left:4px;opacity:0.4; }
      .rk-table th.is-sorted .sort-arrow { opacity:1; }
      .rk-table tbody tr {
        border-bottom:1px solid #f9fafb;
        transition:background 0.12s;
      }
      .rk-table tbody tr:last-child { border-bottom:none; }
      .rk-table tbody tr:hover { background:#f9fafb; }
      .rk-table td { padding:12px 16px;vertical-align:middle; }
      .rk-rank-badge {
        display:inline-flex;align-items:center;justify-content:center;
        width:28px;height:28px;border-radius:8px;
        font-size:12px;font-weight:700;
      }
      .rk-city-link {
        font-weight:700;color:#111827;text-decoration:none;
        transition:color 0.15s;
      }
      .rk-city-link:hover { color:#6366f1;text-decoration:none; }
      .rk-city-country { font-size:11px;color:#9ca3af;margin-top:1px; }
      .rk-score-wrap { display:flex;align-items:center;gap:8px; }
      .rk-score-num { font-size:14px;font-weight:800;min-width:26px; }
      .rk-score-bar-wrap {
        width:60px;height:5px;background:#f1f5f9;border-radius:5px;overflow:hidden;
      }
      .rk-score-bar { height:100%;border-radius:5px;transition:width 0.4s; }
      .rk-visa-yes { color:#065f46;background:#d1fae5;padding:2px 8px;border-radius:999px;font-size:10px;font-weight:700; }
      .rk-visa-no  { color:#9ca3af;background:#f1f5f9;padding:2px 8px;border-radius:999px;font-size:10px;font-weight:600; }
      .rk-compare-link {
        font-size:11px;font-weight:700;color:#6366f1;text-decoration:none;
        padding:4px 10px;border:1px solid #c7d2fe;border-radius:6px;
        transition:all 0.15s;
      }
      .rk-compare-link:hover { background:#eef2ff;text-decoration:none; }
      .rk-empty { text-align:center;padding:48px;color:#9ca3af; }
      #rk-count { font-size:12px;color:#9ca3af;margin-top:10px; }

      /* -- Mini rankings ------------------- */
      .rk-categories { padding:56px 0;background:#f9fafb; }
      .rk-categories__grid {
        display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:32px;
      }
      .rk-mini {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:20px;
      }
      .rk-mini__title {
        font-size:12px;font-weight:700;color:#111827;margin-bottom:14px;
        padding-bottom:10px;border-bottom:1px solid #f1f5f9;
      }
      .rk-mini__row {
        display:flex;align-items:center;gap:8px;margin-bottom:10px;
      }
      .rk-mini__row:last-child { margin-bottom:0; }
      .rk-mini__rank { font-size:11px;font-weight:800;min-width:14px; }
      .rk-mini__name {
        font-size:12px;font-weight:600;color:#374151;text-decoration:none;
        flex-shrink:0;min-width:64px;transition:color 0.15s;
      }
      .rk-mini__name:hover { color:#6366f1;text-decoration:none; }
      .rk-mini__bar-wrap { flex:1;height:5px;background:#f1f5f9;border-radius:5px;overflow:hidden; }
      .rk-mini__bar { height:100%;border-radius:5px;transition:width 0.4s; }
      .rk-mini__val { font-size:11px;font-weight:700;color:#111827;white-space:nowrap;min-width:44px;text-align:right; }

      /* -- Comparisons --------------------- */
      .rk-comparisons { padding:56px 0;background:#fff; }
      .rk-compare-grid {
        display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px;
      }
      .rk-compare-card {
        border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;
        text-decoration:none;transition:transform 0.2s,box-shadow 0.2s,border-color 0.2s;
        display:block;
      }
      .rk-compare-card:hover {
        transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,0.1);
        border-color:#c7d2fe;text-decoration:none;
      }
      .rk-compare-card__imgs { display:grid;grid-template-columns:1fr 1fr;height:90px; }
      .rk-compare-card__imgs img { width:100%;height:100%;object-fit:cover; }
      .rk-compare-card__label {
        padding:10px 14px;font-size:12px;font-weight:700;color:#374151;
        display:flex;align-items:center;gap:6px;background:#fff;
      }
      .rk-compare-card__label span { color:#9ca3af;font-weight:400; }

      /* -- SEO block ----------------------- */
      .rk-seo { padding:56px 0;background:#f9fafb;border-top:1px solid #e5e7eb; }
      .rk-seo__inner { max-width:820px;margin:0 auto; }
      .rk-seo__inner h2 { font-size:22px;font-weight:800;color:#111827;margin-bottom:10px; }
      .rk-seo__inner h3 { font-size:16px;font-weight:700;color:#111827;margin:20px 0 6px; }
      .rk-seo__inner p  { font-size:14px;color:#4b5563;line-height:1.8;margin-bottom:10px; }

      /* -- CTA ------------------------------ */
      .rk-cta {
        background:linear-gradient(135deg,#1e1b4b,#312e81,#1e1b4b);
        padding:64px 0;text-align:center;position:relative;overflow:hidden;
      }
      .rk-cta::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(99,102,241,0.25),transparent 70%);
      }
      .rk-cta__inner { position:relative;z-index:2; }
      .rk-cta h2 { font-size:34px;font-weight:800;color:#fff;letter-spacing:-0.02em;margin-bottom:10px; }
      .rk-cta p  { font-size:15px;color:rgba(255,255,255,0.55);margin-bottom:28px; }
      .rk-cta__btns { display:flex;gap:12px;justify-content:center;flex-wrap:wrap; }
      .rk-btn-primary {
        display:inline-flex;align-items:center;gap:7px;
        background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;
        font-size:14px;font-weight:600;padding:12px 24px;border-radius:10px;
        text-decoration:none;box-shadow:0 4px 16px rgba(99,102,241,0.4);transition:opacity 0.2s;
      }
      .rk-btn-primary:hover { opacity:0.9;color:#fff;text-decoration:none; }
      .rk-btn-secondary {
        display:inline-flex;align-items:center;gap:7px;
        background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);
        color:rgba(255,255,255,0.85);font-size:14px;font-weight:500;
        padding:12px 20px;border-radius:10px;text-decoration:none;transition:background 0.2s;
      }
      .rk-btn-secondary:hover { background:rgba(255,255,255,0.18);color:#fff;text-decoration:none; }

      /* -- Responsive ----------------------- */
      @media(max-width:960px) {
        .rk-podium-grid { grid-template-columns:1fr 1fr 1fr; }
        .rk-categories__grid { grid-template-columns:1fr 1fr; }
        .rk-compare-grid { grid-template-columns:1fr 1fr; }
      }
      @media(max-width:600px) {
        .rk-podium-grid { grid-template-columns:1fr; }
        .rk-stats__inner { flex-wrap:wrap;gap:16px; }
        .rk-stat { border-right:none; }
        .rk-categories__grid { grid-template-columns:1fr; }
        .rk-compare-grid { grid-template-columns:1fr; }
      }
    </style>

    <!-- HERO -->
    <section class="rk-hero">
      <div class="container rk-hero__inner">
        <p class="rk-hero__eyebrow">2026 Rankings</p>
        <h1 class="rk-hero__title">Best Cities for<br><em>Digital Nomads</em></h1>
        <p class="rk-hero__sub">
          ${ranked.length} cities ranked by nomad score -- cost, WiFi, safety, visa &amp; infrastructure combined.
        </p>
      </div>
    </section>

    <!-- STATS BAR -->
    <div class="rk-stats">
      <div class="container rk-stats__inner">
        <div class="rk-stat"><strong>${ranked.length}</strong><span>Cities ranked</span></div>
        <div class="rk-stat"><strong>${ranked[0]?.name}</strong><span>Top rated</span></div>
        <div class="rk-stat"><strong>${cheapest5[0]?.name}</strong><span>Most affordable</span></div>
        <div class="rk-stat"><strong>${fastest5[0]?.name}</strong><span>Fastest WiFi</span></div>
        <div class="rk-stat"><strong>${cities.filter(c=>c.visa?.remoteFriendly).length}</strong><span>Nomad visas</span></div>
      </div>
    </div>

    <!-- PODIUM -->
    <section class="rk-podium-wrap">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Top 3 Overall</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">This year's best destinations</h2>
        <div class="rk-podium-grid">${podiumHtml}</div>
      </div>
    </section>

    <!-- FULL TABLE -->
    <section class="rk-table-wrap">
      <div class="container">
        <div class="rk-table-top">
          <div class="rk-table-title">Complete Rankings</div>
          <div class="rk-table-controls">
            <input type="text" class="rk-search" id="rk-search" placeholder="Search city..." />
            <button class="rk-filter-chip is-active" data-region="all">All</button>
            <button class="rk-filter-chip" data-region="Europe">🇪🇺 Europe</button>
            <button class="rk-filter-chip" data-region="Asia">🌏 Asia</button>
            <button class="rk-filter-chip" data-region="Africa">🌍 Africa</button>
            <button class="rk-filter-chip" data-region="Americas">🌎 Americas</button>
          </div>
        </div>

        <div class="rk-table-scroll">
          <table class="rk-table" id="rk-table">
            <thead>
              <tr>
                <th data-col="rank" style="width:52px">#</th>
                <th data-col="name">City</th>
                <th data-col="score" class="is-sorted">Nomad Score <span class="sort-arrow"> </span></th>
                <th data-col="wifi">WiFi <span class="sort-arrow"> </span></th>
                <th data-col="safety">Safety <span class="sort-arrow"> </span></th>
                <th data-col="budget">Budget/mo <span class="sort-arrow"> </span></th>
                <th data-col="visa">Visa</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="rk-tbody"></tbody>
          </table>
        </div>
        <div id="rk-count"></div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section class="rk-categories">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">By Category</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">Top 5 in each dimension</h2>
        <div class="rk-categories__grid">
          ${miniRank('Most Affordable', '💰', cheapest5,
              c => getMonthlyBudgetEstimate(c), '/mo')}
          ${miniRank('Fastest Internet', '📡', fastest5,
              c => c.digitalNomad.wifiSpeed, ' Mbps')}
          ${miniRank('Safest Cities', '🛡', safest5,
              c => c.digitalNomad.safetyScore, '/100')}
          ${miniRank('Nomad Visa', '✈️', visaFriendly5,
              c => c.digitalNomad.overallScore, '/100')}
        </div>
      </div>
    </section>

    <!-- POPULAR COMPARISONS -->
    <section class="rk-comparisons">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Head to Head</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">Popular city comparisons</h2>
        <div class="rk-compare-grid">${compareHtml}</div>
      </div>
    </section>

    <!-- SEO CONTENT -->
    <section class="rk-seo">
      <div class="container rk-seo__inner">
        <h2>How We Rank the Best Cities for Digital Nomads</h2>
        <p>
          Our Nomad Score combines six weighted dimensions: cost efficiency relative to average income,
          WiFi speed and reliability, personal safety index, visa accessibility for remote workers,
          infrastructure quality (transport, healthcare, English proficiency) and economic stability.
          Each city is scored out of 100.
        </p>
        <h3>Cost of Living for Remote Workers</h3>
        <p>
          Affordable destinations like Chiang Mai, Bali and Medell n consistently attract digital nomads
          with monthly budgets under $1,500. These cities offer strong nomad communities, reliable coworking
          spaces and a high quality of life at a fraction of Western city costs.
        </p>
        <h3>Internet Speed & Infrastructure</h3>
        <p>
          Reliable high-speed internet is non-negotiable for remote work. Singapore, Seoul and Tokyo
          consistently rank highest for WiFi speed, all averaging 200+ Mbps. For video calls, large file
          transfers and stable VPN connections, these cities outperform most alternatives.
        </p>
        <h3>Safety & Visa Friendliness</h3>
        <p>
          Safety scores above 80/100 are found in Helsinki, Tokyo, Vienna and Singapore. For visa access,
          destinations offering dedicated digital nomad visas -- including Portugal, Thailand, the UAE and
          Indonesia -- dramatically simplify the legal process for long-term stays.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="rk-cta">
      <div class="rk-cta__inner container">
        <h2>Ready to compare cities?</h2>
        <p>Use the calculator to simulate your real monthly budget in any two cities.</p>
        <div class="rk-cta__btns">
          <a href="/calculator" data-link class="rk-btn-primary">Open Calculator -></a>
          <a href="/destinations" data-link class="rk-btn-secondary">Browse Destinations</a>
        </div>
      </div>
    </section>

    <script id="rk-data" type="application/json">${citiesJson}</script>
  `;

  setPageMeta({
    title: 'Best Cities for Digital Nomads 2026 -- Rankings & Scores',
    description: 'Compare 50+ cities ranked by nomad score -- cost of living, WiFi speed, safety, visa access and infrastructure combined.',
    canonical: '/nomad'
  });

  injectSchema('page-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Best Cities for Digital Nomads 2026',
    description: 'Complete ranking of 50+ cities for digital nomads based on cost, WiFi, safety and visa access.',
    url: 'https://tripcost.co/nomad',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tripcost.co/' },
        { '@type': 'ListItem', position: 2, name: 'Nomad Rankings', item: 'https://tripcost.co/nomad' }
      ]
    }
  });

  return MainLayout(content);
}

/* ---------------------------------------------------------
   Interactivity -- sortable table + live filters
--------------------------------------------------------- */
export function setupNomadPageInteractivity() {
  const raw = document.getElementById('rk-data');
  if (!raw) return;

  const allCities = JSON.parse(raw.textContent);
  const tbody     = document.getElementById('rk-tbody');
  const countEl   = document.getElementById('rk-count');
  const searchEl  = document.getElementById('rk-search');

  let state = { region: 'all', search: '', col: 'score', dir: 'desc' };

  function sc(v, hi=80, mid=60) {
    return v >= hi ? '#10b981' : v >= mid ? '#f59e0b' : '#ef4444';
  }

  function renderRow(c, rank) {
    const rankStyle = rank === 1
      ? 'background:#fef3c7;color:#d97706'
      : rank === 2 ? 'background:#f3f4f6;color:#6b7280'
      : rank === 3 ? 'background:#fed7aa;color:#b45309'
      : 'background:#f8fafc;color:#6b7280';
    const scoreColor = sc(c.score);
    return `
      <tr data-slug="${c.slug}" data-continent="${c.continent}">
        <td>
          <span class="rk-rank-badge" style="${rankStyle}">${rank}</span>
        </td>
        <td>
          <a href="/city/${c.slug}" data-link class="rk-city-link">${c.name}</a>
          <div class="rk-city-country">${c.country}</div>
        </td>
        <td>
          <div class="rk-score-wrap">
            <span class="rk-score-num" style="color:${scoreColor}">${c.score}</span>
            <div class="rk-score-bar-wrap">
              <div class="rk-score-bar" style="width:${c.score}%;background:${scoreColor}"></div>
            </div>
          </div>
        </td>
        <td><strong>${c.wifi}</strong> <span style="color:#9ca3af;font-size:11px">Mbps</span></td>
        <td><strong>${c.safety}</strong><span style="color:#9ca3af;font-size:11px">/100</span></td>
        <td style="font-weight:700">$${c.budget.toLocaleString()}</td>
        <td>
          <span class="${c.visaOk ? 'rk-visa-yes' : 'rk-visa-no'}">
            ${c.visaOk ? '✅ Yes' : 'Standard'}
          </span>
        </td>
        <td>
          <a href="/calculator" data-link data-ca="${c.slug}" class="rk-compare-link">Compare</a>
        </td>
      </tr>
    `;
  }

  function render() {
    let list = [...allCities];

    // filter region
    if (state.region !== 'all') {
      list = list.filter(c => {
        if (state.region === 'Americas') return c.continent.includes('America');
        return c.continent === state.region;
      });
    }

    // search
    if (state.search) {
      const q = state.search.toLowerCase();
      list = list.filter(c =>
        c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q)
      );
    }

    // sort
    const colMap = { score:'score', wifi:'wifi', safety:'safety', budget:'budget', name:'name' };
    const col = colMap[state.col] || 'score';
    list.sort((a,b) => {
      const va = a[col], vb = b[col];
      if (typeof va === 'string') return state.dir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
      return state.dir === 'asc' ? va - vb : vb - va;
    });

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="rk-empty">No cities match your search.</td></tr>`;
    } else {
      tbody.innerHTML = list.map((c,i) => renderRow(c, i+1)).join('');
    }

    countEl.textContent = `Showing ${list.length} of ${allCities.length} cities`;

    // SPA links inside table
    tbody.querySelectorAll('[data-link]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        window.history.pushState({}, '', el.getAttribute('href'));
        window.dispatchEvent(new PopStateEvent('popstate'));
      });
    });
  }

  // Sort headers
  document.querySelectorAll('.rk-table th[data-col]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.col;
      if (col === 'rank' || col === 'visa') return;
      if (state.col === col) {
        state.dir = state.dir === 'desc' ? 'asc' : 'desc';
      } else {
        state.col = col;
        state.dir = 'desc';
      }
      document.querySelectorAll('.rk-table th').forEach(t => t.classList.remove('is-sorted'));
      th.classList.add('is-sorted');
      const arrow = th.querySelector('.sort-arrow');
      if (arrow) arrow.textContent = state.dir === 'desc' ? ' ' : ' ';
      render();
    });
  });

  // Region filters
  document.querySelectorAll('[data-region]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-region]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      state.region = btn.dataset.region;
      render();
    });
  });

  // Search
  searchEl?.addEventListener('input', e => {
    state.search = e.target.value.trim();
    render();
  });

  // Compare card links
  document.querySelectorAll('.rk-compare-card').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      const a = card.dataset.ca, b = card.dataset.cb;
      const url = `/calculator${a && b ? `?a=${a}&b=${b}` : ''}`;
      window.history.pushState({}, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  });

  render();
}

export default NomadPage;
