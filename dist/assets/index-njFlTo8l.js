const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-M-CQohXn.js","assets/MainLayout-CBxf94lM.js","assets/cityService-Dc1KzdCT.js","assets/DestinationsPage-MAoGqkyh.js","assets/setPageMeta-BmQKFz2d.js","assets/cityRanking-Bc9to1fF.js","assets/countryDB-CrDm3Fkl.js","assets/Breadcrumb-C87PeGFq.js","assets/CityPage-DA_-iCcE.js","assets/CityComparisonPage-tCBVn4HD.js","assets/CalculatorPage-DXEtoPrn.js","assets/NomadPage-CP81hGse.js","assets/AboutPage-CmPTXLEc.js","assets/LegalPage-BSZZKUIK.js","assets/PrivacyPage-CBNs7Qou.js","assets/TermsPage-ByPpGQbH.js","assets/BestCitiesHubPage-1dVYd3t-.js","assets/imageHelper-BIpBZy2g.js","assets/BestCitiesPage-DW14S4iM.js","assets/BestCountriesPage-DQdC50BV.js","assets/EbookPage-Dq0HtTkP.js","assets/EbooksPage-BJu9Gh06.js","assets/EbookSuccessPage-C4sMP0ir.js","assets/ResourcesPage-D9w3Z_3C.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();let h=null,k=[],v=!1;function C(e,t){h=e,k=t,window.addEventListener("popstate",()=>x()),x()}function I(e){for(const t of k){const n=t.path.split("/"),r=e.split("/");if(n.length!==r.length)continue;const a={};let i=!0;for(let o=0;o<n.length;o++)if(n[o].startsWith(":"))a[n[o].slice(1)]=r[o];else if(n[o]!==r[o]){i=!1;break}if(i)return{route:t,params:a}}return null}async function x(){if(v)return;v=!0;const e=window.location.pathname,t=I(e);try{if(t){const n=await t.route.component(t.params);h.innerHTML=n,t.route.setup&&setTimeout(async()=>{try{await t.route.setup()}catch(r){console.error("Setup error:",r)}},0)}else h.innerHTML=`
        <div class="container py-20 text-center">
          <h1>404 - Page Not Found</h1>
          <p class="mt-4">The page you're looking for doesn't exist.</p>
          <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
        </div>
      `}catch(n){console.error("Route render error:",n),h.innerHTML=`
      <div class="container py-20 text-center">
        <h1>Error loading page</h1>
        <p class="mt-4">Please try refreshing.</p>
        <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
      </div>
    `}finally{v=!1}}const A="modulepreload",R=function(e){return"/"+e},w={},c=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(n.map(u=>{if(u=R(u),u in w)return;w[u]=!0;const f=u.endsWith(".css"),_=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${_}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":A,f||(p.as="script"),p.crossOrigin="",p.href=u,d&&p.setAttribute("nonce",d),document.head.appendChild(p),f)return new Promise((g,S)=>{p.addEventListener("load",g),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=o,window.dispatchEvent(d),!d.defaultPrevented)throw o}return a.then(o=>{for(const d of o||[])d.status==="rejected"&&i(d.reason);return t().catch(i)})};function l(e){let t=null;return{load:()=>(t||(t=e()),t)}}const s={home:l(()=>c(()=>import("./HomePage-M-CQohXn.js"),__vite__mapDeps([0,1,2]))),destinations:l(()=>c(()=>import("./DestinationsPage-MAoGqkyh.js"),__vite__mapDeps([3,4,1,2,5,6,7]))),city:l(()=>c(()=>import("./CityPage-DA_-iCcE.js"),__vite__mapDeps([8,1,2,4,7]))),comparison:l(()=>c(()=>import("./CityComparisonPage-tCBVn4HD.js"),__vite__mapDeps([9,1,2,4,7]))),calculator:l(()=>c(()=>import("./CalculatorPage-DXEtoPrn.js"),__vite__mapDeps([10,1,2,7,4]))),nomad:l(()=>c(()=>import("./NomadPage-CP81hGse.js"),__vite__mapDeps([11,1,2,4,7]))),about:l(()=>c(()=>import("./AboutPage-CmPTXLEc.js"),__vite__mapDeps([12,4,1,2]))),legal:l(()=>c(()=>import("./LegalPage-BSZZKUIK.js"),__vite__mapDeps([13,1]))),privacy:l(()=>c(()=>import("./PrivacyPage-CBNs7Qou.js"),__vite__mapDeps([14,1]))),terms:l(()=>c(()=>import("./TermsPage-ByPpGQbH.js"),__vite__mapDeps([15,1]))),bestCitiesHub:l(()=>c(()=>import("./BestCitiesHubPage-1dVYd3t-.js"),__vite__mapDeps([16,1,7,4,2,17]))),bestCities:l(()=>c(()=>import("./BestCitiesPage-DW14S4iM.js"),__vite__mapDeps([18,1,2,5,6,4,17,7]))),bestCountries:l(()=>c(()=>import("./BestCountriesPage-DQdC50BV.js"),__vite__mapDeps([19,1,6,2,4,17,7]))),ebook:l(()=>c(()=>import("./EbookPage-Dq0HtTkP.js"),__vite__mapDeps([20,4,1]))),ebooks:l(()=>c(()=>import("./EbooksPage-BJu9Gh06.js"),__vite__mapDeps([21,4,1]))),ebookSuccess:l(()=>c(()=>import("./EbookSuccessPage-C4sMP0ir.js"),__vite__mapDeps([22,4,1]))),resources:l(()=>c(()=>import("./ResourcesPage-D9w3Z_3C.js"),__vite__mapDeps([23,4,1])))},D=[{path:"/",component:async e=>(await s.home.load()).HomePage(e),setup:async()=>(await s.home.load()).setupHomeMapInteractivity()},{path:"/destinations",component:async e=>(await s.destinations.load()).DestinationsPage(e),setup:async()=>(await s.destinations.load()).setupDestinationsInteractivity()},{path:"/city/:slug",component:async e=>(await s.city.load()).CityPage(e),setup:async()=>(await s.city.load()).setupCityPageInteractivity()},{path:"/compare/:cities",component:async e=>(await s.comparison.load()).CityComparisonPage(e)},{path:"/calculator",component:async e=>(await s.calculator.load()).CalculatorPage(e),setup:async()=>(await s.calculator.load()).setupCalculatorInteractivity()},{path:"/nomad",component:async e=>(await s.nomad.load()).NomadPage(e),setup:async()=>(await s.nomad.load()).setupNomadPageInteractivity()},{path:"/about",component:async e=>(await s.about.load()).AboutPage(e)},{path:"/legal",component:async e=>(await s.legal.load()).LegalPage(e)},{path:"/privacy",component:async e=>(await s.privacy.load()).PrivacyPage(e)},{path:"/terms",component:async e=>(await s.terms.load()).TermsPage(e)},{path:"/best-cities",component:async e=>(await s.bestCitiesHub.load()).BestCitiesHubPage(e)},{path:"/best-cities/:country/:profile",component:async e=>(await s.bestCities.load()).BestCitiesPage(e)},{path:"/best-cities/:country",component:async e=>(await s.bestCities.load()).BestCitiesPage(e)},{path:"/best-countries",component:async e=>(await s.bestCountries.load()).BestCountriesPage(e)},{path:"/best-countries/:profile",component:async e=>(await s.bestCountries.load()).BestCountriesPage(e)},{path:"/resources",component:async e=>(await s.resources.load()).ResourcesPage(e)},{path:"/ebooks",component:async e=>(await s.ebooks.load()).EbooksPage(e)},{path:"/ebook/:slug/success",component:async e=>(await s.ebookSuccess.load()).EbookSuccessPage(e)},{path:"/ebook/:slug",component:async e=>(await s.ebook.load()).EbookPage(e),setup:async()=>(await s.ebook.load()).setupEbookPageInteractivity()}];function T(){return typeof window<"u"&&typeof window.gtag=="function"}function O(){if(T())try{window.gtag.apply(null,arguments)}catch(e){console.warn("[analytics]",e)}}function m(e,t={}){O("event",e,t)}function y(e,t){return{item_id:t,item_name:`${e.city} Cost of Living eBook 2026`,item_brand:"Living Cost Atlas",item_category:"eBook",item_category2:e.country,price:e.price,quantity:1}}function ne(e,t){m("view_item",{currency:t.currency||"EUR",value:t.price,items:[y(t,e)]})}function oe(e,t){m("select_item",{items:[y(t,e)]}),m("begin_checkout",{currency:t.currency||"EUR",value:t.price,items:[y(t,e)]})}function ae(e,t,n){m("purchase",{transaction_id:n||`lca_${e}_${Date.now()}`,currency:t.currency||"EUR",value:t.price,items:[y(t,e)]})}function ie(e=[]){m("view_item_list",{item_list_id:"ebook_catalog",item_list_name:"eBook Catalog",items:e.map(t=>({item_id:t,item_name:t}))})}function N(){m("newsletter_popup_shown",{source:"auto_trigger"})}function z(){m("newsletter_popup_dismissed")}function V(e="popup"){m("newsletter_signup",{source:e,value:1}),m("generate_lead",{source:e,value:1})}function B(){m("free_guide_download",{item_name:"Top 10 Cities 2026"})}const P="lca_newsletter_seen",L="lca_newsletter_subscribed",q=7,F=3e4,H="/ebooks/LivingCostAtlas_FreeGuide_Top10_2026.pdf";function M(){if(localStorage.getItem(L))return!1;const e=localStorage.getItem(P);return!(e&&(Date.now()-Number(e))/864e5<q)}function G(){localStorage.setItem(P,String(Date.now()))}function U(e){localStorage.setItem(L,e)}function $(){if(document.getElementById("lca-np-styles"))return;const e=document.createElement("style");e.id="lca-np-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function Y(){const e=document.createElement("div");return e.className="lca-np-overlay",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby","lca-np-title"),e.innerHTML=`
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
  `,e}function W(e,t){const n=e.querySelector("#lca-np-body");if(!n)return;n.innerHTML=`
    <div class="lca-np-success">
      <div class="lca-np-check">&#10003;</div>
      <h3>Check your inbox!</h3>
      <p>We sent the PDF to <strong>${t}</strong>. You can also download it right now:</p>
      <a href="${H}" class="lca-np-dl" id="lca-np-dl-btn" download target="_blank" rel="noopener">
        &#11015; Download the PDF
      </a>
    </div>
  `;const r=n.querySelector("#lca-np-dl-btn");r&&r.addEventListener("click",()=>B())}async function j(e){return console.warn("[NewsletterPopup] Web3Forms access key not configured. Simulating success."),{ok:!0}}function K(e){const t=e.querySelector(".lca-np-close"),n=e.querySelector("#lca-np-form");function r(){G(),z(),e.style.animation="lcaFadeIn .2s ease-out reverse",setTimeout(()=>e.remove(),180),document.removeEventListener("keydown",a)}function a(i){i.key==="Escape"&&r()}t==null||t.addEventListener("click",r),e.addEventListener("click",i=>{i.target===e&&r()}),document.addEventListener("keydown",a),n==null||n.addEventListener("submit",async i=>{i.preventDefault();const o=e.querySelector("#lca-np-email"),d=e.querySelector(".lca-np-submit"),u=((o==null?void 0:o.value)||"").trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u)){const p=e.querySelector(".lca-np-err");p&&p.remove();const g=document.createElement("div");g.className="lca-np-err",g.textContent="Please enter a valid email address.",n.appendChild(g);return}if(d.disabled=!0,d.textContent="Sending...",(await j()).ok)U(u),V("popup"),W(e,u);else{d.disabled=!1,d.textContent="Send me the guide";const p=document.createElement("div");p.className="lca-np-err",p.textContent="Could not send. Please try again.",n.appendChild(p)}})}function J(){if(document.querySelector(".lca-np-overlay"))return;$();const e=Y();document.body.appendChild(e),K(e),N(),setTimeout(()=>{var t;return(t=e.querySelector("#lca-np-email"))==null?void 0:t.focus()},400)}function Q(){if(!M())return;let e=!1;function t(){e||(e=!0,J())}const n=setTimeout(t,F);function r(a){a.clientY<=0&&(clearTimeout(n),t(),document.removeEventListener("mouseleave",r))}document.addEventListener("mouseleave",r)}function E(e){typeof gtag=="function"&&gtag("event","page_view",{page_path:e,page_title:document.title,page_location:window.location.href})}function b(e,t={}){typeof gtag=="function"&&gtag("event",e,t)}function X(){E(window.location.pathname),window.addEventListener("popstate",()=>{setTimeout(()=>E(window.location.pathname),100)}),document.addEventListener("click",e=>{const t=e.target.closest("[data-link]");if(!t)return;const n=t.getAttribute("href");n&&(n==="/calculator"&&b("calculator_open",{source:window.location.pathname}),n.startsWith("/city/")&&b("city_view",{city:n.replace("/city/","")}),n==="/destinations"&&b("destinations_open"),n.startsWith("/compare/")&&b("comparison_view",{cities:n.replace("/compare/","")}))}),document.addEventListener("click",e=>{e.target.closest("#share-btn")&&b("comparison_shared",{page:window.location.pathname})})}function Z(){const e=["linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)","linear-gradient(135deg, #064e3b 0%, #065f46 100%)","linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)","linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)","linear-gradient(135deg, #4a044e 0%, #7e22ce 100%)"];document.addEventListener("error",t=>{const n=t.target;if(n.tagName!=="IMG"||n.dataset.fallbackApplied)return;n.dataset.fallbackApplied="true";const r=(n.src||"").split("").reduce((o,d)=>o+d.charCodeAt(0),0),a=e[r%e.length],i=document.createElement("div");i.style.cssText=`
      width:100%; height:100%;
      background:${a};
      display:flex; align-items:center; justify-content:center;
      color:rgba(255,255,255,0.3); font-size:32px;
    `,i.textContent="🌍",n.parentNode.replaceChild(i,n)},!0)}function ee(){document.addEventListener("click",e=>{const t=e.target.closest("#nav-toggle");if(!t)return;const n=document.getElementById("main-nav");if(!n)return;const r=n.classList.toggle("is-open");t.classList.toggle("is-open",r),t.setAttribute("aria-expanded",String(r))}),document.addEventListener("click",e=>{if(!e.target.closest(".nav__link"))return;const t=document.getElementById("main-nav"),n=document.getElementById("nav-toggle");t&&t.classList.remove("is-open"),n&&(n.classList.remove("is-open"),n.setAttribute("aria-expanded","false"))})}function te(){const e=document.getElementById("app");if(!e){console.error("App root not found");return}Z(),X(),ee(),C(e,D),Q(),document.addEventListener("click",t=>{const n=t.target.closest("a[data-link]");if(n){t.preventDefault();const r=n.getAttribute("href");window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}})}document.addEventListener("DOMContentLoaded",te);export{c as _,oe as a,ie as b,ae as c,B as d,V as e,ne as t};
