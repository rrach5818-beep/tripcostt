/**
 * SPA Router with async (lazy-loaded) route support
 * ASCII-only comments (Vite/Vercel constraint)
 */

let currentRoot = null;
let currentRoutes = [];
let isRendering = false;

export function initRouter(root, routes) {
  currentRoot = root;
  currentRoutes = routes;

  window.addEventListener('popstate', () => render());
  render();
}

export function navigate(path) {
  window.history.pushState({}, '', path);
  render();
}

function matchRoute(path) {
  for (const route of currentRoutes) {
    const routeParts = route.path.split('/');
    const pathParts = path.split('/');

    if (routeParts.length !== pathParts.length) continue;

    const params = {};
    let match = true;

    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(':')) {
        params[routeParts[i].slice(1)] = pathParts[i];
      } else if (routeParts[i] !== pathParts[i]) {
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

async function render() {
  // Prevent concurrent renders
  if (isRendering) return;
  isRendering = true;

  const path = window.location.pathname;
  const matched = matchRoute(path);

  try {
    if (matched) {
      // component can be sync or async
      const html = await matched.route.component(matched.params);
      currentRoot.innerHTML = html;

      // setup can be sync or async
      if (matched.route.setup) {
        setTimeout(async () => {
          try {
            await matched.route.setup();
          } catch (e) {
            console.error('Setup error:', e);
          }
        }, 0);
      }
    } else {
      currentRoot.innerHTML = `
        <div class="container py-20 text-center">
          <h1>404 - Page Not Found</h1>
          <p class="mt-4">The page you're looking for doesn't exist.</p>
          <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
        </div>
      `;
    }
  } catch (err) {
    console.error('Route render error:', err);
    currentRoot.innerHTML = `
      <div class="container py-20 text-center">
        <h1>Error loading page</h1>
        <p class="mt-4">Please try refreshing.</p>
        <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
      </div>
    `;
  } finally {
    isRendering = false;
  }
}

export default { initRouter, navigate };
