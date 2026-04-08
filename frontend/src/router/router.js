import { routes } from './routes.js';

function parseUrl(path) {
  return path.replace(/\/+$/, '').split('/').filter(Boolean);
}

function matchRoute(path) {
  const segments = parseUrl(path);

  for (const route of routes) {
    const routeSegments = parseUrl(route.path);

    if (routeSegments.length !== segments.length) continue;

    let params = {};
    let match = true;

    for (let i = 0; i < routeSegments.length; i++) {
      if (routeSegments[i].startsWith(':')) {
        const paramName = routeSegments[i].substring(1);
        params[paramName] = segments[i];
      } else if (routeSegments[i] !== segments[i]) {
        match = false;
        break;
      }
    }

    if (match) {
      return { route, params };
    }
  }

  return null;
}

export function router() {
  const path = window.location.pathname;

  /*
  |--------------------------------------------------------------------------
  | Special handling for dynamic destinations routes
  |--------------------------------------------------------------------------
  */

  if (path.startsWith('/destinations')) {
    const segments = parseUrl(path);

    const view = segments[1] || 'cities';
    const profile = segments[2] || 'solo';
    const region = segments[3] || 'all';

    const page = routes.find(r => r.path === '/destinations');

    const html = page.component({ view, profile, region });

    document.getElementById('app').innerHTML = html;

    return;
  }

  /*
  |--------------------------------------------------------------------------
  | Standard routes
  |--------------------------------------------------------------------------
  */

  const match = matchRoute(path);

  if (match) {
    const { route, params } = match;
    const html = route.component(params);
    document.getElementById('app').innerHTML = html;

    if (route.setup) {
      route.setup();
    }

    return;
  }

  /*
  |--------------------------------------------------------------------------
  | 404 fallback
  |--------------------------------------------------------------------------
  */

  document.getElementById('app').innerHTML = `
    <div style="padding:100px;text-align:center;">
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  `;
}

/*
|--------------------------------------------------------------------------
| Navigation handler (SPA mode)
|--------------------------------------------------------------------------
*/

export function navigate(path) {
  window.history.pushState({}, '', path);
  router();
}

window.addEventListener('popstate', router);