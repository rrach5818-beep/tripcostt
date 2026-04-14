/**
 * generate-lisbon-ebook.js
 * Generates the Living Cost Atlas Lisbon 2026 eBook PDF (28 pages)
 * Uses Puppeteer to render HTML -> PDF
 * ASCII only in comments (Vite constraint)
 */
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT = path.resolve(__dirname, '..', 'public', 'ebooks', 'LivingCostAtlas_Lisbon_2026.pdf');

// -- Brand tokens --------------------------------------------------------
const NAVY    = '#1e1b4b';
const NAVY2   = '#0f172a';
const INDIGO  = '#4f46e5';
const GOLD    = '#d4a843';
const GOLD_L  = '#e8c97a';
const WHITE   = '#ffffff';
const GRAY    = '#6b7280';
const LGRAY   = '#f1f5f9';
const RED     = '#b91c1c';
const GREEN   = '#15803d';
const AMBER   = '#b45309';

// -- Reusable HTML helpers -----------------------------------------------

function headerBar() {
  return `<div style="background:${NAVY};padding:10px 40px;display:flex;justify-content:space-between;align-items:center;position:running(header)">
    <span style="font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${WHITE}">LIVING COST ATLAS RELOCATION INTELLIGENCE | CONFIDENTIAL</span>
    <span style="font-size:8px;font-weight:600;letter-spacing:1px;color:${GOLD}">LISBON 2026 -- COST OF LIVING REPORT</span>
  </div>`;
}

function goldRule() {
  return `<div style="height:3px;background:linear-gradient(90deg,${GOLD},${GOLD_L});margin:18px 0 24px;border-radius:2px"></div>`;
}

function sectionTitle(num, title) {
  return `<h2 style="font-size:26px;font-weight:800;color:${NAVY};margin:0 0 4px">${num}. ${title}</h2>${goldRule()}`;
}

function tbl(headers, rows, opts = {}) {
  const hdrBg = opts.hdrBg || NAVY;
  const hdrColor = opts.hdrColor || GOLD;
  const stripe = opts.stripe !== false;
  let h = `<table style="width:100%;border-collapse:collapse;margin:16px 0 20px;font-size:10px"><thead><tr>`;
  headers.forEach(hd => { h += `<th style="background:${hdrBg};color:${hdrColor};padding:10px 12px;text-align:left;font-weight:700;font-size:9px;letter-spacing:0.5px">${hd}</th>`; });
  h += `</tr></thead><tbody>`;
  rows.forEach((row, i) => {
    const bg = stripe && i % 2 === 1 ? LGRAY : WHITE;
    h += `<tr>`;
    row.forEach((cell, ci) => {
      const fw = ci === 0 ? '600' : '400';
      const clr = opts.redCols && opts.redCols.includes(ci) ? RED : NAVY;
      h += `<td style="padding:9px 12px;border-bottom:1px solid #e2e8f0;background:${bg};color:${clr};font-weight:${fw}">${cell}</td>`;
    });
    h += `</tr>`;
  });
  h += `</tbody></table>`;
  return h;
}

function scoreColor(v) {
  if (v >= 8) return GREEN;
  if (v >= 6) return AMBER;
  return RED;
}

function scoreBadge(v, label) {
  const c = scoreColor(v);
  return `<span style="display:inline-block;background:${c};color:white;font-weight:800;font-size:13px;padding:4px 10px;border-radius:4px;margin-right:6px">${v}</span><span style="font-size:10px;color:${GRAY}">/ 10</span>`;
}

function riskBadge(level) {
  const colors = { 'HIGH MONITOR': RED, 'HIGH': RED, 'MODERATE': AMBER, 'LOW-MODERATE': AMBER, 'LOW': GREEN };
  const c = colors[level] || GRAY;
  return `<span style="display:inline-block;background:${c};color:white;font-weight:700;font-size:8px;padding:4px 10px;border-radius:4px;letter-spacing:0.5px">${level}</span>`;
}

function verdictBadge(text, bg) {
  return `<span style="display:inline-block;background:${bg};color:white;font-weight:700;font-size:9px;padding:5px 14px;border-radius:4px;letter-spacing:0.5px">${text}</span>`;
}

function commentary(text) {
  return `<p style="font-size:10px;color:${GRAY};line-height:1.6;margin:8px 0 20px"><strong style="color:${NAVY}">Commentary.</strong> ${text}</p>`;
}

function pageBreak() {
  return `<div style="page-break-after:always"></div>`;
}

// -- Pages ---------------------------------------------------------------

function coverPage() {
  return `
<div style="width:100%;min-height:100vh;margin:-40px -40px 0 -40px;padding:0;position:relative;overflow:hidden;page-break-after:always">
  <!-- Gold top bar -->
  <div style="width:100%;height:8px;background:linear-gradient(90deg,${GOLD},${GOLD_L})"></div>

  <!-- Left accent bar -->
  <div style="position:absolute;top:0;left:0;width:28px;height:100%;background:${NAVY2}"></div>

  <!-- Top half: navy background -->
  <div style="background:#1a2332;padding:50px 60px 40px 70px;min-height:48vh;position:relative">
    <div style="font-size:22px;font-weight:900;color:${GOLD};letter-spacing:2px">LIVING COST ATLAS</div>
    <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:4px;border-bottom:1px solid rgba(255,255,255,0.15);padding-bottom:12px;display:inline-block">RELOCATION INTELLIGENCE SERIES &middot; 2026</div>

    <h1 style="font-size:32px;font-weight:600;color:${WHITE};margin:50px 0 16px;line-height:1.3">The Complete Cost of Living<br>& Relocation Guide</h1>
    <div style="font-size:52px;font-weight:900;color:${GOLD};letter-spacing:2px;margin:20px 0 8px;line-height:1.1">LISBON, PORTUGAL</div>
    <div style="font-size:14px;color:${GOLD_L};letter-spacing:8px;margin-bottom:16px">2 0 2 6  E D I T I O N</div>
    <div style="width:80px;height:3px;background:${GOLD};margin:20px 0"></div>
    <p style="font-size:13px;color:rgba(255,255,255,0.55);font-style:italic;margin-top:16px">Data-Driven Insights for Remote Workers, Expats & Global Professionals</p>

    <p style="font-size:9px;color:rgba(255,255,255,0.35);margin-top:40px">Prepared by <strong style="color:rgba(255,255,255,0.55)">Living Cost Atlas Analytics Division</strong> | Relocation Intelligence Report | 2026</p>
  </div>

  <!-- Diagonal gold stripe -->
  <div style="width:100%;height:20px;background:linear-gradient(135deg,${GOLD} 0%,${GOLD_L} 100%);transform:skewY(-1.5deg);margin:-10px 0"></div>

  <!-- Bottom half: darker navy with LCA watermark -->
  <div style="background:${NAVY2};padding:60px 70px;min-height:42vh;position:relative;overflow:hidden">
    <div style="position:absolute;bottom:-20px;right:30px;font-size:260px;font-weight:900;color:rgba(255,255,255,0.035);letter-spacing:-10px;line-height:1">LCA</div>

    <!-- Bottom footer text -->
    <div style="position:absolute;bottom:30px;left:70px;right:70px">
      <div style="height:1px;background:rgba(255,255,255,0.08);margin-bottom:12px"></div>
      <div style="display:flex;justify-content:space-between">
        <span style="font-size:8px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.3)">LIVING COST ATLAS RELOCATION INTELLIGENCE | CONFIDENTIAL</span>
        <span style="font-size:8px;font-weight:600;letter-spacing:1px;color:${GOLD}">LISBON 2026 -- COST OF LIVING REPORT</span>
      </div>
    </div>
  </div>
</div>`;
}

