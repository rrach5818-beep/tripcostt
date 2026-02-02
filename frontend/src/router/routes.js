import { HomePage } from '../pages/HomePage.js';
import { DestinationsPage } from '../pages/DestinationsPage.js';
import { CityPage } from '../pages/CityPage.js';
import { CalculatorPage, setupCalculatorInteractivity } from '../pages/CalculatorPage.js';
import { NomadPage } from '../pages/NomadPage.js';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/destinations', component: DestinationsPage },
  { path: '/city/:slug', component: CityPage },
  { path: '/calculator', component: CalculatorPage, setup: setupCalculatorInteractivity },
  { path: '/nomad', component: NomadPage }
];
