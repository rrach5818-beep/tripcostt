import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import sharp from 'sharp';
import { cityDB } from '../src/data/cityDB.js';

const UNSPLASH_ACCESS_KEY = 'YOUR_KEY_HERE';

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

async function downloadImage(url, outputPath) {
  const response = await fetch(url);
  const buffer = await response.buffer();

  await sharp(buffer)
    .resize(1600)
    .webp({ quality: 80 })
    .toFile(outputPath);
}

async function generate() {
  const countries = [...new Set(cityDB.map(c => c.country))];

  for (const country of countries) {
    const slug = slugify(country);
    const filePath = path.resolve(
      `public/images/countries/${slug}.webp`
    );

    if (fs.existsSync(filePath)) {
      console.log(`✔ Already exists: ${slug}`);
      continue;
    }

    const query = `${country} landscape`;
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`;

    const data = await fetch(url).then(r => r.json());

    const imageUrl = data.results[0]?.urls?.regular;

    if (!imageUrl) {
      console.log(`❌ No image found for ${country}`);
      continue;
    }

    await downloadImage(imageUrl, filePath);
    console.log(`✅ Saved: ${slug}`);
  }
}

generate();