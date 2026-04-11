/* ============================================================
   IMAGE HELPER -- STABLE AUTO IMAGES
============================================================ */

/* =========================
   DEFAULT IMAGES
========================= */

export const DEFAULT_COUNTRY_IMAGE =
  'https://picsum.photos/seed/default-country/1200/800';

export const DEFAULT_CITY_IMAGE =
  'https://picsum.photos/seed/default-city/800/600';


/* =========================
   COUNTRY IMAGE (AUTO STABLE)
========================= */

export function getCountryImage(countrySlug) {
  // Image unique et stable par pays
  return `https://picsum.photos/seed/country-${countrySlug}/1200/800`;
}


/* =========================
   CITY IMAGE (AUTO STABLE)
========================= */

export function getCityImage(city) {
  if (city?.image) return city.image;

  return `https://picsum.photos/seed/city-${city?.slug}/800/600`;
}
/* ============================================================
   COUNTRY RANKING IMAGE (DIFFERENT STYLE)
============================================================ */

export function getCountryRankingImage(countrySlug) {
  // Seed differente de BestCities
  return `https://picsum.photos/seed/ranking-${countrySlug}/1400/900`;
}