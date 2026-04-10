<<<<<<< HEAD
import { countryDB } from './countryDB.js';
import { calculateCountryScore } from '../logic/countryRanking.js';
import { getAllCities } from './cityService.js';

/* ==========================================
   BASIC GETTERS
========================================== */

export function getAllCountries() {
  return [...countryDB];
}

export function getCountryBySlug(slug) {
  return countryDB.find(c => c.slug === slug) || null;
}

export function getCountriesByContinent(continent) {
  return countryDB.filter(c => c.continent === continent);
}

/* ==========================================
   GENERIC SORT (nested fields safe)
========================================== */

function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

export function getCountriesSortedBy(fieldPath, order = 'desc') {
  return [...countryDB].sort((a, b) => {
    const aVal = getValueByPath(a, fieldPath) ?? 0;
    const bVal = getValueByPath(b, fieldPath) ?? 0;

    return order === 'asc'
      ? aVal - bVal
      : bVal - aVal;
  });
}

/* ==========================================
   PROFILE RANKING
========================================== */

export function getTopCountriesByProfile(profile = 'solo', limit = 30) {
  return [...countryDB]
    .map(country => ({
      ...country,
      score: calculateCountryScore(country, profile)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
/* ==========================================
   COUNTRY ↔ CITY RELATION
========================================== */

export function getCitiesForCountry(countrySlug) {
  const cities = getAllCities();

  return cities.filter(city => {

    // 1️ Normal case (recommended)
    if (city.countrySlug) {
      return city.countrySlug === countrySlug;
    }

    // 2️ Fallback safe normalization
    if (city.country) {
      return city.country.toLowerCase().replace(/\s+/g, '-') === countrySlug;
    }

    return false;
  });
}

/* ==========================================
   AGGREGATED METRICS (DYNAMIC INTELLIGENCE)
========================================== */

export function getCountryAggregatedMetrics(countrySlug) {

  const country = getCountryBySlug(countrySlug);
  const cities = getCitiesForCountry(countrySlug);

  // 🔥 NO CITY DATA → FALLBACK MACRO
  if (!cities.length) {

    return {
      avgMonthlyCost: country?.macro?.costOfLivingIndex ?? 'N/A',
      avgSafetyScore: country?.macro?.safetyIndex ?? 'N/A',
      avgInternetSpeed: country?.nomad?.avgInternetSpeed ?? 'N/A',
      cityCount: 0,
      isFallback: true
    };
  }

  // 🔥 REAL AGGREGATION
  let totalCost = 0;
  let totalSafety = 0;
  let totalInternet = 0;

  cities.forEach(city => {

    const rent = city.costs?.accommodation?.center ?? 0;
    const food = city.costs?.food?.standard ?? 0;

    const monthly = rent + (food * 30);

    totalCost += monthly;
    totalSafety += city.digitalNomad?.safetyScore ?? 0;
    totalInternet += city.digitalNomad?.wifiSpeed ?? 0;
  });

  return {
    avgMonthlyCost: Math.round(totalCost / cities.length),
    avgSafetyScore: Math.round(totalSafety / cities.length),
    avgInternetSpeed: Math.round(totalInternet / cities.length),
    cityCount: cities.length,
    isFallback: false
  };
=======
import { countryDB } from './countryDB.js';
import { calculateCountryScore } from '../logic/countryRanking.js';
import { getAllCities } from './cityService.js';

/* ==========================================
   BASIC GETTERS
========================================== */

export function getAllCountries() {
  return [...countryDB];
}

export function getCountryBySlug(slug) {
  return countryDB.find(c => c.slug === slug) || null;
}

export function getCountriesByContinent(continent) {
  return countryDB.filter(c => c.continent === continent);
}

/* ==========================================
   GENERIC SORT (nested fields safe)
========================================== */

function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

export function getCountriesSortedBy(fieldPath, order = 'desc') {
  return [...countryDB].sort((a, b) => {
    const aVal = getValueByPath(a, fieldPath) ?? 0;
    const bVal = getValueByPath(b, fieldPath) ?? 0;

    return order === 'asc'
      ? aVal - bVal
      : bVal - aVal;
  });
}

/* ==========================================
   PROFILE RANKING
========================================== */

export function getTopCountriesByProfile(profile = 'solo', limit = 30) {
  return [...countryDB]
    .map(country => ({
      ...country,
      score: calculateCountryScore(country, profile)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
/* ==========================================
   COUNTRY ↔ CITY RELATION
========================================== */

export function getCitiesForCountry(countrySlug) {
  const cities = getAllCities();

  return cities.filter(city => {

    // 1️ Normal case (recommended)
    if (city.countrySlug) {
      return city.countrySlug === countrySlug;
    }

    // 2️ Fallback safe normalization
    if (city.country) {
      return city.country.toLowerCase().replace(/\s+/g, '-') === countrySlug;
    }

    return false;
  });
}

/* ==========================================
   AGGREGATED METRICS (DYNAMIC INTELLIGENCE)
========================================== */

export function getCountryAggregatedMetrics(countrySlug) {

  const country = getCountryBySlug(countrySlug);
  const cities = getCitiesForCountry(countrySlug);

  // 🔥 NO CITY DATA → FALLBACK MACRO
  if (!cities.length) {

    return {
      avgMonthlyCost: country?.macro?.costOfLivingIndex ?? 'N/A',
      avgSafetyScore: country?.macro?.safetyIndex ?? 'N/A',
      avgInternetSpeed: country?.nomad?.avgInternetSpeed ?? 'N/A',
      cityCount: 0,
      isFallback: true
    };
  }

  // 🔥 REAL AGGREGATION
  let totalCost = 0;
  let totalSafety = 0;
  let totalInternet = 0;

  cities.forEach(city => {

    const rent = city.costs?.accommodation?.center ?? 0;
    const food = city.costs?.food?.standard ?? 0;

    const monthly = rent + (food * 30);

    totalCost += monthly;
    totalSafety += city.digitalNomad?.safetyScore ?? 0;
    totalInternet += city.digitalNomad?.wifiSpeed ?? 0;
  });

  return {
    avgMonthlyCost: Math.round(totalCost / cities.length),
    avgSafetyScore: Math.round(totalSafety / cities.length),
    avgInternetSpeed: Math.round(totalInternet / cities.length),
    cityCount: cities.length,
    isFallback: false
  };
>>>>>>> f5684a6278b64a9f195794048f99a666f88c917b
}