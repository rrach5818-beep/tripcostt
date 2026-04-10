(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();let ie=null,he=[];function we(t,a){ie=t,he=a,window.addEventListener("popstate",()=>pe()),pe()}function ke(t){for(const a of he){const e=a.path.split("/"),n=t.split("/");if(e.length!==n.length)continue;const o={};let i=!0;for(let s=0;s<e.length;s++)if(e[s].startsWith(":"))o[e[s].slice(1)]=n[s];else if(e[s]!==n[s]){i=!1;break}if(i)return{route:a,params:o}}return null}function pe(){const t=window.location.pathname,a=ke(t);if(a){const e=a.route.component(a.params);ie.innerHTML=e,a.route.setup&&setTimeout(()=>a.route.setup(),0)}else ie.innerHTML=`
      <div class="container py-20 text-center">
        <h1>404 - Page Not Found</h1>
        <p class="mt-4">The page you're looking for doesn't exist.</p>
        <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
      </div>
    `}const Se="modulepreload",Te=function(t){return"/"+t},me={},Ce=function(a,e,n){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),m=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(e.map(v=>{if(v=Te(v),v in me)return;me[v]=!0;const d=v.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${f}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":Se,d||(c.as="script"),c.crossOrigin="",c.href=v,m&&c.setAttribute("nonce",m),document.head.appendChild(c),d)return new Promise((r,g)=>{c.addEventListener("load",r),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(s){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=s,window.dispatchEvent(m),!m.defaultPrevented)throw s}return o.then(s=>{for(const m of s||[])m.status==="rejected"&&i(m.reason);return a().catch(i)})};function A(t){return`
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
      ${t}
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
        </div>
      </div>
    </footer>
  `}const te=[{id:"new-york",lat:40.7128,lng:-74.006,slug:"new-york",name:"New York",country:"United States",countryCode:"US",continent:"North America",currency:"USD",currencySymbol:"$",image:"https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600",description:"The city that never sleeps offers world-class culture and business opportunities.",costs:{accommodation:{center:200,suburb:140},food:{budget:25,standard:50,premium:120},transport:127,coworking:450},visa:{type:"No Digital Nomad Visa",remoteFriendly:!1,stayDurationMonths:6,processingTimeDays:90,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:37,corporateTax:21,capitalGainsTax:20},infrastructure:{publicTransportQuality:90,healthcareQuality:88,englishProficiency:100,airportConnectivity:98},safety:{safetyIndex:75,crimeLevel:"Moderate"},macro:{inflationRate:3.5,currencyStability:"High",rentVolatilityIndex:8.5},digitalNomad:{overallScore:78,wifiSpeed:200,coworkingCost:450,safetyScore:75},tags:["finance","startup-hub","arts"],lastUpdated:"2026-03"},{id:"tokyo",lat:35.6762,lng:139.6503,slug:"tokyo",name:"Tokyo",country:"Japan",countryCode:"JP",continent:"Asia",currency:"JPY",currencySymbol:"¥",image:"https://images.unsplash.com/photo-1549693578-d683be217e58?w=1600",description:"Ultra-modern city blending tradition and innovation.",costs:{accommodation:{center:140,suburb:90},food:{budget:15,standard:35,premium:100},transport:100,coworking:300},visa:{type:"Japan Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:6,processingTimeDays:45,minIncomeRequirement:7e3},tax:{personalIncomeTaxTopRate:45,corporateTax:23,capitalGainsTax:20},infrastructure:{publicTransportQuality:98,healthcareQuality:95,englishProficiency:60,airportConnectivity:95},safety:{safetyIndex:95,crimeLevel:"Low"},macro:{inflationRate:2.8,currencyStability:"High",rentVolatilityIndex:4.5},digitalNomad:{overallScore:88,wifiSpeed:250,coworkingCost:300,safetyScore:95},tags:["tech-hub","safe","food"],lastUpdated:"2026-03"},{id:"lisbon",lat:38.7169,lng:-9.1399,slug:"lisbon",name:"Lisbon",country:"Portugal",countryCode:"PT",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800",description:"Europe's digital nomad capital with Mediterranean lifestyle.",costs:{accommodation:{center:90,suburb:60},food:{budget:12,standard:25,premium:70},transport:40,coworking:200},visa:{type:"Portugal D8 Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:3040},tax:{personalIncomeTaxTopRate:48,corporateTax:21,capitalGainsTax:28},infrastructure:{publicTransportQuality:85,healthcareQuality:88,englishProficiency:75,airportConnectivity:90},safety:{safetyIndex:85,crimeLevel:"Low"},macro:{inflationRate:2.5,currencyStability:"High",rentVolatilityIndex:7.2},digitalNomad:{overallScore:90,wifiSpeed:120,coworkingCost:200,safetyScore:85},tags:["nomad-friendly","beach","affordable"],lastUpdated:"2026-03"},{id:"bali",lat:-8.4095,lng:115.1889,slug:"bali",name:"Bali",country:"Indonesia",countryCode:"ID",continent:"Asia",currency:"IDR",currencySymbol:"Rp",image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",description:"Tropical paradise with strong nomad community.",costs:{accommodation:{center:50,suburb:30},food:{budget:5,standard:15,premium:50},transport:50,coworking:150},visa:{type:"Indonesia Remote Worker Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:2e3},tax:{personalIncomeTaxTopRate:35,corporateTax:22,capitalGainsTax:10},infrastructure:{publicTransportQuality:55,healthcareQuality:65,englishProficiency:60,airportConnectivity:70},safety:{safetyIndex:75,crimeLevel:"Moderate"},macro:{inflationRate:3.2,currencyStability:"Medium",rentVolatilityIndex:6.8},digitalNomad:{overallScore:85,wifiSpeed:80,coworkingCost:150,safetyScore:75},tags:["tropical","nomad-hub","affordable"],lastUpdated:"2026-03"},{id:"berlin",lat:52.52,lng:13.405,slug:"berlin",name:"Berlin",country:"Germany",countryCode:"DE",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600",description:"Creative European capital with thriving startup scene.",costs:{accommodation:{center:110,suburb:70},food:{budget:12,standard:30,premium:80},transport:86,coworking:250},visa:{type:"Freelance Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:90,minIncomeRequirement:2500},tax:{personalIncomeTaxTopRate:45,corporateTax:30,capitalGainsTax:25},infrastructure:{publicTransportQuality:92,healthcareQuality:92,englishProficiency:80,airportConnectivity:88},safety:{safetyIndex:80,crimeLevel:"Low"},macro:{inflationRate:3.1,currencyStability:"High",rentVolatilityIndex:7.5},digitalNomad:{overallScore:84,wifiSpeed:150,coworkingCost:250,safetyScore:80},tags:["tech-hub","creative","startup"],lastUpdated:"2026-03"},{id:"bangkok",lat:13.7563,lng:100.5018,slug:"bangkok",name:"Bangkok",country:"Thailand",countryCode:"TH",continent:"Asia",currency:"THB",currencySymbol:"฿",image:"https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1600",description:"Vibrant metropolis offering strong value for remote workers.",costs:{accommodation:{center:60,suburb:35},food:{budget:5,standard:15,premium:45},transport:45,coworking:180},visa:{type:"Thailand DTV",remoteFriendly:!0,stayDurationMonths:60,processingTimeDays:30,minIncomeRequirement:1500},tax:{personalIncomeTaxTopRate:35,corporateTax:20,capitalGainsTax:15},infrastructure:{publicTransportQuality:85,healthcareQuality:80,englishProficiency:65,airportConnectivity:92},safety:{safetyIndex:70,crimeLevel:"Moderate"},macro:{inflationRate:2.1,currencyStability:"Medium",rentVolatilityIndex:6},digitalNomad:{overallScore:86,wifiSpeed:120,coworkingCost:180,safetyScore:70},tags:["affordable","food","culture"],lastUpdated:"2026-03"},{id:"barcelona",lat:41.3851,lng:2.1734,slug:"barcelona",name:"Barcelona",country:"Spain",countryCode:"ES",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=1600",description:"Mediterranean tech hub combining beach and business.",costs:{accommodation:{center:130,suburb:85},food:{budget:15,standard:35,premium:90},transport:55,coworking:280},visa:{type:"Spain Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:45,minIncomeRequirement:2520},tax:{personalIncomeTaxTopRate:47,corporateTax:25,capitalGainsTax:23},infrastructure:{publicTransportQuality:88,healthcareQuality:90,englishProficiency:75,airportConnectivity:88},safety:{safetyIndex:75,crimeLevel:"Moderate"},macro:{inflationRate:2.7,currencyStability:"High",rentVolatilityIndex:7},digitalNomad:{overallScore:83,wifiSpeed:140,coworkingCost:280,safetyScore:75},tags:["beach","tech-hub","culture"],lastUpdated:"2026-03"},{id:"mexico-city",lat:19.4326,lng:-99.1332,slug:"mexico-city",name:"Mexico City",country:"Mexico",countryCode:"MX",continent:"North America",currency:"MXN",currencySymbol:"$",image:"https://images.unsplash.com/photo-1512813382947-0e4a6d6c6c66?w=1600",description:"Massive metropolis with rich culture and strong affordability.",costs:{accommodation:{center:70,suburb:45},food:{budget:8,standard:20,premium:60},transport:20,coworking:180},visa:{type:"Temporary Resident Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:2600},tax:{personalIncomeTaxTopRate:35,corporateTax:30,capitalGainsTax:10},infrastructure:{publicTransportQuality:75,healthcareQuality:75,englishProficiency:60,airportConnectivity:90},safety:{safetyIndex:55,crimeLevel:"Moderate"},macro:{inflationRate:4.2,currencyStability:"Medium",rentVolatilityIndex:6.5},digitalNomad:{overallScore:80,wifiSpeed:100,coworkingCost:180,safetyScore:55},tags:["affordable","food","culture"],lastUpdated:"2026-03"},{id:"chiang-mai",lat:18.7883,lng:98.9853,slug:"chiang-mai",name:"Chiang Mai",country:"Thailand",countryCode:"TH",continent:"Asia",currency:"THB",currencySymbol:"฿",image:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1600",description:"Original digital nomad hub with unbeatable value.",costs:{accommodation:{center:40,suburb:25},food:{budget:4,standard:10,premium:35},transport:30,coworking:100},visa:{type:"Thailand DTV",remoteFriendly:!0,stayDurationMonths:60,processingTimeDays:30,minIncomeRequirement:1500},tax:{personalIncomeTaxTopRate:35,corporateTax:20,capitalGainsTax:15},infrastructure:{publicTransportQuality:60,healthcareQuality:75,englishProficiency:60,airportConnectivity:65},safety:{safetyIndex:85,crimeLevel:"Low"},macro:{inflationRate:2.1,currencyStability:"Medium",rentVolatilityIndex:5.5},digitalNomad:{overallScore:92,wifiSpeed:90,coworkingCost:100,safetyScore:85},tags:["nomad-hub","affordable","temples"],lastUpdated:"2026-03"},{id:"dubai",lat:25.2048,lng:55.2708,slug:"dubai",name:"Dubai",country:"United Arab Emirates",countryCode:"AE",continent:"Asia",currency:"AED",currencySymbol:"د.إ",image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600",description:"Tax-free income city with world-class infrastructure.",costs:{accommodation:{center:170,suburb:100},food:{budget:15,standard:40,premium:120},transport:80,coworking:400},visa:{type:"UAE Virtual Working Program",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:3500},tax:{personalIncomeTaxTopRate:0,corporateTax:9,capitalGainsTax:0},infrastructure:{publicTransportQuality:90,healthcareQuality:88,englishProficiency:95,airportConnectivity:99},safety:{safetyIndex:95,crimeLevel:"Very Low"},macro:{inflationRate:3.3,currencyStability:"High",rentVolatilityIndex:8},digitalNomad:{overallScore:82,wifiSpeed:220,coworkingCost:400,safetyScore:95},tags:["luxury","tax-free","modern"],lastUpdated:"2026-03"},{id:"london",lat:51.5074,lng:-.1278,slug:"london",name:"London",country:"United Kingdom",countryCode:"GB",continent:"Europe",currency:"GBP",currencySymbol:"£",image:"https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1600",description:"Global business capital with unmatched connectivity.",costs:{accommodation:{center:190,suburb:120},food:{budget:20,standard:45,premium:120},transport:170,coworking:450},visa:{type:"Skilled Worker / No Nomad Visa",remoteFriendly:!1,stayDurationMonths:6,processingTimeDays:60,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:45,corporateTax:25,capitalGainsTax:20},infrastructure:{publicTransportQuality:92,healthcareQuality:88,englishProficiency:100,airportConnectivity:99},safety:{safetyIndex:75,crimeLevel:"Moderate"},macro:{inflationRate:3.8,currencyStability:"High",rentVolatilityIndex:8},digitalNomad:{overallScore:76,wifiSpeed:180,coworkingCost:450,safetyScore:75},tags:["business-hub","culture","finance"],lastUpdated:"2026-03"},{id:"buenos-aires",lat:-34.6037,lng:-58.3816,slug:"buenos-aires",name:"Buenos Aires",country:"Argentina",countryCode:"AR",continent:"South America",currency:"ARS",currencySymbol:"$",image:"https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1600",description:"European flair in South America with strong value for foreign earners.",costs:{accommodation:{center:55,suburb:35},food:{budget:6,standard:15,premium:45},transport:15,coworking:120},visa:{type:"Argentina Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:2500},tax:{personalIncomeTaxTopRate:35,corporateTax:35,capitalGainsTax:15},infrastructure:{publicTransportQuality:80,healthcareQuality:75,englishProficiency:55,airportConnectivity:85},safety:{safetyIndex:55,crimeLevel:"Moderate"},macro:{inflationRate:120,currencyStability:"Low",rentVolatilityIndex:9},digitalNomad:{overallScore:78,wifiSpeed:90,coworkingCost:120,safetyScore:55},tags:["affordable","culture","nightlife"],lastUpdated:"2026-03"},{id:"singapore",lat:1.3521,lng:103.8198,slug:"singapore",name:"Singapore",country:"Singapore",countryCode:"SG",continent:"Asia",currency:"SGD",currencySymbol:"S$",image:"https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1600",description:"Ultra-efficient city-state with world-class infrastructure.",costs:{accommodation:{center:170,suburb:110},food:{budget:8,standard:25,premium:80},transport:80,coworking:400},visa:{type:"EntrePass / Work Pass (No Nomad Visa)",remoteFriendly:!1,stayDurationMonths:6,processingTimeDays:60,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:24,corporateTax:17,capitalGainsTax:0},infrastructure:{publicTransportQuality:98,healthcareQuality:95,englishProficiency:100,airportConnectivity:99},safety:{safetyIndex:97,crimeLevel:"Very Low"},macro:{inflationRate:3.1,currencyStability:"Very High",rentVolatilityIndex:7},digitalNomad:{overallScore:85,wifiSpeed:300,coworkingCost:400,safetyScore:97},tags:["efficient","safe","startup-hub"],lastUpdated:"2026-03"},{id:"amsterdam",lat:52.3676,lng:4.9041,slug:"amsterdam",name:"Amsterdam",country:"Netherlands",countryCode:"NL",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1600",description:"Liberal tech-friendly city with strong English proficiency.",costs:{accommodation:{center:170,suburb:110},food:{budget:15,standard:35,premium:90},transport:100,coworking:350},visa:{type:"DAFT / Self-Employment Visa",remoteFriendly:!0,stayDurationMonths:24,processingTimeDays:90,minIncomeRequirement:1500},tax:{personalIncomeTaxTopRate:49.5,corporateTax:25.8,capitalGainsTax:31},infrastructure:{publicTransportQuality:95,healthcareQuality:92,englishProficiency:95,airportConnectivity:95},safety:{safetyIndex:80,crimeLevel:"Low"},macro:{inflationRate:2.9,currencyStability:"High",rentVolatilityIndex:8},digitalNomad:{overallScore:82,wifiSpeed:200,coworkingCost:350,safetyScore:80},tags:["bike-friendly","tech-hub","english-speaking"],lastUpdated:"2026-03"},{id:"medellin",lat:6.2476,lng:-75.5658,slug:"medellin",name:"Medellín",country:"Colombia",countryCode:"CO",continent:"South America",currency:"COP",currencySymbol:"$",image:"https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=1600",description:"City of eternal spring with growing remote worker scene.",costs:{accommodation:{center:60,suburb:40},food:{budget:6,standard:15,premium:45},transport:30,coworking:150},visa:{type:"Colombia Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:24,processingTimeDays:30,minIncomeRequirement:900},tax:{personalIncomeTaxTopRate:39,corporateTax:35,capitalGainsTax:15},infrastructure:{publicTransportQuality:75,healthcareQuality:75,englishProficiency:55,airportConnectivity:80},safety:{safetyIndex:60,crimeLevel:"Moderate"},macro:{inflationRate:9,currencyStability:"Medium",rentVolatilityIndex:6},digitalNomad:{overallScore:83,wifiSpeed:100,coworkingCost:150,safetyScore:60},tags:["eternal-spring","affordable","nomad-hub"],lastUpdated:"2026-03"},{id:"prague",lat:50.0755,lng:14.4378,slug:"prague",name:"Prague",country:"Czech Republic",countryCode:"CZ",continent:"Europe",currency:"CZK",currencySymbol:"Kč",image:"https://images.unsplash.com/photo-1562624475-96c2b5e7be9b?w=1600",description:"Fairytale European capital with strong affordability.",costs:{accommodation:{center:90,suburb:55},food:{budget:10,standard:25,premium:65},transport:25,coworking:200},visa:{type:"Czech Freelance Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:2e3},tax:{personalIncomeTaxTopRate:23,corporateTax:21,capitalGainsTax:15},infrastructure:{publicTransportQuality:90,healthcareQuality:85,englishProficiency:80,airportConnectivity:85},safety:{safetyIndex:85,crimeLevel:"Low"},macro:{inflationRate:3,currencyStability:"High",rentVolatilityIndex:6},digitalNomad:{overallScore:84,wifiSpeed:180,coworkingCost:200,safetyScore:85},tags:["historic","affordable","beer"],lastUpdated:"2026-03"},{id:"seoul",lat:37.5665,lng:126.978,slug:"seoul",name:"Seoul",country:"South Korea",countryCode:"KR",continent:"Asia",currency:"KRW",currencySymbol:"₩",image:"https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1600",description:"High-tech metropolis with blazing fast internet.",costs:{accommodation:{center:100,suburb:65},food:{budget:8,standard:20,premium:60},transport:50,coworking:250},visa:{type:"Korea Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:3e3},tax:{personalIncomeTaxTopRate:45,corporateTax:25,capitalGainsTax:22},infrastructure:{publicTransportQuality:95,healthcareQuality:92,englishProficiency:60,airportConnectivity:95},safety:{safetyIndex:90,crimeLevel:"Low"},macro:{inflationRate:2.6,currencyStability:"High",rentVolatilityIndex:6},digitalNomad:{overallScore:86,wifiSpeed:300,coworkingCost:250,safetyScore:90},tags:["tech-hub","fast-internet","food"],lastUpdated:"2026-03"},{id:"paris",lat:48.8566,lng:2.3522,slug:"paris",name:"Paris",country:"France",countryCode:"FR",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600",description:"World-famous capital offering culture and business opportunities.",costs:{accommodation:{center:160,suburb:110},food:{budget:15,standard:35,premium:100},transport:75,coworking:350},visa:{type:"France Long-Stay / Talent Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:2500},tax:{personalIncomeTaxTopRate:45,corporateTax:25,capitalGainsTax:30},infrastructure:{publicTransportQuality:92,healthcareQuality:95,englishProficiency:75,airportConnectivity:95},safety:{safetyIndex:70,crimeLevel:"Moderate"},macro:{inflationRate:2.5,currencyStability:"High",rentVolatilityIndex:8},digitalNomad:{overallScore:78,wifiSpeed:200,coworkingCost:350,safetyScore:70},tags:["culture","food","business"],lastUpdated:"2026-03"},{id:"madrid",lat:40.4168,lng:-3.7038,slug:"madrid",name:"Madrid",country:"Spain",countryCode:"ES",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1600",description:"Vibrant Spanish capital with lively social scene.",costs:{accommodation:{center:110,suburb:80},food:{budget:12,standard:30,premium:85},transport:55,coworking:260},visa:{type:"Spain Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:45,minIncomeRequirement:2520},tax:{personalIncomeTaxTopRate:47,corporateTax:25,capitalGainsTax:23},infrastructure:{publicTransportQuality:88,healthcareQuality:90,englishProficiency:70,airportConnectivity:90},safety:{safetyIndex:75,crimeLevel:"Low"},macro:{inflationRate:2.7,currencyStability:"High",rentVolatilityIndex:6.5},digitalNomad:{overallScore:81,wifiSpeed:160,coworkingCost:260,safetyScore:75},tags:["culture","nightlife","affordable"],lastUpdated:"2026-03"},{id:"rome",lat:41.9028,lng:12.4964,slug:"rome",name:"Rome",country:"Italy",countryCode:"IT",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1600",description:"Historic capital with Mediterranean lifestyle and rich heritage.",costs:{accommodation:{center:120,suburb:85},food:{budget:10,standard:28,premium:80},transport:45,coworking:240},visa:{type:"Italy Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:2800},tax:{personalIncomeTaxTopRate:43,corporateTax:24,capitalGainsTax:26},infrastructure:{publicTransportQuality:80,healthcareQuality:88,englishProficiency:65,airportConnectivity:88},safety:{safetyIndex:72,crimeLevel:"Moderate"},macro:{inflationRate:2.6,currencyStability:"High",rentVolatilityIndex:7},digitalNomad:{overallScore:76,wifiSpeed:150,coworkingCost:240,safetyScore:72},tags:["historic","food","culture"],lastUpdated:"2026-03"},{id:"vienna",lat:48.2082,lng:16.3738,slug:"vienna",name:"Vienna",country:"Austria",countryCode:"AT",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1600",description:"Highly livable city with excellent public services.",costs:{accommodation:{center:130,suburb:90},food:{budget:12,standard:32,premium:90},transport:60,coworking:300},visa:{type:"Austria Self-Employment Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:3e3},tax:{personalIncomeTaxTopRate:55,corporateTax:24,capitalGainsTax:27.5},infrastructure:{publicTransportQuality:95,healthcareQuality:95,englishProficiency:85,airportConnectivity:85},safety:{safetyIndex:90,crimeLevel:"Low"},macro:{inflationRate:2.4,currencyStability:"High",rentVolatilityIndex:5},digitalNomad:{overallScore:88,wifiSpeed:200,coworkingCost:300,safetyScore:90},tags:["safe","clean","livable"],lastUpdated:"2026-03"},{id:"budapest",lat:47.4979,lng:19.0402,slug:"budapest",name:"Budapest",country:"Hungary",countryCode:"HU",continent:"Europe",currency:"HUF",currencySymbol:"Ft",image:"https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=1600",description:"Affordable European capital popular with remote workers.",costs:{accommodation:{center:80,suburb:55},food:{budget:8,standard:22,premium:65},transport:30,coworking:180},visa:{type:"Hungary White Card",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:2e3},tax:{personalIncomeTaxTopRate:15,corporateTax:9,capitalGainsTax:15},infrastructure:{publicTransportQuality:88,healthcareQuality:80,englishProficiency:75,airportConnectivity:80},safety:{safetyIndex:80,crimeLevel:"Low"},macro:{inflationRate:4.5,currencyStability:"Medium",rentVolatilityIndex:6},digitalNomad:{overallScore:83,wifiSpeed:160,coworkingCost:180,safetyScore:80},tags:["affordable","nomad-friendly","historic"],lastUpdated:"2026-03"},{id:"athens",lat:37.9838,lng:23.7275,slug:"athens",name:"Athens",country:"Greece",countryCode:"GR",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600",description:"Historic Mediterranean city with growing nomad appeal.",costs:{accommodation:{center:85,suburb:60},food:{budget:9,standard:25,premium:70},transport:35,coworking:200},visa:{type:"Greece Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:3500},tax:{personalIncomeTaxTopRate:44,corporateTax:22,capitalGainsTax:15},infrastructure:{publicTransportQuality:75,healthcareQuality:80,englishProficiency:70,airportConnectivity:85},safety:{safetyIndex:70,crimeLevel:"Moderate"},macro:{inflationRate:3.2,currencyStability:"High",rentVolatilityIndex:6},digitalNomad:{overallScore:79,wifiSpeed:140,coworkingCost:200,safetyScore:70},tags:["history","mediterranean","affordable"],lastUpdated:"2026-03"},{id:"istanbul",lat:41.0082,lng:28.9784,slug:"istanbul",name:"Istanbul",country:"Turkey",countryCode:"TR",continent:"Europe",currency:"TRY",currencySymbol:"₺",image:"https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1600",description:"Vibrant city bridging Europe and Asia with excellent value.",costs:{accommodation:{center:75,suburb:50},food:{budget:7,standard:20,premium:60},transport:30,coworking:170},visa:{type:"Turkey Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:3e3},tax:{personalIncomeTaxTopRate:40,corporateTax:25,capitalGainsTax:15},infrastructure:{publicTransportQuality:75,healthcareQuality:75,englishProficiency:55,airportConnectivity:90},safety:{safetyIndex:65,crimeLevel:"Moderate"},macro:{inflationRate:45,currencyStability:"Low",rentVolatilityIndex:9},digitalNomad:{overallScore:75,wifiSpeed:120,coworkingCost:170,safetyScore:65},tags:["culture","affordable","food"],lastUpdated:"2026-03"},{id:"helsinki",lat:60.1699,lng:24.9384,slug:"helsinki",name:"Helsinki",country:"Finland",countryCode:"FI",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=1600",description:"Nordic capital offering safety and excellent infrastructure.",costs:{accommodation:{center:150,suburb:105},food:{budget:14,standard:38,premium:110},transport:70,coworking:320},visa:{type:"Self-Employment Residence Permit",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:2e3},tax:{personalIncomeTaxTopRate:57,corporateTax:20,capitalGainsTax:30},infrastructure:{publicTransportQuality:95,healthcareQuality:95,englishProficiency:90,airportConnectivity:85},safety:{safetyIndex:95,crimeLevel:"Very Low"},macro:{inflationRate:3.1,currencyStability:"High",rentVolatilityIndex:5},digitalNomad:{overallScore:90,wifiSpeed:250,coworkingCost:320,safetyScore:95},tags:["safe","nordic","nature"],lastUpdated:"2026-03"},{id:"stockholm",lat:59.3293,lng:18.0686,slug:"stockholm",name:"Stockholm",country:"Sweden",countryCode:"SE",continent:"Europe",currency:"SEK",currencySymbol:"kr",image:"https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1600",description:"Scandinavian tech hub with high quality of life.",costs:{accommodation:{center:155,suburb:110},food:{budget:15,standard:40,premium:120},transport:75,coworking:350},visa:{type:"Sweden Self-Employment Permit",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:90,minIncomeRequirement:2200},tax:{personalIncomeTaxTopRate:52,corporateTax:20.6,capitalGainsTax:30},infrastructure:{publicTransportQuality:95,healthcareQuality:92,englishProficiency:95,airportConnectivity:90},safety:{safetyIndex:92,crimeLevel:"Low"},macro:{inflationRate:2.8,currencyStability:"High",rentVolatilityIndex:6},digitalNomad:{overallScore:88,wifiSpeed:240,coworkingCost:350,safetyScore:92},tags:["tech-hub","safe","nordic"],lastUpdated:"2026-03"},{id:"oslo",lat:59.9139,lng:10.7522,slug:"oslo",name:"Oslo",country:"Norway",countryCode:"NO",continent:"Europe",currency:"NOK",currencySymbol:"kr",image:"https://images.unsplash.com/photo-1601581975053-7c199b3c3344?w=1600",description:"Modern city surrounded by nature with high living standards.",costs:{accommodation:{center:165,suburb:120},food:{budget:18,standard:45,premium:130},transport:80,coworking:380},visa:{type:"Self-Employment Residence Permit",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:90,minIncomeRequirement:3e3},tax:{personalIncomeTaxTopRate:47.4,corporateTax:22,capitalGainsTax:22},infrastructure:{publicTransportQuality:95,healthcareQuality:95,englishProficiency:95,airportConnectivity:85},safety:{safetyIndex:93,crimeLevel:"Very Low"},macro:{inflationRate:3.3,currencyStability:"High",rentVolatilityIndex:5.5},digitalNomad:{overallScore:87,wifiSpeed:230,coworkingCost:380,safetyScore:93},tags:["nature","safe","expensive"],lastUpdated:"2026-03"},{id:"cape-town",lat:-33.9249,lng:18.4241,slug:"cape-town",name:"Cape Town",country:"South Africa",countryCode:"ZA",continent:"Africa",currency:"ZAR",currencySymbol:"R",image:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600",description:"Coastal city with strong lifestyle appeal and growing remote scene.",costs:{accommodation:{center:70,suburb:45},food:{budget:8,standard:20,premium:55},transport:45,coworking:180},visa:{type:"South Africa Remote Work Visa",remoteFriendly:!0,stayDurationMonths:36,processingTimeDays:60,minIncomeRequirement:3e3},tax:{personalIncomeTaxTopRate:45,corporateTax:27,capitalGainsTax:18},infrastructure:{publicTransportQuality:60,healthcareQuality:70,englishProficiency:90,airportConnectivity:80},safety:{safetyIndex:45,crimeLevel:"High"},macro:{inflationRate:5.2,currencyStability:"Medium",rentVolatilityIndex:7},digitalNomad:{overallScore:68,wifiSpeed:100,coworkingCost:180,safetyScore:45},tags:["nature","affordable","adventure"],lastUpdated:"2026-03"},{id:"marrakech",lat:31.6295,lng:-7.9811,slug:"marrakech",name:"Marrakech",country:"Morocco",countryCode:"MA",continent:"Africa",currency:"MAD",currencySymbol:"د.م.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=1600",description:"Historic Moroccan city blending tradition and growing nomad interest.",costs:{accommodation:{center:55,suburb:35},food:{budget:6,standard:18,premium:50},transport:25,coworking:120},visa:{type:"Tourist Visa (90 days)",remoteFriendly:!0,stayDurationMonths:3,processingTimeDays:15,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:38,corporateTax:31,capitalGainsTax:20},infrastructure:{publicTransportQuality:55,healthcareQuality:60,englishProficiency:50,airportConnectivity:75},safety:{safetyIndex:65,crimeLevel:"Moderate"},macro:{inflationRate:5,currencyStability:"Medium",rentVolatilityIndex:6.5},digitalNomad:{overallScore:72,wifiSpeed:80,coworkingCost:120,safetyScore:65},tags:["culture","affordable","warm-weather"],lastUpdated:"2026-03"},{id:"cairo",lat:30.0444,lng:31.2357,slug:"cairo",name:"Cairo",country:"Egypt",countryCode:"EG",continent:"Africa",currency:"EGP",currencySymbol:"E£",image:"https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1600",description:"Massive historic capital with extremely low living costs.",costs:{accommodation:{center:40,suburb:25},food:{budget:5,standard:15,premium:40},transport:15,coworking:100},visa:{type:"Tourist Visa",remoteFriendly:!0,stayDurationMonths:3,processingTimeDays:7,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:27.5,corporateTax:22.5,capitalGainsTax:10},infrastructure:{publicTransportQuality:50,healthcareQuality:55,englishProficiency:45,airportConnectivity:80},safety:{safetyIndex:55,crimeLevel:"Moderate"},macro:{inflationRate:25,currencyStability:"Low",rentVolatilityIndex:8},digitalNomad:{overallScore:60,wifiSpeed:70,coworkingCost:100,safetyScore:55},tags:["historic","very-affordable"],lastUpdated:"2026-03"},{id:"nairobi",lat:-1.2921,lng:36.8219,slug:"nairobi",name:"Nairobi",country:"Kenya",countryCode:"KE",continent:"Africa",currency:"KES",currencySymbol:"KSh",image:"https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1600",description:"East Africa’s tech and startup hub.",costs:{accommodation:{center:65,suburb:40},food:{budget:6,standard:18,premium:50},transport:35,coworking:160},visa:{type:"Kenya Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:2e3},tax:{personalIncomeTaxTopRate:35,corporateTax:30,capitalGainsTax:15},infrastructure:{publicTransportQuality:60,healthcareQuality:65,englishProficiency:85,airportConnectivity:75},safety:{safetyIndex:55,crimeLevel:"Moderate"},macro:{inflationRate:5.5,currencyStability:"Medium",rentVolatilityIndex:7},digitalNomad:{overallScore:74,wifiSpeed:90,coworkingCost:160,safetyScore:55},tags:["tech-hub","emerging","affordable"],lastUpdated:"2026-03"},{id:"kigali",lat:-1.9441,lng:30.0619,slug:"kigali",name:"Kigali",country:"Rwanda",countryCode:"RW",continent:"Africa",currency:"RWF",currencySymbol:"FRw",image:"https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=1600",description:"Clean and rapidly developing East African capital.",costs:{accommodation:{center:50,suburb:35},food:{budget:6,standard:18,premium:45},transport:25,coworking:140},visa:{type:"Remote Worker Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:14,minIncomeRequirement:1500},tax:{personalIncomeTaxTopRate:30,corporateTax:30,capitalGainsTax:5},infrastructure:{publicTransportQuality:65,healthcareQuality:70,englishProficiency:75,airportConnectivity:65},safety:{safetyIndex:75,crimeLevel:"Low"},macro:{inflationRate:6,currencyStability:"Medium",rentVolatilityIndex:5},digitalNomad:{overallScore:80,wifiSpeed:85,coworkingCost:140,safetyScore:75},tags:["clean","safe","emerging"],lastUpdated:"2026-03"},{id:"accra",lat:5.6037,lng:-.187,slug:"accra",name:"Accra",country:"Ghana",countryCode:"GH",continent:"Africa",currency:"GHS",currencySymbol:"₵",image:"https://images.unsplash.com/photo-1580661869408-55ab23f2c6c3?w=1600",description:"West African capital with growing entrepreneurial scene.",costs:{accommodation:{center:60,suburb:40},food:{budget:7,standard:20,premium:55},transport:30,coworking:150},visa:{type:"Tourist / Residence Permit",remoteFriendly:!0,stayDurationMonths:3,processingTimeDays:21,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:35,corporateTax:25,capitalGainsTax:15},infrastructure:{publicTransportQuality:55,healthcareQuality:60,englishProficiency:90,airportConnectivity:70},safety:{safetyIndex:60,crimeLevel:"Moderate"},macro:{inflationRate:20,currencyStability:"Low",rentVolatilityIndex:8},digitalNomad:{overallScore:70,wifiSpeed:95,coworkingCost:150,safetyScore:60},tags:["emerging","english-speaking","entrepreneurial"],lastUpdated:"2026-03"},{id:"porto",slug:"porto",lat:41.1579,lng:-8.6291,name:"Porto",country:"Portugal",countryCode:"PT",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1600",description:"Portugal's second city — charming, affordable and booming with digital nomads.",costs:{accommodation:{center:70,suburb:45},food:{budget:12,standard:28,premium:70},transport:40,coworking:150},visa:{type:"Portugal D8 Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:2836},tax:{personalIncomeTaxTopRate:48,corporateTax:21,capitalGainsTax:28},infrastructure:{publicTransportQuality:75,healthcareQuality:82,englishProficiency:72,airportConnectivity:80},safety:{safetyIndex:82,crimeLevel:"Low"},macro:{inflationRate:3.2,currencyStability:"High",rentVolatilityIndex:6.5},digitalNomad:{overallScore:87,wifiSpeed:150,coworkingCost:150,safetyScore:82},tags:["affordable","culture","nomad-hub","historic"],lastUpdated:"2026-03"},{id:"tallinn",slug:"tallinn",lat:59.437,lng:24.7536,name:"Tallinn",country:"Estonia",countryCode:"EE",continent:"Europe",currency:"EUR",currencySymbol:"€",image:"https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1600",description:"Europe's most digital city — Estonia pioneered the e-residency and digital nomad visa.",costs:{accommodation:{center:75,suburb:50},food:{budget:14,standard:30,premium:75},transport:45,coworking:200},visa:{type:"Estonia Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:4500},tax:{personalIncomeTaxTopRate:20,corporateTax:20,capitalGainsTax:20},infrastructure:{publicTransportQuality:78,healthcareQuality:80,englishProficiency:85,airportConnectivity:72},safety:{safetyIndex:88,crimeLevel:"Low"},macro:{inflationRate:4.1,currencyStability:"High",rentVolatilityIndex:5.5},digitalNomad:{overallScore:89,wifiSpeed:180,coworkingCost:200,safetyScore:88},tags:["tech-hub","safe","nomad-friendly","english-speaking"],lastUpdated:"2026-03"},{id:"tbilisi",slug:"tbilisi",lat:41.6938,lng:44.8015,name:"Tbilisi",country:"Georgia",countryCode:"GE",continent:"Asia",currency:"GEL",currencySymbol:"₾",image:"https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1600",description:"The rising star of nomad destinations — visa-free for most nationalities, ultra-affordable.",costs:{accommodation:{center:35,suburb:22},food:{budget:8,standard:18,premium:50},transport:20,coworking:80},visa:{type:"Visa-Free 365 Days",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:0,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:20,corporateTax:15,capitalGainsTax:5},infrastructure:{publicTransportQuality:62,healthcareQuality:65,englishProficiency:50,airportConnectivity:68},safety:{safetyIndex:80,crimeLevel:"Low"},macro:{inflationRate:5.5,currencyStability:"Medium",rentVolatilityIndex:7},digitalNomad:{overallScore:84,wifiSpeed:80,coworkingCost:80,safetyScore:80},tags:["affordable","nomad-hub","emerging","culture"],lastUpdated:"2026-03"},{id:"kuala-lumpur",slug:"kuala-lumpur",lat:3.139,lng:101.6869,name:"Kuala Lumpur",country:"Malaysia",countryCode:"MY",continent:"Asia",currency:"MYR",currencySymbol:"RM",image:"https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1600",description:"Southeast Asia's most underrated city — modern infrastructure at budget prices.",costs:{accommodation:{center:55,suburb:35},food:{budget:8,standard:18,premium:55},transport:50,coworking:120},visa:{type:"Malaysia DE Rantau Nomad Pass",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:2400},tax:{personalIncomeTaxTopRate:30,corporateTax:24,capitalGainsTax:0},infrastructure:{publicTransportQuality:80,healthcareQuality:82,englishProficiency:78,airportConnectivity:92},safety:{safetyIndex:72,crimeLevel:"Moderate"},macro:{inflationRate:3.1,currencyStability:"Medium",rentVolatilityIndex:4.5},digitalNomad:{overallScore:83,wifiSpeed:130,coworkingCost:120,safetyScore:72},tags:["affordable","tech-hub","food","nomad-friendly"],lastUpdated:"2026-03"},{id:"ho-chi-minh",slug:"ho-chi-minh",lat:10.8231,lng:106.6297,name:"Ho Chi Minh City",country:"Vietnam",countryCode:"VN",continent:"Asia",currency:"VND",currencySymbol:"₫",image:"https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1600",description:"Vietnam's economic hub — buzzing energy, great food and one of Asia's lowest costs.",costs:{accommodation:{center:40,suburb:25},food:{budget:7,standard:15,premium:45},transport:25,coworking:90},visa:{type:"E-Visa 90 Days",remoteFriendly:!1,stayDurationMonths:3,processingTimeDays:3,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:35,corporateTax:20,capitalGainsTax:20},infrastructure:{publicTransportQuality:58,healthcareQuality:68,englishProficiency:45,airportConnectivity:82},safety:{safetyIndex:68,crimeLevel:"Low"},macro:{inflationRate:3.8,currencyStability:"Medium",rentVolatilityIndex:5.5},digitalNomad:{overallScore:79,wifiSpeed:90,coworkingCost:90,safetyScore:68},tags:["affordable","food","nomad-hub","emerging"],lastUpdated:"2026-03"},{id:"sydney",slug:"sydney",lat:-33.8688,lng:151.2093,name:"Sydney",country:"Australia",countryCode:"AU",continent:"Oceania",currency:"AUD",currencySymbol:"A$",image:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600",description:"World-class city with stunning harbours — high cost offset by exceptional quality of life.",costs:{accommodation:{center:170,suburb:110},food:{budget:22,standard:45,premium:110},transport:130,coworking:350},visa:{type:"Working Holiday / Skilled Visa",remoteFriendly:!1,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:45,corporateTax:30,capitalGainsTax:23},infrastructure:{publicTransportQuality:82,healthcareQuality:90,englishProficiency:100,airportConnectivity:90},safety:{safetyIndex:85,crimeLevel:"Low"},macro:{inflationRate:3.5,currencyStability:"High",rentVolatilityIndex:7.5},digitalNomad:{overallScore:80,wifiSpeed:150,coworkingCost:350,safetyScore:85},tags:["safe","english-speaking","beach","tech-hub"],lastUpdated:"2026-03"},{id:"melbourne",slug:"melbourne",lat:-37.8136,lng:144.9631,name:"Melbourne",country:"Australia",countryCode:"AU",continent:"Oceania",currency:"AUD",currencySymbol:"A$",image:"https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1600",description:"Australia's cultural capital — world's most liveable city for good reason.",costs:{accommodation:{center:155,suburb:100},food:{budget:20,standard:42,premium:100},transport:120,coworking:320},visa:{type:"Working Holiday / Skilled Visa",remoteFriendly:!1,stayDurationMonths:12,processingTimeDays:60,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:45,corporateTax:30,capitalGainsTax:23},infrastructure:{publicTransportQuality:80,healthcareQuality:90,englishProficiency:100,airportConnectivity:87},safety:{safetyIndex:87,crimeLevel:"Low"},macro:{inflationRate:3.3,currencyStability:"High",rentVolatilityIndex:7},digitalNomad:{overallScore:81,wifiSpeed:145,coworkingCost:320,safetyScore:87},tags:["safe","english-speaking","culture","startup-hub"],lastUpdated:"2026-03"},{id:"toronto",slug:"toronto",lat:43.6532,lng:-79.3832,name:"Toronto",country:"Canada",countryCode:"CA",continent:"North America",currency:"CAD",currencySymbol:"C$",image:"https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1600",description:"Canada's largest city — multicultural, safe and one of the world's top expat destinations.",costs:{accommodation:{center:160,suburb:105},food:{budget:20,standard:42,premium:100},transport:110,coworking:380},visa:{type:"Canada Start-Up / Work Permit",remoteFriendly:!1,stayDurationMonths:6,processingTimeDays:90,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:53,corporateTax:26,capitalGainsTax:27},infrastructure:{publicTransportQuality:80,healthcareQuality:88,englishProficiency:100,airportConnectivity:90},safety:{safetyIndex:82,crimeLevel:"Low"},macro:{inflationRate:3.4,currencyStability:"High",rentVolatilityIndex:8},digitalNomad:{overallScore:77,wifiSpeed:180,coworkingCost:380,safetyScore:82},tags:["safe","english-speaking","multicultural","startup-hub"],lastUpdated:"2026-03"},{id:"miami",slug:"miami",lat:25.7617,lng:-80.1918,name:"Miami",country:"United States",countryCode:"US",continent:"North America",currency:"USD",currencySymbol:"$",image:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1600",description:"The gateway to Latin America — sun, tech scene and no state income tax.",costs:{accommodation:{center:175,suburb:120},food:{budget:22,standard:48,premium:115},transport:90,coworking:420},visa:{type:"No Digital Nomad Visa",remoteFriendly:!1,stayDurationMonths:6,processingTimeDays:90,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:37,corporateTax:21,capitalGainsTax:20},infrastructure:{publicTransportQuality:65,healthcareQuality:85,englishProficiency:100,airportConnectivity:92},safety:{safetyIndex:68,crimeLevel:"Moderate"},macro:{inflationRate:3.6,currencyStability:"High",rentVolatilityIndex:9},digitalNomad:{overallScore:74,wifiSpeed:200,coworkingCost:420,safetyScore:68},tags:["finance","startup-hub","beach","nightlife"],lastUpdated:"2026-03"},{id:"bogota",slug:"bogota",lat:4.711,lng:-74.0721,name:"Bogotá",country:"Colombia",countryCode:"CO",continent:"South America",currency:"COP",currencySymbol:"COP$",image:"https://images.unsplash.com/photo-1590516878787-73584f29eca3?w=1600",description:"Colombia's capital reborn — thriving nomad scene, great coffee and modern infrastructure.",costs:{accommodation:{center:45,suburb:28},food:{budget:7,standard:16,premium:45},transport:30,coworking:100},visa:{type:"Colombia Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:24,processingTimeDays:30,minIncomeRequirement:750},tax:{personalIncomeTaxTopRate:39,corporateTax:35,capitalGainsTax:10},infrastructure:{publicTransportQuality:68,healthcareQuality:72,englishProficiency:38,airportConnectivity:75},safety:{safetyIndex:55,crimeLevel:"Moderate"},macro:{inflationRate:6.5,currencyStability:"Medium",rentVolatilityIndex:7},digitalNomad:{overallScore:74,wifiSpeed:85,coworkingCost:100,safetyScore:55},tags:["affordable","nomad-hub","emerging","culture"],lastUpdated:"2026-03"},{id:"sao-paulo",slug:"sao-paulo",lat:-23.5505,lng:-46.6333,name:"São Paulo",country:"Brazil",countryCode:"BR",continent:"South America",currency:"BRL",currencySymbol:"R$",image:"https://images.unsplash.com/photo-1549049950-48d5887197a0?w=1600",description:"Latin America's largest startup ecosystem — the city that never stops.",costs:{accommodation:{center:60,suburb:38},food:{budget:8,standard:18,premium:55},transport:40,coworking:130},visa:{type:"Brazil Digital Nomad Visa",remoteFriendly:!0,stayDurationMonths:12,processingTimeDays:30,minIncomeRequirement:1500},tax:{personalIncomeTaxTopRate:27,corporateTax:34,capitalGainsTax:15},infrastructure:{publicTransportQuality:72,healthcareQuality:70,englishProficiency:40,airportConnectivity:85},safety:{safetyIndex:50,crimeLevel:"High"},macro:{inflationRate:4.8,currencyStability:"Medium",rentVolatilityIndex:6.5},digitalNomad:{overallScore:70,wifiSpeed:100,coworkingCost:130,safetyScore:50},tags:["startup-hub","food","nightlife","emerging"],lastUpdated:"2026-03"},{id:"warsaw",slug:"warsaw",lat:52.2297,lng:21.0122,name:"Warsaw",country:"Poland",countryCode:"PL",continent:"Europe",currency:"PLN",currencySymbol:"zł",image:"https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1600",description:"Central Europe's rising tech hub — fast internet, low costs and EU freedom of movement.",costs:{accommodation:{center:70,suburb:45},food:{budget:11,standard:24,premium:60},transport:35,coworking:180},visa:{type:"EU Freedom of Movement",remoteFriendly:!1,stayDurationMonths:3,processingTimeDays:0,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:32,corporateTax:19,capitalGainsTax:19},infrastructure:{publicTransportQuality:82,healthcareQuality:78,englishProficiency:72,airportConnectivity:80},safety:{safetyIndex:79,crimeLevel:"Low"},macro:{inflationRate:4.2,currencyStability:"Medium",rentVolatilityIndex:6},digitalNomad:{overallScore:80,wifiSpeed:170,coworkingCost:180,safetyScore:79},tags:["affordable","tech-hub","historic","emerging"],lastUpdated:"2026-03"},{id:"los-angeles",slug:"los-angeles",lat:34.0522,lng:-118.2437,name:"Los Angeles",country:"United States",countryCode:"US",continent:"North America",currency:"USD",currencySymbol:"$",image:"https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=1600",description:"The creative capital of the world — entertainment, tech and endless sunshine.",costs:{accommodation:{center:190,suburb:130},food:{budget:23,standard:50,premium:120},transport:100,coworking:440},visa:{type:"No Digital Nomad Visa",remoteFriendly:!1,stayDurationMonths:6,processingTimeDays:90,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:37,corporateTax:21,capitalGainsTax:20},infrastructure:{publicTransportQuality:60,healthcareQuality:87,englishProficiency:100,airportConnectivity:95},safety:{safetyIndex:62,crimeLevel:"Moderate"},macro:{inflationRate:3.5,currencyStability:"High",rentVolatilityIndex:9.5},digitalNomad:{overallScore:70,wifiSpeed:220,coworkingCost:440,safetyScore:62},tags:["startup-hub","arts","beach","nightlife"],lastUpdated:"2026-03"},{id:"lagos",slug:"lagos",lat:6.5244,lng:3.3792,name:"Lagos",country:"Nigeria",countryCode:"NG",continent:"Africa",currency:"NGN",currencySymbol:"₦",image:"https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1600",description:"Africa's largest startup ecosystem and economic powerhouse — raw energy, massive opportunity.",costs:{accommodation:{center:55,suburb:30},food:{budget:6,standard:14,premium:45},transport:30,coworking:85},visa:{type:"Nigeria Visa on Arrival",remoteFriendly:!1,stayDurationMonths:1,processingTimeDays:7,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:24,corporateTax:30,capitalGainsTax:10},infrastructure:{publicTransportQuality:42,healthcareQuality:48,englishProficiency:85,airportConnectivity:72},safety:{safetyIndex:40,crimeLevel:"High"},macro:{inflationRate:18,currencyStability:"Low",rentVolatilityIndex:12},digitalNomad:{overallScore:55,wifiSpeed:40,coworkingCost:85,safetyScore:40},tags:["startup-hub","emerging","affordable","english-speaking"],lastUpdated:"2026-03"},{id:"lima",slug:"lima",lat:-12.0464,lng:-77.0428,name:"Lima",country:"Peru",countryCode:"PE",continent:"South America",currency:"PEN",currencySymbol:"S/",image:"https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1600",description:"South America's culinary capital — world-class food scene at bargain prices.",costs:{accommodation:{center:42,suburb:26},food:{budget:7,standard:16,premium:45},transport:28,coworking:95},visa:{type:"Tourist Visa 183 Days",remoteFriendly:!1,stayDurationMonths:6,processingTimeDays:0,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:30,corporateTax:29,capitalGainsTax:5},infrastructure:{publicTransportQuality:55,healthcareQuality:62,englishProficiency:38,airportConnectivity:75},safety:{safetyIndex:52,crimeLevel:"Moderate"},macro:{inflationRate:4.5,currencyStability:"Medium",rentVolatilityIndex:5.5},digitalNomad:{overallScore:71,wifiSpeed:70,coworkingCost:95,safetyScore:52},tags:["affordable","food","culture","emerging"],lastUpdated:"2026-03"},{id:"hanoi",slug:"hanoi",lat:21.0285,lng:105.8542,name:"Hanoi",country:"Vietnam",countryCode:"VN",continent:"Asia",currency:"VND",currencySymbol:"₫",image:"https://images.unsplash.com/photo-1528127269322-539801943592?w=1600",description:"Vietnam's ancient capital — slower pace, deep culture and ultra-low costs.",costs:{accommodation:{center:32,suburb:20},food:{budget:5,standard:12,premium:38},transport:20,coworking:70},visa:{type:"E-Visa 90 Days",remoteFriendly:!1,stayDurationMonths:3,processingTimeDays:3,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:35,corporateTax:20,capitalGainsTax:20},infrastructure:{publicTransportQuality:55,healthcareQuality:65,englishProficiency:40,airportConnectivity:78},safety:{safetyIndex:70,crimeLevel:"Low"},macro:{inflationRate:3.5,currencyStability:"Medium",rentVolatilityIndex:4.5},digitalNomad:{overallScore:78,wifiSpeed:75,coworkingCost:70,safetyScore:70},tags:["affordable","culture","food","historic"],lastUpdated:"2026-03"},{id:"montreal",slug:"montreal",lat:45.5017,lng:-73.5673,name:"Montréal",country:"Canada",countryCode:"CA",continent:"North America",currency:"CAD",currencySymbol:"C$",image:"https://images.unsplash.com/photo-1507992781348-310259076fe0?w=1600",description:"North America's most European city — bilingual, creative and more affordable than Toronto.",costs:{accommodation:{center:110,suburb:72},food:{budget:17,standard:36,premium:85},transport:90,coworking:280},visa:{type:"Canada Work Permit",remoteFriendly:!1,stayDurationMonths:6,processingTimeDays:90,minIncomeRequirement:0},tax:{personalIncomeTaxTopRate:53,corporateTax:26,capitalGainsTax:27},infrastructure:{publicTransportQuality:80,healthcareQuality:87,englishProficiency:95,airportConnectivity:85},safety:{safetyIndex:78,crimeLevel:"Low"},macro:{inflationRate:3.2,currencyStability:"High",rentVolatilityIndex:6.5},digitalNomad:{overallScore:77,wifiSpeed:165,coworkingCost:280,safetyScore:78},tags:["affordable","culture","startup-hub","english-speaking"],lastUpdated:"2026-03"}],ae=new Map;function ye(t){return t==null?void 0:t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").trim()}function Ie(t){if(!t)return null;let a=0;return a+=Math.min((t.processingTimeDays||0)/3,30),a+=Math.min((t.minIncomeRequirement||0)/200,30),t.stayDurationMonths<12?a+=20:t.stayDurationMonths<=24?a+=10:a+=5,a+=t.remoteFriendly?5:20,Math.min(Math.round(a),100)}function $e(t){var m,v,d,f,c,r,g,h,w,p;const a=(((m=t.infrastructure)==null?void 0:m.publicTransportQuality)||0)*.2+(((v=t.infrastructure)==null?void 0:v.healthcareQuality)||0)*.1+(((d=t.infrastructure)==null?void 0:d.englishProficiency)||0)*.15+(((f=t.infrastructure)==null?void 0:f.airportConnectivity)||0)*.1,e=(((c=t.safety)==null?void 0:c.safetyIndex)||0)*.2,n=((r=t.macro)==null?void 0:r.currencyStability)==="Very High"?10:((g=t.macro)==null?void 0:g.currencyStability)==="High"?8:((h=t.macro)==null?void 0:h.currencyStability)==="Medium"?5:2,o=Math.min(((w=t.macro)==null?void 0:w.inflationRate)||0,50)*.2,i=(p=t.visa)!=null&&p.remoteFriendly?10:0;let s=a+e+n+i-o;return Math.max(0,Math.min(100,Math.round(s)))}function Le(t){var m,v,d,f,c,r,g;if(!t)return 0;const a=100-Math.min((t.costs.accommodation.center*30+t.costs.food.standard*30+t.costs.transport+t.costs.coworking)/50,100),e=((m=t.safety)==null?void 0:m.safetyIndex)||0,n=(((v=t.infrastructure)==null?void 0:v.publicTransportQuality)+((d=t.infrastructure)==null?void 0:d.healthcareQuality)+((f=t.infrastructure)==null?void 0:f.englishProficiency)+((c=t.infrastructure)==null?void 0:c.airportConnectivity))/4,o=(r=t.visa)!=null&&r.remoteFriendly?85:40,i=Math.min(((g=t.macro)==null?void 0:g.inflationRate)||0,50);let s=a*.25+e*.25+n*.25+o*.15-i*.1;return Math.max(0,Math.min(100,Math.round(s)))}function Ee(t){var m,v,d,f,c,r,g,h;if(!t)return 0;const a=100-((((m=t.tax)==null?void 0:m.personalIncomeTaxTopRate)||0)+(((v=t.tax)==null?void 0:v.corporateTax)||0))/2,e=((d=t.macro)==null?void 0:d.currencyStability)==="Very High"?95:((f=t.macro)==null?void 0:f.currencyStability)==="High"?85:((c=t.macro)==null?void 0:c.currencyStability)==="Medium"?65:40,n=(((r=t.macro)==null?void 0:r.rentVolatilityIndex)||0)*5,o=((g=t.safety)==null?void 0:g.safetyIndex)||0,i=(h=t.visa)!=null&&h.remoteFriendly?90:50;let s=a*.2+e*.2+o*.2+i*.2-n*.1;return Math.max(0,Math.min(100,Math.round(s)))}function ce(t){var e,n;if(!t)return null;if(ae.has(t.slug))return ae.get(t.slug);const a={...t,digitalNomad:{...t.digitalNomad,overallScore:$e(t),coworkingCost:(e=t.costs)==null?void 0:e.coworking,safetyScore:(n=t.safety)==null?void 0:n.safetyIndex},visaComplexityScore:Ie(t.visa),tripCostIndex:Le(t),relocationScore:Ee(t)};return ae.set(t.slug,a),a}function H(){return te.map(ce)}function re(t){const a=te.find(e=>e.slug===t)||null;return ce(a)}function ze(t){return t?te.filter(a=>ye(a.country)===t).map(ce):[]}function Me(){const t={};return te.forEach(a=>{const e=ye(a.country);t[e]||(t[e]={name:a.country,slug:e})}),Object.values(t).sort((a,e)=>a.name.localeCompare(e.name))}function Re(t=10){return H().sort((a,e)=>e.digitalNomad.overallScore-a.digitalNomad.overallScore).slice(0,t)}function W(t,a="$"){return`${a}${t.toLocaleString()}`}function Ae(){const t=Re(6),a=H().length,e=t.map((f,c)=>{const r=f.costs.accommodation.center*30+f.costs.food.standard*30+f.costs.transport+f.costs.coworking,g=f.digitalNomad.overallScore>=85?"#10b981":f.digitalNomad.overallScore>=70?"#f59e0b":"#6366f1";return`
      <a href="/city/${f.slug}" data-link class="home-city-card" style="animation-delay:${c*80}ms">
        <div class="home-city-card__img-wrap">
          <img src="${f.image}" alt="${f.name}" loading="lazy" />
          <div class="home-city-card__overlay"></div>
          <div class="home-city-card__badge" style="background:${g}">
            ${f.digitalNomad.overallScore}<span>/100</span>
          </div>
        </div>
        <div class="home-city-card__body">
          <div class="home-city-card__meta">
            <h3>${f.name}</h3>
            <p>${f.country}</p>
          </div>
          <div class="home-city-card__price">
            <span class="home-city-card__price-label">From</span>
            <span class="home-city-card__price-value">$${Math.round(r).toLocaleString()}<em>/mo</em></span>
          </div>
        </div>
      </a>
    `}).join(""),o=[{value:`${a}+`,label:"Cities"},{value:"12+",label:"Cost categories"},{value:"3",label:"Lifestyle levels"},{value:"100%",label:"Free"}].map(f=>`
    <div class="home-stat">
      <strong>${f.value}</strong>
      <span>${f.label}</span>
    </div>
  `).join(""),s=[{num:"01",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',title:"Choose your cities",desc:"Browse 33+ destinations across Europe, Asia, Americas and the Middle East."},{num:"02",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',title:"Set your budget",desc:"Enter your income and lifestyle preferences — from budget backpacker to comfortable expat."},{num:"03",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',title:"Get your report",desc:"See real purchasing power, visa info, tax pressure and quality-of-life scores side by side."}].map(f=>`
    <div class="home-step">
      <div class="home-step__num">${f.num}</div>
      <div class="home-step__icon">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  `).join(""),v=[{emoji:"💻",label:"Remote workers",desc:"Find your perfect base with fast WiFi and coworking."},{emoji:"✈️",label:"Expats & families",desc:"Plan a real relocation with full cost breakdowns."},{emoji:"🌍",label:"Digital nomads",desc:"Rank cities by nomad score and visa friendliness."}].map(f=>`
    <div class="home-profile">
      <div class="home-profile__emoji">${f.emoji}</div>
      <h4>${f.label}</h4>
      <p>${f.desc}</p>
    </div>
  `).join(""),d=`
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
            Compare monthly living costs across ${a}+ cities worldwide.
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
      <div class="container">${o}</div>
    </section>

    <!-- FOR WHO -->
    <section class="home-profiles">
      <div class="container">
        <div class="home-section-header">
          <span class="home-section-header__eyebrow">Who it's for</span>
          <h2>Built for people who move</h2>
          <p>Whether you're planning a full relocation or just exploring options, TripCost gives you the numbers to decide with confidence.</p>
        </div>
        <div class="home-profiles__grid">${v}</div>
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
        <div class="home-steps">${s}</div>
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
        <div class="home-cities__grid">${e}</div>
        <div style="text-align:center;margin-top:40px">
          <a href="/destinations" data-link class="btn btn--secondary btn--lg">
            View all ${a} destinations →
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
  `;return A(d)}function De(){const t=document.getElementById("world-map");if(t){if(!document.getElementById("leaflet-css")){const a=document.createElement("link");a.id="leaflet-css",a.rel="stylesheet",a.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",document.head.appendChild(a)}Ce(async()=>{const{default:a}=await import("./leaflet-src-DoEXxWUO.js").then(e=>e.l);return{default:a}},[]).then(({default:a})=>{const e=a.map("world-map",{center:[20,15],zoom:2,minZoom:2,maxZoom:6,zoomControl:!0,attributionControl:!0,scrollWheelZoom:!1});a.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap © CARTO",subdomains:"abcd",maxZoom:19}).addTo(e),H().forEach(o=>{var c,r;if(!o.lat||!o.lng)return;const i=((c=o.digitalNomad)==null?void 0:c.overallScore)??70,s=i>=85?"#10b981":i>=70?"#f59e0b":"#6366f1",m=Math.round(o.costs.accommodation.center*30+o.costs.food.standard*30+o.costs.transport+o.costs.coworking),v=a.divIcon({className:"",iconSize:[20,20],iconAnchor:[10,10],popupAnchor:[0,-14],html:`
          <div style="
            width:16px;height:16px;border-radius:50%;
            background:${s};
            border:2px solid rgba(255,255,255,0.8);
            box-shadow:0 0 0 4px ${s}44, 0 2px 8px rgba(0,0,0,0.4);
            cursor:pointer;
            transition:transform 0.15s;
          "></div>
        `}),d=a.marker([o.lat,o.lng],{icon:v}).addTo(e),f=`
        <div class="map-popup">
          <img class="map-popup__img" src="${o.image}" alt="${o.name}" loading="lazy" />
          <div class="map-popup__city">${o.name}</div>
          <div class="map-popup__country">${o.country}</div>
          <div class="map-popup__row">
            <span class="map-popup__label">Monthly budget</span>
            <span class="map-popup__val">~$${m.toLocaleString()}/mo</span>
          </div>
          <div class="map-popup__row">
            <span class="map-popup__label">Nomad score</span>
            <span class="map-popup__score" style="background:${s}">${i}/100</span>
          </div>
          <div class="map-popup__row">
            <span class="map-popup__label">Visa</span>
            <span class="map-popup__val" style="font-size:11px">${(r=o.visa)!=null&&r.remoteFriendly?"✅ Nomad friendly":"⬜ Standard"}</span>
          </div>
          <a class="map-popup__link" href="/city/${o.slug}" data-link>
            Explore ${o.name} →
          </a>
        </div>
      `;d.bindPopup(f,{maxWidth:220,className:"map-popup-container"}),d.on("mouseover",function(){this.openPopup()})}),t.addEventListener("click",o=>{const i=o.target.closest("[data-link]");i&&(o.preventDefault(),window.history.pushState({},"",i.getAttribute("href")),window.dispatchEvent(new PopStateEvent("popstate")))})})}}const ee="https://tripcost.co";function Y({title:t,description:a,canonical:e,jsonLd:n,image:o}){const i=t?`${t} | TripCost`:"TripCost — Free Cost of Living Calculator";document.title=i,j("name","description",a||"Compare monthly living costs across 50+ cities worldwide. Free tool for expats, remote workers and digital nomads.");const s=e?`${ee}${e}`:`${ee}${window.location.pathname}`;let m=document.querySelector('link[rel="canonical"]');if(m||(m=document.createElement("link"),m.rel="canonical",document.head.appendChild(m)),m.href=s,j("property","og:title",i),j("property","og:description",a||""),j("property","og:url",s),j("property","og:image",o||`${ee}/og-image.png`),j("property","og:type","website"),j("name","twitter:title",i),j("name","twitter:description",a||""),j("name","twitter:image",o||`${ee}/og-image.png`),n){xe("page-jsonld");const v=document.createElement("script");v.type="application/ld+json",v.id="page-jsonld",v.textContent=JSON.stringify(n),document.head.appendChild(v)}}function j(t,a,e){let n=document.querySelector(`meta[${t}="${a}"]`);n||(n=document.createElement("meta"),n.setAttribute(t,a),document.head.appendChild(n)),n.setAttribute("content",e)}function xe(t){const a=document.getElementById(t);a&&a.remove()}function G(t,a){xe(t);const e=document.createElement("script");e.type="application/ld+json",e.id=t,e.textContent=JSON.stringify(a),document.head.appendChild(e)}const le=[{slug:"portugal",name:"Portugal",continent:"Europe",region:"Southern Europe",currency:"EUR",language:"Portuguese",timezone:"GMT+0",macro:{safetyIndex:82,healthcareIndex:85,infrastructureScore:78,costOfLivingIndex:65,qualityOfLifeIndex:84},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:70},nomad:{digitalNomadVisa:!0,visaEaseScore:80,avgInternetSpeed:120,coworkingDensityScore:75},family:{educationScore:78,familySafetyScore:83,suburbanAffordabilityScore:72},assets:{heroImage:"/images/countries/portugal.webp",flagEmoji:"🇵🇹"},seo:{metaTitle:"Living in Portugal – Cost of Living & Quality of Life",metaDescription:"Explore cost of living, healthcare, safety, and digital nomad opportunities in Portugal."}},{slug:"spain",name:"Spain",continent:"Europe",region:"Southern Europe",currency:"EUR",language:"Spanish",timezone:"GMT+1",macro:{safetyIndex:78,healthcareIndex:83,infrastructureScore:80,costOfLivingIndex:68,qualityOfLifeIndex:82},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:65},nomad:{digitalNomadVisa:!0,visaEaseScore:75,avgInternetSpeed:110,coworkingDensityScore:70},family:{educationScore:76,familySafetyScore:80,suburbanAffordabilityScore:70},assets:{heroImage:"/images/countries/spain.webp",flagEmoji:"🇪🇸"},seo:{metaTitle:"Living in Spain – Cost of Living & Lifestyle Overview",metaDescription:"Discover the best cities and lifestyle insights for living in Spain."}},{slug:"france",name:"France",continent:"Europe",region:"Western Europe",currency:"EUR",language:"French",timezone:"GMT+1",macro:{safetyIndex:74,healthcareIndex:88,infrastructureScore:85,costOfLivingIndex:75,qualityOfLifeIndex:83},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:55},nomad:{digitalNomadVisa:!1,visaEaseScore:60,avgInternetSpeed:140,coworkingDensityScore:78},family:{educationScore:85,familySafetyScore:76,suburbanAffordabilityScore:65},assets:{heroImage:"/images/countries/france.webp",flagEmoji:"🇫🇷"},seo:{metaTitle:"Living in France – Cost of Living & Family Guide",metaDescription:"Explore living costs, safety, and lifestyle conditions in France."}},{slug:"germany",name:"Germany",continent:"Europe",region:"Western Europe",currency:"EUR",language:"German",timezone:"GMT+1",macro:{safetyIndex:80,healthcareIndex:87,infrastructureScore:90,costOfLivingIndex:72,qualityOfLifeIndex:86},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:60},nomad:{digitalNomadVisa:!1,visaEaseScore:65,avgInternetSpeed:150,coworkingDensityScore:82},family:{educationScore:88,familySafetyScore:82,suburbanAffordabilityScore:70},assets:{heroImage:"/images/countries/germany.webp",flagEmoji:"🇩🇪"},seo:{metaTitle:"Living in Germany – Cost of Living & Infrastructure Overview",metaDescription:"Discover safety, healthcare, and digital work conditions in Germany."}},{slug:"italy",name:"Italy",continent:"Europe",region:"Southern Europe",currency:"EUR",language:"Italian",timezone:"GMT+1",macro:{safetyIndex:75,healthcareIndex:82,infrastructureScore:77,costOfLivingIndex:70,qualityOfLifeIndex:81},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:58},nomad:{digitalNomadVisa:!0,visaEaseScore:70,avgInternetSpeed:100,coworkingDensityScore:65},family:{educationScore:79,familySafetyScore:77,suburbanAffordabilityScore:68},assets:{heroImage:"/images/countries/italy.webp",flagEmoji:"🇮🇹"},seo:{metaTitle:"Living in Italy – Cost of Living & Lifestyle Guide",metaDescription:"Explore lifestyle, safety, and digital nomad options in Italy."}},{slug:"netherlands",name:"Netherlands",continent:"Europe",region:"Western Europe",currency:"EUR",language:"Dutch",timezone:"GMT+1",macro:{safetyIndex:85,healthcareIndex:89,infrastructureScore:92,costOfLivingIndex:78,qualityOfLifeIndex:90},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:62},nomad:{digitalNomadVisa:!1,visaEaseScore:70,avgInternetSpeed:160,coworkingDensityScore:88},family:{educationScore:90,familySafetyScore:87,suburbanAffordabilityScore:65},assets:{heroImage:"/images/countries/netherlands.webp",flagEmoji:"🇳🇱"},seo:{metaTitle:"Living in the Netherlands – Cost & Quality of Life",metaDescription:"Explore safety, infrastructure, and lifestyle in the Netherlands."}},{slug:"switzerland",name:"Switzerland",continent:"Europe",region:"Western Europe",currency:"CHF",language:"German",timezone:"GMT+1",macro:{safetyIndex:92,healthcareIndex:94,infrastructureScore:95,costOfLivingIndex:95,qualityOfLifeIndex:95},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"low",taxFriendlinessScore:80},nomad:{digitalNomadVisa:!1,visaEaseScore:65,avgInternetSpeed:170,coworkingDensityScore:75},family:{educationScore:93,familySafetyScore:92,suburbanAffordabilityScore:55},assets:{heroImage:"/images/countries/switzerland.webp",flagEmoji:"🇨🇭"},seo:{metaTitle:"Living in Switzerland – High Quality of Life",metaDescription:"Discover cost of living and lifestyle insights in Switzerland."}},{slug:"united-states",name:"United States",continent:"North America",region:"North America",currency:"USD",language:"English",timezone:"Multiple",macro:{safetyIndex:65,healthcareIndex:75,infrastructureScore:82,costOfLivingIndex:80,qualityOfLifeIndex:78},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:68},nomad:{digitalNomadVisa:!1,visaEaseScore:60,avgInternetSpeed:180,coworkingDensityScore:90},family:{educationScore:82,familySafetyScore:68,suburbanAffordabilityScore:60},assets:{heroImage:"/images/countries/united-states.webp",flagEmoji:"🇺🇸"},seo:{metaTitle:"Living in the United States – Cost & Lifestyle",metaDescription:"Explore cost of living and lifestyle conditions in the USA."}},{slug:"canada",name:"Canada",continent:"North America",region:"North America",currency:"CAD",language:"English",timezone:"Multiple",macro:{safetyIndex:85,healthcareIndex:88,infrastructureScore:84,costOfLivingIndex:82,qualityOfLifeIndex:90},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:60},nomad:{digitalNomadVisa:!1,visaEaseScore:65,avgInternetSpeed:150,coworkingDensityScore:70},family:{educationScore:88,familySafetyScore:87,suburbanAffordabilityScore:62},assets:{heroImage:"/images/countries/canada.webp",flagEmoji:"🇨🇦"},seo:{metaTitle:"Living in Canada – Cost of Living & Quality of Life",metaDescription:"Discover safety, healthcare, and living conditions in Canada."}},{slug:"sweden",name:"Sweden",continent:"Europe",region:"Northern Europe",currency:"SEK",language:"Swedish",timezone:"GMT+1",macro:{safetyIndex:88,healthcareIndex:91,infrastructureScore:92,costOfLivingIndex:88,qualityOfLifeIndex:94},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:55},nomad:{digitalNomadVisa:!1,visaEaseScore:70,avgInternetSpeed:175,coworkingDensityScore:82},family:{educationScore:93,familySafetyScore:90,suburbanAffordabilityScore:58},assets:{heroImage:"/images/countries/sweden.webp",flagEmoji:"🇸🇪"},seo:{metaTitle:"Living in Sweden – Cost of Living & Quality of Life",metaDescription:"Explore safety, healthcare and lifestyle insights in Sweden."}},{slug:"denmark",name:"Denmark",continent:"Europe",region:"Northern Europe",currency:"DKK",language:"Danish",timezone:"GMT+1",macro:{safetyIndex:90,healthcareIndex:92,infrastructureScore:93,costOfLivingIndex:90,qualityOfLifeIndex:95},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:54},nomad:{digitalNomadVisa:!1,visaEaseScore:72,avgInternetSpeed:170,coworkingDensityScore:78},family:{educationScore:92,familySafetyScore:91,suburbanAffordabilityScore:57},assets:{heroImage:"/images/countries/denmark.webp",flagEmoji:"🇩🇰"},seo:{metaTitle:"Living in Denmark – Lifestyle & Living Costs",metaDescription:"Discover cost of living and lifestyle in Denmark."}},{slug:"norway",name:"Norway",continent:"Europe",region:"Northern Europe",currency:"NOK",language:"Norwegian",timezone:"GMT+1",macro:{safetyIndex:91,healthcareIndex:93,infrastructureScore:90,costOfLivingIndex:92,qualityOfLifeIndex:96},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:56},nomad:{digitalNomadVisa:!1,visaEaseScore:68,avgInternetSpeed:160,coworkingDensityScore:70},family:{educationScore:94,familySafetyScore:92,suburbanAffordabilityScore:55},assets:{heroImage:"/images/countries/norway.webp",flagEmoji:"🇳🇴"},seo:{metaTitle:"Living in Norway – Quality of Life Overview",metaDescription:"Explore lifestyle, safety and living costs in Norway."}},{slug:"austria",name:"Austria",continent:"Europe",region:"Central Europe",currency:"EUR",language:"German",timezone:"GMT+1",macro:{safetyIndex:86,healthcareIndex:89,infrastructureScore:88,costOfLivingIndex:78,qualityOfLifeIndex:88},tax:{incomeTaxLevel:"high",corporateTaxLevel:"medium",taxFriendlinessScore:60},nomad:{digitalNomadVisa:!1,visaEaseScore:75,avgInternetSpeed:155,coworkingDensityScore:72},family:{educationScore:89,familySafetyScore:87,suburbanAffordabilityScore:66},assets:{heroImage:"/images/countries/austria.webp",flagEmoji:"🇦🇹"},seo:{metaTitle:"Living in Austria – Cost & Lifestyle Guide",metaDescription:"Discover safety, healthcare and quality of life in Austria."}},{slug:"ireland",name:"Ireland",continent:"Europe",region:"Western Europe",currency:"EUR",language:"English",timezone:"GMT+0",macro:{safetyIndex:84,healthcareIndex:82,infrastructureScore:80,costOfLivingIndex:85,qualityOfLifeIndex:86},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"low",taxFriendlinessScore:75},nomad:{digitalNomadVisa:!1,visaEaseScore:78,avgInternetSpeed:150,coworkingDensityScore:68},family:{educationScore:88,familySafetyScore:85,suburbanAffordabilityScore:62},assets:{heroImage:"/images/countries/ireland.webp",flagEmoji:"🇮🇪"},seo:{metaTitle:"Living in Ireland – Cost of Living & Opportunities",metaDescription:"Explore lifestyle, tax system and living costs in Ireland."}},{slug:"poland",name:"Poland",continent:"Europe",region:"Central Europe",currency:"PLN",language:"Polish",timezone:"GMT+1",macro:{safetyIndex:80,healthcareIndex:75,infrastructureScore:78,costOfLivingIndex:60,qualityOfLifeIndex:75},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:68},nomad:{digitalNomadVisa:!1,visaEaseScore:80,avgInternetSpeed:140,coworkingDensityScore:65},family:{educationScore:78,familySafetyScore:82,suburbanAffordabilityScore:75},assets:{heroImage:"/images/countries/poland.webp",flagEmoji:"🇵🇱"},seo:{metaTitle:"Living in Poland – Affordable European Lifestyle",metaDescription:"Explore cost of living and quality of life in Poland."}},{slug:"japan",name:"Japan",continent:"Asia",region:"East Asia",currency:"JPY",language:"Japanese",timezone:"GMT+9",macro:{safetyIndex:94,healthcareIndex:90,infrastructureScore:95,costOfLivingIndex:75,qualityOfLifeIndex:90},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:65},nomad:{digitalNomadVisa:!1,visaEaseScore:60,avgInternetSpeed:190,coworkingDensityScore:85},family:{educationScore:94,familySafetyScore:93,suburbanAffordabilityScore:68},assets:{heroImage:"/images/countries/japan.webp",flagEmoji:"🇯🇵"},seo:{metaTitle:"Living in Japan – Cost & Lifestyle Insights",metaDescription:"Explore safety, infrastructure and cost of living in Japan."}},{slug:"south-korea",name:"South Korea",continent:"Asia",region:"East Asia",currency:"KRW",language:"Korean",timezone:"GMT+9",macro:{safetyIndex:88,healthcareIndex:88,infrastructureScore:92,costOfLivingIndex:70,qualityOfLifeIndex:84},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:64},nomad:{digitalNomadVisa:!0,visaEaseScore:75,avgInternetSpeed:210,coworkingDensityScore:80},family:{educationScore:90,familySafetyScore:86,suburbanAffordabilityScore:72},assets:{heroImage:"/images/countries/south-korea.webp",flagEmoji:"🇰🇷"},seo:{metaTitle:"Living in South Korea – Modern & Connected",metaDescription:"Explore lifestyle, cost and digital infrastructure in South Korea."}},{slug:"thailand",name:"Thailand",continent:"Asia",region:"Southeast Asia",currency:"THB",language:"Thai",timezone:"GMT+7",macro:{safetyIndex:72,healthcareIndex:78,infrastructureScore:70,costOfLivingIndex:50,qualityOfLifeIndex:75},tax:{incomeTaxLevel:"low",corporateTaxLevel:"medium",taxFriendlinessScore:78},nomad:{digitalNomadVisa:!0,visaEaseScore:85,avgInternetSpeed:150,coworkingDensityScore:85},family:{educationScore:70,familySafetyScore:75,suburbanAffordabilityScore:85},assets:{heroImage:"/images/countries/thailand.webp",flagEmoji:"🇹🇭"},seo:{metaTitle:"Living in Thailand – Affordable Nomad Hub",metaDescription:"Explore cost of living and digital nomad life in Thailand."}},{slug:"malaysia",name:"Malaysia",continent:"Asia",region:"Southeast Asia",currency:"MYR",language:"Malay",timezone:"GMT+8",macro:{safetyIndex:75,healthcareIndex:80,infrastructureScore:75,costOfLivingIndex:52,qualityOfLifeIndex:76},tax:{incomeTaxLevel:"low",corporateTaxLevel:"low",taxFriendlinessScore:82},nomad:{digitalNomadVisa:!0,visaEaseScore:88,avgInternetSpeed:140,coworkingDensityScore:80},family:{educationScore:72,familySafetyScore:78,suburbanAffordabilityScore:88},assets:{heroImage:"/images/countries/malaysia.webp",flagEmoji:"🇲🇾"},seo:{metaTitle:"Living in Malaysia – Affordable Lifestyle",metaDescription:"Explore cost of living and quality of life in Malaysia."}},{slug:"singapore",name:"Singapore",continent:"Asia",region:"Southeast Asia",currency:"SGD",language:"English",timezone:"GMT+8",macro:{safetyIndex:95,healthcareIndex:92,infrastructureScore:98,costOfLivingIndex:92,qualityOfLifeIndex:94},tax:{incomeTaxLevel:"low",corporateTaxLevel:"low",taxFriendlinessScore:90},nomad:{digitalNomadVisa:!1,visaEaseScore:80,avgInternetSpeed:220,coworkingDensityScore:95},family:{educationScore:95,familySafetyScore:94,suburbanAffordabilityScore:50},assets:{heroImage:"/images/countries/singapore.webp",flagEmoji:"🇸🇬"},seo:{metaTitle:"Living in Singapore – Global Hub",metaDescription:"Explore cost of living and lifestyle in Singapore."}},{slug:"mexico",name:"Mexico",continent:"North America",region:"Latin America",currency:"MXN",language:"Spanish",timezone:"Multiple",macro:{safetyIndex:55,healthcareIndex:65,infrastructureScore:68,costOfLivingIndex:48,qualityOfLifeIndex:68},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:70},nomad:{digitalNomadVisa:!0,visaEaseScore:90,avgInternetSpeed:120,coworkingDensityScore:78},family:{educationScore:65,familySafetyScore:58,suburbanAffordabilityScore:90},assets:{heroImage:"/images/countries/mexico.webp",flagEmoji:"🇲🇽"},seo:{metaTitle:"Living in Mexico – Affordable & Vibrant",metaDescription:"Explore cost of living and lifestyle opportunities in Mexico."}},{slug:"brazil",name:"Brazil",continent:"South America",region:"Latin America",currency:"BRL",language:"Portuguese",timezone:"GMT-3",macro:{safetyIndex:50,healthcareIndex:65,infrastructureScore:60,costOfLivingIndex:55,qualityOfLifeIndex:65},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:68},nomad:{digitalNomadVisa:!0,visaEaseScore:85,avgInternetSpeed:110,coworkingDensityScore:65},family:{educationScore:60,familySafetyScore:52,suburbanAffordabilityScore:88},assets:{heroImage:"/images/countries/brazil.webp",flagEmoji:"🇧🇷"},seo:{metaTitle:"Living in Brazil – Cost & Lifestyle",metaDescription:"Discover lifestyle and living costs in Brazil."}},{slug:"colombia",name:"Colombia",continent:"South America",region:"Latin America",currency:"COP",language:"Spanish",timezone:"GMT-5",macro:{safetyIndex:58,healthcareIndex:70,infrastructureScore:65,costOfLivingIndex:45,qualityOfLifeIndex:70},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:72},nomad:{digitalNomadVisa:!0,visaEaseScore:88,avgInternetSpeed:130,coworkingDensityScore:80},family:{educationScore:68,familySafetyScore:60,suburbanAffordabilityScore:90},assets:{heroImage:"/images/countries/colombia.webp",flagEmoji:"🇨🇴"},seo:{metaTitle:"Living in Colombia – Affordable & Dynamic",metaDescription:"Explore cost of living and lifestyle in Colombia."}},{slug:"uae",name:"United Arab Emirates",continent:"Middle East",region:"Gulf",currency:"AED",language:"Arabic",timezone:"GMT+4",macro:{safetyIndex:90,healthcareIndex:85,infrastructureScore:95,costOfLivingIndex:88,qualityOfLifeIndex:85},tax:{incomeTaxLevel:"none",corporateTaxLevel:"low",taxFriendlinessScore:95},nomad:{digitalNomadVisa:!0,visaEaseScore:90,avgInternetSpeed:200,coworkingDensityScore:88},family:{educationScore:85,familySafetyScore:90,suburbanAffordabilityScore:60},assets:{heroImage:"/images/countries/uae.webp",flagEmoji:"🇦🇪"},seo:{metaTitle:"Living in UAE – Tax Free Lifestyle",metaDescription:"Explore living conditions and tax benefits in the UAE."}},{slug:"south-africa",name:"South Africa",continent:"Africa",region:"Southern Africa",currency:"ZAR",language:"English",timezone:"GMT+2",macro:{safetyIndex:45,healthcareIndex:65,infrastructureScore:62,costOfLivingIndex:50,qualityOfLifeIndex:60},tax:{incomeTaxLevel:"medium",corporateTaxLevel:"medium",taxFriendlinessScore:70},nomad:{digitalNomadVisa:!0,visaEaseScore:80,avgInternetSpeed:100,coworkingDensityScore:60},family:{educationScore:60,familySafetyScore:50,suburbanAffordabilityScore:85},assets:{heroImage:"/images/countries/south-africa.webp",flagEmoji:"🇿🇦"},seo:{metaTitle:"Living in South Africa – Lifestyle Overview",metaDescription:"Explore cost of living and lifestyle insights in South Africa."}}];function Ne(t,a){var n;const e=le.find(o=>o.slug===t);return e&&((n=e.rankingWeights)==null?void 0:n[a])||null}function ve(t,a="solo"){const e=t.costs??{},n=e.accommodation??{},o=e.food??{},i=t.digitalNomad??{},s=n.center??0,m=n.suburb??0,v=o.standard??0,d=i.safetyScore??0,f=i.wifiSpeed??0,c=i.overallScore??0,r=s?1/s:0,g=m?1/m:0,h=v?1/v:0,w=(r+h)*1e3,p=(g+h)*1e3,x=Ne(t.countrySlug,a);if(x){const b=(a==="family"?p:w)*x.affordability+d*x.safety+f*x.internet+c*x.lifestyle;return Math.round(b)}let _=0;return a==="solo"?_=w*.25+d*.2+f*.25+c*.3:a==="family"?_=p*.3+d*.35+f*.1+c*.25:_=w*.3+d*.25+f*.2+c*.25,Math.round(_)}function Pe(){const t=new URLSearchParams(window.location.search),a=["solo","family","nomad"].includes(t.get("profile"))?t.get("profile"):"nomad",e=H().map(i=>({...i,score:ve(i,a)||0,monthly:Math.round(i.costs.accommodation.center*30+i.costs.food.standard*30+i.costs.transport+i.costs.coworking)})).sort((i,s)=>s.score-i.score),n=JSON.stringify(e.map(i=>{var s,m,v,d;return{slug:i.slug,name:i.name,country:i.country,continent:i.continent,image:i.image,score:i.score,monthly:i.monthly,nomadScore:((s=i.digitalNomad)==null?void 0:s.overallScore)??0,safetyIndex:((m=i.safety)==null?void 0:m.safetyIndex)??0,wifiSpeed:((v=i.digitalNomad)==null?void 0:v.wifiSpeed)??0,visaFriendly:((d=i.visa)==null?void 0:d.remoteFriendly)??!1,tags:i.tags??[],lat:i.lat,lng:i.lng}})),o=`
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
            ${e.length} destinations ranked by cost, safety, WiFi &amp; lifestyle.
          </p>
        </div>
      </section>

      <!-- FILTER BAR -->
      <div class="dest-filters" id="dest-filters">
        <div class="container">
          <div class="dest-filters__inner">

            <div class="dest-filters__group">
              <span class="dest-filters__label">Profile</span>
              <button class="filter-chip ${a==="nomad"?"is-active":""}" data-filter="profile" data-val="nomad">🌍 Nomad</button>
              <button class="filter-chip ${a==="solo"?"is-active":""}"  data-filter="profile" data-val="solo">👤 Solo</button>
              <button class="filter-chip ${a==="family"?"is-active":""}" data-filter="profile" data-val="family">👨‍👩‍👧 Family</button>
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
            Showing <span id="dest-count-num">${e.length}</span> cities
          </div>
        </div>
        <div class="dest-grid" id="dest-grid"></div>
      </div>

    </div>

    <script id="dest-data" type="application/json">${n}<\/script>
  `;return Y({title:"Cost of Living by City — 50+ Destinations for Expats & Nomads",description:"Browse and filter 50+ cities by region, budget and lifestyle. Compare cost of living, safety, WiFi and visa options worldwide.",canonical:"/destinations"}),G("page-jsonld",{"@context":"https://schema.org","@type":"CollectionPage",name:"Destinations — Cost of Living by City",url:"https://tripcost.co/destinations",description:"Browse 50+ cities ranked by cost, safety and nomad score."}),A(o)}function qe(){const t=document.getElementById("dest-data");if(!t)return;const a=JSON.parse(t.textContent),e=document.getElementById("dest-grid"),n=document.getElementById("dest-count-num");let o={profile:"nomad",region:"all",budget:"all",sort:"score",search:""};const i=new URLSearchParams(window.location.search).get("profile");["solo","family","nomad"].includes(i)&&(o.profile=i);function s(c){return c>=85?"#10b981":c>=70?"#f59e0b":"#6366f1"}function m(c){const r=s(c.nomadScore);return`
      <a href="/city/${c.slug}" data-link class="dest-card">
        <div class="dest-card__img">
          <img src="${c.image}" alt="${c.name}" loading="lazy" />
          <div class="dest-card__img-overlay"></div>
          <span class="dest-card__continent">${c.continent}</span>
          <span class="dest-card__score-badge" style="background:${r}">
            ${c.nomadScore}/100
          </span>
        </div>
        <div class="dest-card__body">
          <div class="dest-card__top">
            <div>
              <p class="dest-card__name">${c.name}</p>
              <p class="dest-card__country">${c.country}</p>
            </div>
            <div class="dest-card__price">
              <div class="dest-card__price-label">From</div>
              <div class="dest-card__price-val">$${c.monthly.toLocaleString()}<em>/mo</em></div>
            </div>
          </div>
          <div class="dest-card__metrics">
            <span class="dest-card__metric">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Safety ${c.safetyIndex}
            </span>
            <span class="dest-card__metric">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
              </svg>
              ${c.wifiSpeed} Mbps
            </span>
            <span class="dest-card__visa-tag ${c.visaFriendly?"dest-card__visa-tag--yes":"dest-card__visa-tag--no"}">
              ${c.visaFriendly?"✅ Nomad visa":"⬜ Standard visa"}
            </span>
          </div>
        </div>
      </a>
    `}function v(){let c=[...a];if(o.region!=="all"&&(c=c.filter(r=>o.region==="Americas"?r.continent.includes("America"):r.continent===o.region)),o.budget==="low"&&(c=c.filter(r=>r.monthly<1500)),o.budget==="mid"&&(c=c.filter(r=>r.monthly>=1500&&r.monthly<=3e3)),o.budget==="high"&&(c=c.filter(r=>r.monthly>3e3)),o.search){const r=o.search.toLowerCase();c=c.filter(g=>g.name.toLowerCase().includes(r)||g.country.toLowerCase().includes(r))}o.sort==="score"&&c.sort((r,g)=>g.nomadScore-r.nomadScore),o.sort==="price-asc"&&c.sort((r,g)=>r.monthly-g.monthly),o.sort==="price-desc"&&c.sort((r,g)=>g.monthly-r.monthly),o.sort==="alpha"&&c.sort((r,g)=>r.name.localeCompare(g.name)),c.length===0?e.innerHTML=`
        <div class="dest-empty">
          <div class="dest-empty__icon">🔍</div>
          <h3>No cities match your filters</h3>
          <p>Try adjusting your region or budget filter.</p>
        </div>
      `:e.innerHTML=c.map(m).join(""),n.textContent=c.length}document.querySelectorAll("[data-filter]").forEach(c=>{c.addEventListener("click",()=>{const r=c.dataset.filter,g=c.dataset.val;document.querySelectorAll(`[data-filter="${r}"]`).forEach(h=>h.classList.remove("is-active")),c.classList.add("is-active"),o[r]=g,v()})});const d=document.getElementById("dest-search-input");d&&d.addEventListener("input",c=>{o.search=c.target.value.trim(),v()});const f=document.getElementById("dest-sort-select");f&&f.addEventListener("change",c=>{o.sort=c.target.value,v()}),e.addEventListener("click",c=>{const r=c.target.closest("[data-link]");r&&(c.preventDefault(),window.history.pushState({},"",r.getAttribute("href")),window.dispatchEvent(new PopStateEvent("popstate")))}),v()}function O(t,a=""){return t!=null&&t!==""?t:a}function Fe(t){const a=O(t.country,"the country"),e=O(t.continent,null);return e?`${a}, ${e}`:a}function Be(t){const a=O(t.name,"This city"),e=Fe(t);return`
${a} is a popular destination located in ${e}.
It attracts digital nomads, expatriates, and travelers who are looking to balance lifestyle, comfort, and cost of living.

This page provides a detailed overview of the cost of living in ${a}, covering housing, food, transportation, and daily expenses to help you decide whether it fits your budget and lifestyle.
  `.trim()}function oe(t,a){const e=O(t.name,"this city"),n=O(t.country,"the country"),o={accommodation:`
Housing costs in ${e} can vary significantly depending on location.
Living in central areas is generally more expensive, while neighborhoods outside the city center tend to offer more affordable rental options.
    `,food:`
Food expenses in ${e} range from affordable local meals to higher-end dining experiences.
Overall, grocery and dining costs remain reasonable compared to other major cities in ${n}.
    `,transport:`
Public transportation in ${e} is widely used and generally efficient.
Monthly transport costs depend on commuting distance and daily travel habits.
    `,utilities:`
Utilities and internet services in ${e} are generally reliable.
Internet quality is suitable for remote work, video calls, and everyday online activities.
    `,leisure:`
Leisure and entertainment costs in ${e} vary depending on lifestyle.
The city offers a wide range of cultural activities, dining options, and entertainment for different budgets.
    `};return O(o[a],"").trim()}function Ve(t){const a=O(t.name,"this city");return`
Living in ${a} offers a mix of lifestyle, culture, and modern infrastructure.
Residents benefit from a dynamic urban environment, diverse food options, and convenient transportation.

The overall quality of life in ${a} makes it an attractive place to live for both locals and foreigners, depending on personal preferences and budget.
  `.trim()}function je(t){return`
${O(t.name,"this city")} is considered a viable option for digital nomads and expatriates.
The city provides reliable internet infrastructure, access to essential services, and a generally safe living environment.

While the cost of living may be higher than in some destinations, many remote workers find the stability and quality of life worth the investment.
  `.trim()}function Oe(t){const a=O(t.name,"this city");return[{question:`Is ${a} expensive?`,answer:`${a} is generally considered expensive compared to many cities, but actual costs depend on lifestyle choices and housing location.`},{question:`How much do you need per month to live in ${a}?`,answer:`Monthly expenses in ${a} vary based on accommodation, lifestyle, and personal spending habits. A moderate to high budget is typically required.`},{question:`Is ${a} safe for foreigners?`,answer:`${a} is generally regarded as a safe city, including for foreigners and long-term residents.`},{question:`Is ${a} good for digital nomads?`,answer:`${a} offers good infrastructure and internet connectivity for digital nomads, though cost considerations are important for long-term stays.`}]}function ne(t,a=""){return t!=null&&t!==""?t:a}function He(t){const a=ne(t.name,"City"),e=ne(t.country,"");return e?`Cost of Living in ${a}, ${e} – Prices & Budget`:`Cost of Living in ${a} – Prices & Budget`}function Ue(t){return`Detailed cost of living in ${ne(t.name,"this city")}. Housing, food, transport, safety, and digital nomad lifestyle to help you plan your budget.`}function Qe(t){const{slug:a}=t,e=re(a);if(!e)return A(`
      <div style="text-align:center;padding:120px 24px">
        <div style="font-size:48px;margin-bottom:16px">🌍</div>
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">City not found</h1>
        <p style="color:#6b7280;margin-bottom:32px">We couldn't find a city with that name.</p>
        <a href="/destinations" data-link class="btn btn--primary btn--lg">Browse all destinations</a>
      </div>
    `);const n=e.costs??{},o=n.accommodation??{},i=n.food??{},s=e.digitalNomad??{},m=e.visa??{},v=e.tax??{},d=e.infrastructure??{},f=e.safety??{},c=e.macro??{},r=(o.center??0)*30+(i.standard??0)*30+(n.transport??0)+(n.coworking??0),g=(o.suburb??0)*30+(i.standard??0)*30+(n.transport??0)+(n.coworking??0),h=Be(e),w=Ve(e),p=je(e),x=Oe(e),_=He(e),l=Ue(e),b=H();let y=b.filter(u=>u.slug!==e.slug&&u.country===e.country);y.length<3&&(y=b.filter(u=>u.slug!==e.slug&&u.continent===e.continent)),y=y.slice(0,4);const k=[];r<1e3?k.push({text:"Very Affordable",color:"#065f46",bg:"#d1fae5"}):r<1600?k.push({text:"Affordable",color:"#065f46",bg:"#d1fae5"}):r>3e3&&k.push({text:"High Cost",color:"#7f1d1d",bg:"#fee2e2"}),s.wifiSpeed>=100&&k.push({text:`${s.wifiSpeed} Mbps`,color:"#1e3a5f",bg:"#dbeafe"}),m.remoteFriendly&&k.push({text:"Nomad Visa",color:"#4c1d95",bg:"#ede9fe"}),(f.safetyIndex??0)>=80&&k.push({text:"Very Safe",color:"#065f46",bg:"#d1fae5"});const I=k.slice(0,3).map(u=>`<span style="background:${u.bg};color:${u.color};font-size:11px;font-weight:700;
      padding:4px 12px;border-radius:999px;letter-spacing:0.3px">${u.text}</span>`).join("");function E(u,C=80,L=60){return u>=C?"#10b981":u>=L?"#f59e0b":"#ef4444"}const M=Math.max(o.center*30,o.suburb*30,i.budget*30,i.standard*30,i.premium*30,n.transport,n.coworking);function R(u,C="#6366f1"){return`<div style="flex:1;height:6px;background:#f1f5f9;border-radius:6px;overflow:hidden">
      <div style="height:100%;width:${M>0?Math.round(u/M*100):0}%;background:${C};border-radius:6px;transition:width 0.5s"></div>
    </div>`}function z(u,C,L){return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <span style="font-size:12px;color:#6b7280;width:100px;flex-shrink:0">${u}</span>
      ${R(C,L)}
      <span style="font-size:13px;font-weight:700;color:#111827;white-space:nowrap;min-width:64px;text-align:right">
        ${W(C,e.currencySymbol)}/mo
      </span>
    </div>`}const D=[{q:`How much does it cost to live in ${e.name}?`,a:`A standard lifestyle in ${e.name} costs between ${W(g,e.currencySymbol)}/month (suburb) and ${W(r,e.currencySymbol)}/month (city center), covering accommodation, food, transport and coworking.`},{q:`Is ${e.name} safe for digital nomads?`,a:`${e.name} has a safety index of ${f.safetyIndex??"N/A"}/100. ${(f.safetyIndex??0)>=70?"It is generally considered safe. Normal precautions apply.":"Exercise standard urban caution."}`},{q:`How is the internet in ${e.name}?`,a:`Average WiFi speed in ${e.name} is ${s.wifiSpeed??"N/A"} Mbps — ${(s.wifiSpeed??0)>=100?"excellent for video calls and remote work":(s.wifiSpeed??0)>=50?"good for most remote tasks":"adequate for basic tasks"}. Coworking spaces offer faster dedicated lines.`},{q:`Does ${e.name} have a digital nomad visa?`,a:m.remoteFriendly?`Yes — ${e.name} offers a remote work visa (${m.type}). Stay up to ${m.stayDurationMonths} months. Minimum income requirement: ${m.minIncomeRequirement>0?"$"+m.minIncomeRequirement+"/mo":"none stated"}. Processing: ~${m.processingTimeDays} days.`:`${e.name} does not currently offer a dedicated digital nomad visa. Standard tourist or long-stay visas apply. Always verify with official sources before travelling.`}],N=[...x||[],...D],B=N.map((u,C)=>`
    <div class="cp-faq-item${C===0?" is-open":""}">
      <button class="cp-faq-q">
        <span>${u.q||u.question}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="cp-faq-a">${u.a||u.answer}</div>
    </div>
  `).join(""),q=y.map(u=>{var L,F,V,U,Q,K,J,de;const C=Math.round((((F=(L=u.costs)==null?void 0:L.accommodation)==null?void 0:F.center)??0)*30+(((U=(V=u.costs)==null?void 0:V.food)==null?void 0:U.standard)??0)*30+(((Q=u.costs)==null?void 0:Q.transport)??0)+(((K=u.costs)==null?void 0:K.coworking)??0));return`
      <a href="/city/${u.slug}" data-link class="cp-sim-card">
        <div class="cp-sim-card__img">
          <img src="${u.image}" alt="${u.name}" loading="lazy" />
          <div class="cp-sim-card__overlay"></div>
          <span class="cp-sim-card__score" style="background:${E(((J=u.digitalNomad)==null?void 0:J.overallScore)??0)}">${((de=u.digitalNomad)==null?void 0:de.overallScore)??"—"}</span>
        </div>
        <div class="cp-sim-card__body">
          <strong>${u.name}</strong>
          <span>${u.country}</span>
          <span class="cp-sim-card__price">~$${C.toLocaleString()}/mo</span>
        </div>
      </a>
    `}).join(""),P=y.map(u=>`<a href="/compare/${e.slug}-vs-${u.slug}" data-link class="cp-compare-pill">
      ${e.name} vs ${u.name}
    </a>`).join("");function S(u,C,L=100){const F=Math.round(C/L*100),V=E(C,80,60);return`
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;margin-bottom:5px">
          <span style="font-size:12px;color:#6b7280;font-weight:500">${u}</span>
          <span style="font-size:12px;font-weight:700;color:${V}">${C}/100</span>
        </div>
        <div style="height:6px;background:#f1f5f9;border-radius:6px;overflow:hidden">
          <div style="height:100%;width:${F}%;background:${V};border-radius:6px;transition:width 0.5s"></div>
        </div>
      </div>`}const T=`
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
      <img class="cp-hero__img" src="${e.image}" alt="Cost of living in ${e.name}" />
      <div class="cp-hero__gradient"></div>
      <div class="cp-hero__content">
        <div class="container">
          <div class="cp-hero__badges">${I}</div>
          <h1 class="cp-hero__title">Cost of Living in ${e.name}</h1>
          <p class="cp-hero__sub">${e.country} · ${e.continent} · Updated March 2026</p>

          <div class="cp-hero__kpis">
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Monthly (center)</div>
              <div class="cp-hero__kpi-val">${W(r,e.currencySymbol)}</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Nomad Score</div>
              <div class="cp-hero__kpi-val">${s.overallScore??"—"}/100</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Safety Index</div>
              <div class="cp-hero__kpi-val">${f.safetyIndex??"—"}/100</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">WiFi Speed</div>
              <div class="cp-hero__kpi-val">${s.wifiSpeed??"—"} Mbps</div>
            </div>
          </div>

          <div class="cp-hero__actions">
            <a href="/calculator" data-link class="cp-btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Calculate my budget
            </a>
            ${y[0]?`<a href="/compare/${e.slug}-vs-${y[0].slug}" data-link class="cp-btn-secondary">Compare with ${y[0].name} →</a>`:""}
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
        <h2 class="cp-section__title">${e.name} Overview</h2>
        <p class="cp-section__lead">${h}</p>

        <div class="cp-kpis">
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🏠</div>
            <div class="cp-kpi__label">City Center rent</div>
            <div class="cp-kpi__val">${W(o.center*30,e.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🍽️</div>
            <div class="cp-kpi__label">Food (standard)</div>
            <div class="cp-kpi__val">${W(i.standard*30,e.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🚇</div>
            <div class="cp-kpi__label">Transport</div>
            <div class="cp-kpi__val">${W(n.transport,e.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">💻</div>
            <div class="cp-kpi__label">Coworking</div>
            <div class="cp-kpi__val">${W(n.coworking,e.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ COSTS ═══════════════════════════════════════════ -->
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
            <div class="cp-cost-card__desc">${oe(e,"accommodation")}</div>
            ${z("City center",o.center*30,"#6366f1")}
            ${z("Suburb",o.suburb*30,"#8b5cf6")}
          </div>

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🍽️ Food & Dining</div>
            <div class="cp-cost-card__desc">${oe(e,"food")}</div>
            ${z("Budget",i.budget*30,"#10b981")}
            ${z("Standard",i.standard*30,"#059669")}
            ${z("Premium",i.premium*30,"#047857")}
          </div>

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🚇 Transport & Work</div>
            <div class="cp-cost-card__desc">${oe(e,"transport")}</div>
            ${z("Transport",n.transport,"#f59e0b")}
            ${z("Coworking",n.coworking,"#d97706")}
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
            ${S("Public Transport",d.publicTransportQuality??0)}
            ${S("Healthcare",d.healthcareQuality??0)}
            ${S("English Proficiency",d.englishProficiency??0)}
            ${S("Airport Connectivity",d.airportConnectivity??0)}
          </div>

          <div class="cp-infra-card">
            <div class="cp-infra-card__title">Safety & Macro</div>
            ${S("Safety Index",f.safetyIndex??0)}
            ${S("Nomad Score",s.overallScore??0)}
            <div style="margin-top:20px;padding-top:16px;border-top:1px solid #f1f5f9">
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                <span style="color:#6b7280">Crime Level</span>
                <strong style="color:#111827">${f.crimeLevel??"—"}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                <span style="color:#6b7280">Currency Stability</span>
                <strong style="color:#111827">${c.currencyStability??"—"}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:12px">
                <span style="color:#6b7280">Inflation Rate</span>
                <strong style="color:#111827">${c.inflationRate??"—"}%</strong>
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
        <h2 class="cp-section__title">Visa & Tax in ${e.name}</h2>
        <p class="cp-section__lead">
          ${m.remoteFriendly?`${e.name} offers a dedicated remote work visa — one of the most accessible destinations for digital nomads and expats.`:`${e.name} does not currently offer a dedicated digital nomad visa. Standard tourist or long-stay visas apply.`}
        </p>
        <div class="cp-visa">
          <div class="cp-visa__head">
            <span class="cp-visa__head-title">${m.type??"Standard Visa"}</span>
            <span class="cp-visa__tag" style="background:${m.remoteFriendly?"#d1fae5":"#f1f5f9"};color:${m.remoteFriendly?"#065f46":"#6b7280"}">
              ${m.remoteFriendly?"✅ Nomad Friendly":"⬜ Standard"}
            </span>
          </div>
          <div class="cp-visa__body">
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Max stay</span>
              <span class="cp-visa__row-val">${m.stayDurationMonths??"—"} months</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Processing time</span>
              <span class="cp-visa__row-val">~${m.processingTimeDays??"—"} days</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Min. income required</span>
              <span class="cp-visa__row-val">${m.minIncomeRequirement>0?"$"+m.minIncomeRequirement+"/mo":"None stated"}</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Income tax (top rate)</span>
              <span class="cp-visa__row-val">${v.personalIncomeTaxTopRate??"—"}%</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Corporate tax</span>
              <span class="cp-visa__row-val">${v.corporateTax??"—"}%</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Capital gains tax</span>
              <span class="cp-visa__row-val">${v.capitalGainsTax??"—"}%</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ LIFESTYLE ═══════════════════════════════════════ -->
    <section class="cp-section" id="lifestyle">
      <div class="container">
        <p class="cp-section__eyebrow">Daily Life</p>
        <h2 class="cp-section__title">Living in ${e.name}</h2>
        <p class="cp-section__lead">${w}</p>
      </div>
    </section>

    <!-- ══ FOR NOMADS ══════════════════════════════════════ -->
    <section class="cp-section cp-section--alt" id="nomads">
      <div class="container">
        <p class="cp-section__eyebrow">Remote Work</p>
        <h2 class="cp-section__title">Is ${e.name} good for digital nomads?</h2>
        <p class="cp-section__lead">${p}</p>
      </div>
    </section>

    <!-- ══ FAQ ═════════════════════════════════════════════ -->
    <section class="cp-section" id="faq">
      <div class="container">
        <p class="cp-section__eyebrow">Questions</p>
        <h2 class="cp-section__title">FAQ — Living in ${e.name}</h2>
        <div class="cp-faq-list">${B}</div>
      </div>
    </section>

    <!-- ══ SIMILAR CITIES ══════════════════════════════════ -->
    <section class="cp-section cp-section--alt" id="similar">
      <div class="container">
        <p class="cp-section__eyebrow">Explore More</p>
        <h2 class="cp-section__title">Cities similar to ${e.name}</h2>
        <p class="cp-section__lead">Same region, comparable cost or lifestyle profile.</p>
        <div class="cp-similar">${q}</div>

        <div style="margin-top:32px">
          <p style="font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:12px">Compare ${e.name} with</p>
          <div class="cp-compare-pills">${P}</div>
        </div>
      </div>
    </section>

    <!-- ══ CTA ════════════════════════════════════════════ -->
    <section class="cp-cta">
      <div class="cp-cta__inner container">
        <h2>Plan your budget for ${e.name}</h2>
        <p>Get a personalized cost estimate based on your income and lifestyle.</p>
        <a href="/calculator" data-link class="cp-btn-primary" style="display:inline-flex;font-size:15px;padding:13px 28px">
          Open the Calculator →
        </a>
      </div>
    </section>
  `,$=`/city/${e.slug}`;return Y({title:_,description:l,canonical:$,image:e.image}),G("breadcrumb-jsonld",{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://tripcost.co/"},{"@type":"ListItem",position:2,name:"Destinations",item:"https://tripcost.co/destinations"},{"@type":"ListItem",position:3,name:e.name,item:`https://tripcost.co${$}`}]}),G("place-jsonld",{"@context":"https://schema.org","@type":"City",name:e.name,containedInPlace:{"@type":"Country",name:e.country},geo:e.lat&&e.lng?{"@type":"GeoCoordinates",latitude:e.lat,longitude:e.lng}:void 0,image:e.image,url:`https://tripcost.co${$}`}),G("faq-jsonld",{"@context":"https://schema.org","@type":"FAQPage",mainEntity:N.map(u=>({"@type":"Question",name:u.q||u.question,acceptedAnswer:{"@type":"Answer",text:u.a||u.answer}}))}),A(T)}function We(){document.querySelectorAll(".cp-faq-item").forEach(e=>{var n;(n=e.querySelector(".cp-faq-q"))==null||n.addEventListener("click",()=>{const o=e.classList.contains("is-open");document.querySelectorAll(".cp-faq-item").forEach(i=>i.classList.remove("is-open")),o||e.classList.add("is-open")})});const t=document.querySelectorAll("[id]"),a=document.querySelectorAll(".cp-nav__link[data-section]");if(a.length&&t.length){const e=new IntersectionObserver(n=>{n.forEach(o=>{if(o.isIntersecting){a.forEach(s=>s.classList.remove("is-active"));const i=document.querySelector(`.cp-nav__link[data-section="${o.target.id}"]`);i&&i.classList.add("is-active")}})},{rootMargin:"-50% 0px -40% 0px"});t.forEach(n=>e.observe(n))}a.forEach(e=>{e.addEventListener("click",n=>{var i;n.preventDefault();const o=e.dataset.section;(i=document.getElementById(o))==null||i.scrollIntoView({behavior:"smooth",block:"start"})})})}function Ge(t){if(!t)return[];const a=t.split("-vs-");return a.length!==2?[]:a}function Ye(t){const{cities:a}=t,[e,n]=Ge(a),o=re(e),i=re(n);if(!o||!i)return A(`
      <div style="text-align:center;padding:120px 24px">
        <div style="font-size:48px;margin-bottom:16px">🔍</div>
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">Cities not found</h1>
        <p style="color:#6b7280;margin-bottom:32px">We couldn't find one or both cities.</p>
        <a href="/calculator" data-link style="display:inline-flex;align-items:center;gap:7px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:14px;font-weight:600;padding:13px 26px;border-radius:10px;text-decoration:none">
          Open Calculator
        </a>
      </div>
    `);Y({title:`${o.name} vs ${i.name} — Cost of Living Comparison`,description:`Compare cost of living between ${o.name} and ${i.name}. Housing, food, transport, safety, WiFi and visa — side by side.`,canonical:`/compare/${e}-vs-${n}`}),G("page-jsonld",{"@context":"https://schema.org","@type":"WebPage",name:`${o.name} vs ${i.name} Cost of Living`,url:`https://tripcost.co/compare/${e}-vs-${n}`,breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://tripcost.co/"},{"@type":"ListItem",position:2,name:"Calculator",item:"https://tripcost.co/calculator"},{"@type":"ListItem",position:3,name:`${o.name} vs ${i.name}`,item:`https://tripcost.co/compare/${e}-vs-${n}`}]}});function s(h){var w,p,x,_,l,b;return Math.round((((p=(w=h.costs)==null?void 0:w.accommodation)==null?void 0:p.center)??0)*30+(((_=(x=h.costs)==null?void 0:x.food)==null?void 0:_.standard)??0)*30+(((l=h.costs)==null?void 0:l.transport)??0)+(((b=h.costs)==null?void 0:b.coworking)??0))}function m(h){return h>=80?"#10b981":h>=60?"#f59e0b":"#ef4444"}const v=s(o),d=s(i),f=v<=d?o:i,c=d>0?Math.abs(Math.round((v-d)/d*100)):0;function r(h,w){var E,M,R,z,D,N,B,q,P,S,T,$;const p=s(h),x=(((M=(E=h.costs)==null?void 0:E.accommodation)==null?void 0:M.center)??0)*30,_=(((z=(R=h.costs)==null?void 0:R.food)==null?void 0:z.standard)??0)*30,l=((D=h.costs)==null?void 0:D.transport)??0,b=((N=h.costs)==null?void 0:N.coworking)??0,y=Math.max(x,_,l,b,1);function k(u){return`<div style="flex:1;height:7px;background:#f1f5f9;border-radius:7px;overflow:hidden">
        <div style="height:100%;width:${Math.round(u/y*100)}%;background:${w};border-radius:7px;transition:width 0.5s"></div>
      </div>`}function I(u,C,L){return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <span style="font-size:14px;width:20px;text-align:center">${u}</span>
        <span style="font-size:12px;color:#6b7280;width:80px;flex-shrink:0">${C}</span>
        ${k(L)}
        <span style="font-size:12px;font-weight:700;color:#111827;white-space:nowrap;min-width:64px;text-align:right">
          $${L.toLocaleString()}/mo
        </span>
      </div>`}return`
      <div class="ccp-col">
        <div class="ccp-col__img">
          <img src="${h.image}" alt="${h.name}" loading="lazy" />
          <div class="ccp-col__img-overlay"></div>
          <div class="ccp-col__img-label">${h.name}</div>
        </div>
        <div class="ccp-col__body">
          <p class="ccp-col__country">${h.country} · ${h.continent}</p>
          <div class="ccp-col__total" style="color:${w}">$${p.toLocaleString()}<span>/mo</span></div>
          <p class="ccp-col__total-label">Standard lifestyle · City center</p>

          <div style="margin:20px 0">
            ${I("🏠","Housing",x)}
            ${I("🍽️","Food",_)}
            ${I("🚇","Transport",l)}
            ${I("💻","Coworking",b)}
          </div>

          <div class="ccp-col__metrics">
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val" style="color:${m(((B=h.digitalNomad)==null?void 0:B.overallScore)??0)}">
                ${((q=h.digitalNomad)==null?void 0:q.overallScore)??"—"}
              </div>
              <div class="ccp-col__metric-label">Nomad score</div>
            </div>
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val" style="color:${m(((P=h.digitalNomad)==null?void 0:P.safetyScore)??0)}">
                ${((S=h.digitalNomad)==null?void 0:S.safetyScore)??"—"}
              </div>
              <div class="ccp-col__metric-label">Safety</div>
            </div>
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val">${((T=h.digitalNomad)==null?void 0:T.wifiSpeed)??"—"}</div>
              <div class="ccp-col__metric-label">Mbps</div>
            </div>
            <div class="ccp-col__metric">
              <div class="ccp-col__metric-val" style="font-size:16px">
                ${($=h.visa)!=null&&$.remoteFriendly?"✅":"⬜"}
              </div>
              <div class="ccp-col__metric-label">Nomad visa</div>
            </div>
          </div>

          <a href="/city/${h.slug}" data-link class="ccp-col__link">
            Full guide for ${h.name} →
          </a>
        </div>
      </div>
    `}const g=`
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
        <h1 class="ccp-hero__title">${o.name} vs ${i.name}</h1>
        <div class="ccp-hero__verdict">
          ${f.name} is ${c}% more affordable
        </div>
      </div>
    </section>

    <!-- COMPARISON -->
    <section class="ccp-section">
      <div class="container">
        <div class="ccp-grid">
          ${r(o,"#6366f1")}
          <div class="ccp-vs">
            <div class="ccp-vs__badge">VS</div>
            <div class="ccp-vs__diff">
              ${c}%<br>difference
            </div>
          </div>
          ${r(i,"#10b981")}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="ccp-cta">
      <div class="ccp-cta__inner container">
        <h2>Want a deeper comparison?</h2>
        <p>Use the full calculator — add your income, choose your lifestyle and see purchasing power side by side.</p>
        <div class="ccp-cta__btns">
          <a href="/calculator?a=${e}&b=${n}" data-link class="ccp-btn">Open in Calculator →</a>
          <a href="/destinations" data-link class="ccp-btn-ghost">Browse More Cities</a>
        </div>
      </div>
    </section>
  `;return A(g)}function Ke(){const t=H(),a=t.map(o=>`<option value="${o.slug}" data-city="${encodeURIComponent(JSON.stringify(o))}">
      ${o.name}, ${o.country}
    </option>`).join(""),e=t.map((o,i)=>`<option value="${o.slug}" data-city="${encodeURIComponent(JSON.stringify(o))}" ${i===5?"selected":""}>
      ${o.name}, ${o.country}
    </option>`).join(""),n=`

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
            <select id="city-a">${a}</select>
          </div>
          <div class="calc-field">
            <label>City B</label>
            <select id="city-b">${e}</select>
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
  `;return A(n)}function Je(){const t=document.getElementById("city-a"),a=document.getElementById("city-b"),e=document.getElementById("housing"),n=document.getElementById("lifestyle"),o=document.getElementById("income-input"),i=document.getElementById("share-btn");if(!t)return;let s="nomad";document.querySelectorAll("[data-profile]").forEach(p=>{p.addEventListener("click",()=>{document.querySelectorAll("[data-profile]").forEach(x=>x.classList.remove("is-active")),p.classList.add("is-active"),s=p.dataset.profile,w()})}),document.querySelectorAll(".calc-faq-q").forEach(p=>{p.addEventListener("click",()=>{const x=p.closest(".calc-faq-item"),_=x.classList.contains("is-open");document.querySelectorAll(".calc-faq-item").forEach(l=>l.classList.remove("is-open")),_||x.classList.add("is-open")})}),i==null||i.addEventListener("click",()=>{const p=new URL(window.location.href);p.searchParams.set("a",t.value),p.searchParams.set("b",a.value),p.searchParams.set("h",e.value),p.searchParams.set("l",n.value),p.searchParams.set("p",s),navigator.clipboard.writeText(p.toString()).then(()=>{i.classList.add("copied"),i.querySelector("svg").nextSibling.textContent=" Link copied!",setTimeout(()=>{i.classList.remove("copied"),i.childNodes[1].textContent=" Copy shareable link"},2500)})});const m=new URLSearchParams(window.location.search);m.get("a")&&(t.value=m.get("a")),m.get("b")&&(a.value=m.get("b")),m.get("h")&&(e.value=m.get("h")),m.get("l")&&(n.value=m.get("l")),m.get("p")&&(s=m.get("p"),document.querySelectorAll("[data-profile]").forEach(p=>{p.classList.toggle("is-active",p.dataset.profile===s)}));function v(p){var _,l;const x=(l=(_=p.options[p.selectedIndex])==null?void 0:_.dataset)==null?void 0:l.city;return x?JSON.parse(decodeURIComponent(x)):null}function d(p){const x=e.value,_=n.value,l=p.costs.accommodation[x]*30,b=p.costs.food[_]*30,y=p.costs.transport,k=p.costs.coworking,I=l+b+y+k;return{acc:l,food:b,tsp:y,cow:k,total:I+Math.round(I*.1)}}function f(p,x,_){var z,D,N,B,q,P,S,T,$;const l=s==="founder"?{cost:.15,safety:.1,visa:.1,tax:.25,stab:.2,infra:.1,income:.1}:s==="family"?{cost:.15,safety:.25,visa:.05,tax:.1,stab:.2,infra:.15,income:.1}:{cost:.25,safety:.1,visa:.2,tax:.1,stab:.15,infra:.1,income:.1},b=_>0?Math.min(_/x*100,100):Math.max(0,100-x/5e3*50),y=((z=p.safety)==null?void 0:z.safetyIndex)??50,k=(D=p.visa)!=null&&D.remoteFriendly?85:45,I=100-((((N=p.tax)==null?void 0:N.personalIncomeTaxTopRate)??30)+(((B=p.tax)==null?void 0:B.corporateTax)??25))/2,E={High:80,"Very High":90,Medium:60}[(q=p.macro)==null?void 0:q.currencyStability]??40,M=((((P=p.infrastructure)==null?void 0:P.publicTransportQuality)??50)+(((S=p.infrastructure)==null?void 0:S.healthcareQuality)??50)+(((T=p.infrastructure)==null?void 0:T.englishProficiency)??50)+((($=p.infrastructure)==null?void 0:$.airportConnectivity)??50))/4,R=_>0?Math.min(_/x*100,100):50;return Math.max(0,Math.min(100,Math.round(b*l.cost+y*l.safety+k*l.visa+I*l.tax+E*l.stab+M*l.infra+R*l.income)))}function c(p){return p>=85?"Elite destination":p>=70?"Strong choice":p>=55?"Moderate fit":"High risk profile"}function r(p){return p>=70?"#10b981":p>=55?"#f59e0b":"#ef4444"}function g(p,x,_="$"){const l=parseInt(p.dataset.current||"0"),b=x-l,y=30;let k=0;const I=setInterval(()=>{k++;const E=Math.round(l+b*(k/y));p.textContent=_+E.toLocaleString(),k>=y&&(clearInterval(I),p.dataset.current=x)},16)}function h(p,x,_,l){const b=document.getElementById("relocation-radar");if(!b)return;const y=b.getContext("2d"),k=b.width,I=b.height,E=k/2,M=I/2+10,R=Math.min(k,I)/2-55,z=["Cost","Safety","Infra","Visa","Tax","Stability"],D=z.length;function N(T,$){var u,C,L,F,V,U,Q,K,J;return[Math.max(0,100-$/5e3*50),((u=T.safety)==null?void 0:u.safetyIndex)??50,((((C=T.infrastructure)==null?void 0:C.publicTransportQuality)??50)+(((L=T.infrastructure)==null?void 0:L.healthcareQuality)??50)+(((F=T.infrastructure)==null?void 0:F.englishProficiency)??50)+(((V=T.infrastructure)==null?void 0:V.airportConnectivity)??50))/4,(U=T.visa)!=null&&U.remoteFriendly?85:45,100-((((Q=T.tax)==null?void 0:Q.personalIncomeTaxTopRate)??30)+(((K=T.tax)==null?void 0:K.corporateTax)??25))/2,{High:80,"Very High":90,Medium:60}[(J=T.macro)==null?void 0:J.currencyStability]??40]}const B=N(p,_),q=N(x,l);let P=0;function S(){y.clearRect(0,0,k,I);for(let $=1;$<=5;$++){y.beginPath();for(let u=0;u<D;u++){const C=Math.PI*2/D*u-Math.PI/2,L=R*($/5);u===0?y.moveTo(E+L*Math.cos(C),M+L*Math.sin(C)):y.lineTo(E+L*Math.cos(C),M+L*Math.sin(C))}y.closePath(),y.strokeStyle="#f1f5f9",y.lineWidth=1,y.stroke()}z.forEach(($,u)=>{const C=Math.PI*2/D*u-Math.PI/2;y.beginPath(),y.moveTo(E,M),y.lineTo(E+R*Math.cos(C),M+R*Math.sin(C)),y.strokeStyle="#e5e7eb",y.lineWidth=1,y.stroke();const L=E+(R+20)*Math.cos(C),F=M+(R+20)*Math.sin(C);y.fillStyle="#6b7280",y.font="600 11px system-ui",y.textAlign="center",y.textBaseline="middle",y.fillText($,L,F)});function T($,u){y.beginPath(),$.forEach((C,L)=>{const F=Math.PI*2/D*L-Math.PI/2,V=R*(C/100)*P,U=E+V*Math.cos(F),Q=M+V*Math.sin(F);L===0?y.moveTo(U,Q):y.lineTo(U,Q)}),y.closePath(),y.strokeStyle=u,y.lineWidth=2,y.stroke(),y.fillStyle=u.replace("1)","0.15)"),y.fill()}T(B,"rgba(99,102,241,1)"),T(q,"rgba(16,185,129,1)"),P<1&&(P=Math.min(P+.05,1),requestAnimationFrame(S))}S()}async function w(){var q,P;const p=v(t),x=v(a);if(!p||!x)return;const _=d(p),l=d(x),b=parseFloat((o==null?void 0:o.value)||0);document.getElementById("img-a").src=p.image,document.getElementById("img-a").alt=p.name,document.getElementById("img-b").src=x.image,document.getElementById("img-b").alt=x.name,document.getElementById("name-a").textContent=p.name,document.getElementById("country-a").textContent=p.country,document.getElementById("name-b").textContent=x.name,document.getElementById("country-b").textContent=x.country,g(document.getElementById("cost-a"),_.total),g(document.getElementById("cost-b"),l.total);const y=_.total<=l.total;document.getElementById("card-a").classList.toggle("is-winner",y),document.getElementById("card-a").classList.toggle("is-loser",!y),document.getElementById("card-b").classList.toggle("is-winner",!y),document.getElementById("card-b").classList.toggle("is-loser",y);const k=l.total>0?Math.abs(Math.round((_.total-l.total)/l.total*100)):0,I=document.getElementById("vs-diff"),E=_.total<l.total?p.name:x.name;I.textContent=`${E} is ${k}% cheaper`,I.className=`calc-vs__diff ${_.total<l.total?"cheaper":"pricier"}`;const M=f(p,_.total,b),R=f(x,l.total,b);if(["a","b"].forEach((S,T)=>{const $=T===0?M:R,u=r($);document.getElementById(`score-city-${S}`).textContent=T===0?p.name:x.name,document.getElementById(`score-val-${S}`).textContent=$+"/100",document.getElementById(`score-val-${S}`).style.color=u,document.getElementById(`score-label-${S}`).textContent=c($),document.getElementById(`score-label-${S}`).style.color=u,document.getElementById(`score-bar-${S}`).style.width=$+"%",document.getElementById(`score-bar-${S}`).style.background=u}),b>0){document.getElementById("income-empty").style.display="none",document.getElementById("income-data").style.display="block";const S=Math.round(_.total/b*100),T=Math.round(l.total/b*100);document.getElementById("income-city-a-name").textContent=p.name,document.getElementById("income-city-b-name").textContent=x.name,document.getElementById("income-ratio-a").textContent=`${S}% of income`,document.getElementById("income-ratio-b").textContent=`${T}% of income`,document.getElementById("income-bar-a").style.width=Math.min(S,100)+"%",document.getElementById("income-bar-b").style.width=Math.min(T,100)+"%";const $=b-_.total;document.getElementById("income-note").textContent=$>0?`With $${b.toLocaleString()}/mo, you'd have $${Math.round($).toLocaleString()} left each month in ${p.name}.`:`Your budget is $${Math.abs(Math.round($)).toLocaleString()} short for ${p.name} at this lifestyle.`}else document.getElementById("income-empty").style.display="block",document.getElementById("income-data").style.display="none";document.getElementById("bd-head-a").textContent=p.name,document.getElementById("bd-head-b").textContent=x.name;const z=Math.max(_.acc,l.acc,_.food,l.food,_.tsp,l.tsp,_.cow,l.cow);[["acc","acc"],["food","food"],["tsp","tsp"],["cow","cow"]].forEach(([S,T])=>{document.getElementById(`val-a-${T}`).textContent="$"+_[S].toLocaleString(),document.getElementById(`val-b-${T}`).textContent="$"+l[S].toLocaleString(),document.getElementById(`bar-a-${T}`).style.width=_[S]/z*100+"%",document.getElementById(`bar-b-${T}`).style.width=l[S]/z*100+"%"}),document.getElementById("radar-label-a").textContent=p.name,document.getElementById("radar-label-b").textContent=x.name,h(p,x,_.total,l.total),document.getElementById("proj-head-a").textContent=p.name,document.getElementById("proj-head-b").textContent=x.name;const D=((q=p.macro)==null?void 0:q.inflationRate)??3,N=((P=x.macro)==null?void 0:P.inflationRate)??3,B=[1,3,5].map(S=>{const T=Math.round(_.total*Math.pow(1+D/100,S)*12),$=Math.round(l.total*Math.pow(1+N/100,S)*12),u=T-$,C=u===0?"—":`<span class="proj-badge ${u>0?"proj-badge--pos":"proj-badge--neg"}">
             ${u>0?"▲":"▼"} $${Math.abs(u).toLocaleString()}
           </span>`;return`<tr>
        <td>${S} year${S>1?"s":""}</td>
        <td>$${T.toLocaleString()}/yr</td>
        <td>$${$.toLocaleString()}/yr</td>
        <td>${C}</td>
      </tr>`});document.getElementById("proj-body").innerHTML=B.join(""),["a","b"].forEach((S,T)=>{const $=T===0?p:x,u=$.visa;document.getElementById(`visa-city-${S}`).textContent=$.name;const C=document.getElementById(`visa-tag-${S}`);C.innerHTML=u?`<span class="calc-visa-card__tag" style="background:${u.remoteFriendly?"#d1fae5":"#f1f5f9"};color:${u.remoteFriendly?"#065f46":"#6b7280"}">
            ${u.remoteFriendly?"✅ Nomad Visa Available":"⬜ Standard Visa"}
           </span>`:"";const L=document.getElementById(`visa-rows-${S}`);L.innerHTML=u?`
        <div class="calc-visa-card__row"><span>Type</span><strong>${u.type||"—"}</strong></div>
        <div class="calc-visa-card__row"><span>Stay</span><strong>${u.stayDurationMonths||"—"} months</strong></div>
        <div class="calc-visa-card__row"><span>Processing</span><strong>~${u.processingTimeDays||"—"} days</strong></div>
        <div class="calc-visa-card__row"><span>Min. income</span><strong>${u.minIncomeRequirement>0?"$"+u.minIncomeRequirement+"/mo":"None"}</strong></div>
      `:'<p style="font-size:13px;color:#9ca3af">No visa data available.</p>'})}[t,a,e,n].forEach(p=>p==null?void 0:p.addEventListener("change",w)),o==null||o.addEventListener("input",w),w()}function Z(t,a="standard"){const{costs:e}=t,n=e.accommodation.center*30,o=e.food[a]*30,i=e.transport,s=e.coworking;return n+o+i+s}function Ze(){var p,x,_;const t=H(),a=[...t].sort((l,b)=>b.digitalNomad.overallScore-l.digitalNomad.overallScore),e=a.slice(0,3),n=[...t].sort((l,b)=>Z(l)-Z(b)).slice(0,5),o=[...t].sort((l,b)=>b.digitalNomad.wifiSpeed-l.digitalNomad.wifiSpeed).slice(0,5),i=[...t].sort((l,b)=>b.digitalNomad.safetyScore-l.digitalNomad.safetyScore).slice(0,5),s=t.filter(l=>{var b;return(b=l.visa)==null?void 0:b.remoteFriendly}).sort((l,b)=>b.digitalNomad.overallScore-l.digitalNomad.overallScore).slice(0,5);function m(l,b=80,y=60){return l>=b?"#10b981":l>=y?"#f59e0b":"#ef4444"}const v=["🥇","🥈","🥉"],f=[1,0,2].map(l=>{const b=e[l];if(!b)return"";const y=Z(b);return`
      <div class="rk-podium-card ${l===0?"rk-podium-card--gold":""}">
        <div class="rk-podium-medal">${v[l]}</div>
        <div class="rk-podium-img-wrap">
          <img src="${b.image}" alt="${b.name}" loading="lazy" />
          <div class="rk-podium-img-overlay"></div>
        </div>
        <div class="rk-podium-body">
          <div class="rk-podium-score" style="color:${m(b.digitalNomad.overallScore)}">
            ${b.digitalNomad.overallScore}<span>/100</span>
          </div>
          <div class="rk-podium-name">${b.name}</div>
          <div class="rk-podium-country">${b.country}</div>
          <div class="rk-podium-metrics">
            <span title="WiFi">📡 ${b.digitalNomad.wifiSpeed} Mbps</span>
            <span title="Safety">🛡 ${b.digitalNomad.safetyScore}</span>
            <span title="Budget">💰 ~$${y.toLocaleString()}/mo</span>
          </div>
          <a href="/city/${b.slug}" data-link class="rk-podium-btn">View City →</a>
        </div>
      </div>
    `}).join(""),c=JSON.stringify(a.map(l=>{var b;return{slug:l.slug,name:l.name,country:l.country,continent:l.continent,image:l.image,score:l.digitalNomad.overallScore,wifi:l.digitalNomad.wifiSpeed,safety:l.digitalNomad.safetyScore,cowork:l.digitalNomad.coworkingCost,budget:Z(l),visaOk:((b=l.visa)==null?void 0:b.remoteFriendly)??!1,currency:l.currencySymbol??"$"}}));function r(l,b,y,k,I){return`
      <div class="rk-mini">
        <div class="rk-mini__title">${b} ${l}</div>
        ${y.map((E,M)=>{const R=k(E),z=k(y[0]),D=z>0?Math.round(R/z*100):0,N=M===0?"#f59e0b":M===1?"#9ca3af":M===2?"#b45309":"#6366f1";return`
            <div class="rk-mini__row">
              <span class="rk-mini__rank" style="color:${N}">${M+1}</span>
              <a href="/city/${E.slug}" data-link class="rk-mini__name">${E.name}</a>
              <div class="rk-mini__bar-wrap">
                <div class="rk-mini__bar" style="width:${D}%;background:${N}"></div>
              </div>
              <span class="rk-mini__val">${typeof R=="number"&&R>100?"$"+R.toLocaleString():R}${I}</span>
            </div>
          `}).join("")}
      </div>
    `}const h=[["lisbon","bangkok"],["berlin","prague"],["tokyo","seoul"],["barcelona","bali"],["dubai","singapore"],["chiang-mai","medellin"]].map(([l,b])=>{const y=t.find(I=>I.slug===l),k=t.find(I=>I.slug===b);return!y||!k?"":`
      <a href="/calculator" data-link data-ca="${l}" data-cb="${b}" class="rk-compare-card">
        <div class="rk-compare-card__imgs">
          <img src="${y.image}" alt="${y.name}" />
          <img src="${k.image}" alt="${k.name}" />
        </div>
        <div class="rk-compare-card__label">
          ${y.name} <span>vs</span> ${k.name}
        </div>
      </a>
    `}).join(""),w=`
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
          ${a.length} cities ranked by nomad score — cost, WiFi, safety, visa &amp; infrastructure combined.
        </p>
      </div>
    </section>

    <!-- STATS BAR -->
    <div class="rk-stats">
      <div class="container rk-stats__inner">
        <div class="rk-stat"><strong>${a.length}</strong><span>Cities ranked</span></div>
        <div class="rk-stat"><strong>${(p=a[0])==null?void 0:p.name}</strong><span>Top rated</span></div>
        <div class="rk-stat"><strong>${(x=n[0])==null?void 0:x.name}</strong><span>Most affordable</span></div>
        <div class="rk-stat"><strong>${(_=o[0])==null?void 0:_.name}</strong><span>Fastest WiFi</span></div>
        <div class="rk-stat"><strong>${t.filter(l=>{var b;return(b=l.visa)==null?void 0:b.remoteFriendly}).length}</strong><span>Nomad visas</span></div>
      </div>
    </div>

    <!-- PODIUM -->
    <section class="rk-podium-wrap">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Top 3 Overall</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">This year's best destinations</h2>
        <div class="rk-podium-grid">${f}</div>
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
          ${r("Most Affordable","💰",n,l=>Z(l),"/mo")}
          ${r("Fastest Internet","📡",o,l=>l.digitalNomad.wifiSpeed," Mbps")}
          ${r("Safest Cities","🛡",i,l=>l.digitalNomad.safetyScore,"/100")}
          ${r("Nomad Visa","✈️",s,l=>l.digitalNomad.overallScore,"/100")}
        </div>
      </div>
    </section>

    <!-- POPULAR COMPARISONS -->
    <section class="rk-comparisons">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Head to Head</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">Popular city comparisons</h2>
        <div class="rk-compare-grid">${h}</div>
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

    <script id="rk-data" type="application/json">${c}<\/script>
  `;return Y({title:"Best Cities for Digital Nomads 2026 — Rankings & Scores",description:"Compare 50+ cities ranked by nomad score — cost of living, WiFi speed, safety, visa access and infrastructure combined.",canonical:"/nomad"}),G("page-jsonld",{"@context":"https://schema.org","@type":"WebPage",name:"Best Cities for Digital Nomads 2026",description:"Complete ranking of 50+ cities for digital nomads based on cost, WiFi, safety and visa access.",url:"https://tripcost.co/nomad",breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://tripcost.co/"},{"@type":"ListItem",position:2,name:"Nomad Rankings",item:"https://tripcost.co/nomad"}]}}),A(w)}function Xe(){const t=document.getElementById("rk-data");if(!t)return;const a=JSON.parse(t.textContent),e=document.getElementById("rk-tbody"),n=document.getElementById("rk-count"),o=document.getElementById("rk-search");let i={region:"all",search:"",col:"score",dir:"desc"};function s(d,f=80,c=60){return d>=f?"#10b981":d>=c?"#f59e0b":"#ef4444"}function m(d,f){const c=f===1?"background:#fef3c7;color:#d97706":f===2?"background:#f3f4f6;color:#6b7280":f===3?"background:#fed7aa;color:#b45309":"background:#f8fafc;color:#6b7280",r=s(d.score);return`
      <tr data-slug="${d.slug}" data-continent="${d.continent}">
        <td>
          <span class="rk-rank-badge" style="${c}">${f}</span>
        </td>
        <td>
          <a href="/city/${d.slug}" data-link class="rk-city-link">${d.name}</a>
          <div class="rk-city-country">${d.country}</div>
        </td>
        <td>
          <div class="rk-score-wrap">
            <span class="rk-score-num" style="color:${r}">${d.score}</span>
            <div class="rk-score-bar-wrap">
              <div class="rk-score-bar" style="width:${d.score}%;background:${r}"></div>
            </div>
          </div>
        </td>
        <td><strong>${d.wifi}</strong> <span style="color:#9ca3af;font-size:11px">Mbps</span></td>
        <td><strong>${d.safety}</strong><span style="color:#9ca3af;font-size:11px">/100</span></td>
        <td style="font-weight:700">$${d.budget.toLocaleString()}</td>
        <td>
          <span class="${d.visaOk?"rk-visa-yes":"rk-visa-no"}">
            ${d.visaOk?"✅ Yes":"Standard"}
          </span>
        </td>
        <td>
          <a href="/calculator" data-link data-ca="${d.slug}" class="rk-compare-link">Compare</a>
        </td>
      </tr>
    `}function v(){let d=[...a];if(i.region!=="all"&&(d=d.filter(r=>i.region==="Americas"?r.continent.includes("America"):r.continent===i.region)),i.search){const r=i.search.toLowerCase();d=d.filter(g=>g.name.toLowerCase().includes(r)||g.country.toLowerCase().includes(r))}const c={score:"score",wifi:"wifi",safety:"safety",budget:"budget",name:"name"}[i.col]||"score";d.sort((r,g)=>{const h=r[c],w=g[c];return typeof h=="string"?i.dir==="asc"?h.localeCompare(w):w.localeCompare(h):i.dir==="asc"?h-w:w-h}),d.length===0?e.innerHTML='<tr><td colspan="8" class="rk-empty">No cities match your search.</td></tr>':e.innerHTML=d.map((r,g)=>m(r,g+1)).join(""),n.textContent=`Showing ${d.length} of ${a.length} cities`,e.querySelectorAll("[data-link]").forEach(r=>{r.addEventListener("click",g=>{g.preventDefault(),window.history.pushState({},"",r.getAttribute("href")),window.dispatchEvent(new PopStateEvent("popstate"))})})}document.querySelectorAll(".rk-table th[data-col]").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.col;if(f==="rank"||f==="visa")return;i.col===f?i.dir=i.dir==="desc"?"asc":"desc":(i.col=f,i.dir="desc"),document.querySelectorAll(".rk-table th").forEach(r=>r.classList.remove("is-sorted")),d.classList.add("is-sorted");const c=d.querySelector(".sort-arrow");c&&(c.textContent=i.dir==="desc"?"↓":"↑"),v()})}),document.querySelectorAll("[data-region]").forEach(d=>{d.addEventListener("click",()=>{document.querySelectorAll("[data-region]").forEach(f=>f.classList.remove("is-active")),d.classList.add("is-active"),i.region=d.dataset.region,v()})}),o==null||o.addEventListener("input",d=>{i.search=d.target.value.trim(),v()}),document.querySelectorAll(".rk-compare-card").forEach(d=>{d.addEventListener("click",f=>{f.preventDefault();const c=d.dataset.ca,r=d.dataset.cb,g=`/calculator${c&&r?`?a=${c}&b=${r}`:""}`;window.history.pushState({},"",g),window.dispatchEvent(new PopStateEvent("popstate"))})}),v()}function et(){const t=H().length,a=`
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
            <div class="ab-stat__num">${t}+</div>
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
            <div class="ab-feature__desc">Detailed breakdowns for ${t} destinations — housing, food, transport, coworking and more. Each updated quarterly.</div>
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
  `;return Y({title:"About TripCost — Free Cost of Living Intelligence",description:"TripCost provides free, transparent cost of living data for digital nomads, expats and remote workers. Real data, updated quarterly, no ads.",canonical:"/about"}),A(a)}function tt({eyebrow:t,title:a,subtitle:e,sections:n}){const o=n.map(s=>`<a href="#${s.id}" class="lp-toc__link">${s.title}</a>`).join(""),i=n.map(s=>`
    <div class="lp-section" id="${s.id}">
      <h2 class="lp-section__title">${s.title}</h2>
      ${s.content}
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
        <p class="lp-hero__eyebrow">${t}</p>
        <h1 class="lp-hero__title">${a}</h1>
        <p class="lp-hero__sub">${e}</p>
      </div>
    </section>

    <div class="container">
      <div class="lp-layout">
        <aside class="lp-toc">
          <div class="lp-toc__label">Contents</div>
          ${o}
          <div class="lp-toc__date">
            Last updated<br>
            ${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long"})}
          </div>
        </aside>
        <div class="lp-body">${i}</div>
      </div>
    </div>
  `}function at(){return A(tt({eyebrow:"Legal",title:"Legal Notice",subtitle:"Important information about TripCost and our services.",sections:[{id:"service",title:"Service Provider",content:"<p>TripCost is a free online platform providing cost of living information and budget planning tools for digital nomads, remote workers and expats. This website operates for informational purposes only and does not constitute financial, legal or relocation advice.</p>"},{id:"disclaimer",title:"Disclaimer",content:`<p>All information on TripCost is provided for general informational purposes. While we strive for accuracy, we make no warranties — express or implied — about the completeness, accuracy or reliability of the data presented.</p>
        <p>Any reliance you place on our information is strictly at your own risk. TripCost shall not be liable for any direct, indirect or consequential loss arising from your use of this website.</p>`},{id:"data-sources",title:"Data Sources",content:"<p>Cost data is compiled from publicly available databases, government statistical offices, community-contributed information and third-party cost-of-living indexes. We cross-reference multiple sources and update data quarterly. We do not guarantee the accuracy of third-party sources.</p>"},{id:"external-links",title:"External Links",content:"<p>This website may link to external sites not under our control. We have no control over the nature, content or availability of those sites. Inclusion of any link does not imply recommendation or endorsement.</p>"},{id:"copyright",title:"Copyright",content:"<p>All original content on TripCost — including text, structure and interface design — is the property of TripCost and protected under international copyright law. Unauthorised reproduction or distribution is prohibited. City and country images are sourced from Unsplash under their free licence.</p>"},{id:"modifications",title:"Modifications",content:"<p>We reserve the right to modify, suspend or discontinue any aspect of our services at any time without prior notice. Legal terms may be updated at any time; continued use of the service constitutes acceptance of the current version.</p>"},{id:"governing-law",title:"Governing Law",content:"<p>These terms are governed by applicable laws. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the appropriate courts.</p>"}]}))}function ot({eyebrow:t,title:a,subtitle:e,sections:n}){const o=n.map(s=>`<a href="#${s.id}" class="lp-toc__link">${s.title}</a>`).join(""),i=n.map(s=>`
    <div class="lp-section" id="${s.id}">
      <h2 class="lp-section__title">${s.title}</h2>
      ${s.content}
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
        <p class="lp-hero__eyebrow">${t}</p>
        <h1 class="lp-hero__title">${a}</h1>
        <p class="lp-hero__sub">${e}</p>
      </div>
    </section>
    <div class="container">
      <div class="lp-layout">
        <aside class="lp-toc">
          <div class="lp-toc__label">Contents</div>
          ${o}
          <div class="lp-toc__date">Last updated<br>${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long"})}</div>
        </aside>
        <div class="lp-body">${i}</div>
      </div>
    </div>`}function it(){return A(ot({eyebrow:"Privacy",title:"Privacy Policy",subtitle:"How we collect, use and protect your information.",sections:[{id:"intro",title:"Introduction",content:"<p>TripCost is committed to protecting your privacy. This policy explains how we handle information when you use our website. We built TripCost with a privacy-first mindset: we collect as little data as possible and never sell it.</p>"},{id:"what-we-collect",title:"Information We Collect",content:`
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
          <p>To exercise any of these rights, contact us through our official channels.</p>`},{id:"children",title:"Children's Privacy",content:"<p>TripCost is not directed at individuals under 16. We do not knowingly collect data from minors. If you believe a child has submitted personal information, contact us and we will delete it promptly.</p>"},{id:"changes",title:"Changes to This Policy",content:"<p>We may update this Privacy Policy periodically. Material changes will be reflected by the updated date below. Continued use of TripCost after changes constitutes acceptance of the revised policy.</p>"},{id:"contact",title:"Contact",content:"<p>Questions about this Privacy Policy? Contact us through our official channels and we'll respond as promptly as possible.</p>"}]}))}function rt({eyebrow:t,title:a,subtitle:e,sections:n}){const o=n.map(s=>`<a href="#${s.id}" class="lp-toc__link">${s.title}</a>`).join(""),i=n.map(s=>`
    <div class="lp-section" id="${s.id}">
      <h2 class="lp-section__title">${s.title}</h2>
      ${s.content}
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
        <p class="lp-hero__eyebrow">${t}</p>
        <h1 class="lp-hero__title">${a}</h1>
        <p class="lp-hero__sub">${e}</p>
      </div>
    </section>
    <div class="container">
      <div class="lp-layout">
        <aside class="lp-toc">
          <div class="lp-toc__label">Contents</div>
          ${o}
          <div class="lp-toc__date">Last updated<br>${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long"})}</div>
        </aside>
        <div class="lp-body">${i}</div>
      </div>
    </div>`}function nt(){return A(rt({eyebrow:"Terms",title:"Terms of Service",subtitle:"Please read these terms carefully before using TripCost.",sections:[{id:"agreement",title:"Agreement to Terms",content:"<p>By accessing or using TripCost, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the website.</p>"},{id:"service",title:"Service Description",content:`<p>TripCost provides cost of living data, budget planning tools and nomad rankings for informational purposes only. Our services include:</p>
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
          </ul>`},{id:"disclaimers",title:"Disclaimer of Warranties",content:'<p>TripCost is provided on an "as is" and "as available" basis. We make no warranties — expressed or implied — including warranties of merchantability or fitness for a particular purpose. We do not warrant that the service will be uninterrupted, error-free or free of harmful components.</p>'},{id:"liability",title:"Limitation of Liability",content:"<p>TripCost and its operators shall not be liable for any direct, indirect, incidental or consequential damages arising from your use of the service, including but not limited to financial decisions made based on our data.</p>"},{id:"modifications",title:"Modifications",content:"<p>We reserve the right to modify or discontinue the service at any time without notice. We may update these Terms at any time; continued use constitutes acceptance of the revised terms.</p>"},{id:"governing-law",title:"Governing Law",content:"<p>These terms are governed by applicable laws. Disputes will be subject to the exclusive jurisdiction of the appropriate courts.</p>"},{id:"contact",title:"Contact",content:"<p>Questions about these Terms of Service? Reach us through our official contact channels.</p>"}]}))}function _e(t){return`https://picsum.photos/seed/country-${t}/1200/800`}function fe(t){return`https://picsum.photos/seed/ranking-${t}/1400/900`}function st(){Y({title:"Best Cities by Country — Cost of Living & Quality of Life",description:"Discover the best cities to live in by country. Compare cost of living, safety, WiFi and lifestyle across top destinations worldwide."});const t=Me()??[];if(!t.length)return A(`
      <div style="text-align:center;padding:120px 24px">
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">No data available</h1>
        <a href="/destinations" data-link class="btn btn--primary btn--lg">Browse All Cities</a>
      </div>
    `);const a=[...t].sort((o,i)=>o.name.localeCompare(i.name)),e=a.map(o=>{const i=_e(o.slug);return`
      <a href="/best-cities/${o.slug}" data-link class="bch-card">
        <div class="bch-card__img">
          <img src="${i}" alt="Best cities in ${o.name}" loading="lazy" />
          <div class="bch-card__overlay"></div>
          <div class="bch-card__name">${o.name}</div>
        </div>
        <div class="bch-card__body">
          <span class="bch-card__cta">Explore cities →</span>
        </div>
      </a>
    `}).join(""),n=`
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
          Browse ${a.length} countries and discover which cities offer the best cost of living, safety and quality of life.
        </p>
      </div>
    </section>

    <section class="bch-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">All Countries</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">
          Select a country to explore
        </h2>
        <div class="bch-grid">${e}</div>
      </div>
    </section>
  `;return A(n)}function ge(t){const{country:a,profile:e}=t,n=["solo","family","nomad"].includes(e)?e:"solo",o=ze(a);if(!o.length)return A(`
      <div style="text-align:center;padding:120px 24px">
        <div style="font-size:48px;margin-bottom:16px">🌍</div>
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">No cities found</h1>
        <p style="color:#6b7280;margin-bottom:32px">We don't have data for this country yet.</p>
        <a href="/best-cities" data-link class="btn btn--primary btn--lg">Browse All Countries</a>
      </div>
    `);const i=o[0].country,s=_e(a),m=o.map(r=>({...r,score:ve(r,n)})).sort((r,g)=>g.score-r.score);Y({title:`Best Cities in ${i} — Cost of Living ${new Date().getFullYear()}`,description:`Compare the best cities to live in ${i} based on cost of living, safety, WiFi and quality of life. Updated ${new Date().getFullYear()}.`,canonical:`/best-cities/${a}/${n}`}),G("page-jsonld",{"@context":"https://schema.org","@type":"WebPage",name:`Best Cities in ${i}`,url:`https://tripcost.co/best-cities/${a}`,breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://tripcost.co/"},{"@type":"ListItem",position:2,name:"Best Cities",item:"https://tripcost.co/best-cities"},{"@type":"ListItem",position:3,name:i,item:`https://tripcost.co/best-cities/${a}`}]}});function v(r){return r>=80?"#10b981":r>=60?"#f59e0b":"#ef4444"}const d=["solo","family","nomad"].map(r=>`
    <a href="/best-cities/${a}/${r}" data-link
       class="bcp-profile-btn${n===r?" is-active":""}">
      ${r==="solo"?"👤 Solo":r==="family"?"👨‍👩‍👧 Family":"🌍 Nomad"}
    </a>
  `).join(""),f=m.map((r,g)=>{var x,_,l,b,y,k,I,E,M,R,z;const h=Math.round((((_=(x=r.costs)==null?void 0:x.accommodation)==null?void 0:_.center)??0)*30+(((b=(l=r.costs)==null?void 0:l.food)==null?void 0:b.standard)??0)*30+(((y=r.costs)==null?void 0:y.transport)??0)+(((k=r.costs)==null?void 0:k.coworking)??0)),w=v(((I=r.digitalNomad)==null?void 0:I.overallScore)??0),p=g===0?"🏆":g===1?"🥈":g===2?"🥉":`#${g+1}`;return`
      <a href="/city/${r.slug}" data-link class="bcp-card${g===0?" bcp-card--top":""}">
        <div class="bcp-card__img">
          <img src="${r.image}" alt="${r.name}" loading="lazy" />
          <div class="bcp-card__img-overlay"></div>
          <span class="bcp-card__rank">${p}</span>
          <span class="bcp-card__score-badge" style="background:${w}">
            ${((E=r.digitalNomad)==null?void 0:E.overallScore)??"—"}/100
          </span>
        </div>
        <div class="bcp-card__body">
          <div class="bcp-card__top">
            <div>
              <p class="bcp-card__name">${r.name}</p>
              <p class="bcp-card__country">${r.country}</p>
            </div>
            <div class="bcp-card__price">
              <div class="bcp-card__price-label">From</div>
              <div class="bcp-card__price-val">$${h.toLocaleString()}<em>/mo</em></div>
            </div>
          </div>
          <div class="bcp-card__metrics">
            <span>🛡 ${((M=r.digitalNomad)==null?void 0:M.safetyScore)??"—"}</span>
            <span>📡 ${((R=r.digitalNomad)==null?void 0:R.wifiSpeed)??"—"} Mbps</span>
            <span>${(z=r.visa)!=null&&z.remoteFriendly?"✅ Nomad visa":"⬜ Standard"}</span>
          </div>
        </div>
      </a>
    `}).join(""),c=`
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
      <img class="bcp-hero__img" src="${s}" alt="${i}" />
      <div class="bcp-hero__gradient"></div>
      <div class="bcp-hero__content">
        <div class="container">
          <p class="bcp-hero__eyebrow">Best Cities</p>
          <h1 class="bcp-hero__title">Best cities in ${i}</h1>
          <p class="bcp-hero__sub">${m.length} cit${m.length===1?"y":"ies"} ranked by cost, safety, WiFi and ${n} lifestyle score.</p>
        </div>
      </div>
    </section>

    <!-- PROFILE CONTROLS -->
    <div class="bcp-controls">
      <div class="container">
        <div class="bcp-controls__inner">
          <span class="bcp-controls__label">Profile:</span>
          ${d}
        </div>
      </div>
    </div>

    <!-- CITIES GRID -->
    <section class="bcp-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:6px">
          Ranked for ${n}
        </p>
        <h2 style="font-size:24px;font-weight:800;color:#111827;letter-spacing:-0.02em;margin-bottom:4px">
          Top ${m.length} cit${m.length===1?"y":"ies"} in ${i}
        </h2>
        <p style="font-size:14px;color:#9ca3af">Click any city for a full cost breakdown and guide.</p>
        <div class="bcp-grid">${f}</div>
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
  `;return A(c)}function ct(t,a="solo"){const e=se(t.slug),n=e.avgSafetyScore??0,o=e.avgInternetSpeed??0,i=e.avgMonthlyCost??0,s=i?Math.max(0,100-i/50):0,m=t.macro??{},v=t.tax??{},d=t.nomad??{},f=t.family??{},c=m.safetyIndex??0,r=m.healthcareIndex??0,g=m.infrastructureScore??0,h=m.qualityOfLifeIndex??0,w=v.taxFriendlinessScore??0,p=o||d.avgInternetSpeed||0,x=d.visaEaseScore??0,_=d.coworkingDensityScore??0,l=f.educationScore??0,b=f.familySafetyScore??0,y=f.suburbanAffordabilityScore??0,k=n||c;let I=0;return a==="nomad"?I=k*.15+p*.25+x*.2+_*.2+w*.1+h*.1:a==="family"?I=b*.25+l*.25+y*.2+r*.15+k*.15:a==="solo"?I=k*.2+g*.2+p*.2+w*.15+h*.15+s*.1:I=k*.2+r*.2+g*.2+h*.2+w*.2,Math.round(I)}function lt(t){return le.find(a=>a.slug===t)||null}function dt(t="solo",a=30){return[...le].map(e=>({...e,score:ct(e,t)})).sort((e,n)=>n.score-e.score).slice(0,a)}function pt(t){return H().filter(e=>e.countrySlug?e.countrySlug===t:e.country?e.country.toLowerCase().replace(/\s+/g,"-")===t:!1)}function se(t){var s,m,v;const a=lt(t),e=pt(t);if(!e.length)return{avgMonthlyCost:((s=a==null?void 0:a.macro)==null?void 0:s.costOfLivingIndex)??"N/A",avgSafetyScore:((m=a==null?void 0:a.macro)==null?void 0:m.safetyIndex)??"N/A",avgInternetSpeed:((v=a==null?void 0:a.nomad)==null?void 0:v.avgInternetSpeed)??"N/A",cityCount:0,isFallback:!0};let n=0,o=0,i=0;return e.forEach(d=>{var g,h,w,p,x,_;const f=((h=(g=d.costs)==null?void 0:g.accommodation)==null?void 0:h.center)??0,c=((p=(w=d.costs)==null?void 0:w.food)==null?void 0:p.standard)??0,r=f+c*30;n+=r,o+=((x=d.digitalNomad)==null?void 0:x.safetyScore)??0,i+=((_=d.digitalNomad)==null?void 0:_.wifiSpeed)??0}),{avgMonthlyCost:Math.round(n/e.length),avgSafetyScore:Math.round(o/e.length),avgInternetSpeed:Math.round(i/e.length),cityCount:e.length,isFallback:!1}}function ue(t={}){const{profile:a}=t,e=["solo","family","nomad"].includes(a)?a:"solo",n=dt(e,30);if(!n.length)return A(`
      <div style="text-align:center;padding:120px 24px">
        <h1 style="font-size:28px;font-weight:800;color:#111827">No data available</h1>
        <a href="/destinations" data-link class="btn btn--primary btn--lg" style="margin-top:24px;display:inline-block">Browse Cities</a>
      </div>
    `);Y({title:`Best Countries for ${e==="nomad"?"Digital Nomads":e.charAt(0).toUpperCase()+e.slice(1)} — ${new Date().getFullYear()} Rankings`,description:`Top countries ranked by safety, cost of living, infrastructure and ${e} lifestyle quality. Updated ${new Date().getFullYear()}.`,canonical:`/best-countries/${e}`}),G("page-jsonld",{"@context":"https://schema.org","@type":"WebPage",name:`Best Countries for ${e}`,url:`https://tripcost.co/best-countries/${e}`,breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://tripcost.co/"},{"@type":"ListItem",position:2,name:"Best Countries",item:"https://tripcost.co/best-countries"},{"@type":"ListItem",position:3,name:e,item:`https://tripcost.co/best-countries/${e}`}]}});function o(g){return g>=80?"#10b981":g>=60?"#f59e0b":"#ef4444"}const i=["solo","family","nomad"].map(g=>`
    <a href="/best-countries/${g}" data-link
       class="bco-profile-btn${e===g?" is-active":""}">
      ${g==="solo"?"👤 Solo":g==="family"?"👨‍👩‍👧 Family":"🌍 Nomad"}
    </a>
  `).join(""),s=["🥇","🥈","🥉"],m=[1,0,2],v=n.slice(0,3),d=m.map(g=>{var _;const h=v[g];if(!h)return"";const w=se(h.slug),p=fe(h.slug);return`
      <div class="bco-pod${g===0?" bco-pod--gold":""}">
        <div class="bco-pod__medal">${s[g]}</div>
        <div class="bco-pod__img">
          <img src="${p}" alt="${h.name}" loading="lazy" />
          <div class="bco-pod__overlay"></div>
        </div>
        <div class="bco-pod__body">
          <div class="bco-pod__score" style="color:${o(h.score)}">${h.score}<span>/100</span></div>
          <div class="bco-pod__name">${h.name}</div>
          <div class="bco-pod__flag">${((_=h.assets)==null?void 0:_.flagEmoji)??""} ${h.continent??""}</div>
          <div class="bco-pod__metrics">
            ${w.cityCount>0?`<span>🏙 ${w.cityCount} cit${w.cityCount>1?"ies":"y"}</span>`:""}
            ${w.avgSafetyScore?`<span>🛡 ${w.avgSafetyScore}/100</span>`:""}
            ${w.avgMonthlyCost&&!w.isFallback?`<span>💰 ~$${Number(w.avgMonthlyCost).toLocaleString()}/mo</span>`:""}
          </div>
          <a href="/best-cities/${h.slug}" data-link class="bco-pod__btn">Explore cities →</a>
        </div>
      </div>
    `}).join(""),f=n.slice(3).map((g,h)=>{var x;const w=se(g.slug),p=fe(g.slug);return`
      <a href="/best-cities/${g.slug}" data-link class="bco-card">
        <div class="bco-card__img">
          <img src="${p}" alt="${g.name}" loading="lazy" />
          <div class="bco-card__overlay"></div>
          <span class="bco-card__rank">#${h+4}</span>
        </div>
        <div class="bco-card__body">
          <div class="bco-card__top">
            <div>
              <p class="bco-card__name">${((x=g.assets)==null?void 0:x.flagEmoji)??""} ${g.name}</p>
              <p class="bco-card__region">${g.continent??""}</p>
            </div>
            <div class="bco-card__score" style="color:${o(g.score)}">${g.score}<span>/100</span></div>
          </div>
          <div class="bco-card__metrics">
            ${w.cityCount>0?`<span>🏙 ${w.cityCount} cities</span>`:""}
            ${w.avgSafetyScore?`<span>🛡 ${w.avgSafetyScore}</span>`:""}
            ${w.avgInternetSpeed&&!w.isFallback?`<span>📡 ${w.avgInternetSpeed} Mbps</span>`:""}
          </div>
        </div>
      </a>
    `}).join(""),r=`
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
        <h1 class="bco-hero__title">Best Countries for<br><em>${e==="nomad"?"Digital Nomads":e.charAt(0).toUpperCase()+e.slice(1)}</em></h1>
        <p class="bco-hero__sub">
          ${n.length} countries ranked by safety, cost of living, infrastructure and ${e} lifestyle quality.
        </p>
      </div>
    </section>

    <!-- PROFILE CONTROLS -->
    <div class="bco-controls">
      <div class="container">
        <div class="bco-controls__inner">
          <span class="bco-controls__label">Profile:</span>
          ${i}
        </div>
      </div>
    </div>

    <!-- TOP 3 PODIUM -->
    <section class="bco-podium-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Top 3 Overall</p>
        <h2 style="font-size:24px;font-weight:800;color:#111827;letter-spacing:-0.02em">Best countries this year</h2>
        <div class="bco-podium">${d}</div>
      </div>
    </section>

    <!-- REST OF RANKINGS -->
    <section class="bco-rest-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">Full ranking</p>
        <h2 style="font-size:24px;font-weight:800;color:#111827;letter-spacing:-0.02em">Positions 4–${n.length}</h2>
        <div class="bco-grid">${f}</div>
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
  `;return A(r)}const mt=[{path:"/",component:Ae,setup:De},{path:"/destinations",component:Pe,setup:qe},{path:"/city/:slug",component:Qe,setup:We},{path:"/compare/:cities",component:Ye},{path:"/calculator",component:Ke,setup:Je},{path:"/nomad",component:Ze,setup:Xe},{path:"/about",component:et},{path:"/legal",component:at},{path:"/privacy",component:it},{path:"/terms",component:nt},{path:"/best-cities",component:st},{path:"/best-cities/:country/:profile",component:ge},{path:"/best-cities/:country",component:ge},{path:"/best-countries",component:ue},{path:"/best-countries/:profile",component:ue}];function be(t){typeof gtag=="function"&&gtag("event","page_view",{page_path:t,page_title:document.title,page_location:window.location.href})}function X(t,a={}){typeof gtag=="function"&&gtag("event",t,a)}function ft(){be(window.location.pathname),window.addEventListener("popstate",()=>{setTimeout(()=>be(window.location.pathname),100)}),document.addEventListener("click",t=>{const a=t.target.closest("[data-link]");if(!a)return;const e=a.getAttribute("href");e&&(e==="/calculator"&&X("calculator_open",{source:window.location.pathname}),e.startsWith("/city/")&&X("city_view",{city:e.replace("/city/","")}),e==="/destinations"&&X("destinations_open"),e.startsWith("/compare/")&&X("comparison_view",{cities:e.replace("/compare/","")}))}),document.addEventListener("click",t=>{t.target.closest("#share-btn")&&X("comparison_shared",{page:window.location.pathname})})}function gt(){const t=["linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)","linear-gradient(135deg, #064e3b 0%, #065f46 100%)","linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)","linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)","linear-gradient(135deg, #4a044e 0%, #7e22ce 100%)"];document.addEventListener("error",a=>{const e=a.target;if(e.tagName!=="IMG"||e.dataset.fallbackApplied)return;e.dataset.fallbackApplied="true";const n=(e.src||"").split("").reduce((s,m)=>s+m.charCodeAt(0),0),o=t[n%t.length],i=document.createElement("div");i.style.cssText=`
      width:100%; height:100%;
      background:${o};
      display:flex; align-items:center; justify-content:center;
      color:rgba(255,255,255,0.3); font-size:32px;
    `,i.textContent="🌍",e.parentNode.replaceChild(i,e)},!0)}function ut(){const t=document.getElementById("app");if(!t){console.error("App root not found");return}gt(),ft(),we(t,mt),document.addEventListener("click",a=>{const e=a.target.closest("a[data-link]");if(e){a.preventDefault();const n=e.getAttribute("href");window.history.pushState({},"",n),window.dispatchEvent(new PopStateEvent("popstate"))}})}document.addEventListener("DOMContentLoaded",ut);