function tocPage() {
  const items = [
    ['01','Executive Summary','3'],['02','Quick Fact Sheet','5'],['03','Detailed Cost Breakdown','7'],
    ['04','Monthly Budget Scenarios','11'],['05','Neighborhood Analysis','14'],['06','Work Infrastructure & Digital Readiness','17'],
    ['07','Safety & Quality of Life','18'],['08','City Comparison -- Lisbon vs. Peer Cities','19'],
    ['09','Pros & Cons Summary','21'],['10','Who Should Move to Lisbon?','23'],
    ['11','Risk Factors & Economic Outlook','24'],['12','Living Cost Atlas Index Methodology','25'],
    ['13','Final Verdict','27']
  ];
  let rows = items.map(([n,t,p]) => `
    <tr>
      <td style="padding:14px 12px;border-bottom:1px solid #e2e8f0;font-weight:800;color:${GOLD};font-size:13px;width:50px">${n}</td>
      <td style="padding:14px 12px;border-bottom:1px solid #e2e8f0;font-size:13px;color:${NAVY};font-weight:500">${t}</td>
      <td style="padding:14px 12px;border-bottom:1px solid #e2e8f0;font-size:13px;color:${NAVY};font-weight:700;text-align:right;width:50px">${p}</td>
    </tr>`).join('');

  return `
  <h1 style="font-size:30px;font-weight:800;color:${NAVY};margin-bottom:8px">Table of Contents</h1>
  ${goldRule()}
  <table style="width:100%;border-collapse:collapse">
    <thead><tr>
      <th style="background:${NAVY};color:${GOLD};padding:10px 12px;text-align:left;font-size:9px;letter-spacing:1px"></th>
      <th style="background:${NAVY};color:${GOLD};padding:10px 12px;text-align:left;font-size:9px;letter-spacing:1px">Section</th>
      <th style="background:${NAVY};color:${GOLD};padding:10px 12px;text-align:right;font-size:9px;letter-spacing:1px">Page</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>
  ${pageBreak()}`;
}

function execSummary() {
  return `
  ${sectionTitle('01','Executive Summary')}
  <p style="font-size:11px;color:#374151;line-height:1.7;margin-bottom:20px">Lisbon has emerged as one of Europe's most strategically compelling relocation destinations for remote workers, digital nomads, and international professionals. As of 2026, the Portuguese capital offers a rare combination of Mediterranean climate, robust digital infrastructure, EU legal stability, and a cost profile that -- while rising -- remains notably competitive against its Western European counterparts. This report, prepared by Living Cost Atlas Analytics, provides a rigorous, data-driven assessment of Lisbon's cost landscape, livability metrics, and relocation risk profile for the 2026 calendar year.</p>

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin:24px 0 8px">Estimated Monthly Living Costs -- 2026</h3>
  ${tbl(
    ['Resident Profile','Monthly Estimate (EUR)','Lifestyle Descriptor'],
    [
      ['Budget Nomad','&#8364;1,200 -- &#8364;1,635','Shared housing, local transport, home cooking'],
      ['Standard Remote Professional','&#8364;2,825 -- &#8364;3,875','Private 1BR, coworking, regular dining out'],
      ['Premium Lifestyle Expat','&#8364;8,000 -- &#8364;13,000+','Prime district, premium services, schooling']
    ]
  )}
  <p style="font-size:9px;color:${GRAY};font-style:italic;margin:-12px 0 20px">Costs include rent, utilities, food, transport and discretionary spending. International schooling, vehicle ownership and premium health cover are additional.</p>

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin:20px 0 8px">Key Strengths</h3>
  ${tbl(
    ['Strength','Commentary'],
    [
      ['EU Membership & Legal Stability','Residency rights, banking passporting, and labor protections under EU law unavailable in non-EU destinations.'],
      ['Digital Nomad Visa (D8)','One of Europe\'s most accessible remote-worker visa pathways; requires proof of remote income above 4x the Portuguese minimum wage (&#8364;3,040/month).'],
      ['IFICI Tax Incentive','Successor to the NHR regime. Qualifying foreign-income earners benefit from flat 20% IRS rate on Portuguese-source income and exemptions on certain foreign income.'],
      ['World-Class Connectivity','Fiber penetration exceeds 90% in the urban core; average download speeds surpass 120 Mbps, placing Lisbon in Europe\'s top tier.'],
      ['Climate Dividend','300+ annual sunshine days and temperate winters reduce expenditure on heating, clothing, and indoor entertainment.'],
      ['English Prevalence','English proficiency score of 75/100. Over 78% of the under-40 urban workforce is English-capable.']
    ]
  )}

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin:20px 0 8px">Key Risks</h3>
  ${tbl(
    ['Risk Factor','Impact Summary'],
    [
      ['Housing Cost Inflation','Rents in prime districts rose 35--50% between 2020 and 2025; year-on-year growth moderating to 8--12% in 2026 but structural supply constraints persist.'],
      ['Bureaucratic Friction','NIF acquisition, AIMA residency permits, and tax registration remain time-intensive. Processing times for first-permit applications average 4--8 months.'],
      ['IFICI Eligibility Gaps','The NHR successor regime carries narrower occupation and income category eligibility, creating planning uncertainty for some applicant profiles.'],
      ['Low Local Salary Ceiling','For those seeking Portuguese employment (rather than remote income), median net salaries of &#8364;1,200--&#8364;1,400/month limit budget flexibility.'],
      ['Overtourism Pressure','Short-term rental concentration in historic districts has disrupted long-term housing supply and community cohesion.']
    ],
    { hdrBg: '#7f1d1d', hdrColor: WHITE }
  )}

  ${pageBreak()}

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin:20px 0 8px">Living Cost Atlas Index Score -- Lisbon 2026</h3>
  ${tbl(
    ['Dimension','Weight','Score','Contribution','Rationale'],
    [
      ['Affordability','30%','6.5 / 10','1.95','Rents have risen sharply; grocery inflation embedded'],
      ['Infrastructure','20%','8.2 / 10','1.64','Best-in-class fiber; strong coworking ecosystem'],
      ['Safety','15%','8.5 / 10','1.28','Top-5 EU capital safety; low violent crime rate'],
      ['Quality of Life','20%','8.0 / 10','1.60','Climate, culture, walkability partially offset by overtourism'],
      ['Economic Stability','15%','7.0 / 10','1.05','Stable macro; housing policy and IFICI uncertainty noted'],
      ['<strong>COMPOSITE INDEX SCORE</strong>','<strong>100%</strong>','--','<strong>7.52 / 10</strong>','<strong>STRONG BUY -- top-quartile EU relocation destination</strong>']
    ]
  )}
  <p style="font-size:10px;color:#374151;line-height:1.6">A composite score of <strong>7.52/10 (Strong Buy)</strong> places Lisbon in the upper quartile of European relocation markets. The city excels on safety, infrastructure, and quality of life while affordability has moderated from historical highs. Detailed methodology in Section 12.</p>
  ${pageBreak()}`;
}

