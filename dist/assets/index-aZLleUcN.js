const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-Xxf_euvE.js","assets/MainLayout-Du2sJ_sj.js","assets/cityService-Dc1KzdCT.js","assets/DestinationsPage-D0RAjbDR.js","assets/setPageMeta-BmQKFz2d.js","assets/cityRanking-Bc9to1fF.js","assets/countryDB-CrDm3Fkl.js","assets/Breadcrumb-C87PeGFq.js","assets/CityPage-CM0OH6iK.js","assets/CityComparisonPage-C2Tj0Q6J.js","assets/CalculatorPage-CDtjOUsK.js","assets/NomadPage-TNUjJjUR.js","assets/AboutPage-L3LKo5Yi.js","assets/LegalPage-CUyMCkKM.js","assets/PrivacyPage-BVdk2nio.js","assets/TermsPage-B_cN5gUs.js","assets/BestCitiesHubPage-qFHN3Ipm.js","assets/imageHelper-BIpBZy2g.js","assets/BestCitiesPage-BJxKvA7v.js","assets/BestCountriesPage-DRkDv0o1.js","assets/EbookPage-OymurVJq.js","assets/EbooksPage-C9Mj60fP.js","assets/EbookSuccessPage-HoW5J8yp.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();let b=null,E=[],h=!1;function S(e,t){b=e,E=t,window.addEventListener("popstate",()=>v()),v()}function I(e){for(const t of E){const n=t.path.split("/"),s=e.split("/");if(n.length!==s.length)continue;const a={};let i=!0;for(let o=0;o<n.length;o++)if(n[o].startsWith(":"))a[n[o].slice(1)]=s[o];else if(n[o]!==s[o]){i=!1;break}if(i)return{route:t,params:a}}return null}async function v(){if(h)return;h=!0;const e=window.location.pathname,t=I(e);try{if(t){const n=await t.route.component(t.params);b.innerHTML=n,t.route.setup&&setTimeout(async()=>{try{await t.route.setup()}catch(s){console.error("Setup error:",s)}},0)}else b.innerHTML=`
        <div class="container py-20 text-center">
          <h1>404 - Page Not Found</h1>
          <p class="mt-4">The page you're looking for doesn't exist.</p>
          <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
        </div>
      `}catch(n){console.error("Route render error:",n),b.innerHTML=`
      <div class="container py-20 text-center">
        <h1>Error loading page</h1>
        <p class="mt-4">Please try refreshing.</p>
        <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
      </div>
    `}finally{h=!1}}const C="modulepreload",D=function(e){return"/"+e},x={},l=function(t,n,s){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(n.map(u=>{if(u=D(u),u in x)return;x[u]=!0;const m=u.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${y}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":C,m||(p.as="script"),p.crossOrigin="",p.href=u,c&&p.setAttribute("nonce",c),document.head.appendChild(p),m)return new Promise((f,L)=>{p.addEventListener("load",f),p.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return a.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};function d(e){let t=null;return{load:()=>(t||(t=e()),t)}}const r={home:d(()=>l(()=>import("./HomePage-Xxf_euvE.js"),__vite__mapDeps([0,1,2]))),destinations:d(()=>l(()=>import("./DestinationsPage-D0RAjbDR.js"),__vite__mapDeps([3,4,1,2,5,6,7]))),city:d(()=>l(()=>import("./CityPage-CM0OH6iK.js"),__vite__mapDeps([8,1,2,4,7]))),comparison:d(()=>l(()=>import("./CityComparisonPage-C2Tj0Q6J.js"),__vite__mapDeps([9,1,2,4,7]))),calculator:d(()=>l(()=>import("./CalculatorPage-CDtjOUsK.js"),__vite__mapDeps([10,1,2,7,4]))),nomad:d(()=>l(()=>import("./NomadPage-TNUjJjUR.js"),__vite__mapDeps([11,1,2,4,7]))),about:d(()=>l(()=>import("./AboutPage-L3LKo5Yi.js"),__vite__mapDeps([12,4,1,2]))),legal:d(()=>l(()=>import("./LegalPage-CUyMCkKM.js"),__vite__mapDeps([13,1]))),privacy:d(()=>l(()=>import("./PrivacyPage-BVdk2nio.js"),__vite__mapDeps([14,1]))),terms:d(()=>l(()=>import("./TermsPage-B_cN5gUs.js"),__vite__mapDeps([15,1]))),bestCitiesHub:d(()=>l(()=>import("./BestCitiesHubPage-qFHN3Ipm.js"),__vite__mapDeps([16,1,7,4,2,17]))),bestCities:d(()=>l(()=>import("./BestCitiesPage-BJxKvA7v.js"),__vite__mapDeps([18,1,2,5,6,4,17,7]))),bestCountries:d(()=>l(()=>import("./BestCountriesPage-DRkDv0o1.js"),__vite__mapDeps([19,1,6,2,4,17,7]))),ebook:d(()=>l(()=>import("./EbookPage-OymurVJq.js"),__vite__mapDeps([20,4,1]))),ebooks:d(()=>l(()=>import("./EbooksPage-C9Mj60fP.js"),__vite__mapDeps([21,4,1]))),ebookSuccess:d(()=>l(()=>import("./EbookSuccessPage-HoW5J8yp.js"),__vite__mapDeps([22,4,1])))},R=[{path:"/",component:async e=>(await r.home.load()).HomePage(e),setup:async()=>(await r.home.load()).setupHomeMapInteractivity()},{path:"/destinations",component:async e=>(await r.destinations.load()).DestinationsPage(e),setup:async()=>(await r.destinations.load()).setupDestinationsInteractivity()},{path:"/city/:slug",component:async e=>(await r.city.load()).CityPage(e),setup:async()=>(await r.city.load()).setupCityPageInteractivity()},{path:"/compare/:cities",component:async e=>(await r.comparison.load()).CityComparisonPage(e)},{path:"/calculator",component:async e=>(await r.calculator.load()).CalculatorPage(e),setup:async()=>(await r.calculator.load()).setupCalculatorInteractivity()},{path:"/nomad",component:async e=>(await r.nomad.load()).NomadPage(e),setup:async()=>(await r.nomad.load()).setupNomadPageInteractivity()},{path:"/about",component:async e=>(await r.about.load()).AboutPage(e)},{path:"/legal",component:async e=>(await r.legal.load()).LegalPage(e)},{path:"/privacy",component:async e=>(await r.privacy.load()).PrivacyPage(e)},{path:"/terms",component:async e=>(await r.terms.load()).TermsPage(e)},{path:"/best-cities",component:async e=>(await r.bestCitiesHub.load()).BestCitiesHubPage(e)},{path:"/best-cities/:country/:profile",component:async e=>(await r.bestCities.load()).BestCitiesPage(e)},{path:"/best-cities/:country",component:async e=>(await r.bestCities.load()).BestCitiesPage(e)},{path:"/best-countries",component:async e=>(await r.bestCountries.load()).BestCountriesPage(e)},{path:"/best-countries/:profile",component:async e=>(await r.bestCountries.load()).BestCountriesPage(e)},{path:"/ebooks",component:async e=>(await r.ebooks.load()).EbooksPage(e)},{path:"/ebook/:slug/success",component:async e=>(await r.ebookSuccess.load()).EbookSuccessPage(e)},{path:"/ebook/:slug",component:async e=>(await r.ebook.load()).EbookPage(e),setup:async()=>(await r.ebook.load()).setupEbookPageInteractivity()}],k="lca_newsletter_seen",P="lca_newsletter_subscribed",A=7,T=3e4,O="/ebooks/LivingCostAtlas_FreeGuide_Top10_2026.pdf",_="https://formspree.io/f/YOUR_FORM_ID";function N(){if(localStorage.getItem(P))return!1;const e=localStorage.getItem(k);return!(e&&(Date.now()-Number(e))/864e5<A)}function z(){localStorage.setItem(k,String(Date.now()))}function F(e){localStorage.setItem(P,e)}function V(){if(document.getElementById("lca-np-styles"))return;const e=document.createElement("style");e.id="lca-np-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function M(){const e=document.createElement("div");return e.className="lca-np-overlay",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby","lca-np-title"),e.innerHTML=`
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
  `,e}function q(e,t){const n=e.querySelector("#lca-np-body");n&&(n.innerHTML=`
    <div class="lca-np-success">
      <div class="lca-np-check">&#10003;</div>
      <h3>Check your inbox!</h3>
      <p>We sent the PDF to <strong>${t}</strong>. You can also download it right now:</p>
      <a href="${O}" class="lca-np-dl" download target="_blank" rel="noopener">
        &#11015; Download the PDF
      </a>
    </div>
  `)}async function B(e){if(_.includes("YOUR_FORM_ID"))return console.warn("[NewsletterPopup] Formspree endpoint not configured. Simulating success."),{ok:!0};try{return{ok:(await fetch(_,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:e,source:"lca-newsletter-popup"})})).ok}}catch(t){return{ok:!1,error:t.message}}}function H(e){const t=e.querySelector(".lca-np-close"),n=e.querySelector("#lca-np-form");function s(){z(),e.style.animation="lcaFadeIn .2s ease-out reverse",setTimeout(()=>e.remove(),180),document.removeEventListener("keydown",a)}function a(i){i.key==="Escape"&&s()}t==null||t.addEventListener("click",s),e.addEventListener("click",i=>{i.target===e&&s()}),document.addEventListener("keydown",a),n==null||n.addEventListener("submit",async i=>{i.preventDefault();const o=e.querySelector("#lca-np-email"),c=e.querySelector(".lca-np-submit"),u=((o==null?void 0:o.value)||"").trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u)){const p=e.querySelector(".lca-np-err");p&&p.remove();const f=document.createElement("div");f.className="lca-np-err",f.textContent="Please enter a valid email address.",n.appendChild(f);return}if(c.disabled=!0,c.textContent="Sending...",(await B(u)).ok)F(u),typeof window.gtag=="function"&&window.gtag("event","newsletter_signup",{source:"popup"}),q(e,u);else{c.disabled=!1,c.textContent="Send me the guide";const p=document.createElement("div");p.className="lca-np-err",p.textContent="Could not send. Please try again.",n.appendChild(p)}})}function Y(){if(document.querySelector(".lca-np-overlay"))return;V();const e=M();document.body.appendChild(e),H(e),setTimeout(()=>{var t;return(t=e.querySelector("#lca-np-email"))==null?void 0:t.focus()},400)}function j(){if(!N())return;let e=!1;function t(){e||(e=!0,Y())}const n=setTimeout(t,T);function s(a){a.clientY<=0&&(clearTimeout(n),t(),document.removeEventListener("mouseleave",s))}document.addEventListener("mouseleave",s)}function w(e){typeof gtag=="function"&&gtag("event","page_view",{page_path:e,page_title:document.title,page_location:window.location.href})}function g(e,t={}){typeof gtag=="function"&&gtag("event",e,t)}function G(){w(window.location.pathname),window.addEventListener("popstate",()=>{setTimeout(()=>w(window.location.pathname),100)}),document.addEventListener("click",e=>{const t=e.target.closest("[data-link]");if(!t)return;const n=t.getAttribute("href");n&&(n==="/calculator"&&g("calculator_open",{source:window.location.pathname}),n.startsWith("/city/")&&g("city_view",{city:n.replace("/city/","")}),n==="/destinations"&&g("destinations_open"),n.startsWith("/compare/")&&g("comparison_view",{cities:n.replace("/compare/","")}))}),document.addEventListener("click",e=>{e.target.closest("#share-btn")&&g("comparison_shared",{page:window.location.pathname})})}function U(){const e=["linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)","linear-gradient(135deg, #064e3b 0%, #065f46 100%)","linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)","linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)","linear-gradient(135deg, #4a044e 0%, #7e22ce 100%)"];document.addEventListener("error",t=>{const n=t.target;if(n.tagName!=="IMG"||n.dataset.fallbackApplied)return;n.dataset.fallbackApplied="true";const s=(n.src||"").split("").reduce((o,c)=>o+c.charCodeAt(0),0),a=e[s%e.length],i=document.createElement("div");i.style.cssText=`
      width:100%; height:100%;
      background:${a};
      display:flex; align-items:center; justify-content:center;
      color:rgba(255,255,255,0.3); font-size:32px;
    `,i.textContent="🌍",n.parentNode.replaceChild(i,n)},!0)}function W(){document.addEventListener("click",e=>{const t=e.target.closest("#nav-toggle");if(!t)return;const n=document.getElementById("main-nav");if(!n)return;const s=n.classList.toggle("is-open");t.classList.toggle("is-open",s),t.setAttribute("aria-expanded",String(s))}),document.addEventListener("click",e=>{if(!e.target.closest(".nav__link"))return;const t=document.getElementById("main-nav"),n=document.getElementById("nav-toggle");t&&t.classList.remove("is-open"),n&&(n.classList.remove("is-open"),n.setAttribute("aria-expanded","false"))})}function $(){const e=document.getElementById("app");if(!e){console.error("App root not found");return}U(),G(),W(),S(e,R),j(),document.addEventListener("click",t=>{const n=t.target.closest("a[data-link]");if(n){t.preventDefault();const s=n.getAttribute("href");window.history.pushState({},"",s),window.dispatchEvent(new PopStateEvent("popstate"))}})}document.addEventListener("DOMContentLoaded",$);export{l as _};
