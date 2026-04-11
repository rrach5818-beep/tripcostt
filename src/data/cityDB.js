export const cityDB = [

{
  id: "new-york",
  lat: 40.7128,
  lng: -74.006,
  slug: "new-york",
  name: "New York",
  country: "United States",
  countryCode: "US",
  continent: "North America",
  currency: "USD",
  currencySymbol: "$",
  image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600",
  description: "The city that never sleeps offers world-class culture and business opportunities.",
  costs: {
    accommodation: { center: 200, suburb: 140 },
    food: { budget: 25, standard: 50, premium: 120 },
    transport: 127,
    coworking: 450
  },
  visa: {
    type: "No Digital Nomad Visa",
    remoteFriendly: false,
    stayDurationMonths: 6,
    processingTimeDays: 90,
    minIncomeRequirement: 0
  },
  tax: {
    personalIncomeTaxTopRate: 37,
    corporateTax: 21,
    capitalGainsTax: 20
  },
  infrastructure: {
    publicTransportQuality: 90,
    healthcareQuality: 88,
    englishProficiency: 100,
    airportConnectivity: 98
  },
  safety: { safetyIndex: 75, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 3.5,
    currencyStability: "High",
    rentVolatilityIndex: 8.5
  },
  digitalNomad: {
    overallScore: 78,
    wifiSpeed: 200,
    coworkingCost: 450,
    safetyScore: 75
  },
  tags: ["finance", "startup-hub", "arts"],
  lastUpdated: "2026-03"
},

{
  id: "tokyo",
  lat: 35.6762,
  lng: 139.6503,
  slug: "tokyo",
  name: "Tokyo",
  country: "Japan",
  countryCode: "JP",
  continent: "Asia",
  currency: "JPY",
  currencySymbol: "¥",
  image: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1600",
  description: "Ultra-modern city blending tradition and innovation.",
  costs: {
    accommodation: { center: 140, suburb: 90 },
    food: { budget: 15, standard: 35, premium: 100 },
    transport: 100,
    coworking: 300
  },
  visa: {
    type: "Japan Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 6,
    processingTimeDays: 45,
    minIncomeRequirement: 7000
  },
  tax: {
    personalIncomeTaxTopRate: 45,
    corporateTax: 23,
    capitalGainsTax: 20
  },
  infrastructure: {
    publicTransportQuality: 98,
    healthcareQuality: 95,
    englishProficiency: 60,
    airportConnectivity: 95
  },
  safety: { safetyIndex: 95, crimeLevel: "Low" },
  macro: {
    inflationRate: 2.8,
    currencyStability: "High",
    rentVolatilityIndex: 4.5
  },
  digitalNomad: {
    overallScore: 88,
    wifiSpeed: 250,
    coworkingCost: 300,
    safetyScore: 95
  },
  tags: ["tech-hub", "safe", "food"],
  lastUpdated: "2026-03"
},

{
  id: "lisbon",
  lat: 38.7169,
  lng: -9.1399,
  slug: "lisbon",
  name: "Lisbon",
  country: "Portugal",
  countryCode: "PT",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800",
  description: "Europe's digital nomad capital with Mediterranean lifestyle.",
  costs: {
    accommodation: { center: 90, suburb: 60 },
    food: { budget: 12, standard: 25, premium: 70 },
    transport: 40,
    coworking: 200
  },
  visa: {
    type: "Portugal D8 Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 60,
    minIncomeRequirement: 3040
  },
  tax: {
    personalIncomeTaxTopRate: 48,
    corporateTax: 21,
    capitalGainsTax: 28
  },
  infrastructure: {
    publicTransportQuality: 85,
    healthcareQuality: 88,
    englishProficiency: 75,
    airportConnectivity: 90
  },
  safety: { safetyIndex: 85, crimeLevel: "Low" },
  macro: {
    inflationRate: 2.5,
    currencyStability: "High",
    rentVolatilityIndex: 7.2
  },
  digitalNomad: {
    overallScore: 90,
    wifiSpeed: 120,
    coworkingCost: 200,
    safetyScore: 85
  },
  tags: ["nomad-friendly", "beach", "affordable"],
  lastUpdated: "2026-03"
},

{
  id: "bali",
  lat: -8.4095,
  lng: 115.1889,
  slug: "bali",
  name: "Bali",
  country: "Indonesia",
  countryCode: "ID",
  continent: "Asia",
  currency: "IDR",
  currencySymbol: "Rp",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
  description: "Tropical paradise with strong nomad community.",
  costs: {
    accommodation: { center: 50, suburb: 30 },
    food: { budget: 5, standard: 15, premium: 50 },
    transport: 50,
    coworking: 150
  },
  visa: {
    type: "Indonesia Remote Worker Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 2000
  },
  tax: {
    personalIncomeTaxTopRate: 35,
    corporateTax: 22,
    capitalGainsTax: 10
  },
  infrastructure: {
    publicTransportQuality: 55,
    healthcareQuality: 65,
    englishProficiency: 60,
    airportConnectivity: 70
  },
  safety: { safetyIndex: 75, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 3.2,
    currencyStability: "Medium",
    rentVolatilityIndex: 6.8
  },
  digitalNomad: {
    overallScore: 85,
    wifiSpeed: 80,
    coworkingCost: 150,
    safetyScore: 75
  },
  tags: ["tropical", "nomad-hub", "affordable"],
  lastUpdated: "2026-03"
},

{
  id: "berlin",
  lat: 52.52,
  lng: 13.405,
  slug: "berlin",
  name: "Berlin",
  country: "Germany",
  countryCode: "DE",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600",
  description: "Creative European capital with thriving startup scene.",
  costs: {
    accommodation: { center: 110, suburb: 70 },
    food: { budget: 12, standard: 30, premium: 80 },
    transport: 86,
    coworking: 250
  },
  visa: {
    type: "Freelance Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 90,
    minIncomeRequirement: 2500
  },
  tax: {
    personalIncomeTaxTopRate: 45,
    corporateTax: 30,
    capitalGainsTax: 25
  },
  infrastructure: {
    publicTransportQuality: 92,
    healthcareQuality: 92,
    englishProficiency: 80,
    airportConnectivity: 88
  },
  safety: { safetyIndex: 80, crimeLevel: "Low" },
  macro: {
    inflationRate: 3.1,
    currencyStability: "High",
    rentVolatilityIndex: 7.5
  },
  digitalNomad: {
    overallScore: 84,
    wifiSpeed: 150,
    coworkingCost: 250,
    safetyScore: 80
  },
  tags: ["tech-hub", "creative", "startup"],
  lastUpdated: "2026-03"
},

{
  id: "bangkok",
  lat: 13.7563,
  lng: 100.5018,
  slug: "bangkok",
  name: "Bangkok",
  country: "Thailand",
  countryCode: "TH",
  continent: "Asia",
  currency: "THB",
  currencySymbol: " ",
  image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1600",
  description: "Vibrant metropolis offering strong value for remote workers.",
  costs: {
    accommodation: { center: 60, suburb: 35 },
    food: { budget: 5, standard: 15, premium: 45 },
    transport: 45,
    coworking: 180
  },
  visa: {
    type: "Thailand DTV",
    remoteFriendly: true,
    stayDurationMonths: 60,
    processingTimeDays: 30,
    minIncomeRequirement: 1500
  },
  tax: {
    personalIncomeTaxTopRate: 35,
    corporateTax: 20,
    capitalGainsTax: 15
  },
  infrastructure: {
    publicTransportQuality: 85,
    healthcareQuality: 80,
    englishProficiency: 65,
    airportConnectivity: 92
  },
  safety: { safetyIndex: 70, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 2.1,
    currencyStability: "Medium",
    rentVolatilityIndex: 6
  },
  digitalNomad: {
    overallScore: 86,
    wifiSpeed: 120,
    coworkingCost: 180,
    safetyScore: 70
  },
  tags: ["affordable", "food", "culture"],
  lastUpdated: "2026-03"
},

{
  id: "barcelona",
  lat: 41.3851,
  lng: 2.1734,
  slug: "barcelona",
  name: "Barcelona",
  country: "Spain",
  countryCode: "ES",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=1600",
  description: "Mediterranean tech hub combining beach and business.",
  costs: {
    accommodation: { center: 130, suburb: 85 },
    food: { budget: 15, standard: 35, premium: 90 },
    transport: 55,
    coworking: 280
  },
  visa: {
    type: "Spain Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 45,
    minIncomeRequirement: 2520
  },
  tax: {
    personalIncomeTaxTopRate: 47,
    corporateTax: 25,
    capitalGainsTax: 23
  },
  infrastructure: {
    publicTransportQuality: 88,
    healthcareQuality: 90,
    englishProficiency: 75,
    airportConnectivity: 88
  },
  safety: { safetyIndex: 75, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 2.7,
    currencyStability: "High",
    rentVolatilityIndex: 7
  },
  digitalNomad: {
    overallScore: 83,
    wifiSpeed: 140,
    coworkingCost: 280,
    safetyScore: 75
  },
  tags: ["beach", "tech-hub", "culture"],
  lastUpdated: "2026-03"
},

{
  id: "mexico-city",
  lat: 19.4326,
  lng: -99.1332,
  slug: "mexico-city",
  name: "Mexico City",
  country: "Mexico",
  countryCode: "MX",
  continent: "North America",
  currency: "MXN",
  currencySymbol: "$",
  image: "https://images.unsplash.com/photo-1512813382947-0e4a6d6c6c66?w=1600",
  description: "Massive metropolis with rich culture and strong affordability.",
  costs: {
    accommodation: { center: 70, suburb: 45 },
    food: { budget: 8, standard: 20, premium: 60 },
    transport: 20,
    coworking: 180
  },
  visa: {
    type: "Temporary Resident Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 2600
  },
  tax: {
    personalIncomeTaxTopRate: 35,
    corporateTax: 30,
    capitalGainsTax: 10
  },
  infrastructure: {
    publicTransportQuality: 75,
    healthcareQuality: 75,
    englishProficiency: 60,
    airportConnectivity: 90
  },
  safety: { safetyIndex: 55, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 4.2,
    currencyStability: "Medium",
    rentVolatilityIndex: 6.5
  },
  digitalNomad: {
    overallScore: 80,
    wifiSpeed: 100,
    coworkingCost: 180,
    safetyScore: 55
  },
  tags: ["affordable", "food", "culture"],
  lastUpdated: "2026-03"
},

{
  id: "chiang-mai",
  lat: 18.7883,
  lng: 98.9853,
  slug: "chiang-mai",
  name: "Chiang Mai",
  country: "Thailand",
  countryCode: "TH",
  continent: "Asia",
  currency: "THB",
  currencySymbol: " ",
  image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1600",
  description: "Original digital nomad hub with unbeatable value.",
  costs: {
    accommodation: { center: 40, suburb: 25 },
    food: { budget: 4, standard: 10, premium: 35 },
    transport: 30,
    coworking: 100
  },
  visa: {
    type: "Thailand DTV",
    remoteFriendly: true,
    stayDurationMonths: 60,
    processingTimeDays: 30,
    minIncomeRequirement: 1500
  },
  tax: {
    personalIncomeTaxTopRate: 35,
    corporateTax: 20,
    capitalGainsTax: 15
  },
  infrastructure: {
    publicTransportQuality: 60,
    healthcareQuality: 75,
    englishProficiency: 60,
    airportConnectivity: 65
  },
  safety: { safetyIndex: 85, crimeLevel: "Low" },
  macro: {
    inflationRate: 2.1,
    currencyStability: "Medium",
    rentVolatilityIndex: 5.5
  },
  digitalNomad: {
    overallScore: 92,
    wifiSpeed: 90,
    coworkingCost: 100,
    safetyScore: 85
  },
  tags: ["nomad-hub", "affordable", "temples"],
  lastUpdated: "2026-03"
},

{
  id: "dubai",
  lat: 25.2048,
  lng: 55.2708,
  slug: "dubai",
  name: "Dubai",
  country: "United Arab Emirates",
  countryCode: "AE",
  continent: "Asia",
  currency: "AED",
  currencySymbol: " . ",
  image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600",
  description: "Tax-free income city with world-class infrastructure.",
  costs: {
    accommodation: { center: 170, suburb: 100 },
    food: { budget: 15, standard: 40, premium: 120 },
    transport: 80,
    coworking: 400
  },
  visa: {
    type: "UAE Virtual Working Program",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 3500
  },
  tax: {
    personalIncomeTaxTopRate: 0,
    corporateTax: 9,
    capitalGainsTax: 0
  },
  infrastructure: {
    publicTransportQuality: 90,
    healthcareQuality: 88,
    englishProficiency: 95,
    airportConnectivity: 99
  },
  safety: { safetyIndex: 95, crimeLevel: "Very Low" },
  macro: {
    inflationRate: 3.3,
    currencyStability: "High",
    rentVolatilityIndex: 8
  },
  digitalNomad: {
    overallScore: 82,
    wifiSpeed: 220,
    coworkingCost: 400,
    safetyScore: 95
  },
  tags: ["luxury", "tax-free", "modern"],
  lastUpdated: "2026-03"
},
{
  id: "london",
  lat: 51.5074,
  lng: -0.1278,
  slug: "london",
  name: "London",
  country: "United Kingdom",
  countryCode: "GB",
  continent: "Europe",
  currency: "GBP",
  currencySymbol: "£",
  image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1600",
  description: "Global business capital with unmatched connectivity.",
  costs: {
    accommodation: { center: 190, suburb: 120 },
    food: { budget: 20, standard: 45, premium: 120 },
    transport: 170,
    coworking: 450
  },
  visa: {
    type: "Skilled Worker / No Nomad Visa",
    remoteFriendly: false,
    stayDurationMonths: 6,
    processingTimeDays: 60,
    minIncomeRequirement: 0
  },
  tax: {
    personalIncomeTaxTopRate: 45,
    corporateTax: 25,
    capitalGainsTax: 20
  },
  infrastructure: {
    publicTransportQuality: 92,
    healthcareQuality: 88,
    englishProficiency: 100,
    airportConnectivity: 99
  },
  safety: { safetyIndex: 75, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 3.8,
    currencyStability: "High",
    rentVolatilityIndex: 8
  },
  digitalNomad: {
    overallScore: 76,
    wifiSpeed: 180,
    coworkingCost: 450,
    safetyScore: 75
  },
  tags: ["business-hub", "culture", "finance"],
  lastUpdated: "2026-03"
},

{
  id: "buenos-aires",
  lat: -34.6037,
  lng: -58.3816,
  slug: "buenos-aires",
  name: "Buenos Aires",
  country: "Argentina",
  countryCode: "AR",
  continent: "South America",
  currency: "ARS",
  currencySymbol: "$",
  image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1600",
  description: "European flair in South America with strong value for foreign earners.",
  costs: {
    accommodation: { center: 55, suburb: 35 },
    food: { budget: 6, standard: 15, premium: 45 },
    transport: 15,
    coworking: 120
  },
  visa: {
    type: "Argentina Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 2500
  },
  tax: {
    personalIncomeTaxTopRate: 35,
    corporateTax: 35,
    capitalGainsTax: 15
  },
  infrastructure: {
    publicTransportQuality: 80,
    healthcareQuality: 75,
    englishProficiency: 55,
    airportConnectivity: 85
  },
  safety: { safetyIndex: 55, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 120,
    currencyStability: "Low",
    rentVolatilityIndex: 9
  },
  digitalNomad: {
    overallScore: 78,
    wifiSpeed: 90,
    coworkingCost: 120,
    safetyScore: 55
  },
  tags: ["affordable", "culture", "nightlife"],
  lastUpdated: "2026-03"
},

{
  id: "singapore",
  lat: 1.3521,
  lng: 103.8198,
  slug: "singapore",
  name: "Singapore",
  country: "Singapore",
  countryCode: "SG",
  continent: "Asia",
  currency: "SGD",
  currencySymbol: "S$",
  image: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1600",
  description: "Ultra-efficient city-state with world-class infrastructure.",
  costs: {
    accommodation: { center: 170, suburb: 110 },
    food: { budget: 8, standard: 25, premium: 80 },
    transport: 80,
    coworking: 400
  },
  visa: {
    type: "EntrePass / Work Pass (No Nomad Visa)",
    remoteFriendly: false,
    stayDurationMonths: 6,
    processingTimeDays: 60,
    minIncomeRequirement: 0
  },
  tax: {
    personalIncomeTaxTopRate: 24,
    corporateTax: 17,
    capitalGainsTax: 0
  },
  infrastructure: {
    publicTransportQuality: 98,
    healthcareQuality: 95,
    englishProficiency: 100,
    airportConnectivity: 99
  },
  safety: { safetyIndex: 97, crimeLevel: "Very Low" },
  macro: {
    inflationRate: 3.1,
    currencyStability: "Very High",
    rentVolatilityIndex: 7
  },
  digitalNomad: {
    overallScore: 85,
    wifiSpeed: 300,
    coworkingCost: 400,
    safetyScore: 97
  },
  tags: ["efficient", "safe", "startup-hub"],
  lastUpdated: "2026-03"
},

{
  id: "amsterdam",
  lat: 52.3676,
  lng: 4.9041,
  slug: "amsterdam",
  name: "Amsterdam",
  country: "Netherlands",
  countryCode: "NL",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1600",
  description: "Liberal tech-friendly city with strong English proficiency.",
  costs: {
    accommodation: { center: 170, suburb: 110 },
    food: { budget: 15, standard: 35, premium: 90 },
    transport: 100,
    coworking: 350
  },
  visa: {
    type: "DAFT / Self-Employment Visa",
    remoteFriendly: true,
    stayDurationMonths: 24,
    processingTimeDays: 90,
    minIncomeRequirement: 1500
  },
  tax: {
    personalIncomeTaxTopRate: 49.5,
    corporateTax: 25.8,
    capitalGainsTax: 31
  },
  infrastructure: {
    publicTransportQuality: 95,
    healthcareQuality: 92,
    englishProficiency: 95,
    airportConnectivity: 95
  },
  safety: { safetyIndex: 80, crimeLevel: "Low" },
  macro: {
    inflationRate: 2.9,
    currencyStability: "High",
    rentVolatilityIndex: 8
  },
  digitalNomad: {
    overallScore: 82,
    wifiSpeed: 200,
    coworkingCost: 350,
    safetyScore: 80
  },
  tags: ["bike-friendly", "tech-hub", "english-speaking"],
  lastUpdated: "2026-03"
},

{
  id: "medellin",
  lat: 6.2476,
  lng: -75.5658,
  slug: "medellin",
  name: "Medell n",
  country: "Colombia",
  countryCode: "CO",
  continent: "South America",
  currency: "COP",
  currencySymbol: "$",
  image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=1600",
  description: "City of eternal spring with growing remote worker scene.",
  costs: {
    accommodation: { center: 60, suburb: 40 },
    food: { budget: 6, standard: 15, premium: 45 },
    transport: 30,
    coworking: 150
  },
  visa: {
    type: "Colombia Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 24,
    processingTimeDays: 30,
    minIncomeRequirement: 900
  },
  tax: {
    personalIncomeTaxTopRate: 39,
    corporateTax: 35,
    capitalGainsTax: 15
  },
  infrastructure: {
    publicTransportQuality: 75,
    healthcareQuality: 75,
    englishProficiency: 55,
    airportConnectivity: 80
  },
  safety: { safetyIndex: 60, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 9,
    currencyStability: "Medium",
    rentVolatilityIndex: 6
  },
  digitalNomad: {
    overallScore: 83,
    wifiSpeed: 100,
    coworkingCost: 150,
    safetyScore: 60
  },
  tags: ["eternal-spring", "affordable", "nomad-hub"],
  lastUpdated: "2026-03"
},

{
  id: "prague",
  lat: 50.0755,
  lng: 14.4378,
  slug: "prague",
  name: "Prague",
  country: "Czech Republic",
  countryCode: "CZ",
  continent: "Europe",
  currency: "CZK",
  currencySymbol: "K ",
  image: "https://images.unsplash.com/photo-1562624475-96c2b5e7be9b?w=1600",
  description: "Fairytale European capital with strong affordability.",
  costs: {
    accommodation: { center: 90, suburb: 55 },
    food: { budget: 10, standard: 25, premium: 65 },
    transport: 25,
    coworking: 200
  },
  visa: {
    type: "Czech Freelance Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 60,
    minIncomeRequirement: 2000
  },
  tax: {
    personalIncomeTaxTopRate: 23,
    corporateTax: 21,
    capitalGainsTax: 15
  },
  infrastructure: {
    publicTransportQuality: 90,
    healthcareQuality: 85,
    englishProficiency: 80,
    airportConnectivity: 85
  },
  safety: { safetyIndex: 85, crimeLevel: "Low" },
  macro: {
    inflationRate: 3,
    currencyStability: "High",
    rentVolatilityIndex: 6
  },
  digitalNomad: {
    overallScore: 84,
    wifiSpeed: 180,
    coworkingCost: 200,
    safetyScore: 85
  },
  tags: ["historic", "affordable", "beer"],
  lastUpdated: "2026-03"
},

{
  id: "seoul",
  lat: 37.5665,
  lng: 126.978,
  slug: "seoul",
  name: "Seoul",
  country: "South Korea",
  countryCode: "KR",
  continent: "Asia",
  currency: "KRW",
  currencySymbol: " ",
  image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1600",
  description: "High-tech metropolis with blazing fast internet.",
  costs: {
    accommodation: { center: 100, suburb: 65 },
    food: { budget: 8, standard: 20, premium: 60 },
    transport: 50,
    coworking: 250
  },
  visa: {
    type: "Korea Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 3000
  },
  tax: {
    personalIncomeTaxTopRate: 45,
    corporateTax: 25,
    capitalGainsTax: 22
  },
  infrastructure: {
    publicTransportQuality: 95,
    healthcareQuality: 92,
    englishProficiency: 60,
    airportConnectivity: 95
  },
  safety: { safetyIndex: 90, crimeLevel: "Low" },
  macro: {
    inflationRate: 2.6,
    currencyStability: "High",
    rentVolatilityIndex: 6
  },
  digitalNomad: {
    overallScore: 86,
    wifiSpeed: 300,
    coworkingCost: 250,
    safetyScore: 90
  },
  tags: ["tech-hub", "fast-internet", "food"],
  lastUpdated: "2026-03"
},

{
  id: "paris",
  lat: 48.8566,
  lng: 2.3522,
  slug: "paris",
  name: "Paris",
  country: "France",
  countryCode: "FR",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600",
  description: "World-famous capital offering culture and business opportunities.",
  costs: {
    accommodation: { center: 160, suburb: 110 },
    food: { budget: 15, standard: 35, premium: 100 },
    transport: 75,
    coworking: 350
  },
  visa: {
    type: "France Long-Stay / Talent Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 60,
    minIncomeRequirement: 2500
  },
  tax: {
    personalIncomeTaxTopRate: 45,
    corporateTax: 25,
    capitalGainsTax: 30
  },
  infrastructure: {
    publicTransportQuality: 92,
    healthcareQuality: 95,
    englishProficiency: 75,
    airportConnectivity: 95
  },
  safety: { safetyIndex: 70, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 2.5,
    currencyStability: "High",
    rentVolatilityIndex: 8
  },
  digitalNomad: {
    overallScore: 78,
    wifiSpeed: 200,
    coworkingCost: 350,
    safetyScore: 70
  },
  tags: ["culture", "food", "business"],
  lastUpdated: "2026-03"
},

{
  id: "madrid",
  lat: 40.4168,
  lng: -3.7038,
  slug: "madrid",
  name: "Madrid",
  country: "Spain",
  countryCode: "ES",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1600",
  description: "Vibrant Spanish capital with lively social scene.",
  costs: {
    accommodation: { center: 110, suburb: 80 },
    food: { budget: 12, standard: 30, premium: 85 },
    transport: 55,
    coworking: 260
  },
  visa: {
    type: "Spain Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 45,
    minIncomeRequirement: 2520
  },
  tax: {
    personalIncomeTaxTopRate: 47,
    corporateTax: 25,
    capitalGainsTax: 23
  },
  infrastructure: {
    publicTransportQuality: 88,
    healthcareQuality: 90,
    englishProficiency: 70,
    airportConnectivity: 90
  },
  safety: { safetyIndex: 75, crimeLevel: "Low" },
  macro: {
    inflationRate: 2.7,
    currencyStability: "High",
    rentVolatilityIndex: 6.5
  },
  digitalNomad: {
    overallScore: 81,
    wifiSpeed: 160,
    coworkingCost: 260,
    safetyScore: 75
  },
  tags: ["culture", "nightlife", "affordable"],
  lastUpdated: "2026-03"
},

{
  id: "rome",
  lat: 41.9028,
  lng: 12.4964,
  slug: "rome",
  name: "Rome",
  country: "Italy",
  countryCode: "IT",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1600",
  description: "Historic capital with Mediterranean lifestyle and rich heritage.",
  costs: {
    accommodation: { center: 120, suburb: 85 },
    food: { budget: 10, standard: 28, premium: 80 },
    transport: 45,
    coworking: 240
  },
  visa: {
    type: "Italy Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 60,
    minIncomeRequirement: 2800
  },
  tax: {
    personalIncomeTaxTopRate: 43,
    corporateTax: 24,
    capitalGainsTax: 26
  },
  infrastructure: {
    publicTransportQuality: 80,
    healthcareQuality: 88,
    englishProficiency: 65,
    airportConnectivity: 88
  },
  safety: { safetyIndex: 72, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 2.6,
    currencyStability: "High",
    rentVolatilityIndex: 7
  },
  digitalNomad: {
    overallScore: 76,
    wifiSpeed: 150,
    coworkingCost: 240,
    safetyScore: 72
  },
  tags: ["historic", "food", "culture"],
  lastUpdated: "2026-03"
},

{
  id: "vienna",
  lat: 48.2082,
  lng: 16.3738,
  slug: "vienna",
  name: "Vienna",
  country: "Austria",
  countryCode: "AT",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1600",
  description: "Highly livable city with excellent public services.",
  costs: {
    accommodation: { center: 130, suburb: 90 },
    food: { budget: 12, standard: 32, premium: 90 },
    transport: 60,
    coworking: 300
  },
  visa: {
    type: "Austria Self-Employment Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 60,
    minIncomeRequirement: 3000
  },
  tax: {
    personalIncomeTaxTopRate: 55,
    corporateTax: 24,
    capitalGainsTax: 27.5
  },
  infrastructure: {
    publicTransportQuality: 95,
    healthcareQuality: 95,
    englishProficiency: 85,
    airportConnectivity: 85
  },
  safety: { safetyIndex: 90, crimeLevel: "Low" },
  macro: {
    inflationRate: 2.4,
    currencyStability: "High",
    rentVolatilityIndex: 5
  },
  digitalNomad: {
    overallScore: 88,
    wifiSpeed: 200,
    coworkingCost: 300,
    safetyScore: 90
  },
  tags: ["safe", "clean", "livable"],
  lastUpdated: "2026-03"
},

{
  id: "budapest",
  lat: 47.4979,
  lng: 19.0402,
  slug: "budapest",
  name: "Budapest",
  country: "Hungary",
  countryCode: "HU",
  continent: "Europe",
  currency: "HUF",
  currencySymbol: "Ft",
  image: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=1600",
  description: "Affordable European capital popular with remote workers.",
  costs: {
    accommodation: { center: 80, suburb: 55 },
    food: { budget: 8, standard: 22, premium: 65 },
    transport: 30,
    coworking: 180
  },
  visa: {
    type: "Hungary White Card",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 2000
  },
  tax: {
    personalIncomeTaxTopRate: 15,
    corporateTax: 9,
    capitalGainsTax: 15
  },
  infrastructure: {
    publicTransportQuality: 88,
    healthcareQuality: 80,
    englishProficiency: 75,
    airportConnectivity: 80
  },
  safety: { safetyIndex: 80, crimeLevel: "Low" },
  macro: {
    inflationRate: 4.5,
    currencyStability: "Medium",
    rentVolatilityIndex: 6
  },
  digitalNomad: {
    overallScore: 83,
    wifiSpeed: 160,
    coworkingCost: 180,
    safetyScore: 80
  },
  tags: ["affordable", "nomad-friendly", "historic"],
  lastUpdated: "2026-03"
},

{
  id: "athens",
  lat: 37.9838,
  lng: 23.7275,
  slug: "athens",
  name: "Athens",
  country: "Greece",
  countryCode: "GR",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600",
  description: "Historic Mediterranean city with growing nomad appeal.",
  costs: {
    accommodation: { center: 85, suburb: 60 },
    food: { budget: 9, standard: 25, premium: 70 },
    transport: 35,
    coworking: 200
  },
  visa: {
    type: "Greece Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 3500
  },
  tax: {
    personalIncomeTaxTopRate: 44,
    corporateTax: 22,
    capitalGainsTax: 15
  },
  infrastructure: {
    publicTransportQuality: 75,
    healthcareQuality: 80,
    englishProficiency: 70,
    airportConnectivity: 85
  },
  safety: { safetyIndex: 70, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 3.2,
    currencyStability: "High",
    rentVolatilityIndex: 6
  },
  digitalNomad: {
    overallScore: 79,
    wifiSpeed: 140,
    coworkingCost: 200,
    safetyScore: 70
  },
  tags: ["history", "mediterranean", "affordable"],
  lastUpdated: "2026-03"
},

{
  id: "istanbul",
  lat: 41.0082,
  lng: 28.9784,
  slug: "istanbul",
  name: "Istanbul",
  country: "Turkey",
  countryCode: "TR",
  continent: "Europe",
  currency: "TRY",
  currencySymbol: "₺",
  image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1600",
  description: "Vibrant city bridging Europe and Asia with excellent value.",
  costs: {
    accommodation: { center: 75, suburb: 50 },
    food: { budget: 7, standard: 20, premium: 60 },
    transport: 30,
    coworking: 170
  },
  visa: {
    type: "Turkey Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 3000
  },
  tax: {
    personalIncomeTaxTopRate: 40,
    corporateTax: 25,
    capitalGainsTax: 15
  },
  infrastructure: {
    publicTransportQuality: 75,
    healthcareQuality: 75,
    englishProficiency: 55,
    airportConnectivity: 90
  },
  safety: { safetyIndex: 65, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 45,
    currencyStability: "Low",
    rentVolatilityIndex: 9
  },
  digitalNomad: {
    overallScore: 75,
    wifiSpeed: 120,
    coworkingCost: 170,
    safetyScore: 65
  },
  tags: ["culture", "affordable", "food"],
  lastUpdated: "2026-03"
},

{
  id: "helsinki",
  lat: 60.1699,
  lng: 24.9384,
  slug: "helsinki",
  name: "Helsinki",
  country: "Finland",
  countryCode: "FI",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=1600",
  description: "Nordic capital offering safety and excellent infrastructure.",
  costs: {
    accommodation: { center: 150, suburb: 105 },
    food: { budget: 14, standard: 38, premium: 110 },
    transport: 70,
    coworking: 320
  },
  visa: {
    type: "Self-Employment Residence Permit",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 60,
    minIncomeRequirement: 2000
  },
  tax: {
    personalIncomeTaxTopRate: 57,
    corporateTax: 20,
    capitalGainsTax: 30
  },
  infrastructure: {
    publicTransportQuality: 95,
    healthcareQuality: 95,
    englishProficiency: 90,
    airportConnectivity: 85
  },
  safety: { safetyIndex: 95, crimeLevel: "Very Low" },
  macro: {
    inflationRate: 3.1,
    currencyStability: "High",
    rentVolatilityIndex: 5
  },
  digitalNomad: {
    overallScore: 90,
    wifiSpeed: 250,
    coworkingCost: 320,
    safetyScore: 95
  },
  tags: ["safe", "nordic", "nature"],
  lastUpdated: "2026-03"
},

{
  id: "stockholm",
  lat: 59.3293,
  lng: 18.0686,
  slug: "stockholm",
  name: "Stockholm",
  country: "Sweden",
  countryCode: "SE",
  continent: "Europe",
  currency: "SEK",
  currencySymbol: "kr",
  image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1600",
  description: "Scandinavian tech hub with high quality of life.",
  costs: {
    accommodation: { center: 155, suburb: 110 },
    food: { budget: 15, standard: 40, premium: 120 },
    transport: 75,
    coworking: 350
  },
  visa: {
    type: "Sweden Self-Employment Permit",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 90,
    minIncomeRequirement: 2200
  },
  tax: {
    personalIncomeTaxTopRate: 52,
    corporateTax: 20.6,
    capitalGainsTax: 30
  },
  infrastructure: {
    publicTransportQuality: 95,
    healthcareQuality: 92,
    englishProficiency: 95,
    airportConnectivity: 90
  },
  safety: { safetyIndex: 92, crimeLevel: "Low" },
  macro: {
    inflationRate: 2.8,
    currencyStability: "High",
    rentVolatilityIndex: 6
  },
  digitalNomad: {
    overallScore: 88,
    wifiSpeed: 240,
    coworkingCost: 350,
    safetyScore: 92
  },
  tags: ["tech-hub", "safe", "nordic"],
  lastUpdated: "2026-03"
},

{
  id: "oslo",
  lat: 59.9139,
  lng: 10.7522,
  slug: "oslo",
  name: "Oslo",
  country: "Norway",
  countryCode: "NO",
  continent: "Europe",
  currency: "NOK",
  currencySymbol: "kr",
  image: "https://images.unsplash.com/photo-1601581975053-7c199b3c3344?w=1600",
  description: "Modern city surrounded by nature with high living standards.",
  costs: {
    accommodation: { center: 165, suburb: 120 },
    food: { budget: 18, standard: 45, premium: 130 },
    transport: 80,
    coworking: 380
  },
  visa: {
    type: "Self-Employment Residence Permit",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 90,
    minIncomeRequirement: 3000
  },
  tax: {
    personalIncomeTaxTopRate: 47.4,
    corporateTax: 22,
    capitalGainsTax: 22
  },
  infrastructure: {
    publicTransportQuality: 95,
    healthcareQuality: 95,
    englishProficiency: 95,
    airportConnectivity: 85
  },
  safety: { safetyIndex: 93, crimeLevel: "Very Low" },
  macro: {
    inflationRate: 3.3,
    currencyStability: "High",
    rentVolatilityIndex: 5.5
  },
  digitalNomad: {
    overallScore: 87,
    wifiSpeed: 230,
    coworkingCost: 380,
    safetyScore: 93
  },
  tags: ["nature", "safe", "expensive"],
  lastUpdated: "2026-03"
},

{
  id: "cape-town",
  lat: -33.9249,
  lng: 18.4241,
  slug: "cape-town",
  name: "Cape Town",
  country: "South Africa",
  countryCode: "ZA",
  continent: "Africa",
  currency: "ZAR",
  currencySymbol: "R",
  image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600",
  description: "Coastal city with strong lifestyle appeal and growing remote scene.",
  costs: {
    accommodation: { center: 70, suburb: 45 },
    food: { budget: 8, standard: 20, premium: 55 },
    transport: 45,
    coworking: 180
  },
  visa: {
    type: "South Africa Remote Work Visa",
    remoteFriendly: true,
    stayDurationMonths: 36,
    processingTimeDays: 60,
    minIncomeRequirement: 3000
  },
  tax: {
    personalIncomeTaxTopRate: 45,
    corporateTax: 27,
    capitalGainsTax: 18
  },
  infrastructure: {
    publicTransportQuality: 60,
    healthcareQuality: 70,
    englishProficiency: 90,
    airportConnectivity: 80
  },
  safety: { safetyIndex: 45, crimeLevel: "High" },
  macro: {
    inflationRate: 5.2,
    currencyStability: "Medium",
    rentVolatilityIndex: 7
  },
  digitalNomad: {
    overallScore: 68,
    wifiSpeed: 100,
    coworkingCost: 180,
    safetyScore: 45
  },
  tags: ["nature", "affordable", "adventure"],
  lastUpdated: "2026-03"
},

{
  id: "marrakech",
  lat: 31.6295,
  lng: -7.9811,
  slug: "marrakech",
  name: "Marrakech",
  country: "Morocco",
  countryCode: "MA",
  continent: "Africa",
  currency: "MAD",
  currencySymbol: " . .",
  image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600",
  description: "Historic Moroccan city blending tradition and growing nomad interest.",
  costs: {
    accommodation: { center: 55, suburb: 35 },
    food: { budget: 6, standard: 18, premium: 50 },
    transport: 25,
    coworking: 120
  },
  visa: {
    type: "Tourist Visa (90 days)",
    remoteFriendly: true,
    stayDurationMonths: 3,
    processingTimeDays: 15,
    minIncomeRequirement: 0
  },
  tax: {
    personalIncomeTaxTopRate: 38,
    corporateTax: 31,
    capitalGainsTax: 20
  },
  infrastructure: {
    publicTransportQuality: 55,
    healthcareQuality: 60,
    englishProficiency: 50,
    airportConnectivity: 75
  },
  safety: { safetyIndex: 65, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 5,
    currencyStability: "Medium",
    rentVolatilityIndex: 6.5
  },
  digitalNomad: {
    overallScore: 72,
    wifiSpeed: 80,
    coworkingCost: 120,
    safetyScore: 65
  },
  tags: ["culture", "affordable", "warm-weather"],
  lastUpdated: "2026-03"
},

{
  id: "cairo",
  lat: 30.0444,
  lng: 31.2357,
  slug: "cairo",
  name: "Cairo",
  country: "Egypt",
  countryCode: "EG",
  continent: "Africa",
  currency: "EGP",
  currencySymbol: "E£",
  image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1600",
  description: "Massive historic capital with extremely low living costs.",
  costs: {
    accommodation: { center: 40, suburb: 25 },
    food: { budget: 5, standard: 15, premium: 40 },
    transport: 15,
    coworking: 100
  },
  visa: {
    type: "Tourist Visa",
    remoteFriendly: true,
    stayDurationMonths: 3,
    processingTimeDays: 7,
    minIncomeRequirement: 0
  },
  tax: {
    personalIncomeTaxTopRate: 27.5,
    corporateTax: 22.5,
    capitalGainsTax: 10
  },
  infrastructure: {
    publicTransportQuality: 50,
    healthcareQuality: 55,
    englishProficiency: 45,
    airportConnectivity: 80
  },
  safety: { safetyIndex: 55, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 25,
    currencyStability: "Low",
    rentVolatilityIndex: 8
  },
  digitalNomad: {
    overallScore: 60,
    wifiSpeed: 70,
    coworkingCost: 100,
    safetyScore: 55
  },
  tags: ["historic", "very-affordable"],
  lastUpdated: "2026-03"
},

{
  id: "nairobi",
  lat: -1.2921,
  lng: 36.8219,
  slug: "nairobi",
  name: "Nairobi",
  country: "Kenya",
  countryCode: "KE",
  continent: "Africa",
  currency: "KES",
  currencySymbol: "KSh",
  image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1600",
  description: "East Africa's tech and startup hub.",
  costs: {
    accommodation: { center: 65, suburb: 40 },
    food: { budget: 6, standard: 18, premium: 50 },
    transport: 35,
    coworking: 160
  },
  visa: {
    type: "Kenya Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 2000
  },
  tax: {
    personalIncomeTaxTopRate: 35,
    corporateTax: 30,
    capitalGainsTax: 15
  },
  infrastructure: {
    publicTransportQuality: 60,
    healthcareQuality: 65,
    englishProficiency: 85,
    airportConnectivity: 75
  },
  safety: { safetyIndex: 55, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 5.5,
    currencyStability: "Medium",
    rentVolatilityIndex: 7
  },
  digitalNomad: {
    overallScore: 74,
    wifiSpeed: 90,
    coworkingCost: 160,
    safetyScore: 55
  },
  tags: ["tech-hub", "emerging", "affordable"],
  lastUpdated: "2026-03"
},

{
  id: "kigali",
  lat: -1.9441,
  lng: 30.0619,
  slug: "kigali",
  name: "Kigali",
  country: "Rwanda",
  countryCode: "RW",
  continent: "Africa",
  currency: "RWF",
  currencySymbol: "FRw",
  image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=1600",
  description: "Clean and rapidly developing East African capital.",
  costs: {
    accommodation: { center: 50, suburb: 35 },
    food: { budget: 6, standard: 18, premium: 45 },
    transport: 25,
    coworking: 140
  },
  visa: {
    type: "Remote Worker Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 14,
    minIncomeRequirement: 1500
  },
  tax: {
    personalIncomeTaxTopRate: 30,
    corporateTax: 30,
    capitalGainsTax: 5
  },
  infrastructure: {
    publicTransportQuality: 65,
    healthcareQuality: 70,
    englishProficiency: 75,
    airportConnectivity: 65
  },
  safety: { safetyIndex: 75, crimeLevel: "Low" },
  macro: {
    inflationRate: 6,
    currencyStability: "Medium",
    rentVolatilityIndex: 5
  },
  digitalNomad: {
    overallScore: 80,
    wifiSpeed: 85,
    coworkingCost: 140,
    safetyScore: 75
  },
  tags: ["clean", "safe", "emerging"],
  lastUpdated: "2026-03"
},

{
  id: "accra",
  lat: 5.6037,
  lng: -0.187,
  slug: "accra",
  name: "Accra",
  country: "Ghana",
  countryCode: "GH",
  continent: "Africa",
  currency: "GHS",
  currencySymbol: " ",
  image: "https://images.unsplash.com/photo-1580661869408-55ab23f2c6c3?w=1600",
  description: "West African capital with growing entrepreneurial scene.",
  costs: {
    accommodation: { center: 60, suburb: 40 },
    food: { budget: 7, standard: 20, premium: 55 },
    transport: 30,
    coworking: 150
  },
  visa: {
    type: "Tourist / Residence Permit",
    remoteFriendly: true,
    stayDurationMonths: 3,
    processingTimeDays: 21,
    minIncomeRequirement: 0
  },
  tax: {
    personalIncomeTaxTopRate: 35,
    corporateTax: 25,
    capitalGainsTax: 15
  },
  infrastructure: {
    publicTransportQuality: 55,
    healthcareQuality: 60,
    englishProficiency: 90,
    airportConnectivity: 70
  },
  safety: { safetyIndex: 60, crimeLevel: "Moderate" },
  macro: {
    inflationRate: 20,
    currencyStability: "Low",
    rentVolatilityIndex: 8
  },
  digitalNomad: {
    overallScore: 70,
    wifiSpeed: 95,
    coworkingCost: 150,
    safetyScore: 60
  },
  tags: ["emerging", "english-speaking", "entrepreneurial"],
  lastUpdated: "2026-03"
},

{
  id: "porto",
  slug: "porto",
  lat: 41.1579, lng: -8.6291,
  name: "Porto",
  country: "Portugal",
  countryCode: "PT",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1600",
  description: "Portugal's second city -- charming, affordable and booming with digital nomads.",
  costs: {
    accommodation: { center: 70, suburb: 45 },
    food: { budget: 12, standard: 28, premium: 70 },
    transport: 40,
    coworking: 150
  },
  visa: {
    type: "Portugal D8 Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 60,
    minIncomeRequirement: 2836
  },
  tax: { personalIncomeTaxTopRate: 48, corporateTax: 21, capitalGainsTax: 28 },
  infrastructure: { publicTransportQuality: 75, healthcareQuality: 82, englishProficiency: 72, airportConnectivity: 80 },
  safety: { safetyIndex: 82, crimeLevel: "Low" },
  macro: { inflationRate: 3.2, currencyStability: "High", rentVolatilityIndex: 6.5 },
  digitalNomad: { overallScore: 87, wifiSpeed: 150, coworkingCost: 150, safetyScore: 82 },
  tags: ["affordable", "culture", "nomad-hub", "historic"],
  lastUpdated: "2026-03"
},

{
  id: "tallinn",
  slug: "tallinn",
  lat: 59.4370, lng: 24.7536,
  name: "Tallinn",
  country: "Estonia",
  countryCode: "EE",
  continent: "Europe",
  currency: "EUR",
  currencySymbol: "€",
  image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1600",
  description: "Europe's most digital city -- Estonia pioneered the e-residency and digital nomad visa.",
  costs: {
    accommodation: { center: 75, suburb: 50 },
    food: { budget: 14, standard: 30, premium: 75 },
    transport: 45,
    coworking: 200
  },
  visa: {
    type: "Estonia Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 4500
  },
  tax: { personalIncomeTaxTopRate: 20, corporateTax: 20, capitalGainsTax: 20 },
  infrastructure: { publicTransportQuality: 78, healthcareQuality: 80, englishProficiency: 85, airportConnectivity: 72 },
  safety: { safetyIndex: 88, crimeLevel: "Low" },
  macro: { inflationRate: 4.1, currencyStability: "High", rentVolatilityIndex: 5.5 },
  digitalNomad: { overallScore: 89, wifiSpeed: 180, coworkingCost: 200, safetyScore: 88 },
  tags: ["tech-hub", "safe", "nomad-friendly", "english-speaking"],
  lastUpdated: "2026-03"
},

{
  id: "tbilisi",
  slug: "tbilisi",
  lat: 41.6938, lng: 44.8015,
  name: "Tbilisi",
  country: "Georgia",
  countryCode: "GE",
  continent: "Asia",
  currency: "GEL",
  currencySymbol: " ",
  image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1600",
  description: "The rising star of nomad destinations -- visa-free for most nationalities, ultra-affordable.",
  costs: {
    accommodation: { center: 35, suburb: 22 },
    food: { budget: 8, standard: 18, premium: 50 },
    transport: 20,
    coworking: 80
  },
  visa: {
    type: "Visa-Free 365 Days",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 0,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 20, corporateTax: 15, capitalGainsTax: 5 },
  infrastructure: { publicTransportQuality: 62, healthcareQuality: 65, englishProficiency: 50, airportConnectivity: 68 },
  safety: { safetyIndex: 80, crimeLevel: "Low" },
  macro: { inflationRate: 5.5, currencyStability: "Medium", rentVolatilityIndex: 7.0 },
  digitalNomad: { overallScore: 84, wifiSpeed: 80, coworkingCost: 80, safetyScore: 80 },
  tags: ["affordable", "nomad-hub", "emerging", "culture"],
  lastUpdated: "2026-03"
},

{
  id: "kuala-lumpur",
  slug: "kuala-lumpur",
  lat: 3.1390, lng: 101.6869,
  name: "Kuala Lumpur",
  country: "Malaysia",
  countryCode: "MY",
  continent: "Asia",
  currency: "MYR",
  currencySymbol: "RM",
  image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1600",
  description: "Southeast Asia's most underrated city -- modern infrastructure at budget prices.",
  costs: {
    accommodation: { center: 55, suburb: 35 },
    food: { budget: 8, standard: 18, premium: 55 },
    transport: 50,
    coworking: 120
  },
  visa: {
    type: "Malaysia DE Rantau Nomad Pass",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 2400
  },
  tax: { personalIncomeTaxTopRate: 30, corporateTax: 24, capitalGainsTax: 0 },
  infrastructure: { publicTransportQuality: 80, healthcareQuality: 82, englishProficiency: 78, airportConnectivity: 92 },
  safety: { safetyIndex: 72, crimeLevel: "Moderate" },
  macro: { inflationRate: 3.1, currencyStability: "Medium", rentVolatilityIndex: 4.5 },
  digitalNomad: { overallScore: 83, wifiSpeed: 130, coworkingCost: 120, safetyScore: 72 },
  tags: ["affordable", "tech-hub", "food", "nomad-friendly"],
  lastUpdated: "2026-03"
},

{
  id: "ho-chi-minh",
  slug: "ho-chi-minh",
  lat: 10.8231, lng: 106.6297,
  name: "Ho Chi Minh City",
  country: "Vietnam",
  countryCode: "VN",
  continent: "Asia",
  currency: "VND",
  currencySymbol: " ",
  image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1600",
  description: "Vietnam's economic hub -- buzzing energy, great food and one of Asia's lowest costs.",
  costs: {
    accommodation: { center: 40, suburb: 25 },
    food: { budget: 7, standard: 15, premium: 45 },
    transport: 25,
    coworking: 90
  },
  visa: {
    type: "E-Visa 90 Days",
    remoteFriendly: false,
    stayDurationMonths: 3,
    processingTimeDays: 3,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 35, corporateTax: 20, capitalGainsTax: 20 },
  infrastructure: { publicTransportQuality: 58, healthcareQuality: 68, englishProficiency: 45, airportConnectivity: 82 },
  safety: { safetyIndex: 68, crimeLevel: "Low" },
  macro: { inflationRate: 3.8, currencyStability: "Medium", rentVolatilityIndex: 5.5 },
  digitalNomad: { overallScore: 79, wifiSpeed: 90, coworkingCost: 90, safetyScore: 68 },
  tags: ["affordable", "food", "nomad-hub", "emerging"],
  lastUpdated: "2026-03"
},

{
  id: "sydney",
  slug: "sydney",
  lat: -33.8688, lng: 151.2093,
  name: "Sydney",
  country: "Australia",
  countryCode: "AU",
  continent: "Oceania",
  currency: "AUD",
  currencySymbol: "A$",
  image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600",
  description: "World-class city with stunning harbours -- high cost offset by exceptional quality of life.",
  costs: {
    accommodation: { center: 170, suburb: 110 },
    food: { budget: 22, standard: 45, premium: 110 },
    transport: 130,
    coworking: 350
  },
  visa: {
    type: "Working Holiday / Skilled Visa",
    remoteFriendly: false,
    stayDurationMonths: 12,
    processingTimeDays: 60,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 45, corporateTax: 30, capitalGainsTax: 23 },
  infrastructure: { publicTransportQuality: 82, healthcareQuality: 90, englishProficiency: 100, airportConnectivity: 90 },
  safety: { safetyIndex: 85, crimeLevel: "Low" },
  macro: { inflationRate: 3.5, currencyStability: "High", rentVolatilityIndex: 7.5 },
  digitalNomad: { overallScore: 80, wifiSpeed: 150, coworkingCost: 350, safetyScore: 85 },
  tags: ["safe", "english-speaking", "beach", "tech-hub"],
  lastUpdated: "2026-03"
},

{
  id: "melbourne",
  slug: "melbourne",
  lat: -37.8136, lng: 144.9631,
  name: "Melbourne",
  country: "Australia",
  countryCode: "AU",
  continent: "Oceania",
  currency: "AUD",
  currencySymbol: "A$",
  image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1600",
  description: "Australia's cultural capital -- world's most liveable city for good reason.",
  costs: {
    accommodation: { center: 155, suburb: 100 },
    food: { budget: 20, standard: 42, premium: 100 },
    transport: 120,
    coworking: 320
  },
  visa: {
    type: "Working Holiday / Skilled Visa",
    remoteFriendly: false,
    stayDurationMonths: 12,
    processingTimeDays: 60,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 45, corporateTax: 30, capitalGainsTax: 23 },
  infrastructure: { publicTransportQuality: 80, healthcareQuality: 90, englishProficiency: 100, airportConnectivity: 87 },
  safety: { safetyIndex: 87, crimeLevel: "Low" },
  macro: { inflationRate: 3.3, currencyStability: "High", rentVolatilityIndex: 7.0 },
  digitalNomad: { overallScore: 81, wifiSpeed: 145, coworkingCost: 320, safetyScore: 87 },
  tags: ["safe", "english-speaking", "culture", "startup-hub"],
  lastUpdated: "2026-03"
},

{
  id: "toronto",
  slug: "toronto",
  lat: 43.6532, lng: -79.3832,
  name: "Toronto",
  country: "Canada",
  countryCode: "CA",
  continent: "North America",
  currency: "CAD",
  currencySymbol: "C$",
  image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1600",
  description: "Canada's largest city -- multicultural, safe and one of the world's top expat destinations.",
  costs: {
    accommodation: { center: 160, suburb: 105 },
    food: { budget: 20, standard: 42, premium: 100 },
    transport: 110,
    coworking: 380
  },
  visa: {
    type: "Canada Start-Up / Work Permit",
    remoteFriendly: false,
    stayDurationMonths: 6,
    processingTimeDays: 90,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 53, corporateTax: 26, capitalGainsTax: 27 },
  infrastructure: { publicTransportQuality: 80, healthcareQuality: 88, englishProficiency: 100, airportConnectivity: 90 },
  safety: { safetyIndex: 82, crimeLevel: "Low" },
  macro: { inflationRate: 3.4, currencyStability: "High", rentVolatilityIndex: 8.0 },
  digitalNomad: { overallScore: 77, wifiSpeed: 180, coworkingCost: 380, safetyScore: 82 },
  tags: ["safe", "english-speaking", "multicultural", "startup-hub"],
  lastUpdated: "2026-03"
},

{
  id: "miami",
  slug: "miami",
  lat: 25.7617, lng: -80.1918,
  name: "Miami",
  country: "United States",
  countryCode: "US",
  continent: "North America",
  currency: "USD",
  currencySymbol: "$",
  image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1600",
  description: "The gateway to Latin America -- sun, tech scene and no state income tax.",
  costs: {
    accommodation: { center: 175, suburb: 120 },
    food: { budget: 22, standard: 48, premium: 115 },
    transport: 90,
    coworking: 420
  },
  visa: {
    type: "No Digital Nomad Visa",
    remoteFriendly: false,
    stayDurationMonths: 6,
    processingTimeDays: 90,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 37, corporateTax: 21, capitalGainsTax: 20 },
  infrastructure: { publicTransportQuality: 65, healthcareQuality: 85, englishProficiency: 100, airportConnectivity: 92 },
  safety: { safetyIndex: 68, crimeLevel: "Moderate" },
  macro: { inflationRate: 3.6, currencyStability: "High", rentVolatilityIndex: 9.0 },
  digitalNomad: { overallScore: 74, wifiSpeed: 200, coworkingCost: 420, safetyScore: 68 },
  tags: ["finance", "startup-hub", "beach", "nightlife"],
  lastUpdated: "2026-03"
},

{
  id: "bogota",
  slug: "bogota",
  lat: 4.7110, lng: -74.0721,
  name: "Bogot ",
  country: "Colombia",
  countryCode: "CO",
  continent: "South America",
  currency: "COP",
  currencySymbol: "COP$",
  image: "https://images.unsplash.com/photo-1590516878787-73584f29eca3?w=1600",
  description: "Colombia's capital reborn -- thriving nomad scene, great coffee and modern infrastructure.",
  costs: {
    accommodation: { center: 45, suburb: 28 },
    food: { budget: 7, standard: 16, premium: 45 },
    transport: 30,
    coworking: 100
  },
  visa: {
    type: "Colombia Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 24,
    processingTimeDays: 30,
    minIncomeRequirement: 750
  },
  tax: { personalIncomeTaxTopRate: 39, corporateTax: 35, capitalGainsTax: 10 },
  infrastructure: { publicTransportQuality: 68, healthcareQuality: 72, englishProficiency: 38, airportConnectivity: 75 },
  safety: { safetyIndex: 55, crimeLevel: "Moderate" },
  macro: { inflationRate: 6.5, currencyStability: "Medium", rentVolatilityIndex: 7.0 },
  digitalNomad: { overallScore: 74, wifiSpeed: 85, coworkingCost: 100, safetyScore: 55 },
  tags: ["affordable", "nomad-hub", "emerging", "culture"],
  lastUpdated: "2026-03"
},

{
  id: "sao-paulo",
  slug: "sao-paulo",
  lat: -23.5505, lng: -46.6333,
  name: "S o Paulo",
  country: "Brazil",
  countryCode: "BR",
  continent: "South America",
  currency: "BRL",
  currencySymbol: "R$",
  image: "https://images.unsplash.com/photo-1549049950-48d5887197a0?w=1600",
  description: "Latin America's largest startup ecosystem -- the city that never stops.",
  costs: {
    accommodation: { center: 60, suburb: 38 },
    food: { budget: 8, standard: 18, premium: 55 },
    transport: 40,
    coworking: 130
  },
  visa: {
    type: "Brazil Digital Nomad Visa",
    remoteFriendly: true,
    stayDurationMonths: 12,
    processingTimeDays: 30,
    minIncomeRequirement: 1500
  },
  tax: { personalIncomeTaxTopRate: 27, corporateTax: 34, capitalGainsTax: 15 },
  infrastructure: { publicTransportQuality: 72, healthcareQuality: 70, englishProficiency: 40, airportConnectivity: 85 },
  safety: { safetyIndex: 50, crimeLevel: "High" },
  macro: { inflationRate: 4.8, currencyStability: "Medium", rentVolatilityIndex: 6.5 },
  digitalNomad: { overallScore: 70, wifiSpeed: 100, coworkingCost: 130, safetyScore: 50 },
  tags: ["startup-hub", "food", "nightlife", "emerging"],
  lastUpdated: "2026-03"
},

{
  id: "warsaw",
  slug: "warsaw",
  lat: 52.2297, lng: 21.0122,
  name: "Warsaw",
  country: "Poland",
  countryCode: "PL",
  continent: "Europe",
  currency: "PLN",
  currencySymbol: "z ",
  image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1600",
  description: "Central Europe's rising tech hub -- fast internet, low costs and EU freedom of movement.",
  costs: {
    accommodation: { center: 70, suburb: 45 },
    food: { budget: 11, standard: 24, premium: 60 },
    transport: 35,
    coworking: 180
  },
  visa: {
    type: "EU Freedom of Movement",
    remoteFriendly: false,
    stayDurationMonths: 3,
    processingTimeDays: 0,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 32, corporateTax: 19, capitalGainsTax: 19 },
  infrastructure: { publicTransportQuality: 82, healthcareQuality: 78, englishProficiency: 72, airportConnectivity: 80 },
  safety: { safetyIndex: 79, crimeLevel: "Low" },
  macro: { inflationRate: 4.2, currencyStability: "Medium", rentVolatilityIndex: 6.0 },
  digitalNomad: { overallScore: 80, wifiSpeed: 170, coworkingCost: 180, safetyScore: 79 },
  tags: ["affordable", "tech-hub", "historic", "emerging"],
  lastUpdated: "2026-03"
},

{
  id: "los-angeles",
  slug: "los-angeles",
  lat: 34.0522, lng: -118.2437,
  name: "Los Angeles",
  country: "United States",
  countryCode: "US",
  continent: "North America",
  currency: "USD",
  currencySymbol: "$",
  image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=1600",
  description: "The creative capital of the world -- entertainment, tech and endless sunshine.",
  costs: {
    accommodation: { center: 190, suburb: 130 },
    food: { budget: 23, standard: 50, premium: 120 },
    transport: 100,
    coworking: 440
  },
  visa: {
    type: "No Digital Nomad Visa",
    remoteFriendly: false,
    stayDurationMonths: 6,
    processingTimeDays: 90,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 37, corporateTax: 21, capitalGainsTax: 20 },
  infrastructure: { publicTransportQuality: 60, healthcareQuality: 87, englishProficiency: 100, airportConnectivity: 95 },
  safety: { safetyIndex: 62, crimeLevel: "Moderate" },
  macro: { inflationRate: 3.5, currencyStability: "High", rentVolatilityIndex: 9.5 },
  digitalNomad: { overallScore: 70, wifiSpeed: 220, coworkingCost: 440, safetyScore: 62 },
  tags: ["startup-hub", "arts", "beach", "nightlife"],
  lastUpdated: "2026-03"
},

{
  id: "lagos",
  slug: "lagos",
  lat: 6.5244, lng: 3.3792,
  name: "Lagos",
  country: "Nigeria",
  countryCode: "NG",
  continent: "Africa",
  currency: "NGN",
  currencySymbol: " ",
  image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1600",
  description: "Africa's largest startup ecosystem and economic powerhouse -- raw energy, massive opportunity.",
  costs: {
    accommodation: { center: 55, suburb: 30 },
    food: { budget: 6, standard: 14, premium: 45 },
    transport: 30,
    coworking: 85
  },
  visa: {
    type: "Nigeria Visa on Arrival",
    remoteFriendly: false,
    stayDurationMonths: 1,
    processingTimeDays: 7,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 24, corporateTax: 30, capitalGainsTax: 10 },
  infrastructure: { publicTransportQuality: 42, healthcareQuality: 48, englishProficiency: 85, airportConnectivity: 72 },
  safety: { safetyIndex: 40, crimeLevel: "High" },
  macro: { inflationRate: 18.0, currencyStability: "Low", rentVolatilityIndex: 12.0 },
  digitalNomad: { overallScore: 55, wifiSpeed: 40, coworkingCost: 85, safetyScore: 40 },
  tags: ["startup-hub", "emerging", "affordable", "english-speaking"],
  lastUpdated: "2026-03"
},


{
  id: "lima",
  slug: "lima",
  lat: -12.0464, lng: -77.0428,
  name: "Lima",
  country: "Peru",
  countryCode: "PE",
  continent: "South America",
  currency: "PEN",
  currencySymbol: "S/",
  image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1600",
  description: "South America's culinary capital -- world-class food scene at bargain prices.",
  costs: {
    accommodation: { center: 42, suburb: 26 },
    food: { budget: 7, standard: 16, premium: 45 },
    transport: 28,
    coworking: 95
  },
  visa: {
    type: "Tourist Visa 183 Days",
    remoteFriendly: false,
    stayDurationMonths: 6,
    processingTimeDays: 0,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 30, corporateTax: 29, capitalGainsTax: 5 },
  infrastructure: { publicTransportQuality: 55, healthcareQuality: 62, englishProficiency: 38, airportConnectivity: 75 },
  safety: { safetyIndex: 52, crimeLevel: "Moderate" },
  macro: { inflationRate: 4.5, currencyStability: "Medium", rentVolatilityIndex: 5.5 },
  digitalNomad: { overallScore: 71, wifiSpeed: 70, coworkingCost: 95, safetyScore: 52 },
  tags: ["affordable", "food", "culture", "emerging"],
  lastUpdated: "2026-03"
},

{
  id: "hanoi",
  slug: "hanoi",
  lat: 21.0285, lng: 105.8542,
  name: "Hanoi",
  country: "Vietnam",
  countryCode: "VN",
  continent: "Asia",
  currency: "VND",
  currencySymbol: " ",
  image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1600",
  description: "Vietnam's ancient capital -- slower pace, deep culture and ultra-low costs.",
  costs: {
    accommodation: { center: 32, suburb: 20 },
    food: { budget: 5, standard: 12, premium: 38 },
    transport: 20,
    coworking: 70
  },
  visa: {
    type: "E-Visa 90 Days",
    remoteFriendly: false,
    stayDurationMonths: 3,
    processingTimeDays: 3,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 35, corporateTax: 20, capitalGainsTax: 20 },
  infrastructure: { publicTransportQuality: 55, healthcareQuality: 65, englishProficiency: 40, airportConnectivity: 78 },
  safety: { safetyIndex: 70, crimeLevel: "Low" },
  macro: { inflationRate: 3.5, currencyStability: "Medium", rentVolatilityIndex: 4.5 },
  digitalNomad: { overallScore: 78, wifiSpeed: 75, coworkingCost: 70, safetyScore: 70 },
  tags: ["affordable", "culture", "food", "historic"],
  lastUpdated: "2026-03"
},

{
  id: "montreal",
  slug: "montreal",
  lat: 45.5017, lng: -73.5673,
  name: "Montreal",
  country: "Canada",
  countryCode: "CA",
  continent: "North America",
  currency: "CAD",
  currencySymbol: "C$",
  image: "https://images.unsplash.com/photo-1507992781348-310259076fe0?w=1600",
  description: "North America's most European city -- bilingual, creative and more affordable than Toronto.",
  costs: {
    accommodation: { center: 110, suburb: 72 },
    food: { budget: 17, standard: 36, premium: 85 },
    transport: 90,
    coworking: 280
  },
  visa: {
    type: "Canada Work Permit",
    remoteFriendly: false,
    stayDurationMonths: 6,
    processingTimeDays: 90,
    minIncomeRequirement: 0
  },
  tax: { personalIncomeTaxTopRate: 53, corporateTax: 26, capitalGainsTax: 27 },
  infrastructure: { publicTransportQuality: 80, healthcareQuality: 87, englishProficiency: 95, airportConnectivity: 85 },
  safety: { safetyIndex: 78, crimeLevel: "Low" },
  macro: { inflationRate: 3.2, currencyStability: "High", rentVolatilityIndex: 6.5 },
  digitalNomad: { overallScore: 77, wifiSpeed: 165, coworkingCost: 280, safetyScore: 78 },
  tags: ["affordable", "culture", "startup-hub", "english-speaking"],
  lastUpdated: "2026-03"
},

];
