/**
 * City Service - Data access layer
 * All city data access must go through this service
 */

import { cityDB } from './cityDB.js';

/**
 * Get all cities
 * @returns {Array} - All city objects
 */
export function getAllCities() {
  return [...cityDB];
}

/**
 * Get city by slug
 * @param {string} slug - City slug (e.g., 'new-york')
 * @returns {Object|null} - City object or null if not found
 */
export function getCityBySlug(slug) {
  return cityDB.find(city => city.slug === slug) || null;
}

/**
 * Get city by ID
 * @param {string} id - City ID
 * @returns {Object|null} - City object or null if not found
 */
export function getCityById(id) {
  return cityDB.find(city => city.id === id) || null;
}

/**
 * Get cities by continent
 * @param {string} continent - Continent name
 * @returns {Array} - Array of cities in that continent
 */
export function getCitiesByContinent(continent) {
  return cityDB.filter(city => city.continent === continent);
}

/**
 * Get cities by tag
 * @param {string} tag - Tag to filter by
 * @returns {Array} - Array of cities with that tag
 */
export function getCitiesByTag(tag) {
  return cityDB.filter(city => city.tags.includes(tag));
}

/**
 * Get all unique continents
 * @returns {Array} - Array of continent names
 */
export function getContinents() {
  return [...new Set(cityDB.map(city => city.continent))];
}

/**
 * Get all unique tags
 * @returns {Array} - Array of all unique tags
 */
export function getAllTags() {
  const tags = cityDB.flatMap(city => city.tags);
  return [...new Set(tags)].sort();
}

/**
 * Search cities by name or country
 * @param {string} query - Search query
 * @returns {Array} - Matching cities
 */
export function searchCities(query) {
  const lowerQuery = query.toLowerCase();
  return cityDB.filter(city => 
    city.name.toLowerCase().includes(lowerQuery) ||
    city.country.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get cities sorted by a specific field
 * @param {string} field - Field path (e.g., 'digitalNomad.overallScore')
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} - Sorted cities
 */
export function getCitiesSortedBy(field, order = 'desc') {
  const getValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  return [...cityDB].sort((a, b) => {
    const aVal = getValue(a, field);
    const bVal = getValue(b, field);
    
    if (order === 'asc') {
      return aVal - bVal;
    }
    return bVal - aVal;
  });
}

/**
 * Get top N cities by digital nomad score
 * @param {number} n - Number of cities to return
 * @returns {Array} - Top N cities
 */
export function getTopNomadCities(n = 10) {
  return getCitiesSortedBy('digitalNomad.overallScore', 'desc').slice(0, n);
}

/**
 * Get cities within a budget range (monthly mid-range)
 * @param {number} minBudget - Minimum monthly budget
 * @param {number} maxBudget - Maximum monthly budget
 * @returns {Array} - Cities within budget
 */
export function getCitiesByBudget(minBudget, maxBudget) {
  return cityDB.filter(city => {
    const monthlyMid = calculateMonthlyBudget(city, 'mid');
    return monthlyMid >= minBudget && monthlyMid <= maxBudget;
  });
}

/**
 * Calculate monthly budget for a city
 * @param {Object} city - City object
 * @param {string} lifestyle - 'budget', 'mid', or 'luxury'
 * @returns {number} - Monthly budget estimate
 */
export function calculateMonthlyBudget(city, lifestyle = 'mid') {
  const { costs } = city;
  
  const accommodation = costs.accommodation[lifestyle] || costs.accommodation.mid;
  const food = costs.food[lifestyle] || costs.food.mid;
  const entertainment = costs.entertainment[lifestyle] || costs.entertainment.mid;
  const transport = costs.transport.publicMonthly;
  const coworking = costs.coworking.monthly;

  return (accommodation * 30) + (food * 30) + entertainment + transport + coworking;
}

/**
 * Get city count
 * @returns {number} - Total number of cities
 */
export function getCityCount() {
  return cityDB.length;
}

/**
 * Get featured cities (top scored in different categories)
 * @returns {Object} - Object with categorized cities
 */
export function getFeaturedCities() {
  return {
    mostAffordable: getCitiesSortedBy('costs.accommodation.mid', 'asc').slice(0, 3),
    bestForNomads: getCitiesSortedBy('digitalNomad.overallScore', 'desc').slice(0, 3),
    safest: getCitiesSortedBy('digitalNomad.safetyScore', 'desc').slice(0, 3),
    bestInternet: getCitiesSortedBy('digitalNomad.internetSpeed', 'desc').slice(0, 3)
  };
}

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
  getCitiesByBudget,
  calculateMonthlyBudget,
  getCityCount,
  getFeaturedCities
};