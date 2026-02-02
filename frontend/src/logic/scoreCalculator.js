/**
 * Score Calculator
 * Calculates and formats nomad scores
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
  return { label: 'Below Average', color: 'warning', grade: 'D' };
}

export function calculateNomadScore(city) {
  const { digitalNomad } = city;
  return {
    overall: digitalNomad.overallScore,
    wifi: digitalNomad.wifiSpeed,
    coworking: digitalNomad.coworkingCost,
    safety: digitalNomad.safetyScore,
    ...getScoreInfo(digitalNomad.overallScore)
  };
}

export function rankCitiesByScore(cities) {
  return [...cities]
    .sort((a, b) => b.digitalNomad.overallScore - a.digitalNomad.overallScore)
    .map((city, index) => ({
      city,
      rank: index + 1,
      score: city.digitalNomad.overallScore,
      ...getScoreInfo(city.digitalNomad.overallScore)
    }));
}

export function getMonthlyBudgetEstimate(city, lifestyle = 'standard') {
  const { costs } = city;
  const accommodation = costs.accommodation.center * 30;
  const food = costs.food[lifestyle] * 30;
  const transport = costs.transport;
  const coworking = costs.coworking;
  return accommodation + food + transport + coworking;
}

export default {
  getScoreInfo,
  calculateNomadScore,
  rankCitiesByScore,
  getMonthlyBudgetEstimate
};
