/**
 * CitySimulator Component
 * Simple cost breakdown display
 */

import { formatCurrency } from '../../logic/budgetCalculator.js';

export function CitySimulator(city) {
  const { costs, currencySymbol } = city;
  
  const monthlyCenter = costs.accommodation.center * 30;
  const monthlySuburb = costs.accommodation.suburb * 30;
  const monthlyFoodStandard = costs.food.standard * 30;

  return `
    <div class="section section--alt" data-testid="city-simulator">
      <h2 class="section__title mb-6">Cost Breakdown</h2>
      <div class="grid grid-cols-3 gap-6 md-grid-cols-1">
        <div class="card">
          <div class="card__body">
            <h4 style="margin-bottom:var(--space-4);">Accommodation</h4>
            <p style="margin-bottom:var(--space-2);">City Center: <strong>${formatCurrency(monthlyCenter, currencySymbol)}/mo</strong></p>
            <p>Suburb: <strong>${formatCurrency(monthlySuburb, currencySymbol)}/mo</strong></p>
          </div>
        </div>
        <div class="card">
          <div class="card__body">
            <h4 style="margin-bottom:var(--space-4);">Food & Dining</h4>
            <p style="margin-bottom:var(--space-2);">Budget: <strong>${formatCurrency(costs.food.budget * 30, currencySymbol)}/mo</strong></p>
            <p style="margin-bottom:var(--space-2);">Standard: <strong>${formatCurrency(monthlyFoodStandard, currencySymbol)}/mo</strong></p>
            <p>Premium: <strong>${formatCurrency(costs.food.premium * 30, currencySymbol)}/mo</strong></p>
          </div>
        </div>
        <div class="card">
          <div class="card__body">
            <h4 style="margin-bottom:var(--space-4);">Other Costs</h4>
            <p style="margin-bottom:var(--space-2);">Transport: <strong>${formatCurrency(costs.transport, currencySymbol)}/mo</strong></p>
            <p>Coworking: <strong>${formatCurrency(costs.coworking, currencySymbol)}/mo</strong></p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default CitySimulator;
