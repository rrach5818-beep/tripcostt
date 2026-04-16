import{M as R}from"./MainLayout-Du2sJ_sj.js";import{b as Z,a as ee}from"./cityService-Dc1KzdCT.js";import{s as ie,i as $}from"./setPageMeta-BmQKFz2d.js";import{B as te,a as oe}from"./Breadcrumb-C87PeGFq.js";function g(t,o="$"){return`${o}${t.toLocaleString()}`}function f(t,o=""){return t!=null&&t!==""?t:o}function ae(t){const o=f(t.country,"the country"),e=f(t.continent,null);return e?`${o}, ${e}`:o}function se(t){const o=f(t.name,"This city"),e=ae(t);return`
${o} is a popular destination located in ${e}.
It attracts digital nomads, expatriates, and travelers who are looking to balance lifestyle, comfort, and cost of living.

This page provides a detailed overview of the cost of living in ${o}, covering housing, food, transportation, and daily expenses to help you decide whether it fits your budget and lifestyle.
  `.trim()}function S(t,o){const e=f(t.name,"this city"),a=f(t.country,"the country"),n={accommodation:`
Housing costs in ${e} can vary significantly depending on location.
Living in central areas is generally more expensive, while neighborhoods outside the city center tend to offer more affordable rental options.
    `,food:`
Food expenses in ${e} range from affordable local meals to higher-end dining experiences.
Overall, grocery and dining costs remain reasonable compared to other major cities in ${a}.
    `,transport:`
Public transportation in ${e} is widely used and generally efficient.
Monthly transport costs depend on commuting distance and daily travel habits.
    `,utilities:`
Utilities and internet services in ${e} are generally reliable.
Internet quality is suitable for remote work, video calls, and everyday online activities.
    `,leisure:`
Leisure and entertainment costs in ${e} vary depending on lifestyle.
The city offers a wide range of cultural activities, dining options, and entertainment for different budgets.
    `};return f(n[o],"").trim()}function ne(t){const o=f(t.name,"this city");return`
Living in ${o} offers a mix of lifestyle, culture, and modern infrastructure.
Residents benefit from a dynamic urban environment, diverse food options, and convenient transportation.

The overall quality of life in ${o} makes it an attractive place to live for both locals and foreigners, depending on personal preferences and budget.
  `.trim()}function re(t){return`
${f(t.name,"this city")} is considered a viable option for digital nomads and expatriates.
The city provides reliable internet infrastructure, access to essential services, and a generally safe living environment.

While the cost of living may be higher than in some destinations, many remote workers find the stability and quality of life worth the investment.
  `.trim()}function ce(t){const o=f(t.name,"this city");return[{question:`Is ${o} expensive?`,answer:`${o} is generally considered expensive compared to many cities, but actual costs depend on lifestyle choices and housing location.`},{question:`How much do you need per month to live in ${o}?`,answer:`Monthly expenses in ${o} vary based on accommodation, lifestyle, and personal spending habits. A moderate to high budget is typically required.`},{question:`Is ${o} safe for foreigners?`,answer:`${o} is generally regarded as a safe city, including for foreigners and long-term residents.`},{question:`Is ${o} good for digital nomads?`,answer:`${o} offers good infrastructure and internet connectivity for digital nomads, though cost considerations are important for long-term stays.`}]}function C(t,o=""){return t!=null&&t!==""?t:o}function pe(t){const o=C(t.name,"City"),e=C(t.country,"");return e?`Cost of Living in ${o}, ${e} - Prices & Budget`:`Cost of Living in ${o} - Prices & Budget`}function le(t){return`Detailed cost of living in ${C(t.name,"this city")}. Housing, food, transport, safety, and digital nomad lifestyle to help you plan your budget.`}function ve(t){const{slug:o}=t,e=Z(o);if(!e)return R(`
      <div style="text-align:center;padding:120px 24px">
        <div style="font-size:48px;margin-bottom:16px">🌍</div>
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">City not found</h1>
        <p style="color:#6b7280;margin-bottom:32px">We couldn't find a city with that name.</p>
        <a href="/destinations" data-link class="btn btn--primary btn--lg">Browse all destinations</a>
      </div>
    `);const a=e.costs??{},n=a.accommodation??{},s=a.food??{},p=e.digitalNomad??{},r=e.visa??{},w=e.tax??{},y=e.infrastructure??{},x=e.safety??{},q=e.macro??{},h=(n.center??0)*30+(s.standard??0)*30+(a.transport??0)+(a.coworking??0),j=(n.suburb??0)*30+(s.standard??0)*30+(a.transport??0)+(a.coworking??0),D=se(e),H=ne(e),N=re(e),P=ce(e),O=pe(e),Q=le(e),z=ee();let l=z.filter(i=>i.slug!==e.slug&&i.country===e.country);l.length<3&&(l=z.filter(i=>i.slug!==e.slug&&i.continent===e.continent)),l=l.slice(0,4);const m=[];h<1e3?m.push({text:"Very Affordable",color:"#065f46",bg:"#d1fae5"}):h<1600?m.push({text:"Affordable",color:"#065f46",bg:"#d1fae5"}):h>3e3&&m.push({text:"High Cost",color:"#7f1d1d",bg:"#fee2e2"}),p.wifiSpeed>=100&&m.push({text:`${p.wifiSpeed} Mbps`,color:"#1e3a5f",bg:"#dbeafe"}),r.remoteFriendly&&m.push({text:"Nomad Visa",color:"#4c1d95",bg:"#ede9fe"}),(x.safetyIndex??0)>=80&&m.push({text:"Very Safe",color:"#065f46",bg:"#d1fae5"});const V=m.slice(0,3).map(i=>`<span style="background:${i.bg};color:${i.color};font-size:11px;font-weight:700;
      padding:4px 12px;border-radius:999px;letter-spacing:0.3px">${i.text}</span>`).join("");function I(i,c=80,d=60){return i>=c?"#10b981":i>=d?"#f59e0b":"#ef4444"}const T=Math.max(n.center*30,n.suburb*30,s.budget*30,s.standard*30,s.premium*30,a.transport,a.coworking);function G(i,c="#6366f1"){return`<div style="flex:1;height:6px;background:#f1f5f9;border-radius:6px;overflow:hidden">
      <div style="height:100%;width:${T>0?Math.round(i/T*100):0}%;background:${c};border-radius:6px;transition:width 0.5s"></div>
    </div>`}function v(i,c,d){return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <span style="font-size:12px;color:#6b7280;width:100px;flex-shrink:0">${i}</span>
      ${G(c,d)}
      <span style="font-size:13px;font-weight:700;color:#111827;white-space:nowrap;min-width:64px;text-align:right">
        ${g(c,e.currencySymbol)}/mo
      </span>
    </div>`}const U=[{q:`How much does it cost to live in ${e.name}?`,a:`A standard lifestyle in ${e.name} costs between ${g(j,e.currencySymbol)}/month (suburb) and ${g(h,e.currencySymbol)}/month (city center), covering accommodation, food, transport and coworking.`},{q:`Is ${e.name} safe for digital nomads?`,a:`${e.name} has a safety index of ${x.safetyIndex??"N/A"}/100. ${(x.safetyIndex??0)>=70?"It is generally considered safe. Normal precautions apply.":"Exercise standard urban caution."}`},{q:`How is the internet in ${e.name}?`,a:`Average WiFi speed in ${e.name} is ${p.wifiSpeed??"N/A"} Mbps -- ${(p.wifiSpeed??0)>=100?"excellent for video calls and remote work":(p.wifiSpeed??0)>=50?"good for most remote tasks":"adequate for basic tasks"}. Coworking spaces offer faster dedicated lines.`},{q:`Does ${e.name} have a digital nomad visa?`,a:r.remoteFriendly?`Yes -- ${e.name} offers a remote work visa (${r.type}). Stay up to ${r.stayDurationMonths} months. Minimum income requirement: ${r.minIncomeRequirement>0?"$"+r.minIncomeRequirement+"/mo":"none stated"}. Processing: ~${r.processingTimeDays} days.`:`${e.name} does not currently offer a dedicated digital nomad visa. Standard tourist or long-stay visas apply. Always verify with official sources before travelling.`}],A=[...P||[],...U],W=A.map((i,c)=>`
    <div class="cp-faq-item${c===0?" is-open":""}">
      <button class="cp-faq-q">
        <span>${i.q||i.question}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="cp-faq-a">${i.a||i.answer}</div>
    </div>
  `).join(""),Y=l.map(i=>{var d,_,u,L,M,E,B,F;const c=Math.round((((_=(d=i.costs)==null?void 0:d.accommodation)==null?void 0:_.center)??0)*30+(((L=(u=i.costs)==null?void 0:u.food)==null?void 0:L.standard)??0)*30+(((M=i.costs)==null?void 0:M.transport)??0)+(((E=i.costs)==null?void 0:E.coworking)??0));return`
      <a href="/city/${i.slug}" data-link class="cp-sim-card">
        <div class="cp-sim-card__img">
          <img src="${i.image}" alt="${i.name}" loading="lazy" />
          <div class="cp-sim-card__overlay"></div>
          <span class="cp-sim-card__score" style="background:${I(((B=i.digitalNomad)==null?void 0:B.overallScore)??0)}">${((F=i.digitalNomad)==null?void 0:F.overallScore)??"--"}</span>
        </div>
        <div class="cp-sim-card__body">
          <strong>${i.name}</strong>
          <span>${i.country}</span>
          <span class="cp-sim-card__price">~$${c.toLocaleString()}/mo</span>
        </div>
      </a>
    `}).join(""),K=l.map(i=>`<a href="/compare/${e.slug}-vs-${i.slug}" data-link class="cp-compare-pill">
      ${e.name} vs ${i.name}
    </a>`).join("");function b(i,c,d=100){const _=Math.round(c/d*100),u=I(c,80,60);return`
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;margin-bottom:5px">
          <span style="font-size:12px;color:#6b7280;font-weight:500">${i}</span>
          <span style="font-size:12px;font-weight:700;color:${u}">${c}/100</span>
        </div>
        <div style="height:6px;background:#f1f5f9;border-radius:6px;overflow:hidden">
          <div style="height:100%;width:${_}%;background:${u};border-radius:6px;transition:width 0.5s"></div>
        </div>
      </div>`}const X=te([{label:"Home",href:"/"},{label:"Destinations",href:"/destinations"},{label:e.country,href:`/best-cities/${e.country.toLowerCase().replace(/\s+/g,"-")}`},{label:e.name}]),J=`
    <style>
      ${oe}
      /* -- Hero ----------------------------- */
      .cp-hero {
        position:relative;min-height:480px;display:flex;align-items:flex-end;
        overflow:hidden;
      }
      .cp-hero__img {
        position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
        display:block;
      }
      .cp-hero__gradient {
        position:absolute;inset:0;
        background:linear-gradient(to top,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.4) 50%,rgba(0,0,0,0.15) 100%);
      }
      .cp-hero__content {
        position:relative;z-index:2;padding:48px 0 44px;width:100%;
      }
      .cp-hero__badges { display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px; }
      .cp-hero__title {
        font-size:clamp(30px,5vw,52px);font-weight:900;color:#fff;
        letter-spacing:-0.025em;line-height:1.05;margin-bottom:8px;
      }
      .cp-hero__sub {
        font-size:15px;color:rgba(255,255,255,0.65);margin-bottom:24px;
      }
      .cp-hero__kpis {
        display:flex;gap:0;background:rgba(0,0,0,0.45);backdrop-filter:blur(10px);
        border:1px solid rgba(255,255,255,0.1);border-radius:14px;
        overflow:hidden;width:fit-content;margin-bottom:28px;
      }
      .cp-hero__kpi {
        padding:14px 24px;border-right:1px solid rgba(255,255,255,0.1);
      }
      .cp-hero__kpi:last-child { border-right:none; }
      .cp-hero__kpi-label { font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:3px; }
      .cp-hero__kpi-val { font-size:20px;font-weight:800;color:#fff;letter-spacing:-0.02em; }
      .cp-hero__actions { display:flex;gap:12px;flex-wrap:wrap; }
      .cp-btn-primary {
        display:inline-flex;align-items:center;gap:7px;
        background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;
        font-size:14px;font-weight:600;padding:11px 22px;border-radius:10px;
        text-decoration:none;transition:opacity 0.2s,transform 0.2s;
        box-shadow:0 4px 16px rgba(99,102,241,0.4);
      }
      .cp-btn-primary:hover { opacity:0.9;transform:translateY(-1px);color:#fff;text-decoration:none; }
      .cp-btn-secondary {
        display:inline-flex;align-items:center;gap:7px;
        background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);
        color:rgba(255,255,255,0.9);font-size:14px;font-weight:500;
        padding:11px 20px;border-radius:10px;text-decoration:none;
        transition:background 0.2s;
      }
      .cp-btn-secondary:hover { background:rgba(255,255,255,0.2);color:#fff;text-decoration:none; }

      /* -- Sticky nav ----------------------- */
      .cp-nav {
        position:sticky;top:0;z-index:100;
        background:#fff;border-bottom:1px solid #e5e7eb;
        box-shadow:0 2px 8px rgba(0,0,0,0.05);
      }
      .cp-nav__inner {
        display:flex;gap:0;overflow-x:auto;scrollbar-width:none;
      }
      .cp-nav__inner::-webkit-scrollbar { display:none; }
      .cp-nav__link {
        flex-shrink:0;padding:14px 20px;font-size:13px;font-weight:600;
        color:#6b7280;text-decoration:none;border-bottom:2px solid transparent;
        transition:color 0.15s,border-color 0.15s;white-space:nowrap;
      }
      .cp-nav__link:hover { color:#6366f1;text-decoration:none; }
      .cp-nav__link.is-active { color:#6366f1;border-bottom-color:#6366f1; }

      /* -- Sections ------------------------- */
      .cp-section { padding:56px 0;border-bottom:1px solid #f1f5f9; }
      .cp-section:last-child { border-bottom:none; }
      .cp-section--alt { background:#f9fafb; }
      .cp-section__eyebrow {
        font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
        color:#6366f1;margin-bottom:10px;
      }
      .cp-section__title {
        font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em;margin-bottom:8px;
      }
      .cp-section__lead { font-size:15px;color:#4b5563;line-height:1.8;max-width:700px; }

      /* -- KPI grid ------------------------- */
      .cp-kpis {
        display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:32px;
      }
      .cp-kpi {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;
        padding:20px;transition:transform 0.2s,box-shadow 0.2s;
      }
      .cp-kpi:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,0.07); }
      .cp-kpi__icon { font-size:24px;margin-bottom:10px; }
      .cp-kpi__label { font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;margin-bottom:4px; }
      .cp-kpi__val { font-size:24px;font-weight:900;color:#1e1b4b;letter-spacing:-0.02em; }
      .cp-kpi__sub { font-size:11px;color:#9ca3af;margin-top:3px; }

      /* -- Cost breakdown grid -------------- */
      .cp-costs {
        display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:32px;
      }
      .cp-cost-card {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:22px;
      }
      .cp-cost-card__title {
        font-size:13px;font-weight:700;color:#111827;margin-bottom:4px;
        display:flex;align-items:center;gap:8px;
      }
      .cp-cost-card__desc { font-size:12px;color:#9ca3af;margin-bottom:16px;line-height:1.5; }

      /* -- Infrastructure ------------------- */
      .cp-infra {
        display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:32px;
      }
      .cp-infra-card {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:22px;
      }
      .cp-infra-card__title {
        font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
        color:#9ca3af;margin-bottom:16px;
      }

      /* -- FAQ ------------------------------ */
      .cp-faq-list { display:flex;flex-direction:column;gap:10px;margin-top:28px; }
      .cp-faq-item {
        background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;
      }
      .cp-faq-q {
        width:100%;display:flex;justify-content:space-between;align-items:center;
        padding:16px 20px;font-size:14px;font-weight:600;color:#111827;
        cursor:pointer;background:none;border:none;text-align:left;gap:12px;
        transition:color 0.15s;
      }
      .cp-faq-q:hover { color:#6366f1; }
      .cp-faq-q svg { flex-shrink:0;transition:transform 0.2s; }
      .cp-faq-item.is-open .cp-faq-q svg { transform:rotate(180deg); }
      .cp-faq-a {
        max-height:0;overflow:hidden;transition:max-height 0.3s ease,padding 0.3s;
        font-size:14px;color:#4b5563;line-height:1.8;padding:0 20px;
      }
      .cp-faq-item.is-open .cp-faq-a { max-height:300px;padding:0 20px 18px; }

      /* -- Similar cities ------------------- */
      .cp-similar {
        display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:28px;
      }
      .cp-sim-card {
        display:block;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;
        text-decoration:none;transition:transform 0.2s,box-shadow 0.2s,border-color 0.2s;
        background:#fff;
      }
      .cp-sim-card:hover {
        transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,0.1);
        border-color:#c7d2fe;text-decoration:none;
      }
      .cp-sim-card__img { position:relative;height:130px;overflow:hidden; }
      .cp-sim-card__img img { width:100%;height:100%;object-fit:cover;transition:transform 0.3s; }
      .cp-sim-card:hover .cp-sim-card__img img { transform:scale(1.06); }
      .cp-sim-card__overlay { position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.4),transparent 60%); }
      .cp-sim-card__score {
        position:absolute;top:8px;right:8px;color:#fff;font-size:11px;font-weight:800;
        padding:3px 8px;border-radius:999px;
      }
      .cp-sim-card__body {
        padding:12px 14px;display:flex;flex-direction:column;gap:2px;
      }
      .cp-sim-card__body strong { font-size:13px;font-weight:700;color:#111827; }
      .cp-sim-card__body span { font-size:11px;color:#9ca3af; }
      .cp-sim-card__price { font-size:12px;font-weight:700;color:#6366f1 !important;margin-top:4px !important; }

      /* -- Compare pills -------------------- */
      .cp-compare-pills { display:flex;flex-wrap:wrap;gap:8px;margin-top:20px; }
      .cp-compare-pill {
        padding:7px 16px;border:1.5px solid #e5e7eb;border-radius:999px;
        font-size:12px;font-weight:600;color:#4f46e5;text-decoration:none;
        background:#f9fafb;transition:all 0.15s;
      }
      .cp-compare-pill:hover {
        border-color:#c7d2fe;background:#eef2ff;text-decoration:none;
      }

      /* -- Visa card ------------------------ */
      .cp-visa {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;
        overflow:hidden;margin-top:32px;max-width:600px;
      }
      .cp-visa__head {
        display:flex;align-items:center;justify-content:space-between;
        padding:16px 20px;border-bottom:1px solid #f1f5f9;
        background:#f9fafb;
      }
      .cp-visa__head-title { font-size:13px;font-weight:700;color:#111827; }
      .cp-visa__tag {
        font-size:11px;font-weight:700;padding:4px 12px;border-radius:999px;
      }
      .cp-visa__body { padding:16px 20px; }
      .cp-visa__row {
        display:flex;justify-content:space-between;align-items:center;
        padding:8px 0;border-bottom:1px solid #f9fafb;font-size:13px;
      }
      .cp-visa__row:last-child { border-bottom:none; }
      .cp-visa__row-label { color:#6b7280; }
      .cp-visa__row-val { font-weight:700;color:#111827; }

      /* -- CTA ------------------------------ */
      .cp-cta {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 60%,#1e1b4b 100%);
        padding:72px 0;text-align:center;position:relative;overflow:hidden;
      }
      .cp-cta::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(99,102,241,0.25),transparent 70%);
      }
      .cp-cta__inner { position:relative;z-index:2; }
      .cp-cta h2 { font-size:36px;font-weight:800;color:#fff;letter-spacing:-0.025em;margin-bottom:12px; }
      .cp-cta p { font-size:16px;color:rgba(255,255,255,0.6);margin-bottom:32px; }

      /* -- Responsive ----------------------- */
      @media(max-width:900px) {
        .cp-kpis  { grid-template-columns:1fr 1fr; }
        .cp-costs { grid-template-columns:1fr; }
        .cp-infra { grid-template-columns:1fr; }
        .cp-similar { grid-template-columns:1fr 1fr; }
        .cp-hero__kpis { width:100%;overflow-x:auto; }
      }
      @media(max-width:560px) {
        .cp-kpis { grid-template-columns:1fr 1fr; }
        .cp-similar { grid-template-columns:1fr 1fr; }
        .cp-hero__kpi { padding:10px 16px; }
        .cp-hero__kpi-val { font-size:16px; }
      }
    </style>

    <!-- -- HERO -- full bleed image ------------------------ -->
    <section class="cp-hero">
      <img class="cp-hero__img" src="${e.image}" alt="Cost of living in ${e.name}" />
      <div class="cp-hero__gradient"></div>
      ${X}
      <div class="cp-hero__content">
        <div class="container">
          <div class="cp-hero__badges">${V}</div>
          <h1 class="cp-hero__title">Cost of Living in ${e.name}</h1>
          <p class="cp-hero__sub">${e.country}   ${e.continent}   Updated March 2026</p>

          <div class="cp-hero__kpis">
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Monthly (center)</div>
              <div class="cp-hero__kpi-val">${g(h,e.currencySymbol)}</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Nomad Score</div>
              <div class="cp-hero__kpi-val">${p.overallScore??"--"}/100</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Safety Index</div>
              <div class="cp-hero__kpi-val">${x.safetyIndex??"--"}/100</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">WiFi Speed</div>
              <div class="cp-hero__kpi-val">${p.wifiSpeed??"--"} Mbps</div>
            </div>
          </div>

          <div class="cp-hero__actions">
            <a href="/calculator" data-link class="cp-btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Calculate my budget
            </a>
            ${l[0]?`<a href="/compare/${e.slug}-vs-${l[0].slug}" data-link class="cp-btn-secondary">Compare with ${l[0].name} -></a>`:""}
          </div>
        </div>
      </div>
    </section>

    <!-- -- STICKY NAV -------------------------------------- -->
    <nav class="cp-nav">
      <div class="container">
        <div class="cp-nav__inner">
          <a href="#overview"       class="cp-nav__link is-active" data-section="overview">Overview</a>
          <a href="#costs"          class="cp-nav__link" data-section="costs">Costs</a>
          <a href="#infrastructure" class="cp-nav__link" data-section="infrastructure">Infrastructure</a>
          <a href="#visa"           class="cp-nav__link" data-section="visa">Visa & Tax</a>
          <a href="#lifestyle"      class="cp-nav__link" data-section="lifestyle">Lifestyle</a>
          <a href="#nomads"         class="cp-nav__link" data-section="nomads">For Nomads</a>
          <a href="#faq"            class="cp-nav__link" data-section="faq">FAQ</a>
          <a href="#similar"        class="cp-nav__link" data-section="similar">Similar Cities</a>
        </div>
      </div>
    </nav>

    <!-- -- OVERVIEW ---------------------------------------- -->
    <section class="cp-section" id="overview">
      <div class="container">
        <p class="cp-section__eyebrow">At a Glance</p>
        <h2 class="cp-section__title">${e.name} Overview</h2>
        <p class="cp-section__lead">${D}</p>

        <div class="cp-kpis">
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🏠</div>
            <div class="cp-kpi__label">City Center rent</div>
            <div class="cp-kpi__val">${g(n.center*30,e.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🍽️</div>
            <div class="cp-kpi__label">Food (standard)</div>
            <div class="cp-kpi__val">${g(s.standard*30,e.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🚇</div>
            <div class="cp-kpi__label">Transport</div>
            <div class="cp-kpi__val">${g(a.transport,e.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">💻</div>
            <div class="cp-kpi__label">Coworking</div>
            <div class="cp-kpi__val">${g(a.coworking,e.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
        </div>
      </div>
    </section>

    <!-- -- COSTS ------------------------------------------- -->
    <section class="cp-section cp-section--alt" id="costs">
      <div class="container">
        <p class="cp-section__eyebrow">Monthly Expenses</p>
        <h2 class="cp-section__title">Cost Breakdown in ${e.name}</h2>
        <p class="cp-section__lead">
          All prices in USD. Bar lengths are relative to the highest cost category.
        </p>
        <div class="cp-costs">

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🏠 Accommodation</div>
            <div class="cp-cost-card__desc">${S(e,"accommodation")}</div>
            ${v("City center",n.center*30,"#6366f1")}
            ${v("Suburb",n.suburb*30,"#8b5cf6")}
          </div>

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🍽️ Food & Dining</div>
            <div class="cp-cost-card__desc">${S(e,"food")}</div>
            ${v("Budget",s.budget*30,"#10b981")}
            ${v("Standard",s.standard*30,"#059669")}
            ${v("Premium",s.premium*30,"#047857")}
          </div>

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🚇 Transport & Work</div>
            <div class="cp-cost-card__desc">${S(e,"transport")}</div>
            ${v("Transport",a.transport,"#f59e0b")}
            ${v("Coworking",a.coworking,"#d97706")}
          </div>

        </div>
      </div>
    </section>

    <!-- -- INFRASTRUCTURE ---------------------------------- -->
    <section class="cp-section" id="infrastructure">
      <div class="container">
        <p class="cp-section__eyebrow">City Quality</p>
        <h2 class="cp-section__title">Infrastructure & Quality of Life</h2>
        <div class="cp-infra">

          <div class="cp-infra-card">
            <div class="cp-infra-card__title">Infrastructure Scores</div>
            ${b("Public Transport",y.publicTransportQuality??0)}
            ${b("Healthcare",y.healthcareQuality??0)}
            ${b("English Proficiency",y.englishProficiency??0)}
            ${b("Airport Connectivity",y.airportConnectivity??0)}
          </div>

          <div class="cp-infra-card">
            <div class="cp-infra-card__title">Safety & Macro</div>
            ${b("Safety Index",x.safetyIndex??0)}
            ${b("Nomad Score",p.overallScore??0)}
            <div style="margin-top:20px;padding-top:16px;border-top:1px solid #f1f5f9">
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                <span style="color:#6b7280">Crime Level</span>
                <strong style="color:#111827">${x.crimeLevel??"--"}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                <span style="color:#6b7280">Currency Stability</span>
                <strong style="color:#111827">${q.currencyStability??"--"}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:12px">
                <span style="color:#6b7280">Inflation Rate</span>
                <strong style="color:#111827">${q.inflationRate??"--"}%</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- -- VISA & TAX -------------------------------------- -->
    <section class="cp-section cp-section--alt" id="visa">
      <div class="container">
        <p class="cp-section__eyebrow">Legal & Financial</p>
        <h2 class="cp-section__title">Visa & Tax in ${e.name}</h2>
        <p class="cp-section__lead">
          ${r.remoteFriendly?`${e.name} offers a dedicated remote work visa -- one of the most accessible destinations for digital nomads and expats.`:`${e.name} does not currently offer a dedicated digital nomad visa. Standard tourist or long-stay visas apply.`}
        </p>
        <div class="cp-visa">
          <div class="cp-visa__head">
            <span class="cp-visa__head-title">${r.type??"Standard Visa"}</span>
            <span class="cp-visa__tag" style="background:${r.remoteFriendly?"#d1fae5":"#f1f5f9"};color:${r.remoteFriendly?"#065f46":"#6b7280"}">
              ${r.remoteFriendly?"✅ Nomad Friendly":"  Standard"}
            </span>
          </div>
          <div class="cp-visa__body">
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Max stay</span>
              <span class="cp-visa__row-val">${r.stayDurationMonths??"--"} months</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Processing time</span>
              <span class="cp-visa__row-val">~${r.processingTimeDays??"--"} days</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Min. income required</span>
              <span class="cp-visa__row-val">${r.minIncomeRequirement>0?"$"+r.minIncomeRequirement+"/mo":"None stated"}</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Income tax (top rate)</span>
              <span class="cp-visa__row-val">${w.personalIncomeTaxTopRate??"--"}%</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Corporate tax</span>
              <span class="cp-visa__row-val">${w.corporateTax??"--"}%</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Capital gains tax</span>
              <span class="cp-visa__row-val">${w.capitalGainsTax??"--"}%</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- -- LIFESTYLE --------------------------------------- -->
    <section class="cp-section" id="lifestyle">
      <div class="container">
        <p class="cp-section__eyebrow">Daily Life</p>
        <h2 class="cp-section__title">Living in ${e.name}</h2>
        <p class="cp-section__lead">${H}</p>
      </div>
    </section>

    <!-- -- FOR NOMADS -------------------------------------- -->
    <section class="cp-section cp-section--alt" id="nomads">
      <div class="container">
        <p class="cp-section__eyebrow">Remote Work</p>
        <h2 class="cp-section__title">Is ${e.name} good for digital nomads?</h2>
        <p class="cp-section__lead">${N}</p>
      </div>
    </section>

    <!-- -- FAQ --------------------------------------------- -->
    <section class="cp-section" id="faq">
      <div class="container">
        <p class="cp-section__eyebrow">Questions</p>
        <h2 class="cp-section__title">FAQ -- Living in ${e.name}</h2>
        <div class="cp-faq-list">${W}</div>
      </div>
    </section>

    <!-- -- SIMILAR CITIES ---------------------------------- -->
    <section class="cp-section cp-section--alt" id="similar">
      <div class="container">
        <p class="cp-section__eyebrow">Explore More</p>
        <h2 class="cp-section__title">Cities similar to ${e.name}</h2>
        <p class="cp-section__lead">Same region, comparable cost or lifestyle profile.</p>
        <div class="cp-similar">${Y}</div>

        <div style="margin-top:32px">
          <p style="font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:12px">Compare ${e.name} with</p>
          <div class="cp-compare-pills">${K}</div>
        </div>
      </div>
    </section>

    <!-- -- EBOOK CTA -------------------------------------- -->
    <section class="cp-section" id="ebook" style="padding:60px 0">
      <div class="container">
        <div style="display:flex;align-items:center;gap:40px;background:linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#4338ca 100%);border-radius:20px;padding:48px;overflow:hidden;position:relative">
          <!-- Decorative bg elements -->
          <div style="position:absolute;top:-40px;right:-40px;width:200px;height:200px;background:rgba(99,102,241,0.15);border-radius:50%"></div>
          <div style="position:absolute;bottom:-60px;right:120px;width:160px;height:160px;background:rgba(129,140,248,0.1);border-radius:50%"></div>

          <!-- Cover image -->
          <div style="flex-shrink:0;position:relative;z-index:1">
            <div id="ebook-cover" style="width:220px;height:310px;border-radius:12px;overflow:hidden;box-shadow:0 25px 50px rgba(0,0,0,0.4),0 0 0 1px rgba(255,255,255,0.1);transform:perspective(800px) rotateY(-6deg);background:linear-gradient(135deg,#312e81,#6366f1);display:flex;align-items:center;justify-content:center">
              <img
                src="/images/ebooks/${e.slug}-cover.png"
                alt="${e.name} Complete Digital Nomad Guide - eBook"
                style="width:100%;height:100%;object-fit:cover;display:block"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Text content -->
          <div style="flex:1;position:relative;z-index:1">
            <div style="display:inline-block;padding:4px 12px;background:rgba(250,204,21,0.2);border:1px solid rgba(250,204,21,0.3);border-radius:99px;font-size:10px;font-weight:700;color:#fde68a;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:14px">NEW - PREMIUM GUIDE</div>
            <h2 style="font-size:28px;font-weight:900;color:#fff;letter-spacing:-0.03em;line-height:1.2;margin:0 0 12px 0">The Complete ${e.name} Guide for Digital Nomads</h2>
            <p style="font-size:15px;color:rgba(255,255,255,0.7);line-height:1.6;margin:0 0 8px 0">Everything you need to relocate and thrive in ${e.name} -- cost breakdowns, neighborhoods, coworking spots, visa process, tax optimization, and insider tips from expats already there.</p>
            <ul style="list-style:none;padding:0;margin:0 0 24px 0;display:flex;flex-wrap:wrap;gap:8px">
              <li style="display:flex;align-items:center;gap:5px;font-size:12px;color:rgba(255,255,255,0.6);background:rgba(255,255,255,0.08);padding:5px 12px;border-radius:99px">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                50+ pages
              </li>
              <li style="display:flex;align-items:center;gap:5px;font-size:12px;color:rgba(255,255,255,0.6);background:rgba(255,255,255,0.08);padding:5px 12px;border-radius:99px">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Neighborhood maps
              </li>
              <li style="display:flex;align-items:center;gap:5px;font-size:12px;color:rgba(255,255,255,0.6);background:rgba(255,255,255,0.08);padding:5px 12px;border-radius:99px">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Budget templates
              </li>
              <li style="display:flex;align-items:center;gap:5px;font-size:12px;color:rgba(255,255,255,0.6);background:rgba(255,255,255,0.08);padding:5px 12px;border-radius:99px">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Tax checklists
              </li>
            </ul>
            <a href="/ebook/${e.slug}" class="cp-btn-primary" style="display:inline-flex;align-items:center;gap:8px;font-size:15px;padding:14px 28px;background:linear-gradient(135deg,#f59e0b,#f97316);border:none;border-radius:12px;color:#fff;font-weight:700;text-decoration:none;box-shadow:0 4px 15px rgba(245,158,11,0.4)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              Get the eBook
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- -- CTA -------------------------------------------- -->
    <section class="cp-cta">
      <div class="cp-cta__inner container">
        <h2>Plan your budget for ${e.name}</h2>
        <p>Get a personalized cost estimate based on your income and lifestyle.</p>
        <a href="/calculator" data-link class="cp-btn-primary" style="display:inline-flex;font-size:15px;padding:13px 28px">
          Open the Calculator ->
        </a>
      </div>
    </section>
  `,k=`/city/${e.slug}`;return ie({title:O,description:Q,canonical:k,image:e.image}),$("breadcrumb-jsonld",{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.livingcostatlas.com/"},{"@type":"ListItem",position:2,name:"Destinations",item:"https://www.livingcostatlas.com/destinations"},{"@type":"ListItem",position:3,name:e.name,item:`https://www.livingcostatlas.com${k}`}]}),$("place-jsonld",{"@context":"https://schema.org","@type":"City",name:e.name,containedInPlace:{"@type":"Country",name:e.country},geo:e.lat&&e.lng?{"@type":"GeoCoordinates",latitude:e.lat,longitude:e.lng}:void 0,image:e.image,url:`https://www.livingcostatlas.com${k}`}),$("faq-jsonld",{"@context":"https://schema.org","@type":"FAQPage",mainEntity:A.map(i=>({"@type":"Question",name:i.q||i.question,acceptedAnswer:{"@type":"Answer",text:i.a||i.answer}}))}),R(J)}function xe(){document.querySelectorAll(".cp-faq-item").forEach(e=>{var a;(a=e.querySelector(".cp-faq-q"))==null||a.addEventListener("click",()=>{const n=e.classList.contains("is-open");document.querySelectorAll(".cp-faq-item").forEach(s=>s.classList.remove("is-open")),n||e.classList.add("is-open")})});const t=document.querySelectorAll("[id]"),o=document.querySelectorAll(".cp-nav__link[data-section]");if(o.length&&t.length){const e=new IntersectionObserver(a=>{a.forEach(n=>{if(n.isIntersecting){o.forEach(p=>p.classList.remove("is-active"));const s=document.querySelector(`.cp-nav__link[data-section="${n.target.id}"]`);s&&s.classList.add("is-active")}})},{rootMargin:"-50% 0px -40% 0px"});t.forEach(a=>e.observe(a))}o.forEach(e=>{e.addEventListener("click",a=>{var s;a.preventDefault();const n=e.dataset.section;(s=document.getElementById(n))==null||s.scrollIntoView({behavior:"smooth",block:"start"})})})}export{ve as CityPage,ve as default,xe as setupCityPageInteractivity};
