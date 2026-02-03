/**
 * CityPage
 * Individual city detail page with modern SaaS design
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { Button } from '../components/ui/Button.js';
import { Badge } from '../components/ui/Badge.js';
import { getCityBySlug } from '../data/cityService.js';
import { formatCurrency } from '../logic/budgetCalculator.js';

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

  const monthlyBudget = (city.costs.accommodation.center * 30) + (city.costs.food.standard * 30) + city.costs.transport + city.costs.coworking;
  const monthlyBudgetSuburb = (city.costs.accommodation.suburb * 30) + (city.costs.food.standard * 30) + city.costs.transport + city.costs.coworking;

  const tagsHtml = city.tags.slice(0, 3).map(tag => 
    Badge({ text: tag, variant: 'primary' })
  ).join(' ');

  const content = `
    <section class="section" style="background: var(--color-bg-gradient-subtle);" data-testid="city-page">
      <div class="container">
        <div class="city-hero">
          <div class="city-hero__content">
            <div class="city-hero__badges">${tagsHtml}</div>
            <h1 class="city-hero__name">Cost of Living in ${city.name}</h1>
            <p class="city-hero__country">${city.country} • ${city.continent}</p>
            <p class="city-hero__description">${city.description}</p>
            <div class="mt-8 flex gap-4">
              ${Button({ text: 'Calculate Budget', href: '/calculator', variant: 'primary', size: 'lg', testId: 'city-cta-calculator' })}
              ${Button({ text: 'Compare Cities', href: '/nomad', variant: 'secondary', size: 'lg' })}
            </div>
          </div>
          <div>
            <img 
              src="${city.image}" 
              alt="${city.name}, ${city.country} - Cost of living guide" 
              class="city-hero__image"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </section>

    <section class="section" data-testid="city-stats">
      <div class="container">
        <h2 class="section__title mb-8">Key Statistics</h2>
        <div class="kpi-grid">
          <div class="kpi-card">
            <div class="kpi-card__icon">💰</div>
            <p class="kpi-card__label">Monthly Budget (City Center)</p>
            <p class="kpi-card__value">${formatCurrency(monthlyBudget, city.currencySymbol)}</p>
            <p class="kpi-card__subtext">Standard lifestyle</p>
          </div>
          <div class="kpi-card">
            <div class="kpi-card__icon">📡</div>
            <p class="kpi-card__label">Internet Speed</p>
            <p class="kpi-card__value">${city.digitalNomad.wifiSpeed} Mbps</p>
            <p class="kpi-card__subtext">Average WiFi</p>
          </div>
          <div class="kpi-card">
            <div class="kpi-card__icon">🛡️</div>
            <p class="kpi-card__label">Safety Score</p>
            <p class="kpi-card__value">${city.digitalNomad.safetyScore}/100</p>
            <p class="kpi-card__subtext">${city.digitalNomad.safetyScore >= 70 ? 'Safe destination' : 'Exercise caution'}</p>
          </div>
          <div class="kpi-card">
            <div class="kpi-card__icon">⭐</div>
            <p class="kpi-card__label">Nomad Score</p>
            <p class="kpi-card__value">${city.digitalNomad.overallScore}/100</p>
            <p class="kpi-card__subtext">Overall rating</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt" data-testid="city-costs">
      <div class="container">
        <h2 class="section__title mb-8">Cost Breakdown</h2>
        <div class="grid grid-cols-3 gap-6 md-grid-cols-1">
          <div class="card">
            <div class="card__body">
              <h3 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4);">Accommodation</h3>
              <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-3);">
                <span style="color: var(--color-text-secondary);">City Center</span>
                <span style="font-weight: var(--font-weight-semibold);">${formatCurrency(city.costs.accommodation.center * 30, city.currencySymbol)}/mo</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--color-text-secondary);">Outside Center</span>
                <span style="font-weight: var(--font-weight-semibold);">${formatCurrency(city.costs.accommodation.suburb * 30, city.currencySymbol)}/mo</span>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__body">
              <h3 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4);">Food & Dining</h3>
              <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-3);">
                <span style="color: var(--color-text-secondary);">Budget</span>
                <span style="font-weight: var(--font-weight-semibold);">${formatCurrency(city.costs.food.budget * 30, city.currencySymbol)}/mo</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-3);">
                <span style="color: var(--color-text-secondary);">Standard</span>
                <span style="font-weight: var(--font-weight-semibold);">${formatCurrency(city.costs.food.standard * 30, city.currencySymbol)}/mo</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--color-text-secondary);">Premium</span>
                <span style="font-weight: var(--font-weight-semibold);">${formatCurrency(city.costs.food.premium * 30, city.currencySymbol)}/mo</span>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__body">
              <h3 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4);">Other Costs</h3>
              <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-3);">
                <span style="color: var(--color-text-secondary);">Transport</span>
                <span style="font-weight: var(--font-weight-semibold);">${formatCurrency(city.costs.transport, city.currencySymbol)}/mo</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--color-text-secondary);">Coworking</span>
                <span style="font-weight: var(--font-weight-semibold);">${formatCurrency(city.costs.coworking, city.currencySymbol)}/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" data-testid="city-faq">
      <div class="container">
        <h2 class="section__title mb-8 text-center">Frequently Asked Questions</h2>
        <div class="faq-list">
          <div class="faq-item faq-item--open">
            <button class="faq-item__question">
              <span>How much does it cost to live in ${city.name}?</span>
              <span class="faq-item__icon">▼</span>
            </button>
            <div class="faq-item__answer">
              The average monthly cost of living in ${city.name} ranges from ${formatCurrency(monthlyBudgetSuburb, city.currencySymbol)} (outside center) to ${formatCurrency(monthlyBudget, city.currencySymbol)} (city center) for a standard lifestyle. This includes accommodation, food, transport, and coworking space.
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-item__question">
              <span>Is ${city.name} safe for digital nomads?</span>
              <span class="faq-item__icon">▼</span>
            </button>
            <div class="faq-item__answer">
              ${city.name} has a safety score of ${city.digitalNomad.safetyScore}/100. ${city.digitalNomad.safetyScore >= 70 ? 'It is generally considered safe for visitors and remote workers. Normal precautions are advised.' : 'Exercise normal caution as you would in any major city. Stay aware of your surroundings and keep valuables secure.'}
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-item__question">
              <span>How is the internet in ${city.name}?</span>
              <span class="faq-item__icon">▼</span>
            </button>
            <div class="faq-item__answer">
              The average WiFi speed in ${city.name} is ${city.digitalNomad.wifiSpeed} Mbps, which is ${city.digitalNomad.wifiSpeed >= 100 ? 'excellent for video calls and heavy usage' : city.digitalNomad.wifiSpeed >= 50 ? 'good for most remote work needs' : 'adequate for basic work tasks'}. Coworking spaces typically offer faster and more reliable connections.
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-item__question">
              <span>What is the best area to stay in ${city.name}?</span>
              <span class="faq-item__icon">▼</span>
            </button>
            <div class="faq-item__answer">
              For digital nomads, we recommend areas with good WiFi coverage, cafes, and coworking spaces. City center locations cost around ${formatCurrency(city.costs.accommodation.center * 30, city.currencySymbol)}/month, while suburbs are more affordable at ${formatCurrency(city.costs.accommodation.suburb * 30, city.currencySymbol)}/month.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="cta-section">
          <h2 class="cta-section__title">Plan your budget for ${city.name}</h2>
          <p class="cta-section__subtitle">Get a personalized cost estimate based on your lifestyle preferences.</p>
          ${Button({ text: 'Calculate Your Budget', href: '/calculator', variant: 'white', size: 'lg', testId: 'city-cta-calculator-bottom' })}
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

// Setup FAQ accordion interactivity
export function setupCityPageInteractivity() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('faq-item--open');
      });
    }
  });
}

export default CityPage;
