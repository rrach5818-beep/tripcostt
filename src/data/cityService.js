import { cityDB } from './cityDB.js';

/* ============================================================
   🔹 UTILITAIRES INTERNES
============================================================ */
const cityCache = new Map();

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function slugify(value) {
  return value
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

function getValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

/* ============================================================
   🔹 VISA LOGIC
============================================================ */

export function calculateVisaComplexity(visa) {
  if (!visa) return null;

  let score = 0;

  score += Math.min((visa.processingTimeDays || 0) / 3, 30);
  score += Math.min((visa.minIncomeRequirement || 0) / 200, 30);

  if (visa.stayDurationMonths < 12) score += 20;
  else if (visa.stayDurationMonths <= 24) score += 10;
  else score += 5;

  score += visa.remoteFriendly ? 5 : 20;

  return Math.min(Math.round(score), 100);
}

/* ============================================================
   🔹 NOMAD SCORE
============================================================ */

function computeNomadScore(city) {
  const infra =
    (city.infrastructure?.publicTransportQuality || 0) * 0.2 +
    (city.infrastructure?.healthcareQuality || 0) * 0.1 +
    (city.infrastructure?.englishProficiency || 0) * 0.15 +
    (city.infrastructure?.airportConnectivity || 0) * 0.1;

  const safety = (city.safety?.safetyIndex || 0) * 0.2;

  const stability =
    city.macro?.currencyStability === "Very High"
      ? 10
      : city.macro?.currencyStability === "High"
      ? 8
      : city.macro?.currencyStability === "Medium"
      ? 5
      : 2;

  const inflationPenalty = Math.min(city.macro?.inflationRate || 0, 50) * 0.2;

  const visaBonus = city.visa?.remoteFriendly ? 10 : 0;

  let score =
    infra +
    safety +
    stability +
    visaBonus -
    inflationPenalty;

  return Math.max(0, Math.min(100, Math.round(score)));
}

/* ============================================================
   🔹 TRIPCOST INDEX 
============================================================ */

function computeTripCostIndex(city) {
  if (!city) return 0;

  const costScore =
    100 -
    Math.min(
      (
        city.costs.accommodation.center * 30 +
        city.costs.food.standard * 30 +
        city.costs.transport +
        city.costs.coworking
      ) / 50,
      100
    );

  const safetyScore = city.safety?.safetyIndex || 0;

  const infrastructureScore =
    (
      city.infrastructure?.publicTransportQuality +
      city.infrastructure?.healthcareQuality +
      city.infrastructure?.englishProficiency +
      city.infrastructure?.airportConnectivity
    ) / 4;

  const visaScore = city.visa?.remoteFriendly ? 85 : 40;

  const inflationPenalty = Math.min(city.macro?.inflationRate || 0, 50);

  let finalScore =
    costScore * 0.25 +
    safetyScore * 0.25 +
    infrastructureScore * 0.25 +
    visaScore * 0.15 -
    inflationPenalty * 0.1;

  return Math.max(0, Math.min(100, Math.round(finalScore)));
}

/* ============================================================
   🔹 RELOCATION INTELLIGENCE SCORE
============================================================ */

function computeRelocationScore(city) {
  if (!city) return 0;

  const taxScore =
    100 -
    (
      (city.tax?.personalIncomeTaxTopRate || 0) +
      (city.tax?.corporateTax || 0)
    ) / 2;

  const stabilityScore =
    city.macro?.currencyStability === "Very High"
      ? 95
      : city.macro?.currencyStability === "High"
      ? 85
      : city.macro?.currencyStability === "Medium"
      ? 65
      : 40;

  const volatilityPenalty =
    (city.macro?.rentVolatilityIndex || 0) * 5;

  const safetyScore = city.safety?.safetyIndex || 0;

  const visaEase = city.visa?.remoteFriendly ? 90 : 50;

  let score =
    taxScore * 0.2 +
    stabilityScore * 0.2 +
    safetyScore * 0.2 +
    visaEase * 0.2 -
    volatilityPenalty * 0.1;

  return Math.max(0, Math.min(100, Math.round(score)));
}

/* ============================================================
   🔹 ENRICHMENT + CACHE
============================================================ */

export function enrichCityWithComputedData(city) {
  if (!city) return null;

  if (cityCache.has(city.slug)) {
    return cityCache.get(city.slug);
  }

  const enriched = {
    ...city,
    digitalNomad: {
      ...city.digitalNomad,
      overallScore: computeNomadScore(city),
      coworkingCost: city.costs?.coworking,
      safetyScore: city.safety?.safetyIndex
    },
    visaComplexityScore: calculateVisaComplexity(city.visa),
    tripCostIndex: computeTripCostIndex(city),
    relocationScore: computeRelocationScore(city)
  };

  cityCache.set(city.slug, enriched);

  return enriched;
}

/* ============================================================
   🔹 CORE ACCESS
============================================================ */

export function getAllCities() {
  return cityDB.map(enrichCityWithComputedData);
}

export function getCityBySlug(slug) {
  const city = cityDB.find(city => city.slug === slug) || null;
  return enrichCityWithComputedData(city);
}

export function getCityById(id) {
  const city = cityDB.find(city => city.id === id) || null;
  return enrichCityWithComputedData(city);
}

/* ============================================================
   🔹 FILTERING
============================================================ */

export function getCitiesByContinent(continent) {
  return cityDB
    .filter(city => city.continent === continent)
    .map(enrichCityWithComputedData);
}

export function getCitiesByTag(tag) {
  return cityDB
    .filter(city => safeArray(city.tags).includes(tag))
    .map(enrichCityWithComputedData);
}

export function getCitiesByCountry(countrySlug) {
  if (!countrySlug) return [];

  return cityDB
    .filter(city => slugify(city.country) === countrySlug)
    .map(enrichCityWithComputedData);
}

/* ============================================================
   🔹 AGGREGATION
============================================================ */

export function getCountriesWithCities() {
  const map = {};

  cityDB.forEach(city => {
    const slug = slugify(city.country);

    if (!map[slug]) {
      map[slug] = {
        name: city.country,
        slug
      };
    }
  });

  return Object.values(map).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

export function getContinents() {
  return [...new Set(cityDB.map(city => city.continent))];
}

export function getAllTags() {
  const tags = cityDB.flatMap(city =>
    safeArray(city.tags)
  );
  return [...new Set(tags)].sort();
}

/* ============================================================
   🔹 SEARCH
============================================================ */

export function searchCities(query) {
  if (!query) return [];

  const lowerQuery = query.toLowerCase();

  return cityDB
    .filter(city =>
      city.name.toLowerCase().includes(lowerQuery) ||
      city.country.toLowerCase().includes(lowerQuery)
    )
    .map(enrichCityWithComputedData);
}

/* ============================================================
   🔹 SORTING
============================================================ */

export function getCitiesSortedBy(field, order = 'desc') {
  return [...cityDB]
    .sort((a, b) => {
      const aVal = getValue(a, field) ?? 0;
      const bVal = getValue(b, field) ?? 0;

      return order === 'asc'
        ? aVal - bVal
        : bVal - aVal;
    })
    .map(enrichCityWithComputedData);
}

/* ============================================================
   🔹 COSTATLAS HELPERS
============================================================ */

export function getCitiesSortedByVisaComplexity(order = 'asc') {
  return getAllCities().sort((a, b) =>
    order === 'asc'
      ? (a.visaComplexityScore ?? 0) - (b.visaComplexityScore ?? 0)
      : (b.visaComplexityScore ?? 0) - (a.visaComplexityScore ?? 0)
  );
}

export function getCitiesSortedBySafety(order = 'desc') {
  return getCitiesSortedBy('safety.safetyIndex', order);
}

export function getCitiesSortedByInflation(order = 'asc') {
  return getCitiesSortedBy('macro.inflationRate', order);
}

/* ============================================================
   🔹 LEGACY COMPATIBILITY
============================================================ */

export function getTopNomadCities(n = 10) {
  return getAllCities()
    .sort((a, b) => b.digitalNomad.overallScore - a.digitalNomad.overallScore)
    .slice(0, n);
}

export function getCityCount() {
  return cityDB.length;
}
/* ============================================================
   🔹 RELOCATION COMPARISON ENGINE
============================================================ */

export function compareCities(slugA, slugB, monthlyIncome = 5000) {
  const cityA = enrichCityWithComputedData(
    cityDB.find(c => c.slug === slugA)
  );

  const cityB = enrichCityWithComputedData(
    cityDB.find(c => c.slug === slugB)
  );

  if (!cityA || !cityB) return null;

  function computeMonthlyCost(city) {
    return (
      city.costs.accommodation.center * 30 +
      city.costs.food.standard * 30 +
      city.costs.transport +
      city.costs.coworking
    );
  }

  const costA = computeMonthlyCost(cityA);
  const costB = computeMonthlyCost(cityB);

  const incomeToCostA = Math.round((monthlyIncome / costA) * 100);
  const incomeToCostB = Math.round((monthlyIncome / costB) * 100);

  const winner = {
    tripCost:
      cityA.tripCostIndex > cityB.tripCostIndex ? cityA.slug : cityB.slug,
    relocation:
      cityA.relocationScore > cityB.relocationScore ? cityA.slug : cityB.slug,
    visa:
      cityA.visaComplexityScore < cityB.visaComplexityScore ? cityA.slug : cityB.slug,
    affordability:
      costA < costB ? cityA.slug : cityB.slug,
    incomePower:
      incomeToCostA > incomeToCostB ? cityA.slug : cityB.slug
  };

  function strategicRecommendation(city) {
    if (city.relocationScore > 80)
      return "Long-term relocation candidate";
    if (city.tripCostIndex > 75)
      return "Strong cost-performance balance";
    if (city.visaComplexityScore < 30)
      return "Easy short-term relocation";
    return "Moderate relocation potential";
  }

  return {
    cityA: {
      ...cityA,
      monthlyCost: costA,
      incomeToCostRatio: incomeToCostA,
      recommendation: strategicRecommendation(cityA)
    },
    cityB: {
      ...cityB,
      monthlyCost: costB,
      incomeToCostRatio: incomeToCostB,
      recommendation: strategicRecommendation(cityB)
    },
    winner
  };
}

/* ============================================================
   🔹 EXPORT DEFAULT
============================================================ */

export default {
  getAllCities,
  getCityBySlug,
  getCityById,
  getCitiesByContinent,
  getCitiesByTag,
  getContinents,
  getAllTags,
  searchCities,
  getCitiesSortedBy,
  getTopNomadCities,
  getCityCount,
  getCitiesByCountry,
  getCountriesWithCities,
  calculateVisaComplexity,
  getCitiesSortedByVisaComplexity,
  getCitiesSortedBySafety,
  getCitiesSortedByInflation,
 compareCities,
};