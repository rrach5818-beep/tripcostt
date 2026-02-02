/**
 * CalculatorPage
 * Monthly budget calculator with interactivity
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

  return MainLayout(content);
}

// Setup calculator interactivity after page renders
export function setupCalculatorInteractivity() {
  const citySelect = document.getElementById('city-select');
  const housingSelect = document.getElementById('housing-select');
  const lifestyleSelect = document.getElementById('lifestyle-select');

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
  }

  citySelect.addEventListener('change', updateCalculation);
  housingSelect.addEventListener('change', updateCalculation);
  lifestyleSelect.addEventListener('change', updateCalculation);
}

export default CalculatorPage;
