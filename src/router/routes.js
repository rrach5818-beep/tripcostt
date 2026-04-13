/**
 * routes.js -- Lazy-loaded route configuration
 * Pages are loaded on-demand (code splitting) for faster initial load.
 * ASCII-only comments (Vite/Vercel constraint)
 */

// Lazy loader: returns a wrapper that dynamically imports on first use
function lazy(loader) {
  let cached = null;
  return {
    load: () => {
      if (!cached) cached = loader();
      return cached;
    }
  };
}

// -- Lazy page modules --
const pages = {
  home:           lazy(() => import('../pages/HomePage.js')),
  destinations:   lazy(() => import('../pages/DestinationsPage.js')),
  city:           lazy(() => import('../pages/CityPage.js')),
  comparison:     lazy(() => import('../pages/CityComparisonPage.js')),
  calculator:     lazy(() => import('../pages/CalculatorPage.js')),
  nomad:          lazy(() => import('../pages/NomadPage.js')),
  about:          lazy(() => import('../pages/AboutPage.js')),
  legal:          lazy(() => import('../pages/LegalPage.js')),
  privacy:        lazy(() => import('../pages/PrivacyPage.js')),
  terms:          lazy(() => import('../pages/TermsPage.js')),
  bestCitiesHub:  lazy(() => import('../pages/BestCitiesHubPage.js')),
  bestCities:     lazy(() => import('../pages/BestCitiesPage.js')),
  bestCountries:  lazy(() => import('../pages/BestCountriesPage.js')),
};

/*
|--------------------------------------------------------------------------
| ROUTES CONFIGURATION (lazy-loaded)
|--------------------------------------------------------------------------
| component: async function that loads module + calls page function
| setup: async function that loads module + calls setup function
*/

export const routes = [

  {
    path: '/',
    component: async (p) => (await pages.home.load()).HomePage(p),
    setup:     async ()  => (await pages.home.load()).setupHomeMapInteractivity()
  },

  {
    path: '/destinations',
    component: async (p) => (await pages.destinations.load()).DestinationsPage(p),
    setup:     async ()  => (await pages.destinations.load()).setupDestinationsInteractivity()
  },

  {
    path: '/city/:slug',
    component: async (p) => (await pages.city.load()).CityPage(p),
    setup:     async ()  => (await pages.city.load()).setupCityPageInteractivity()
  },

  {
    path: '/compare/:cities',
    component: async (p) => (await pages.comparison.load()).CityComparisonPage(p)
  },

  {
    path: '/calculator',
    component: async (p) => (await pages.calculator.load()).CalculatorPage(p),
    setup:     async ()  => (await pages.calculator.load()).setupCalculatorInteractivity()
  },

  {
    path: '/nomad',
    component: async (p) => (await pages.nomad.load()).NomadPage(p),
    setup:     async ()  => (await pages.nomad.load()).setupNomadPageInteractivity()
  },

  { path: '/about',   component: async (p) => (await pages.about.load()).AboutPage(p) },
  { path: '/legal',   component: async (p) => (await pages.legal.load()).LegalPage(p) },
  { path: '/privacy', component: async (p) => (await pages.privacy.load()).PrivacyPage(p) },
  { path: '/terms',   component: async (p) => (await pages.terms.load()).TermsPage(p) },

  { path: '/best-cities',                  component: async (p) => (await pages.bestCitiesHub.load()).BestCitiesHubPage(p) },
  { path: '/best-cities/:country/:profile', component: async (p) => (await pages.bestCities.load()).BestCitiesPage(p) },
  { path: '/best-cities/:country',          component: async (p) => (await pages.bestCities.load()).BestCitiesPage(p) },

  { path: '/best-countries',          component: async (p) => (await pages.bestCountries.load()).BestCountriesPage(p) },
  { path: '/best-countries/:profile', component: async (p) => (await pages.bestCountries.load()).BestCountriesPage(p) },
];
