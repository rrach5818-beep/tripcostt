<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.resolve('public/images/countries');

async function convert() {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (!file.endsWith('.jpg')) continue;

    const input = path.join(dir, file);
    const output = path.join(
      dir,
      file.replace('.jpg', '.webp')
    );

    await sharp(input)
      .resize(1800, 1000, { fit: 'cover' })
      .webp({ quality: 82 })
      .toFile(output);

    fs.unlinkSync(input);

    console.log(`Converted: ${file}`);
  }
}

=======
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.resolve('public/images/countries');

async function convert() {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (!file.endsWith('.jpg')) continue;

    const input = path.join(dir, file);
    const output = path.join(
      dir,
      file.replace('.jpg', '.webp')
    );

    await sharp(input)
      .resize(1800, 1000, { fit: 'cover' })
      .webp({ quality: 82 })
      .toFile(output);

    fs.unlinkSync(input);

    console.log(`Converted: ${file}`);
  }
}

>>>>>>> f5684a6278b64a9f195794048f99a666f88c917b
convert()