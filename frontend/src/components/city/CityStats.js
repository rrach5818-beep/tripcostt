/**
 * CityStats Component
 * Displays key stats for a city
 */

import { Stat } from '../ui/Stat.js';
import { formatCurrency } from '../../logic/budgetCalculator.js';

export function CityStats(city) {
  const { costs, digitalNomad, currencySymbol } = city;
  
  const monthlyRent = costs.accommodation.center * 30;
  
  const stats = [
    { label: 'Nomad Score', value: `${digitalNomad.overallScore}/100` },
    { label: 'Monthly Rent (Center)', value: formatCurrency(monthlyRent, currencySymbol) },
    { label: 'WiFi Speed', value: `${digitalNomad.wifiSpeed} Mbps` },
    { label: 'Safety Score', value: `${digitalNomad.safetyScore}/100` }
  ];

  const statsHtml = stats.map(stat => `
    <div class="card">
      <div class="card__body">
        ${Stat(stat)}
      </div>
    </div>
  `).join('');

  return `
    <div class="section" data-testid="city-stats">
      <h2 class="section__title mb-6">Key Statistics</h2>
      <div class="grid grid-cols-4 gap-4 lg-grid-cols-2 md-grid-cols-1">
        ${statsHtml}
      </div>
    </div>
  `;
}

export default CityStats;
