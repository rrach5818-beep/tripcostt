/**
 * Rebuild city eBook PDFs from existing HTML files (no regeneration of content).
 * Used after the ${cityName} template-leak hotfix + Market Maturity dedup.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const EBOOKS_DIR = path.join(__dirname, '..', 'public', 'ebooks');

const htmlFiles = fs.readdirSync(EBOOKS_DIR)
  .filter(f => f.endsWith('.html') && f.startsWith('LivingCostAtlas_') && f !== 'LivingCostAtlas_FreeGuide_Top10_2026.html');

console.log(`Rebuilding ${htmlFiles.length} PDFs from corrected HTML...`);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

for (const htmlFile of htmlFiles) {
  const htmlPath = path.join(EBOOKS_DIR, htmlFile);
  const pdfPath = htmlPath.replace('.html', '.pdf');
  const html = fs.readFileSync(htmlPath, 'utf8');

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    displayHeaderFooter: false
  });
  await page.close();

  const kb = (fs.statSync(pdfPath).size / 1024).toFixed(1);
  console.log(`  OK  ${htmlFile.replace('.html','.pdf')}  (${kb} KB)`);
}

await browser.close();
console.log('Done.');
