// 🔥 NEW — Country-based ranking weights
import { countryDB } from '../data/countryDB.js';
// 🔥 NEW — Get dynamic weights by country + profile
function getCountryWeights(countrySlug, profile) {
  const country = countryDB.find(c => c.slug === countrySlug);

  if (!country) return null;

  return country.rankingWeights?.[profile] || null;
}
export function calculateCityScore(city, profile = 'solo') {
  const costs = city.costs ?? {};
  const accommodation = costs.accommodation ?? {};
  const food = costs.food ?? {};
  const nomad = city.digitalNomad ?? {};

  // -------------------------
  // 🏠 COST DATA
  // -------------------------

  const rentCenter = accommodation.center ?? 0;
  const rentSuburb = accommodation.suburb ?? 0;
  const foodStandard = food.standard ?? 0;

  const safety = nomad.safetyScore ?? 0;
  const internet = nomad.wifiSpeed ?? 0;
  const nomadScore = nomad.overallScore ?? 0;

  // -------------------------
  // 📊 AFFORDABILITY LOGIC
  // Lower cost = higher score
  // -------------------------

  const centerScore = rentCenter ? 1 / rentCenter : 0;
  const suburbScore = rentSuburb ? 1 / rentSuburb : 0;
  const foodScore = foodStandard ? 1 / foodStandard : 0;

  // Normalize a bit
  const affordabilitySolo = (centerScore + foodScore) * 1000;
  const affordabilityFamily = (suburbScore + foodScore) * 1000;

 // ============================================================
  // 🔥 NEW — CHECK COUNTRY-SPECIFIC WEIGHTS FIRST
  // ============================================================

  const countryWeights = getCountryWeights(city.countrySlug, profile);

  if (countryWeights) {
    /*
      If country has custom ranking weights,
      use them instead of hardcoded logic
    */

    const affordability =
      profile === 'family'
        ? affordabilityFamily
        : affordabilitySolo;

    const finalScore =
      affordability * countryWeights.affordability +
      safety * countryWeights.safety +
      internet * countryWeights.internet +
      nomadScore * countryWeights.lifestyle;

    return Math.round(finalScore);
  }


  // -------------------------
  // 🎯 PROFILE WEIGHTING
  // -------------------------

  let finalScore = 0;

  if (profile === 'solo') {
    /*
      Solo priorities:
      - Internet
      - Nomad ecosystem
      - Central rent
      - Safety (important but not dominant)
    */
    finalScore =
      affordabilitySolo * 0.25 +
      safety * 0.2 +
      internet * 0.25 +
      nomadScore * 0.3;

  } else if (profile === 'family') {
    /*
      Family priorities:
      - Safety (very high)
      - Suburb rent
      - Stability
      - Internet less critical
    */
    finalScore =
      affordabilityFamily * 0.3 +
      safety * 0.35 +
      internet * 0.1 +
      nomadScore * 0.25;

  } else {
    // Fallback generic
    finalScore =
      affordabilitySolo * 0.3 +
      safety * 0.25 +
      internet * 0.2 +
      nomadScore * 0.25;
  }

  return Math.round(finalScore);
}