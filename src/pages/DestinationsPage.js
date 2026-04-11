/**
 * DestinationsPage -- Redesigned V2
 * Live filters, rich cards, client-side sort/search
 */

import { setPageMeta, injectSchema } from '../logic/setPageMeta.js';
import { MainLayout } from '../layouts/MainLayout.js';
import { getAllCities } from '../data/cityService.js';
import { calculateCityScore } from '../logic/cityRanking.js';
import { Breadcrumb, BREADCRUMB_CSS } from '../components/ui/Breadcrumb.js';

export function DestinationsPage() {

  const urlParams  = new URLSearchParams(window.location.search);
  const activeProfile = ['solo','family','nomad'].includes(urlParams.get('profile'))
    ? urlParams.get('profile') : 'nomad';

  const cities = getAllCities().map(city => ({
    ...city,
    score: calculateCityScore(city, activeProfile) || 0,
    monthly: Math.round(
      city.costs.accommodation.center * 30 +
      city.costs.food.standard * 30 +
      city.costs.transport +
      city.costs.coworking
    )
  })).sort((a,b) => b.score - a.score);

  // Pre-render all city cards as JSON for client-side filtering
  const citiesJson = JSON.stringify(cities.map(c => ({
    slug: c.slug, name: c.name, country: c.country,
    continent: c.continent, image: c.image,
    score: c.score, monthly: c.monthly,
    nomadScore: c.digitalNomad?.overallScore ?? 0,
    safetyIndex: c.safety?.safetyIndex ?? 0,
    wifiSpeed: c.digitalNomad?.wifiSpeed ?? 0,
    visaFriendly: c.visa?.remoteFriendly ?? false,
    tags: c.tags ?? [],
    lat: c.lat, lng: c.lng
  })));

  const breadcrumb = Breadcrumb([
    { label: 'Home', href: '/' },
    { label: 'Destinations' }
  ]);

  const content = `
    <style>
      ${BREADCRUMB_CSS}
      /* -- Page layout -------------------- */
      .dest-page { background:#f8fafc;min-height:100vh; }

      /* -- Hero strip --------------------- */
      .dest-hero {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 60%,#1e1b4b 100%);
        padding:56px 0 48px;position:relative;overflow:hidden;
      }
      .dest-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 80% at 70% 50%,rgba(99,102,241,0.25) 0%,transparent 70%);
      }
      .dest-hero__inner { position:relative;z-index:2; }
      .dest-hero__eyebrow {
        font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;
        color:#818cf8;margin-bottom:14px;
      }
      .dest-hero__title {
        font-size:clamp(28px,4vw,48px);font-weight:800;color:#fff;
        letter-spacing:-0.025em;margin-bottom:12px;line-height:1.1;
      }
      .dest-hero__title em {
        font-style:normal;
        background:linear-gradient(90deg,#818cf8,#34d399);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      }
      .dest-hero__sub { font-size:15px;color:rgba(255,255,255,0.55);margin:0; }

      /* -- Filter bar --------------------- */
      .dest-filters {
        background:#fff;border-bottom:1px solid #e5e7eb;
        position:sticky;top:0;z-index:100;
        box-shadow:0 2px 12px rgba(0,0,0,0.06);
      }
      .dest-filters__inner {
        display:flex;align-items:center;gap:0;
        min-height:60px;overflow-x:auto;
        scrollbar-width:none;
      }
      .dest-filters__inner::-webkit-scrollbar { display:none; }

      .dest-filters__group {
        display:flex;align-items:center;gap:6px;
        padding:10px 20px;border-right:1px solid #f1f5f9;
        flex-shrink:0;
      }
      .dest-filters__group:last-child { border-right:none; }
      .dest-filters__label {
        font-size:11px;font-weight:600;letter-spacing:1px;
        text-transform:uppercase;color:#9ca3af;margin-right:4px;
        white-space:nowrap;
      }

      .filter-chip {
        display:inline-flex;align-items:center;gap:5px;
        padding:5px 12px;border-radius:999px;
        font-size:12px;font-weight:600;cursor:pointer;
        border:1.5px solid #e5e7eb;color:#6b7280;
        background:#fff;transition:all 0.15s;white-space:nowrap;
        user-select:none;
      }
      .filter-chip:hover { border-color:#c7d2fe;color:#4f46e5; }
      .filter-chip.is-active {
        background:linear-gradient(135deg,#6366f1,#8b5cf6);
        border-color:transparent;color:#fff;
        box-shadow:0 2px 8px rgba(99,102,241,0.35);
      }

      /* search */
      .dest-search {
        display:flex;align-items:center;gap:8px;
        padding:10px 20px;margin-left:auto;flex-shrink:0;
      }
      .dest-search input {
        border:1.5px solid #e5e7eb;border-radius:999px;
        padding:6px 14px 6px 32px;font-size:13px;
        width:180px;background:#f9fafb;
        transition:border-color 0.15s,width 0.2s;
        outline:none;
      }
      .dest-search input:focus { border-color:#6366f1;width:220px;background:#fff; }
      .dest-search__icon {
        position:relative;
      }
      .dest-search__icon svg {
        position:absolute;left:10px;top:50%;transform:translateY(-50%);
        color:#9ca3af;pointer-events:none;
      }

      /* sort */
      .dest-sort select {
        border:1.5px solid #e5e7eb;border-radius:8px;
        padding:6px 12px;font-size:12px;font-weight:600;color:#374151;
        background:#f9fafb;cursor:pointer;outline:none;
      }

      /* -- Result info bar ---------------- */
      .dest-resultbar {
        padding:16px 0 0;
        display:flex;align-items:center;justify-content:space-between;
      }
      .dest-resultbar__count {
        font-size:13px;font-weight:600;color:#374151;
      }
      .dest-resultbar__count span { color:#6366f1; }

      /* -- Grid --------------------------- */
      .dest-grid {
        display:grid;
        grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
        gap:20px;
        padding:20px 0 64px;
      }

      /* -- City card ---------------------- */
      .dest-card {
        background:#fff;border:1px solid #e5e7eb;border-radius:18px;
        overflow:hidden;cursor:pointer;
        transition:transform 0.22s,box-shadow 0.22s,border-color 0.22s;
        text-decoration:none;display:block;
      }
      .dest-card:hover {
        transform:translateY(-4px);
        box-shadow:0 20px 48px rgba(0,0,0,0.11);
        border-color:#c7d2fe;text-decoration:none;
      }
      .dest-card__img {
        position:relative;height:190px;overflow:hidden;
      }
      .dest-card__img img {
        width:100%;height:100%;object-fit:cover;
        transition:transform 0.4s ease;
      }
      .dest-card:hover .dest-card__img img { transform:scale(1.06); }
      .dest-card__img-overlay {
        position:absolute;inset:0;
        background:linear-gradient(to top,rgba(0,0,0,0.45) 0%,transparent 55%);
      }
      .dest-card__continent {
        position:absolute;top:12px;left:12px;
        background:rgba(0,0,0,0.5);backdrop-filter:blur(6px);
        color:rgba(255,255,255,0.9);font-size:10px;font-weight:700;
        letter-spacing:1.5px;text-transform:uppercase;
        padding:3px 10px;border-radius:999px;
      }
      .dest-card__score-badge {
        position:absolute;top:12px;right:12px;
        color:#fff;font-size:14px;font-weight:800;
        padding:4px 10px;border-radius:999px;
        backdrop-filter:blur(4px);
        box-shadow:0 2px 8px rgba(0,0,0,0.3);
      }
      .dest-card__body { padding:16px 18px 18px; }
      .dest-card__top {
        display:flex;justify-content:space-between;
        align-items:flex-start;margin-bottom:12px;
      }
      .dest-card__name { font-size:17px;font-weight:800;color:#111827;margin:0 0 3px; }
      .dest-card__country { font-size:12px;color:#9ca3af;margin:0; }
      .dest-card__price { text-align:right;flex-shrink:0; }
      .dest-card__price-val {
        font-size:19px;font-weight:800;color:#1e1b4b;letter-spacing:-0.02em;
      }
      .dest-card__price-val em { font-size:11px;font-weight:500;color:#9ca3af;font-style:normal; }
      .dest-card__price-label { font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px; }
      .dest-card__metrics {
        display:flex;gap:6px;flex-wrap:wrap;
      }
      .dest-card__metric {
        display:inline-flex;align-items:center;gap:4px;
        background:#f8fafc;border:1px solid #f1f5f9;
        border-radius:999px;padding:3px 9px;
        font-size:11px;font-weight:600;color:#374151;
      }
      .dest-card__metric svg { flex-shrink:0; }
      .dest-card__visa-tag {
        display:inline-flex;align-items:center;gap:4px;
        border-radius:999px;padding:3px 9px;
        font-size:11px;font-weight:600;
      }
      .dest-card__visa-tag--yes { background:#d1fae5;color:#065f46; }
      .dest-card__visa-tag--no  { background:#f1f5f9;color:#6b7280; }

      /* -- Empty state -------------------- */
      .dest-empty {
        grid-column:1/-1;text-align:center;padding:80px 20px;
        color:#9ca3af;
      }
      .dest-empty__icon { font-size:48px;margin-bottom:16px; }
      .dest-empty h3 { font-size:18px;font-weight:700;color:#374151;margin-bottom:8px; }

      /* -- Responsive --------------------- */
      @media(max-width:768px){
        .dest-search { display:none; }
        .dest-sort  { display:none; }
        .dest-grid  { grid-template-columns:1fr 1fr; }
      }
      @media(max-width:500px){
        .dest-grid { grid-template-columns:1fr; }
      }
    </style>

    <div class="dest-page">

      <!-- HERO -->
      <section class="dest-hero">
        ${breadcrumb}
        <div class="container dest-hero__inner">
          <p class="dest-hero__eyebrow">Global Explorer</p>
          <h1 class="dest-hero__title">Find your <em>next city</em>.</h1>
          <p class="dest-hero__sub">
            ${cities.length} destinations ranked by cost, safety, WiFi &amp; lifestyle.
          </p>
        </div>
      </section>

      <!-- FILTER BAR -->
      <div class="dest-filters" id="dest-filters">
        <div class="container">
          <div class="dest-filters__inner">

            <div class="dest-filters__group">
              <span class="dest-filters__label">Profile</span>
              <button class="filter-chip ${activeProfile==='nomad'?'is-active':''}" data-filter="profile" data-val="nomad">🌍 Nomad</button>
              <button class="filter-chip ${activeProfile==='solo'?'is-active':''}"  data-filter="profile" data-val="solo">👤 Solo</button>
              <button class="filter-chip ${activeProfile==='family'?'is-active':''}" data-filter="profile" data-val="family">👨 👩 👧 Family</button>
            </div>

            <div class="dest-filters__group">
              <span class="dest-filters__label">Region</span>
              <button class="filter-chip is-active" data-filter="region" data-val="all">All</button>
              <button class="filter-chip" data-filter="region" data-val="Europe">🇪🇺 Europe</button>
              <button class="filter-chip" data-filter="region" data-val="Asia">🌏 Asia</button>
              <button class="filter-chip" data-filter="region" data-val="Africa">🌍 Africa</button>
              <button class="filter-chip" data-filter="region" data-val="Americas">🌎 Americas</button>
            </div>

            <div class="dest-filters__group">
              <span class="dest-filters__label">Budget</span>
              <button class="filter-chip is-active" data-filter="budget" data-val="all">All</button>
              <button class="filter-chip" data-filter="budget" data-val="low">Under $1,500</button>
              <button class="filter-chip" data-filter="budget" data-val="mid">$1,500-$3,000</button>
              <button class="filter-chip" data-filter="budget" data-val="high">$3,000+</button>
            </div>

            <div class="dest-search">
              <div class="dest-search__icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <input type="text" id="dest-search-input" placeholder="Search city or country..." />
              </div>
            </div>

            <div class="dest-filters__group dest-sort">
              <span class="dest-filters__label">Sort</span>
              <select id="dest-sort-select">
                <option value="score">Best Score</option>
                <option value="price-asc">Price  </option>
                <option value="price-desc">Price  </option>
                <option value="alpha">A -> Z</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      <!-- RESULTS -->
      <div class="container">
        <div class="dest-resultbar">
          <div class="dest-resultbar__count" id="dest-count">
            Showing <span id="dest-count-num">${cities.length}</span> cities
          </div>
        </div>
        <div class="dest-grid" id="dest-grid"></div>
      </div>

    </div>

    <script id="dest-data" type="application/json">${citiesJson}</script>
  `;

  setPageMeta({
    title: 'Cost of Living by City -- 50+ Destinations for Expats & Nomads',
    description: 'Browse and filter 50+ cities by region, budget and lifestyle. Compare cost of living, safety, WiFi and visa options worldwide.',
    canonical: '/destinations'
  });

  injectSchema('page-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Destinations -- Cost of Living by City',
    url: 'https://tripcost.co/destinations',
    description: 'Browse 50+ cities ranked by cost, safety and nomad score.'
  });

  return MainLayout(content);
}

