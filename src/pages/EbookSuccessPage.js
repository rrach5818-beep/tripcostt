/**
 * EbookSuccessPage -- Post-payment page: download + regional upsell
 * ASCII-only (Vite/Vercel constraint)
 */

import { setPageMeta } from '../logic/setPageMeta.js';
import { MainLayout } from '../layouts/MainLayout.js';
import { trackEbookPurchase } from '../logic/analytics.js';
import { getEbook, EBOOK_CATALOG } from '../data/ebookCatalog.js';

// Smart regional recommendations: 3 related cities per purchased city
const RELATED = {
  lisbon:        ['barcelona', 'prague',      'berlin'     ],
  barcelona:     ['lisbon',    'paris',        'prague'     ],
  paris:         ['barcelona', 'amsterdam',    'lisbon'     ],
  berlin:        ['prague',    'amsterdam',    'barcelona'  ],
  prague:        ['berlin',    'amsterdam',    'lisbon'     ],
  amsterdam:     ['paris',     'berlin',       'prague'     ],
  bangkok:       ['bali',      'chiang-mai',   'tokyo'      ],
  bali:          ['chiang-mai','bangkok',       'tokyo'      ],
  'chiang-mai':  ['bali',      'bangkok',       'tokyo'      ],
  tokyo:         ['bali',      'bangkok',       'chiang-mai' ],
  'mexico-city': ['medellin',  'bali',          'lisbon'     ],
  medellin:      ['mexico-city','bali',         'bangkok'    ],
  dubai:         ['bali',      'lisbon',        'bangkok'    ],
};

function getRelated(slug) {
  const keys = RELATED[slug] || Object.keys(EBOOK_CATALOG).filter(k => k !== slug).slice(0, 3);
  return keys.map(k => EBOOK_CATALOG[k]).filter(Boolean);
}

