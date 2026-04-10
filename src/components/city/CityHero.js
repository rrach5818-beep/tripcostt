/**
 * CityHero Component
 * Displays hero section for city page
 */

import { Badge } from '../ui/Badge.js';

export function CityHero(city) {
  const tagsHtml = city.tags.slice(0, 3).map(tag => 
    Badge({ text: tag, variant: 'primary' })
  ).join(' ');

  return `
    <div class="city-hero" data-testid="city-hero">
      <div class="city-hero__content">
        <div class="flex gap-2 mb-4">${tagsHtml}</div>
        <h1 class="city-hero__name">${city.name}</h1>
        <p class="city-hero__country">${city.country}</p>
        <p class="city-hero__description">${city.description}</p>
      </div>
      <div>
        <img 
          src="${city.image}" 
          alt="${city.name}, ${city.country}" 
          class="city-hero__image"
          loading="lazy"
        >
      </div>
    </div>
  `;
}

export default CityHero;
