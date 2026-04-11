/**
 * CalculatorPage -- Full Redesign V3
 * 2-column sticky layout, live updates, SEO-optimised
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { getAllCities } from '../data/cityService.js';
import { convertFromUSD } from '../services/currencyService.js';
import { Breadcrumb, BREADCRUMB_CSS } from '../components/ui/Breadcrumb.js';

export function CalculatorPage() {

  const cities = getAllCities();

  // Pre-encode all city data for client-side use
  const cityOptionsHtml = cities.map(c =>
    `<option value="${c.slug}" data-city="${encodeURIComponent(JSON.stringify(c))}">
      ${c.name}, ${c.country}
    </option>`
  ).join('');

  // Default city B = Bangkok (index 5)
  const cityBOptions = cities.map((c, i) =>
    `<option value="${c.slug}" data-city="${encodeURIComponent(JSON.stringify(c))}" ${i===5?'selected':''}>
      ${c.name}, ${c.country}
    </option>`
  ).join('');

  const breadcrumb = Breadcrumb([
    { label: 'Home', href: '/' },
    { label: 'Calculator' }
  ]);

  const content = `

    <style>
      ${BREADCRUMB_CSS}
      /* -- Hero --------------------------- */
      .calc-hero {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 60%,#0f172a 100%);
        padding:52px 0 44px;position:relative;overflow:hidden;
      }
      .calc-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 50% 80% at 80% 50%,rgba(99,102,241,0.2),transparent 70%);
      }
      .calc-hero__inner { position:relative;z-index:2; }
      .calc-hero__eyebrow {
        font-size:11px;font-weight:700;letter-spacing:3px;color:#818cf8;
        text-transform:uppercase;margin-bottom:12px;
      }
      .calc-hero h1 {
        font-size:clamp(26px,4vw,44px);font-weight:800;color:#fff;
        letter-spacing:-0.025em;line-height:1.1;margin-bottom:12px;
      }
      .calc-hero h1 em {
        font-style:normal;
        background:linear-gradient(90deg,#818cf8,#34d399);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      }
      .calc-hero__sub { font-size:15px;color:rgba(255,255,255,0.55);margin:0;max-width:600px; }

      /* -- Main layout --------------------- */
      .calc-layout {
        display:grid;
        grid-template-columns:380px 1fr;
        gap:32px;
        padding:40px 0 80px;
        align-items:start;
      }

      /* -- Form panel --------------------- */
      .calc-form {
        background:#fff;border:1px solid #e5e7eb;border-radius:20px;
        padding:28px;position:sticky;top:80px;
      }
      .calc-form__title {
        font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
        color:#6366f1;margin-bottom:20px;
      }
      .calc-field { margin-bottom:18px; }
      .calc-field label {
        display:block;font-size:12px;font-weight:600;color:#374151;
        letter-spacing:0.3px;margin-bottom:6px;text-transform:uppercase;
      }
      .calc-field select,
      .calc-field input {
        width:100%;border:1.5px solid #e5e7eb;border-radius:10px;
        padding:10px 12px;font-size:14px;color:#111827;background:#f9fafb;
        transition:border-color 0.15s,background 0.15s;outline:none;
        appearance:none;-webkit-appearance:none;
        background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
        background-repeat:no-repeat;background-position:right 12px center;
        padding-right:32px;
      }
      .calc-field input { background-image:none;padding-right:12px; }
      .calc-field select:focus,
      .calc-field input:focus {
        border-color:#6366f1;background:#fff;
        box-shadow:0 0 0 3px rgba(99,102,241,0.1);
      }
      .calc-field__income-wrap { position:relative; }
      .calc-field__income-prefix {
        position:absolute;left:12px;top:50%;transform:translateY(-50%);
        font-size:14px;font-weight:600;color:#6b7280;pointer-events:none;
      }
      .calc-field__income-wrap input { padding-left:24px; }

      .calc-form__divider {
        height:1px;background:#f1f5f9;margin:20px 0;
      }

      .calc-profile-grid {
        display:grid;grid-template-columns:repeat(3,1fr);gap:8px;
        margin-bottom:20px;
      }
      .calc-profile-btn {
        display:flex;flex-direction:column;align-items:center;gap:4px;
        padding:10px 6px;border-radius:10px;border:1.5px solid #e5e7eb;
        cursor:pointer;transition:all 0.15s;background:#fff;
        font-size:11px;font-weight:600;color:#6b7280;text-align:center;
      }
      .calc-profile-btn span:first-child { font-size:20px; }
      .calc-profile-btn:hover { border-color:#c7d2fe;color:#4f46e5; }
      .calc-profile-btn.is-active {
        border-color:#6366f1;background:#eef2ff;color:#4f46e5;
      }

      .calc-share-btn {
        width:100%;display:flex;align-items:center;justify-content:center;gap:8px;
        padding:10px;border-radius:10px;border:1.5px solid #e5e7eb;
        background:#f9fafb;font-size:12px;font-weight:600;color:#6b7280;
        cursor:pointer;transition:all 0.15s;margin-top:16px;
      }
      .calc-share-btn:hover { border-color:#c7d2fe;color:#4f46e5;background:#eef2ff; }
      .calc-share-btn.copied { border-color:#10b981;color:#065f46;background:#d1fae5; }

      /* -- Results panel ------------------- */
      .calc-results { display:flex;flex-direction:column;gap:20px; }

      /* Cost comparison hero */
      .calc-compare {
        display:grid;grid-template-columns:1fr auto 1fr;gap:16px;
        align-items:center;
      }
      .calc-city-card {
        background:#fff;border:2px solid #e5e7eb;border-radius:20px;
        overflow:hidden;transition:border-color 0.3s,box-shadow 0.3s;
      }
      .calc-city-card.is-winner {
        border-color:#10b981;
        box-shadow:0 0 0 4px rgba(16,185,129,0.12);
      }
      .calc-city-card.is-loser { opacity:0.75; }
      .calc-city-card__img {
        height:120px;width:100%;object-fit:cover;display:block;
      }
      .calc-city-card__body { padding:16px; }
      .calc-city-card__crown {
        font-size:20px;margin-bottom:6px;display:none;
      }
      .calc-city-card.is-winner .calc-city-card__crown { display:block; }
      .calc-city-card__name { font-size:17px;font-weight:800;color:#111827;margin:0 0 2px; }
      .calc-city-card__country { font-size:12px;color:#9ca3af;margin:0 0 14px; }
      .calc-city-card__cost {
        font-size:32px;font-weight:900;color:#1e1b4b;
        letter-spacing:-0.03em;line-height:1;margin-bottom:4px;
      }
      .calc-city-card__cost-label { font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px; }

      /* VS divider */
      .calc-vs {
        display:flex;flex-direction:column;align-items:center;gap:6px;
        flex-shrink:0;
      }
      .calc-vs__badge {
        background:#1e1b4b;color:#fff;font-size:12px;font-weight:800;
        padding:8px 12px;border-radius:999px;letter-spacing:1px;
      }
      .calc-vs__diff {
        font-size:13px;font-weight:700;color:#6b7280;text-align:center;
        line-height:1.4;
      }
      .calc-vs__diff.cheaper { color:#10b981; }
      .calc-vs__diff.pricier  { color:#ef4444; }

      /* Score row */
      .calc-scores {
        display:grid;grid-template-columns:1fr 1fr;gap:16px;
      }
      .calc-score-card {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:16px;
      }
      .calc-score-card__label {
        font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;
        color:#9ca3af;margin-bottom:8px;
      }
      .calc-score-card__city { font-size:15px;font-weight:700;color:#111827;margin-bottom:12px; }
      .calc-score-card__score {
        font-size:28px;font-weight:900;letter-spacing:-0.02em;
      }
      .calc-score-card__score-label { font-size:11px;font-weight:600;margin-top:4px; }
      .calc-score-card__bar-wrap {
        height:6px;background:#f1f5f9;border-radius:6px;margin-top:10px;overflow:hidden;
      }
      .calc-score-card__bar {
        height:100%;border-radius:6px;
        background:linear-gradient(90deg,#6366f1,#8b5cf6);
        transition:width 0.6s ease;
      }

      /* Income visualization */
      .calc-income {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:20px;
      }
      .calc-income__title {
        font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
        color:#9ca3af;margin-bottom:16px;display:flex;align-items:center;gap:8px;
      }
      .calc-income__row { margin-bottom:14px; }
      .calc-income__row:last-child { margin-bottom:0; }
      .calc-income__city-name {
        font-size:13px;font-weight:600;color:#374151;margin-bottom:6px;
        display:flex;justify-content:space-between;
      }
      .calc-income__city-name span { color:#6b7280;font-weight:500; }
      .calc-income__bar-wrap {
        height:10px;background:#f1f5f9;border-radius:10px;overflow:hidden;
      }
      .calc-income__bar {
        height:100%;border-radius:10px;transition:width 0.6s ease;
      }
      .calc-income__note {
        font-size:12px;color:#9ca3af;margin-top:12px;
        padding-top:12px;border-top:1px solid #f1f5f9;
      }
      .calc-income--empty {
        text-align:center;padding:24px;color:#9ca3af;font-size:13px;
      }

      /* -- Breakdown (redesigned) ---------- */
      .calc-breakdown {
        background:#fff;border:1px solid #e5e7eb;border-radius:20px;
        padding:24px;overflow:hidden;
      }
      .calc-breakdown__header {
        display:grid;grid-template-columns:110px 1fr 1fr;
        gap:12px;align-items:center;margin-bottom:16px;
        padding-bottom:12px;border-bottom:1px solid #f1f5f9;
      }
      .calc-breakdown__col-head {
        font-size:11px;font-weight:700;letter-spacing:0.5px;
        padding:4px 10px;border-radius:999px;text-align:center;
      }
      .calc-breakdown__col-head--a {
        background:#eef2ff;color:#4f46e5;
      }
      .calc-breakdown__col-head--b {
        background:#d1fae5;color:#065f46;
      }
      .calc-breakdown__row {
        display:grid;grid-template-columns:110px 1fr 1fr;
        align-items:center;gap:12px;margin-bottom:14px;
      }
      .calc-breakdown__row:last-child { margin-bottom:0; }
      .calc-breakdown__label {
        display:flex;align-items:center;gap:6px;
        font-size:12px;font-weight:600;color:#374151;white-space:nowrap;
      }
      .calc-breakdown__cell {
        display:flex;align-items:center;gap:8px;
      }
      .calc-breakdown__bar-wrap {
        flex:1;height:8px;background:#f1f5f9;border-radius:8px;overflow:hidden;
      }
      .calc-breakdown__bar {
        height:100%;border-radius:8px;transition:width 0.6s cubic-bezier(0.4,0,0.2,1);
      }
      .calc-breakdown__val {
        font-size:12px;font-weight:800;color:#111827;
        white-space:nowrap;min-width:52px;text-align:right;
      }

      /* -- Radar -------------------------- */
      .calc-radar {
        background:#fff;border:1px solid #e5e7eb;border-radius:20px;padding:24px;
      }
      .calc-radar__header {
        display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;
      }
      .calc-radar__title {
        font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;
      }
      .calc-radar__legend { display:flex;gap:16px; }
      .calc-radar__legend-item {
        display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:#374151;
      }
      .calc-radar__legend-dot { width:10px;height:10px;border-radius:50%; }
      canvas#relocation-radar { display:block;margin:0 auto;max-width:100%; }

      /* -- Projection (upgraded) ----------- */
      .calc-projection {
        background:#fff;border:1px solid #e5e7eb;border-radius:20px;
        overflow:hidden;
      }
      .calc-projection__titlebar {
        padding:16px 20px 12px;border-bottom:1px solid #f1f5f9;
        display:flex;align-items:center;justify-content:space-between;
      }
      .calc-projection__title {
        font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;
      }
      .calc-projection__sub {
        font-size:11px;color:#c4b5fd;font-weight:500;
      }
      .calc-projection__table {
        width:100%;border-collapse:collapse;font-size:13px;
      }
      .calc-projection__table th {
        text-align:left;padding:10px 20px;
        color:#9ca3af;font-size:10px;font-weight:700;
        text-transform:uppercase;letter-spacing:1px;
        background:#fafafa;border-bottom:1px solid #f1f5f9;
      }
      .calc-projection__table td {
        padding:13px 20px;border-bottom:1px solid #f9fafb;
        font-weight:600;color:#111827;font-size:13px;
      }
      .calc-projection__table tr:last-child td { border-bottom:none; }
      .calc-projection__table tr:hover td { background:#f9fafb; }
      .calc-projection__table td:first-child {
        color:#6b7280;font-weight:500;font-size:12px;
      }
      .proj-badge {
        display:inline-flex;align-items:center;gap:4px;
        padding:3px 8px;border-radius:999px;
        font-size:11px;font-weight:700;
      }
      .proj-badge--pos { background:#fee2e2;color:#dc2626; }
      .proj-badge--neg { background:#d1fae5;color:#065f46; }

      /* -- Visa (upgraded) ----------------- */
      .calc-visa {
        display:grid;grid-template-columns:1fr 1fr;gap:16px;
      }
      .calc-visa-card {
        background:#fff;border:1px solid #e5e7eb;border-radius:20px;
        overflow:hidden;
      }
      .calc-visa-card__head {
        padding:14px 18px 12px;
        border-bottom:1px solid #f1f5f9;
        display:flex;align-items:center;justify-content:space-between;
      }
      .calc-visa-card__title {
        font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;
      }
      .calc-visa-card__city {
        font-size:14px;font-weight:800;color:#111827;
      }
      .calc-visa-card__body { padding:16px 18px; }
      .calc-visa-card__tag {
        display:inline-flex;align-items:center;gap:6px;
        padding:5px 12px;border-radius:999px;
        font-size:11px;font-weight:700;margin-bottom:14px;
      }
      .calc-visa-card__row {
        display:flex;justify-content:space-between;align-items:center;
        font-size:12px;color:#6b7280;
        padding:7px 0;border-bottom:1px solid #f9fafb;
      }
      .calc-visa-card__row:last-child { border-bottom:none; }
      .calc-visa-card__row strong { color:#111827;font-weight:700;font-size:12px; }

      /* SEO block */
      .calc-seo {
        background:#f8fafc;border-top:1px solid #e5e7eb;padding:64px 0;
      }
      .calc-seo__inner { max-width:860px;margin:0 auto; }
      .calc-seo__intro { margin-bottom:48px; }
      .calc-seo__intro h2 { font-size:26px;font-weight:800;color:#111827;margin-bottom:12px; }
      .calc-seo__intro p { font-size:15px;color:#4b5563;line-height:1.8;margin-bottom:12px; }
      .calc-seo__faq { margin-top:48px; }
      .calc-seo__faq h2 { font-size:22px;font-weight:800;color:#111827;margin-bottom:24px; }
      .calc-faq-item {
        border:1px solid #e5e7eb;border-radius:12px;margin-bottom:12px;
        background:#fff;overflow:hidden;
      }
      .calc-faq-q {
        width:100%;text-align:left;padding:16px 20px;
        font-size:14px;font-weight:700;color:#111827;
        display:flex;justify-content:space-between;align-items:center;
        cursor:pointer;background:none;border:none;
        transition:color 0.15s;
      }
      .calc-faq-q:hover { color:#6366f1; }
      .calc-faq-q svg { transition:transform 0.2s;flex-shrink:0; }
      .calc-faq-item.is-open .calc-faq-q svg { transform:rotate(180deg); }
      .calc-faq-a {
        max-height:0;overflow:hidden;transition:max-height 0.3s ease,padding 0.3s;
        font-size:14px;color:#4b5563;line-height:1.8;padding:0 20px;
      }
      .calc-faq-item.is-open .calc-faq-a { max-height:300px;padding:0 20px 16px; }

      /* -- Responsive --------------------- */
      @media(max-width:1024px){
        .calc-layout { grid-template-columns:1fr;gap:24px; }
        .calc-form { position:static; }
        .calc-breakdown__row { grid-template-columns:90px 1fr 70px; }
        .calc-breakdown__row .calc-breakdown__bar-wrap:last-of-type,
        .calc-breakdown__row .calc-breakdown__val:last-of-type { display:none; }
      }
      @media(max-width:640px){
        .calc-compare { grid-template-columns:1fr;gap:12px; }
        .calc-vs { flex-direction:row; }
        .calc-scores, .calc-visa { grid-template-columns:1fr; }
      }
    </style>

    <!-- HERO -->
    <section class="calc-hero">
      ${breadcrumb}
      <div class="container calc-hero__inner">
        <p class="calc-hero__eyebrow">Free Cost of Living Calculator</p>
        <h1 class="calc-hero">Compare <em>real monthly costs</em><br>in any two cities worldwide.</h1>
        <p class="calc-hero__sub">
          Housing, food, transport, coworking, visa complexity and tax pressure -- all in one comparison.
          Updated March 2026   33 cities   No sign-up required.
        </p>
      </div>
    </section>

    <!-- CALCULATOR -->
    <div class="container">
      <div class="calc-layout">

        <!-- LEFT: FORM -->
        <aside class="calc-form">
          <p class="calc-form__title">Configure Your Comparison</p>

          <div class="calc-field">
            <label>City A</label>
            <select id="city-a">${cityOptionsHtml}</select>
          </div>
          <div class="calc-field">
            <label>City B</label>
            <select id="city-b">${cityBOptions}</select>
          </div>

          <div class="calc-form__divider"></div>

          <div class="calc-field">
            <label>Where to live</label>
            <select id="housing">
              <option value="center">City Center</option>
              <option value="suburb">Suburb / Outside Center</option>
            </select>
          </div>
          <div class="calc-field">
            <label>Lifestyle</label>
            <select id="lifestyle">
              <option value="budget">Budget</option>
              <option value="standard" selected>Standard</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <div class="calc-field">
            <label>Your Monthly Income (USD)</label>
            <div class="calc-field__income-wrap">
              <span class="calc-field__income-prefix">$</span>
              <input type="number" id="income-input" placeholder="e.g. 4000" min="0" />
            </div>
          </div>

          <div class="calc-form__divider"></div>

          <p class="calc-form__title">Relocation Profile</p>
          <div class="calc-profile-grid">
            <button class="calc-profile-btn is-active" data-profile="nomad">
              <span>🌍</span>Nomad
            </button>
            <button class="calc-profile-btn" data-profile="founder">
              <span>🚀</span>Founder
            </button>
            <button class="calc-profile-btn" data-profile="family">
              <span>👨 👩 👧</span>Family
            </button>
          </div>

          <button class="calc-share-btn" id="share-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            Copy shareable link
          </button>
        </aside>

        <!-- RIGHT: RESULTS -->
        <div class="calc-results">

          <!-- City cost comparison -->
          <div class="calc-compare">
            <div class="calc-city-card" id="card-a">
              <img class="calc-city-card__img" id="img-a" src="" alt="" />
              <div class="calc-city-card__body">
                <div class="calc-city-card__crown">👑</div>
                <p class="calc-city-card__name" id="name-a">--</p>
                <p class="calc-city-card__country" id="country-a">--</p>
                <div class="calc-city-card__cost" id="cost-a">--</div>
                <div class="calc-city-card__cost-label">per month</div>
              </div>
            </div>

            <div class="calc-vs">
              <div class="calc-vs__badge">VS</div>
              <div class="calc-vs__diff" id="vs-diff">--</div>
            </div>

            <div class="calc-city-card" id="card-b">
              <img class="calc-city-card__img" id="img-b" src="" alt="" />
              <div class="calc-city-card__body">
                <div class="calc-city-card__crown">👑</div>
                <p class="calc-city-card__name" id="name-b">--</p>
                <p class="calc-city-card__country" id="country-b">--</p>
                <div class="calc-city-card__cost" id="cost-b">--</div>
                <div class="calc-city-card__cost-label">per month</div>
              </div>
            </div>
          </div>

          <!-- Strategic scores -->
          <div class="calc-scores">
            <div class="calc-score-card" id="score-card-a">
              <div class="calc-score-card__label">City A -- Strategic Score</div>
              <div class="calc-score-card__city" id="score-city-a">--</div>
              <div class="calc-score-card__score" id="score-val-a">--</div>
              <div class="calc-score-card__score-label" id="score-label-a"></div>
              <div class="calc-score-card__bar-wrap">
                <div class="calc-score-card__bar" id="score-bar-a" style="width:0%"></div>
              </div>
            </div>
            <div class="calc-score-card" id="score-card-b">
              <div class="calc-score-card__label">City B -- Strategic Score</div>
              <div class="calc-score-card__city" id="score-city-b">--</div>
              <div class="calc-score-card__score" id="score-val-b">--</div>
              <div class="calc-score-card__score-label" id="score-label-b"></div>
              <div class="calc-score-card__bar-wrap">
                <div class="calc-score-card__bar" id="score-bar-b" style="width:0%"></div>
              </div>
            </div>
          </div>

          <!-- Income purchasing power -->
          <div class="calc-income" id="income-section">
            <div class="calc-income--empty" id="income-empty">
              ✏️ Enter your monthly income above to see your purchasing power in each city.
            </div>
            <div id="income-data" style="display:none">
              <div class="calc-income__title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                Purchasing Power -- Your income vs. local costs
              </div>
              <div class="calc-income__row">
                <div class="calc-income__city-name">
                  <span id="income-city-a-name">--</span>
                  <span id="income-ratio-a">--</span>
                </div>
                <div class="calc-income__bar-wrap">
                  <div class="calc-income__bar" id="income-bar-a" style="width:0%;background:linear-gradient(90deg,#6366f1,#8b5cf6)"></div>
                </div>
              </div>
              <div class="calc-income__row">
                <div class="calc-income__city-name">
                  <span id="income-city-b-name">--</span>
                  <span id="income-ratio-b">--</span>
                </div>
                <div class="calc-income__bar-wrap">
                  <div class="calc-income__bar" id="income-bar-b" style="width:0%;background:linear-gradient(90deg,#10b981,#34d399)"></div>
                </div>
              </div>
              <div class="calc-income__note" id="income-note">--</div>
            </div>
          </div>

          <!-- Monthly breakdown -->
          <div class="calc-breakdown">
            <div class="calc-breakdown__header">
              <div></div>
              <div class="calc-breakdown__col-head calc-breakdown__col-head--a" id="bd-head-a">City A</div>
              <div class="calc-breakdown__col-head calc-breakdown__col-head--b" id="bd-head-b">City B</div>
            </div>
            <div class="calc-breakdown__row">
              <div class="calc-breakdown__label">🏠 Housing</div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-a-acc" style="width:0%;background:linear-gradient(90deg,#6366f1,#8b5cf6)"></div></div>
                <div class="calc-breakdown__val" id="val-a-acc">--</div>
              </div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-b-acc" style="width:0%;background:linear-gradient(90deg,#10b981,#34d399)"></div></div>
                <div class="calc-breakdown__val" id="val-b-acc">--</div>
              </div>
            </div>
            <div class="calc-breakdown__row">
              <div class="calc-breakdown__label">🍽️ Food</div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-a-food" style="width:0%;background:linear-gradient(90deg,#6366f1,#8b5cf6)"></div></div>
                <div class="calc-breakdown__val" id="val-a-food">--</div>
              </div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-b-food" style="width:0%;background:linear-gradient(90deg,#10b981,#34d399)"></div></div>
                <div class="calc-breakdown__val" id="val-b-food">--</div>
              </div>
            </div>
            <div class="calc-breakdown__row">
              <div class="calc-breakdown__label">🚇 Transport</div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-a-tsp" style="width:0%;background:linear-gradient(90deg,#6366f1,#8b5cf6)"></div></div>
                <div class="calc-breakdown__val" id="val-a-tsp">--</div>
              </div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-b-tsp" style="width:0%;background:linear-gradient(90deg,#10b981,#34d399)"></div></div>
                <div class="calc-breakdown__val" id="val-b-tsp">--</div>
              </div>
            </div>
            <div class="calc-breakdown__row">
              <div class="calc-breakdown__label">💻 Coworking</div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-a-cow" style="width:0%;background:linear-gradient(90deg,#6366f1,#8b5cf6)"></div></div>
                <div class="calc-breakdown__val" id="val-a-cow">--</div>
              </div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-b-cow" style="width:0%;background:linear-gradient(90deg,#10b981,#34d399)"></div></div>
                <div class="calc-breakdown__val" id="val-b-cow">--</div>
              </div>
            </div>
          </div>

          <!-- Radar chart -->
          <div class="calc-radar">
            <div class="calc-radar__header">
              <div class="calc-radar__title">Relocation Radar -- 6 dimensions</div>
              <div class="calc-radar__legend">
                <div class="calc-radar__legend-item">
                  <div class="calc-radar__legend-dot" style="background:#6366f1"></div>
                  <span id="radar-label-a">City A</span>
                </div>
                <div class="calc-radar__legend-item">
                  <div class="calc-radar__legend-dot" style="background:#10b981"></div>
                  <span id="radar-label-b">City B</span>
                </div>
              </div>
            </div>
            <canvas id="relocation-radar" width="420" height="340"></canvas>
          </div>

          <!-- Projection table -->
          <div class="calc-projection">
            <div class="calc-projection__titlebar">
              <div class="calc-projection__title">Cost Projection -- Inflation-adjusted</div>
              <div class="calc-projection__sub">Annual totals</div>
            </div>
            <table class="calc-projection__table">
              <thead>
                <tr>
                  <th>Horizon</th>
                  <th id="proj-head-a">City A</th>
                  <th id="proj-head-b">City B</th>
                  <th>  Difference</th>
                </tr>
              </thead>
              <tbody id="proj-body"></tbody>
            </table>
          </div>

          <!-- Visa comparison -->
          <div class="calc-visa">
            <div class="calc-visa-card">
              <div class="calc-visa-card__head">
                <div class="calc-visa-card__title">Visa   City A</div>
                <div class="calc-visa-card__city" id="visa-city-a">--</div>
              </div>
              <div class="calc-visa-card__body">
                <div id="visa-tag-a"></div>
                <div id="visa-rows-a"></div>
              </div>
            </div>
            <div class="calc-visa-card">
              <div class="calc-visa-card__head">
                <div class="calc-visa-card__title">Visa   City B</div>
                <div class="calc-visa-card__city" id="visa-city-b">--</div>
              </div>
              <div class="calc-visa-card__body">
                <div id="visa-tag-b"></div>
                <div id="visa-rows-b"></div>
              </div>
            </div>
          </div>

        </div><!-- /calc-results -->
      </div><!-- /calc-layout -->
    </div>

    <!-- SEO CONTENT -->
    <section class="calc-seo">
      <div class="container calc-seo__inner">

        <div class="calc-seo__intro">
          <h2>How to use the Cost of Living Calculator</h2>
          <p>
            This free tool compares monthly living costs between two cities worldwide -- covering housing,
            food, transport, coworking, visa complexity and local tax rates. It's designed for digital nomads,
            remote workers, expats and families planning an international relocation.
          </p>
          <p>
            Unlike generic cost-of-living indexes, TripCost lets you adjust for your actual lifestyle:
            city center vs. suburb housing, budget vs. premium spending, and three relocation profiles
            (nomad, founder, family) that weight the scoring differently.
          </p>
          <p>
            Enter your monthly income to instantly see your purchasing power in both cities -- how many months
            of expenses your salary covers, and which destination gives you the best financial headroom.
          </p>
        </div>

        <div class="calc-seo__faq">
          <h2>Frequently Asked Questions</h2>

          <div class="calc-faq-item">
            <button class="calc-faq-q">
              How accurate are the cost of living figures?
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="calc-faq-a">
              All figures are manually researched and updated quarterly (last update: March 2026). We cross-reference
              Numbeo, Expatistan, local rental listings and nomad community reports. Costs represent a realistic
              monthly average -- individual expenses will vary based on neighbourhood, habits and lifestyle.
            </div>
          </div>

          <div class="calc-faq-item">
            <button class="calc-faq-q">
              What is the Strategic Score?
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="calc-faq-a">
              The Strategic Score combines six factors: cost efficiency relative to your income, safety index,
              visa accessibility, tax friendliness, currency stability, and infrastructure quality (transport,
              healthcare, English proficiency, airport connectivity). The weighting adjusts based on your
              selected relocation profile -- a founder cares more about tax, a family more about safety.
            </div>
          </div>

          <div class="calc-faq-item">
            <button class="calc-faq-q">
              Which cities have a digital nomad visa?
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="calc-faq-a">
              Among the 33 cities in our database, destinations with dedicated digital nomad or remote work visas
              include: Lisbon (Portugal D8 visa), Bangkok (Thailand LTR visa), Dubai (UAE remote work permit),
              Bali (Indonesia digital nomad visa), Barcelona (Spain digital nomad visa) and Tokyo (Japan
              digital nomad visa). Visa rules change frequently -- always verify on the official government website.
            </div>
          </div>

          <div class="calc-faq-item">
            <button class="calc-faq-q">
              How is purchasing power calculated?
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="calc-faq-a">
              Purchasing power shows what percentage of your monthly income is consumed by living costs in each city.
              A ratio of 60% means your living expenses equal 60% of your income -- leaving 40% for savings or
              discretionary spending. A ratio above 100% means that city exceeds your budget at your current income.
            </div>
          </div>

          <div class="calc-faq-item">
            <button class="calc-faq-q">
              What does the cost projection table show?
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="calc-faq-a">
              The projection adjusts current monthly costs by each city's historical inflation rate over 1, 3
              and 5 years. It shows what you can expect to spend annually at each horizon -- useful for long-term
              relocation planning. Note that inflation rates are estimates and actual future costs may differ.
            </div>
          </div>

        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

/* ---------------------------------------------------------
   INTERACTIVITY
--------------------------------------------------------- */
export function setupCalculatorInteractivity() {

  /* -- DOM refs ------------------------------------------- */
  const selA      = document.getElementById('city-a');
  const selB      = document.getElementById('city-b');
  const selHouse  = document.getElementById('housing');
  const selLife   = document.getElementById('lifestyle');
  const incomeEl  = document.getElementById('income-input');
  const shareBtn  = document.getElementById('share-btn');
  if (!selA) return;

  let activeProfile = 'nomad';

  /* -- Profile buttons ------------------------------------ */
  document.querySelectorAll('[data-profile]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-profile]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeProfile = btn.dataset.profile;
      update();
    });
  });

  /* -- FAQ accordion -------------------------------------- */
  document.querySelectorAll('.calc-faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.calc-faq-item');
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.calc-faq-item').forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  /* -- Share button --------------------------------------- */
  shareBtn?.addEventListener('click', () => {
    const url = new URL(window.location.href);
    url.searchParams.set('a', selA.value);
    url.searchParams.set('b', selB.value);
    url.searchParams.set('h', selHouse.value);
    url.searchParams.set('l', selLife.value);
    url.searchParams.set('p', activeProfile);
    navigator.clipboard.writeText(url.toString()).then(() => {
      shareBtn.classList.add('copied');
      shareBtn.querySelector('svg').nextSibling.textContent = ' Link copied!';
      setTimeout(() => {
        shareBtn.classList.remove('copied');
        shareBtn.childNodes[1].textContent = ' Copy shareable link';
      }, 2500);
    });
  });

  /* -- Restore from URL params ---------------------------- */
  const p = new URLSearchParams(window.location.search);
  if (p.get('a')) selA.value = p.get('a');
  if (p.get('b')) selB.value = p.get('b');
  if (p.get('h')) selHouse.value = p.get('h');
  if (p.get('l')) selLife.value = p.get('l');
  if (p.get('p')) {
    activeProfile = p.get('p');
    document.querySelectorAll('[data-profile]').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.profile === activeProfile);
    });
  }

  /* -- Helpers -------------------------------------------- */
  function getCity(sel) {
    const raw = sel.options[sel.selectedIndex]?.dataset?.city;
    return raw ? JSON.parse(decodeURIComponent(raw)) : null;
  }

  function calcBudget(city) {
    const h = selHouse.value;
    const l = selLife.value;
    const acc  = city.costs.accommodation[h] * 30;
    const food = city.costs.food[l] * 30;
    const tsp  = city.costs.transport;
    const cow  = city.costs.coworking;
    const sub  = acc + food + tsp + cow;
    return { acc, food, tsp, cow, total: sub + Math.round(sub * 0.1) };
  }

  function strategicScore(city, total, income) {
    const weights = activeProfile === 'founder'
      ? { cost:.15, safety:.1, visa:.1, tax:.25, stab:.2, infra:.1, income:.1 }
      : activeProfile === 'family'
      ? { cost:.15, safety:.25, visa:.05, tax:.1, stab:.2, infra:.15, income:.1 }
      : { cost:.25, safety:.1, visa:.2, tax:.1, stab:.15, infra:.1, income:.1 };

    const costS = income > 0
      ? Math.min((income / total) * 100, 100)
      : Math.max(0, 100 - (total / 5000 * 50));
    const safety = city.safety?.safetyIndex ?? 50;
    const visa   = city.visa?.remoteFriendly ? 85 : 45;
    const tax    = 100 - (((city.tax?.personalIncomeTaxTopRate ?? 30) + (city.tax?.corporateTax ?? 25)) / 2);
    const stab   = {High:80,'Very High':90,Medium:60}[city.macro?.currencyStability] ?? 40;
    const infra  = ((city.infrastructure?.publicTransportQuality ?? 50) +
                    (city.infrastructure?.healthcareQuality ?? 50) +
                    (city.infrastructure?.englishProficiency ?? 50) +
                    (city.infrastructure?.airportConnectivity ?? 50)) / 4;
    const incS   = income > 0 ? Math.min((income / total) * 100, 100) : 50;

    return Math.max(0, Math.min(100, Math.round(
      costS * weights.cost + safety * weights.safety + visa * weights.visa +
      tax * weights.tax + stab * weights.stab + infra * weights.infra + incS * weights.income
    )));
  }

  function scoreLabel(s) {
    if (s >= 85) return 'Elite destination';
    if (s >= 70) return 'Strong choice';
    if (s >= 55) return 'Moderate fit';
    return 'High risk profile';
  }

  function scoreColor(s) {
    return s >= 70 ? '#10b981' : s >= 55 ? '#f59e0b' : '#ef4444';
  }

  /* Count-up animation */
  function countUp(el, target, prefix = '$') {
    const start = parseInt(el.dataset.current || '0');
    const diff  = target - start;
    const steps = 30;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const val = Math.round(start + diff * (step / steps));
      el.textContent = prefix + val.toLocaleString();
      if (step >= steps) {
        clearInterval(interval);
        el.dataset.current = target;
      }
    }, 16);
  }

  /* Radar chart */
  function drawRadar(cA, cB, tA, tB) {
    const canvas = document.getElementById('relocation-radar');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2 + 10;
    const R  = Math.min(W, H) / 2 - 55;
    const cats = ['Cost', 'Safety', 'Infra', 'Visa', 'Tax', 'Stability'];
    const N = cats.length;

    function normalize(city, total) {
      return [
        Math.max(0, 100 - (total / 5000 * 50)),
        city.safety?.safetyIndex ?? 50,
        ((city.infrastructure?.publicTransportQuality ?? 50) + (city.infrastructure?.healthcareQuality ?? 50) +
         (city.infrastructure?.englishProficiency ?? 50) + (city.infrastructure?.airportConnectivity ?? 50)) / 4,
        city.visa?.remoteFriendly ? 85 : 45,
        100 - (((city.tax?.personalIncomeTaxTopRate ?? 30) + (city.tax?.corporateTax ?? 25)) / 2),
        {High:80,'Very High':90,Medium:60}[city.macro?.currencyStability] ?? 40
      ];
    }

    const dA = normalize(cA, tA);
    const dB = normalize(cB, tB);
    let prog = 0;

    function frame() {
      ctx.clearRect(0, 0, W, H);

      for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        for (let j = 0; j < N; j++) {
          const a = (Math.PI * 2 / N) * j - Math.PI / 2;
          const r = R * (i / 5);
          j === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
                  : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
        }
        ctx.closePath();
        ctx.strokeStyle = '#f1f5f9';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      cats.forEach((cat, i) => {
        const a = (Math.PI * 2 / N) * i - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(a), cy + R * Math.sin(a));
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 1;
        ctx.stroke();
        const lx = cx + (R + 20) * Math.cos(a);
        const ly = cy + (R + 20) * Math.sin(a);
        ctx.fillStyle = '#6b7280';
        ctx.font = '600 11px system-ui';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(cat, lx, ly);
      });

      function layer(data, color) {
        ctx.beginPath();
        data.forEach((v, i) => {
          const a = (Math.PI * 2 / N) * i - Math.PI / 2;
          const r = R * (v / 100) * prog;
          const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = color.replace('1)', '0.15)');
        ctx.fill();
      }

      layer(dA, 'rgba(99,102,241,1)');
      layer(dB, 'rgba(16,185,129,1)');

      if (prog < 1) { prog = Math.min(prog + 0.05, 1); requestAnimationFrame(frame); }
    }
    frame();
  }

  /* -- Main update ---------------------------------------- */
  async function update() {
    const cA = getCity(selA);
    const cB = getCity(selB);
    if (!cA || !cB) return;

    const bA = calcBudget(cA);
    const bB = calcBudget(cB);
    const income = parseFloat(incomeEl?.value || 0);

    /* City cards */
    document.getElementById('img-a').src = cA.image;
    document.getElementById('img-a').alt = cA.name;
    document.getElementById('img-b').src = cB.image;
    document.getElementById('img-b').alt = cB.name;
    document.getElementById('name-a').textContent    = cA.name;
    document.getElementById('country-a').textContent = cA.country;
    document.getElementById('name-b').textContent    = cB.name;
    document.getElementById('country-b').textContent = cB.country;
    countUp(document.getElementById('cost-a'), bA.total);
    countUp(document.getElementById('cost-b'), bB.total);

    /* Winner */
    const winA = bA.total <= bB.total;
    document.getElementById('card-a').classList.toggle('is-winner', winA);
    document.getElementById('card-a').classList.toggle('is-loser', !winA);
    document.getElementById('card-b').classList.toggle('is-winner', !winA);
    document.getElementById('card-b').classList.toggle('is-loser', winA);

    /* VS diff */
    const diffPct = bB.total > 0 ? Math.abs(Math.round((bA.total - bB.total) / bB.total * 100)) : 0;
    const diffEl  = document.getElementById('vs-diff');
    const cheaper = bA.total < bB.total ? cA.name : cB.name;
    diffEl.textContent = `${cheaper} is ${diffPct}% cheaper`;
    diffEl.className   = `calc-vs__diff ${bA.total < bB.total ? 'cheaper' : 'pricier'}`;

    /* Strategic scores */
    const sA = strategicScore(cA, bA.total, income);
    const sB = strategicScore(cB, bB.total, income);
    ['a','b'].forEach((x, i) => {
      const s = i === 0 ? sA : sB;
      const c = scoreColor(s);
      document.getElementById(`score-city-${x}`).textContent = i === 0 ? cA.name : cB.name;
      document.getElementById(`score-val-${x}`).textContent  = s + '/100';
      document.getElementById(`score-val-${x}`).style.color  = c;
      document.getElementById(`score-label-${x}`).textContent = scoreLabel(s);
      document.getElementById(`score-label-${x}`).style.color = c;
      document.getElementById(`score-bar-${x}`).style.width   = s + '%';
      document.getElementById(`score-bar-${x}`).style.background = c;
    });

    /* Income */
    if (income > 0) {
      document.getElementById('income-empty').style.display = 'none';
      document.getElementById('income-data').style.display  = 'block';
      const rA = Math.round((bA.total / income) * 100);
      const rB = Math.round((bB.total / income) * 100);
      document.getElementById('income-city-a-name').textContent = cA.name;
      document.getElementById('income-city-b-name').textContent = cB.name;
      document.getElementById('income-ratio-a').textContent = `${rA}% of income`;
      document.getElementById('income-ratio-b').textContent = `${rB}% of income`;
      document.getElementById('income-bar-a').style.width = Math.min(rA, 100) + '%';
      document.getElementById('income-bar-b').style.width = Math.min(rB, 100) + '%';
      const surplus = income - bA.total;
      document.getElementById('income-note').textContent =
        surplus > 0
          ? `With $${income.toLocaleString()}/mo, you'd have $${Math.round(surplus).toLocaleString()} left each month in ${cA.name}.`
          : `Your budget is $${Math.abs(Math.round(surplus)).toLocaleString()} short for ${cA.name} at this lifestyle.`;
    } else {
      document.getElementById('income-empty').style.display = 'block';
      document.getElementById('income-data').style.display  = 'none';
    }

    /* Breakdown column headers */
    document.getElementById('bd-head-a').textContent = cA.name;
    document.getElementById('bd-head-b').textContent = cB.name;

    /* Breakdown bars */
    const maxVal = Math.max(bA.acc, bB.acc, bA.food, bB.food, bA.tsp, bB.tsp, bA.cow, bB.cow);
    [['acc','acc'],['food','food'],['tsp','tsp'],['cow','cow']].forEach(([k, id]) => {
      document.getElementById(`val-a-${id}`).textContent = '$' + bA[k].toLocaleString();
      document.getElementById(`val-b-${id}`).textContent = '$' + bB[k].toLocaleString();
      document.getElementById(`bar-a-${id}`).style.width = (bA[k] / maxVal * 100) + '%';
      document.getElementById(`bar-b-${id}`).style.width = (bB[k] / maxVal * 100) + '%';
    });

    /* Radar */
    document.getElementById('radar-label-a').textContent = cA.name;
    document.getElementById('radar-label-b').textContent = cB.name;
    drawRadar(cA, cB, bA.total, bB.total);

    /* Projections */
    document.getElementById('proj-head-a').textContent = cA.name;
    document.getElementById('proj-head-b').textContent = cB.name;
    const infA = cA.macro?.inflationRate ?? 3;
    const infB = cB.macro?.inflationRate ?? 3;
    const rows = [1, 3, 5].map(yr => {
      const pA = Math.round(bA.total * Math.pow(1 + infA/100, yr) * 12);
      const pB = Math.round(bB.total * Math.pow(1 + infB/100, yr) * 12);
      const d  = pA - pB;
      const badge = d === 0 ? '--'
        : `<span class="proj-badge ${d>0?'proj-badge--pos':'proj-badge--neg'}">
             ${d>0?' ':' '} $${Math.abs(d).toLocaleString()}
           </span>`;
      return `<tr>
        <td>${yr} year${yr>1?'s':''}</td>
        <td>$${pA.toLocaleString()}/yr</td>
        <td>$${pB.toLocaleString()}/yr</td>
        <td>${badge}</td>
      </tr>`;
    });
    document.getElementById('proj-body').innerHTML = rows.join('');

    /* Visa cards */
    ['a','b'].forEach((x, i) => {
      const city = i === 0 ? cA : cB;
      const v    = city.visa;
      document.getElementById(`visa-city-${x}`).textContent = city.name;
      const tag  = document.getElementById(`visa-tag-${x}`);
      tag.innerHTML = v
        ? `<span class="calc-visa-card__tag" style="background:${v.remoteFriendly?'#d1fae5':'#f1f5f9'};color:${v.remoteFriendly?'#065f46':'#6b7280'}">
            ${v.remoteFriendly ? '✅ Nomad Visa Available' : '  Standard Visa'}
           </span>`
        : '';
      const rows = document.getElementById(`visa-rows-${x}`);
      rows.innerHTML = v ? `
        <div class="calc-visa-card__row"><span>Type</span><strong>${v.type || '--'}</strong></div>
        <div class="calc-visa-card__row"><span>Stay</span><strong>${v.stayDurationMonths || '--'} months</strong></div>
        <div class="calc-visa-card__row"><span>Processing</span><strong>~${v.processingTimeDays || '--'} days</strong></div>
        <div class="calc-visa-card__row"><span>Min. income</span><strong>${v.minIncomeRequirement > 0 ? '$'+v.minIncomeRequirement+'/mo' : 'None'}</strong></div>
      ` : '<p style="font-size:13px;color:#9ca3af">No visa data available.</p>';
    });
  }

  /* -- Event listeners ------------------------------------ */
  [selA, selB, selHouse, selLife].forEach(el => el?.addEventListener('change', update));
  incomeEl?.addEventListener('input', update);

  update();
}

export default CalculatorPage;
