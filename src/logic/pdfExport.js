/**
 * pdfExport.js - Premium PDF city reports for Living Cost Atlas
 * Uses html2pdf.js -- multi-page, cover + data pages
 * ASCII-only comments (Vite/Vercel constraint)
 */

import html2pdf from 'html2pdf.js';

// -- Helpers ----------------------------------------------------------

function sc(v) {
  if (v >= 80) return '#10b981';
  if (v >= 60) return '#f59e0b';
  return '#ef4444';
}

function scBg(v) {
  if (v >= 80) return 'rgba(16,185,129,0.10)';
  if (v >= 60) return 'rgba(245,158,11,0.10)';
  return 'rgba(239,68,68,0.10)';
}

function scoreLabel(v) {
  if (v >= 80) return 'Excellent';
  if (v >= 60) return 'Good';
  if (v >= 40) return 'Average';
  return 'Below Average';
}

function pbar(label, val, max) {
  max = max || 100;
  const pct = Math.min(100, Math.round((val / max) * 100));
  const color = sc(val);
  return `
    <div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px">
        <span style="color:#64748b;font-weight:500">${label}</span>
        <span style="font-weight:700;color:${color}">${val}<span style="color:#94a3b8;font-weight:400">/100</span></span>
      </div>
      <div style="height:8px;background:#f1f5f9;border-radius:99px;overflow:hidden">
        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,${color},${color}dd);border-radius:99px;transition:width .3s"></div>
      </div>
    </div>`;
}

function crow(label, val, sym) {
  return `
    <tr>
      <td style="padding:8px 0;font-size:12px;color:#64748b;border-bottom:1px solid #f1f5f9">${label}</td>
      <td style="padding:8px 0;font-size:12px;font-weight:700;color:#0f172a;text-align:right;border-bottom:1px solid #f1f5f9">${sym}${Math.round(val).toLocaleString('en-US')}<span style="color:#94a3b8;font-weight:400">/mo</span></td>
    </tr>`;
}

function statCard(icon, label, value, sub) {
  return `
    <div style="flex:1;background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:16px 14px;text-align:center">
      <div style="font-size:20px;margin-bottom:6px">${icon}</div>
      <div style="font-size:20px;font-weight:800;color:#0f172a;letter-spacing:-0.02em">${value}</div>
      <div style="font-size:10px;font-weight:600;color:#64748b;letter-spacing:0.5px;text-transform:uppercase;margin-top:2px">${label}</div>
      ${sub ? `<div style="font-size:9px;color:#94a3b8;margin-top:2px">${sub}</div>` : ''}
    </div>`;
}

function sectionTitle(tag, title) {
  return `
    <div style="margin-bottom:18px">
      <div style="font-size:9px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#6366f1;margin-bottom:4px">${tag}</div>
      <div style="font-size:20px;font-weight:800;color:#0f172a;letter-spacing:-0.03em">${title}</div>
    </div>`;
}

// -- Cover page -------------------------------------------------------

