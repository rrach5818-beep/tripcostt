import{M as H}from"./MainLayout-CBxf94lM.js";import{b as O}from"./cityService-Dc1KzdCT.js";import{s as D,i as T}from"./setPageMeta-BmQKFz2d.js";import{B as U,a as V}from"./Breadcrumb-C87PeGFq.js";function q(p){if(!p)return[];const d=p.split("-vs-");return d.length!==2?[]:d}function X(p){const{cities:d}=p,[i,c]=q(d),e=O(i),o=O(c);if(!e||!o)return H(`
      <div style="text-align:center;padding:120px 24px">
        <div style="font-size:48px;margin-bottom:16px">🔍</div>
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">Cities not found</h1>
        <p style="color:#6b7280;margin-bottom:32px">We couldn't find one or both cities.</p>
        <a href="/calculator" data-link style="display:inline-flex;align-items:center;gap:7px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:14px;font-weight:600;padding:13px 26px;border-radius:10px;text-decoration:none">
          Open Calculator
        </a>
      </div>
    `);D({title:`${e.name} vs ${o.name} -- Cost of Living Comparison`,description:`Compare cost of living between ${e.name} and ${o.name}. Housing, food, transport, safety, WiFi and visa -- side by side.`,canonical:`/compare/${i}-vs-${c}`}),T("page-jsonld",{"@context":"https://schema.org","@type":"WebPage",name:`${e.name} vs ${o.name} Cost of Living`,url:`https://www.livingcostatlas.com/compare/${i}-vs-${c}`,breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.livingcostatlas.com/"},{"@type":"ListItem",position:2,name:"Calculator",item:"https://www.livingcostatlas.com/calculator"},{"@type":"ListItem",position:3,name:`${e.name} vs ${o.name}`,item:`https://www.livingcostatlas.com/compare/${i}-vs-${c}`}]}});function b(t){var a,f,n,r,s,l;return Math.round((((f=(a=t.costs)==null?void 0:a.accommodation)==null?void 0:f.center)??0)*30+(((r=(n=t.costs)==null?void 0:n.food)==null?void 0:r.standard)??0)*30+(((s=t.costs)==null?void 0:s.transport)??0)+(((l=t.costs)==null?void 0:l.coworking)??0))}function v(t){return t>=80?"#10b981":t>=60?"#f59e0b":"#ef4444"}const _=b(e),g=b(o),F=_<=g?e:o,h=g>0?Math.abs(Math.round((_-g)/g*100)):0;function u(t,a){var w,$,y,k,z,C,S,M,L,B,N,A;const f=b(t),n=((($=(w=t.costs)==null?void 0:w.accommodation)==null?void 0:$.center)??0)*30,r=(((k=(y=t.costs)==null?void 0:y.food)==null?void 0:k.standard)??0)*30,s=((z=t.costs)==null?void 0:z.transport)??0,l=((C=t.costs)==null?void 0:C.coworking)??0,W=Math.max(n,r,s,l,1);function E(x){return`<div style="flex:1;height:7px;background:#f1f5f9;border-radius:7px;overflow:hidden">
        <div style="height:100%;width:${Math.round(x/W*100)}%;background:${a};border-radius:7px;transition:width 0.5s"></div>
      </div>`}function m(x,P,j){return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <span style="font-size:14px;width:20px;text-align:center">${x}</span>
        <span style="font-size:12px;color:#6b7280;width:80px;flex-shrink:0">${P}</span>
        ${E(j)}
        <span style="font-size:12px;font-weight:700;color:#111827;white-space:nowrap;min-width:64px;text-align:right">
          $${j.toLocaleString()}/mo
        </span>
      </div>`}return`
      <div class="ccp-col">
        <div class="ccp-col__img">
          <img src="${t.image}" alt="${t.name}" loading="lazy" />
          <div class="ccp-col__img-overlay"></div>
          <div class="ccp-col__img-label">${t.name}</div>
        </div>
        <div class="ccp-col__body">
          <p class="ccp-col__country">${t.country}   ${t.continent}</p>
          <div class="ccp-col__total" style="color:${a}">$${f.toLocaleString()}<span>/mo</span></div>
          <p class="ccp-col__total-label">Standard lifestyle   City center</p>

          <div style="margin:20px 0">
            ${m("🏠","Housing",n)}
            ${m("🍽️","Food",r)}
            ${m("🚇","Transport",s)}
            ${m("💻","Coworking",l)}
          </div>

          <div class="ccp-col__metrics">
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val" style="color:${v(((S=t.digitalNomad)==null?void 0:S.overallScore)??0)}">
                ${((M=t.digitalNomad)==null?void 0:M.overallScore)??"--"}
              </div>
              <div class="ccp-col__metric-label">Nomad score</div>
            </div>
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val" style="color:${v(((L=t.digitalNomad)==null?void 0:L.safetyScore)??0)}">
                ${((B=t.digitalNomad)==null?void 0:B.safetyScore)??"--"}
              </div>
              <div class="ccp-col__metric-label">Safety</div>
            </div>
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val">${((N=t.digitalNomad)==null?void 0:N.wifiSpeed)??"--"}</div>
              <div class="ccp-col__metric-label">Mbps</div>
            </div>
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val" style="font-size:16px">
                ${(A=t.visa)!=null&&A.remoteFriendly?"✅":" "}
              </div>
              <div class="ccp-col__metric-label">Nomad visa</div>
            </div>
          </div>

          <a href="/city/${t.slug}" data-link class="ccp-col__link">
            Full guide for ${t.name} ->
          </a>
        </div>
      </div>
    `}const I=U([{label:"Home",href:"/"},{label:"Destinations",href:"/destinations"},{label:`${e.name} vs ${o.name}`}]),R=`
    <style>
      ${V}
      .ccp-hero{background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);padding:56px 0 48px;position:relative;overflow:hidden;}
      .ccp-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 50% 70% at 70% 50%,rgba(99,102,241,0.2),transparent 70%);}
      .ccp-hero__inner{position:relative;z-index:2;text-align:center;}
      .ccp-hero__eyebrow{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#818cf8;margin-bottom:12px;}
      .ccp-hero__title{font-size:clamp(24px,4vw,44px);font-weight:900;color:#fff;letter-spacing:-0.025em;margin-bottom:12px;}
      .ccp-hero__verdict{display:inline-flex;align-items:center;gap:8px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.3);color:#34d399;font-size:13px;font-weight:600;padding:6px 16px;border-radius:999px;}

      .ccp-section{padding:48px 0 72px;background:#f9fafb;}
      .ccp-grid{display:grid;grid-template-columns:1fr auto 1fr;gap:20px;align-items:start;margin-top:32px;}
      .ccp-vs{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding-top:180px;}
      .ccp-vs__badge{background:#1e1b4b;color:#fff;font-size:13px;font-weight:800;padding:10px 14px;border-radius:999px;letter-spacing:1px;}
      .ccp-vs__diff{font-size:12px;font-weight:700;color:#6b7280;text-align:center;line-height:1.4;}

      .ccp-col{background:#fff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;}
      .ccp-col__img{position:relative;height:200px;overflow:hidden;}
      .ccp-col__img img{width:100%;height:100%;object-fit:cover;}
      .ccp-col__img-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.5),transparent 60%);}
      .ccp-col__img-label{position:absolute;bottom:14px;left:16px;font-size:20px;font-weight:900;color:#fff;letter-spacing:-0.02em;}
      .ccp-col__body{padding:20px;}
      .ccp-col__country{font-size:12px;color:#9ca3af;margin-bottom:8px;}
      .ccp-col__total{font-size:36px;font-weight:900;letter-spacing:-0.03em;line-height:1;margin-bottom:4px;}
      .ccp-col__total span{font-size:14px;font-weight:500;color:#9ca3af;}
      .ccp-col__total-label{font-size:11px;color:#9ca3af;margin-bottom:0;}
      .ccp-col__metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px;padding:16px 0;border-top:1px solid #f1f5f9;border-bottom:1px solid #f1f5f9;}
      .ccp-col__metric{text-align:center;}
      .ccp-col__metric-val{font-size:18px;font-weight:800;color:#1e1b4b;letter-spacing:-0.01em;margin-bottom:2px;}
      .ccp-col__metric-label{font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;}
      .ccp-col__link{display:block;text-align:center;background:#f8fafc;border:1.5px solid #e5e7eb;border-radius:10px;font-size:12px;font-weight:700;color:#4f46e5;padding:10px;text-decoration:none;transition:all 0.15s;margin-top:4px;}
      .ccp-col__link:hover{background:#eef2ff;border-color:#c7d2fe;text-decoration:none;}

      .ccp-cta{background:linear-gradient(135deg,#1e1b4b,#312e81,#1e1b4b);padding:60px 0;text-align:center;position:relative;overflow:hidden;}
      .ccp-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(99,102,241,0.25),transparent 70%);}
      .ccp-cta__inner{position:relative;z-index:2;}
      .ccp-cta h2{font-size:28px;font-weight:800;color:#fff;letter-spacing:-0.02em;margin-bottom:10px;}
      .ccp-cta p{font-size:15px;color:rgba(255,255,255,0.55);margin-bottom:28px;}
      .ccp-cta__btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
      .ccp-btn{display:inline-flex;align-items:center;gap:7px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:10px;text-decoration:none;box-shadow:0 4px 16px rgba(99,102,241,0.4);transition:opacity 0.2s;}
      .ccp-btn:hover{opacity:0.9;color:#fff;text-decoration:none;}
      .ccp-btn-ghost{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:rgba(255,255,255,0.85);font-size:14px;font-weight:500;padding:12px 20px;border-radius:10px;text-decoration:none;transition:background 0.2s;}
      .ccp-btn-ghost:hover{background:rgba(255,255,255,0.18);color:#fff;text-decoration:none;}

      @media(max-width:768px){.ccp-grid{grid-template-columns:1fr;}.ccp-vs{flex-direction:row;padding-top:0;}}
    </style>

    <!-- HERO -->
    <section class="ccp-hero">
      ${I}
      <div class="container ccp-hero__inner">
        <p class="ccp-hero__eyebrow">Cost of Living Comparison</p>
        <h1 class="ccp-hero__title">${e.name} vs ${o.name}</h1>
        <div class="ccp-hero__verdict">
          ${F.name} is ${h}% more affordable
        </div>
      </div>
    </section>

    <!-- COMPARISON -->
    <section class="ccp-section">
      <div class="container">
        <div class="ccp-grid">
          ${u(e,"#6366f1")}
          <div class="ccp-vs">
            <div class="ccp-vs__badge">VS</div>
            <div class="ccp-vs__diff">
              ${h}%<br>difference
            </div>
          </div>
          ${u(o,"#10b981")}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="ccp-cta">
      <div class="ccp-cta__inner container">
        <h2>Want a deeper comparison?</h2>
        <p>Use the full calculator -- add your income, choose your lifestyle and see purchasing power side by side.</p>
        <div class="ccp-cta__btns">
          <a href="/calculator?a=${i}&b=${c}" data-link class="ccp-btn">Open in Calculator -></a>
          <a href="/destinations" data-link class="ccp-btn-ghost">Browse More Cities</a>
        </div>
      </div>
    </section>
  `;return H(R)}export{X as CityComparisonPage,X as default};
