/**
 * Generate a cover image (PNG) from the Lisbon eBook cover page
 * Uses Puppeteer to render the cover HTML and screenshot it
 */
import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NAVY = '#1e1b4b';
const NAVY2 = '#0f172a';
const GOLD = '#d4a843';
const GOLD_L = '#e8c97a';

const coverHTML = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:600px; height:850px; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; overflow:hidden; }
</style></head>
<body>
<div style="width:600px;height:850px;position:relative;overflow:hidden;background:${NAVY2}">
  <!-- Gold top bar -->
  <div style="width:100%;height:6px;background:linear-gradient(90deg,${GOLD},${GOLD_L})"></div>

  <!-- Left accent -->
  <div style="position:absolute;top:0;left:0;width:20px;height:100%;background:${NAVY2}"></div>

  <!-- Top section -->
  <div style="background:#1a2332;padding:40px 48px 32px 52px;min-height:440px;position:relative">
    <div style="font-size:18px;font-weight:900;color:${GOLD};letter-spacing:2px">LIVING COST ATLAS</div>
    <div style="font-size:8px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:4px;border-bottom:1px solid rgba(255,255,255,0.15);padding-bottom:10px;display:inline-block">RELOCATION INTELLIGENCE SERIES &middot; 2026</div>

    <h1 style="font-size:26px;font-weight:600;color:#fff;margin:40px 0 14px;line-height:1.3">The Complete Cost of Living<br>&amp; Relocation Guide</h1>
    <div style="font-size:42px;font-weight:900;color:${GOLD};letter-spacing:2px;margin:16px 0 6px;line-height:1.1">LISBON, PORTUGAL</div>
    <div style="font-size:12px;color:${GOLD_L};letter-spacing:6px;margin-bottom:12px">2 0 2 6  E D I T I O N</div>
    <div style="width:60px;height:3px;background:${GOLD};margin:16px 0"></div>
    <p style="font-size:11px;color:rgba(255,255,255,0.55);font-style:italic;margin-top:14px">Data-Driven Insights for Remote Workers, Expats &amp; Global Professionals</p>

    <p style="font-size:8px;color:rgba(255,255,255,0.35);margin-top:30px">Prepared by <strong style="color:rgba(255,255,255,0.55)">Living Cost Atlas Analytics Division</strong> | Relocation Intelligence Report | 2026</p>
  </div>

  <!-- Diagonal gold stripe -->
  <div style="width:100%;height:16px;background:linear-gradient(135deg,${GOLD} 0%,${GOLD_L} 100%);transform:skewY(-1.5deg);margin:-8px 0"></div>

  <!-- Bottom section -->
  <div style="background:${NAVY2};padding:40px 52px;min-height:370px;position:relative;overflow:hidden">
    <div style="position:absolute;bottom:-15px;right:20px;font-size:200px;font-weight:900;color:rgba(255,255,255,0.035);letter-spacing:-8px;line-height:1">LCA</div>

    <div style="position:absolute;bottom:24px;left:52px;right:52px">
      <div style="height:1px;background:rgba(255,255,255,0.08);margin-bottom:10px"></div>
      <div style="display:flex;justify-content:space-between">
        <span style="font-size:7px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3)">LIVING COST ATLAS RELOCATION INTELLIGENCE | CONFIDENTIAL</span>
        <span style="font-size:7px;font-weight:600;letter-spacing:1px;color:${GOLD}">LISBON 2026 -- COST OF LIVING REPORT</span>
      </div>
    </div>
  </div>
</div>
</body></html>`;

async function main() {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 600, height: 850 });
  await page.setContent(coverHTML, { waitUntil: 'networkidle0' });

  const outPath = path.resolve(__dirname, '..', 'public', 'images', 'ebooks', 'lisbon-cover.png');
  await page.screenshot({ path: outPath, type: 'png' });
  await browser.close();
  console.log('Cover image generated:', outPath);
}

main().catch(err => { console.error(err); process.exit(1); });
