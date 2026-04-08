function safe(value, fallback = '') {
  return value ?? fallback;
}

export function getBestCitiesIntro(countryName) {
  return `
${countryName} offers a wide range of cities with different lifestyles, budgets, and living conditions.
This page compares the best cities to live in ${countryName}, whether you are a solo traveler, a family, or a digital nomad.
  `.trim();
}

export function getBestCitiesMethodology(countryName) {
  return `
Cities are ranked based on cost of living, safety, internet quality, and overall quality of life.
These factors help identify the best places to live in ${countryName} for different lifestyles.
  `.trim();
}

export function getBestCitiesLifestyleText(countryName, profile) {
  const map = {
    solo: `These cities in ${countryName} are well suited for solo living, offering safety, affordability, and an active social environment.`,
    family: `Families in ${countryName} often prefer cities with good infrastructure, safety, and access to essential services.`,
    nomad: `Digital nomads in ${countryName} tend to choose cities with reliable internet, coworking spaces, and flexible lifestyles.`
  };

  return map[profile] ?? '';
}

export function getBestCitiesFAQ(countryName) {
  return [
    {
      question: `What are the best cities to live in ${countryName}?`,
      answer: `The best cities to live in ${countryName} depend on your lifestyle, budget, and personal preferences.`
    },
    {
      question: `Is ${countryName} expensive to live in?`,
      answer: `Living costs in ${countryName} vary significantly by city and lifestyle choices.`
    },
    {
      question: `Which city in ${countryName} is best for families?`,
      answer: `Family-friendly cities in ${countryName} typically offer safety, infrastructure, and access to services.`
    }
  ];
}