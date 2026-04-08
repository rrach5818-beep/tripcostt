import { MainLayout } from '../layouts/MainLayout.js';
import { getAllCities } from '../data/cityService.js';

export function BestCitiesPage(params) {
  const { countrySlug } = params;
  const allCities = getAllCities();

  const citiesInCountry = allCities.filter(
    city => city.countrySlug === countrySlug
  );

  if (citiesInCountry.length === 0) {
    return MainLayout(`
      <div class="container py-20 text-center">
        <h1>No cities found</h1>
        <p>No data available for this country yet.</p>
      </div>
    `);
  }

  const countryName = citiesInCountry[0].country;

  const bestByCost = [...citiesInCountry]
    .filter(c => c.monthlyBudget)
    .sort((a, b) => a.monthlyBudget - b.monthlyBudget)
    .slice(0, 5);

  const bestForNomads = [...citiesInCountry]
    .filter(c => c.digitalNomad?.overallScore)
    .sort((a, b) => b.digitalNomad.overallScore - a.digitalNomad.overallScore)
    .slice(0, 5);

  const renderCityList = cities =>
    cities.map(city => `
      <a href="/city/${city.slug}" class="card card--hover">
        <div class="card__body">
          <h3>${city.name}</h3>
          <p class="text-sm text-secondary">
            Cost of living, safety and lifestyle overview.
          </p>
        </div>
      </a>
    `).join('');

  const content = `
    <section class="section">
      <div class="container">
        <h1>Best cities in ${countryName} to live in</h1>

        <p class="text-secondary max-w-2xl mt-4">
          Discover the best cities in ${countryName} based on cost of living,
          lifestyle, and digital nomad friendliness.
        </p>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <h2>Best cities in ${countryName} by cost of living</h2>
        <div class="grid grid-cols-3 gap-6 mt-6">
          ${renderCityList(bestByCost)}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Best cities in ${countryName} for digital nomads</h2>
        <div class="grid grid-cols-3 gap-6 mt-6">
          ${renderCityList(bestForNomads)}
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}