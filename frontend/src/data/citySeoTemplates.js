function safe(value, fallback = '') {
  return value !== undefined && value !== null && value !== ''
    ? value
    : fallback;
}

export function getCityMetaTitle(city) {
  const name = safe(city.name, 'City');
  const country = safe(city.country, '');

  return country
    ? `Cost of Living in ${name}, ${country} – Prices & Budget`
    : `Cost of Living in ${name} – Prices & Budget`;
}

export function getCityMetaDescription(city) {
  const name = safe(city.name, 'this city');

  return `Detailed cost of living in ${name}. Housing, food, transport, safety, and digital nomad lifestyle to help you plan your budget.`;
}