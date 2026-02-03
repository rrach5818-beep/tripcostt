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
              <span class="city-card__stat-label">From</span>
              <span class="city-card__stat-value">${formatCurrency(monthlyBudget, city.currencySymbol)}/mo</span>
            </div>
          </div>
        </div>
      `
    });
  }).join('');

  const content = `
    <section class="hero" data-testid="hero">
      <div class="container">
        <div class="hero__badge">
          <span>✨</span>
          <span>Trusted by 10,000+ digital nomads worldwide</span>
        </div>
        <h1 class="hero__title">
          Plan Your Next Move with<br>
          <span class="hero__title-gradient">Real Cost Data</span>
        </h1>
        <p class="hero__subtitle">
          Compare cost of living across ${totalCities} cities worldwide. Get accurate estimates for accommodation, food, transport, and more. Plan smarter, travel better.
        </p>
        <div class="hero__actions">
          ${Button({ text: 'Calculate Your Budget', href: '/calculator', variant: 'primary', size: 'lg', testId: 'hero-cta-calculator' })}
          ${Button({ text: 'Browse Destinations', href: '/destinations', variant: 'secondary', size: 'lg', testId: 'hero-cta-destinations' })}
        </div>
      </div>
    </section>

    <div class="trust-badges">
      <div class="trust-badge">
        <span class="trust-badge__icon">🌍</span>
        <span>${totalCities} Cities</span>
      </div>
      <div class="trust-badge">
        <span class="trust-badge__icon">📊</span>
        <span>Real-time Data</span>
      </div>
      <div class="trust-badge">
        <span class="trust-badge__icon">💼</span>
        <span>Nomad-focused</span>
      </div>
      <div class="trust-badge">
        <span class="trust-badge__icon">🔒</span>
        <span>Free to Use</span>
      </div>
    </div>

    <section class="section" data-testid="features">
      <div class="container">
        <div class="section__header text-center">
          <p class="section__eyebrow">Why TripCost</p>
          <h2 class="section__title">Everything you need to plan your budget</h2>
          <p class="section__subtitle" style="margin:0 auto;">Make informed decisions with comprehensive cost data and insights designed for remote workers and travelers.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-card__icon">💰</div>
            <h3 class="feature-card__title">Real Cost Data</h3>
            <p class="feature-card__description">Accurate, up-to-date cost of living data for accommodation, food, transport, coworking spaces, and entertainment.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon">📡</div>
            <h3 class="feature-card__title">Nomad Scores</h3>
            <p class="feature-card__description">WiFi speeds, coworking availability, safety ratings, and community size for every destination.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon">🌏</div>
            <h3 class="feature-card__title">${totalCities} Global Cities</h3>
            <p class="feature-card__description">From budget-friendly Southeast Asia to premium European capitals. Find your perfect destination.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt" data-testid="how-it-works">
      <div class="container">
        <div class="section__header text-center">
          <p class="section__eyebrow">How It Works</p>
          <h2 class="section__title">Plan your budget in 3 simple steps</h2>
        </div>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-card__number">1</div>
            <h3 class="step-card__title">Choose Your Destination</h3>
            <p class="step-card__description">Browse our database of ${totalCities} cities or use the calculator to compare options.</p>
          </div>
          <div class="step-card">
            <div class="step-card__number">2</div>
            <h3 class="step-card__title">Set Your Preferences</h3>
            <p class="step-card__description">Select your housing type, lifestyle level, and whether you need coworking space.</p>
          </div>
          <div class="step-card">
            <div class="step-card__number">3</div>
            <h3 class="step-card__title">Get Your Estimate</h3>
            <p class="step-card__description">Receive a detailed monthly budget breakdown with accommodation, food, transport, and more.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" data-testid="top-cities">
      <div class="container">
        <div class="section__header text-center">
          <p class="section__eyebrow">Popular Destinations</p>
          <h2 class="section__title">Top Cities for Digital Nomads</h2>
          <p class="section__subtitle" style="margin:0 auto;">Ranked by overall nomad score, cost of living, and work infrastructure.</p>
        </div>
        <div class="grid grid-cols-3 gap-6 lg-grid-cols-2 md-grid-cols-1">
          ${citiesHtml}
        </div>
        <div class="text-center mt-12">
          ${Button({ text: 'View All ${totalCities} Destinations', href: '/destinations', variant: 'secondary', size: 'lg', testId: 'view-all-btn' })}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cta-section">
          <h2 class="cta-section__title">Ready to plan your next adventure?</h2>
          <p class="cta-section__subtitle">Use our free calculator to estimate your monthly costs in any city.</p>
          ${Button({ text: 'Start Calculating', href: '/calculator', variant: 'white', size: 'lg', testId: 'cta-calculator' })}
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

export default HomePage;
