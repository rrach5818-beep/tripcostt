const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-CHHlij6g.js","assets/MainLayout-BVTdBj1H.js","assets/cityService-qV0spH9F.js","assets/DestinationsPage-BaQQ60vo.js","assets/setPageMeta-BmQKFz2d.js","assets/cityRanking-Bc9to1fF.js","assets/countryDB-CrDm3Fkl.js","assets/Breadcrumb-C87PeGFq.js","assets/CityPage-Bo2xRNbG.js","assets/CityComparisonPage-DfHligH4.js","assets/CalculatorPage-DFRpYlfv.js","assets/NomadPage-D_cUyjMT.js","assets/AboutPage-82kCaGiO.js","assets/LegalPage-DprvltVD.js","assets/PrivacyPage-CG9WR_bT.js","assets/TermsPage-CKI8kMiB.js","assets/BestCitiesHubPage-DMAQWSeu.js","assets/imageHelper-BIpBZy2g.js","assets/BestCitiesPage-BfOPi9-G.js","assets/BestCountriesPage-DQeNPLA-.js","assets/EbookPage-Cd3VADwu.js","assets/EbooksPage-DtYZlx-p.js","assets/EbookSuccessPage-Bxc8mqSP.js","assets/ResourcesPage-BPlC4ytN.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();let y=null,k=[],_=!1;function C(e,t){y=e,k=t,window.addEventListener("popstate",()=>w()),w()}function I(e){window.history.pushState({},"",e),w()}function A(e){for(const t of k){const n=t.path.split("/"),o=e.split("/");if(n.length!==o.length)continue;const a={};let r=!0;for(let i=0;i<n.length;i++)if(n[i].startsWith(":"))a[n[i].slice(1)]=o[i];else if(n[i]!==o[i]){r=!1;break}if(r)return{route:t,params:a}}return null}async function w(){if(_)return;_=!0;const e=window.location.pathname,t=A(e);try{if(t){const n=await t.route.component(t.params);y.innerHTML=n,R(),window.dispatchEvent(new CustomEvent("lca:route-rendered",{detail:{path:e}})),t.route.setup&&setTimeout(async()=>{try{await t.route.setup()}catch(o){console.error("Setup error:",o)}},0)}else y.innerHTML=`
        <div class="container py-20 text-center">
          <h1>404 - Page Not Found</h1>
          <p class="mt-4">The page you're looking for doesn't exist.</p>
          <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
        </div>
      `}catch(n){console.error("Route render error:",n);const o=n&&n.message||"";if(((n&&n.name||"")==="ChunkLoadError"||/Failed to fetch dynamically imported module/i.test(o)||/Loading chunk [^\s]+ failed/i.test(o)||/Importing a module script failed/i.test(o)||/error loading dynamically imported module/i.test(o))&&!sessionStorage.getItem("lca_reload_attempted")){sessionStorage.setItem("lca_reload_attempted",String(Date.now())),window.location.reload();return}y.innerHTML=`
      <div class="container py-20 text-center">
        <h1>Error loading page</h1>
        <p class="mt-4">Please try refreshing.</p>
        <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
      </div>
    `}finally{_=!1}}function R(){try{sessionStorage.removeItem("lca_reload_attempted")}catch{}}const D="modulepreload",T=function(e){return"/"+e},E={},c=function(t,n,o){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),d=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(n.map(u=>{if(u=T(u),u in E)return;E[u]=!0;const f=u.endsWith(".css"),x=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${x}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":D,f||(p.as="script"),p.crossOrigin="",p.href=u,d&&p.setAttribute("nonce",d),document.head.appendChild(p),f)return new Promise((g,S)=>{p.addEventListener("load",g),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(i){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=i,window.dispatchEvent(d),!d.defaultPrevented)throw i}return a.then(i=>{for(const d of i||[])d.status==="rejected"&&r(d.reason);return t().catch(r)})};function l(e){let t=null;return{load:()=>(t||(t=e()),t)}}const s={home:l(()=>c(()=>import("./HomePage-CHHlij6g.js"),__vite__mapDeps([0,1,2]))),destinations:l(()=>c(()=>import("./DestinationsPage-BaQQ60vo.js"),__vite__mapDeps([3,4,1,2,5,6,7]))),city:l(()=>c(()=>import("./CityPage-Bo2xRNbG.js"),__vite__mapDeps([8,1,2,4,7]))),comparison:l(()=>c(()=>import("./CityComparisonPage-DfHligH4.js"),__vite__mapDeps([9,1,2,4,7]))),calculator:l(()=>c(()=>import("./CalculatorPage-DFRpYlfv.js"),__vite__mapDeps([10,1,2,7,4]))),nomad:l(()=>c(()=>import("./NomadPage-D_cUyjMT.js"),__vite__mapDeps([11,1,2,4,7]))),about:l(()=>c(()=>import("./AboutPage-82kCaGiO.js"),__vite__mapDeps([12,4,1,2]))),legal:l(()=>c(()=>import("./LegalPage-DprvltVD.js"),__vite__mapDeps([13,1]))),privacy:l(()=>c(()=>import("./PrivacyPage-CG9WR_bT.js"),__vite__mapDeps([14,1]))),terms:l(()=>c(()=>import("./TermsPage-CKI8kMiB.js"),__vite__mapDeps([15,1]))),bestCitiesHub:l(()=>c(()=>import("./BestCitiesHubPage-DMAQWSeu.js"),__vite__mapDeps([16,1,7,4,2,17]))),bestCities:l(()=>c(()=>import("./BestCitiesPage-BfOPi9-G.js"),__vite__mapDeps([18,1,2,5,6,4,17,7]))),bestCountries:l(()=>c(()=>import("./BestCountriesPage-DQeNPLA-.js"),__vite__mapDeps([19,1,6,2,4,17,7]))),ebook:l(()=>c(()=>import("./EbookPage-Cd3VADwu.js"),__vite__mapDeps([20,4,1]))),ebooks:l(()=>c(()=>import("./EbooksPage-DtYZlx-p.js"),__vite__mapDeps([21,4,1]))),ebookSuccess:l(()=>c(()=>import("./EbookSuccessPage-Bxc8mqSP.js"),__vite__mapDeps([22,4,1]))),resources:l(()=>c(()=>import("./ResourcesPage-BPlC4ytN.js"),__vite__mapDeps([23,4,1])))},O=[{path:"/",component:async e=>(await s.home.load()).HomePage(e),setup:async()=>(await s.home.load()).setupHomeMapInteractivity()},{path:"/destinations",component:async e=>(await s.destinations.load()).DestinationsPage(e),setup:async()=>(await s.destinations.load()).setupDestinationsInteractivity()},{path:"/city/:slug",component:async e=>(await s.city.load()).CityPage(e),setup:async()=>(await s.city.load()).setupCityPageInteractivity()},{path:"/compare/:cities",component:async e=>(await s.comparison.load()).CityComparisonPage(e)},{path:"/calculator",component:async e=>(await s.calculator.load()).CalculatorPage(e),setup:async()=>(await s.calculator.load()).setupCalculatorInteractivity()},{path:"/nomad",component:async e=>(await s.nomad.load()).NomadPage(e),setup:async()=>(await s.nomad.load()).setupNomadPageInteractivity()},{path:"/about",component:async e=>(await s.about.load()).AboutPage(e)},{path:"/legal",component:async e=>(await s.legal.load()).LegalPage(e)},{path:"/privacy",component:async e=>(await s.privacy.load()).PrivacyPage(e)},{path:"/terms",component:async e=>(await s.terms.load()).TermsPage(e)},{path:"/best-cities",component:async e=>(await s.bestCitiesHub.load()).BestCitiesHubPage(e)},{path:"/best-cities/:country/:profile",component:async e=>(await s.bestCities.load()).BestCitiesPage(e)},{path:"/best-cities/:country",component:async e=>(await s.bestCities.load()).BestCitiesPage(e)},{path:"/best-countries",component:async e=>(await s.bestCountries.load()).BestCountriesPage(e)},{path:"/best-countries/:profile",component:async e=>(await s.bestCountries.load()).BestCountriesPage(e)},{path:"/resources",component:async e=>(await s.resources.load()).ResourcesPage(e)},{path:"/ebooks",component:async e=>(await s.ebooks.load()).EbooksPage(e)},{path:"/ebook/:slug/success",component:async e=>(await s.ebookSuccess.load()).EbookSuccessPage(e)},{path:"/ebook/:slug",component:async e=>(await s.ebook.load()).EbookPage(e),setup:async()=>(await s.ebook.load()).setupEbookPageInteractivity()}];function N(){return typeof window<"u"&&typeof window.gtag=="function"}function z(){if(N())try{window.gtag.apply(null,arguments)}catch(e){console.warn("[analytics]",e)}}function m(e,t={}){z("event",e,t)}function b(e,t){return{item_id:t,item_name:`${e.city} Cost of Living eBook 2026`,item_brand:"Living Cost Atlas",item_category:"eBook",item_category2:e.country,price:e.price,quantity:1}}function re(e,t){m("view_item",{currency:t.currency||"EUR",value:t.price,items:[b(t,e)]})}function se(e,t){m("select_item",{items:[b(t,e)]}),m("begin_checkout",{currency:t.currency||"EUR",value:t.price,items:[b(t,e)]})}function ce(e,t,n){m("purchase",{transaction_id:n||`lca_${e}_${Date.now()}`,currency:t.currency||"EUR",value:t.price,items:[b(t,e)]})}function le(e=[]){m("view_item_list",{item_list_id:"ebook_catalog",item_list_name:"eBook Catalog",items:e.map(t=>({item_id:t,item_name:t}))})}function B(){m("newsletter_popup_shown",{source:"auto_trigger"})}function V(){m("newsletter_popup_dismissed")}function F(e="popup"){m("newsletter_signup",{source:e,value:1}),m("generate_lead",{source:e,value:1})}function q(){m("free_guide_download",{item_name:"Top 10 Cities 2026"})}const P="lca_newsletter_seen",L="lca_newsletter_subscribed",M=7,H=3e4,$="/ebooks/LivingCostAtlas_FreeGuide_Top10_2026.pdf",j="https://api.web3forms.com/submit",G="1a716176-7bc9-4080-884a-cf88a6394cb6";function U(){if(localStorage.getItem(L))return!1;const e=localStorage.getItem(P);return!(e&&(Date.now()-Number(e))/864e5<M)}function W(){localStorage.setItem(P,String(Date.now()))}function Y(e){localStorage.setItem(L,e)}function K(){if(document.getElementById("lca-np-styles"))return;const e=document.createElement("style");e.id="lca-np-styles",e.textContent=`
    .lca-np-overlay {
      position:fixed;inset:0;z-index:10000;
      background:rgba(15,12,41,0.72);backdrop-filter:blur(6px);
      display:flex;align-items:center;justify-content:center;
      padding:20px;animation:lcaFadeIn .25s ease-out;
    }
    @keyframes lcaFadeIn { from{opacity:0} to{opacity:1} }
    @keyframes lcaSlideUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
    .lca-np-modal {
      background:#fff;border-radius:16px;max-width:520px;width:100%;
      overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,.4);
      animation:lcaSlideUp .35s cubic-bezier(.2,.9,.3,1);
      position:relative;
    }
    .lca-np-close {
      position:absolute;top:12px;right:12px;z-index:2;
      background:rgba(255,255,255,.15);border:none;color:#fff;
      width:32px;height:32px;border-radius:50%;cursor:pointer;
      font-size:18px;display:flex;align-items:center;justify-content:center;
      transition:background .15s;
    }
    .lca-np-close:hover { background:rgba(255,255,255,.28); }
    .lca-np-hero {
      background:linear-gradient(135deg,#1e1b4b 0%,#4f46e5 100%);
      color:#fff;padding:34px 28px 28px;position:relative;overflow:hidden;
    }
    .lca-np-hero::before {
      content:'';position:absolute;top:-40px;right:-40px;
      width:180px;height:180px;border-radius:50%;
      background:radial-gradient(circle,rgba(212,168,67,.25) 0%,transparent 70%);
    }
    .lca-np-badge {
      display:inline-block;background:#d4a843;color:#1e1b4b;
      font-size:11px;font-weight:800;letter-spacing:1.5px;
      padding:4px 10px;border-radius:20px;margin-bottom:14px;
    }
    .lca-np-title {
      font-size:26px;font-weight:900;line-height:1.15;margin:0 0 10px;
      letter-spacing:-0.02em;position:relative;
    }
    .lca-np-sub {
      font-size:14px;line-height:1.55;opacity:.88;margin:0;position:relative;
    }
    .lca-np-body { padding:26px 28px 28px; }
    .lca-np-perks {
      display:flex;flex-direction:column;gap:10px;margin-bottom:20px;
    }
    .lca-np-perk {
      display:flex;align-items:flex-start;gap:10px;font-size:13.5px;color:#334155;line-height:1.45;
    }
    .lca-np-perk-icon {
      width:20px;height:20px;background:#e0e7ff;color:#4f46e5;border-radius:50%;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;
      font-weight:800;font-size:12px;margin-top:1px;
    }
    .lca-np-form { display:flex;flex-direction:column;gap:10px; }
    .lca-np-input {
      width:100%;padding:13px 14px;border:1.5px solid #e2e8f0;border-radius:10px;
      font-size:14px;outline:none;transition:border-color .15s,box-shadow .15s;
      font-family:inherit;color:#1e1b4b;
    }
    .lca-np-input:focus {
      border-color:#4f46e5;box-shadow:0 0 0 4px rgba(79,70,229,.12);
    }
    .lca-np-submit {
      background:linear-gradient(135deg,#4f46e5 0%,#6366f1 100%);
      color:#fff;border:none;padding:14px 20px;border-radius:10px;
      font-size:14.5px;font-weight:700;cursor:pointer;
      transition:transform .15s,box-shadow .15s;
      font-family:inherit;
    }
    .lca-np-submit:hover { transform:translateY(-1px);box-shadow:0 10px 24px rgba(79,70,229,.35); }
    .lca-np-submit:disabled { opacity:.6;cursor:not-allowed; }
    .lca-np-foot {
      font-size:11px;color:#94a3b8;text-align:center;margin-top:14px;
    }
    .lca-np-success {
      text-align:center;padding:10px 6px;
    }
    .lca-np-check {
      width:56px;height:56px;background:#dcfce7;color:#15803d;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      font-size:32px;font-weight:900;margin:0 auto 16px;
    }
    .lca-np-success h3 { font-size:20px;margin:0 0 8px;color:#1e1b4b;font-weight:800; }
    .lca-np-success p { font-size:13.5px;color:#64748b;margin:0 0 20px;line-height:1.55; }
    .lca-np-dl {
      display:inline-flex;align-items:center;gap:8px;
      background:#1e1b4b;color:#fff;text-decoration:none;
      padding:12px 22px;border-radius:10px;font-weight:700;font-size:14px;
      transition:background .15s;
    }
    .lca-np-dl:hover { background:#4f46e5; }
    .lca-np-err {
      color:#b91c1c;font-size:12.5px;background:#fef2f2;border:1px solid #fecaca;
      padding:8px 12px;border-radius:8px;margin-top:4px;
    }
    @media (max-width:520px) {
      .lca-np-hero { padding:26px 20px 22px; }
      .lca-np-title { font-size:22px; }
      .lca-np-body  { padding:22px 20px 22px; }
    }
  `,document.head.appendChild(e)}function J(){const e=document.createElement("div");return e.className="lca-np-overlay",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby","lca-np-title"),e.innerHTML=`
    <div class="lca-np-modal">
      <button class="lca-np-close" aria-label="Close">&times;</button>
      <div class="lca-np-hero">
        <div class="lca-np-badge">ANNUAL REPORT</div>
        <h2 class="lca-np-title" id="lca-np-title">Digital Nomad Cities Report 2026</h2>
        <p class="lca-np-sub">Our annual ranking of the 10 most attractive destinations for remote workers -- assessed across cost, infrastructure, safety, and quality-of-life.</p>
      </div>
      <div class="lca-np-body" id="lca-np-body">
        <div class="lca-np-perks">
          <div class="lca-np-perk">
            <div class="lca-np-perk-icon">&#10003;</div>
            <div>Nomad Scores and monthly budgets for 10 cities</div>
          </div>
          <div class="lca-np-perk">
            <div class="lca-np-perk-icon">&#10003;</div>
            <div>WiFi speeds, safety index, and tier rankings</div>
          </div>
          <div class="lca-np-perk">
            <div class="lca-np-perk-icon">&#10003;</div>
            <div>No spam -- quarterly updates only, unsubscribe anytime</div>
          </div>
        </div>
        <form class="lca-np-form" id="lca-np-form" novalidate>
          <input
            type="email" name="email" id="lca-np-email"
            class="lca-np-input" placeholder="your@email.com"
            required autocomplete="email"
          />
          <button type="submit" class="lca-np-submit">Send me the guide</button>
          <div class="lca-np-foot">
            By subscribing you agree to our Privacy Policy.
            We respect your inbox.
          </div>
        </form>
      </div>
    </div>
  `,e}function Q(e,t){const n=e.querySelector("#lca-np-body");if(!n)return;n.innerHTML=`
    <div class="lca-np-success">
      <div class="lca-np-check">&#10003;</div>
      <h3>Check your inbox!</h3>
      <p>We sent the PDF to <strong>${t}</strong>. You can also download it right now:</p>
      <a href="${$}" class="lca-np-dl" id="lca-np-dl-btn" download target="_blank" rel="noopener">
        &#11015; Download the PDF
      </a>
    </div>
  `;const o=n.querySelector("#lca-np-dl-btn");o&&o.addEventListener("click",()=>q())}async function X(e){try{const t=await fetch(j,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:G,email:e,name:e,subject:"New Living Cost Atlas newsletter signup",from_name:"Living Cost Atlas",message:`New newsletter signup from popup.
Email: ${e}
Source: popup (free guide lead magnet)`,source:"lca-newsletter-popup",botcheck:""})}),n=await t.json().catch(()=>({}));return{ok:t.ok&&n.success!==!1,data:n}}catch(t){return{ok:!1,error:t.message}}}function Z(e){const t=e.querySelector(".lca-np-close"),n=e.querySelector("#lca-np-form");function o(){W(),V(),e.style.animation="lcaFadeIn .2s ease-out reverse",setTimeout(()=>e.remove(),180),document.removeEventListener("keydown",a)}function a(r){r.key==="Escape"&&o()}t==null||t.addEventListener("click",o),e.addEventListener("click",r=>{r.target===e&&o()}),document.addEventListener("keydown",a),n==null||n.addEventListener("submit",async r=>{r.preventDefault();const i=e.querySelector("#lca-np-email"),d=e.querySelector(".lca-np-submit"),u=((i==null?void 0:i.value)||"").trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u)){const p=e.querySelector(".lca-np-err");p&&p.remove();const g=document.createElement("div");g.className="lca-np-err",g.textContent="Please enter a valid email address.",n.appendChild(g);return}if(d.disabled=!0,d.textContent="Sending...",(await X(u)).ok)Y(u),F("popup"),Q(e,u);else{d.disabled=!1,d.textContent="Send me the guide";const p=document.createElement("div");p.className="lca-np-err",p.textContent="Could not send. Please try again.",n.appendChild(p)}})}function ee(){if(document.querySelector(".lca-np-overlay"))return;K();const e=J();document.body.appendChild(e),Z(e),B(),setTimeout(()=>{var t;return(t=e.querySelector("#lca-np-email"))==null?void 0:t.focus()},400)}function te(){if(!U())return;let e=!1;function t(){e||(e=!0,ee())}const n=setTimeout(t,H);function o(a){a.clientY<=0&&(clearTimeout(n),t(),document.removeEventListener("mouseleave",o))}document.addEventListener("mouseleave",o)}function v(e){typeof gtag=="function"&&gtag("event","page_view",{page_path:e,page_title:document.title,page_location:window.location.href})}function h(e,t={}){typeof gtag=="function"&&gtag("event",e,t)}function ne(){v(window.location.pathname),window.addEventListener("popstate",()=>{setTimeout(()=>v(window.location.pathname),100)}),window.addEventListener("lca:route-rendered",e=>{const t=e&&e.detail&&e.detail.path||window.location.pathname;setTimeout(()=>v(t),100)}),document.addEventListener("click",e=>{const t=e.target.closest("[data-link]");if(!t)return;const n=t.getAttribute("href");n&&(n==="/calculator"&&h("calculator_open",{source:window.location.pathname}),n.startsWith("/city/")&&h("city_view",{city:n.replace("/city/","")}),n==="/destinations"&&h("destinations_open"),n.startsWith("/compare/")&&h("comparison_view",{cities:n.replace("/compare/","")}))}),document.addEventListener("click",e=>{e.target.closest("#share-btn")&&h("comparison_shared",{page:window.location.pathname})})}function oe(){const e=["linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)","linear-gradient(135deg, #064e3b 0%, #065f46 100%)","linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)","linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)","linear-gradient(135deg, #4a044e 0%, #7e22ce 100%)"];document.addEventListener("error",t=>{const n=t.target;if(n.tagName!=="IMG"||n.dataset.fallbackApplied)return;n.dataset.fallbackApplied="true";const o=(n.src||"").split("").reduce((i,d)=>i+d.charCodeAt(0),0),a=e[o%e.length],r=document.createElement("div");r.style.cssText=`
      width:100%; height:100%;
      background:${a};
      display:flex; align-items:center; justify-content:center;
      color:rgba(255,255,255,0.3); font-size:32px;
    `,r.textContent="🌍",n.parentNode.replaceChild(r,n)},!0)}function ae(){document.addEventListener("click",e=>{const t=e.target.closest("#nav-toggle");if(!t)return;const n=document.getElementById("main-nav");if(!n)return;const o=n.classList.toggle("is-open");t.classList.toggle("is-open",o),t.setAttribute("aria-expanded",String(o))}),document.addEventListener("click",e=>{if(!e.target.closest(".nav__link"))return;const t=document.getElementById("main-nav"),n=document.getElementById("nav-toggle");t&&t.classList.remove("is-open"),n&&(n.classList.remove("is-open"),n.setAttribute("aria-expanded","false"))})}function ie(){const e=document.getElementById("app");if(!e){console.error("App root not found");return}oe(),ne(),ae(),C(e,O),te(),document.addEventListener("click",t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;const n=t.target.closest("a[data-link]");if(!n||n.target&&n.target!==""&&n.target!=="_self")return;const o=n.getAttribute("href");if(o&&!/^(?:[a-z]+:)?\/\//i.test(o)&&!(o.startsWith("mailto:")||o.startsWith("tel:"))){if(t.preventDefault(),o===window.location.pathname+window.location.search){window.scrollTo({top:0,behavior:"smooth"});return}I(o)}})}document.addEventListener("DOMContentLoaded",ie);export{c as _,se as a,le as b,ce as c,q as d,F as e,re as t};
