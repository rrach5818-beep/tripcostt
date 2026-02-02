let currentRoot = null;
let currentRoutes = [];

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

function render() {
  const path = window.location.pathname;
  const matched = matchRoute(path);

  if (matched) {
    const html = matched.route.component(matched.params);
    currentRoot.innerHTML = html;
  } else {
    currentRoot.innerHTML = `
      <div class="container py-20 text-center">
        <h1>404 - Page Not Found</h1>
        <p class="mt-4">The page you're looking for doesn't exist.</p>
        <a href="/" data-link class="btn btn--primary mt-6">Go Home</a>
      </div>
    `;
  }
}

export default { initRouter, navigate };
