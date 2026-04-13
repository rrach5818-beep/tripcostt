import{M as V}from"./MainLayout-Dpe6AwD5.js";import{b as Q,a as ee}from"./cityService-Dc1KzdCT.js";import{s as te,i as M}from"./setPageMeta-Be_Dth_8.js";import{h as ie}from"./pdf-CXuTfx1L.js";import{B as oe,a as ae}from"./Breadcrumb-CCHdv48W.js";import"./leaflet-rVTzhNNB.js";function u(t,i="$"){return`${i}${t.toLocaleString()}`}function v(t,i=""){return t!=null&&t!==""?t:i}function ne(t){const i=v(t.country,"the country"),e=v(t.continent,null);return e?`${i}, ${e}`:i}function se(t){const i=v(t.name,"This city"),e=ne(t);return`
${i} is a popular destination located in ${e}.
It attracts digital nomads, expatriates, and travelers who are looking to balance lifestyle, comfort, and cost of living.

This page provides a detailed overview of the cost of living in ${i}, covering housing, food, transportation, and daily expenses to help you decide whether it fits your budget and lifestyle.
  `.trim()}function F(t,i){const e=v(t.name,"this city"),a=v(t.country,"the country"),s={accommodation:`
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
    `};return v(s[i],"").trim()}function re(t){const i=v(t.name,"this city");return`
Living in ${i} offers a mix of lifestyle, culture, and modern infrastructure.
Residents benefit from a dynamic urban environment, diverse food options, and convenient transportation.

The overall quality of life in ${i} makes it an attractive place to live for both locals and foreigners, depending on personal preferences and budget.
  `.trim()}function ce(t){return`
${v(t.name,"this city")} is considered a viable option for digital nomads and expatriates.
The city provides reliable internet infrastructure, access to essential services, and a generally safe living environment.

While the cost of living may be higher than in some destinations, many remote workers find the stability and quality of life worth the investment.
  `.trim()}function de(t){const i=v(t.name,"this city");return[{question:`Is ${i} expensive?`,answer:`${i} is generally considered expensive compared to many cities, but actual costs depend on lifestyle choices and housing location.`},{question:`How much do you need per month to live in ${i}?`,answer:`Monthly expenses in ${i} vary based on accommodation, lifestyle, and personal spending habits. A moderate to high budget is typically required.`},{question:`Is ${i} safe for foreigners?`,answer:`${i} is generally regarded as a safe city, including for foreigners and long-term residents.`},{question:`Is ${i} good for digital nomads?`,answer:`${i} offers good infrastructure and internet connectivity for digital nomads, though cost considerations are important for long-term stays.`}]}function E(t,i=""){return t!=null&&t!==""?t:i}function pe(t){const i=E(t.name,"City"),e=E(t.country,"");return e?`Cost of Living in ${i}, ${e} - Prices & Budget`:`Cost of Living in ${i} - Prices & Budget`}function le(t){return`Detailed cost of living in ${E(t.name,"this city")}. Housing, food, transport, safety, and digital nomad lifestyle to help you plan your budget.`}function fe(t){const i=t.costs??{},e=i.accommodation??{},a=i.food??{},s=t.digitalNomad??{},n=t.visa??{},c=t.tax??{},r=t.infrastructure??{},h=t.safety??{},_=t.macro??{},x=t.currencySymbol||"$",w=l=>x+Math.round(l).toLocaleString("en-US"),b=(e.center??0)*30+(a.standard??0)*30+(i.transport??0)+(i.coworking??0),q=(e.suburb??0)*30+(a.standard??0)*30+(i.transport??0)+(i.coworking??0);function T(l){return l>=80?"#10b981":l>=60?"#f59e0b":"#ef4444"}function y(l,$,S){S=S||100;const p=Math.min(100,Math.round($/S*100)),f=T($);return`
      <div style="margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px">
          <span style="color:#6b7280">${l}</span>
          <span style="font-weight:700;color:${f}">${$}/100</span>
        </div>
        <div style="height:5px;background:#e5e7eb;border-radius:4px;overflow:hidden">
          <div style="height:100%;width:${p}%;background:${f};border-radius:4px"></div>
        </div>
      </div>`}function g(l,$){return`
      <tr>
        <td style="padding:6px 0;font-size:11px;color:#6b7280;border-bottom:1px solid #f1f5f9">${l}</td>
        <td style="padding:6px 0;font-size:11px;font-weight:700;color:#111827;text-align:right;border-bottom:1px solid #f1f5f9">${w($)}/mo</td>
      </tr>`}const L=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return`
<div id="pdf-report" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#111827;width:700px;padding:0;margin:0 auto;background:#fff">

  <!-- HEADER -->
  <div style="background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);padding:40px 36px 32px;border-radius:0 0 16px 16px">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px">
      <div>
        <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.5);margin-bottom:6px">LIVING COST ATLAS REPORT</div>
        <div style="font-size:32px;font-weight:900;color:#fff;letter-spacing:-0.03em;line-height:1.1">${t.name}</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">${t.country} &middot; ${t.continent}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.03em">${s.overallScore??"--"}<span style="font-size:14px;color:rgba(255,255,255,0.5)">/100</span></div>
        <div style="font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.5)">Nomad Score</div>
      </div>
    </div>

    <!-- KPIs row -->
    <div style="display:flex;gap:0;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);border-radius:10px;overflow:hidden">
      <div style="flex:1;padding:12px 16px;border-right:1px solid rgba(255,255,255,0.1)">
        <div style="font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,0.45)">Monthly (center)</div>
        <div style="font-size:18px;font-weight:800;color:#fff">${w(b)}</div>
      </div>
      <div style="flex:1;padding:12px 16px;border-right:1px solid rgba(255,255,255,0.1)">
        <div style="font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,0.45)">Safety</div>
        <div style="font-size:18px;font-weight:800;color:#fff">${h.safetyIndex??"--"}/100</div>
      </div>
      <div style="flex:1;padding:12px 16px;border-right:1px solid rgba(255,255,255,0.1)">
        <div style="font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,0.45)">WiFi</div>
        <div style="font-size:18px;font-weight:800;color:#fff">${s.wifiSpeed??"--"} Mbps</div>
      </div>
      <div style="flex:1;padding:12px 16px">
        <div style="font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,0.45)">Currency</div>
        <div style="font-size:18px;font-weight:800;color:#fff">${t.currency??"--"}</div>
      </div>
    </div>
  </div>

  <!-- BODY -->
  <div style="padding:28px 36px 20px">

    <!-- COST BREAKDOWN -->
    <div style="margin-bottom:28px">
      <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:6px">MONTHLY EXPENSES</div>
      <div style="font-size:18px;font-weight:800;color:#111827;margin-bottom:16px">Cost Breakdown</div>

      <div style="display:flex;gap:16px">
        <!-- Accommodation -->
        <div style="flex:1;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:16px">
          <div style="font-size:11px;font-weight:700;color:#111827;margin-bottom:10px">Accommodation</div>
          <table style="width:100%;border-collapse:collapse">
            ${g("City center",e.center*30)}
            ${g("Suburb",e.suburb*30)}
          </table>
        </div>
        <!-- Food -->
        <div style="flex:1;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:16px">
          <div style="font-size:11px;font-weight:700;color:#111827;margin-bottom:10px">Food & Dining</div>
          <table style="width:100%;border-collapse:collapse">
            ${g("Budget",a.budget*30)}
            ${g("Standard",a.standard*30)}
            ${g("Premium",a.premium*30)}
          </table>
        </div>
        <!-- Transport -->
        <div style="flex:1;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:16px">
          <div style="font-size:11px;font-weight:700;color:#111827;margin-bottom:10px">Transport & Work</div>
          <table style="width:100%;border-collapse:collapse">
            ${g("Transport",i.transport)}
            ${g("Coworking",i.coworking)}
          </table>
        </div>
      </div>

      <!-- Totals summary -->
      <div style="margin-top:12px;background:#eef2ff;border:1px solid #c7d2fe;border-radius:10px;padding:14px 18px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <span style="font-size:11px;font-weight:600;color:#4338ca">Estimated monthly total (standard lifestyle)</span>
        </div>
        <div style="display:flex;gap:20px">
          <div style="text-align:right">
            <div style="font-size:9px;color:#6366f1;font-weight:600;letter-spacing:0.5px">CITY CENTER</div>
            <div style="font-size:18px;font-weight:900;color:#312e81">${w(b)}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:9px;color:#6366f1;font-weight:600;letter-spacing:0.5px">SUBURB</div>
            <div style="font-size:18px;font-weight:900;color:#312e81">${w(q)}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- INFRASTRUCTURE -->
    <div style="margin-bottom:28px">
      <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:6px">CITY QUALITY</div>
      <div style="font-size:18px;font-weight:800;color:#111827;margin-bottom:16px">Infrastructure & Safety</div>

      <div style="display:flex;gap:16px">
        <div style="flex:1;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:16px">
          ${y("Public Transport",r.publicTransportQuality??0)}
          ${y("Healthcare",r.healthcareQuality??0)}
          ${y("English Proficiency",r.englishProficiency??0)}
          ${y("Airport Connectivity",r.airportConnectivity??0)}
        </div>
        <div style="flex:1;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:16px">
          ${y("Safety Index",h.safetyIndex??0)}
          ${y("Nomad Score",s.overallScore??0)}
          <div style="margin-top:12px;padding-top:10px;border-top:1px solid #e5e7eb">
            <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:6px">
              <span style="color:#6b7280">Crime Level</span>
              <strong>${h.crimeLevel??"--"}</strong>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:6px">
              <span style="color:#6b7280">Currency Stability</span>
              <strong>${_.currencyStability??"--"}</strong>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:#6b7280">Inflation Rate</span>
              <strong>${_.inflationRate??"--"}%</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VISA & TAX -->
    <div style="margin-bottom:20px">
      <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:6px">LEGAL & FINANCIAL</div>
      <div style="font-size:18px;font-weight:800;color:#111827;margin-bottom:16px">Visa & Tax</div>

      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
        <div style="padding:14px 18px;background:${n.remoteFriendly?"#ecfdf5":"#f9fafb"};border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:13px;font-weight:700;color:#111827">${n.type??"Standard Visa"}</span>
          <span style="font-size:10px;font-weight:700;padding:3px 10px;border-radius:999px;background:${n.remoteFriendly?"#d1fae5":"#f1f5f9"};color:${n.remoteFriendly?"#065f46":"#6b7280"}">${n.remoteFriendly?"Nomad Friendly":"Standard"}</span>
        </div>
        <div style="padding:14px 18px">
          <table style="width:100%;border-collapse:collapse;font-size:11px">
            <tr><td style="padding:5px 0;color:#6b7280">Max stay</td><td style="padding:5px 0;text-align:right;font-weight:600">${n.stayDurationMonths??"--"} months</td></tr>
            <tr><td style="padding:5px 0;color:#6b7280">Processing time</td><td style="padding:5px 0;text-align:right;font-weight:600">~${n.processingTimeDays??"--"} days</td></tr>
            <tr><td style="padding:5px 0;color:#6b7280">Min. income</td><td style="padding:5px 0;text-align:right;font-weight:600">${n.minIncomeRequirement>0?"$"+n.minIncomeRequirement+"/mo":"None stated"}</td></tr>
            <tr style="border-top:1px solid #e5e7eb"><td style="padding:5px 0;color:#6b7280">Income tax (top)</td><td style="padding:5px 0;text-align:right;font-weight:600">${c.personalIncomeTaxTopRate??"--"}%</td></tr>
            <tr><td style="padding:5px 0;color:#6b7280">Corporate tax</td><td style="padding:5px 0;text-align:right;font-weight:600">${c.corporateTax??"--"}%</td></tr>
            <tr><td style="padding:5px 0;color:#6b7280">Capital gains tax</td><td style="padding:5px 0;text-align:right;font-weight:600">${c.capitalGainsTax??"--"}%</td></tr>
          </table>
        </div>
      </div>
    </div>

  </div>

  <!-- FOOTER -->
  <div style="padding:16px 36px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center">
    <div style="font-size:10px;color:#9ca3af">Generated by Living Cost Atlas &middot; www.livingcostatlas.com &middot; ${L}</div>
    <div style="font-size:10px;color:#9ca3af">Data updated: ${t.lastUpdated??"N/A"}</div>
  </div>

</div>`}function ge(t){const i=fe(t),e=document.createElement("div");e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.innerHTML=i,document.body.appendChild(e);const a=e.querySelector("#pdf-report"),s={margin:[0,0,0,0],filename:`livingcostatlas-${t.slug}-report.pdf`,image:{type:"jpeg",quality:.95},html2canvas:{scale:2,useCORS:!0,logging:!1},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},pagebreak:{mode:["avoid-all","css","legacy"]}};return ie().set(s).from(a).save().then(()=>{document.body.removeChild(e)}).catch(n=>{console.error("PDF generation failed:",n),document.body.removeChild(e)})}function he(t){const{slug:i}=t,e=Q(i);if(!e)return V(`
      <div style="text-align:center;padding:120px 24px">
        <div style="font-size:48px;margin-bottom:16px">🌍</div>
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">City not found</h1>
        <p style="color:#6b7280;margin-bottom:32px">We couldn't find a city with that name.</p>
        <a href="/destinations" data-link class="btn btn--primary btn--lg">Browse all destinations</a>
      </div>
    `);const a=e.costs??{},s=a.accommodation??{},n=a.food??{},c=e.digitalNomad??{},r=e.visa??{},h=e.tax??{},_=e.infrastructure??{},x=e.safety??{},w=e.macro??{},b=(s.center??0)*30+(n.standard??0)*30+(a.transport??0)+(a.coworking??0),q=(s.suburb??0)*30+(n.standard??0)*30+(a.transport??0)+(a.coworking??0),T=se(e),y=re(e),g=ce(e),L=de(e),l=pe(e),$=le(e),S=ee();let p=S.filter(o=>o.slug!==e.slug&&o.country===e.country);p.length<3&&(p=S.filter(o=>o.slug!==e.slug&&o.continent===e.continent)),p=p.slice(0,4);const f=[];b<1e3?f.push({text:"Very Affordable",color:"#065f46",bg:"#d1fae5"}):b<1600?f.push({text:"Affordable",color:"#065f46",bg:"#d1fae5"}):b>3e3&&f.push({text:"High Cost",color:"#7f1d1d",bg:"#fee2e2"}),c.wifiSpeed>=100&&f.push({text:`${c.wifiSpeed} Mbps`,color:"#1e3a5f",bg:"#dbeafe"}),r.remoteFriendly&&f.push({text:"Nomad Visa",color:"#4c1d95",bg:"#ede9fe"}),(x.safetyIndex??0)>=80&&f.push({text:"Very Safe",color:"#065f46",bg:"#d1fae5"});const U=f.slice(0,3).map(o=>`<span style="background:${o.bg};color:${o.color};font-size:11px;font-weight:700;
      padding:4px 12px;border-radius:999px;letter-spacing:0.3px">${o.text}</span>`).join("");function R(o,d=80,m=60){return o>=d?"#10b981":o>=m?"#f59e0b":"#ef4444"}const D=Math.max(s.center*30,s.suburb*30,n.budget*30,n.standard*30,n.premium*30,a.transport,a.coworking);function Y(o,d="#6366f1"){return`<div style="flex:1;height:6px;background:#f1f5f9;border-radius:6px;overflow:hidden">
      <div style="height:100%;width:${D>0?Math.round(o/D*100):0}%;background:${d};border-radius:6px;transition:width 0.5s"></div>
    </div>`}function k(o,d,m){return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <span style="font-size:12px;color:#6b7280;width:100px;flex-shrink:0">${o}</span>
      ${Y(d,m)}
      <span style="font-size:13px;font-weight:700;color:#111827;white-space:nowrap;min-width:64px;text-align:right">
        ${u(d,e.currencySymbol)}/mo
      </span>
    </div>`}const W=[{q:`How much does it cost to live in ${e.name}?`,a:`A standard lifestyle in ${e.name} costs between ${u(q,e.currencySymbol)}/month (suburb) and ${u(b,e.currencySymbol)}/month (city center), covering accommodation, food, transport and coworking.`},{q:`Is ${e.name} safe for digital nomads?`,a:`${e.name} has a safety index of ${x.safetyIndex??"N/A"}/100. ${(x.safetyIndex??0)>=70?"It is generally considered safe. Normal precautions apply.":"Exercise standard urban caution."}`},{q:`How is the internet in ${e.name}?`,a:`Average WiFi speed in ${e.name} is ${c.wifiSpeed??"N/A"} Mbps -- ${(c.wifiSpeed??0)>=100?"excellent for video calls and remote work":(c.wifiSpeed??0)>=50?"good for most remote tasks":"adequate for basic tasks"}. Coworking spaces offer faster dedicated lines.`},{q:`Does ${e.name} have a digital nomad visa?`,a:r.remoteFriendly?`Yes -- ${e.name} offers a remote work visa (${r.type}). Stay up to ${r.stayDurationMonths} months. Minimum income requirement: ${r.minIncomeRequirement>0?"$"+r.minIncomeRequirement+"/mo":"none stated"}. Processing: ~${r.processingTimeDays} days.`:`${e.name} does not currently offer a dedicated digital nomad visa. Standard tourist or long-stay visas apply. Always verify with official sources before travelling.`}],N=[...L||[],...W],G=N.map((o,d)=>`
    <div class="cp-faq-item${d===0?" is-open":""}">
      <button class="cp-faq-q">
        <span>${o.q||o.question}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="cp-faq-a">${o.a||o.answer}</div>
    </div>
  `).join(""),K=p.map(o=>{var m,I,C,P,j,H,B,O;const d=Math.round((((I=(m=o.costs)==null?void 0:m.accommodation)==null?void 0:I.center)??0)*30+(((P=(C=o.costs)==null?void 0:C.food)==null?void 0:P.standard)??0)*30+(((j=o.costs)==null?void 0:j.transport)??0)+(((H=o.costs)==null?void 0:H.coworking)??0));return`
      <a href="/city/${o.slug}" data-link class="cp-sim-card">
        <div class="cp-sim-card__img">
          <img src="${o.image}" alt="${o.name}" loading="lazy" />
          <div class="cp-sim-card__overlay"></div>
          <span class="cp-sim-card__score" style="background:${R(((B=o.digitalNomad)==null?void 0:B.overallScore)??0)}">${((O=o.digitalNomad)==null?void 0:O.overallScore)??"--"}</span>
        </div>
        <div class="cp-sim-card__body">
          <strong>${o.name}</strong>
          <span>${o.country}</span>
          <span class="cp-sim-card__price">~$${d.toLocaleString()}/mo</span>
        </div>
      </a>
    `}).join(""),X=p.map(o=>`<a href="/compare/${e.slug}-vs-${o.slug}" data-link class="cp-compare-pill">
      ${e.name} vs ${o.name}
    </a>`).join("");function z(o,d,m=100){const I=Math.round(d/m*100),C=R(d,80,60);return`
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;margin-bottom:5px">
          <span style="font-size:12px;color:#6b7280;font-weight:500">${o}</span>
          <span style="font-size:12px;font-weight:700;color:${C}">${d}/100</span>
        </div>
        <div style="height:6px;background:#f1f5f9;border-radius:6px;overflow:hidden">
          <div style="height:100%;width:${I}%;background:${C};border-radius:6px;transition:width 0.5s"></div>
        </div>
      </div>`}const J=oe([{label:"Home",href:"/"},{label:"Destinations",href:"/destinations"},{label:e.country,href:`/best-cities/${e.country.toLowerCase().replace(/\s+/g,"-")}`},{label:e.name}]),Z=`
    <style>
      ${ae}
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
      ${J}
      <div class="cp-hero__content">
        <div class="container">
          <div class="cp-hero__badges">${U}</div>
          <h1 class="cp-hero__title">Cost of Living in ${e.name}</h1>
          <p class="cp-hero__sub">${e.country}   ${e.continent}   Updated March 2026</p>

          <div class="cp-hero__kpis">
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Monthly (center)</div>
              <div class="cp-hero__kpi-val">${u(b,e.currencySymbol)}</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Nomad Score</div>
              <div class="cp-hero__kpi-val">${c.overallScore??"--"}/100</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Safety Index</div>
              <div class="cp-hero__kpi-val">${x.safetyIndex??"--"}/100</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">WiFi Speed</div>
              <div class="cp-hero__kpi-val">${c.wifiSpeed??"--"} Mbps</div>
            </div>
          </div>

          <div class="cp-hero__actions">
            <a href="/calculator" data-link class="cp-btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Calculate my budget
            </a>
            ${p[0]?`<a href="/compare/${e.slug}-vs-${p[0].slug}" data-link class="cp-btn-secondary">Compare with ${p[0].name} -></a>`:""}
            <button id="btn-pdf-report" class="cp-btn-secondary" style="cursor:pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download PDF Report
            </button>
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
        <p class="cp-section__lead">${T}</p>

        <div class="cp-kpis">
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🏠</div>
            <div class="cp-kpi__label">City Center rent</div>
            <div class="cp-kpi__val">${u(s.center*30,e.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🍽️</div>
            <div class="cp-kpi__label">Food (standard)</div>
            <div class="cp-kpi__val">${u(n.standard*30,e.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🚇</div>
            <div class="cp-kpi__label">Transport</div>
            <div class="cp-kpi__val">${u(a.transport,e.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">💻</div>
            <div class="cp-kpi__label">Coworking</div>
            <div class="cp-kpi__val">${u(a.coworking,e.currencySymbol)}</div>
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
            <div class="cp-cost-card__desc">${F(e,"accommodation")}</div>
            ${k("City center",s.center*30,"#6366f1")}
            ${k("Suburb",s.suburb*30,"#8b5cf6")}
          </div>

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🍽️ Food & Dining</div>
            <div class="cp-cost-card__desc">${F(e,"food")}</div>
            ${k("Budget",n.budget*30,"#10b981")}
            ${k("Standard",n.standard*30,"#059669")}
            ${k("Premium",n.premium*30,"#047857")}
          </div>

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🚇 Transport & Work</div>
            <div class="cp-cost-card__desc">${F(e,"transport")}</div>
            ${k("Transport",a.transport,"#f59e0b")}
            ${k("Coworking",a.coworking,"#d97706")}
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
            ${z("Public Transport",_.publicTransportQuality??0)}
            ${z("Healthcare",_.healthcareQuality??0)}
            ${z("English Proficiency",_.englishProficiency??0)}
            ${z("Airport Connectivity",_.airportConnectivity??0)}
          </div>

          <div class="cp-infra-card">
            <div class="cp-infra-card__title">Safety & Macro</div>
            ${z("Safety Index",x.safetyIndex??0)}
            ${z("Nomad Score",c.overallScore??0)}
            <div style="margin-top:20px;padding-top:16px;border-top:1px solid #f1f5f9">
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                <span style="color:#6b7280">Crime Level</span>
                <strong style="color:#111827">${x.crimeLevel??"--"}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                <span style="color:#6b7280">Currency Stability</span>
                <strong style="color:#111827">${w.currencyStability??"--"}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:12px">
                <span style="color:#6b7280">Inflation Rate</span>
                <strong style="color:#111827">${w.inflationRate??"--"}%</strong>
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
              <span class="cp-visa__row-val">${h.personalIncomeTaxTopRate??"--"}%</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Corporate tax</span>
              <span class="cp-visa__row-val">${h.corporateTax??"--"}%</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Capital gains tax</span>
              <span class="cp-visa__row-val">${h.capitalGainsTax??"--"}%</span>
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
        <p class="cp-section__lead">${y}</p>
      </div>
    </section>

    <!-- -- FOR NOMADS -------------------------------------- -->
    <section class="cp-section cp-section--alt" id="nomads">
      <div class="container">
        <p class="cp-section__eyebrow">Remote Work</p>
        <h2 class="cp-section__title">Is ${e.name} good for digital nomads?</h2>
        <p class="cp-section__lead">${g}</p>
      </div>
    </section>

    <!-- -- FAQ --------------------------------------------- -->
    <section class="cp-section" id="faq">
      <div class="container">
        <p class="cp-section__eyebrow">Questions</p>
        <h2 class="cp-section__title">FAQ -- Living in ${e.name}</h2>
        <div class="cp-faq-list">${G}</div>
      </div>
    </section>

    <!-- -- SIMILAR CITIES ---------------------------------- -->
    <section class="cp-section cp-section--alt" id="similar">
      <div class="container">
        <p class="cp-section__eyebrow">Explore More</p>
        <h2 class="cp-section__title">Cities similar to ${e.name}</h2>
        <p class="cp-section__lead">Same region, comparable cost or lifestyle profile.</p>
        <div class="cp-similar">${K}</div>

        <div style="margin-top:32px">
          <p style="font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:12px">Compare ${e.name} with</p>
          <div class="cp-compare-pills">${X}</div>
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
  `,A=`/city/${e.slug}`;return te({title:l,description:$,canonical:A,image:e.image}),M("breadcrumb-jsonld",{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.livingcostatlas.com/"},{"@type":"ListItem",position:2,name:"Destinations",item:"https://www.livingcostatlas.com/destinations"},{"@type":"ListItem",position:3,name:e.name,item:`https://www.livingcostatlas.com${A}`}]}),M("place-jsonld",{"@context":"https://schema.org","@type":"City",name:e.name,containedInPlace:{"@type":"Country",name:e.country},geo:e.lat&&e.lng?{"@type":"GeoCoordinates",latitude:e.lat,longitude:e.lng}:void 0,image:e.image,url:`https://www.livingcostatlas.com${A}`}),M("faq-jsonld",{"@context":"https://schema.org","@type":"FAQPage",mainEntity:N.map(o=>({"@type":"Question",name:o.q||o.question,acceptedAnswer:{"@type":"Answer",text:o.a||o.answer}}))}),V(Z)}function _e(){const t=document.getElementById("btn-pdf-report");t&&t.addEventListener("click",()=>{const a=window.location.pathname.split("/"),s=a[a.length-1],n=Q(s);n&&(t.disabled=!0,t.textContent="Generating...",ge(n).then(()=>{t.disabled=!1,t.innerHTML=`
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF Report
        `}))}),document.querySelectorAll(".cp-faq-item").forEach(a=>{var s;(s=a.querySelector(".cp-faq-q"))==null||s.addEventListener("click",()=>{const n=a.classList.contains("is-open");document.querySelectorAll(".cp-faq-item").forEach(c=>c.classList.remove("is-open")),n||a.classList.add("is-open")})});const i=document.querySelectorAll("[id]"),e=document.querySelectorAll(".cp-nav__link[data-section]");if(e.length&&i.length){const a=new IntersectionObserver(s=>{s.forEach(n=>{if(n.isIntersecting){e.forEach(r=>r.classList.remove("is-active"));const c=document.querySelector(`.cp-nav__link[data-section="${n.target.id}"]`);c&&c.classList.add("is-active")}})},{rootMargin:"-50% 0px -40% 0px"});i.forEach(s=>a.observe(s))}e.forEach(a=>{a.addEventListener("click",s=>{var c;s.preventDefault();const n=a.dataset.section;(c=document.getElementById(n))==null||c.scrollIntoView({behavior:"smooth",block:"start"})})})}export{he as CityPage,he as default,_e as setupCityPageInteractivity};
