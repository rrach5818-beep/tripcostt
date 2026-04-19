import{M as $}from"./MainLayout-yopsxLtK.js";import{c as S}from"./countryDB-CrDm3Fkl.js";import{a as I}from"./cityService-qV0spH9F.js";import{s as M,i as B}from"./setPageMeta-BmQKFz2d.js";import{a as k}from"./imageHelper-BIpBZy2g.js";import{B as L,a as N}from"./Breadcrumb-C87PeGFq.js";function A(i,a="solo"){const o=w(i.slug),r=o.avgSafetyScore??0,p=o.avgInternetSpeed??0,b=o.avgMonthlyCost??0,m=b?Math.max(0,100-b/50):0,c=i.macro??{},x=i.tax??{},s=i.nomad??{},f=i.family??{},h=c.safetyIndex??0,u=c.healthcareIndex??0,g=c.infrastructureScore??0,t=c.qualityOfLifeIndex??0,n=x.taxFriendlinessScore??0,e=p||s.avgInternetSpeed||0,l=s.visaEaseScore??0,d=s.coworkingDensityScore??0,v=f.educationScore??0,C=f.familySafetyScore??0,z=f.suburbanAffordabilityScore??0,y=r||h;let _=0;return a==="nomad"?_=y*.15+e*.25+l*.2+d*.2+n*.1+t*.1:a==="family"?_=C*.25+v*.25+z*.2+u*.15+y*.15:a==="solo"?_=y*.2+g*.2+e*.2+n*.15+t*.15+m*.1:_=y*.2+u*.2+g*.2+t*.2+n*.2,Math.round(_)}function F(i){return S.find(a=>a.slug===i)||null}function O(i="solo",a=30){return[...S].map(o=>({...o,score:A(o,i)})).sort((o,r)=>r.score-o.score).slice(0,a)}function j(i){return I().filter(o=>o.countrySlug?o.countrySlug===i:o.country?o.country.toLowerCase().replace(/\s+/g,"-")===i:!1)}function w(i){var m,c,x;const a=F(i),o=j(i);if(!o.length)return{avgMonthlyCost:((m=a==null?void 0:a.macro)==null?void 0:m.costOfLivingIndex)??"N/A",avgSafetyScore:((c=a==null?void 0:a.macro)==null?void 0:c.safetyIndex)??"N/A",avgInternetSpeed:((x=a==null?void 0:a.nomad)==null?void 0:x.avgInternetSpeed)??"N/A",cityCount:0,isFallback:!0};let r=0,p=0,b=0;return o.forEach(s=>{var g,t,n,e,l,d;const f=((t=(g=s.costs)==null?void 0:g.accommodation)==null?void 0:t.center)??0,h=((e=(n=s.costs)==null?void 0:n.food)==null?void 0:e.standard)??0,u=f+h*30;r+=u,p+=((l=s.digitalNomad)==null?void 0:l.safetyScore)??0,b+=((d=s.digitalNomad)==null?void 0:d.wifiSpeed)??0}),{avgMonthlyCost:Math.round(r/o.length),avgSafetyScore:Math.round(p/o.length),avgInternetSpeed:Math.round(b/o.length),cityCount:o.length,isFallback:!1}}function H(i={}){const{profile:a}=i,o=["solo","family","nomad"].includes(a)?a:"solo",r=O(o,30);if(!r.length)return $(`
      <div style="text-align:center;padding:120px 24px">
        <h1 style="font-size:28px;font-weight:800;color:#111827">No data available</h1>
        <a href="/destinations" data-link class="btn btn--primary btn--lg" style="margin-top:24px;display:inline-block">Browse Cities</a>
      </div>
    `);M({title:`Best Countries for ${o==="nomad"?"Digital Nomads":o.charAt(0).toUpperCase()+o.slice(1)} -- ${new Date().getFullYear()} Rankings`,description:`Top countries ranked by safety, cost of living, infrastructure and ${o} lifestyle quality. Updated ${new Date().getFullYear()}.`,canonical:`/best-countries/${o}`}),B("page-jsonld",{"@context":"https://schema.org","@type":"WebPage",name:`Best Countries for ${o}`,url:`https://www.livingcostatlas.com/best-countries/${o}`,breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.livingcostatlas.com/"},{"@type":"ListItem",position:2,name:"Best Countries",item:"https://www.livingcostatlas.com/best-countries"},{"@type":"ListItem",position:3,name:o,item:`https://www.livingcostatlas.com/best-countries/${o}`}]}});function p(t){return t>=80?"#10b981":t>=60?"#f59e0b":"#ef4444"}const b=["solo","family","nomad"].map(t=>`
    <a href="/best-countries/${t}" data-link
       class="bco-profile-btn${o===t?" is-active":""}">
      ${t==="solo"?"👤 Solo":t==="family"?"👨 👩 👧 Family":"🌍 Nomad"}
    </a>
  `).join(""),m=["🥇","🥈","🥉"],c=[1,0,2],x=r.slice(0,3),s=c.map(t=>{var v;const n=x[t];if(!n)return"";const e=w(n.slug),l=k(n.slug);return`
      <div class="bco-pod${t===0?" bco-pod--gold":""}">
        <div class="bco-pod__medal">${m[t]}</div>
        <div class="bco-pod__img">
          <img src="${l}" alt="${n.name}" loading="lazy" />
          <div class="bco-pod__overlay"></div>
        </div>
        <div class="bco-pod__body">
          <div class="bco-pod__score" style="color:${p(n.score)}">${n.score}<span>/100</span></div>
          <div class="bco-pod__name">${n.name}</div>
          <div class="bco-pod__flag">${((v=n.assets)==null?void 0:v.flagEmoji)??""} ${n.continent??""}</div>
          <div class="bco-pod__metrics">
            ${e.cityCount>0?`<span>🏙 ${e.cityCount} cit${e.cityCount>1?"ies":"y"}</span>`:""}
            ${e.avgSafetyScore?`<span>🛡 ${e.avgSafetyScore}/100</span>`:""}
            ${e.avgMonthlyCost&&!e.isFallback?`<span>💰 ~$${Number(e.avgMonthlyCost).toLocaleString()}/mo</span>`:""}
          </div>
          <a href="/best-cities/${n.slug}" data-link class="bco-pod__btn">Explore cities -></a>
        </div>
      </div>
    `}).join(""),f=r.slice(3).map((t,n)=>{var d;const e=w(t.slug),l=k(t.slug);return`
      <a href="/best-cities/${t.slug}" data-link class="bco-card">
        <div class="bco-card__img">
          <img src="${l}" alt="${t.name}" loading="lazy" />
          <div class="bco-card__overlay"></div>
          <span class="bco-card__rank">#${n+4}</span>
        </div>
        <div class="bco-card__body">
          <div class="bco-card__top">
            <div>
              <p class="bco-card__name">${((d=t.assets)==null?void 0:d.flagEmoji)??""} ${t.name}</p>
              <p class="bco-card__region">${t.continent??""}</p>
            </div>
            <div class="bco-card__score" style="color:${p(t.score)}">${t.score}<span>/100</span></div>
          </div>
          <div class="bco-card__metrics">
            ${e.cityCount>0?`<span>🏙 ${e.cityCount} cities</span>`:""}
            ${e.avgSafetyScore?`<span>🛡 ${e.avgSafetyScore}</span>`:""}
            ${e.avgInternetSpeed&&!e.isFallback?`<span>📡 ${e.avgInternetSpeed} Mbps</span>`:""}
          </div>
        </div>
      </a>
    `}).join(""),h=o==="nomad"?"Digital Nomads":o.charAt(0).toUpperCase()+o.slice(1),u=L([{label:"Home",href:"/"},{label:"Best Countries"}]),g=`
    <style>
      ${N}
      .bco-hero{background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);padding:60px 0 52px;position:relative;overflow:hidden;}
      .bco-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 70% at 75% 50%,rgba(99,102,241,0.2),transparent 70%);}
      .bco-hero__inner{position:relative;z-index:2;}
      .bco-hero__eyebrow{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#818cf8;margin-bottom:12px;}
      .bco-hero__title{font-size:clamp(28px,4vw,48px);font-weight:900;color:#fff;letter-spacing:-0.025em;line-height:1.1;margin-bottom:12px;}
      .bco-hero__title em{font-style:normal;background:linear-gradient(90deg,#818cf8,#34d399);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
      .bco-hero__sub{font-size:15px;color:rgba(255,255,255,0.55);margin:0;}

      .bco-controls{background:#fff;border-bottom:1px solid #e5e7eb;padding:14px 0;position:sticky;top:0;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,0.05);}
      .bco-controls__inner{display:flex;align-items:center;gap:10px;}
      .bco-controls__label{font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9ca3af;margin-right:4px;}
      .bco-profile-btn{display:inline-flex;align-items:center;gap:5px;padding:6px 14px;border-radius:999px;border:1.5px solid #e5e7eb;font-size:12px;font-weight:600;color:#6b7280;text-decoration:none;background:#fff;transition:all 0.15s;}
      .bco-profile-btn:hover{border-color:#c7d2fe;color:#4f46e5;text-decoration:none;}
      .bco-profile-btn.is-active{background:linear-gradient(135deg,#6366f1,#8b5cf6);border-color:transparent;color:#fff;}

      /* Podium */
      .bco-podium-section{background:#f9fafb;padding:56px 0 48px;}
      .bco-podium{display:grid;grid-template-columns:1fr 1.15fr 1fr;gap:16px;align-items:end;margin-top:28px;}
      .bco-pod{background:#fff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;transition:transform 0.2s;}
      .bco-pod--gold{border-color:#f59e0b;box-shadow:0 0 0 3px rgba(245,158,11,0.15),0 16px 48px rgba(0,0,0,0.1);transform:translateY(-8px);}
      .bco-pod__medal{text-align:center;font-size:26px;padding:14px 0 0;}
      .bco-pod__img{position:relative;height:150px;overflow:hidden;}
      .bco-pod__img img{width:100%;height:100%;object-fit:cover;transition:transform 0.4s;}
      .bco-pod:hover .bco-pod__img img{transform:scale(1.05);}
      .bco-pod__overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.35),transparent 60%);}
      .bco-pod__body{padding:14px 16px 18px;}
      .bco-pod__score{font-size:28px;font-weight:900;letter-spacing:-0.03em;line-height:1;margin-bottom:4px;}
      .bco-pod__score span{font-size:13px;font-weight:500;color:#9ca3af;}
      .bco-pod__name{font-size:15px;font-weight:800;color:#111827;margin-bottom:2px;}
      .bco-pod__flag{font-size:11px;color:#9ca3af;margin-bottom:10px;}
      .bco-pod__metrics{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px;}
      .bco-pod__metrics span{font-size:11px;font-weight:600;color:#374151;background:#f8fafc;border:1px solid #f1f5f9;padding:3px 8px;border-radius:999px;}
      .bco-pod__btn{display:block;text-align:center;background:#f8fafc;border:1.5px solid #e5e7eb;border-radius:10px;font-size:12px;font-weight:700;color:#4f46e5;padding:8px;text-decoration:none;transition:all 0.15s;}
      .bco-pod__btn:hover{background:#eef2ff;border-color:#c7d2fe;text-decoration:none;}

      /* Rest cards */
      .bco-rest-section{padding:48px 0 72px;background:#fff;}
      .bco-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-top:28px;}
      .bco-card{display:block;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;text-decoration:none;background:#fff;transition:transform 0.2s,box-shadow 0.2s,border-color 0.2s;}
      .bco-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,0.09);border-color:#c7d2fe;text-decoration:none;}
      .bco-card__img{position:relative;height:140px;overflow:hidden;}
      .bco-card__img img{width:100%;height:100%;object-fit:cover;transition:transform 0.4s;}
      .bco-card:hover .bco-card__img img{transform:scale(1.05);}
      .bco-card__overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.45),transparent 60%);}
      .bco-card__rank{position:absolute;top:10px;left:12px;font-size:11px;font-weight:800;color:#fff;background:rgba(0,0,0,0.45);padding:3px 8px;border-radius:999px;backdrop-filter:blur(4px);}
      .bco-card__body{padding:14px 16px;}
      .bco-card__top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;}
      .bco-card__name{font-size:14px;font-weight:800;color:#111827;margin:0 0 2px;}
      .bco-card__region{font-size:11px;color:#9ca3af;margin:0;}
      .bco-card__score{font-size:20px;font-weight:900;letter-spacing:-0.02em;line-height:1;text-align:right;}
      .bco-card__score span{font-size:10px;font-weight:500;color:#9ca3af;}
      .bco-card__metrics{display:flex;gap:6px;flex-wrap:wrap;}
      .bco-card__metrics span{font-size:11px;font-weight:600;color:#374151;background:#f8fafc;border:1px solid #f1f5f9;padding:2px 7px;border-radius:999px;}

      .bco-cta{background:linear-gradient(135deg,#1e1b4b,#312e81,#1e1b4b);padding:60px 0;text-align:center;position:relative;overflow:hidden;}
      .bco-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(99,102,241,0.25),transparent 70%);}
      .bco-cta__inner{position:relative;z-index:2;}
      .bco-cta h2{font-size:30px;font-weight:800;color:#fff;letter-spacing:-0.02em;margin-bottom:10px;}
      .bco-cta p{font-size:15px;color:rgba(255,255,255,0.55);margin-bottom:28px;}
      .bco-cta__btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
      .bco-btn{display:inline-flex;align-items:center;gap:7px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:10px;text-decoration:none;box-shadow:0 4px 16px rgba(99,102,241,0.4);transition:opacity 0.2s;}
      .bco-btn:hover{opacity:0.9;color:#fff;text-decoration:none;}
      .bco-btn-ghost{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:rgba(255,255,255,0.85);font-size:14px;font-weight:500;padding:12px 20px;border-radius:10px;text-decoration:none;transition:background 0.2s;}
      .bco-btn-ghost:hover{background:rgba(255,255,255,0.18);color:#fff;text-decoration:none;}

      @media(max-width:768px){.bco-podium{grid-template-columns:1fr 1fr 1fr;}}
      @media(max-width:560px){.bco-podium{grid-template-columns:1fr;}}
    </style>

    <!-- HERO -->
    <section class="bco-hero">
      ${u}
      <div class="container bco-hero__inner">
        <p class="bco-hero__eyebrow">Country Rankings</p>
        <h1 class="bco-hero__title">Best Countries for<br><em>${h}</em></h1>
        <p class="bco-hero__sub">
          ${r.length} countries ranked by safety, cost of living, infrastructure and ${o} lifestyle quality.
        </p>
      </div>
    </section>

    <!-- PROFILE CONTROLS -->
    <div class="bco-controls">
      <div class="container">
        <div class="bco-controls__inner">
          <span class="bco-controls__label">Profile:</span>
          ${b}
        </div>
      </div>
    </div>

    <!-- TOP 3 PODIUM -->
    <section class="bco-podium-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Top 3 Overall</p>
        <h2 style="font-size:24px;font-weight:800;color:#111827;letter-spacing:-0.02em">Best countries this year</h2>
        <div class="bco-podium">${s}</div>
      </div>
    </section>

    <!-- REST OF RANKINGS -->
    <section class="bco-rest-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Full ranking</p>
        <h2 style="font-size:24px;font-weight:800;color:#111827;letter-spacing:-0.02em">Positions 4-${r.length}</h2>
        <div class="bco-grid">${f}</div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bco-cta">
      <div class="bco-cta__inner container">
        <h2>Compare cities in your top country</h2>
        <p>Use the budget calculator to find out what life really costs.</p>
        <div class="bco-cta__btns">
          <a href="/calculator"   data-link class="bco-btn">Open Calculator -></a>
          <a href="/destinations" data-link class="bco-btn-ghost">All Destinations</a>
        </div>
      </div>
    </section>
  `;return $(g)}export{H as BestCountriesPage,H as default};