function quickFactSheet() {
  return `
  ${sectionTitle('02','Quick Fact Sheet')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">Rapid-reference overview of Lisbon's key urban, logistical, and cost parameters as of Q1 2026.</p>
  ${tbl(
    ['Parameter','Value / Estimate','Source / Context'],
    [
      ['Country','Portugal (EU member since 1986)','Eurozone; Schengen Area'],
      ['City Population','&#8776; 548,000 (city proper)','Metro area &#8776; 2.8 million -- INE 2024'],
      ['Currency','Euro (EUR, &#8364;)','Eurozone member; no FX risk within EU'],
      ['Official Language','Portuguese','English widely spoken under-40 professionals'],
      ['Time Zone','WET / WEST UTC+0 / UTC+1','Good US East Coast & African overlap'],
      ['Rent -- 1BR City Centre','&#8364;1,500 -- &#8364;2,200 / month','Varies by district and building quality'],
      ['Rent -- 1BR Outside Centre','&#8364;1,000 -- &#8364;1,400 / month','Benfica, Odivelas, Almada corridors'],
      ['Rent -- 2BR City Centre','&#8364;2,000 -- &#8364;3,000 / month','Chiado, Principe Real, Parque das Nacoes'],
      ['Rent -- 2BR Outside Centre','&#8364;1,400 -- &#8364;1,900 / month','Rising; metro expansion driving demand'],
      ['Coworking -- Hot Desk','&#8364;150 -- &#8364;300 / month','120+ spaces citywide as of 2025'],
      ['Coworking -- Dedicated Desk','&#8364;300 -- &#8364;500 / month','Premium: Second Home, Heden, LACS'],
      ['Internet Speed (avg.)','&#8776; 120 Mbps','Fiber penetration > 90%'],
      ['Home Internet','&#8364;30 -- &#8364;50 / month','NOS, MEO, Vodafone fiber bundles'],
      ['Mobile Plan (20+ GB)','&#8364;15 -- &#8364;35 / month','5G in metro core'],
      ['Safety Index','85 / 100','Among Europe\'s safest capital cities'],
      ['Visa Options','D7, D8 Digital Nomad, IFICI','D8 requires &#8805; &#8364;3,040/month remote income'],
      ['Climate','Mediterranean (Csa)','Mild winters; warm, dry summers'],
      ['Annual Sunshine','&#8776; 2,799 hours / year','One of Europe\'s sunniest capitals'],
      ['English Proficiency','75 / 100','Strong in under-40 urban cohort'],
      ['Healthcare System','SNS (public) + Private','Private insurance from &#8364;50--150/month'],
      ['Avg. Local Net Salary','&#8364;1,200 -- &#8364;1,400 / month','National median; expat remote workers earn more']
    ]
  )}
  <p style="font-size:9px;color:${GRAY};font-style:italic">Sources: INE Portugal, Eurostat, Numbeo 2025--2026, EF EPI 2024, IPMA, ANACOM.</p>
  ${pageBreak()}`;
}

function detailedCostBreakdown() {
  return `
  ${sectionTitle('03','Detailed Cost Breakdown')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">Itemized monthly cost estimates across all major expenditure categories relevant to international residents in Lisbon. All figures are in EUR and reflect Q1 2026 market conditions.</p>

  <h3 style="font-size:15px;font-weight:700;color:${NAVY}">3.1 Housing & Accommodation</h3>
  ${tbl(
    ['Property Type','City Centre','Outside Centre','Premium District','Budget Zone'],
    [
      ['Studio / 0BR','&#8364;1,100 -- &#8364;1,500','&#8364;750 -- &#8364;1,000','&#8364;1,600 -- &#8364;2,200','&#8364;700 -- &#8364;950'],
      ['1-Bedroom','&#8364;1,500 -- &#8364;2,200','&#8364;1,000 -- &#8364;1,400','&#8364;2,200 -- &#8364;3,200','&#8364;900 -- &#8364;1,200'],
      ['2-Bedroom','&#8364;2,000 -- &#8364;3,000','&#8364;1,400 -- &#8364;1,900','&#8364;3,000 -- &#8364;5,000','&#8364;1,200 -- &#8364;1,700'],
      ['3-Bedroom','&#8364;2,800 -- &#8364;4,200','&#8364;1,800 -- &#8364;2,600','&#8364;4,500 -- &#8364;7,000+','&#8364;1,600 -- &#8364;2,200'],
      ['Coliving / Shared','&#8364;600 -- &#8364;900','&#8364;450 -- &#8364;700','&#8364;900 -- &#8364;1,300','&#8364;400 -- &#8364;600'],
      ['Short-Term (1mo)','&#8364;2,000 -- &#8364;3,500','&#8364;1,300 -- &#8364;1,900','&#8364;3,500 -- &#8364;6,000','N/A']
    ]
  )}
  ${commentary('Lisbon\'s residential rental market remains under sustained upward pressure. The 2025--2026 period saw year-on-year rent growth of 8--12% in prime areas. Budget-conscious renters are increasingly relocating to outer municipalities -- Amadora, Loures, Almada -- accepting 30--50 min commutes in exchange for 25--40% lower rents.')}

  <h3 style="font-size:15px;font-weight:700;color:${NAVY}">3.2 Utilities</h3>
  ${tbl(
    ['Utility','Monthly Estimate (EUR)','Notes'],
    [
      ['Electricity','&#8364;40 -- &#8364;80','Varies with apartment size and season'],
      ['Gas (heating/cooking)','&#8364;15 -- &#8364;40','Many apartments are electric-only'],
      ['Water','&#8364;10 -- &#8364;20','Municipally subsidized; low cost'],
      ['Condominium Fee','&#8364;30 -- &#8364;120','Applies to managed buildings'],
      ['<strong>Total Utilities</strong>','<strong>&#8364;80 -- &#8364;200</strong>','Average 1BR unfurnished apartment']
    ]
  )}
  ${commentary('Portugal\'s electricity costs are moderate within the EU. Renewable energy (wind + solar) now exceeds 60% of electricity generation.')}

  ${pageBreak()}

  <h3 style="font-size:15px;font-weight:700;color:${NAVY}">3.3 Internet & Mobile Connectivity</h3>
  ${tbl(
    ['Service','Provider Options','Monthly Cost','Speed / Data'],
    [
      ['Home Fiber','NOS, MEO, Vodafone, NOWO','&#8364;25 -- &#8364;40','200 -- 1,000 Mbps'],
      ['Home Bundle','NOS, MEO, Vodafone','&#8364;35 -- &#8364;55','200 -- 500 Mbps'],
      ['Mobile SIM-only (20 GB+)','NOWO, NOS, Vodafone','&#8364;15 -- &#8364;25','4G / 5G urban'],
      ['Mobile Unlimited','Vodafone, NOS','&#8364;28 -- &#8364;45','5G metro core'],
      ['Portable WiFi / eSIM','Ubigi, Airalo, Holafly','&#8364;25 -- &#8364;60','Variable -- backup']
    ]
  )}
  ${commentary('Portugal ranks top-5 EU states for fiber penetration. ANACOM data confirms 95%+ of Lisbon households have fiber access. 5G coverage in the metro area is robust.')}

  <h3 style="font-size:15px;font-weight:700;color:${NAVY}">3.4 Food -- Groceries & Dining</h3>
  ${tbl(
    ['Category','Item / Description','Estimate (EUR)'],
    [
      ['Groceries','Monthly basket -- solo (budget)','&#8364;200 -- &#8364;280'],
      ['Groceries','Monthly basket -- solo (standard)','&#8364;280 -- &#8364;380'],
      ['Groceries','Monthly basket -- couple (standard)','&#8364;450 -- &#8364;600'],
      ['Dining','Lunch menu -- prato do dia (incl. drink)','&#8364;8 -- &#8364;13'],
      ['Dining','Mid-range restaurant, 2 persons','&#8364;40 -- &#8364;65'],
      ['Dining','International / fine dining, 2 persons','&#8364;80 -- &#8364;150+'],
      ['Dining','Fast food','&#8364;8 -- &#8364;12'],
      ['Dining','Coffee (espresso / galao)','&#8364;0.80 -- &#8364;1.50'],
      ['Dining','Beer (0.33L, restaurant)','&#8364;1.50 -- &#8364;3.00'],
      ['Dining','Domestic wine (bottle, supermarket)','&#8364;3 -- &#8364;8']
    ]
  )}
  ${commentary('The prato do dia lunch culture allows quality hot meals under &#8364;13. Lisbon retains a 30--45% cost discount versus Paris, Amsterdam, or Zurich.')}

  ${pageBreak()}

  <h3 style="font-size:15px;font-weight:700;color:${NAVY}">3.5 Transportation</h3>
  ${tbl(
    ['Mode','Option / Description','Monthly Cost'],
    [
      ['Public Transport','Navegante all-operator unlimited pass','&#8364;40'],
      ['Public Transport','Carris / Metro city-only pass','&#8364;30'],
      ['Taxi / Rideshare','Average 5 km Uber / Bolt trip','&#8364;6 -- &#8364;10'],
      ['Taxi / Rideshare','Monthly rideshare (moderate use)','&#8364;80 -- &#8364;150'],
      ['Car Ownership','Total monthly excl. depreciation','&#8364;350 -- &#8364;600'],
      ['Bicycle / Scooter','Gira city bike annual subscription','&#8776; &#8364;1.69 / month'],
      ['Train (intercity)','Lisbon -- Porto (Alfa Pendular)','&#8364;25 -- &#8364;40'],
      ['Airport','Metro to Aeroporto station','&#8364;1.65 single']
    ]
  )}
  ${commentary('The Navegante intermodal pass at &#8364;40/month is exceptional value. Car ownership is discretionary for city-dwellers but necessary in outer municipalities.')}

  <h3 style="font-size:15px;font-weight:700;color:${NAVY}">3.6 Coworking, Fitness, Entertainment & Insurance</h3>
  ${tbl(
    ['Category','Option / Description','Monthly Cost (EUR)'],
    [
      ['Coworking','Hot desk (standard)','&#8364;150 -- &#8364;250'],
      ['Coworking','Dedicated desk (mid-range)','&#8364;300 -- &#8364;450'],
      ['Coworking','Private 1-person office','&#8364;500 -- &#8364;900'],
      ['Coworking','Premium (Second Home, Heden, LACS)','&#8364;350 -- &#8364;600'],
      ['Gym','Chain gym','&#8364;30 -- &#8364;55'],
      ['Gym','Boutique / CrossFit / yoga','&#8364;60 -- &#8364;120'],
      ['Entertainment','Cinema ticket','&#8364;8 -- &#8364;12'],
      ['Entertainment','Monthly budget (moderate)','&#8364;100 -- &#8364;250'],
      ['Health Insurance','Basic expat private plan','&#8364;50 -- &#8364;90'],
      ['Health Insurance','Comprehensive international','&#8364;120 -- &#8364;300'],
      ['Private School','International school (annual)','&#8364;8,000 -- &#8364;20,000 / yr']
    ]
  )}
  ${commentary('Lisbon\'s coworking ecosystem has matured to 120+ registered spaces. Health insurance is low-cost by EU standards for residents under 45.')}
  ${pageBreak()}`;
}

