/**
 * setPageMeta -- Full SEO meta management
 * Updates title, description, canonical, OG tags + injects page-level JSON-LD
 */

const BASE_URL = 'https://www.livingcostatlas.com';

export function setPageMeta({ title, description, canonical, jsonLd, image }) {
  // -- Title ----------------------------------------------
  // Avoid duplicating the brand suffix when a caller already includes it.
  const BRAND = 'Living Cost Atlas';
  let fullTitle;
  if (!title) {
    fullTitle = `${BRAND} -- Free Cost of Living Calculator`;
  } else if (title.includes(BRAND)) {
    fullTitle = title;
  } else {
    fullTitle = `${title} | ${BRAND}`;
  }
  document.title = fullTitle;

  // -- Meta description -----------------------------------
  setMeta('name', 'description', description ||
    'Compare monthly living costs across 50+ cities worldwide. Free tool for expats, remote workers and digital nomads.');

  // -- Canonical ------------------------------------------
  const canonicalUrl = canonical
    ? `${BASE_URL}${canonical}`
    : `${BASE_URL}${window.location.pathname}`;

  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.rel = 'canonical';
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.href = canonicalUrl;

  // -- Open Graph -----------------------------------------
  const ogImage = image || `${BASE_URL}/og-image.png`;
  setMeta('property', 'og:title',        fullTitle);
  setMeta('property', 'og:description',  description || '');
  setMeta('property', 'og:url',          canonicalUrl);
  setMeta('property', 'og:image',        ogImage);
  setMeta('property', 'og:image:width',  '1200');
  setMeta('property', 'og:image:height', '630');
  setMeta('property', 'og:type',         'website');
  setMeta('property', 'og:site_name',    'Living Cost Atlas');
  setMeta('property', 'og:locale',       'en_US');

  // -- Twitter --------------------------------------------
  setMeta('name', 'twitter:card',        'summary_large_image');
  setMeta('name', 'twitter:title',       fullTitle);
  setMeta('name', 'twitter:description', description || '');
  setMeta('name', 'twitter:image',       ogImage);

  // -- JSON-LD (page-level, injected alongside global ones) -
  if (jsonLd) {
    removeSchema('page-jsonld');
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id   = 'page-jsonld';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}

// -- Helpers ------------------------------------------------
function setMeta(attrName, attrValue, content) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function removeSchema(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

export function injectSchema(id, data) {
  removeSchema(id);
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id   = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export default setPageMeta;
