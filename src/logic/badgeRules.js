<<<<<<< HEAD
/**
 * Badge Rules Engine
 * Transforms city data into semantic, SEO-friendly badges
 */

import { Badge } from '../components/ui/Badge.js';

export function getCityBadges(city, options = {}) {
  const {
    max = 3,              // nombre max de badges
    tone = 'soft',        // soft | solid | outline
    size = 'sm'           // xs | sm | md
  } = options;

  const badges = [];

  /* ======================
     COST OF LIVING
  ====================== */

  if (city.monthlyBudget !== undefined) {
    if (city.monthlyBudget < 1000) {
      badges.push({
        text: 'Very Affordable',
        variant: 'success'
      });
    } else if (city.monthlyBudget < 1400) {
      badges.push({
        text: 'Affordable',
        variant: 'success'
      });
    } else if (city.monthlyBudget > 2500) {
      badges.push({
        text: 'Very Expensive',
        variant: 'error'
      });
    } else if (city.monthlyBudget > 1800) {
      badges.push({
        text: 'High Cost',
        variant: 'warning'
      });
    }
  }

  /* ======================
     INTERNET
  ====================== */

  if (city.digitalNomad?.wifiSpeed !== undefined) {
    if (city.digitalNomad.wifiSpeed >= 100) {
      badges.push({
        text: 'Fast Internet',
        variant: 'info'
      });
    } else if (city.digitalNomad.wifiSpeed < 40) {
      badges.push({
        text: 'Slow Internet',
        variant: 'warning'
      });
    }
  }

  /* ======================
     SAFETY
  ====================== */

  if (city.digitalNomad?.safetyScore !== undefined) {
    if (city.digitalNomad.safetyScore >= 75) {
      badges.push({
        text: 'Safe City',
        variant: 'success'
      });
    }
  }

  /* ======================
     WEATHER (SEO GOLD)
  ====================== */

  if (city.weather?.avgTemp !== undefined) {
    if (city.weather.avgTemp >= 22) {
      badges.push({
        text: 'Warm Climate',
        variant: 'info'
      });
    } else if (city.weather.avgTemp >= 14) {
      badges.push({
        text: 'Mild Climate',
        variant: 'neutral'
      });
    } else {
      badges.push({
        text: 'Cold Climate',
        variant: 'warning'
      });
    }
  }

  /* ======================
     FALLBACK (OBLIGATOIRE)
  ====================== */

  if (badges.length === 0) {
    badges.push({
      text: 'Balanced City Profile',
      variant: 'neutral'
    });
  }

  /* ======================
     FINAL RENDER
  ====================== */

  return badges
    .slice(0, max)
    .map(badge =>
      Badge({
        ...badge,
        tone,
        size
      })
    )
    .join('');
=======
/**
 * Badge Rules Engine
 * Transforms city data into semantic, SEO-friendly badges
 */

import { Badge } from '../components/ui/Badge.js';

export function getCityBadges(city, options = {}) {
  const {
    max = 3,              // nombre max de badges
    tone = 'soft',        // soft | solid | outline
    size = 'sm'           // xs | sm | md
  } = options;

  const badges = [];

  /* ======================
     COST OF LIVING
  ====================== */

  if (city.monthlyBudget !== undefined) {
    if (city.monthlyBudget < 1000) {
      badges.push({
        text: 'Very Affordable',
        variant: 'success'
      });
    } else if (city.monthlyBudget < 1400) {
      badges.push({
        text: 'Affordable',
        variant: 'success'
      });
    } else if (city.monthlyBudget > 2500) {
      badges.push({
        text: 'Very Expensive',
        variant: 'error'
      });
    } else if (city.monthlyBudget > 1800) {
      badges.push({
        text: 'High Cost',
        variant: 'warning'
      });
    }
  }

  /* ======================
     INTERNET
  ====================== */

  if (city.digitalNomad?.wifiSpeed !== undefined) {
    if (city.digitalNomad.wifiSpeed >= 100) {
      badges.push({
        text: 'Fast Internet',
        variant: 'info'
      });
    } else if (city.digitalNomad.wifiSpeed < 40) {
      badges.push({
        text: 'Slow Internet',
        variant: 'warning'
      });
    }
  }

  /* ======================
     SAFETY
  ====================== */

  if (city.digitalNomad?.safetyScore !== undefined) {
    if (city.digitalNomad.safetyScore >= 75) {
      badges.push({
        text: 'Safe City',
        variant: 'success'
      });
    }
  }

  /* ======================
     WEATHER (SEO GOLD)
  ====================== */

  if (city.weather?.avgTemp !== undefined) {
    if (city.weather.avgTemp >= 22) {
      badges.push({
        text: 'Warm Climate',
        variant: 'info'
      });
    } else if (city.weather.avgTemp >= 14) {
      badges.push({
        text: 'Mild Climate',
        variant: 'neutral'
      });
    } else {
      badges.push({
        text: 'Cold Climate',
        variant: 'warning'
      });
    }
  }

  /* ======================
     FALLBACK (OBLIGATOIRE)
  ====================== */

  if (badges.length === 0) {
    badges.push({
      text: 'Balanced City Profile',
      variant: 'neutral'
    });
  }

  /* ======================
     FINAL RENDER
  ====================== */

  return badges
    .slice(0, max)
    .map(badge =>
      Badge({
        ...badge,
        tone,
        size
      })
    )
    .join('');
>>>>>>> f5684a6278b64a9f195794048f99a666f88c917b
}