function budgetScenarios() {
  return `
  ${sectionTitle('04','Monthly Budget Scenarios')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:20px">Three archetypal resident configurations for Lisbon 2026. Each profile is constructed with itemized monthly expenditures to serve as a realistic financial planning benchmark.</p>

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin-bottom:4px">Profile 1 -- Budget Nomad</h3>
  <p style="font-size:10px;color:#374151;line-height:1.5;margin-bottom:10px"><strong>Lifestyle:</strong> Solo freelancer, shared apartment or coliving space, public transport, majority of meals cooked at home.</p>
  ${tbl(
    ['Expense Category','Monthly Estimate (EUR)'],
    [
      ['Accommodation -- shared room / coliving','&#8364;600 -- &#8364;800'],
      ['Utilities (proportional share)','&#8364;30 -- &#8364;50'],
      ['Home Internet (proportional)','&#8364;10 -- &#8364;15'],
      ['Mobile Plan','&#8364;15 -- &#8364;20'],
      ['Groceries','&#8364;200 -- &#8364;280'],
      ['Dining Out (2--3x per week)','&#8364;80 -- &#8364;120'],
      ['Public Transport -- Navegante pass','&#8364;40'],
      ['Coworking -- occasional day passes','&#8364;30 -- &#8364;60'],
      ['Entertainment & Leisure','&#8364;60 -- &#8364;100'],
      ['Health Insurance (basic private)','&#8364;50 -- &#8364;70'],
      ['Miscellaneous / Contingency (~8%)','&#8364;85 -- &#8364;120'],
      ['<strong>TOTAL MONTHLY ESTIMATE</strong>','<strong style="color:${GOLD}">&#8364;1,200 -- &#8364;1,635</strong>']
    ]
  )}

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin:24px 0 4px">Profile 2 -- Standard Remote Professional</h3>
  <p style="font-size:10px;color:#374151;line-height:1.5;margin-bottom:10px"><strong>Lifestyle:</strong> Mid-career remote employee earning &#8364;3,500--&#8364;6,000/month net. Private 1BR, dedicated coworking, dines out 4--5 times per week.</p>
  ${tbl(
    ['Expense Category','Monthly Estimate (EUR)'],
    [
      ['1BR Apartment -- outside centre','&#8364;1,200 -- &#8364;1,500'],
      ['Utilities','&#8364;80 -- &#8364;120'],
      ['Home Fiber Internet','&#8364;35 -- &#8364;45'],
      ['Mobile Plan (unlimited)','&#8364;25 -- &#8364;35'],
      ['Groceries','&#8364;280 -- &#8364;380'],
      ['Dining Out (4--5x per week)','&#8364;200 -- &#8364;320'],
      ['Transport + occasional rideshare','&#8364;80 -- &#8364;120'],
      ['Coworking -- dedicated desk','&#8364;300 -- &#8364;400'],
      ['Gym Membership','&#8364;35 -- &#8364;55'],
      ['Entertainment & Culture','&#8364;100 -- &#8364;180'],
      ['Health Insurance (standard)','&#8364;80 -- &#8364;120'],
      ['Travel -- short trips (provision)','&#8364;150 -- &#8364;250'],
      ['Miscellaneous / Contingency (~10%)','&#8364;260 -- &#8364;350'],
      ['<strong>TOTAL MONTHLY ESTIMATE</strong>','<strong style="color:${GOLD}">&#8364;2,825 -- &#8364;3,875</strong>']
    ]
  )}

  ${pageBreak()}

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin-bottom:4px">Profile 3 -- Premium Lifestyle Expat</h3>
  <p style="font-size:10px;color:#374151;line-height:1.5;margin-bottom:10px"><strong>Lifestyle:</strong> Senior executive or relocating family. 2--3BR apartment in prime district, vehicle, part-time domestic help, premium Western European standards.</p>
  ${tbl(
    ['Expense Category','Monthly Estimate (EUR)'],
    [
      ['2--3BR Apartment -- prime district','&#8364;3,000 -- &#8364;5,000'],
      ['Utilities -- full household','&#8364;150 -- &#8364;250'],
      ['Home Internet + premium bundle','&#8364;50 -- &#8364;70'],
      ['Mobile Plans -- 2 lines, premium','&#8364;70 -- &#8364;100'],
      ['Groceries (organic, premium)','&#8364;500 -- &#8364;700'],
      ['Dining Out -- daily incl. wine','&#8364;500 -- &#8364;800'],
      ['Car -- fuel, insurance, parking','&#8364;400 -- &#8364;600'],
      ['Private Office / Premium Coworking','&#8364;600 -- &#8364;900'],
      ['Boutique Gym + Fitness','&#8364;100 -- &#8364;180'],
      ['Entertainment, Culture & Nightlife','&#8364;300 -- &#8364;500'],
      ['Comprehensive Health Cover','&#8364;200 -- &#8364;400'],
      ['Domestic Help -- part-time','&#8364;150 -- &#8364;300'],
      ['International School -- 1 child','&#8364;900 -- &#8364;1,500'],
      ['Travel & International Flights','&#8364;400 -- &#8364;800'],
      ['Miscellaneous / Contingency (~10%)','&#8364;720 -- &#8364;1,060'],
      ['<strong>TOTAL MONTHLY ESTIMATE</strong>','<strong style="color:${GOLD}">&#8364;8,040 -- &#8364;13,160</strong>']
    ]
  )}
  <p style="font-size:10px;color:#374151;line-height:1.6;margin-top:12px">The premium profile confirms that Lisbon -- while no longer a budget destination -- remains <strong>25--40% less expensive</strong> than equivalent premium lifestyles in Paris, London, or Amsterdam.</p>
  ${pageBreak()}`;
}

