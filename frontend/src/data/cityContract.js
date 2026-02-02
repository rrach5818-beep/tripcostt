export const cityContract = {
  id: { type: 'string', required: true },
  slug: { type: 'string', required: true },
  name: { type: 'string', required: true },
  country: { type: 'string', required: true },
  countryCode: { type: 'string', required: true },
  continent: { type: 'string', required: true },
  currency: { type: 'string', required: true },
  currencySymbol: { type: 'string', required: true },
  image: { type: 'string', required: true },
  description: { type: 'string', required: true },
  costs: {
    type: 'object',
    required: true,
    properties: {
      accommodation: {
        type: 'object',
        properties: {
          center: { type: 'number' },
          suburb: { type: 'number' }
        }
      },
      food: {
        type: 'object',
        properties: {
          budget: { type: 'number' },
          standard: { type: 'number' },
          premium: { type: 'number' }
        }
      },
      transport: { type: 'number' },
      coworking: { type: 'number' }
    }
  },
  digitalNomad: {
    type: 'object',
    required: true,
    properties: {
      overallScore: { type: 'number' },
      wifiSpeed: { type: 'number' },
      coworkingCost: { type: 'number' },
      safetyScore: { type: 'number' }
    }
  },
  tags: { type: 'array', required: true }
};

export function validateCity(city) {
  const errors = [];
  
  if (!city.id) errors.push('Missing id');
  if (!city.slug) errors.push('Missing slug');
  if (!city.name) errors.push('Missing name');
  if (!city.costs) errors.push('Missing costs');
  if (!city.digitalNomad) errors.push('Missing digitalNomad');
  
  return {
    valid: errors.length === 0,
    errors
  };
}

export default cityContract;