export function EbookSuccessPage(params) {
  const slug  = params.slug;
  const ebook = getEbook(slug);

  if (!ebook) {
    return MainLayout(`
      <div style="min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:40px">
        <div>
          <h1 style="font-size:32px;font-weight:800;color:#1e1b4b">Page Not Found</h1>
          <a href="/ebooks" data-link style="color:#4f46e5;margin-top:16px;display:inline-block">Browse eBooks</a>
        </div>
      </div>
    `);
  }

  setPageMeta({
    title: `Download Your ${ebook.city} eBook | Living Cost Atlas`,
    description: `Your ${ebook.city} relocation guide is ready for download.`,
  });

  // GA4 purchase -- dedupe on sessionStorage so refresh does not re-fire
  const convKey = 'lca_purchase_' + slug;
  if (!sessionStorage.getItem(convKey)) {
    trackEbookPurchase(slug, ebook);
    sessionStorage.setItem(convKey, String(Date.now()));
  }

  const related = getRelated(slug);

  const relatedCards = related.map(r => `
    <div class="upsell-card">
      <a href="/ebook/${r.slug}" data-link class="upsell-card__img-wrap">
        <img src="${r.coverImage}" alt="${r.city} guide cover" loading="lazy" width="200" height="283" />
      </a>
      <div class="upsell-card__body">
        <div class="upsell-card__city">${r.city}</div>
        <div class="upsell-card__country">${r.country}</div>
        <div class="upsell-card__meta">
          <span>${r.pages} pages</span>
          <span>Nomad ${r.nomadScore}/100</span>
        </div>
        <div class="upsell-card__actions">
          <a href="${r.stripeLink}" class="upsell-card__buy" target="_blank" rel="noopener">
            Buy &mdash; $${r.price.toFixed(2)}
          </a>
          <a href="/ebook/${r.slug}" data-link class="upsell-card__preview">Preview</a>
        </div>
      </div>
    </div>
  `).join('');

  const content = `
    <style>
      /* ── Success hero ── */
      .sp-hero {
        background:linear-gradient(160deg,#0f172a 0%,#1e1b4b 40%,#312e81 100%);
        padding:72px 24px;text-align:center;position:relative;overflow:hidden;
      }
      .sp-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(99,102,241,.18),transparent 70%);
      }
      .sp-card {
        position:relative;z-index:2;background:#fff;border-radius:24px;
        padding:52px 44px;max-width:520px;margin:0 auto;
        box-shadow:0 25px 60px rgba(0,0,0,.3);
      }
      .sp-icon {
        width:68px;height:68px;border-radius:50%;margin:0 auto 22px;
        background:linear-gradient(135deg,#059669,#34d399);
        display:flex;align-items:center;justify-content:center;
      }
      .sp-title { font-size:26px;font-weight:900;color:#1e1b4b;margin:0 0 8px;letter-spacing:-.02em; }
      .sp-sub   { font-size:15px;color:#6b7280;line-height:1.6;margin:0 0 30px; }
      .sp-dl {
        display:inline-flex;align-items:center;gap:10px;
        padding:16px 40px;border-radius:12px;font-weight:700;font-size:16px;
        background:linear-gradient(135deg,#d4a843,#f59e0b);color:#1e1b4b;
        text-decoration:none;box-shadow:0 8px 28px rgba(212,168,67,.3);
        transition:transform .2s,box-shadow .2s;
      }
      .sp-dl:hover { transform:translateY(-2px);box-shadow:0 14px 36px rgba(212,168,67,.4); }
      .sp-info { margin-top:22px;font-size:12.5px;color:#9ca3af;line-height:1.6; }
      .sp-links { margin-top:24px;display:flex;justify-content:center;gap:20px; }
      .sp-links a { font-size:13.5px;color:#4f46e5;text-decoration:none;font-weight:600; }
      .sp-links a:hover { text-decoration:underline; }

      /* ── Upsell section ── */
      .upsell { background:#f8f9ff;padding:64px 0;border-top:1px solid #e8eaf8; }
      .upsell__hd { text-align:center;margin-bottom:40px; }
      .upsell__eyebrow { font-size:11px;font-weight:700;letter-spacing:2px;color:#6366f1;text-transform:uppercase;margin-bottom:10px; }
      .upsell__title { font-size:26px;font-weight:800;color:#0f172a;letter-spacing:-.025em;margin:0; }
      .upsell__grid { display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:860px;margin:0 auto; }
      .upsell-card {
        background:#fff;border-radius:16px;overflow:hidden;
        border:1px solid #e5e7eb;transition:box-shadow .2s,transform .2s;
      }
      .upsell-card:hover { box-shadow:0 12px 36px rgba(30,27,75,.1);transform:translateY(-3px); }
      .upsell-card__img-wrap { display:block;aspect-ratio:600/850;overflow:hidden;background:#1e1b4b; }
      .upsell-card__img-wrap img { width:100%;height:100%;object-fit:cover;transition:transform .3s; }
      .upsell-card:hover .upsell-card__img-wrap img { transform:scale(1.03); }
      .upsell-card__body { padding:18px 20px 20px; }
      .upsell-card__city { font-size:16px;font-weight:800;color:#0f172a;margin-bottom:2px; }
      .upsell-card__country { font-size:12px;color:#9ca3af;margin-bottom:10px; }
      .upsell-card__meta { display:flex;gap:10px;margin-bottom:14px; }
      .upsell-card__meta span { font-size:11px;background:#f3f4f6;color:#6b7280;padding:3px 8px;border-radius:20px;font-weight:600; }
      .upsell-card__actions { display:flex;gap:8px;align-items:center; }
      .upsell-card__buy {
        flex:1;text-align:center;background:#1e1b4b;color:#fff;text-decoration:none;
        font-size:13px;font-weight:700;padding:10px 12px;border-radius:8px;
        transition:background .15s;
      }
      .upsell-card__buy:hover { background:#d4a843;color:#1e1b4b; }
      .upsell-card__preview {
        font-size:12px;color:#6366f1;text-decoration:none;font-weight:600;white-space:nowrap;
      }
      .upsell-card__preview:hover { text-decoration:underline; }

      /* ── Explore CTA ── */
      .upsell__footer { text-align:center;margin-top:40px; }
      .upsell__footer a {
        display:inline-block;border:2px solid #1e1b4b;color:#1e1b4b;
        padding:12px 28px;border-radius:10px;font-weight:700;font-size:14px;
        text-decoration:none;transition:background .15s,color .15s;
      }
      .upsell__footer a:hover { background:#1e1b4b;color:#fff; }

      @media(max-width:700px) {
        .sp-card { padding:36px 24px; }
        .upsell__grid { grid-template-columns:1fr;max-width:340px; }
      }
    </style>

    <!-- Success hero -->
    <section class="sp-hero">
      <div class="sp-card">
        <div class="sp-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h1 class="sp-title">Payment Successful!</h1>
        <p class="sp-sub">
          Thank you! Your <strong>${ebook.city} Relocation Guide</strong> (${ebook.pages} pages) is ready to download.
        </p>
        <a href="${ebook.pdfPath}" class="sp-dl" download>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download ${ebook.city} Guide
        </a>
        <p class="sp-info">
          If you have any issues, contact support@livingcostatlas.com
        </p>
        <div class="sp-links">
          <a href="/city/${slug}" data-link>Explore ${ebook.city} data</a>
          <a href="/ebooks" data-link>All 13 guides</a>
        </div>
      </div>
    </section>

    <!-- Upsell: related cities -->
    <section class="upsell">
      <div class="container">
        <div class="upsell__hd">
          <div class="upsell__eyebrow">Complete Your Research</div>
          <h2 class="upsell__title">Readers of ${ebook.city} also explored</h2>
        </div>
        <div class="upsell__grid">
          ${relatedCards}
        </div>
        <div class="upsell__footer">
          <a href="/ebooks" data-link>See all 13 city guides &rarr;</a>
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}
