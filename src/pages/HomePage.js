/**
 * HomePage -- Redesigned V2
 * Cleaner hero, immediate value, stronger CTA flow
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { getAllCities, getTopNomadCities } from '../data/cityService.js';
import { formatCurrency } from '../logic/budgetCalculator.js';

export function HomePage() {
  const topCities = getTopNomadCities(6);
  const totalCities = getAllCities().length;

  /* -- City Cards ------------------------------------------- */
  const citiesHtml = topCities.map((city, i) => {
    const monthly =
      city.costs.accommodation.center * 30 +
      city.costs.food.standard * 30 +
      city.costs.transport +
      city.costs.coworking;

    const scoreColor = city.digitalNomad.overallScore >= 85
      ? '#10b981' : city.digitalNomad.overallScore >= 70
      ? '#f59e0b' : '#6366f1';

    return `
      <a href="/city/${city.slug}" data-link class="home-city-card" style="animation-delay:${i * 80}ms">
        <div class="home-city-card__img-wrap">
          <img src="${city.image}" alt="${city.name}" loading="lazy" />
          <div class="home-city-card__overlay"></div>
          <div class="home-city-card__badge" style="background:${scoreColor}">
            ${city.digitalNomad.overallScore}<span>/100</span>
          </div>
        </div>
        <div class="home-city-card__body">
          <div class="home-city-card__meta">
            <h3>${city.name}</h3>
            <p>${city.country}</p>
          </div>
          <div class="home-city-card__price">
            <span class="home-city-card__price-label">From</span>
            <span class="home-city-card__price-value">$${Math.round(monthly).toLocaleString()}<em>/mo</em></span>
          </div>
        </div>
      </a>
    `;
  }).join('');

  /* -- Stats ------------------------------------------------- */
  const stats = [
    { value: `${totalCities}+`, label: 'Cities' },
    { value: '12+', label: 'Cost categories' },
    { value: '3', label: 'Lifestyle levels' },
    { value: '100%', label: 'Free' },
  ];

  const statsHtml = stats.map(s => `
    <div class="home-stat">
      <strong>${s.value}</strong>
      <span>${s.label}</span>
    </div>
  `).join('');

  /* -- How it works ------------------------------------------ */
  const steps = [
    {
      num: '01',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
      title: 'Choose your cities',
      desc: 'Browse 33+ destinations across Europe, Asia, Americas and the Middle East.'
    },
    {
      num: '02',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      title: 'Set your budget',
      desc: 'Enter your income and lifestyle preferences -- from budget backpacker to comfortable expat.'
    },
    {
      num: '03',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
      title: 'Get your report',
      desc: 'See real purchasing power, visa info, tax pressure and quality-of-life scores side by side.'
    },
  ];

  const stepsHtml = steps.map(s => `
    <div class="home-step">
      <div class="home-step__num">${s.num}</div>
      <div class="home-step__icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');

  /* -- Profiles ---------------------------------------------- */
  const profiles = [
    { emoji: '💻', label: 'Remote workers', desc: 'Find your perfect base with fast WiFi and coworking.' },
    { emoji: '✈️', label: 'Expats & families', desc: 'Plan a real relocation with full cost breakdowns.' },
    { emoji: '🌍', label: 'Digital nomads', desc: 'Rank cities by nomad score and visa friendliness.' },
  ];

  const profilesHtml = profiles.map(p => `
    <div class="home-profile">
      <div class="home-profile__emoji">${p.emoji}</div>
      <h4>${p.label}</h4>
      <p>${p.desc}</p>
    </div>
  `).join('');

  const content = `
    <style>
      .home-hero {
        position: relative;
        min-height: 92vh;
        display: flex;
        align-items: center;
        overflow: hidden;
        background: #0f0c29;
      }
      .home-hero__bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 80% 60% at 60% 40%, rgba(99,102,241,0.35) 0%, transparent 70%),
          radial-gradient(ellipse 50% 50% at 20% 80%, rgba(16,185,129,0.18) 0%, transparent 60%),
          linear-gradient(135deg, #0f0c29 0%, #1a1040 50%, #0d1117 100%);
        z-index: 0;
      }
      .home-hero__orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(60px);
        opacity: 0.3;
        animation: orbFloat 8s ease-in-out infinite;
        z-index: 0;
      }
      .home-hero__orb--1 { width:400px;height:400px;background:#6366f1;top:-100px;right:10%;animation-delay:0s; }
      .home-hero__orb--2 { width:300px;height:300px;background:#10b981;bottom:10%;left:5%;animation-delay:-3s; }
      .home-hero__orb--3 { width:200px;height:200px;background:#8b5cf6;top:30%;left:30%;animation-delay:-5s; }
      @keyframes orbFloat {
        0%,100% { transform:translate(0,0) scale(1); }
        33% { transform:translate(20px,-30px) scale(1.05); }
        66% { transform:translate(-15px,20px) scale(0.95); }
      }
      .home-hero__content { position:relative;z-index:2;max-width:780px; }
      .home-hero__eyebrow {
        display:inline-flex;align-items:center;gap:8px;
        background:rgba(99,102,241,0.2);border:1px solid rgba(99,102,241,0.4);
        color:#a5b4fc;font-size:12px;font-weight:600;letter-spacing:2px;
        text-transform:uppercase;padding:6px 16px;border-radius:999px;margin-bottom:28px;
      }
      .home-hero__eyebrow::before {
        content:'';width:6px;height:6px;background:#10b981;border-radius:50%;
        animation:pulse 2s ease-in-out infinite;
      }
      @keyframes pulse {
        0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(1.4);}
      }
      .home-hero__title {
        font-size:clamp(42px,6vw,72px);font-weight:800;line-height:1.08;
        letter-spacing:-0.03em;color:#fff;margin-bottom:24px;
      }
      .home-hero__title em {
        font-style:normal;
        background:linear-gradient(90deg,#818cf8,#34d399);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      }
      .home-hero__subtitle {
        font-size:18px;line-height:1.7;color:rgba(255,255,255,0.65);
        max-width:560px;margin-bottom:40px;
      }
      .home-hero__actions { display:flex;gap:14px;flex-wrap:wrap;align-items:center; }
      .home-hero__cta-primary {
        display:inline-flex;align-items:center;gap:8px;
        background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;
        font-size:15px;font-weight:600;padding:14px 28px;border-radius:12px;
        text-decoration:none;box-shadow:0 8px 32px rgba(99,102,241,0.4);
        transition:transform 0.2s,box-shadow 0.2s;
      }
      .home-hero__cta-primary:hover {
        transform:translateY(-2px);box-shadow:0 12px 40px rgba(99,102,241,0.5);
        color:#fff;text-decoration:none;
      }
      .home-hero__cta-secondary {
        display:inline-flex;align-items:center;gap:8px;
        background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);
        color:rgba(255,255,255,0.85);font-size:15px;font-weight:500;
        padding:14px 24px;border-radius:12px;text-decoration:none;
        transition:background 0.2s,color 0.2s;
      }
      .home-hero__cta-secondary:hover { background:rgba(255,255,255,0.14);color:#fff;text-decoration:none; }

      .home-stats-bar { background:#fff;border-bottom:1px solid #e5e7eb;padding:24px 0; }
      .home-stats-bar .container { display:flex;justify-content:center; }
      .home-stat { display:flex;flex-direction:column;align-items:center;gap:2px;padding:0 40px;border-right:1px solid #e5e7eb; }
      .home-stat:last-child { border-right:none; }
      .home-stat strong { font-size:28px;font-weight:800;color:#1e1b4b;letter-spacing:-0.02em; }
      .home-stat span { font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:500; }

      .home-profiles { background:#f9fafb;padding:64px 0; }
      .home-profiles__grid { display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:40px; }
      .home-profile {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:28px 24px;
        text-align:center;transition:border-color 0.2s,box-shadow 0.2s,transform 0.2s;
      }
      .home-profile:hover { border-color:#c7d2fe;box-shadow:0 8px 24px rgba(99,102,241,0.1);transform:translateY(-3px); }
      .home-profile__emoji { font-size:36px;margin-bottom:14px; }
      .home-profile h4 { font-size:16px;font-weight:700;color:#111827;margin-bottom:8px; }
      .home-profile p { font-size:14px;color:#6b7280;margin:0;line-height:1.6; }

      .home-how { padding:80px 0;background:#fff; }
      .home-steps { display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-top:48px;position:relative; }
      .home-steps::before {
        content:'';position:absolute;top:36px;
        left:calc(16.66% + 16px);right:calc(16.66% + 16px);
        height:2px;background:linear-gradient(90deg,#6366f1,#8b5cf6,#10b981);opacity:0.3;
      }
      .home-step { text-align:center;padding:0 16px;position:relative; }
      .home-step__num { font-size:11px;font-weight:700;letter-spacing:2px;color:#6366f1;margin-bottom:16px; }
      .home-step__icon {
        width:56px;height:56px;background:linear-gradient(135deg,#6366f1,#8b5cf6);
        border-radius:16px;display:flex;align-items:center;justify-content:center;
        margin:0 auto 20px;color:#fff;box-shadow:0 8px 20px rgba(99,102,241,0.3);
      }
      .home-step h3 { font-size:17px;font-weight:700;color:#111827;margin-bottom:10px; }
      .home-step p { font-size:14px;color:#6b7280;line-height:1.7;margin:0; }

      .home-cities { padding:80px 0;background:#f9fafb; }
      .home-cities__grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px; }
      .home-city-card {
        display:block;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;
        background:#fff;text-decoration:none;
        transition:transform 0.25s,box-shadow 0.25s,border-color 0.25s;
        animation:fadeUp 0.5s ease both;
      }
      @keyframes fadeUp {
        from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}
      }
      .home-city-card:hover {
        transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.12);
        border-color:#c7d2fe;text-decoration:none;
      }
      .home-city-card__img-wrap { position:relative;height:200px;overflow:hidden; }
      .home-city-card__img-wrap img { width:100%;height:100%;object-fit:cover;transition:transform 0.4s ease; }
      .home-city-card:hover .home-city-card__img-wrap img { transform:scale(1.05); }
      .home-city-card__overlay { position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.4) 0%,transparent 60%); }
      .home-city-card__badge {
        position:absolute;top:12px;right:12px;color:#fff;font-size:13px;font-weight:800;
        padding:4px 10px;border-radius:999px;backdrop-filter:blur(4px);
      }
      .home-city-card__badge span { font-size:10px;font-weight:500;opacity:0.85; }
      .home-city-card__body { padding:16px 18px;display:flex;justify-content:space-between;align-items:center; }
      .home-city-card__meta h3 { font-size:16px;font-weight:700;color:#111827;margin:0 0 3px; }
      .home-city-card__meta p { font-size:12px;color:#9ca3af;margin:0; }
      .home-city-card__price { text-align:right; }
      .home-city-card__price-label { display:block;font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px; }
      .home-city-card__price-value { font-size:18px;font-weight:800;color:#1e1b4b;letter-spacing:-0.02em; }
      .home-city-card__price-value em { font-size:12px;font-weight:500;color:#9ca3af;font-style:normal; }

      .home-section-header { text-align:center;max-width:560px;margin:0 auto; }
      .home-section-header__eyebrow {
        display:inline-block;font-size:11px;font-weight:700;letter-spacing:2.5px;
        text-transform:uppercase;color:#6366f1;margin-bottom:12px;
      }
      .home-section-header h2 { font-size:34px;font-weight:800;color:#111827;letter-spacing:-0.025em;margin-bottom:14px; }
      .home-section-header p { font-size:16px;color:#6b7280;line-height:1.7;margin:0; }

      .home-cta {
        padding:80px 0;text-align:center;
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#1e1b4b 100%);
        position:relative;overflow:hidden;
      }
      .home-cta::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(99,102,241,0.3) 0%,transparent 70%);
      }
      .home-cta__inner { position:relative;z-index:2;max-width:600px;margin:0 auto; }
      .home-cta h2 { font-size:42px;font-weight:800;color:#fff;letter-spacing:-0.025em;margin-bottom:16px;line-height:1.1; }
      .home-cta p { font-size:17px;color:rgba(255,255,255,0.65);margin-bottom:36px;line-height:1.7; }

      @media(max-width:900px){
        .home-profiles__grid,.home-steps,.home-cities__grid{grid-template-columns:1fr 1fr;}
        .home-steps::before{display:none;}
        .home-stat{padding:0 20px;}
        .home-hero__title{font-size:40px;}
      }
      @media(max-width:600px){
        .home-profiles__grid,.home-steps,.home-cities__grid{grid-template-columns:1fr;}
        .home-stats-bar .container{flex-wrap:wrap;gap:16px;}
        .home-stat{border-right:none;}
        .home-hero__actions{flex-direction:column;align-items:flex-start;}
        .home-cta h2{font-size:30px;}
      }

      /* -- World Map ----------------------- */
      .home-map { background:#0f0c29;padding:72px 0 0; }
      .home-map__header { margin-bottom:40px; }
      .home-map__header .home-section-header__eyebrow { color:#818cf8; }
      .home-map__header h2 { color:#fff; }
      .home-map__header p { color:rgba(255,255,255,0.55); }
      .home-map__wrap { position:relative; }
      #world-map {
        width:100%; height:520px;
        background:#0d1117;
      }
      .home-map__legend {
        position:absolute;bottom:16px;left:50%;transform:translateX(-50%);
        background:rgba(15,12,41,0.85);backdrop-filter:blur(8px);
        border:1px solid rgba(255,255,255,0.1);
        color:rgba(255,255,255,0.7);font-size:12px;font-weight:500;
        padding:8px 18px;border-radius:999px;display:flex;align-items:center;gap:6px;
        white-space:nowrap;z-index:500;
      }
      .home-map__legend-dot {
        display:inline-block;width:9px;height:9px;border-radius:50%;
      }
      /* Leaflet popup custom dark style */
      .leaflet-popup-content-wrapper {
        background:#1e1b4b !important;
        border:1px solid rgba(99,102,241,0.4) !important;
        border-radius:14px !important;
        box-shadow:0 16px 40px rgba(0,0,0,0.5) !important;
        padding:0 !important;
      }
      .leaflet-popup-tip { background:#1e1b4b !important; }
      .leaflet-popup-content { margin:0 !important;width:220px !important; }
      .map-popup {
        padding:16px;font-family:inherit;
      }
      .map-popup__img {
        width:100%;height:110px;object-fit:cover;
        border-radius:10px 10px 0 0;margin:-16px -0px 12px;
        width:calc(100% + 0px);
      }
      .map-popup__city { font-size:15px;font-weight:700;color:#fff;margin-bottom:2px; }
      .map-popup__country { font-size:11px;color:rgba(255,255,255,0.45);margin-bottom:12px; }
      .map-popup__row {
        display:flex;justify-content:space-between;align-items:center;
        margin-bottom:6px;
      }
      .map-popup__label { font-size:11px;color:rgba(255,255,255,0.45); }
      .map-popup__val { font-size:13px;font-weight:600;color:#e0e7ff; }
      .map-popup__score {
        display:inline-block;padding:2px 8px;border-radius:999px;
        font-size:11px;font-weight:700;color:#fff;
      }
      .map-popup__link {
        display:block;margin-top:12px;text-align:center;
        background:linear-gradient(135deg,#6366f1,#8b5cf6);
        color:#fff;font-size:12px;font-weight:600;
        padding:8px;border-radius:8px;text-decoration:none;
        transition:opacity 0.2s;
      }
      .map-popup__link:hover { opacity:0.85;color:#fff;text-decoration:none; }
      .leaflet-control-zoom a {
        background:#1e1b4b !important;color:#a5b4fc !important;
        border-color:rgba(99,102,241,0.3) !important;
      }
      .leaflet-control-attribution {
        background:rgba(15,12,41,0.7) !important;color:rgba(255,255,255,0.3) !important;
      }
      .leaflet-control-attribution a { color:rgba(255,255,255,0.4) !important; }
    </style>

    <!-- HERO -->
    <section class="home-hero">
      <div class="home-hero__bg"></div>
      <div class="home-hero__orb home-hero__orb--1"></div>
      <div class="home-hero__orb home-hero__orb--2"></div>
      <div class="home-hero__orb home-hero__orb--3"></div>
      <div class="container">
        <div class="home-hero__content">
          <div class="home-hero__eyebrow">Live &amp; Work Anywhere</div>
          <h1 class="home-hero__title">
            Know the real cost<br>before you <em>move</em>.
          </h1>
          <p class="home-hero__subtitle">
            Compare monthly living costs across ${totalCities}+ cities worldwide.
            Housing, food, transport, visa complexity, taxes -- all in one place.
            Built for expats, remote workers and digital nomads.
          </p>
          <div class="home-hero__actions">
            <a href="/calculator" data-link class="home-hero__cta-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Calculate my budget
            </a>
            <a href="/destinations" data-link class="home-hero__cta-secondary">
              Explore destinations ->
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="home-stats-bar">
      <div class="container">${statsHtml}</div>
    </section>

    <!-- FOR WHO -->
    <section class="home-profiles">
      <div class="container">
        <div class="home-section-header">
          <span class="home-section-header__eyebrow">Who it's for</span>
          <h2>Built for people who move</h2>
          <p>Whether you're planning a full relocation or just exploring options, Living Cost Atlas gives you the numbers to decide with confidence.</p>
        </div>
        <div class="home-profiles__grid">${profilesHtml}</div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="home-how">
      <div class="container">
        <div class="home-section-header">
          <span class="home-section-header__eyebrow">How it works</span>
          <h2>Three steps to your answer</h2>
          <p>No sign-up. No credit card. Just real data and smart comparisons.</p>
        </div>
        <div class="home-steps">${stepsHtml}</div>
      </div>
    </section>

    <!-- WORLD MAP -->
    <section class="home-map">
      <div class="home-map__header container">
        <div class="home-section-header">
          <span class="home-section-header__eyebrow">Interactive Map</span>
          <h2>Explore cities around the world</h2>
          <p>Click any marker to see costs, nomad score and visa info at a glance.</p>
        </div>
      </div>
      <div class="home-map__wrap">
        <div id="world-map"></div>
        <div class="home-map__legend">
          <span class="home-map__legend-dot" style="background:#10b981"></span> Score 85+
          <span class="home-map__legend-dot" style="background:#f59e0b;margin-left:12px"></span> Score 70-84
          <span class="home-map__legend-dot" style="background:#6366f1;margin-left:12px"></span> Score &lt;70
        </div>
      </div>
    </section>

    <!-- TOP CITIES -->
    <section class="home-cities">
      <div class="container">
        <div class="home-section-header">
          <span class="home-section-header__eyebrow">Top picks</span>
          <h2>Best cities for nomads right now</h2>
          <p>Ranked by overall nomad score -- WiFi, safety, cost, and visa access combined.</p>
        </div>
        <div class="home-cities__grid">${citiesHtml}</div>
        <div style="text-align:center;margin-top:40px">
          <a href="/destinations" data-link class="btn btn--secondary btn--lg">
            View all ${totalCities} destinations ->
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="home-cta">
      <div class="home-cta__inner container">
        <h2>Ready to find your city?</h2>
        <p>Enter your income and lifestyle -- get a full breakdown of what life actually costs in your target destination.</p>
        <a href="/calculator" data-link class="home-hero__cta-primary" style="display:inline-flex;font-size:16px;padding:16px 36px">
          Start for free -- no sign up
        </a>
      </div>
    </section>
  `;

  return MainLayout(content);
}

export default HomePage;

/* ---------------------------------------------------------
   Map initialisation -- called by router after page render
--------------------------------------------------------- */
export function setupHomeMapInteractivity() {
  const el = document.getElementById('world-map');
  if (!el) return;

  // Guard: if Leaflet already initialized this container (SPA re-render),
  // reset its internal id so L.map() does not throw
  // "Map container is already initialized".
  if (el._leaflet_id != null) {
    try { delete el._leaflet_id; } catch (_) { el._leaflet_id = null; }
    el.innerHTML = '';
  }

  // Load Leaflet CSS dynamically if not already present
  if (!document.getElementById('leaflet-css')) {
    const link = document.createElement('link');
    link.id   = 'leaflet-css';
    link.rel  = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);
  }

  // Wait for Leaflet JS (already in dependencies via npm)
  import('leaflet').then(({ default: L }) => {
    // Dark tile layer -- CartoDB Dark Matter
    const map = L.map('world-map', {
      center: [20, 15],
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '  OpenStreetMap   CARTO',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // City data -- pulled from cityDB at build time
    const cities = getAllCities();

    cities.forEach(city => {
      if (!city.lat || !city.lng) return;

      const score   = city.digitalNomad?.overallScore ?? 70;
      const color   = score >= 85 ? '#10b981' : score >= 70 ? '#f59e0b' : '#6366f1';
      const monthly = Math.round(
        city.costs.accommodation.center * 30 +
        city.costs.food.standard * 30 +
        city.costs.transport +
        city.costs.coworking
      );

      // Custom pulsing SVG marker
      const icon = L.divIcon({
        className: '',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        popupAnchor: [0, -14],
        html: `
          <div style="
            width:16px;height:16px;border-radius:50%;
            background:${color};
            border:2px solid rgba(255,255,255,0.8);
            box-shadow:0 0 0 4px ${color}44, 0 2px 8px rgba(0,0,0,0.4);
            cursor:pointer;
            transition:transform 0.15s;
          "></div>
        `,
      });

      const marker = L.marker([city.lat, city.lng], { icon }).addTo(map);

      const popupHtml = `
        <div class="map-popup">
          <img class="map-popup__img" src="${city.image}" alt="${city.name}" loading="lazy" />
          <div class="map-popup__city">${city.name}</div>
          <div class="map-popup__country">${city.country}</div>
          <div class="map-popup__row">
            <span class="map-popup__label">Monthly budget</span>
            <span class="map-popup__val">~$${monthly.toLocaleString()}/mo</span>
          </div>
          <div class="map-popup__row">
            <span class="map-popup__label">Nomad score</span>
            <span class="map-popup__score" style="background:${color}">${score}/100</span>
          </div>
          <div class="map-popup__row">
            <span class="map-popup__label">Visa</span>
            <span class="map-popup__val" style="font-size:11px">${city.visa?.remoteFriendly ? '✅ Nomad friendly' : '  Standard'}</span>
          </div>
          <a class="map-popup__link" href="/city/${city.slug}" data-link>
            Explore ${city.name} ->
          </a>
        </div>
      `;

      marker.bindPopup(popupHtml, {
        maxWidth: 220,
        className: 'map-popup-container',
      });

      // Hover preview
      marker.on('mouseover', function () { this.openPopup(); });
    });

    // Handle data-link clicks inside popups (SPA navigation)
    el.addEventListener('click', e => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        window.history.pushState({}, '', link.getAttribute('href'));
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    });
  });
}
// (this line intentionally blank -- file written below)
