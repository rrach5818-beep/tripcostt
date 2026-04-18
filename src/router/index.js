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
      // Successful render -- clear any previous self-heal flag so future
      // chunk errors can also self-heal.
      clearReloadFlag();
      // Emit a custom event so analytics (and others) can react to SPA navs
      // without relying on popstate (which only fires on back/forward).
      window.dispatchEvent(new CustomEvent('lca:route-rendered', {
        detail: { path }
      }));

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

    // Chunk load failure -- usually means a new version was deployed while the
    // tab was open, so old chunk hashes no longer exist. Force a hard reload
    // so the browser fetches the new index.html with the current chunk names.
    const msg = (err && err.message) || '';
    const name = (err && err.name) || '';
    const isChunkError =
      name === 'ChunkLoadError' ||
      /Failed to fetch dynamically imported module/i.test(msg) ||
      /Loading chunk [^\s]+ failed/i.test(msg) ||
      /Importing a module script failed/i.test(msg) ||
      /error loading dynamically imported module/i.test(msg);

    if (isChunkError && !sessionStorage.getItem('lca_reload_attempted')) {
      sessionStorage.setItem('lca_reload_attempted', String(Date.now()));
      window.location.reload();
      return;
    }

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

// Reset reload flag once a render succeeds so future chunk errors can
// also self-heal (not just the first one).
function clearReloadFlag() {
  try { sessionStorage.removeItem('lca_reload_attempted'); } catch (_) {}
}

export default { initRouter, navigate };
