/**
 * CityPage
 * Individual city detail page
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { CityHero } from '../components/city/CityHero.js';
import { CityStats } from '../components/city/CityStats.js';
import { CitySimulator } from '../components/city/CitySimulator.js';
import { CityFAQ } from '../components/city/CityFAQ.js';
import { Button } from '../components/ui/Button.js';
import { getCityBySlug } from '../data/cityService.js';

export function CityPage(params) {
  const { slug } = params;
  const city = getCityBySlug(slug);

  if (!city) {
    const notFoundContent = `
      <div class="container py-20 text-center">
        <h1>City Not Found</h1>
        <p class="mt-4">We couldn't find a city with that name.</p>
        ${Button({ text: 'Browse All Destinations', href: '/destinations', variant: 'primary', className: 'mt-6' })}
      </div>
    `;
    return MainLayout(notFoundContent);
  }

  const content = `
    <div class="container" data-testid="city-page">
      ${CityHero(city)}
    </div>
    ${CityStats(city)}
    ${CitySimulator(city)}
    <div class="container">
      ${CityFAQ(city)}
    </div>
    <div class="section">
      <div class="container text-center">
        ${Button({ text: 'Calculate Your Budget', href: '/calculator', variant: 'primary', size: 'lg', testId: 'city-cta-calculator' })}
      </div>
    </div>
  `;

  return MainLayout(content);
}

export default CityPage;
