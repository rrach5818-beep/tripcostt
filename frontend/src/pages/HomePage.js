/**
 * HomePage
 * Landing page with hero and featured cities
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { Button } from '../components/ui/Button.js';
import { Card } from '../components/ui/Card.js';
import { getAllCities, getTopNomadCities } from '../data/cityService.js';
import { formatCurrency } from '../logic/budgetCalculator.js';

export function HomePage() {
  const topCities = getTopNomadCities(6);
  const totalCities = getAllCities().length;

  const citiesHtml = topCities.map(city => {
    const monthlyBudget = (city.costs.accommodation.center * 30) + (city.costs.food.standard * 30) + city.costs.transport + city.costs.coworking;
    
    return Card({
      image: city.image,
      imageAlt: `${city.name}, ${city.country}`,
      clickable: true,
      href: `/city/${city.slug}`,
      testId: `city-card-${city.slug}`,
      content: `
        <div class="city-card__content" style="padding:0;">
          <h3 class="city-card__name">${city.name}</h3>
          <p class="city-card__country">${city.country}</p>
          <div class="city-card__stats">
            <div class="city-card__stat">
              <span class="city-card__stat-label">Nomad Score</span>
              <span class="city-card__stat-value">${city.digitalNomad.overallScore}/100</span>
            </div>
            <div class="city-card__stat">
              <span class="city-card__stat-label">Monthly Est.</span>
              <span class="city-card__stat-value">${formatCurrency(monthlyBudget, city.currencySymbol)}</span>
            </div>
          </div>
        </div>
      `
    });
  }).join('');

  const content = `
    <section class="hero" data-testid="hero">
      <div class="container">
        <h1 class="hero__title">Know Your Travel Budget<br>Before You Go</h1>
        <p class="hero__subtitle">Compare cost of living across ${totalCities} cities worldwide. Plan smarter, travel better.</p>
        <div class="hero__actions">
          ${Button({ text: 'Calculate Budget', href: '/calculator', variant: 'primary', size: 'lg', testId: 'hero-cta-calculator' })}
          ${Button({ text: 'Browse Destinations', href: '/destinations', variant: 'secondary', size: 'lg', testId: 'hero-cta-destinations' })}
        </div>
      </div>
    </section>

    <section class="section" data-testid="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-item__icon">$</div>
            <h3 class="feature-item__title">Real Cost Data</h3>
            <p class="feature-item__description">Accurate, up-to-date cost of living data for accommodation, food, transport, and more.</p>
          </div>
          <div class="feature-item">
            <div class="feature-item__icon">W</div>
            <h3 class="feature-item__title">Nomad Scores</h3>
            <p class="feature-item__description">WiFi speeds, coworking availability, and safety ratings for remote workers.</p>
          </div>
          <div class="feature-item">
            <div class="feature-item__icon">${totalCities}</div>
            <h3 class="feature-item__title">${totalCities} Cities</h3>
            <p class="feature-item__description">From budget-friendly Southeast Asia to premium European capitals.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt" data-testid="top-cities">
      <div class="container">
        <div class="section__header text-center">
          <h2 class="section__title">Top Destinations for Digital Nomads</h2>
          <p class="section__subtitle">Ranked by overall nomad score, cost of living, and work infrastructure.</p>
        </div>
        <div class="grid grid-cols-3 gap-6 lg-grid-cols-2 md-grid-cols-1">
          ${citiesHtml}
        </div>
        <div class="text-center mt-10">
          ${Button({ text: 'View All Destinations', href: '/destinations', variant: 'secondary', testId: 'view-all-btn' })}
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

export default HomePage;
