const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-2nljAQLZ.js","assets/MainLayout-Du2sJ_sj.js","assets/cityService-Dc1KzdCT.js","assets/DestinationsPage-D0RAjbDR.js","assets/setPageMeta-BmQKFz2d.js","assets/cityRanking-Bc9to1fF.js","assets/countryDB-CrDm3Fkl.js","assets/Breadcrumb-C87PeGFq.js","assets/CityPage-CM0OH6iK.js","assets/CityComparisonPage-C2Tj0Q6J.js","assets/CalculatorPage-CDtjOUsK.js","assets/NomadPage-TNUjJjUR.js","assets/AboutPage-L3LKo5Yi.js","assets/LegalPage-CUyMCkKM.js","assets/PrivacyPage-BVdk2nio.js","assets/TermsPage-B_cN5gUs.js","assets/BestCitiesHubPage-qFHN3Ipm.js","assets/imageHelper-BIpBZy2g.js","assets/BestCitiesPage-BJxKvA7v.js","assets/BestCountriesPage-DRkDv0o1.js","assets/EbookPage-CjfCSq2U.js","assets/EbooksPage-C9Mj60fP.js","assets/EbookSuccessPage-HoW5J8yp.js"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();let b=null,w=[],h=!1;function L(e,n){b=e,w=n,window.addEventListener("popstate",()=>v()),v()}function S(e){for(const n of w){const t=n.path.split("/"),s=e.split("/");if(t.length!==s.length)continue;const a={};let i=!0;for(let o=0;o<t.length;o++)if(t[o].startsWith(":"))a[t[o].slice(1)]=s[o];else if(t[o]!==s[o]){i=!1;break}if(i)return{route:n,params:a}}return null}async function v(){if(h)return;h=!0;const e=window.location.pathname,n=S(e);try{if(n){const t=await n.route.component(n.params);b.innerHTML=t,n.route.setup&&setTimeout(async()=>{try{await n.route.setup()}catch(s){console.error("Setup error:",s)}},0)}else b.innerHTML=`
        <div class="container py-20 text-center">
          <h1>404 - Page Not Found</h1>
          <p class="mt-4">The page you're looking for doesn't exist.</p>
          <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
        </div>
      `}catch(t){console.error("Route render error:",t),b.innerHTML=`
      <div class="container py-20 text-center">
        <h1>Error loading page</h1>
        <p class="mt-4">Please try refreshing.</p>
        <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
      </div>
    `}finally{h=!1}}const I="modulepreload",C=function(e){return"/"+e},x={},l=function(n,t,s){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(t.map(u=>{if(u=C(u),u in x)return;x[u]=!0;const m=u.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${y}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":I,m||(p.as="script"),p.crossOrigin="",p.href=u,c&&p.setAttribute("nonce",c),document.head.appendChild(p),m)return new Promise((f,P)=>{p.addEventListener("load",f),p.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return a.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return n().catch(i)})};function d(e){let n=null;return{load:()=>(n||(n=e()),n)}}const r={home:d(()=>l(()=>import("./HomePage-2nljAQLZ.js"),__vite__mapDeps([0,1,2]))),destinations:d(()=>l(()=>import("./DestinationsPage-D0RAjbDR.js"),__vite__mapDeps([3,4,1,2,5,6,7]))),city:d(()=>l(()=>import("./CityPage-CM0OH6iK.js"),__vite__mapDeps([8,1,2,4,7]))),comparison:d(()=>l(()=>import("./CityComparisonPage-C2Tj0Q6J.js"),__vite__mapDeps([9,1,2,4,7]))),calculator:d(()=>l(()=>import("./CalculatorPage-CDtjOUsK.js"),__vite__mapDeps([10,1,2,7,4]))),nomad:d(()=>l(()=>import("./NomadPage-TNUjJjUR.js"),__vite__mapDeps([11,1,2,4,7]))),about:d(()=>l(()=>import("./AboutPage-L3LKo5Yi.js"),__vite__mapDeps([12,4,1,2]))),legal:d(()=>l(()=>import("./LegalPage-CUyMCkKM.js"),__vite__mapDeps([13,1]))),privacy:d(()=>l(()=>import("./PrivacyPage-BVdk2nio.js"),__vite__mapDeps([14,1]))),terms:d(()=>l(()=>import("./TermsPage-B_cN5gUs.js"),__vite__mapDeps([15,1]))),bestCitiesHub:d(()=>l(()=>import("./BestCitiesHubPage-qFHN3Ipm.js"),__vite__mapDeps([16,1,7,4,2,17]))),bestCities:d(()=>l(()=>import("./BestCitiesPage-BJxKvA7v.js"),__vite__mapDeps([18,1,2,5,6,4,17,7]))),bestCountries:d(()=>l(()=>import("./BestCountriesPage-DRkDv0o1.js"),__vite__mapDeps([19,1,6,2,4,17,7]))),ebook:d(()=>l(()=>import("./EbookPage-CjfCSq2U.js"),__vite__mapDeps([20,4,1]))),ebooks:d(()=>l(()=>import("./EbooksPage-C9Mj60fP.js"),__vite__mapDeps([21,4,1]))),ebookSuccess:d(()=>l(()=>import("./EbookSuccessPage-HoW5J8yp.js"),__vite__mapDeps([22,4,1])))},D=[{path:"/",component:async e=>(await r.home.load()).HomePage(e),setup:async()=>(await r.home.load()).setupHomeMapInteractivity()},{path:"/destinations",component:async e=>(await r.destinations.load()).DestinationsPage(e),setup:async()=>(await r.destinations.load()).setupDestinationsInteractivity()},{path:"/city/:slug",component:async e=>(await r.city.load()).CityPage(e),setup:async()=>(await r.city.load()).setupCityPageInteractivity()},{path:"/compare/:cities",component:async e=>(await r.comparison.load()).CityComparisonPage(e)},{path:"/calculator",component:async e=>(await r.calculator.load()).CalculatorPage(e),setup:async()=>(await r.calculator.load()).setupCalculatorInteractivity()},{path:"/nomad",component:async e=>(await r.nomad.load()).NomadPage(e),setup:async()=>(await r.nomad.load()).setupNomadPageInteractivity()},{path:"/about",component:async e=>(await r.about.load()).AboutPage(e)},{path:"/legal",component:async e=>(await r.legal.load()).LegalPage(e)},{path:"/privacy",component:async e=>(await r.privacy.load()).PrivacyPage(e)},{path:"/terms",component:async e=>(await r.terms.load()).TermsPage(e)},{path:"/best-cities",component:async e=>(await r.bestCitiesHub.load()).BestCitiesHubPage(e)},{path:"/best-cities/:country/:profile",component:async e=>(await r.bestCities.load()).BestCitiesPage(e)},{path:"/best-cities/:country",component:async e=>(await r.bestCities.load()).BestCitiesPage(e)},{path:"/best-countries",component:async e=>(await r.bestCountries.load()).BestCountriesPage(e)},{path:"/best-countries/:profile",component:async e=>(await r.bestCountries.load()).BestCountriesPage(e)},{path:"/ebooks",component:async e=>(await r.ebooks.load()).EbooksPage(e)},{path:"/ebook/:slug/success",component:async e=>(await r.ebookSuccess.load()).EbookSuccessPage(e)},{path:"/ebook/:slug",component:async e=>(await r.ebook.load()).EbookPage(e),setup:async()=>(await r.ebook.load()).setupEbookPageInteractivity()}],E="lca_newsletter_seen",k="lca_newsletter_subscribed",A=7,T=3e4,R="/ebooks/LivingCostAtlas_FreeGuide_Top10_2026.pdf";function O(){if(localStorage.getItem(k))return!1;const e=localStorage.getItem(E);return!(e&&(Date.now()-Number(e))/864e5<A)}function z(){localStorage.setItem(E,String(Date.now()))}function N(e){localStorage.setItem(k,e)}function F(){if(document.getElementById("lca-np-styles"))return;const e=document.createElement("style");e.id="lca-np-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function V(){const e=document.createElement("div");return e.className="lca-np-overlay",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby","lca-np-title"),e.innerHTML=`
    <div class="lca-np-modal">
      <button class="lca-np-close" aria-label="Close">&times;</button>
      <div class="lca-np-hero">
        <div class="lca-np-badge">&#127873; FREE DOWNLOAD</div>
        <h2 class="lca-np-title" id="lca-np-title">Top 10 Cities for Digital Nomads 2026</h2>
        <p class="lca-np-sub">Get our curated preview guide -- rankings, monthly budgets, and WiFi data for 10 top destinations. Instant PDF.</p>
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
  `,e}function q(e,n){const t=e.querySelector("#lca-np-body");t&&(t.innerHTML=`
    <div class="lca-np-success">
      <div class="lca-np-check">&#10003;</div>
      <h3>Check your inbox!</h3>
      <p>We sent the PDF to <strong>${n}</strong>. You can also download it right now:</p>
      <a href="${R}" class="lca-np-dl" download target="_blank" rel="noopener">
        &#11015; Download the PDF
      </a>
    </div>
  `)}async function B(e){return console.warn("[NewsletterPopup] Web3Forms access key not configured. Simulating success."),{ok:!0}}function H(e){const n=e.querySelector(".lca-np-close"),t=e.querySelector("#lca-np-form");function s(){z(),e.style.animation="lcaFadeIn .2s ease-out reverse",setTimeout(()=>e.remove(),180),document.removeEventListener("keydown",a)}function a(i){i.key==="Escape"&&s()}n==null||n.addEventListener("click",s),e.addEventListener("click",i=>{i.target===e&&s()}),document.addEventListener("keydown",a),t==null||t.addEventListener("submit",async i=>{i.preventDefault();const o=e.querySelector("#lca-np-email"),c=e.querySelector(".lca-np-submit"),u=((o==null?void 0:o.value)||"").trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u)){const p=e.querySelector(".lca-np-err");p&&p.remove();const f=document.createElement("div");f.className="lca-np-err",f.textContent="Please enter a valid email address.",t.appendChild(f);return}if(c.disabled=!0,c.textContent="Sending...",(await B()).ok)N(u),typeof window.gtag=="function"&&window.gtag("event","newsletter_signup",{source:"popup"}),q(e,u);else{c.disabled=!1,c.textContent="Send me the guide";const p=document.createElement("div");p.className="lca-np-err",p.textContent="Could not send. Please try again.",t.appendChild(p)}})}function M(){if(document.querySelector(".lca-np-overlay"))return;F();const e=V();document.body.appendChild(e),H(e),setTimeout(()=>{var n;return(n=e.querySelector("#lca-np-email"))==null?void 0:n.focus()},400)}function W(){if(!O())return;let e=!1;function n(){e||(e=!0,M())}const t=setTimeout(n,T);function s(a){a.clientY<=0&&(clearTimeout(t),n(),document.removeEventListener("mouseleave",s))}document.addEventListener("mouseleave",s)}function _(e){typeof gtag=="function"&&gtag("event","page_view",{page_path:e,page_title:document.title,page_location:window.location.href})}function g(e,n={}){typeof gtag=="function"&&gtag("event",e,n)}function G(){_(window.location.pathname),window.addEventListener("popstate",()=>{setTimeout(()=>_(window.location.pathname),100)}),document.addEventListener("click",e=>{const n=e.target.closest("[data-link]");if(!n)return;const t=n.getAttribute("href");t&&(t==="/calculator"&&g("calculator_open",{source:window.location.pathname}),t.startsWith("/city/")&&g("city_view",{city:t.replace("/city/","")}),t==="/destinations"&&g("destinations_open"),t.startsWith("/compare/")&&g("comparison_view",{cities:t.replace("/compare/","")}))}),document.addEventListener("click",e=>{e.target.closest("#share-btn")&&g("comparison_shared",{page:window.location.pathname})})}function Y(){const e=["linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)","linear-gradient(135deg, #064e3b 0%, #065f46 100%)","linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)","linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)","linear-gradient(135deg, #4a044e 0%, #7e22ce 100%)"];document.addEventListener("error",n=>{const t=n.target;if(t.tagName!=="IMG"||t.dataset.fallbackApplied)return;t.dataset.fallbackApplied="true";const s=(t.src||"").split("").reduce((o,c)=>o+c.charCodeAt(0),0),a=e[s%e.length],i=document.createElement("div");i.style.cssText=`
      width:100%; height:100%;
      background:${a};
      display:flex; align-items:center; justify-content:center;
      color:rgba(255,255,255,0.3); font-size:32px;
    `,i.textContent="🌍",t.parentNode.replaceChild(i,t)},!0)}function j(){document.addEventListener("click",e=>{const n=e.target.closest("#nav-toggle");if(!n)return;const t=document.getElementById("main-nav");if(!t)return;const s=t.classList.toggle("is-open");n.classList.toggle("is-open",s),n.setAttribute("aria-expanded",String(s))}),document.addEventListener("click",e=>{if(!e.target.closest(".nav__link"))return;const n=document.getElementById("main-nav"),t=document.getElementById("nav-toggle");n&&n.classList.remove("is-open"),t&&(t.classList.remove("is-open"),t.setAttribute("aria-expanded","false"))})}function U(){const e=document.getElementById("app");if(!e){console.error("App root not found");return}Y(),G(),j(),L(e,D),W(),document.addEventListener("click",n=>{const t=n.target.closest("a[data-link]");if(t){n.preventDefault();const s=t.getAttribute("href");window.history.pushState({},"",s),window.dispatchEvent(new PopStateEvent("popstate"))}})}document.addEventListener("DOMContentLoaded",U);export{l as _};
