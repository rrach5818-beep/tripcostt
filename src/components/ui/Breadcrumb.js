/**
 * Breadcrumb.js -- Visual breadcrumb + JSON-LD BreadcrumbList
 * ASCII-only comments (Vite/Vercel constraint)
 *
 * Usage:
 *   import { Breadcrumb } from '../components/ui/Breadcrumb.js';
 *   // items = [{ label: 'Home', href: '/' }, { label: 'Lisbon' }]
 *   // Last item has no href (current page)
 *   Breadcrumb(items)  // returns HTML string
 */

import { injectSchema } from '../../logic/setPageMeta.js';

const BASE_URL = 'https://tripcost.co';

/**
 * Render breadcrumb HTML and inject JSON-LD schema.
 * @param {Array<{label: string, href?: string}>} items
 * @returns {string} HTML string
 */
export function Breadcrumb(items) {
  if (!items || items.length < 2) return '';

  // -- Inject BreadcrumbList JSON-LD for SEO --
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.label,
      ...(item.href ? { 'item': `${BASE_URL}${item.href}` } : {})
    }))
  };

  // Defer injection so it runs after DOM render
  setTimeout(() => injectSchema('breadcrumb-jsonld', jsonLd), 0);

  // -- Build visual HTML --
  const crumbs = items.map((item, i) => {
    const isLast = i === items.length - 1;
    if (isLast) {
      return `<span class="bc__current">${item.label}</span>`;
    }
    return `<a href="${item.href}" data-link class="bc__link">${item.label}</a>`;
  });

  // Separator is a simple chevron via CSS pseudo-element on .bc__sep
  const html = crumbs.join('<span class="bc__sep" aria-hidden="true">/</span>');

  return `
    <nav class="bc" aria-label="Breadcrumb">
      <div class="container">
        <ol class="bc__list">${html}</ol>
      </div>
    </nav>
  `;
}

/**
 * Pre-built breadcrumb styles (inline).
 * Include once per page that uses breadcrumbs.
 */
export const BREADCRUMB_CSS = `
  .bc {
    padding: 14px 0 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
  .bc__list {
    list-style: none;
    margin: 0;
    padding: 5px 12px;
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.01em;
    background: rgba(0,0,0,0.35);
    backdrop-filter: blur(6px);
    border-radius: 6px;
  }
  .bc__link {
    color: rgba(255,255,255,0.55);
    text-decoration: none;
    transition: color 0.15s;
    padding: 2px 0;
  }
  .bc__link:hover {
    color: #fff;
    text-decoration: none;
  }
  .bc__sep {
    color: rgba(255,255,255,0.25);
    margin: 0 8px;
    font-size: 11px;
    user-select: none;
  }
  .bc__current {
    color: rgba(255,255,255,0.85);
    font-weight: 600;
  }

  /* Light background variant */
  .bc--light .bc__link { color: #6b7280; }
  .bc--light .bc__link:hover { color: #111827; }
  .bc--light .bc__sep { color: #d1d5db; }
  .bc--light .bc__current { color: #111827; }
`;

export default Breadcrumb;
