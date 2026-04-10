<<<<<<< HEAD
import { cityDB } from '../data/cityDB.js';

function calculateBudget(city, profile, lifestyle, housing) {
  const multiplier = profile === 'couple' ? 1.6 : 1;
  const lifestyleFactor = [0.8, 1, 1.3][lifestyle - 1];

  const housingCost =
    city.costs.accommodation[housing] * 30 * multiplier;
  const foodCost =
    city.costs.food.standard * 30 * multiplier * lifestyleFactor;
  const transport = city.costs.transport;

  return {
    total: housingCost + foodCost + transport,
    housing: housingCost,
    food: foodCost,
    transport
  };
=======
import { cityDB } from '../data/cityDB.js';

function calculateBudget(city, profile, lifestyle, housing) {
  const multiplier = profile === 'couple' ? 1.6 : 1;
  const lifestyleFactor = [0.8, 1, 1.3][lifestyle - 1];

  const housingCost =
    city.costs.accommodation[housing] * 30 * multiplier;
  const foodCost =
    city.costs.food.standard * 30 * multiplier * lifestyleFactor;
  const transport = city.costs.transport;

  return {
    total: housingCost + foodCost + transport,
    housing: housingCost,
    food: foodCost,
    transport
  };
>>>>>>> f5684a6278b64a9f195794048f99a666f88c917b
}