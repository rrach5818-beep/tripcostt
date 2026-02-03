/**
 * CalculatorPage
 * Monthly budget calculator with modern SaaS design
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { getAllCities } from '../data/cityService.js';
import { getHousingTypes, getLifestyleLevels, calculateMonthlyBudget, formatCurrency } from '../logic/budgetCalculator.js';

export function CalculatorPage() {
  const cities = getAllCities();
  const housingTypes = getHousingTypes();
  const lifestyles = getLifestyleLevels();

  const cityOptions = cities.map(city => 
    `<option value="${city.slug}" data-city='${JSON.stringify({
      slug: city.slug,
      name: city.name,
      currencySymbol: city.currencySymbol,
      costs: city.costs
    })}'>${city.name}, ${city.country}</option>`
  ).join('');

  const housingOptions = housingTypes.map(h => 
    `<option value="${h.value}">${h.label}</option>`
  ).join('');

  const lifestyleOptions = lifestyles.map((l, i) => 
    `<option value="${l.value}"${i === 1 ? ' selected' : ''}>${l.label}</option>`
  ).join('');

  const defaultCity = cities[0];
  const defaultBudget = calculateMonthlyBudget(defaultCity, { housing: 'center', lifestyle: 'standard' });

  const content = `
    <div class="page-header page-header--centered" data-testid="page-header">
      <div class="container">
        <p class="page-header__eyebrow">Budget Tool</p>
        <h1 class="page-header__title">Monthly Budget Calculator</h1>
        <p class="page-header__subtitle">
          Get accurate cost estimates for any city. Customize by location, housing type, and lifestyle to plan your budget.
        </p>
      </div>
    </div>

    <section class="section" data-testid="calculator-section">
      <div class="container">
        <div class="calculator">
          <div class="calculator__intro text-center mb-10">
            <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--space-3);">How it works</h2>
            <p style="color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">
              Select your destination, choose your preferred housing location and lifestyle level. 
              The calculator will estimate your monthly costs including accommodation, food, transport, and coworking.
            </p>
          </div>

          <div class="calculator__form" data-testid="calculator-form">
            <div class="form-group">
              <label class="form-label" for="city-select">Destination</label>
              <select class="form-select" id="city-select" data-testid="city-select">
                ${cityOptions}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="housing-select">Housing Location</label>
              <select class="form-select" id="housing-select" data-testid="housing-select">
                ${housingOptions}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="lifestyle-select">Lifestyle</label>
              <select class="form-select" id="lifestyle-select" data-testid="lifestyle-select">
                ${lifestyleOptions}
              </select>
            </div>
          </div>

          <div class="calculator__results" id="calculator-results" data-testid="calculator-results">
            <div class="calculator__total">
              <p class="calculator__total-label">Estimated Monthly Budget</p>
              <p class="calculator__total-value" id="total-amount" data-testid="total-amount">${formatCurrency(defaultBudget.total, defaultBudget.currencySymbol)}</p>
              <p class="calculator__total-subtext">per month in <span id="city-name">${defaultCity.name}</span></p>
            </div>

            <div class="calculator__breakdown" id="breakdown" data-testid="breakdown">
              <div class="calculator__breakdown-card">
                <div>
                  <p class="calculator__breakdown-label">Accommodation</p>
                  <p style="font-size: var(--font-size-xs); color: var(--color-text-tertiary);">30 days rental</p>
                </div>
                <p class="calculator__breakdown-value" id="accommodation-cost">${formatCurrency(defaultBudget.breakdown.accommodation.total, defaultBudget.currencySymbol)}</p>
              </div>
              <div class="calculator__breakdown-card">
                <div>
                  <p class="calculator__breakdown-label">Food & Dining</p>
                  <p style="font-size: var(--font-size-xs); color: var(--color-text-tertiary);">Daily meals</p>
                </div>
                <p class="calculator__breakdown-value" id="food-cost">${formatCurrency(defaultBudget.breakdown.food.total, defaultBudget.currencySymbol)}</p>
              </div>
              <div class="calculator__breakdown-card">
                <div>
                  <p class="calculator__breakdown-label">Transportation</p>
                  <p style="font-size: var(--font-size-xs); color: var(--color-text-tertiary);">Monthly pass</p>
                </div>
                <p class="calculator__breakdown-value" id="transport-cost">${formatCurrency(defaultBudget.breakdown.transport.total, defaultBudget.currencySymbol)}</p>
              </div>
              <div class="calculator__breakdown-card">
                <div>
                  <p class="calculator__breakdown-label">Coworking Space</p>
                  <p style="font-size: var(--font-size-xs); color: var(--color-text-tertiary);">Monthly membership</p>
                </div>
                <p class="calculator__breakdown-value" id="coworking-cost">${formatCurrency(defaultBudget.breakdown.coworking.total, defaultBudget.currencySymbol)}</p>
              </div>
            </div>

            <p style="text-align: center; margin-top: var(--space-6); color: var(--color-text-tertiary); font-size: var(--font-size-sm);">
              * Estimates include a 10% buffer for miscellaneous expenses
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section__header text-center">
          <h2 class="section__title">Need more details?</h2>
          <p class="section__subtitle" style="margin: 0 auto;">Explore individual city pages for comprehensive cost breakdowns, WiFi speeds, safety scores, and local tips.</p>
        </div>
        <div class="text-center mt-8">
          <a href="/destinations" data-link class="btn btn--primary btn--lg">Browse All Cities</a>
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

// Setup calculator interactivity after page renders
export function setupCalculatorInteractivity() {
  const citySelect = document.getElementById('city-select');
  const housingSelect = document.getElementById('housing-select');
  const lifestyleSelect = document.getElementById('lifestyle-select');
  const cityNameEl = document.getElementById('city-name');

  if (!citySelect) return;

  function formatCurrency(amount, symbol = '$') {
    return `${symbol}${amount.toLocaleString()}`;
  }

  function calculateBudget(costs, housing, lifestyle) {
    const daysPerMonth = 30;
    const dailyAccommodation = costs.accommodation[housing] || costs.accommodation.center;
    const accommodationTotal = dailyAccommodation * daysPerMonth;
    const dailyFood = costs.food[lifestyle] || costs.food.standard;
    const foodTotal = dailyFood * daysPerMonth;
    const transportTotal = costs.transport;
    const coworkingTotal = costs.coworking;
    const subtotal = accommodationTotal + foodTotal + transportTotal + coworkingTotal;
    const miscellaneous = Math.round(subtotal * 0.1);
    const total = subtotal + miscellaneous;

    return {
      total,
      accommodation: accommodationTotal,
      food: foodTotal,
      transport: transportTotal,
      coworking: coworkingTotal
    };
  }

  function updateCalculation() {
    const selectedOption = citySelect.options[citySelect.selectedIndex];
    const cityDataStr = selectedOption.getAttribute('data-city');
    if (!cityDataStr) return;

    const cityData = JSON.parse(cityDataStr);
    const housing = housingSelect.value;
    const lifestyle = lifestyleSelect.value;

    const budget = calculateBudget(cityData.costs, housing, lifestyle);
    const symbol = cityData.currencySymbol;

    document.getElementById('total-amount').textContent = formatCurrency(budget.total, symbol);
    document.getElementById('accommodation-cost').textContent = formatCurrency(budget.accommodation, symbol);
    document.getElementById('food-cost').textContent = formatCurrency(budget.food, symbol);
    document.getElementById('transport-cost').textContent = formatCurrency(budget.transport, symbol);
    document.getElementById('coworking-cost').textContent = formatCurrency(budget.coworking, symbol);
    
    if (cityNameEl) {
      cityNameEl.textContent = cityData.name;
    }
  }

  citySelect.addEventListener('change', updateCalculation);
  housingSelect.addEventListener('change', updateCalculation);
  lifestyleSelect.addEventListener('change', updateCalculation);
}

export default CalculatorPage;
