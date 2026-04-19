/**
 * cityIntel.js
 * Hand-written, city-specific editorial content for the 12 paid eBooks.
 * Consumed by scripts/generate-city-ebook.js. If a slug is missing here,
 * the generator falls back to template output.
 *
 * ASCII-only (Vite/Rollup on Vercel rejects non-ASCII bytes in .js).
 *
 * Fields per entry:
 *   neighborhoods: [{ name, rentRatio, character, oneLineDesc, bestFor }]
 *       rentRatio is a multiplier vs city-centre rent (0.5 - 1.6).
 *   peerCities:    [{ slug, rationale }]  (4 entries)
 *   execSummary:   array of 2-3 paragraph strings (no shared opener)
 *   cuisineNotes:  string (2-3 sentences)
 *   cultureNotes:  string (2-3 sentences)
 *   risks:         [{ vector, level, assessment }]  (3-4 entries)
 *   whoShouldMove: { remoteWorker, digitalNomad, family, retiree, entrepreneur }
 *                  each { verdict: 'RECOMMENDED'|'CONDITIONAL'|'CAUTION', detail: string }
 *   prosCons:      { pros: [[title, detail], ...], cons: [[title, detail], ...] }
 */

export const CITY_INTEL = {
  bangkok: {
    neighborhoods: [
      { name: 'Sukhumvit (Asoke / Phrom Phong)', rentRatio: 1.25, character: 'International Core', oneLineDesc: 'The spine of expat Bangkok: BTS skytrain access, malls, medical hubs, and the densest cluster of coworking spaces in the city.', bestFor: 'Remote professionals who want English-friendly infrastructure and frictionless logistics.' },
      { name: 'Silom / Sathorn', rentRatio: 1.15, character: 'CBD + Nightlife', oneLineDesc: 'Bangkok\'s financial district by day and a nightlife strip by night, with condo towers perched over both MRT and BTS interchanges.', bestFor: 'Finance and consulting workers with local employer ties.' },
      { name: 'Thonglor / Ekkamai', rentRatio: 1.35, character: 'Trendy + Premium', oneLineDesc: 'The Japanese-leaning lifestyle corridor: craft coffee, izakayas, boutique gyms, and the priciest new-build condos east of Sukhumvit.', bestFor: 'Higher-income expats and creatives who prioritise cafe density over commute.' },
      { name: 'Ari', rentRatio: 0.85, character: 'Local-Hip Residential', oneLineDesc: 'A quieter BTS stop north of the centre where design studios and third-wave cafes sit next to old-Bangkok shophouses.', bestFor: 'Long-term residents who want local neighbourhood feel without losing BTS access.' },
      { name: 'Phrom Phong (Prompong)', rentRatio: 1.10, character: 'Family / Japanese Expat', oneLineDesc: 'Emporium and EmQuartier anchor a family-friendly district with international schools, parks, and strong Japanese retail presence.', bestFor: 'Relocating families and East-Asian expats looking for schools and parks.' }
    ],
    peerCities: [
      { slug: 'ho-chi-minh', rationale: 'Similar SE-Asia hub cost profile; cheaper rent, weaker visa.' },
      { slug: 'kuala-lumpur', rationale: 'English-friendlier peer with MM2H long-stay visa.' },
      { slug: 'singapore', rationale: 'Regional premium tier Bangkok residents hop to for banking and flights.' },
      { slug: 'chiang-mai', rationale: 'Northern Thai alternative for nomads who find Bangkok too dense.' }
    ],
    execSummary: [
      'Bangkok is the operational hub of Southeast Asia for remote workers in 2026. The introduction of the Thailand Destination Thailand Visa (DTV) in 2024 transformed a city that already had cheap rent, 100+ Mbps fibre, and a mature coworking ecosystem into one of the most visa-accessible long-stay destinations on the planet. A five-year multi-entry status for qualifying nomads has pulled inventory into premium Sukhumvit condos and pushed rents up in Thonglor and Ari, but the overall cost base remains a fraction of any comparable tier-1 Asian city.',
      'What distinguishes Bangkok from its regional peers is density without compromise: world-class private healthcare (Bumrungrad, Samitivej), two rail networks, Suvarnabhumi\'s 90+ direct-flight network, and street food that keeps the Budget Nomad profile viable even as condo rents climb. The trade-offs are real -- air quality crashes every Jan-Mar burning season, political cycles periodically introduce regulatory noise, and the baht has weakened versus the dollar, which helps newcomers but erodes THB-denominated salaries.',
      'For a 2026 remote-worker relocation, Bangkok reads as a STRONG BUY for DTV-eligible professionals earning in USD, EUR, or SGD, and a CONDITIONAL BUY for those tied to baht income or sensitive to PM2.5.'
    ],
    cuisineNotes: 'Bangkok\'s food stack is the cheapest lever in any nomad budget: a 50-80 THB street meal (roughly USD 1.50-2.50) holds its own against most cities\' home-cooked equivalents, which means the "Budget" profile here is about eating out, not cooking in -- the reverse of Paris or Amsterdam. Grocery prices on imported goods (cheese, wine, Western cereals) are punitive; locals and long-term expats default to Makro, Tops, or Villa Market depending on tier. Expect to spend dramatically less on food while eating dramatically more often out.',
    cultureNotes: 'Bangkok operates on long days and late evenings: office hours skew 9-to-6+, and social life pushes well past midnight. The city is polite, hierarchical, and transactional with foreigners -- "farang pricing" is a real phenomenon in tourist zones, and fluent basic Thai meaningfully changes how the city treats you after month six. Buddhism and monarchy shape the calendar; several long holiday clusters (Songkran in April, New Year) empty the city and reshape logistics.',
    risks: [
      { vector: 'Air Quality (PM2.5)', level: 'HIGH', assessment: 'Bangkok routinely hits AQI 150-250 during Jan-Mar burning season. Budget USD 30-60/month for air purifiers per room; sensitive individuals should plan seasonal exits.' },
      { vector: 'Political / Regulatory', level: 'MODERATE', assessment: 'Thailand has a history of political cycles that occasionally affect visa rules, banking access, and property ownership pathways for foreigners.' },
      { vector: 'Flooding (seasonal)', level: 'MODERATE', assessment: 'Low-lying districts flood during peak monsoon (Sep-Oct). Favour higher ground or upper-floor condos; check building history before signing.' },
      { vector: 'Currency (THB weakness)', level: 'LOW', assessment: 'THB has softened vs USD since 2022, which favours incoming expats but erodes baht-denominated salaries for locally employed professionals.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'RECOMMENDED', detail: 'DTV visa, 120 Mbps fibre, dense coworking (The Hive, Justco, WeWork), and Sukhumvit English signage make Bangkok one of the lowest-friction remote-work hubs globally.' },
      digitalNomad:  { verdict: 'RECOMMENDED', detail: 'The 5-year DTV is the single most generous nomad visa in Asia as of 2026. Budget Nomad profile works at under USD 1,500/month including private 1BR in a non-central BTS condo.' },
      family:        { verdict: 'CONDITIONAL', detail: 'International schools (NIST, Bangkok Patana, Shrewsbury) are excellent but cost USD 20-35k/year. Air quality and traffic are the main friction points; Phrom Phong or outer Sukhumvit work best.' },
      retiree:       { verdict: 'RECOMMENDED', detail: 'Retirement Visa (O-A) remains viable with a THB 800k deposit or pension proof. Private healthcare is world-class and 40-60% cheaper than the US for most procedures.' },
      entrepreneur:  { verdict: 'CONDITIONAL', detail: 'Low cost base and strong regional connectivity, but 51% Thai-ownership rule on most company structures pushes founders toward BOI schemes, holding companies, or Singapore incorporation.' }
    },
    prosCons: {
      pros: [
        ['DTV Visa (5-year)', 'Thailand\'s Destination Thailand Visa is the most generous remote-worker visa in Asia as of 2026.'],
        ['Street-Food Economics', 'Eating out three meals a day can cost less than cooking at home in most Western cities.'],
        ['Private Healthcare', 'Bumrungrad and Samitivej are JCI-accredited with costs 40-60% below US rates.'],
        ['Airport Connectivity', 'Suvarnabhumi offers 90+ direct international destinations -- best hub in mainland SE Asia.'],
        ['Coworking Density', 'The Hive, Justco, WeWork, and Spaces operate 40+ sites citywide.']
      ],
      cons: [
        ['PM2.5 Burning Season', 'Jan-Mar air quality regularly hits hazardous levels; not optional for asthmatics.'],
        ['Traffic Gridlock', 'Surface traffic is punishing; life effectively revolves around BTS/MRT proximity.'],
        ['Ownership Restrictions', 'Foreigners cannot own land; condo ownership is capped at 49% per building.'],
        ['Farang Pricing', 'Dual-price tag culture persists in tourist zones and some service sectors.']
      ]
    }
  },

  'mexico-city': {
    neighborhoods: [
      { name: 'Polanco', rentRatio: 1.45, character: 'Premium + International', oneLineDesc: 'The embassies-and-Michelin district; wide tree-lined avenues, luxury retail on Avenida Masaryk, and the most expensive per-sqm rents in CDMX.', bestFor: 'Corporate expats and families prioritising security and walkability over price.' },
      { name: 'Condesa', rentRatio: 1.20, character: 'Art-Deco + Nomad-Heavy', oneLineDesc: 'Parque Mexico and Parque Espana anchor a grid of Art Deco walk-ups now dominated by remote workers, dog-walkers, and specialty coffee.', bestFor: 'Digital nomads and creatives who want the "postcard" CDMX experience.' },
      { name: 'Roma Norte', rentRatio: 1.15, character: 'Creative + Foodie', oneLineDesc: 'Adjacent to Condesa with denser restaurants, cocktail bars, and galleries; ground-zero for the post-2020 gentrification debate.', bestFor: 'Single remote workers and couples in the 25-40 range.' },
      { name: 'Coyoacan', rentRatio: 0.85, character: 'Historic + Quieter', oneLineDesc: 'The cobblestone, Frida-Kahlo south with weekend markets, UNAM proximity, and a slower, more local rhythm than Condesa.', bestFor: 'Longer-term residents and families who prefer community over nightlife.' },
      { name: 'Del Valle', rentRatio: 0.90, character: 'Residential Middle-Class', oneLineDesc: 'A large, mostly residential zone south of Roma with supermarkets, schools, and better per-peso value on 2BR apartments.', bestFor: 'Families and longer-term relocators on a moderate budget.' }
    ],
    peerCities: [
      { slug: 'medellin', rationale: 'Closest LATAM peer for nomad density and spring climate.' },
      { slug: 'buenos-aires', rationale: 'Larger, more European-feeling peer with peso volatility upside/risk.' },
      { slug: 'lima', rationale: 'Cheaper Pacific peer with weaker nomad infrastructure.' },
      { slug: 'sao-paulo', rationale: 'Regional business capital; richer but less nomad-friendly.' }
    ],
    execSummary: [
      'Mexico City in 2026 is the creative capital of Latin America and, increasingly, the default US-time-zone alternative for remote workers priced out of the American coasts. The post-2020 nomad influx pushed Condesa and Roma Norte rents up 40-70% in dollar terms, making CDMX no longer a "cheap" destination in those corridors but still a strong-value one against any US tier-1 city.',
      'The city\'s fundamentals are unusual: 7,300 feet of elevation, perpetual-spring climate, a 25+ million metro population, and a cultural depth that rivals any European capital. Against that, CDMX requires real preparation -- neighbourhood selection is the single biggest driver of lived experience, seismic activity is non-trivial, and Mexican tax residency triggers after 183 days for anyone not carefully structured.',
      'Verdict for 2026: BUY for nomads and remote workers who want a US-compatible time zone without US prices, CONDITIONAL for families who haven\'t stress-tested school logistics and altitude acclimation.'
    ],
    cuisineNotes: 'Mexico City\'s food scene is arguably the most underrated in the Americas: a USD 2 tacos-al-pastor dinner at El Huequito sits in the same week as a USD 300 tasting menu at Pujol or Quintonil. Markets (Mercado Medellin, Mercado Roma) give cooks access to produce that would cost 3-5x in North American cities. The net effect: even "Standard" budget profiles eat exceptionally well here compared to equivalent spend in US cities.',
    cultureNotes: 'CDMX operates on a later rhythm than US/Northern Europe: lunch from 2pm, dinner from 9pm, and a Sunday family culture that largely shuts retail. Spanish is essential for anything beyond Condesa/Roma; English service tapers sharply outside those two plus Polanco. The city is warm, social, and late-running, but security instincts matter -- Ubers over street taxis, neighbourhood selectivity, and basic situational awareness are table stakes.',
    risks: [
      { vector: 'Seismic Activity', level: 'HIGH', assessment: 'CDMX sits on a former lakebed; 2017 and 1985 earthquakes caused significant damage. Verify building age and soil-zone classification before signing any lease.' },
      { vector: 'Altitude Adjustment', level: 'MODERATE', assessment: '2,240m elevation affects sleep, cardio, and alcohol tolerance for the first 2-6 weeks. Plan a softer schedule for month one.' },
      { vector: 'Security (Neighbourhood-Specific)', level: 'MODERATE', assessment: 'Central/south zones (Polanco/Condesa/Roma/Coyoacan) are low-incident; north and outer-east zones are materially higher-risk for expats.' },
      { vector: 'Tax Residency Trigger', level: 'MODERATE', assessment: '183-day rule applies; Mexican tax residents face worldwide income taxation. Structure carefully with a Mexican CPA before committing to a long stay.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'RECOMMENDED', detail: 'US-compatible time zones, strong fibre, excellent coworking (Publico, WeWork, Selina), and a creative-professional community that is unmatched in LATAM.' },
      digitalNomad:  { verdict: 'RECOMMENDED', detail: 'No dedicated nomad visa, but 180-day tourist entries are standard and the Temporary Resident pathway via income is well-trodden. Condesa/Roma carry the nomad community.' },
      family:        { verdict: 'CONDITIONAL', detail: 'Excellent bilingual and international schools (ASF, Greengates, Edron) but tuition is USD 15-25k. Neighbourhood choice matters enormously; Polanco and Del Valle lead.' },
      retiree:       { verdict: 'CONDITIONAL', detail: 'Temporary Resident visa with USD ~2,600/month income proof works well. Healthcare varies sharply private-vs-public; altitude may not suit everyone.' },
      entrepreneur:  { verdict: 'RECOMMENDED', detail: 'The LATAM tech scene increasingly centres here; Mexican SAPI corporate structures are founder-friendly and USMCA nexus is a meaningful strategic edge.' }
    },
    prosCons: {
      pros: [
        ['US-Compatible Time Zone', 'CT/CST overlap makes CDMX the rare LATAM hub that works for US employers without schedule hacks.'],
        ['Cultural Depth', 'World-class museums (Soumaya, MUAC, Antropologia), theatre, and a top-5 global food scene.'],
        ['Perpetual-Spring Climate', '18-25C most of the year at 2,240m elevation -- no AC required in most housing.'],
        ['Excellent Value on Food', 'Market-to-Michelin range with markets that rival any in the Americas on quality and price.'],
        ['Creative Community', 'Dense artist, designer, and founder population in Roma/Condesa.']
      ],
      cons: [
        ['Seismic Risk', 'Real earthquake risk concentrated in soft-soil zones -- due diligence on building required.'],
        ['Neighbourhood Dependency', 'Lived experience varies more by district than almost any peer city; the wrong zone ruins the relocation.'],
        ['Tourist-Local Tension', 'Post-2020 gentrification has created visible resentment in Condesa/Roma; long-term residents encounter it.'],
        ['Tax Residency Trap', '183-day rule is easy to trip for long-stay nomads who haven\'t structured their affairs.']
      ]
    }
  },

  dubai: {
    neighborhoods: [
      { name: 'Dubai Marina', rentRatio: 1.15, character: 'Waterfront + Nomad-Dense', oneLineDesc: 'High-rise marina-front living with the densest concentration of remote workers, gyms, and metro access in the city.', bestFor: 'Single remote workers and couples who want walkable, beach-adjacent living.' },
      { name: 'Downtown Dubai', rentRatio: 1.50, character: 'Premium + Business', oneLineDesc: 'Burj Khalifa, Dubai Mall, and DIFC on your doorstep; the most expensive postcode and the most "global-city" feel.', bestFor: 'Corporate expats, finance professionals, and those prioritising prestige address.' },
      { name: 'JBR (Jumeirah Beach Residence)', rentRatio: 1.25, character: 'Beach + Touristy', oneLineDesc: 'Direct beach access with The Walk\'s restaurant strip; more holiday-flavoured than Marina, which sits one block inland.', bestFor: 'Short-to-mid-term relocators and those who will actually use the beach daily.' },
      { name: 'Business Bay', rentRatio: 1.10, character: 'Newer CBD Adjacent', oneLineDesc: 'Post-2015 towers along the Dubai Canal extension of Downtown; newer stock at slightly lower PSF than Downtown proper.', bestFor: 'Professionals working in DIFC/Downtown who want newer buildings at a modest discount.' },
      { name: 'JLT (Jumeirah Lake Towers)', rentRatio: 0.85, character: 'Value Marina-Adjacent', oneLineDesc: 'Directly across Sheikh Zayed Road from Marina with its own metro station and 20-30% cheaper per-sqft rents.', bestFor: 'Budget-conscious remote workers who still want Marina-area lifestyle access.' }
    ],
    peerCities: [
      { slug: 'singapore', rationale: 'Closest global-hub analogue: both zero-income-tax-optimised, both expat-majority districts.' },
      { slug: 'london', rationale: 'Where many Dubai finance professionals come from or return to.' },
      { slug: 'istanbul', rationale: 'Regional Middle-East peer with lower costs and weaker infrastructure.' },
      { slug: 'miami', rationale: 'US analogue in the same luxury-waterfront-plus-zero-state-tax bucket.' }
    ],
    execSummary: [
      'Dubai in 2026 is the single most aggressive tax-optimisation destination on the planet for internationally mobile remote workers. Zero personal income tax, a 5-year Virtual Working Programme visa, world-class logistics, and 90%+ English proficiency across professional life combine into a value proposition no other hub can match on headline tax terms.',
      'The counterweight is lifestyle cost. Dubai is not cheap -- rent, schooling, alcohol, groceries for Western diets, and car-dependent commuting stack a premium lifestyle burden that can neutralise the tax saving for households earning under roughly USD 150k. The city is also deeply car-centric, alcohol is licensed and socially restricted outside hotel/licensed venues, and summer (Jun-Sep) is genuinely extreme with 45C+ highs that reshape daily life.',
      'Verdict for 2026: STRONG BUY for high-income singles and couples in tax-eligible jurisdictions; CONDITIONAL for families with multiple children (schooling cost is the single largest line item); CAUTION for budget nomads -- Dubai breaks the "cheap nomad" formula entirely.'
    ],
    cuisineNotes: 'Dubai\'s food stack is cosmopolitan and expensive: everything from USD 2 shawarma to USD 400 tasting menus exists, but the grocery-shop-at-home-cooking path that works in Bangkok or Lisbon is punitive here because most Western ingredients are imported. Alcohol is licensed and taxed -- a bar pour at a licensed venue can be USD 15-25. The net: eating out is excellent and varied, but cost-controlling a Dubai budget means embracing the Karama/Deira end of the restaurant spectrum, not the Marina end.',
    cultureNotes: 'Dubai runs Sun-Thu as the working week, with Fri-Sat as the weekend (changed in 2022 to a Sat-Sun-adjacent half-day Friday schedule). The city is expat-majority (roughly 85%), English is the professional lingua franca, and it\'s one of the most culturally permissive GCC cities -- but Ramadan, public-drunkenness laws, and the local legal framework still matter and surprise newcomers. Social life is compartmentalised: licensed venues, beach clubs, and home entertaining.',
    risks: [
      { vector: 'Summer Heat (Jun-Sep)', level: 'HIGH', assessment: 'Daily highs routinely exceed 45C; outdoor life effectively stops. Factor AC costs (AED 800-2000/month) and plan summer exits if possible.' },
      { vector: 'Schooling Cost Bomb', level: 'HIGH', assessment: 'International school fees run AED 50,000-100,000+ per child per year. The tax saving evaporates fast for families with 2+ children not on an employer education package.' },
      { vector: 'Alcohol Licensing', level: 'LOW', assessment: 'Personal alcohol licence needed for home purchase; public intoxication and zero-tolerance DUI carry real legal consequences.' },
      { vector: 'Visa Tied to Sponsor/Income', level: 'MODERATE', assessment: 'Most visa categories (employment, Virtual Working, Golden) are tied to income floors or sponsorship continuity; lose the job/income, clock starts on exit.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'RECOMMENDED', detail: 'Zero income tax, Virtual Working Programme visa, world-class fibre, English-everywhere business environment. Few peers on pure tax-plus-infrastructure basis.' },
      digitalNomad:  { verdict: 'CONDITIONAL', detail: 'Virtual Working visa requires USD 5,000+/month income proof. Lifestyle cost neutralises the tax advantage below roughly USD 100k/year -- not a "budget nomad" hub.' },
      family:        { verdict: 'CONDITIONAL', detail: 'Safe, well-serviced, and full of international schools, but schooling alone can consume USD 60,000+/year for two children. Employer relocation packages are often the deciding factor.' },
      retiree:       { verdict: 'CONDITIONAL', detail: 'Retirement visa (55+, income/assets requirement) is available. Healthcare is excellent but private and pricey. Summer climate is a real factor for older residents.' },
      entrepreneur:  { verdict: 'RECOMMENDED', detail: 'Free-zone company structures (DMCC, IFZA, DIFC) give 100% foreign ownership, zero corporate tax under AED 375k, and a Golden Visa pathway. Mature founder ecosystem.' }
    },
    prosCons: {
      pros: [
        ['Zero Personal Income Tax', 'The cleanest legal tax-optimisation destination among global-city-tier hubs.'],
        ['English-Everywhere', 'Roughly 90% English proficiency in professional life; Arabic not required.'],
        ['Safety + Rule-of-Law', 'Consistently ranks among the safest large cities globally.'],
        ['Logistics Hub', 'DXB/DWC give 8-hour reach to two-thirds of the world\'s population.'],
        ['Premium Healthcare', 'Private healthcare is world-class (Cleveland Clinic Abu Dhabi, Mediclinic network).']
      ],
      cons: [
        ['High Lifestyle Cost', 'Rent + schooling + alcohol + car stack a premium cost base that neutralises tax for mid-income households.'],
        ['Extreme Summers', 'Jun-Sep is genuinely oppressive; many expats plan 6-12 week summer exits.'],
        ['Car-Dependent', 'Metro covers main corridors but most errands require a car; expect AED 2,000-4,000/month for lease + fuel + parking.'],
        ['Visa Tied to Income/Sponsor', 'Most residency pathways are conditional; loss of income starts an exit clock.']
      ]
    }
  },

  amsterdam: {
    neighborhoods: [
      { name: 'Jordaan', rentRatio: 1.35, character: 'Historic + Premium', oneLineDesc: 'Canal-ring postcard Amsterdam with narrow 17th-century houses, galleries, and the highest per-sqm rents in the city.', bestFor: 'High-income professionals who want to live inside the UNESCO ring.' },
      { name: 'De Pijp', rentRatio: 1.15, character: 'Trendy + Dense', oneLineDesc: 'Dense, lively, and food-forward around Albert Cuyp market; effectively Amsterdam\'s answer to Brooklyn.', bestFor: 'Single remote workers and couples in their late 20s-30s.' },
      { name: 'Oud-Zuid', rentRatio: 1.30, character: 'Family + Upmarket', oneLineDesc: 'South of Vondelpark with museums, leafy streets, and the densest concentration of international schools.', bestFor: 'Relocating families and long-term expats with children.' },
      { name: 'Oost (East)', rentRatio: 0.95, character: 'Rising + Mixed', oneLineDesc: 'Post-gentrification wave east of the centre with parks, the Tropenmuseum, and better value per sqm than ring-adjacent zones.', bestFor: 'Value-conscious professionals who still want 15-minute bike access to the centre.' },
      { name: 'Noord (North)', rentRatio: 0.80, character: 'Newest + Creative', oneLineDesc: 'Across the IJ from Centraal, post-industrial conversion projects, the EYE museum, and the best remaining rent value in the city.', bestFor: 'Creatives and newer arrivals willing to take the 5-minute free ferry daily.' }
    ],
    peerCities: [
      { slug: 'berlin', rationale: 'The other English-friendly Northern European creative hub; cheaper, grittier.' },
      { slug: 'london', rationale: 'Larger English-speaking financial peer; more expensive across the board.' },
      { slug: 'stockholm', rationale: 'Nordic peer on quality-of-life metrics with harsher winters.' },
      { slug: 'paris', rationale: 'Closest cultural-capital peer at a similar price point.' }
    ],
    execSummary: [
      'Amsterdam in 2026 is the most English-friendly city in continental Europe and one of the most housing-constrained. Dutch English proficiency is effectively native-equivalent in professional settings, infrastructure is world-class, and the Dutch-American Friendship Treaty (DAFT) visa remains one of the cheapest founder-entry routes into the Schengen Area at roughly EUR 4,500 in business capital.',
      'The defining issue, as it has been since 2015, is housing. Rent-regulated (social) housing is effectively inaccessible to newcomers; the private market is tight, expensive, and increasingly hostile to short-term corporate leases. Energy costs remain elevated post-2022, and a broader Dutch political shift toward reducing expat tax breaks (the 30% ruling is being tapered) has softened Amsterdam\'s net package for new arrivals.',
      'Verdict for 2026: BUY for remote workers earning in USD/GBP and willing to accept housing friction; CONDITIONAL for dual-resident couples, families needing multi-bedroom stock, and anyone expecting the historical 30% ruling in its original form.'
    ],
    cuisineNotes: 'Amsterdam\'s food scene has improved dramatically over the last decade but remains expensive per-meal compared to Southern Europe: a mid-tier dinner-for-two easily runs EUR 80-120. Groceries at Albert Heijn, Jumbo, and Turkish/Moroccan corner shops (for fresh produce) are reasonable, and home cooking is the actual cost-controlling lever here. Dutch food culture remains pragmatic (broodjes, fries, herring); the genuine depth lives in Indonesian, Surinamese, and Middle-Eastern diaspora cuisines.',
    cultureNotes: 'Amsterdam works on Dutch directness: social calendars are planned weeks ahead, work-life boundaries are hard, and unsolicited feedback is the default communication mode. Cycling is not a lifestyle choice -- it\'s the transport baseline, and a city that doesn\'t bike has a materially worse time. The expat community is enormous but compartmentalised; integration with Dutch peers is a medium-term project, not a first-month one.',
    risks: [
      { vector: 'Housing Scarcity', level: 'HIGH', assessment: 'Finding a private long-term rental typically takes 4-12 weeks with real competition; many newcomers spend 3-6 months in serviced or short-let before securing stable housing.' },
      { vector: '30% Ruling Taper', level: 'MODERATE', assessment: 'The expat tax ruling is being reduced (30%/20%/10% over 5 years structure). Tax-net-of-ruling calculations based on old assumptions no longer hold.' },
      { vector: 'Climate (Damp + Dark)', level: 'MODERATE', assessment: 'Nov-Feb daylight averages under 8 hours with high cloud cover. SAD is a documented issue; light therapy and winter exits are common.' },
      { vector: 'Bike Theft + Damp Housing', level: 'LOW', assessment: 'Bike theft is near-universal at the 1-2-year mark; older canal-house stock has damp/heating issues that surprise newcomers from drier climates.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'RECOMMENDED', detail: 'Near-native English environment, EUR 100+ Mbps fibre, excellent coworking (TQ, B.Amsterdam, Spaces). The DAFT route suits US founders; employer sponsorship handles the rest.' },
      digitalNomad:  { verdict: 'CONDITIONAL', detail: 'No dedicated nomad visa, Schengen 90/180 limits apply, and short-let housing is regulated (60-day rental cap per year for most units). Suits project-length stays more than nomad circuits.' },
      family:        { verdict: 'RECOMMENDED', detail: 'Excellent bilingual/international schools (AICS, ISA, BSA), bike-safe streets, and strong public healthcare. Main friction is 3BR+ housing stock in Oud-Zuid or Oost.' },
      retiree:       { verdict: 'CONDITIONAL', detail: 'No dedicated retirement visa; EU citizens have easy access, non-EU retirees face the standard residency/income pathway. Dark winters are the single biggest factor to stress-test.' },
      entrepreneur:  { verdict: 'RECOMMENDED', detail: 'DAFT visa is the lowest-capital Schengen founder entry for US citizens. Dutch BV structures, startup-friendly legal environment, and Schiphol logistics are genuine advantages.' }
    },
    prosCons: {
      pros: [
        ['Near-Native English', 'Highest English proficiency in continental Europe; Dutch is optional for most professional roles.'],
        ['Cycling Infrastructure', 'World-class bike network makes a car actively unnecessary in most of the city.'],
        ['DAFT Visa', 'EUR 4,500 capital requirement is the cheapest legitimate Schengen founder route.'],
        ['Schiphol Connectivity', 'One of Europe\'s top-3 airports; 300+ direct destinations.'],
        ['Strong Public Healthcare', 'Mandatory insurance (~EUR 150/month) gives access to excellent public system.']
      ],
      cons: [
        ['Housing Market Dysfunction', 'Supply-constrained, regulated, and hostile to short-term corporate rentals; first 3-6 months are often the hardest.'],
        ['30% Ruling Tapering', 'Historical expat tax break is being progressively reduced; factor the new rules, not old ones.'],
        ['Dark Winters', 'Nov-Feb daylight and cloud cover are a real wellbeing factor.'],
        ['High Per-Meal Dining Cost', 'Restaurants are a premium spend compared to Southern European peers.']
      ]
    }
  },

  bali: {
    neighborhoods: [
      { name: 'Canggu', rentRatio: 1.20, character: 'Nomad Capital', oneLineDesc: 'The default 2020s nomad hub: Dojo, Outpost, and Tropical Nomad anchor a beach-and-coworking strip that\'s now closer to Silicon-Valley-on-the-beach than local Bali.', bestFor: 'Digital nomads and solo remote workers prioritising community over quiet.' },
      { name: 'Ubud', rentRatio: 0.95, character: 'Inland + Wellness', oneLineDesc: 'Rice-paddy interior; yoga, plant-medicine, and long-stay wellness culture. Slower pace, cooler nights, no beach.', bestFor: 'Longer-stay remote workers and those prioritising nature and wellness over surf.' },
      { name: 'Seminyak', rentRatio: 1.35, character: 'Polished + Tourist-Heavy', oneLineDesc: 'Beach clubs, boutique retail, and the priciest villa stock on the west coast; more holiday-rental-feel than day-to-day nomad.', bestFor: 'Higher-income residents and couples who want Bali with upscale infrastructure.' },
      { name: 'Uluwatu (Bukit)', rentRatio: 1.10, character: 'Surf + Cliff', oneLineDesc: 'Clifftop Bukit peninsula with world-class surf breaks and increasingly polished cafe/coworking build-out over 2022-2025.', bestFor: 'Surfers and quieter-living remote workers who still want scene.' },
      { name: 'Sanur', rentRatio: 0.80, character: 'Family + Quieter', oneLineDesc: 'The east-coast original-expat zone: calm water, flat beach, established community, and Bali\'s designated Digital Nomad development zone.', bestFor: 'Families, long-stay retirees, and those who have already been through Canggu.' }
    ],
    peerCities: [
      { slug: 'chiang-mai', rationale: 'The other Asian-original nomad hub; cheaper, drier, no beach.' },
      { slug: 'ho-chi-minh', rationale: 'Bigger-city peer with better infrastructure, worse weather.' },
      { slug: 'bangkok', rationale: 'Regional metropolitan hub most Bali nomads commute through.' },
      { slug: 'kuala-lumpur', rationale: 'MM2H-visa capital of SE-Asia for longer stays.' }
    ],
    execSummary: [
      'Bali in 2026 is the most mature nomad destination in Asia and increasingly a victim of that maturity. Canggu and Seminyak have gone from USD 300/month villas in 2015 to USD 1,200-1,800/month 1BRs in 2025, traffic is materially worse, and the infrastructure load is showing -- sewage, waste, and power stability all strain during peak season.',
      'The counter-story is that the island still works. Indonesia\'s Second-Home Visa and the new B211A-plus extensions make 6-12 month stays legally feasible, fibre is reliably 50-100 Mbps in developed zones, Ngurah Rai airport has added long-haul carriers, and the underlying climate-plus-cost proposition remains genuinely unique: you will not find a peer destination with this combination of tropical lifestyle, established coworking, and sub-Western rents.',
      'Verdict for 2026: BUY for mid-stay (2-6 month) nomads who manage the zone selection carefully (Canggu for scene, Ubud for quiet, Sanur for long-term); CONDITIONAL for full-year residents, who increasingly cite over-tourism and infrastructure fatigue as reasons to rotate off-island.'
    ],
    cuisineNotes: 'Bali\'s food split is stark: warungs (local eateries) deliver a nasi campur for IDR 25-40k (USD 1.60-2.50), while the Canggu/Seminyak cafe circuit pushes brunch plates to IDR 120-180k (USD 8-12) -- higher per-plate than much of Bangkok. Groceries at Pepito, Bintang, and Canggu Deli are expensive for imported goods; local wet markets give a dramatic discount for tropical fruit and vegetables. Home cooking is rare -- most long-stay nomads eat out three meals a day.',
    cultureNotes: 'Bali operates on "jam karet" (rubber time) for most service interactions, with deep Balinese Hindu ceremony integrated into daily life -- expect road closures for processions and neighbourhood ceremonies that pause normal rhythms. The expat community is vast but bubbled in Canggu/Ubud/Uluwatu; respectful integration with local Balinese and Indonesian communities is a slower, longer project. Indonesian (Bahasa) basics go a long way; Balinese is a separate language reserved for ceremony and elders.',
    risks: [
      { vector: 'Visa Overstay / Enforcement', level: 'MODERATE', assessment: 'Indonesia has periodically tightened enforcement on visa misuse (B211 used for de-facto work). The new DNV (Second Home / E33G) is the safer long-stay path.' },
      { vector: 'Traffic + Infrastructure Strain', level: 'HIGH', assessment: 'Canggu-Seminyak rush hour can hit 90+ minutes for 10km. Scooter is default transport and the single largest safety/injury vector on the island.' },
      { vector: 'Scooter Accidents', level: 'HIGH', assessment: 'Scooter injuries are the #1 medical issue for visiting nomads. BPJS + a robust international policy (evacuation cover included) are non-negotiable.' },
      { vector: 'Rainy Season (Nov-Mar)', level: 'LOW', assessment: 'Significant rainfall and humidity; some coworking/outdoor setups are limited. Not a deal-breaker but schedule accordingly.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'CONDITIONAL', detail: 'Great 3-6 month base; quality of life erodes past year one for most. Canggu/Ubud coworking is mature, but expect lifestyle fatigue and scene saturation.' },
      digitalNomad:  { verdict: 'RECOMMENDED', detail: 'Still the highest-density nomad community in Asia. E33G (Digital Nomad Visa, tax-free for foreign-source income) makes 12-month stays viable for qualifying applicants.' },
      family:        { verdict: 'CONDITIONAL', detail: 'Sanur and Ubud work better than Canggu for families. International schools (Green School, Sanur Independent) are excellent but fees mid-tier international.' },
      retiree:       { verdict: 'RECOMMENDED', detail: 'Second Home Visa (5-10 year) with USD ~130k deposit requirement suits well-capitalised retirees. Healthcare is adequate for primary care, Singapore/KL for serious cases.' },
      entrepreneur:  { verdict: 'CONDITIONAL', detail: 'Excellent for content/creator/lifestyle businesses; weaker for anyone needing local legal entities or banking. PT PMA setup is doable but requires local counsel.' }
    },
    prosCons: {
      pros: [
        ['Nomad Community Density', 'Largest concentration of remote workers in Asia; deepest meetup/coliving/coworking mesh.'],
        ['Tropical Climate', 'Year-round 25-32C; no winter wardrobe required.'],
        ['Second-Home / DNV Visa', 'Genuine 5-10 year legal long-stay pathway with foreign-income tax exemption.'],
        ['Cost of Living (outside Canggu)', 'Ubud, Sanur, Amed deliver strong value vs any Western peer.'],
        ['Wellness Infrastructure', 'World-class yoga, surf, and wellness offering -- unmatched at this price point.']
      ],
      cons: [
        ['Scooter Injury Rate', 'Single most common medical issue for visiting nomads; insurance non-negotiable.'],
        ['Over-Tourism in Canggu/Seminyak', 'Traffic, waste, and infrastructure strain are visibly worsening year-on-year.'],
        ['Long-Haul Flight Cost', 'USD/EUR 800-1500 to most Western home bases; friction for visits home.'],
        ['Limited Complex Healthcare', 'Serious procedures usually mean evacuation to Singapore or KL.']
      ]
    }
  },

  barcelona: {
    neighborhoods: [
      { name: 'Eixample', rentRatio: 1.15, character: 'Central + Architecture', oneLineDesc: 'The Cerda-grid heart of the city: Gaudi buildings, wide avenues, and the densest services-per-block in Barcelona.', bestFor: 'Remote professionals wanting central access, walkability, and architectural quality.' },
      { name: 'Gracia', rentRatio: 1.05, character: 'Village-in-City', oneLineDesc: 'A former independent village now absorbed into the city, with narrow streets, plazas, and a strong local-Catalan identity.', bestFor: 'Longer-term residents who want neighbourhood feel and Catalan integration.' },
      { name: 'El Born (Ciutat Vella)', rentRatio: 1.20, character: 'Historic + Trendy', oneLineDesc: 'Medieval alleys, the Picasso Museum, and an expat-heavy cafe-bar scene wrapped around the Born Cultural Centre.', bestFor: 'Short-to-medium-term expats who want historic texture over daily practicality.' },
      { name: 'Poblenou', rentRatio: 0.95, character: 'Tech + Post-Industrial', oneLineDesc: 'The 22@ innovation district: post-industrial conversions, tech offices, and Barcelona\'s most walkable beach access from a residential zone.', bestFor: 'Tech workers and founders wanting modern stock and sea-facing lifestyle.' },
      { name: 'Sants', rentRatio: 0.85, character: 'Local + Value', oneLineDesc: 'Working-class local zone around Sants station: cheaper rents, better per-euro value, and the main rail gateway to the rest of Spain.', bestFor: 'Value-focused longer-term residents and rail-connected professionals.' }
    ],
    peerCities: [
      { slug: 'valencia', rationale: 'The cheaper, calmer Mediterranean Spanish peer.' },
      { slug: 'lisbon', rationale: 'Iberian peer with similar climate; cheaper but denser tourist friction.' },
      { slug: 'madrid', rationale: 'Larger Spanish capital peer; more business-focused, less coastal.' },
      { slug: 'porto', rationale: 'Northern-Portuguese peer at a lower price point.' }
    ],
    execSummary: [
      'Barcelona in 2026 is simultaneously one of Europe\'s top nomad destinations and one of the most openly conflicted about it. The Catalan capital has a robust Digital Nomad Visa (launched 2023, minimum income ~EUR 2,650/month), excellent climate, sub-2-hour flight access to most of Europe, and a genuine tech cluster in Poblenou. Against that, anti-tourism sentiment has become a mainstream political force, short-term-rental licensing is being actively tightened through 2028, and rents in central districts rose 20-30% in USD terms since 2021.',
      'Day-to-day, the city works beautifully for professionals who settle in properly: long-term flats through Idealista, basic Spanish, and a non-Airbnb posture materially change how Barcelona treats an expat. The tourist-versus-local friction is real but is layered -- it concentrates in specific zones (Barri Gotic, around Sagrada Familia) and is effectively invisible in Gracia, Sants, or Poblenou.',
      'Verdict for 2026: STRONG BUY for DNV-qualifying remote workers willing to sign a 12-month lease and invest in Spanish; CONDITIONAL for short-stay nomads who will be treated as part of the tourist problem rather than the community.'
    ],
    cuisineNotes: 'Barcelona sits in the upper tier of European food cities: menu-del-dia lunch (EUR 12-18 for three courses + wine) is still the single best cost-controlling hack in Western Europe, while markets (La Boqueria, Sant Antoni, Ninot) deliver excellent produce at reasonable prices. Catalan cuisine is distinct from generic Spanish -- pa amb tomaquet, calcots, escudella, and the seafood-forward coast. Eating out is cheaper per meal than Amsterdam or Paris; home cooking with market produce is where the real spend advantage lives.',
    cultureNotes: 'Barcelona runs on a late Mediterranean rhythm: lunch 2-4pm, dinner 9-10pm, and August largely shuts the city as locals leave. Catalan and Spanish are both used; Catalan in civic contexts, Spanish in most service. Using basic Catalan greetings is genuinely appreciated. The city is socially warm but has a layered insider/outsider structure around Catalan identity -- local friendships develop slowly but deeply.',
    risks: [
      { vector: 'Anti-Tourism Sentiment', level: 'MODERATE', assessment: 'Graffiti, demonstrations, and local political pressure target short-term rentals and tourist-heavy behaviour. Long-term leases and local integration largely neutralise this.' },
      { vector: 'Short-Term-Rental Crackdown', level: 'HIGH', assessment: 'Barcelona is phasing out all tourist short-term rental licences by 2028. Short-stay housing options will shrink materially; lock in long-term leases.' },
      { vector: 'Petty Crime (Tourist Zones)', level: 'MODERATE', assessment: 'Pickpocketing on Las Ramblas, Metro L3, and the beach is endemic. Non-tourist zones are low-incident.' },
      { vector: 'Beketov DNV Tax Treatment', level: 'MODERATE', assessment: 'DNV holders face a flat 24% tax up to EUR 600k/year on Spanish-source income; consult a Spanish tax adviser before committing.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'RECOMMENDED', detail: 'DNV is one of the better EU remote-worker visas. Strong fibre, mature coworking (OneCoWork, Cloudworks, WeWork), and Mediterranean work rhythm.' },
      digitalNomad:  { verdict: 'CONDITIONAL', detail: 'DNV works well for 1-3 year stays. Short-stay nomads (<90 days, repeatedly) increasingly encounter frictions in housing and local sentiment.' },
      family:        { verdict: 'RECOMMENDED', detail: 'Excellent international schools (BSB, ASB, Kensington), pedestrian-friendly streets, and strong public healthcare. Housing for 3BR+ needs lead time.' },
      retiree:       { verdict: 'RECOMMENDED', detail: 'Non-Lucrative Visa (passive income ~EUR 2,400/month) works well. Climate, healthcare, and walkability are genuine retirement strengths.' },
      entrepreneur:  { verdict: 'RECOMMENDED', detail: 'Strong tech ecosystem in Poblenou/22@, EU market access, and improving startup-visa pathways. Spanish bureaucracy remains the main operational friction.' }
    },
    prosCons: {
      pros: [
        ['Digital Nomad Visa', 'Well-defined DNV path with workable income floor.'],
        ['Climate + Beach', 'Mediterranean climate plus genuine urban beach access (Barceloneta, Bogatell).'],
        ['Tech Cluster (Poblenou)', 'The 22@ district anchors a real tech economy, not just a nomad layer.'],
        ['European Connectivity', 'BCN airport plus high-speed rail to Madrid, Paris, Lyon, and beyond.'],
        ['Menu-del-Dia Economics', 'Lunch economics that make the Standard budget genuinely comfortable.']
      ],
      cons: [
        ['STR Licensing Clampdown', 'Short-term rental inventory is shrinking by regulation; plan for long-term leases.'],
        ['Tourist-Local Tension', 'Anti-tourism politics is now mainstream; long-term residency posture matters.'],
        ['DNV 24% Flat Tax', 'Simpler than general Spanish tax but not a tax-haven rate.'],
        ['Pickpocket Density', 'Tourist zones are genuinely active for petty crime.']
      ]
    }
  },

  berlin: {
    neighborhoods: [
      { name: 'Kreuzberg', rentRatio: 1.10, character: 'Counter-Culture Core', oneLineDesc: 'The historic Turkish-immigrant and punk-scene district, now the highest-profile nomad/creative cluster in the city.', bestFor: 'Creatives, founders, and remote workers who want Berlin\'s defining identity.' },
      { name: 'Prenzlauer Berg', rentRatio: 1.20, character: 'Gentrified + Family', oneLineDesc: 'Restored Altbau stock, cafe-lined Kastanienallee, and the highest stroller density in the city; the most "grown-up" Berlin postcode.', bestFor: 'Established professionals and young families.' },
      { name: 'Mitte', rentRatio: 1.30, character: 'Central + Corporate', oneLineDesc: 'The tourist-and-office centre: Brandenburg Gate, Hackescher Markt, and the highest concentration of international HQs.', bestFor: 'Corporate expats on a short leash to HQ offices.' },
      { name: 'Neukolln', rentRatio: 0.95, character: 'Rising + Diverse', oneLineDesc: 'The post-2015 gentrification story: Turkish/Arab/German mix with the densest cafe-bar build-out in the city and better value than Kreuzberg.', bestFor: 'Younger remote workers and those priced out of Kreuzberg proper.' },
      { name: 'Charlottenburg', rentRatio: 0.90, character: 'Classic West + Quieter', oneLineDesc: 'Pre-war West Berlin elegance: Ku\'damm shopping, Charlottenburg Palace, and quieter residential stock than the East.', bestFor: 'Longer-term residents and older expats seeking calmer, classic-Berlin living.' }
    ],
    peerCities: [
      { slug: 'leipzig', rationale: 'The cheaper, smaller East-German peer attracting priced-out Berliners.' },
      { slug: 'prague', rationale: 'Closest Central-European peer; cheaper, lower English, different visa regime.' },
      { slug: 'warsaw', rationale: 'Growing Polish peer with a younger tech economy.' },
      { slug: 'amsterdam', rationale: 'Northern-European peer with stronger English and tighter housing.' }
    ],
    execSummary: [
      'Berlin in 2026 is no longer the "poor-but-sexy" city of the 2010s, but it still offers something no other European capital matches: significant international creative weight at rents that remain 30-50% below Amsterdam, Paris, or London for equivalent square-meterage. The Germany Freiberufler (freelance) visa and the Chancenkarte points-based path (launched mid-2024) continue to make Berlin one of the most legitimately accessible EU cities for non-EU remote workers and founders.',
      'The trade-offs have sharpened. Rent controls (Mietpreisbremse) have distorted the market -- inventory is genuinely scarce, new-build stock is premium-priced, and finding a flat without speaking German or using a relocation agent typically takes 2-4 months. Bureaucracy has been dramatised for a reason: Anmeldung, Steuer-ID, GEZ, and health insurance set-up still consume the first 4-8 weeks for most new arrivals.',
      'Verdict for 2026: BUY for EU passport holders and Chancenkarte/Freiberufler qualifiers willing to invest in German-language basics; CONDITIONAL for short-stay nomads who will break Anmeldung/Schengen rules without realising it.'
    ],
    cuisineNotes: 'Berlin\'s food scene is diverse rather than deep: the defining spectrum runs from doner kebab (EUR 6-8), Vietnamese pho, and Turkish grills (Mercado, Mustafa\'s) through to a growing fine-dining cluster (Nobelhart & Schmutzig, CODA) that punches above the city\'s reputation. Grocery economics are genuinely excellent -- Aldi, Lidl, and Rewe make the "cook at home" profile viable in a way that Amsterdam or Paris struggle to match. Expect to spend materially less on food than in any Western European peer.',
    cultureNotes: 'Berlin is cold-socially on first contact but deeply loyal once you\'re in; it rewards directness and punishes performative warmth. Sunday is genuinely closed for most retail, work-life separation is legally and culturally protected, and late-running nightlife (clubs open until Monday morning) is a signature. German functional-language basics (Anmeldung, bank, GEZ) are non-optional; conversational German is optional but transformative for anything beyond the tech bubble.',
    risks: [
      { vector: 'Bureaucracy Shock', level: 'MODERATE', assessment: 'Anmeldung appointments routinely take 4-8 weeks; you cannot open bank accounts, sign full leases, or register with tax authorities until it\'s done. Budget time, not just money.' },
      { vector: 'Housing Inventory', level: 'HIGH', assessment: 'Rent controls have throttled supply; 80-150 applicants per apartment is normal. Plan on 2-4 months in temporary housing and a full application dossier (Schufa, Kautionsbestaetigung).' },
      { vector: 'Dark + Damp Winters', level: 'MODERATE', assessment: 'Nov-Feb daylight under 8 hours; SAD is commonly reported among new arrivals from sunnier latitudes.' },
      { vector: 'Freiberufler Tax Complexity', level: 'MODERATE', assessment: 'Freelance tax filings are non-trivial; a Steuerberater is close to mandatory for the first 1-2 years. Budget EUR 1,500-3,000/year for professional filing.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'RECOMMENDED', detail: 'Chancenkarte and Freiberufler visas are among the more accessible EU paths. Coworking is mature (Mindspace, Factory Berlin, betahaus), and the creative/tech ecosystem is genuine.' },
      digitalNomad:  { verdict: 'CONDITIONAL', detail: 'No dedicated nomad visa; Schengen 90/180 limits and Anmeldung rules create more friction than Portugal or Spain for sub-6-month stays.' },
      family:        { verdict: 'RECOMMENDED', detail: 'International schools (Berlin International, BBIS), excellent public healthcare, bike-safe-ish streets, and family-friendly public spaces. Housing for 3BR+ is the main hurdle.' },
      retiree:       { verdict: 'CONDITIONAL', detail: 'No dedicated retirement visa; EU citizens have free access, non-EU face standard residency paths. Dark winters and bureaucracy are the main stress tests for older relocators.' },
      entrepreneur:  { verdict: 'RECOMMENDED', detail: 'Deep startup ecosystem, GmbH structures are founder-familiar, and German engineering-talent pool is world-class. Regulatory and employment overhead is real.' }
    },
    prosCons: {
      pros: [
        ['Still Europe\'s Best Creative Value', 'Rent 30-50% below Amsterdam/Paris/London for equivalent space.'],
        ['Freiberufler + Chancenkarte', 'Two genuinely accessible non-EU pathways into the German labour market.'],
        ['Public Transit', 'BVG network (U-Bahn, S-Bahn, tram, bus) is dense and reliable.'],
        ['Cultural Density', '180+ museums, world-class music/club scene, and deep cinema culture.'],
        ['Grocery Economics', 'Aldi/Lidl make home cooking genuinely cheap for Western Europe.']
      ],
      cons: [
        ['Anmeldung Bottleneck', 'Residential registration queue delays everything downstream (bank, lease, tax).'],
        ['Housing Search Friction', 'Scarcity, German-language paperwork, and competitive applications.'],
        ['Bureaucratic Heaviness', 'More forms, more in-person appointments, and more analog process than any Western European peer.'],
        ['Winter Darkness', 'Genuine wellness factor for sun-dependent newcomers.']
      ]
    }
  },

  'chiang-mai': {
    neighborhoods: [
      { name: 'Nimmanhaemin (Nimman)', rentRatio: 1.25, character: 'Nomad Capital', oneLineDesc: 'The One Nimman/MAYA shopping cluster and surrounding lanes: the densest cafe-and-coworking strip in northern Thailand.', bestFor: 'Digital nomads prioritising scene density, cafe count, and walkability.' },
      { name: 'Old City (Mueang)', rentRatio: 0.95, character: 'Historic + Tourist-Adjacent', oneLineDesc: 'Inside the 700-year-old moat: temples, guesthouses, and the original tourist-and-expat zone of Chiang Mai.', bestFor: 'Short-stay nomads and cultural-immersion residents.' },
      { name: 'Santitham', rentRatio: 0.75, character: 'Local + Value', oneLineDesc: 'North of Nimman and west of the Old City: local-market feel at a meaningful rent discount vs Nimman proper.', bestFor: 'Longer-term nomads who want Nimman access without Nimman pricing.' },
      { name: 'Riverside (Wat Ket / Charoenrat)', rentRatio: 1.00, character: 'Scenic + Quieter', oneLineDesc: 'Along the Ping River east of the Old City: hotels, some boutique condos, and quieter evenings than Nimman.', bestFor: 'Couples and older remote workers prioritising quiet and river views.' },
      { name: 'Hang Dong', rentRatio: 0.70, character: 'Outer + Family', oneLineDesc: '15-20km south with newer housing estates, international schools, and better value on 2BR/3BR stock.', bestFor: 'Families and long-term relocators with a car.' }
    ],
    peerCities: [
      { slug: 'bangkok', rationale: 'Southern metropolitan peer most Chiang Mai nomads commute through.' },
      { slug: 'hanoi', rationale: 'Northern-Vietnam peer with similar climate and cheaper costs.' },
      { slug: 'bali', rationale: 'The other original SE-Asia nomad hub; beach-based alternative.' },
      { slug: 'ho-chi-minh', rationale: 'Bigger-city Vietnamese peer with better logistics, worse weather.' }
    ],
    execSummary: [
      'Chiang Mai in 2026 is the original Asian nomad hub, and while Bali has since out-scaled it and Bangkok has out-infrastructured it, Chiang Mai still offers a cost-to-quality ratio that is genuinely hard to beat globally. A modern Nimman 1BR condo runs USD 400-700/month, coworking is USD 100-180/month, and fibre pushes 200+ Mbps even in older buildings. Thailand\'s DTV visa applies here just as it does in Bangkok, making 5-year legal stays workable.',
      'The city\'s defining risk is air quality. The Mar-Apr "burning season" (agricultural crop-residue burning in surrounding provinces and Myanmar) regularly pushes AQI above 200 and often above 300 -- among the worst sustained air-quality windows anywhere in Asia. Most long-term residents now plan a 6-10 week exit over those months; the rest of the year is genuinely excellent.',
      'Verdict for 2026: STRONG BUY for cost-conscious nomads who plan a seasonal burning-season exit; CONDITIONAL for full-year residents and anyone with respiratory sensitivities.'
    ],
    cuisineNotes: 'Chiang Mai\'s northern-Thai cuisine is distinct from central Thai: khao soi, sai ua sausage, nam prik, and sticky rice dominate local menus, with a meal at a local khao soi shop costing THB 50-80 (USD 1.50-2.50). Western cafe culture around Nimman adds a second layer (brunch plates at THB 250-400), creating the same street-food-plus-cafe economy as Bangkok at roughly 30% lower prices. Groceries are cheap; home cooking is rare among nomads.',
    cultureNotes: 'Chiang Mai runs at a distinctly slower pace than Bangkok -- earlier nights, quieter Sundays, and a much stronger temple-and-Lanna-culture presence in daily life. The city is small enough that the nomad community is genuinely recognisable; after 2-3 months, faces repeat at the same three coworking spaces. Respect for temples, monks, and the local hierarchy matters; shorts-in-temple rules are enforced.',
    risks: [
      { vector: 'Burning Season PM2.5', level: 'HIGH', assessment: 'Feb-Apr air quality routinely exceeds AQI 200 and often 300+. N95 masks and whole-home HEPA filtration are standard among long-termers; many plan seasonal exits.' },
      { vector: 'Limited Specialist Healthcare', level: 'MODERATE', assessment: 'General private healthcare (Bangkok Hospital Chiang Mai, Chiang Mai Ram) is excellent; serious/specialist cases often route to Bangkok.' },
      { vector: 'Scooter Accident Risk', level: 'MODERATE', assessment: 'Scooter is default transport; accident rate is lower than Bali but still material. Helmet + insurance discipline matters.' },
      { vector: 'Seasonal Flooding', level: 'LOW', assessment: 'Peak monsoon (Sep-Oct) occasionally floods riverside and low-lying districts; historically manageable.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'RECOMMENDED', detail: 'Best cost-to-infrastructure ratio in Asia outside Vietnam. DTV visa, 200 Mbps fibre, and a dense nomad community that rotates regularly.' },
      digitalNomad:  { verdict: 'RECOMMENDED', detail: 'The original Asian nomad hub. DTV makes 5-year stays workable; Nimman remains the default landing zone with the shortest path to community.' },
      family:        { verdict: 'CONDITIONAL', detail: 'International schools (Prem Tinsulanonda, Lanna International) are excellent at mid-tier fees. Burning season is the main family-specific concern.' },
      retiree:       { verdict: 'RECOMMENDED', detail: 'Retirement Visa (O-A) works cleanly. Chiang Mai has a long-established retiree expat community and lower cost base than Bangkok.' },
      entrepreneur:  { verdict: 'CONDITIONAL', detail: 'Great for content creators and solo founders; weaker for businesses needing local hiring or complex Thai company structures.' }
    },
    prosCons: {
      pros: [
        ['Cost-to-Quality Ratio', 'USD 400-700 central 1BRs with 200 Mbps fibre -- globally competitive.'],
        ['DTV Visa Eligibility', 'The 5-year DTV applies here identically to Bangkok.'],
        ['Nomad Community Maturity', 'Original SE-Asia nomad hub; the community logistics are well-worn.'],
        ['Temple + Nature Access', 'Doi Suthep, surrounding mountains, and temple culture all within 30 minutes.'],
        ['Slower Pace vs Bangkok', 'Genuine quality-of-life advantage for longer stays.']
      ],
      cons: [
        ['Burning Season', 'Feb-Apr PM2.5 is a genuine health hazard, not a nuisance.'],
        ['Limited Specialist Healthcare', 'Complex cases route to Bangkok.'],
        ['Airport Connectivity', 'Mostly regional; international usually via Bangkok.'],
        ['Community Turnover', 'High rotation means personal relationships recycle every 3-6 months.']
      ]
    }
  },

  medellin: {
    neighborhoods: [
      { name: 'El Poblado', rentRatio: 1.30, character: 'Expat Core', oneLineDesc: 'Parque Lleras and the surrounding hills: the default first-stop expat zone, dense with cafes, coworking, and nightlife.', bestFor: 'Newer expats, digital nomads, and single remote workers.' },
      { name: 'Laureles', rentRatio: 1.05, character: 'Local + Walkable', oneLineDesc: 'Flatter, grid-planned, and more paisa-local than Poblado; rapidly becoming the preferred longer-term expat zone.', bestFor: 'Longer-stay remote workers and couples prioritising calm and Spanish immersion.' },
      { name: 'Envigado', rentRatio: 0.85, character: 'Suburban + Quieter', oneLineDesc: 'Technically a separate municipality south of Medellin: safer, quieter, and genuinely local in a way Poblado no longer is.', bestFor: 'Families and long-term residents.' },
      { name: 'Sabaneta', rentRatio: 0.75, character: 'Outer + Value', oneLineDesc: 'Further south again, connected by Metro: cheaper, even more local, and popular with Colombian middle-class families.', bestFor: 'Value-focused long-term residents with metro-based commuting.' },
      { name: 'Belen', rentRatio: 0.80, character: 'Working-Class + Rising', oneLineDesc: 'West-of-centre working-class district seeing newer investment; better value than Laureles and close to the Metro system.', bestFor: 'Budget-conscious residents willing to trade scene density for price.' }
    ],
    peerCities: [
      { slug: 'mexico-city', rationale: 'LATAM peer with bigger scale and more US-corporate presence.' },
      { slug: 'lima', rationale: 'Andean Pacific peer; cheaper, less-developed nomad scene.' },
      { slug: 'bogota', rationale: 'Colombian capital peer; higher altitude, more business-focused.' },
      { slug: 'buenos-aires', rationale: 'Southern-Cone peer with peso volatility and stronger European feel.' }
    ],
    execSummary: [
      'Medellin in 2026 is the most dramatic success story in Latin America: from 1990s cartel capital to one of the densest nomad hubs in the Western Hemisphere, with a perpetual-spring climate at 1,500m elevation that most peer cities would pay dearly for. Colombia\'s Digital Nomad Visa (launched 2023) plus the existing Migrante (M) visa pathway make 2+ year stays legally straightforward.',
      'The post-2020 surge reshaped El Poblado: rents there are up 60-120% in dollar terms since 2019, and local-expat tensions are now a visible political issue. The city has responded, not uniformly well -- anti-prostitution enforcement has sharpened, and several high-profile safety incidents in 2023-24 around extortion and date-rape targeting foreign men are a genuine issue, not a myth.',
      'Verdict for 2026: BUY for Spanish-speaking or Spanish-learning nomads who choose Laureles or Envigado over Poblado and maintain basic situational awareness; CONDITIONAL for short-stay English-only nomads concentrated in Poblado tourist zones.'
    ],
    cuisineNotes: 'Medellin\'s food scene is improving rapidly but still sits below CDMX or Lima in depth: paisa cuisine (bandeja paisa, arepas, sancocho) dominates local eating, and market-fresh produce at Plaza Minorista or Mercado del Rio is excellent. The cafe-and-brunch circuit in Poblado pushes prices toward US levels (COP 40-60k, USD 10-15 per plate), while a Laureles lunch menu-del-dia remains COP 15-25k (USD 4-6). Coffee is obviously excellent and cheap.',
    cultureNotes: 'Paisa culture is warm, proud, and family-centred: Sunday is genuinely for family, and social integration happens through invitation more than circulation. Spanish is essential outside Poblado tourist bubbles; paisa Spanish is its own accent and idiom. The city is gossipier and more appearance-conscious than most LATAM peers; trust networks matter more than in Bogota or Lima.',
    risks: [
      { vector: 'Targeted Petty/Violent Crime', level: 'MODERATE', assessment: 'Drugging-and-robbery incidents (targeting foreign men via dating apps) are a documented issue. Situational awareness, Uber over street taxis, and no open drinks with new acquaintances.' },
      { vector: 'Altitude + Weather', level: 'LOW', assessment: '1,500m elevation is mild for most; afternoon rain is routine year-round. Less of a factor than Bogota\'s 2,640m.' },
      { vector: 'Spanish-Only Services', level: 'MODERATE', assessment: 'Outside Poblado, English service is thin. Spanish basics are not optional for real integration.' },
      { vector: 'Political / Security Volatility', level: 'LOW', assessment: 'Colombia\'s broader political cycle has occasional ripple effects; Medellin is generally stable but not entirely insulated.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'RECOMMENDED', detail: 'DNV + US-compatible time zones + perpetual-spring climate make Medellin one of the best remote-work climates in the Americas.' },
      digitalNomad:  { verdict: 'RECOMMENDED', detail: 'Deep nomad community, strong fibre, multiple coworking options (Selina, Atom House, WeWork). Poblado has the scene; Laureles has the longevity.' },
      family:        { verdict: 'CONDITIONAL', detail: 'Excellent bilingual schools (TCS, The Columbus School, Montessori variants). Envigado and Laureles suit families better than Poblado.' },
      retiree:       { verdict: 'RECOMMENDED', detail: 'Migrante Pensionado visa works with modest pension proof. Healthcare is strong and cheap; climate is ideal for older residents.' },
      entrepreneur:  { verdict: 'CONDITIONAL', detail: 'Growing tech ecosystem (Ruta N), low operating costs, US time-zone advantage. Banking and hiring complexity is the main friction.' }
    },
    prosCons: {
      pros: [
        ['Perpetual-Spring Climate', '18-24C year-round at 1,500m -- the "City of Eternal Spring" is not marketing.'],
        ['Digital Nomad Visa', 'Colombia DNV is straightforward and affordable.'],
        ['US Time-Zone Overlap', 'CT overlap makes it a genuine US-employer relocation.'],
        ['Cost of Living (outside Poblado)', 'Laureles/Envigado remain strong value vs any US city.'],
        ['Nomad Community Density', 'Deepest nomad scene in LATAM outside CDMX.']
      ],
      cons: [
        ['Targeted-Crime Pattern', 'Drugging-robbery incidents are a documented and ongoing issue for expat men.'],
        ['Poblado Cost Inflation', 'The default expat zone has priced up sharply; moving to Laureles is increasingly the move.'],
        ['Spanish-Only Outside Bubble', 'English service tapers hard outside Poblado.'],
        ['Local-Expat Tension', 'Post-2020 gentrification has created visible resentment in some zones.']
      ]
    }
  },

  paris: {
    neighborhoods: [
      { name: 'Le Marais (3e / 4e)', rentRatio: 1.35, character: 'Historic Premium', oneLineDesc: 'Medieval streets, boutique retail, and the densest cafe-and-gallery scene in central Paris.', bestFor: 'High-income expats prioritising the historic-Paris lifestyle.' },
      { name: 'Saint-Germain-des-Pres (6e)', rentRatio: 1.45, character: 'Left-Bank Premium', oneLineDesc: 'Cafes (Flore, Deux Magots), publishers, galleries, and the Jardin du Luxembourg. Among the most expensive postcodes in Europe.', bestFor: 'Senior professionals, diplomats, and long-stay premium expats.' },
      { name: 'Montmartre (18e)', rentRatio: 1.00, character: 'Bohemian + Uneven', oneLineDesc: 'Sacre-Coeur and the artist quarter above; Pigalle\'s grittier strip below. Character-heavy, transport-uneven.', bestFor: 'Creatives and those who will use the character, not just look at it.' },
      { name: 'Canal Saint-Martin (10e)', rentRatio: 1.05, character: 'Creative + Young', oneLineDesc: 'The canalside young-professional zone: independent cafes, natural wine, and a tighter cost base than Marais.', bestFor: 'Single remote workers and couples in their late 20s-30s.' },
      { name: 'Belleville (20e)', rentRatio: 0.80, character: 'Diverse + Rising', oneLineDesc: 'Multi-ethnic northeast: Chinese, Tunisian, and African communities with the best per-euro housing value in Paris-proper.', bestFor: 'Value-focused residents open to a diverse, less-polished Paris.' }
    ],
    peerCities: [
      { slug: 'london', rationale: 'Larger English-speaking peer; higher cost base, weaker dining economics.' },
      { slug: 'amsterdam', rationale: 'Smaller Northern-European peer with better English and tighter housing.' },
      { slug: 'rome', rationale: 'Latin peer with richer heritage and less infrastructure polish.' },
      { slug: 'madrid', rationale: 'Southern-European peer with better climate and lower cost base.' }
    ],
    execSummary: [
      'Paris in 2026 is one of the most demanding cities in the world to relocate to, and one of the most rewarding if you survive the first twelve months. Rents are genuinely high, bureaucracy is legendarily dense, and the French labour-market and tax regime continue to favour long-term residents over short-stay nomads. Against that, there is almost no peer city in the world that delivers this combination of cultural density, transport infrastructure, and daily aesthetic quality.',
      'The French Talent Passport (Passeport Talent) and the Visiteur visa remain the two main non-EU paths, plus for remote workers specifically, France does not yet have a dedicated "digital nomad" visa. Housing in Paris-proper is brutal for newcomers: 30-50+ dossier applications per flat, strong French-language paperwork requirements, and the return of real inflation in energy costs since 2022.',
      'Verdict for 2026: BUY for salaried expats on Talent Passport or employer-sponsored routes with French-language commitment; CAUTION for independent nomads expecting Lisbon-level friction at a Lisbon-level price.'
    ],
    cuisineNotes: 'Paris\'s food story is that it is genuinely one of the great food cities on daily rhythm, not just on peak: a good-neighbourhood boulangerie, an 18-euro lunch menu (formule), and Rungis-fresh produce at market are structural, not luxurious. Home cooking with market produce is the actual cost-saving lever here; eating dinner out 4-5 times a week is what blows the Paris budget. Wine economics are exceptional; the middle of the restaurant market is where Paris outperforms most global peers.',
    cultureNotes: 'Paris runs on politesse and privacy: bonjour-madame is a functional requirement, not a nicety, and social integration is slower and more layered than in most international cities. August genuinely empties; July weekends clear out. Work-life boundaries are strong (RTT, August, 35-hour rhythm), which is a quality-of-life asset but a business-integration friction for Anglo expats.',
    risks: [
      { vector: 'Housing Search + Garant Requirement', level: 'HIGH', assessment: 'Most landlords require a French-resident guarantor or Garantme/Visale insurance plus 3x-rent income; first-month flat hunts often fail without a relocation agent.' },
      { vector: 'Administrative Density', level: 'HIGH', assessment: 'Prefecture appointments, CAF, Securite Sociale, and Ameli set-up routinely consume 3-6 months. French-language forms are standard.' },
      { vector: 'High Tax Burden', level: 'MODERATE', assessment: 'Top marginal income tax plus social contributions push effective rates above 50% at many brackets; Talent Passport holders get some simplification, not a tax break.' },
      { vector: 'Strikes + Service Disruption', level: 'LOW', assessment: 'National strike cycles affect rail, metro, and occasionally air travel. Rarely disruptive to daily life, but factor into travel planning.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'CONDITIONAL', detail: 'Excellent infrastructure and culture; weak visa options for independent remote workers (no DNV). Salaried Talent Passport holders fare best.' },
      digitalNomad:  { verdict: 'CONDITIONAL', detail: 'No dedicated nomad visa; Schengen 90/180 + local short-let restrictions (especially intra-Paris) make sub-6-month stays harder than most EU peers.' },
      family:        { verdict: 'RECOMMENDED', detail: 'World-class international schools (ASP, ISP, EIB, Ecole Jeannine Manuel), excellent public healthcare, and rich public space. Housing for 3BR+ is the choke point.' },
      retiree:       { verdict: 'CONDITIONAL', detail: 'Visiteur visa works with adequate income proof; healthcare access requires careful routing. Cost of living is the main constraint for fixed-income retirees.' },
      entrepreneur:  { verdict: 'RECOMMENDED', detail: 'Talent Passport Entrepreneur route is well-defined. Strong capital access, growing tech ecosystem (Station F), and EU market anchor. Social charge burden is the main overhead.' }
    },
    prosCons: {
      pros: [
        ['Cultural Depth', 'Museums, theatre, music, literature -- Paris is effectively uncontested on cultural density.'],
        ['Transit Excellence', 'Metro + RER + Grand Paris Express expansion -- world-class and expanding.'],
        ['Middle-Market Dining', 'Lunch formules, boulangeries, and bistros make everyday eating exceptional value.'],
        ['Talent Passport Route', 'A well-defined non-EU skilled-worker/entrepreneur pathway.'],
        ['Global Connectivity', 'CDG + Gare du Nord/Lyon give full European + global reach.']
      ],
      cons: [
        ['Housing Market Punishing', 'Garant/dossier/language barriers are real and stack.'],
        ['Bureaucracy Density', 'Prefecture, Securite Sociale, CAF -- each takes weeks to months.'],
        ['High Effective Tax', 'Combined income-plus-social rates at 50%+ for many brackets.'],
        ['Winter Greyness', 'Nov-Feb light is genuinely poor; SAD affects a meaningful fraction of new arrivals.']
      ]
    }
  },

  prague: {
    neighborhoods: [
      { name: 'Vinohrady', rentRatio: 1.20, character: 'Expat Core', oneLineDesc: 'Elegant late-19th-century apartment blocks, tree-lined streets, and the densest expat/remote-worker concentration in Prague.', bestFor: 'Remote workers and couples who want central access with residential calm.' },
      { name: 'Zizkov', rentRatio: 0.95, character: 'Bohemian + Bars', oneLineDesc: 'The neighbourhood with more bars per capita than almost anywhere in Europe; grittier, cheaper, and markedly younger than Vinohrady.', bestFor: 'Younger remote workers and those prioritising nightlife and rent value.' },
      { name: 'Mala Strana', rentRatio: 1.35, character: 'Historic + Premium', oneLineDesc: 'Below Prague Castle: cobbled streets, baroque churches, and some of the most photographed blocks in Central Europe.', bestFor: 'Short-to-medium-term premium residents and corporate expats.' },
      { name: 'Holesovice (Prague 7)', rentRatio: 0.95, character: 'Creative + Rising', oneLineDesc: 'Former industrial district now hosting DOX contemporary art and a visible rise in cafes, coworking, and boutique retail.', bestFor: 'Creatives and founders wanting newer stock at a discount to Vinohrady.' },
      { name: 'Karlin', rentRatio: 1.10, character: 'Tech + Modern', oneLineDesc: 'Flood-rebuilt since 2002; now the tech-startup cluster of Prague with modern office stock, riverside paths, and strong metro connectivity.', bestFor: 'Tech workers, founders, and Modern-building-preferring expats.' }
    ],
    peerCities: [
      { slug: 'budapest', rationale: 'Hungarian peer: cheaper, less polished, more complex visa regime.' },
      { slug: 'warsaw', rationale: 'Polish peer with stronger tech economy and comparable cost base.' },
      { slug: 'vienna', rationale: 'Richer Austrian neighbour with higher costs and stronger social infrastructure.' },
      { slug: 'berlin', rationale: 'Northern peer with stronger English, higher rents.' }
    ],
    execSummary: [
      'Prague in 2026 sits in a strategic sweet spot: EU and Schengen membership, a Zivnostensky List (trade licence) route that remains one of the cheapest EU self-employment pathways, rents and daily costs 30-50% below comparable Western European capitals, and an architecturally intact historic core that makes the city genuinely pleasant to live in rather than tourist-through. The Czech tech economy (especially around Karlin) has matured into a real engineering hub with JetBrains, Avast legacy talent, and a deep R&D layer.',
      'The constraints are softer than in peer capitals. English proficiency is good among under-35 professionals but drops sharply in older service workers; Czech administrative paperwork defaults to Czech-only; and housing, while cheaper than Western Europe, has tightened materially in Vinohrady and Karlin since 2021. Over-tourism in the historic core (Mala Strana, Old Town) is a growing local grievance but less intrusive than in Barcelona or Lisbon.',
      'Verdict for 2026: STRONG BUY for self-employed EU-route seekers (Zivno) and mid-career remote workers willing to navigate Czech bureaucracy; CONDITIONAL for families who need international schooling in a smaller pool of options.'
    ],
    cuisineNotes: 'Prague\'s food scene has improved enormously since the 2010s: traditional Czech (svickova, guláš, vepro-knedlo-zelo) still defines most locals\' menus, while a genuine third-wave coffee scene, Vietnamese-Czech pho, and a sharpening fine-dining cluster (Field, La Degustation) have layered onto the city. Beer economics are legendary -- quality pilsner is cheaper than bottled water in most pubs, averaging CZK 45-65 (EUR 1.80-2.60). Grocery costs are markedly lower than Germany or Austria.',
    cultureNotes: 'Prague runs on reserved-on-surface, warm-once-inside Central European rhythm: Sundays largely close, social circles form at work and continue at the pub, and Czech humour is famously dry. Czech basics (dobry den, dekuji, prosim) shift service-tier treatment noticeably. The city is safe, walkable, and highly transit-accessible; winter is genuinely cold (Dec-Feb averaging -2 to 2C) but short.',
    risks: [
      { vector: 'Czech-Only Administration', level: 'MODERATE', assessment: 'Tax, immigration, and most official paperwork defaults to Czech. Budget for translator support or a relocation specialist for the first 6-12 months.' },
      { vector: 'Winter Climate', level: 'MODERATE', assessment: 'Dec-Feb is cold and often grey; air quality sometimes elevates during inversion-heating days. Not extreme, but a real factor for new arrivals.' },
      { vector: 'Housing Tightening', level: 'MODERATE', assessment: 'Vinohrady and Karlin rents have risen materially since 2021; expect 2-6 weeks active search for a quality long-term flat.' },
      { vector: 'Over-Tourism in Centre', level: 'LOW', assessment: 'Mala Strana and Old Town are tourist-saturated; residential quality of life is unaffected outside those zones.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'RECOMMENDED', detail: 'Excellent cost-to-infrastructure ratio inside the EU. Zivno route offers a self-employment entry that few EU peers match.' },
      digitalNomad:  { verdict: 'CONDITIONAL', detail: 'No dedicated DNV; Zivno is the real path for longer stays, but requires genuine self-employment substance. Short-stay nomads run into Schengen 90/180 limits.' },
      family:        { verdict: 'CONDITIONAL', detail: 'International schools (ISP, Riverside, Park Lane) are solid but fewer than Berlin or Vienna. Public-school Czech-language immersion is viable for under-10 children.' },
      retiree:       { verdict: 'CONDITIONAL', detail: 'No dedicated retirement visa; long-stay residence via income proof is workable. Healthcare is strong and affordable, climate is the main filter.' },
      entrepreneur:  { verdict: 'RECOMMENDED', detail: 'Zivnostensky List and s.r.o. structures are founder-friendly; low operating costs and a real engineering talent base. Czech bureaucracy is the main overhead.' }
    },
    prosCons: {
      pros: [
        ['EU + Schengen Access', 'Full Schengen mobility plus EU market access at Central-European prices.'],
        ['Zivnostensky Route', 'Cheap and well-understood self-employment entry for non-EU citizens.'],
        ['Engineering Talent + Tech Cluster', 'Real R&D and startup ecosystem in Karlin/Holesovice.'],
        ['Daily Costs', 'Rent, groceries, and dining 30-50% below Western European capitals.'],
        ['Architectural Quality', 'Historic core intact; daily walks are materially pleasant.']
      ],
      cons: [
        ['Czech-Only Paperwork', 'Administrative Czech is the single biggest integration friction.'],
        ['Cold + Grey Winters', 'Dec-Feb is a real wellness factor for sun-dependent newcomers.'],
        ['Smaller International-School Pool', 'Fewer options than Vienna, Berlin, or Warsaw for families.'],
        ['Tourist Saturation in Centre', 'Historic zones are tourist-dense; residential zones are fine.']
      ]
    }
  },

  tokyo: {
    neighborhoods: [
      { name: 'Shibuya', rentRatio: 1.30, character: 'Central + Energetic', oneLineDesc: 'The Hachiko-crossing heart of youth-and-tech Tokyo: shopping, startups, and the densest service build-out in the city.', bestFor: 'Single remote workers and tech professionals wanting the "Tokyo postcard" life.' },
      { name: 'Shinjuku', rentRatio: 1.25, character: 'Mega-Hub + Mixed', oneLineDesc: 'Tokyo\'s largest station, the government district, and an enormous nightlife zone in Kabukicho all layered into one ward.', bestFor: 'Corporate expats and those who value maximum transit connectivity.' },
      { name: 'Nakameguro', rentRatio: 1.35, character: 'Trendy + Residential', oneLineDesc: 'Meguro River cherry-blossom corridor, boutique retail, and the rare central-Tokyo "neighbourhood feel" at premium pricing.', bestFor: 'Longer-term expats and creatives prioritising residential-quality living.' },
      { name: 'Roppongi', rentRatio: 1.45, character: 'International + Premium', oneLineDesc: 'Roppongi Hills, Midtown, and the highest concentration of international residents, restaurants, and foreign-language services in Tokyo.', bestFor: 'Corporate expats, embassy staff, and premium English-first residents.' },
      { name: 'Kichijoji', rentRatio: 0.85, character: 'Residential + Value', oneLineDesc: 'West of central Tokyo: Inokashira Park, Ghibli Museum, and the consistent "best place to live in Tokyo" poll winner among locals.', bestFor: 'Families, longer-term residents, and value-oriented remote workers willing to take the Chuo/Inokashira line.' }
    ],
    peerCities: [
      { slug: 'seoul', rationale: 'Closest East-Asian peer; cheaper, higher-spec infrastructure in places.' },
      { slug: 'singapore', rationale: 'Regional financial-hub peer with stronger English and lower tax.' },
      { slug: 'london', rationale: 'Peer global city; comparable cost base, weaker safety and transit.' },
      { slug: 'new-york', rationale: 'Global peer with higher rents and a very different density rhythm.' }
    ],
    execSummary: [
      'Tokyo in 2026 is the highest-infrastructure, lowest-friction mega-city in the world to live in, and simultaneously one of the harder ones to legally remote-work from long-term. Daily life is exceptional: world-class public transit, negligible street crime, 1000+ Mbps fibre as standard, and an urban density that still feels orderly. The yen\'s post-2022 weakness has made Tokyo measurably cheaper in USD/EUR terms than it was for most of the 2010s.',
      'The constraints are specific. Japan\'s new Digital Nomad Visa (launched Mar-2024) is short at 6 months and carries a JPY 10 million (~USD 65k) income floor, effectively blocking most independent nomads. Language is a genuine gate: English service layers exist in Roppongi, Hiroo, and parts of Shibuya, but most banking, leasing, and medical interactions default to Japanese. The housing search often still gatekeeps on "foreigner accepted" listings and guarantor companies.',
      'Verdict for 2026: BUY for salaried expats on employer-sponsored work visas and higher-income Digital Nomad Visa qualifiers; CONDITIONAL for independent remote workers planning stays past 6 months without clear visa substance.'
    ],
    cuisineNotes: 'Tokyo is arguably the single greatest food city on Earth by depth and consistency: a JPY 900 (USD 6) ramen from a 20-seat specialist can be the best bowl you\'ve ever eaten, while the fine-dining top end (Narisawa, Den, Florilege) is world-leading. Conbini (7-Eleven, Lawson, FamilyMart) genuinely solve breakfast and lunch at EUR 4-6. The net effect: mid-range dining in Tokyo is meaningfully cheaper in 2026-weak-yen terms than any Western global city at equivalent quality.',
    cultureNotes: 'Tokyo runs on a quiet-efficiency social contract: silence on trains, precise politeness in transactions, and a high bar for insider integration. Work culture remains long-hours-first in many traditional Japanese companies; the international/tech layer is more Anglo-familiar. Japanese-language investment is high-leverage for quality of life; English-only living is possible in specific zones (Roppongi, Hiroo) but thin elsewhere.',
    risks: [
      { vector: 'Earthquake + Seismic', level: 'HIGH', assessment: 'Tokyo is on multiple seismic faults; a major earthquake is a real statistical event. Building codes are world-class but factor seismic readiness into housing choice.' },
      { vector: 'Language Barrier (Non-Tourist)', level: 'HIGH', assessment: 'Banking, leasing, healthcare, and most official paperwork default to Japanese. English layers exist in specific zones but are narrow.' },
      { vector: 'Housing Access for Foreigners', level: 'MODERATE', assessment: 'Many landlords still avoid foreign tenants; guarantor companies (Nihon SafetyDF, Epos) and "gaijin-friendly" listings are the workaround.' },
      { vector: 'Typhoon Season (Aug-Oct)', level: 'LOW', assessment: 'Periodic typhoons disrupt transit and flights; city infrastructure absorbs them well but planning around the window matters.' }
    ],
    whoShouldMove: {
      remoteWorker:  { verdict: 'CONDITIONAL', detail: 'Infrastructure is world-class; visa options are narrow. Salaried employer-sponsored is the cleanest path; DNV works for high earners on short stays.' },
      digitalNomad:  { verdict: 'CONDITIONAL', detail: 'DNV is 6-month, single-use, and requires JPY 10M+ annual income. Not suited to budget nomads; suits high-earning short-stay remote workers.' },
      family:        { verdict: 'RECOMMENDED', detail: 'Safest major city in the world, excellent international schools (ASIJ, Nishimachi, St. Mary\'s), and strong public healthcare. Language is the main integration project.' },
      retiree:       { verdict: 'CONDITIONAL', detail: 'No dedicated retirement visa; long-stay paths exist but require employment, spouse, or business nexus. Healthcare is excellent; cost base has improved with weak yen.' },
      entrepreneur:  { verdict: 'CONDITIONAL', detail: 'Business Manager Visa is viable but paperwork-heavy (JPY 5M capital minimum, office lease). Founder-friendly relative to 10 years ago; still bureaucratic.' }
    },
    prosCons: {
      pros: [
        ['Transit + Safety', 'World-best public transit; effectively no street crime.'],
        ['Food Depth + Value', 'Globally unmatched mid-range dining, amplified by weak yen.'],
        ['Infrastructure Quality', 'Fibre, healthcare, services all tier-1 without exception.'],
        ['Weak-Yen USD Leverage', 'Tokyo is measurably cheaper in USD/EUR terms than 2019.'],
        ['Cultural Depth', 'Food, design, craft, music -- Tokyo is inexhaustible.']
      ],
      cons: [
        ['Language-Gated Daily Life', 'Japanese is effectively required beyond specific expat zones.'],
        ['Housing Friction for Foreigners', 'Guarantor company and "foreigner-friendly" filter still shape the search.'],
        ['DNV Income Floor', 'JPY 10M annual income requirement excludes most nomads.'],
        ['Seismic Baseline Risk', 'Real long-run earthquake exposure; buildings are excellent, but the event risk is non-zero.']
      ]
    }
  }
};
