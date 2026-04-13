/**
 * pdfExport.js - Generate PDF city reports
 * Uses html2pdf.js (already in deps)
 * ASCII-only comments (Vite/Vercel constraint)
 */

import html2pdf from 'html2pdf.js';

/**
 * Build a self-contained HTML string for the PDF report.
 * We do NOT capture the DOM -- we build a clean template so
 * the output is consistent regardless of viewport/scroll state.
 */
function buildReportHTML(city) {
  const costs = city.costs ?? {};
  const acc   = costs.accommodation ?? {};
  const food  = costs.food ?? {};
  const nomad = city.digitalNomad ?? {};
  const visa  = city.visa ?? {};
  const tax   = city.tax ?? {};
  const infra = city.infrastructure ?? {};
  const safety = city.safety ?? {};
  const macro  = city.macro ?? {};

  const sym = city.currencySymbol || '$';
  const fmt = (v) => sym + Math.round(v).toLocaleString('en-US');

  const monthlyCenter = (acc.center ?? 0) * 30 + (food.standard ?? 0) * 30 + (costs.transport ?? 0) + (costs.coworking ?? 0);
  const monthlySuburb = (acc.suburb ?? 0) * 30 + (food.standard ?? 0) * 30 + (costs.transport ?? 0) + (costs.coworking ?? 0);

  // Score color
  function sc(v) {
    if (v >= 80) return '#10b981';
    if (v >= 60) return '#f59e0b';
    return '#ef4444';
  }

  // Progress bar HTML (inline, no external CSS)
  function pbar(label, val, max) {
    max = max || 100;
    const pct = Math.min(100, Math.round((val / max) * 100));
    const color = sc(val);
    return `
      <div style="margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px">
          <span style="color:#6b7280">${label}</span>
          <span style="font-weight:700;color:${color}">${val}/100</span>
        </div>
        <div style="height:5px;background:#e5e7eb;border-radius:4px;overflow:hidden">
          <div style="height:100%;width:${pct}%;background:${color};border-radius:4px"></div>
        </div>
      </div>`;
  }

  // Cost row for tables
  function crow(label, val) {
    return `
      <tr>
        <td style="padding:6px 0;font-size:11px;color:#6b7280;border-bottom:1px solid #f1f5f9">${label}</td>
        <td style="padding:6px 0;font-size:11px;font-weight:700;color:#111827;text-align:right;border-bottom:1px solid #f1f5f9">${fmt(val)}/mo</td>
      </tr>`;
  }

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return `
<div id="pdf-report" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#111827;width:700px;padding:0;margin:0 auto;background:#fff">

  <!-- HEADER -->
  <div style="background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);padding:40px 36px 32px;border-radius:0 0 16px 16px">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px">
      <div>
        <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.5);margin-bottom:6px">LIVING COST ATLAS REPORT</div>
        <div style="font-size:32px;font-weight:900;color:#fff;letter-spacing:-0.03em;line-height:1.1">${city.name}</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">${city.country} &middot; ${city.continent}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.03em">${nomad.overallScore ?? '--'}<span style="font-size:14px;color:rgba(255,255,255,0.5)">/100</span></div>
        <div style="font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.5)">Nomad Score</div>
      </div>
    </div>

    <!-- KPIs row -->
    <div style="display:flex;gap:0;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);border-radius:10px;overflow:hidden">
      <div style="flex:1;padding:12px 16px;border-right:1px solid rgba(255,255,255,0.1)">
        <div style="font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,0.45)">Monthly (center)</div>
        <div style="font-size:18px;font-weight:800;color:#fff">${fmt(monthlyCenter)}</div>
      </div>
      <div style="flex:1;padding:12px 16px;border-right:1px solid rgba(255,255,255,0.1)">
        <div style="font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,0.45)">Safety</div>
        <div style="font-size:18px;font-weight:800;color:#fff">${safety.safetyIndex ?? '--'}/100</div>
      </div>
      <div style="flex:1;padding:12px 16px;border-right:1px solid rgba(255,255,255,0.1)">
        <div style="font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,0.45)">WiFi</div>
        <div style="font-size:18px;font-weight:800;color:#fff">${nomad.wifiSpeed ?? '--'} Mbps</div>
      </div>
      <div style="flex:1;padding:12px 16px">
        <div style="font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,0.45)">Currency</div>
        <div style="font-size:18px;font-weight:800;color:#fff">${city.currency ?? '--'}</div>
      </div>
    </div>
  </div>

  <!-- BODY -->
  <div style="padding:28px 36px 20px">

    <!-- COST BREAKDOWN -->
    <div style="margin-bottom:28px">
      <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:6px">MONTHLY EXPENSES</div>
      <div style="font-size:18px;font-weight:800;color:#111827;margin-bottom:16px">Cost Breakdown</div>

      <div style="display:flex;gap:16px">
        <!-- Accommodation -->
        <div style="flex:1;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:16px">
          <div style="font-size:11px;font-weight:700;color:#111827;margin-bottom:10px">Accommodation</div>
          <table style="width:100%;border-collapse:collapse">
            ${crow('City center', acc.center * 30)}
            ${crow('Suburb', acc.suburb * 30)}
          </table>
        </div>
        <!-- Food -->
        <div style="flex:1;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:16px">
          <div style="font-size:11px;font-weight:700;color:#111827;margin-bottom:10px">Food & Dining</div>
          <table style="width:100%;border-collapse:collapse">
            ${crow('Budget', food.budget * 30)}
            ${crow('Standard', food.standard * 30)}
            ${crow('Premium', food.premium * 30)}
          </table>
        </div>
        <!-- Transport -->
        <div style="flex:1;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:16px">
          <div style="font-size:11px;font-weight:700;color:#111827;margin-bottom:10px">Transport & Work</div>
          <table style="width:100%;border-collapse:collapse">
            ${crow('Transport', costs.transport)}
            ${crow('Coworking', costs.coworking)}
          </table>
        </div>
      </div>

      <!-- Totals summary -->
      <div style="margin-top:12px;background:#eef2ff;border:1px solid #c7d2fe;border-radius:10px;padding:14px 18px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <span style="font-size:11px;font-weight:600;color:#4338ca">Estimated monthly total (standard lifestyle)</span>
        </div>
        <div style="display:flex;gap:20px">
          <div style="text-align:right">
            <div style="font-size:9px;color:#6366f1;font-weight:600;letter-spacing:0.5px">CITY CENTER</div>
            <div style="font-size:18px;font-weight:900;color:#312e81">${fmt(monthlyCenter)}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:9px;color:#6366f1;font-weight:600;letter-spacing:0.5px">SUBURB</div>
            <div style="font-size:18px;font-weight:900;color:#312e81">${fmt(monthlySuburb)}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- INFRASTRUCTURE -->
    <div style="margin-bottom:28px">
      <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:6px">CITY QUALITY</div>
      <div style="font-size:18px;font-weight:800;color:#111827;margin-bottom:16px">Infrastructure & Safety</div>

      <div style="display:flex;gap:16px">
        <div style="flex:1;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:16px">
          ${pbar('Public Transport', infra.publicTransportQuality ?? 0)}
          ${pbar('Healthcare', infra.healthcareQuality ?? 0)}
          ${pbar('English Proficiency', infra.englishProficiency ?? 0)}
          ${pbar('Airport Connectivity', infra.airportConnectivity ?? 0)}
        </div>
        <div style="flex:1;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:16px">
          ${pbar('Safety Index', safety.safetyIndex ?? 0)}
          ${pbar('Nomad Score', nomad.overallScore ?? 0)}
          <div style="margin-top:12px;padding-top:10px;border-top:1px solid #e5e7eb">
            <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:6px">
              <span style="color:#6b7280">Crime Level</span>
              <strong>${safety.crimeLevel ?? '--'}</strong>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:6px">
              <span style="color:#6b7280">Currency Stability</span>
              <strong>${macro.currencyStability ?? '--'}</strong>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:#6b7280">Inflation Rate</span>
              <strong>${macro.inflationRate ?? '--'}%</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VISA & TAX -->
    <div style="margin-bottom:20px">
      <div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6366f1;margin-bottom:6px">LEGAL & FINANCIAL</div>
      <div style="font-size:18px;font-weight:800;color:#111827;margin-bottom:16px">Visa & Tax</div>

      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
        <div style="padding:14px 18px;background:${visa.remoteFriendly ? '#ecfdf5' : '#f9fafb'};border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:13px;font-weight:700;color:#111827">${visa.type ?? 'Standard Visa'}</span>
          <span style="font-size:10px;font-weight:700;padding:3px 10px;border-radius:999px;background:${visa.remoteFriendly ? '#d1fae5' : '#f1f5f9'};color:${visa.remoteFriendly ? '#065f46' : '#6b7280'}">${visa.remoteFriendly ? 'Nomad Friendly' : 'Standard'}</span>
        </div>
        <div style="padding:14px 18px">
          <table style="width:100%;border-collapse:collapse;font-size:11px">
            <tr><td style="padding:5px 0;color:#6b7280">Max stay</td><td style="padding:5px 0;text-align:right;font-weight:600">${visa.stayDurationMonths ?? '--'} months</td></tr>
            <tr><td style="padding:5px 0;color:#6b7280">Processing time</td><td style="padding:5px 0;text-align:right;font-weight:600">~${visa.processingTimeDays ?? '--'} days</td></tr>
            <tr><td style="padding:5px 0;color:#6b7280">Min. income</td><td style="padding:5px 0;text-align:right;font-weight:600">${visa.minIncomeRequirement > 0 ? '$' + visa.minIncomeRequirement + '/mo' : 'None stated'}</td></tr>
            <tr style="border-top:1px solid #e5e7eb"><td style="padding:5px 0;color:#6b7280">Income tax (top)</td><td style="padding:5px 0;text-align:right;font-weight:600">${tax.personalIncomeTaxTopRate ?? '--'}%</td></tr>
            <tr><td style="padding:5px 0;color:#6b7280">Corporate tax</td><td style="padding:5px 0;text-align:right;font-weight:600">${tax.corporateTax ?? '--'}%</td></tr>
            <tr><td style="padding:5px 0;color:#6b7280">Capital gains tax</td><td style="padding:5px 0;text-align:right;font-weight:600">${tax.capitalGainsTax ?? '--'}%</td></tr>
          </table>
        </div>
      </div>
    </div>

  </div>

  <!-- FOOTER -->
  <div style="padding:16px 36px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center">
    <div style="font-size:10px;color:#9ca3af">Generated by Living Cost Atlas &middot; www.livingcostatlas.com &middot; ${today}</div>
    <div style="font-size:10px;color:#9ca3af">Data updated: ${city.lastUpdated ?? 'N/A'}</div>
  </div>

</div>`;
}


/**
 * Generate and download PDF report for a city.
 * @param {Object} city - Full city object from cityDB
 */
export function downloadCityPDF(city) {
  const html = buildReportHTML(city);

  // Create a temporary container (off-screen)
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
    image:       { type: 'jpeg', quality: 0.95 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF:       { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak:   { mode: ['avoid-all', 'css', 'legacy'] }
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
