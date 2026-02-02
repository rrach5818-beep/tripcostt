/**
 * CalculatorPage
 * Monthly budget calculator
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { getAllCities, getCityBySlug } from '../data/cityService.js';
import { getHousingTypes, getLifestyleLevels, calculateMonthlyBudget, formatCurrency } from '../logic/budgetCalculator.js';

// Store city data globally for client-side updates
const citiesData = getAllCities();

// Expose for inline script
window.TripCost = {
  getCityBySlug: (slug) => citiesData.find(c => c.slug === slug),
  calculateMonthlyBudget,
  formatCurrency
};

export function CalculatorPage() {
  const cities = citiesData;
  const housingTypes = getHousingTypes();
  const lifestyles = getLifestyleLevels();

  const cityOptions = cities.map(city => 
    `<option value="${city.slug}">${city.name}, ${city.country}</option>`
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
    <div class="page-header" data-testid="page-header">
      <div class="container">
        <h1 class="page-header__title">Budget Calculator</h1>
        <p class="page-header__subtitle">Estimate your monthly costs based on city, housing, and lifestyle</p>
      </div>
    </div>

    <section class="section" data-testid="calculator-section">
      <div class="container">
        <div class="calculator">
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
            </div>

            <div class="calculator__breakdown" id="breakdown" data-testid="breakdown">
              <div class="card">
                <div class="card__body">
                  <h4>Accommodation</h4>
                  <p class="stat__value" id="accommodation-cost">${formatCurrency(defaultBudget.breakdown.accommodation.total, defaultBudget.currencySymbol)}</p>
                </div>
              </div>
              <div class="card">
                <div class="card__body">
                  <h4>Food & Dining</h4>
                  <p class="stat__value" id="food-cost">${formatCurrency(defaultBudget.breakdown.food.total, defaultBudget.currencySymbol)}</p>
                </div>
              </div>
              <div class="card">
                <div class="card__body">
                  <h4>Transportation</h4>
                  <p class="stat__value" id="transport-cost">${formatCurrency(defaultBudget.breakdown.transport.total, defaultBudget.currencySymbol)}</p>
                </div>
              </div>
              <div class="card">
                <div class="card__body">
                  <h4>Coworking</h4>
                  <p class="stat__value" id="coworking-cost">${formatCurrency(defaultBudget.breakdown.coworking.total, defaultBudget.currencySymbol)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Return with inline script for interactivity
  return MainLayout(content) + `
    <script>
      (function() {
        function updateCalculation() {
          const citySlug = document.getElementById('city-select').value;
          const housing = document.getElementById('housing-select').value;
          const lifestyle = document.getElementById('lifestyle-select').value;

          const city = window.TripCost.getCityBySlug(citySlug);
          if (!city) return;

          const budget = window.TripCost.calculateMonthlyBudget(city, { housing, lifestyle });
          const fmt = window.TripCost.formatCurrency;

          document.getElementById('total-amount').textContent = fmt(budget.total, budget.currencySymbol);
          document.getElementById('accommodation-cost').textContent = fmt(budget.breakdown.accommodation.total, budget.currencySymbol);
          document.getElementById('food-cost').textContent = fmt(budget.breakdown.food.total, budget.currencySymbol);
          document.getElementById('transport-cost').textContent = fmt(budget.breakdown.transport.total, budget.currencySymbol);
          document.getElementById('coworking-cost').textContent = fmt(budget.breakdown.coworking.total, budget.currencySymbol);
        }

        document.getElementById('city-select').addEventListener('change', updateCalculation);
        document.getElementById('housing-select').addEventListener('change', updateCalculation);
        document.getElementById('lifestyle-select').addEventListener('change', updateCalculation);
      })();
    </script>
  `;
}

export default CalculatorPage;
