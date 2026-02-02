/**
 * City Data Contract
 * Defines the expected shape and validation for city data
 */

export const cityContract = {
  id: { type: 'string', required: true },
  slug: { type: 'string', required: true },
  name: { type: 'string', required: true },
  country: { type: 'string', required: true },
  countryCode: { type: 'string', required: true },
  continent: { type: 'string', required: true },
  timezone: { type: 'string', required: true },
  currency: { type: 'string', required: true },
  currencySymbol: { type: 'string', required: true },
  language: { type: 'string', required: true },
  image: { type: 'string', required: true },
  description: { type: 'string', required: true },
  population: { type: 'number', required: true },
  coordinates: {
    type: 'object',
    required: true,
    properties: {
      lat: { type: 'number', required: true },
      lng: { type: 'number', required: true }
    }
  },
  costs: {
    type: 'object',
    required: true,
    properties: {
      accommodation: {
        type: 'object',
        properties: {
          hostel: { type: 'number' },
          budget: { type: 'number' },
          mid: { type: 'number' },
          luxury: { type: 'number' }
        }
      },
      food: {
        type: 'object',
        properties: {
          budget: { type: 'number' },
          mid: { type: 'number' },
          luxury: { type: 'number' }
        }
      },
      transport: {
        type: 'object',
        properties: {
          publicMonthly: { type: 'number' },
          taxi: { type: 'number' },
          uberPerKm: { type: 'number' }
        }
      },
      coworking: {
        type: 'object',
        properties: {
          dayPass: { type: 'number' },
          monthly: { type: 'number' }
        }
      },
      entertainment: {
        type: 'object',
        properties: {
          budget: { type: 'number' },
          mid: { type: 'number' },
          luxury: { type: 'number' }
        }
      }
    }
  },
  digitalNomad: {
    type: 'object',
    required: true,
    properties: {
      overallScore: { type: 'number' },
      internetSpeed: { type: 'number' },
      coworkingSpaces: { type: 'number' },
      cafesWithWifi: { type: 'number' },
      safetyScore: { type: 'number' },
      walkabilityScore: { type: 'number' },
      englishLevel: { type: 'number' },
      visaFriendly: { type: 'boolean' },
      visaInfo: { type: 'string' },
      community: { type: 'string' },
      nightlife: { type: 'number' },
      healthcare: { type: 'number' },
      airQuality: { type: 'number' }
    }
  },
  weather: {
    type: 'object',
    required: true,
    properties: {
      climate: { type: 'string' },
      averageTemp: {
        type: 'object',
        properties: {
          summer: { type: 'number' },
          winter: { type: 'number' }
        }
      },
      rainyDays: { type: 'number' },
      sunnyDays: { type: 'number' }
    }
  },
  tags: { type: 'array', required: true },
  pros: { type: 'array', required: true },
  cons: { type: 'array', required: true }
};

/**
 * Validates a city object against the contract
 * @param {Object} city - City object to validate
 * @returns {Object} - { valid: boolean, errors: string[] }
 */
export function validateCity(city) {
  const errors = [];

  function checkField(obj, key, contract, path = '') {
    const fullPath = path ? `${path}.${key}` : key;
    const fieldContract = contract[key];

    if (!fieldContract) return;

    if (fieldContract.required && (obj[key] === undefined || obj[key] === null)) {
      errors.push(`Missing required field: ${fullPath}`);
      return;
    }

    if (obj[key] === undefined) return;

    const actualType = Array.isArray(obj[key]) ? 'array' : typeof obj[key];
    if (fieldContract.type !== actualType) {
      errors.push(`Invalid type for ${fullPath}: expected ${fieldContract.type}, got ${actualType}`);
    }

    if (fieldContract.type === 'object' && fieldContract.properties) {
      Object.keys(fieldContract.properties).forEach(subKey => {
        checkField(obj[key], subKey, fieldContract.properties, fullPath);
      });
    }
  }

  Object.keys(cityContract).forEach(key => {
    checkField(city, key, cityContract);
  });

  return {
    valid: errors.length === 0,
    errors
  };
}

export default cityContract;