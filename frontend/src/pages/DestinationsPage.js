/**
 * DestinationsPage
 * Lists all cities with SEO-friendly structure
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
      imageAlt: `Cost of living in ${city.name}, ${city.country}`,
      clickable: true,
      href: `/city/${city.slug}`,
      testId: `city-card-${city.slug}`,
      content: `
        <div style="padding:0;">
          <h3 class="city-card__name">${city.name}</h3>
          <p class="city-card__country">${city.country}</p>
          <div class="city-card__stats">
            <div class="city-card__stat">
              <span class="city-card__stat-label">Nomad Score</span>
              <span class="city-card__stat-value">${city.digitalNomad.overallScore}/100</span>
            </div>
            <div class="city-card__stat">
              <span class="city-card__stat-label">From</span>
              <span class="city-card__stat-value">${formatCurrency(monthlyBudget, city.currencySymbol)}/mo</span>
            </div>
          </div>
        </div>
      `
    });
  }).join('');

  const content = `
    <div class="page-header page-header--centered" data-testid="page-header">
      <div class="container">
        <p class="page-header__eyebrow">Explore</p>
        <h1 class="page-header__title">Cost of Living by City</h1>
        <p class="page-header__subtitle">
          Discover detailed cost breakdowns for ${cities.length} cities across ${continents.length} continents. 
          Find the perfect destination for your budget and lifestyle.
        </p>
      </div>
    </div>

    <section class="section" data-testid="cities-grid">
      <div class="container">
        <div class="grid grid-cols-3 gap-6 lg-grid-cols-2 md-grid-cols-1">
          ${citiesHtml}
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="cta-section">
          <h2 class="cta-section__title">Not sure which city is right for you?</h2>
          <p class="cta-section__subtitle">Use our budget calculator to compare costs and find your perfect match.</p>
          <a href="/calculator" data-link class="btn btn--white btn--lg">Try the Calculator</a>
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

export default DestinationsPage;
