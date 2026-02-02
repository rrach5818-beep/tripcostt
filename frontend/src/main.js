import { initRouter, navigate } from './router/index.js';
import { routes } from './router/routes.js';

function initApp() {
  const appRoot = document.getElementById('app');
  
  if (!appRoot) {
    console.error('App root element not found');
    return;
  }

  initRouter(appRoot, routes);

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (link && link.href.startsWith(window.location.origin)) {
      e.preventDefault();
      const path = link.getAttribute('href');
      navigate(path);
    }
  });
}

document.addEventListener('DOMContentLoaded', initApp);