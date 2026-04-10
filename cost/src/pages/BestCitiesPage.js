import { MainLayout } from '../layouts/MainLayout.js';
import { getCitiesByCountry } from '../data/cityService.js';
import { calculateCityScore } from '../logic/cityRanking.js';
import { setPageMeta, injectSchema } from '../logic/setPageMeta.js';
import { getCountryImage } from '../utils/imageHelper.js';
import { formatCurrency } from '../logic/budgetCalculator.js';

export function BestCitiesPage(params) {
  const { country, profile } = params;

  const activeProfile = ['solo','family','nomad'].includes(profile) ? profile : 'solo';
  const cities = getCitiesByCountry(country);

  if (!cities.length) {
    return MainLayout(`
      <div style="text-align:center;padding:120px 24px">
        <div style="font-size:48px;margin-bottom:16px">🌍</div>
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">No cities found</h1>
        <p style="color:#6b7280;margin-bottom:32px">We don't have data for this country yet.</p>
        <a href="/best-cities" data-link class="btn btn--primary btn--lg">Browse All Countries</a>
      </div>
    `);
  }

  const countryName = cities[0].country;
  const countryImg  = getCountryImage(country);

  const ranked = cities
    .map(c => ({ ...c, score: calculateCityScore(c, activeProfile) }))
    .sort((a,b) => b.score - a.score);

  setPageMeta({
    title: `Best Cities in ${countryName} — Cost of Living ${new Date().getFullYear()}`,
    description: `Compare the best cities to live in ${countryName} based on cost of living, safety, WiFi and quality of life. Updated ${new Date().getFullYear()}.`,
    canonical: `/best-cities/${country}/${activeProfile}`
  });

  injectSchema('page-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Best Cities in ${countryName}`,
    url: `https://tripcost.co/best-cities/${country}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://tripcost.co/' },
        { '@type': 'ListItem', position: 2, name: 'Best Cities',  item: 'https://tripcost.co/best-cities' },
        { '@type': 'ListItem', position: 3, name: countryName,    item: `https://tripcost.co/best-cities/${country}` }
      ]
    }
  });

  function sc(v) { return v >= 80 ? '#10b981' : v >= 60 ? '#f59e0b' : '#ef4444'; }

  const profileBtns = ['solo','family','nomad'].map(p => `
    <a href="/best-cities/${country}/${p}" data-link
       class="bcp-profile-btn${activeProfile===p?' is-active':''}">
      ${ p==='solo'?'👤 Solo' : p==='family'?'👨‍👩‍👧 Family' : '🌍 Nomad' }
    </a>
  `).join('');

  const cityCardsHtml = ranked.map((city, i) => {
    const monthly = Math.round(
      (city.costs?.accommodation?.center ?? 0) * 30 +
      (city.costs?.food?.standard ?? 0) * 30 +
      (city.costs?.transport ?? 0) +
      (city.costs?.coworking ?? 0)
    );
    const scoreColor = sc(city.digitalNomad?.overallScore ?? 0);
    const rankMark = i === 0 ? '🏆' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i+1}`;
    return `
      <a href="/city/${city.slug}" data-link class="bcp-card${i===0?' bcp-card--top':''}">
        <div class="bcp-card__img">
          <img src="${city.image}" alt="${city.name}" loading="lazy" />
          <div class="bcp-card__img-overlay"></div>
          <span class="bcp-card__rank">${rankMark}</span>
          <span class="bcp-card__score-badge" style="background:${scoreColor}">
            ${city.digitalNomad?.overallScore ?? '—'}/100
          </span>
        </div>
        <div class="bcp-card__body">
          <div class="bcp-card__top">
            <div>
              <p class="bcp-card__name">${city.name}</p>
              <p class="bcp-card__country">${city.country}</p>
            </div>
            <div class="bcp-card__price">
              <div class="bcp-card__price-label">From</div>
              <div class="bcp-card__price-val">$${monthly.toLocaleString()}<em>/mo</em></div>
            </div>
          </div>
          <div class="bcp-card__metrics">
            <span>🛡 ${city.digitalNomad?.safetyScore ?? '—'}</span>
            <span>📡 ${city.digitalNomad?.wifiSpeed ?? '—'} Mbps</span>
            <span>${city.visa?.remoteFriendly ? '✅ Nomad visa' : '⬜ Standard'}</span>
          </div>
        </div>
      </a>
    `;
  }).join('');

  const content = `
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
      <img class="bcp-hero__img" src="${countryImg}" alt="${countryName}" />
      <div class="bcp-hero__gradient"></div>
      <div class="bcp-hero__content">
        <div class="container">
          <p class="bcp-hero__eyebrow">Best Cities</p>
          <h1 class="bcp-hero__title">Best cities in ${countryName}</h1>
          <p class="bcp-hero__sub">${ranked.length} cit${ranked.length===1?'y':'ies'} ranked by cost, safety, WiFi and ${activeProfile} lifestyle score.</p>
        </div>
      </div>
    </section>

    <!-- PROFILE CONTROLS -->
    <div class="bcp-controls">
      <div class="container">
        <div class="bcp-controls__inner">
          <span class="bcp-controls__label">Profile:</span>
          ${profileBtns}
        </div>
      </div>
    </div>

    <!-- CITIES GRID -->
    <section class="bcp-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:6px">
          Ranked for ${activeProfile}
        </p>
        <h2 style="font-size:24px;font-weight:800;color:#111827;letter-spacing:-0.02em;margin-bottom:4px">
          Top ${ranked.length} cit${ranked.length===1?'y':'ies'} in ${countryName}
        </h2>
        <p style="font-size:14px;color:#9ca3af">Click any city for a full cost breakdown and guide.</p>
        <div class="bcp-grid">${cityCardsHtml}</div>
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
  `;

  return MainLayout(content);
}

export default BestCitiesPage;
