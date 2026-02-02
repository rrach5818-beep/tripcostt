/**
 * Budget Calculator
 * Calculates travel and living costs based on city data and user preferences
 */

/**
 * Housing type multipliers (daily rate multiplier)
 */
const HOUSING_MULTIPLIERS = {
  hostel: 'hostel',
  budget: 'budget',
  mid: 'mid',
  luxury: 'luxury'
};

/**
 * Lifestyle level affects food and entertainment costs
 */
const LIFESTYLE_LEVELS = {
  budget: 'budget',
  mid: 'mid',
  luxury: 'luxury'
};

/**
 * Calculate detailed monthly budget breakdown
 * @param {Object} city - City object from cityDB
 * @param {Object} options - Calculation options
 * @param {string} options.housingType - 'hostel', 'budget', 'mid', 'luxury'
 * @param {string} options.lifestyle - 'budget', 'mid', 'luxury'
 * @param {boolean} options.includeCoworking - Include coworking costs
 * @param {number} options.daysPerMonth - Days staying (default 30)
 * @returns {Object} - Detailed budget breakdown
 */
export function calculateMonthlyBudget(city, options = {}) {
  const {
    housingType = 'mid',
    lifestyle = 'mid',
    includeCoworking = true,
    daysPerMonth = 30
  } = options;

  const { costs } = city;

  // Accommodation
  const dailyAccommodation = costs.accommodation[housingType] || costs.accommodation.mid;
  const accommodationTotal = dailyAccommodation * daysPerMonth;

  // Food
  const dailyFood = costs.food[lifestyle] || costs.food.mid;
  const foodTotal = dailyFood * daysPerMonth;

  // Transport (assume monthly pass if staying full month)
  const transportTotal = daysPerMonth >= 20 
    ? costs.transport.publicMonthly 
    : costs.transport.taxi * daysPerMonth * 2; // 2 trips per day

  // Coworking
  const coworkingTotal = includeCoworking 
    ? (daysPerMonth >= 15 ? costs.coworking.monthly : costs.coworking.dayPass * daysPerMonth * 0.7)
    : 0;

  // Entertainment
  const entertainmentTotal = costs.entertainment[lifestyle] || costs.entertainment.mid;

  // Calculate totals
  const subtotal = accommodationTotal + foodTotal + transportTotal + coworkingTotal + entertainmentTotal;
  const miscellaneous = Math.round(subtotal * 0.1); // 10% buffer
  const total = subtotal + miscellaneous;

  return {
    breakdown: {
      accommodation: {
        label: 'Accommodation',
        daily: dailyAccommodation,
        total: accommodationTotal,
        type: housingType
      },
      food: {
        label: 'Food & Dining',
        daily: dailyFood,
        total: foodTotal,
        type: lifestyle
      },
      transport: {
        label: 'Transportation',
        total: transportTotal,
        type: daysPerMonth >= 20 ? 'monthly pass' : 'per trip'
      },
      coworking: {
        label: 'Coworking',
        total: coworkingTotal,
        included: includeCoworking
      },
      entertainment: {
        label: 'Entertainment',
        total: entertainmentTotal,
        type: lifestyle
      },
      miscellaneous: {
        label: 'Miscellaneous (10%)',
        total: miscellaneous
      }
    },
    subtotal,
    total,
    currency: city.currency,
    currencySymbol: city.currencySymbol,
    daysPerMonth,
    dailyAverage: Math.round(total / daysPerMonth)
  };
}

/**
 * Compare budgets across multiple cities
 * @param {Array} cities - Array of city objects
 * @param {Object} options - Budget calculation options
 * @returns {Array} - Sorted array of cities with budget info
 */
export function compareBudgets(cities, options = {}) {
  return cities
    .map(city => ({
      city,
      budget: calculateMonthlyBudget(city, options)
    }))
    .sort((a, b) => a.budget.total - b.budget.total);
}

/**
 * Get budget tier label
 * @param {number} monthlyBudget - Monthly budget in USD
 * @returns {Object} - Tier info with label and color
 */
export function getBudgetTier(monthlyBudget) {
  if (monthlyBudget < 1000) {
    return { tier: 'ultra-budget', label: 'Ultra Budget', color: 'success' };
  }
  if (monthlyBudget < 1500) {
    return { tier: 'budget', label: 'Budget Friendly', color: 'success' };
  }
  if (monthlyBudget < 2500) {
    return { tier: 'moderate', label: 'Moderate', color: 'warning' };
  }
  if (monthlyBudget < 4000) {
    return { tier: 'comfortable', label: 'Comfortable', color: 'warning' };
  }
  return { tier: 'premium', label: 'Premium', color: 'error' };
}

/**
 * Format currency amount
 * @param {number} amount - Amount to format
 * @param {string} symbol - Currency symbol
 * @returns {string} - Formatted currency string
 */
export function formatCurrency(amount, symbol = '$') {
  return `${symbol}${amount.toLocaleString()}`;
}

/**
 * Calculate savings compared to a base city
 * @param {Object} baseCity - Base city for comparison
 * @param {Object} compareCity - City to compare
 * @param {Object} options - Budget options
 * @returns {Object} - Savings information
 */
export function calculateSavings(baseCity, compareCity, options = {}) {
  const baseBudget = calculateMonthlyBudget(baseCity, options);
  const compareBudget = calculateMonthlyBudget(compareCity, options);

  const difference = baseBudget.total - compareBudget.total;
  const percentage = Math.round((difference / baseBudget.total) * 100);

  return {
    baseBudget: baseBudget.total,
    compareBudget: compareBudget.total,
    difference,
    percentage,
    savings: difference > 0,
    label: difference > 0 
      ? `Save ${formatCurrency(difference)} (${percentage}%)` 
      : `Costs ${formatCurrency(Math.abs(difference))} more (${Math.abs(percentage)}%)`
  };
}

/**
 * Get available housing types
 * @returns {Array} - Array of housing type options
 */
export function getHousingTypes() {
  return [
    { value: 'hostel', label: 'Hostel / Dorm', description: 'Shared accommodation' },
    { value: 'budget', label: 'Budget Hotel', description: 'Basic private room' },
    { value: 'mid', label: 'Mid-Range Apartment', description: 'Comfortable apartment' },
    { value: 'luxury', label: 'Luxury Apartment', description: 'High-end accommodation' }
  ];
}

/**
 * Get available lifestyle levels
 * @returns {Array} - Array of lifestyle options
 */
export function getLifestyleLevels() {
  return [
    { value: 'budget', label: 'Budget', description: 'Street food, local spots' },
    { value: 'mid', label: 'Comfortable', description: 'Mix of local and nicer places' },
    { value: 'luxury', label: 'Luxury', description: 'Fine dining, premium experiences' }
  ];
}

export default {
  calculateMonthlyBudget,
  compareBudgets,
  getBudgetTier,
  formatCurrency,
  calculateSavings,
  getHousingTypes,
  getLifestyleLevels
};