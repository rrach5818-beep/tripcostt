export function buildExecutiveSummary(city) {
  return {
    title: 'Executive Summary',
    content: `
      ${city.name} is best suited for...
    `
  };
}