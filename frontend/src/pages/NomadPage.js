/**
 * NomadPage
 * Digital nomad rankings comparison
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { getAllCities } from '../data/cityService.js';
import { formatCurrency } from '../logic/budgetCalculator.js';
import { getMonthlyBudgetEstimate } from '../logic/scoreCalculator.js';

export function NomadPage() {
  const cities = getAllCities().sort((a, b) => 
    b.digitalNomad.overallScore - a.digitalNomad.overallScore
  );

  const tableRows = cities.map((city, index) => {
    const monthlyBudget = getMonthlyBudgetEstimate(city, 'standard');
    const score = city.digitalNomad.overallScore;
    const scoreWidth = score;

    return `
      <tr data-testid="nomad-row-${city.slug}">
        <td style="font-weight:600;">#${index + 1}</td>
        <td>
          <a href="/city/${city.slug}" data-link style="font-weight:600;color:var(--color-text-primary);">
            ${city.name}
          </a>
          <div style="font-size:0.75rem;color:var(--color-text-tertiary);">${city.country}</div>
        </td>
        <td>
          <div class="nomad-table__score">
            <span style="font-weight:600;width:32px;">${score}</span>
            <div class="nomad-table__score-bar">
              <div class="nomad-table__score-fill" style="width:${scoreWidth}%;"></div>
            </div>
          </div>
        </td>
        <td>${city.digitalNomad.wifiSpeed} Mbps</td>
        <td>${formatCurrency(city.digitalNomad.coworkingCost, city.currencySymbol)}/mo</td>
        <td style="font-weight:600;">${formatCurrency(monthlyBudget, city.currencySymbol)}</td>
      </tr>
    `;
  }).join('');

  const content = `
    <div class="page-header" data-testid="page-header">
      <div class="container">
        <h1 class="page-header__title">Digital Nomad Rankings</h1>
        <p class="page-header__subtitle">Compare ${cities.length} cities by nomad score, WiFi, coworking costs, and monthly budget</p>
      </div>
    </div>

    <section class="section" data-testid="nomad-rankings">
      <div class="container">
        <div class="table-container">
          <table class="table" data-testid="nomad-table">
            <thead>
              <tr>
                <th style="width:60px;">Rank</th>
                <th>City</th>
                <th style="width:180px;">Nomad Score</th>
                <th>WiFi Speed</th>
                <th>Coworking</th>
                <th>Monthly Budget</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

export default NomadPage;
