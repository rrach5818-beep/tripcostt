<<<<<<< HEAD
import { getCountryAggregatedMetrics } from '../data/countryService.js';

/* ==========================================
   COUNTRY SCORE ENGINE (LONG TERM SAFE)
   Hybrid = Macro data + Real city data
========================================== */

export function calculateCountryScore(country, profile = 'solo') {

  /* --------------------------------------
     🔥 AGGREGATED CITY DATA
  -------------------------------------- */

  const aggregated = getCountryAggregatedMetrics(country.slug);

  const avgCitySafety = aggregated.avgSafetyScore ?? 0;
  const avgCityInternet = aggregated.avgInternetSpeed ?? 0;
  const avgMonthlyCost = aggregated.avgMonthlyCost ?? 0;

  // Convert cost into affordability score (lower cost = better score)
  const affordability = avgMonthlyCost
    ? Math.max(0, 100 - (avgMonthlyCost / 50))
    : 0;

  /* --------------------------------------
     STATIC COUNTRY DATA
  -------------------------------------- */

  const macro = country.macro ?? {};
  const tax = country.tax ?? {};
  const nomad = country.nomad ?? {};
  const family = country.family ?? {};

  const safety = macro.safetyIndex ?? 0;
  const healthcare = macro.healthcareIndex ?? 0;
  const infrastructure = macro.infrastructureScore ?? 0;
  const qol = macro.qualityOfLifeIndex ?? 0;

  const taxScore = tax.taxFriendlinessScore ?? 0;

  const internet = avgCityInternet || nomad.avgInternetSpeed || 0;
  const visa = nomad.visaEaseScore ?? 0;
  const coworking = nomad.coworkingDensityScore ?? 0;

  const education = family.educationScore ?? 0;
  const familySafety = family.familySafetyScore ?? 0;
  const suburban = family.suburbanAffordabilityScore ?? 0;

  // Prefer real city safety if available
  const citySafety = avgCitySafety || safety;

  /* --------------------------------------
     PROFILE LOGIC
  -------------------------------------- */

  let score = 0;

  if (profile === 'nomad') {

    score =
      citySafety * 0.15 +
      internet * 0.25 +
      visa * 0.2 +
      coworking * 0.2 +
      taxScore * 0.1 +
      qol * 0.1;

  }

  else if (profile === 'family') {

    score =
      familySafety * 0.25 +
      education * 0.25 +
      suburban * 0.2 +
      healthcare * 0.15 +
      citySafety * 0.15;

  }

  else if (profile === 'solo') {

    score =
      citySafety * 0.2 +
      infrastructure * 0.2 +
      internet * 0.2 +
      taxScore * 0.15 +
      qol * 0.15 +
      affordability * 0.1;

  }

  else {

    // Generic balanced fallback

    score =
      citySafety * 0.2 +
      healthcare * 0.2 +
      infrastructure * 0.2 +
      qol * 0.2 +
      taxScore * 0.2;

  }

  return Math.round(score);
=======
import { getCountryAggregatedMetrics } from '../data/countryService.js';

/* ==========================================
   COUNTRY SCORE ENGINE (LONG TERM SAFE)
   Hybrid = Macro data + Real city data
========================================== */

export function calculateCountryScore(country, profile = 'solo') {

  /* --------------------------------------
     🔥 AGGREGATED CITY DATA
  -------------------------------------- */

  const aggregated = getCountryAggregatedMetrics(country.slug);

  const avgCitySafety = aggregated.avgSafetyScore ?? 0;
  const avgCityInternet = aggregated.avgInternetSpeed ?? 0;
  const avgMonthlyCost = aggregated.avgMonthlyCost ?? 0;

  // Convert cost into affordability score (lower cost = better score)
  const affordability = avgMonthlyCost
    ? Math.max(0, 100 - (avgMonthlyCost / 50))
    : 0;

  /* --------------------------------------
     STATIC COUNTRY DATA
  -------------------------------------- */

  const macro = country.macro ?? {};
  const tax = country.tax ?? {};
  const nomad = country.nomad ?? {};
  const family = country.family ?? {};

  const safety = macro.safetyIndex ?? 0;
  const healthcare = macro.healthcareIndex ?? 0;
  const infrastructure = macro.infrastructureScore ?? 0;
  const qol = macro.qualityOfLifeIndex ?? 0;

  const taxScore = tax.taxFriendlinessScore ?? 0;

  const internet = avgCityInternet || nomad.avgInternetSpeed || 0;
  const visa = nomad.visaEaseScore ?? 0;
  const coworking = nomad.coworkingDensityScore ?? 0;

  const education = family.educationScore ?? 0;
  const familySafety = family.familySafetyScore ?? 0;
  const suburban = family.suburbanAffordabilityScore ?? 0;

  // Prefer real city safety if available
  const citySafety = avgCitySafety || safety;

  /* --------------------------------------
     PROFILE LOGIC
  -------------------------------------- */

  let score = 0;

  if (profile === 'nomad') {

    score =
      citySafety * 0.15 +
      internet * 0.25 +
      visa * 0.2 +
      coworking * 0.2 +
      taxScore * 0.1 +
      qol * 0.1;

  }

  else if (profile === 'family') {

    score =
      familySafety * 0.25 +
      education * 0.25 +
      suburban * 0.2 +
      healthcare * 0.15 +
      citySafety * 0.15;

  }

  else if (profile === 'solo') {

    score =
      citySafety * 0.2 +
      infrastructure * 0.2 +
      internet * 0.2 +
      taxScore * 0.15 +
      qol * 0.15 +
      affordability * 0.1;

  }

  else {

    // Generic balanced fallback

    score =
      citySafety * 0.2 +
      healthcare * 0.2 +
      infrastructure * 0.2 +
      qol * 0.2 +
      taxScore * 0.2;

  }

  return Math.round(score);
>>>>>>> f5684a6278b64a9f195794048f99a666f88c917b
}