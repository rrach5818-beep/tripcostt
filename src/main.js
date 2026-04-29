import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';
import { initRouter, navigate } from './router/index.js';
import { routes }    from './router/routes.js';
import { initNewsletterPopup } from './components/NewsletterPopup.js';
import { mountCookieConsent } from './components/CookieConsent.js';
import 'leaflet/dist/leaflet.css';

/* ===========================================================
   Google Analytics 4 - SPA page view + event tracking
   SPAs don't reload the page, so we track manually
=========================================================== */
function trackPageView(path) {
  if (typeof gtag !== 'function') return;
  gtag('event', 'page_view', {
    page_path:     path,
    page_title:    document.title,
    page_location: window.location.href
  });
}

export function trackEvent(eventName, params = {}) {
  if (typeof gtag !== 'function') return;
  gtag('event', eventName, params);
}

function initAnalytics() {
  // Track initial load
  trackPageView(window.location.pathname);

  // Track every SPA navigation (popstate = back/forward, lca:route-rendered = programmatic navigate)
  window.addEventListener('popstate', () => {
    setTimeout(() => trackPageView(window.location.pathname), 100);
  });
  window.addEventListener('lca:route-rendered', (e) => {
    const p = (e && e.detail && e.detail.path) || window.location.pathname;
    setTimeout(() => trackPageView(p), 100);
  });

  // Key interaction tracking via event delegation
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-link]');
    if (!el) return;
    const href = el.getAttribute('href');
    if (!href) return;

    if (href === '/calculator')        trackEvent('calculator_open',  { source: window.location.pathname });
    if (href.startsWith('/city/'))     trackEvent('city_view',        { city: href.replace('/city/', '') });
    if (href === '/destinations')      trackEvent('destinations_open');
    if (href.startsWith('/compare/'))  trackEvent('comparison_view',  { cities: href.replace('/compare/', '') });
  });

  // Share button
  document.addEventListener('click', e => {
    if (e.target.closest('#share-btn')) {
      trackEvent('comparison_shared', { page: window.location.pathname });
    }
  });
}

/* ===========================================================
   Global image fallback
   Catches any broken img anywhere on the site
=========================================================== */
function initImageFallbacks() {
  const gradients = [
    'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    'linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)',
    'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)',
    'linear-gradient(135deg, #4a044e 0%, #7e22ce 100%)',
  ];

  document.addEventListener('error', (e) => {
    const img = e.target;
    if (img.tagName !== 'IMG') return;
    if (img.dataset.fallbackApplied) return;

    img.dataset.fallbackApplied = 'true';

    const hash = (img.src || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const gradient = gradients[hash % gradients.length];

    const placeholder = document.createElement('div');
    placeholder.style.cssText = `
      width:100%; height:100%;
      background:${gradient};
      display:flex; align-items:center; justify-content:center;
      color:rgba(255,255,255,0.3); font-size:32px;
    `;
    placeholder.textContent = '\uD83C\uDF0D';
    img.parentNode.replaceChild(placeholder, img);
  }, true);
}

/* ===========================================================
   Mobile hamburger menu
=========================================================== */
function initMobileMenu() {
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('#nav-toggle');
    if (!toggle) return;

    const nav = document.getElementById('main-nav');
    if (!nav) return;

    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu on nav link click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__link')) return;
    const nav = document.getElementById('main-nav');
    const toggle = document.getElementById('nav-toggle');
    if (nav) nav.classList.remove('is-open');
    if (toggle) {
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ===========================================================
   App init
=========================================================== */
function initApp() {
  const appRoot = document.getElementById('app');
  if (!appRoot) {
    console.error('App root not found');
    return;
  }

  initImageFallbacks();
  initAnalytics();
  initMobileMenu();
  initRouter(appRoot, routes);
  initNewsletterPopup();
  mountCookieConsent();

  document.addEventListener('click', (e) => {
    // Ignore modified clicks (new tab / new window / download)
    if (e.defaultPrevented) return;
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const link = e.target.closest('a[data-link]');
    if (!link) return;
    if (link.target && link.target !== '' && link.target !== '_self') return;

    const path = link.getAttribute('href');
    if (!path) return;
    // External links or anchors -- let the browser handle
    if (/^(?:[a-z]+:)?\/\//i.test(path)) return;
    if (path.startsWith('mailto:') || path.startsWith('tel:')) return;

    e.preventDefault();
    // Same URL click (e.g. logo while already on home) -- scroll to top
    if (path === window.location.pathname + window.location.search) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(path);
  });
}

document.addEventListener('DOMContentLoaded', initApp);
