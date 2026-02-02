import { cityDB } from './cityDB.js';

export function getAllCities() {
  return [...cityDB];
}

export function getCityBySlug(slug) {
  return cityDB.find(city => city.slug === slug) || null;
}

export function getCityById(id) {
  return cityDB.find(city => city.id === id) || null;
}

export function getCitiesByContinent(continent) {
  return cityDB.filter(city => city.continent === continent);
}

export function getCitiesByTag(tag) {
  return cityDB.filter(city => city.tags.includes(tag));
}

export function getContinents() {
  return [...new Set(cityDB.map(city => city.continent))];
}

export function getAllTags() {
  const tags = cityDB.flatMap(city => city.tags);
  return [...new Set(tags)].sort();
}

export function searchCities(query) {
  const lowerQuery = query.toLowerCase();
  return cityDB.filter(city => 
    city.name.toLowerCase().includes(lowerQuery) ||
    city.country.toLowerCase().includes(lowerQuery)
  );
}

export function getCitiesSortedBy(field, order = 'desc') {
  const getValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  return [...cityDB].sort((a, b) => {
    const aVal = getValue(a, field);
    const bVal = getValue(b, field);
    return order === 'asc' ? aVal - bVal : bVal - aVal;
  });
}

export function getTopNomadCities(n = 10) {
  return getCitiesSortedBy('digitalNomad.overallScore', 'desc').slice(0, n);
}

export function getCityCount() {
  return cityDB.length;
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
  getCityCount
};
