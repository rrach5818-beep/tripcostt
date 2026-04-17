/**
 * ResourcesPage -- Editorial research hub
 * Positions the free PDF as the "Digital Nomad Cities Report 2026"
 * alongside other tools. Authoritative tone, no promotional language.
 * ASCII-only comments (Vite constraint)
 */

import { setPageMeta, injectSchema } from '../logic/setPageMeta.js';
import { MainLayout } from '../layouts/MainLayout.js';
import { trackFreeGuideDownload } from '../logic/analytics.js';

const REPORT_PDF = '/ebooks/LivingCostAtlas_FreeGuide_Top10_2026.pdf';

export function ResourcesPage() {
  setPageMeta({
    title: 'Research & Resources | Living Cost Atlas',
    description: 'The Digital Nomad Cities Report 2026 and other research tools published by Living Cost Atlas. Data-driven insights for remote workers and expats.',
    image: 'https://www.livingcostatlas.com/og-image.png',
  });

  // Schema.org Article for the free Report
  injectSchema({
    '@context': 'https://schema.org',
    '@type': 'Report',
    name: 'Digital Nomad Cities Report 2026',
    datePublished: '2026-04-01',
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'Living Cost Atlas',
      url: 'https://www.livingcostatlas.com'
    },
    about: 'Annual ranking of the most attractive cities for digital nomads and remote workers',
    url: 'https://www.livingcostatlas.com/resources'
  });

  const content = `
    <style>
      .res-hero {
        background:#fafbfc;padding:72px 0 56px;border-bottom:1px solid #e5e7eb;
      }
      .res-hero__inner {
        max-width:880px;margin:0 auto;padding:0 32px;
      }
      .res-eyebrow {
        font-size:11px;font-weight:700;letter-spacing:2.5px;color:#6366f1;
        text-transform:uppercase;margin-bottom:18px;
      }
      .res-hero__title {
        font-size:clamp(32px,4.5vw,48px);font-weight:900;color:#0f172a;
        letter-spacing:-0.03em;line-height:1.12;margin:0 0 20px;
      }
      .res-hero__sub {
        font-size:17px;color:#475569;line-height:1.65;max-width:640px;margin:0;
      }

      .res-wrap { max-width:980px;margin:0 auto;padding:56px 32px 80px; }

      /* Featured report */
      .res-featured {
        display:grid;grid-template-columns:220px 1fr;gap:40px;
        padding:40px;background:#fff;border:1px solid #e5e7eb;border-radius:16px;
        align-items:center;margin-bottom:56px;
        box-shadow:0 2px 4px rgba(15,23,42,0.02);
      }
      .res-featured__cover {
        position:relative;aspect-ratio:600/850;border-radius:6px;overflow:hidden;
        box-shadow:0 20px 40px rgba(15,23,42,0.15),0 0 0 1px rgba(15,23,42,0.06);
      }
      .res-featured__cover img { width:100%;height:100%;display:block;object-fit:cover; }
      .res-featured__body h2 {
        font-size:28px;font-weight:800;color:#0f172a;margin:10px 0 8px;
        letter-spacing:-0.02em;line-height:1.2;
      }
      .res-featured__meta {
        display:flex;gap:14px;font-size:12px;color:#64748b;
        margin-bottom:14px;
      }
      .res-featured__meta span {
        display:inline-flex;align-items:center;gap:6px;
      }
      .res-featured__desc {
        font-size:15px;color:#475569;line-height:1.65;margin:0 0 20px;
      }
      .res-featured__actions {
        display:flex;align-items:center;gap:18px;flex-wrap:wrap;
      }
      .res-btn {
        display:inline-flex;align-items:center;gap:8px;
        padding:11px 22px;border-radius:8px;font-weight:600;font-size:14px;
        background:#0f172a;color:#fff;text-decoration:none;
        transition:background 0.15s;
      }
      .res-btn:hover { background:#1e293b; }
      .res-btn svg { width:16px;height:16px; }
      .res-btn--ghost {
        background:transparent;color:#475569;padding:11px 0;
      }
      .res-btn--ghost:hover { color:#0f172a;background:transparent; }

      /* Other resources grid */
      .res-section-title {
        font-size:13px;font-weight:700;letter-spacing:1.5px;color:#94a3b8;
        text-transform:uppercase;margin:0 0 24px;
        padding-bottom:14px;border-bottom:1px solid #e5e7eb;
      }
      .res-grid {
        display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;
      }
      .res-card {
        padding:28px 26px;background:#fff;border:1px solid #e5e7eb;border-radius:12px;
        text-decoration:none;color:inherit;transition:border-color 0.15s,transform 0.15s;
        display:flex;flex-direction:column;
      }
      .res-card:hover {
        border-color:#cbd5e1;transform:translateY(-2px);
      }
      .res-card__type {
        font-size:10px;font-weight:700;letter-spacing:1.8px;color:#6366f1;
        text-transform:uppercase;margin-bottom:10px;
      }
      .res-card h3 {
        font-size:17px;font-weight:700;color:#0f172a;margin:0 0 8px;
        letter-spacing:-0.01em;line-height:1.3;
      }
      .res-card p {
        font-size:13.5px;color:#64748b;line-height:1.55;margin:0 0 16px;flex:1;
      }
      .res-card__link {
        font-size:13px;font-weight:600;color:#0f172a;
        display:inline-flex;align-items:center;gap:4px;
      }

      /* About / Methodology block */
      .res-about {
        margin-top:56px;padding:32px;background:#fafbfc;border-radius:12px;
      }
      .res-about h3 {
        font-size:16px;font-weight:700;color:#0f172a;margin:0 0 12px;
        letter-spacing:-0.01em;
      }
      .res-about p {
        font-size:14px;color:#475569;line-height:1.65;margin:0 0 10px;
      }
      .res-about p:last-child { margin:0; }

      @media (max-width:720px) {
        .res-featured { grid-template-columns:1fr;padding:28px;gap:24px;text-align:center; }
        .res-featured__cover { max-width:180px;margin:0 auto; }
        .res-featured__meta { justify-content:center; }
        .res-featured__actions { justify-content:center; }
      }
    </style>

    <section class="res-hero">
      <div class="res-hero__inner">
        <div class="res-eyebrow">Living Cost Atlas Research</div>
        <h1 class="res-hero__title">Research &amp; resources</h1>
        <p class="res-hero__sub">
          Reports, rankings, and tools published by Living Cost Atlas.
          Data-driven insights for people making relocation decisions.
        </p>
      </div>
    </section>

    <div class="res-wrap">

      <!-- Featured Report -->
      <article class="res-featured">
        <div class="res-featured__cover">
          <img src="/images/ebooks/lisbon-cover.png" alt="Digital Nomad Cities Report 2026 cover" width="200" height="283" loading="eager">
        </div>
        <div class="res-featured__body">
          <div class="res-eyebrow" style="margin-bottom:4px">Annual Report &middot; 6 pages</div>
          <h2>Digital Nomad Cities Report 2026</h2>
          <div class="res-featured__meta">
            <span>Published April 2026</span>
            <span>&middot;</span>
            <span>22 indicators</span>
            <span>&middot;</span>
            <span>10 cities analyzed</span>
          </div>
          <p class="res-featured__desc">
            An annual ranking of the ten most attractive destinations for
            remote workers and digital nomads, assessed across four
            dimensions: affordability, infrastructure, safety, and
            quality-of-life.
          </p>
          <div class="res-featured__actions">
            <a href="${REPORT_PDF}" class="res-btn" id="res-download-btn" download target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download PDF
            </a>
            <a href="${REPORT_PDF}" class="res-btn res-btn--ghost" target="_blank" rel="noopener">
              View in browser
            </a>
          </div>
        </div>
      </article>

      <!-- Other resources -->
      <h3 class="res-section-title">Tools &amp; data</h3>
      <div class="res-grid">

        <a href="/destinations" data-link class="res-card">
          <div class="res-card__type">Directory</div>
          <h3>City directory</h3>
          <p>Browse detailed cost profiles for 50 cities worldwide. Filter by cost, safety, or remote-work friendliness.</p>
          <span class="res-card__link">Explore &rarr;</span>
        </a>

        <a href="/calculator" data-link class="res-card">
          <div class="res-card__type">Interactive</div>
          <h3>Budget calculator</h3>
          <p>Estimate your monthly living cost in any city based on lifestyle profile, rent range, and included activities.</p>
          <span class="res-card__link">Open tool &rarr;</span>
        </a>

        <a href="/nomad" data-link class="res-card">
          <div class="res-card__type">Rankings</div>
          <h3>Digital nomad rankings</h3>
          <p>Interactive rankings across 50 cities. Sort and filter by WiFi, safety, cost, visa friendliness.</p>
          <span class="res-card__link">View rankings &rarr;</span>
        </a>

        <a href="/best-cities" data-link class="res-card">
          <div class="res-card__type">Lists</div>
          <h3>Best cities by profile</h3>
          <p>Curated lists by traveler type: budget-conscious, family, remote worker, retiree.</p>
          <span class="res-card__link">Browse lists &rarr;</span>
        </a>

        <a href="/best-countries" data-link class="res-card">
          <div class="res-card__type">Lists</div>
          <h3>Country benchmarks</h3>
          <p>Comparative country-level analysis covering tax, visa regimes, and cost of living.</p>
          <span class="res-card__link">Open benchmarks &rarr;</span>
        </a>

        <a href="/ebooks" data-link class="res-card">
          <div class="res-card__type">City Dossiers</div>
          <h3>City-level reports</h3>
          <p>22-page in-depth relocation dossiers for individual cities. Neighborhoods, visas, taxes, and risk factors.</p>
          <span class="res-card__link">See catalog &rarr;</span>
        </a>

      </div>

      <!-- Methodology block -->
      <section class="res-about">
        <h3>About our research</h3>
        <p>
          Living Cost Atlas tracks cost-of-living and quality-of-life indicators
          for 50 cities globally. The underlying dataset is refreshed quarterly
          and combines official statistics, crowd-sourced pricing, and in-house
          estimates.
        </p>
        <p>
          Reports published here are free to read, share, and cite. For
          methodology questions, please contact
          <a href="mailto:research@livingcostatlas.com" style="color:#0f172a;text-decoration:underline">research@livingcostatlas.com</a>.
        </p>
      </section>

    </div>
  `;

  // Track download click after render
  setTimeout(() => {
    const btn = document.getElementById('res-download-btn');
    if (btn) btn.addEventListener('click', () => {
      trackFreeGuideDownload();
    });
  }, 0);

  return MainLayout(content);
}

export default ResourcesPage;
