import L from 'leaflet';
import { getAllCities } from '../data/cityService.js';

function getCostLevel(city) {
  const monthly =
    city.costs.accommodation.center * 30 +
    city.costs.food.standard * 30 +
    city.costs.transport +
    city.costs.coworking;

  if (monthly < 1200) return 'low';
  if (monthly < 2000) return 'medium';
  return 'high';
}

function markerColor(level) {
  if (level === 'low') return '#22c55e';    // vert
  if (level === 'medium') return '#f59e0b'; // orange
  return '#ef4444';                         // rouge
}

export function initWorldMap() {
  const el = document.getElementById('world-map');
  if (!el) return;

  const map = L.map(el, {
    worldCopyJump: true,
    zoomControl: false,
    minZoom: 2
  }).setView([20, 0], 2);

  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    { attribution: '' }
  ).addTo(map);

  const cities = getAllCities();

  cities.forEach(city => {
    if (!city.coordinates) return;

    const level = getCostLevel(city);

    const marker = L.circleMarker(
      [city.coordinates.lat, city.coordinates.lng],
      {
        radius: 7,
        fillColor: markerColor(level),
        fillOpacity: 0.85,
        color: '#000',
        weight: 1
      }
    ).addTo(map);

    marker.bindTooltip(`
      <strong>${city.name}</strong><br/>
      ${city.country}<br/>
      Nomad score: ${city.digitalNomad.overallScore}
    `);

    marker.on('click', () => {
      window.location.href = `/city/${city.slug}`;
    });
  });
}