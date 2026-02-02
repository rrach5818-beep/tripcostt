/**
 * DestinationsPage
 * Lists all cities
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { Card } from '../components/ui/Card.js';
import { getAllCities, getContinents } from '../data/cityService.js';
import { formatCurrency } from '../logic/budgetCalculator.js';

export function DestinationsPage() {
  const cities = getAllCities();
  const continents = getContinents();

  const citiesHtml = cities.map(city => {
    const monthlyBudget = (city.costs.accommodation.center * 30) + (city.costs.food.standard * 30) + city.costs.transport + city.costs.coworking;
    
    return Card({
      image: city.image,
      imageAlt: `${city.name}, ${city.country}`,
      clickable: true,
      href: `/city/${city.slug}`,
      testId: `city-card-${city.slug}`,
      content: `
        <div style="padding:0;">
          <h3 class="city-card__name">${city.name}</h3>
          <p class="city-card__country">${city.country}</p>
          <div class="city-card__stats">
            <div class="city-card__stat">
              <span class="city-card__stat-label">Score</span>
              <span class="city-card__stat-value">${city.digitalNomad.overallScore}</span>
            </div>
            <div class="city-card__stat">
              <span class="city-card__stat-label">Monthly</span>
              <span class="city-card__stat-value">${formatCurrency(monthlyBudget, city.currencySymbol)}</span>
            </div>
          </div>
        </div>
      `
    });
  }).join('');

  const content = `
    <div class="page-header" data-testid="page-header">
      <div class="container">
        <h1 class="page-header__title">All Destinations</h1>
        <p class="page-header__subtitle">Explore ${cities.length} cities across ${continents.length} continents</p>
      </div>
    </div>

    <section class="section" data-testid="cities-grid">
      <div class="container">
        <div class="grid grid-cols-3 gap-6 lg-grid-cols-2 md-grid-cols-1">
          ${citiesHtml}
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

export default DestinationsPage;
