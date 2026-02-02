/**
 * City Database - Single Source of Truth
 * All city data for TripCost application
 */

export const cityDB = [
  {
    id: "new-york",
    slug: "new-york",
    name: "New York",
    country: "United States",
    countryCode: "US",
    continent: "North America",
    timezone: "America/New_York",
    currency: "USD",
    currencySymbol: "$",
    language: "English",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
    description: "The city that never sleeps offers world-class culture, dining, and endless opportunities for digital nomads and travelers alike.",
    population: 8336817,
    coordinates: { lat: 40.7128, lng: -74.006 },
    costs: {
      accommodation: {
        hostel: 50,
        budget: 120,
        mid: 220,
        luxury: 450
      },
      food: {
        budget: 25,
        mid: 50,
        luxury: 120
      },
      transport: {
        publicMonthly: 127,
        taxi: 15,
        uberPerKm: 2.5
      },
      coworking: {
        dayPass: 45,
        monthly: 450
      },
      entertainment: {
        budget: 50,
        mid: 150,
        luxury: 400
      }
    },
    digitalNomad: {
      overallScore: 72,
      internetSpeed: 150,
      coworkingSpaces: 450,
      cafesWithWifi: 2500,
      safetyScore: 75,
      walkabilityScore: 89,
      englishLevel: 100,
      visaFriendly: true,
      visaInfo: "B1/B2 visa or ESTA for up to 90 days",
      community: "large",
      nightlife: 95,
      healthcare: 85,
      airQuality: 65
    },
    weather: {
      climate: "Humid subtropical",
      averageTemp: { summer: 28, winter: 2 },
      rainyDays: 119,
      sunnyDays: 224
    },
    tags: ["startup-hub", "finance", "arts", "nightlife", "diverse"],
    pros: ["World-class networking", "Excellent public transit", "Cultural diversity", "Career opportunities"],
    cons: ["Very high cost of living", "Crowded", "Harsh winters", "Small living spaces"]
  },
  {
    id: "tokyo",
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    countryCode: "JP",
    continent: "Asia",
    timezone: "Asia/Tokyo",
    currency: "JPY",
    currencySymbol: "¥",
    language: "Japanese",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    description: "A fascinating blend of ultra-modern technology and ancient traditions, offering exceptional safety and efficiency.",
    population: 13960000,
    coordinates: { lat: 35.6762, lng: 139.6503 },
    costs: {
      accommodation: {
        hostel: 30,
        budget: 70,
        mid: 150,
        luxury: 400
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 100
      },
      transport: {
        publicMonthly: 100,
        taxi: 8,
        uberPerKm: 3
      },
      coworking: {
        dayPass: 25,
        monthly: 300
      },
      entertainment: {
        budget: 30,
        mid: 80,
        luxury: 250
      }
    },
    digitalNomad: {
      overallScore: 78,
      internetSpeed: 180,
      coworkingSpaces: 380,
      cafesWithWifi: 1800,
      safetyScore: 95,
      walkabilityScore: 85,
      englishLevel: 45,
      visaFriendly: true,
      visaInfo: "90-day visa-free for many countries, digital nomad visa available",
      community: "medium",
      nightlife: 88,
      healthcare: 95,
      airQuality: 75
    },
    weather: {
      climate: "Humid subtropical",
      averageTemp: { summer: 30, winter: 6 },
      rainyDays: 100,
      sunnyDays: 190
    },
    tags: ["tech-hub", "safe", "food", "culture", "efficient"],
    pros: ["Extremely safe", "Efficient transport", "Amazing food", "Clean streets"],
    cons: ["Language barrier", "Small apartments", "Work culture", "Earthquakes"]
  },
  {
    id: "lisbon",
    slug: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    countryCode: "PT",
    continent: "Europe",
    timezone: "Europe/Lisbon",
    currency: "EUR",
    currencySymbol: "€",
    language: "Portuguese",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800",
    description: "Europe's digital nomad capital with perfect weather, vibrant culture, and affordable Mediterranean lifestyle.",
    population: 544851,
    coordinates: { lat: 38.7223, lng: -9.1393 },
    costs: {
      accommodation: {
        hostel: 20,
        budget: 50,
        mid: 100,
        luxury: 250
      },
      food: {
        budget: 12,
        mid: 25,
        luxury: 70
      },
      transport: {
        publicMonthly: 40,
        taxi: 5,
        uberPerKm: 0.8
      },
      coworking: {
        dayPass: 20,
        monthly: 200
      },
      entertainment: {
        budget: 25,
        mid: 60,
        luxury: 150
      }
    },
    digitalNomad: {
      overallScore: 88,
      internetSpeed: 120,
      coworkingSpaces: 150,
      cafesWithWifi: 800,
      safetyScore: 85,
      walkabilityScore: 78,
      englishLevel: 75,
      visaFriendly: true,
      visaInfo: "D7 visa for remote workers, Schengen 90-day rule applies",
      community: "large",
      nightlife: 82,
      healthcare: 80,
      airQuality: 85
    },
    weather: {
      climate: "Mediterranean",
      averageTemp: { summer: 28, winter: 12 },
      rainyDays: 60,
      sunnyDays: 290
    },
    tags: ["nomad-friendly", "affordable", "beach", "startup", "culture"],
    pros: ["Great weather", "Strong nomad community", "Affordable", "English widely spoken"],
    cons: ["Rising prices", "Hills everywhere", "Bureaucracy", "Tourist crowds"]
  },
  {
    id: "bali",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    countryCode: "ID",
    continent: "Asia",
    timezone: "Asia/Makassar",
    currency: "IDR",
    currencySymbol: "Rp",
    language: "Indonesian",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    description: "Tropical paradise with a thriving digital nomad scene, amazing nature, and incredibly low cost of living.",
    population: 4320000,
    coordinates: { lat: -8.3405, lng: 115.092 },
    costs: {
      accommodation: {
        hostel: 8,
        budget: 25,
        mid: 60,
        luxury: 200
      },
      food: {
        budget: 5,
        mid: 15,
        luxury: 50
      },
      transport: {
        publicMonthly: 50,
        taxi: 3,
        uberPerKm: 0.5
      },
      coworking: {
        dayPass: 12,
        monthly: 150
      },
      entertainment: {
        budget: 15,
        mid: 40,
        luxury: 120
      }
    },
    digitalNomad: {
      overallScore: 85,
      internetSpeed: 50,
      coworkingSpaces: 120,
      cafesWithWifi: 500,
      safetyScore: 75,
      walkabilityScore: 35,
      englishLevel: 60,
      visaFriendly: true,
      visaInfo: "30-60 day visa on arrival, extendable; B211A remote worker visa",
      community: "large",
      nightlife: 75,
      healthcare: 60,
      airQuality: 70
    },
    weather: {
      climate: "Tropical",
      averageTemp: { summer: 30, winter: 27 },
      rainyDays: 115,
      sunnyDays: 250
    },
    tags: ["tropical", "affordable", "nomad-hub", "nature", "spiritual"],
    pros: ["Very affordable", "Beautiful nature", "Strong community", "Tropical weather"],
    cons: ["Slow internet", "Need scooter", "Visa runs", "Rainy season"]
  },
  {
    id: "berlin",
    slug: "berlin",
    name: "Berlin",
    country: "Germany",
    countryCode: "DE",
    continent: "Europe",
    timezone: "Europe/Berlin",
    currency: "EUR",
    currencySymbol: "€",
    language: "German",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800",
    description: "Creative capital of Europe with a thriving tech scene, legendary nightlife, and relatively affordable living.",
    population: 3645000,
    coordinates: { lat: 52.52, lng: 13.405 },
    costs: {
      accommodation: {
        hostel: 25,
        budget: 60,
        mid: 120,
        luxury: 280
      },
      food: {
        budget: 12,
        mid: 30,
        luxury: 80
      },
      transport: {
        publicMonthly: 86,
        taxi: 8,
        uberPerKm: 1.5
      },
      coworking: {
        dayPass: 25,
        monthly: 250
      },
      entertainment: {
        budget: 30,
        mid: 70,
        luxury: 180
      }
    },
    digitalNomad: {
      overallScore: 82,
      internetSpeed: 100,
      coworkingSpaces: 280,
      cafesWithWifi: 1200,
      safetyScore: 80,
      walkabilityScore: 82,
      englishLevel: 85,
      visaFriendly: true,
      visaInfo: "Freelance visa available, Schengen 90-day rule applies",
      community: "large",
      nightlife: 98,
      healthcare: 90,
      airQuality: 78
    },
    weather: {
      climate: "Oceanic",
      averageTemp: { summer: 23, winter: 1 },
      rainyDays: 106,
      sunnyDays: 165
    },
    tags: ["tech-hub", "creative", "nightlife", "startup", "affordable"],
    pros: ["Vibrant culture", "Tech ecosystem", "English friendly", "Great nightlife"],
    cons: ["Cold winters", "Bureaucracy", "Housing shortage", "Gray weather"]
  },
  {
    id: "bangkok",
    slug: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    countryCode: "TH",
    continent: "Asia",
    timezone: "Asia/Bangkok",
    currency: "THB",
    currencySymbol: "฿",
    language: "Thai",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
    description: "Vibrant metropolis offering incredible value, amazing street food, and a well-established digital nomad infrastructure.",
    population: 10539000,
    coordinates: { lat: 13.7563, lng: 100.5018 },
    costs: {
      accommodation: {
        hostel: 8,
        budget: 30,
        mid: 70,
        luxury: 180
      },
      food: {
        budget: 5,
        mid: 15,
        luxury: 45
      },
      transport: {
        publicMonthly: 45,
        taxi: 3,
        uberPerKm: 0.6
      },
      coworking: {
        dayPass: 15,
        monthly: 180
      },
      entertainment: {
        budget: 20,
        mid: 50,
        luxury: 150
      }
    },
    digitalNomad: {
      overallScore: 84,
      internetSpeed: 80,
      coworkingSpaces: 200,
      cafesWithWifi: 1500,
      safetyScore: 70,
      walkabilityScore: 55,
      englishLevel: 55,
      visaFriendly: true,
      visaInfo: "60-day visa on arrival, LTR visa for remote workers",
      community: "large",
      nightlife: 90,
      healthcare: 85,
      airQuality: 45
    },
    weather: {
      climate: "Tropical savanna",
      averageTemp: { summer: 35, winter: 28 },
      rainyDays: 130,
      sunnyDays: 200
    },
    tags: ["affordable", "food", "culture", "nightlife", "travel-hub"],
    pros: ["Very affordable", "Amazing food", "Good healthcare", "Travel hub"],
    cons: ["Air pollution", "Traffic", "Hot weather", "Language barrier"]
  },
  {
    id: "barcelona",
    slug: "barcelona",
    name: "Barcelona",
    country: "Spain",
    countryCode: "ES",
    continent: "Europe",
    timezone: "Europe/Madrid",
    currency: "EUR",
    currencySymbol: "€",
    language: "Spanish",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800",
    description: "Mediterranean gem combining beach life with urban culture, world-class architecture, and a vibrant tech scene.",
    population: 1620343,
    coordinates: { lat: 41.3851, lng: 2.1734 },
    costs: {
      accommodation: {
        hostel: 25,
        budget: 70,
        mid: 140,
        luxury: 350
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 90
      },
      transport: {
        publicMonthly: 55,
        taxi: 8,
        uberPerKm: 1.2
      },
      coworking: {
        dayPass: 25,
        monthly: 280
      },
      entertainment: {
        budget: 30,
        mid: 80,
        luxury: 200
      }
    },
    digitalNomad: {
      overallScore: 80,
      internetSpeed: 100,
      coworkingSpaces: 180,
      cafesWithWifi: 900,
      safetyScore: 75,
      walkabilityScore: 88,
      englishLevel: 65,
      visaFriendly: true,
      visaInfo: "Digital nomad visa available, Schengen 90-day rule",
      community: "medium",
      nightlife: 85,
      healthcare: 85,
      airQuality: 72
    },
    weather: {
      climate: "Mediterranean",
      averageTemp: { summer: 28, winter: 10 },
      rainyDays: 55,
      sunnyDays: 280
    },
    tags: ["beach", "culture", "food", "design", "walkable"],
    pros: ["Beach + city", "Great weather", "Walkable", "Rich culture"],
    cons: ["Tourist crowds", "Pickpockets", "Rising costs", "Siesta hours"]
  },
  {
    id: "mexico-city",
    slug: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    countryCode: "MX",
    continent: "North America",
    timezone: "America/Mexico_City",
    currency: "MXN",
    currencySymbol: "$",
    language: "Spanish",
    image: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=800",
    description: "Massive metropolis with incredible food, rich culture, affordable living, and a growing remote work scene.",
    population: 21900000,
    coordinates: { lat: 19.4326, lng: -99.1332 },
    costs: {
      accommodation: {
        hostel: 12,
        budget: 35,
        mid: 80,
        luxury: 200
      },
      food: {
        budget: 8,
        mid: 20,
        luxury: 60
      },
      transport: {
        publicMonthly: 20,
        taxi: 4,
        uberPerKm: 0.5
      },
      coworking: {
        dayPass: 15,
        monthly: 180
      },
      entertainment: {
        budget: 20,
        mid: 50,
        luxury: 150
      }
    },
    digitalNomad: {
      overallScore: 83,
      internetSpeed: 70,
      coworkingSpaces: 160,
      cafesWithWifi: 1200,
      safetyScore: 55,
      walkabilityScore: 72,
      englishLevel: 50,
      visaFriendly: true,
      visaInfo: "180-day visa-free entry for most countries",
      community: "large",
      nightlife: 88,
      healthcare: 75,
      airQuality: 50
    },
    weather: {
      climate: "Subtropical highland",
      averageTemp: { summer: 22, winter: 15 },
      rainyDays: 120,
      sunnyDays: 230
    },
    tags: ["affordable", "food", "culture", "US-timezone", "art"],
    pros: ["Very affordable", "US timezone", "Amazing food", "Rich culture"],
    cons: ["Safety concerns", "Air quality", "Traffic", "Altitude sickness"]
  },
  {
    id: "chiang-mai",
    slug: "chiang-mai",
    name: "Chiang Mai",
    country: "Thailand",
    countryCode: "TH",
    continent: "Asia",
    timezone: "Asia/Bangkok",
    currency: "THB",
    currencySymbol: "฿",
    language: "Thai",
    image: "https://images.unsplash.com/photo-1512553219401-bc84ef7e3268?w=800",
    description: "The original digital nomad hub with unbeatable value, strong community, and laid-back mountain atmosphere.",
    population: 127000,
    coordinates: { lat: 18.7883, lng: 98.9853 },
    costs: {
      accommodation: {
        hostel: 6,
        budget: 20,
        mid: 45,
        luxury: 120
      },
      food: {
        budget: 4,
        mid: 10,
        luxury: 35
      },
      transport: {
        publicMonthly: 30,
        taxi: 2,
        uberPerKm: 0.4
      },
      coworking: {
        dayPass: 8,
        monthly: 100
      },
      entertainment: {
        budget: 15,
        mid: 35,
        luxury: 100
      }
    },
    digitalNomad: {
      overallScore: 90,
      internetSpeed: 60,
      coworkingSpaces: 80,
      cafesWithWifi: 400,
      safetyScore: 85,
      walkabilityScore: 45,
      englishLevel: 50,
      visaFriendly: true,
      visaInfo: "60-day visa on arrival, LTR visa available",
      community: "large",
      nightlife: 60,
      healthcare: 80,
      airQuality: 55
    },
    weather: {
      climate: "Tropical savanna",
      averageTemp: { summer: 32, winter: 22 },
      rainyDays: 100,
      sunnyDays: 240
    },
    tags: ["nomad-hub", "affordable", "temples", "mountains", "relaxed"],
    pros: ["Ultra affordable", "Great community", "Relaxed vibe", "Nature access"],
    cons: ["Burning season", "Need transport", "Small city", "Limited nightlife"]
  },
  {
    id: "dubai",
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    continent: "Asia",
    timezone: "Asia/Dubai",
    currency: "AED",
    currencySymbol: "د.إ",
    language: "Arabic",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    description: "Ultra-modern city with world-class infrastructure, tax-free income, and a growing tech ecosystem.",
    population: 3400000,
    coordinates: { lat: 25.2048, lng: 55.2708 },
    costs: {
      accommodation: {
        hostel: 30,
        budget: 80,
        mid: 180,
        luxury: 500
      },
      food: {
        budget: 15,
        mid: 40,
        luxury: 120
      },
      transport: {
        publicMonthly: 80,
        taxi: 10,
        uberPerKm: 1.8
      },
      coworking: {
        dayPass: 35,
        monthly: 400
      },
      entertainment: {
        budget: 40,
        mid: 100,
        luxury: 350
      }
    },
    digitalNomad: {
      overallScore: 70,
      internetSpeed: 200,
      coworkingSpaces: 150,
      cafesWithWifi: 600,
      safetyScore: 95,
      walkabilityScore: 35,
      englishLevel: 90,
      visaFriendly: true,
      visaInfo: "1-year virtual working visa available",
      community: "medium",
      nightlife: 70,
      healthcare: 90,
      airQuality: 60
    },
    weather: {
      climate: "Hot desert",
      averageTemp: { summer: 42, winter: 20 },
      rainyDays: 5,
      sunnyDays: 355
    },
    tags: ["luxury", "tax-free", "modern", "safe", "business-hub"],
    pros: ["Tax-free income", "Ultra safe", "Modern infrastructure", "English common"],
    cons: ["Expensive", "Extreme heat", "Car dependent", "Cultural restrictions"]
  },
  {
    id: "london",
    slug: "london",
    name: "London",
    country: "United Kingdom",
    countryCode: "GB",
    continent: "Europe",
    timezone: "Europe/London",
    currency: "GBP",
    currencySymbol: "£",
    language: "English",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    description: "Global business capital with unmatched cultural offerings, diverse communities, and excellent connectivity.",
    population: 8982000,
    coordinates: { lat: 51.5074, lng: -0.1278 },
    costs: {
      accommodation: {
        hostel: 40,
        budget: 100,
        mid: 200,
        luxury: 500
      },
      food: {
        budget: 20,
        mid: 45,
        luxury: 120
      },
      transport: {
        publicMonthly: 170,
        taxi: 15,
        uberPerKm: 2
      },
      coworking: {
        dayPass: 40,
        monthly: 450
      },
      entertainment: {
        budget: 40,
        mid: 100,
        luxury: 350
      }
    },
    digitalNomad: {
      overallScore: 74,
      internetSpeed: 120,
      coworkingSpaces: 500,
      cafesWithWifi: 2000,
      safetyScore: 75,
      walkabilityScore: 90,
      englishLevel: 100,
      visaFriendly: false,
      visaInfo: "Strict visa requirements, limited remote work options",
      community: "large",
      nightlife: 92,
      healthcare: 85,
      airQuality: 65
    },
    weather: {
      climate: "Oceanic",
      averageTemp: { summer: 22, winter: 5 },
      rainyDays: 109,
      sunnyDays: 135
    },
    tags: ["business-hub", "culture", "diverse", "finance", "history"],
    pros: ["Global connectivity", "Cultural offerings", "English speaking", "Career opportunities"],
    cons: ["Very expensive", "Gray weather", "Visa restrictions", "Crowded"]
  },
  {
    id: "buenos-aires",
    slug: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    countryCode: "AR",
    continent: "South America",
    timezone: "America/Buenos_Aires",
    currency: "ARS",
    currencySymbol: "$",
    language: "Spanish",
    image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800",
    description: "European flair in South America with incredible value for USD earners, rich culture, and passionate nightlife.",
    population: 15490000,
    coordinates: { lat: -34.6037, lng: -58.3816 },
    costs: {
      accommodation: {
        hostel: 10,
        budget: 25,
        mid: 60,
        luxury: 150
      },
      food: {
        budget: 6,
        mid: 15,
        luxury: 45
      },
      transport: {
        publicMonthly: 15,
        taxi: 3,
        uberPerKm: 0.4
      },
      coworking: {
        dayPass: 12,
        monthly: 120
      },
      entertainment: {
        budget: 15,
        mid: 35,
        luxury: 100
      }
    },
    digitalNomad: {
      overallScore: 81,
      internetSpeed: 60,
      coworkingSpaces: 100,
      cafesWithWifi: 800,
      safetyScore: 55,
      walkabilityScore: 85,
      englishLevel: 45,
      visaFriendly: true,
      visaInfo: "90-day visa-free, easy renewals via border runs",
      community: "medium",
      nightlife: 95,
      healthcare: 75,
      airQuality: 70
    },
    weather: {
      climate: "Humid subtropical",
      averageTemp: { summer: 28, winter: 11 },
      rainyDays: 95,
      sunnyDays: 240
    },
    tags: ["affordable", "culture", "nightlife", "food", "european-feel"],
    pros: ["Very affordable", "Rich culture", "Great food", "Late lifestyle"],
    cons: ["Safety concerns", "Economic instability", "Language barrier", "Air quality"]
  },
  {
    id: "singapore",
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    continent: "Asia",
    timezone: "Asia/Singapore",
    currency: "SGD",
    currencySymbol: "S$",
    language: "English",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
    description: "Ultra-efficient city-state with world-class infrastructure, diverse culture, and Asia's startup hub.",
    population: 5690000,
    coordinates: { lat: 1.3521, lng: 103.8198 },
    costs: {
      accommodation: {
        hostel: 25,
        budget: 80,
        mid: 180,
        luxury: 400
      },
      food: {
        budget: 8,
        mid: 25,
        luxury: 80
      },
      transport: {
        publicMonthly: 80,
        taxi: 10,
        uberPerKm: 1
      },
      coworking: {
        dayPass: 35,
        monthly: 400
      },
      entertainment: {
        budget: 30,
        mid: 80,
        luxury: 250
      }
    },
    digitalNomad: {
      overallScore: 76,
      internetSpeed: 250,
      coworkingSpaces: 200,
      cafesWithWifi: 700,
      safetyScore: 97,
      walkabilityScore: 80,
      englishLevel: 95,
      visaFriendly: true,
      visaInfo: "30-90 day visa-free, Tech.Pass for entrepreneurs",
      community: "medium",
      nightlife: 70,
      healthcare: 95,
      airQuality: 70
    },
    weather: {
      climate: "Tropical rainforest",
      averageTemp: { summer: 31, winter: 27 },
      rainyDays: 167,
      sunnyDays: 180
    },
    tags: ["efficient", "safe", "startup-hub", "clean", "diverse"],
    pros: ["Extremely safe", "Efficient systems", "English speaking", "Great food"],
    cons: ["Expensive", "Hot and humid", "Strict laws", "Small country"]
  },
  {
    id: "ho-chi-minh",
    slug: "ho-chi-minh",
    name: "Ho Chi Minh City",
    country: "Vietnam",
    countryCode: "VN",
    continent: "Asia",
    timezone: "Asia/Ho_Chi_Minh",
    currency: "VND",
    currencySymbol: "₫",
    language: "Vietnamese",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
    description: "Fast-growing city with incredible energy, affordable living, and a rapidly expanding nomad scene.",
    population: 8993000,
    coordinates: { lat: 10.8231, lng: 106.6297 },
    costs: {
      accommodation: {
        hostel: 6,
        budget: 20,
        mid: 50,
        luxury: 150
      },
      food: {
        budget: 4,
        mid: 10,
        luxury: 35
      },
      transport: {
        publicMonthly: 20,
        taxi: 2,
        uberPerKm: 0.3
      },
      coworking: {
        dayPass: 10,
        monthly: 120
      },
      entertainment: {
        budget: 15,
        mid: 35,
        luxury: 100
      }
    },
    digitalNomad: {
      overallScore: 82,
      internetSpeed: 55,
      coworkingSpaces: 90,
      cafesWithWifi: 600,
      safetyScore: 75,
      walkabilityScore: 50,
      englishLevel: 45,
      visaFriendly: true,
      visaInfo: "E-visa available, 3-month business visa options",
      community: "medium",
      nightlife: 80,
      healthcare: 70,
      airQuality: 45
    },
    weather: {
      climate: "Tropical savanna",
      averageTemp: { summer: 32, winter: 27 },
      rainyDays: 140,
      sunnyDays: 200
    },
    tags: ["affordable", "food", "energetic", "growing", "coffee"],
    pros: ["Very affordable", "Amazing coffee", "Energetic city", "Great food"],
    cons: ["Chaotic traffic", "Air pollution", "Language barrier", "Visa complexity"]
  },
  {
    id: "amsterdam",
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    countryCode: "NL",
    continent: "Europe",
    timezone: "Europe/Amsterdam",
    currency: "EUR",
    currencySymbol: "€",
    language: "Dutch",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800",
    description: "Liberal haven with excellent English, bike-friendly streets, and a thriving tech and creative scene.",
    population: 872680,
    coordinates: { lat: 52.3676, lng: 4.9041 },
    costs: {
      accommodation: {
        hostel: 35,
        budget: 90,
        mid: 180,
        luxury: 400
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 90
      },
      transport: {
        publicMonthly: 100,
        taxi: 12,
        uberPerKm: 2
      },
      coworking: {
        dayPass: 30,
        monthly: 350
      },
      entertainment: {
        budget: 30,
        mid: 80,
        luxury: 200
      }
    },
    digitalNomad: {
      overallScore: 79,
      internetSpeed: 130,
      coworkingSpaces: 150,
      cafesWithWifi: 600,
      safetyScore: 80,
      walkabilityScore: 92,
      englishLevel: 95,
      visaFriendly: true,
      visaInfo: "DAFT treaty for Americans, Schengen 90-day rule",
      community: "medium",
      nightlife: 85,
      healthcare: 88,
      airQuality: 75
    },
    weather: {
      climate: "Oceanic",
      averageTemp: { summer: 21, winter: 4 },
      rainyDays: 130,
      sunnyDays: 160
    },
    tags: ["bike-friendly", "liberal", "english-speaking", "design", "tech"],
    pros: ["Everyone speaks English", "Bike culture", "Liberal policies", "Tech scene"],
    cons: ["Expensive", "Rainy weather", "Housing shortage", "Tourist crowds"]
  },
  {
    id: "medellin",
    slug: "medellin",
    name: "Medellín",
    country: "Colombia",
    countryCode: "CO",
    continent: "South America",
    timezone: "America/Bogota",
    currency: "COP",
    currencySymbol: "$",
    language: "Spanish",
    image: "https://images.unsplash.com/photo-1599413987323-b2b8e2b47ab5?w=800",
    description: "City of eternal spring with perfect weather, affordable living, and a booming digital nomad scene.",
    population: 2533424,
    coordinates: { lat: 6.2476, lng: -75.5658 },
    costs: {
      accommodation: {
        hostel: 10,
        budget: 30,
        mid: 70,
        luxury: 180
      },
      food: {
        budget: 6,
        mid: 15,
        luxury: 45
      },
      transport: {
        publicMonthly: 30,
        taxi: 3,
        uberPerKm: 0.5
      },
      coworking: {
        dayPass: 12,
        monthly: 150
      },
      entertainment: {
        budget: 15,
        mid: 40,
        luxury: 120
      }
    },
    digitalNomad: {
      overallScore: 84,
      internetSpeed: 50,
      coworkingSpaces: 80,
      cafesWithWifi: 400,
      safetyScore: 60,
      walkabilityScore: 70,
      englishLevel: 35,
      visaFriendly: true,
      visaInfo: "90-day visa-free, digital nomad visa available",
      community: "large",
      nightlife: 88,
      healthcare: 75,
      airQuality: 65
    },
    weather: {
      climate: "Subtropical highland",
      averageTemp: { summer: 24, winter: 22 },
      rainyDays: 180,
      sunnyDays: 160
    },
    tags: ["eternal-spring", "affordable", "nomad-hub", "nightlife", "mountains"],
    pros: ["Perfect weather", "Very affordable", "Great nightlife", "Growing scene"],
    cons: ["Safety concerns", "Language barrier", "Past reputation", "Rainy afternoons"]
  },
  {
    id: "prague",
    slug: "prague",
    name: "Prague",
    country: "Czech Republic",
    countryCode: "CZ",
    continent: "Europe",
    timezone: "Europe/Prague",
    currency: "CZK",
    currencySymbol: "Kč",
    language: "Czech",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800",
    description: "Fairytale European capital with affordable living, rich history, and a growing tech ecosystem.",
    population: 1309000,
    coordinates: { lat: 50.0755, lng: 14.4378 },
    costs: {
      accommodation: {
        hostel: 15,
        budget: 45,
        mid: 100,
        luxury: 250
      },
      food: {
        budget: 10,
        mid: 25,
        luxury: 65
      },
      transport: {
        publicMonthly: 25,
        taxi: 6,
        uberPerKm: 0.8
      },
      coworking: {
        dayPass: 18,
        monthly: 200
      },
      entertainment: {
        budget: 20,
        mid: 50,
        luxury: 150
      }
    },
    digitalNomad: {
      overallScore: 77,
      internetSpeed: 90,
      coworkingSpaces: 100,
      cafesWithWifi: 500,
      safetyScore: 85,
      walkabilityScore: 88,
      englishLevel: 70,
      visaFriendly: true,
      visaInfo: "Zivno visa for freelancers, Schengen 90-day rule",
      community: "medium",
      nightlife: 80,
      healthcare: 82,
      airQuality: 72
    },
    weather: {
      climate: "Oceanic",
      averageTemp: { summer: 23, winter: 0 },
      rainyDays: 100,
      sunnyDays: 170
    },
    tags: ["historic", "affordable", "beer", "architecture", "central-europe"],
    pros: ["Affordable for Europe", "Beautiful city", "Central location", "Good transit"],
    cons: ["Cold winters", "Tourist center crowded", "Language barrier", "Rising prices"]
  },
  {
    id: "seoul",
    slug: "seoul",
    name: "Seoul",
    country: "South Korea",
    countryCode: "KR",
    continent: "Asia",
    timezone: "Asia/Seoul",
    currency: "KRW",
    currencySymbol: "₩",
    language: "Korean",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800",
    description: "High-tech metropolis with blazing fast internet, incredible food, and unique urban culture.",
    population: 9776000,
    coordinates: { lat: 37.5665, lng: 126.978 },
    costs: {
      accommodation: {
        hostel: 20,
        budget: 50,
        mid: 110,
        luxury: 280
      },
      food: {
        budget: 8,
        mid: 20,
        luxury: 60
      },
      transport: {
        publicMonthly: 50,
        taxi: 5,
        uberPerKm: 1
      },
      coworking: {
        dayPass: 20,
        monthly: 250
      },
      entertainment: {
        budget: 25,
        mid: 60,
        luxury: 180
      }
    },
    digitalNomad: {
      overallScore: 75,
      internetSpeed: 250,
      coworkingSpaces: 180,
      cafesWithWifi: 3000,
      safetyScore: 90,
      walkabilityScore: 82,
      englishLevel: 50,
      visaFriendly: true,
      visaInfo: "90-day visa-free for most, workcation visa available",
      community: "small",
      nightlife: 90,
      healthcare: 92,
      airQuality: 55
    },
    weather: {
      climate: "Humid continental",
      averageTemp: { summer: 28, winter: -2 },
      rainyDays: 95,
      sunnyDays: 195
    },
    tags: ["tech-hub", "fast-internet", "food", "K-culture", "modern"],
    pros: ["Fastest internet", "Amazing food", "Very safe", "Excellent transit"],
    cons: ["Language barrier", "Air quality", "Work culture", "Cold winters"]
  },
  {
    id: "cape-town",
    slug: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    countryCode: "ZA",
    continent: "Africa",
    timezone: "Africa/Johannesburg",
    currency: "ZAR",
    currencySymbol: "R",
    language: "English",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800",
    description: "Stunning natural beauty, affordable for USD earners, with a growing tech and creative community.",
    population: 4618000,
    coordinates: { lat: -33.9249, lng: 18.4241 },
    costs: {
      accommodation: {
        hostel: 12,
        budget: 35,
        mid: 80,
        luxury: 200
      },
      food: {
        budget: 8,
        mid: 20,
        luxury: 55
      },
      transport: {
        publicMonthly: 45,
        taxi: 5,
        uberPerKm: 0.6
      },
      coworking: {
        dayPass: 15,
        monthly: 180
      },
      entertainment: {
        budget: 20,
        mid: 50,
        luxury: 150
      }
    },
    digitalNomad: {
      overallScore: 73,
      internetSpeed: 45,
      coworkingSpaces: 60,
      cafesWithWifi: 300,
      safetyScore: 45,
      walkabilityScore: 40,
      englishLevel: 95,
      visaFriendly: true,
      visaInfo: "90-day visa-free for most Western countries",
      community: "small",
      nightlife: 75,
      healthcare: 70,
      airQuality: 85
    },
    weather: {
      climate: "Mediterranean",
      averageTemp: { summer: 26, winter: 12 },
      rainyDays: 60,
      sunnyDays: 280
    },
    tags: ["nature", "affordable", "english-speaking", "wine", "adventure"],
    pros: ["Stunning nature", "Affordable", "English speaking", "Great weather"],
    cons: ["Safety concerns", "Load shedding", "Car needed", "Far from everywhere"]
  }
];

export default cityDB;