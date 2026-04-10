import fs from 'fs';
import path from 'path';

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

const rawDir = path.resolve('public/images/countries/raw');
const finalDir = path.resolve('public/images/countries');

const files = fs.readdirSync(rawDir);

files.forEach(file => {
  const ext = path.extname(file);
  const name = path.basename(file, ext);

  const slug = slugify(name);

  const newPath = path.join(finalDir, `${slug}.jpg`);

  fs.renameSync(
    path.join(rawDir, file),
    newPath
  );

  console.log(`Renamed: ${file} → ${slug}.jpg`);
});