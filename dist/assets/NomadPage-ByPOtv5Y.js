import{M as B}from"./MainLayout-CBxf94lM.js";import{a as M}from"./cityService-DInqR9v8.js";import{s as T,i as O}from"./setPageMeta-BmQKFz2d.js";import{B as R,a as F}from"./Breadcrumb-C87PeGFq.js";function y(s,l="standard"){const{costs:p}=s,b=p.accommodation.center*30,f=p.food[l]*30,a=p.transport,x=p.coworking;return b+f+a+x}function W(){var S,z,N;const s=M(),l=[...s].sort((t,r)=>r.digitalNomad.overallScore-t.digitalNomad.overallScore),p=l.slice(0,3),b=[...s].sort((t,r)=>y(t)-y(r)).slice(0,5),f=[...s].sort((t,r)=>r.digitalNomad.wifiSpeed-t.digitalNomad.wifiSpeed).slice(0,5),a=[...s].sort((t,r)=>r.digitalNomad.safetyScore-t.digitalNomad.safetyScore).slice(0,5),x=s.filter(t=>{var r;return(r=t.visa)==null?void 0:r.remoteFriendly}).sort((t,r)=>r.digitalNomad.overallScore-t.digitalNomad.overallScore).slice(0,5);function _(t,r=80,c=60){return t>=r?"#10b981":t>=c?"#f59e0b":"#ef4444"}const k=["🥇","🥈","🥉"],i=[1,0,2].map(t=>{const r=p[t];if(!r)return"";const c=y(r);return`
      <div class="rk-podium-card ${t===0?"rk-podium-card--gold":""}">
        <div class="rk-podium-medal">${k[t]}</div>
        <div class="rk-podium-img-wrap">
          <img src="${r.image}" alt="${r.name}" loading="lazy" />
          <div class="rk-podium-img-overlay"></div>
        </div>
        <div class="rk-podium-body">
          <div class="rk-podium-score" style="color:${_(r.digitalNomad.overallScore)}">
            ${r.digitalNomad.overallScore}<span>/100</span>
          </div>
          <div class="rk-podium-name">${r.name}</div>
          <div class="rk-podium-country">${r.country}</div>
          <div class="rk-podium-metrics">
            <span title="WiFi">📡 ${r.digitalNomad.wifiSpeed} Mbps</span>
            <span title="Safety">🛡 ${r.digitalNomad.safetyScore}</span>
            <span title="Budget">💰 ~$${c.toLocaleString()}/mo</span>
          </div>
          <a href="/city/${r.slug}" data-link class="rk-podium-btn">View City -></a>
        </div>
      </div>
    `}).join(""),n=JSON.stringify(l.map(t=>{var r;return{slug:t.slug,name:t.name,country:t.country,continent:t.continent,image:t.image,score:t.digitalNomad.overallScore,wifi:t.digitalNomad.wifiSpeed,safety:t.digitalNomad.safetyScore,cowork:t.digitalNomad.coworkingCost,budget:y(t),visaOk:((r=t.visa)==null?void 0:r.remoteFriendly)??!1,currency:t.currencySymbol??"$"}}));function o(t,r,c,g,h){return`
      <div class="rk-mini">
        <div class="rk-mini__title">${r} ${t}</div>
        ${c.map(($,w)=>{const v=g($),C=g(c[0]),L=C>0?Math.round(v/C*100):0,E=w===0?"#f59e0b":w===1?"#9ca3af":w===2?"#b45309":"#6366f1";return`
            <div class="rk-mini__row">
              <span class="rk-mini__rank" style="color:${E}">${w+1}</span>
              <a href="/city/${$.slug}" data-link class="rk-mini__name">${$.name}</a>
              <div class="rk-mini__bar-wrap">
                <div class="rk-mini__bar" style="width:${L}%;background:${E}"></div>
              </div>
              <span class="rk-mini__val">${typeof v=="number"&&v>100?"$"+v.toLocaleString():v}${h}</span>
            </div>
          `}).join("")}
      </div>
    `}const m=[["lisbon","bangkok"],["berlin","prague"],["tokyo","seoul"],["barcelona","bali"],["dubai","singapore"],["chiang-mai","medellin"]].map(([t,r])=>{const c=s.find(h=>h.slug===t),g=s.find(h=>h.slug===r);return!c||!g?"":`
      <a href="/calculator" data-link data-ca="${t}" data-cb="${r}" class="rk-compare-card">
        <div class="rk-compare-card__imgs">
          <img src="${c.image}" alt="${c.name}" />
          <img src="${g.image}" alt="${g.name}" />
        </div>
        <div class="rk-compare-card__label">
          ${c.name} <span>vs</span> ${g.name}
        </div>
      </a>
    `}).join(""),u=R([{label:"Home",href:"/"},{label:"Rankings"}]),A=`
    <style>
      ${F}
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
      ${u}
      <div class="container rk-hero__inner">
        <p class="rk-hero__eyebrow">2026 Rankings</p>
        <h1 class="rk-hero__title">Best Cities for<br><em>Digital Nomads</em></h1>
        <p class="rk-hero__sub">
          ${l.length} cities ranked by nomad score -- cost, WiFi, safety, visa &amp; infrastructure combined.
        </p>
      </div>
    </section>

    <!-- STATS BAR -->
    <div class="rk-stats">
      <div class="container rk-stats__inner">
        <div class="rk-stat"><strong>${l.length}</strong><span>Cities ranked</span></div>
        <div class="rk-stat"><strong>${(S=l[0])==null?void 0:S.name}</strong><span>Top rated</span></div>
        <div class="rk-stat"><strong>${(z=b[0])==null?void 0:z.name}</strong><span>Most affordable</span></div>
        <div class="rk-stat"><strong>${(N=f[0])==null?void 0:N.name}</strong><span>Fastest WiFi</span></div>
        <div class="rk-stat"><strong>${s.filter(t=>{var r;return(r=t.visa)==null?void 0:r.remoteFriendly}).length}</strong><span>Nomad visas</span></div>
      </div>
    </div>

    <!-- PODIUM -->
    <section class="rk-podium-wrap">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Top 3 Overall</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">This year's best destinations</h2>
        <div class="rk-podium-grid">${i}</div>
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
          ${o("Most Affordable","💰",b,t=>y(t),"/mo")}
          ${o("Fastest Internet","📡",f,t=>t.digitalNomad.wifiSpeed," Mbps")}
          ${o("Safest Cities","🛡",a,t=>t.digitalNomad.safetyScore,"/100")}
          ${o("Nomad Visa","✈️",x,t=>t.digitalNomad.overallScore,"/100")}
        </div>
      </div>
    </section>

    <!-- POPULAR COMPARISONS -->
    <section class="rk-comparisons">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Head to Head</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">Popular city comparisons</h2>
        <div class="rk-compare-grid">${m}</div>
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

    <script id="rk-data" type="application/json">${n}<\/script>
  `;return T({title:"Best Cities for Digital Nomads 2026 -- Rankings & Scores",description:"Compare 50+ cities ranked by nomad score -- cost of living, WiFi speed, safety, visa access and infrastructure combined.",canonical:"/nomad"}),O("page-jsonld",{"@context":"https://schema.org","@type":"WebPage",name:"Best Cities for Digital Nomads 2026",description:"Complete ranking of 50+ cities for digital nomads based on cost, WiFi, safety and visa access.",url:"https://www.livingcostatlas.com/nomad",breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.livingcostatlas.com/"},{"@type":"ListItem",position:2,name:"Nomad Rankings",item:"https://www.livingcostatlas.com/nomad"}]}}),B(A)}function q(){const s=document.getElementById("rk-data");if(!s)return;const l=JSON.parse(s.textContent),p=document.getElementById("rk-tbody"),b=document.getElementById("rk-count"),f=document.getElementById("rk-search");let a={region:"all",search:"",col:"score",dir:"desc"};function x(e,i=80,n=60){return e>=i?"#10b981":e>=n?"#f59e0b":"#ef4444"}function _(e,i){const n=i===1?"background:#fef3c7;color:#d97706":i===2?"background:#f3f4f6;color:#6b7280":i===3?"background:#fed7aa;color:#b45309":"background:#f8fafc;color:#6b7280",o=x(e.score);return`
      <tr data-slug="${e.slug}" data-continent="${e.continent}">
        <td>
          <span class="rk-rank-badge" style="${n}">${i}</span>
        </td>
        <td>
          <a href="/city/${e.slug}" data-link class="rk-city-link">${e.name}</a>
          <div class="rk-city-country">${e.country}</div>
        </td>
        <td>
          <div class="rk-score-wrap">
            <span class="rk-score-num" style="color:${o}">${e.score}</span>
            <div class="rk-score-bar-wrap">
              <div class="rk-score-bar" style="width:${e.score}%;background:${o}"></div>
            </div>
          </div>
        </td>
        <td><strong>${e.wifi}</strong> <span style="color:#9ca3af;font-size:11px">Mbps</span></td>
        <td><strong>${e.safety}</strong><span style="color:#9ca3af;font-size:11px">/100</span></td>
        <td style="font-weight:700">$${e.budget.toLocaleString()}</td>
        <td>
          <span class="${e.visaOk?"rk-visa-yes":"rk-visa-no"}">
            ${e.visaOk?"✅ Yes":"Standard"}
          </span>
        </td>
        <td>
          <a href="/calculator" data-link data-ca="${e.slug}" class="rk-compare-link">Compare</a>
        </td>
      </tr>
    `}function k(){let e=[...l];if(a.region!=="all"&&(e=e.filter(o=>a.region==="Americas"?o.continent.includes("America"):o.continent===a.region)),a.search){const o=a.search.toLowerCase();e=e.filter(d=>d.name.toLowerCase().includes(o)||d.country.toLowerCase().includes(o))}const n={score:"score",wifi:"wifi",safety:"safety",budget:"budget",name:"name"}[a.col]||"score";e.sort((o,d)=>{const m=o[n],u=d[n];return typeof m=="string"?a.dir==="asc"?m.localeCompare(u):u.localeCompare(m):a.dir==="asc"?m-u:u-m}),e.length===0?p.innerHTML='<tr><td colspan="8" class="rk-empty">No cities match your search.</td></tr>':p.innerHTML=e.map((o,d)=>_(o,d+1)).join(""),b.textContent=`Showing ${e.length} of ${l.length} cities`,p.querySelectorAll("[data-link]").forEach(o=>{o.addEventListener("click",d=>{d.preventDefault(),window.history.pushState({},"",o.getAttribute("href")),window.dispatchEvent(new PopStateEvent("popstate"))})})}document.querySelectorAll(".rk-table th[data-col]").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.col;if(i==="rank"||i==="visa")return;a.col===i?a.dir=a.dir==="desc"?"asc":"desc":(a.col=i,a.dir="desc"),document.querySelectorAll(".rk-table th").forEach(o=>o.classList.remove("is-sorted")),e.classList.add("is-sorted");const n=e.querySelector(".sort-arrow");n&&(n.textContent=(a.dir==="desc"," ")),k()})}),document.querySelectorAll("[data-region]").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll("[data-region]").forEach(i=>i.classList.remove("is-active")),e.classList.add("is-active"),a.region=e.dataset.region,k()})}),f==null||f.addEventListener("input",e=>{a.search=e.target.value.trim(),k()}),document.querySelectorAll(".rk-compare-card").forEach(e=>{e.addEventListener("click",i=>{i.preventDefault();const n=e.dataset.ca,o=e.dataset.cb,d=`/calculator${n&&o?`?a=${n}&b=${o}`:""}`;window.history.pushState({},"",d),window.dispatchEvent(new PopStateEvent("popstate"))})}),k()}export{W as NomadPage,W as default,q as setupNomadPageInteractivity};