function neighborhoodAnalysis() {
  function nhood(name, type, r1br, r2br, desc, strengths, limitations, bestFor) {
    let sRows = strengths.map(s => `<tr><td style="padding:8px 10px;border-bottom:1px solid #e2e8f0;font-size:10px;color:${GREEN}">+ ${s}</td></tr>`).join('');
    let lRows = limitations.map(l => `<tr><td style="padding:8px 10px;border-bottom:1px solid #e2e8f0;font-size:10px;color:${RED}">-- ${l}</td></tr>`).join('');
    return `
    <h3 style="font-size:17px;font-weight:700;color:${NAVY};margin:24px 0 2px">${name}</h3>
    <p style="font-size:10px;color:${GRAY};font-style:italic;margin-bottom:10px">District Type: ${type}</p>
    ${tbl(['','1-Bedroom (monthly)','2-Bedroom (monthly)'], [['Rental Range', r1br, r2br]])}
    <p style="font-size:10px;color:#374151;line-height:1.5;margin-bottom:8px"><strong>Character & Vibe --</strong> ${desc}</p>
    <div style="display:flex;gap:12px;margin-bottom:8px">
      <div style="flex:1"><table style="width:100%;border-collapse:collapse"><thead><tr><th style="background:${GREEN};color:white;padding:6px 10px;text-align:left;font-size:9px">Strengths</th></tr></thead><tbody>${sRows}</tbody></table></div>
      <div style="flex:1"><table style="width:100%;border-collapse:collapse"><thead><tr><th style="background:${RED};color:white;padding:6px 10px;text-align:left;font-size:9px">Limitations</th></tr></thead><tbody>${lRows}</tbody></table></div>
    </div>
    <p style="font-size:10px;margin-bottom:16px"><strong>Best For --</strong> ${bestFor}</p>`;
  }

  return `
  ${sectionTitle('05','Neighborhood Analysis')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">Neighborhood selection is one of the most consequential decisions in any Lisbon relocation. The following five profiles evaluate rental economics, lifestyle character, and demographic fit.</p>

  ${nhood('Baixa / Chiado', 'Historic Centre & Commercial Core',
    '&#8364;1,700 -- &#8364;2,400 / month', '&#8364;2,500 -- &#8364;3,800 / month',
    'The historic centre of Lisbon. Urban, tourist-heavy, culturally vibrant, and walkable to virtually every central amenity.',
    ['Unbeatable walkability -- most errands within 15 min on foot','Excellent metro connectivity and tram access','Vibrant dining, nightlife, arts programming','High-prestige address'],
    ['Significant overtourism; Airbnb density','Elevated noise levels in summer','Premium rents reflect location over utility','Parking scarce and expensive'],
    'Solo nomads, young professionals, short-to-medium stays, client-facing consultants'
  )}

  ${nhood('Alfama', 'Historic / Bohemian / Fado Quarter',
    '&#8364;1,400 -- &#8364;2,000 / month', '&#8364;2,000 -- &#8364;3,000 / month',
    'Lisbon\'s oldest district -- labyrinthine medieval streets, fado culture, Moorish architecture, and sweeping miradouros.',
    ['Authentic Lisbon character; highly photogenic','Strong local community in residential pockets','Panoramic views unmatched citywide','Generally lower rents than Chiado'],
    ['Steep cobblestoned streets -- physically demanding','Limited modern amenities','Old building stock with maintenance issues','Short-term rental saturation'],
    'Creatives, writers, photographers; medium-term cultural immersion seekers'
  )}

  ${pageBreak()}

  ${nhood('Parque das Nacoes', 'Modern Business District & Family Zone',
    '&#8364;1,400 -- &#8364;1,900 / month', '&#8364;2,000 -- &#8364;2,900 / month',
    'Built for 1998 World Expo. Wide riverside promenades, modern architecture, extensive parks. Family and corporate-oriented.',
    ['Modern building stock: elevators, parking, wide streets','Family-friendly -- playgrounds, cycle paths, riverside','Direct airport metro connection (10 min)','Lower crime rate than historic centre'],
    ['Limited authentic Lisbon character','Car or metro dependent beyond immediate area','Retail dominated by chain operators','Less central for social/cultural events'],
    'Families, corporate relocatees, professionals with high travel frequency'
  )}

  ${nhood('Campo de Ourique', 'Residential & Affluent Local Neighborhood',
    '&#8364;1,300 -- &#8364;1,800 / month', '&#8364;1,900 -- &#8364;2,700 / month',
    'Lisbon\'s most beloved residential neighborhood. Tree-lined streets, a covered market, independent bakeries without tourist pressure.',
    ['Authentic residential experience; long-term residents','Excellent local amenities: market, pharmacy, dining','Quieter and more family-oriented','Good bus connections to city centre'],
    ['No direct metro line','Rents risen sharply due to expat demand','Fewer coworking options within walking distance','Limited nightlife'],
    'Long-term expats, families, professionals seeking genuine neighborhood life, retirees'
  )}

  ${pageBreak()}

  ${nhood('Principe Real / Santos / Estrela', 'Upscale / Design-Forward / Diplomatic Belt',
    '&#8364;1,800 -- &#8364;2,600 / month', '&#8364;2,600 -- &#8364;4,000 / month',
    'Lisbon\'s premium residential spine -- favored by diplomats, senior executives, and design professionals.',
    ['Highest-quality stock: renovated period properties','Prestige address with strong professional network','Excellent fine dining, boutique retail, arts','Walking distance to Chiado with residential calm'],
    ['Most expensive residential cluster','Limited metro access -- tram and bus dependent','Competitive rental market with very low vacancy','Evening parking pressure'],
    'Senior executives, diplomats, high-net-worth individuals, design professionals'
  )}
  ${pageBreak()}`;
}

function workInfrastructure() {
  return `
  ${sectionTitle('06','Work Infrastructure & Digital Readiness')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">Scorecard assessing Lisbon's operational environment for remote workers, founders, and digital professionals.</p>
  ${tbl(
    ['Category','Score','/10','Justification'],
    [
      ['Internet Reliability',`${scoreBadge(9.0)}`,'','Fiber penetration > 90%. Average 120 Mbps. Redundant providers (NOS, MEO, Vodafone). Negligible outage rates.'],
      ['Coworking Ecosystem',`${scoreBadge(8.0)}`,'','Over 120 spaces citywide. Strong operator presence (Second Home, Heden). Day-pass economy well-developed.'],
      ['Startup & Business',`${scoreBadge(7.0)}`,'','Web Summit host. Startup Lisboa, Beta-i active accelerators. VC growing but modest vs. Berlin or Amsterdam.'],
      ['English Friendliness',`${scoreBadge(8.0)}`,'','Score 75/100. Under-40 workers overwhelmingly English-capable. Government services remain Portuguese-language.'],
      ['Banking & Financial',`${scoreBadge(6.0)}`,'','EU passporting solid. Fintech (Revolut, Wise, N26) widely accepted. Local bank account opening takes 2--6 weeks.'],
      ['Tax System Complexity',`${scoreBadge(5.0)}`,'','Bureaucratically intensive. IFICI requires professional guidance. Self-employment registration is multi-step.'],
      ['Visa & Residency',`${scoreBadge(8.0)}`,'','D8, D7, and IFICI provide tiered access. AIMA processing 4--8 months is principal friction point.'],
      ['Office Supply & Svcs',`${scoreBadge(7.0)}`,'','Well-served by major providers. Legal, accounting, and relocation support ecosystem is mature.']
    ]
  )}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-top:12px"><strong>Composite Infrastructure Score: 7.3 / 10.</strong> Lisbon's digital work environment is world-class at the technical layer while operating with moderate friction at the administrative layer.</p>
  ${pageBreak()}`;
}

