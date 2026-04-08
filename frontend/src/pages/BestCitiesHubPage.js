import { MainLayout } from '../layouts/MainLayout.js';
import { getCountriesWithCities } from '../data/cityService.js';
import { setPageMeta } from '../logic/setPageMeta.js';
import { getCountryImage } from '../utils/imageHelper.js';

export function BestCitiesHubPage() {
  setPageMeta({
    title: 'Best Cities by Country — Cost of Living & Quality of Life',
    description: 'Discover the best cities to live in by country. Compare cost of living, safety, WiFi and lifestyle across top destinations worldwide.'
  });

  const countries = getCountriesWithCities() ?? [];

  if (!countries.length) {
    return MainLayout(`
      <div style="text-align:center;padding:120px 24px">
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">No data available</h1>
        <a href="/destinations" data-link class="btn btn--primary btn--lg">Browse All Cities</a>
      </div>
    `);
  }

  const sorted = [...countries].sort((a,b) => a.name.localeCompare(b.name));

  const cardsHtml = sorted.map(country => {
    const img = getCountryImage(country.slug);
    return `
      <a href="/best-cities/${country.slug}" data-link class="bch-card">
        <div class="bch-card__img">
          <img src="${img}" alt="Best cities in ${country.name}" loading="lazy" />
          <div class="bch-card__overlay"></div>
          <div class="bch-card__name">${country.name}</div>
        </div>
        <div class="bch-card__body">
          <span class="bch-card__cta">Explore cities →</span>
        </div>
      </a>
    `;
  }).join('');

  const content = `
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
          Browse ${sorted.length} countries and discover which cities offer the best cost of living, safety and quality of life.
        </p>
      </div>
    </section>

    <section class="bch-section">
      <div class="container">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:8px">All Countries</p>
        <h2 style="font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em">
          Select a country to explore
        </h2>
        <div class="bch-grid">${cardsHtml}</div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

export default BestCitiesHubPage;
