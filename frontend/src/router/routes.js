import { HomePage } from '../pages/HomePage.js';
import { DestinationsPage } from '../pages/DestinationsPage.js';
import { CityPage, setupCityPageInteractivity } from '../pages/CityPage.js';
import { CalculatorPage, setupCalculatorInteractivity } from '../pages/CalculatorPage.js';
import { NomadPage } from '../pages/NomadPage.js';
import { AboutPage } from '../pages/AboutPage.js';
import { LegalPage } from '../pages/LegalPage.js';
import { PrivacyPage } from '../pages/PrivacyPage.js';
import { TermsPage } from '../pages/TermsPage.js';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/destinations', component: DestinationsPage },
  { path: '/city/:slug', component: CityPage, setup: setupCityPageInteractivity },
  { path: '/calculator', component: CalculatorPage, setup: setupCalculatorInteractivity },
  { path: '/nomad', component: NomadPage },
  { path: '/about', component: AboutPage },
  { path: '/legal', component: LegalPage },
  { path: '/privacy', component: PrivacyPage },
  { path: '/terms', component: TermsPage }
];
