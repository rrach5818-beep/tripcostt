import{M as W}from"./MainLayout-yopsxLtK.js";import{a as D}from"./cityService-qV0spH9F.js";import{B as Q,a as Y}from"./Breadcrumb-C87PeGFq.js";import"./setPageMeta-BmQKFz2d.js";function Z(){const y=D(),$=y.map(p=>`<option value="${p.slug}" data-city="${encodeURIComponent(JSON.stringify(p))}">
      ${p.name}, ${p.country}
    </option>`).join(""),M=y.map((p,k)=>`<option value="${p.slug}" data-city="${encodeURIComponent(JSON.stringify(p))}" ${k===5?"selected":""}>
      ${p.name}, ${p.country}
    </option>`).join(""),S=Q([{label:"Home",href:"/"},{label:"Calculator"}]),w=`

    <style>
      ${Y}
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
      ${S}
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
            <select id="city-a">${$}</select>
          </div>
          <div class="calc-field">
            <label>City B</label>
            <select id="city-b">${M}</select>
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
            Unlike generic cost-of-living indexes, Living Cost Atlas lets you adjust for your actual lifestyle:
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
  `;return W(w)}function aa(){const y=document.getElementById("city-a"),$=document.getElementById("city-b"),M=document.getElementById("housing"),S=document.getElementById("lifestyle"),w=document.getElementById("income-input"),p=document.getElementById("share-btn");if(!y)return;let k="nomad";document.querySelectorAll("[data-profile]").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll("[data-profile]").forEach(c=>c.classList.remove("is-active")),a.classList.add("is-active"),k=a.dataset.profile,T()})}),document.querySelectorAll(".calc-faq-q").forEach(a=>{a.addEventListener("click",()=>{const c=a.closest(".calc-faq-item"),o=c.classList.contains("is-open");document.querySelectorAll(".calc-faq-item").forEach(t=>t.classList.remove("is-open")),o||c.classList.add("is-open")})}),p==null||p.addEventListener("click",()=>{const a=new URL(window.location.href);a.searchParams.set("a",y.value),a.searchParams.set("b",$.value),a.searchParams.set("h",M.value),a.searchParams.set("l",S.value),a.searchParams.set("p",k),navigator.clipboard.writeText(a.toString()).then(()=>{p.classList.add("copied"),p.querySelector("svg").nextSibling.textContent=" Link copied!",setTimeout(()=>{p.classList.remove("copied"),p.childNodes[1].textContent=" Copy shareable link"},2500)})});const v=new URLSearchParams(window.location.search);v.get("a")&&(y.value=v.get("a")),v.get("b")&&($.value=v.get("b")),v.get("h")&&(M.value=v.get("h")),v.get("l")&&(S.value=v.get("l")),v.get("p")&&(k=v.get("p"),document.querySelectorAll("[data-profile]").forEach(a=>{a.classList.toggle("is-active",a.dataset.profile===k)}));function A(a){var o,t;const c=(t=(o=a.options[a.selectedIndex])==null?void 0:o.dataset)==null?void 0:t.city;return c?JSON.parse(decodeURIComponent(c)):null}function P(a){const c=M.value,o=S.value,t=a.costs.accommodation[c]*30,s=a.costs.food[o]*30,e=a.costs.transport,f=a.costs.coworking,b=t+s+e+f;return{acc:t,food:s,tsp:e,cow:f,total:b+Math.round(b*.1)}}function R(a,c,o){var B,x,E,q,C,_,r,n,l;const t=k==="founder"?{cost:.15,safety:.1,visa:.1,tax:.25,stab:.2,infra:.1,income:.1}:k==="family"?{cost:.15,safety:.25,visa:.05,tax:.1,stab:.2,infra:.15,income:.1}:{cost:.25,safety:.1,visa:.2,tax:.1,stab:.15,infra:.1,income:.1},s=o>0?Math.min(o/c*100,100):Math.max(0,100-c/5e3*50),e=((B=a.safety)==null?void 0:B.safetyIndex)??50,f=(x=a.visa)!=null&&x.remoteFriendly?85:45,b=100-((((E=a.tax)==null?void 0:E.personalIncomeTaxTopRate)??30)+(((q=a.tax)==null?void 0:q.corporateTax)??25))/2,m={High:80,"Very High":90,Medium:60}[(C=a.macro)==null?void 0:C.currencyStability]??40,u=((((_=a.infrastructure)==null?void 0:_.publicTransportQuality)??50)+(((r=a.infrastructure)==null?void 0:r.healthcareQuality)??50)+(((n=a.infrastructure)==null?void 0:n.englishProficiency)??50)+(((l=a.infrastructure)==null?void 0:l.airportConnectivity)??50))/4,h=o>0?Math.min(o/c*100,100):50;return Math.max(0,Math.min(100,Math.round(s*t.cost+e*t.safety+f*t.visa+b*t.tax+m*t.stab+u*t.infra+h*t.income)))}function O(a){return a>=85?"Elite destination":a>=70?"Strong choice":a>=55?"Moderate fit":"High risk profile"}function U(a){return a>=70?"#10b981":a>=55?"#f59e0b":"#ef4444"}function H(a,c,o="$"){const t=parseInt(a.dataset.current||"0"),s=c-t,e=30;let f=0;const b=setInterval(()=>{f++;const m=Math.round(t+s*(f/e));a.textContent=o+m.toLocaleString(),f>=e&&(clearInterval(b),a.dataset.current=c)},16)}function V(a,c,o,t){const s=document.getElementById("relocation-radar");if(!s)return;const e=s.getContext("2d"),f=s.width,b=s.height,m=f/2,u=b/2+10,h=Math.min(f,b)/2-55,B=["Cost","Safety","Infra","Visa","Tax","Stability"],x=B.length;function E(n,l){var i,d,g,I,z,j,L,F,N;return[Math.max(0,100-l/5e3*50),((i=n.safety)==null?void 0:i.safetyIndex)??50,((((d=n.infrastructure)==null?void 0:d.publicTransportQuality)??50)+(((g=n.infrastructure)==null?void 0:g.healthcareQuality)??50)+(((I=n.infrastructure)==null?void 0:I.englishProficiency)??50)+(((z=n.infrastructure)==null?void 0:z.airportConnectivity)??50))/4,(j=n.visa)!=null&&j.remoteFriendly?85:45,100-((((L=n.tax)==null?void 0:L.personalIncomeTaxTopRate)??30)+(((F=n.tax)==null?void 0:F.corporateTax)??25))/2,{High:80,"Very High":90,Medium:60}[(N=n.macro)==null?void 0:N.currencyStability]??40]}const q=E(a,o),C=E(c,t);let _=0;function r(){e.clearRect(0,0,f,b);for(let l=1;l<=5;l++){e.beginPath();for(let i=0;i<x;i++){const d=Math.PI*2/x*i-Math.PI/2,g=h*(l/5);i===0?e.moveTo(m+g*Math.cos(d),u+g*Math.sin(d)):e.lineTo(m+g*Math.cos(d),u+g*Math.sin(d))}e.closePath(),e.strokeStyle="#f1f5f9",e.lineWidth=1,e.stroke()}B.forEach((l,i)=>{const d=Math.PI*2/x*i-Math.PI/2;e.beginPath(),e.moveTo(m,u),e.lineTo(m+h*Math.cos(d),u+h*Math.sin(d)),e.strokeStyle="#e5e7eb",e.lineWidth=1,e.stroke();const g=m+(h+20)*Math.cos(d),I=u+(h+20)*Math.sin(d);e.fillStyle="#6b7280",e.font="600 11px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(l,g,I)});function n(l,i){e.beginPath(),l.forEach((d,g)=>{const I=Math.PI*2/x*g-Math.PI/2,z=h*(d/100)*_,j=m+z*Math.cos(I),L=u+z*Math.sin(I);g===0?e.moveTo(j,L):e.lineTo(j,L)}),e.closePath(),e.strokeStyle=i,e.lineWidth=2,e.stroke(),e.fillStyle=i.replace("1)","0.15)"),e.fill()}n(q,"rgba(99,102,241,1)"),n(C,"rgba(16,185,129,1)"),_<1&&(_=Math.min(_+.05,1),requestAnimationFrame(r))}r()}async function T(){var C,_;const a=A(y),c=A($);if(!a||!c)return;const o=P(a),t=P(c),s=parseFloat((w==null?void 0:w.value)||0);document.getElementById("img-a").src=a.image,document.getElementById("img-a").alt=a.name,document.getElementById("img-b").src=c.image,document.getElementById("img-b").alt=c.name,document.getElementById("name-a").textContent=a.name,document.getElementById("country-a").textContent=a.country,document.getElementById("name-b").textContent=c.name,document.getElementById("country-b").textContent=c.country,H(document.getElementById("cost-a"),o.total),H(document.getElementById("cost-b"),t.total);const e=o.total<=t.total;document.getElementById("card-a").classList.toggle("is-winner",e),document.getElementById("card-a").classList.toggle("is-loser",!e),document.getElementById("card-b").classList.toggle("is-winner",!e),document.getElementById("card-b").classList.toggle("is-loser",e);const f=t.total>0?Math.abs(Math.round((o.total-t.total)/t.total*100)):0,b=document.getElementById("vs-diff"),m=o.total<t.total?a.name:c.name;b.textContent=`${m} is ${f}% cheaper`,b.className=`calc-vs__diff ${o.total<t.total?"cheaper":"pricier"}`;const u=R(a,o.total,s),h=R(c,t.total,s);if(["a","b"].forEach((r,n)=>{const l=n===0?u:h,i=U(l);document.getElementById(`score-city-${r}`).textContent=n===0?a.name:c.name,document.getElementById(`score-val-${r}`).textContent=l+"/100",document.getElementById(`score-val-${r}`).style.color=i,document.getElementById(`score-label-${r}`).textContent=O(l),document.getElementById(`score-label-${r}`).style.color=i,document.getElementById(`score-bar-${r}`).style.width=l+"%",document.getElementById(`score-bar-${r}`).style.background=i}),s>0){document.getElementById("income-empty").style.display="none",document.getElementById("income-data").style.display="block";const r=Math.round(o.total/s*100),n=Math.round(t.total/s*100);document.getElementById("income-city-a-name").textContent=a.name,document.getElementById("income-city-b-name").textContent=c.name,document.getElementById("income-ratio-a").textContent=`${r}% of income`,document.getElementById("income-ratio-b").textContent=`${n}% of income`,document.getElementById("income-bar-a").style.width=Math.min(r,100)+"%",document.getElementById("income-bar-b").style.width=Math.min(n,100)+"%";const l=s-o.total;document.getElementById("income-note").textContent=l>0?`With $${s.toLocaleString()}/mo, you'd have $${Math.round(l).toLocaleString()} left each month in ${a.name}.`:`Your budget is $${Math.abs(Math.round(l)).toLocaleString()} short for ${a.name} at this lifestyle.`}else document.getElementById("income-empty").style.display="block",document.getElementById("income-data").style.display="none";document.getElementById("bd-head-a").textContent=a.name,document.getElementById("bd-head-b").textContent=c.name;const B=Math.max(o.acc,t.acc,o.food,t.food,o.tsp,t.tsp,o.cow,t.cow);[["acc","acc"],["food","food"],["tsp","tsp"],["cow","cow"]].forEach(([r,n])=>{document.getElementById(`val-a-${n}`).textContent="$"+o[r].toLocaleString(),document.getElementById(`val-b-${n}`).textContent="$"+t[r].toLocaleString(),document.getElementById(`bar-a-${n}`).style.width=o[r]/B*100+"%",document.getElementById(`bar-b-${n}`).style.width=t[r]/B*100+"%"}),document.getElementById("radar-label-a").textContent=a.name,document.getElementById("radar-label-b").textContent=c.name,V(a,c,o.total,t.total),document.getElementById("proj-head-a").textContent=a.name,document.getElementById("proj-head-b").textContent=c.name;const x=((C=a.macro)==null?void 0:C.inflationRate)??3,E=((_=c.macro)==null?void 0:_.inflationRate)??3,q=[1,3,5].map(r=>{const n=Math.round(o.total*Math.pow(1+x/100,r)*12),l=Math.round(t.total*Math.pow(1+E/100,r)*12),i=n-l,d=i===0?"--":`<span class="proj-badge ${i>0?"proj-badge--pos":"proj-badge--neg"}">
             ${i>0," "} $${Math.abs(i).toLocaleString()}
           </span>`;return`<tr>
        <td>${r} year${r>1?"s":""}</td>
        <td>$${n.toLocaleString()}/yr</td>
        <td>$${l.toLocaleString()}/yr</td>
        <td>${d}</td>
      </tr>`});document.getElementById("proj-body").innerHTML=q.join(""),["a","b"].forEach((r,n)=>{const l=n===0?a:c,i=l.visa;document.getElementById(`visa-city-${r}`).textContent=l.name;const d=document.getElementById(`visa-tag-${r}`);d.innerHTML=i?`<span class="calc-visa-card__tag" style="background:${i.remoteFriendly?"#d1fae5":"#f1f5f9"};color:${i.remoteFriendly?"#065f46":"#6b7280"}">
            ${i.remoteFriendly?"✅ Nomad Visa Available":"  Standard Visa"}
           </span>`:"";const g=document.getElementById(`visa-rows-${r}`);g.innerHTML=i?`
        <div class="calc-visa-card__row"><span>Type</span><strong>${i.type||"--"}</strong></div>
        <div class="calc-visa-card__row"><span>Stay</span><strong>${i.stayDurationMonths||"--"} months</strong></div>
        <div class="calc-visa-card__row"><span>Processing</span><strong>~${i.processingTimeDays||"--"} days</strong></div>
        <div class="calc-visa-card__row"><span>Min. income</span><strong>${i.minIncomeRequirement>0?"$"+i.minIncomeRequirement+"/mo":"None"}</strong></div>
      `:'<p style="font-size:13px;color:#9ca3af">No visa data available.</p>'})}[y,$,M,S].forEach(a=>a==null?void 0:a.addEventListener("change",T)),w==null||w.addEventListener("input",T),T()}export{Z as CalculatorPage,Z as default,aa as setupCalculatorInteractivity};