function safetyQoL() {
  return `
  ${sectionTitle('07','Safety & Quality of Life')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">Objective assessment of day-to-day resident wellbeing across seven critical dimensions.</p>
  ${tbl(
    ['Dimension','Score','Analysis'],
    [
      ['Crime Rate & Safety','<strong style="color:'+GREEN+'">8.5/10</strong>','Safety Index: 85/100 -- superior to Rome, Madrid, Paris, Brussels. Violent crime rare. Petty theft primary concern in tourist areas.'],
      ['Healthcare Quality','<strong style="color:'+GREEN+'">7.5/10</strong>','SNS provides EU-standard care. Private healthcare (CUF, Luz Saude) delivers same-week appointments at &#8364;50--120. Combined model recommended.'],
      ['Walkability','<strong style="color:'+GREEN+'">8.5/10</strong>','Central districts score 85--95/100. Daily needs within 15-minute walk. Hills create gradient challenges in Alfama/Mouraria.'],
      ['Public Transport','<strong style="color:'+GREEN+'">7.5/10</strong>','Metro (4 lines, 56 stations), 4--6 min peak headways. Navegante pass &#8364;40/month exceptional value. Gaps in western corridors.'],
      ['Air Quality','<strong style="color:'+GREEN+'">8.0/10</strong>','Atlantic winds flush pollutants. PM2.5: 8--10 ug/m3, well below EU limit of 25. Cleaner than Barcelona, Rome.'],
      ['Climate Comfort','<strong style="color:'+GREEN+'">9.0/10</strong>','Mediterranean Csa. 300+ sunshine days. Jan avg 12C, Aug high 28C. No sub-zero winters. Europe\'s most comfortable climates.'],
      ['Cultural & Social','<strong style="color:'+GREEN+'">8.0/10</strong>','World-class museums (Gulbenkian, MAAT), fado scene, Michelin restaurants. Active international expat community.']
    ]
  )}
  ${pageBreak()}`;
}

function cityComparison() {
  return `
  ${sectionTitle('08','City Comparison -- Lisbon vs. Peer Cities')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">Lisbon benchmarked against four commonly considered peer destinations. Cost differentials expressed as percentage deviations from Lisbon as baseline (100%).</p>

  <h3 style="font-size:14px;font-weight:700;color:${NAVY}">8.1 Monthly Rent -- 1-Bedroom City Centre</h3>
  ${tbl(
    ['City','Monthly Rent','vs. Lisbon','Notes'],
    [
      ['Lisbon, Portugal','&#8364;1,500 -- &#8364;2,200','Baseline','IFICI incentive in place'],
      ['Barcelona, Spain','&#8364;1,600 -- &#8364;2,400','+10% to +15%','Rent ceiling laws apply'],
      ['Valencia, Spain','&#8364;900 -- &#8364;1,400','−35% to −40%','Rapid appreciation; still cheaper'],
      ['Berlin, Germany','&#8364;1,400 -- &#8364;2,100','−5% to +5%','Strong tenant rights'],
      ['Bangkok, Thailand','&#8364;500 -- &#8364;1,100','−50% to −60%','No EU access; visa complexity']
    ]
  )}

  <h3 style="font-size:14px;font-weight:700;color:${NAVY}">8.2 Monthly Food Cost -- Solo, Mid-Range</h3>
  ${tbl(
    ['City','Monthly Food','vs. Lisbon','Notes'],
    [
      ['Lisbon, Portugal','&#8364;480 -- &#8364;650','Baseline','Strong grocery value'],
      ['Barcelona, Spain','&#8364;520 -- &#8364;720','+8% to +12%','Tourist zones inflate prices'],
      ['Valencia, Spain','&#8364;380 -- &#8364;520','−20% to −25%','Excellent local produce'],
      ['Berlin, Germany','&#8364;550 -- &#8364;750','+12% to +20%','Higher grocery inflation'],
      ['Bangkok, Thailand','&#8364;250 -- &#8364;400','−40% to −50%','Street food economy']
    ]
  )}

  <h3 style="font-size:14px;font-weight:700;color:${NAVY}">8.3 Overall Monthly Cost -- Standard Professional</h3>
  ${tbl(
    ['City','Monthly Total','vs. Lisbon','LCA Score','Visa Ease'],
    [
      ['Lisbon, Portugal','&#8364;2,825 -- &#8364;3,875','Baseline 100%','7.52 / 10','D7 / D8 Nomad Visa'],
      ['Barcelona, Spain','&#8364;3,100 -- &#8364;4,200','+10% to +15%','7.10 / 10','EU / NIE registration'],
      ['Valencia, Spain','&#8364;2,200 -- &#8364;3,000','−20% to −25%','7.30 / 10','EU / NIE registration'],
      ['Berlin, Germany','&#8364;3,000 -- &#8364;4,100','+8% to +12%','7.80 / 10','EU / Anmeldung'],
      ['Bangkok, Thailand','&#8364;1,400 -- &#8364;2,200','−40% to −45%','6.90 / 10','LTR visa / complex']
    ]
  )}
  <p style="font-size:10px;color:#374151;line-height:1.6;margin-top:12px"><strong>Comparative Verdict.</strong> Lisbon occupies a distinctive value proposition in the upper-mid range of European destinations. Valencia offers 20--25% lower costs with comparable lifestyle. Berlin delivers superior startup infrastructure at higher cost. Bangkok offers extreme cost advantages but sacrifices EU legal protections.</p>
  ${pageBreak()}`;
}

function prosCons() {
  return `
  ${sectionTitle('09','Pros & Cons Summary')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">A balanced synthesis structured as a decision framework for prospective relocators.</p>

  <h3 style="font-size:16px;font-weight:700;color:${GREEN};margin-bottom:8px">Strengths</h3>
  ${tbl(
    ['Strength','Analysis'],
    [
      ['EU Membership & Legal Security','Residency rights, banking access, and labor protections under EU law.'],
      ['Mediterranean Climate','300+ sunshine days, mild winters, and Atlantic-tempered summers.'],
      ['Safety & Low Crime','Safety Index 85/100 -- consistently among Europe\'s most secure capitals.'],
      ['Digital Infrastructure','Fiber >90%, competitive mobile plans, mature coworking ecosystem.'],
      ['Cultural Richness','World-class museums, fado, Michelin cuisine, cosmopolitan arts scene.'],
      ['English Prevalence','High proficiency (75/100) among under-40 urban population.'],
      ['Tax Optionality','IFICI regime and favorable treaty network for qualifying earners.'],
      ['Atlantic Gateway','Proximity to African/South American markets; Schengen mobility.']
    ],
    { hdrBg: GREEN, hdrColor: WHITE }
  )}

  <h3 style="font-size:16px;font-weight:700;color:${RED};margin:24px 0 8px">Limitations</h3>
  ${tbl(
    ['Limitation','Analysis'],
    [
      ['Rising Housing Costs','Rents increased 35--50% since 2020, eroding affordability advantage.'],
      ['Bureaucratic Friction','NIF, AIMA permits, and tax registration remain slow and inconsistent.'],
      ['AIMA Processing Delays','Visa processing 4--8 months creates planning uncertainty.'],
      ['Low Local Wages','Median net &#8364;1,200--1,400/month limits budget flexibility.'],
      ['Overtourism in Centre','Short-term rental saturation degrades residential quality.'],
      ['Administrative Language','Tax authority and healthcare paperwork predominantly Portuguese.'],
      ['Infrastructure Gaps','Metro network gaps; outer districts remain car-dependent.'],
      ['Tax Reform Uncertainty','IFICI restrictions and political debate create planning risk.']
    ],
    { hdrBg: RED, hdrColor: WHITE }
  )}
  ${pageBreak()}`;
}

