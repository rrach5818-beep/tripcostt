/**
 * NomadPage
 * Digital nomad rankings with modern table design
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
    const rankClass = index === 0 ? 'color: #D97706; background: #FEF3C7;' : 
                      index === 1 ? 'color: #6B7280; background: #F3F4F6;' :
                      index === 2 ? 'color: #B45309; background: #FED7AA;' : '';

    return `
      <tr data-testid="nomad-row-${city.slug}">
        <td>
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; font-weight: 600; font-size: 0.875rem; ${rankClass}">${index + 1}</span>
        </td>
        <td>
          <a href="/city/${city.slug}" data-link style="font-weight: 600; color: var(--color-text-primary); text-decoration: none;">
            ${city.name}
          </a>
          <div style="font-size: 0.75rem; color: var(--color-text-tertiary); margin-top: 2px;">${city.country}</div>
        </td>
        <td>
          <div class="nomad-table__score">
            <span class="nomad-table__score-value">${score}</span>
            <div class="nomad-table__score-bar">
              <div class="nomad-table__score-fill" style="width: ${scoreWidth}%;"></div>
            </div>
          </div>
        </td>
        <td>
          <span style="font-weight: 500;">${city.digitalNomad.wifiSpeed}</span>
          <span style="color: var(--color-text-tertiary); font-size: 0.75rem;"> Mbps</span>
        </td>
        <td>
          <span style="font-weight: 500;">${city.digitalNomad.safetyScore}</span>
          <span style="color: var(--color-text-tertiary); font-size: 0.75rem;">/100</span>
        </td>
        <td>${formatCurrency(city.digitalNomad.coworkingCost, city.currencySymbol)}<span style="color: var(--color-text-tertiary); font-size: 0.75rem;">/mo</span></td>
        <td style="font-weight: 600;">${formatCurrency(monthlyBudget, city.currencySymbol)}</td>
      </tr>
    `;
  }).join('');

  const content = `
    <div class="page-header page-header--centered" data-testid="page-header">
      <div class="container">
        <p class="page-header__eyebrow">Rankings</p>
        <h1 class="page-header__title">Best Cities for Digital Nomads</h1>
        <p class="page-header__subtitle">
          Compare ${cities.length} cities ranked by our comprehensive Nomad Score, which factors in cost of living, 
          internet speed, safety, coworking availability, and community.
        </p>
      </div>
    </div>

    <section class="section" data-testid="nomad-intro">
      <div class="container">
        <div class="grid grid-cols-4 gap-6 lg-grid-cols-2 md-grid-cols-1 mb-12">
          <div class="kpi-card">
            <div class="kpi-card__icon">📊</div>
            <p class="kpi-card__label">Cities Ranked</p>
            <p class="kpi-card__value">${cities.length}</p>
          </div>
          <div class="kpi-card">
            <div class="kpi-card__icon">🏆</div>
            <p class="kpi-card__label">Top Rated</p>
            <p class="kpi-card__value">${cities[0].name}</p>
          </div>
          <div class="kpi-card">
            <div class="kpi-card__icon">💰</div>
            <p class="kpi-card__label">Most Affordable</p>
            <p class="kpi-card__value">${cities.sort((a,b) => getMonthlyBudgetEstimate(a) - getMonthlyBudgetEstimate(b))[0].name}</p>
          </div>
          <div class="kpi-card">
            <div class="kpi-card__icon">📡</div>
            <p class="kpi-card__label">Fastest Internet</p>
            <p class="kpi-card__value">${cities.sort((a,b) => b.digitalNomad.wifiSpeed - a.digitalNomad.wifiSpeed)[0].name}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt" data-testid="nomad-rankings">
      <div class="container">
        <h2 class="section__title mb-8">Complete Rankings</h2>
        <div class="table-container">
          <table class="table" data-testid="nomad-table">
            <thead>
              <tr>
                <th style="width: 60px;">Rank</th>
                <th>City</th>
                <th style="width: 160px;">Nomad Score</th>
                <th>Internet</th>
                <th>Safety</th>
                <th>Coworking</th>
                <th>Monthly Budget</th>
              </tr>
            </thead>
            <tbody>
              ${cities.sort((a, b) => b.digitalNomad.overallScore - a.digitalNomad.overallScore).map((city, index) => {
                const monthlyBudget = getMonthlyBudgetEstimate(city, 'standard');
                const score = city.digitalNomad.overallScore;
                const rankClass = index === 0 ? 'color: #D97706; background: #FEF3C7;' : 
                                  index === 1 ? 'color: #6B7280; background: #F3F4F6;' :
                                  index === 2 ? 'color: #B45309; background: #FED7AA;' : '';

                return `
                  <tr data-testid="nomad-row-${city.slug}">
                    <td>
                      <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; font-weight: 600; font-size: 0.875rem; ${rankClass}">${index + 1}</span>
                    </td>
                    <td>
                      <a href="/city/${city.slug}" data-link style="font-weight: 600; color: var(--color-text-primary); text-decoration: none;">
                        ${city.name}
                      </a>
                      <div style="font-size: 0.75rem; color: var(--color-text-tertiary); margin-top: 2px;">${city.country}</div>
                    </td>
                    <td>
                      <div class="nomad-table__score">
                        <span class="nomad-table__score-value">${score}</span>
                        <div class="nomad-table__score-bar">
                          <div class="nomad-table__score-fill" style="width: ${score}%;"></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span style="font-weight: 500;">${city.digitalNomad.wifiSpeed}</span>
                      <span style="color: var(--color-text-tertiary); font-size: 0.75rem;"> Mbps</span>
                    </td>
                    <td>
                      <span style="font-weight: 500;">${city.digitalNomad.safetyScore}</span>
                      <span style="color: var(--color-text-tertiary); font-size: 0.75rem;">/100</span>
                    </td>
                    <td>${formatCurrency(city.digitalNomad.coworkingCost, city.currencySymbol)}<span style="color: var(--color-text-tertiary); font-size: 0.75rem;">/mo</span></td>
                    <td style="font-weight: 600;">${formatCurrency(monthlyBudget, city.currencySymbol)}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header text-center mb-10">
          <h2 class="section__title">How We Calculate Nomad Scores</h2>
          <p class="section__subtitle" style="margin: 0 auto;">Our comprehensive scoring system evaluates each city across multiple factors important to digital nomads.</p>
        </div>
        <div class="grid grid-cols-4 gap-6 lg-grid-cols-2 md-grid-cols-1">
          <div class="feature-card" style="padding: var(--space-6);">
            <h4 style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2);">Cost of Living</h4>
            <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Accommodation, food, transport, and coworking costs normalized across cities.</p>
          </div>
          <div class="feature-card" style="padding: var(--space-6);">
            <h4 style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2);">Internet Quality</h4>
            <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Average WiFi speeds and reliability based on real user reports.</p>
          </div>
          <div class="feature-card" style="padding: var(--space-6);">
            <h4 style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2);">Safety Score</h4>
            <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Overall safety rating considering crime rates and personal security.</p>
          </div>
          <div class="feature-card" style="padding: var(--space-6);">
            <h4 style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2);">Infrastructure</h4>
            <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Coworking availability, cafes with WiFi, and nomad community presence.</p>
          </div>
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

export default NomadPage;