function buildCoverHTML(city) {
  const nomad = city.digitalNomad ?? {};
  const costs = city.costs ?? {};
  const acc = costs.accommodation ?? {};
  const food = costs.food ?? {};
  const sym = city.currencySymbol || '$';
  const monthly = (acc.center ?? 0) * 30 + (food.standard ?? 0) * 30 + (costs.transport ?? 0) + (costs.coworking ?? 0);
  const score = nomad.overallScore ?? 0;
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

  // Use city image or fallback
  const imgUrl = city.image
    ? city.image + (city.image.includes('?') ? '&' : '?') + 'w=1600&q=85&auto=format&fit=crop'
    : `https://picsum.photos/seed/city-${city.slug}/1600/900`;

  return `
<div style="width:794px;height:1123px;position:relative;overflow:hidden;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;background:#0f172a;page-break-after:always">

  <!-- City background image with overlay -->
  <div style="position:absolute;inset:0;z-index:0">
    <img src="${imgUrl}" style="width:100%;height:100%;object-fit:cover;display:block" crossorigin="anonymous" />
  </div>

  <!-- Gradient overlay -->
  <div style="position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(15,23,42,0.25) 0%,rgba(15,23,42,0.40) 30%,rgba(15,23,42,0.75) 65%,rgba(15,23,42,0.95) 85%,#0f172a 100%)"></div>

  <!-- Top branding bar -->
  <div style="position:absolute;top:0;left:0;right:0;z-index:10;padding:32px 40px;display:flex;justify-content:space-between;align-items:center">
    <div style="display:flex;align-items:center;gap:10px">
      <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#818cf8);display:flex;align-items:center;justify-content:center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      </div>
      <div>
        <div style="font-size:16px;font-weight:800;color:#fff;letter-spacing:-0.02em">Living Cost Atlas</div>
        <div style="font-size:9px;font-weight:500;color:rgba(255,255,255,0.5);letter-spacing:1.5px;text-transform:uppercase">City Intelligence Report</div>
      </div>
    </div>
    <div style="padding:6px 14px;border:1px solid rgba(255,255,255,0.2);border-radius:99px;font-size:10px;font-weight:600;color:rgba(255,255,255,0.7);letter-spacing:0.5px">${today}</div>
  </div>

  <!-- Main content area - bottom -->
  <div style="position:absolute;bottom:0;left:0;right:0;z-index:10;padding:0 40px 44px">

    <!-- Country tag -->
    <div style="display:inline-flex;align-items:center;gap:6px;padding:5px 14px;background:rgba(99,102,241,0.25);backdrop-filter:blur(8px);border:1px solid rgba(99,102,241,0.3);border-radius:99px;margin-bottom:14px">
      <img src="https://flagcdn.com/w40/${(city.countryCode || 'un').toLowerCase()}.png" style="width:16px;height:12px;border-radius:2px;object-fit:cover" />
      <span style="font-size:11px;font-weight:600;color:#c7d2fe;letter-spacing:0.5px">${city.country} &middot; ${city.continent}</span>
    </div>

    <!-- City name -->
    <h1 style="font-size:64px;font-weight:900;color:#fff;letter-spacing:-0.04em;line-height:1;margin:0 0 8px 0;text-shadow:0 2px 40px rgba(0,0,0,0.3)">${city.name}</h1>

    <!-- Tagline -->
    <p style="font-size:16px;color:rgba(255,255,255,0.65);font-weight:400;line-height:1.5;margin:0 0 32px 0;max-width:500px">${city.description ? city.description.substring(0, 120) + '...' : 'Complete cost of living analysis for digital nomads and remote workers.'}</p>

    <!-- Stats cards row -->
    <div style="display:flex;gap:12px;margin-bottom:0">
      <!-- Nomad Score -->
      <div style="flex:1;background:rgba(255,255,255,0.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:20px;text-align:center">
        <div style="width:64px;height:64px;margin:0 auto 10px;border-radius:50%;border:3px solid ${sc(score)};display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3)">
          <span style="font-size:24px;font-weight:900;color:#fff">${score}</span>
        </div>
        <div style="font-size:12px;font-weight:700;color:#fff">Nomad Score</div>
        <div style="font-size:10px;color:${sc(score)};font-weight:600;margin-top:2px">${scoreLabel(score)}</div>
      </div>
      <!-- Monthly Cost -->
      <div style="flex:1;background:rgba(255,255,255,0.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:20px;text-align:center">
        <div style="font-size:11px;font-weight:600;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Monthly Cost</div>
        <div style="font-size:32px;font-weight:900;color:#fff;letter-spacing:-0.03em">${sym}${Math.round(monthly).toLocaleString('en-US')}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.45);margin-top:4px">Standard lifestyle, city center</div>
      </div>
      <!-- WiFi -->
      <div style="flex:1;background:rgba(255,255,255,0.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:20px;text-align:center">
        <div style="font-size:11px;font-weight:600;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Internet Speed</div>
        <div style="font-size:32px;font-weight:900;color:#fff;letter-spacing:-0.03em">${nomad.wifiSpeed ?? '--'}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.45);margin-top:4px">Mbps average</div>
      </div>
      <!-- Safety -->
      <div style="flex:1;background:rgba(255,255,255,0.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:20px;text-align:center">
        <div style="font-size:11px;font-weight:600;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Safety Index</div>
        <div style="font-size:32px;font-weight:900;color:${sc(city.safety?.safetyIndex ?? 0)};letter-spacing:-0.03em">${city.safety?.safetyIndex ?? '--'}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.45);margin-top:4px">out of 100</div>
      </div>
    </div>

  </div>
</div>`;
}

