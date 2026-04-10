// -------------------------
// Helpers internes
// -------------------------

function safe(value, fallback = "") {
  return value !== undefined && value !== null && value !== ""
    ? value
    : fallback;
}

function getLocationString(city) {
  const country = safe(city.country, "the country");
  const continent = safe(city.continent, null);

  return continent ? `${country}, ${continent}` : country;
}

// -------------------------
// HERO / INTRO
// -------------------------

export function getCityIntro(city) {
  const name = safe(city.name, "This city");
  const location = getLocationString(city);

  return `
${name} is a popular destination located in ${location}.
It attracts digital nomads, expatriates, and travelers who are looking to balance lifestyle, comfort, and cost of living.

This page provides a detailed overview of the cost of living in ${name}, covering housing, food, transportation, and daily expenses to help you decide whether it fits your budget and lifestyle.
  `.trim();
}

// -------------------------
// SNAPSHOT / AT A GLANCE
// -------------------------

export function getCitySnapshotText(city) {
  const name = safe(city.name, "this city");

  return `
These key statistics offer a quick overview of the cost of living, safety, and internet quality in ${name}.
  `.trim();
}

// -------------------------
// COST OF LIVING SECTIONS
// -------------------------

export function getCostSectionText(city, category) {
  const name = safe(city.name, "this city");
  const country = safe(city.country, "the country");

  const templates = {
    accommodation: `
Housing costs in ${name} can vary significantly depending on location.
Living in central areas is generally more expensive, while neighborhoods outside the city center tend to offer more affordable rental options.
    `,

    food: `
Food expenses in ${name} range from affordable local meals to higher-end dining experiences.
Overall, grocery and dining costs remain reasonable compared to other major cities in ${country}.
    `,

    transport: `
Public transportation in ${name} is widely used and generally efficient.
Monthly transport costs depend on commuting distance and daily travel habits.
    `,

    utilities: `
Utilities and internet services in ${name} are generally reliable.
Internet quality is suitable for remote work, video calls, and everyday online activities.
    `,

    leisure: `
Leisure and entertainment costs in ${name} vary depending on lifestyle.
The city offers a wide range of cultural activities, dining options, and entertainment for different budgets.
    `
  };

  return safe(templates[category], "").trim();
}

// -------------------------
// LIFESTYLE & QUALITY OF LIFE
// -------------------------

export function getLifestyleText(city) {
  const name = safe(city.name, "this city");

  return `
Living in ${name} offers a mix of lifestyle, culture, and modern infrastructure.
Residents benefit from a dynamic urban environment, diverse food options, and convenient transportation.

The overall quality of life in ${name} makes it an attractive place to live for both locals and foreigners, depending on personal preferences and budget.
  `.trim();
}

// -------------------------
// DIGITAL NOMADS & EXPATS
// -------------------------

export function getNomadText(city) {
  const name = safe(city.name, "this city");

  return `
${name} is considered a viable option for digital nomads and expatriates.
The city provides reliable internet infrastructure, access to essential services, and a generally safe living environment.

While the cost of living may be higher than in some destinations, many remote workers find the stability and quality of life worth the investment.
  `.trim();
}

// -------------------------
// SIMILAR CITIES (TEXT INTRO)
// -------------------------

export function SimilarCities(city) {
  const name = safe(city.name, "this city");

  return `
If you are considering alternatives to ${name}, these cities share similar characteristics in terms of lifestyle, cost of living, or regional location.
Exploring comparable destinations can help you make a more informed decision.
  `.trim();
}

// -------------------------
// FAQ
// -------------------------

export function getFAQ(city) {
  const name = safe(city.name, "this city");

  return [
    {
      question: `Is ${name} expensive?`,
      answer: `${name} is generally considered expensive compared to many cities, but actual costs depend on lifestyle choices and housing location.`
    },
    {
      question: `How much do you need per month to live in ${name}?`,
      answer: `Monthly expenses in ${name} vary based on accommodation, lifestyle, and personal spending habits. A moderate to high budget is typically required.`
    },
    {
      question: `Is ${name} safe for foreigners?`,
      answer: `${name} is generally regarded as a safe city, including for foreigners and long-term residents.`
    },
    {
      question: `Is ${name} good for digital nomads?`,
      answer: `${name} offers good infrastructure and internet connectivity for digital nomads, though cost considerations are important for long-term stays.`
    }
  ];
}