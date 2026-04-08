import { HomePage, setupHomeMapInteractivity } from '../pages/HomePage.js';
import { DestinationsPage, setupDestinationsInteractivity } from '../pages/DestinationsPage.js';
import { CityPage, setupCityPageInteractivity } from '../pages/CityPage.js';
import { CityComparisonPage } from '../pages/CityComparisonPage.js';
import { CalculatorPage, setupCalculatorInteractivity } from '../pages/CalculatorPage.js';
import { NomadPage, setupNomadPageInteractivity } from '../pages/NomadPage.js';
import { AboutPage } from '../pages/AboutPage.js';
import { LegalPage } from '../pages/LegalPage.js';
import { PrivacyPage } from '../pages/PrivacyPage.js';
import { TermsPage } from '../pages/TermsPage.js';
import { BestCitiesHubPage } from '../pages/BestCitiesHubPage.js';
import { BestCitiesPage } from '../pages/BestCitiesPage.js';
import { BestCountriesPage } from '../pages/BestCountriesPage.js';

/*
|--------------------------------------------------------------------------
| ROUTES CONFIGURATION
|--------------------------------------------------------------------------
*/

export const routes = [

  { path: '/', component: HomePage, setup: setupHomeMapInteractivity },

  // DESTINATIONS (dynamic handling inside router)
  { path: '/destinations', component: DestinationsPage, setup: setupDestinationsInteractivity },

  // CITY
  { path: '/city/:slug', component: CityPage, setup: setupCityPageInteractivity },

  { path: '/compare/:cities', component: CityComparisonPage },

  { path: '/calculator', component: CalculatorPage, setup: setupCalculatorInteractivity },

  { path: '/nomad', component: NomadPage, setup: setupNomadPageInteractivity },

  { path: '/about', component: AboutPage },

  { path: '/legal', component: LegalPage },

  { path: '/privacy', component: PrivacyPage },

  { path: '/terms', component: TermsPage },

  { path: '/best-cities', component: BestCitiesHubPage },
  { path: '/best-cities/:country/:profile', component: BestCitiesPage },
  { path: '/best-cities/:country', component: BestCitiesPage },

  { path: '/best-countries', component: BestCountriesPage },
  { path: '/best-countries/:profile', component: BestCountriesPage },
];