function whoShouldMove() {
  return `
  ${sectionTitle('10','Who Should Move to Lisbon?')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">Not every relocation profile is equally well-served. The following segmentation provides an honest evaluation.</p>
  ${tbl(
    ['Profile','Verdict','Rationale'],
    [
      ['Solo Digital Nomads',verdictBadge('STRONG RECOMMEND',GREEN),'Excellent base for nomads earning above &#8364;2,500/month. Safety, connectivity, nightlife, English prevalence. D8 Visa provides legal pathway.'],
      ['Couples Without Children',verdictBadge('STRONG RECOMMEND',GREEN),'Dual incomes make Lisbon exceptionally livable. 2BR accessible in outer districts at &#8364;1,400--1,900/month.'],
      ['Families with Children',verdictBadge('CONDITIONAL',AMBER),'International schooling adds &#8364;900--1,670/month per child. Public schooling Portuguese-language only. Budget planning essential.'],
      ['Startup Founders',verdictBadge('RECOMMEND',INDIGO),'Web Summit, Startup Lisboa, growing VC community. Talent pool educated and cost-competitive vs. London or Berlin.'],
      ['Retirees',verdictBadge('STRONG RECOMMEND',GREEN),'D7 Passive Income Visa for income above &#8364;760/month. Climate, healthcare, safety, gastronomy, IFICI regime.']
    ]
  )}
  ${pageBreak()}`;
}

function riskFactors() {
  return `
  ${sectionTitle('11','Risk Factors & Economic Outlook')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">Structured risk assessment addressing primary risk vectors relevant to Lisbon-based international residents as of 2026.</p>
  ${tbl(
    ['Risk Factor','Level','Assessment'],
    [
      ['Housing Market Trajectory',riskBadge('HIGH MONITOR'),'Structural supply constraints suggest sustained above-inflation rent appreciation through at least 2027. Prospective residents should assume no near-term normalization.'],
      ['Inflation & Cost of Living',riskBadge('MODERATE'),'Portuguese CPI moderated to 2.5--3.5%. Food inflation has embedded permanent 15--25% increases vs. 2019 baselines.'],
      ['Visa & Residency Policy',riskBadge('MODERATE'),'D8 and D7 frameworks demonstrate stability since 2022--2023. AIMA processing backlog creates execution risk.'],
      ['Tax Policy Uncertainty',riskBadge('HIGH MONITOR'),'NHR-to-IFICI transition created complexity. Ongoing political debate creates planning horizon risk. Professional advice essential.'],
      ['Overtourism & Social',riskBadge('LOW-MODERATE'),'Alojamento Local moratoriums inconsistently enforced. Trajectory toward managed mitigation rather than reversal.'],
      ['Political & Macro',riskBadge('LOW'),'Portugal politically stable. AD coalition signals continuity on FDI attraction. Public debt below 100% GDP in 2025.']
    ]
  )}
  ${pageBreak()}`;
}

function methodology() {
  return `
  ${sectionTitle('12','Living Cost Atlas Index Methodology')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:16px">The Living Cost Atlas Index is a proprietary composite scoring framework providing standardized, comparable relocation intelligence across global cities.</p>

  <h3 style="font-size:14px;font-weight:700;color:${NAVY}">Dimension Definitions & Weightings</h3>
  ${tbl(
    ['Dimension','Weight','Primary Data Sources','Key Sub-Indicators'],
    [
      ['Affordability','30%','Numbeo, Eurostat, local listings','Rent-to-income ratio, food cost index, transport, utilities, PPP'],
      ['Infrastructure','20%','ANACOM, ITU, coworking DBs, EF EPI','Internet speed/reliability, coworking density, digital payment, English'],
      ['Safety','15%','Numbeo, Eurostat crime, UNODC','Violent crime, petty crime, political stability, institutional trust'],
      ['Quality of Life','20%','IPMA, WHO air quality, Walk Score','Climate, walkability, healthcare, cultural richness, green space'],
      ['Economic Stability','15%','IMF, World Bank, ECB, govt data','Inflation, GDP growth, housing trend, tax stability, currency risk']
    ]
  )}

  <h3 style="font-size:14px;font-weight:700;color:${NAVY};margin:20px 0 8px">Scoring Formula</h3>
  <div style="background:${LGRAY};border:2px solid #e2e8f0;border-radius:8px;padding:16px 20px;margin:12px 0 20px;text-align:center">
    <p style="font-size:11px;font-weight:700;color:${NAVY};margin:0"><strong>LCA Index</strong> = (Affordability x 0.30) + (Infrastructure x 0.20) + (Safety x 0.15) + (Quality of Life x 0.20) + (Economic Stability x 0.15)</p>
  </div>

  <h3 style="font-size:14px;font-weight:700;color:${NAVY}">Lisbon 2026 -- Score Computation</h3>
  ${tbl(
    ['Dimension','Weight','Score','Contribution','Rationale'],
    [
      ['Affordability','30%','6.5/10','1.95','Rents rising; grocery inflation embedded'],
      ['Infrastructure','20%','8.2/10','1.64','Best-in-class fiber; mature coworking'],
      ['Safety','15%','8.5/10','1.28','Top-5 EU capital safety ranking'],
      ['Quality of Life','20%','8.0/10','1.60','Climate & culture offset by overtourism'],
      ['Economic Stability','15%','7.0/10','1.05','Stable macro; IFICI uncertainty noted'],
      ['<strong>COMPOSITE</strong>','<strong>100%</strong>','--','<strong>7.52/10</strong>','<strong>STRONG BUY -- top-quartile EU market</strong>']
    ]
  )}

  ${pageBreak()}

  <h3 style="font-size:14px;font-weight:700;color:${NAVY}">Score Interpretation Scale</h3>
  ${tbl(
    ['Score Range','Classification','Recommendation'],
    [
      ['9.0 -- 10.0','Exceptional','Highest priority; exceptional value/quality ratio'],
      ['8.0 -- 8.9','Strong','Highly recommended; only minor trade-offs'],
      ['7.0 -- 7.9','Solid / Strong Buy','Recommended; strengths clearly outweigh limitations'],
      ['6.0 -- 6.9','Moderate','Viable; significant trade-offs require careful assessment'],
      ['5.0 -- 5.9','Neutral','Destination-specific factors determine suitability'],
      ['Below 5.0','Caution','Significant risk factors; detailed due diligence required']
    ]
  )}
  <p style="font-size:10px;color:#374151;line-height:1.6;margin-top:12px">Lisbon's composite score of <strong>7.52/10 (Solid / Strong Buy)</strong> positions it in the upper tier of mid-range European capitals -- meaningfully ahead of Athens (6.8), Rome (6.9), and Madrid (7.1), and broadly comparable to Amsterdam (7.6) and Vienna (7.8) on a cost-adjusted basis.</p>
  ${pageBreak()}`;
}

