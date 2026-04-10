function ma(c,l){for(var r=0;r<l.length;r++){const _=l[r];if(typeof _!="string"&&!Array.isArray(_)){for(const d in _)if(d!=="default"&&!(d in c)){const u=Object.getOwnPropertyDescriptor(_,d);u&&Object.defineProperty(c,d,u.get?u:{enumerable:!0,get:()=>_[d]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))_(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&_(f)}).observe(document,{childList:!0,subtree:!0});function r(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerPolicy&&(u.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?u.credentials="include":d.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function _(d){if(d.ep)return;d.ep=!0;const u=r(d);fetch(d.href,u)}})();let _i=null,Do=[];function ga(c,l){_i=c,Do=l,window.addEventListener("popstate",()=>Oo()),Oo()}function _a(c){for(const l of Do){const r=l.path.split("/"),_=c.split("/");if(r.length!==_.length)continue;const d={};let u=!0;for(let f=0;f<r.length;f++)if(r[f].startsWith(":"))d[r[f].slice(1)]=_[f];else if(r[f]!==_[f]){u=!1;break}if(u)return{route:l,params:d}}return null}function Oo(){const c=window.location.pathname,l=_a(c);if(l){const r=l.route.component(l.params);_i.innerHTML=r,l.route.setup&&setTimeout(()=>l.route.setup(),0)}else _i.innerHTML=`
      <div class="container py-20 text-center">
        <h1>404 - Page Not Found</h1>
        <p class="mt-4">The page you're looking for doesn't exist.</p>
        <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
      </div>
    `}const va="modulepreload",ba=function(c){return"/"+c},Bo={},ya=function(l,r,_){let d=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),P=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));d=Promise.allSettled(r.map(k=>{if(k=ba(k),k in Bo)return;Bo[k]=!0;const y=k.endsWith(".css"),w=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${k}"]${w}`))return;const g=document.createElement("link");if(g.rel=y?"stylesheet":va,y||(g.as="script"),g.crossOrigin="",g.href=k,P&&g.setAttribute("nonce",P),document.head.appendChild(g),y)return new Promise((m,T)=>{g.addEventListener("load",m),g.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${k}`)))})}))}function u(f){const P=new Event("vite:preloadError",{cancelable:!0});if(P.payload=f,window.dispatchEvent(P),!P.defaultPrevented)throw f}return d.then(f=>{for(const P of f||[])P.status==="rejected"&&u(P.reason);return l().catch(u)})};function ht(c){return`
    <header class="header" data-testid="header">
      <div class="container">
        <div class="header__inner">
          <a href="/" data-link class="header__logo">Trip<span>Cost</span></a>
          <nav class="nav" data-testid="main-nav">
            <a href="/destinations" data-link class="nav__link">Destinations</a>
            <a href="/calculator"   data-link class="nav__link">Calculator</a>
            <a href="/nomad"        data-link class="nav__link">Rankings</a>
            <a href="/about"        data-link class="nav__link">About</a>
          </nav>
        </div>
      </div>
    </header>

    <main data-testid="main-content">
      ${c}
    </main>

    <footer class="footer" data-testid="footer">
      <style>
        .footer {
          background:#0f0c29;color:rgba(255,255,255,0.6);
          padding:56px 0 0;font-size:14px;
        }
        .footer__grid {
          display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;
          gap:24px;padding-bottom:48px;
          border-bottom:1px solid rgba(255,255,255,0.08);
        }
        .footer__brand-logo {
          font-size:22px;font-weight:900;color:#fff;letter-spacing:-0.02em;margin-bottom:12px;
        }
        .footer__brand-logo span { color:#818cf8; }
        .footer__brand p {
          font-size:13px;line-height:1.7;color:rgba(255,255,255,0.45);
          margin-bottom:14px;max-width:260px;
        }
        .footer__brand-badge {
          display:inline-flex;align-items:center;gap:6px;
          background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);
          color:#a5b4fc;font-size:11px;font-weight:600;letter-spacing:0.5px;
          padding:4px 12px;border-radius:999px;
        }
        .footer__brand-badge::before {
          content:'';width:6px;height:6px;background:#10b981;border-radius:50%;
        }
        .footer__section h4 {
          font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
          color:rgba(255,255,255,0.3);margin-bottom:14px;
        }
        .footer__section a {
          display:block;color:rgba(255,255,255,0.55);text-decoration:none;
          font-size:13px;margin-bottom:7px;transition:color 0.15s;line-height:1.4;
        }
        .footer__section a:hover { color:#fff;text-decoration:none; }
        .footer__bottom {
          display:flex;justify-content:space-between;align-items:center;
          padding:20px 0;flex-wrap:wrap;gap:10px;
        }
        .footer__bottom p { color:rgba(255,255,255,0.25);font-size:12px;margin:0; }
        .footer__legal { display:flex;gap:20px; }
        .footer__legal a {
          color:rgba(255,255,255,0.25);font-size:12px;text-decoration:none;transition:color 0.15s;
        }
        .footer__legal a:hover { color:rgba(255,255,255,0.6); }
        @media(max-width:768px) {
          .footer__grid { grid-template-columns:1fr 1fr;gap:32px; }
          .footer__brand { grid-column:1/-1; }
        }
        @media(max-width:480px) {
          .footer__grid { grid-template-columns:1fr; }
        }
      </style>
      <div class="container">
        <div class="footer__grid">

          <!-- Brand -->
          <div class="footer__brand">
            <div class="footer__brand-logo">Trip<span>Cost</span></div>
            <p>Free cost of living intelligence for digital nomads, remote workers and expats. Real data, updated quarterly.</p>
            <span class="footer__brand-badge">Data updated March 2026</span>
          </div>

          <!-- Explore -->
          <div class="footer__section">
            <h4>Explore</h4>
            <a href="/destinations" data-link>All Destinations</a>
            <a href="/nomad"        data-link>City Rankings</a>
            <a href="/best-cities"  data-link>Best Cities</a>
            <a href="/best-countries" data-link>Best Countries</a>
          </div>

          <!-- Tools -->
          <div class="footer__section">
            <h4>Tools</h4>
            <a href="/calculator"   data-link>Budget Calculator</a>
            <a href="/nomad"        data-link>Nomad Rankings</a>
            <a href="/calculator"   data-link>City Comparison</a>
          </div>

          <!-- Company -->
          <div class="footer__section">
            <h4>Company</h4>
            <a href="/about"        data-link>About TripCost</a>
            <a href="/privacy"      data-link>Privacy Policy</a>
            <a href="/terms"        data-link>Terms of Service</a>
            <a href="/legal"        data-link>Legal Notice</a>
          </div>

        </div>
        <div class="footer__bottom">
          <p>© ${new Date().getFullYear()} TripCost. All rights reserved. Not financial or legal advice.</p>
          <div class="footer__legal">
            <a href="/privacy" data-link>Privacy</a>
            <a href="/terms"   data-link>Terms</a>
            <a href="/legal"   data-link>Legal</a>
          </div>
        </div>
      </div>
    </footer>
  `}const Be=[{id:"new-york",lat:40.7128,lng:-74.006,slug:"new-york",name:"New York",country:"United States",countryCode:"US",continent:"North America",currency:"USD",currencySymbol:"$",image:"https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600",description:"The city that never sleeps offers world-class culture and business opportunities.",costs:{accommodation:{center:200,suburb:140},food:{budget:25,standard:50,premium:120},transport:127,coworking:450},visa:{type:"No Digital Nomad Visa",remoteFriendly:!1,stayDurationMonths:6,processingTimeDays:90,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:37,corporateTax:21,capitalGainsTax:20},infrastructure:{publicTransportQuality:90,healthcareQuality:88,englishProficiency:100,airportConnectivity:98},safety:{safetyIndex:75,crimeLevel:"Moderate"},macro:{inflationRate:3.5,currencyStability:"High",rentVolatilityIndex:8.5},digitalNomad:{overallScore:78,wifiSpeed:200,coworkingCost:450,safetyScore:75},tags:["finance","startup-hub","arts"],lastUpdated:"2026-03"},{id:"tokyo",lat:35.6762,lng:139.6503,slug:"tokyo",name:"Tokyo",country:"Japan",countryCode:"JP",continent:"Asia",currency:"JPY",currencySymbol:"¥",image:"https://images.unsplash.com/photo-1549693578-d683be217e58?w=1600",description:"Ultra-modern city blending tradition and innovation.",costs:{accommodation:{center:140,suburb:90},food:{budget:15,standard:35,premium:100},transport:100,coworking:300},visa:{type:"Japan Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:6,processingTimeDays:45,minIncomeRequirement:7e3},tax:{personalIncomeTaxTopRate:45,corporateTax:23,capitalGainsTax:20},infrastructure:{publicTransportQuality:98,healthcareQuality:95,englishProficiency:60,airportConnectivity:95},safety:{safetyIndex:95,crimeLevel:"Low"},macro:{inflationRate:2.8,currencyStability:"High",rentVolatilityIndex:4.5},digitalNomad:{overallScore:88,wifiSpeed:250,coworkingCost:300,safetyScore:95},tags:["tech-hub","safe","food"],lastUpdated:"2026-03"},{id:"lisbon",lat:38.7169,lng:-9.1399,slug:"lisbon",name:"Lisbon",country:"Portugal",countryCode:"PT",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800",description:"Europe's digital nomad capital with Mediterranean lifestyle.",costs:{accommodation:{center:90,suburb:60},food:{budget:12,standard:25,premium:70},transport:40,coworking:200},visa:{type:"Portugal D8 Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:3040},tax:{personalIncomeTaxTopRate:48,corporateTax:21,capitalGainsTax:28},infrastructure:{publicTransportQuality:85,healthcareQuality:88,englishProficiency:75,airportConnectivity:90},safety:{safetyIndex:85,crimeLevel:"Low"},macro:{inflationRate:2.5,currencyStability:"High",rentVolatilityIndex:7.2},digitalNomad:{overallScore:90,wifiSpeed:120,coworkingCost:200,safetyScore:85},tags:["nomad-friendly","beach","affordable"],lastUpdated:"2026-03"},{id:"bali",lat:-8.4095,lng:115.1889,slug:"bali",name:"Bali",country:"Indonesia",countryCode:"ID",continent:"Asia",currency:"IDR",currencySymbol:"Rp",image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",description:"Tropical paradise with strong nomad community.",costs:{accommodation:{center:50,suburb:30},food:{budget:5,standard:15,premium:50},transport:50,coworking:150},visa:{type:"Indonesia Remote Worker Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:2e3},tax:{personalIncomeTaxTopRate:35,corporateTax:22,capitalGainsTax:10},infrastructure:{publicTransportQuality:55,healthcareQuality:65,englishProficiency:60,airportConnectivity:70},safety:{safetyIndex:75,crimeLevel:"Moderate"},macro:{inflationRate:3.2,currencyStability:"Medium",rentVolatilityIndex:6.8},digitalNomad:{overallScore:85,wifiSpeed:80,coworkingCost:150,safetyScore:75},tags:["tropical","nomad-hub","affordable"],lastUpdated:"2026-03"},{id:"berlin",lat:52.52,lng:13.405,slug:"berlin",name:"Berlin",country:"Germany",countryCode:"DE",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600",description:"Creative European capital with thriving startup scene.",costs:{accommodation:{center:110,suburb:70},food:{budget:12,standard:30,premium:80},transport:86,coworking:250},visa:{type:"Freelance Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:90,minIncomeRequirement:2500},tax:{personalIncomeTaxTopRate:45,corporateTax:30,capitalGainsTax:25},infrastructure:{publicTransportQuality:92,healthcareQuality:92,englishProficiency:80,airportConnectivity:88},safety:{safetyIndex:80,crimeLevel:"Low"},macro:{inflationRate:3.1,currencyStability:"High",rentVolatilityIndex:7.5},digitalNomad:{overallScore:84,wifiSpeed:150,coworkingCost:250,safetyScore:80},tags:["tech-hub","creative","startup"],lastUpdated:"2026-03"},{id:"bangkok",lat:13.7563,lng:100.5018,slug:"bangkok",name:"Bangkok",country:"Thailand",countryCode:"TH",continent:"Asia",currency:"THB",currencySymbol:"฿",image:"https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1600",description:"Vibrant metropolis offering strong value for remote workers.",costs:{accommodation:{center:60,suburb:35},food:{budget:5,standard:15,premium:45},transport:45,coworking:180},visa:{type:"Thailand DTV",remoteFriendly:!0,stayDurationMonths:60,processingTimeDays:30,minIncomeRequirement:1500},tax:{personalIncomeTaxTopRate:35,corporateTax:20,capitalGainsTax:15},infrastructure:{publicTransportQuality:85,healthcareQuality:80,englishProficiency:65,airportConnectivity:92},safety:{safetyIndex:70,crimeLevel:"Moderate"},macro:{inflationRate:2.1,currencyStability:"Medium",rentVolatilityIndex:6},digitalNomad:{overallScore:86,wifiSpeed:120,coworkingCost:180,safetyScore:70},tags:["affordable","food","culture"],lastUpdated:"2026-03"},{id:"barcelona",lat:41.3851,lng:2.1734,slug:"barcelona",name:"Barcelona",country:"Spain",countryCode:"ES",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=1600",description:"Mediterranean tech hub combining beach and business.",costs:{accommodation:{center:130,suburb:85},food:{budget:15,standard:35,premium:90},transport:55,coworking:280},visa:{type:"Spain Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:45,minIncomeRequirement:2520},tax:{personalIncomeTaxTopRate:47,corporateTax:25,capitalGainsTax:23},infrastructure:{publicTransportQuality:88,healthcareQuality:90,englishProficiency:75,airportConnectivity:88},safety:{safetyIndex:75,crimeLevel:"Moderate"},macro:{inflationRate:2.7,currencyStability:"High",rentVolatilityIndex:7},digitalNomad:{overallScore:83,wifiSpeed:140,coworkingCost:280,safetyScore:75},tags:["beach","tech-hub","culture"],lastUpdated:"2026-03"},{id:"mexico-city",lat:19.4326,lng:-99.1332,slug:"mexico-city",name:"Mexico City",country:"Mexico",countryCode:"MX",continent:"North America",currency:"MXN",currencySymbol:"$",image:"https://images.unsplash.com/photo-1512813382947-0e4a6d6c6c66?w=1600",description:"Massive metropolis with rich culture and strong affordability.",costs:{accommodation:{center:70,suburb:45},food:{budget:8,standard:20,premium:60},transport:20,coworking:180},visa:{type:"Temporary Resident Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:2600},tax:{personalIncomeTaxTopRate:35,corporateTax:30,capitalGainsTax:10},infrastructure:{publicTransportQuality:75,healthcareQuality:75,englishProficiency:60,airportConnectivity:90},safety:{safetyIndex:55,crimeLevel:"Moderate"},macro:{inflationRate:4.2,currencyStability:"Medium",rentVolatilityIndex:6.5},digitalNomad:{overallScore:80,wifiSpeed:100,coworkingCost:180,safetyScore:55},tags:["affordable","food","culture"],lastUpdated:"2026-03"},{id:"chiang-mai",lat:18.7883,lng:98.9853,slug:"chiang-mai",name:"Chiang Mai",country:"Thailand",countryCode:"TH",continent:"Asia",currency:"THB",currencySymbol:"฿",image:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1600",description:"Original digital nomad hub with unbeatable value.",costs:{accommodation:{center:40,suburb:25},food:{budget:4,standard:10,premium:35},transport:30,coworking:100},visa:{type:"Thailand DTV",remoteFriendly:!0,stayDurationMonths:60,processingTimeDays:30,minIncomeRequirement:1500},tax:{personalIncomeTaxTopRate:35,corporateTax:20,capitalGainsTax:15},infrastructure:{publicTransportQuality:60,healthcareQuality:75,englishProficiency:60,airportConnectivity:65},safety:{safetyIndex:85,crimeLevel:"Low"},macro:{inflationRate:2.1,currencyStability:"Medium",rentVolatilityIndex:5.5},digitalNomad:{overallScore:92,wifiSpeed:90,coworkingCost:100,safetyScore:85},tags:["nomad-hub","affordable","temples"],lastUpdated:"2026-03"},{id:"dubai",lat:25.2048,lng:55.2708,slug:"dubai",name:"Dubai",country:"United Arab Emirates",countryCode:"AE",continent:"Asia",currency:"AED",currencySymbol:"د.إ",image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600",description:"Tax-free income city with world-class infrastructure.",costs:{accommodation:{center:170,suburb:100},food:{budget:15,standard:40,premium:120},transport:80,coworking:400},visa:{type:"UAE Virtual Working Program",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:3500},tax:{personalIncomeTaxTopRate:0,corporateTax:9,capitalGainsTax:0},infrastructure:{publicTransportQuality:90,healthcareQuality:88,englishProficiency:95,airportConnectivity:99},safety:{safetyIndex:95,crimeLevel:"Very Low"},macro:{inflationRate:3.3,currencyStability:"High",rentVolatilityIndex:8},digitalNomad:{overallScore:82,wifiSpeed:220,coworkingCost:400,safetyScore:95},tags:["luxury","tax-free","modern"],lastUpdated:"2026-03"},{id:"london",lat:51.5074,lng:-.1278,slug:"london",name:"London",country:"United Kingdom",countryCode:"GB",continent:"Europe",currency:"GBP",currencySymbol:"£",image:"https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1600",description:"Global business capital with unmatched connectivity.",costs:{accommodation:{center:190,suburb:120},food:{budget:20,standard:45,premium:120},transport:170,coworking:450},visa:{type:"Skilled Worker / No Nomad Visa",remoteFriendly:!1,stayDurationMonths:6,processingTimeDays:60,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:45,corporateTax:25,capitalGainsTax:20},infrastructure:{publicTransportQuality:92,healthcareQuality:88,englishProficiency:100,airportConnectivity:99},safety:{safetyIndex:75,crimeLevel:"Moderate"},macro:{inflationRate:3.8,currencyStability:"High",rentVolatilityIndex:8},digitalNomad:{overallScore:76,wifiSpeed:180,coworkingCost:450,safetyScore:75},tags:["business-hub","culture","finance"],lastUpdated:"2026-03"},{id:"buenos-aires",lat:-34.6037,lng:-58.3816,slug:"buenos-aires",name:"Buenos Aires",country:"Argentina",countryCode:"AR",continent:"South America",currency:"ARS",currencySymbol:"$",image:"https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1600",description:"European flair in South America with strong value for foreign earners.",costs:{accommodation:{center:55,suburb:35},food:{budget:6,standard:15,premium:45},transport:15,coworking:120},visa:{type:"Argentina Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:2500},tax:{personalIncomeTaxTopRate:35,corporateTax:35,capitalGainsTax:15},infrastructure:{publicTransportQuality:80,healthcareQuality:75,englishProficiency:55,airportConnectivity:85},safety:{safetyIndex:55,crimeLevel:"Moderate"},macro:{inflationRate:120,currencyStability:"Low",rentVolatilityIndex:9},digitalNomad:{overallScore:78,wifiSpeed:90,coworkingCost:120,safetyScore:55},tags:["affordable","culture","nightlife"],lastUpdated:"2026-03"},{id:"singapore",lat:1.3521,lng:103.8198,slug:"singapore",name:"Singapore",country:"Singapore",countryCode:"SG",continent:"Asia",currency:"SGD",currencySymbol:"S$",image:"https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1600",description:"Ultra-efficient city-state with world-class infrastructure.",costs:{accommodation:{center:170,suburb:110},food:{budget:8,standard:25,premium:80},transport:80,coworking:400},visa:{type:"EntrePass / Work Pass (No Nomad Visa)",remoteFriendly:!1,stayDurationMonths:6,processingTimeDays:60,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:24,corporateTax:17,capitalGainsTax:0},infrastructure:{publicTransportQuality:98,healthcareQuality:95,englishProficiency:100,airportConnectivity:99},safety:{safetyIndex:97,crimeLevel:"Very Low"},macro:{inflationRate:3.1,currencyStability:"Very High",rentVolatilityIndex:7},digitalNomad:{overallScore:85,wifiSpeed:300,coworkingCost:400,safetyScore:97},tags:["efficient","safe","startup-hub"],lastUpdated:"2026-03"},{id:"amsterdam",lat:52.3676,lng:4.9041,slug:"amsterdam",name:"Amsterdam",country:"Netherlands",countryCode:"NL",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1600",description:"Liberal tech-friendly city with strong English proficiency.",costs:{accommodation:{center:170,suburb:110},food:{budget:15,standard:35,premium:90},transport:100,coworking:350},visa:{type:"DAFT / Self-Employment Visa",remoteFriendly:!0,stayDurationMonths:24,processingTimeDays:90,minIncomeRequirement:1500},tax:{personalIncomeTaxTopRate:49.5,corporateTax:25.8,capitalGainsTax:31},infrastructure:{publicTransportQuality:95,healthcareQuality:92,englishProficiency:95,airportConnectivity:95},safety:{safetyIndex:80,crimeLevel:"Low"},macro:{inflationRate:2.9,currencyStability:"High",rentVolatilityIndex:8},digitalNomad:{overallScore:82,wifiSpeed:200,coworkingCost:350,safetyScore:80},tags:["bike-friendly","tech-hub","english-speaking"],lastUpdated:"2026-03"},{id:"medellin",lat:6.2476,lng:-75.5658,slug:"medellin",name:"Medellín",country:"Colombia",countryCode:"CO",continent:"South America",currency:"COP",currencySymbol:"$",image:"https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=1600",description:"City of eternal spring with growing remote worker scene.",costs:{accommodation:{center:60,suburb:40},food:{budget:6,standard:15,premium:45},transport:30,coworking:150},visa:{type:"Colombia Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:24,processingTimeDays:30,minIncomeRequirement:900},tax:{personalIncomeTaxTopRate:39,corporateTax:35,capitalGainsTax:15},infrastructure:{publicTransportQuality:75,healthcareQuality:75,englishProficiency:55,airportConnectivity:80},safety:{safetyIndex:60,crimeLevel:"Moderate"},macro:{inflationRate:9,currencyStability:"Medium",rentVolatilityIndex:6},digitalNomad:{overallScore:83,wifiSpeed:100,coworkingCost:150,safetyScore:60},tags:["eternal-spring","affordable","nomad-hub"],lastUpdated:"2026-03"},{id:"prague",lat:50.0755,lng:14.4378,slug:"prague",name:"Prague",country:"Czech Republic",countryCode:"CZ",continent:"Europe",currency:"CZK",currencySymbol:"Kč",image:"https://images.unsplash.com/photo-1562624475-96c2b5e7be9b?w=1600",description:"Fairytale European capital with strong affordability.",costs:{accommodation:{center:90,suburb:55},food:{budget:10,standard:25,premium:65},transport:25,coworking:200},visa:{type:"Czech Freelance Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:2e3},tax:{personalIncomeTaxTopRate:23,corporateTax:21,capitalGainsTax:15},infrastructure:{publicTransportQuality:90,healthcareQuality:85,englishProficiency:80,airportConnectivity:85},safety:{safetyIndex:85,crimeLevel:"Low"},macro:{inflationRate:3,currencyStability:"High",rentVolatilityIndex:6},digitalNomad:{overallScore:84,wifiSpeed:180,coworkingCost:200,safetyScore:85},tags:["historic","affordable","beer"],lastUpdated:"2026-03"},{id:"seoul",lat:37.5665,lng:126.978,slug:"seoul",name:"Seoul",country:"South Korea",countryCode:"KR",continent:"Asia",currency:"KRW",currencySymbol:"₩",image:"https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1600",description:"High-tech metropolis with blazing fast internet.",costs:{accommodation:{center:100,suburb:65},food:{budget:8,standard:20,premium:60},transport:50,coworking:250},visa:{type:"Korea Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:3e3},tax:{personalIncomeTaxTopRate:45,corporateTax:25,capitalGainsTax:22},infrastructure:{publicTransportQuality:95,healthcareQuality:92,englishProficiency:60,airportConnectivity:95},safety:{safetyIndex:90,crimeLevel:"Low"},macro:{inflationRate:2.6,currencyStability:"High",rentVolatilityIndex:6},digitalNomad:{overallScore:86,wifiSpeed:300,coworkingCost:250,safetyScore:90},tags:["tech-hub","fast-internet","food"],lastUpdated:"2026-03"},{id:"paris",lat:48.8566,lng:2.3522,slug:"paris",name:"Paris",country:"France",countryCode:"FR",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600",description:"World-famous capital offering culture and business opportunities.",costs:{accommodation:{center:160,suburb:110},food:{budget:15,standard:35,premium:100},transport:75,coworking:350},visa:{type:"France Long-Stay / Talent Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:2500},tax:{personalIncomeTaxTopRate:45,corporateTax:25,capitalGainsTax:30},infrastructure:{publicTransportQuality:92,healthcareQuality:95,englishProficiency:75,airportConnectivity:95},safety:{safetyIndex:70,crimeLevel:"Moderate"},macro:{inflationRate:2.5,currencyStability:"High",rentVolatilityIndex:8},digitalNomad:{overallScore:78,wifiSpeed:200,coworkingCost:350,safetyScore:70},tags:["culture","food","business"],lastUpdated:"2026-03"},{id:"madrid",lat:40.4168,lng:-3.7038,slug:"madrid",name:"Madrid",country:"Spain",countryCode:"ES",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1600",description:"Vibrant Spanish capital with lively social scene.",costs:{accommodation:{center:110,suburb:80},food:{budget:12,standard:30,premium:85},transport:55,coworking:260},visa:{type:"Spain Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:45,minIncomeRequirement:2520},tax:{personalIncomeTaxTopRate:47,corporateTax:25,capitalGainsTax:23},infrastructure:{publicTransportQuality:88,healthcareQuality:90,englishProficiency:70,airportConnectivity:90},safety:{safetyIndex:75,crimeLevel:"Low"},macro:{inflationRate:2.7,currencyStability:"High",rentVolatilityIndex:6.5},digitalNomad:{overallScore:81,wifiSpeed:160,coworkingCost:260,safetyScore:75},tags:["culture","nightlife","affordable"],lastUpdated:"2026-03"},{id:"rome",lat:41.9028,lng:12.4964,slug:"rome",name:"Rome",country:"Italy",countryCode:"IT",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1600",description:"Historic capital with Mediterranean lifestyle and rich heritage.",costs:{accommodation:{center:120,suburb:85},food:{budget:10,standard:28,premium:80},transport:45,coworking:240},visa:{type:"Italy Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:2800},tax:{personalIncomeTaxTopRate:43,corporateTax:24,capitalGainsTax:26},infrastructure:{publicTransportQuality:80,healthcareQuality:88,englishProficiency:65,airportConnectivity:88},safety:{safetyIndex:72,crimeLevel:"Moderate"},macro:{inflationRate:2.6,currencyStability:"High",rentVolatilityIndex:7},digitalNomad:{overallScore:76,wifiSpeed:150,coworkingCost:240,safetyScore:72},tags:["historic","food","culture"],lastUpdated:"2026-03"},{id:"vienna",lat:48.2082,lng:16.3738,slug:"vienna",name:"Vienna",country:"Austria",countryCode:"AT",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1600",description:"Highly livable city with excellent public services.",costs:{accommodation:{center:130,suburb:90},food:{budget:12,standard:32,premium:90},transport:60,coworking:300},visa:{type:"Austria Self-Employment Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:3e3},tax:{personalIncomeTaxTopRate:55,corporateTax:24,capitalGainsTax:27.5},infrastructure:{publicTransportQuality:95,healthcareQuality:95,englishProficiency:85,airportConnectivity:85},safety:{safetyIndex:90,crimeLevel:"Low"},macro:{inflationRate:2.4,currencyStability:"High",rentVolatilityIndex:5},digitalNomad:{overallScore:88,wifiSpeed:200,coworkingCost:300,safetyScore:90},tags:["safe","clean","livable"],lastUpdated:"2026-03"},{id:"budapest",lat:47.4979,lng:19.0402,slug:"budapest",name:"Budapest",country:"Hungary",countryCode:"HU",continent:"Europe",currency:"HUF",currencySymbol:"Ft",image:"https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=1600",description:"Affordable European capital popular with remote workers.",costs:{accommodation:{center:80,suburb:55},food:{budget:8,standard:22,premium:65},transport:30,coworking:180},visa:{type:"Hungary White Card",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:2e3},tax:{personalIncomeTaxTopRate:15,corporateTax:9,capitalGainsTax:15},infrastructure:{publicTransportQuality:88,healthcareQuality:80,englishProficiency:75,airportConnectivity:80},safety:{safetyIndex:80,crimeLevel:"Low"},macro:{inflationRate:4.5,currencyStability:"Medium",rentVolatilityIndex:6},digitalNomad:{overallScore:83,wifiSpeed:160,coworkingCost:180,safetyScore:80},tags:["affordable","nomad-friendly","historic"],lastUpdated:"2026-03"},{id:"athens",lat:37.9838,lng:23.7275,slug:"athens",name:"Athens",country:"Greece",countryCode:"GR",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600",description:"Historic Mediterranean city with growing nomad appeal.",costs:{accommodation:{center:85,suburb:60},food:{budget:9,standard:25,premium:70},transport:35,coworking:200},visa:{type:"Greece Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:3500},tax:{personalIncomeTaxTopRate:44,corporateTax:22,capitalGainsTax:15},infrastructure:{publicTransportQuality:75,healthcareQuality:80,englishProficiency:70,airportConnectivity:85},safety:{safetyIndex:70,crimeLevel:"Moderate"},macro:{inflationRate:3.2,currencyStability:"High",rentVolatilityIndex:6},digitalNomad:{overallScore:79,wifiSpeed:140,coworkingCost:200,safetyScore:70},tags:["history","mediterranean","affordable"],lastUpdated:"2026-03"},{id:"istanbul",lat:41.0082,lng:28.9784,slug:"istanbul",name:"Istanbul",country:"Turkey",countryCode:"TR",continent:"Europe",currency:"TRY",currencySymbol:"₺",image:"https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1600",description:"Vibrant city bridging Europe and Asia with excellent value.",costs:{accommodation:{center:75,suburb:50},food:{budget:7,standard:20,premium:60},transport:30,coworking:170},visa:{type:"Turkey Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:3e3},tax:{personalIncomeTaxTopRate:40,corporateTax:25,capitalGainsTax:15},infrastructure:{publicTransportQuality:75,healthcareQuality:75,englishProficiency:55,airportConnectivity:90},safety:{safetyIndex:65,crimeLevel:"Moderate"},macro:{inflationRate:45,currencyStability:"Low",rentVolatilityIndex:9},digitalNomad:{overallScore:75,wifiSpeed:120,coworkingCost:170,safetyScore:65},tags:["culture","affordable","food"],lastUpdated:"2026-03"},{id:"helsinki",lat:60.1699,lng:24.9384,slug:"helsinki",name:"Helsinki",country:"Finland",countryCode:"FI",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=1600",description:"Nordic capital offering safety and excellent infrastructure.",costs:{accommodation:{center:150,suburb:105},food:{budget:14,standard:38,premium:110},transport:70,coworking:320},visa:{type:"Self-Employment Residence Permit",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:2e3},tax:{personalIncomeTaxTopRate:57,corporateTax:20,capitalGainsTax:30},infrastructure:{publicTransportQuality:95,healthcareQuality:95,englishProficiency:90,airportConnectivity:85},safety:{safetyIndex:95,crimeLevel:"Very Low"},macro:{inflationRate:3.1,currencyStability:"High",rentVolatilityIndex:5},digitalNomad:{overallScore:90,wifiSpeed:250,coworkingCost:320,safetyScore:95},tags:["safe","nordic","nature"],lastUpdated:"2026-03"},{id:"stockholm",lat:59.3293,lng:18.0686,slug:"stockholm",name:"Stockholm",country:"Sweden",countryCode:"SE",continent:"Europe",currency:"SEK",currencySymbol:"kr",image:"https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1600",description:"Scandinavian tech hub with high quality of life.",costs:{accommodation:{center:155,suburb:110},food:{budget:15,standard:40,premium:120},transport:75,coworking:350},visa:{type:"Sweden Self-Employment Permit",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:90,minIncomeRequirement:2200},tax:{personalIncomeTaxTopRate:52,corporateTax:20.6,capitalGainsTax:30},infrastructure:{publicTransportQuality:95,healthcareQuality:92,englishProficiency:95,airportConnectivity:90},safety:{safetyIndex:92,crimeLevel:"Low"},macro:{inflationRate:2.8,currencyStability:"High",rentVolatilityIndex:6},digitalNomad:{overallScore:88,wifiSpeed:240,coworkingCost:350,safetyScore:92},tags:["tech-hub","safe","nordic"],lastUpdated:"2026-03"},{id:"oslo",lat:59.9139,lng:10.7522,slug:"oslo",name:"Oslo",country:"Norway",countryCode:"NO",continent:"Europe",currency:"NOK",currencySymbol:"kr",image:"https://images.unsplash.com/photo-1601581975053-7c199b3c3344?w=1600",description:"Modern city surrounded by nature with high living standards.",costs:{accommodation:{center:165,suburb:120},food:{budget:18,standard:45,premium:130},transport:80,coworking:380},visa:{type:"Self-Employment Residence Permit",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:90,minIncomeRequirement:3e3},tax:{personalIncomeTaxTopRate:47.4,corporateTax:22,capitalGainsTax:22},infrastructure:{publicTransportQuality:95,healthcareQuality:95,englishProficiency:95,airportConnectivity:85},safety:{safetyIndex:93,crimeLevel:"Very Low"},macro:{inflationRate:3.3,currencyStability:"High",rentVolatilityIndex:5.5},digitalNomad:{overallScore:87,wifiSpeed:230,coworkingCost:380,safetyScore:93},tags:["nature","safe","expensive"],lastUpdated:"2026-03"},{id:"cape-town",lat:-33.9249,lng:18.4241,slug:"cape-town",name:"Cape Town",country:"South Africa",countryCode:"ZA",continent:"Africa",currency:"ZAR",currencySymbol:"R",image:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600",description:"Coastal city with strong lifestyle appeal and growing remote scene.",costs:{accommodation:{center:70,suburb:45},food:{budget:8,standard:20,premium:55},transport:45,coworking:180},visa:{type:"South Africa Remote Work Visa",remoteFriendly:!0,stayDurationMonths:36,processingTimeDays:60,minIncomeRequirement:3e3},tax:{personalIncomeTaxTopRate:45,corporateTax:27,capitalGainsTax:18},infrastructure:{publicTransportQuality:60,healthcareQuality:70,englishProficiency:90,airportConnectivity:80},safety:{safetyIndex:45,crimeLevel:"High"},macro:{inflationRate:5.2,currencyStability:"Medium",rentVolatilityIndex:7},digitalNomad:{overallScore:68,wifiSpeed:100,coworkingCost:180,safetyScore:45},tags:["nature","affordable","adventure"],lastUpdated:"2026-03"},{id:"marrakech",lat:31.6295,lng:-7.9811,slug:"marrakech",name:"Marrakech",country:"Morocco",countryCode:"MA",continent:"Africa",currency:"MAD",currencySymbol:"د.م.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=1600",description:"Historic Moroccan city blending tradition and growing nomad interest.",costs:{accommodation:{center:55,suburb:35},food:{budget:6,standard:18,premium:50},transport:25,coworking:120},visa:{type:"Tourist Visa (90 days)",remoteFriendly:!0,stayDurationMonths:3,processingTimeDays:15,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:38,corporateTax:31,capitalGainsTax:20},infrastructure:{publicTransportQuality:55,healthcareQuality:60,englishProficiency:50,airportConnectivity:75},safety:{safetyIndex:65,crimeLevel:"Moderate"},macro:{inflationRate:5,currencyStability:"Medium",rentVolatilityIndex:6.5},digitalNomad:{overallScore:72,wifiSpeed:80,coworkingCost:120,safetyScore:65},tags:["culture","affordable","warm-weather"],lastUpdated:"2026-03"},{id:"cairo",lat:30.0444,lng:31.2357,slug:"cairo",name:"Cairo",country:"Egypt",countryCode:"EG",continent:"Africa",currency:"EGP",currencySymbol:"E£",image:"https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1600",description:"Massive historic capital with extremely low living costs.",costs:{accommodation:{center:40,suburb:25},food:{budget:5,standard:15,premium:40},transport:15,coworking:100},visa:{type:"Tourist Visa",remoteFriendly:!0,stayDurationMonths:3,processingTimeDays:7,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:27.5,corporateTax:22.5,capitalGainsTax:10},infrastructure:{publicTransportQuality:50,healthcareQuality:55,englishProficiency:45,airportConnectivity:80},safety:{safetyIndex:55,crimeLevel:"Moderate"},macro:{inflationRate:25,currencyStability:"Low",rentVolatilityIndex:8},digitalNomad:{overallScore:60,wifiSpeed:70,coworkingCost:100,safetyScore:55},tags:["historic","very-affordable"],lastUpdated:"2026-03"},{id:"nairobi",lat:-1.2921,lng:36.8219,slug:"nairobi",name:"Nairobi",country:"Kenya",countryCode:"KE",continent:"Africa",currency:"KES",currencySymbol:"KSh",image:"https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1600",description:"East Africa’s tech and startup hub.",costs:{accommodation:{center:65,suburb:40},food:{budget:6,standard:18,premium:50},transport:35,coworking:160},visa:{type:"Kenya Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:2e3},tax:{personalIncomeTaxTopRate:35,corporateTax:30,capitalGainsTax:15},infrastructure:{publicTransportQuality:60,healthcareQuality:65,englishProficiency:85,airportConnectivity:75},safety:{safetyIndex:55,crimeLevel:"Moderate"},macro:{inflationRate:5.5,currencyStability:"Medium",rentVolatilityIndex:7},digitalNomad:{overallScore:74,wifiSpeed:90,coworkingCost:160,safetyScore:55},tags:["tech-hub","emerging","affordable"],lastUpdated:"2026-03"},{id:"kigali",lat:-1.9441,lng:30.0619,slug:"kigali",name:"Kigali",country:"Rwanda",countryCode:"RW",continent:"Africa",currency:"RWF",currencySymbol:"FRw",image:"https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=1600",description:"Clean and rapidly developing East African capital.",costs:{accommodation:{center:50,suburb:35},food:{budget:6,standard:18,premium:45},transport:25,coworking:140},visa:{type:"Remote Worker Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:14,minIncomeRequirement:1500},tax:{personalIncomeTaxTopRate:30,corporateTax:30,capitalGainsTax:5},infrastructure:{publicTransportQuality:65,healthcareQuality:70,englishProficiency:75,airportConnectivity:65},safety:{safetyIndex:75,crimeLevel:"Low"},macro:{inflationRate:6,currencyStability:"Medium",rentVolatilityIndex:5},digitalNomad:{overallScore:80,wifiSpeed:85,coworkingCost:140,safetyScore:75},tags:["clean","safe","emerging"],lastUpdated:"2026-03"},{id:"accra",lat:5.6037,lng:-.187,slug:"accra",name:"Accra",country:"Ghana",countryCode:"GH",continent:"Africa",currency:"GHS",currencySymbol:"₵",image:"https://images.unsplash.com/photo-1580661869408-55ab23f2c6c3?w=1600",description:"West African capital with growing entrepreneurial scene.",costs:{accommodation:{center:60,suburb:40},food:{budget:7,standard:20,premium:55},transport:30,coworking:150},visa:{type:"Tourist / Residence Permit",remoteFriendly:!0,stayDurationMonths:3,processingTimeDays:21,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:35,corporateTax:25,capitalGainsTax:15},infrastructure:{publicTransportQuality:55,healthcareQuality:60,englishProficiency:90,airportConnectivity:70},safety:{safetyIndex:60,crimeLevel:"Moderate"},macro:{inflationRate:20,currencyStability:"Low",rentVolatilityIndex:8},digitalNomad:{overallScore:70,wifiSpeed:95,coworkingCost:150,safetyScore:60},tags:["emerging","english-speaking","entrepreneurial"],lastUpdated:"2026-03"}],mi=new Map;function Zo(c){return c==null?void 0:c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").trim()}function xa(c){if(!c)return null;let l=0;return l+=Math.min((c.processingTimeDays||0)/3,30),l+=Math.min((c.minIncomeRequirement||0)/200,30),c.stayDurationMonths<12?l+=20:c.stayDurationMonths<=24?l+=10:l+=5,l+=c.remoteFriendly?5:20,Math.min(Math.round(l),100)}function wa(c){var P,k,y,w,g,m,T,I,E,x;const l=(((P=c.infrastructure)==null?void 0:P.publicTransportQuality)||0)*.2+(((k=c.infrastructure)==null?void 0:k.healthcareQuality)||0)*.1+(((y=c.infrastructure)==null?void 0:y.englishProficiency)||0)*.15+(((w=c.infrastructure)==null?void 0:w.airportConnectivity)||0)*.1,r=(((g=c.safety)==null?void 0:g.safetyIndex)||0)*.2,_=((m=c.macro)==null?void 0:m.currencyStability)==="Very High"?10:((T=c.macro)==null?void 0:T.currencyStability)==="High"?8:((I=c.macro)==null?void 0:I.currencyStability)==="Medium"?5:2,d=Math.min(((E=c.macro)==null?void 0:E.inflationRate)||0,50)*.2,u=(x=c.visa)!=null&&x.remoteFriendly?10:0;let f=l+r+_+u-d;return Math.max(0,Math.min(100,Math.round(f)))}function ka(c){var P,k,y,w,g,m,T;if(!c)return 0;const l=100-Math.min((c.costs.accommodation.center*30+c.costs.food.standard*30+c.costs.transport+c.costs.coworking)/50,100),r=((P=c.safety)==null?void 0:P.safetyIndex)||0,_=(((k=c.infrastructure)==null?void 0:k.publicTransportQuality)+((y=c.infrastructure)==null?void 0:y.healthcareQuality)+((w=c.infrastructure)==null?void 0:w.englishProficiency)+((g=c.infrastructure)==null?void 0:g.airportConnectivity))/4,d=(m=c.visa)!=null&&m.remoteFriendly?85:40,u=Math.min(((T=c.macro)==null?void 0:T.inflationRate)||0,50);let f=l*.25+r*.25+_*.25+d*.15-u*.1;return Math.max(0,Math.min(100,Math.round(f)))}function Sa(c){var P,k,y,w,g,m,T,I;if(!c)return 0;const l=100-((((P=c.tax)==null?void 0:P.personalIncomeTaxTopRate)||0)+(((k=c.tax)==null?void 0:k.corporateTax)||0))/2,r=((y=c.macro)==null?void 0:y.currencyStability)==="Very High"?95:((w=c.macro)==null?void 0:w.currencyStability)==="High"?85:((g=c.macro)==null?void 0:g.currencyStability)==="Medium"?65:40,_=(((m=c.macro)==null?void 0:m.rentVolatilityIndex)||0)*5,d=((T=c.safety)==null?void 0:T.safetyIndex)||0,u=(I=c.visa)!=null&&I.remoteFriendly?90:50;let f=l*.2+r*.2+d*.2+u*.2-_*.1;return Math.max(0,Math.min(100,Math.round(f)))}function wi(c){var r,_;if(!c)return null;if(mi.has(c.slug))return mi.get(c.slug);const l={...c,digitalNomad:{...c.digitalNomad,overallScore:wa(c),coworkingCost:(r=c.costs)==null?void 0:r.coworking,safetyScore:(_=c.safety)==null?void 0:_.safetyIndex},visaComplexityScore:xa(c.visa),tripCostIndex:ka(c),relocationScore:Sa(c)};return mi.set(c.slug,l),l}function Ot(){return Be.map(wi)}function vi(c){const l=Be.find(r=>r.slug===c)||null;return wi(l)}function Ta(c){return c?Be.filter(l=>Zo(l.country)===c).map(wi):[]}function La(){const c={};return Be.forEach(l=>{const r=Zo(l.country);c[r]||(c[r]={name:l.country,slug:r})}),Object.values(c).sort((l,r)=>l.name.localeCompare(r.name))}function Ca(c=10){return Ot().sort((l,r)=>r.digitalNomad.overallScore-l.digitalNomad.overallScore).slice(0,c)}function $t(c,l="$"){return`${l}${c.toLocaleString()}`}function Pa(){const c=Ca(6),l=Ot().length,r=c.map((w,g)=>{const m=w.costs.accommodation.center*30+w.costs.food.standard*30+w.costs.transport+w.costs.coworking,T=w.digitalNomad.overallScore>=85?"#10b981":w.digitalNomad.overallScore>=70?"#f59e0b":"#6366f1";return`
      <a href="/city/${w.slug}" data-link class="home-city-card" style="animation-delay:${g*80}ms">
        <div class="home-city-card__img-wrap">
          <img src="${w.image}" alt="${w.name}" loading="lazy" />
          <div class="home-city-card__overlay"></div>
          <div class="home-city-card__badge" style="background:${T}">
            ${w.digitalNomad.overallScore}<span>/100</span>
          </div>
        </div>
        <div class="home-city-card__body">
          <div class="home-city-card__meta">
            <h3>${w.name}</h3>
            <p>${w.country}</p>
          </div>
          <div class="home-city-card__price">
            <span class="home-city-card__price-label">From</span>
            <span class="home-city-card__price-value">$${Math.round(m).toLocaleString()}<em>/mo</em></span>
          </div>
        </div>
      </a>
    `}).join(""),d=[{value:`${l}+`,label:"Cities"},{value:"12+",label:"Cost categories"},{value:"3",label:"Lifestyle levels"},{value:"100%",label:"Free"}].map(w=>`
    <div class="home-stat">
      <strong>${w.value}</strong>
      <span>${w.label}</span>
    </div>
  `).join(""),f=[{num:"01",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',title:"Choose your cities",desc:"Browse 33+ destinations across Europe, Asia, Americas and the Middle East."},{num:"02",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',title:"Set your budget",desc:"Enter your income and lifestyle preferences — from budget backpacker to comfortable expat."},{num:"03",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',title:"Get your report",desc:"See real purchasing power, visa info, tax pressure and quality-of-life scores side by side."}].map(w=>`
    <div class="home-step">
      <div class="home-step__num">${w.num}</div>
      <div class="home-step__icon">${w.icon}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>
  `).join(""),k=[{emoji:"💻",label:"Remote workers",desc:"Find your perfect base with fast WiFi and coworking."},{emoji:"✈️",label:"Expats & families",desc:"Plan a real relocation with full cost breakdowns."},{emoji:"🌍",label:"Digital nomads",desc:"Rank cities by nomad score and visa friendliness."}].map(w=>`
    <div class="home-profile">
      <div class="home-profile__emoji">${w.emoji}</div>
      <h4>${w.label}</h4>
      <p>${w.desc}</p>
    </div>
  `).join(""),y=`
    <style>
      .home-hero {
        position: relative;
        min-height: 92vh;
        display: flex;
        align-items: center;
        overflow: hidden;
        background: #0f0c29;
      }
      .home-hero__bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 80% 60% at 60% 40%, rgba(99,102,241,0.35) 0%, transparent 70%),
          radial-gradient(ellipse 50% 50% at 20% 80%, rgba(16,185,129,0.18) 0%, transparent 60%),
          linear-gradient(135deg, #0f0c29 0%, #1a1040 50%, #0d1117 100%);
        z-index: 0;
      }
      .home-hero__orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(60px);
        opacity: 0.3;
        animation: orbFloat 8s ease-in-out infinite;
        z-index: 0;
      }
      .home-hero__orb--1 { width:400px;height:400px;background:#6366f1;top:-100px;right:10%;animation-delay:0s; }
      .home-hero__orb--2 { width:300px;height:300px;background:#10b981;bottom:10%;left:5%;animation-delay:-3s; }
      .home-hero__orb--3 { width:200px;height:200px;background:#8b5cf6;top:30%;left:30%;animation-delay:-5s; }
      @keyframes orbFloat {
        0%,100% { transform:translate(0,0) scale(1); }
        33% { transform:translate(20px,-30px) scale(1.05); }
        66% { transform:translate(-15px,20px) scale(0.95); }
      }
      .home-hero__content { position:relative;z-index:2;max-width:780px; }
      .home-hero__eyebrow {
        display:inline-flex;align-items:center;gap:8px;
        background:rgba(99,102,241,0.2);border:1px solid rgba(99,102,241,0.4);
        color:#a5b4fc;font-size:12px;font-weight:600;letter-spacing:2px;
        text-transform:uppercase;padding:6px 16px;border-radius:999px;margin-bottom:28px;
      }
      .home-hero__eyebrow::before {
        content:'';width:6px;height:6px;background:#10b981;border-radius:50%;
        animation:pulse 2s ease-in-out infinite;
      }
      @keyframes pulse {
        0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(1.4);}
      }
      .home-hero__title {
        font-size:clamp(42px,6vw,72px);font-weight:800;line-height:1.08;
        letter-spacing:-0.03em;color:#fff;margin-bottom:24px;
      }
      .home-hero__title em {
        font-style:normal;
        background:linear-gradient(90deg,#818cf8,#34d399);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      }
      .home-hero__subtitle {
        font-size:18px;line-height:1.7;color:rgba(255,255,255,0.65);
        max-width:560px;margin-bottom:40px;
      }
      .home-hero__actions { display:flex;gap:14px;flex-wrap:wrap;align-items:center; }
      .home-hero__cta-primary {
        display:inline-flex;align-items:center;gap:8px;
        background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;
        font-size:15px;font-weight:600;padding:14px 28px;border-radius:12px;
        text-decoration:none;box-shadow:0 8px 32px rgba(99,102,241,0.4);
        transition:transform 0.2s,box-shadow 0.2s;
      }
      .home-hero__cta-primary:hover {
        transform:translateY(-2px);box-shadow:0 12px 40px rgba(99,102,241,0.5);
        color:#fff;text-decoration:none;
      }
      .home-hero__cta-secondary {
        display:inline-flex;align-items:center;gap:8px;
        background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);
        color:rgba(255,255,255,0.85);font-size:15px;font-weight:500;
        padding:14px 24px;border-radius:12px;text-decoration:none;
        transition:background 0.2s,color 0.2s;
      }
      .home-hero__cta-secondary:hover { background:rgba(255,255,255,0.14);color:#fff;text-decoration:none; }

      .home-stats-bar { background:#fff;border-bottom:1px solid #e5e7eb;padding:24px 0; }
      .home-stats-bar .container { display:flex;justify-content:center; }
      .home-stat { display:flex;flex-direction:column;align-items:center;gap:2px;padding:0 40px;border-right:1px solid #e5e7eb; }
      .home-stat:last-child { border-right:none; }
      .home-stat strong { font-size:28px;font-weight:800;color:#1e1b4b;letter-spacing:-0.02em; }
      .home-stat span { font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:500; }

      .home-profiles { background:#f9fafb;padding:64px 0; }
      .home-profiles__grid { display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:40px; }
      .home-profile {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:28px 24px;
        text-align:center;transition:border-color 0.2s,box-shadow 0.2s,transform 0.2s;
      }
      .home-profile:hover { border-color:#c7d2fe;box-shadow:0 8px 24px rgba(99,102,241,0.1);transform:translateY(-3px); }
      .home-profile__emoji { font-size:36px;margin-bottom:14px; }
      .home-profile h4 { font-size:16px;font-weight:700;color:#111827;margin-bottom:8px; }
      .home-profile p { font-size:14px;color:#6b7280;margin:0;line-height:1.6; }

      .home-how { padding:80px 0;background:#fff; }
      .home-steps { display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-top:48px;position:relative; }
      .home-steps::before {
        content:'';position:absolute;top:36px;
        left:calc(16.66% + 16px);right:calc(16.66% + 16px);
        height:2px;background:linear-gradient(90deg,#6366f1,#8b5cf6,#10b981);opacity:0.3;
      }
      .home-step { text-align:center;padding:0 16px;position:relative; }
      .home-step__num { font-size:11px;font-weight:700;letter-spacing:2px;color:#6366f1;margin-bottom:16px; }
      .home-step__icon {
        width:56px;height:56px;background:linear-gradient(135deg,#6366f1,#8b5cf6);
        border-radius:16px;display:flex;align-items:center;justify-content:center;
        margin:0 auto 20px;color:#fff;box-shadow:0 8px 20px rgba(99,102,241,0.3);
      }
      .home-step h3 { font-size:17px;font-weight:700;color:#111827;margin-bottom:10px; }
      .home-step p { font-size:14px;color:#6b7280;line-height:1.7;margin:0; }

      .home-cities { padding:80px 0;background:#f9fafb; }
      .home-cities__grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px; }
      .home-city-card {
        display:block;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;
        background:#fff;text-decoration:none;
        transition:transform 0.25s,box-shadow 0.25s,border-color 0.25s;
        animation:fadeUp 0.5s ease both;
      }
      @keyframes fadeUp {
        from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}
      }
      .home-city-card:hover {
        transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.12);
        border-color:#c7d2fe;text-decoration:none;
      }
      .home-city-card__img-wrap { position:relative;height:200px;overflow:hidden; }
      .home-city-card__img-wrap img { width:100%;height:100%;object-fit:cover;transition:transform 0.4s ease; }
      .home-city-card:hover .home-city-card__img-wrap img { transform:scale(1.05); }
      .home-city-card__overlay { position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.4) 0%,transparent 60%); }
      .home-city-card__badge {
        position:absolute;top:12px;right:12px;color:#fff;font-size:13px;font-weight:800;
        padding:4px 10px;border-radius:999px;backdrop-filter:blur(4px);
      }
      .home-city-card__badge span { font-size:10px;font-weight:500;opacity:0.85; }
      .home-city-card__body { padding:16px 18px;display:flex;justify-content:space-between;align-items:center; }
      .home-city-card__meta h3 { font-size:16px;font-weight:700;color:#111827;margin:0 0 3px; }
      .home-city-card__meta p { font-size:12px;color:#9ca3af;margin:0; }
      .home-city-card__price { text-align:right; }
      .home-city-card__price-label { display:block;font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px; }
      .home-city-card__price-value { font-size:18px;font-weight:800;color:#1e1b4b;letter-spacing:-0.02em; }
      .home-city-card__price-value em { font-size:12px;font-weight:500;color:#9ca3af;font-style:normal; }

      .home-section-header { text-align:center;max-width:560px;margin:0 auto; }
      .home-section-header__eyebrow {
        display:inline-block;font-size:11px;font-weight:700;letter-spacing:2.5px;
        text-transform:uppercase;color:#6366f1;margin-bottom:12px;
      }
      .home-section-header h2 { font-size:34px;font-weight:800;color:#111827;letter-spacing:-0.025em;margin-bottom:14px; }
      .home-section-header p { font-size:16px;color:#6b7280;line-height:1.7;margin:0; }

      .home-cta {
        padding:80px 0;text-align:center;
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#1e1b4b 100%);
        position:relative;overflow:hidden;
      }
      .home-cta::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(99,102,241,0.3) 0%,transparent 70%);
      }
      .home-cta__inner { position:relative;z-index:2;max-width:600px;margin:0 auto; }
      .home-cta h2 { font-size:42px;font-weight:800;color:#fff;letter-spacing:-0.025em;margin-bottom:16px;line-height:1.1; }
      .home-cta p { font-size:17px;color:rgba(255,255,255,0.65);margin-bottom:36px;line-height:1.7; }

      @media(max-width:900px){
        .home-profiles__grid,.home-steps,.home-cities__grid{grid-template-columns:1fr 1fr;}
        .home-steps::before{display:none;}
        .home-stat{padding:0 20px;}
        .home-hero__title{font-size:40px;}
      }
      @media(max-width:600px){
        .home-profiles__grid,.home-steps,.home-cities__grid{grid-template-columns:1fr;}
        .home-stats-bar .container{flex-wrap:wrap;gap:16px;}
        .home-stat{border-right:none;}
        .home-hero__actions{flex-direction:column;align-items:flex-start;}
        .home-cta h2{font-size:30px;}
      }

      /* ── World Map ─────────────────────── */
      .home-map { background:#0f0c29;padding:72px 0 0; }
      .home-map__header { margin-bottom:40px; }
      .home-map__header .home-section-header__eyebrow { color:#818cf8; }
      .home-map__header h2 { color:#fff; }
      .home-map__header p { color:rgba(255,255,255,0.55); }
      .home-map__wrap { position:relative; }
      #world-map {
        width:100%; height:520px;
        background:#0d1117;
      }
      .home-map__legend {
        position:absolute;bottom:16px;left:50%;transform:translateX(-50%);
        background:rgba(15,12,41,0.85);backdrop-filter:blur(8px);
        border:1px solid rgba(255,255,255,0.1);
        color:rgba(255,255,255,0.7);font-size:12px;font-weight:500;
        padding:8px 18px;border-radius:999px;display:flex;align-items:center;gap:6px;
        white-space:nowrap;z-index:500;
      }
      .home-map__legend-dot {
        display:inline-block;width:9px;height:9px;border-radius:50%;
      }
      /* Leaflet popup custom dark style */
      .leaflet-popup-content-wrapper {
        background:#1e1b4b !important;
        border:1px solid rgba(99,102,241,0.4) !important;
        border-radius:14px !important;
        box-shadow:0 16px 40px rgba(0,0,0,0.5) !important;
        padding:0 !important;
      }
      .leaflet-popup-tip { background:#1e1b4b !important; }
      .leaflet-popup-content { margin:0 !important;width:220px !important; }
      .map-popup {
        padding:16px;font-family:inherit;
      }
      .map-popup__img {
        width:100%;height:110px;object-fit:cover;
        border-radius:10px 10px 0 0;margin:-16px -0px 12px;
        width:calc(100% + 0px);
      }
      .map-popup__city { font-size:15px;font-weight:700;color:#fff;margin-bottom:2px; }
      .map-popup__country { font-size:11px;color:rgba(255,255,255,0.45);margin-bottom:12px; }
      .map-popup__row {
        display:flex;justify-content:space-between;align-items:center;
        margin-bottom:6px;
      }
      .map-popup__label { font-size:11px;color:rgba(255,255,255,0.45); }
      .map-popup__val { font-size:13px;font-weight:600;color:#e0e7ff; }
      .map-popup__score {
        display:inline-block;padding:2px 8px;border-radius:999px;
        font-size:11px;font-weight:700;color:#fff;
      }
      .map-popup__link {
        display:block;margin-top:12px;text-align:center;
        background:linear-gradient(135deg,#6366f1,#8b5cf6);
        color:#fff;font-size:12px;font-weight:600;
        padding:8px;border-radius:8px;text-decoration:none;
        transition:opacity 0.2s;
      }
      .map-popup__link:hover { opacity:0.85;color:#fff;text-decoration:none; }
      .leaflet-control-zoom a {
        background:#1e1b4b !important;color:#a5b4fc !important;
        border-color:rgba(99,102,241,0.3) !important;
      }
      .leaflet-control-attribution {
        background:rgba(15,12,41,0.7) !important;color:rgba(255,255,255,0.3) !important;
      }
      .leaflet-control-attribution a { color:rgba(255,255,255,0.4) !important; }
    </style>

    <!-- HERO -->
    <section class="home-hero">
      <div class="home-hero__bg"></div>
      <div class="home-hero__orb home-hero__orb--1"></div>
      <div class="home-hero__orb home-hero__orb--2"></div>
      <div class="home-hero__orb home-hero__orb--3"></div>
      <div class="container">
        <div class="home-hero__content">
          <div class="home-hero__eyebrow">Live &amp; Work Anywhere</div>
          <h1 class="home-hero__title">
            Know the real cost<br>before you <em>move</em>.
          </h1>
          <p class="home-hero__subtitle">
            Compare monthly living costs across ${l}+ cities worldwide.
            Housing, food, transport, visa complexity, taxes — all in one place.
            Built for expats, remote workers and digital nomads.
          </p>
          <div class="home-hero__actions">
            <a href="/calculator" data-link class="home-hero__cta-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Calculate my budget
            </a>
            <a href="/destinations" data-link class="home-hero__cta-secondary">
              Explore destinations →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="home-stats-bar">
      <div class="container">${d}</div>
    </section>

    <!-- FOR WHO -->
    <section class="home-profiles">
      <div class="container">
        <div class="home-section-header">
          <span class="home-section-header__eyebrow">Who it's for</span>
          <h2>Built for people who move</h2>
          <p>Whether you're planning a full relocation or just exploring options, TripCost gives you the numbers to decide with confidence.</p>
        </div>
        <div class="home-profiles__grid">${k}</div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="home-how">
      <div class="container">
        <div class="home-section-header">
          <span class="home-section-header__eyebrow">How it works</span>
          <h2>Three steps to your answer</h2>
          <p>No sign-up. No credit card. Just real data and smart comparisons.</p>
        </div>
        <div class="home-steps">${f}</div>
      </div>
    </section>

    <!-- WORLD MAP -->
    <section class="home-map">
      <div class="home-map__header container">
        <div class="home-section-header">
          <span class="home-section-header__eyebrow">Interactive Map</span>
          <h2>Explore cities around the world</h2>
          <p>Click any marker to see costs, nomad score and visa info at a glance.</p>
        </div>
      </div>
      <div class="home-map__wrap">
        <div id="world-map"></div>
        <div class="home-map__legend">
          <span class="home-map__legend-dot" style="background:#10b981"></span> Score 85+
          <span class="home-map__legend-dot" style="background:#f59e0b;margin-left:12px"></span> Score 70–84
          <span class="home-map__legend-dot" style="background:#6366f1;margin-left:12px"></span> Score &lt;70
        </div>
      </div>
    </section>

    <!-- TOP CITIES -->
    <section class="home-cities">
      <div class="container">
        <div class="home-section-header">
          <span class="home-section-header__eyebrow">Top picks</span>
          <h2>Best cities for nomads right now</h2>
          <p>Ranked by overall nomad score — WiFi, safety, cost, and visa access combined.</p>
        </div>
        <div class="home-cities__grid">${r}</div>
        <div style="text-align:center;margin-top:40px">
          <a href="/destinations" data-link class="btn btn--secondary btn--lg">
            View all ${l} destinations →
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="home-cta">
      <div class="home-cta__inner container">
        <h2>Ready to find your city?</h2>
        <p>Enter your income and lifestyle — get a full breakdown of what life actually costs in your target destination.</p>
        <a href="/calculator" data-link class="home-hero__cta-primary" style="display:inline-flex;font-size:16px;padding:16px 36px">
          Start for free — no sign up
        </a>
      </div>
    </section>
  `;return ht(y)}function Ia(){const c=document.getElementById("world-map");if(c){if(!document.getElementById("leaflet-css")){const l=document.createElement("link");l.id="leaflet-css",l.rel="stylesheet",l.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",document.head.appendChild(l)}ya(async()=>{const{default:l}=await Promise.resolve().then(()=>dr);return{default:l}},void 0).then(({default:l})=>{const r=l.map("world-map",{center:[20,15],zoom:2,minZoom:2,maxZoom:6,zoomControl:!0,attributionControl:!0,scrollWheelZoom:!1});l.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap © CARTO",subdomains:"abcd",maxZoom:19}).addTo(r),Ot().forEach(d=>{var g,m;if(!d.lat||!d.lng)return;const u=((g=d.digitalNomad)==null?void 0:g.overallScore)??70,f=u>=85?"#10b981":u>=70?"#f59e0b":"#6366f1",P=Math.round(d.costs.accommodation.center*30+d.costs.food.standard*30+d.costs.transport+d.costs.coworking),k=l.divIcon({className:"",iconSize:[20,20],iconAnchor:[10,10],popupAnchor:[0,-14],html:`
          <div style="
            width:16px;height:16px;border-radius:50%;
            background:${f};
            border:2px solid rgba(255,255,255,0.8);
            box-shadow:0 0 0 4px ${f}44, 0 2px 8px rgba(0,0,0,0.4);
            cursor:pointer;
            transition:transform 0.15s;
          "></div>
        `}),y=l.marker([d.lat,d.lng],{icon:k}).addTo(r),w=`
        <div class="map-popup">
          <img class="map-popup__img" src="${d.image}" alt="${d.name}" loading="lazy" />
          <div class="map-popup__city">${d.name}</div>
          <div class="map-popup__country">${d.country}</div>
          <div class="map-popup__row">
            <span class="map-popup__label">Monthly budget</span>
            <span class="map-popup__val">~$${P.toLocaleString()}/mo</span>
          </div>
          <div class="map-popup__row">
            <span class="map-popup__label">Nomad score</span>
            <span class="map-popup__score" style="background:${f}">${u}/100</span>
          </div>
          <div class="map-popup__row">
            <span class="map-popup__label">Visa</span>
            <span class="map-popup__val" style="font-size:11px">${(m=d.visa)!=null&&m.remoteFriendly?"✅ Nomad friendly":"⬜ Standard"}</span>
          </div>
          <a class="map-popup__link" href="/city/${d.slug}" data-link>
            Explore ${d.name} →
          </a>
        </div>
      `;y.bindPopup(w,{maxWidth:220,className:"map-popup-container"}),y.on("mouseover",function(){this.openPopup()})}),c.addEventListener("click",d=>{const u=d.target.closest("[data-link]");u&&(d.preventDefault(),window.history.pushState({},"",u.getAttribute("href")),window.dispatchEvent(new PopStateEvent("popstate")))})})}}const ki=[{slug:"portugal",name:"Portugal",continent:"Europe",region:"Southern Europe",currency:"EUR",language:"Portuguese",timezone:"GMT+0",macro:{safetyIndex:82,healthcareIndex:85,infrastructureScore:78,costOfLivingIndex:65,qualityOfLifeIndex:84},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:70},nomad:{digitalNomadVisa:!0,visaEaseScore:80,avgInternetSpeed:120,coworkingDensityScore:75},family:{educationScore:78,familySafetyScore:83,suburbanAffordabilityScore:72},assets:{heroImage:"/images/countries/portugal.webp",flagEmoji:"🇵🇹"},seo:{metaTitle:"Living in Portugal – Cost of Living & Quality of Life",metaDescription:"Explore cost of living, healthcare, safety, and digital nomad opportunities in Portugal."}},{slug:"spain",name:"Spain",continent:"Europe",region:"Southern Europe",currency:"EUR",language:"Spanish",timezone:"GMT+1",macro:{safetyIndex:78,healthcareIndex:83,infrastructureScore:80,costOfLivingIndex:68,qualityOfLifeIndex:82},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:65},nomad:{digitalNomadVisa:!0,visaEaseScore:75,avgInternetSpeed:110,coworkingDensityScore:70},family:{educationScore:76,familySafetyScore:80,suburbanAffordabilityScore:70},assets:{heroImage:"/images/countries/spain.webp",flagEmoji:"🇪🇸"},seo:{metaTitle:"Living in Spain – Cost of Living & Lifestyle Overview",metaDescription:"Discover the best cities and lifestyle insights for living in Spain."}},{slug:"france",name:"France",continent:"Europe",region:"Western Europe",currency:"EUR",language:"French",timezone:"GMT+1",macro:{safetyIndex:74,healthcareIndex:88,infrastructureScore:85,costOfLivingIndex:75,qualityOfLifeIndex:83},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:55},nomad:{digitalNomadVisa:!1,visaEaseScore:60,avgInternetSpeed:140,coworkingDensityScore:78},family:{educationScore:85,familySafetyScore:76,suburbanAffordabilityScore:65},assets:{heroImage:"/images/countries/france.webp",flagEmoji:"🇫🇷"},seo:{metaTitle:"Living in France – Cost of Living & Family Guide",metaDescription:"Explore living costs, safety, and lifestyle conditions in France."}},{slug:"germany",name:"Germany",continent:"Europe",region:"Western Europe",currency:"EUR",language:"German",timezone:"GMT+1",macro:{safetyIndex:80,healthcareIndex:87,infrastructureScore:90,costOfLivingIndex:72,qualityOfLifeIndex:86},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:60},nomad:{digitalNomadVisa:!1,visaEaseScore:65,avgInternetSpeed:150,coworkingDensityScore:82},family:{educationScore:88,familySafetyScore:82,suburbanAffordabilityScore:70},assets:{heroImage:"/images/countries/germany.webp",flagEmoji:"🇩🇪"},seo:{metaTitle:"Living in Germany – Cost of Living & Infrastructure Overview",metaDescription:"Discover safety, healthcare, and digital work conditions in Germany."}},{slug:"italy",name:"Italy",continent:"Europe",region:"Southern Europe",currency:"EUR",language:"Italian",timezone:"GMT+1",macro:{safetyIndex:75,healthcareIndex:82,infrastructureScore:77,costOfLivingIndex:70,qualityOfLifeIndex:81},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:58},nomad:{digitalNomadVisa:!0,visaEaseScore:70,avgInternetSpeed:100,coworkingDensityScore:65},family:{educationScore:79,familySafetyScore:77,suburbanAffordabilityScore:68},assets:{heroImage:"/images/countries/italy.webp",flagEmoji:"🇮🇹"},seo:{metaTitle:"Living in Italy – Cost of Living & Lifestyle Guide",metaDescription:"Explore lifestyle, safety, and digital nomad options in Italy."}},{slug:"netherlands",name:"Netherlands",continent:"Europe",region:"Western Europe",currency:"EUR",language:"Dutch",timezone:"GMT+1",macro:{safetyIndex:85,healthcareIndex:89,infrastructureScore:92,costOfLivingIndex:78,qualityOfLifeIndex:90},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:62},nomad:{digitalNomadVisa:!1,visaEaseScore:70,avgInternetSpeed:160,coworkingDensityScore:88},family:{educationScore:90,familySafetyScore:87,suburbanAffordabilityScore:65},assets:{heroImage:"/images/countries/netherlands.webp",flagEmoji:"🇳🇱"},seo:{metaTitle:"Living in the Netherlands – Cost & Quality of Life",metaDescription:"Explore safety, infrastructure, and lifestyle in the Netherlands."}},{slug:"switzerland",name:"Switzerland",continent:"Europe",region:"Western Europe",currency:"CHF",language:"German",timezone:"GMT+1",macro:{safetyIndex:92,healthcareIndex:94,infrastructureScore:95,costOfLivingIndex:95,qualityOfLifeIndex:95},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"low",taxFriendlinessScore:80},nomad:{digitalNomadVisa:!1,visaEaseScore:65,avgInternetSpeed:170,coworkingDensityScore:75},family:{educationScore:93,familySafetyScore:92,suburbanAffordabilityScore:55},assets:{heroImage:"/images/countries/switzerland.webp",flagEmoji:"🇨🇭"},seo:{metaTitle:"Living in Switzerland – High Quality of Life",metaDescription:"Discover cost of living and lifestyle insights in Switzerland."}},{slug:"united-states",name:"United States",continent:"North America",region:"North America",currency:"USD",language:"English",timezone:"Multiple",macro:{safetyIndex:65,healthcareIndex:75,infrastructureScore:82,costOfLivingIndex:80,qualityOfLifeIndex:78},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:68},nomad:{digitalNomadVisa:!1,visaEaseScore:60,avgInternetSpeed:180,coworkingDensityScore:90},family:{educationScore:82,familySafetyScore:68,suburbanAffordabilityScore:60},assets:{heroImage:"/images/countries/united-states.webp",flagEmoji:"🇺🇸"},seo:{metaTitle:"Living in the United States – Cost & Lifestyle",metaDescription:"Explore cost of living and lifestyle conditions in the USA."}},{slug:"canada",name:"Canada",continent:"North America",region:"North America",currency:"CAD",language:"English",timezone:"Multiple",macro:{safetyIndex:85,healthcareIndex:88,infrastructureScore:84,costOfLivingIndex:82,qualityOfLifeIndex:90},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:60},nomad:{digitalNomadVisa:!1,visaEaseScore:65,avgInternetSpeed:150,coworkingDensityScore:70},family:{educationScore:88,familySafetyScore:87,suburbanAffordabilityScore:62},assets:{heroImage:"/images/countries/canada.webp",flagEmoji:"🇨🇦"},seo:{metaTitle:"Living in Canada – Cost of Living & Quality of Life",metaDescription:"Discover safety, healthcare, and living conditions in Canada."}},{slug:"sweden",name:"Sweden",continent:"Europe",region:"Northern Europe",currency:"SEK",language:"Swedish",timezone:"GMT+1",macro:{safetyIndex:88,healthcareIndex:91,infrastructureScore:92,costOfLivingIndex:88,qualityOfLifeIndex:94},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:55},nomad:{digitalNomadVisa:!1,visaEaseScore:70,avgInternetSpeed:175,coworkingDensityScore:82},family:{educationScore:93,familySafetyScore:90,suburbanAffordabilityScore:58},assets:{heroImage:"/images/countries/sweden.webp",flagEmoji:"🇸🇪"},seo:{metaTitle:"Living in Sweden – Cost of Living & Quality of Life",metaDescription:"Explore safety, healthcare and lifestyle insights in Sweden."}},{slug:"denmark",name:"Denmark",continent:"Europe",region:"Northern Europe",currency:"DKK",language:"Danish",timezone:"GMT+1",macro:{safetyIndex:90,healthcareIndex:92,infrastructureScore:93,costOfLivingIndex:90,qualityOfLifeIndex:95},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:54},nomad:{digitalNomadVisa:!1,visaEaseScore:72,avgInternetSpeed:170,coworkingDensityScore:78},family:{educationScore:92,familySafetyScore:91,suburbanAffordabilityScore:57},assets:{heroImage:"/images/countries/denmark.webp",flagEmoji:"🇩🇰"},seo:{metaTitle:"Living in Denmark – Lifestyle & Living Costs",metaDescription:"Discover cost of living and lifestyle in Denmark."}},{slug:"norway",name:"Norway",continent:"Europe",region:"Northern Europe",currency:"NOK",language:"Norwegian",timezone:"GMT+1",macro:{safetyIndex:91,healthcareIndex:93,infrastructureScore:90,costOfLivingIndex:92,qualityOfLifeIndex:96},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:56},nomad:{digitalNomadVisa:!1,visaEaseScore:68,avgInternetSpeed:160,coworkingDensityScore:70},family:{educationScore:94,familySafetyScore:92,suburbanAffordabilityScore:55},assets:{heroImage:"/images/countries/norway.webp",flagEmoji:"🇳🇴"},seo:{metaTitle:"Living in Norway – Quality of Life Overview",metaDescription:"Explore lifestyle, safety and living costs in Norway."}},{slug:"austria",name:"Austria",continent:"Europe",region:"Central Europe",currency:"EUR",language:"German",timezone:"GMT+1",macro:{safetyIndex:86,healthcareIndex:89,infrastructureScore:88,costOfLivingIndex:78,qualityOfLifeIndex:88},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:60},nomad:{digitalNomadVisa:!1,visaEaseScore:75,avgInternetSpeed:155,coworkingDensityScore:72},family:{educationScore:89,familySafetyScore:87,suburbanAffordabilityScore:66},assets:{heroImage:"/images/countries/austria.webp",flagEmoji:"🇦🇹"},seo:{metaTitle:"Living in Austria – Cost & Lifestyle Guide",metaDescription:"Discover safety, healthcare and quality of life in Austria."}},{slug:"ireland",name:"Ireland",continent:"Europe",region:"Western Europe",currency:"EUR",language:"English",timezone:"GMT+0",macro:{safetyIndex:84,healthcareIndex:82,infrastructureScore:80,costOfLivingIndex:85,qualityOfLifeIndex:86},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"low",taxFriendlinessScore:75},nomad:{digitalNomadVisa:!1,visaEaseScore:78,avgInternetSpeed:150,coworkingDensityScore:68},family:{educationScore:88,familySafetyScore:85,suburbanAffordabilityScore:62},assets:{heroImage:"/images/countries/ireland.webp",flagEmoji:"🇮🇪"},seo:{metaTitle:"Living in Ireland – Cost of Living & Opportunities",metaDescription:"Explore lifestyle, tax system and living costs in Ireland."}},{slug:"poland",name:"Poland",continent:"Europe",region:"Central Europe",currency:"PLN",language:"Polish",timezone:"GMT+1",macro:{safetyIndex:80,healthcareIndex:75,infrastructureScore:78,costOfLivingIndex:60,qualityOfLifeIndex:75},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:68},nomad:{digitalNomadVisa:!1,visaEaseScore:80,avgInternetSpeed:140,coworkingDensityScore:65},family:{educationScore:78,familySafetyScore:82,suburbanAffordabilityScore:75},assets:{heroImage:"/images/countries/poland.webp",flagEmoji:"🇵🇱"},seo:{metaTitle:"Living in Poland – Affordable European Lifestyle",metaDescription:"Explore cost of living and quality of life in Poland."}},{slug:"japan",name:"Japan",continent:"Asia",region:"East Asia",currency:"JPY",language:"Japanese",timezone:"GMT+9",macro:{safetyIndex:94,healthcareIndex:90,infrastructureScore:95,costOfLivingIndex:75,qualityOfLifeIndex:90},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:65},nomad:{digitalNomadVisa:!1,visaEaseScore:60,avgInternetSpeed:190,coworkingDensityScore:85},family:{educationScore:94,familySafetyScore:93,suburbanAffordabilityScore:68},assets:{heroImage:"/images/countries/japan.webp",flagEmoji:"🇯🇵"},seo:{metaTitle:"Living in Japan – Cost & Lifestyle Insights",metaDescription:"Explore safety, infrastructure and cost of living in Japan."}},{slug:"south-korea",name:"South Korea",continent:"Asia",region:"East Asia",currency:"KRW",language:"Korean",timezone:"GMT+9",macro:{safetyIndex:88,healthcareIndex:88,infrastructureScore:92,costOfLivingIndex:70,qualityOfLifeIndex:84},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:64},nomad:{digitalNomadVisa:!0,visaEaseScore:75,avgInternetSpeed:210,coworkingDensityScore:80},family:{educationScore:90,familySafetyScore:86,suburbanAffordabilityScore:72},assets:{heroImage:"/images/countries/south-korea.webp",flagEmoji:"🇰🇷"},seo:{metaTitle:"Living in South Korea – Modern & Connected",metaDescription:"Explore lifestyle, cost and digital infrastructure in South Korea."}},{slug:"thailand",name:"Thailand",continent:"Asia",region:"Southeast Asia",currency:"THB",language:"Thai",timezone:"GMT+7",macro:{safetyIndex:72,healthcareIndex:78,infrastructureScore:70,costOfLivingIndex:50,qualityOfLifeIndex:75},tax:{incomeTaxLevel:"low",corporateTaxLevel:"medium",taxFriendlinessScore:78},nomad:{digitalNomadVisa:!0,visaEaseScore:85,avgInternetSpeed:150,coworkingDensityScore:85},family:{educationScore:70,familySafetyScore:75,suburbanAffordabilityScore:85},assets:{heroImage:"/images/countries/thailand.webp",flagEmoji:"🇹🇭"},seo:{metaTitle:"Living in Thailand – Affordable Nomad Hub",metaDescription:"Explore cost of living and digital nomad life in Thailand."}},{slug:"malaysia",name:"Malaysia",continent:"Asia",region:"Southeast Asia",currency:"MYR",language:"Malay",timezone:"GMT+8",macro:{safetyIndex:75,healthcareIndex:80,infrastructureScore:75,costOfLivingIndex:52,qualityOfLifeIndex:76},tax:{incomeTaxLevel:"low",corporateTaxLevel:"low",taxFriendlinessScore:82},nomad:{digitalNomadVisa:!0,visaEaseScore:88,avgInternetSpeed:140,coworkingDensityScore:80},family:{educationScore:72,familySafetyScore:78,suburbanAffordabilityScore:88},assets:{heroImage:"/images/countries/malaysia.webp",flagEmoji:"🇲🇾"},seo:{metaTitle:"Living in Malaysia – Affordable Lifestyle",metaDescription:"Explore cost of living and quality of life in Malaysia."}},{slug:"singapore",name:"Singapore",continent:"Asia",region:"Southeast Asia",currency:"SGD",language:"English",timezone:"GMT+8",macro:{safetyIndex:95,healthcareIndex:92,infrastructureScore:98,costOfLivingIndex:92,qualityOfLifeIndex:94},tax:{incomeTaxLevel:"low",corporateTaxLevel:"low",taxFriendlinessScore:90},nomad:{digitalNomadVisa:!1,visaEaseScore:80,avgInternetSpeed:220,coworkingDensityScore:95},family:{educationScore:95,familySafetyScore:94,suburbanAffordabilityScore:50},assets:{heroImage:"/images/countries/singapore.webp",flagEmoji:"🇸🇬"},seo:{metaTitle:"Living in Singapore – Global Hub",metaDescription:"Explore cost of living and lifestyle in Singapore."}},{slug:"mexico",name:"Mexico",continent:"North America",region:"Latin America",currency:"MXN",language:"Spanish",timezone:"Multiple",macro:{safetyIndex:55,healthcareIndex:65,infrastructureScore:68,costOfLivingIndex:48,qualityOfLifeIndex:68},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:70},nomad:{digitalNomadVisa:!0,visaEaseScore:90,avgInternetSpeed:120,coworkingDensityScore:78},family:{educationScore:65,familySafetyScore:58,suburbanAffordabilityScore:90},assets:{heroImage:"/images/countries/mexico.webp",flagEmoji:"🇲🇽"},seo:{metaTitle:"Living in Mexico – Affordable & Vibrant",metaDescription:"Explore cost of living and lifestyle opportunities in Mexico."}},{slug:"brazil",name:"Brazil",continent:"South America",region:"Latin America",currency:"BRL",language:"Portuguese",timezone:"GMT-3",macro:{safetyIndex:50,healthcareIndex:65,infrastructureScore:60,costOfLivingIndex:55,qualityOfLifeIndex:65},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:68},nomad:{digitalNomadVisa:!0,visaEaseScore:85,avgInternetSpeed:110,coworkingDensityScore:65},family:{educationScore:60,familySafetyScore:52,suburbanAffordabilityScore:88},assets:{heroImage:"/images/countries/brazil.webp",flagEmoji:"🇧🇷"},seo:{metaTitle:"Living in Brazil – Cost & Lifestyle",metaDescription:"Discover lifestyle and living costs in Brazil."}},{slug:"colombia",name:"Colombia",continent:"South America",region:"Latin America",currency:"COP",language:"Spanish",timezone:"GMT-5",macro:{safetyIndex:58,healthcareIndex:70,infrastructureScore:65,costOfLivingIndex:45,qualityOfLifeIndex:70},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:72},nomad:{digitalNomadVisa:!0,visaEaseScore:88,avgInternetSpeed:130,coworkingDensityScore:80},family:{educationScore:68,familySafetyScore:60,suburbanAffordabilityScore:90},assets:{heroImage:"/images/countries/colombia.webp",flagEmoji:"🇨🇴"},seo:{metaTitle:"Living in Colombia – Affordable & Dynamic",metaDescription:"Explore cost of living and lifestyle in Colombia."}},{slug:"uae",name:"United Arab Emirates",continent:"Middle East",region:"Gulf",currency:"AED",language:"Arabic",timezone:"GMT+4",macro:{safetyIndex:90,healthcareIndex:85,infrastructureScore:95,costOfLivingIndex:88,qualityOfLifeIndex:85},tax:{incomeTaxLevel:"none",corporateTaxLevel:"low",taxFriendlinessScore:95},nomad:{digitalNomadVisa:!0,visaEaseScore:90,avgInternetSpeed:200,coworkingDensityScore:88},family:{educationScore:85,familySafetyScore:90,suburbanAffordabilityScore:60},assets:{heroImage:"/images/countries/uae.webp",flagEmoji:"🇦🇪"},seo:{metaTitle:"Living in UAE – Tax Free Lifestyle",metaDescription:"Explore living conditions and tax benefits in the UAE."}},{slug:"south-africa",name:"South Africa",continent:"Africa",region:"Southern Africa",currency:"ZAR",language:"English",timezone:"GMT+2",macro:{safetyIndex:45,healthcareIndex:65,infrastructureScore:62,costOfLivingIndex:50,qualityOfLifeIndex:60},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:70},nomad:{digitalNomadVisa:!0,visaEaseScore:80,avgInternetSpeed:100,coworkingDensityScore:60},family:{educationScore:60,familySafetyScore:50,suburbanAffordabilityScore:85},assets:{heroImage:"/images/countries/south-africa.webp",flagEmoji:"🇿🇦"},seo:{metaTitle:"Living in South Africa – Lifestyle Overview",metaDescription:"Explore cost of living and lifestyle insights in South Africa."}}];function za(c,l){var _;const r=ki.find(d=>d.slug===c);return r&&((_=r.rankingWeights)==null?void 0:_[l])||null}function Fo(c,l="solo"){const r=c.costs??{},_=r.accommodation??{},d=r.food??{},u=c.digitalNomad??{},f=_.center??0,P=_.suburb??0,k=d.standard??0,y=u.safetyScore??0,w=u.wifiSpeed??0,g=u.overallScore??0,m=f?1/f:0,T=P?1/P:0,I=k?1/k:0,E=(m+I)*1e3,x=(T+I)*1e3,B=za(c.countrySlug,l);if(B){const M=(l==="family"?x:E)*B.affordability+y*B.safety+w*B.internet+g*B.lifestyle;return Math.round(M)}let R=0;return l==="solo"?R=E*.25+y*.2+w*.25+g*.3:l==="family"?R=x*.3+y*.35+w*.1+g*.25:R=E*.3+y*.25+w*.2+g*.25,Math.round(R)}function Ea(){const c=new URLSearchParams(window.location.search),l=["solo","family","nomad"].includes(c.get("profile"))?c.get("profile"):"nomad",r=Ot().map(u=>({...u,score:Fo(u,l)||0,monthly:Math.round(u.costs.accommodation.center*30+u.costs.food.standard*30+u.costs.transport+u.costs.coworking)})).sort((u,f)=>f.score-u.score),_=JSON.stringify(r.map(u=>{var f,P,k,y;return{slug:u.slug,name:u.name,country:u.country,continent:u.continent,image:u.image,score:u.score,monthly:u.monthly,nomadScore:((f=u.digitalNomad)==null?void 0:f.overallScore)??0,safetyIndex:((P=u.safety)==null?void 0:P.safetyIndex)??0,wifiSpeed:((k=u.digitalNomad)==null?void 0:k.wifiSpeed)??0,visaFriendly:((y=u.visa)==null?void 0:y.remoteFriendly)??!1,tags:u.tags??[],lat:u.lat,lng:u.lng}})),d=`
    <style>
      /* ── Page layout ──────────────────── */
      .dest-page { background:#f8fafc;min-height:100vh; }

      /* ── Hero strip ───────────────────── */
      .dest-hero {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 60%,#1e1b4b 100%);
        padding:56px 0 48px;position:relative;overflow:hidden;
      }
      .dest-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 80% at 70% 50%,rgba(99,102,241,0.25) 0%,transparent 70%);
      }
      .dest-hero__inner { position:relative;z-index:2; }
      .dest-hero__eyebrow {
        font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;
        color:#818cf8;margin-bottom:14px;
      }
      .dest-hero__title {
        font-size:clamp(28px,4vw,48px);font-weight:800;color:#fff;
        letter-spacing:-0.025em;margin-bottom:12px;line-height:1.1;
      }
      .dest-hero__title em {
        font-style:normal;
        background:linear-gradient(90deg,#818cf8,#34d399);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      }
      .dest-hero__sub { font-size:15px;color:rgba(255,255,255,0.55);margin:0; }

      /* ── Filter bar ───────────────────── */
      .dest-filters {
        background:#fff;border-bottom:1px solid #e5e7eb;
        position:sticky;top:0;z-index:100;
        box-shadow:0 2px 12px rgba(0,0,0,0.06);
      }
      .dest-filters__inner {
        display:flex;align-items:center;gap:0;
        min-height:60px;overflow-x:auto;
        scrollbar-width:none;
      }
      .dest-filters__inner::-webkit-scrollbar { display:none; }

      .dest-filters__group {
        display:flex;align-items:center;gap:6px;
        padding:10px 20px;border-right:1px solid #f1f5f9;
        flex-shrink:0;
      }
      .dest-filters__group:last-child { border-right:none; }
      .dest-filters__label {
        font-size:11px;font-weight:600;letter-spacing:1px;
        text-transform:uppercase;color:#9ca3af;margin-right:4px;
        white-space:nowrap;
      }

      .filter-chip {
        display:inline-flex;align-items:center;gap:5px;
        padding:5px 12px;border-radius:999px;
        font-size:12px;font-weight:600;cursor:pointer;
        border:1.5px solid #e5e7eb;color:#6b7280;
        background:#fff;transition:all 0.15s;white-space:nowrap;
        user-select:none;
      }
      .filter-chip:hover { border-color:#c7d2fe;color:#4f46e5; }
      .filter-chip.is-active {
        background:linear-gradient(135deg,#6366f1,#8b5cf6);
        border-color:transparent;color:#fff;
        box-shadow:0 2px 8px rgba(99,102,241,0.35);
      }

      /* search */
      .dest-search {
        display:flex;align-items:center;gap:8px;
        padding:10px 20px;margin-left:auto;flex-shrink:0;
      }
      .dest-search input {
        border:1.5px solid #e5e7eb;border-radius:999px;
        padding:6px 14px 6px 32px;font-size:13px;
        width:180px;background:#f9fafb;
        transition:border-color 0.15s,width 0.2s;
        outline:none;
      }
      .dest-search input:focus { border-color:#6366f1;width:220px;background:#fff; }
      .dest-search__icon {
        position:relative;
      }
      .dest-search__icon svg {
        position:absolute;left:10px;top:50%;transform:translateY(-50%);
        color:#9ca3af;pointer-events:none;
      }

      /* sort */
      .dest-sort select {
        border:1.5px solid #e5e7eb;border-radius:8px;
        padding:6px 12px;font-size:12px;font-weight:600;color:#374151;
        background:#f9fafb;cursor:pointer;outline:none;
      }

      /* ── Result info bar ──────────────── */
      .dest-resultbar {
        padding:16px 0 0;
        display:flex;align-items:center;justify-content:space-between;
      }
      .dest-resultbar__count {
        font-size:13px;font-weight:600;color:#374151;
      }
      .dest-resultbar__count span { color:#6366f1; }

      /* ── Grid ─────────────────────────── */
      .dest-grid {
        display:grid;
        grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
        gap:20px;
        padding:20px 0 64px;
      }

      /* ── City card ────────────────────── */
      .dest-card {
        background:#fff;border:1px solid #e5e7eb;border-radius:18px;
        overflow:hidden;cursor:pointer;
        transition:transform 0.22s,box-shadow 0.22s,border-color 0.22s;
        text-decoration:none;display:block;
      }
      .dest-card:hover {
        transform:translateY(-4px);
        box-shadow:0 20px 48px rgba(0,0,0,0.11);
        border-color:#c7d2fe;text-decoration:none;
      }
      .dest-card__img {
        position:relative;height:190px;overflow:hidden;
      }
      .dest-card__img img {
        width:100%;height:100%;object-fit:cover;
        transition:transform 0.4s ease;
      }
      .dest-card:hover .dest-card__img img { transform:scale(1.06); }
      .dest-card__img-overlay {
        position:absolute;inset:0;
        background:linear-gradient(to top,rgba(0,0,0,0.45) 0%,transparent 55%);
      }
      .dest-card__continent {
        position:absolute;top:12px;left:12px;
        background:rgba(0,0,0,0.5);backdrop-filter:blur(6px);
        color:rgba(255,255,255,0.9);font-size:10px;font-weight:700;
        letter-spacing:1.5px;text-transform:uppercase;
        padding:3px 10px;border-radius:999px;
      }
      .dest-card__score-badge {
        position:absolute;top:12px;right:12px;
        color:#fff;font-size:14px;font-weight:800;
        padding:4px 10px;border-radius:999px;
        backdrop-filter:blur(4px);
        box-shadow:0 2px 8px rgba(0,0,0,0.3);
      }
      .dest-card__body { padding:16px 18px 18px; }
      .dest-card__top {
        display:flex;justify-content:space-between;
        align-items:flex-start;margin-bottom:12px;
      }
      .dest-card__name { font-size:17px;font-weight:800;color:#111827;margin:0 0 3px; }
      .dest-card__country { font-size:12px;color:#9ca3af;margin:0; }
      .dest-card__price { text-align:right;flex-shrink:0; }
      .dest-card__price-val {
        font-size:19px;font-weight:800;color:#1e1b4b;letter-spacing:-0.02em;
      }
      .dest-card__price-val em { font-size:11px;font-weight:500;color:#9ca3af;font-style:normal; }
      .dest-card__price-label { font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px; }
      .dest-card__metrics {
        display:flex;gap:6px;flex-wrap:wrap;
      }
      .dest-card__metric {
        display:inline-flex;align-items:center;gap:4px;
        background:#f8fafc;border:1px solid #f1f5f9;
        border-radius:999px;padding:3px 9px;
        font-size:11px;font-weight:600;color:#374151;
      }
      .dest-card__metric svg { flex-shrink:0; }
      .dest-card__visa-tag {
        display:inline-flex;align-items:center;gap:4px;
        border-radius:999px;padding:3px 9px;
        font-size:11px;font-weight:600;
      }
      .dest-card__visa-tag--yes { background:#d1fae5;color:#065f46; }
      .dest-card__visa-tag--no  { background:#f1f5f9;color:#6b7280; }

      /* ── Empty state ──────────────────── */
      .dest-empty {
        grid-column:1/-1;text-align:center;padding:80px 20px;
        color:#9ca3af;
      }
      .dest-empty__icon { font-size:48px;margin-bottom:16px; }
      .dest-empty h3 { font-size:18px;font-weight:700;color:#374151;margin-bottom:8px; }

      /* ── Responsive ───────────────────── */
      @media(max-width:768px){
        .dest-search { display:none; }
        .dest-sort  { display:none; }
        .dest-grid  { grid-template-columns:1fr 1fr; }
      }
      @media(max-width:500px){
        .dest-grid { grid-template-columns:1fr; }
      }
    </style>

    <div class="dest-page">

      <!-- HERO -->
      <section class="dest-hero">
        <div class="container dest-hero__inner">
          <p class="dest-hero__eyebrow">Global Explorer</p>
          <h1 class="dest-hero__title">Find your <em>next city</em>.</h1>
          <p class="dest-hero__sub">
            ${r.length} destinations ranked by cost, safety, WiFi &amp; lifestyle.
          </p>
        </div>
      </section>

      <!-- FILTER BAR -->
      <div class="dest-filters" id="dest-filters">
        <div class="container">
          <div class="dest-filters__inner">

            <div class="dest-filters__group">
              <span class="dest-filters__label">Profile</span>
              <button class="filter-chip ${l==="nomad"?"is-active":""}" data-filter="profile" data-val="nomad">🌍 Nomad</button>
              <button class="filter-chip ${l==="solo"?"is-active":""}"  data-filter="profile" data-val="solo">👤 Solo</button>
              <button class="filter-chip ${l==="family"?"is-active":""}" data-filter="profile" data-val="family">👨‍👩‍👧 Family</button>
            </div>

            <div class="dest-filters__group">
              <span class="dest-filters__label">Region</span>
              <button class="filter-chip is-active" data-filter="region" data-val="all">All</button>
              <button class="filter-chip" data-filter="region" data-val="Europe">🇪🇺 Europe</button>
              <button class="filter-chip" data-filter="region" data-val="Asia">🌏 Asia</button>
              <button class="filter-chip" data-filter="region" data-val="Africa">🌍 Africa</button>
              <button class="filter-chip" data-filter="region" data-val="Americas">🌎 Americas</button>
            </div>

            <div class="dest-filters__group">
              <span class="dest-filters__label">Budget</span>
              <button class="filter-chip is-active" data-filter="budget" data-val="all">All</button>
              <button class="filter-chip" data-filter="budget" data-val="low">Under $1,500</button>
              <button class="filter-chip" data-filter="budget" data-val="mid">$1,500–$3,000</button>
              <button class="filter-chip" data-filter="budget" data-val="high">$3,000+</button>
            </div>

            <div class="dest-search">
              <div class="dest-search__icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <input type="text" id="dest-search-input" placeholder="Search city or country…" />
              </div>
            </div>

            <div class="dest-filters__group dest-sort">
              <span class="dest-filters__label">Sort</span>
              <select id="dest-sort-select">
                <option value="score">Best Score</option>
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
                <option value="alpha">A → Z</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      <!-- RESULTS -->
      <div class="container">
        <div class="dest-resultbar">
          <div class="dest-resultbar__count" id="dest-count">
            Showing <span id="dest-count-num">${r.length}</span> cities
          </div>
        </div>
        <div class="dest-grid" id="dest-grid"></div>
      </div>

    </div>

    <script id="dest-data" type="application/json">${_}<\/script>
  `;return ht(d)}function Ma(){const c=document.getElementById("dest-data");if(!c)return;const l=JSON.parse(c.textContent),r=document.getElementById("dest-grid"),_=document.getElementById("dest-count-num");let d={profile:"nomad",region:"all",budget:"all",sort:"score",search:""};const u=new URLSearchParams(window.location.search).get("profile");["solo","family","nomad"].includes(u)&&(d.profile=u);function f(g){return g>=85?"#10b981":g>=70?"#f59e0b":"#6366f1"}function P(g){const m=f(g.nomadScore);return`
      <a href="/city/${g.slug}" data-link class="dest-card">
        <div class="dest-card__img">
          <img src="${g.image}" alt="${g.name}" loading="lazy" />
          <div class="dest-card__img-overlay"></div>
          <span class="dest-card__continent">${g.continent}</span>
          <span class="dest-card__score-badge" style="background:${m}">
            ${g.nomadScore}/100
          </span>
        </div>
        <div class="dest-card__body">
          <div class="dest-card__top">
            <div>
              <p class="dest-card__name">${g.name}</p>
              <p class="dest-card__country">${g.country}</p>
            </div>
            <div class="dest-card__price">
              <div class="dest-card__price-label">From</div>
              <div class="dest-card__price-val">$${g.monthly.toLocaleString()}<em>/mo</em></div>
            </div>
          </div>
          <div class="dest-card__metrics">
            <span class="dest-card__metric">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Safety ${g.safetyIndex}
            </span>
            <span class="dest-card__metric">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
              </svg>
              ${g.wifiSpeed} Mbps
            </span>
            <span class="dest-card__visa-tag ${g.visaFriendly?"dest-card__visa-tag--yes":"dest-card__visa-tag--no"}">
              ${g.visaFriendly?"✅ Nomad visa":"⬜ Standard visa"}
            </span>
          </div>
        </div>
      </a>
    `}function k(){let g=[...l];if(d.region!=="all"&&(g=g.filter(m=>d.region==="Americas"?m.continent.includes("America"):m.continent===d.region)),d.budget==="low"&&(g=g.filter(m=>m.monthly<1500)),d.budget==="mid"&&(g=g.filter(m=>m.monthly>=1500&&m.monthly<=3e3)),d.budget==="high"&&(g=g.filter(m=>m.monthly>3e3)),d.search){const m=d.search.toLowerCase();g=g.filter(T=>T.name.toLowerCase().includes(m)||T.country.toLowerCase().includes(m))}d.sort==="score"&&g.sort((m,T)=>T.nomadScore-m.nomadScore),d.sort==="price-asc"&&g.sort((m,T)=>m.monthly-T.monthly),d.sort==="price-desc"&&g.sort((m,T)=>T.monthly-m.monthly),d.sort==="alpha"&&g.sort((m,T)=>m.name.localeCompare(T.name)),g.length===0?r.innerHTML=`
        <div class="dest-empty">
          <div class="dest-empty__icon">🔍</div>
          <h3>No cities match your filters</h3>
          <p>Try adjusting your region or budget filter.</p>
        </div>
      `:r.innerHTML=g.map(P).join(""),_.textContent=g.length}document.querySelectorAll("[data-filter]").forEach(g=>{g.addEventListener("click",()=>{const m=g.dataset.filter,T=g.dataset.val;document.querySelectorAll(`[data-filter="${m}"]`).forEach(I=>I.classList.remove("is-active")),g.classList.add("is-active"),d[m]=T,k()})});const y=document.getElementById("dest-search-input");y&&y.addEventListener("input",g=>{d.search=g.target.value.trim(),k()});const w=document.getElementById("dest-sort-select");w&&w.addEventListener("change",g=>{d.sort=g.target.value,k()}),r.addEventListener("click",g=>{const m=g.target.closest("[data-link]");m&&(g.preventDefault(),window.history.pushState({},"",m.getAttribute("href")),window.dispatchEvent(new PopStateEvent("popstate")))}),k()}function At(c,l=""){return c!=null&&c!==""?c:l}function Aa(c){const l=At(c.country,"the country"),r=At(c.continent,null);return r?`${l}, ${r}`:l}function Oa(c){const l=At(c.name,"This city"),r=Aa(c);return`
${l} is a popular destination located in ${r}.
It attracts digital nomads, expatriates, and travelers who are looking to balance lifestyle, comfort, and cost of living.

This page provides a detailed overview of the cost of living in ${l}, covering housing, food, transportation, and daily expenses to help you decide whether it fits your budget and lifestyle.
  `.trim()}function gi(c,l){const r=At(c.name,"this city"),_=At(c.country,"the country"),d={accommodation:`
Housing costs in ${r} can vary significantly depending on location.
Living in central areas is generally more expensive, while neighborhoods outside the city center tend to offer more affordable rental options.
    `,food:`
Food expenses in ${r} range from affordable local meals to higher-end dining experiences.
Overall, grocery and dining costs remain reasonable compared to other major cities in ${_}.
    `,transport:`
Public transportation in ${r} is widely used and generally efficient.
Monthly transport costs depend on commuting distance and daily travel habits.
    `,utilities:`
Utilities and internet services in ${r} are generally reliable.
Internet quality is suitable for remote work, video calls, and everyday online activities.
    `,leisure:`
Leisure and entertainment costs in ${r} vary depending on lifestyle.
The city offers a wide range of cultural activities, dining options, and entertainment for different budgets.
    `};return At(d[l],"").trim()}function Ba(c){const l=At(c.name,"this city");return`
Living in ${l} offers a mix of lifestyle, culture, and modern infrastructure.
Residents benefit from a dynamic urban environment, diverse food options, and convenient transportation.

The overall quality of life in ${l} makes it an attractive place to live for both locals and foreigners, depending on personal preferences and budget.
  `.trim()}function Ra(c){return`
${At(c.name,"this city")} is considered a viable option for digital nomads and expatriates.
The city provides reliable internet infrastructure, access to essential services, and a generally safe living environment.

While the cost of living may be higher than in some destinations, many remote workers find the stability and quality of life worth the investment.
  `.trim()}function $a(c){const l=At(c.name,"this city");return[{question:`Is ${l} expensive?`,answer:`${l} is generally considered expensive compared to many cities, but actual costs depend on lifestyle choices and housing location.`},{question:`How much do you need per month to live in ${l}?`,answer:`Monthly expenses in ${l} vary based on accommodation, lifestyle, and personal spending habits. A moderate to high budget is typically required.`},{question:`Is ${l} safe for foreigners?`,answer:`${l} is generally regarded as a safe city, including for foreigners and long-term residents.`},{question:`Is ${l} good for digital nomads?`,answer:`${l} offers good infrastructure and internet connectivity for digital nomads, though cost considerations are important for long-term stays.`}]}function bi(c,l=""){return c!=null&&c!==""?c:l}function Na(c){const l=bi(c.name,"City"),r=bi(c.country,"");return r?`Cost of Living in ${l}, ${r} – Prices & Budget`:`Cost of Living in ${l} – Prices & Budget`}function Da(c){return`Detailed cost of living in ${bi(c.name,"this city")}. Housing, food, transport, safety, and digital nomad lifestyle to help you plan your budget.`}function me({title:c,description:l}){c&&(document.title=c);let r=document.querySelector('meta[name="description"]');r||(r=document.createElement("meta"),r.setAttribute("name","description"),document.head.appendChild(r)),l&&r.setAttribute("content",l)}function Za(c){const{slug:l}=c,r=vi(l);if(!r)return ht(`
      <div style="text-align:center;padding:120px 24px">
        <div style="font-size:48px;margin-bottom:16px">🌍</div>
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">City not found</h1>
        <p style="color:#6b7280;margin-bottom:32px">We couldn't find a city with that name.</p>
        <a href="/destinations" data-link class="btn btn--primary btn--lg">Browse all destinations</a>
      </div>
    `);const _=r.costs??{},d=_.accommodation??{},u=_.food??{},f=r.digitalNomad??{},P=r.visa??{},k=r.tax??{},y=r.infrastructure??{},w=r.safety??{},g=r.macro??{},m=(d.center??0)*30+(u.standard??0)*30+(_.transport??0)+(_.coworking??0),T=(d.suburb??0)*30+(u.standard??0)*30+(_.transport??0)+(_.coworking??0),I=Oa(r),E=Ba(r),x=Ra(r),B=$a(r),R=Na(r),v=Da(r),M=Ot();let A=M.filter(S=>S.slug!==r.slug&&S.country===r.country);A.length<3&&(A=M.filter(S=>S.slug!==r.slug&&S.continent===r.continent)),A=A.slice(0,4);const F=[];m<1e3?F.push({text:"Very Affordable",color:"#065f46",bg:"#d1fae5"}):m<1600?F.push({text:"Affordable",color:"#065f46",bg:"#d1fae5"}):m>3e3&&F.push({text:"High Cost",color:"#7f1d1d",bg:"#fee2e2"}),f.wifiSpeed>=100&&F.push({text:`${f.wifiSpeed} Mbps`,color:"#1e3a5f",bg:"#dbeafe"}),P.remoteFriendly&&F.push({text:"Nomad Visa",color:"#4c1d95",bg:"#ede9fe"}),(w.safetyIndex??0)>=80&&F.push({text:"Very Safe",color:"#065f46",bg:"#d1fae5"});const U=F.slice(0,3).map(S=>`<span style="background:${S.bg};color:${S.color};font-size:11px;font-weight:700;
      padding:4px 12px;border-radius:999px;letter-spacing:0.3px">${S.text}</span>`).join("");function it(S,D=80,K=60){return S>=D?"#10b981":S>=K?"#f59e0b":"#ef4444"}const ot=Math.max(d.center*30,d.suburb*30,u.budget*30,u.standard*30,u.premium*30,_.transport,_.coworking);function nt(S,D="#6366f1"){return`<div style="flex:1;height:6px;background:#f1f5f9;border-radius:6px;overflow:hidden">
      <div style="height:100%;width:${ot>0?Math.round(S/ot*100):0}%;background:${D};border-radius:6px;transition:width 0.5s"></div>
    </div>`}function W(S,D,K){return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <span style="font-size:12px;color:#6b7280;width:100px;flex-shrink:0">${S}</span>
      ${nt(D,K)}
      <span style="font-size:13px;font-weight:700;color:#111827;white-space:nowrap;min-width:64px;text-align:right">
        ${$t(D,r.currencySymbol)}/mo
      </span>
    </div>`}const tt=[{q:`How much does it cost to live in ${r.name}?`,a:`A standard lifestyle in ${r.name} costs between ${$t(T,r.currencySymbol)}/month (suburb) and ${$t(m,r.currencySymbol)}/month (city center), covering accommodation, food, transport and coworking.`},{q:`Is ${r.name} safe for digital nomads?`,a:`${r.name} has a safety index of ${w.safetyIndex??"N/A"}/100. ${(w.safetyIndex??0)>=70?"It is generally considered safe. Normal precautions apply.":"Exercise standard urban caution."}`},{q:`How is the internet in ${r.name}?`,a:`Average WiFi speed in ${r.name} is ${f.wifiSpeed??"N/A"} Mbps — ${(f.wifiSpeed??0)>=100?"excellent for video calls and remote work":(f.wifiSpeed??0)>=50?"good for most remote tasks":"adequate for basic tasks"}. Coworking spaces offer faster dedicated lines.`},{q:`Does ${r.name} have a digital nomad visa?`,a:P.remoteFriendly?`Yes — ${r.name} offers a remote work visa (${P.type}). Stay up to ${P.stayDurationMonths} months. Minimum income requirement: ${P.minIncomeRequirement>0?"$"+P.minIncomeRequirement+"/mo":"none stated"}. Processing: ~${P.processingTimeDays} days.`:`${r.name} does not currently offer a dedicated digital nomad visa. Standard tourist or long-stay visas apply. Always verify with official sources before travelling.`}],pt=[...B||[],...tt],st=pt.map((S,D)=>`
    <div class="cp-faq-item${D===0?" is-open":""}">
      <button class="cp-faq-q">
        <span>${S.q||S.question}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="cp-faq-a">${S.a||S.answer}</div>
    </div>
  `).join(""),_t=A.map(S=>{var K,X,j,q,mt,vt,Xt,Ht;const D=Math.round((((X=(K=S.costs)==null?void 0:K.accommodation)==null?void 0:X.center)??0)*30+(((q=(j=S.costs)==null?void 0:j.food)==null?void 0:q.standard)??0)*30+(((mt=S.costs)==null?void 0:mt.transport)??0)+(((vt=S.costs)==null?void 0:vt.coworking)??0));return`
      <a href="/city/${S.slug}" data-link class="cp-sim-card">
        <div class="cp-sim-card__img">
          <img src="${S.image}" alt="${S.name}" loading="lazy" />
          <div class="cp-sim-card__overlay"></div>
          <span class="cp-sim-card__score" style="background:${it(((Xt=S.digitalNomad)==null?void 0:Xt.overallScore)??0)}">${((Ht=S.digitalNomad)==null?void 0:Ht.overallScore)??"—"}</span>
        </div>
        <div class="cp-sim-card__body">
          <strong>${S.name}</strong>
          <span>${S.country}</span>
          <span class="cp-sim-card__price">~$${D.toLocaleString()}/mo</span>
        </div>
      </a>
    `}).join(""),et=A.map(S=>`<a href="/compare/${r.slug}-vs-${S.slug}" data-link class="cp-compare-pill">
      ${r.name} vs ${S.name}
    </a>`).join("");function Z(S,D,K=100){const X=Math.round(D/K*100),j=it(D,80,60);return`
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;margin-bottom:5px">
          <span style="font-size:12px;color:#6b7280;font-weight:500">${S}</span>
          <span style="font-size:12px;font-weight:700;color:${j}">${D}/100</span>
        </div>
        <div style="height:6px;background:#f1f5f9;border-radius:6px;overflow:hidden">
          <div style="height:100%;width:${X}%;background:${j};border-radius:6px;transition:width 0.5s"></div>
        </div>
      </div>`}const z=`
    <style>
      /* ── Hero ───────────────────────────── */
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

      /* ── Sticky nav ─────────────────────── */
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

      /* ── Sections ───────────────────────── */
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

      /* ── KPI grid ───────────────────────── */
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

      /* ── Cost breakdown grid ────────────── */
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

      /* ── Infrastructure ─────────────────── */
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

      /* ── FAQ ────────────────────────────── */
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

      /* ── Similar cities ─────────────────── */
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

      /* ── Compare pills ──────────────────── */
      .cp-compare-pills { display:flex;flex-wrap:wrap;gap:8px;margin-top:20px; }
      .cp-compare-pill {
        padding:7px 16px;border:1.5px solid #e5e7eb;border-radius:999px;
        font-size:12px;font-weight:600;color:#4f46e5;text-decoration:none;
        background:#f9fafb;transition:all 0.15s;
      }
      .cp-compare-pill:hover {
        border-color:#c7d2fe;background:#eef2ff;text-decoration:none;
      }

      /* ── Visa card ──────────────────────── */
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

      /* ── CTA ────────────────────────────── */
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

      /* ── Responsive ─────────────────────── */
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

    <!-- ══ HERO — full bleed image ════════════════════════ -->
    <section class="cp-hero">
      <img class="cp-hero__img" src="${r.image}" alt="Cost of living in ${r.name}" />
      <div class="cp-hero__gradient"></div>
      <div class="cp-hero__content">
        <div class="container">
          <div class="cp-hero__badges">${U}</div>
          <h1 class="cp-hero__title">Cost of Living in ${r.name}</h1>
          <p class="cp-hero__sub">${r.country} · ${r.continent} · Updated March 2026</p>

          <div class="cp-hero__kpis">
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Monthly (center)</div>
              <div class="cp-hero__kpi-val">${$t(m,r.currencySymbol)}</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Nomad Score</div>
              <div class="cp-hero__kpi-val">${f.overallScore??"—"}/100</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Safety Index</div>
              <div class="cp-hero__kpi-val">${w.safetyIndex??"—"}/100</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">WiFi Speed</div>
              <div class="cp-hero__kpi-val">${f.wifiSpeed??"—"} Mbps</div>
            </div>
          </div>

          <div class="cp-hero__actions">
            <a href="/calculator" data-link class="cp-btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Calculate my budget
            </a>
            ${A[0]?`<a href="/compare/${r.slug}-vs-${A[0].slug}" data-link class="cp-btn-secondary">Compare with ${A[0].name} →</a>`:""}
          </div>
        </div>
      </div>
    </section>

    <!-- ══ STICKY NAV ══════════════════════════════════════ -->
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

    <!-- ══ OVERVIEW ════════════════════════════════════════ -->
    <section class="cp-section" id="overview">
      <div class="container">
        <p class="cp-section__eyebrow">At a Glance</p>
        <h2 class="cp-section__title">${r.name} Overview</h2>
        <p class="cp-section__lead">${I}</p>

        <div class="cp-kpis">
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🏠</div>
            <div class="cp-kpi__label">City Center rent</div>
            <div class="cp-kpi__val">${$t(d.center*30,r.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🍽️</div>
            <div class="cp-kpi__label">Food (standard)</div>
            <div class="cp-kpi__val">${$t(u.standard*30,r.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🚇</div>
            <div class="cp-kpi__label">Transport</div>
            <div class="cp-kpi__val">${$t(_.transport,r.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">💻</div>
            <div class="cp-kpi__label">Coworking</div>
            <div class="cp-kpi__val">${$t(_.coworking,r.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ COSTS ═══════════════════════════════════════════ -->
    <section class="cp-section cp-section--alt" id="costs">
      <div class="container">
        <p class="cp-section__eyebrow">Monthly Expenses</p>
        <h2 class="cp-section__title">Cost Breakdown in ${r.name}</h2>
        <p class="cp-section__lead">
          All prices in USD. Bar lengths are relative to the highest cost category.
        </p>
        <div class="cp-costs">

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🏠 Accommodation</div>
            <div class="cp-cost-card__desc">${gi(r,"accommodation")}</div>
            ${W("City center",d.center*30,"#6366f1")}
            ${W("Suburb",d.suburb*30,"#8b5cf6")}
          </div>

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🍽️ Food & Dining</div>
            <div class="cp-cost-card__desc">${gi(r,"food")}</div>
            ${W("Budget",u.budget*30,"#10b981")}
            ${W("Standard",u.standard*30,"#059669")}
            ${W("Premium",u.premium*30,"#047857")}
          </div>

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🚇 Transport & Work</div>
            <div class="cp-cost-card__desc">${gi(r,"transport")}</div>
            ${W("Transport",_.transport,"#f59e0b")}
            ${W("Coworking",_.coworking,"#d97706")}
          </div>

        </div>
      </div>
    </section>

    <!-- ══ INFRASTRUCTURE ══════════════════════════════════ -->
    <section class="cp-section" id="infrastructure">
      <div class="container">
        <p class="cp-section__eyebrow">City Quality</p>
        <h2 class="cp-section__title">Infrastructure & Quality of Life</h2>
        <div class="cp-infra">

          <div class="cp-infra-card">
            <div class="cp-infra-card__title">Infrastructure Scores</div>
            ${Z("Public Transport",y.publicTransportQuality??0)}
            ${Z("Healthcare",y.healthcareQuality??0)}
            ${Z("English Proficiency",y.englishProficiency??0)}
            ${Z("Airport Connectivity",y.airportConnectivity??0)}
          </div>

          <div class="cp-infra-card">
            <div class="cp-infra-card__title">Safety & Macro</div>
            ${Z("Safety Index",w.safetyIndex??0)}
            ${Z("Nomad Score",f.overallScore??0)}
            <div style="margin-top:20px;padding-top:16px;border-top:1px solid #f1f5f9">
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                <span style="color:#6b7280">Crime Level</span>
                <strong style="color:#111827">${w.crimeLevel??"—"}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                <span style="color:#6b7280">Currency Stability</span>
                <strong style="color:#111827">${g.currencyStability??"—"}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:12px">
                <span style="color:#6b7280">Inflation Rate</span>
                <strong style="color:#111827">${g.inflationRate??"—"}%</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ══ VISA & TAX ══════════════════════════════════════ -->
    <section class="cp-section cp-section--alt" id="visa">
      <div class="container">
        <p class="cp-section__eyebrow">Legal & Financial</p>
        <h2 class="cp-section__title">Visa & Tax in ${r.name}</h2>
        <p class="cp-section__lead">
          ${P.remoteFriendly?`${r.name} offers a dedicated remote work visa — one of the most accessible destinations for digital nomads and expats.`:`${r.name} does not currently offer a dedicated digital nomad visa. Standard tourist or long-stay visas apply.`}
        </p>
        <div class="cp-visa">
          <div class="cp-visa__head">
            <span class="cp-visa__head-title">${P.type??"Standard Visa"}</span>
            <span class="cp-visa__tag" style="background:${P.remoteFriendly?"#d1fae5":"#f1f5f9"};color:${P.remoteFriendly?"#065f46":"#6b7280"}">
              ${P.remoteFriendly?"✅ Nomad Friendly":"⬜ Standard"}
            </span>
          </div>
          <div class="cp-visa__body">
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Max stay</span>
              <span class="cp-visa__row-val">${P.stayDurationMonths??"—"} months</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Processing time</span>
              <span class="cp-visa__row-val">~${P.processingTimeDays??"—"} days</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Min. income required</span>
              <span class="cp-visa__row-val">${P.minIncomeRequirement>0?"$"+P.minIncomeRequirement+"/mo":"None stated"}</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Income tax (top rate)</span>
              <span class="cp-visa__row-val">${k.personalIncomeTaxTopRate??"—"}%</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Corporate tax</span>
              <span class="cp-visa__row-val">${k.corporateTax??"—"}%</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Capital gains tax</span>
              <span class="cp-visa__row-val">${k.capitalGainsTax??"—"}%</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ LIFESTYLE ═══════════════════════════════════════ -->
    <section class="cp-section" id="lifestyle">
      <div class="container">
        <p class="cp-section__eyebrow">Daily Life</p>
        <h2 class="cp-section__title">Living in ${r.name}</h2>
        <p class="cp-section__lead">${E}</p>
      </div>
    </section>

    <!-- ══ FOR NOMADS ══════════════════════════════════════ -->
    <section class="cp-section cp-section--alt" id="nomads">
      <div class="container">
        <p class="cp-section__eyebrow">Remote Work</p>
        <h2 class="cp-section__title">Is ${r.name} good for digital nomads?</h2>
        <p class="cp-section__lead">${x}</p>
      </div>
    </section>

    <!-- ══ FAQ ═════════════════════════════════════════════ -->
    <section class="cp-section" id="faq">
      <div class="container">
        <p class="cp-section__eyebrow">Questions</p>
        <h2 class="cp-section__title">FAQ — Living in ${r.name}</h2>
        <div class="cp-faq-list">${st}</div>
      </div>
    </section>

    <!-- ══ SIMILAR CITIES ══════════════════════════════════ -->
    <section class="cp-section cp-section--alt" id="similar">
      <div class="container">
        <p class="cp-section__eyebrow">Explore More</p>
        <h2 class="cp-section__title">Cities similar to ${r.name}</h2>
        <p class="cp-section__lead">Same region, comparable cost or lifestyle profile.</p>
        <div class="cp-similar">${_t}</div>

        <div style="margin-top:32px">
          <p style="font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:12px">Compare ${r.name} with</p>
          <div class="cp-compare-pills">${et}</div>
        </div>
      </div>
    </section>

    <!-- ══ CTA ════════════════════════════════════════════ -->
    <section class="cp-cta">
      <div class="cp-cta__inner container">
        <h2>Plan your budget for ${r.name}</h2>
        <p>Get a personalized cost estimate based on your income and lifestyle.</p>
        <a href="/calculator" data-link class="cp-btn-primary" style="display:inline-flex;font-size:15px;padding:13px 28px">
          Open the Calculator →
        </a>
      </div>
    </section>
  `;me({title:R,description:v});const Q=document.getElementById("faq-jsonld");Q&&Q.remove();const C=document.createElement("script");return C.type="application/ld+json",C.id="faq-jsonld",C.textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:pt.map(S=>({"@type":"Question",name:S.q||S.question,acceptedAnswer:{"@type":"Answer",text:S.a||S.answer}}))}),document.head.appendChild(C),ht(z)}function Fa(){document.querySelectorAll(".cp-faq-item").forEach(r=>{var _;(_=r.querySelector(".cp-faq-q"))==null||_.addEventListener("click",()=>{const d=r.classList.contains("is-open");document.querySelectorAll(".cp-faq-item").forEach(u=>u.classList.remove("is-open")),d||r.classList.add("is-open")})});const c=document.querySelectorAll("[id]"),l=document.querySelectorAll(".cp-nav__link[data-section]");if(l.length&&c.length){const r=new IntersectionObserver(_=>{_.forEach(d=>{if(d.isIntersecting){l.forEach(f=>f.classList.remove("is-active"));const u=document.querySelector(`.cp-nav__link[data-section="${d.target.id}"]`);u&&u.classList.add("is-active")}})},{rootMargin:"-50% 0px -40% 0px"});c.forEach(_=>r.observe(_))}l.forEach(r=>{r.addEventListener("click",_=>{var u;_.preventDefault();const d=r.dataset.section;(u=document.getElementById(d))==null||u.scrollIntoView({behavior:"smooth",block:"start"})})})}function qa(c){if(!c)return[];const l=c.split("-vs-");return l.length!==2?[]:l}function Ha(c){const{cities:l}=c,[r,_]=qa(l),d=vi(r),u=vi(_);if(!d||!u)return ht(`
      <div style="text-align:center;padding:120px 24px">
        <div style="font-size:48px;margin-bottom:16px">🔍</div>
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">Cities not found</h1>
        <p style="color:#6b7280;margin-bottom:32px">We couldn't find one or both cities.</p>
        <a href="/calculator" data-link style="display:inline-flex;align-items:center;gap:7px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:14px;font-weight:600;padding:13px 26px;border-radius:10px;text-decoration:none">
          Open Calculator
        </a>
      </div>
    `);me({title:`${d.name} vs ${u.name} — Cost of Living Comparison`,description:`Compare cost of living between ${d.name} and ${u.name}. Housing, food, transport, safety, WiFi and visa — side by side.`});function f(I){var E,x,B,R,v,M;return Math.round((((x=(E=I.costs)==null?void 0:E.accommodation)==null?void 0:x.center)??0)*30+(((R=(B=I.costs)==null?void 0:B.food)==null?void 0:R.standard)??0)*30+(((v=I.costs)==null?void 0:v.transport)??0)+(((M=I.costs)==null?void 0:M.coworking)??0))}function P(I){return I>=80?"#10b981":I>=60?"#f59e0b":"#ef4444"}const k=f(d),y=f(u),w=k<=y?d:u,g=y>0?Math.abs(Math.round((k-y)/y*100)):0;function m(I,E){var it,ot,nt,W,tt,pt,st,_t,et,Z,z,Q;const x=f(I),B=(((ot=(it=I.costs)==null?void 0:it.accommodation)==null?void 0:ot.center)??0)*30,R=(((W=(nt=I.costs)==null?void 0:nt.food)==null?void 0:W.standard)??0)*30,v=((tt=I.costs)==null?void 0:tt.transport)??0,M=((pt=I.costs)==null?void 0:pt.coworking)??0,A=Math.max(B,R,v,M,1);function F(C){return`<div style="flex:1;height:7px;background:#f1f5f9;border-radius:7px;overflow:hidden">
        <div style="height:100%;width:${Math.round(C/A*100)}%;background:${E};border-radius:7px;transition:width 0.5s"></div>
      </div>`}function U(C,S,D){return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <span style="font-size:14px;width:20px;text-align:center">${C}</span>
        <span style="font-size:12px;color:#6b7280;width:80px;flex-shrink:0">${S}</span>
        ${F(D)}
        <span style="font-size:12px;font-weight:700;color:#111827;white-space:nowrap;min-width:64px;text-align:right">
          $${D.toLocaleString()}/mo
        </span>
      </div>`}return`
      <div class="ccp-col">
        <div class="ccp-col__img">
          <img src="${I.image}" alt="${I.name}" loading="lazy" />
          <div class="ccp-col__img-overlay"></div>
          <div class="ccp-col__img-label">${I.name}</div>
        </div>
        <div class="ccp-col__body">
          <p class="ccp-col__country">${I.country} · ${I.continent}</p>
          <div class="ccp-col__total" style="color:${E}">$${x.toLocaleString()}<span>/mo</span></div>
          <p class="ccp-col__total-label">Standard lifestyle · City center</p>

          <div style="margin:20px 0">
            ${U("🏠","Housing",B)}
            ${U("🍽️","Food",R)}
            ${U("🚇","Transport",v)}
            ${U("💻","Coworking",M)}
          </div>

          <div class="ccp-col__metrics">
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val" style="color:${P(((st=I.digitalNomad)==null?void 0:st.overallScore)??0)}">
                ${((_t=I.digitalNomad)==null?void 0:_t.overallScore)??"—"}
              </div>
              <div class="ccp-col__metric-label">Nomad score</div>
            </div>
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val" style="color:${P(((et=I.digitalNomad)==null?void 0:et.safetyScore)??0)}">
                ${((Z=I.digitalNomad)==null?void 0:Z.safetyScore)??"—"}
              </div>
              <div class="ccp-col__metric-label">Safety</div>
            </div>
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val">${((z=I.digitalNomad)==null?void 0:z.wifiSpeed)??"—"}</div>
              <div class="ccp-col__metric-label">Mbps</div>
            </div>
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val" style="font-size:16px">
                ${(Q=I.visa)!=null&&Q.remoteFriendly?"✅":"⬜"}
              </div>
              <div class="ccp-col__metric-label">Nomad visa</div>
            </div>
          </div>

          <a href="/city/${I.slug}" data-link class="ccp-col__link">
            Full guide for ${I.name} →
          </a>
        </div>
      </div>
    `}const T=`
    <style>
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
      <div class="container ccp-hero__inner">
        <p class="ccp-hero__eyebrow">Cost of Living Comparison</p>
        <h1 class="ccp-hero__title">${d.name} vs ${u.name}</h1>
        <div class="ccp-hero__verdict">
          ${w.name} is ${g}% more affordable
        </div>
      </div>
    </section>

    <!-- COMPARISON -->
    <section class="ccp-section">
      <div class="container">
        <div class="ccp-grid">
          ${m(d,"#6366f1")}
          <div class="ccp-vs">
            <div class="ccp-vs__badge">VS</div>
            <div class="ccp-vs__diff">
              ${g}%<br>difference
            </div>
          </div>
          ${m(u,"#10b981")}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="ccp-cta">
      <div class="ccp-cta__inner container">
        <h2>Want a deeper comparison?</h2>
        <p>Use the full calculator — add your income, choose your lifestyle and see purchasing power side by side.</p>
        <div class="ccp-cta__btns">
          <a href="/calculator?a=${r}&b=${_}" data-link class="ccp-btn">Open in Calculator →</a>
          <a href="/destinations" data-link class="ccp-btn-ghost">Browse More Cities</a>
        </div>
      </div>
    </section>
  `;return ht(T)}function Wa(){const c=Ot(),l=c.map(d=>`<option value="${d.slug}" data-city="${encodeURIComponent(JSON.stringify(d))}">
      ${d.name}, ${d.country}
    </option>`).join(""),r=c.map((d,u)=>`<option value="${d.slug}" data-city="${encodeURIComponent(JSON.stringify(d))}" ${u===5?"selected":""}>
      ${d.name}, ${d.country}
    </option>`).join(""),_=`

    <style>
      /* ── Hero ─────────────────────────── */
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

      /* ── Main layout ───────────────────── */
      .calc-layout {
        display:grid;
        grid-template-columns:380px 1fr;
        gap:32px;
        padding:40px 0 80px;
        align-items:start;
      }

      /* ── Form panel ───────────────────── */
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

      /* ── Results panel ─────────────────── */
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

      /* ── Breakdown (redesigned) ────────── */
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

      /* ── Radar ────────────────────────── */
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

      /* ── Projection (upgraded) ─────────── */
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

      /* ── Visa (upgraded) ───────────────── */
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

      /* ── Responsive ───────────────────── */
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
      <div class="container calc-hero__inner">
        <p class="calc-hero__eyebrow">Free Cost of Living Calculator</p>
        <h1 class="calc-hero">Compare <em>real monthly costs</em><br>in any two cities worldwide.</h1>
        <p class="calc-hero__sub">
          Housing, food, transport, coworking, visa complexity and tax pressure — all in one comparison.
          Updated March 2026 · 33 cities · No sign-up required.
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
            <select id="city-a">${l}</select>
          </div>
          <div class="calc-field">
            <label>City B</label>
            <select id="city-b">${r}</select>
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
              <span>👨‍👩‍👧</span>Family
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
                <p class="calc-city-card__name" id="name-a">—</p>
                <p class="calc-city-card__country" id="country-a">—</p>
                <div class="calc-city-card__cost" id="cost-a">—</div>
                <div class="calc-city-card__cost-label">per month</div>
              </div>
            </div>

            <div class="calc-vs">
              <div class="calc-vs__badge">VS</div>
              <div class="calc-vs__diff" id="vs-diff">—</div>
            </div>

            <div class="calc-city-card" id="card-b">
              <img class="calc-city-card__img" id="img-b" src="" alt="" />
              <div class="calc-city-card__body">
                <div class="calc-city-card__crown">👑</div>
                <p class="calc-city-card__name" id="name-b">—</p>
                <p class="calc-city-card__country" id="country-b">—</p>
                <div class="calc-city-card__cost" id="cost-b">—</div>
                <div class="calc-city-card__cost-label">per month</div>
              </div>
            </div>
          </div>

          <!-- Strategic scores -->
          <div class="calc-scores">
            <div class="calc-score-card" id="score-card-a">
              <div class="calc-score-card__label">City A — Strategic Score</div>
              <div class="calc-score-card__city" id="score-city-a">—</div>
              <div class="calc-score-card__score" id="score-val-a">—</div>
              <div class="calc-score-card__score-label" id="score-label-a"></div>
              <div class="calc-score-card__bar-wrap">
                <div class="calc-score-card__bar" id="score-bar-a" style="width:0%"></div>
              </div>
            </div>
            <div class="calc-score-card" id="score-card-b">
              <div class="calc-score-card__label">City B — Strategic Score</div>
              <div class="calc-score-card__city" id="score-city-b">—</div>
              <div class="calc-score-card__score" id="score-val-b">—</div>
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
                Purchasing Power — Your income vs. local costs
              </div>
              <div class="calc-income__row">
                <div class="calc-income__city-name">
                  <span id="income-city-a-name">—</span>
                  <span id="income-ratio-a">—</span>
                </div>
                <div class="calc-income__bar-wrap">
                  <div class="calc-income__bar" id="income-bar-a" style="width:0%;background:linear-gradient(90deg,#6366f1,#8b5cf6)"></div>
                </div>
              </div>
              <div class="calc-income__row">
                <div class="calc-income__city-name">
                  <span id="income-city-b-name">—</span>
                  <span id="income-ratio-b">—</span>
                </div>
                <div class="calc-income__bar-wrap">
                  <div class="calc-income__bar" id="income-bar-b" style="width:0%;background:linear-gradient(90deg,#10b981,#34d399)"></div>
                </div>
              </div>
              <div class="calc-income__note" id="income-note">—</div>
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
                <div class="calc-breakdown__val" id="val-a-acc">—</div>
              </div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-b-acc" style="width:0%;background:linear-gradient(90deg,#10b981,#34d399)"></div></div>
                <div class="calc-breakdown__val" id="val-b-acc">—</div>
              </div>
            </div>
            <div class="calc-breakdown__row">
              <div class="calc-breakdown__label">🍽️ Food</div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-a-food" style="width:0%;background:linear-gradient(90deg,#6366f1,#8b5cf6)"></div></div>
                <div class="calc-breakdown__val" id="val-a-food">—</div>
              </div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-b-food" style="width:0%;background:linear-gradient(90deg,#10b981,#34d399)"></div></div>
                <div class="calc-breakdown__val" id="val-b-food">—</div>
              </div>
            </div>
            <div class="calc-breakdown__row">
              <div class="calc-breakdown__label">🚇 Transport</div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-a-tsp" style="width:0%;background:linear-gradient(90deg,#6366f1,#8b5cf6)"></div></div>
                <div class="calc-breakdown__val" id="val-a-tsp">—</div>
              </div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-b-tsp" style="width:0%;background:linear-gradient(90deg,#10b981,#34d399)"></div></div>
                <div class="calc-breakdown__val" id="val-b-tsp">—</div>
              </div>
            </div>
            <div class="calc-breakdown__row">
              <div class="calc-breakdown__label">💻 Coworking</div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-a-cow" style="width:0%;background:linear-gradient(90deg,#6366f1,#8b5cf6)"></div></div>
                <div class="calc-breakdown__val" id="val-a-cow">—</div>
              </div>
              <div class="calc-breakdown__cell">
                <div class="calc-breakdown__bar-wrap"><div class="calc-breakdown__bar" id="bar-b-cow" style="width:0%;background:linear-gradient(90deg,#10b981,#34d399)"></div></div>
                <div class="calc-breakdown__val" id="val-b-cow">—</div>
              </div>
            </div>
          </div>

          <!-- Radar chart -->
          <div class="calc-radar">
            <div class="calc-radar__header">
              <div class="calc-radar__title">Relocation Radar — 6 dimensions</div>
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
              <div class="calc-projection__title">Cost Projection — Inflation-adjusted</div>
              <div class="calc-projection__sub">Annual totals</div>
            </div>
            <table class="calc-projection__table">
              <thead>
                <tr>
                  <th>Horizon</th>
                  <th id="proj-head-a">City A</th>
                  <th id="proj-head-b">City B</th>
                  <th>Δ Difference</th>
                </tr>
              </thead>
              <tbody id="proj-body"></tbody>
            </table>
          </div>

          <!-- Visa comparison -->
          <div class="calc-visa">
            <div class="calc-visa-card">
              <div class="calc-visa-card__head">
                <div class="calc-visa-card__title">Visa · City A</div>
                <div class="calc-visa-card__city" id="visa-city-a">—</div>
              </div>
              <div class="calc-visa-card__body">
                <div id="visa-tag-a"></div>
                <div id="visa-rows-a"></div>
              </div>
            </div>
            <div class="calc-visa-card">
              <div class="calc-visa-card__head">
                <div class="calc-visa-card__title">Visa · City B</div>
                <div class="calc-visa-card__city" id="visa-city-b">—</div>
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
            This free tool compares monthly living costs between two cities worldwide — covering housing,
            food, transport, coworking, visa complexity and local tax rates. It's designed for digital nomads,
            remote workers, expats and families planning an international relocation.
          </p>
          <p>
            Unlike generic cost-of-living indexes, TripCost lets you adjust for your actual lifestyle:
            city center vs. suburb housing, budget vs. premium spending, and three relocation profiles
            (nomad, founder, family) that weight the scoring differently.
          </p>
          <p>
            Enter your monthly income to instantly see your purchasing power in both cities — how many months
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
              monthly average — individual expenses will vary based on neighbourhood, habits and lifestyle.
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
              selected relocation profile — a founder cares more about tax, a family more about safety.
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
              digital nomad visa). Visa rules change frequently — always verify on the official government website.
            </div>
          </div>

          <div class="calc-faq-item">
            <button class="calc-faq-q">
              How is purchasing power calculated?
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="calc-faq-a">
              Purchasing power shows what percentage of your monthly income is consumed by living costs in each city.
              A ratio of 60% means your living expenses equal 60% of your income — leaving 40% for savings or
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
              and 5 years. It shows what you can expect to spend annually at each horizon — useful for long-term
              relocation planning. Note that inflation rates are estimates and actual future costs may differ.
            </div>
          </div>

        </div>
      </div>
    </section>
  `;return ht(_)}function ja(){const c=document.getElementById("city-a"),l=document.getElementById("city-b"),r=document.getElementById("housing"),_=document.getElementById("lifestyle"),d=document.getElementById("income-input"),u=document.getElementById("share-btn");if(!c)return;let f="nomad";document.querySelectorAll("[data-profile]").forEach(x=>{x.addEventListener("click",()=>{document.querySelectorAll("[data-profile]").forEach(B=>B.classList.remove("is-active")),x.classList.add("is-active"),f=x.dataset.profile,E()})}),document.querySelectorAll(".calc-faq-q").forEach(x=>{x.addEventListener("click",()=>{const B=x.closest(".calc-faq-item"),R=B.classList.contains("is-open");document.querySelectorAll(".calc-faq-item").forEach(v=>v.classList.remove("is-open")),R||B.classList.add("is-open")})}),u==null||u.addEventListener("click",()=>{const x=new URL(window.location.href);x.searchParams.set("a",c.value),x.searchParams.set("b",l.value),x.searchParams.set("h",r.value),x.searchParams.set("l",_.value),x.searchParams.set("p",f),navigator.clipboard.writeText(x.toString()).then(()=>{u.classList.add("copied"),u.querySelector("svg").nextSibling.textContent=" Link copied!",setTimeout(()=>{u.classList.remove("copied"),u.childNodes[1].textContent=" Copy shareable link"},2500)})});const P=new URLSearchParams(window.location.search);P.get("a")&&(c.value=P.get("a")),P.get("b")&&(l.value=P.get("b")),P.get("h")&&(r.value=P.get("h")),P.get("l")&&(_.value=P.get("l")),P.get("p")&&(f=P.get("p"),document.querySelectorAll("[data-profile]").forEach(x=>{x.classList.toggle("is-active",x.dataset.profile===f)}));function k(x){var R,v;const B=(v=(R=x.options[x.selectedIndex])==null?void 0:R.dataset)==null?void 0:v.city;return B?JSON.parse(decodeURIComponent(B)):null}function y(x){const B=r.value,R=_.value,v=x.costs.accommodation[B]*30,M=x.costs.food[R]*30,A=x.costs.transport,F=x.costs.coworking,U=v+M+A+F;return{acc:v,food:M,tsp:A,cow:F,total:U+Math.round(U*.1)}}function w(x,B,R){var W,tt,pt,st,_t,et,Z,z,Q;const v=f==="founder"?{cost:.15,safety:.1,visa:.1,tax:.25,stab:.2,infra:.1,income:.1}:f==="family"?{cost:.15,safety:.25,visa:.05,tax:.1,stab:.2,infra:.15,income:.1}:{cost:.25,safety:.1,visa:.2,tax:.1,stab:.15,infra:.1,income:.1},M=R>0?Math.min(R/B*100,100):Math.max(0,100-B/5e3*50),A=((W=x.safety)==null?void 0:W.safetyIndex)??50,F=(tt=x.visa)!=null&&tt.remoteFriendly?85:45,U=100-((((pt=x.tax)==null?void 0:pt.personalIncomeTaxTopRate)??30)+(((st=x.tax)==null?void 0:st.corporateTax)??25))/2,it={High:80,"Very High":90,Medium:60}[(_t=x.macro)==null?void 0:_t.currencyStability]??40,ot=((((et=x.infrastructure)==null?void 0:et.publicTransportQuality)??50)+(((Z=x.infrastructure)==null?void 0:Z.healthcareQuality)??50)+(((z=x.infrastructure)==null?void 0:z.englishProficiency)??50)+(((Q=x.infrastructure)==null?void 0:Q.airportConnectivity)??50))/4,nt=R>0?Math.min(R/B*100,100):50;return Math.max(0,Math.min(100,Math.round(M*v.cost+A*v.safety+F*v.visa+U*v.tax+it*v.stab+ot*v.infra+nt*v.income)))}function g(x){return x>=85?"Elite destination":x>=70?"Strong choice":x>=55?"Moderate fit":"High risk profile"}function m(x){return x>=70?"#10b981":x>=55?"#f59e0b":"#ef4444"}function T(x,B,R="$"){const v=parseInt(x.dataset.current||"0"),M=B-v,A=30;let F=0;const U=setInterval(()=>{F++;const it=Math.round(v+M*(F/A));x.textContent=R+it.toLocaleString(),F>=A&&(clearInterval(U),x.dataset.current=B)},16)}function I(x,B,R,v){const M=document.getElementById("relocation-radar");if(!M)return;const A=M.getContext("2d"),F=M.width,U=M.height,it=F/2,ot=U/2+10,nt=Math.min(F,U)/2-55,W=["Cost","Safety","Infra","Visa","Tax","Stability"],tt=W.length;function pt(z,Q){var C,S,D,K,X,j,q,mt,vt;return[Math.max(0,100-Q/5e3*50),((C=z.safety)==null?void 0:C.safetyIndex)??50,((((S=z.infrastructure)==null?void 0:S.publicTransportQuality)??50)+(((D=z.infrastructure)==null?void 0:D.healthcareQuality)??50)+(((K=z.infrastructure)==null?void 0:K.englishProficiency)??50)+(((X=z.infrastructure)==null?void 0:X.airportConnectivity)??50))/4,(j=z.visa)!=null&&j.remoteFriendly?85:45,100-((((q=z.tax)==null?void 0:q.personalIncomeTaxTopRate)??30)+(((mt=z.tax)==null?void 0:mt.corporateTax)??25))/2,{High:80,"Very High":90,Medium:60}[(vt=z.macro)==null?void 0:vt.currencyStability]??40]}const st=pt(x,R),_t=pt(B,v);let et=0;function Z(){A.clearRect(0,0,F,U);for(let Q=1;Q<=5;Q++){A.beginPath();for(let C=0;C<tt;C++){const S=Math.PI*2/tt*C-Math.PI/2,D=nt*(Q/5);C===0?A.moveTo(it+D*Math.cos(S),ot+D*Math.sin(S)):A.lineTo(it+D*Math.cos(S),ot+D*Math.sin(S))}A.closePath(),A.strokeStyle="#f1f5f9",A.lineWidth=1,A.stroke()}W.forEach((Q,C)=>{const S=Math.PI*2/tt*C-Math.PI/2;A.beginPath(),A.moveTo(it,ot),A.lineTo(it+nt*Math.cos(S),ot+nt*Math.sin(S)),A.strokeStyle="#e5e7eb",A.lineWidth=1,A.stroke();const D=it+(nt+20)*Math.cos(S),K=ot+(nt+20)*Math.sin(S);A.fillStyle="#6b7280",A.font="600 11px system-ui",A.textAlign="center",A.textBaseline="middle",A.fillText(Q,D,K)});function z(Q,C){A.beginPath(),Q.forEach((S,D)=>{const K=Math.PI*2/tt*D-Math.PI/2,X=nt*(S/100)*et,j=it+X*Math.cos(K),q=ot+X*Math.sin(K);D===0?A.moveTo(j,q):A.lineTo(j,q)}),A.closePath(),A.strokeStyle=C,A.lineWidth=2,A.stroke(),A.fillStyle=C.replace("1)","0.15)"),A.fill()}z(st,"rgba(99,102,241,1)"),z(_t,"rgba(16,185,129,1)"),et<1&&(et=Math.min(et+.05,1),requestAnimationFrame(Z))}Z()}async function E(){var _t,et;const x=k(c),B=k(l);if(!x||!B)return;const R=y(x),v=y(B),M=parseFloat((d==null?void 0:d.value)||0);document.getElementById("img-a").src=x.image,document.getElementById("img-a").alt=x.name,document.getElementById("img-b").src=B.image,document.getElementById("img-b").alt=B.name,document.getElementById("name-a").textContent=x.name,document.getElementById("country-a").textContent=x.country,document.getElementById("name-b").textContent=B.name,document.getElementById("country-b").textContent=B.country,T(document.getElementById("cost-a"),R.total),T(document.getElementById("cost-b"),v.total);const A=R.total<=v.total;document.getElementById("card-a").classList.toggle("is-winner",A),document.getElementById("card-a").classList.toggle("is-loser",!A),document.getElementById("card-b").classList.toggle("is-winner",!A),document.getElementById("card-b").classList.toggle("is-loser",A);const F=v.total>0?Math.abs(Math.round((R.total-v.total)/v.total*100)):0,U=document.getElementById("vs-diff"),it=R.total<v.total?x.name:B.name;U.textContent=`${it} is ${F}% cheaper`,U.className=`calc-vs__diff ${R.total<v.total?"cheaper":"pricier"}`;const ot=w(x,R.total,M),nt=w(B,v.total,M);if(["a","b"].forEach((Z,z)=>{const Q=z===0?ot:nt,C=m(Q);document.getElementById(`score-city-${Z}`).textContent=z===0?x.name:B.name,document.getElementById(`score-val-${Z}`).textContent=Q+"/100",document.getElementById(`score-val-${Z}`).style.color=C,document.getElementById(`score-label-${Z}`).textContent=g(Q),document.getElementById(`score-label-${Z}`).style.color=C,document.getElementById(`score-bar-${Z}`).style.width=Q+"%",document.getElementById(`score-bar-${Z}`).style.background=C}),M>0){document.getElementById("income-empty").style.display="none",document.getElementById("income-data").style.display="block";const Z=Math.round(R.total/M*100),z=Math.round(v.total/M*100);document.getElementById("income-city-a-name").textContent=x.name,document.getElementById("income-city-b-name").textContent=B.name,document.getElementById("income-ratio-a").textContent=`${Z}% of income`,document.getElementById("income-ratio-b").textContent=`${z}% of income`,document.getElementById("income-bar-a").style.width=Math.min(Z,100)+"%",document.getElementById("income-bar-b").style.width=Math.min(z,100)+"%";const Q=M-R.total;document.getElementById("income-note").textContent=Q>0?`With $${M.toLocaleString()}/mo, you'd have $${Math.round(Q).toLocaleString()} left each month in ${x.name}.`:`Your budget is $${Math.abs(Math.round(Q)).toLocaleString()} short for ${x.name} at this lifestyle.`}else document.getElementById("income-empty").style.display="block",document.getElementById("income-data").style.display="none";document.getElementById("bd-head-a").textContent=x.name,document.getElementById("bd-head-b").textContent=B.name;const W=Math.max(R.acc,v.acc,R.food,v.food,R.tsp,v.tsp,R.cow,v.cow);[["acc","acc"],["food","food"],["tsp","tsp"],["cow","cow"]].forEach(([Z,z])=>{document.getElementById(`val-a-${z}`).textContent="$"+R[Z].toLocaleString(),document.getElementById(`val-b-${z}`).textContent="$"+v[Z].toLocaleString(),document.getElementById(`bar-a-${z}`).style.width=R[Z]/W*100+"%",document.getElementById(`bar-b-${z}`).style.width=v[Z]/W*100+"%"}),document.getElementById("radar-label-a").textContent=x.name,document.getElementById("radar-label-b").textContent=B.name,I(x,B,R.total,v.total),document.getElementById("proj-head-a").textContent=x.name,document.getElementById("proj-head-b").textContent=B.name;const tt=((_t=x.macro)==null?void 0:_t.inflationRate)??3,pt=((et=B.macro)==null?void 0:et.inflationRate)??3,st=[1,3,5].map(Z=>{const z=Math.round(R.total*Math.pow(1+tt/100,Z)*12),Q=Math.round(v.total*Math.pow(1+pt/100,Z)*12),C=z-Q,S=C===0?"—":`<span class="proj-badge ${C>0?"proj-badge--pos":"proj-badge--neg"}">
             ${C>0?"▲":"▼"} $${Math.abs(C).toLocaleString()}
           </span>`;return`<tr>
        <td>${Z} year${Z>1?"s":""}</td>
        <td>$${z.toLocaleString()}/yr</td>
        <td>$${Q.toLocaleString()}/yr</td>
        <td>${S}</td>
      </tr>`});document.getElementById("proj-body").innerHTML=st.join(""),["a","b"].forEach((Z,z)=>{const Q=z===0?x:B,C=Q.visa;document.getElementById(`visa-city-${Z}`).textContent=Q.name;const S=document.getElementById(`visa-tag-${Z}`);S.innerHTML=C?`<span class="calc-visa-card__tag" style="background:${C.remoteFriendly?"#d1fae5":"#f1f5f9"};color:${C.remoteFriendly?"#065f46":"#6b7280"}">
            ${C.remoteFriendly?"✅ Nomad Visa Available":"⬜ Standard Visa"}
           </span>`:"";const D=document.getElementById(`visa-rows-${Z}`);D.innerHTML=C?`
        <div class="calc-visa-card__row"><span>Type</span><strong>${C.type||"—"}</strong></div>
        <div class="calc-visa-card__row"><span>Stay</span><strong>${C.stayDurationMonths||"—"} months</strong></div>
        <div class="calc-visa-card__row"><span>Processing</span><strong>~${C.processingTimeDays||"—"} days</strong></div>
        <div class="calc-visa-card__row"><span>Min. income</span><strong>${C.minIncomeRequirement>0?"$"+C.minIncomeRequirement+"/mo":"None"}</strong></div>
      `:'<p style="font-size:13px;color:#9ca3af">No visa data available.</p>'})}[c,l,r,_].forEach(x=>x==null?void 0:x.addEventListener("change",E)),d==null||d.addEventListener("input",E),E()}function fe(c,l="standard"){const{costs:r}=c,_=r.accommodation.center*30,d=r.food[l]*30,u=r.transport,f=r.coworking;return _+d+u+f}function Va(){var x,B,R;const c=Ot(),l=[...c].sort((v,M)=>M.digitalNomad.overallScore-v.digitalNomad.overallScore),r=l.slice(0,3),_=[...c].sort((v,M)=>fe(v)-fe(M)).slice(0,5),d=[...c].sort((v,M)=>M.digitalNomad.wifiSpeed-v.digitalNomad.wifiSpeed).slice(0,5),u=[...c].sort((v,M)=>M.digitalNomad.safetyScore-v.digitalNomad.safetyScore).slice(0,5),f=c.filter(v=>{var M;return(M=v.visa)==null?void 0:M.remoteFriendly}).sort((v,M)=>M.digitalNomad.overallScore-v.digitalNomad.overallScore).slice(0,5);function P(v,M=80,A=60){return v>=M?"#10b981":v>=A?"#f59e0b":"#ef4444"}const k=["🥇","🥈","🥉"],w=[1,0,2].map(v=>{const M=r[v];if(!M)return"";const A=fe(M);return`
      <div class="rk-podium-card ${v===0?"rk-podium-card--gold":""}">
        <div class="rk-podium-medal">${k[v]}</div>
        <div class="rk-podium-img-wrap">
          <img src="${M.image}" alt="${M.name}" loading="lazy" />
          <div class="rk-podium-img-overlay"></div>
        </div>
        <div class="rk-podium-body">
          <div class="rk-podium-score" style="color:${P(M.digitalNomad.overallScore)}">
            ${M.digitalNomad.overallScore}<span>/100</span>
          </div>
          <div class="rk-podium-name">${M.name}</div>
          <div class="rk-podium-country">${M.country}</div>
          <div class="rk-podium-metrics">
            <span title="WiFi">📡 ${M.digitalNomad.wifiSpeed} Mbps</span>
            <span title="Safety">🛡 ${M.digitalNomad.safetyScore}</span>
            <span title="Budget">💰 ~$${A.toLocaleString()}/mo</span>
          </div>
          <a href="/city/${M.slug}" data-link class="rk-podium-btn">View City →</a>
        </div>
      </div>
    `}).join(""),g=JSON.stringify(l.map(v=>{var M;return{slug:v.slug,name:v.name,country:v.country,continent:v.continent,image:v.image,score:v.digitalNomad.overallScore,wifi:v.digitalNomad.wifiSpeed,safety:v.digitalNomad.safetyScore,cowork:v.digitalNomad.coworkingCost,budget:fe(v),visaOk:((M=v.visa)==null?void 0:M.remoteFriendly)??!1,currency:v.currencySymbol??"$"}}));function m(v,M,A,F,U){return`
      <div class="rk-mini">
        <div class="rk-mini__title">${M} ${v}</div>
        ${A.map((it,ot)=>{const nt=F(it),W=F(A[0]),tt=W>0?Math.round(nt/W*100):0,pt=ot===0?"#f59e0b":ot===1?"#9ca3af":ot===2?"#b45309":"#6366f1";return`
            <div class="rk-mini__row">
              <span class="rk-mini__rank" style="color:${pt}">${ot+1}</span>
              <a href="/city/${it.slug}" data-link class="rk-mini__name">${it.name}</a>
              <div class="rk-mini__bar-wrap">
                <div class="rk-mini__bar" style="width:${tt}%;background:${pt}"></div>
              </div>
              <span class="rk-mini__val">${typeof nt=="number"&&nt>100?"$"+nt.toLocaleString():nt}${U}</span>
            </div>
          `}).join("")}
      </div>
    `}const I=[["lisbon","bangkok"],["berlin","prague"],["tokyo","seoul"],["barcelona","bali"],["dubai","singapore"],["chiang-mai","medellin"]].map(([v,M])=>{const A=c.find(U=>U.slug===v),F=c.find(U=>U.slug===M);return!A||!F?"":`
      <a href="/calculator" data-link data-ca="${v}" data-cb="${M}" class="rk-compare-card">
        <div class="rk-compare-card__imgs">
          <img src="${A.image}" alt="${A.name}" />
          <img src="${F.image}" alt="${F.name}" />
        </div>
        <div class="rk-compare-card__label">
          ${A.name} <span>vs</span> ${F.name}
        </div>
      </a>
    `}).join(""),E=`
    <style>
      /* ── Hero ─────────────────────────── */
      .rk-hero {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);
        padding:60px 0 52px;position:relative;overflow:hidden;
      }
      .rk-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 80% at 80% 50%,rgba(99,102,241,0.2),transparent 70%);
      }
      .rk-hero__inner { position:relative;z-index:2; }
      .rk-hero__eyebrow {
        font-size:11px;font-weight:700;letter-spacing:3px;
        text-transform:uppercase;color:#818cf8;margin-bottom:12px;
      }
      .rk-hero__title {
        font-size:clamp(28px,4vw,50px);font-weight:900;color:#fff;
        letter-spacing:-0.025em;line-height:1.1;margin-bottom:12px;
      }
      .rk-hero__title em {
        font-style:normal;
        background:linear-gradient(90deg,#818cf8,#34d399);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      }
      .rk-hero__sub { font-size:15px;color:rgba(255,255,255,0.55);margin:0; }

      /* ── Summary stats ─────────────────── */
      .rk-stats {
        background:#fff;border-bottom:1px solid #e5e7eb;padding:20px 0;
      }
      .rk-stats__inner {
        display:flex;justify-content:center;gap:0;
      }
      .rk-stat {
        padding:0 36px;border-right:1px solid #e5e7eb;text-align:center;
      }
      .rk-stat:last-child { border-right:none; }
      .rk-stat strong { display:block;font-size:22px;font-weight:900;color:#1e1b4b;letter-spacing:-0.02em; }
      .rk-stat span   { font-size:11px;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:1px; }

      /* ── Podium ────────────────────────── */
      .rk-podium-wrap { padding:60px 0 48px;background:#f9fafb; }
      .rk-podium-grid {
        display:grid;grid-template-columns:1fr 1.15fr 1fr;
        gap:16px;align-items:end;margin-top:32px;
      }
      .rk-podium-card {
        background:#fff;border:1px solid #e5e7eb;border-radius:20px;
        overflow:hidden;transition:transform 0.2s,box-shadow 0.2s;
      }
      .rk-podium-card--gold {
        border-color:#f59e0b;
        box-shadow:0 0 0 3px rgba(245,158,11,0.15),0 16px 48px rgba(0,0,0,0.1);
        transform:translateY(-8px);
      }
      .rk-podium-medal {
        text-align:center;font-size:28px;padding:14px 0 0;
      }
      .rk-podium-img-wrap { position:relative;height:160px;overflow:hidden; }
      .rk-podium-img-wrap img { width:100%;height:100%;object-fit:cover;transition:transform 0.4s; }
      .rk-podium-card:hover .rk-podium-img-wrap img { transform:scale(1.05); }
      .rk-podium-img-overlay {
        position:absolute;inset:0;
        background:linear-gradient(to top,rgba(0,0,0,0.35),transparent 60%);
      }
      .rk-podium-body { padding:16px 18px 20px; }
      .rk-podium-score {
        font-size:32px;font-weight:900;letter-spacing:-0.03em;line-height:1;margin-bottom:4px;
      }
      .rk-podium-score span { font-size:14px;font-weight:500;color:#9ca3af; }
      .rk-podium-name { font-size:16px;font-weight:800;color:#111827;margin-bottom:2px; }
      .rk-podium-country { font-size:12px;color:#9ca3af;margin-bottom:12px; }
      .rk-podium-metrics {
        display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;
      }
      .rk-podium-metrics span {
        font-size:11px;font-weight:600;color:#374151;
        background:#f8fafc;border:1px solid #f1f5f9;
        padding:3px 8px;border-radius:999px;
      }
      .rk-podium-btn {
        display:block;text-align:center;background:#f8fafc;
        border:1.5px solid #e5e7eb;border-radius:10px;
        font-size:12px;font-weight:700;color:#4f46e5;
        padding:8px;text-decoration:none;transition:all 0.15s;
      }
      .rk-podium-btn:hover {
        background:#eef2ff;border-color:#c7d2fe;text-decoration:none;
      }

      /* ── Table section ─────────────────── */
      .rk-table-wrap { padding:56px 0;background:#fff; }
      .rk-table-top {
        display:flex;align-items:center;justify-content:space-between;
        flex-wrap:wrap;gap:12px;margin-bottom:24px;
      }
      .rk-table-title {
        font-size:22px;font-weight:800;color:#111827;letter-spacing:-0.02em;
      }
      .rk-table-controls { display:flex;gap:10px;align-items:center; }
      .rk-filter-chip {
        padding:6px 14px;border-radius:999px;border:1.5px solid #e5e7eb;
        font-size:12px;font-weight:600;color:#6b7280;background:#fff;
        cursor:pointer;transition:all 0.15s;
      }
      .rk-filter-chip:hover { border-color:#c7d2fe;color:#4f46e5; }
      .rk-filter-chip.is-active {
        background:linear-gradient(135deg,#6366f1,#8b5cf6);
        border-color:transparent;color:#fff;
      }
      .rk-search {
        border:1.5px solid #e5e7eb;border-radius:999px;
        padding:6px 14px;font-size:13px;outline:none;
        transition:border-color 0.15s;width:180px;
      }
      .rk-search:focus { border-color:#6366f1; }

      /* Table */
      .rk-table-scroll { overflow-x:auto;border-radius:16px;border:1px solid #e5e7eb; }
      .rk-table {
        width:100%;border-collapse:collapse;font-size:13px;
      }
      .rk-table thead tr { background:#f8fafc;border-bottom:1px solid #e5e7eb; }
      .rk-table th {
        padding:11px 16px;text-align:left;
        font-size:10px;font-weight:700;letter-spacing:1px;
        text-transform:uppercase;color:#9ca3af;white-space:nowrap;
        cursor:pointer;user-select:none;transition:color 0.15s;
      }
      .rk-table th:hover { color:#6366f1; }
      .rk-table th.is-sorted { color:#6366f1; }
      .rk-table th .sort-arrow { margin-left:4px;opacity:0.4; }
      .rk-table th.is-sorted .sort-arrow { opacity:1; }
      .rk-table tbody tr {
        border-bottom:1px solid #f9fafb;
        transition:background 0.12s;
      }
      .rk-table tbody tr:last-child { border-bottom:none; }
      .rk-table tbody tr:hover { background:#f9fafb; }
      .rk-table td { padding:12px 16px;vertical-align:middle; }
      .rk-rank-badge {
        display:inline-flex;align-items:center;justify-content:center;
        width:28px;height:28px;border-radius:8px;
        font-size:12px;font-weight:700;
      }
      .rk-city-link {
        font-weight:700;color:#111827;text-decoration:none;
        transition:color 0.15s;
      }
      .rk-city-link:hover { color:#6366f1;text-decoration:none; }
      .rk-city-country { font-size:11px;color:#9ca3af;margin-top:1px; }
      .rk-score-wrap { display:flex;align-items:center;gap:8px; }
      .rk-score-num { font-size:14px;font-weight:800;min-width:26px; }
      .rk-score-bar-wrap {
        width:60px;height:5px;background:#f1f5f9;border-radius:5px;overflow:hidden;
      }
      .rk-score-bar { height:100%;border-radius:5px;transition:width 0.4s; }
      .rk-visa-yes { color:#065f46;background:#d1fae5;padding:2px 8px;border-radius:999px;font-size:10px;font-weight:700; }
      .rk-visa-no  { color:#9ca3af;background:#f1f5f9;padding:2px 8px;border-radius:999px;font-size:10px;font-weight:600; }
      .rk-compare-link {
        font-size:11px;font-weight:700;color:#6366f1;text-decoration:none;
        padding:4px 10px;border:1px solid #c7d2fe;border-radius:6px;
        transition:all 0.15s;
      }
      .rk-compare-link:hover { background:#eef2ff;text-decoration:none; }
      .rk-empty { text-align:center;padding:48px;color:#9ca3af; }
      #rk-count { font-size:12px;color:#9ca3af;margin-top:10px; }

      /* ── Mini rankings ─────────────────── */
      .rk-categories { padding:56px 0;background:#f9fafb; }
      .rk-categories__grid {
        display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:32px;
      }
      .rk-mini {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:20px;
      }
      .rk-mini__title {
        font-size:12px;font-weight:700;color:#111827;margin-bottom:14px;
        padding-bottom:10px;border-bottom:1px solid #f1f5f9;
      }
      .rk-mini__row {
        display:flex;align-items:center;gap:8px;margin-bottom:10px;
      }
      .rk-mini__row:last-child { margin-bottom:0; }
      .rk-mini__rank { font-size:11px;font-weight:800;min-width:14px; }
      .rk-mini__name {
        font-size:12px;font-weight:600;color:#374151;text-decoration:none;
        flex-shrink:0;min-width:64px;transition:color 0.15s;
      }
      .rk-mini__name:hover { color:#6366f1;text-decoration:none; }
      .rk-mini__bar-wrap { flex:1;height:5px;background:#f1f5f9;border-radius:5px;overflow:hidden; }
      .rk-mini__bar { height:100%;border-radius:5px;transition:width 0.4s; }
      .rk-mini__val { font-size:11px;font-weight:700;color:#111827;white-space:nowrap;min-width:44px;text-align:right; }

      /* ── Comparisons ───────────────────── */
      .rk-comparisons { padding:56px 0;background:#fff; }
      .rk-compare-grid {
        display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px;
      }
      .rk-compare-card {
        border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;
        text-decoration:none;transition:transform 0.2s,box-shadow 0.2s,border-color 0.2s;
        display:block;
      }
      .rk-compare-card:hover {
        transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,0.1);
        border-color:#c7d2fe;text-decoration:none;
      }
      .rk-compare-card__imgs { display:grid;grid-template-columns:1fr 1fr;height:90px; }
      .rk-compare-card__imgs img { width:100%;height:100%;object-fit:cover; }
      .rk-compare-card__label {
        padding:10px 14px;font-size:12px;font-weight:700;color:#374151;
        display:flex;align-items:center;gap:6px;background:#fff;
      }
      .rk-compare-card__label span { color:#9ca3af;font-weight:400; }

      /* ── SEO block ─────────────────────── */
      .rk-seo { padding:56px 0;background:#f9fafb;border-top:1px solid #e5e7eb; }
      .rk-seo__inner { max-width:820px;margin:0 auto; }
      .rk-seo__inner h2 { font-size:22px;font-weight:800;color:#111827;margin-bottom:10px; }
      .rk-seo__inner h3 { font-size:16px;font-weight:700;color:#111827;margin:20px 0 6px; }
      .rk-seo__inner p  { font-size:14px;color:#4b5563;line-height:1.8;margin-bottom:10px; }

      /* ── CTA ────────────────────────────── */
      .rk-cta {
        background:linear-gradient(135deg,#1e1b4b,#312e81,#1e1b4b);
        padding:64px 0;text-align:center;position:relative;overflow:hidden;
      }
      .rk-cta::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(99,102,241,0.25),transparent 70%);
      }
      .rk-cta__inner { position:relative;z-index:2; }
      .rk-cta h2 { font-size:34px;font-weight:800;color:#fff;letter-spacing:-0.02em;margin-bottom:10px; }
      .rk-cta p  { font-size:15px;color:rgba(255,255,255,0.55);margin-bottom:28px; }
      .rk-cta__btns { display:flex;gap:12px;justify-content:center;flex-wrap:wrap; }
      .rk-btn-primary {
        display:inline-flex;align-items:center;gap:7px;
        background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;
        font-size:14px;font-weight:600;padding:12px 24px;border-radius:10px;
        text-decoration:none;box-shadow:0 4px 16px rgba(99,102,241,0.4);transition:opacity 0.2s;
      }
      .rk-btn-primary:hover { opacity:0.9;color:#fff;text-decoration:none; }
      .rk-btn-secondary {
        display:inline-flex;align-items:center;gap:7px;
        background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);
        color:rgba(255,255,255,0.85);font-size:14px;font-weight:500;
        padding:12px 20px;border-radius:10px;text-decoration:none;transition:background 0.2s;
      }
      .rk-btn-secondary:hover { background:rgba(255,255,255,0.18);color:#fff;text-decoration:none; }

      /* ── Responsive ─────────────────────── */
      @media(max-width:960px) {
        .rk-podium-grid { grid-template-columns:1fr 1fr 1fr; }
        .rk-categories__grid { grid-template-columns:1fr 1fr; }
        .rk-compare-grid { grid-template-columns:1fr 1fr; }
      }
      @media(max-width:600px) {
        .rk-podium-grid { grid-template-columns:1fr; }
        .rk-stats__inner { flex-wrap:wrap;gap:16px; }
        .rk-stat { border-right:none; }
        .rk-categories__grid { grid-template-columns:1fr; }
        .rk-compare-grid { grid-template-columns:1fr; }
      }
    </style>

    <!-- HERO -->
    <section class="rk-hero">
      <div class="container rk-hero__inner">
        <p class="rk-hero__eyebrow">2026 Rankings</p>
        <h1 class="rk-hero__title">Best Cities for<br><em>Digital Nomads</em></h1>
        <p class="rk-hero__sub">
          ${l.length} cities ranked by nomad score — cost, WiFi, safety, visa &amp; infrastructure combined.
        </p>
      </div>
    </section>

    <!-- STATS BAR -->
    <div class="rk-stats">
      <div class="container rk-stats__inner">
        <div class="rk-stat"><strong>${l.length}</strong><span>Cities ranked</span></div>
        <div class="rk-stat"><strong>${(x=l[0])==null?void 0:x.name}</strong><span>Top rated</span></div>
        <div class="rk-stat"><strong>${(B=_[0])==null?void 0:B.name}</strong><span>Most affordable</span></div>
        <div class="rk-stat"><strong>${(R=d[0])==null?void 0:R.name}</strong><span>Fastest WiFi</span></div>
        <div class="rk-stat"><strong>${c.filter(v=>{var M;return(M=v.visa)==null?void 0:M.remoteFriendly}).length}</strong><span>Nomad visas</span></div>
      </div>
    </div>

    <!-- PODIUM -->
    <section class="rk-podium-wrap">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Top 3 Overall</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">This year's best destinations</h2>
        <div class="rk-podium-grid">${w}</div>
      </div>
    </section>

    <!-- FULL TABLE -->
    <section class="rk-table-wrap">
      <div class="container">
        <div class="rk-table-top">
          <div class="rk-table-title">Complete Rankings</div>
          <div class="rk-table-controls">
            <input type="text" class="rk-search" id="rk-search" placeholder="Search city…" />
            <button class="rk-filter-chip is-active" data-region="all">All</button>
            <button class="rk-filter-chip" data-region="Europe">🇪🇺 Europe</button>
            <button class="rk-filter-chip" data-region="Asia">🌏 Asia</button>
            <button class="rk-filter-chip" data-region="Africa">🌍 Africa</button>
            <button class="rk-filter-chip" data-region="Americas">🌎 Americas</button>
          </div>
        </div>

        <div class="rk-table-scroll">
          <table class="rk-table" id="rk-table">
            <thead>
              <tr>
                <th data-col="rank" style="width:52px">#</th>
                <th data-col="name">City</th>
                <th data-col="score" class="is-sorted">Nomad Score <span class="sort-arrow">↓</span></th>
                <th data-col="wifi">WiFi <span class="sort-arrow">↕</span></th>
                <th data-col="safety">Safety <span class="sort-arrow">↕</span></th>
                <th data-col="budget">Budget/mo <span class="sort-arrow">↕</span></th>
                <th data-col="visa">Visa</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="rk-tbody"></tbody>
          </table>
        </div>
        <div id="rk-count"></div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section class="rk-categories">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">By Category</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">Top 5 in each dimension</h2>
        <div class="rk-categories__grid">
          ${m("Most Affordable","💰",_,v=>fe(v),"/mo")}
          ${m("Fastest Internet","📡",d,v=>v.digitalNomad.wifiSpeed," Mbps")}
          ${m("Safest Cities","🛡",u,v=>v.digitalNomad.safetyScore,"/100")}
          ${m("Nomad Visa","✈️",f,v=>v.digitalNomad.overallScore,"/100")}
        </div>
      </div>
    </section>

    <!-- POPULAR COMPARISONS -->
    <section class="rk-comparisons">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Head to Head</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">Popular city comparisons</h2>
        <div class="rk-compare-grid">${I}</div>
      </div>
    </section>

    <!-- SEO CONTENT -->
    <section class="rk-seo">
      <div class="container rk-seo__inner">
        <h2>How We Rank the Best Cities for Digital Nomads</h2>
        <p>
          Our Nomad Score combines six weighted dimensions: cost efficiency relative to average income,
          WiFi speed and reliability, personal safety index, visa accessibility for remote workers,
          infrastructure quality (transport, healthcare, English proficiency) and economic stability.
          Each city is scored out of 100.
        </p>
        <h3>Cost of Living for Remote Workers</h3>
        <p>
          Affordable destinations like Chiang Mai, Bali and Medellín consistently attract digital nomads
          with monthly budgets under $1,500. These cities offer strong nomad communities, reliable coworking
          spaces and a high quality of life at a fraction of Western city costs.
        </p>
        <h3>Internet Speed & Infrastructure</h3>
        <p>
          Reliable high-speed internet is non-negotiable for remote work. Singapore, Seoul and Tokyo
          consistently rank highest for WiFi speed, all averaging 200+ Mbps. For video calls, large file
          transfers and stable VPN connections, these cities outperform most alternatives.
        </p>
        <h3>Safety & Visa Friendliness</h3>
        <p>
          Safety scores above 80/100 are found in Helsinki, Tokyo, Vienna and Singapore. For visa access,
          destinations offering dedicated digital nomad visas — including Portugal, Thailand, the UAE and
          Indonesia — dramatically simplify the legal process for long-term stays.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="rk-cta">
      <div class="rk-cta__inner container">
        <h2>Ready to compare cities?</h2>
        <p>Use the calculator to simulate your real monthly budget in any two cities.</p>
        <div class="rk-cta__btns">
          <a href="/calculator" data-link class="rk-btn-primary">Open Calculator →</a>
          <a href="/destinations" data-link class="rk-btn-secondary">Browse Destinations</a>
        </div>
      </div>
    </section>

    <script id="rk-data" type="application/json">${g}<\/script>
  `;return ht(E)}function Ua(){const c=document.getElementById("rk-data");if(!c)return;const l=JSON.parse(c.textContent),r=document.getElementById("rk-tbody"),_=document.getElementById("rk-count"),d=document.getElementById("rk-search");let u={region:"all",search:"",col:"score",dir:"desc"};function f(y,w=80,g=60){return y>=w?"#10b981":y>=g?"#f59e0b":"#ef4444"}function P(y,w){const g=w===1?"background:#fef3c7;color:#d97706":w===2?"background:#f3f4f6;color:#6b7280":w===3?"background:#fed7aa;color:#b45309":"background:#f8fafc;color:#6b7280",m=f(y.score);return`
      <tr data-slug="${y.slug}" data-continent="${y.continent}">
        <td>
          <span class="rk-rank-badge" style="${g}">${w}</span>
        </td>
        <td>
          <a href="/city/${y.slug}" data-link class="rk-city-link">${y.name}</a>
          <div class="rk-city-country">${y.country}</div>
        </td>
        <td>
          <div class="rk-score-wrap">
            <span class="rk-score-num" style="color:${m}">${y.score}</span>
            <div class="rk-score-bar-wrap">
              <div class="rk-score-bar" style="width:${y.score}%;background:${m}"></div>
            </div>
          </div>
        </td>
        <td><strong>${y.wifi}</strong> <span style="color:#9ca3af;font-size:11px">Mbps</span></td>
        <td><strong>${y.safety}</strong><span style="color:#9ca3af;font-size:11px">/100</span></td>
        <td style="font-weight:700">$${y.budget.toLocaleString()}</td>
        <td>
          <span class="${y.visaOk?"rk-visa-yes":"rk-visa-no"}">
            ${y.visaOk?"✅ Yes":"Standard"}
          </span>
        </td>
        <td>
          <a href="/calculator" data-link data-ca="${y.slug}" class="rk-compare-link">Compare</a>
        </td>
      </tr>
    `}function k(){let y=[...l];if(u.region!=="all"&&(y=y.filter(m=>u.region==="Americas"?m.continent.includes("America"):m.continent===u.region)),u.search){const m=u.search.toLowerCase();y=y.filter(T=>T.name.toLowerCase().includes(m)||T.country.toLowerCase().includes(m))}const g={score:"score",wifi:"wifi",safety:"safety",budget:"budget",name:"name"}[u.col]||"score";y.sort((m,T)=>{const I=m[g],E=T[g];return typeof I=="string"?u.dir==="asc"?I.localeCompare(E):E.localeCompare(I):u.dir==="asc"?I-E:E-I}),y.length===0?r.innerHTML='<tr><td colspan="8" class="rk-empty">No cities match your search.</td></tr>':r.innerHTML=y.map((m,T)=>P(m,T+1)).join(""),_.textContent=`Showing ${y.length} of ${l.length} cities`,r.querySelectorAll("[data-link]").forEach(m=>{m.addEventListener("click",T=>{T.preventDefault(),window.history.pushState({},"",m.getAttribute("href")),window.dispatchEvent(new PopStateEvent("popstate"))})})}document.querySelectorAll(".rk-table th[data-col]").forEach(y=>{y.addEventListener("click",()=>{const w=y.dataset.col;if(w==="rank"||w==="visa")return;u.col===w?u.dir=u.dir==="desc"?"asc":"desc":(u.col=w,u.dir="desc"),document.querySelectorAll(".rk-table th").forEach(m=>m.classList.remove("is-sorted")),y.classList.add("is-sorted");const g=y.querySelector(".sort-arrow");g&&(g.textContent=u.dir==="desc"?"↓":"↑"),k()})}),document.querySelectorAll("[data-region]").forEach(y=>{y.addEventListener("click",()=>{document.querySelectorAll("[data-region]").forEach(w=>w.classList.remove("is-active")),y.classList.add("is-active"),u.region=y.dataset.region,k()})}),d==null||d.addEventListener("input",y=>{u.search=y.target.value.trim(),k()}),document.querySelectorAll(".rk-compare-card").forEach(y=>{y.addEventListener("click",w=>{w.preventDefault();const g=y.dataset.ca,m=y.dataset.cb,T=`/calculator${g&&m?`?a=${g}&b=${m}`:""}`;window.history.pushState({},"",T),window.dispatchEvent(new PopStateEvent("popstate"))})}),k()}function Ga(){const c=Ot().length,l=`
    <style>
      /* ── Hero ─────────────────────── */
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

      /* ── Stats strip ──────────────── */
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

      /* ── Mission ──────────────────── */
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

      /* ── Features grid ────────────── */
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

      /* ── Values ───────────────────── */
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

      /* ── Data methodology ─────────── */
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

      /* ── CTA ──────────────────────── */
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
        <p class="ab-hero__eyebrow">About TripCost</p>
        <h1 class="ab-hero__title">Real data for people<br>who choose to <em>move differently</em>.</h1>
        <p class="ab-hero__sub">
          We built TripCost because planning an international move shouldn't require
          ten browser tabs and three spreadsheets. One tool, all the data, no guesswork.
        </p>
      </div>
    </section>

    <!-- STATS -->
    <div class="ab-stats">
      <div class="container">
        <div class="ab-stats__grid">
          <div class="ab-stat">
            <div class="ab-stat__num">${c}+</div>
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
              TripCost was built to solve a real problem: when you're considering a relocation,
              cost information is scattered, outdated or buried in forums. We aggregate it,
              structure it and put it in one place — free, clear and actionable.
            </p>
            <p class="ab-text">
              Whether you're a freelancer looking for the cheapest city with fast WiFi,
              a family planning a permanent move, or a founder optimising for tax efficiency —
              our tools give you the numbers to make that decision with confidence.
            </p>
            <p class="ab-text">
              We don't run ads. We don't sell your data. We're just obsessed with
              making relocation research less painful.
            </p>
          </div>
          <div class="ab-mission-card">
            <div class="ab-mission-card__quote">
              Cost of living data should be transparent, updated and free — not locked behind paywalls.
            </div>
            <div class="ab-mission-card__tag">
              <span style="width:6px;height:6px;background:#34d399;border-radius:50%"></span>
              TripCost manifesto
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
            <div class="ab-feature__desc">Detailed breakdowns for ${c} destinations — housing, food, transport, coworking and more. Each updated quarterly.</div>
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
            <div class="ab-value__desc">No user tracking beyond anonymised analytics. No selling data. No ad profiling. You use TripCost, not the other way around.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="ab-cta">
      <div class="ab-cta__inner container">
        <h2>Ready to find your city?</h2>
        <p>Start with the calculator or explore all destinations — it takes 2 minutes.</p>
        <div class="ab-cta__btns">
          <a href="/calculator"   data-link class="ab-btn-primary">Open Calculator →</a>
          <a href="/destinations" data-link class="ab-btn-ghost">Browse Destinations</a>
        </div>
      </div>
    </section>
  `;return ht(l)}function Qa({eyebrow:c,title:l,subtitle:r,sections:_}){const d=_.map(f=>`<a href="#${f.id}" class="lp-toc__link">${f.title}</a>`).join(""),u=_.map(f=>`
    <div class="lp-section" id="${f.id}">
      <h2 class="lp-section__title">${f.title}</h2>
      ${f.content}
    </div>
  `).join("");return`
    <style>
      .lp-hero {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);
        padding:52px 0 44px;position:relative;overflow:hidden;
      }
      .lp-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 50% 70% at 70% 50%,rgba(99,102,241,0.18),transparent 70%);
      }
      .lp-hero__inner { position:relative;z-index:2; }
      .lp-hero__eyebrow {
        font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;
        color:#818cf8;margin-bottom:10px;
      }
      .lp-hero__title {
        font-size:clamp(26px,4vw,42px);font-weight:900;color:#fff;
        letter-spacing:-0.025em;margin-bottom:10px;
      }
      .lp-hero__sub { font-size:14px;color:rgba(255,255,255,0.5);margin:0; }

      .lp-layout {
        display:grid;grid-template-columns:220px 1fr;gap:48px;
        padding:56px 0 80px;align-items:start;
      }

      /* TOC sidebar */
      .lp-toc {
        position:sticky;top:80px;background:#fff;
        border:1px solid #e5e7eb;border-radius:14px;padding:20px;
      }
      .lp-toc__label {
        font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
        color:#9ca3af;margin-bottom:12px;
      }
      .lp-toc__link {
        display:block;font-size:12px;font-weight:500;color:#6b7280;
        text-decoration:none;padding:5px 0;border-bottom:1px solid #f9fafb;
        transition:color 0.15s;
      }
      .lp-toc__link:last-child { border-bottom:none; }
      .lp-toc__link:hover { color:#6366f1;text-decoration:none; }
      .lp-toc__date {
        font-size:11px;color:#9ca3af;margin-top:16px;padding-top:12px;
        border-top:1px solid #f1f5f9;
      }

      /* Content */
      .lp-body { max-width:720px; }
      .lp-section { margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid #f1f5f9; }
      .lp-section:last-child { border-bottom:none;margin-bottom:0;padding-bottom:0; }
      .lp-section__title {
        font-size:18px;font-weight:800;color:#111827;letter-spacing:-0.01em;
        margin-bottom:12px;padding-top:8px;
      }
      .lp-section p  { font-size:14px;color:#4b5563;line-height:1.85;margin-bottom:10px; }
      .lp-section p:last-child { margin-bottom:0; }
      .lp-section ul { margin:10px 0 10px 0;padding:0; }
      .lp-section ul li {
        font-size:14px;color:#4b5563;line-height:1.7;
        padding:4px 0 4px 18px;position:relative;
      }
      .lp-section ul li::before {
        content:'–';position:absolute;left:0;color:#9ca3af;
      }
      .lp-section h3 {
        font-size:14px;font-weight:700;color:#374151;margin:16px 0 6px;
      }

      @media(max-width:768px){
        .lp-layout { grid-template-columns:1fr; }
        .lp-toc { position:static; }
      }
    </style>

    <section class="lp-hero">
      <div class="container lp-hero__inner">
        <p class="lp-hero__eyebrow">${c}</p>
        <h1 class="lp-hero__title">${l}</h1>
        <p class="lp-hero__sub">${r}</p>
      </div>
    </section>

    <div class="container">
      <div class="lp-layout">
        <aside class="lp-toc">
          <div class="lp-toc__label">Contents</div>
          ${d}
          <div class="lp-toc__date">
            Last updated<br>
            ${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long"})}
          </div>
        </aside>
        <div class="lp-body">${u}</div>
      </div>
    </div>
  `}function Ya(){return ht(Qa({eyebrow:"Legal",title:"Legal Notice",subtitle:"Important information about TripCost and our services.",sections:[{id:"service",title:"Service Provider",content:"<p>TripCost is a free online platform providing cost of living information and budget planning tools for digital nomads, remote workers and expats. This website operates for informational purposes only and does not constitute financial, legal or relocation advice.</p>"},{id:"disclaimer",title:"Disclaimer",content:`<p>All information on TripCost is provided for general informational purposes. While we strive for accuracy, we make no warranties — express or implied — about the completeness, accuracy or reliability of the data presented.</p>
        <p>Any reliance you place on our information is strictly at your own risk. TripCost shall not be liable for any direct, indirect or consequential loss arising from your use of this website.</p>`},{id:"data-sources",title:"Data Sources",content:"<p>Cost data is compiled from publicly available databases, government statistical offices, community-contributed information and third-party cost-of-living indexes. We cross-reference multiple sources and update data quarterly. We do not guarantee the accuracy of third-party sources.</p>"},{id:"external-links",title:"External Links",content:"<p>This website may link to external sites not under our control. We have no control over the nature, content or availability of those sites. Inclusion of any link does not imply recommendation or endorsement.</p>"},{id:"copyright",title:"Copyright",content:"<p>All original content on TripCost — including text, structure and interface design — is the property of TripCost and protected under international copyright law. Unauthorised reproduction or distribution is prohibited. City and country images are sourced from Unsplash under their free licence.</p>"},{id:"modifications",title:"Modifications",content:"<p>We reserve the right to modify, suspend or discontinue any aspect of our services at any time without prior notice. Legal terms may be updated at any time; continued use of the service constitutes acceptance of the current version.</p>"},{id:"governing-law",title:"Governing Law",content:"<p>These terms are governed by applicable laws. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the appropriate courts.</p>"}]}))}function Ka({eyebrow:c,title:l,subtitle:r,sections:_}){const d=_.map(f=>`<a href="#${f.id}" class="lp-toc__link">${f.title}</a>`).join(""),u=_.map(f=>`
    <div class="lp-section" id="${f.id}">
      <h2 class="lp-section__title">${f.title}</h2>
      ${f.content}
    </div>
  `).join("");return`
    <style>
      .lp-hero{background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);padding:52px 0 44px;position:relative;overflow:hidden;}
      .lp-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 50% 70% at 70% 50%,rgba(99,102,241,0.18),transparent 70%);}
      .lp-hero__inner{position:relative;z-index:2;}
      .lp-hero__eyebrow{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#818cf8;margin-bottom:10px;}
      .lp-hero__title{font-size:clamp(26px,4vw,42px);font-weight:900;color:#fff;letter-spacing:-0.025em;margin-bottom:10px;}
      .lp-hero__sub{font-size:14px;color:rgba(255,255,255,0.5);margin:0;}
      .lp-layout{display:grid;grid-template-columns:220px 1fr;gap:48px;padding:56px 0 80px;align-items:start;}
      .lp-toc{position:sticky;top:80px;background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:20px;}
      .lp-toc__label{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;margin-bottom:12px;}
      .lp-toc__link{display:block;font-size:12px;font-weight:500;color:#6b7280;text-decoration:none;padding:5px 0;border-bottom:1px solid #f9fafb;transition:color 0.15s;}
      .lp-toc__link:last-child{border-bottom:none;}
      .lp-toc__link:hover{color:#6366f1;text-decoration:none;}
      .lp-toc__date{font-size:11px;color:#9ca3af;margin-top:16px;padding-top:12px;border-top:1px solid #f1f5f9;}
      .lp-body{max-width:720px;}
      .lp-section{margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid #f1f5f9;}
      .lp-section:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0;}
      .lp-section__title{font-size:18px;font-weight:800;color:#111827;letter-spacing:-0.01em;margin-bottom:12px;padding-top:8px;}
      .lp-section p{font-size:14px;color:#4b5563;line-height:1.85;margin-bottom:10px;}
      .lp-section p:last-child{margin-bottom:0;}
      .lp-section ul{margin:10px 0;padding:0;}
      .lp-section ul li{font-size:14px;color:#4b5563;line-height:1.7;padding:4px 0 4px 18px;position:relative;}
      .lp-section ul li::before{content:'–';position:absolute;left:0;color:#9ca3af;}
      .lp-section h3{font-size:14px;font-weight:700;color:#374151;margin:16px 0 6px;}
      @media(max-width:768px){.lp-layout{grid-template-columns:1fr;}.lp-toc{position:static;}}
    </style>
    <section class="lp-hero">
      <div class="container lp-hero__inner">
        <p class="lp-hero__eyebrow">${c}</p>
        <h1 class="lp-hero__title">${l}</h1>
        <p class="lp-hero__sub">${r}</p>
      </div>
    </section>
    <div class="container">
      <div class="lp-layout">
        <aside class="lp-toc">
          <div class="lp-toc__label">Contents</div>
          ${d}
          <div class="lp-toc__date">Last updated<br>${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long"})}</div>
        </aside>
        <div class="lp-body">${u}</div>
      </div>
    </div>`}function Ja(){return ht(Ka({eyebrow:"Privacy",title:"Privacy Policy",subtitle:"How we collect, use and protect your information.",sections:[{id:"intro",title:"Introduction",content:"<p>TripCost is committed to protecting your privacy. This policy explains how we handle information when you use our website. We built TripCost with a privacy-first mindset: we collect as little data as possible and never sell it.</p>"},{id:"what-we-collect",title:"Information We Collect",content:`
          <h3>Information you provide</h3>
          <ul>
            <li>Contact information if you reach out to us directly</li>
            <li>Feedback or suggestions you voluntarily submit</li>
          </ul>
          <h3>Automatically collected</h3>
          <p>When you visit TripCost, basic analytics data may be collected automatically:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Pages visited and time on page</li>
            <li>General geographic region (country-level only)</li>
            <li>Referring website</li>
          </ul>
          <p>We do not collect names, emails or any personally identifiable information through normal browsing.</p>`},{id:"how-we-use",title:"How We Use Your Information",content:`<p>We use collected data solely to:</p>
          <ul>
            <li>Understand how people use TripCost and improve the experience</li>
            <li>Identify and fix technical issues</li>
            <li>Respond to your enquiries if you contact us</li>
          </ul>
          <p>We do not use your data for advertising, profiling or any commercial purpose beyond operating TripCost.</p>`},{id:"cookies",title:"Cookies",content:"<p>TripCost may use minimal cookies for analytics and session management. We do not use third-party advertising cookies. You can control cookie settings through your browser preferences. Disabling cookies will not affect your ability to use TripCost.</p>"},{id:"data-sharing",title:"Data Sharing",content:"<p>We do not sell, rent or trade your personal information to any third party. We may share anonymised, aggregated data (e.g. total page visits) for transparency purposes. If we use analytics providers, they are bound by strict data processing agreements.</p>"},{id:"security",title:"Data Security",content:"<p>We implement appropriate technical measures to protect information against unauthorised access or disclosure. However, no internet transmission is 100% secure. We recommend not sharing sensitive personal data through any online service.</p>"},{id:"your-rights",title:"Your Rights",content:`<p>Depending on your jurisdiction, you may have rights including:</p>
          <ul>
            <li>Access to personal data we hold about you</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data ("right to be forgotten")</li>
            <li>Objection to processing</li>
          </ul>
          <p>To exercise any of these rights, contact us through our official channels.</p>`},{id:"children",title:"Children's Privacy",content:"<p>TripCost is not directed at individuals under 16. We do not knowingly collect data from minors. If you believe a child has submitted personal information, contact us and we will delete it promptly.</p>"},{id:"changes",title:"Changes to This Policy",content:"<p>We may update this Privacy Policy periodically. Material changes will be reflected by the updated date below. Continued use of TripCost after changes constitutes acceptance of the revised policy.</p>"},{id:"contact",title:"Contact",content:"<p>Questions about this Privacy Policy? Contact us through our official channels and we'll respond as promptly as possible.</p>"}]}))}function Xa({eyebrow:c,title:l,subtitle:r,sections:_}){const d=_.map(f=>`<a href="#${f.id}" class="lp-toc__link">${f.title}</a>`).join(""),u=_.map(f=>`
    <div class="lp-section" id="${f.id}">
      <h2 class="lp-section__title">${f.title}</h2>
      ${f.content}
    </div>
  `).join("");return`
    <style>
      .lp-hero{background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);padding:52px 0 44px;position:relative;overflow:hidden;}
      .lp-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 50% 70% at 70% 50%,rgba(99,102,241,0.18),transparent 70%);}
      .lp-hero__inner{position:relative;z-index:2;}
      .lp-hero__eyebrow{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#818cf8;margin-bottom:10px;}
      .lp-hero__title{font-size:clamp(26px,4vw,42px);font-weight:900;color:#fff;letter-spacing:-0.025em;margin-bottom:10px;}
      .lp-hero__sub{font-size:14px;color:rgba(255,255,255,0.5);margin:0;}
      .lp-layout{display:grid;grid-template-columns:220px 1fr;gap:48px;padding:56px 0 80px;align-items:start;}
      .lp-toc{position:sticky;top:80px;background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:20px;}
      .lp-toc__label{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;margin-bottom:12px;}
      .lp-toc__link{display:block;font-size:12px;font-weight:500;color:#6b7280;text-decoration:none;padding:5px 0;border-bottom:1px solid #f9fafb;transition:color 0.15s;}
      .lp-toc__link:last-child{border-bottom:none;}
      .lp-toc__link:hover{color:#6366f1;text-decoration:none;}
      .lp-toc__date{font-size:11px;color:#9ca3af;margin-top:16px;padding-top:12px;border-top:1px solid #f1f5f9;}
      .lp-body{max-width:720px;}
      .lp-section{margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid #f1f5f9;}
      .lp-section:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0;}
      .lp-section__title{font-size:18px;font-weight:800;color:#111827;letter-spacing:-0.01em;margin-bottom:12px;padding-top:8px;}
      .lp-section p{font-size:14px;color:#4b5563;line-height:1.85;margin-bottom:10px;}
      .lp-section p:last-child{margin-bottom:0;}
      .lp-section ul{margin:10px 0;padding:0;}
      .lp-section ul li{font-size:14px;color:#4b5563;line-height:1.7;padding:4px 0 4px 18px;position:relative;}
      .lp-section ul li::before{content:'–';position:absolute;left:0;color:#9ca3af;}
      @media(max-width:768px){.lp-layout{grid-template-columns:1fr;}.lp-toc{position:static;}}
    </style>
    <section class="lp-hero">
      <div class="container lp-hero__inner">
        <p class="lp-hero__eyebrow">${c}</p>
        <h1 class="lp-hero__title">${l}</h1>
        <p class="lp-hero__sub">${r}</p>
      </div>
    </section>
    <div class="container">
      <div class="lp-layout">
        <aside class="lp-toc">
          <div class="lp-toc__label">Contents</div>
          ${d}
          <div class="lp-toc__date">Last updated<br>${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long"})}</div>
        </aside>
        <div class="lp-body">${u}</div>
      </div>
    </div>`}function tr(){return ht(Xa({eyebrow:"Terms",title:"Terms of Service",subtitle:"Please read these terms carefully before using TripCost.",sections:[{id:"agreement",title:"Agreement to Terms",content:"<p>By accessing or using TripCost, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the website.</p>"},{id:"service",title:"Service Description",content:`<p>TripCost provides cost of living data, budget planning tools and nomad rankings for informational purposes only. Our services include:</p>
          <ul>
            <li>City cost guides covering housing, food, transport and coworking</li>
            <li>Interactive budget comparison calculator</li>
            <li>Digital nomad rankings and scoring</li>
            <li>Visa and tax information by destination</li>
          </ul>
          <p>TripCost is free to use. No account or payment is required to access core features.</p>`},{id:"accuracy",title:"Accuracy of Information",content:`<p>Cost data on TripCost is based on research from multiple sources and represents estimates intended for general guidance. Actual costs may vary significantly based on:</p>
          <ul>
            <li>Individual lifestyle choices and neighbourhood selection</li>
            <li>Seasonal variations and local market conditions</li>
            <li>Currency exchange rate fluctuations</li>
            <li>Inflation and economic changes after our last update</li>
          </ul>
          <p>We strongly recommend conducting your own research and consulting local sources before making financial or relocation decisions.</p>`},{id:"licence",title:"Use Licence",content:`<p>You are granted a limited, non-exclusive licence to access and use TripCost for personal, non-commercial purposes. You may not:</p>
          <ul>
            <li>Systematically copy, scrape or redistribute our data</li>
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to our systems</li>
            <li>Interfere with or disrupt the service or servers</li>
          </ul>`},{id:"disclaimers",title:"Disclaimer of Warranties",content:'<p>TripCost is provided on an "as is" and "as available" basis. We make no warranties — expressed or implied — including warranties of merchantability or fitness for a particular purpose. We do not warrant that the service will be uninterrupted, error-free or free of harmful components.</p>'},{id:"liability",title:"Limitation of Liability",content:"<p>TripCost and its operators shall not be liable for any direct, indirect, incidental or consequential damages arising from your use of the service, including but not limited to financial decisions made based on our data.</p>"},{id:"modifications",title:"Modifications",content:"<p>We reserve the right to modify or discontinue the service at any time without notice. We may update these Terms at any time; continued use constitutes acceptance of the revised terms.</p>"},{id:"governing-law",title:"Governing Law",content:"<p>These terms are governed by applicable laws. Disputes will be subject to the exclusive jurisdiction of the appropriate courts.</p>"},{id:"contact",title:"Contact",content:"<p>Questions about these Terms of Service? Reach us through our official contact channels.</p>"}]}))}function qo(c){return`https://picsum.photos/seed/country-${c}/1200/800`}function Ro(c){return`https://picsum.photos/seed/ranking-${c}/1400/900`}function er(){me({title:"Best Cities by Country — Cost of Living & Quality of Life",description:"Discover the best cities to live in by country. Compare cost of living, safety, WiFi and lifestyle across top destinations worldwide."});const c=La()??[];if(!c.length)return ht(`
      <div style="text-align:center;padding:120px 24px">
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">No data available</h1>
        <a href="/destinations" data-link class="btn btn--primary btn--lg">Browse All Cities</a>
      </div>
    `);const l=[...c].sort((d,u)=>d.name.localeCompare(u.name)),r=l.map(d=>{const u=qo(d.slug);return`
      <a href="/best-cities/${d.slug}" data-link class="bch-card">
        <div class="bch-card__img">
          <img src="${u}" alt="Best cities in ${d.name}" loading="lazy" />
          <div class="bch-card__overlay"></div>
          <div class="bch-card__name">${d.name}</div>
        </div>
        <div class="bch-card__body">
          <span class="bch-card__cta">Explore cities →</span>
        </div>
      </a>
    `}).join(""),_=`
    <style>
      .bch-hero {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);
        padding:60px 0 52px;position:relative;overflow:hidden;
      }
      .bch-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 55% 70% at 75% 50%,rgba(99,102,241,0.2),transparent 70%);
      }
      .bch-hero__inner{position:relative;z-index:2;}
      .bch-hero__eyebrow{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#818cf8;margin-bottom:12px;}
      .bch-hero__title{font-size:clamp(28px,4vw,48px);font-weight:900;color:#fff;letter-spacing:-0.025em;line-height:1.1;margin-bottom:12px;}
      .bch-hero__title em{font-style:normal;background:linear-gradient(90deg,#818cf8,#34d399);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
      .bch-hero__sub{font-size:15px;color:rgba(255,255,255,0.55);margin:0;max-width:560px;}

      .bch-section{padding:56px 0 80px;background:#f9fafb;}
      .bch-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;margin-top:32px;}

      .bch-card{display:block;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;
        text-decoration:none;background:#fff;
        transition:transform 0.22s,box-shadow 0.22s,border-color 0.22s;}
      .bch-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.11);border-color:#c7d2fe;text-decoration:none;}
      .bch-card__img{position:relative;height:180px;overflow:hidden;}
      .bch-card__img img{width:100%;height:100%;object-fit:cover;transition:transform 0.4s;}
      .bch-card:hover .bch-card__img img{transform:scale(1.06);}
      .bch-card__overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.1) 60%);}
      .bch-card__name{position:absolute;bottom:14px;left:16px;font-size:17px;font-weight:800;color:#fff;letter-spacing:-0.01em;}
      .bch-card__body{padding:12px 16px;display:flex;align-items:center;justify-content:space-between;}
      .bch-card__cta{font-size:12px;font-weight:700;color:#6366f1;}

      @media(max-width:600px){.bch-grid{grid-template-columns:1fr 1fr;}}
    </style>

    <section class="bch-hero">
      <div class="container bch-hero__inner">
        <p class="bch-hero__eyebrow">City Explorer</p>
        <h1 class="bch-hero__title">Best Cities<br>by <em>Country</em></h1>
        <p class="bch-hero__sub">
          Browse ${l.length} countries and discover which cities offer the best cost of living, safety and quality of life.
        </p>
      </div>
    </section>

    <section class="bch-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">All Countries</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">
          Select a country to explore
        </h2>
        <div class="bch-grid">${r}</div>
      </div>
    </section>
  `;return ht(_)}function $o(c){const{country:l,profile:r}=c,_=["solo","family","nomad"].includes(r)?r:"solo",d=Ta(l);if(!d.length)return ht(`
      <div style="text-align:center;padding:120px 24px">
        <div style="font-size:48px;margin-bottom:16px">🌍</div>
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">No cities found</h1>
        <p style="color:#6b7280;margin-bottom:32px">We don't have data for this country yet.</p>
        <a href="/best-cities" data-link class="btn btn--primary btn--lg">Browse All Countries</a>
      </div>
    `);const u=d[0].country,f=qo(l),P=d.map(m=>({...m,score:Fo(m,_)})).sort((m,T)=>T.score-m.score);me({title:`Best Cities in ${u} — Cost of Living ${new Date().getFullYear()}`,description:`Compare the best cities to live in ${u} based on cost of living, safety, WiFi and quality of life. Updated ${new Date().getFullYear()}.`});function k(m){return m>=80?"#10b981":m>=60?"#f59e0b":"#ef4444"}const y=["solo","family","nomad"].map(m=>`
    <a href="/best-cities/${l}/${m}" data-link
       class="bcp-profile-btn${_===m?" is-active":""}">
      ${m==="solo"?"👤 Solo":m==="family"?"👨‍👩‍👧 Family":"🌍 Nomad"}
    </a>
  `).join(""),w=P.map((m,T)=>{var B,R,v,M,A,F,U,it,ot,nt,W;const I=Math.round((((R=(B=m.costs)==null?void 0:B.accommodation)==null?void 0:R.center)??0)*30+(((M=(v=m.costs)==null?void 0:v.food)==null?void 0:M.standard)??0)*30+(((A=m.costs)==null?void 0:A.transport)??0)+(((F=m.costs)==null?void 0:F.coworking)??0)),E=k(((U=m.digitalNomad)==null?void 0:U.overallScore)??0),x=T===0?"🏆":T===1?"🥈":T===2?"🥉":`#${T+1}`;return`
      <a href="/city/${m.slug}" data-link class="bcp-card${T===0?" bcp-card--top":""}">
        <div class="bcp-card__img">
          <img src="${m.image}" alt="${m.name}" loading="lazy" />
          <div class="bcp-card__img-overlay"></div>
          <span class="bcp-card__rank">${x}</span>
          <span class="bcp-card__score-badge" style="background:${E}">
            ${((it=m.digitalNomad)==null?void 0:it.overallScore)??"—"}/100
          </span>
        </div>
        <div class="bcp-card__body">
          <div class="bcp-card__top">
            <div>
              <p class="bcp-card__name">${m.name}</p>
              <p class="bcp-card__country">${m.country}</p>
            </div>
            <div class="bcp-card__price">
              <div class="bcp-card__price-label">From</div>
              <div class="bcp-card__price-val">$${I.toLocaleString()}<em>/mo</em></div>
            </div>
          </div>
          <div class="bcp-card__metrics">
            <span>🛡 ${((ot=m.digitalNomad)==null?void 0:ot.safetyScore)??"—"}</span>
            <span>📡 ${((nt=m.digitalNomad)==null?void 0:nt.wifiSpeed)??"—"} Mbps</span>
            <span>${(W=m.visa)!=null&&W.remoteFriendly?"✅ Nomad visa":"⬜ Standard"}</span>
          </div>
        </div>
      </a>
    `}).join(""),g=`
    <style>
      .bcp-hero{position:relative;min-height:360px;display:flex;align-items:flex-end;overflow:hidden;}
      .bcp-hero__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
      .bcp-hero__gradient{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.3) 60%);}
      .bcp-hero__content{position:relative;z-index:2;padding:40px 0 36px;width:100%;}
      .bcp-hero__eyebrow{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#818cf8;margin-bottom:10px;}
      .bcp-hero__title{font-size:clamp(28px,4vw,48px);font-weight:900;color:#fff;letter-spacing:-0.025em;margin-bottom:8px;line-height:1.1;}
      .bcp-hero__sub{font-size:14px;color:rgba(255,255,255,0.55);margin:0;}

      .bcp-controls{background:#fff;border-bottom:1px solid #e5e7eb;padding:14px 0;position:sticky;top:0;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,0.05);}
      .bcp-controls__inner{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
      .bcp-profile-btn{display:inline-flex;align-items:center;gap:5px;padding:6px 14px;border-radius:999px;border:1.5px solid #e5e7eb;font-size:12px;font-weight:600;color:#6b7280;text-decoration:none;background:#fff;transition:all 0.15s;}
      .bcp-profile-btn:hover{border-color:#c7d2fe;color:#4f46e5;text-decoration:none;}
      .bcp-profile-btn.is-active{background:linear-gradient(135deg,#6366f1,#8b5cf6);border-color:transparent;color:#fff;}
      .bcp-controls__label{font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9ca3af;margin-right:4px;}

      .bcp-section{padding:48px 0 72px;background:#f9fafb;}
      .bcp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;margin-top:28px;}

      .bcp-card{display:block;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;text-decoration:none;background:#fff;transition:transform 0.22s,box-shadow 0.22s,border-color 0.22s;}
      .bcp-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.11);border-color:#c7d2fe;text-decoration:none;}
      .bcp-card--top{border-color:#f59e0b;box-shadow:0 0 0 2px rgba(245,158,11,0.2);}
      .bcp-card__img{position:relative;height:190px;overflow:hidden;}
      .bcp-card__img img{width:100%;height:100%;object-fit:cover;transition:transform 0.4s;}
      .bcp-card:hover .bcp-card__img img{transform:scale(1.06);}
      .bcp-card__img-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.4),transparent 60%);}
      .bcp-card__rank{position:absolute;top:12px;left:12px;font-size:18px;}
      .bcp-card__score-badge{position:absolute;top:12px;right:12px;color:#fff;font-size:12px;font-weight:800;padding:3px 10px;border-radius:999px;}
      .bcp-card__body{padding:16px 18px;}
      .bcp-card__top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;}
      .bcp-card__name{font-size:16px;font-weight:800;color:#111827;margin:0 0 2px;}
      .bcp-card__country{font-size:11px;color:#9ca3af;margin:0;}
      .bcp-card__price{text-align:right;flex-shrink:0;}
      .bcp-card__price-label{font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:1px;}
      .bcp-card__price-val{font-size:17px;font-weight:800;color:#1e1b4b;letter-spacing:-0.02em;}
      .bcp-card__price-val em{font-size:11px;font-weight:500;color:#9ca3af;font-style:normal;}
      .bcp-card__metrics{display:flex;gap:6px;flex-wrap:wrap;}
      .bcp-card__metrics span{font-size:11px;font-weight:600;color:#374151;background:#f8fafc;border:1px solid #f1f5f9;padding:3px 8px;border-radius:999px;}

      .bcp-cta{background:linear-gradient(135deg,#1e1b4b,#312e81,#1e1b4b);padding:60px 0;text-align:center;position:relative;overflow:hidden;}
      .bcp-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(99,102,241,0.25),transparent 70%);}
      .bcp-cta__inner{position:relative;z-index:2;}
      .bcp-cta h2{font-size:30px;font-weight:800;color:#fff;letter-spacing:-0.02em;margin-bottom:10px;}
      .bcp-cta p{font-size:15px;color:rgba(255,255,255,0.55);margin-bottom:28px;}
      .bcp-btn{display:inline-flex;align-items:center;gap:7px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:14px;font-weight:600;padding:13px 26px;border-radius:10px;text-decoration:none;box-shadow:0 4px 16px rgba(99,102,241,0.4);transition:opacity 0.2s;}
      .bcp-btn:hover{opacity:0.9;color:#fff;text-decoration:none;}
    </style>

    <!-- HERO -->
    <section class="bcp-hero">
      <img class="bcp-hero__img" src="${f}" alt="${u}" />
      <div class="bcp-hero__gradient"></div>
      <div class="bcp-hero__content">
        <div class="container">
          <p class="bcp-hero__eyebrow">Best Cities</p>
          <h1 class="bcp-hero__title">Best cities in ${u}</h1>
          <p class="bcp-hero__sub">${P.length} cit${P.length===1?"y":"ies"} ranked by cost, safety, WiFi and ${_} lifestyle score.</p>
        </div>
      </div>
    </section>

    <!-- PROFILE CONTROLS -->
    <div class="bcp-controls">
      <div class="container">
        <div class="bcp-controls__inner">
          <span class="bcp-controls__label">Profile:</span>
          ${y}
        </div>
      </div>
    </div>

    <!-- CITIES GRID -->
    <section class="bcp-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:6px">
          Ranked for ${_}
        </p>
        <h2 style="font-size:24px;font-weight:800;color:#111827;letter-spacing:-0.02em;margin-bottom:4px">
          Top ${P.length} cit${P.length===1?"y":"ies"} in ${u}
        </h2>
        <p style="font-size:14px;color:#9ca3af">Click any city for a full cost breakdown and guide.</p>
        <div class="bcp-grid">${w}</div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bcp-cta">
      <div class="bcp-cta__inner container">
        <h2>Compare cities head to head</h2>
        <p>Use the calculator to simulate real monthly costs for your lifestyle.</p>
        <a href="/calculator" data-link class="bcp-btn">Open Calculator →</a>
      </div>
    </section>
  `;return ht(g)}function ir(c,l="solo"){const r=yi(c.slug),_=r.avgSafetyScore??0,d=r.avgInternetSpeed??0,u=r.avgMonthlyCost??0,f=u?Math.max(0,100-u/50):0,P=c.macro??{},k=c.tax??{},y=c.nomad??{},w=c.family??{},g=P.safetyIndex??0,m=P.healthcareIndex??0,T=P.infrastructureScore??0,I=P.qualityOfLifeIndex??0,E=k.taxFriendlinessScore??0,x=d||y.avgInternetSpeed||0,B=y.visaEaseScore??0,R=y.coworkingDensityScore??0,v=w.educationScore??0,M=w.familySafetyScore??0,A=w.suburbanAffordabilityScore??0,F=_||g;let U=0;return l==="nomad"?U=F*.15+x*.25+B*.2+R*.2+E*.1+I*.1:l==="family"?U=M*.25+v*.25+A*.2+m*.15+F*.15:l==="solo"?U=F*.2+T*.2+x*.2+E*.15+I*.15+f*.1:U=F*.2+m*.2+T*.2+I*.2+E*.2,Math.round(U)}function or(c){return ki.find(l=>l.slug===c)||null}function nr(c="solo",l=30){return[...ki].map(r=>({...r,score:ir(r,c)})).sort((r,_)=>_.score-r.score).slice(0,l)}function ar(c){return Ot().filter(r=>r.countrySlug?r.countrySlug===c:r.country?r.country.toLowerCase().replace(/\s+/g,"-")===c:!1)}function yi(c){var f,P,k;const l=or(c),r=ar(c);if(!r.length)return{avgMonthlyCost:((f=l==null?void 0:l.macro)==null?void 0:f.costOfLivingIndex)??"N/A",avgSafetyScore:((P=l==null?void 0:l.macro)==null?void 0:P.safetyIndex)??"N/A",avgInternetSpeed:((k=l==null?void 0:l.nomad)==null?void 0:k.avgInternetSpeed)??"N/A",cityCount:0,isFallback:!0};let _=0,d=0,u=0;return r.forEach(y=>{var T,I,E,x,B,R;const w=((I=(T=y.costs)==null?void 0:T.accommodation)==null?void 0:I.center)??0,g=((x=(E=y.costs)==null?void 0:E.food)==null?void 0:x.standard)??0,m=w+g*30;_+=m,d+=((B=y.digitalNomad)==null?void 0:B.safetyScore)??0,u+=((R=y.digitalNomad)==null?void 0:R.wifiSpeed)??0}),{avgMonthlyCost:Math.round(_/r.length),avgSafetyScore:Math.round(d/r.length),avgInternetSpeed:Math.round(u/r.length),cityCount:r.length,isFallback:!1}}function No(c={}){const{profile:l}=c,r=["solo","family","nomad"].includes(l)?l:"solo",_=nr(r,30);if(!_.length)return ht(`
      <div style="text-align:center;padding:120px 24px">
        <h1 style="font-size:28px;font-weight:800;color:#111827">No data available</h1>
        <a href="/destinations" data-link class="btn btn--primary btn--lg" style="margin-top:24px;display:inline-block">Browse Cities</a>
      </div>
    `);me({title:`Best Countries for ${r==="nomad"?"Digital Nomads":r.charAt(0).toUpperCase()+r.slice(1)} — ${new Date().getFullYear()} Rankings`,description:`Top countries ranked by safety, cost of living, infrastructure and ${r} lifestyle quality. Updated ${new Date().getFullYear()}.`});function d(T){return T>=80?"#10b981":T>=60?"#f59e0b":"#ef4444"}const u=["solo","family","nomad"].map(T=>`
    <a href="/best-countries/${T}" data-link
       class="bco-profile-btn${r===T?" is-active":""}">
      ${T==="solo"?"👤 Solo":T==="family"?"👨‍👩‍👧 Family":"🌍 Nomad"}
    </a>
  `).join(""),f=["🥇","🥈","🥉"],P=[1,0,2],k=_.slice(0,3),y=P.map(T=>{var R;const I=k[T];if(!I)return"";const E=yi(I.slug),x=Ro(I.slug);return`
      <div class="bco-pod${T===0?" bco-pod--gold":""}">
        <div class="bco-pod__medal">${f[T]}</div>
        <div class="bco-pod__img">
          <img src="${x}" alt="${I.name}" loading="lazy" />
          <div class="bco-pod__overlay"></div>
        </div>
        <div class="bco-pod__body">
          <div class="bco-pod__score" style="color:${d(I.score)}">${I.score}<span>/100</span></div>
          <div class="bco-pod__name">${I.name}</div>
          <div class="bco-pod__flag">${((R=I.assets)==null?void 0:R.flagEmoji)??""} ${I.continent??""}</div>
          <div class="bco-pod__metrics">
            ${E.cityCount>0?`<span>🏙 ${E.cityCount} cit${E.cityCount>1?"ies":"y"}</span>`:""}
            ${E.avgSafetyScore?`<span>🛡 ${E.avgSafetyScore}/100</span>`:""}
            ${E.avgMonthlyCost&&!E.isFallback?`<span>💰 ~$${Number(E.avgMonthlyCost).toLocaleString()}/mo</span>`:""}
          </div>
          <a href="/best-cities/${I.slug}" data-link class="bco-pod__btn">Explore cities →</a>
        </div>
      </div>
    `}).join(""),w=_.slice(3).map((T,I)=>{var B;const E=yi(T.slug),x=Ro(T.slug);return`
      <a href="/best-cities/${T.slug}" data-link class="bco-card">
        <div class="bco-card__img">
          <img src="${x}" alt="${T.name}" loading="lazy" />
          <div class="bco-card__overlay"></div>
          <span class="bco-card__rank">#${I+4}</span>
        </div>
        <div class="bco-card__body">
          <div class="bco-card__top">
            <div>
              <p class="bco-card__name">${((B=T.assets)==null?void 0:B.flagEmoji)??""} ${T.name}</p>
              <p class="bco-card__region">${T.continent??""}</p>
            </div>
            <div class="bco-card__score" style="color:${d(T.score)}">${T.score}<span>/100</span></div>
          </div>
          <div class="bco-card__metrics">
            ${E.cityCount>0?`<span>🏙 ${E.cityCount} cities</span>`:""}
            ${E.avgSafetyScore?`<span>🛡 ${E.avgSafetyScore}</span>`:""}
            ${E.avgInternetSpeed&&!E.isFallback?`<span>📡 ${E.avgInternetSpeed} Mbps</span>`:""}
          </div>
        </div>
      </a>
    `}).join(""),m=`
    <style>
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
      <div class="container bco-hero__inner">
        <p class="bco-hero__eyebrow">Country Rankings</p>
        <h1 class="bco-hero__title">Best Countries for<br><em>${r==="nomad"?"Digital Nomads":r.charAt(0).toUpperCase()+r.slice(1)}</em></h1>
        <p class="bco-hero__sub">
          ${_.length} countries ranked by safety, cost of living, infrastructure and ${r} lifestyle quality.
        </p>
      </div>
    </section>

    <!-- PROFILE CONTROLS -->
    <div class="bco-controls">
      <div class="container">
        <div class="bco-controls__inner">
          <span class="bco-controls__label">Profile:</span>
          ${u}
        </div>
      </div>
    </div>

    <!-- TOP 3 PODIUM -->
    <section class="bco-podium-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Top 3 Overall</p>
        <h2 style="font-size:24px;font-weight:800;color:#111827;letter-spacing:-0.02em">Best countries this year</h2>
        <div class="bco-podium">${y}</div>
      </div>
    </section>

    <!-- REST OF RANKINGS -->
    <section class="bco-rest-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Full ranking</p>
        <h2 style="font-size:24px;font-weight:800;color:#111827;letter-spacing:-0.02em">Positions 4–${_.length}</h2>
        <div class="bco-grid">${w}</div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bco-cta">
      <div class="bco-cta__inner container">
        <h2>Compare cities in your top country</h2>
        <p>Use the budget calculator to find out what life really costs.</p>
        <div class="bco-cta__btns">
          <a href="/calculator"   data-link class="bco-btn">Open Calculator →</a>
          <a href="/destinations" data-link class="bco-btn-ghost">All Destinations</a>
        </div>
      </div>
    </section>
  `;return ht(m)}const rr=[{path:"/",component:Pa,setup:Ia},{path:"/destinations",component:Ea,setup:Ma},{path:"/city/:slug",component:Za,setup:Fa},{path:"/compare/:cities",component:Ha},{path:"/calculator",component:Wa,setup:ja},{path:"/nomad",component:Va,setup:Ua},{path:"/about",component:Ga},{path:"/legal",component:Ya},{path:"/privacy",component:Ja},{path:"/terms",component:tr},{path:"/best-cities",component:er},{path:"/best-cities/:country/:profile",component:$o},{path:"/best-cities/:country",component:$o},{path:"/best-countries",component:No},{path:"/best-countries/:profile",component:No}];var sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cr(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var xi={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(c,l){(function(r,_){_(l)})(sr,function(r){var _="1.9.4";function d(t){var e,i,o,n;for(i=1,o=arguments.length;i<o;i++){n=arguments[i];for(e in n)t[e]=n[e]}return t}var u=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();function f(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var o=i.call(arguments,2);return function(){return t.apply(e,o.length?o.concat(i.call(arguments)):arguments)}}var P=0;function k(t){return"_leaflet_id"in t||(t._leaflet_id=++P),t._leaflet_id}function y(t,e,i){var o,n,a,s;return s=function(){o=!1,n&&(a.apply(i,n),n=!1)},a=function(){o?n=arguments:(t.apply(i,arguments),setTimeout(s,e),o=!0)},a}function w(t,e,i){var o=e[1],n=e[0],a=o-n;return t===o&&i?t:((t-n)%a+a)%a+n}function g(){return!1}function m(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function T(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function I(t){return T(t).split(/\s+/)}function E(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?u(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function x(t,e,i){var o=[];for(var n in t)o.push(encodeURIComponent(i?n.toUpperCase():n)+"="+encodeURIComponent(t[n]));return(!e||e.indexOf("?")===-1?"?":"&")+o.join("&")}var B=/\{ *([\w_ -]+) *\}/g;function R(t,e){return t.replace(B,function(i,o){var n=e[o];if(n===void 0)throw new Error("No value provided for variable "+i);return typeof n=="function"&&(n=n(e)),n})}var v=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function M(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var A="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function F(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var U=0;function it(t){var e=+new Date,i=Math.max(0,16-(e-U));return U=e+i,window.setTimeout(t,i)}var ot=window.requestAnimationFrame||F("RequestAnimationFrame")||it,nt=window.cancelAnimationFrame||F("CancelAnimationFrame")||F("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function W(t,e,i){if(i&&ot===it)t.call(e);else return ot.call(window,f(t,e))}function tt(t){t&&nt.call(window,t)}var pt={__proto__:null,extend:d,create:u,bind:f,get lastId(){return P},stamp:k,throttle:y,wrapNum:w,falseFn:g,formatNum:m,trim:T,splitWords:I,setOptions:E,getParamString:x,template:R,isArray:v,indexOf:M,emptyImageUrl:A,requestFn:ot,cancelFn:nt,requestAnimFrame:W,cancelAnimFrame:tt};function st(){}st.extend=function(t){var e=function(){E(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,o=u(i);o.constructor=e,e.prototype=o;for(var n in this)Object.prototype.hasOwnProperty.call(this,n)&&n!=="prototype"&&n!=="__super__"&&(e[n]=this[n]);return t.statics&&d(e,t.statics),t.includes&&(_t(t.includes),d.apply(null,[o].concat(t.includes))),d(o,t),delete o.statics,delete o.includes,o.options&&(o.options=i.options?u(i.options):{},d(o.options,t.options)),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var a=0,s=o._initHooks.length;a<s;a++)o._initHooks[a].call(this)}},e},st.include=function(t){var e=this.prototype.options;return d(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},st.mergeOptions=function(t){return d(this.prototype.options,t),this},st.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function _t(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=v(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var et={on:function(t,e,i){if(typeof t=="object")for(var o in t)this._on(o,t[o],e);else{t=I(t);for(var n=0,a=t.length;n<a;n++)this._on(t[n],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var o in t)this._off(o,t[o],e);else{t=I(t);for(var n=arguments.length===1,a=0,s=t.length;a<s;a++)n?this._off(t[a]):this._off(t[a],e,i)}return this},_on:function(t,e,i,o){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var n={fn:e,ctx:i};o&&(n.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(n)}},_off:function(t,e,i){var o,n,a;if(this._events&&(o=this._events[t],!!o)){if(arguments.length===1){if(this._firingCount)for(n=0,a=o.length;n<a;n++)o[n].fn=g;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var s=this._listens(t,e,i);if(s!==!1){var p=o[s];this._firingCount&&(p.fn=g,this._events[t]=o=o.slice()),o.splice(s,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var o=d({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var n=this._events[t];if(n){this._firingCount=this._firingCount+1||1;for(var a=0,s=n.length;a<s;a++){var p=n[a],h=p.fn;p.once&&this.off(t,h,p.ctx),h.call(p.ctx||this,o)}this._firingCount--}}return i&&this._propagateEvent(o),this},listens:function(t,e,i,o){typeof t!="string"&&console.warn('"string" type argument expected');var n=e;typeof e!="function"&&(o=!!e,n=void 0,i=void 0);var a=this._events&&this._events[t];if(a&&a.length&&this._listens(t,n,i)!==!1)return!0;if(o){for(var s in this._eventParents)if(this._eventParents[s].listens(t,e,i,o))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var o=this._events[t]||[];if(!e)return!!o.length;i===this&&(i=void 0);for(var n=0,a=o.length;n<a;n++)if(o[n].fn===e&&o[n].ctx===i)return n;return!1},once:function(t,e,i){if(typeof t=="object")for(var o in t)this._on(o,t[o],e,!0);else{t=I(t);for(var n=0,a=t.length;n<a;n++)this._on(t[n],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[k(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[k(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,d({layer:t.target,propagatedFrom:t.target},t),!0)}};et.addEventListener=et.on,et.removeEventListener=et.clearAllEventListeners=et.off,et.addOneTimeEventListener=et.once,et.fireEvent=et.fire,et.hasEventListeners=et.listens;var Z=st.extend(et);function z(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var Q=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};z.prototype={clone:function(){return new z(this.x,this.y)},add:function(t){return this.clone()._add(C(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(C(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new z(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new z(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Q(this.x),this.y=Q(this.y),this},distanceTo:function(t){t=C(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=C(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=C(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+m(this.x)+", "+m(this.y)+")"}};function C(t,e,i){return t instanceof z?t:v(t)?new z(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new z(t.x,t.y):new z(t,e,i)}function S(t,e){if(t)for(var i=e?[t,e]:t,o=0,n=i.length;o<n;o++)this.extend(i[o])}S.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof z||typeof t[0]=="number"||"x"in t)e=i=C(t);else if(t=D(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return C((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return C(this.min.x,this.max.y)},getTopRight:function(){return C(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof z?t=C(t):t=D(t),t instanceof S?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=D(t);var e=this.min,i=this.max,o=t.min,n=t.max,a=n.x>=e.x&&o.x<=i.x,s=n.y>=e.y&&o.y<=i.y;return a&&s},overlaps:function(t){t=D(t);var e=this.min,i=this.max,o=t.min,n=t.max,a=n.x>e.x&&o.x<i.x,s=n.y>e.y&&o.y<i.y;return a&&s},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,o=Math.abs(e.x-i.x)*t,n=Math.abs(e.y-i.y)*t;return D(C(e.x-o,e.y-n),C(i.x+o,i.y+n))},equals:function(t){return t?(t=D(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function D(t,e){return!t||t instanceof S?t:new S(t,e)}function K(t,e){if(t)for(var i=e?[t,e]:t,o=0,n=i.length;o<n;o++)this.extend(i[o])}K.prototype={extend:function(t){var e=this._southWest,i=this._northEast,o,n;if(t instanceof j)o=t,n=t;else if(t instanceof K){if(o=t._southWest,n=t._northEast,!o||!n)return this}else return t?this.extend(q(t)||X(t)):this;return!e&&!i?(this._southWest=new j(o.lat,o.lng),this._northEast=new j(n.lat,n.lng)):(e.lat=Math.min(o.lat,e.lat),e.lng=Math.min(o.lng,e.lng),i.lat=Math.max(n.lat,i.lat),i.lng=Math.max(n.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,o=Math.abs(e.lat-i.lat)*t,n=Math.abs(e.lng-i.lng)*t;return new K(new j(e.lat-o,e.lng-n),new j(i.lat+o,i.lng+n))},getCenter:function(){return new j((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new j(this.getNorth(),this.getWest())},getSouthEast:function(){return new j(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof j||"lat"in t?t=q(t):t=X(t);var e=this._southWest,i=this._northEast,o,n;return t instanceof K?(o=t.getSouthWest(),n=t.getNorthEast()):o=n=t,o.lat>=e.lat&&n.lat<=i.lat&&o.lng>=e.lng&&n.lng<=i.lng},intersects:function(t){t=X(t);var e=this._southWest,i=this._northEast,o=t.getSouthWest(),n=t.getNorthEast(),a=n.lat>=e.lat&&o.lat<=i.lat,s=n.lng>=e.lng&&o.lng<=i.lng;return a&&s},overlaps:function(t){t=X(t);var e=this._southWest,i=this._northEast,o=t.getSouthWest(),n=t.getNorthEast(),a=n.lat>e.lat&&o.lat<i.lat,s=n.lng>e.lng&&o.lng<i.lng;return a&&s},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=X(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function X(t,e){return t instanceof K?t:new K(t,e)}function j(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}j.prototype={equals:function(t,e){if(!t)return!1;t=q(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+m(this.lat,t)+", "+m(this.lng,t)+")"},distanceTo:function(t){return vt.distance(this,q(t))},wrap:function(){return vt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return X([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new j(this.lat,this.lng,this.alt)}};function q(t,e,i){return t instanceof j?t:v(t)&&typeof t[0]!="object"?t.length===3?new j(t[0],t[1],t[2]):t.length===2?new j(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new j(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new j(t,e,i)}var mt={latLngToPoint:function(t,e){var i=this.projection.project(t),o=this.scale(e);return this.transformation._transform(i,o)},pointToLatLng:function(t,e){var i=this.scale(e),o=this.transformation.untransform(t,i);return this.projection.unproject(o)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),o=this.transformation.transform(e.min,i),n=this.transformation.transform(e.max,i);return new S(o,n)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?w(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?w(t.lat,this.wrapLat,!0):t.lat,o=t.alt;return new j(i,e,o)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),o=e.lat-i.lat,n=e.lng-i.lng;if(o===0&&n===0)return t;var a=t.getSouthWest(),s=t.getNorthEast(),p=new j(a.lat-o,a.lng-n),h=new j(s.lat-o,s.lng-n);return new K(p,h)}},vt=d({},mt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,o=t.lat*i,n=e.lat*i,a=Math.sin((e.lat-t.lat)*i/2),s=Math.sin((e.lng-t.lng)*i/2),p=a*a+Math.cos(o)*Math.cos(n)*s*s,h=2*Math.atan2(Math.sqrt(p),Math.sqrt(1-p));return this.R*h}}),Xt=6378137,Ht={R:Xt,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,o=Math.max(Math.min(i,t.lat),-i),n=Math.sin(o*e);return new z(this.R*t.lng*e,this.R*Math.log((1+n)/(1-n))/2)},unproject:function(t){var e=180/Math.PI;return new j((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){var t=Xt*Math.PI;return new S([-t,-t],[t,t])}()};function Re(t,e,i,o){if(v(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=o}Re.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new z((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function te(t,e,i,o){return new Re(t,e,i,o)}var $e=d({},vt,{code:"EPSG:3857",projection:Ht,transformation:function(){var t=.5/(Math.PI*Ht.R);return te(t,.5,-t,.5)}()}),Wo=d({},$e,{code:"EPSG:900913"});function Si(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Ti(t,e){var i="",o,n,a,s,p,h;for(o=0,a=t.length;o<a;o++){for(p=t[o],n=0,s=p.length;n<s;n++)h=p[n],i+=(n?"L":"M")+h.x+" "+h.y;i+=e?$.svg?"z":"x":""}return i||"M0 0"}var Ne=document.documentElement.style,ge="ActiveXObject"in window,jo=ge&&!document.addEventListener,Li="msLaunchUri"in navigator&&!("documentMode"in document),De=Tt("webkit"),Ci=Tt("android"),Pi=Tt("android 2")||Tt("android 3"),Vo=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Uo=Ci&&Tt("Google")&&Vo<537&&!("AudioNode"in window),Ze=!!window.opera,Ii=!Li&&Tt("chrome"),zi=Tt("gecko")&&!De&&!Ze&&!ge,Go=!Ii&&Tt("safari"),Ei=Tt("phantom"),Mi="OTransition"in Ne,Qo=navigator.platform.indexOf("Win")===0,Ai=ge&&"transition"in Ne,Fe="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Pi,Oi="MozPerspective"in Ne,Yo=!window.L_DISABLE_3D&&(Ai||Fe||Oi)&&!Mi&&!Ei,ee=typeof orientation<"u"||Tt("mobile"),Ko=ee&&De,Jo=ee&&Fe,Bi=!window.PointerEvent&&window.MSPointerEvent,Ri=!!(window.PointerEvent||Bi),$i="ontouchstart"in window||!!window.TouchEvent,Xo=!window.L_NO_TOUCH&&($i||Ri),tn=ee&&Ze,en=ee&&zi,on=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,nn=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",g,e),window.removeEventListener("testPassiveEventSupport",g,e)}catch{}return t}(),an=function(){return!!document.createElement("canvas").getContext}(),qe=!!(document.createElementNS&&Si("svg").createSVGRect),rn=!!qe&&function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),sn=!qe&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}}(),cn=navigator.platform.indexOf("Mac")===0,ln=navigator.platform.indexOf("Linux")===0;function Tt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var $={ie:ge,ielt9:jo,edge:Li,webkit:De,android:Ci,android23:Pi,androidStock:Uo,opera:Ze,chrome:Ii,gecko:zi,safari:Go,phantom:Ei,opera12:Mi,win:Qo,ie3d:Ai,webkit3d:Fe,gecko3d:Oi,any3d:Yo,mobile:ee,mobileWebkit:Ko,mobileWebkit3d:Jo,msPointer:Bi,pointer:Ri,touch:Xo,touchNative:$i,mobileOpera:tn,mobileGecko:en,retina:on,passiveEvents:nn,canvas:an,svg:qe,vml:sn,inlineSvg:rn,mac:cn,linux:ln},Ni=$.msPointer?"MSPointerDown":"pointerdown",Di=$.msPointer?"MSPointerMove":"pointermove",Zi=$.msPointer?"MSPointerUp":"pointerup",Fi=$.msPointer?"MSPointerCancel":"pointercancel",He={touchstart:Ni,touchmove:Di,touchend:Zi,touchcancel:Fi},qi={touchstart:mn,touchmove:_e,touchend:_e,touchcancel:_e},Wt={},Hi=!1;function dn(t,e,i){return e==="touchstart"&&fn(),qi[e]?(i=qi[e].bind(this,i),t.addEventListener(He[e],i,!1),i):(console.warn("wrong event specified:",e),g)}function pn(t,e,i){if(!He[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(He[e],i,!1)}function un(t){Wt[t.pointerId]=t}function hn(t){Wt[t.pointerId]&&(Wt[t.pointerId]=t)}function Wi(t){delete Wt[t.pointerId]}function fn(){Hi||(document.addEventListener(Ni,un,!0),document.addEventListener(Di,hn,!0),document.addEventListener(Zi,Wi,!0),document.addEventListener(Fi,Wi,!0),Hi=!0)}function _e(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in Wt)e.touches.push(Wt[i]);e.changedTouches=[e],t(e)}}function mn(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&ft(e),_e(t,e)}function gn(t){var e={},i,o;for(o in t)i=t[o],e[o]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var _n=200;function vn(t,e){t.addEventListener("dblclick",e);var i=0,o;function n(a){if(a.detail!==1){o=a.detail;return}if(!(a.pointerType==="mouse"||a.sourceCapabilities&&!a.sourceCapabilities.firesTouchEvents)){var s=Qi(a);if(!(s.some(function(h){return h instanceof HTMLLabelElement&&h.attributes.for})&&!s.some(function(h){return h instanceof HTMLInputElement||h instanceof HTMLSelectElement}))){var p=Date.now();p-i<=_n?(o++,o===2&&e(gn(a))):o=1,i=p}}}return t.addEventListener("click",n),{dblclick:e,simDblclick:n}}function bn(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var We=ye(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ie=ye(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ji=ie==="webkitTransition"||ie==="OTransition"?ie+"End":"transitionend";function Vi(t){return typeof t=="string"?document.getElementById(t):t}function oe(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var o=document.defaultView.getComputedStyle(t,null);i=o?o[e]:null}return i==="auto"?null:i}function J(t,e,i){var o=document.createElement(t);return o.className=e||"",i&&i.appendChild(o),o}function rt(t){var e=t.parentNode;e&&e.removeChild(t)}function ve(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function jt(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function Vt(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function je(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=be(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function V(t,e){if(t.classList!==void 0)for(var i=I(e),o=0,n=i.length;o<n;o++)t.classList.add(i[o]);else if(!je(t,e)){var a=be(t);Ve(t,(a?a+" ":"")+e)}}function ct(t,e){t.classList!==void 0?t.classList.remove(e):Ve(t,T((" "+be(t)+" ").replace(" "+e+" "," ")))}function Ve(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function be(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function yt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&yn(t,e)}function yn(t,e){var i=!1,o="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(o)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+o+"(opacity="+e+")"}function ye(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Nt(t,e,i){var o=e||new z(0,0);t.style[We]=($.ie3d?"translate("+o.x+"px,"+o.y+"px)":"translate3d("+o.x+"px,"+o.y+"px,0)")+(i?" scale("+i+")":"")}function lt(t,e){t._leaflet_pos=e,$.any3d?Nt(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Dt(t){return t._leaflet_pos||new z(0,0)}var ne,ae,Ue;if("onselectstart"in document)ne=function(){H(window,"selectstart",ft)},ae=function(){at(window,"selectstart",ft)};else{var re=ye(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ne=function(){if(re){var t=document.documentElement.style;Ue=t[re],t[re]="none"}},ae=function(){re&&(document.documentElement.style[re]=Ue,Ue=void 0)}}function Ge(){H(window,"dragstart",ft)}function Qe(){at(window,"dragstart",ft)}var xe,Ye;function Ke(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(we(),xe=t,Ye=t.style.outlineStyle,t.style.outlineStyle="none",H(window,"keydown",we))}function we(){xe&&(xe.style.outlineStyle=Ye,xe=void 0,Ye=void 0,at(window,"keydown",we))}function Ui(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Je(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var xn={__proto__:null,TRANSFORM:We,TRANSITION:ie,TRANSITION_END:ji,get:Vi,getStyle:oe,create:J,remove:rt,empty:ve,toFront:jt,toBack:Vt,hasClass:je,addClass:V,removeClass:ct,setClass:Ve,getClass:be,setOpacity:yt,testProp:ye,setTransform:Nt,setPosition:lt,getPosition:Dt,get disableTextSelection(){return ne},get enableTextSelection(){return ae},disableImageDrag:Ge,enableImageDrag:Qe,preventOutline:Ke,restoreOutline:we,getSizedParentNode:Ui,getScale:Je};function H(t,e,i,o){if(e&&typeof e=="object")for(var n in e)ti(t,n,e[n],i);else{e=I(e);for(var a=0,s=e.length;a<s;a++)ti(t,e[a],i,o)}return this}var Lt="_leaflet_events";function at(t,e,i,o){if(arguments.length===1)Gi(t),delete t[Lt];else if(e&&typeof e=="object")for(var n in e)ei(t,n,e[n],i);else if(e=I(e),arguments.length===2)Gi(t,function(p){return M(e,p)!==-1});else for(var a=0,s=e.length;a<s;a++)ei(t,e[a],i,o);return this}function Gi(t,e){for(var i in t[Lt]){var o=i.split(/\d/)[0];(!e||e(o))&&ei(t,o,null,null,i)}}var Xe={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ti(t,e,i,o){var n=e+k(i)+(o?"_"+k(o):"");if(t[Lt]&&t[Lt][n])return this;var a=function(p){return i.call(o||t,p||window.event)},s=a;!$.touchNative&&$.pointer&&e.indexOf("touch")===0?a=dn(t,e,a):$.touch&&e==="dblclick"?a=vn(t,a):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Xe[e]||e,a,$.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(a=function(p){p=p||window.event,oi(t,p)&&s(p)},t.addEventListener(Xe[e],a,!1)):t.addEventListener(e,s,!1):t.attachEvent("on"+e,a),t[Lt]=t[Lt]||{},t[Lt][n]=a}function ei(t,e,i,o,n){n=n||e+k(i)+(o?"_"+k(o):"");var a=t[Lt]&&t[Lt][n];if(!a)return this;!$.touchNative&&$.pointer&&e.indexOf("touch")===0?pn(t,e,a):$.touch&&e==="dblclick"?bn(t,a):"removeEventListener"in t?t.removeEventListener(Xe[e]||e,a,!1):t.detachEvent("on"+e,a),t[Lt][n]=null}function Zt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function ii(t){return ti(t,"wheel",Zt),this}function se(t){return H(t,"mousedown touchstart dblclick contextmenu",Zt),t._leaflet_disable_click=!0,this}function ft(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Ft(t){return ft(t),Zt(t),this}function Qi(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function Yi(t,e){if(!e)return new z(t.clientX,t.clientY);var i=Je(e),o=i.boundingClientRect;return new z((t.clientX-o.left)/i.x-e.clientLeft,(t.clientY-o.top)/i.y-e.clientTop)}var wn=$.linux&&$.chrome?window.devicePixelRatio:$.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Ki(t){return $.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/wn:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function oi(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var kn={__proto__:null,on:H,off:at,stopPropagation:Zt,disableScrollPropagation:ii,disableClickPropagation:se,preventDefault:ft,stop:Ft,getPropagationPath:Qi,getMousePosition:Yi,getWheelDelta:Ki,isExternalTarget:oi,addListener:H,removeListener:at},Ji=Z.extend({run:function(t,e,i,o){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(o||.5,.2),this._startPos=Dt(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=W(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),lt(this._el,i),this.fire("step")},_complete:function(){tt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),Y=Z.extend({options:{crs:$e,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=E(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=f(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(q(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ie&&$.any3d&&!$.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),H(this._proxy,ji,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(q(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=d({animate:i.animate},i.zoom),i.pan=d({animate:i.animate,duration:i.duration},i.pan));var o=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(o)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||($.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||($.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var o=this.getZoomScale(e),n=this.getSize().divideBy(2),a=t instanceof z?t:this.latLngToContainerPoint(t),s=a.subtract(n).multiplyBy(1-1/o),p=this.containerPointToLatLng(n.add(s));return this.setView(p,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():X(t);var i=C(e.paddingTopLeft||e.padding||[0,0]),o=C(e.paddingBottomRight||e.padding||[0,0]),n=this.getBoundsZoom(t,!1,i.add(o));if(n=typeof e.maxZoom=="number"?Math.min(e.maxZoom,n):n,n===1/0)return{center:t.getCenter(),zoom:n};var a=o.subtract(i).divideBy(2),s=this.project(t.getSouthWest(),n),p=this.project(t.getNorthEast(),n),h=this.unproject(s.add(p).divideBy(2).add(a),n);return{center:h,zoom:n}},fitBounds:function(t,e){if(t=X(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=C(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Ji,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){V(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!$.any3d)return this.setView(t,e,i);this._stop();var o=this.project(this.getCenter()),n=this.project(t),a=this.getSize(),s=this._zoom;t=q(t),e=e===void 0?s:e;var p=Math.max(a.x,a.y),h=p*this.getZoomScale(s,e),b=n.distanceTo(o)||1,O=1.42,N=O*O;function G(dt){var Oe=dt?-1:1,pa=dt?h:p,ua=h*h-p*p+Oe*N*N*b*b,ha=2*pa*N*b,fi=ua/ha,Ao=Math.sqrt(fi*fi+1)-fi,fa=Ao<1e-9?-18:Math.log(Ao);return fa}function gt(dt){return(Math.exp(dt)-Math.exp(-dt))/2}function ut(dt){return(Math.exp(dt)+Math.exp(-dt))/2}function wt(dt){return gt(dt)/ut(dt)}var bt=G(0);function Jt(dt){return p*(ut(bt)/ut(bt+O*dt))}function sa(dt){return p*(ut(bt)*wt(bt+O*dt)-gt(bt))/N}function ca(dt){return 1-Math.pow(1-dt,1.5)}var la=Date.now(),Eo=(G(1)-bt)/O,da=i.duration?1e3*i.duration:1e3*Eo*.8;function Mo(){var dt=(Date.now()-la)/da,Oe=ca(dt)*Eo;dt<=1?(this._flyToFrame=W(Mo,this),this._move(this.unproject(o.add(n.subtract(o).multiplyBy(sa(Oe)/b)),s),this.getScaleZoom(p/Jt(Oe),s),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),Mo.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=X(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),o=this._limitCenter(i,this._zoom,X(t));return i.equals(o)||this.panTo(o,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=C(e.paddingTopLeft||e.padding||[0,0]),o=C(e.paddingBottomRight||e.padding||[0,0]),n=this.project(this.getCenter()),a=this.project(t),s=this.getPixelBounds(),p=D([s.min.add(i),s.max.subtract(o)]),h=p.getSize();if(!p.contains(a)){this._enforcingBounds=!0;var b=a.subtract(p.getCenter()),O=p.extend(a).getSize().subtract(h);n.x+=b.x<0?-O.x:O.x,n.y+=b.y<0?-O.y:O.y,this.panTo(this.unproject(n),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=d({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),o=e.divideBy(2).round(),n=i.divideBy(2).round(),a=o.subtract(n);return!a.x&&!a.y?this:(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(f(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=d({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=f(this._handleGeolocationResponse,this),i=f(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,o=new j(e,i),n=o.toBounds(t.coords.accuracy*2),a=this._locateOptions;if(a.setView){var s=this.getBoundsZoom(n);this.setView(o,a.maxZoom?Math.min(s,a.maxZoom):s)}var p={latlng:o,bounds:n,timestamp:t.timestamp};for(var h in t.coords)typeof t.coords[h]=="number"&&(p[h]=t.coords[h]);this.fire("locationfound",p)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),rt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(tt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)rt(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),o=J("div",i,e||this._mapPane);return t&&(this._panes[t]=o),o},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new K(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=X(t),i=C(i||[0,0]);var o=this.getZoom()||0,n=this.getMinZoom(),a=this.getMaxZoom(),s=t.getNorthWest(),p=t.getSouthEast(),h=this.getSize().subtract(i),b=D(this.project(p,o),this.project(s,o)).getSize(),O=$.any3d?this.options.zoomSnap:1,N=h.x/b.x,G=h.y/b.y,gt=e?Math.max(N,G):Math.min(N,G);return o=this.getScaleZoom(gt,o),O&&(o=Math.round(o/(O/100))*(O/100),o=e?Math.ceil(o/O)*O:Math.floor(o/O)*O),Math.max(n,Math.min(a,o))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new z(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new S(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var o=i.zoom(t*i.scale(e));return isNaN(o)?1/0:o},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(q(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(C(t),e)},layerPointToLatLng:function(t){var e=C(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(q(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(q(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(X(t))},distance:function(t,e){return this.options.crs.distance(q(t),q(e))},containerPointToLayerPoint:function(t){return C(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return C(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(C(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(q(t)))},mouseEventToContainerPoint:function(t){return Yi(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=Vi(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");H(e,"scroll",this._onScroll,this),this._containerId=k(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&$.any3d,V(t,"leaflet-container"+($.touch?" leaflet-touch":"")+($.retina?" leaflet-retina":"")+($.ielt9?" leaflet-oldie":"")+($.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=oe(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),lt(this._mapPane,new z(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(V(t.markerPane,"leaflet-zoom-hide"),V(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){lt(this._mapPane,new z(0,0));var o=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var n=this._zoom!==e;this._moveStart(n,i)._move(t,e)._moveEnd(n),this.fire("viewreset"),o&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,o){e===void 0&&(e=this._zoom);var n=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),o?i&&i.pinch&&this.fire("zoom",i):((n||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return tt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){lt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[k(this._container)]=this;var e=t?at:H;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),$.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){tt(this._resizeRequest),this._resizeRequest=W(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],o,n=e==="mouseout"||e==="mouseover",a=t.target||t.srcElement,s=!1;a;){if(o=this._targets[k(a)],o&&(e==="click"||e==="preclick")&&this._draggableMoved(o)){s=!0;break}if(o&&o.listens(e,!0)&&(n&&!oi(a,t)||(i.push(o),n))||a===this._container)break;a=a.parentNode}return!i.length&&!s&&!n&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&Ke(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var o=d({},t);o.type="preclick",this._fireDOMEvent(o,o.type,i)}var n=this._findEventTargets(t,e);if(i){for(var a=[],s=0;s<i.length;s++)i[s].listens(e,!0)&&a.push(i[s]);n=a.concat(n)}if(n.length){e==="contextmenu"&&ft(t);var p=n[0],h={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var b=p.getLatLng&&(!p._radius||p._radius<=10);h.containerPoint=b?this.latLngToContainerPoint(p.getLatLng()):this.mouseEventToContainerPoint(t),h.layerPoint=this.containerPointToLayerPoint(h.containerPoint),h.latlng=b?p.getLatLng():this.layerPointToLatLng(h.layerPoint)}for(s=0;s<n.length;s++)if(n[s].fire(e,h,!0),h.originalEvent._stopped||n[s].options.bubblingMouseEvents===!1&&M(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Dt(this._mapPane)||new z(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var o=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(o)},_latLngBoundsToNewLayerBounds:function(t,e,i){var o=this._getNewPixelOrigin(i,e);return D([this.project(t.getSouthWest(),e)._subtract(o),this.project(t.getNorthWest(),e)._subtract(o),this.project(t.getSouthEast(),e)._subtract(o),this.project(t.getNorthEast(),e)._subtract(o)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var o=this.project(t,e),n=this.getSize().divideBy(2),a=new S(o.subtract(n),o.add(n)),s=this._getBoundsOffset(a,i,e);return Math.abs(s.x)<=1&&Math.abs(s.y)<=1?t:this.unproject(o.add(s),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),o=new S(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(o,e))},_getBoundsOffset:function(t,e,i){var o=D(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),n=o.min.subtract(t.min),a=o.max.subtract(t.max),s=this._rebound(n.x,-a.x),p=this._rebound(n.y,-a.y);return new z(s,p)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),o=$.any3d?this.options.zoomSnap:1;return o&&(t=Math.round(t/o)*o),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){ct(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=J("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=We,o=this._proxy.style[i];Nt(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),o===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){rt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Nt(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var o=this.getZoomScale(e),n=this._getCenterOffset(t)._divideBy(1-1/o);return i.animate!==!0&&!this.getSize().contains(n)?!1:(W(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,o){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,V(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:o}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(f(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&ct(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Sn(t,e){return new Y(t,e)}var kt=st.extend({options:{position:"topright"},initialize:function(t){E(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),o=t._controlCorners[i];return V(e,"leaflet-control"),i.indexOf("bottom")!==-1?o.insertBefore(e,o.firstChild):o.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(rt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ce=function(t){return new kt(t)};Y.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=J("div",e+"control-container",this._container);function o(n,a){var s=e+n+" "+e+a;t[n+a]=J("div",s,i)}o("top","left"),o("top","right"),o("bottom","left"),o("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)rt(this._controlCorners[t]);rt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Xi=kt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,o){return i<o?-1:o<i?1:0}},initialize:function(t,e,i){E(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var o in t)this._addLayer(t[o],o);for(o in e)this._addLayer(e[o],o,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return kt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(k(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){V(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(V(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):ct(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return ct(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=J("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),se(e),ii(e);var o=this._section=J("section",t+"-list");i&&(this._map.on("click",this.collapse,this),H(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var n=this._layersLink=J("a",t+"-toggle",e);n.href="#",n.title="Layers",n.setAttribute("role","button"),H(n,{keydown:function(a){a.keyCode===13&&this._expandSafely()},click:function(a){ft(a),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=J("div",t+"-base",o),this._separator=J("div",t+"-separator",o),this._overlaysList=J("div",t+"-overlays",o),e.appendChild(o)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&k(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(f(function(o,n){return this.options.sortFunction(o.layer,n.layer,o.name,n.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ve(this._baseLayersList),ve(this._overlaysList),this._layerControlInputs=[];var t,e,i,o,n=0;for(i=0;i<this._layers.length;i++)o=this._layers[i],this._addItem(o),e=e||o.overlay,t=t||!o.overlay,n+=o.overlay?0:1;return this.options.hideSingleBase&&(t=t&&n>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(k(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",o=document.createElement("div");return o.innerHTML=i,o.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),o;t.overlay?(o=document.createElement("input"),o.type="checkbox",o.className="leaflet-control-layers-selector",o.defaultChecked=i):o=this._createRadioElement("leaflet-base-layers_"+k(this),i),this._layerControlInputs.push(o),o.layerId=k(t.layer),H(o,"click",this._onInputClick,this);var n=document.createElement("span");n.innerHTML=" "+t.name;var a=document.createElement("span");e.appendChild(a),a.appendChild(o),a.appendChild(n);var s=t.overlay?this._overlaysList:this._baseLayersList;return s.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,o=[],n=[];this._handlingClick=!0;for(var a=t.length-1;a>=0;a--)e=t[a],i=this._getLayer(e.layerId).layer,e.checked?o.push(i):e.checked||n.push(i);for(a=0;a<n.length;a++)this._map.hasLayer(n[a])&&this._map.removeLayer(n[a]);for(a=0;a<o.length;a++)this._map.hasLayer(o[a])||this._map.addLayer(o[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,o=this._map.getZoom(),n=t.length-1;n>=0;n--)e=t[n],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&o<i.options.minZoom||i.options.maxZoom!==void 0&&o>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,H(t,"click",ft),this.expand();var e=this;setTimeout(function(){at(t,"click",ft),e._preventClick=!1})}}),Tn=function(t,e,i){return new Xi(t,e,i)},ni=kt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=J("div",e+" leaflet-bar"),o=this.options;return this._zoomInButton=this._createButton(o.zoomInText,o.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(o.zoomOutText,o.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,o,n){var a=J("a",i,o);return a.innerHTML=t,a.href="#",a.title=e,a.setAttribute("role","button"),a.setAttribute("aria-label",e),se(a),H(a,"click",Ft),H(a,"click",n,this),H(a,"click",this._refocusOnMap,this),a},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";ct(this._zoomInButton,e),ct(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(V(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(V(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});Y.mergeOptions({zoomControl:!0}),Y.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ni,this.addControl(this.zoomControl))});var Ln=function(t){return new ni(t)},to=kt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=J("div",e),o=this.options;return this._addScales(o,e+"-line",i),t.on(o.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=J("div",e,i)),t.imperial&&(this._iScale=J("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,o,n;e>5280?(i=e/5280,o=this._getRoundNum(i),this._updateScale(this._iScale,o+" mi",o/i)):(n=this._getRoundNum(e),this._updateScale(this._iScale,n+" ft",n/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),Cn=function(t){return new to(t)},Pn='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ai=kt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+($.inlineSvg?Pn+" ":"")+"Leaflet</a>"},initialize:function(t){E(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=J("div","leaflet-control-attribution"),se(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});Y.mergeOptions({attributionControl:!0}),Y.addInitHook(function(){this.options.attributionControl&&new ai().addTo(this)});var In=function(t){return new ai(t)};kt.Layers=Xi,kt.Zoom=ni,kt.Scale=to,kt.Attribution=ai,ce.layers=Tn,ce.zoom=Ln,ce.scale=Cn,ce.attribution=In;var Ct=st.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ct.addTo=function(t,e){return t.addHandler(e,this),this};var zn={Events:et},eo=$.touch?"touchstart mousedown":"mousedown",Bt=Z.extend({options:{clickTolerance:3},initialize:function(t,e,i,o){E(this,o),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(H(this._dragStartTarget,eo,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Bt._dragging===this&&this.finishDrag(!0),at(this._dragStartTarget,eo,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!je(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Bt._dragging===this&&this.finishDrag();return}if(!(Bt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Bt._dragging=this,this._preventOutline&&Ke(this._element),Ge(),ne(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=Ui(this._element);this._startPoint=new z(e.clientX,e.clientY),this._startPos=Dt(this._element),this._parentScale=Je(i);var o=t.type==="mousedown";H(document,o?"mousemove":"touchmove",this._onMove,this),H(document,o?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new z(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,ft(t),this._moved||(this.fire("dragstart"),this._moved=!0,V(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),V(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),lt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){ct(document.body,"leaflet-dragging"),this._lastTarget&&(ct(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),at(document,"mousemove touchmove",this._onMove,this),at(document,"mouseup touchend touchcancel",this._onUp,this),Qe(),ae();var e=this._moved&&this._moving;this._moving=!1,Bt._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function io(t,e,i){var o,n=[1,4,2,8],a,s,p,h,b,O,N,G;for(a=0,O=t.length;a<O;a++)t[a]._code=qt(t[a],e);for(p=0;p<4;p++){for(N=n[p],o=[],a=0,O=t.length,s=O-1;a<O;s=a++)h=t[a],b=t[s],h._code&N?b._code&N||(G=ke(b,h,N,e,i),G._code=qt(G,e),o.push(G)):(b._code&N&&(G=ke(b,h,N,e,i),G._code=qt(G,e),o.push(G)),o.push(h));t=o}return t}function oo(t,e){var i,o,n,a,s,p,h,b,O;if(!t||t.length===0)throw new Error("latlngs not passed");xt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var N=q([0,0]),G=X(t),gt=G.getNorthWest().distanceTo(G.getSouthWest())*G.getNorthEast().distanceTo(G.getNorthWest());gt<1700&&(N=ri(t));var ut=t.length,wt=[];for(i=0;i<ut;i++){var bt=q(t[i]);wt.push(e.project(q([bt.lat-N.lat,bt.lng-N.lng])))}for(p=h=b=0,i=0,o=ut-1;i<ut;o=i++)n=wt[i],a=wt[o],s=n.y*a.x-a.y*n.x,h+=(n.x+a.x)*s,b+=(n.y+a.y)*s,p+=s*3;p===0?O=wt[0]:O=[h/p,b/p];var Jt=e.unproject(C(O));return q([Jt.lat+N.lat,Jt.lng+N.lng])}function ri(t){for(var e=0,i=0,o=0,n=0;n<t.length;n++){var a=q(t[n]);e+=a.lat,i+=a.lng,o++}return q([e/o,i/o])}var En={__proto__:null,clipPolygon:io,polygonCenter:oo,centroid:ri};function no(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=On(t,i),t=An(t,i),t}function ao(t,e,i){return Math.sqrt(le(t,e,i,!0))}function Mn(t,e,i){return le(t,e,i)}function An(t,e){var i=t.length,o=typeof Uint8Array<"u"?Uint8Array:Array,n=new o(i);n[0]=n[i-1]=1,si(t,n,e,0,i-1);var a,s=[];for(a=0;a<i;a++)n[a]&&s.push(t[a]);return s}function si(t,e,i,o,n){var a=0,s,p,h;for(p=o+1;p<=n-1;p++)h=le(t[p],t[o],t[n],!0),h>a&&(s=p,a=h);a>i&&(e[s]=1,si(t,e,i,o,s),si(t,e,i,s,n))}function On(t,e){for(var i=[t[0]],o=1,n=0,a=t.length;o<a;o++)Bn(t[o],t[n])>e&&(i.push(t[o]),n=o);return n<a-1&&i.push(t[a-1]),i}var ro;function so(t,e,i,o,n){var a=o?ro:qt(t,i),s=qt(e,i),p,h,b;for(ro=s;;){if(!(a|s))return[t,e];if(a&s)return!1;p=a||s,h=ke(t,e,p,i,n),b=qt(h,i),p===a?(t=h,a=b):(e=h,s=b)}}function ke(t,e,i,o,n){var a=e.x-t.x,s=e.y-t.y,p=o.min,h=o.max,b,O;return i&8?(b=t.x+a*(h.y-t.y)/s,O=h.y):i&4?(b=t.x+a*(p.y-t.y)/s,O=p.y):i&2?(b=h.x,O=t.y+s*(h.x-t.x)/a):i&1&&(b=p.x,O=t.y+s*(p.x-t.x)/a),new z(b,O,n)}function qt(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function Bn(t,e){var i=e.x-t.x,o=e.y-t.y;return i*i+o*o}function le(t,e,i,o){var n=e.x,a=e.y,s=i.x-n,p=i.y-a,h=s*s+p*p,b;return h>0&&(b=((t.x-n)*s+(t.y-a)*p)/h,b>1?(n=i.x,a=i.y):b>0&&(n+=s*b,a+=p*b)),s=t.x-n,p=t.y-a,o?s*s+p*p:new z(n,a)}function xt(t){return!v(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function co(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),xt(t)}function lo(t,e){var i,o,n,a,s,p,h,b;if(!t||t.length===0)throw new Error("latlngs not passed");xt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var O=q([0,0]),N=X(t),G=N.getNorthWest().distanceTo(N.getSouthWest())*N.getNorthEast().distanceTo(N.getNorthWest());G<1700&&(O=ri(t));var gt=t.length,ut=[];for(i=0;i<gt;i++){var wt=q(t[i]);ut.push(e.project(q([wt.lat-O.lat,wt.lng-O.lng])))}for(i=0,o=0;i<gt-1;i++)o+=ut[i].distanceTo(ut[i+1])/2;if(o===0)b=ut[0];else for(i=0,a=0;i<gt-1;i++)if(s=ut[i],p=ut[i+1],n=s.distanceTo(p),a+=n,a>o){h=(a-o)/n,b=[p.x-h*(p.x-s.x),p.y-h*(p.y-s.y)];break}var bt=e.unproject(C(b));return q([bt.lat+O.lat,bt.lng+O.lng])}var Rn={__proto__:null,simplify:no,pointToSegmentDistance:ao,closestPointOnSegment:Mn,clipSegment:so,_getEdgeIntersection:ke,_getBitCode:qt,_sqClosestPointOnSegment:le,isFlat:xt,_flat:co,polylineCenter:lo},ci={project:function(t){return new z(t.lng,t.lat)},unproject:function(t){return new j(t.y,t.x)},bounds:new S([-180,-90],[180,90])},li={R:6378137,R_MINOR:6356752314245179e-9,bounds:new S([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,o=t.lat*e,n=this.R_MINOR/i,a=Math.sqrt(1-n*n),s=a*Math.sin(o),p=Math.tan(Math.PI/4-o/2)/Math.pow((1-s)/(1+s),a/2);return o=-i*Math.log(Math.max(p,1e-10)),new z(t.lng*e*i,o)},unproject:function(t){for(var e=180/Math.PI,i=this.R,o=this.R_MINOR/i,n=Math.sqrt(1-o*o),a=Math.exp(-t.y/i),s=Math.PI/2-2*Math.atan(a),p=0,h=.1,b;p<15&&Math.abs(h)>1e-7;p++)b=n*Math.sin(s),b=Math.pow((1-b)/(1+b),n/2),h=Math.PI/2-2*Math.atan(a*b)-s,s+=h;return new j(s*e,t.x*e/i)}},$n={__proto__:null,LonLat:ci,Mercator:li,SphericalMercator:Ht},Nn=d({},vt,{code:"EPSG:3395",projection:li,transformation:function(){var t=.5/(Math.PI*li.R);return te(t,.5,-t,.5)}()}),po=d({},vt,{code:"EPSG:4326",projection:ci,transformation:te(1/180,1,-1/180,.5)}),Dn=d({},mt,{projection:ci,transformation:te(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,o=e.lat-t.lat;return Math.sqrt(i*i+o*o)},infinite:!0});mt.Earth=vt,mt.EPSG3395=Nn,mt.EPSG3857=$e,mt.EPSG900913=Wo,mt.EPSG4326=po,mt.Simple=Dn;var St=Z.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[k(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[k(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});Y.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=k(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=k(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return k(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?v(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[k(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=k(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var o in this._zoomBoundLayers){var n=this._zoomBoundLayers[o].options;t=n.minZoom===void 0?t:Math.min(t,n.minZoom),e=n.maxZoom===void 0?e:Math.max(e,n.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ut=St.extend({initialize:function(t,e){E(this,e),this._layers={};var i,o;if(t)for(i=0,o=t.length;i<o;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,o;for(i in this._layers)o=this._layers[i],o[t]&&o[t].apply(o,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return k(t)}}),Zn=function(t,e){return new Ut(t,e)},It=Ut.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ut.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ut.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new K;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),Fn=function(t,e){return new It(t,e)},Gt=st.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){E(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var o=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(o,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),o},_setIconStyles:function(t,e){var i=this.options,o=i[e+"Size"];typeof o=="number"&&(o=[o,o]);var n=C(o),a=C(e==="shadow"&&i.shadowAnchor||i.iconAnchor||n&&n.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),a&&(t.style.marginLeft=-a.x+"px",t.style.marginTop=-a.y+"px"),n&&(t.style.width=n.x+"px",t.style.height=n.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return $.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function qn(t){return new Gt(t)}var de=Gt.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof de.imagePath!="string"&&(de.imagePath=this._detectIconPath()),(this.options.imagePath||de.imagePath)+Gt.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,o,n){var a=o.exec(i);return a&&a[n]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=J("div","leaflet-default-icon-path",document.body),e=oe(t,"background-image")||oe(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),uo=Ct.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Bt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),V(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&ct(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,o=this._marker.options.autoPanSpeed,n=this._marker.options.autoPanPadding,a=Dt(e._icon),s=i.getPixelBounds(),p=i.getPixelOrigin(),h=D(s.min._subtract(p).add(n),s.max._subtract(p).subtract(n));if(!h.contains(a)){var b=C((Math.max(h.max.x,a.x)-h.max.x)/(s.max.x-h.max.x)-(Math.min(h.min.x,a.x)-h.min.x)/(s.min.x-h.min.x),(Math.max(h.max.y,a.y)-h.max.y)/(s.max.y-h.max.y)-(Math.min(h.min.y,a.y)-h.min.y)/(s.min.y-h.min.y)).multiplyBy(o);i.panBy(b,{animate:!1}),this._draggable._newPos._add(b),this._draggable._startPos._add(b),lt(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=W(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(tt(this._panRequest),this._panRequest=W(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,o=Dt(e._icon),n=e._map.layerPointToLatLng(o);i&&lt(i,o),e._latlng=n,t.latlng=n,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){tt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Se=St.extend({options:{icon:new de,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){E(this,e),this._latlng=q(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=q(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),o=!1;i!==this._icon&&(this._icon&&this._removeIcon(),o=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),V(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&H(i,"focus",this._panOnFocus,this);var n=t.icon.createShadow(this._shadow),a=!1;n!==this._shadow&&(this._removeShadow(),a=!0),n&&(V(n,e),n.alt=""),this._shadow=n,t.opacity<1&&this._updateOpacity(),o&&this.getPane().appendChild(this._icon),this._initInteraction(),n&&a&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&at(this._icon,"focus",this._panOnFocus,this),rt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&rt(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&lt(this._icon,t),this._shadow&&lt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(V(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),uo)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new uo(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&yt(this._icon,t),this._shadow&&yt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?C(e.iconSize):C(0,0),o=e.iconAnchor?C(e.iconAnchor):C(0,0);t.panInside(this._latlng,{paddingTopLeft:o,paddingBottomRight:i.subtract(o)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Hn(t,e){return new Se(t,e)}var Rt=St.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return E(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Te=Rt.extend({options:{fill:!0,radius:10},initialize:function(t,e){E(this,e),this._latlng=q(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=q(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Rt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),o=[t+i,e+i];this._pxBounds=new S(this._point.subtract(o),this._point.add(o))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Wn(t,e){return new Te(t,e)}var di=Te.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=d({},i,{radius:e})),E(this,e),this._latlng=q(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new K(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Rt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,o=i.options.crs;if(o.distance===vt.distance){var n=Math.PI/180,a=this._mRadius/vt.R/n,s=i.project([e+a,t]),p=i.project([e-a,t]),h=s.add(p).divideBy(2),b=i.unproject(h).lat,O=Math.acos((Math.cos(a*n)-Math.sin(e*n)*Math.sin(b*n))/(Math.cos(e*n)*Math.cos(b*n)))/n;(isNaN(O)||O===0)&&(O=a/Math.cos(Math.PI/180*e)),this._point=h.subtract(i.getPixelOrigin()),this._radius=isNaN(O)?0:h.x-i.project([b,t-O]).x,this._radiusY=h.y-s.y}else{var N=o.unproject(o.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(N).x}this._updateBounds()}});function jn(t,e,i){return new di(t,e,i)}var zt=Rt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){E(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,o=le,n,a,s=0,p=this._parts.length;s<p;s++)for(var h=this._parts[s],b=1,O=h.length;b<O;b++){n=h[b-1],a=h[b];var N=o(t,n,a,!0);N<e&&(e=N,i=o(t,n,a))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return lo(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=q(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new K,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return xt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=xt(t),o=0,n=t.length;o<n;o++)i?(e[o]=q(t[o]),this._bounds.extend(e[o])):e[o]=this._convertLatLngs(t[o]);return e},_project:function(){var t=new S;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new z(t,t);this._rawPxBounds&&(this._pxBounds=new S([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var o=t[0]instanceof j,n=t.length,a,s;if(o){for(s=[],a=0;a<n;a++)s[a]=this._map.latLngToLayerPoint(t[a]),i.extend(s[a]);e.push(s)}else for(a=0;a<n;a++)this._projectLatlngs(t[a],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,o,n,a,s,p,h;for(i=0,n=0,a=this._rings.length;i<a;i++)for(h=this._rings[i],o=0,s=h.length;o<s-1;o++)p=so(h[o],h[o+1],t,o,!0),p&&(e[n]=e[n]||[],e[n].push(p[0]),(p[1]!==h[o+1]||o===s-2)&&(e[n].push(p[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,o=t.length;i<o;i++)t[i]=no(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,o,n,a,s,p,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,a=this._parts.length;i<a;i++)for(p=this._parts[i],o=0,s=p.length,n=s-1;o<s;n=o++)if(!(!e&&o===0)&&ao(t,p[n],p[o])<=h)return!0;return!1}});function Vn(t,e){return new zt(t,e)}zt._flat=co;var Qt=zt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return oo(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=zt.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof j&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){zt.prototype._setLatLngs.call(this,t),xt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return xt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new z(e,e);if(t=new S(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var o=0,n=this._rings.length,a;o<n;o++)a=io(this._rings[o],t,!0),a.length&&this._parts.push(a)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,o,n,a,s,p,h,b;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(a=0,h=this._parts.length;a<h;a++)for(i=this._parts[a],s=0,b=i.length,p=b-1;s<b;p=s++)o=i[s],n=i[p],o.y>t.y!=n.y>t.y&&t.x<(n.x-o.x)*(t.y-o.y)/(n.y-o.y)+o.x&&(e=!e);return e||zt.prototype._containsPoint.call(this,t,!0)}});function Un(t,e){return new Qt(t,e)}var Et=It.extend({initialize:function(t,e){E(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=v(t)?t:t.features,i,o,n;if(e){for(i=0,o=e.length;i<o;i++)n=e[i],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var a=this.options;if(a.filter&&!a.filter(t))return this;var s=Le(t,a);return s?(s.feature=Ie(t),s.defaultOptions=s.options,this.resetStyle(s),a.onEachFeature&&a.onEachFeature(t,s),this.addLayer(s)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=d({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function Le(t,e){var i=t.type==="Feature"?t.geometry:t,o=i?i.coordinates:null,n=[],a=e&&e.pointToLayer,s=e&&e.coordsToLatLng||pi,p,h,b,O;if(!o&&!i)return null;switch(i.type){case"Point":return p=s(o),ho(a,t,p,e);case"MultiPoint":for(b=0,O=o.length;b<O;b++)p=s(o[b]),n.push(ho(a,t,p,e));return new It(n);case"LineString":case"MultiLineString":return h=Ce(o,i.type==="LineString"?0:1,s),new zt(h,e);case"Polygon":case"MultiPolygon":return h=Ce(o,i.type==="Polygon"?1:2,s),new Qt(h,e);case"GeometryCollection":for(b=0,O=i.geometries.length;b<O;b++){var N=Le({geometry:i.geometries[b],type:"Feature",properties:t.properties},e);N&&n.push(N)}return new It(n);case"FeatureCollection":for(b=0,O=i.features.length;b<O;b++){var G=Le(i.features[b],e);G&&n.push(G)}return new It(n);default:throw new Error("Invalid GeoJSON object.")}}function ho(t,e,i,o){return t?t(e,i):new Se(i,o&&o.markersInheritOptions&&o)}function pi(t){return new j(t[1],t[0],t[2])}function Ce(t,e,i){for(var o=[],n=0,a=t.length,s;n<a;n++)s=e?Ce(t[n],e-1,i):(i||pi)(t[n]),o.push(s);return o}function ui(t,e){return t=q(t),t.alt!==void 0?[m(t.lng,e),m(t.lat,e),m(t.alt,e)]:[m(t.lng,e),m(t.lat,e)]}function Pe(t,e,i,o){for(var n=[],a=0,s=t.length;a<s;a++)n.push(e?Pe(t[a],xt(t[a])?0:e-1,i,o):ui(t[a],o));return!e&&i&&n.length>0&&n.push(n[0].slice()),n}function Yt(t,e){return t.feature?d({},t.feature,{geometry:e}):Ie(e)}function Ie(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var hi={toGeoJSON:function(t){return Yt(this,{type:"Point",coordinates:ui(this.getLatLng(),t)})}};Se.include(hi),di.include(hi),Te.include(hi),zt.include({toGeoJSON:function(t){var e=!xt(this._latlngs),i=Pe(this._latlngs,e?1:0,!1,t);return Yt(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),Qt.include({toGeoJSON:function(t){var e=!xt(this._latlngs),i=e&&!xt(this._latlngs[0]),o=Pe(this._latlngs,i?2:e?1:0,!0,t);return e||(o=[o]),Yt(this,{type:(i?"Multi":"")+"Polygon",coordinates:o})}}),Ut.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Yt(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",o=[];return this.eachLayer(function(n){if(n.toGeoJSON){var a=n.toGeoJSON(t);if(i)o.push(a.geometry);else{var s=Ie(a);s.type==="FeatureCollection"?o.push.apply(o,s.features):o.push(s)}}}),i?Yt(this,{geometries:o,type:"GeometryCollection"}):{type:"FeatureCollection",features:o}}});function fo(t,e){return new Et(t,e)}var Gn=fo,ze=St.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=X(e),E(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(V(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){rt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&jt(this._image),this},bringToBack:function(){return this._map&&Vt(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=X(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:J("img");if(V(e,"leaflet-image-layer"),this._zoomAnimated&&V(e,"leaflet-zoom-animated"),this.options.className&&V(e,this.options.className),e.onselectstart=g,e.onmousemove=g,e.onload=f(this.fire,this,"load"),e.onerror=f(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Nt(this._image,i,e)},_reset:function(){var t=this._image,e=new S(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();lt(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){yt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Qn=function(t,e,i){return new ze(t,e,i)},mo=ze.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:J("video");if(V(e,"leaflet-image-layer"),this._zoomAnimated&&V(e,"leaflet-zoom-animated"),this.options.className&&V(e,this.options.className),e.onselectstart=g,e.onmousemove=g,e.onloadeddata=f(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),o=[],n=0;n<i.length;n++)o.push(i[n].src);this._url=i.length>0?o:[e.src];return}v(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var a=0;a<this._url.length;a++){var s=J("source");s.src=this._url[a],e.appendChild(s)}}});function Yn(t,e,i){return new mo(t,e,i)}var go=ze.extend({_initImage:function(){var t=this._image=this._url;V(t,"leaflet-image-layer"),this._zoomAnimated&&V(t,"leaflet-zoom-animated"),this.options.className&&V(t,this.options.className),t.onselectstart=g,t.onmousemove=g}});function Kn(t,e,i){return new go(t,e,i)}var Pt=St.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof j||v(t))?(this._latlng=q(t),E(this,e)):(E(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&yt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&yt(this._container,1),this.bringToFront(),this.options.interactive&&(V(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(yt(this._container,0),this._removeTimeout=setTimeout(f(rt,void 0,this._container),200)):rt(this._container),this.options.interactive&&(ct(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=q(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&jt(this._container),this},bringToBack:function(){return this._map&&Vt(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof It){e=null;var i=this._source._layers;for(var o in i)if(i[o]._map){e=i[o];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=C(this.options.offset),i=this._getAnchor();this._zoomAnimated?lt(this._container,t.add(i)):e=e.add(t).add(i);var o=this._containerBottom=-e.y,n=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=o+"px",this._container.style.left=n+"px"}},_getAnchor:function(){return[0,0]}});Y.include({_initOverlay:function(t,e,i,o){var n=e;return n instanceof t||(n=new t(o).setContent(e)),i&&n.setLatLng(i),n}}),St.include({_initOverlay:function(t,e,i,o){var n=i;return n instanceof t?(E(n,o),n._source=this):(n=e&&!o?e:new t(o,this),n.setContent(i)),n}});var Ee=Pt.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Pt.prototype.openOn.call(this,t)},onAdd:function(t){Pt.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Rt||this._source.on("preclick",Zt))},onRemove:function(t){Pt.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Rt||this._source.off("preclick",Zt))},getEvents:function(){var t=Pt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=J("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=J("div",t+"-content-wrapper",e);if(this._contentNode=J("div",t+"-content",i),se(e),ii(this._contentNode),H(e,"contextmenu",Zt),this._tipContainer=J("div",t+"-tip-container",e),this._tip=J("div",t+"-tip",this._tipContainer),this.options.closeButton){var o=this._closeButton=J("a",t+"-close-button",e);o.setAttribute("role","button"),o.setAttribute("aria-label","Close popup"),o.href="#close",o.innerHTML='<span aria-hidden="true">&#215;</span>',H(o,"click",function(n){ft(n),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var o=t.offsetHeight,n=this.options.maxHeight,a="leaflet-popup-scrolled";n&&o>n?(e.height=n+"px",V(t,a)):ct(t,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();lt(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(oe(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,o=this._containerWidth,n=new z(this._containerLeft,-i-this._containerBottom);n._add(Dt(this._container));var a=t.layerPointToContainerPoint(n),s=C(this.options.autoPanPadding),p=C(this.options.autoPanPaddingTopLeft||s),h=C(this.options.autoPanPaddingBottomRight||s),b=t.getSize(),O=0,N=0;a.x+o+h.x>b.x&&(O=a.x+o-b.x+h.x),a.x-O-p.x<0&&(O=a.x-p.x),a.y+i+h.y>b.y&&(N=a.y+i-b.y+h.y),a.y-N-p.y<0&&(N=a.y-p.y),(O||N)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([O,N]))}},_getAnchor:function(){return C(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Jn=function(t,e){return new Ee(t,e)};Y.mergeOptions({closePopupOnClick:!0}),Y.include({openPopup:function(t,e,i){return this._initOverlay(Ee,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),St.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Ee,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof It||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Ft(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof Rt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Me=Pt.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Pt.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Pt.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Pt.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=J("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+k(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,o=this._map,n=this._container,a=o.latLngToContainerPoint(o.getCenter()),s=o.layerPointToContainerPoint(t),p=this.options.direction,h=n.offsetWidth,b=n.offsetHeight,O=C(this.options.offset),N=this._getAnchor();p==="top"?(e=h/2,i=b):p==="bottom"?(e=h/2,i=0):p==="center"?(e=h/2,i=b/2):p==="right"?(e=0,i=b/2):p==="left"?(e=h,i=b/2):s.x<a.x?(p="right",e=0,i=b/2):(p="left",e=h+(O.x+N.x)*2,i=b/2),t=t.subtract(C(e,i,!0)).add(O).add(N),ct(n,"leaflet-tooltip-right"),ct(n,"leaflet-tooltip-left"),ct(n,"leaflet-tooltip-top"),ct(n,"leaflet-tooltip-bottom"),V(n,"leaflet-tooltip-"+p),lt(n,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&yt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return C(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Xn=function(t,e){return new Me(t,e)};Y.include({openTooltip:function(t,e,i){return this._initOverlay(Me,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),St.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Me,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof It||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(H(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),H(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,o;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),o=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(o)),this._tooltip.setLatLng(e)}});var _o=Gt.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(ve(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var o=C(i.bgPos);e.style.backgroundPosition=-o.x+"px "+-o.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function ta(t){return new _o(t)}Gt.Default=de;var pe=St.extend({options:{tileSize:256,opacity:1,updateWhenIdle:$.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){E(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),rt(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(jt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Vt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=y(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof z?t:new z(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),o=0,n=e.length,a;o<n;o++)a=e[o].style.zIndex,e[o]!==this._container&&a&&(i=t(i,+a));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!$.ielt9){yt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var o in this._tiles){var n=this._tiles[o];if(!(!n.current||!n.loaded)){var a=Math.min(1,(t-n.loaded)/200);yt(n.el,a),a<1?e=!0:(n.active?i=!0:this._onOpaqueTile(n),n.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(tt(this._fadeFrame),this._fadeFrame=W(this._updateOpacity,this))}},_onOpaqueTile:g,_initContainer:function(){this._container||(this._container=J("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(rt(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var o=this._levels[t],n=this._map;return o||(o=this._levels[t]={},o.el=J("div","leaflet-tile-container leaflet-zoom-animated",this._container),o.el.style.zIndex=e,o.origin=n.project(n.unproject(n.getPixelOrigin()),t).round(),o.zoom=t,this._setZoomTransform(o,n.getCenter(),n.getZoom()),g(o.el.offsetWidth),this._onCreateLevel(o)),this._level=o,o}},_onUpdateLevel:g,_onRemoveLevel:g,_onCreateLevel:g,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var o=e.coords;this._retainParent(o.x,o.y,o.z,o.z-5)||this._retainChildren(o.x,o.y,o.z,o.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)rt(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,o){var n=Math.floor(t/2),a=Math.floor(e/2),s=i-1,p=new z(+n,+a);p.z=+s;var h=this._tileCoordsToKey(p),b=this._tiles[h];return b&&b.active?(b.retain=!0,!0):(b&&b.loaded&&(b.retain=!0),s>o?this._retainParent(n,a,s,o):!1)},_retainChildren:function(t,e,i,o){for(var n=2*t;n<2*t+2;n++)for(var a=2*e;a<2*e+2;a++){var s=new z(n,a);s.z=i+1;var p=this._tileCoordsToKey(s),h=this._tiles[p];if(h&&h.active){h.retain=!0;continue}else h&&h.loaded&&(h.retain=!0);i+1<o&&this._retainChildren(n,a,i+1,o)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,o){var n=Math.round(e);this.options.maxZoom!==void 0&&n>this.options.maxZoom||this.options.minZoom!==void 0&&n<this.options.minZoom?n=void 0:n=this._clampZoom(n);var a=this.options.updateWhenZooming&&n!==this._tileZoom;(!o||a)&&(this._tileZoom=n,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),n!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var o=this._map.getZoomScale(i,t.zoom),n=t.origin.multiplyBy(o).subtract(this._map._getNewPixelOrigin(e,i)).round();$.any3d?Nt(t.el,n,o):lt(t.el,n)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),o=this._tileZoom,n=this._map.getPixelWorldBounds(this._tileZoom);n&&(this._globalTileRange=this._pxBoundsToTileRange(n)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],o).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],o).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],o).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],o).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),o=e.getZoomScale(i,this._tileZoom),n=e.project(t,this._tileZoom).floor(),a=e.getSize().divideBy(o*2);return new S(n.subtract(a),n.add(a))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var o=this._getTiledPixelBounds(t),n=this._pxBoundsToTileRange(o),a=n.getCenter(),s=[],p=this.options.keepBuffer,h=new S(n.getBottomLeft().subtract([p,-p]),n.getTopRight().add([p,-p]));if(!(isFinite(n.min.x)&&isFinite(n.min.y)&&isFinite(n.max.x)&&isFinite(n.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var b in this._tiles){var O=this._tiles[b].coords;(O.z!==this._tileZoom||!h.contains(new z(O.x,O.y)))&&(this._tiles[b].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var N=n.min.y;N<=n.max.y;N++)for(var G=n.min.x;G<=n.max.x;G++){var gt=new z(G,N);if(gt.z=this._tileZoom,!!this._isValidTile(gt)){var ut=this._tiles[this._tileCoordsToKey(gt)];ut?ut.current=!0:s.push(gt)}}if(s.sort(function(bt,Jt){return bt.distanceTo(a)-Jt.distanceTo(a)}),s.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var wt=document.createDocumentFragment();for(G=0;G<s.length;G++)this._addTile(s[G],wt);this._level.el.appendChild(wt)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var o=this._tileCoordsToBounds(t);return X(this.options.bounds).overlaps(o)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),o=t.scaleBy(i),n=o.add(i),a=e.unproject(o,t.z),s=e.unproject(n,t.z);return[a,s]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new K(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new z(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(rt(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){V(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=g,t.onmousemove=g,$.ielt9&&this.options.opacity<1&&yt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),o=this._tileCoordsToKey(t),n=this.createTile(this._wrapCoords(t),f(this._tileReady,this,t));this._initTile(n),this.createTile.length<2&&W(f(this._tileReady,this,t,null,n)),lt(n,i),this._tiles[o]={el:n,coords:t,current:!0},e.appendChild(n),this.fire("tileloadstart",{tile:n,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var o=this._tileCoordsToKey(t);i=this._tiles[o],i&&(i.loaded=+new Date,this._map._fadeAnimated?(yt(i.el,0),tt(this._fadeFrame),this._fadeFrame=W(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(V(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),$.ielt9||!this._map._fadeAnimated?W(this._pruneTiles,this):setTimeout(f(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new z(this._wrapX?w(t.x,this._wrapX):t.x,this._wrapY?w(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new S(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function ea(t){return new pe(t)}var Kt=pe.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=E(this,e),e.detectRetina&&$.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return H(i,"load",f(this._tileOnLoad,this,e,i)),H(i,"error",f(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:$.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return R(this._url,d(e,this.options))},_tileOnLoad:function(t,e){$.ielt9?setTimeout(f(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var o=this.options.errorTileUrl;o&&e.getAttribute("src")!==o&&(e.src=o),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,o=this.options.zoomOffset;return i&&(t=e-t),t+o},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=g,e.onerror=g,!e.complete)){e.src=A;var i=this._tiles[t].coords;rt(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",A),pe.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===A))return pe.prototype._tileReady.call(this,t,e,i)}});function vo(t,e){return new Kt(t,e)}var bo=Kt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=d({},this.defaultWmsParams);for(var o in e)o in this.options||(i[o]=e[o]);e=E(this,e);var n=e.detectRetina&&$.retina?2:1,a=this.getTileSize();i.width=a.x*n,i.height=a.y*n,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Kt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,o=D(i.project(e[0]),i.project(e[1])),n=o.min,a=o.max,s=(this._wmsVersion>=1.3&&this._crs===po?[n.y,n.x,a.y,a.x]:[n.x,n.y,a.x,a.y]).join(","),p=Kt.prototype.getTileUrl.call(this,t);return p+x(this.wmsParams,p,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+s},setParams:function(t,e){return d(this.wmsParams,t),e||this.redraw(),this}});function ia(t,e){return new bo(t,e)}Kt.WMS=bo,vo.wms=ia;var Mt=St.extend({options:{padding:.1},initialize:function(t){E(this,t),k(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),V(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),o=this._map.getSize().multiplyBy(.5+this.options.padding),n=this._map.project(this._center,e),a=o.multiplyBy(-i).add(n).subtract(this._map._getNewPixelOrigin(t,e));$.any3d?Nt(this._container,a,i):lt(this._container,a)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new S(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),yo=Mt.extend({options:{tolerance:0},getEvents:function(){var t=Mt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Mt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");H(t,"mousemove",this._onMouseMove,this),H(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),H(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){tt(this._redrawRequest),delete this._ctx,rt(this._container),at(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Mt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),o=$.retina?2:1;lt(e,t.min),e.width=o*i.x,e.height=o*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",$.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){Mt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[k(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,o=e.prev;i?i.prev=o:this._drawLast=o,o?o.next=i:this._drawFirst=i,delete t._order,delete this._layers[k(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],o,n;for(n=0;n<e.length;n++){if(o=Number(e[n]),isNaN(o))return;i.push(o)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||W(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new S,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var o=this._drawFirst;o;o=o.next)t=o.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,o,n,a,s=t._parts,p=s.length,h=this._ctx;if(p){for(h.beginPath(),i=0;i<p;i++){for(o=0,n=s[i].length;o<n;o++)a=s[i][o],h[o?"lineTo":"moveTo"](a.x,a.y);e&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,o=Math.max(Math.round(t._radius),1),n=(Math.max(Math.round(t._radiusY),1)||o)/o;n!==1&&(i.save(),i.scale(1,n)),i.beginPath(),i.arc(e.x,e.y/n,o,0,Math.PI*2,!1),n!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,o,n=this._drawFirst;n;n=n.next)i=n.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(o=i);this._fireEvent(o?[o]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(ct(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,o,n=this._drawFirst;n;n=n.next)i=n.layer,i.options.interactive&&i._containsPoint(e)&&(o=i);o!==this._hoveredLayer&&(this._handleMouseOut(t),o&&(V(this._container,"leaflet-interactive"),this._fireEvent([o],t,"mouseover"),this._hoveredLayer=o)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(f(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,o=e.prev;if(i)i.prev=o;else return;o?o.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,o=e.prev;if(o)o.next=i;else return;i?i.prev=o:o&&(this._drawLast=o),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function xo(t){return $.canvas?new yo(t):null}var ue=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),oa={_initContainer:function(){this._container=J("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Mt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=ue("shape");V(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=ue("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[k(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;rt(e),t.removeInteractiveTarget(e),delete this._layers[k(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,o=t.options,n=t._container;n.stroked=!!o.stroke,n.filled=!!o.fill,o.stroke?(e||(e=t._stroke=ue("stroke")),n.appendChild(e),e.weight=o.weight+"px",e.color=o.color,e.opacity=o.opacity,o.dashArray?e.dashStyle=v(o.dashArray)?o.dashArray.join(" "):o.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=o.lineCap.replace("butt","flat"),e.joinstyle=o.lineJoin):e&&(n.removeChild(e),t._stroke=null),o.fill?(i||(i=t._fill=ue("fill")),n.appendChild(i),i.color=o.fillColor||o.color,i.opacity=o.fillOpacity):i&&(n.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),o=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+o+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){jt(t._container)},_bringToBack:function(t){Vt(t._container)}},Ae=$.vml?ue:Si,he=Mt.extend({_initContainer:function(){this._container=Ae("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ae("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){rt(this._container),at(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Mt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),lt(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=Ae("path");t.options.className&&V(e,t.options.className),t.options.interactive&&V(e,"leaflet-interactive"),this._updateStyle(t),this._layers[k(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){rt(t._path),t.removeInteractiveTarget(t._path),delete this._layers[k(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,Ti(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),o=Math.max(Math.round(t._radiusY),1)||i,n="a"+i+","+o+" 0 1,0 ",a=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+n+i*2+",0 "+n+-i*2+",0 ";this._setPath(t,a)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){jt(t._path)},_bringToBack:function(t){Vt(t._path)}});$.vml&&he.include(oa);function wo(t){return $.svg||$.vml?new he(t):null}Y.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&xo(t)||wo(t)}});var ko=Qt.extend({initialize:function(t,e){Qt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=X(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function na(t,e){return new ko(t,e)}he.create=Ae,he.pointsToPath=Ti,Et.geometryToLayer=Le,Et.coordsToLatLng=pi,Et.coordsToLatLngs=Ce,Et.latLngToCoords=ui,Et.latLngsToCoords=Pe,Et.getFeature=Yt,Et.asFeature=Ie,Y.mergeOptions({boxZoom:!0});var So=Ct.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){H(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){at(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){rt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ne(),Ge(),this._startPoint=this._map.mouseEventToContainerPoint(t),H(document,{contextmenu:Ft,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=J("div","leaflet-zoom-box",this._container),V(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new S(this._point,this._startPoint),i=e.getSize();lt(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(rt(this._box),ct(this._container,"leaflet-crosshair")),ae(),Qe(),at(document,{contextmenu:Ft,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(f(this._resetState,this),0);var e=new K(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Y.addInitHook("addHandler","boxZoom",So),Y.mergeOptions({doubleClickZoom:!0});var To=Ct.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),o=e.options.zoomDelta,n=t.originalEvent.shiftKey?i-o:i+o;e.options.doubleClickZoom==="center"?e.setZoom(n):e.setZoomAround(t.containerPoint,n)}});Y.addInitHook("addHandler","doubleClickZoom",To),Y.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Lo=Ct.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Bt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}V(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){ct(this._map._container,"leaflet-grab"),ct(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=X(this._map.options.maxBounds);this._offsetLimit=D(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,o=this._draggable._newPos.x,n=(o-e+i)%t+e-i,a=(o+e+i)%t-e-i,s=Math.abs(n+i)<Math.abs(a+i)?n:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=s},_onDragEnd:function(t){var e=this._map,i=e.options,o=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),o)e.fire("moveend");else{this._prunePositions(+new Date);var n=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,s=i.easeLinearity,p=n.multiplyBy(s/a),h=p.distanceTo([0,0]),b=Math.min(i.inertiaMaxSpeed,h),O=p.multiplyBy(b/h),N=b/(i.inertiaDeceleration*s),G=O.multiplyBy(-N/2).round();!G.x&&!G.y?e.fire("moveend"):(G=e._limitOffset(G,e.options.maxBounds),W(function(){e.panBy(G,{duration:N,easeLinearity:s,noMoveStart:!0,animate:!0})}))}}});Y.addInitHook("addHandler","dragging",Lo),Y.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Co=Ct.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),H(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),at(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,o=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(o,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,o,n;for(o=0,n=i.left.length;o<n;o++)e[i.left[o]]=[-1*t,0];for(o=0,n=i.right.length;o<n;o++)e[i.right[o]]=[t,0];for(o=0,n=i.down.length;o<n;o++)e[i.down[o]]=[0,t];for(o=0,n=i.up.length;o<n;o++)e[i.up[o]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,o,n;for(o=0,n=i.zoomIn.length;o<n;o++)e[i.zoomIn[o]]=t;for(o=0,n=i.zoomOut.length;o<n;o++)e[i.zoomOut[o]]=-t},_addHooks:function(){H(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){at(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,o;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(o=this._panKeys[e],t.shiftKey&&(o=C(o).multiplyBy(3)),i.options.maxBounds&&(o=i._limitOffset(C(o),i.options.maxBounds)),i.options.worldCopyJump){var n=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(o)));i.panTo(n)}else i.panBy(o)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;Ft(t)}}});Y.addInitHook("addHandler","keyboard",Co),Y.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Po=Ct.extend({addHooks:function(){H(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){at(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=Ki(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var o=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(f(this._performZoom,this),o),Ft(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var o=this._delta/(this._map.options.wheelPxPerZoomLevel*4),n=4*Math.log(2/(1+Math.exp(-Math.abs(o))))/Math.LN2,a=i?Math.ceil(n/i)*i:n,s=t._limitZoom(e+(this._delta>0?a:-a))-e;this._delta=0,this._startTime=null,s&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+s):t.setZoomAround(this._lastMousePos,e+s))}});Y.addInitHook("addHandler","scrollWheelZoom",Po);var aa=600;Y.mergeOptions({tapHold:$.touchNative&&$.safari&&$.mobile,tapTolerance:15});var Io=Ct.extend({addHooks:function(){H(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){at(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new z(e.clientX,e.clientY),this._holdTimeout=setTimeout(f(function(){this._cancel(),this._isTapValid()&&(H(document,"touchend",ft),H(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),aa),H(document,"touchend touchcancel contextmenu",this._cancel,this),H(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){at(document,"touchend",ft),at(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),at(document,"touchend touchcancel contextmenu",this._cancel,this),at(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new z(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});Y.addInitHook("addHandler","tapHold",Io),Y.mergeOptions({touchZoom:$.touch,bounceAtZoomLimits:!0});var zo=Ct.extend({addHooks:function(){V(this._map._container,"leaflet-touch-zoom"),H(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){ct(this._map._container,"leaflet-touch-zoom"),at(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),o=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(o)._divideBy(2))),this._startDist=i.distanceTo(o),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),H(document,"touchmove",this._onTouchMove,this),H(document,"touchend touchcancel",this._onTouchEnd,this),ft(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),o=e.mouseEventToContainerPoint(t.touches[1]),n=i.distanceTo(o)/this._startDist;if(this._zoom=e.getScaleZoom(n,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&n<1||this._zoom>e.getMaxZoom()&&n>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,n===1)return}else{var a=i._add(o)._divideBy(2)._subtract(this._centerPoint);if(n===1&&a.x===0&&a.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(a),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),tt(this._animRequest);var s=f(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=W(s,this,!0),ft(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,tt(this._animRequest),at(document,"touchmove",this._onTouchMove,this),at(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Y.addInitHook("addHandler","touchZoom",zo),Y.BoxZoom=So,Y.DoubleClickZoom=To,Y.Drag=Lo,Y.Keyboard=Co,Y.ScrollWheelZoom=Po,Y.TapHold=Io,Y.TouchZoom=zo,r.Bounds=S,r.Browser=$,r.CRS=mt,r.Canvas=yo,r.Circle=di,r.CircleMarker=Te,r.Class=st,r.Control=kt,r.DivIcon=_o,r.DivOverlay=Pt,r.DomEvent=kn,r.DomUtil=xn,r.Draggable=Bt,r.Evented=Z,r.FeatureGroup=It,r.GeoJSON=Et,r.GridLayer=pe,r.Handler=Ct,r.Icon=Gt,r.ImageOverlay=ze,r.LatLng=j,r.LatLngBounds=K,r.Layer=St,r.LayerGroup=Ut,r.LineUtil=Rn,r.Map=Y,r.Marker=Se,r.Mixin=zn,r.Path=Rt,r.Point=z,r.PolyUtil=En,r.Polygon=Qt,r.Polyline=zt,r.Popup=Ee,r.PosAnimation=Ji,r.Projection=$n,r.Rectangle=ko,r.Renderer=Mt,r.SVG=he,r.SVGOverlay=go,r.TileLayer=Kt,r.Tooltip=Me,r.Transformation=Re,r.Util=pt,r.VideoOverlay=mo,r.bind=f,r.bounds=D,r.canvas=xo,r.circle=jn,r.circleMarker=Wn,r.control=ce,r.divIcon=ta,r.extend=d,r.featureGroup=Fn,r.geoJSON=fo,r.geoJson=Gn,r.gridLayer=ea,r.icon=qn,r.imageOverlay=Qn,r.latLng=q,r.latLngBounds=X,r.layerGroup=Zn,r.map=Sn,r.marker=Hn,r.point=C,r.polygon=Un,r.polyline=Vn,r.popup=Jn,r.rectangle=na,r.setOptions=E,r.stamp=k,r.svg=wo,r.svgOverlay=Kn,r.tileLayer=vo,r.tooltip=Xn,r.transformation=te,r.version=_,r.videoOverlay=Yn;var ra=window.L;r.noConflict=function(){return window.L=ra,this},window.L=r})})(xi,xi.exports);var Ho=xi.exports;const lr=cr(Ho),dr=ma({__proto__:null,default:lr},[Ho]);function pr(){const c=["linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)","linear-gradient(135deg, #064e3b 0%, #065f46 100%)","linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)","linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)","linear-gradient(135deg, #4a044e 0%, #7e22ce 100%)"];document.addEventListener("error",l=>{const r=l.target;if(r.tagName!=="IMG"||r.dataset.fallbackApplied)return;r.dataset.fallbackApplied="true";const _=(r.src||"").split("").reduce((f,P)=>f+P.charCodeAt(0),0),d=c[_%c.length],u=document.createElement("div");u.style.cssText=`
      width: 100%; height: 100%;
      background: ${d};
      display: flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,0.3); font-size: 32px;
    `,u.textContent="🌍",r.parentNode.replaceChild(u,r)},!0)}function ur(){const c=document.getElementById("app");if(!c){console.error("App root element not found");return}pr(),ga(c,rr),document.addEventListener("click",l=>{const r=l.target.closest("a[data-link]");if(r){l.preventDefault();const _=r.getAttribute("href");window.history.pushState({},"",_),window.dispatchEvent(new PopStateEvent("popstate"))}})}document.addEventListener("DOMContentLoaded",ur);
