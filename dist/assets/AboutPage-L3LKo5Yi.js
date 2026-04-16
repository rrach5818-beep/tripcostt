import{s as t}from"./setPageMeta-BmQKFz2d.js";import{M as i}from"./MainLayout-Du2sJ_sj.js";import{a as s}from"./cityService-Dc1KzdCT.js";function d(){const a=s().length,e=`
    <style>
      /* -- Hero ----------------------- */
      .ab-hero {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);
        padding:72px 0 60px;position:relative;overflow:hidden;text-align:center;
      }
      .ab-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 70% at 50% 50%,rgba(99,102,241,0.2),transparent 70%);
      }
      .ab-hero__inner { position:relative;z-index:2; }
      .ab-hero__eyebrow {
        font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;
        color:#818cf8;margin-bottom:14px;
      }
      .ab-hero__title {
        font-size:clamp(32px,5vw,56px);font-weight:900;color:#fff;
        letter-spacing:-0.03em;line-height:1.1;margin-bottom:18px;
      }
      .ab-hero__title em {
        font-style:normal;
        background:linear-gradient(90deg,#818cf8,#34d399);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      }
      .ab-hero__sub {
        font-size:17px;color:rgba(255,255,255,0.6);line-height:1.7;
        max-width:580px;margin:0 auto;
      }

      /* -- Stats strip ---------------- */
      .ab-stats {
        background:#fff;border-bottom:1px solid #e5e7eb;padding:32px 0;
      }
      .ab-stats__grid {
        display:grid;grid-template-columns:repeat(4,1fr);
        gap:0;text-align:center;
      }
      .ab-stat {
        padding:0 24px;border-right:1px solid #e5e7eb;
      }
      .ab-stat:last-child { border-right:none; }
      .ab-stat__num {
        font-size:36px;font-weight:900;color:#1e1b4b;
        letter-spacing:-0.03em;line-height:1;margin-bottom:4px;
      }
      .ab-stat__label { font-size:12px;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:1px; }

      /* -- Mission -------------------- */
      .ab-section { padding:64px 0; }
      .ab-section--alt { background:#f9fafb; }
      .ab-section__inner {
        display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;
      }
      .ab-section__inner--center { max-width:760px;margin:0 auto;text-align:center; }
      .ab-eyebrow {
        font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
        color:#6366f1;margin-bottom:12px;
      }
      .ab-title {
        font-size:28px;font-weight:800;color:#111827;letter-spacing:-0.025em;
        margin-bottom:16px;line-height:1.2;
      }
      .ab-text {
        font-size:15px;color:#4b5563;line-height:1.85;margin-bottom:14px;
      }
      .ab-text:last-child { margin-bottom:0; }

      /* Mission visual card */
      .ab-mission-card {
        background:linear-gradient(135deg,#1e1b4b,#312e81);
        border-radius:24px;padding:40px;color:#fff;
        position:relative;overflow:hidden;
      }
      .ab-mission-card::before {
        content:'';position:absolute;
        width:300px;height:300px;border-radius:50%;
        background:rgba(99,102,241,0.2);
        top:-80px;right:-80px;
      }
      .ab-mission-card__quote {
        font-size:20px;font-weight:700;line-height:1.5;
        color:#fff;margin-bottom:20px;position:relative;z-index:1;
      }
      .ab-mission-card__quote::before {
        content:'"';font-size:64px;color:#818cf8;line-height:0;
        vertical-align:-20px;margin-right:4px;font-family:Georgia,serif;
      }
      .ab-mission-card__tag {
        display:inline-flex;align-items:center;gap:6px;
        background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);
        color:rgba(255,255,255,0.7);font-size:11px;font-weight:600;
        padding:5px 14px;border-radius:999px;position:relative;z-index:1;
      }

      /* -- Features grid -------------- */
      .ab-features {
        display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:32px;
      }
      .ab-feature {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;
        padding:22px;transition:transform 0.2s,box-shadow 0.2s,border-color 0.2s;
      }
      .ab-feature:hover {
        transform:translateY(-2px);
        box-shadow:0 8px 24px rgba(0,0,0,0.07);
        border-color:#c7d2fe;
      }
      .ab-feature__icon { font-size:28px;margin-bottom:10px; }
      .ab-feature__title { font-size:14px;font-weight:700;color:#111827;margin-bottom:6px; }
      .ab-feature__desc  { font-size:13px;color:#6b7280;line-height:1.6; }

      /* -- Values --------------------- */
      .ab-values {
        display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:32px;
      }
      .ab-value {
        text-align:center;padding:28px 20px;
        background:#fff;border:1px solid #e5e7eb;border-radius:20px;
      }
      .ab-value__icon { font-size:36px;margin-bottom:12px; }
      .ab-value__title { font-size:14px;font-weight:800;color:#111827;margin-bottom:6px; }
      .ab-value__desc  { font-size:13px;color:#6b7280;line-height:1.6; }

      /* -- Data methodology ----------- */
      .ab-data-steps {
        display:flex;flex-direction:column;gap:16px;margin-top:24px;
      }
      .ab-data-step {
        display:flex;align-items:flex-start;gap:16px;
        background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:18px;
      }
      .ab-data-step__num {
        width:32px;height:32px;border-radius:10px;flex-shrink:0;
        background:linear-gradient(135deg,#6366f1,#8b5cf6);
        color:#fff;font-size:13px;font-weight:800;
        display:flex;align-items:center;justify-content:center;
      }
      .ab-data-step__title { font-size:13px;font-weight:700;color:#111827;margin-bottom:3px; }
      .ab-data-step__desc  { font-size:12px;color:#6b7280;line-height:1.6; }

      /* -- CTA ------------------------ */
      .ab-cta {
        background:linear-gradient(135deg,#1e1b4b,#312e81,#1e1b4b);
        padding:72px 0;text-align:center;position:relative;overflow:hidden;
      }
      .ab-cta::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(99,102,241,0.25),transparent 70%);
      }
      .ab-cta__inner { position:relative;z-index:2; }
      .ab-cta h2 { font-size:36px;font-weight:800;color:#fff;letter-spacing:-0.025em;margin-bottom:10px; }
      .ab-cta p  { font-size:16px;color:rgba(255,255,255,0.55);margin-bottom:32px;max-width:500px;margin-left:auto;margin-right:auto; }
      .ab-cta__btns { display:flex;gap:12px;justify-content:center;flex-wrap:wrap; }
      .ab-btn-primary {
        display:inline-flex;align-items:center;gap:7px;
        background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;
        font-size:14px;font-weight:600;padding:13px 26px;border-radius:10px;
        text-decoration:none;box-shadow:0 4px 16px rgba(99,102,241,0.4);transition:opacity 0.2s;
      }
      .ab-btn-primary:hover { opacity:0.9;color:#fff;text-decoration:none; }
      .ab-btn-ghost {
        display:inline-flex;align-items:center;gap:7px;
        background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);
        color:rgba(255,255,255,0.85);font-size:14px;font-weight:500;
        padding:13px 22px;border-radius:10px;text-decoration:none;transition:background 0.2s;
      }
      .ab-btn-ghost:hover { background:rgba(255,255,255,0.18);color:#fff;text-decoration:none; }

      @media(max-width:768px) {
        .ab-section__inner { grid-template-columns:1fr;gap:32px; }
        .ab-stats__grid { grid-template-columns:1fr 1fr; }
        .ab-stat { border-right:none;border-bottom:1px solid #e5e7eb;padding:16px; }
        .ab-stat:last-child { border-bottom:none; }
        .ab-features { grid-template-columns:1fr; }
        .ab-values   { grid-template-columns:1fr 1fr; }
      }
      @media(max-width:480px) {
        .ab-values { grid-template-columns:1fr; }
      }
    </style>

    <!-- HERO -->
    <section class="ab-hero">
      <div class="container ab-hero__inner">
        <p class="ab-hero__eyebrow">About Living Cost Atlas</p>
        <h1 class="ab-hero__title">Real data for people<br>who choose to <em>move differently</em>.</h1>
        <p class="ab-hero__sub">
          We built Living Cost Atlas because planning an international move shouldn't require
          ten browser tabs and three spreadsheets. One tool, all the data, no guesswork.
        </p>
      </div>
    </section>

    <!-- STATS -->
    <div class="ab-stats">
      <div class="container">
        <div class="ab-stats__grid">
          <div class="ab-stat">
            <div class="ab-stat__num">${a}+</div>
            <div class="ab-stat__label">Cities covered</div>
          </div>
          <div class="ab-stat">
            <div class="ab-stat__num">12+</div>
            <div class="ab-stat__label">Cost categories</div>
          </div>
          <div class="ab-stat">
            <div class="ab-stat__num">Q1 2026</div>
            <div class="ab-stat__label">Last data update</div>
          </div>
          <div class="ab-stat">
            <div class="ab-stat__num">100%</div>
            <div class="ab-stat__label">Free to use</div>
          </div>
        </div>
      </div>
    </div>

    <!-- MISSION -->
    <section class="ab-section">
      <div class="container">
        <div class="ab-section__inner">
          <div>
            <p class="ab-eyebrow">Our Mission</p>
            <h2 class="ab-title">Transparent cost data for everyone planning a move.</h2>
            <p class="ab-text">
              Living Cost Atlas was built to solve a real problem: when you're considering a relocation,
              cost information is scattered, outdated or buried in forums. We aggregate it,
              structure it and put it in one place -- free, clear and actionable.
            </p>
            <p class="ab-text">
              Whether you're a freelancer looking for the cheapest city with fast WiFi,
              a family planning a permanent move, or a founder optimising for tax efficiency --
              our tools give you the numbers to make that decision with confidence.
            </p>
            <p class="ab-text">
              We don't run ads. We don't sell your data. We're just obsessed with
              making relocation research less painful.
            </p>
          </div>
          <div class="ab-mission-card">
            <div class="ab-mission-card__quote">
              Cost of living data should be transparent, updated and free -- not locked behind paywalls.
            </div>
            <div class="ab-mission-card__tag">
              <span style="width:6px;height:6px;background:#34d399;border-radius:50%"></span>
              Living Cost Atlas manifesto
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT WE OFFER -->
    <section class="ab-section ab-section--alt">
      <div class="container">
        <p class="ab-eyebrow">What We Offer</p>
        <h2 class="ab-title">Everything you need to choose your next city.</h2>
        <div class="ab-features">
          <div class="ab-feature">
            <div class="ab-feature__icon">🏙️</div>
            <div class="ab-feature__title">City Cost Guides</div>
            <div class="ab-feature__desc">Detailed breakdowns for ${a} destinations -- housing, food, transport, coworking and more. Each updated quarterly.</div>
          </div>
          <div class="ab-feature">
            <div class="ab-feature__icon">🧮</div>
            <div class="ab-feature__title">Budget Calculator</div>
            <div class="ab-feature__desc">Compare any two cities side by side. Enter your income, choose your lifestyle, get a personalised monthly estimate.</div>
          </div>
          <div class="ab-feature">
            <div class="ab-feature__icon">🏆</div>
            <div class="ab-feature__title">Nomad Rankings</div>
            <div class="ab-feature__desc">Cities scored across 6 dimensions: cost, safety, WiFi, visa access, infrastructure and currency stability.</div>
          </div>
          <div class="ab-feature">
            <div class="ab-feature__icon">🗺️</div>
            <div class="ab-feature__title">Interactive World Map</div>
            <div class="ab-feature__desc">Visual exploration of all cities at a glance. Hover any pin to see cost, safety and visa status instantly.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR DATA -->
    <section class="ab-section">
      <div class="container">
        <div class="ab-section__inner">
          <div>
            <p class="ab-eyebrow">Data Methodology</p>
            <h2 class="ab-title">Where our numbers come from.</h2>
            <p class="ab-text">
              We manually research and cross-reference data from multiple sources every quarter.
              No automated scraping, no stale APIs. If the data doesn't feel right, we verify it.
            </p>
            <p class="ab-text" style="font-size:13px;color:#9ca3af">
              Last update: March 2026. While we strive for accuracy, costs vary by neighbourhood,
              lifestyle and exchange rates. Use our figures as a starting point, not a contract.
            </p>
          </div>
          <div class="ab-data-steps">
            <div class="ab-data-step">
              <div class="ab-data-step__num">1</div>
              <div>
                <div class="ab-data-step__title">Cross-reference primary sources</div>
                <div class="ab-data-step__desc">Government statistical offices, national housing data, official transport tariffs.</div>
              </div>
            </div>
            <div class="ab-data-step">
              <div class="ab-data-step__num">2</div>
              <div>
                <div class="ab-data-step__title">Benchmark against community data</div>
                <div class="ab-data-step__desc">Numbeo, Expatistan, nomad forums and expat community reports to validate real-world costs.</div>
              </div>
            </div>
            <div class="ab-data-step">
              <div class="ab-data-step__num">3</div>
              <div>
                <div class="ab-data-step__title">Quarterly manual review</div>
                <div class="ab-data-step__desc">Every city is reviewed at least once per quarter. Major changes (inflation spikes, housing crises) trigger immediate updates.</div>
              </div>
            </div>
            <div class="ab-data-step">
              <div class="ab-data-step__num">4</div>
              <div>
                <div class="ab-data-step__title">Transparency by design</div>
                <div class="ab-data-step__desc">Each city page shows the last update date. We flag data uncertainty where it exists.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="ab-section ab-section--alt">
      <div class="container">
        <div class="ab-section__inner--center">
          <p class="ab-eyebrow">What We Stand For</p>
          <h2 class="ab-title">Three principles we don't compromise on.</h2>
        </div>
        <div class="ab-values">
          <div class="ab-value">
            <div class="ab-value__icon">🔓</div>
            <div class="ab-value__title">Always Free</div>
            <div class="ab-value__desc">Core data access will never be paywalled. Relocation decisions are hard enough without paying for basic information.</div>
          </div>
          <div class="ab-value">
            <div class="ab-value__icon">📊</div>
            <div class="ab-value__title">Data First</div>
            <div class="ab-value__desc">Every claim is backed by a source. We don't inflate scores, create fake rankings or recommend based on commercial interests.</div>
          </div>
          <div class="ab-value">
            <div class="ab-value__icon">🛡️</div>
            <div class="ab-value__title">Privacy Respected</div>
            <div class="ab-value__desc">No user tracking beyond anonymised analytics. No selling data. No ad profiling. You use Living Cost Atlas, not the other way around.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="ab-cta">
      <div class="ab-cta__inner container">
        <h2>Ready to find your city?</h2>
        <p>Start with the calculator or explore all destinations -- it takes 2 minutes.</p>
        <div class="ab-cta__btns">
          <a href="/calculator"   data-link class="ab-btn-primary">Open Calculator -></a>
          <a href="/destinations" data-link class="ab-btn-ghost">Browse Destinations</a>
        </div>
      </div>
    </section>
  `;return t({title:"About Living Cost Atlas -- Free Cost of Living Intelligence",description:"Living Cost Atlas provides free, transparent cost of living data for digital nomads, expats and remote workers. Real data, updated quarterly, no ads.",canonical:"/about"}),i(e)}export{d as AboutPage,d as default};
