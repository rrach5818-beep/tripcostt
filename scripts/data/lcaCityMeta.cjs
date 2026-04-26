/**
 * lcaCityMeta.js
 *
 * Per-city editorial overrides + defaults for the Living Cost Atlas PDF engine.
 * Combined with cityDB.js (numbers) and cityIntel.js (editorial) to build the
 * full ~100-field CITY payload the Python engine consumes.
 *
 * CommonJS so the Node bridge can `require()` it directly.
 *
 * Per-city schema (all keys optional — the bridge uses formula defaults when missing):
 *   facts            : { population_city, population_metro, official_lang, timezone,
 *                        climate_type, sunshine_hours, visa_options, healthcare,
 *                        avg_local_salary }
 *   internet         : { providers, cost }
 *   mobile           : { providers, gb20, unlimited }
 *   food             : { shops, coffee, beer, wine }
 *   transport        : { pass_name, ride_trip, ride_month, petrol, insurance,
 *                        parking, car_total, bike, airport, intercity }
 *   utilities        : { electricity, gas, water, condo_fee, total }
 *   cowork           : { names }
 *   gym              : { chain, boutique }
 *   entertainment    : { cinema, streaming, monthly }
 *   insurance        : { basic, intl }
 *   school           : { annual, monthly, examples }
 *   infraScores      : { startup, banking, tax, visa, office }
 *   infraNotes       : { 8 keys matching engine } -- REQUIRED text per city
 *   indexScores      : { affordability, economic, affordability_note, economic_note }
 *   indexRationale   : { 5 keys matching engine }
 *   verdicts         : { nomads, families, founders } -- recommendation tagline
 *   defaultNotes     : { healthcare, transit }
 *   neighborhoodOverrides : { 'Name': { pros: [..4], cons: [..4] } }
 *
 * The bridge calls meta.defaultNeighborhoodPros(n) / .defaultNeighborhoodCons(n)
 * for any neighborhood without explicit overrides. These are city-level functions
 * that synthesise 4 pros / 4 cons from cityIntel's neighborhood (name, character,
 * oneLineDesc, bestFor, rentRatio).
 */

// ── Shared synthesisers (used as fallbacks when a city omits overrides) ──
function genericPros(n) {
  const rentRatio = n.rentRatio || 1.0;
  const tier = rentRatio >= 1.25 ? 'premium' : rentRatio >= 0.95 ? 'central' : 'value';
  const pros = [];
  pros.push(n.bestFor ? `Aligned with: ${n.bestFor}` : `${n.character || 'Mixed-use'} character supports a strong daily routine.`);
  if (tier === 'premium') {
    pros.push('Above-average building stock with modern amenities and concierge services.');
    pros.push('Higher concentration of cafes, gyms, and English-friendly retail.');
    pros.push('Premium safety footprint — more lighting, security, and pedestrian density.');
  } else if (tier === 'central') {
    pros.push('Strong walking access to coworking, transit, and core lifestyle infrastructure.');
    pros.push('Mature rental inventory across studio, 1BR, and 2BR formats.');
    pros.push('Wide weekday and weekend amenity coverage; rarely a logistical dead zone.');
  } else {
    pros.push('Lower rent per square metre vs. the city average, with comparable lifestyle.');
    pros.push('Quieter residential profile; less tourist density than central districts.');
    pros.push('More green space per resident and family-friendly streetscape.');
  }
  return pros.slice(0, 4);
}

function genericCons(n) {
  const rentRatio = n.rentRatio || 1.0;
  const tier = rentRatio >= 1.25 ? 'premium' : rentRatio >= 0.95 ? 'central' : 'value';
  const cons = [];
  if (tier === 'premium') {
    cons.push('Top-quartile rents that reset upward annually; landlord pricing power is real.');
    cons.push('Tourist and short-let pressure can push month-to-month volatility on listings.');
    cons.push('Daily expenses (cafes, dining, services) trend 20–35% above city median.');
    cons.push('Lower availability of long-lease native-resident apartments outside premium stock.');
  } else if (tier === 'central') {
    cons.push('Noise and density during peak commute and weekend windows.');
    cons.push('Limited large 2BR / 3BR family inventory; most stock is 1BR-class.');
    cons.push('Parking and ground-floor unit selection is constrained.');
    cons.push('Tourist footprint affects evening atmospherics in the busiest blocks.');
  } else {
    cons.push('Longer commute or transit hop to coworking and CBD-class amenities.');
    cons.push('Thinner English-friendly retail; basic local language helps day-to-day.');
    cons.push('Fewer late-night services; nightlife and dining options are local-tier.');
    cons.push('Inventory turnover slower; fewer boutique listings in the digital-nomad channels.');
  }
  return cons.slice(0, 4);
}

