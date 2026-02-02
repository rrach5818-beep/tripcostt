import { HomePage } from '../pages/HomePage.js';
import { DestinationsPage } from '../pages/DestinationsPage.js';
import { CityPage } from '../pages/CityPage.js';
import { CalculatorPage } from '../pages/CalculatorPage.js';
import { NomadPage } from '../pages/NomadPage.js';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/destinations', component: DestinationsPage },
  { path: '/city/:slug', component: CityPage },
  { path: '/calculator', component: CalculatorPage },
  { path: '/nomad', component: NomadPage }
];