// -- Data pages -------------------------------------------------------

function buildDataPagesHTML(city) {
  const costs = city.costs ?? {};
  const acc = costs.accommodation ?? {};
  const food = costs.food ?? {};
  const nomad = city.digitalNomad ?? {};
  const visa = city.visa ?? {};
  const tax = city.tax ?? {};
  const infra = city.infrastructure ?? {};
  const safety = city.safety ?? {};
  const macro = city.macro ?? {};

  const sym = city.currencySymbol || '$';
  const fmt = (v) => sym + Math.round(v).toLocaleString('en-US');

  const monthlyCenter = (acc.center ?? 0) * 30 + (food.standard ?? 0) * 30 + (costs.transport ?? 0) + (costs.coworking ?? 0);
  const monthlySuburb = (acc.suburb ?? 0) * 30 + (food.standard ?? 0) * 30 + (costs.transport ?? 0) + (costs.coworking ?? 0);

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Page header bar (reusable)
  const pageHeader = `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:20px 40px;border-bottom:1px solid #e2e8f0;margin-bottom:28px">
      <div style="display:flex;align-items:center;gap:8px">
        <div style="width:24px;height:24px;border-radius:6px;background:linear-gradient(135deg,#6366f1,#818cf8);display:flex;align-items:center;justify-content:center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <span style="font-size:12px;font-weight:700;color:#0f172a;letter-spacing:-0.01em">Living Cost Atlas</span>
        <span style="font-size:12px;color:#94a3b8;margin:0 4px">|</span>
        <span style="font-size:12px;font-weight:600;color:#64748b">${city.name}, ${city.country}</span>
      </div>
      <div style="font-size:10px;color:#94a3b8">${today}</div>
    </div>`;

  // -- PAGE 2: Cost Breakdown --
  const page2 = `
<div style="width:794px;min-height:1123px;background:#fff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#0f172a;page-break-after:always">
  ${pageHeader}
  <div style="padding:0 40px 40px">
    ${sectionTitle('MONTHLY EXPENSES', 'Cost Breakdown')}

    <!-- Quick totals banner -->
    <div style="display:flex;gap:12px;margin-bottom:24px">
      <div style="flex:1;background:linear-gradient(135deg,#312e81,#4338ca);border-radius:14px;padding:20px 22px;color:#fff">
        <div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.6);margin-bottom:6px">CITY CENTER</div>
        <div style="font-size:28px;font-weight:900;letter-spacing:-0.03em">${fmt(monthlyCenter)}<span style="font-size:13px;font-weight:500;color:rgba(255,255,255,0.5)">/month</span></div>
      </div>
      <div style="flex:1;background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:14px;padding:20px 22px;color:#fff">
        <div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.6);margin-bottom:6px">SUBURB</div>
        <div style="font-size:28px;font-weight:900;letter-spacing:-0.03em">${fmt(monthlySuburb)}<span style="font-size:13px;font-weight:500;color:rgba(255,255,255,0.5)">/month</span></div>
      </div>
    </div>

    <!-- 3 cost columns -->
    <div style="display:flex;gap:14px;margin-bottom:24px">
      <!-- Accommodation -->
      <div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:18px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#6366f1,#818cf8)"></div>
        <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:14px;display:flex;align-items:center;gap:6px">
          <span style="display:inline-flex;width:24px;height:24px;border-radius:6px;background:#eef2ff;align-items:center;justify-content:center;font-size:12px">&#127968;</span>
          Accommodation
        </div>
        <table style="width:100%;border-collapse:collapse">
          ${crow('City center', acc.center * 30, sym)}
          ${crow('Suburb area', acc.suburb * 30, sym)}
        </table>
      </div>
      <!-- Food -->
      <div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:18px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f59e0b,#fbbf24)"></div>
        <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:14px;display:flex;align-items:center;gap:6px">
          <span style="display:inline-flex;width:24px;height:24px;border-radius:6px;background:#fffbeb;align-items:center;justify-content:center;font-size:12px">&#127858;</span>
          Food & Dining
        </div>
        <table style="width:100%;border-collapse:collapse">
          ${crow('Budget meals', food.budget * 30, sym)}
          ${crow('Standard meals', food.standard * 30, sym)}
          ${crow('Premium dining', food.premium * 30, sym)}
        </table>
      </div>
      <!-- Transport & Work -->
      <div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:18px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#10b981,#34d399)"></div>
        <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:14px;display:flex;align-items:center;gap:6px">
          <span style="display:inline-flex;width:24px;height:24px;border-radius:6px;background:#ecfdf5;align-items:center;justify-content:center;font-size:12px">&#128652;</span>
          Transport & Work
        </div>
        <table style="width:100%;border-collapse:collapse">
          ${crow('Public transport', costs.transport, sym)}
          ${crow('Coworking space', costs.coworking, sym)}
        </table>
      </div>
    </div>

    <!-- Detailed comparison table -->
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:20px;margin-bottom:24px">
      <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:14px">Full Monthly Comparison</div>
      <table style="width:100%;border-collapse:collapse;font-size:12px">
        <thead>
          <tr style="border-bottom:2px solid #e2e8f0">
            <th style="text-align:left;padding:8px 0;color:#64748b;font-weight:600;font-size:10px;letter-spacing:1px;text-transform:uppercase">Category</th>
            <th style="text-align:right;padding:8px 0;color:#64748b;font-weight:600;font-size:10px;letter-spacing:1px;text-transform:uppercase">Budget</th>
            <th style="text-align:right;padding:8px 0;color:#64748b;font-weight:600;font-size:10px;letter-spacing:1px;text-transform:uppercase">Standard</th>
            <th style="text-align:right;padding:8px 0;color:#64748b;font-weight:600;font-size:10px;letter-spacing:1px;text-transform:uppercase">Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #f1f5f9">
            <td style="padding:10px 0;color:#0f172a;font-weight:500">Rent</td>
            <td style="padding:10px 0;text-align:right;font-weight:700;color:#0f172a">${fmt(acc.suburb * 30)}</td>
            <td style="padding:10px 0;text-align:right;font-weight:700;color:#0f172a">${fmt(acc.center * 30)}</td>
            <td style="padding:10px 0;text-align:right;font-weight:700;color:#0f172a">${fmt(acc.center * 30 * 1.5)}</td>
          </tr>
          <tr style="border-bottom:1px solid #f1f5f9">
            <td style="padding:10px 0;color:#0f172a;font-weight:500">Food</td>
            <td style="padding:10px 0;text-align:right;font-weight:700;color:#0f172a">${fmt(food.budget * 30)}</td>
            <td style="padding:10px 0;text-align:right;font-weight:700;color:#0f172a">${fmt(food.standard * 30)}</td>
            <td style="padding:10px 0;text-align:right;font-weight:700;color:#0f172a">${fmt(food.premium * 30)}</td>
          </tr>
          <tr style="border-bottom:1px solid #f1f5f9">
            <td style="padding:10px 0;color:#0f172a;font-weight:500">Transport</td>
            <td style="padding:10px 0;text-align:right;font-weight:700;color:#0f172a" colspan="3">${fmt(costs.transport)}</td>
          </tr>
          <tr style="border-bottom:2px solid #e2e8f0">
            <td style="padding:10px 0;color:#0f172a;font-weight:500">Coworking</td>
            <td style="padding:10px 0;text-align:right;font-weight:700;color:#0f172a" colspan="3">${fmt(costs.coworking)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;font-size:13px;font-weight:800;color:#312e81">TOTAL</td>
            <td style="padding:12px 0;text-align:right;font-size:13px;font-weight:800;color:#312e81">${fmt((acc.suburb * 30) + (food.budget * 30) + costs.transport + costs.coworking)}</td>
            <td style="padding:12px 0;text-align:right;font-size:13px;font-weight:800;color:#312e81">${fmt(monthlyCenter)}</td>
            <td style="padding:12px 0;text-align:right;font-size:13px;font-weight:800;color:#312e81">${fmt((acc.center * 30 * 1.5) + (food.premium * 30) + costs.transport + costs.coworking)}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</div>`;

  // -- PAGE 3: Infrastructure, Safety, Visa & Tax --
  const page3 = `
<div style="width:794px;min-height:1123px;background:#fff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#0f172a;page-break-after:always">
  ${pageHeader}
  <div style="padding:0 40px 40px">

    <!-- Infrastructure & Quality -->
    ${sectionTitle('CITY QUALITY', 'Infrastructure & Digital Nomad Readiness')}

    <div style="display:flex;gap:14px;margin-bottom:28px">
      <!-- Left: Progress bars -->
      <div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:20px">
        <div style="font-size:12px;font-weight:700;color:#0f172a;margin-bottom:16px">Infrastructure Scores</div>
        ${pbar('Public Transport', infra.publicTransportQuality ?? 0)}
        ${pbar('Healthcare Quality', infra.healthcareQuality ?? 0)}
        ${pbar('English Proficiency', infra.englishProficiency ?? 0)}
        ${pbar('Airport Connectivity', infra.airportConnectivity ?? 0)}
      </div>
      <!-- Right: Key metrics -->
      <div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:20px">
        <div style="font-size:12px;font-weight:700;color:#0f172a;margin-bottom:16px">Safety & Stability</div>
        ${pbar('Safety Index', safety.safetyIndex ?? 0)}
        ${pbar('Nomad Score', nomad.overallScore ?? 0)}

        <div style="margin-top:16px;padding-top:14px;border-top:1px solid #e2e8f0">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #f1f5f9">
            <span style="font-size:11px;color:#64748b">Crime Level</span>
            <span style="font-size:11px;font-weight:700;color:#0f172a;padding:3px 10px;background:${safety.crimeLevel === 'Low' ? '#ecfdf5' : safety.crimeLevel === 'Moderate' ? '#fffbeb' : '#fef2f2'};border-radius:99px">${safety.crimeLevel ?? '--'}</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #f1f5f9">
            <span style="font-size:11px;color:#64748b">Currency Stability</span>
            <span style="font-size:11px;font-weight:700;color:#0f172a">${macro.currencyStability ?? '--'}</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0">
            <span style="font-size:11px;color:#64748b">Inflation Rate</span>
            <span style="font-size:11px;font-weight:700;color:#0f172a">${macro.inflationRate ?? '--'}%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Visa & Tax -->
    ${sectionTitle('LEGAL & FINANCIAL', 'Visa & Tax Information')}

    <div style="display:flex;gap:14px;margin-bottom:28px">
      <!-- Visa -->
      <div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden">
        <div style="padding:16px 20px;background:${visa.remoteFriendly ? 'linear-gradient(135deg,#ecfdf5,#d1fae5)' : '#f8fafc'};border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-size:14px;font-weight:700;color:#0f172a">${visa.type ?? 'Standard Visa'}</div>
          </div>
          <span style="font-size:10px;font-weight:700;padding:4px 12px;border-radius:99px;background:${visa.remoteFriendly ? '#10b981' : '#e2e8f0'};color:${visa.remoteFriendly ? '#fff' : '#64748b'}">${visa.remoteFriendly ? 'NOMAD FRIENDLY' : 'STANDARD'}</span>
        </div>
        <div style="padding:16px 20px">
          <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f1f5f9">
            <span style="font-size:12px;color:#64748b">Maximum stay</span>
            <span style="font-size:12px;font-weight:700;color:#0f172a">${visa.stayDurationMonths ?? '--'} months</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f1f5f9">
            <span style="font-size:12px;color:#64748b">Processing time</span>
            <span style="font-size:12px;font-weight:700;color:#0f172a">~${visa.processingTimeDays ?? '--'} days</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:10px 0">
            <span style="font-size:12px;color:#64748b">Min. income required</span>
            <span style="font-size:12px;font-weight:700;color:#0f172a">${visa.minIncomeRequirement > 0 ? '$' + visa.minIncomeRequirement.toLocaleString('en-US') + '/mo' : 'None stated'}</span>
          </div>
        </div>
      </div>
      <!-- Tax -->
      <div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden">
        <div style="padding:16px 20px;background:#f8fafc;border-bottom:1px solid #e2e8f0">
          <div style="font-size:14px;font-weight:700;color:#0f172a">Tax Rates</div>
        </div>
        <div style="padding:16px 20px">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #f1f5f9">
            <span style="font-size:12px;color:#64748b">Income Tax (top rate)</span>
            <div style="text-align:right">
              <span style="font-size:18px;font-weight:800;color:#0f172a">${tax.personalIncomeTaxTopRate ?? '--'}%</span>
            </div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #f1f5f9">
            <span style="font-size:12px;color:#64748b">Corporate Tax</span>
            <span style="font-size:18px;font-weight:800;color:#0f172a">${tax.corporateTax ?? '--'}%</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #f1f5f9">
            <span style="font-size:12px;color:#64748b">Capital Gains Tax</span>
            <span style="font-size:18px;font-weight:800;color:#0f172a">${tax.capitalGainsTax ?? '--'}%</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0">
            <span style="font-size:12px;color:#64748b">Currency</span>
            <span style="font-size:14px;font-weight:700;color:#0f172a">${city.currency ?? '--'} (${sym})</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom disclaimer -->
    <div style="background:#f1f5f9;border-radius:12px;padding:16px 20px;margin-top:12px">
      <div style="font-size:10px;color:#64748b;line-height:1.6">
        <strong style="color:#475569">Disclaimer:</strong> Cost data is based on averages and may vary based on personal lifestyle, exchange rates, and seasonal fluctuations. Tax information is for general guidance only -- consult a tax professional for personal advice. Data sourced from multiple public databases and community reports.
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div style="position:absolute;bottom:0;left:0;right:0;padding:16px 40px;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center">
    <div style="font-size:10px;color:#94a3b8">Generated by Living Cost Atlas &middot; livingcostatlas.com</div>
    <div style="font-size:10px;color:#94a3b8">Data updated: ${city.lastUpdated ?? 'N/A'}</div>
  </div>
</div>`;

  return page2 + page3;
}

// -- Main export ------------------------------------------------------

function buildReportHTML(city) {
  return `
<div id="pdf-report" style="margin:0;padding:0;background:#fff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
  ${buildCoverHTML(city)}
  ${buildDataPagesHTML(city)}
</div>`;
}

/**
 * Generate and download PDF report for a city.
 * @param {Object} city - Full city object from cityDB
 */
export function downloadCityPDF(city) {
  const html = buildReportHTML(city);

  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '-9999px';
  container.style.top = '0';
  container.innerHTML = html;
  document.body.appendChild(container);

  const element = container.querySelector('#pdf-report');

  const opt = {
    margin:      [0, 0, 0, 0],
    filename:    `livingcostatlas-${city.slug}-report.pdf`,
    image:       { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false, allowTaint: true },
    jsPDF:       { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak:   { mode: ['css'], before: [], after: [], avoid: [] }
  };

  return html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      document.body.removeChild(container);
    })
    .catch((err) => {
      console.error('PDF generation failed:', err);
      document.body.removeChild(container);
    });
}
