export const cityDB = [
  {
    id: "new-york",
    slug: "new-york",
    name: "New York",
    country: "United States",
    countryCode: "US",
    continent: "North America",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
    description: "The city that never sleeps offers world-class culture, dining, and endless opportunities.",
    costs: {
      accommodation: { center: 200, suburb: 140 },
      food: { budget: 25, standard: 50, premium: 120 },
      transport: 127,
      coworking: 450
    },
    digitalNomad: {
      overallScore: 72,
      wifiSpeed: 150,
      coworkingCost: 450,
      safetyScore: 75
    },
    tags: ["startup-hub", "finance", "arts"]
  },
  {
    id: "tokyo",
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    countryCode: "JP",
    continent: "Asia",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    description: "A fascinating blend of ultra-modern technology and ancient traditions.",
    costs: {
      accommodation: { center: 140, suburb: 90 },
      food: { budget: 15, standard: 35, premium: 100 },
      transport: 100,
      coworking: 300
    },
    digitalNomad: {
      overallScore: 78,
      wifiSpeed: 180,
      coworkingCost: 300,
      safetyScore: 95
    },
    tags: ["tech-hub", "safe", "food"]
  },
  {
    id: "lisbon",
    slug: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    countryCode: "PT",
    continent: "Europe",
    currency: "EUR",
    currencySymbol: "€",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800",
    description: "Europe's digital nomad capital with perfect weather and affordable Mediterranean lifestyle.",
    costs: {
      accommodation: { center: 90, suburb: 60 },
      food: { budget: 12, standard: 25, premium: 70 },
      transport: 40,
      coworking: 200
    },
    digitalNomad: {
      overallScore: 88,
      wifiSpeed: 120,
      coworkingCost: 200,
      safetyScore: 85
    },
    tags: ["nomad-friendly", "affordable", "beach"]
  },
  {
    id: "bali",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    countryCode: "ID",
    continent: "Asia",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    description: "Tropical paradise with a thriving digital nomad scene and incredibly low cost of living.",
    costs: {
      accommodation: { center: 50, suburb: 30 },
      food: { budget: 5, standard: 15, premium: 50 },
      transport: 50,
      coworking: 150
    },
    digitalNomad: {
      overallScore: 85,
      wifiSpeed: 50,
      coworkingCost: 150,
      safetyScore: 75
    },
    tags: ["tropical", "affordable", "nomad-hub"]
  },
  {
    id: "berlin",
    slug: "berlin",
    name: "Berlin",
    country: "Germany",
    countryCode: "DE",
    continent: "Europe",
    currency: "EUR",
    currencySymbol: "€",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800",
    description: "Creative capital of Europe with a thriving tech scene and legendary nightlife.",
    costs: {
      accommodation: { center: 110, suburb: 70 },
      food: { budget: 12, standard: 30, premium: 80 },
      transport: 86,
      coworking: 250
    },
    digitalNomad: {
      overallScore: 82,
      wifiSpeed: 100,
      coworkingCost: 250,
      safetyScore: 80
    },
    tags: ["tech-hub", "creative", "nightlife"]
  },
  {
    id: "bangkok",
    slug: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    countryCode: "TH",
    continent: "Asia",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
    description: "Vibrant metropolis offering incredible value, amazing street food, and nomad infrastructure.",
    costs: {
      accommodation: { center: 60, suburb: 35 },
      food: { budget: 5, standard: 15, premium: 45 },
      transport: 45,
      coworking: 180
    },
    digitalNomad: {
      overallScore: 84,
      wifiSpeed: 80,
      coworkingCost: 180,
      safetyScore: 70
    },
    tags: ["affordable", "food", "culture"]
  },
  {
    id: "barcelona",
    slug: "barcelona",
    name: "Barcelona",
    country: "Spain",
    countryCode: "ES",
    continent: "Europe",
    currency: "EUR",
    currencySymbol: "€",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800",
    description: "Mediterranean gem combining beach life with urban culture and a vibrant tech scene.",
    costs: {
      accommodation: { center: 130, suburb: 85 },
      food: { budget: 15, standard: 35, premium: 90 },
      transport: 55,
      coworking: 280
    },
    digitalNomad: {
      overallScore: 80,
      wifiSpeed: 100,
      coworkingCost: 280,
      safetyScore: 75
    },
    tags: ["beach", "culture", "food"]
  },
  {
    id: "mexico-city",
    slug: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    countryCode: "MX",
    continent: "North America",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=800",
    description: "Massive metropolis with incredible food, rich culture, and affordable living.",
    costs: {
      accommodation: { center: 70, suburb: 45 },
      food: { budget: 8, standard: 20, premium: 60 },
      transport: 20,
      coworking: 180
    },
    digitalNomad: {
      overallScore: 83,
      wifiSpeed: 70,
      coworkingCost: 180,
      safetyScore: 55
    },
    tags: ["affordable", "food", "culture"]
  },
  {
    id: "chiang-mai",
    slug: "chiang-mai",
    name: "Chiang Mai",
    country: "Thailand",
    countryCode: "TH",
    continent: "Asia",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1512553219401-bc84ef7e3268?w=800",
    description: "The original digital nomad hub with unbeatable value and strong community.",
    costs: {
      accommodation: { center: 40, suburb: 25 },
      food: { budget: 4, standard: 10, premium: 35 },
      transport: 30,
      coworking: 100
    },
    digitalNomad: {
      overallScore: 90,
      wifiSpeed: 60,
      coworkingCost: 100,
      safetyScore: 85
    },
    tags: ["nomad-hub", "affordable", "temples"]
  },
  {
    id: "dubai",
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    continent: "Asia",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    description: "Ultra-modern city with world-class infrastructure and tax-free income.",
    costs: {
      accommodation: { center: 170, suburb: 100 },
      food: { budget: 15, standard: 40, premium: 120 },
      transport: 80,
      coworking: 400
    },
    digitalNomad: {
      overallScore: 70,
      wifiSpeed: 200,
      coworkingCost: 400,
      safetyScore: 95
    },
    tags: ["luxury", "tax-free", "modern"]
  },
  {
    id: "london",
    slug: "london",
    name: "London",
    country: "United Kingdom",
    countryCode: "GB",
    continent: "Europe",
    currency: "GBP",
    currencySymbol: "£",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    description: "Global business capital with unmatched cultural offerings and connectivity.",
    costs: {
      accommodation: { center: 190, suburb: 120 },
      food: { budget: 20, standard: 45, premium: 120 },
      transport: 170,
      coworking: 450
    },
    digitalNomad: {
      overallScore: 74,
      wifiSpeed: 120,
      coworkingCost: 450,
      safetyScore: 75
    },
    tags: ["business-hub", "culture", "diverse"]
  },
  {
    id: "buenos-aires",
    slug: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    countryCode: "AR",
    continent: "South America",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800",
    description: "European flair in South America with incredible value for USD earners.",
    costs: {
      accommodation: { center: 55, suburb: 35 },
      food: { budget: 6, standard: 15, premium: 45 },
      transport: 15,
      coworking: 120
    },
    digitalNomad: {
      overallScore: 81,
      wifiSpeed: 60,
      coworkingCost: 120,
      safetyScore: 55
    },
    tags: ["affordable", "culture", "nightlife"]
  },
  {
    id: "singapore",
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    continent: "Asia",
    currency: "SGD",
    currencySymbol: "S$",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
    description: "Ultra-efficient city-state with world-class infrastructure and Asia's startup hub.",
    costs: {
      accommodation: { center: 170, suburb: 110 },
      food: { budget: 8, standard: 25, premium: 80 },
      transport: 80,
      coworking: 400
    },
    digitalNomad: {
      overallScore: 76,
      wifiSpeed: 250,
      coworkingCost: 400,
      safetyScore: 97
    },
    tags: ["efficient", "safe", "startup-hub"]
  },
  {
    id: "ho-chi-minh",
    slug: "ho-chi-minh",
    name: "Ho Chi Minh City",
    country: "Vietnam",
    countryCode: "VN",
    continent: "Asia",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
    description: "Fast-growing city with incredible energy, affordable living, and expanding nomad scene.",
    costs: {
      accommodation: { center: 45, suburb: 28 },
      food: { budget: 4, standard: 10, premium: 35 },
      transport: 20,
      coworking: 120
    },
    digitalNomad: {
      overallScore: 82,
      wifiSpeed: 55,
      coworkingCost: 120,
      safetyScore: 75
    },
    tags: ["affordable", "food", "energetic"]
  },
  {
    id: "amsterdam",
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    countryCode: "NL",
    continent: "Europe",
    currency: "EUR",
    currencySymbol: "€",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800",
    description: "Liberal haven with excellent English, bike-friendly streets, and thriving tech scene.",
    costs: {
      accommodation: { center: 170, suburb: 110 },
      food: { budget: 15, standard: 35, premium: 90 },
      transport: 100,
      coworking: 350
    },
    digitalNomad: {
      overallScore: 79,
      wifiSpeed: 130,
      coworkingCost: 350,
      safetyScore: 80
    },
    tags: ["bike-friendly", "liberal", "english-speaking"]
  },
  {
    id: "medellin",
    slug: "medellin",
    name: "Medellín",
    country: "Colombia",
    countryCode: "CO",
    continent: "South America",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1599413987323-b2b8e2b47ab5?w=800",
    description: "City of eternal spring with perfect weather, affordable living, and booming nomad scene.",
    costs: {
      accommodation: { center: 60, suburb: 40 },
      food: { budget: 6, standard: 15, premium: 45 },
      transport: 30,
      coworking: 150
    },
    digitalNomad: {
      overallScore: 84,
      wifiSpeed: 50,
      coworkingCost: 150,
      safetyScore: 60
    },
    tags: ["eternal-spring", "affordable", "nomad-hub"]
  },
  {
    id: "prague",
    slug: "prague",
    name: "Prague",
    country: "Czech Republic",
    countryCode: "CZ",
    continent: "Europe",
    currency: "EUR",
    currencySymbol: "€",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800",
    description: "Fairytale European capital with affordable living and rich history.",
    costs: {
      accommodation: { center: 90, suburb: 55 },
      food: { budget: 10, standard: 25, premium: 65 },
      transport: 25,
      coworking: 200
    },
    digitalNomad: {
      overallScore: 77,
      wifiSpeed: 90,
      coworkingCost: 200,
      safetyScore: 85
    },
    tags: ["historic", "affordable", "beer"]
  },
  {
    id: "seoul",
    slug: "seoul",
    name: "Seoul",
    country: "South Korea",
    countryCode: "KR",
    continent: "Asia",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800",
    description: "High-tech metropolis with blazing fast internet and incredible food culture.",
    costs: {
      accommodation: { center: 100, suburb: 65 },
      food: { budget: 8, standard: 20, premium: 60 },
      transport: 50,
      coworking: 250
    },
    digitalNomad: {
      overallScore: 75,
      wifiSpeed: 250,
      coworkingCost: 250,
      safetyScore: 90
    },
    tags: ["tech-hub", "fast-internet", "food"]
  },
  {
    id: "cape-town",
    slug: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    countryCode: "ZA",
    continent: "Africa",
    currency: "USD",
    currencySymbol: "$",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800",
    description: "Stunning natural beauty, affordable for USD earners, with a growing tech community.",
    costs: {
      accommodation: { center: 70, suburb: 45 },
      food: { budget: 8, standard: 20, premium: 55 },
      transport: 45,
      coworking: 180
    },
    digitalNomad: {
      overallScore: 73,
      wifiSpeed: 45,
      coworkingCost: 180,
      safetyScore: 45
    },
    tags: ["nature", "affordable", "adventure"]
  }
];

export default cityDB;
