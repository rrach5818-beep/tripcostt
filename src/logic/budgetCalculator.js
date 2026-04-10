/**
 * Budget Calculator
 * Calculates monthly costs based on city, housing, and lifestyle
 */

export function calculateMonthlyBudget(city, options = {}) {
  const {
    housing = 'center',
    lifestyle = 'standard',
    daysPerMonth = 30
  } = options;

  const { costs, currencySymbol } = city;

  const dailyAccommodation = costs.accommodation[housing] || costs.accommodation.center;
  const accommodationTotal = dailyAccommodation * daysPerMonth;

  const dailyFood = costs.food[lifestyle] || costs.food.standard;
  const foodTotal = dailyFood * daysPerMonth;

  const transportTotal = costs.transport;
  const coworkingTotal = costs.coworking;

  const subtotal = accommodationTotal + foodTotal + transportTotal + coworkingTotal;
  const miscellaneous = Math.round(subtotal * 0.1);
  const total = subtotal + miscellaneous;

  return {
    breakdown: {
      accommodation: {
        label: 'Accommodation',
        daily: dailyAccommodation,
        total: accommodationTotal,
        type: housing
      },
      food: {
        label: 'Food & Dining',
        daily: dailyFood,
        total: foodTotal,
        type: lifestyle
      },
      transport: {
        label: 'Transportation',
        total: transportTotal
      },
      coworking: {
        label: 'Coworking',
        total: coworkingTotal
      },
      miscellaneous: {
        label: 'Miscellaneous (10%)',
        total: miscellaneous
      }
    },
    subtotal,
    total,
    currencySymbol,
    daysPerMonth,
    dailyAverage: Math.round(total / daysPerMonth)
  };
}

export function formatCurrency(amount, symbol = '$') {
  return `${symbol}${amount.toLocaleString()}`;
}

export function getBudgetTier(monthlyBudget) {
  if (monthlyBudget < 1000) {
    return { tier: 'budget', label: 'Budget', color: 'success' };
  }
  if (monthlyBudget < 2000) {
    return { tier: 'moderate', label: 'Moderate', color: 'success' };
  }
  if (monthlyBudget < 3500) {
    return { tier: 'comfortable', label: 'Comfortable', color: 'warning' };
  }
  return { tier: 'premium', label: 'Premium', color: 'error' };
}

export function getHousingTypes() {
  return [
    { value: 'center', label: 'City Center' },
    { value: 'suburb', label: 'Suburb / Outside Center' }
  ];
}

export function getLifestyleLevels() {
  return [
    { value: 'budget', label: 'Budget' },
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' }
  ];
}

export default {
  calculateMonthlyBudget,
  formatCurrency,
  getBudgetTier,
  getHousingTypes,
  getLifestyleLevels
};
