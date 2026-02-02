/**
 * Score Calculator
 * Calculates and normalizes various scores for cities
 */

/**
 * Weight configuration for overall nomad score calculation
 */
const SCORE_WEIGHTS = {
  internetSpeed: 0.15,
  safetyScore: 0.15,
  cost: 0.20,
  community: 0.10,
  walkabilityScore: 0.08,
  englishLevel: 0.10,
  healthcare: 0.07,
  nightlife: 0.05,
  airQuality: 0.05,
  visaFriendly: 0.05
};

/**
 * Normalize a value to 0-100 scale
 * @param {number} value - Value to normalize
 * @param {number} min - Minimum possible value
 * @param {number} max - Maximum possible value
 * @returns {number} - Normalized value 0-100
 */
export function normalizeScore(value, min, max) {
  if (max === min) return 50;
  return Math.round(((value - min) / (max - min)) * 100);
}

/**
 * Get score label and color based on score value
 * @param {number} score - Score value 0-100
 * @returns {Object} - Label and color information
 */
export function getScoreInfo(score) {
  if (score >= 85) {
    return { label: 'Excellent', color: 'success', grade: 'A' };
  }
  if (score >= 70) {
    return { label: 'Good', color: 'success', grade: 'B' };
  }
  if (score >= 55) {
    return { label: 'Average', color: 'warning', grade: 'C' };
  }
  if (score >= 40) {
    return { label: 'Below Average', color: 'warning', grade: 'D' };
  }
  return { label: 'Poor', color: 'error', grade: 'F' };
}

/**
 * Calculate internet score
 * @param {number} speed - Internet speed in Mbps
 * @returns {Object} - Score and info
 */
export function getInternetScore(speed) {
  let score;
  if (speed >= 200) score = 100;
  else if (speed >= 100) score = 85;
  else if (speed >= 50) score = 70;
  else if (speed >= 25) score = 55;
  else score = Math.round((speed / 25) * 55);

  return {
    score,
    speed,
    ...getScoreInfo(score),
    description: speed >= 100 ? 'Great for video calls' : 
                 speed >= 50 ? 'Good for most work' : 'May have issues with video'
  };
}

/**
 * Calculate cost score (inverse - lower cost = higher score)
 * @param {number} monthlyCost - Monthly cost estimate
 * @returns {Object} - Score and info
 */
export function getCostScore(monthlyCost) {
  let score;
  if (monthlyCost <= 1000) score = 100;
  else if (monthlyCost <= 1500) score = 85;
  else if (monthlyCost <= 2500) score = 70;
  else if (monthlyCost <= 3500) score = 55;
  else if (monthlyCost <= 5000) score = 40;
  else score = 20;

  return {
    score,
    monthlyCost,
    ...getScoreInfo(score)
  };
}

/**
 * Calculate community score based on community size
 * @param {string} communitySize - 'small', 'medium', or 'large'
 * @returns {Object} - Score and info
 */
export function getCommunityScore(communitySize) {
  const scores = {
    large: 100,
    medium: 65,
    small: 35
  };

  const score = scores[communitySize] || 50;

  return {
    score,
    size: communitySize,
    ...getScoreInfo(score),
    description: communitySize === 'large' ? 'Active nomad community' :
                 communitySize === 'medium' ? 'Growing community' : 'Small but present'
  };
}

/**
 * Calculate comprehensive city score
 * @param {Object} city - City object with all data
 * @param {Object} customWeights - Optional custom weights
 * @returns {Object} - Comprehensive score breakdown
 */