// ── Per-city meta ─────────────────────────────────────────────────────────
const CITIES = {

  // ════════════════════════════════════════════════════════════════════════
  // LISBON ── Flagship
  // ════════════════════════════════════════════════════════════════════════
  lisbon: {
    facts: {
      population_city:  '≈ 545,000',
      population_metro: '≈ 2.9 million',
      official_lang:    'Portuguese',
      timezone:         'WET (UTC+0 / UTC+1 DST)',
      climate_type:     'Mediterranean (Csa)',
      sunshine_hours:   '≈ 2,800 hrs/yr',
      visa_options:     'D8 Digital Nomad Visa, D7 Passive Income, NHR-successor (IFICI)',
      healthcare:       'SNS (public) + Private (Lusíadas, CUF, Luz)',
      avg_local_salary: '€1,150 – €1,650 / month (net)',
    },
    internet:  { providers: 'MEO, NOS, Vodafone Portugal' },
    mobile:    { providers: 'MEO, NOS, Vodafone, NOWO' },
    food:      { shops: 'Continente, Pingo Doce, Lidl, El Corte Inglés, Mercado da Ribeira' },
    transport: {
      pass_name: 'Navegante Metropolitano (€40 unlimited metro+bus+train)',
      petrol:    '€1.75 – €1.90 / litre',
    },
    cowork:    { names: 'Second Home, Outsite, Heden, LACS, Avila Spaces, Cowork Central' },
    school:    {
      annual:   '€8,000 – €22,000 / year',
      monthly:  '€670 – €1,830',
      examples: 'St. Julian\'s, Carlucci American IS, Park IS, TASIS Portugal',
    },
    infraScores: { startup: 7.5, banking: 7.5, tax: 6.5, visa: 8.5, office: 7.5 },
    infraNotes: {
      'Internet Reliability':          'Lisbon delivers among the most reliable fibre coverage in Western Europe. MEO and NOS offer 1 Gbps symmetrical plans for €35–55/month; mid-tier 500 Mbps fibre runs €30–40. 5G coverage is broad in central districts; remote-work uptime is excellent.',
      'Coworking Ecosystem':           '60+ active coworking spaces. Second Home (Mercado da Ribeira), Outsite, Heden, LACS, and Avila Spaces anchor the premium tier. Hot desks €150–250/month; dedicated desks €250–400. Day-pass economy is mature and tourist-friendly.',
      'Startup & Business Ecosystem':  'Web Summit (annual), Startup Lisboa, Beta-i, and the Unicorn Factory have positioned Lisbon as Iberia\'s startup capital. Portuguese talent is excellent and cheaper than Berlin / Amsterdam. EU-grade IP and corporate frameworks remove most legal friction.',
      'English Language Friendliness': 'Among Western Europe\'s highest English proficiency rates (≈75 EF EPI). Government services bilingual in central Lisbon; medical, legal, and banking English-fluent. Outside Lisbon and Porto, basic Portuguese helps day-to-day.',
      'Banking & Financial Services':  'Millennium BCP, Novo Banco, Santander Totta, and ActivoBank serve expats. Account opening requires NIF (tax number) — obtainable in 1–2 weeks via fiscal representative. Wise and Revolut accepted nationwide.',
      'Tax System Complexity':         'NHR (Non-Habitual Resident) regime closed to new entrants in 2024; replaced by IFICI (tax incentive for scientific research and innovation, narrower scope). Standard Portuguese personal income tax is progressive to 48%. Crypto regime favourable for retail. Engage a Portuguese accountant before fiscal residency.',
      'Visa & Residency Pathway':      'D8 Digital Nomad Visa (launched 2022) accepts remote workers earning ≥4× national minimum wage (≈€3,280/month). D7 for passive-income holders. Both lead to permanent residency at year 5, citizenship at year 5+ subject to language test (A2 Portuguese).',
      'Office Supply & Business Svcs': 'Comprehensive ecosystem of Big-4 firms, English-speaking law firms (PLMJ, Vieira de Almeida, Cuatrecasas), and specialist relocation consultancies. NIF and Social Security registration both achievable in <1 week with the right paperwork.',
    },
    indexScores: {
      affordability: 5.5,
      economic:      7.5,
      affordability_note: 'Strong value for Western European tier-1 access; rent surge 2020–2024 narrowed the gap with Madrid and Barcelona.',
      economic_note:      'EU-stable currency, low inflation (2.5%), and fully convertible markets; rent volatility moderate.',
    },
    indexRationale: {
      'Affordability':      'Mid-tier Western EU pricing — premium vs. SE Europe, discount vs. Northern EU.',
      'Infrastructure':     'Excellent fibre, mature coworking, EU banking, and English-fluent business services.',
      'Safety':             'Among Europe\'s safest capitals (Numbeo 75+); petty theft in tourist zones is the only material risk.',
      'Quality of Life':    'Mediterranean climate, world-class food/wine, walkable historic core, ocean-adjacent lifestyle.',
      'Economic Stability': 'Eurozone macro stability + Portuguese fiscal balance offset by NHR closure and rental tightness.',
    },
    verdicts: {
      nomads:   'Recommendation: STRONG BUY for D8-eligible USD/EUR-earning nomads in 2026. Lisbon remains the most lifestyle-rich Western European base under €3,000/month.',
      families: 'Recommendation: PROCEED with budgeted international schooling and a 2026 housing search lead time of 60–90 days.',
      founders: 'Recommendation: PROCEED for EU-market or Lusophone-market plays. Engage a Portuguese accountant before incorporating; IFICI eligibility narrows the prior NHR advantage.',
    },
    defaultNotes: {
      healthcare: 'Public SNS is universal and low-cost (€5–20 copays); waiting times moderate. Private network (Lusíadas, CUF, Luz, Hospital da Luz) offers 24h English-speaking care; expat insurance €60–150/month basic, €120–280 international.',
      transit:    'Metro Lisboa (4 lines), Carris bus, CP suburban rail, and ferries serve the Tagus crossing. The Navegante Metropolitano monthly pass (€40) covers the entire metro region — among Europe\'s best transit-cost ratios.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  bangkok: {
    facts: {
      population_city:  '≈ 10.5 million',
      population_metro: '≈ 17 million',
      official_lang:    'Thai',
      timezone:         'ICT (UTC+7)',
      climate_type:     'Tropical Savanna (Aw)',
      sunshine_hours:   '≈ 2,500 hrs/yr',
      visa_options:     'DTV (5-year), LTR Visa, Elite Visa, Education Visa',
      healthcare:       'Public (30B scheme) + World-class Private (Bumrungrad, Samitivej, BNH)',
      avg_local_salary: '฿18,000 – ฿35,000 / month (≈$500–950)',
    },
    internet:  { providers: 'AIS Fibre, TRUE Online, NT, 3BB' },
    mobile:    { providers: 'AIS, TRUE Move, DTAC' },
    food:      { shops: 'Tops, Big C, Lotus\'s, Gourmet Market, Villa Market (Western)' },
    transport: { pass_name: 'BTS / MRT 30-day pass', petrol: '฿38 – ฿42 / litre' },
    cowork:    { names: 'The Hive, Justco, WeWork, Spaces, Beacon Place, The Work Loft' },
    school:    {
      annual:   '$15,000 – $35,000 / year',
      monthly:  '$1,250 – $2,920',
      examples: 'NIST, Bangkok Patana, Shrewsbury, Bangkok Prep, Harrow Bangkok',
    },
    infraScores: { startup: 7.0, banking: 6.0, tax: 5.5, visa: 8.5, office: 7.5 },
    infraNotes: {
      'Internet Reliability':          'AIS Fibre and TRUE Online deliver 1 Gbps for $20–30/month. Average residential speed ≈120 Mbps; 5G coverage strong in central BTS/MRT corridors. Reliability excellent in modern condos; older buildings sometimes capped at lower tiers.',
      'Coworking Ecosystem':           '40+ professional coworking sites citywide. The Hive, Justco, WeWork, and Spaces anchor the international tier; CAMP (in Siam Discovery) and Beacon Place serve the local startup scene. Hot desks $150–280, dedicated $280–450/month.',
      'Startup & Business Ecosystem':  'Active scene: Techsauce conference, dtac accelerate, BOI (Board of Investment) incentives. Talent pool large; English-proficiency variable above the senior level. SE Asian regional reach excellent from a Bangkok base.',
      'English Language Friendliness': 'Strong in tourist, expat, and corporate zones (Sukhumvit, Silom, Sathorn). Government services predominantly Thai; key documents available in English at major branches. Rural and suburban areas minimal English.',
      'Banking & Financial Services':  'Kasikorn (K-Bank), SCB, and Bangkok Bank serve expats. Account opening for non-residents inconsistent — DTV holders accepted at some branches; work permit smooths the process. Wise and Revolut widely usable.',
      'Tax System Complexity':         'Thailand\'s 2024 ruling (Paw 161/2566) requires assessment of foreign income remitted in the same year earned. LTR holders may claim exemptions on foreign income. Engage a Thai-licensed accountant before fiscal residency.',
      'Visa & Residency Pathway':      'Destination Thailand Visa (DTV, 2024) — 5-year multi-entry with ฿500k proof of funds — is among Asia\'s most generous nomad visas. LTR Visa (10-year) for high earners. Elite Visa available at premium pricing.',
      'Office Supply & Business Svcs': 'Full international ecosystem: PwC, Deloitte, EY, KPMG; major law firms (Tilleke & Gibbins, Baker McKenzie). BOI registration support well-established. English-language professional services widely available.',
    },
    indexScores: { affordability: 8.5, economic: 6.0 },
    indexRationale: {
      'Affordability':      'Among the world\'s most affordable major cities; rent, food, and services 60–80% below Western EU.',
      'Infrastructure':     'World-class private healthcare and fibre internet; banking and English in govt services moderate.',
      'Safety':             'Petty crime in tourist zones; violent crime against expats rare; political-cycle risk moderate.',
      'Quality of Life':    'Outstanding food, culture, and healthcare; air quality (PM2.5 Jan–Mar) and climate are deductions.',
      'Economic Stability': 'Stable baht (28–35 THB/USD), low inflation, but foreign-income tax interpretation introduces uncertainty.',
    },
    verdicts: {
      nomads:   'Recommendation: STRONG BUY for DTV-eligible USD/EUR/SGD nomads. Plan a 6-week Feb–Mar PM2.5 exit window and the math is unbeatable.',
      families: 'Recommendation: CONDITIONAL — schools and air quality are non-negotiable; budget $20–35k/year per child and verify air-quality protocols.',
      founders: 'Recommendation: PROCEED for SE Asian operations. Engage Thai tax counsel before incorporating; consider BOI promotion or offshore holding structure.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  'mexico-city': {
    facts: {
      population_city:  '≈ 9.2 million',
      population_metro: '≈ 22 million',
      official_lang:    'Spanish',
      timezone:         'CST (UTC-6)',
      climate_type:     'Subtropical Highland (Cwb)',
      sunshine_hours:   '≈ 2,500 hrs/yr',
      visa_options:     'Temporary Resident Visa, Permanent Resident Visa',
      healthcare:       'IMSS / ISSSTE (public) + Private (Hospital Ángeles, ABC, Médica Sur)',
      avg_local_salary: 'MX$15,000 – MX$30,000 / month (≈$750–1,500)',
    },
    internet:  { providers: 'Telmex/Infinitum, Izzi, Totalplay, Megacable' },
    mobile:    { providers: 'Telcel, AT&T México, Movistar' },
    food:      { shops: 'Walmart, Soriana, Chedraui, La Comer, City Market' },
    transport: { pass_name: 'Metro/Metrobus single-trip MX$5–7', petrol: 'MX$23 – MX$25 / litre' },
    cowork:    { names: 'WeWork, Selina, Public, Homework, U-Co, Cosmópolis' },
    school:    { annual: '$8,000 – $22,000 / year', monthly: '$670 – $1,830', examples: 'Greengates, ASF (American School Foundation), Edron Academy' },
    infraScores: { startup: 7.0, banking: 6.0, tax: 5.5, visa: 7.0, office: 7.0 },
    infraNotes: {
      'Internet Reliability':          'Totalplay and Izzi lead on fibre; 200–500 Mbps available in Polanco, Roma/Condesa, Coyoacán. Telcel 5G covers the central core. Reliability good in modern condos; older buildings inconsistent.',
      'Coworking Ecosystem':           '50+ active spaces. WeWork, Selina, Public, and U-Co anchor the international tier. Hot desks MX$3,500–6,500/month; dedicated MX$6,500–11,000. Strong concentration in Polanco, Roma Norte, and Anzures.',
      'Startup & Business Ecosystem':  'Endeavor México, 500 Startups LatAm, and Latitud have built the strongest LatAm ecosystem outside São Paulo. Talent pool excellent and 40–60% cheaper than US equivalents.',
      'English Language Friendliness': 'Strong in business/expat zones (Polanco, Condesa, Roma); moderate elsewhere. Most professional services bilingual; basic Spanish unlocks day-to-day life dramatically.',
      'Banking & Financial Services':  'BBVA México, Santander, Banorte, Banamex serve expats. Temporary residents can open full accounts with RFC. Wise, Revolut, and Klar widely accepted.',
      'Tax System Complexity':         'Mexican fiscal residency triggers worldwide income tax. Top marginal rate 35%. Excellent USA-Mexico tax treaty. RFC required for property/vehicle purchases; engage a contador before residency.',
      'Visa & Residency Pathway':      'Temporary Resident Visa accepts ≈$2,600/month income or $43k investment. 4-year path to permanent residency. No specific nomad visa, but TR is functionally equivalent for remote workers.',
      'Office Supply & Business Svcs': 'Big-4 firms, top law firms (Galicia, Mijares Angoitia, Creel), and English-speaking accountants well-represented. Polanco hosts most international service providers.',
    },
    indexScores: { affordability: 7.5, economic: 6.0 },
    indexRationale: {
      'Affordability':      '40–60% cheaper than US/Canadian peers; Polanco premium pricing approaches mid-tier US.',
      'Infrastructure':     'Strong fibre and coworking; banking moderate; transit dense but slow at peak.',
      'Safety':             'CDMX safer than its reputation in central districts; outer zones (Iztapalapa, Ecatepec) require care.',
      'Quality of Life':    'World-class food culture, exceptional climate, vibrant arts; altitude (2,240m) and earthquake risk are factors.',
      'Economic Stability': 'Peso has appreciated 2020–2024 (super peso); inflation 4–5%; macro stable in LatAm context.',
    },
    verdicts: {
      nomads:   'Recommendation: STRONG BUY for English/Spanish-bilingual USD nomads. Polanco/Condesa are world-class lifestyle bases.',
      families: 'Recommendation: PROCEED with international schooling budget and proximity to family-friendly districts (Polanco, Las Lomas).',
      founders: 'Recommendation: PROCEED — best LatAm ecosystem outside São Paulo; engage a contador before fiscal residency.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  dubai: {
    facts: {
      population_city:  '≈ 3.6 million',
      population_metro: '≈ 3.8 million',
      official_lang:    'Arabic (English widely used)',
      timezone:         'GST (UTC+4)',
      climate_type:     'Hot Desert (BWh)',
      sunshine_hours:   '≈ 3,500 hrs/yr',
      visa_options:     'Golden Visa, Green Visa, Virtual Working Programme, Investor Visa',
      healthcare:       'Mandatory private insurance + DHA public; world-class private (Mediclinic, NMC, King\'s College Hospital)',
      avg_local_salary: 'AED 10,000 – AED 25,000 / month (≈$2,720–6,800)',
    },
    internet:  { providers: 'du, Etisalat (e&)' },
    mobile:    { providers: 'du, Etisalat (e&), Virgin Mobile UAE' },
    food:      { shops: 'Carrefour, Spinneys, Waitrose, Lulu, Choithrams' },
    transport: { pass_name: 'Nol Card monthly (AED 350 silver / AED 500 gold)', petrol: 'AED 2.85 – AED 3.10 / litre' },
    cowork:    { names: 'Letswork, AstroLabs, Nook, Servcorp, WeWork, Regus, A4 Space' },
    school:    { annual: 'AED 35,000 – AED 110,000 / year', monthly: 'AED 2,920 – AED 9,170', examples: 'GEMS (multiple), Dubai College, JESS, Repton, Brighton College' },
    infraScores: { startup: 8.0, banking: 8.5, tax: 9.5, visa: 8.5, office: 9.0 },
    infraNotes: {
      'Internet Reliability':          'du and Etisalat deliver 1 Gbps fibre in most of central Dubai for AED 400–600/month. 5G blanket coverage. Among the world\'s most reliable urban networks.',
      'Coworking Ecosystem':           'Letswork app aggregates 100+ spaces with day-pass economy. AstroLabs (Madinat Jumeirah), Servcorp, WeWork, and Nook anchor the international tier. Hot desks AED 800–1,500/month; dedicated AED 1,500–3,500.',
      'Startup & Business Ecosystem':  'DIFC, ADGM (Abu Dhabi), and Dubai Internet City are world-class free zones. Visa, banking, and licensing all routed through these zones for tech founders.',
      'English Language Friendliness': 'English is the de facto business and lifestyle language. Government portals bilingual; medical, legal, banking, and retail fully English-fluent.',
      'Banking & Financial Services':  'Emirates NBD, ADCB, Mashreq, HSBC UAE serve expats. Account opening requires Emirates ID (post-residency); NRE accounts available pre-residency. Among the world\'s most expat-friendly banking systems.',
      'Tax System Complexity':         'Personal income tax = 0%. Corporate tax (9%) applies to entities earning >AED 375k/year (effective June 2023). VAT 5%. Among the simplest fiscal systems for expats globally.',
      'Visa & Residency Pathway':      'Golden Visa (10-year) for investors, talents, and high earners. Green Visa (5-year) for skilled workers and freelancers. Virtual Working Programme (1-year) for remote workers earning ≥$3,500/month. All routes well-established.',
      'Office Supply & Business Svcs': 'Tier-1 international ecosystem: Big-4, Magic Circle and US-based law firms, all major banks. Free zone authorities provide concierge-grade onboarding for new entities.',
    },
    indexScores: { affordability: 4.5, economic: 8.5 },
    indexRationale: {
      'Affordability':      'Premium Western-EU-tier pricing for housing; tax-free salary materially shifts the equation.',
      'Infrastructure':     'Among the world\'s best across the board: internet, banking, healthcare, transit.',
      'Safety':             'Numbeo Safety Index top-10 globally; near-zero violent crime; conservative legal context.',
      'Quality of Life':    'Year-round sunshine, world-class amenities, beach access; summer heat (May–Sep) is severe.',
      'Economic Stability': 'AED pegged to USD; oil-stabilisation fund deep; macro outlook robust through 2030.',
    },
    verdicts: {
      nomads:   'Recommendation: PROCEED for high-earning USD nomads. Tax-free salary + world-class infra justify the rent premium for incomes above $80k/year.',
      families: 'Recommendation: STRONG BUY for families on corporate packages. Schools are world-class; expat infrastructure unmatched in MENA.',
      founders: 'Recommendation: STRONG BUY — DIFC/ADGM free zones, 0% personal tax, and global banking make Dubai a top-3 founder city in 2026.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  amsterdam: {
    facts: {
      population_city:  '≈ 925,000',
      population_metro: '≈ 2.5 million',
      official_lang:    'Dutch (English ubiquitous)',
      timezone:         'CET (UTC+1 / +2 DST)',
      climate_type:     'Temperate Oceanic (Cfb)',
      sunshine_hours:   '≈ 1,650 hrs/yr',
      visa_options:     'DAFT (US-only), Highly Skilled Migrant, Self-Employed Visa, Orientation Year',
      healthcare:       'Mandatory private health insurance (basisverzekering); world-class private network',
      avg_local_salary: '€2,800 – €4,500 / month (net)',
    },
    internet:  { providers: 'KPN, Ziggo, T-Mobile/Odido, Online.nl' },
    mobile:    { providers: 'KPN, Vodafone, Odido, Lebara' },
    food:      { shops: 'Albert Heijn, Jumbo, Lidl, Marqt, Ekoplaza' },
    transport: { pass_name: 'GVB monthly (€97) or NS+GVB combo', petrol: '€2.10 – €2.30 / litre' },
    cowork:    { names: 'Spaces, WeWork, B. Amsterdam, TQ, Mindspace, A Lab' },
    school:    { annual: '€18,000 – €32,000 / year', monthly: '€1,500 – €2,670', examples: 'British School of Amsterdam, AICS, IB World, Lycée Vincent van Gogh' },
    infraScores: { startup: 8.5, banking: 8.0, tax: 6.0, visa: 7.0, office: 8.5 },
    infraNotes: {
      'Internet Reliability':          'KPN and Ziggo deliver 1 Gbps fibre for €50–70/month. 5G blanket coverage. Reliability among the world\'s best.',
      'Coworking Ecosystem':           'Spaces, WeWork, B. Amsterdam, TQ, and Mindspace anchor the international tier. Hot desks €300–500/month; dedicated €450–800.',
      'Startup & Business Ecosystem':  'Adyen, Booking.com, and Mollie alumni drive a dense scene. TechLeap.nl, Startup Amsterdam, and Rockstart accelerate dozens of startups annually.',
      'English Language Friendliness': 'English is functionally the second working language. Government services bilingual; medical, legal, and banking fluent. Dutch helps integration but is not required.',
      'Banking & Financial Services':  'ING, ABN AMRO, Rabobank serve expats; bunq is a fully digital alternative. BSN required for account opening — issued at registration with the gemeente.',
      'Tax System Complexity':         '30% Ruling tax break for highly-skilled migrants (5 years, narrowed in 2024). Top personal rate 49.5%. Box 3 wealth tax recently restructured. Engage a Dutch tax adviser pre-arrival.',
      'Visa & Residency Pathway':      'DAFT is uniquely generous for US citizens (€4,500 deposit, indefinite renewals). Highly Skilled Migrant requires sponsoring employer + €5,331/month salary minimum (2025). Self-Employed Visa points-based.',
      'Office Supply & Business Svcs': 'Tier-1 international ecosystem: Big-4, Allen & Overy, NautaDutilh, De Brauw. KvK (Chamber of Commerce) and Belastingdienst (tax) both English-friendly.',
    },
    indexScores: { affordability: 4.0, economic: 8.0 },
    indexRationale: {
      'Affordability':      'Premium Northern European pricing; rent is the dominant cost line and supply-constrained.',
      'Infrastructure':     'Among the world\'s top-5 cities for fibre, banking, transit, and bilingual services.',
      'Safety':             'Numbeo top-20 globally; petty bike theft and tourist-zone scams are the only material risks.',
      'Quality of Life':    'Compact walkable/bikeable city, world-class culture, but climate (grey, wet) is a deduction.',
      'Economic Stability': 'Eurozone macro + AAA Dutch sovereign rating + strong fiscal balance.',
    },
    verdicts: {
      nomads:   'Recommendation: PROCEED for DAFT-eligible US nomads or HSM-sponsored employees. Rent supply constraint is the binding bottleneck — start the search 60+ days early.',
      families: 'Recommendation: STRONG BUY for families on corporate packages. Bilingual schools, world-class healthcare, exceptional safety.',
      founders: 'Recommendation: STRONG BUY for EU SaaS or fintech plays. Adyen/Booking ecosystem, English-language regulators, AAA banking.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  bali: {
    facts: {
      population_city:  '≈ 4.4 million (island)',
      population_metro: '≈ 4.4 million (island)',
      official_lang:    'Indonesian + Balinese',
      timezone:         'WITA (UTC+8)',
      climate_type:     'Tropical Monsoon (Am)',
      sunshine_hours:   '≈ 2,700 hrs/yr',
      visa_options:     'B211A (60-day extendable), KITAS Investor, Second Home Visa, E-Visa',
      healthcare:       'Public (BPJS) limited for expats + Private (BIMC, Siloam, Kasih Ibu)',
      avg_local_salary: 'IDR 4M – IDR 12M / month (≈$255–765)',
    },
    internet:  { providers: 'IndiHome (Telkom), Biznet, MyRepublic, BaliFiber' },
    mobile:    { providers: 'Telkomsel, XL Axiata, IM3, Smartfren' },
    food:      { shops: 'Pepito, Bintang, Frestive, Ubud Organic Market' },
    transport: { pass_name: 'No formal transit pass; Gojek/Grab dominant', petrol: 'IDR 12,500 – IDR 14,000 / litre' },
    cowork:    { names: 'Outpost (Canggu/Ubud), Dojo Bali, BWork, Hubud, Tropical Nomad, Genesis' },
    school:    { annual: '$8,000 – $20,000 / year', monthly: '$670 – $1,670', examples: 'Green School, BIS (Bali Island School), Sanur Independent, Australian IS' },
    infraScores: { startup: 5.5, banking: 5.0, tax: 5.5, visa: 6.5, office: 5.5 },
    infraNotes: {
      'Internet Reliability':          'IndiHome and Biznet deliver 100–200 Mbps fibre in Canggu, Ubud, Sanur, and Seminyak. Average residential speed ≈80 Mbps. Outages during heavy rain are common; backup 4G hotspot recommended.',
      'Coworking Ecosystem':           'Outpost, Dojo Bali, BWork, and Tropical Nomad are global-tier. Hot desks $150–280/month; dedicated $280–500. Canggu and Ubud are the two main hubs.',
      'Startup & Business Ecosystem':  'Limited local startup scene; Bali functions primarily as a remote-work base for Asia-Pacific founders rather than an indigenous ecosystem.',
      'English Language Friendliness': 'Strong in tourist zones (Canggu, Ubud, Seminyak); moderate elsewhere. Most expat services fully English-fluent.',
      'Banking & Financial Services':  'BCA, Mandiri, BNI serve expats. KITAS holders can open standard accounts; B211A holders limited to international banks (HSBC) or Wise/Revolut.',
      'Tax System Complexity':         'Indonesian fiscal residency (>183 days) triggers worldwide income tax (5–35% bracket). KITAS Investor + DGT-1 form can establish favourable status. Engage an Indonesian tax consultant.',
      'Visa & Residency Pathway':      'B211A 60-day extendable to 180 days is standard nomad path. KITAS Investor (1-year) requires IDR 10B (≈$640k) investment. Second Home Visa (5–10 years) requires IDR 2B (≈$130k) deposit.',
      'Office Supply & Business Svcs': 'Limited international firm presence; English-speaking notaries and PT/PT-PMA setup specialists in Denpasar and Sanur. Use Emerhub, Cekindo, or PT MOORE for entity setup.',
    },
    indexScores: { affordability: 8.5, economic: 5.5 },
    indexRationale: {
      'Affordability':      'Among the world\'s most affordable nomad bases; villa rentals 60–80% below SE Asian capitals.',
      'Infrastructure':     'Coworking strong; banking and business services thinner than capital cities.',
      'Safety':             'Low violent crime; petty theft and traffic accidents are the primary risks; volcanic and seismic exposure.',
      'Quality of Life':    'Tropical lifestyle, beach + jungle, mature wellness scene; rainy season (Nov–Mar) tests the value.',
      'Economic Stability': 'IDR moderately volatile; tourism-dependent local economy; political stability has improved 2020–2024.',
    },
    verdicts: {
      nomads:   'Recommendation: STRONG BUY for solo nomads earning ≥$2,500/month. Canggu and Ubud are global-tier nomad bases.',
      families: 'Recommendation: CONDITIONAL — Green School and BIS work for committed long-stay families; medical evacuation insurance is non-optional.',
      founders: 'Recommendation: CONDITIONAL — Bali works as a remote-base for SaaS/content founders, not as a primary incorporation jurisdiction.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  barcelona: {
    facts: {
      population_city:  '≈ 1.6 million',
      population_metro: '≈ 5.6 million',
      official_lang:    'Catalan + Spanish',
      timezone:         'CET (UTC+1 / +2 DST)',
      climate_type:     'Mediterranean (Csa)',
      sunshine_hours:   '≈ 2,520 hrs/yr',
      visa_options:     'Spain Digital Nomad Visa, Non-Lucrative Visa, Beckham Law',
      healthcare:       'CatSalut (public, world-class) + Private (Quirónsalud, Teknon, HM)',
      avg_local_salary: '€1,800 – €2,800 / month (net)',
    },
    internet:  { providers: 'Movistar, Orange, Vodafone España, MásMóvil' },
    mobile:    { providers: 'Movistar, Orange, Vodafone, Yoigo, Lowi' },
    food:      { shops: 'Mercadona, Carrefour, Bonpreu, Caprabo, La Boqueria market' },
    transport: { pass_name: 'T-Usual (€20/month with subsidy)', petrol: '€1.65 – €1.80 / litre' },
    cowork:    { names: 'OneCoWork, Cloudworks, Aticco, Talent Garden, WeWork, Itnig' },
    school:    { annual: '€8,000 – €25,000 / year', monthly: '€670 – €2,080', examples: 'BSB (Benjamin Franklin), American School of Barcelona, Lycée Français, Kensington' },
    infraScores: { startup: 8.0, banking: 7.5, tax: 6.0, visa: 8.0, office: 7.5 },
    infraNotes: {
      'Internet Reliability':          'Movistar and Orange deliver 1 Gbps fibre for €30–45/month. 5G blanket coverage in central Barcelona. Reliability excellent.',
      'Coworking Ecosystem':           'OneCoWork, Cloudworks, Aticco, Talent Garden, and Itnig anchor the scene. Hot desks €180–300/month; dedicated €280–500. Strong concentration in Eixample and Poblenou (22@ tech district).',
      'Startup & Business Ecosystem':  'Mobile World Congress, MWC4YFN, Wayra, and Tech Barcelona drive a top-3 EU scene. Strong concentration in Poblenou (22@); excellent talent pool.',
      'English Language Friendliness': 'Strong in business/expat zones (Eixample, Born, Gracia); moderate elsewhere. Spanish helps day-to-day; Catalan optional but appreciated.',
      'Banking & Financial Services':  'CaixaBank, BBVA, Sabadell, Santander serve expats. NIE required for full account; obtainable via consulate or Spain on entry.',
      'Tax System Complexity':         'Spain Digital Nomad Visa unlocks Beckham Law (24% flat on Spanish income for 6 years). Standard rates progressive to 47% (with regional surcharge in Catalonia). Engage a Spanish gestor.',
      'Visa & Residency Pathway':      'Spain Digital Nomad Visa (2023) accepts remote workers earning ≥€2,762/month with 3+ years experience. Non-Lucrative Visa for passive-income holders. Both lead to permanent residency at year 5.',
      'Office Supply & Business Svcs': 'Tier-1 international ecosystem: Big-4, Cuatrecasas, Garrigues, Uría. English-speaking gestors widely available; Catalan administrative quirks require local knowledge.',
    },
    indexScores: { affordability: 6.0, economic: 7.0 },
    indexRationale: {
      'Affordability':      'Mid-tier Western EU pricing; rent surge 2021–2024 narrowed gap with Madrid and Lisbon; food/lifestyle remain strong value.',
      'Infrastructure':     'Excellent fibre, world-class transit, mature coworking; banking and admin moderate friction.',
      'Safety':             'Numbeo mid-60s; pickpocketing in tourist zones is the dominant risk; violent crime rare.',
      'Quality of Life':    'Mediterranean climate + beach + Pyrenees access; world-class architecture, food, and arts.',
      'Economic Stability': 'Eurozone macro stable; Catalan political tensions add minor uncertainty.',
    },
    verdicts: {
      nomads:   'Recommendation: PROCEED for DNV-eligible nomads earning ≥€2,762/month. Beckham Law unlocks 24% flat tax for high earners.',
      families: 'Recommendation: STRONG BUY — exceptional schools, healthcare, beach lifestyle, and walkable family infrastructure.',
      founders: 'Recommendation: STRONG BUY for EU consumer-tech and mobile/IoT plays. 22@ ecosystem, MWC, and excellent talent.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  berlin: {
    facts: {
      population_city:  '≈ 3.85 million',
      population_metro: '≈ 6.2 million',
      official_lang:    'German (English widespread)',
      timezone:         'CET (UTC+1 / +2 DST)',
      climate_type:     'Temperate Oceanic (Cfb)',
      sunshine_hours:   '≈ 1,650 hrs/yr',
      visa_options:     'Freiberufler / Freelance Visa, EU Blue Card, Job Seeker Visa, Skilled Workers Act',
      healthcare:       'Mandatory statutory (TK, AOK) or private (DKV, Allianz); world-class network',
      avg_local_salary: '€2,800 – €4,200 / month (net)',
    },
    internet:  { providers: 'Deutsche Telekom, Vodafone, 1&1, O2' },
    mobile:    { providers: 'Telekom, Vodafone, O2, Aldi Talk, congstar' },
    food:      { shops: 'REWE, Edeka, Lidl, Aldi, Kaufland, Bio Company' },
    transport: { pass_name: 'Deutschlandticket (€58/month nationwide)', petrol: '€1.75 – €1.95 / litre' },
    cowork:    { names: 'Mindspace, Factory Berlin, betahaus, WeWork, Spaces, Rent24' },
    school:    { annual: '€10,000 – €25,000 / year', monthly: '€830 – €2,080', examples: 'BIS Berlin, Berlin Cosmopolitan, JFK School, Lycée Français' },
    infraScores: { startup: 8.5, banking: 7.5, tax: 5.5, visa: 7.5, office: 8.0 },
    infraNotes: {
      'Internet Reliability':          'Telekom and Vodafone deliver 1 Gbps fibre in central Berlin for €40–60/month. 5G coverage strong; older Altbau buildings sometimes capped at 100 Mbps. Reliability excellent.',
      'Coworking Ecosystem':           'Mindspace, Factory Berlin, betahaus, and WeWork anchor the scene. Hot desks €200–350/month; dedicated €350–600. Mitte, Kreuzberg, and Friedrichshain dominate.',
      'Startup & Business Ecosystem':  'Top-3 EU startup ecosystem (N26, Zalando, Delivery Hero, GetYourGuide). Berlin Startup Map lists 3,000+ active companies. Excellent VC density (Cherry, Project A, Speedinvest).',
      'English Language Friendliness': 'High in tech/startup/expat zones; moderate in administrative contexts. Bürgeramt and Finanzamt predominantly German; basic German extremely useful.',
      'Banking & Financial Services':  'N26, Deutsche Bank, Commerzbank, Sparkasse serve expats. SCHUFA credit history required for many services. Anmeldung (registration) is the gateway to most German systems.',
      'Tax System Complexity':         'Top personal rate 45% + 5.5% solidarity surcharge. Church tax 8–9% (opt-out via Kirchenaustritt). Worldwide income for residents. Engage a Steuerberater pre-arrival.',
      'Visa & Residency Pathway':      'Freiberufler visa for freelancers (artists, journalists, consultants) is famously generous. EU Blue Card requires €48,300/year salary (2025) for a 4-year track to permanent residency. Skilled Workers Act (2024) broadens pathways.',
      'Office Supply & Business Svcs': 'Tier-1 international ecosystem: Big-4, Magic Circle and US-based law firms, all major banks. Notaries (Notar) handle most company formations.',
    },
    indexScores: { affordability: 5.5, economic: 8.0 },
    indexRationale: {
      'Affordability':      'Premium Northern European tier; rent surge 2018–2024 has narrowed the historic Berlin discount.',
      'Infrastructure':     'World-class transit, healthcare, and banking; mature startup and coworking ecosystem.',
      'Safety':             'Numbeo mid-60s; petty theft and bicycle theft are the dominant risks.',
      'Quality of Life':    'Exceptional cultural scene, club music, arts; climate (grey, cold) is the main deduction.',
      'Economic Stability': 'Eurozone macro + AAA German sovereign + strong industrial base.',
    },
    verdicts: {
      nomads:   'Recommendation: PROCEED for Freiberufler-eligible creatives, EU Blue Card holders, or DAFT US citizens. Rent supply tightness is the binding constraint.',
      families: 'Recommendation: STRONG BUY for families on EU Blue Card or corporate packages. Free public schools (with German prep) plus excellent international options.',
      founders: 'Recommendation: STRONG BUY for EU enterprise SaaS, mobility, or fintech plays. Talent + capital density unmatched in continental EU.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  'chiang-mai': {
    facts: {
      population_city:  '≈ 130,000',
      population_metro: '≈ 1.2 million',
      official_lang:    'Thai',
      timezone:         'ICT (UTC+7)',
      climate_type:     'Tropical Savanna (Aw)',
      sunshine_hours:   '≈ 2,400 hrs/yr',
      visa_options:     'DTV (5-year), LTR Visa, Education Visa, Retirement Visa',
      healthcare:       'Public (30B scheme) + Private (Bangkok Hospital Chiang Mai, Ram Hospital)',
      avg_local_salary: '฿15,000 – ฿28,000 / month (≈$420–780)',
    },
    internet:  { providers: 'AIS Fibre, TRUE Online, NT, 3BB' },
    mobile:    { providers: 'AIS, TRUE Move, DTAC' },
    food:      { shops: 'Tops, Big C, Rimping, Lotus\'s, Warorot Market' },
    transport: { pass_name: 'No formal transit pass; songthaew + Grab dominant', petrol: '฿38 – ฿42 / litre' },
    cowork:    { names: 'Punspace, Yellow Coworking, Alt_ChiangMai, CAMP, Hub53, Mana Coworking' },
    school:    { annual: '$8,000 – $20,000 / year', monthly: '$670 – $1,670', examples: 'Prem Tinsulanonda, CMIS, NIS Chiang Mai, Lanna IS' },
    infraScores: { startup: 5.5, banking: 6.0, tax: 5.5, visa: 8.5, office: 6.0 },
    infraNotes: {
      'Internet Reliability':          'AIS and 3BB deliver 500 Mbps – 1 Gbps fibre for $15–25/month. Average residential speed ≈100 Mbps. Reliability excellent in Nimman, Old City, Santitham.',
      'Coworking Ecosystem':           'Punspace (3 locations), Yellow, Alt_ChiangMai, and Hub53 anchor a tight, high-quality scene. Hot desks $80–180/month; dedicated $180–280.',
      'Startup & Business Ecosystem':  'Limited local startup scene; Chiang Mai is a remote-work destination, not an entrepreneurial hub. Bangkok is 80 minutes by air for ecosystem access.',
      'English Language Friendliness': 'Strong in Nimman, Old City, and tourist zones; moderate elsewhere. Most expat services fully English-fluent.',
      'Banking & Financial Services':  'Kasikorn (K-Bank), SCB, Bangkok Bank serve expats. Chiang Mai branches reportedly more accommodating to DTV holders than Bangkok branches.',
      'Tax System Complexity':         'Same as Bangkok — Thailand\'s 2024 ruling (Paw 161/2566) requires assessment of foreign income remitted in the same year earned.',
      'Visa & Residency Pathway':      'DTV (5-year, 2024) and Education Visa for Thai language study are the dominant pathways. Retirement Visa accessible at age 50+ with ฿800k deposit.',
      'Office Supply & Business Svcs': 'Limited international firm presence; most legal/accounting services route through Bangkok. Local English-speaking notaries available.',
    },
    indexScores: { affordability: 9.0, economic: 6.0 },
    indexRationale: {
      'Affordability':      'Among the world\'s most affordable nomad bases; total monthly cost 30–40% below Bangkok.',
      'Infrastructure':     'Excellent fibre and coworking for a small city; banking and business services thin.',
      'Safety':             'Numbeo top-30 globally; very low violent crime; air quality (Mar–Apr burning season) is the primary risk.',
      'Quality of Life':    'Mountains, temples, slow pace, world-class food culture; PM2.5 burning season is severe.',
      'Economic Stability': 'Same THB stability as Bangkok; tourism-dependent local economy.',
    },
    verdicts: {
      nomads:   'Recommendation: STRONG BUY for solo USD/EUR nomads earning ≥$1,500/month. Plan a Mar–Apr exit window and the math is unbeatable.',
      families: 'Recommendation: PROCEED for committed long-stay families with school flexibility (Prem, CMIS).',
      founders: 'Recommendation: CONDITIONAL — works as a remote-base, not as a primary operations hub.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  medellin: {
    cityNameOverride: 'Medellin',
    facts: {
      population_city:  '≈ 2.6 million',
      population_metro: '≈ 4.0 million',
      official_lang:    'Spanish',
      timezone:         'COT (UTC-5)',
      climate_type:     'Subtropical Highland (Cfb) — "Eternal Spring"',
      sunshine_hours:   '≈ 2,300 hrs/yr',
      visa_options:     'Migrant Visa (M), Visitor Visa (V), Digital Nomad Visa (V-NOMA)',
      healthcare:       'EPS (public) + Private (El Rosario, San Vicente, CES); high-quality and low-cost',
      avg_local_salary: 'COP 2.5M – COP 5M / month (≈$580–1,150)',
    },
    internet:  { providers: 'Tigo, Claro, Movistar, ETB' },
    mobile:    { providers: 'Claro, Tigo, Movistar, WOM' },
    food:      { shops: 'Éxito, Carulla, Jumbo, D1, Olímpica' },
    transport: { pass_name: 'Cívica card pay-per-trip; metro single ride COP 3,200', petrol: 'COP 16,000 – COP 17,500 / gallon' },
    cowork:    { names: 'Selina, Atom House, Tinkko, Comuna 13 Coworking, La Oficina, Zentic' },
    school:    { annual: '$5,000 – $15,000 / year', monthly: '$420 – $1,250', examples: 'Columbus School, The Montessori School, Karl C. Parrish, San José' },
    infraScores: { startup: 6.5, banking: 5.5, tax: 5.5, visa: 7.0, office: 6.0 },
    infraNotes: {
      'Internet Reliability':          'Tigo and Claro deliver 300 Mbps – 1 Gbps fibre in El Poblado, Laureles, Envigado for $25–40/month. 5G coverage growing. Reliability good in modern condos.',
      'Coworking Ecosystem':           'Selina, Atom House, Tinkko, and Zentic anchor the scene. Hot desks $80–180/month; dedicated $180–300. El Poblado and Laureles dominate.',
      'Startup & Business Ecosystem':  'Ruta N, Rappi alumni, and Platanus Ventures anchor a growing scene. Strong fintech and SaaS concentration.',
      'English Language Friendliness': 'Strong in El Poblado and tourist zones; moderate elsewhere. Spanish helps day-to-day dramatically.',
      'Banking & Financial Services':  'Bancolombia, Davivienda, BBVA serve expats. Cédula de Extranjería (post-residency) required for most accounts. Wise and Nequi widely accepted.',
      'Tax System Complexity':         'Colombian fiscal residency triggers worldwide income tax (top 39%). Engage a contador. V-NOMA visa preserves remote-worker status if structured correctly.',
      'Visa & Residency Pathway':      'V-NOMA Digital Nomad Visa (2023, 2-year) for remote workers earning ≥$852/month. Migrant Visa (M) for retirees and rentistas. Path to permanent residency at year 5.',
      'Office Supply & Business Svcs': 'Limited international firm presence; growing English-speaking accounting and immigration consultancy market in El Poblado.',
    },
    indexScores: { affordability: 8.0, economic: 5.5 },
    indexRationale: {
      'Affordability':      '60–80% below US peers; "eternal spring" climate adds quality-of-life value at no thermal cost.',
      'Infrastructure':     'Strong fibre and coworking; banking moderate; metro is the only major LatAm city with metropolitan rail+cable.',
      'Safety':             'Numbeo mid-50s; El Poblado / Laureles safe; outer barrios require care; petty theft and motorbike snatching.',
      'Quality of Life':    'Year-round 18–28°C climate, world-class food/coffee, dense expat community.',
      'Economic Stability': 'COP volatile; inflation 6–8%; political cycles affect macro.',
    },
    verdicts: {
      nomads:   'Recommendation: STRONG BUY for V-NOMA-eligible USD nomads. El Poblado and Laureles deliver world-class quality at LatAm pricing.',
      families: 'Recommendation: PROCEED with proximity to El Poblado / Las Palmas international schools; security awareness essential.',
      founders: 'Recommendation: CONDITIONAL — fintech and SaaS plays work; manufacturing or import/export face higher friction.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  paris: {
    facts: {
      population_city:  '≈ 2.1 million',
      population_metro: '≈ 12.4 million',
      official_lang:    'French',
      timezone:         'CET (UTC+1 / +2 DST)',
      climate_type:     'Temperate Oceanic (Cfb)',
      sunshine_hours:   '≈ 1,660 hrs/yr',
      visa_options:     'Talent Passport, Long-Stay Visitor Visa, Profession Libérale, Salarié',
      healthcare:       'Mandatory PUMa (universal) + Mutuelle; world-class private network',
      avg_local_salary: '€2,500 – €3,800 / month (net)',
    },
    internet:  { providers: 'Orange, SFR, Bouygues, Free' },
    mobile:    { providers: 'Orange, SFR, Bouygues, Free Mobile, Sosh' },
    food:      { shops: 'Carrefour, Monoprix, Franprix, Picard, Naturalia, marchés' },
    transport: { pass_name: 'Navigo monthly (€88.80 all zones)', petrol: '€1.85 – €2.05 / litre' },
    cowork:    { names: 'WeWork, Spaces, Morning Coworking, Wojo, Anti-Café, La Permanence' },
    school:    { annual: '€18,000 – €35,000 / year', monthly: '€1,500 – €2,920', examples: 'British School of Paris, ASP, EaB, Lycée International, Lennen Bilingual' },
    infraScores: { startup: 8.0, banking: 7.5, tax: 5.5, visa: 7.0, office: 8.0 },
    infraNotes: {
      'Internet Reliability':          'Orange and Free deliver 1–8 Gbps fibre for €30–50/month. 5G blanket coverage. Reliability excellent.',
      'Coworking Ecosystem':           'WeWork, Spaces, Morning, and Wojo anchor the scene. Hot desks €250–450/month; dedicated €400–700.',
      'Startup & Business Ecosystem':  'Station F (largest startup campus in Europe), La French Tech, Bpifrance, and Eurazeo drive a top-3 EU scene.',
      'English Language Friendliness': 'High in tech/business zones; moderate in administrative contexts. Préfecture and CAF predominantly French; basic French extremely useful.',
      'Banking & Financial Services':  'BNP Paribas, Société Générale, Crédit Agricole, plus N26 and Revolut serve expats. RIB required for most utility/rental setup; obtainable at branch with proof of address.',
      'Tax System Complexity':         'Top personal rate 45% + CSG/CRDS (≈9%). Worldwide income for residents. Excellent treaty network. Engage a French expert-comptable pre-arrival.',
      'Visa & Residency Pathway':      'Talent Passport (4-year) for skilled employees, founders, researchers, and artists earning ≥€60,000/year. Long-Stay Visitor for non-working residents. Profession Libérale for freelancers.',
      'Office Supply & Business Svcs': 'Tier-1 international ecosystem: Big-4, Magic Circle, all US firms. Greffe and URSSAF processes well-documented; English support growing but not universal.',
    },
    indexScores: { affordability: 4.0, economic: 8.0 },
    indexRationale: {
      'Affordability':      'Premium Western EU tier; rent in central arrondissements among Europe\'s highest €/sqm.',
      'Infrastructure':     'World-class metro (16 lines), fibre, healthcare, and cultural infrastructure.',
      'Safety':             'Numbeo mid-50s; pickpocketing and tourist-zone scams are the dominant risks; violent crime rare in central arrondissements.',
      'Quality of Life':    'Unmatched cultural depth, food, and walkability; climate (grey, wet) and bureaucracy are deductions.',
      'Economic Stability': 'Eurozone macro + AA French sovereign + strong fiscal stabilisers.',
    },
    verdicts: {
      nomads:   'Recommendation: PROCEED for Talent Passport holders or Profession Libérale-eligible freelancers earning ≥€4,500/month. Rent supply tightness binding.',
      families: 'Recommendation: STRONG BUY for families on corporate packages or with €€20–35k school budgets. World-class education and healthcare.',
      founders: 'Recommendation: STRONG BUY for EU consumer-tech, fashion-tech, or AI plays. Station F + Bpifrance + JEI tax credits.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  prague: {
    facts: {
      population_city:  '≈ 1.4 million',
      population_metro: '≈ 2.7 million',
      official_lang:    'Czech (English widespread in tourism/tech)',
      timezone:         'CET (UTC+1 / +2 DST)',
      climate_type:     'Temperate Oceanic (Cfb)',
      sunshine_hours:   '≈ 1,800 hrs/yr',
      visa_options:     'Zivno (Trade Licence) Visa, Employee Card, Schengen Visa',
      healthcare:       'Mandatory VZP/private insurance; world-class private (Motol, Na Homolce)',
      avg_local_salary: 'CZK 35,000 – CZK 55,000 / month (≈$1,500–2,400)',
    },
    internet:  { providers: 'O2, Vodafone CZ, T-Mobile CZ, UPC' },
    mobile:    { providers: 'T-Mobile, O2, Vodafone' },
    food:      { shops: 'Albert, Tesco, Lidl, Billa, Kaufland, Globus' },
    transport: { pass_name: 'PID monthly (CZK 550 / €23)', petrol: 'CZK 38 – CZK 42 / litre' },
    cowork:    { names: 'Opero, K10, Impact Hub, HubHub, WeWork, Locus Workspace' },
    school:    { annual: '€8,000 – €18,000 / year', monthly: '€670 – €1,500', examples: 'IB Prague, Park Lane IS, English College, Riverside School' },
    infraScores: { startup: 7.0, banking: 7.5, tax: 6.5, visa: 7.5, office: 7.0 },
    infraNotes: {
      'Internet Reliability':          'O2 and Vodafone deliver 500 Mbps – 1 Gbps fibre for CZK 600–900/month (€25–40). 5G coverage strong; reliability excellent.',
      'Coworking Ecosystem':           'Opero, K10, Impact Hub, and HubHub anchor a strong CEE scene. Hot desks €120–220/month; dedicated €220–400.',
      'Startup & Business Ecosystem':  'StartupYard, KIWI.com, and Avast alumni drive a respectable scene; talent excellent and 50–60% cheaper than DACH region.',
      'English Language Friendliness': 'Strong in tourism, tech, and Prague 2/7 expat zones; moderate elsewhere. Czech is hard but basic phrases unlock a lot.',
      'Banking & Financial Services':  'Česká spořitelna, ČSOB, Komerční banka serve expats. Account opening straightforward post-residency. Revolut and Wise widely used.',
      'Tax System Complexity':         'Top personal rate 23% (low for EU). Zivno (trade licence) holders pay 15% flat with 60% expense deduction — extremely favourable for freelancers.',
      'Visa & Residency Pathway':      'Zivno Visa (1-year extendable, path to permanent residency at year 5) is famously generous to freelancers. Employee Card for sponsored hires.',
      'Office Supply & Business Svcs': 'Big-4 firms, Wolf Theiss, Allen & Overy, and English-speaking účetní (accountants) all available in Prague 1/2.',
    },
    indexScores: { affordability: 7.5, economic: 7.0 },
    indexRationale: {
      'Affordability':      '40–60% below Western EU peers; food, beer, and transit are exceptional value.',
      'Infrastructure':     'Excellent transit, fibre, healthcare; banking and admin moderate friction.',
      'Safety':             'Numbeo top-25 globally; petty theft in tourist zones (Old Town, Wenceslas Square) is the main risk.',
      'Quality of Life':    'Compact walkable city, world-class architecture, beer culture; climate cold/grey 6 months/year.',
      'Economic Stability': 'EU + NATO macro + CZK has been stable; inflation 2–4%.',
    },
    verdicts: {
      nomads:   'Recommendation: STRONG BUY for Zivno-eligible USD/EUR nomads. 15% flat tax + EU lifestyle at SE Asian-adjacent prices.',
      families: 'Recommendation: PROCEED with international school budget; safety and healthcare are exceptional.',
      founders: 'Recommendation: PROCEED for EU SaaS/B2B plays. Talent + tax + EU access is a strong combination.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

  // ════════════════════════════════════════════════════════════════════════
  tokyo: {
    facts: {
      population_city:  '≈ 13.96 million',
      population_metro: '≈ 37.4 million',
      official_lang:    'Japanese',
      timezone:         'JST (UTC+9)',
      climate_type:     'Humid Subtropical (Cfa)',
      sunshine_hours:   '≈ 1,920 hrs/yr',
      visa_options:     'Highly Skilled Professional, Engineer / Specialist in Humanities, Business Manager, Working Holiday',
      healthcare:       'Mandatory NHI (universal); world-class hospitals (St. Luke\'s, Toranomon, Roppongi Hills Clinic)',
      avg_local_salary: '¥350,000 – ¥600,000 / month (≈$2,300–4,000 at 2026 rates)',
    },
    internet:  { providers: 'NTT FLET\'S Hikari, au Hikari, SoftBank Hikari, NURO' },
    mobile:    { providers: 'NTT Docomo, au, SoftBank, Rakuten Mobile' },
    food:      { shops: 'Seiyu, Aeon, Don Quijote, Maruetsu, Life, depachika, conbini (24/7)' },
    transport: { pass_name: 'Pasmo/Suica IC card pay-per-trip; commuter pass discounts', petrol: '¥165 – ¥180 / litre' },
    cowork:    { names: 'WeWork, Spaces, Regus, Mid Point, The Hive Tokyo, Impact Hub Tokyo' },
    school:    { annual: '¥2.5M – ¥4.5M / year (≈$16,500–30,000)', monthly: '¥210k – ¥375k', examples: 'ASIJ, BST, Nishimachi, Seisen, Tokyo IS' },
    infraScores: { startup: 7.0, banking: 7.0, tax: 5.5, visa: 7.5, office: 8.5 },
    infraNotes: {
      'Internet Reliability':          'NURO and au Hikari deliver 2–10 Gbps fibre for ¥5,200–6,500/month (≈$35–43). 5G blanket coverage. Reliability and speed among the world\'s best.',
      'Coworking Ecosystem':           'WeWork, Spaces, Regus, Mid Point, and Impact Hub anchor the scene. Hot desks ¥35,000–60,000/month; dedicated ¥55,000–95,000. Concentrated in Roppongi, Shibuya, and Marunouchi.',
      'Startup & Business Ecosystem':  'Mercari, SmartNews, and Preferred Networks lead a slowly opening scene. Government push (Startup Boost Bill 2022) and J-Startup programme are tailwinds.',
      'English Language Friendliness': 'Strong in international zones (Roppongi, Hiroo, Azabu); moderate-to-low elsewhere. Government services predominantly Japanese; corporate context heavily Japanese-default.',
      'Banking & Financial Services':  'SMBC Prestia, Mizuho, MUFG, Shinsei serve expats. Account opening typically requires hanko (personal seal) and proof of address. Wise and Revolut widely used.',
      'Tax System Complexity':         'Top personal rate 45% + 10% inhabitant tax. Worldwide income for permanent tax residents (after 5 of last 10 years). HSP visa holders may benefit from preferential treatment.',
      'Visa & Residency Pathway':      'Highly Skilled Professional (HSP) Visa (points-based) provides 5-year status + accelerated PR. J-SKIP expedites for top talent. Business Manager visa for entrepreneurs (¥5M capital).',
      'Office Supply & Business Svcs': 'Tier-1 international ecosystem: Big-4, Anderson Mōri & Tomotsune, Nishimura & Asahi, all major banks. English support strong in Tokyo Marunouchi/Otemachi.',
    },
    indexScores: { affordability: 5.5, economic: 7.5 },
    indexRationale: {
      'Affordability':      '¥-weakness 2022–2024 made Tokyo materially cheaper for USD earners; central rents still elevated.',
      'Infrastructure':     'World-class transit (the global gold standard), fibre, healthcare, and safety; admin moderate-friction.',
      'Safety':             'Numbeo top-5 globally; near-zero violent crime; lost wallets routinely returned.',
      'Quality of Life':    'Unmatched food culture, transit, and safety; language barrier is a real isolation factor.',
      'Economic Stability': 'JPY has weakened materially 2022–2024; deflationary pressures shifted to mild inflation; macro stable.',
    },
    verdicts: {
      nomads:   'Recommendation: PROCEED for HSP-eligible high earners or 6-month Working Holiday Visa holders. Language barrier is the binding social constraint.',
      families: 'Recommendation: STRONG BUY for families on corporate packages with international schooling. Safety, transit, and healthcare are world-class.',
      founders: 'Recommendation: PROCEED for fintech, AI, or Japan-market plays. Business Manager visa straightforward; talent expensive but loyal.',
    },
    defaultNeighborhoodPros: genericPros,
    defaultNeighborhoodCons: genericCons,
  },

};

// Attach default synthesisers for any city missing them
for (const slug in CITIES) {
  if (!CITIES[slug].defaultNeighborhoodPros) CITIES[slug].defaultNeighborhoodPros = genericPros;
  if (!CITIES[slug].defaultNeighborhoodCons) CITIES[slug].defaultNeighborhoodCons = genericCons;
}

module.exports = CITIES;