/* ---------------------------------------------------------
   Client-side interactivity
--------------------------------------------------------- */
export function setupDestinationsInteractivity() {
  const rawData   = document.getElementById('dest-data');
  if (!rawData) return;

  const allCities = JSON.parse(rawData.textContent);
  const grid      = document.getElementById('dest-grid');
  const countEl   = document.getElementById('dest-count-num');

  let state = {
    profile: 'nomad',
    region:  'all',
    budget:  'all',
    sort:    'score',
    search:  '',
  };

  // Read initial profile from URL
  const urlProfile = new URLSearchParams(window.location.search).get('profile');
  if (['solo','family','nomad'].includes(urlProfile)) state.profile = urlProfile;

  // -- Render ----------------------------------------------
  function scoreColor(s) {
    return s >= 85 ? '#10b981' : s >= 70 ? '#f59e0b' : '#6366f1';
  }

  function renderCard(c) {
    const color = scoreColor(c.nomadScore);
    return `
      <a href="/city/${c.slug}" data-link class="dest-card">
        <div class="dest-card__img">
          <img src="${c.image}" alt="${c.name}" loading="lazy" />
          <div class="dest-card__img-overlay"></div>
          <span class="dest-card__continent">${c.continent}</span>
          <span class="dest-card__score-badge" style="background:${color}">
            ${c.nomadScore}/100
          </span>
        </div>
        <div class="dest-card__body">
          <div class="dest-card__top">
            <div>
              <p class="dest-card__name">${c.name}</p>
              <p class="dest-card__country">${c.country}</p>
            </div>
            <div class="dest-card__price">
              <div class="dest-card__price-label">From</div>
              <div class="dest-card__price-val">$${c.monthly.toLocaleString()}<em>/mo</em></div>
            </div>
          </div>
          <div class="dest-card__metrics">
            <span class="dest-card__metric">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Safety ${c.safetyIndex}
            </span>
            <span class="dest-card__metric">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
              </svg>
              ${c.wifiSpeed} Mbps
            </span>
            <span class="dest-card__visa-tag ${c.visaFriendly ? 'dest-card__visa-tag--yes' : 'dest-card__visa-tag--no'}">
              ${c.visaFriendly ? '✅ Nomad visa' : '  Standard visa'}
            </span>
          </div>
        </div>
      </a>
    `;
  }

  function applyFilters() {
    let list = [...allCities];

    // region
    if (state.region !== 'all') {
      list = list.filter(c => {
        if (state.region === 'Americas') return c.continent.includes('America');
        return c.continent === state.region;
      });
    }

    // budget
    if (state.budget === 'low')  list = list.filter(c => c.monthly < 1500);
    if (state.budget === 'mid')  list = list.filter(c => c.monthly >= 1500 && c.monthly <= 3000);
    if (state.budget === 'high') list = list.filter(c => c.monthly > 3000);

    // search
    if (state.search) {
      const q = state.search.toLowerCase();
      list = list.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q)
      );
    }

    // sort
    if (state.sort === 'score')      list.sort((a,b) => b.nomadScore - a.nomadScore);
    if (state.sort === 'price-asc')  list.sort((a,b) => a.monthly - b.monthly);
    if (state.sort === 'price-desc') list.sort((a,b) => b.monthly - a.monthly);
    if (state.sort === 'alpha')      list.sort((a,b) => a.name.localeCompare(b.name));

    // render
    if (list.length === 0) {
      grid.innerHTML = `
        <div class="dest-empty">
          <div class="dest-empty__icon">🔍</div>
          <h3>No cities match your filters</h3>
          <p>Try adjusting your region or budget filter.</p>
        </div>
      `;
    } else {
      grid.innerHTML = list.map(renderCard).join('');
    }
    countEl.textContent = list.length;
  }

  // -- Filter chips -----------------------------------------
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      const val    = btn.dataset.val;

      // Update active chip in group
      document.querySelectorAll(`[data-filter="${filter}"]`)
        .forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      state[filter] = val;
      applyFilters();
    });
  });

  // -- Search -----------------------------------------------
  const searchInput = document.getElementById('dest-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      state.search = e.target.value.trim();
      applyFilters();
    });
  }

  // -- Sort -------------------------------------------------
  const sortSelect = document.getElementById('dest-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', e => {
      state.sort = e.target.value;
      applyFilters();
    });
  }

  // -- SPA links inside grid --------------------------------
  grid.addEventListener('click', e => {
    const link = e.target.closest('[data-link]');
    if (link) {
      e.preventDefault();
      window.history.pushState({}, '', link.getAttribute('href'));
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  });

  // Initial render
  applyFilters();
}

export default DestinationsPage;