export function calculateCityScore(city, customWeights = {}) {
  const weights = { ...SCORE_WEIGHTS, ...customWeights };
  const { digitalNomad, costs } = city;

  // Individual scores
  const scores = {
    internet: getInternetScore(digitalNomad.internetSpeed),
    safety: { score: digitalNomad.safetyScore, ...getScoreInfo(digitalNomad.safetyScore) },
    walkability: { score: digitalNomad.walkabilityScore, ...getScoreInfo(digitalNomad.walkabilityScore) },
    english: { score: digitalNomad.englishLevel, ...getScoreInfo(digitalNomad.englishLevel) },
    community: getCommunityScore(digitalNomad.community),
    healthcare: { score: digitalNomad.healthcare, ...getScoreInfo(digitalNomad.healthcare) },
    nightlife: { score: digitalNomad.nightlife, ...getScoreInfo(digitalNomad.nightlife) },
    airQuality: { score: digitalNomad.airQuality, ...getScoreInfo(digitalNomad.airQuality) },
    visa: { score: digitalNomad.visaFriendly ? 100 : 30, ...getScoreInfo(digitalNomad.visaFriendly ? 100 : 30) }
  };

  // Calculate cost score from accommodation mid-range
  const estimatedMonthlyCost = (costs.accommodation.mid * 30) + 
                               (costs.food.mid * 30) + 
                               costs.transport.publicMonthly + 
                               costs.coworking.monthly;
  scores.cost = getCostScore(estimatedMonthlyCost);

  // Calculate weighted overall score
  const weightedSum = 
    (scores.internet.score * weights.internetSpeed) +
    (scores.safety.score * weights.safetyScore) +
    (scores.cost.score * weights.cost) +
    (scores.community.score * weights.community) +
    (scores.walkability.score * weights.walkabilityScore) +
    (scores.english.score * weights.englishLevel) +
    (scores.healthcare.score * weights.healthcare) +
    (scores.nightlife.score * weights.nightlife) +
    (scores.airQuality.score * weights.airQuality) +
    (scores.visa.score * weights.visaFriendly);

  const overallScore = Math.round(weightedSum);

  return {
    overall: {
      score: overallScore,
      ...getScoreInfo(overallScore)
    },
    breakdown: scores,
    weights
  };
}

/**
 * Rank cities by overall score
 * @param {Array} cities - Array of city objects
 * @param {Object} customWeights - Optional custom weights
 * @returns {Array} - Cities sorted by score with rankings
 */
export function rankCities(cities, customWeights = {}) {
  return cities
    .map(city => ({
      city,
      scoreData: calculateCityScore(city, customWeights)
    }))
    .sort((a, b) => b.scoreData.overall.score - a.scoreData.overall.score)
    .map((item, index) => ({
      ...item,
      rank: index + 1
    }));
}

/**
 * Get category leaders (best city for each category)
 * @param {Array} cities - Array of city objects
 * @returns {Object} - Best city for each category
 */
export function getCategoryLeaders(cities) {
  const categories = {
    internet: { key: 'digitalNomad.internetSpeed', label: 'Fastest Internet' },
    safety: { key: 'digitalNomad.safetyScore', label: 'Safest' },
    affordability: { key: 'costs.accommodation.mid', label: 'Most Affordable', invert: true },
    walkability: { key: 'digitalNomad.walkabilityScore', label: 'Most Walkable' },
    english: { key: 'digitalNomad.englishLevel', label: 'Best English' },
    nightlife: { key: 'digitalNomad.nightlife', label: 'Best Nightlife' },
    healthcare: { key: 'digitalNomad.healthcare', label: 'Best Healthcare' },
    airQuality: { key: 'digitalNomad.airQuality', label: 'Best Air Quality' }
  };

  const getValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const leaders = {};

  Object.entries(categories).forEach(([category, config]) => {
    const sorted = [...cities].sort((a, b) => {
      const aVal = getValue(a, config.key);
      const bVal = getValue(b, config.key);
      return config.invert ? aVal - bVal : bVal - aVal;
    });

    leaders[category] = {
      city: sorted[0],
      label: config.label,
      value: getValue(sorted[0], config.key)
    };
  });

  return leaders;
}

export default {
  normalizeScore,
  getScoreInfo,
  getInternetScore,
  getCostScore,
  getCommunityScore,
  calculateCityScore,
  rankCities,
  getCategoryLeaders
};