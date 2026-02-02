import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';
import { initRouter } from './router/index.js';
import { routes } from './router/routes.js';

function initApp() {
  const appRoot = document.getElementById('app');
  
  if (!appRoot) {
    console.error('App root element not found');
    return;
  }

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