function finalVerdict() {
  return `
  ${sectionTitle('13','Final Verdict')}
  <p style="font-size:11px;color:#374151;line-height:1.6;margin-bottom:20px">Living Cost Atlas's assessment of Lisbon as a 2026 relocation destination draws on the comprehensive analysis documented in the preceding twelve sections.</p>

  <div style="display:flex;gap:0;margin:20px 0 28px">
    <div style="flex:1;background:${NAVY};padding:24px;text-align:center;border-radius:8px 0 0 8px">
      <div style="font-size:10px;color:${GOLD};font-weight:600;letter-spacing:1px;margin-bottom:8px">Living Cost Atlas Index</div>
      <div style="font-size:42px;font-weight:900;color:${GOLD}">7.52</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.5)">out of 10</div>
    </div>
    <div style="flex:1;background:#1e293b;padding:24px;text-align:center">
      <div style="font-size:10px;color:${GOLD};font-weight:600;letter-spacing:1px;margin-bottom:8px">Classification</div>
      <div style="font-size:22px;font-weight:900;color:${WHITE};margin-top:10px">SOLID /<br>STRONG BUY</div>
    </div>
    <div style="flex:1;background:#334155;padding:24px;text-align:center;border-radius:0 8px 8px 0">
      <div style="font-size:10px;color:${GOLD};font-weight:600;letter-spacing:1px;margin-bottom:8px">Recommendation</div>
      <div style="font-size:22px;font-weight:900;color:${WHITE};margin-top:10px">PROCEED<br>WITH PLANNING</div>
    </div>
  </div>

  <h3 style="font-size:15px;font-weight:700;color:${NAVY}">For Remote Workers & Digital Nomads</h3>
  <p style="font-size:10px;color:#374151;line-height:1.7;margin-bottom:8px">Lisbon in 2026 remains one of the most operationally sound bases for remote-working professionals in the EU. The D8 Visa provides legal structure, the coworking ecosystem is world-class, and the English-friendly environment reduces onboarding friction to days rather than months. Budget for &#8364;1,200--&#8364;1,800/month for a private 1BR in an outer-central district. Total monthly budgets of &#8364;2,800--&#8364;3,500 support a comfortable, active lifestyle.</p>
  <div style="background:${LGRAY};border-left:4px solid ${GOLD};padding:10px 16px;margin:8px 0 20px"><p style="font-size:10px;color:${NAVY};font-weight:600;margin:0">Recommendation: Proceed. Lisbon remains the most favorable mid-range remote-work destination in the EU.</p></div>

  <h3 style="font-size:15px;font-weight:700;color:${NAVY}">For Families & Long-Term Settlers</h3>
  <p style="font-size:10px;color:#374151;line-height:1.7;margin-bottom:8px">Families face a more complex cost calculus. International schooling, larger apartments, and vehicle ownership push total monthly costs to &#8364;6,000--&#8364;10,000+. Against this, Lisbon offers exceptional safety, family-friendly environments, and a genuinely welcoming culture.</p>
  <div style="background:${LGRAY};border-left:4px solid ${GOLD};padding:10px 16px;margin:8px 0 20px"><p style="font-size:10px;color:${NAVY};font-weight:600;margin:0">Recommendation: Proceed with detailed budget modeling. Clear fit for mid-to-high income families.</p></div>

  <h3 style="font-size:15px;font-weight:700;color:${NAVY}">For Investors & Business Founders</h3>
  <p style="font-size:10px;color:#374151;line-height:1.7;margin-bottom:8px">Lisbon's business-friendly regulatory environment and competitive operating costs attract early-stage founders. Skilled developers can be hired at 30--50% below London or Amsterdam rates. Tax structuring advice is essential given IFICI complexity.</p>
  <div style="background:${LGRAY};border-left:4px solid ${GOLD};padding:10px 16px;margin:8px 0 20px"><p style="font-size:10px;color:${NAVY};font-weight:600;margin:0">Recommendation: Proceed for early-to-growth stage operations. Plan tax structure before incorporation.</p></div>

  ${pageBreak()}

  <h3 style="font-size:16px;font-weight:700;color:${NAVY};margin-bottom:12px">Closing Perspective</h3>
  <p style="font-size:11px;color:#374151;line-height:1.7;margin-bottom:20px">Lisbon is not the bargain it was in 2018. The city has matured as an international destination, and its cost structure has adjusted accordingly. What Lisbon offers in 2026 is something more nuanced and more durable: a city of genuine human-scale quality -- warm, safe, beautiful, well-connected, and culturally alive -- at a price point that still undercuts most of its European peers by a meaningful margin. For professionals, families, and entrepreneurs with the financial means to navigate its housing market, Lisbon remains one of the most rewarding relocation decisions available on the continent.</p>

  <div style="border:2px solid ${GOLD};border-radius:8px;padding:20px 24px;margin:24px 0">
    <p style="font-size:9px;color:${GRAY};line-height:1.6;margin:0;font-style:italic"><strong style="color:${NAVY}">Disclaimer:</strong> This report has been prepared by Living Cost Atlas Analytics Division for informational purposes only. All cost estimates are based on Q4 2025 -- Q1 2026 market data and are subject to change without notice. This document does not constitute legal, tax, or financial advice. Readers are advised to conduct independent verification and consult qualified professionals before making any relocation decisions. Living Cost Atlas accepts no liability for decisions made in reliance on this report. Unauthorized reproduction or redistribution is prohibited.</p>
  </div>

  <p style="font-size:10px;color:${GRAY};text-align:center;margin-top:30px">&#169; 2026 Living Cost Atlas. All rights reserved.</p>`;
}


// -- Assemble full HTML --------------------------------------------------

function buildFullHTML() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @page {
    size: A4;
    margin: 0;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 11px;
    color: #111827;
    background: #fff;
  }
  .page-content {
    padding: 10px 40px 40px;
  }
  h2 { page-break-after: avoid; }
  table { page-break-inside: auto; }
  tr { page-break-inside: avoid; }
</style>
</head>
<body>
  ${coverPage()}
  <div class="page-content">
    ${tocPage()}
    ${execSummary()}
    ${quickFactSheet()}
    ${detailedCostBreakdown()}
    ${budgetScenarios()}
    ${neighborhoodAnalysis()}
    ${workInfrastructure()}
    ${safetyQoL()}
    ${cityComparison()}
    ${prosCons()}
    ${whoShouldMove()}
    ${riskFactors()}
    ${methodology()}
    ${finalVerdict()}
  </div>
</body>
</html>`;
}

// -- Generate PDF --------------------------------------------------------

async function main() {
  console.log('Generating Living Cost Atlas Lisbon 2026 eBook...');

  const html = buildFullHTML();

  // Write debug HTML
  const htmlPath = OUT.replace('.pdf', '.html');
  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log('HTML written to', htmlPath);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: OUT,
    format: 'A4',
    printBackground: true,
    margin: { top: '45px', right: '0', bottom: '40px', left: '0' },
    displayHeaderFooter: true,
    headerTemplate: `<div style="width:100%;background:#1e1b4b;padding:8px 40px;display:flex;justify-content:space-between;align-items:center;font-family:Helvetica,Arial,sans-serif">
      <span style="font-size:7px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:white">LIVING COST ATLAS RELOCATION INTELLIGENCE | CONFIDENTIAL</span>
      <span style="font-size:7px;font-weight:600;letter-spacing:1px;color:#d4a843">LISBON 2026 -- COST OF LIVING REPORT</span>
    </div>`,
    footerTemplate: `<div style="width:100%;padding:8px 40px;display:flex;justify-content:space-between;font-family:Helvetica,Arial,sans-serif;border-top:1px solid #e2e8f0">
      <span style="font-size:7px;color:#9ca3af">&copy; 2026 Living Cost Atlas. All data reflects Q1 2026 market estimates.</span>
      <span style="font-size:7px;color:#9ca3af">-- <span class="pageNumber"></span> --</span>
    </div>`
  });

  await browser.close();
  console.log('PDF generated:', OUT);

  const stats = fs.statSync(OUT);
  console.log('File size:', (stats.size / 1024).toFixed(1), 'KB');
}

main().catch(err => { console.error(err); process.exit(1); });
