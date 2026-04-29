/**
 * ebookCatalog.js -- Single source of truth for the 13 paid eBooks.
 *
 * Consumed by:
 *   - EbookPage.js       (single product page: cover, pricing, Stripe CTA, preview)
 *   - EbooksPage.js      (catalog grid of all 13)
 *   - EbookSuccessPage.js (post-payment download delivery)
 *
 * To add a 14th city, add ONE entry here and the three pages stay in sync.
 *
 * ASCII-only (Vite/Vercel constraint).
 */

const PRICE = 9.99;
const CURRENCY = 'EUR';
const YEAR = '2026';

function entry(slug, city, country, opts) {
  // pdfBasename is the filename portion (no path) -- handy for EbookSuccessPage
  const pdfBasename = `LivingCostAtlas_${city.replace(/\s+/g, '_')}_${YEAR}.pdf`;
  const previewBasename = `LivingCostAtlas_${city.replace(/\s+/g, '_')}_Preview.pdf`;
  return {
    slug, city, country,
    price: PRICE,
    currency: CURRENCY,
    pages: opts.pages,
    nomadScore: opts.nomadScore,
    safety: opts.safety,
    avgRent: opts.avgRent,
    wifi: opts.wifi,
    pdfFilename: pdfBasename,
    pdfPath: `/ebooks/${pdfBasename}`,
    previewPath: `/ebooks/preview/${previewBasename}`,
    coverImage: `/images/ebooks/${slug}-cover-v2.png`,
    stripeLink: opts.stripeLink,
  };
}

export const EBOOK_CATALOG = {
  lisbon:        entry('lisbon',       'Lisbon',      'Portugal',       { pages: 28, nomadScore: 81, safety: 85, avgRent: 1800, wifi: 120, stripeLink: 'https://buy.stripe.com/4gM4gAe7R12xacHbfd3gk00' }),
  barcelona:     entry('barcelona',    'Barcelona',   'Spain',          { pages: 22, nomadScore: 82, safety: 75, avgRent: 1500, wifi: 140, stripeLink: 'https://buy.stripe.com/cNieVe4xhbHbbgLcjh3gk01' }),
  bangkok:       entry('bangkok',      'Bangkok',     'Thailand',       { pages: 22, nomadScore: 88, safety: 65, avgRent:  750, wifi:  80, stripeLink: 'https://buy.stripe.com/14A7sMgfZ6mRgB55UT3gk02' }),
  tokyo:         entry('tokyo',        'Tokyo',       'Japan',          { pages: 22, nomadScore: 80, safety: 95, avgRent: 2100, wifi: 150, stripeLink: 'https://buy.stripe.com/6oU3cw7Jt9z31Gb4QP3gk03' }),
  bali:          entry('bali',         'Bali',        'Indonesia',      { pages: 22, nomadScore: 92, safety: 70, avgRent:  600, wifi:  40, stripeLink: 'https://buy.stripe.com/00wfZiaVF6mR70v2IH3gk04' }),
  berlin:        entry('berlin',       'Berlin',      'Germany',        { pages: 22, nomadScore: 83, safety: 80, avgRent: 1650, wifi: 100, stripeLink: 'https://buy.stripe.com/fZu8wQ2p912xesXfvt3gk05' }),
  dubai:         entry('dubai',        'Dubai',       'UAE',            { pages: 22, nomadScore: 79, safety: 95, avgRent: 2400, wifi: 120, stripeLink: 'https://buy.stripe.com/6oUcN62p9cLf84z3ML3gk06' }),
  paris:         entry('paris',        'Paris',       'France',         { pages: 22, nomadScore: 78, safety: 70, avgRent: 2100, wifi: 200, stripeLink: 'https://buy.stripe.com/6oU5kE0h1bHbbgL8313gk07' }),
  'mexico-city': entry('mexico-city',  'Mexico City', 'Mexico',         { pages: 22, nomadScore: 66, safety: 55, avgRent: 1200, wifi: 100, stripeLink: 'https://buy.stripe.com/dRm00k4xh9z31Gb8313gk08' }),
  medellin:      entry('medellin',     'Medellin',    'Colombia',       { pages: 22, nomadScore: 64, safety: 60, avgRent:  900, wifi: 100, stripeLink: 'https://buy.stripe.com/28E9AU1l5h1vckP2IH3gk09' }),
  'chiang-mai':  entry('chiang-mai',   'Chiang Mai',  'Thailand',       { pages: 22, nomadScore: 67, safety: 85, avgRent:  500, wifi:  90, stripeLink: 'https://buy.stripe.com/dRmdRafbVeTn84zbfd3gk0a' }),
  amsterdam:     entry('amsterdam',    'Amsterdam',   'Netherlands',    { pages: 22, nomadScore: 85, safety: 80, avgRent: 2200, wifi: 200, stripeLink: 'https://buy.stripe.com/eVq6oIe7R26B98Dbfd3gk0b' }),
  prague:        entry('prague',       'Prague',      'Czech Republic', { pages: 22, nomadScore: 81, safety: 85, avgRent: 1400, wifi: 180, stripeLink: 'https://buy.stripe.com/4gM6oI7JtfXr70v3ML3gk0c' }),
};

// Ordered array (used by EbooksPage to render the grid in the catalog).
// Order = display order: flagship Lisbon first, then by editorial priority.
export const EBOOK_LIST = [
  'lisbon', 'barcelona', 'bangkok', 'tokyo', 'bali', 'berlin', 'dubai',
  'paris', 'mexico-city', 'medellin', 'chiang-mai', 'amsterdam', 'prague',
].map(slug => EBOOK_CATALOG[slug]);

// Default highlights template for the per-page bullet list. Same for every
// city -- the per-city rich content lives in scripts/data/cityIntel.js.
export function defaultHighlights(cityName) {
  return [
    'Executive Summary & LCA Index Score',
    'Detailed Cost Breakdown (housing, food, transport, utilities)',
    'Monthly Budget Scenarios (3 profiles)',
    '5 Neighborhood Analyses with rent ranges',
    `Visa & Tax Guide for ${cityName}`,
    'City Comparison vs Peer Destinations',
    'Safety, Quality of Life & Infrastructure Scorecards',
    'Risk Factors & Economic Outlook 2026',
  ];
}

export function getEbook(slug) {
  return EBOOK_CATALOG[slug] || null;
}
