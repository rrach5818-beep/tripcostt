import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';
import { initRouter } from './router/index.js';
import { routes } from './router/routes.js';
import { initWorldMap } from './logic/worldMap.js';
import 'leaflet/dist/leaflet.css';

/* ─────────────────────────────────────────────────────────
   Global image fallback — catches ANY broken img on the site
   Replaces with a city-themed gradient placeholder instantly
───────────────────────────────────────────────────────── */
function initImageFallbacks() {
  // Gradient placeholders by continent/region keywords
  const gradients = [
    'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    'linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)',
    'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)',
    'linear-gradient(135deg, #4a044e 0%, #7e22ce 100%)',
  ];

  // Use event delegation on document — catches dynamically injected images too
  document.addEventListener('error', (e) => {
    const img = e.target;
    if (img.tagName !== 'IMG') return;
    if (img.dataset.fallbackApplied) return; // prevent infinite loop

    img.dataset.fallbackApplied = 'true';

    // Pick a gradient based on the image src hash (deterministic)
    const hash = (img.src || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const gradient = gradients[hash % gradients.length];

    // Replace the broken img with a styled div
    const placeholder = document.createElement('div');
    placeholder.style.cssText = `
      width: 100%; height: 100%;
      background: ${gradient};
      display: flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,0.3); font-size: 32px;
    `;
    placeholder.textContent = '🌍';
    img.parentNode.replaceChild(placeholder, img);
  }, true); // capture phase — works before image errors bubble
}

function initApp() {
  const appRoot = document.getElementById('app');
  
  if (!appRoot) {
    console.error('App root element not found');
    return;
  }

  initImageFallbacks();
  initRouter(appRoot, routes);

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (link) {
      e.preventDefault();
      const path = link.getAttribute('href');
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  });
}

document.addEventListener('DOMContentLoaded', initApp);
