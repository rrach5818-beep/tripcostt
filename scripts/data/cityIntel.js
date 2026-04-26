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
      { vector: 'Air Quality (PM2.5)', level: 'HIGH', assessment: 'Bangkok routinely hits AQI 150-250 during Jan-Mar burning season. Budget USD 30-60/month for air purifiers per room; sensitive individuals should plan seasonal exits to Chiang Rai, Koh Samui, or out of country.' },
      { vector: 'Political / Regulatory', level: 'MODERATE', assessment: 'Thailand has a history of political cycles that occasionally affect visa rules, banking access, and property ownership pathways for foreigners. DTV holders should keep a secondary plan.' },
      { vector: 'Flooding (seasonal)', level: 'MODERATE', assessment: 'Low-lying districts (Sukhumvit sois 31-71, On Nut, Bang Na) flood during peak monsoon (Sep-Oct). Favour higher ground or upper-floor condos; check building history before signing.' },
      { vector: 'Currency (THB weakness)', level: 'LOW', assessment: 'THB has softened vs USD since 2022, which favours incoming expats but erodes baht-denominated salaries for locally employed professionals.' },
      { vector: 'Scams (Farang Pricing)', level: 'MODERATE', assessment: 'Tuk-tuks, street vendors, and airport taxis frequently quote 2-5x inflated prices. Use Grab, Bolt, or MRT/BTS; refuse any "meter broken" claim. Tourist-zone bar scams (gem shops, jet-ski damage) remain active.' },
      { vector: 'Dengue / Tropical Health', level: 'LOW', assessment: 'Dengue cases rise during monsoon. Window screens, DEET, and standing-water awareness mitigate risk. Rabies vaccination advisable if near stray dogs/monkeys.' }
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
        ['DTV Visa (5-year)', 'Thailand\'s Destination Thailand Visa is the most generous remote-worker visa in Asia as of 2026, with multi-entry status and a THB 500k proof-of-funds bar.'],
        ['Street-Food Economics', 'Eating out three meals a day can cost less than cooking at home in most Western cities -- 50-80 THB buys a full pad kaprao with rice and egg.'],
        ['Private Healthcare', 'Bumrungrad and Samitivej are JCI-accredited with costs 40-60% below US rates; expat health insurance runs USD 80-200/month.'],
        ['Airport Connectivity', 'Suvarnabhumi offers 90+ direct international destinations -- the best hub in mainland SE Asia for multi-city lifestyles.'],
        ['Coworking Density', 'The Hive, Justco, WeWork, Spaces, and Beacon Place operate 40+ sites citywide; hot desks run USD 150-280/month, dedicated USD 280-450.'],
        ['Condo Inventory Depth', 'Hundreds of newly-built BTS-adjacent condos turn over monthly; negotiation power on 12-month leases is real, especially in non-peak seasons.'],
        ['Mature Expat Infrastructure', 'English-language banking (SCB Easy, Kasikorn, Bangkok Bank FX accounts), international schools, and established legal/immigration consultancies remove most friction.'],
        ['Weekend Escape Optionality', 'Koh Samui, Koh Chang, Hua Hin, Chiang Mai, and Hanoi are all 1-1.5h flights; Bangkok is a base, not a cage.']
      ],
      cons: [
        ['PM2.5 Burning Season', 'Jan-Mar air quality regularly hits AQI 150-250; asthmatics, children, and pregnant women face meaningful health exposure without purifiers.'],
        ['Traffic Gridlock', 'Surface traffic is punishing; life effectively revolves around BTS/MRT proximity and a 500m walk to a station becomes a housing criterion.'],
        ['Ownership Restrictions', 'Foreigners cannot own land; condo ownership is capped at 49% per building and requires proof of offshore FX transfer.'],
        ['Farang Pricing', 'Dual-price tag culture persists in tourist zones, temple entries, and some service sectors; fluent basic Thai is the main counter.'],
        ['Banking Friction', 'Opening a local Thai bank account as a non-resident is inconsistent; some branches accept DTV holders, others require work permits. Plan on 2-3 branch visits.'],
        ['Noise / Street Dogs', 'Soi-level noise (mopeds, construction, karaoke) is persistent; ground- and second-floor units are meaningfully louder than high-floor condos.'],
        ['Heat Index (Apr-May)', 'Hot season peaks at 38-42C with humidity; without a full-building AC plan, the apartment becomes unworkable for daytime focus.'],
        ['Regulatory Noise', 'Occasional crackdowns on cannabis, alcohol hours, beach access, and foreign-run businesses introduce short-term disruptions expats must learn to absorb.']
      ]
    },
    verdictParagraphs: {
      nomads: 'For the self-employed remote worker earning in USD/EUR/SGD, Bangkok in 2026 is a near-unbeatable combination: DTV visa runway of up to 5 years, a 1BR Sukhumvit condo under USD 850/month, 300 Mbps fibre for under USD 25, and a coworking ecosystem with 40+ options. The total standard-profile cost base lands between USD 1,800 and USD 2,800 all-in -- a fraction of any US, UK, or Western European tier-1 city. The main friction is PM2.5: plan a 6-week exit window in Feb-Mar and the math works.',
      families: 'Families get a more nuanced answer. International schooling at NIST, Bangkok Patana, or Shrewsbury is world-class but expensive (USD 20-35k/year per child), and air quality is non-negotiable for kids with respiratory sensitivity. Phrom Phong and outer Sukhumvit offer the best combination of schools, parks, and medical proximity. Nanny and domestic-help economics are exceptional (USD 400-600/month full-time), which reshapes what "standard" looks like for dual-income families.',
      founders: 'Entrepreneurs face the 51% Thai-ownership rule on most entity structures, which pushes serious founders toward BOI promotion schemes, holding-company arrangements, or offshore (Singapore, Delaware) incorporation with Thai operations. For product-led SaaS or content businesses this is manageable; for regulated or capital-intensive plays, the friction compounds. The upside: world-class talent at SEA-median prices and genuine regional reach into Vietnam, Indonesia, and the Philippines.'
    },
    closingStatement: 'Bangkok in 2026 is the highest-leverage Southeast Asian base for a USD-earning remote professional: the cost-to-quality ratio rewards those who optimise around BTS access, treat PM2.5 as a seasonal constraint rather than a blocker, and invest the first 30 days in banking, SIM, and coworking membership setup. STRONG BUY for DTV-eligible nomads; CONDITIONAL BUY for families and THB-salaried workers.',
    qolScores: {
      climate:     { score: 6.5, note: 'Tropical; hot season (Apr-May) is punishing, rainy season (Jun-Oct) manageable, cool season (Nov-Feb) excellent.' },
      walkability: { score: 5.0, note: 'BTS/MRT corridors are walkable; most of the city requires motorbike, Grab, or taxi between clusters.' },
      healthcare:  { score: 9.0, note: 'World-class private (Bumrungrad, Samitivej, Bangkok Hospital) at 40-60% below US pricing; public system strained for non-residents.' },
      safety:      { score: 7.5, note: 'Low violent-crime rates; petty scams in tourist zones; road safety (moped density) is the real risk metric.' },
      culture:     { score: 9.0, note: 'Deep temple / arts / food culture; night markets, Chatuchak, and a cinema + music scene that rivals Singapore at a third of the price.' },
      air_quality: { score: 4.0, note: 'Jan-Mar burning season pulls AQI into 150-250 range; rest of year is breathable. Purifiers non-optional for sensitive residents.' },
      green_space: { score: 6.0, note: 'Lumpini, Benjakitti, and Benjasiri parks offer genuine green relief; overall tree canopy is limited outside those clusters.' }
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
      { vector: 'Tax Residency Trigger', level: 'MODERATE', assessment: '183-day rule applies; Mexican tax residents face worldwide income taxation. Structure carefully with a Mexican CPA before committing to a long stay.' },
      { vector: 'Water Quality', level: 'MODERATE', assessment: 'Tap water is not potable; all drinking/cooking water must be bottled or filtered. Garrafones (20L jugs) run MXN 50-80 and delivery to apartments is standard.' },
      { vector: 'Taxi / Airport Scams', level: 'LOW', assessment: 'Street taxis and some MEX airport operators overcharge foreigners. Use Uber, Didi, or authorised-taxi desks at MEX Terminal 1/2 (pay inside the terminal, not curbside).' }
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
        ['Creative Community', 'Dense artist, designer, and founder population in Roma/Condesa.'],
        ['Domestic Help Economics', 'Full-time housekeeper/nanny runs USD 400-700/month; reshapes dual-income family economics dramatically.'],
        ['Airport Connectivity', 'MEX and NLU cover most of North America with direct flights; 4-5h to NYC/LA and 2-3h to most US hubs.'],
        ['Temporary Resident Pathway', 'USD ~2,600/month income proof unlocks a 4-year residency visa -- well-trodden and straightforward for remote earners.']
      ],
      cons: [
        ['Seismic Risk', 'Real earthquake risk concentrated in soft-soil zones -- due diligence on building required.'],
        ['Neighbourhood Dependency', 'Lived experience varies more by district than almost any peer city; the wrong zone ruins the relocation.'],
        ['Tourist-Local Tension', 'Post-2020 gentrification has created visible resentment in Condesa/Roma; long-term residents encounter it.'],
        ['Tax Residency Trap', '183-day rule is easy to trip for long-stay nomads who haven\'t structured their affairs.'],
        ['Tap Water Not Potable', 'All drinking/cooking water must be bottled or filtered -- minor but constant logistical tax.'],
        ['Spanish Required', 'English tapers fast outside Condesa/Roma/Polanco; Spanish is genuinely necessary for daily friction reduction.'],
        ['Traffic Congestion', 'Surface traffic is brutal in working hours; Metro/cycling or neighbourhood containment reshape life.'],
        ['Bureaucratic Friction', 'Banking, utilities, and visa renewals frequently require in-person visits and Spanish-speaking intermediaries.']
      ]
    },
    verdictParagraphs: {
      nomads: 'For US-compatible remote workers, Mexico City is one of the top-3 global destinations in 2026. A Condesa or Roma Norte 1BR runs USD 1,100-1,800, coworking spaces like Publico and WeWork are plentiful, and the 4-year Temporary Resident visa on ~USD 2,600/month income proof is the most nomad-friendly major visa in the Americas. Standard all-in budget lands USD 2,200-3,400 -- dramatically below any US tier-1 city for markedly richer cultural depth.',
      families: 'Families need to think carefully about zone selection. Polanco and Del Valle offer the best combination of schools, green space, and safety; ASF, Greengates, and Edron deliver world-class bilingual education at USD 15-25k per child. Altitude acclimation is real for kids under 10, and neighbourhood containment (avoiding north/outer-east zones) is more important than in most peer cities.',
      founders: 'LATAM tech increasingly centres in CDMX, and the Mexican SAPI corporate structure is genuinely founder-friendly. USMCA nexus and proximity to US time zones/investors are real strategic advantages. The constraint: bureaucratic friction and Spanish-language dependency make the first 90 days heavier than in peers. Mexican CPA and immigration counsel should be hired before day one, not after.'
    },
    closingStatement: 'Mexico City in 2026 is the best-positioned LATAM relocation hub for US-compatible remote workers willing to learn Spanish and select neighbourhood carefully. STRONG BUY for nomads/entrepreneurs; CONDITIONAL BUY for families (school cost + altitude) and retirees (altitude + healthcare complexity).',
    qolScores: {
      climate:     { score: 9.0, note: 'Perpetual spring at 2,240m; 18-25C year-round, dry Nov-May, rainy Jun-Oct. No AC required in most housing.' },
      walkability: { score: 7.5, note: 'Condesa/Roma/Polanco are highly walkable; Metro + Metrobus cover the central spine; car largely unnecessary in core zones.' },
      healthcare:  { score: 7.5, note: 'World-class private hospitals (ABC, Angeles, Medica Sur) at 40-60% below US pricing; public IMSS system is strained and not expat-oriented.' },
      safety:      { score: 6.5, note: 'Central/south zones (Polanco/Condesa/Roma/Coyoacan) are low-incident; outer zones materially higher-risk. Uber over street taxis is standard hygiene.' },
      culture:     { score: 9.5, note: 'Arguably the deepest cultural capital in the Americas: museums, theatre, gastronomy, music, and a creative-class density that rivals NYC or Berlin.' },
      air_quality: { score: 5.0, note: 'AQI 80-150 is typical; dust season (Feb-Apr) and thermal inversions push air quality down intermittently. Not Bangkok-bad but not clean.' },
      green_space: { score: 7.0, note: 'Bosque de Chapultepec is one of the largest urban parks in the Americas; Parque Mexico, Parque Lincoln, and canal walks give genuine green relief.' }
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
      { vector: 'Visa Tied to Sponsor/Income', level: 'MODERATE', assessment: 'Most visa categories (employment, Virtual Working, Golden) are tied to income floors or sponsorship continuity; lose the job/income, clock starts on exit.' },
      { vector: 'Real Estate Cycle Exposure', level: 'MODERATE', assessment: 'Dubai property is cyclical: strong 2022-2025 rally; new-build oversupply risk looms in 2026-2027. Favour rental over purchase until pricing clarity returns.' },
      { vector: 'Social Conduct Laws', level: 'LOW', assessment: 'Cohabitation was legalised in 2020 but Ramadan daytime conduct, public displays of affection, and online-speech laws still apply. Read the rules once; most expats adjust without issue.' }
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
        ['Premium Healthcare', 'Private healthcare is world-class (Cleveland Clinic Abu Dhabi, Mediclinic network).'],
        ['Free-Zone Company Structures', 'DMCC, IFZA, DIFC give 100% foreign ownership, zero corp tax under AED 375k, and Golden Visa pathway.'],
        ['Golden Visa Pathway', '10-year renewable residency for investors, specialists, entrepreneurs; no sponsor dependency once granted.'],
        ['Infrastructure Density', 'Metro, tram, ride-hail (Careem), fibre, and delivery networks all operate at tier-1 global-city standard.']
      ],
      cons: [
        ['High Lifestyle Cost', 'Rent + schooling + alcohol + car stack a premium cost base that neutralises tax for mid-income households.'],
        ['Extreme Summers', 'Jun-Sep is genuinely oppressive; many expats plan 6-12 week summer exits.'],
        ['Car-Dependent', 'Metro covers main corridors but most errands require a car; expect AED 2,000-4,000/month for lease + fuel + parking.'],
        ['Visa Tied to Income/Sponsor', 'Most residency pathways are conditional; loss of income starts an exit clock.'],
        ['Alcohol Friction', 'Licensed-only retail, home-licence bureaucracy, zero-tolerance DUI -- manageable but a lifestyle tax.'],
        ['Grocery Costs (Western Diet)', 'Imported Western staples at Spinneys/Waitrose run 30-60% above origin markets; LuLu/Carrefour mitigate but don\'t fix.'],
        ['Social Ephemerality', 'Expat turnover is high; long-term friendships are harder to build than in more-rooted peer cities.'],
        ['Property Cycle Exposure', 'Dubai real estate is cyclical; 2026-2027 new-build delivery wave may pressure rents and values.']
      ]
    },
    verdictParagraphs: {
      nomads: 'For high-earning remote workers (USD 100k+) in tax-unfriendly home jurisdictions, Dubai is near-unbeatable in 2026. The Virtual Working Programme visa (5-year, USD 5k/month income floor), zero personal income tax, world-class fibre, and 90%+ English make it frictionless operationally. Standard budget lands USD 4,000-6,500/month -- but the tax saving on USD 150k+ income more than pays for it. Below USD 100k the math breaks; below USD 60k Dubai becomes actively expensive.',
      families: 'Families face the schooling cost bomb as the single biggest variable. Two children at British/American schools runs AED 100,000-200,000/year (USD 27k-54k), which can neutralise the entire tax advantage for mid-income households without an employer relocation package. Safety, healthcare, and infrastructure are genuinely excellent; the math works best when an employer education package exists or the school selection lands on mid-tier international (AED 40-60k) rather than tier-1 brand schools.',
      founders: 'Dubai is one of the most founder-friendly jurisdictions globally: DMCC, IFZA, DIFC, and ADGM free zones offer 100% foreign ownership, zero corporate tax under AED 375k, and direct Golden Visa pathways. Banking is more friction than the marketing suggests (expect 2-3 months and multiple branch visits to open a business account). For scaled regional plays or lifestyle brands with global customers, the setup is close to optimal; for B2B SaaS targeting US markets, Delaware + Dubai residency is often the cleaner stack.'
    },
    closingStatement: 'Dubai in 2026 is the premier tax-optimisation destination for high-earning remote workers and founders willing to pay premium lifestyle costs. STRONG BUY for singles/couples earning USD 100k+; CONDITIONAL BUY for families (school cost decides); CAUTION for budget nomads -- Dubai is not the place to arrive under-capitalised.',
    qolScores: {
      climate:     { score: 4.0, note: 'Oct-Apr is genuinely excellent (18-28C); May-Sep is brutal (35-48C with 60-90% humidity). Plan half-year residency for many lifestyles.' },
      walkability: { score: 5.5, note: 'Marina, JBR, Downtown, and City Walk are walkable clusters; between them, taxi/metro/car is required. Post-2023 cycling infrastructure has improved modestly.' },
      healthcare:  { score: 9.0, note: 'Private healthcare is world-class (Cleveland Clinic, Mediclinic, Aster). Mandatory health insurance covers essentials; top-tier plans run AED 6k-20k/year per adult.' },
      safety:      { score: 9.5, note: 'Among the safest large cities globally; violent and property crime are genuinely low. Road-safety (aggressive driving on Sheikh Zayed Road) is the one real risk.' },
      culture:     { score: 7.0, note: 'Museum of the Future, Al Fahidi historic district, Dubai Opera, Alserkal arts district. Genuine depth has grown sharply post-2020; still behind true cultural capitals.' },
      air_quality: { score: 6.0, note: 'Sand and dust events push AQI 100-180 sporadically; otherwise moderate. Mostly a nuisance, not a health exposure issue for healthy adults.' },
      green_space: { score: 5.5, note: 'Dubai Marina promenade, Al Barsha Pond, Mushrif, and the Creek Park give pockets of green; density is low by European standards, high by GCC standards.' }
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
      { vector: 'Bike Theft + Damp Housing', level: 'LOW', assessment: 'Bike theft is near-universal at the 1-2-year mark; older canal-house stock has damp/heating issues that surprise newcomers from drier climates.' },
      { vector: 'Energy Costs', level: 'MODERATE', assessment: 'Post-2022 energy price shock has softened but EUR 150-350/month for gas+electric is typical for 70-100m2 stock; heat-pump conversion is accelerating but uneven.' },
      { vector: 'Overtourism Backlash', level: 'LOW', assessment: 'City has restricted short-lets, capped cruise ship visits, and is tightening rules on tourist-visible business. Long-term residents are largely insulated but policy direction is restrictive.' }
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
        ['Strong Public Healthcare', 'Mandatory insurance (~EUR 150/month) gives access to excellent public system.'],
        ['Walkable + Human-Scale', 'Canal-ring geography rewards walking and cycling over transit; compact, safe, and culturally dense.'],
        ['Tech + Startup Ecosystem', 'Booking.com, Adyen, Philips, Picnic and a dense startup cluster make Amsterdam a real tech hub.'],
        ['International Schools Depth', 'AICS (public international), British School of Amsterdam, International School of Amsterdam -- multiple strong options.']
      ],
      cons: [
        ['Housing Market Dysfunction', 'Supply-constrained, regulated, and hostile to short-term corporate rentals; first 3-6 months are often the hardest.'],
        ['30% Ruling Tapering', 'Historical expat tax break is being progressively reduced; factor the new rules, not old ones.'],
        ['Dark Winters', 'Nov-Feb daylight and cloud cover are a real wellbeing factor.'],
        ['High Per-Meal Dining Cost', 'Restaurants are a premium spend compared to Southern European peers.'],
        ['High Tax Bracket', 'Top marginal PIT of 49.5% applies quickly; effective tax hit is real even with ruling applied.'],
        ['Damp / Older Housing', 'Pre-war canal stock has damp, heating, and noise issues; post-2000 builds in Oost/Zuidas are the comfort-first option.'],
        ['Banking Bureaucracy', 'Dutch banks (ABN, ING, Rabo) can be slow to open accounts for non-EU residents without BSN; DAFT applicants face extra friction.'],
        ['Social Depth vs Breadth', 'Large expat community but genuine Dutch integration is a multi-year project; the first year feels transactional for many.']
      ]
    },
    verdictParagraphs: {
      nomads: 'Amsterdam is not a digital-nomad city in the low-cost sense -- no DNV, 90/180 Schengen limits, and short-let housing rules make rotation difficult. For self-employed US citizens, the DAFT visa (EUR 4,500 capital requirement) is the cheapest legitimate Schengen founder entry and unlocks legal long-stay. For employed remote workers on sponsored visas, the tax-after-ruling math must be re-run under the 30/20/10 tapered regime that now applies.',
      families: 'Families do well here once housing is secured: bike-safe streets, excellent international schools (AICS, ISA, BSA), strong public healthcare, and a genuinely child-friendly cultural norm. The single biggest friction is 3BR+ housing stock; Oud-Zuid and Oost have the best inventory but prices run EUR 3,500-5,500/month for family-size apartments, and waitlists at top schools start 12-18 months ahead.',
      founders: 'For founders with US citizenship, DAFT is a genuine asset: Schengen residency, Dutch BV structure, and a mature startup ecosystem (TQ, Rockstart, Startupbootcamp). For EU founders, the standard freelance or BV path is straightforward but tax rates are high. Amsterdam rewards B2B SaaS and deep-tech over cost-sensitive consumer plays; the cost base is real but the quality of the ecosystem is worth it for the right business.'
    },
    closingStatement: 'Amsterdam in 2026 is the best-infrastructured, most English-friendly city in continental Europe -- and its most housing-constrained. BUY for remote workers and founders who can navigate housing and tax; CONDITIONAL BUY for families (school waitlists + housing stock); CAUTION for budget nomads -- this is not a cost-optimisation city.',
    qolScores: {
      climate:     { score: 5.5, note: 'Temperate-oceanic: mild summers (18-24C), damp autumns, dark winters (Dec daylight under 8h). Spring (Apr-May) is the sweet spot.' },
      walkability: { score: 9.5, note: 'Canal-ring geography is one of the most walkable/cyclable in the world. Tram + bike covers 95% of needs; car is a liability in central districts.' },
      healthcare:  { score: 8.5, note: 'Mandatory private-insured public system is genuinely excellent. GP-gated access can frustrate newcomers used to direct-specialist models.' },
      safety:      { score: 8.5, note: 'Low violent-crime rates; bike theft and occasional tourist-zone pickpocketing are the main vectors. Women-solo safety is excellent by European standards.' },
      culture:     { score: 9.0, note: 'Rijksmuseum, Van Gogh, Stedelijk, Concertgebouw, and a live-music scene that punches far above city size. Genuine cultural depth.' },
      air_quality: { score: 7.5, note: 'Generally good; occasional NOx issues along major corridors. No PM2.5 problems typical of warmer-climate peers.' },
      green_space: { score: 8.0, note: 'Vondelpark, Westerpark, Oosterpark, Amsterdamse Bos (urban forest). Per-capita green space is high for a dense European capital.' }
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
      { vector: 'Rainy Season (Nov-Mar)', level: 'LOW', assessment: 'Significant rainfall and humidity; some coworking/outdoor setups are limited. Not a deal-breaker but schedule accordingly.' },
      { vector: 'Tourism Tax + Regulation Drift', level: 'MODERATE', assessment: 'Bali Tourism Tax (IDR 150k) introduced 2024; further restrictions on nomad-visible business (signage, illegal villas, moped licences) are likely in 2026-2027.' },
      { vector: 'Healthcare Complexity', level: 'MODERATE', assessment: 'BIMC and Siloam cover routine care; anything complex (cancer, cardiac surgery) realistically means medical evacuation to Singapore or KL. International insurance with evac cover is essential.' }
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
        ['Wellness Infrastructure', 'World-class yoga, surf, and wellness offering -- unmatched at this price point.'],
        ['Villa Housing Culture', 'Private villa with pool at USD 800-1,800/month (Ubud/Sanur/Uluwatu) is genuinely not matched anywhere else at the price.'],
        ['Coworking Depth', 'Dojo, Outpost, Tropical Nomad (Canggu), Hubud (Ubud), and 10+ smaller spaces -- community-focused, not just desks.'],
        ['Short-Flight Escapes', 'Singapore (2.5h), KL (3h), Bangkok (4h), and domestic Indonesian islands for weekend rotation.']
      ],
      cons: [
        ['Scooter Injury Rate', 'Single most common medical issue for visiting nomads; insurance non-negotiable.'],
        ['Over-Tourism in Canggu/Seminyak', 'Traffic, waste, and infrastructure strain are visibly worsening year-on-year.'],
        ['Long-Haul Flight Cost', 'USD/EUR 800-1500 to most Western home bases; friction for visits home.'],
        ['Limited Complex Healthcare', 'Serious procedures usually mean evacuation to Singapore or KL.'],
        ['Power + Internet Reliability', 'Rolling outages and fibre disruptions occur; a 4G backup and UPS are standard kit.'],
        ['Plastic + Water Pollution', 'Monsoon pushes plastic onto west-coast beaches (Dec-Feb); water quality varies sharply by zone.'],
        ['Regulatory Volatility', 'Permit crackdowns, moped-licence enforcement drives, and tourist-visible business restrictions all surface intermittently.'],
        ['Lifestyle Fatigue Past 12 Months', 'Scene-saturation, community rotation, and infrastructure erosion drive most full-year residents off-island by year 2.']
      ]
    },
    verdictParagraphs: {
      nomads: 'Bali in 2026 remains the highest-density nomad base in Asia, but it works best as a 2-6 month rotation rather than a year-round base. Canggu for scene, Ubud for quiet, Sanur for family/long-stay, Uluwatu for surf. Standard budget lands USD 1,800-2,800/month in Canggu (villa, coworking, eating out), dropping 25-35% in Ubud or Sanur. The DNV (E33G) with its foreign-income tax exemption legitimises long-stay for those who qualify on deposit/income.',
      families: 'For families, Sanur and Ubud work markedly better than Canggu. Green School (Ubud) and Sanur Independent are internationally respected; fees are mid-tier international (USD 10-20k/child). The main friction is medical -- complex conditions require evacuation planning, and a serious international policy with medevac is essential. Bali works best for families with 6 months to 2 years of timeline, less well for multi-year relocation.',
      founders: 'Bali is excellent for content/creator/lifestyle/course-selling businesses with global customers. It is weaker for anyone needing Indonesian legal entities, payment rails, or serious banking infrastructure. PT PMA setup is doable but requires local counsel, and Indonesian banking as a foreigner is non-trivial. Most successful founders on the island run offshore (Singapore, Delaware) entities with Bali as residence, not business base.'
    },
    closingStatement: 'Bali in 2026 is the mature Asian nomad capital -- unmatched on lifestyle-cost ratio, pressured on infrastructure and sustainability. BUY for 2-6 month rotations; CONDITIONAL BUY for full-year residents who manage zone selection carefully; CAUTION for anyone who needs serious medical infrastructure or complex local business operations.',
    qolScores: {
      climate:     { score: 7.5, note: 'Tropical: dry season (Apr-Oct) excellent, rainy season (Nov-Mar) humid with afternoon downpours. No winter; no AC-required inland highlands (Ubud).' },
      walkability: { score: 3.5, note: 'Bali is a scooter island. Canggu/Ubud cores are walkable in zones; between zones, private transport is mandatory. Bike lanes are essentially absent.' },
      healthcare:  { score: 5.5, note: 'BIMC, Siloam, and Kasih Ibu cover routine primary/urgent care competently. Complex cardiac, oncology, or neurosurgery realistically means Singapore/KL evacuation.' },
      safety:      { score: 7.5, note: 'Violent crime is low; the real risk vector is scooter accidents (#1 medical issue for visiting nomads). Petty theft and scams present but manageable.' },
      culture:     { score: 8.5, note: 'Deep Balinese Hindu ceremony integrated into daily life; temple festivals, gamelan, traditional dance. Rice-terrace and coastal-craft traditions remain alive.' },
      air_quality: { score: 7.0, note: 'Generally clean; crop-burning and volcanic activity occasionally push AQI into 100-150 range. Canggu street-level traffic fumes are the most common issue.' },
      green_space: { score: 9.0, note: 'Rice paddies, jungle, beaches, and Mount Batur all within 90 minutes of Canggu. Near-unmatched natural-environment access at the price point.' }
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
      { vector: 'DNV Tax Treatment', level: 'MODERATE', assessment: 'DNV holders face a flat 24% tax up to EUR 600k/year on Spanish-source income; consult a Spanish tax adviser before committing.' },
      { vector: 'Catalan Political Cycle', level: 'LOW', assessment: 'Independence movement cycles and Catalan/Spain relations can produce periodic disruption (demonstrations, strikes). Low-impact for expats but a feature of civic life.' },
      { vector: 'August Shutdown', level: 'LOW', assessment: 'Many local businesses, schools, and service providers close for 2-4 weeks in August. Plan renewals, tax filings, and major setup outside this window.' }
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
        ['Digital Nomad Visa', 'Well-defined DNV path with workable income floor (EUR 2,650/month).'],
        ['Climate + Beach', 'Mediterranean climate plus genuine urban beach access (Barceloneta, Bogatell, Bogatell-Mar Bella).'],
        ['Tech Cluster (Poblenou)', 'The 22@ district anchors a real tech economy, not just a nomad layer.'],
        ['European Connectivity', 'BCN airport plus high-speed rail to Madrid (2.5h), Paris (6.5h), Lyon, and beyond.'],
        ['Menu-del-Dia Economics', 'Lunch economics (EUR 12-18 for 3 courses + wine) that make the Standard budget genuinely comfortable.'],
        ['Walkable Urbanism', 'Cerda grid + superblock program make central Barcelona one of the most walkable large cities in Europe.'],
        ['Healthcare System', 'Strong public (CatSalut) system plus excellent private (Quiron, Teknon); expats favour private for speed.'],
        ['Cultural Capital', 'MACBA, MNAC, Fundacio Miro, Picasso Museum + live music and festival scene (Primavera, Sonar).']
      ],
      cons: [
        ['STR Licensing Clampdown', 'Short-term rental inventory is shrinking by regulation; plan for long-term leases.'],
        ['Tourist-Local Tension', 'Anti-tourism politics is now mainstream; long-term residency posture matters.'],
        ['DNV 24% Flat Tax', 'Simpler than general Spanish tax but not a tax-haven rate.'],
        ['Pickpocket Density', 'Tourist zones are genuinely active for petty crime.'],
        ['Bureaucratic Friction', 'NIE, empadronamiento, social-security, and DNV paperwork typically span 2-4 months total.'],
        ['Housing Lead Times', 'Central 2BR leases often require 2-3 months search with real competition; gestors often needed.'],
        ['Noise (Summer)', 'Catalan/Spanish evening rhythm + summer tourist density make ground-floor and tourist-zone living loud.'],
        ['Catalan/Spanish Duality', 'Civic life in Catalan, business often in Spanish; both matter over time.']
      ]
    },
    verdictParagraphs: {
      nomads: 'Barcelona in 2026 is the strongest Spanish nomad option and one of the top-3 Mediterranean cities for remote workers. The DNV (EUR 2,650/month income floor, 24% flat tax on Spanish-source income up to EUR 600k) is well-defined and well-trodden. Standard budget lands EUR 2,200-3,200/month; compared to Lisbon, prices are comparable but the tech cluster is deeper. Long-term leases through Idealista with a local gestor are the single most important move in month one.',
      families: 'Families benefit from excellent international schools (BSB, ASB, Kensington School, American School), pedestrian-friendly streets, strong public healthcare, and genuine urban beach access. The main friction is 3BR+ housing: EUR 2,800-4,500/month for 100-130m2 in Eixample/Gracia/Sant Gervasi, with 2-3 months of search lead time typical. International school waitlists start 12+ months ahead for popular entry years.',
      founders: 'Poblenou/22@ gives Barcelona genuine tech-ecosystem depth: Glovo, Typeform, TravelPerk, Kantox, and a dense layer of EU-facing SaaS startups. The Spanish Startup Law (2022) improved the tax treatment of carried interest and stock options meaningfully. Spanish bureaucracy (social security, VAT compliance) remains the operational headwind; a bilingual gestor is close to mandatory for the first year.'
    },
    closingStatement: 'Barcelona in 2026 rewards remote workers who settle in properly: DNV-qualified, long-term leased, Spanish-learning, non-tourist-posture. STRONG BUY for 1-3 year relocations; CONDITIONAL BUY for short-stay nomads (who will increasingly be treated as part of the tourism problem); RECOMMENDED for families who solve housing early.',
    qolScores: {
      climate:     { score: 8.5, note: 'Mediterranean: mild winters (10-16C), warm summers (25-30C), low rainfall. Summer humidity + tourist density are the main drawbacks.' },
      walkability: { score: 9.0, note: 'Cerda grid + ongoing superblock program make central Barcelona one of the most walkable large European cities. Metro + bus covers the rest.' },
      healthcare:  { score: 8.5, note: 'Strong public (CatSalut) + excellent private (Quiron, Teknon, Hospital Clinic). Private insurance at EUR 50-120/month is the expat default.' },
      safety:      { score: 7.5, note: 'Low violent crime; pickpocketing in tourist zones (Las Ramblas, Metro L3, Barceloneta) is genuinely endemic. Non-tourist zones are low-incident.' },
      culture:     { score: 9.5, note: 'Gaudi, Picasso, Miro, MACBA, Primavera Sound, Sonar, Mercat del Born -- arguably the densest cultural offering in the Mediterranean.' },
      air_quality: { score: 6.5, note: 'Generally moderate; traffic-corridor NOx and occasional Saharan dust events push AQI 80-140 periodically.' },
      green_space: { score: 7.5, note: 'Ciutadella, Montjuic, Parc del Laberint, and beach proximity (10-20 min by bike) offer strong outdoor access. Dense urban core limits tree canopy.' }
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
        ['Grocery Economics', 'Aldi/Lidl make home cooking genuinely cheap for Western Europe.'],
        ['Startup Ecosystem', 'N26, Zalando, Delivery Hero, HelloFresh, Wooga -- a genuine unicorn cluster with deep VC infrastructure.'],
        ['Creative + Tolerant Norms', 'Deep queer-friendly culture, club scene (Berghain, Tresor, Watergate), and genuine cosmopolitanism.'],
        ['Healthcare + Public Insurance', 'Public statutory insurance (~14.6% of income) covers world-class care; private option exists for higher earners.']
      ],
      cons: [
        ['Anmeldung Bottleneck', 'Residential registration queue delays everything downstream (bank, lease, tax).'],
        ['Housing Search Friction', 'Scarcity, German-language paperwork, and competitive applications.'],
        ['Bureaucratic Heaviness', 'More forms, more in-person appointments, and more analog process than any Western European peer.'],
        ['Winter Darkness', 'Genuine wellness factor for sun-dependent newcomers.'],
        ['High Tax Wedge', 'Income tax + solidarity + church tax + social contributions routinely exceed 45% for mid-high earners.'],
        ['Language Friction (Official)', 'Most administrative interactions happen in German; English works socially but not at Burgeramt or Finanzamt.'],
        ['Cash-Culture Lag', 'Many smaller businesses still cash-only or German-card-only; international cards less universally accepted than peers.'],
        ['Freiberufler Tax Complexity', 'Freelance filings are intricate; Steuerberater is effectively mandatory at EUR 1,500-3,000/year.']
      ]
    },
    verdictParagraphs: {
      nomads: 'Berlin is not a short-stay nomad city -- Schengen 90/180 limits and Anmeldung rules make sub-6-month circuits actively painful. For 1-3 year stays, though, the Freiberufler visa (for freelancers in recognised professions) and the post-2024 Chancenkarte create real entry paths for non-EU remote workers. Standard budget lands EUR 1,800-2,800/month including a 1BR in Kreuzberg or Neukolln -- 30-40% below Amsterdam, 40-55% below Paris for equivalent space. Coworking (Mindspace, Factory, betahaus, Ahoy!) is mature and community-led.',
      families: 'Families get excellent public healthcare, strong bilingual/international schools (Berlin International, BBIS, Kreuzberg Community, JFK), and genuinely child-friendly public space and transit. The housing market is the main constraint -- 3BR+ in Prenzlauer Berg or Charlottenburg requires 2-3 months of search and often Schufa + German-paperwork readiness. Kita (daycare) access is strong but registration is months ahead.',
      founders: 'Berlin is Europe\'s second-largest startup ecosystem (after London) and the continent\'s deepest consumer-tech and B2B SaaS cluster outside the UK. GmbH is founder-standard; early hiring in Berlin is relatively accessible because of the international talent pool. The operational overhead is real: German employment law is strict, HR/payroll requires proper Steuerberater + Rechtsanwalt, and the cash cycle on admin can surprise first-time EU founders.'
    },
    closingStatement: 'Berlin in 2026 remains Western Europe\'s best creative-and-tech value for 1-3 year relocations; not a nomad city, not a cost-optimisation city, but a genuine infrastructure + cultural-depth + ecosystem play. BUY for remote workers and founders willing to navigate Anmeldung and German paperwork; CONDITIONAL BUY for families (housing + school lead-times); CAUTION for anyone expecting Southern-European ease of bureaucracy.',
    qolScores: {
      climate:     { score: 5.0, note: 'Continental: cold winters (-3 to 4C), mild summers (20-28C), grey Nov-Feb. Spring and early autumn are excellent; winter daylight can drop to 8h.' },
      walkability: { score: 8.5, note: 'Central districts (Mitte, Kreuzberg, Prenzlauer Berg) are walkable + cyclable; excellent U/S-Bahn network fills the rest. Car genuinely unnecessary.' },
      healthcare:  { score: 8.5, note: 'Public statutory + private system is excellent. GP-gated access can frustrate US-pattern expats; Charite is world-class for complex cases.' },
      safety:      { score: 8.0, note: 'Low violent crime; petty theft in tourist zones and at main Bahnhofs. Late-night zones (Warschauer, Gorlitzer) have drug-scene presence but low expat impact.' },
      culture:     { score: 9.5, note: '180+ museums, Berliner Philharmoniker, Staatsoper, Deutsche Oper, world-leading club scene (Berghain, Watergate, Tresor), and a cinema culture that rivals any European capital.' },
      air_quality: { score: 7.5, note: 'Generally good; traffic-corridor NOx is moderate. Winter inversions occasionally push PM readings up.' },
      green_space: { score: 8.5, note: 'Tiergarten, Tempelhofer Feld (former airport), Volkspark Friedrichshain, plus Spree/Wannsee water access. Per-capita green space is exceptional for a capital.' }
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
      { vector: 'Seasonal Flooding', level: 'LOW', assessment: 'Peak monsoon (Sep-Oct) occasionally floods riverside and low-lying districts; historically manageable.' },
      { vector: 'Airport Connectivity', level: 'MODERATE', assessment: 'CNX is mostly regional; long-haul almost always requires a Bangkok transfer adding 3-5h and a second-leg fare. Plan travel assuming BKK as hub.' },
      { vector: 'Community Saturation', level: 'LOW', assessment: 'The compact nomad scene means faces repeat at 3 coworking spaces; positive for community depth, mildly claustrophobic for some.' }
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
        ['Slower Pace vs Bangkok', 'Genuine quality-of-life advantage for longer stays.'],
        ['Coworking Density', 'Punspace, CAMP, Yellow, Alt_Chiang Mai + dozens of cafe-desks -- concentration in Nimman is SEA-leading per capita.'],
        ['Cafe Economy', 'Ristr8to, Graph Cafe, Akha Ama -- third-wave coffee scene is genuinely world-class at THB 80-140 per drink.'],
        ['Long-Stay Logistics', 'Monthly serviced condos, landlord-friendly 6-12 month leases, and scooter rental all operate at nomad-native prices.']
      ],
      cons: [
        ['Burning Season', 'Feb-Apr PM2.5 is a genuine health hazard, not a nuisance.'],
        ['Limited Specialist Healthcare', 'Complex cases route to Bangkok.'],
        ['Airport Connectivity', 'Mostly regional; international usually via Bangkok.'],
        ['Community Turnover', 'High rotation means personal relationships recycle every 3-6 months.'],
        ['Thin Fine-Dining Scene', 'Excellent at the street/casual tier; weak at the high-end compared to Bangkok or even HCMC.'],
        ['Nighttime Scene Limited', 'Old City + Nimman have bars but the city quiets by midnight; nightlife depth is thin.'],
        ['Scooter Traffic Mix', 'Scooter + truck mix on arterial roads (Huay Kaew, Canal Road) creates genuine injury risk for new riders.'],
        ['Healthcare Depth', 'Sprains, fevers, minor surgery handled locally; anything neuro/oncology/cardiac routes to Bangkok.']
      ]
    },
    verdictParagraphs: {
      nomads: 'Chiang Mai in 2026 is the highest cost-to-quality SE Asian base for nomads willing to handle the burning-season exit. A Nimman 1BR studio runs USD 450-650, coworking is USD 110-170, and fibre pushes 200+ Mbps. DTV makes 5-year stays workable. Standard budget lands USD 1,200-1,900/month -- among the lowest globally for this level of nomad infrastructure. Plan 6-10 weeks out in Feb-Apr (Koh Samui, Bali, Japan, Da Nang are favourites) and the math is near-unbeatable.',
      families: 'Families do reasonably well at Prem Tinsulanonda, Lanna International, or Panyaden (bilingual Thai-English). Hang Dong\'s housing estates give 3BR/pool options at a third of Bangkok prices. The burning-season constraint is serious for children with respiratory sensitivity; medical evacuation to Bangkok for complex cases is 1h by plane. Works best for families with 1-3 year horizon or strong seasonal-rotation appetite.',
      founders: 'Chiang Mai is strong for solo/small-team founders in content, SaaS, e-commerce with global customers. Weaker for anyone needing local Thai hiring or complex company structures (BOI and PMA pathways exist but counsel is thinner than Bangkok). Most successful founders run offshore (Delaware, Singapore) entities with Chiang Mai as residence. Banking as a foreigner is easier than Bali but harder than Bangkok.'
    },
    closingStatement: 'Chiang Mai in 2026 is the most cost-efficient mature nomad base in Asia for anyone who treats burning season as a seasonal constraint rather than a blocker. STRONG BUY for cost-conscious DTV-eligible nomads; CONDITIONAL BUY for families and anyone with respiratory sensitivities; RECOMMENDED for retirees (O-A visa + low cost + strong community).',
    qolScores: {
      climate:     { score: 6.0, note: 'Cool season (Nov-Feb) is genuinely excellent (18-28C, low humidity). Hot season (Mar-May) peaks 35-40C. Burning season overlaps with hot season -- the combined Feb-Apr window is the main QoL hit.' },
      walkability: { score: 6.0, note: 'Old City is highly walkable; Nimman is walkable in core blocks. Between zones, scooter or songthaew (red-truck shared taxi) is the norm.' },
      healthcare:  { score: 7.5, note: 'Bangkok Hospital Chiang Mai, Chiang Mai Ram, Lanna Hospital cover routine-to-moderate care excellently. Serious/specialist cases route to Bangkok (1h flight).' },
      safety:      { score: 8.0, note: 'Violent crime is genuinely rare; main risks are scooter accidents and occasional tourist-targeted scams. Chiang Mai consistently ranks safer than Bangkok.' },
      culture:     { score: 8.5, note: 'Over 300 Buddhist temples, Lanna traditional culture, Yee Peng lantern festival, and a creator/artisan community (leather, ceramics, woodwork) that remains alive.' },
      air_quality: { score: 3.5, note: 'Feb-Apr: AQI 200-400+ routinely (among the worst sustained air windows in Asia). May-Jan: AQI 30-80, genuinely excellent. The split scores average low but the reality is bimodal.' },
      green_space: { score: 7.5, note: 'Doi Suthep-Pui National Park within 20 minutes; surrounding mountains, rice terraces, and waterfalls accessible daily. Urban green is thinner inside the city proper.' }
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
      { vector: 'Political / Security Volatility', level: 'LOW', assessment: 'Colombia\'s broader political cycle has occasional ripple effects; Medellin is generally stable but not entirely insulated.' },
      { vector: 'Tourist-Zone Drug Solicitation', level: 'MODERATE', assessment: 'Parque Lleras evening street-level drug solicitation is constant; sex tourism and related criminality have driven periodic police crackdowns. Avoiding the immediate park is standard expat hygiene.' },
      { vector: 'Underbanking + Cash Pulls', level: 'LOW', assessment: 'Local banking for foreigners can be slow; ATM skimming is real. Use bank-branch ATMs, Bancolombia/BBVA, and expect COP-denominated card fees abroad.' }
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
        ['Digital Nomad Visa', 'Colombia DNV is straightforward and affordable (USD 250-350 fees + income proof).'],
        ['US Time-Zone Overlap', 'CT overlap makes it a genuine US-employer relocation.'],
        ['Cost of Living (outside Poblado)', 'Laureles/Envigado remain strong value vs any US city (COP 2.0-3.5M for modern 1BR).'],
        ['Nomad Community Density', 'Deepest nomad scene in LATAM outside CDMX.'],
        ['Metro System', 'Medellin has the only metro system in Colombia (+ the Metrocable gondolas); transit is genuinely good by LATAM standards.'],
        ['Healthcare Quality + Price', 'EPS Sura, Colsanitas cover world-class private care at USD 80-150/month premium; hospitals rank top-10 in LATAM.'],
        ['Direct US Flights', 'Medellin MDE has direct flights to Miami, NYC, Atlanta, Ft Lauderdale -- rare for a non-capital LATAM city.']
      ],
      cons: [
        ['Targeted-Crime Pattern', 'Drugging-robbery incidents are a documented and ongoing issue for expat men.'],
        ['Poblado Cost Inflation', 'The default expat zone has priced up sharply; moving to Laureles is increasingly the move.'],
        ['Spanish-Only Outside Bubble', 'English service tapers hard outside Poblado.'],
        ['Local-Expat Tension', 'Post-2020 gentrification has created visible resentment in some zones.'],
        ['Afternoon Rain Routine', 'Rainy-season afternoons can be punishing; winter wardrobe not needed but waterproofs are.'],
        ['Sex-Tourism Perception', 'Medellin\'s persistent reputation affects how locals perceive foreign men -- integration requires active counter-signalling.'],
        ['Altitude + UV', '1,500m means UV is genuinely strong; sunscreen is not optional even on cloudy days.'],
        ['Limited Fine-Dining Depth', 'Catching up fast but still thinner than CDMX, Lima, or Bogota for high-end gastronomy.']
      ]
    },
    verdictParagraphs: {
      nomads: 'Medellin in 2026 is the best-infrastructured LATAM nomad city outside CDMX: perpetual-spring climate, US-compatible CT time zone, direct flights to major US hubs, and a DNV that is straightforward and affordable. Laureles has overtaken Poblado as the smart long-term nomad zone -- same quality of life, 25-35% cheaper rent, less tourist-zone friction. Standard budget lands USD 1,500-2,400/month. Spanish is non-negotiable past month 2.',
      families: 'Families do well in Envigado, Laureles, and parts of El Poblado (El Tesoro, Los Balsos). The Columbus School, TCS, and Montessori options cover international schooling at USD 8-15k/child -- a fraction of Bogota\'s top-tier. Safety varies sharply by zone; family-oriented expats concentrate south (Envigado/Sabaneta) where the demographic is dominantly local middle-class. Healthcare via Sura EPS is genuinely excellent for the price.',
      founders: 'Medellin has a real emerging tech scene (Ruta N innovation district, Rappi origin, growing fintech cluster). Low operating costs, US-time-zone advantage, and a English-competent local talent layer make it viable for remote-first startups. Colombian banking and tax setup for foreigners is the main friction -- a bilingual accountant and lawyer in month one are standard. For lifestyle/content businesses, the city works exceptionally.'
    },
    closingStatement: 'Medellin in 2026 is the strongest nomad-and-founder value in Latin America for Spanish-learning professionals who pick Laureles or Envigado over Poblado. BUY for DNV-eligible remote workers; CONDITIONAL BUY for short-stay English-only nomads and solo men who ignore the targeted-crime pattern; RECOMMENDED for families and retirees who solve zone selection.',
    qolScores: {
      climate:     { score: 9.5, note: 'Perpetual spring: 18-24C year-round at 1,500m. Almost no temperature swing; afternoon rain routine (especially Apr-May, Oct-Nov). "City of Eternal Spring" earns the name.' },
      walkability: { score: 7.0, note: 'Laureles is grid-planned and highly walkable; El Poblado has steeper hills but dense cafe clusters. Metro + Metrocable + taxis cover rest. Car largely optional.' },
      healthcare:  { score: 8.0, note: 'EPS Sura and Colsanitas cover world-class private care at USD 80-150/month; hospitals (Pablo Tobon Uribe, Clinica Las Americas) rank top-10 in LATAM.' },
      safety:      { score: 6.5, note: 'Central/south zones (Poblado/Laureles/Envigado) are low-incident for ordinary crime; targeted-crime pattern (drugging/robbery of foreign men via apps) is the documented outlier risk.' },
      culture:     { score: 7.5, note: 'Paisa culture is warm, family-centred, and proud; music (reggaeton origin), museums (MAMM, Museo de Antioquia), and genuine food-and-art growth in Provenza and Ciudad del Rio.' },
      air_quality: { score: 6.0, note: 'Valley geography + inversion layers push AQI into 80-140 range in dry periods (Jan-Mar); otherwise moderate. Not Bangkok-bad but not clean.' },
      green_space: { score: 7.0, note: 'Parque Arvi (cable-car accessible), Jardin Botanico, Cerro Nutibara, and surrounding mountains provide real access. Dense urban core limits street-level canopy.' }
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
      { vector: 'Strikes + Service Disruption', level: 'LOW', assessment: 'National strike cycles affect rail, metro, and occasionally air travel. Rarely disruptive to daily life, but factor into travel planning.' },
      { vector: 'Pickpocketing (Tourist Zones)', level: 'MODERATE', assessment: 'Metro 1, 4, 9; Trocadero, Gare du Nord, Louvre, Sacre-Coeur are active pickpocket zones. Non-tourist residential districts are low-incident.' },
      { vector: 'Energy + Heating Costs', level: 'MODERATE', assessment: 'Electric/gas bills in 40-80m2 Haussmannian stock can run EUR 150-350/month in winter; older buildings often have poor insulation.' }
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
        ['Global Connectivity', 'CDG + Gare du Nord/Lyon give full European + global reach.'],
        ['Public Healthcare', 'PUMA/Ameli system is excellent and inexpensive once residency is secured; mutuelle top-up covers the rest.'],
        ['Station F + Tech Scene', 'World\'s largest startup campus; real VC capital and founder ecosystem layered into French industrial base.'],
        ['Walkability + Public Space', 'Central arrondissements are human-scale, tree-lined, and deeply pedestrian-friendly.']
      ],
      cons: [
        ['Housing Market Punishing', 'Garant/dossier/language barriers are real and stack.'],
        ['Bureaucracy Density', 'Prefecture, Securite Sociale, CAF -- each takes weeks to months.'],
        ['High Effective Tax', 'Combined income-plus-social rates at 50%+ for many brackets.'],
        ['Winter Greyness', 'Nov-Feb light is genuinely poor; SAD affects a meaningful fraction of new arrivals.'],
        ['French-Language Gatekeeping', 'Administrative/professional life runs on French; English-only living hits a ceiling at month 6.'],
        ['Dog Ownership + Pavements', 'Famously under-enforced dog fouling; the everyday pavement reality is worse than peer cities.'],
        ['No Dedicated DNV', 'Independent remote workers are forced into Visiteur or Talent Passport routes -- neither ideal for nomads.'],
        ['Cost of Entertaining', 'Dinner-out costs and wine-bar economics run EUR 60-120 per person quickly in central arrondissements.']
      ]
    },
    verdictParagraphs: {
      nomads: 'Paris in 2026 is not a natural nomad destination: no DNV, Schengen 90/180 limits, brutal housing for short-stays, and a service economy that rewards long-term residency over rotation. For self-employed Anglos specifically, the Talent Passport Entrepreneur/Freelance routes unlock 4-year stays but require genuine French business substance. Standard budget lands EUR 2,500-3,800/month -- comparable to Amsterdam but with worse housing friction.',
      families: 'Families who survive the housing search do very well: ASP (American School), ISP (International School), EIB, and Jeannine Manuel offer world-class bilingual and international paths. Public healthcare via Ameli is excellent once residency is secured, and Paris is one of the most genuinely child-friendly European capitals on public-space terms. Expect 3BR+ in central arrondissements to run EUR 3,500-6,500/month.',
      founders: 'The Talent Passport Entrepreneur route is mature and Station F anchors the largest European startup ecosystem outside London. French social-charge burden on founders is the single biggest operational friction -- an SASU or SAS structure with proper counsel is mandatory. For B2B SaaS targeting EU markets, the ecosystem + connectivity + talent combination is world-class; expect 24 months before the admin rhythm feels routine.'
    },
    closingStatement: 'Paris in 2026 is the most demanding major European relocation and arguably the most rewarding. BUY for salaried Talent Passport holders, founders on the Entrepreneur route, and families who can solve housing; CAUTION for short-stay nomads, budget-first relocators, and anyone unwilling to commit to French.',
    qolScores: {
      climate:     { score: 6.0, note: 'Oceanic: mild winters (3-8C), warm summers (20-27C), regular rain. Spring + early autumn are excellent; Nov-Feb light is genuinely poor.' },
      walkability: { score: 9.5, note: 'Central arrondissements are world-class walkable; Metro covers the rest with excellent density. Cycling infrastructure has improved sharply post-2020.' },
      healthcare:  { score: 9.0, note: 'Public PUMA/Ameli system is excellent and genuinely affordable; mutuelle top-up insurance covers co-pays. Wait times for specialists can frustrate US-pattern expats.' },
      safety:      { score: 7.0, note: 'Violent crime is low; pickpocketing and scooter theft in tourist zones are endemic. Paris-proper safety varies meaningfully by arrondissement and time of day.' },
      culture:     { score: 10.0, note: 'Uncontested cultural capital: Louvre, Orsay, Pompidou, Philharmonie de Paris, Opera Garnier, Sainte-Chapelle. Unmatched density of depth.' },
      air_quality: { score: 6.5, note: 'Traffic-corridor NOx and periodic winter inversions push AQI 80-140; summer heatwaves (Jul-Aug) amplify. Better than London, worse than Amsterdam.' },
      green_space: { score: 6.5, note: 'Luxembourg, Buttes-Chaumont, Tuileries, Bois de Boulogne/Vincennes. Per-capita green is below Berlin or Amsterdam but quality is exceptional.' }
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
      { vector: 'Over-Tourism in Centre', level: 'LOW', assessment: 'Mala Strana and Old Town are tourist-saturated; residential quality of life is unaffected outside those zones.' },
      { vector: 'Pickpocketing + Currency Scams', level: 'MODERATE', assessment: 'Old Town tram routes (22/23), Wenceslas Square, and Vaclavske namesti have active pickpocketing; currency-exchange shops in tourist zones routinely swindle. Use Revolut, Wise, or bank ATMs.' },
      { vector: 'DPH/VAT Reporting (Zivno)', level: 'LOW', assessment: 'Zivnostensky holders above CZK 2M/year annual turnover must VAT-register and file monthly/quarterly returns; Czech accountant essential.' }
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
        ['Architectural Quality', 'Historic core intact; daily walks are materially pleasant.'],
        ['Beer + Pub Culture', 'World-best pilsner at CZK 45-65/500ml; the pub is a genuine social institution, not a tourist trap.'],
        ['Public Transit (+Trams)', 'Metro + tram + bus network is dense, reliable, and inexpensive (CZK 550/month unlimited).'],
        ['Central European Connectivity', 'Prague is a rail hub: Vienna (4h), Berlin (4h), Munich (5h), Warsaw (7h) all single-seat.']
      ],
      cons: [
        ['Czech-Only Paperwork', 'Administrative Czech is the single biggest integration friction.'],
        ['Cold + Grey Winters', 'Dec-Feb is a real wellness factor for sun-dependent newcomers.'],
        ['Smaller International-School Pool', 'Fewer options than Vienna, Berlin, or Warsaw for families.'],
        ['Tourist Saturation in Centre', 'Historic zones are tourist-dense; residential zones are fine.'],
        ['Service-Class English Gaps', 'Under-35 professionals speak English well; older service staff often do not.'],
        ['Winter Air Quality', 'Inversion-season (Dec-Feb) pushes PM2.5 into 70-120 range during cold heating days.'],
        ['Fine-Dining Depth', 'Improving but still behind Vienna, Warsaw, or Budapest at the high end.'],
        ['Slower Tech-Ecosystem Capital', 'Karlin cluster is real but VC funding rounds lag Berlin and Warsaw peers.']
      ]
    },
    verdictParagraphs: {
      nomads: 'Prague in 2026 is one of the best-value EU nomad bases for self-employed non-EU citizens via the Zivnostensky List route. Standard budget lands EUR 1,500-2,300/month including a Vinohrady or Zizkov 1BR -- roughly 35-45% below Berlin or Amsterdam for equivalent central-city quality. The constraint is Czech-only paperwork; hiring a relocation specialist or bilingual accountant in month one is close to mandatory and worth every koruna.',
      families: 'Families get a functional but narrower experience than in Berlin or Vienna: fewer international schools (ISP, Riverside, Park Lane Prague are the main options), smaller native-English expat community, but a genuinely safe, walkable, transit-rich city. Healthcare via VZP and private (Canadian Medical, Unicare) is strong. Czech immersion for under-10s is a viable alternative to international schooling and produces bilingual outcomes within 18-24 months.',
      founders: 'The Zivnostensky + s.r.o. combination is one of the most founder-friendly EU setups: low corporate tax (19%, drops to 5% under certain R&D regimes), strong engineering talent (JetBrains, Avast legacy, Socialbakers origin), and genuinely reasonable operating costs. Czech administrative friction is the main headwind; a good Czech accountant ranks near a good co-founder on impact in year one.'
    },
    closingStatement: 'Prague in 2026 is arguably the strongest cost-to-infrastructure ratio inside the EU for self-employed professionals willing to handle Czech bureaucracy. STRONG BUY for Zivno-route founders and mid-career remote workers; CONDITIONAL BUY for families (international-school pool); RECOMMENDED for longer-stay EU-residency seekers who value architectural quality and Central-European pace.',
    qolScores: {
      climate:     { score: 5.5, note: 'Continental: cold winters (-3 to 3C), pleasant summers (20-26C). Spring and autumn excellent. Winter grey + short daylight is the main hit.' },
      walkability: { score: 9.0, note: 'Central Prague is exceptionally walkable; tram network extends coverage. Metro is small but efficient. Car genuinely unnecessary.' },
      healthcare:  { score: 8.0, note: 'Public VZP system is strong and cheap; private (Canadian Medical, Unicare, Hôpital Sevastopol) covers English-speaking access. Specialist wait times are shorter than Western Europe.' },
      safety:      { score: 8.5, note: 'Low violent crime; pickpocketing in tourist zones and tram 22/23 routes. Night walking is generally safe across most of Prague 2/3/7.' },
      culture:     { score: 9.0, note: 'Intact baroque core, Dvorak Hall, National Theatre, DOX contemporary, Karlin music scene, and a deep Czech film/literature tradition.' },
      air_quality: { score: 6.5, note: 'Summer good; winter inversion + coal-heating elevated pollution periodically (AQI 70-130). Meaningfully better than 2010s but not Stockholm-clean.' },
      green_space: { score: 8.0, note: 'Petrin, Letna, Stromovka, Riegrovy sady, and the Vltava riverside give genuine urban-nature access. Surrounding forest + countryside 20 min by tram.' }
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
      { vector: 'Typhoon Season (Aug-Oct)', level: 'LOW', assessment: 'Periodic typhoons disrupt transit and flights; city infrastructure absorbs them well but planning around the window matters.' },
      { vector: 'Summer Heat + Humidity', level: 'MODERATE', assessment: 'Jul-Aug regularly hits 33-37C with 70-85% humidity; climate shift has pushed summers notably worse vs 2010. Heat-island effect in central wards is substantial.' },
      { vector: 'DNV Income Floor', level: 'MODERATE', assessment: 'JPY 10M (~USD 65k) annual income requirement excludes most independent nomads. Plan employer-sponsored or Business Manager visa for serious residency.' }
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
        ['Cultural Depth', 'Food, design, craft, music -- Tokyo is inexhaustible.'],
        ['Conbini Economy', '7-Eleven, FamilyMart, Lawson genuinely solve breakfast + lunch + banking + parcel-delivery at EUR 4-6 per meal.'],
        ['Healthcare System', 'National Health Insurance covers 70% of costs; high-quality care at a fraction of US pricing. Access is excellent once enrolled.'],
        ['Cherry-Blossom + Seasonal Culture', 'Hanami, Obon, momiji, snow festivals -- Tokyo\'s seasonal rhythm is a quality-of-life asset, not just aesthetic.']
      ],
      cons: [
        ['Language-Gated Daily Life', 'Japanese is effectively required beyond specific expat zones.'],
        ['Housing Friction for Foreigners', 'Guarantor company and "foreigner-friendly" filter still shape the search.'],
        ['DNV Income Floor', 'JPY 10M annual income requirement excludes most nomads.'],
        ['Seismic Baseline Risk', 'Real long-run earthquake exposure; buildings are excellent, but the event risk is non-zero.'],
        ['Reikin + Shikikin Upfront', 'Leasing typically requires 3-6 months\' rent upfront (key money, deposit, broker, first month) -- non-recoverable key money is standard.'],
        ['Apartment Size Reality', 'Central Tokyo 1LDK (45-55m2) is generous; 1R/1K stock (20-30m2) dominates the cheap tier. Expat-friendly sizes cost real money.'],
        ['Work-Culture Pressure', 'Traditional Japanese companies still run long hours and strong insider/outsider dynamics; international/tech layer is more flexible but not universal.'],
        ['Summer Climate Decline', 'Jul-Aug heat+humidity has notably worsened post-2018; outdoor summer life is shrinking.']
      ]
    },
    verdictParagraphs: {
      nomads: 'Tokyo in 2026 is a high-end option, not a budget nomad city. The DNV is capped at 6 months with a JPY 10M (~USD 65k) income floor, effectively selecting for high earners on short stays. Standard budget lands USD 2,400-4,200/month including a Shibuya/Nakameguro 1LDK -- the yen\'s weakness has made this meaningfully cheaper in USD terms than 2019. For salaried expats on employer-sponsored Engineer/Specialist visas, Tokyo is unmatched on infrastructure and safety.',
      families: 'Tokyo is arguably the best major-city family relocation globally on safety and transit. ASIJ (American School), Nishimachi, St. Mary\'s International, and Tokyo International School cover international pathways at JPY 3-4M/child/year. National Health Insurance covers most care. Housing for 3BR+ in central wards (Minato, Shibuya, Meguro) runs JPY 500k-1.2M/month; Kichijoji and Setagaya offer strong value at a 20-30 minute commute.',
      founders: 'Japan\'s Business Manager Visa is viable but paperwork-heavy (JPY 5M capital, physical office lease, 2 employees or equivalent substance). The J-Startup program and Tokyo\'s English-friendly accelerators (Plug and Play, 500 Global Japan) have lowered founder friction sharply post-2020. Best for deep-tech, hardware, robotics, and consumer-lifestyle plays targeting Japanese/East-Asian markets; less ideal for pure SaaS targeting US/EU.'
    },
    closingStatement: 'Tokyo in 2026 is the world\'s highest-infrastructure mega-city with one of its narrowest visa regimes for independent remote workers. BUY for high-earning employer-sponsored expats, families prioritising safety and infrastructure, and deep-tech founders; CONDITIONAL BUY for DNV-qualified short-stay high earners; CAUTION for budget nomads and anyone unwilling to invest in Japanese.',
    qolScores: {
      climate:     { score: 6.5, note: 'Four distinct seasons: spring (Mar-May) and autumn (Oct-Nov) are excellent, summer (Jul-Aug) hot/humid, winter (Dec-Feb) cold/dry. Climate shift is making summers notably worse.' },
      walkability: { score: 9.5, note: 'Tokyo is the world\'s densest, most reliable public-transit city: JR, Metro, Toei, private lines cover everything. Walking + train covers 99% of urban needs.' },
      healthcare:  { score: 9.0, note: 'National Health Insurance covers 70% at tier-1 hospitals (St. Luke\'s International, Toranomon, Tokyo University Hospital). Access is excellent; language is the main friction for non-Japanese speakers.' },
      safety:      { score: 9.8, note: 'Among the safest mega-cities in the world. Violent crime is genuinely rare; lost wallets frequently returned; women-solo late-night safety is excellent by global standards.' },
      culture:     { score: 9.5, note: 'Food, craft, design, music (jazz, classical, J-pop), cinema, fashion, architecture -- depth across every cultural vector. Museums (Mori, teamLab, Nezu, Tokyo National) are world-class.' },
      air_quality: { score: 7.5, note: 'Generally good; occasional PM2.5 transport from mainland Asia. Summer ozone and heat-island effect elevate discomfort more than official AQI.' },
      green_space: { score: 7.0, note: 'Yoyogi, Shinjuku Gyoen, Hibiya, Inokashira, Meguro River give excellent pockets. Overall tree canopy is thinner than Berlin or Paris; density of green-per-person is moderate.' }
    }
  },

  lisbon: {
    neighborhoods: [
      { name: 'Principe Real / Chiado', rentRatio: 1.30, character: 'Premium Historic Core', oneLineDesc: 'Lisbon\'s most refined historic district: Belle Epoque mansions converted to boutique hotels, third-wave coffee, and the densest concentration of design studios and creative agencies in Portugal.', bestFor: 'High-earning remote professionals and creatives who prioritise atmosphere, walkability, and food culture over price.' },
      { name: 'Cais do Sodre / Santos', rentRatio: 1.10, character: 'Riverside Lifestyle', oneLineDesc: 'The Tagus-front spine: Pink Street nightlife, Time Out Market, design hotels, and a cluster of coworking spaces in renovated warehouses; ferries to Cacilhas in 10 minutes.', bestFor: 'Lifestyle-driven nomads who want river views, nightlife optionality, and direct metro / suburban-rail access.' },
      { name: 'Alvalade / Roma-Areeiro', rentRatio: 0.85, character: 'Local Family Residential', oneLineDesc: 'A wide grid of 1950s-60s apartments around tree-lined avenues, with Lisbon\'s best mid-tier supermarkets and the strongest neighbourhood school cluster outside the international circuit.', bestFor: 'Long-term residents and families who want price stability, parks, and a slower local rhythm.' },
      { name: 'Alcantara / LX Factory', rentRatio: 1.05, character: 'Creative-Industrial', oneLineDesc: 'A re-zoned industrial belt under the 25 de Abril bridge: LX Factory creative complex, Village Underground, and a growing tech-office cluster anchored by Mercedes.io and Volkswagen Digital Solutions.', bestFor: 'Tech employees and creative founders who want loft-style apartments, industrial chic, and proximity to the river.' },
      { name: 'Parque das Nacoes', rentRatio: 1.15, character: 'Modern Riverfront', oneLineDesc: 'Lisbon\'s 1998-Expo-era purpose-built waterfront: glass condos, Vasco da Gama mall, the Oceanarium, and the eastern terminus of the Red metro line; cleanest, most modern building stock in the city.', bestFor: 'Families and corporate relocatees who want new construction, family-friendly walkable streets, and direct airport access.' }
    ],
    peerCities: [
      { slug: 'barcelona', rationale: 'Closest Mediterranean peer with comparable visa regime (Spain DNV); Barcelona is denser, pricier, more touristed.' },
      { slug: 'berlin', rationale: 'Northern EU benchmark — Lisbon is warmer, sunnier, cheaper for food and rent, but with a thinner startup ecosystem.' },
      { slug: 'amsterdam', rationale: 'Western EU premium tier; useful comparison for the cost of moving north for stronger banking and visa pathways.' },
      { slug: 'mexico-city', rationale: 'Latin-flavoured peer with similar climate and food culture but at 40-60% lower total cost; useful for nomads weighing EU access vs. price.' }
    ],
    execSummary: [
      'Lisbon in 2026 is Western Europe\'s most lifestyle-rich digital nomad base under EUR 3,000 per month, but the easy era is over. The closure of the Non-Habitual Resident (NHR) tax regime to new entrants in 2024 -- replaced by the narrower IFICI incentive -- has reset the fiscal arithmetic, while a 60-80% rent surge from 2020 to 2024 has compressed the gap to Madrid and Barcelona. The D8 Digital Nomad Visa (launched 2022) and Portugal\'s exceptional EU access remain the structural advantages.',
      'What still distinguishes Lisbon from peer EU capitals is a unique combination: 2,800+ hours of annual sunshine, ocean and surf 30 minutes from the centre, world-class public transit (Navegante metropolitano EUR 40 unlimited), one of Europe\'s top-10 fibre networks, and a food + wine culture that rewards every euro spent. The trade-offs are real -- housing supply is structurally tight, the bureaucracy of NIF / Social Security registration adds 2-4 weeks of setup friction, and the eastern Atlantic location means longer flights to Asia or the US East Coast than Madrid or Barcelona.',
      'For a 2026 relocation, Lisbon reads as a STRONG BUY for D8-eligible USD/EUR-earning nomads earning above EUR 4,000/month, a STRONG BUY for families on corporate packages, and a CONDITIONAL BUY for budget nomads under EUR 2,500/month who will face material rent search friction.'
    ],
    cuisineNotes: 'Lisbon\'s food economics reward eaters: a tasca lunch (prato do dia + wine + coffee) costs EUR 8-12, premium pasteis de bacalhau and bifana are under EUR 5, and the Time Out Market gathers 20+ chef-led counters under one roof for EUR 12-18 mains. Portuguese wine is genuinely world-class and routinely 30-50% cheaper than Spanish or French peers; supermarket bottles at EUR 4-8 hold up in international tasting. Imported groceries (Asian, US specialties) carry premium pricing -- locals default to Continente or Pingo Doce; expats add Mercado da Ribeira and Comida Independente for specialty.',
    cultureNotes: 'Lisbon operates on a slower clock than Northern EU capitals: lunch runs 13:00-15:00, dinner from 20:00, and shops still close mid-afternoon in the historic neighbourhoods. The city is genuinely friendly to foreigners -- English fluency rate is among Europe\'s highest -- but month-six integration meaningfully shifts when basic Portuguese (greetings, café orders, taxi directions) becomes routine. Fado, surf culture, and a deep diaspora connection to Brazil, Angola, and Mozambique shape the music, food, and language landscape uniquely.',
    risks: [
      { vector: 'Rent Supply / Housing Tightness', level: 'HIGH', assessment: 'Lisbon long-term rental supply has been structurally tight since 2020. Centro 1BR listings turn over in 24-72 hours; standard search lead time is 60-90 days. Budget for a EUR 1,500-2,500 setup cost (deposit + first/last month) on top of rent.' },
      { vector: 'NHR Closure / IFICI Narrowing', level: 'MODERATE', assessment: 'NHR closed to new entrants January 2024. IFICI replacement is narrower (scientific research, qualifying tech roles only). Standard Portuguese personal income tax is progressive to 48%. Engage a Portuguese accountant before establishing fiscal residency.' },
      { vector: 'Tourist Footprint', level: 'MODERATE', assessment: 'Alfama, Chiado, and Bairro Alto are dense with tourists year-round; Sept-Oct and May-June are peak. Short-let pressure has reduced long-term inventory and pushed centre rents materially upward 2021-2024.' },
      { vector: 'Atlantic Climate Variance', level: 'LOW', assessment: 'Lisbon is sunnier than most EU capitals but November-February see steady rain and 8-14C lows. Most apartments have weak heating (no central heat in older stock); budget EUR 60-100/month winter electricity for portable heaters.' },
      { vector: 'Banking Setup Friction', level: 'LOW', assessment: 'NIF (tax number) is the gateway to almost every system -- bank account, rental contract, utility setup. Engage a fiscal representative or visit Financas before D8 visa interview. Budget 1-2 weeks for the full setup cycle.' },
      { vector: 'Wildfire Smoke (Aug-Sep)', level: 'LOW', assessment: 'Inland Portuguese wildfires occasionally push smoke into Lisbon during peak summer; impact on AQI is generally short-duration (24-72h). Coastal location moderates exposure compared to interior cities.' }
    ],
    whoShouldMove: {
      remoteWorker: { verdict: 'RECOMMENDED', detail: 'Excellent fibre, mature coworking ecosystem, and Lisbon\'s quality-of-life premium make it one of the strongest remote-work bases in Western Europe for USD/EUR-earning professionals.' },
      digitalNomad: { verdict: 'RECOMMENDED', detail: 'D8 Digital Nomad Visa with 12-month initial stay, renewable to 5 years and a path to citizenship at year 5+. Among the most generous EU nomad pathways.' },
      family: { verdict: 'RECOMMENDED', detail: 'World-class international schools (St. Julian\'s, Carlucci, TASIS, Park IS), excellent SNS/private healthcare, exceptional safety, and a child-friendly walkable historic core.' },
      retiree: { verdict: 'RECOMMENDED', detail: 'D7 Visa for passive-income holders remains generous (EUR 870/month minimum). Mediterranean climate, low crime, world-class healthcare, and a strong English-speaking expat retiree community in Cascais and Estoril.' },
      entrepreneur: { verdict: 'CONDITIONAL', detail: 'Web Summit, Startup Lisboa, and EU corporate frameworks support founders, but tax post-NHR is no longer a Portugal-specific advantage. Best for EU-market consumer/SaaS plays; less ideal for fiscally-arbitraged founders.' }
    },
    prosCons: {
      pros: [
        ['D8 Digital Nomad Visa', 'Portugal\'s D8 (launched 2022) accepts remote workers earning EUR 3,280+/month with a 12-month initial stay, renewable to 5 years and citizenship at year 5+ subject to A2 Portuguese.'],
        ['Western EU Access at Mid-Tier Pricing', 'Schengen-area free movement, EU healthcare reciprocity, and full single-market access at rent levels 30-40% below Amsterdam, Paris, or London.'],
        ['Mediterranean + Atlantic Climate', '2,800+ hours of annual sunshine, mild winters (8-16C lows), and Atlantic-cooled summers; surf, beaches, and the Sintra mountains all under 40 minutes by train.'],
        ['World-Class Fibre', 'MEO and NOS deliver 1 Gbps symmetric fibre for EUR 35-55/month with excellent reliability; remote-work uptime is among Europe\'s best.'],
        ['Public Transit', 'Navegante Metropolitano monthly pass (EUR 40) covers metro, bus, train, and ferry across the Lisbon metro region -- among Europe\'s best transit-cost ratios.'],
        ['Food + Wine Culture', 'EUR 8-12 lunches, Michelin-starred Belcanto, Mercado da Ribeira, and supermarket Portuguese wine that holds its own at EUR 4-8/bottle.'],
        ['English Proficiency', 'Among Western Europe\'s highest English EF EPI scores; medical, legal, and banking are fully English-fluent in central Lisbon.'],
        ['Safe + Walkable Historic Core', 'Numbeo top-30 globally; Alfama, Chiado, and Principe Real offer some of Europe\'s most pleasurable walking environments.']
      ],
      cons: [
        ['Rent Surge 2021-2024', '60-80% inflation in centre 1BR rents over 4 years has pushed Lisbon to mid-tier Western European pricing; the Lisbon-as-bargain era is structurally over.'],
        ['NHR Closure', 'The decade-long NHR tax break closed to new entrants January 2024. Replacement IFICI is narrower (qualifying tech/research roles only); standard Portuguese rates apply otherwise.'],
        ['Housing Search Friction', '60-90 day standard lead time for centre 1BR; listings turn over in 24-72 hours; 2-3 month deposit + 1 month rent + EUR 200-400 agency fee setup cost.'],
        ['Bureaucracy at Setup', 'NIF, Social Security number, bank account, rental contract, and utility setup form a 2-4 week sequential chain; fiscal representative or relocation specialist materially helps.'],
        ['Eastern Atlantic Geography', 'Longer flights to Asia (12-15h) and US West Coast (12+h) than Madrid or Frankfurt; primary EU hub access via Madrid or London.'],
        ['Apartment Heating Gap', 'Older Lisbon buildings lack central heating; winter electricity bills (Dec-Feb) for portable heaters can run EUR 80-150/month above summer baseline.'],
        ['Tourist Saturation', 'Centro and Alfama are heavily touristed year-round, with Sept-Oct and May-June peak intensity affecting evening atmospherics and short-let inventory.'],
        ['Public Service Pace', 'Financas, IRN, AIMA (immigration) and SEF (legacy) processing times have been a chronic friction point; expect 4-12 weeks for residency card issuance.']
      ]
    },
    verdictParagraphs: {
      nomads: 'For the D8-eligible USD/EUR-earning remote worker, Lisbon in 2026 remains Western Europe\'s most lifestyle-rich base under EUR 3,000/month all-in. A 1BR centre apartment at EUR 1,400-1,800, EUR 600 monthly food/dining, EUR 40 transit, and EUR 200-300 coworking gets you the Mediterranean climate, EU access, and world-class fibre at total monthly costs that beat Amsterdam, Paris, and Madrid materially. The binding constraints are the housing search itself (start 60-90 days early) and the post-NHR tax math (engage a Portuguese accountant before residency).',
      families: 'Families relocating to Lisbon get the strongest Western-EU lifestyle-to-cost ratio for school-age children: St. Julian\'s, Carlucci, Park IS, and TASIS Portugal cover the major international curricula at EUR 8,000-22,000/year (vs EUR 18,000-32,000 in Amsterdam or Paris). Healthcare is world-class via SNS + private; safety is exceptional; and the historic core is genuinely walkable for kids. Parque das Nacoes and Cascais offer modern family infrastructure; Principe Real and Alvalade work for those wanting the historic core.',
      founders: 'Entrepreneurs face a more nuanced 2026 calculus. The post-NHR fiscal advantage no longer carries the founder thesis; Portuguese personal tax (progressive to 48%) is no better than peer EU jurisdictions. What remains: Web Summit (annual), excellent EU-grade IP frameworks, Portuguese talent at 40-60% below DACH/Benelux pricing, and a respectable but not top-tier startup ecosystem. Best for consumer-tech, SaaS, and Lusophone-market plays; less ideal for capital-intensive or regulated industries.'
    },
    closingStatement: 'Lisbon in 2026 is the highest-leverage Western European base for D8-eligible USD/EUR earners willing to invest in a 60-90 day housing search and to engage a Portuguese accountant on day one of fiscal residency. STRONG BUY for nomads above EUR 4,000/month, STRONG BUY for families on corporate or self-funded packages, CONDITIONAL BUY for budget nomads under EUR 2,500/month or fiscally-optimised founders.',
    qolScores: {
      climate:     { score: 8.5, note: 'Mediterranean with Atlantic moderation: 2,800+ sunshine hours/year, mild winters (8-16C), warm but cooled summers (18-28C). Among the best urban climates in Western Europe.' },
      walkability: { score: 8.5, note: 'Historic core (Chiado, Principe Real, Alfama, Bairro Alto) is genuinely walkable; cobblestoned hills are real but the metro + 28 tram fill in the gaps. Newer districts (Parque das Nacoes) are flat and stroller-friendly.' },
      healthcare:  { score: 8.5, note: 'SNS public system universal and low-cost (EUR 5-20 copays); private network (Lusiadas, CUF, Luz, Hospital da Luz) world-class with English-speaking staff. Expat insurance EUR 60-150 basic, EUR 120-280 international.' },
      safety:      { score: 8.5, note: 'Numbeo top-30 globally; petty theft in tourist zones (tram 28, Alfama, Time Out Market) is the dominant risk; violent crime is rare even in central districts.' },
      culture:     { score: 8.5, note: 'Fado, surf, world-class wine, design / architecture, Lusophone music and literature; LX Factory and the Berardo, Gulbenkian, MAAT museums anchor the contemporary scene.' },
      air_quality: { score: 8.0, note: 'Generally good; Atlantic location moderates pollution. Occasional summer wildfire smoke (24-72h episodes) is the main exception. Annual PM2.5 averages well below WHO guidelines.' },
      green_space: { score: 7.5, note: 'Eduardo VII, Monsanto Forest Park, Parque das Nacoes, Jardim da Estrela, plus the Sintra-Cascais Natural Park 30 minutes by train. Strong overall, denser in newer districts than the historic core.' }
    }
  }
};

// --------------------------------------------------------------------------
// SETUP_GUIDES -- "Getting Set Up: Your First 30 Days" per city.
// Rendered as Appendix A in the PDF. Keep ASCII-only.
// --------------------------------------------------------------------------
export const SETUP_GUIDES = {
  bangkok: {
    banking: [
      ['Kasikorn Bank (KBank)', 'Most DTV-friendly branches in Sukhumvit and Silom. Bring passport, DTV visa, 90-day address proof (TM30), and initial THB 500 deposit. Debit card typically issued same day; SCB Easy and K PLUS apps support English UI.'],
      ['Bangkok Bank', 'Strongest for inbound SWIFT transfers and FX accounts. Wise/Revolut routes arrive cleanly via Bangkok Bank New York intermediary. Book an appointment at the Phrom Phong or Asoke branch.'],
      ['Wise Multi-Currency (fallback)', 'If local account fails, Wise USD/EUR/THB balances + a Thai debit top-up card cover 90% of day-to-day needs until a Thai account comes through.']
    ],
    sim: [
      ['AIS 5G', 'Best nationwide coverage. Tourist eSIM at Suvarnabhumi Gate 8: 30-day 50GB for THB 699. Postpaid (requires ID + bank) runs THB 600-900/mo for unlimited data.'],
      ['TrueMove H', 'Strongest in-building coverage in Bangkok condos. dtac-like plans with unlimited 5G THB 799/mo.'],
      ['Airalo / Holafly eSIM', 'Useful for week 1 before you commit to a Thai ID-linked plan.']
    ],
    coworking: [
      ['The Hive Thonglor', 'Thonglor', 'THB 6,500/mo hot desk, THB 11,000 dedicated. Rooftop, reliable fibre, social scene.'],
      ['Justco One City Centre', 'Ploenchit', 'THB 9,500-14,000/mo. Newest premium floor in Bangkok, 100 Mbps+, strong A/C.'],
      ['The Work Loft Ekkamai', 'Ekkamai', 'THB 4,500/mo hot desk. Quieter, local-creative crowd, fewer tourists.']
    ],
    apps: ['Grab (ride + food)', 'LINE (de facto messaging + payments)', 'Bolt (cheaper rides)', 'Foodpanda (delivery)', 'BTS SkyTrain (official route planner)', 'ViaBus (bus real-time)'],
    timeline: [
      'Week 1 -- Airport AIS eSIM, 4-7 days in a Sukhumvit serviced apartment, TM30 address registration within 24h of checking in, scout 2-3 condo buildings via Hipflat/DDProperty.',
      'Week 2 -- Sign a 12-month condo lease (2-month deposit + 1-month rent); new TM30 with landlord signature. Apply for Thai tax ID (TIN) if DTV-tax-resident path is planned.',
      'Week 3 -- Open Kasikorn or Bangkok Bank account (Sukhumvit branch, 2-3 branch visits may be needed). Port to postpaid AIS/TrueMove with Thai ID or passport + Thai address.',
      'Week 4 -- Private health insurance (Pacific Cross, Cigna, AXA Thailand), coworking membership, long-stay extension appointment booked at Chaeng Wattana immigration, add local GrabPay/LINE Pay top-up.'
    ]
  },
  'mexico-city': {
    banking: [
      ['Santander Select / BBVA Mexico', 'Both accept temporary-resident cards. BBVA has the fastest digital onboarding if you have CURP + RFC. Santander Select tier requires MXN 50k balance and unlocks FX and international wires.'],
      ['Nu Mexico', 'Fully digital bank; accepts non-residents with just passport + address proof. Debit card arrives in 7-10 days. Great fallback while waiting for RFC.'],
      ['Wise MXN + Cash', 'Wise MXN balance + ATM withdrawals at Santander or Banorte (fee-reimbursed with Charles Schwab US account) covers setup month.']
    ],
    sim: [
      ['Telcel Amigo', 'Best coverage in CDMX + inter-city. Paquete Amigo Sin Limite Plus MXN 200 for 30 days unlimited social + 10GB data.'],
      ['AT&T Mexico', 'Strong 5G in Roma/Condesa/Polanco. Prepaid Armalo plan MXN 250/mo 6GB + unlimited WhatsApp.'],
      ['Bait (Walmart)', 'Cheapest MVNO: MXN 50/month for 7GB. ID not required for SIM purchase.']
    ],
    coworking: [
      ['WeWork Reforma Latino', 'Cuauhtemoc', 'MXN 5,800/mo hot desk. Iconic Torre Latinoamericana views, strong A/C, mixed local-expat crowd.'],
      ['Impact Hub Condesa', 'Condesa', 'MXN 4,200/mo. Social-impact leaning, good cafe, 100 Mbps.'],
      ['Selina CoWork Roma Norte', 'Roma Norte', 'MXN 3,500/mo hot desk. Day passes MXN 350. Backpacker-ish but good community.']
    ],
    apps: ['Didi (cheapest rides)', 'Uber (backup, English support)', 'Rappi (food + groceries + cash)', 'Metro CDMX (official)', 'WhatsApp (essential for everything)', 'Mercado Libre (Amazon-equivalent)'],
    timeline: [
      'Week 1 -- Arrive with FMM tourist permit OR pre-approved Temporary Resident stamp. Airport Telcel SIM, hotel in Roma Norte or Condesa while scouting.',
      'Week 2 -- Apartment hunting via Airbnb monthly, Vivanuncios, Inmuebles24, or local broker (common: 1-month deposit, 1-month fianza, 1-month rent). Sign 6-12 month lease.',
      'Week 3 -- If Temporary Resident: attend INM appointment in CDMX for plastic card (15-30 days). Apply for CURP + RFC (tax ID) at SAT -- required to open any serious bank account.',
      'Week 4 -- Open Nu Mexico or BBVA account, port Telcel to postpaid plan, get Seguros Monterrey or AXA private health insurance, join coworking.'
    ]
  },
  dubai: {
    banking: [
      ['Emirates NBD', 'Gold-standard expat bank. Requires Emirates ID (issued after residence visa). Current account needs AED 3,000 minimum balance; debit card in 5 working days.'],
      ['Mashreq NEO Pro', 'Fully digital business account for freelancers/founders with Dubai freezone licence. No branch visits; onboarding in 2-3 days.'],
      ['HSBC UAE Premier', 'Only viable if you are already HSBC Premier globally -- allows account opening before residence visa arrives.']
    ],
    sim: [
      ['Etisalat (by e&)', 'Best 5G citywide. Tourist SIM AED 125 for 14 days 6GB + unlimited calls. Post-Emirates-ID, postpaid 100GB plans AED 250/mo.'],
      ['du', 'Slightly cheaper postpaid; bundles with du TV. Prepaid tourist SIM AED 100.'],
      ['Virgin Mobile UAE', 'App-first MVNO on du network. AED 125/mo 30GB; instant eSIM via app once residence visa active.']
    ],
    coworking: [
      ['AstroLabs Dubai', 'JLT / One JLT', 'AED 1,500/mo hot desk. Tech/startup crowd, free freezone licence guidance sessions.'],
      ['A4 Space / Alserkal Avenue', 'Al Quoz', 'AED 1,200/mo. Art-district setting, quieter, good for creatives.'],
      ['Nook Coworking DIFC', 'DIFC', 'AED 2,100/mo. Premium, DIFC access for finance-track professionals.']
    ],
    apps: ['Careem (ride + food + payments + bills)', 'Talabat (food delivery)', 'RTA Dubai (metro + bus)', 'Noon (Amazon-equivalent)', 'UAE PASS (government digital ID -- essential)', 'DEWA (utilities)'],
    timeline: [
      'Week 1 -- Arrive on entry permit tied to Golden Visa / Employment / Freezone sponsorship. Hotel in Business Bay or Marina. Etisalat tourist eSIM on arrival.',
      'Week 2 -- Medical exam + biometrics for Emirates ID (1-2 visits). Apartment viewings (Bayut, Property Finder, Dubizzle) -- annual payment in 1-4 cheques is still standard.',
      'Week 3 -- Emirates ID issued. Open Emirates NBD or Mashreq account same week. Sign Ejari (tenancy contract registration) -- required for DEWA + internet.',
      'Week 4 -- DEWA electricity+water in name, du/Etisalat home fibre (500 Mbps AED 389/mo), Daman or AXA health insurance (legally required), coworking or co-living membership.'
    ]
  },
  amsterdam: {
    banking: [
      ['ING Netherlands', 'Most foreigner-friendly. Needs BSN (citizen service number) and proof-of-address. Current account free; iDEAL integration is essential for Dutch online payments.'],
      ['ABN AMRO', 'Premium alternative with stronger English service and private-banking tiers; EUR 2.95/mo for basic account.'],
      ['bunq (digital)', 'Green bank licensed in NL; opens in 5 minutes with passport, no BSN required initially. Useful bridge while waiting for BSN appointment (2-6 week queue in 2026).']
    ],
    sim: [
      ['KPN', 'Best national coverage + home fibre. SIM-only EUR 20-30/mo 20GB + EU roaming.'],
      ['Odido (T-Mobile NL)', 'Best 5G in Amsterdam core. Postpaid Max plan EUR 25/mo 30GB.'],
      ['Lebara / Simyo', 'Cheap prepaid MVNOs on KPN/Odido. EUR 10/mo 5GB for bridge month.']
    ],
    coworking: [
      ['B. Amsterdam', 'Sloterdijk', 'EUR 350/mo hot desk. Huge complex, 3 buildings, strong startup ecosystem, shuttle to centre.'],
      ['TSH Collab', 'multiple sites', 'EUR 250-400/mo. Attached to The Student Hotel (now TSH); cafe + gym + pool included at some locations.'],
      ['WeWork Weteringschans', 'Centrum', 'EUR 450-600/mo. Premium central location, strong for client meetings.']
    ],
    apps: ['9292 (multi-modal transit)', 'NS (train)', 'GVB (Amsterdam metro/tram)', 'Thuisbezorgd (food delivery)', 'Uber Eats / Deliveroo', 'Tikkie (P2P payments)', 'DigiD (government digital ID)'],
    timeline: [
      'Week 1 -- Arrive on Dutch residence permit (DAFT for Americans, HSM, Orientation Year, or EU free movement). Airbnb or TSH short-stay. Odido/KPN SIM.',
      'Week 2 -- Register at municipality (gemeente) for BSN -- book appointment online, bring birth certificate apostilled + translated, signed lease or landlord statement.',
      'Week 3 -- BSN arrives by post in 5-10 days. Open ING account same week. Apply for DigiD (government login -- required for health insurance, tax, utilities).',
      'Week 4 -- Dutch basic health insurance (legally required within 4 months): Zilveren Kruis, CZ, or VGZ -- EUR 140-170/mo. Home fibre (KPN/Ziggo). Transit pass (OV-chipkaart).'
    ]
  },
  bali: {
    banking: [
      ['BNI or Permata (KITAS-only)', 'Local Indonesian accounts require a KITAS (limited-stay permit). BNI Taplus at Sanur or Ubud branches is the most tourist-friendly; minimum IDR 500k deposit.'],
      ['Wise IDR + ATM', 'Tourist-visa and B211A holders generally stick with Wise IDR balance + Charles Schwab / Revolut ATM cards. Mandiri and BCA ATMs accept major cards; Bank Central Asia is the most reliable.'],
      ['Jenius (digital, KITAS-only)', 'BTPN subsidiary, fully-digital neobank, great app, but still requires KITAS to onboard.']
    ],
    sim: [
      ['Telkomsel', 'Best coverage islandwide including Ubud/Uluwatu. Tourist kartuHalo 30-day 25GB IDR 150k at airport or any counter.'],
      ['XL Axiata / Smartfren', 'Cheaper backups: IDR 100k 20GB 30 days. Smartfren strongest in Canggu/Berawa.'],
      ['Airalo Indonesia eSIM', 'Best for 48-hour bridge upon landing before you reach a kiosk.']
    ],
    coworking: [
      ['Dojo Bali', 'Canggu (Echo Beach)', 'IDR 3.8M/mo (~USD 240). The original Bali coworking space; pool, strong community events.'],
      ['Tropical Nomad', 'Canggu', 'IDR 3.2M/mo. Quieter alternative to Dojo; better A/C, serious focus culture.'],
      ['Outpost Ubud', 'Ubud (Penestanan)', 'IDR 3.5M/mo. Jungle setting, yoga-adjacent scene, slower vibe than Canggu.']
    ],
    apps: ['Gojek (ride + food + almost everything)', 'Grab (backup)', 'WhatsApp (essential)', 'Tokopedia / Shopee (e-commerce)', 'Pluang / Flip (IDR transfers)', 'Visit Indonesia (e-visa)'],
    timeline: [
      'Week 1 -- Arrive with B211A Visit Visa or new Remote Worker Visa (E33G, launched 2024). Telkomsel SIM at DPS airport. Base in Canggu or Ubud guesthouse.',
      'Week 2 -- Villa hunting via agents (Kibarer, Bali Home Immo) or FB groups. 6- or 12-month payment upfront is still standard; negotiate 3-month trial if possible.',
      'Week 3 -- If E33G holder: obtain KITAS via local agent (IDR 8-15M, 2-3 weeks processing). Register at kelurahan (local government) for residence report.',
      'Week 4 -- Open BNI/Permata if KITAS in hand, join Dojo/Tropical Nomad/Outpost, sort scooter rental (IDR 1.5-2M/mo) with international driving permit + helmet + insurance.'
    ]
  },
  barcelona: {
    banking: [
      ['CaixaBank imagin', 'Digital-only subsidiary; opens with just passport + Spanish phone. Zero-fee current account for under-30s; solid choice while waiting for NIE.'],
      ['BBVA', 'Traditional branch network, English service at central offices, strong for mortgage-adjacent products if you plan to buy.'],
      ['N26 Spain', 'Spanish-regulated account number, IBAN works for all domestic direct debits; opens fully online with passport.']
    ],
    sim: [
      ['Movistar', 'Telefonica subsidiary, best nationwide coverage. Fusion plan EUR 55/mo (fibre 1Gb + mobile 50GB + movistar plus+).'],
      ['Orange Spain', 'Competitive on 5G; Go plans EUR 25-35/mo with unlimited data.'],
      ['Pepephone / Lowi', 'Budget MVNOs on Movistar/Vodafone networks. EUR 15/mo 30GB for bridge month.']
    ],
    coworking: [
      ['OneCoWork Catedral', 'Gothic Quarter', 'EUR 280/mo hot desk. Rooftop with Cathedral views, strong community.'],
      ['Aticco Bailen', 'Eixample', 'EUR 350/mo. Premium building, design-led, startup crowd.'],
      ['Betahaus Barcelona', 'Poblenou (22@)', 'EUR 240/mo. Classic tech-corridor location, quieter, focus culture.']
    ],
    apps: ['TMB (metro + bus)', 'Bicing (bike share)', 'Glovo (food + delivery -- HQ is Barcelona)', 'Bizum (P2P payments, needs Spanish bank)', 'Cabify / FreeNow (rides)', 'Cl@ve (government digital ID)'],
    timeline: [
      'Week 1 -- Arrive on DNV (Spain Digital Nomad Visa) or EU free movement. Cita Previa for NIE (Foreigner ID number) booked online -- slots often 3-6 weeks out in 2026.',
      'Week 2 -- Apartment hunting via Idealista, Fotocasa, Habitaclia. 2-month deposit + 1-2 month rent + agency fee (typically 1 month + VAT) standard. Sign lease for empadronamiento.',
      'Week 3 -- Empadronamiento at city hall (census registration). NIE appointment attended -- TIE card (physical ID) follows 30-45 days later.',
      'Week 4 -- Open CaixaBank/BBVA with NIE + empadronamiento. Sign up for Sanitas or Adeslas private health insurance (required for DNV), plus public SS if freelance.'
    ]
  },
  berlin: {
    banking: [
      ['N26 (Berlin-native)', 'Headquartered in Berlin, fully English UI, IBAN in minutes. Default first account for expats.'],
      ['Deutsche Bank / Commerzbank', 'Traditional banks needed if landlord insists on "old-school" SEPA direct debit. English service at central Kudamm and Alexanderplatz branches.'],
      ['DKB / ING DiBa', 'Free online accounts with good FX + international cards; German-language onboarding but doable.']
    ],
    sim: [
      ['Telekom (Deutsche Telekom)', 'Best 5G coverage. MagentaMobil M EUR 45/mo unlimited LTE + 40GB 5G.'],
      ['o2 / Telefonica DE', 'Cheapest postpaid. Grow Flex EUR 30/mo, scales with usage.'],
      ['Aldi Talk / congstar', 'Budget MVNOs, prepaid EUR 10-15/mo for 15GB.']
    ],
    coworking: [
      ['Mindspace Krausenstrasse', 'Mitte', 'EUR 450/mo hot desk. Design-heavy, strong for agency/client work.'],
      ['Factory Berlin Gorlitzer Park', 'Kreuzberg', 'EUR 250-400/mo. Startup hub, Google-backed, events-heavy.'],
      ['Betahaus Kreuzberg', 'Kreuzberg', 'EUR 280/mo. Berlin coworking classic, creative-freelance crowd.']
    ],
    apps: ['BVG (transit)', 'DB Navigator (train)', 'Lieferando (food delivery)', 'Gorillas / Flink (10-min grocery)', 'PayPal (still dominant P2P in DE)', 'ELSTER (tax filing)'],
    timeline: [
      'Week 1 -- Arrive on Freiberufler/Selbstandig visa, Blue Card, Job Seeker, or EU free movement. Temporary Airbnb. Telekom/o2 SIM.',
      'Week 2 -- Anmeldung appointment at Burgeramt -- this is the single hardest step in Berlin 2026; book within 24h of landing, slots go in seconds.',
      'Week 3 -- Apartment hunt on ImmoScout24, WG-Gesucht, eBay Kleinanzeigen (Schufa credit check + 3 pay slips or proof of funds required). Sign Mietvertrag. Fresh Anmeldung with new address.',
      'Week 4 -- Open N26, get Steuer-ID (arrives by post after Anmeldung), sign up for TK or AOK public health insurance (required) or private (if >EUR 69k/yr), apply for freelance tax number at Finanzamt.'
    ]
  },
  'chiang-mai': {
    banking: [
      ['Bangkok Bank Chiang Mai', 'Most consistent for DTV holders. Chang Klan or Nimmanhaemin branches have bilingual staff and faster onboarding than Bangkok branches.'],
      ['Kasikorn (KBank) Nimman', 'K PLUS app is the best digital UI. Branch manager discretion matters -- long-stay visa + TM30 required.'],
      ['Wise THB + Charles Schwab ATM', 'Default fallback while bank account is pending; TTB and Bangkok Bank ATMs rebate best.']
    ],
    sim: [
      ['AIS 5G', 'Best coverage in Nimman, Old City, Mae Jo university area. Tourist eSIM THB 699 30-day 50GB.'],
      ['TrueMove H', 'Second-best citywide; good bundling with True Online fibre.'],
      ['dtac', '3rd option, cheapest prepaid (THB 200 for 15GB monthly).']
    ],
    coworking: [
      ['Punspace Nimman', 'Nimmanhaemin', 'THB 3,800/mo hot desk. The original Chiang Mai nomad space, reliable internet, quiet study culture.'],
      ['Yellow Coworking', 'Santitham', 'THB 3,200/mo. Slightly out of Nimman, cheaper, good focus atmosphere.'],
      ['Alt_ChiangMai', 'Nimman North', 'THB 4,200/mo. Premium new build, 200 Mbps fibre, strongest for calls.']
    ],
    apps: ['Grab (ride + food)', 'Bolt (cheaper rides)', 'LINE (messaging + payments)', 'Foodpanda', 'LINE MAN (local food delivery, wider than Grab in CM)', 'Google Maps (transit coverage is thin -- apps matter)'],
    timeline: [
      'Week 1 -- Fly into CNX (direct from BKK/HKT/KUL/SIN). DTV/ED/O visa already stamped. AIS eSIM, guesthouse in Nimman or Santitham.',
      'Week 2 -- Scout condos in Nimman, Santitham, or Chang Khlan via Baan Ying, Nimmana, or DDProperty. 6-month lease common; 1-2 month deposit.',
      'Week 3 -- TM30 within 24h of moving in. Open Bangkok Bank account -- Chiang Mai branches approve DTV holders more consistently than Bangkok.',
      'Week 4 -- Scooter rental (THB 3,000/mo, international permit + helmet), join Punspace/Alt, sign up for Pacific Cross or Cigna insurance, register TIN if planning Thai tax residency.'
    ]
  },
  medellin: {
    banking: [
      ['Bancolombia', 'Largest Colombian bank; Nequi digital subsidiary is the default for foreigners. Physical Bancolombia accounts require Cedula de Extranjeria (foreigner ID) which needs Migracion Colombia appointment.'],
      ['Nu Colombia', 'Fully-digital neobank, accepts Cedula de Extranjeria + passport. Fast onboarding, strong app, no fees.'],
      ['Wise COP + Davivienda ATM', 'Default bridge while waiting for Cedula; Wise COP is reliable, Davivienda ATMs have lowest foreign-card fees.']
    ],
    sim: [
      ['Claro Colombia', 'Best coverage including Envigado + Sabaneta. Plan Pospago COP 60k 30GB.'],
      ['Movistar Colombia', 'Competitive 5G in Poblado/Laureles. Prepago Sin Limites COP 50k 20GB.'],
      ['Tigo', 'Cheaper MVNO-feel; prepaid COP 30k 10GB 30 days.']
    ],
    coworking: [
      ['Selina CoWork Medellin', 'El Poblado', 'COP 650k/mo hot desk. Social, rooftop pool, day passes COP 45k.'],
      ['Atomhouse Laureles', 'Laureles', 'COP 550k/mo. Quieter, local-professional crowd, strong focus vibe.'],
      ['Tinkko Poblado', 'El Poblado (Parque Lleras)', 'COP 780k/mo. Premium space, great coffee, stronger fibre.']
    ],
    apps: ['Rappi (food + almost everything)', 'Uber (works; InDrive as cheaper backup)', 'Cabify', 'Metro de Medellin (official)', 'WhatsApp (essential)', 'Nequi (mobile payments -- Colombian equivalent of Bizum)'],
    timeline: [
      'Week 1 -- Arrive on Visa Nomada Digital (V Type) or Tourist Visa (90+90 days). Claro SIM at MDE airport. Hotel in El Poblado while scouting.',
      'Week 2 -- Apartment hunting via La Haus, Finca Raiz, or local broker. 2-month deposit, codeudor (guarantor) often waived for foreigners paying 3-6 months upfront.',
      'Week 3 -- If Visa Nomada Digital holder: register with Migracion Colombia, apply for Cedula de Extranjeria (3-4 weeks).',
      'Week 4 -- Open Nu Colombia or Bancolombia, get SURA or Colmedica private health insurance, join coworking, register Colombian tax ID (NIT) if planning residency beyond 183 days.'
    ]
  },
  paris: {
    banking: [
      ['BNP Paribas', 'Largest French bank with dedicated "Nouveaux Arrivants" expat service. Requires attestation d\'hebergement or signed lease + passport + EU or long-stay visa. Account open in 3-7 days.'],
      ['Societe Generale', 'Traditional alternative, SG Wing app is English-friendly. Similar paperwork to BNP.'],
      ['Revolut France / N26', 'Default bridge for first 6 weeks. French IBAN on Revolut (since 2022) accepts CAF, Pole Emploi, and most direct debits.']
    ],
    sim: [
      ['Orange France', 'Best coverage + 5G density. Open Forfait EUR 29/mo 100GB + EU roaming.'],
      ['Free Mobile', 'Cheapest good carrier. Forfait Free EUR 19.99/mo 210GB (best value in France 2026).'],
      ['Sosh / RED by SFR', 'MVNO subsidiaries, EUR 9-15/mo 50-100GB, short commitments.']
    ],
    coworking: [
      ['Wojo La Madeleine', 'Opera / Madeleine', 'EUR 450/mo hot desk. Central, phone booths, strong business vibe.'],
      ['Station F', '13th (Austerlitz)', 'Startup campus; individual access via Fighters Program or Founders Program only. Larger ecosystem = worth the filter.'],
      ['WeWork Coeur Marais', 'Marais', 'EUR 500-650/mo. Premium Marais location, great for client meetings.']
    ],
    apps: ['RATP (Paris transit)', 'SNCF Connect (trains)', 'Bonjour RATP (multi-modal)', 'Uber Eats / Deliveroo', 'Lydia / Paylib (P2P payments)', 'Doctolib (medical appointments)', 'FranceConnect (government digital ID)'],
    timeline: [
      'Week 1 -- Arrive on long-stay visa (passport talent, salarie, profession liberale) or EU free movement. Airbnb in 11e/Marais. Free/Orange SIM.',
      'Week 2 -- Apartment hunt: SeLoger, LeBonCoin, PAP. Expect Guarant visale + 3-month dossier (pay slips, tax notices, employer letter). Sign bail; get attestation.',
      'Week 3 -- Validate long-stay visa online (OFII) within 3 months of arrival. Open BNP/SG account with lease + passport. Order Carte Vitale (social security card) if employed.',
      'Week 4 -- Internet Livebox/Freebox (1 Gb EUR 30/mo), sign up for mutuelle (private top-up health insurance, EUR 40-80/mo), Navigo transit pass (EUR 86/mo Paris).'
    ]
  },
  prague: {
    banking: [
      ['Ceska Sporitelna (Erste)', 'Biggest retail bank. George online banking is English, account opens with passport + temporary residence address. CZK 89/mo or free on tier.'],
      ['CSOB', 'Second-largest; similar requirements. Often faster same-day card issuance.'],
      ['Revolut CZ / Wise CZK', 'Bridge for first 2-3 weeks; both support CZK IBANs for local direct debits.']
    ],
    sim: [
      ['T-Mobile CZ', 'Best coverage. Magenta 1 postpaid CZK 749/mo (unlimited).'],
      ['O2 Czech Republic', 'Competitive; Datamania CZK 649/mo 30GB.'],
      ['Vodafone CZ / MVNOs', 'Mobil.cz (O2 MVNO) CZK 249/mo 10GB for budget.']
    ],
    coworking: [
      ['Impact Hub Prague', 'Holesovice', 'CZK 5,500/mo hot desk. Community-heavy, good events, reliable fibre.'],
      ['K10 Coworking', 'Karlin', 'CZK 4,800/mo. Tech-corridor location, newer building, focus-friendly.'],
      ['Node5', 'Smichov', 'CZK 4,500/mo. Startup heritage, cheaper, good focus culture.']
    ],
    apps: ['PID Litacka (Prague transit)', 'Bolt (rides)', 'Liftago (local Czech rides)', 'Wolt / Foodora (delivery)', 'Rohlik (groceries)', 'Bank iD (national digital ID)'],
    timeline: [
      'Week 1 -- Arrive on zivno (freelance) visa, EU Blue Card, or EU free movement. AirBnb in Vinohrady/Karlin. T-Mobile SIM.',
      'Week 2 -- Apartment hunt on Sreality, Bezrealitky, FB groups. 2-3 month deposit + realitni agent fee (1 month rent + VAT) is standard. Sign najemni smlouva.',
      'Week 3 -- Register address at Foreign Police within 3 days of arrival (if non-EU). Apply for zivnostensky list (trade licence) if self-employed -- required before issuing Czech invoices.',
      'Week 4 -- Open Ceska Sporitelna, register with VZP (public health insurance) or commercial provider, file for residence permit card (non-EU) or register stay (EU).'
    ]
  },
  tokyo: {
    banking: [
      ['Japan Post Bank (Yucho)', 'Easiest for new arrivals with fresh Residence Card + My Number Notification. Branches everywhere; English forms; debit card in 1-2 weeks.'],
      ['SMBC Prestia', 'Former Citibank Japan; best English-service retail bank. Free international wires up to JPY 200k; requires JPY 500k initial balance.'],
      ['Shinsei Bank', 'Second-best English service, strong FX, free ATM withdrawals at Seven Bank.']
    ],
    sim: [
      ['NTT Docomo', 'Best coverage nationwide. ahamo postpaid JPY 2,970/mo 20GB + 5min free calls.'],
      ['Rakuten Mobile', 'Cheapest unlimited: JPY 3,278/mo unlimited on own network, capped JPY 2,178 under 20GB.'],
      ['Povo 2.0 (KDDI)', 'App-only; base JPY 0/mo + pay-as-you-go data topups (300MB JPY 390).']
    ],
    coworking: [
      ['WeWork Roppongi', 'Roppongi / Minato', 'JPY 70,000/mo hot desk. Central, strong foreign-executive crowd.'],
      ['Impact Hub Tokyo', 'Meguro', 'JPY 45,000/mo. Quieter, social-impact leaning, good focus.'],
      ['NewWork (Mitsubishi)', 'multiple sites', 'JPY 18,000/mo for flexible access to 50+ locations citywide -- best value if you travel around Tokyo.']
    ],
    apps: ['Suica / PASMO (IC card in Apple Wallet)', 'Google Maps or Navitime (transit)', 'Line (messaging + Line Pay)', 'Uber Eats / Demae-can', 'PayPay (dominant QR payments)', 'Mynaportal (government My Number portal)'],
    timeline: [
      'Week 1 -- Arrive on work visa, HSP, business manager, or spouse visa. Residence Card issued at NRT/HND on arrival. NTT/Rakuten SIM same day.',
      'Week 2 -- Ward office (kuyakusho) registration within 14 days -- this generates your My Number notification (needed for bank + phone postpaid).',
      'Week 3 -- Apartment hunting is the hardest Tokyo step: reikin (key money 1-2 months), shikikin (deposit 1-2 months), agent fee (1 month), guarantor company fee (0.5 month). Foreigner-friendly agents: Plaza Homes, Ken Corporation, GaijinPot Housing.',
      'Week 4 -- Open Japan Post Bank or Shinsei, enroll in National Health Insurance at ward office (mandatory), set up home fibre (NURO or So-net 2Gb JPY 5,200/mo), enroll pension.'
    ]
  }
};

// --------------------------------------------------------------------------
// CITY_SCAMS -- "Common Scams & Gotchas" per city. ASCII-only.
// Rendered as Appendix B.
// --------------------------------------------------------------------------
export const CITY_SCAMS = {
  bangkok: [
    ['Tuk-tuk "Grand Palace closed" scam', 'Driver claims the temple is shut and offers a gem/tailor detour where he earns commission. Walk away, use Grab/Bolt.'],
    ['Jet-ski "damage" extortion in Pattaya/Phuket day-trips', 'Operator demands THB 30,000+ for pre-existing scratches. Film the craft before renting; refuse to leave passports as collateral.'],
    ['Taxi meter refusal at Suvarnabhumi arrivals', 'Drivers offer flat THB 1,500-2,500 fares. Walk past touts to the official metered-taxi queue (level 1); genuine fare central BKK is THB 400-500 incl. tolls.'],
    ['Fake DTV visa consultants', 'WhatsApp/Telegram "agents" charging USD 2-5k for a visa you can self-file for USD 330. Check MFA official list; never pay without a government receipt.'],
    ['Farang pricing at non-fixed-price vendors', 'Tuk-tuks, beach vendors, and small Thai food stalls in tourist zones quote 2-5x locals. Learn numbers in Thai; ignore hand-written "tourist menus".'],
    ['Fake Thai driving licences / condo title deeds', 'Low-end agents produce forged Chanote deeds or driving IDs. Only transact via BOI-licensed legal firms; verify title at Land Department.']
  ],
  'mexico-city': [
    ['Unauthorized (pirate) taxis at airport', 'Always use Sitio (yellow authorised) taxis or Didi/Uber at the terminal. Pirate cabs routinely quadruple fares or route to ATMs under duress.'],
    ['Fake Mexico City metro police "fines"', 'Uniformed men stop foreigners claiming a "visa infraction" demanding cash. Real cops do not take on-site cash; request badge + precinct; call 911.'],
    ['Express kidnapping (secuestro express) in unvetted taxis', 'Only app-based rides. Never hail on the street after dark in Roma/Condesa/Centro.'],
    ['Fake ATM skimmers at Oxxo / independent ATMs', 'Use ATMs inside Citibanamex, BBVA, Santander branches only. Cover the PIN; avoid standalone machines in nightlife zones.'],
    ['Rental deposit theft', 'Owner disappears with fianza + deposit at move-out citing fabricated damages. Require itemised move-in inventory with photos; use reputable realtors (Homie, La Haus) over Facebook Marketplace.'],
    ['"Altitude tea" / free sample hustles at Zocalo', 'Vendor forces an item into your hand, demands MXN 200. Walk past; never accept any "free sample".']
  ],
  dubai: [
    ['Rental cheque fraud', 'Landlord cashes post-dated cheque before tenancy is registered; vanishes. Always sign Ejari first; use trusted brokers (Betterhomes, Allsopp & Allsopp); never pay cash.'],
    ['Gold souk fake merchandise', 'Deira gold souk has occasional fakes despite regulation. Buy only from DMCC/DGCX-certified retailers with hallmarks + receipts.'],
    ['Fake freezone agents', 'WhatsApp "licence agents" charging AED 25-40k for a licence that costs AED 9-15k direct. Go direct to IFZA, Meydan, DMCC, or SHAMS portals.'],
    ['Unlicensed driving services', 'Non-RTA black cabs quote double fares and drop you short. Use Careem/Uber/RTA Hala.'],
    ['"Friendly" nightlife card-swap scams', 'Strangers at Marina/JBR pitch a "good bar", lead to inflated tabs and force payment. Stick to Timeout-verified venues.'],
    ['Fake traffic-fine SMS', 'SMS claiming overdue RTA fines with a link to "pay". RTA never sends payment links; verify only on official app.']
  ],
  amsterdam: [
    ['Bike-rental "damage" scams', 'Operator claims pre-existing damage at return. Use MacBike or Yellow Bike with itemised rental contracts; photograph the bike at pickup.'],
    ['Fake "universal" metro ticket touts', 'Street sellers offer "valid all-network" passes near Centraal. Only buy GVB/OV-chipkaart at machines or in app.'],
    ['Red Light District pickpockets', 'Professional crews operate around Warmoesstraat + Damrak. Front pockets only; no wallets in back.'],
    ['Rogue mortgage / BSN scam ads', 'Facebook offers to "fast-track BSN registration" for EUR 500-1000. Only the gemeente issues a BSN; never pay a third party.'],
    ['Deposit-return sabotage in private sublets', 'Airbnb-style sublets sometimes withhold 1-month deposit citing fabricated damage. Use licensed agencies (Pararius, Funda); photograph inventory at check-in.'],
    ['Cafe "coffeeshop" drug-dealer hustlers', 'Unlicensed dealers near Leidseplein sell cut/adulterated product. Only licensed coffeeshops with the green-and-white symbol.']
  ],
  bali: [
    ['Scooter rental "scratch" scam', 'Renter demands IDR 2-5M for pre-existing damage. Film 360-degree video at pickup, never leave the passport -- leave a copy.'],
    ['ATM card skimming in Kuta/Legian', 'Indonesian ATM skimmers are still active 2026. Use bank-branch ATMs only (BCA, Mandiri) during business hours.'],
    ['Bali visa agent overcharging', 'B211A "6-month" visa via street agents charging USD 600-900 when official is USD 150-250. Use established agencies with public reviews (ChannelOne, Bali Solve).'],
    ['"Free" driving tour / taxi commission loops', 'Driver insists on "quick stop" at silver, batik, coffee plantation -- earns commission on your forced purchases. Agree itinerary in writing; refuse detours.'],
    ['Customs kickbacks at DPS arrival', 'Occasionally an "import fee" is demanded on laptop or drone. Real fees are published; ask for a formal receipt or request supervisor.'],
    ['Land-lease fraud via Nominee', 'Foreigners "buying" land via Indonesian nominee is illegal and unenforceable. Use leasehold (Hak Sewa) via a proper notaris (PPAT) only.']
  ],
  barcelona: [
    ['Ramblas pickpocket crews', 'Coordinated teams operate Ramblas, Plaza Catalunya, metro L3. Keep nothing in back pockets; use zipped crossbody.'],
    ['"Bird poop" distraction scam', 'Stranger points out fake droppings on your shirt while an accomplice lifts your bag. Walk away from anyone offering to "help clean".'],
    ['Fake police demanding ID check', 'Unmarked "officers" ask to inspect your wallet for counterfeit bills. Real Mossos d\'Esquadra never inspect cash; demand to walk together to a station.'],
    ['Squatters (okupas) moving into empty rentals', 'Unoccupied apartments held by foreign landlords can be occupied by organised squatter groups, taking 12-18 months to evict legally. Always use occupied-landlord agencies.'],
    ['Agency "NIE services" overcharging', 'Third-party agents charge EUR 300-500 for a NIE you can book yourself free at Cita Previa. Use foro expatriados or DNV-focused lawyers only when genuinely stuck.'],
    ['Rental "phantom listing" fraud', 'Too-good-to-be-true Idealista listings from owners "abroad" requesting wire transfer without viewing. Never transfer before physical viewing + signed lease.']
  ],
  berlin: [
    ['Burgeramt "Express" scams', 'Third-party sites claim to offer paid Anmeldung appointments. Official bookings are free at service.berlin.de; never pay.'],
    ['Roommate deposit-runaway', 'Zwischenmiete (sublet) via Facebook or eBay Kleinanzeigen where "sub-landlord" isn\'t the registered tenant. Only sign with proof of Hauptmieter consent + direct bank transfer, no cash.'],
    ['Fake Deutsche Bahn ticket inspectors', 'Uniformed impostors on U-Bahn demand EUR 60 cash "fine". Real BVG inspectors take bank or mailed invoice -- never cash on the spot.'],
    ['Gorlitzer / Kottbusser Tor drug-dealer hustles', 'Street dealers sell cut product to tourists; police are proactive on buyer prosecution. Avoid transactions outright.'],
    ['WG-Gesucht "pay deposit to see flat"', 'Scammers list phantom flats and demand EUR 500 "before viewing". Never pay before a physical visit with IDed landlord.'],
    ['Fake Schufa credit check', 'Third-parties charge EUR 50 for a Schufa report that\'s free direct from schufa.de/selbstauskunft. Always use the .de source.']
  ],
  'chiang-mai': [
    ['Scooter passport deposit', 'Rental shops demand your original passport. Refuse -- offer a photocopy or THB 3-5k cash deposit instead. Lost/damaged passports without ID halt every subsequent step.'],
    ['Songthaew flat-rate overcharge', 'Red songthaew drivers quote THB 150+ for a THB 40 shared ride. Agree fare upfront or use Grab.'],
    ['Fake ED-visa schools', 'Unaccredited "Thai language schools" sell ED visas without real classes -- crackdowns cancel visa mid-stay. Use only MOE-accredited schools (AUA, Payap).'],
    ['Doi Suthep "closed" taxi scam', 'Driver claims the temple closes early, offers alternative commission-earning route. Temple is open 6am-6pm; verify on Google.'],
    ['Fake tour-agency ticket fraud', 'Night Bazaar booths selling cheap day-trips that don\'t exist. Book via guesthouse or verified OTA (Klook, GetYourGuide).'],
    ['Pollution season Airbnb bait-and-switch', 'Listings hide burning-season photos. Always check AQI archives (aqicn.org) Jan-Apr before prepaying a multi-month stay.']
  ],
  medellin: [
    ['"Escopolamina" (devil\'s breath) drugging', 'Dates, bar acquaintances, or unlicensed taxi drivers using burundanga to rob. Never leave drinks unattended; app-rides only; avoid strangers\' drinks/food.'],
    ['Unlicensed taxis at JMC airport', 'Approach only the authorised white taxi queue or Uber/Didi pickup zone. Unmarked cars routinely overcharge 4-6x or route to ATMs.'],
    ['Parque Lleras pickpocketing + phone snatching', 'Motorbike-based snatchers operate at 2am peak. Use Uber/Didi for the 200m from club to hotel; no phone in hand on the street.'],
    ['Fake Nomada-Digital-Visa agents', 'WhatsApp "agents" charging USD 500+ for a visa filed free at cancilleria.gov.co. Use only accredited lawyers.'],
    ['Rental deposit withholding', 'Owners cite fabricated damages to keep 2-month deposit. Use reputable brokers (La Haus, Finca Raiz) + itemised inventory photos.'],
    ['"Free" tourist tour detours', 'Free walking tour guides sometimes steer to commission shops. Tip normal (COP 30-50k); no obligation to buy.']
  ],
  paris: [
    ['Gold ring / petition scams near Sacre Coeur', 'Woman "finds" a gold ring and insists you take it, then demands payment. Walk away without engaging.'],
    ['Metro pickpocket crews on Line 1 and RER B', 'Gare du Nord to Chatelet is the highest-theft corridor. Keep bags in front, never back pockets.'],
    ['Fake taxi-tout at CDG Roissypole', 'Unlicensed drivers quote EUR 80+ flat. Real taxi-parisien fares are zone-regulated (EUR 55 to Left Bank, EUR 50 to Right Bank).'],
    ['Airbnb "phantom" listings', 'Scam listings demand wire transfer outside platform. Always pay via Airbnb/Booking platform until you have physical keys.'],
    ['"Caution" deposit overcharges in long-term rentals', 'Private landlords demand 2-3 month deposit (legal is 1 month for empty, 2 for furnished). Know your rights: loi ALUR.'],
    ['Fake CAF / Pole Emploi SMS', 'SMS claiming missing housing-aid payments with a link. Official platforms never SMS payment links; log in via caf.fr directly.']
  ],
  prague: [
    ['Exchange-booth rip-offs', 'Old Town "0% commission" booths display tourist rates 20-30% below market. Use ATMs or the major banks (Komercni, CSOB) exclusively.'],
    ['Fake taxi flat-fares', 'Unlicensed drivers at airport or Old Town Square quote CZK 1000-1500 for CZK 400-600 trips. Use AAA Taxi or Liftago app only.'],
    ['Nightclub bill inflation', 'Some Old Town bars add phantom items to bills targeting tourists. Count drinks; refuse "service fee" not on menu.'],
    ['"Drink for a drink" hustle in Nove Mesto', 'Women approach male tourists asking for "just one drink" at a scam bar with EUR 200+ tabs. Avoid invitations from strangers.'],
    ['Foreign Police queue-skipping agents', 'Middlemen at OAMP office sell fake "priority slots". Free appointments at frs.gov.cz only.'],
    ['Fake "period" house rentals', 'Old Town Airbnbs sometimes illegal (no hotel licence). Check the apartment has a zivnost certificate or use registered operators (Booking verified).']
  ],
  tokyo: [
    ['Roppongi and Kabukicho izakaya touts', 'Men in suits pull foreigners into "discount" bars with JPY 50,000+ bills enforced by staff. Never follow a street tout; use verified Google Maps listings.'],
    ['Unlicensed "Shinjuku girls bar" touts', 'Lead to hidden table charges and forced drinks with police escorts. Walk around anyone offering "best bar, very cheap".'],
    ['Fake real-estate guarantor (hoshonin) services', 'Tokyo rentals require guarantor company; some "cheap" providers default, losing your key-money. Use Plaza Homes, Ken Corp, Leopalace only.'],
    ['Ghost gyoza / okonomiyaki flyer mills', 'Menu at door differs from billed total; "otoshi" mandatory side dish hidden on English menu. Ask "otoshi wa?" before sitting.'],
    ['JPY scams via non-official ATMs', 'Independent kiosk ATMs charge JPY 1,000+ per withdrawal and occasionally skim. Use Seven Bank, Japan Post, or AEON ATMs only.'],
    ['Fake My Number notification mail', 'Phishing letters claiming My Number correction + EUR-prepaid-card payment. Real Kojin Bango Center never SMS or email; only municipal office.']
  ]
};

// --------------------------------------------------------------------------
// CITY_VISAS -- 2-page Visa Deep-Dive per city. ASCII-only.
// Rendered as Appendix C. Each entry: { primary, secondary[], costs, pitfalls }
// --------------------------------------------------------------------------
export const CITY_VISAS = {
  bangkok: {
    primary: {
      name: 'DTV -- Destination Thailand Visa',
      intro: 'Launched July 2024, the DTV is Thailand\'s flagship remote-worker visa: 5-year multi-entry, 180-day stays per entry, indefinitely renewable. The most generous long-stay status in Southeast Asia in 2026.',
      eligibility: 'Remote employee, freelancer, or "soft power" applicant (Thai boxing training, Thai cooking course, medical treatment). Under 50 THB 500k (USD 14k) proof-of-funds OR employment contract with non-Thai employer.',
      processing: '4-8 weeks at a Thai embassy abroad (Vientiane, Savannakhet, Ho Chi Minh, and London are fastest). E-visa system live 2025.',
      cost: 'Government fee: THB 10,000 (USD 280). Via a reputable agent: USD 500-900 all-in.',
      stay: 'Each entry grants 180 days. Extend in-country once per entry for another 180 (THB 1,900). After 365 days you must exit and re-enter.',
      perks: 'Multi-entry status means no visa runs; brings dependents (spouse + children under 20); work permitted only for non-Thai employers.'
    },
    secondary: [
      ['LTR -- Long-Term Resident', '10-year visa for high-earners (USD 80k income or USD 1M assets). 17% flat tax cap for skilled professionals. Higher bar but superior status.'],
      ['Non-ED (Education)', 'Thai language or Muay Thai school visa, 1-year with in-country extensions. Tighter oversight post-2024 crackdowns on fake schools; only MOE-accredited programmes are safe.'],
      ['Retirement O-A / O-X', 'Age 50+, THB 800k bank deposit OR monthly pension THB 65k. 1-year renewable (O-A) or 10-year (O-X with THB 3M deposit).']
    ],
    pitfalls: [
      'Tax residency triggers at 180+ days/year in Thailand (2024 Royal Decree taxes foreign-sourced income remitted to Thailand). DTV holders staying full 180 each entry may become tax-resident.',
      'DTV does NOT permit employment with a Thai entity -- you need a Thai work permit (non-B visa).',
      'Opening a Thai bank account with DTV alone is inconsistent; some branches refuse without work permit. Plan 2-3 attempts across KBank / Bangkok Bank branches.',
      'Border runs on tourist exempt returns are being tracked; 3+ tourist entries in 12 months triggers refusal. DTV eliminates this but cannot be stacked with tourist entries mid-cycle.'
    ]
  },
  'mexico-city': {
    primary: {
      name: 'Temporary Resident Visa (Visa de Residente Temporal)',
      intro: 'Mexico\'s default long-stay pathway for remote workers. Issued first at a Mexican consulate abroad, then converted to a plastic residence card (tarjeta) at INM in Mexico within 30 days of entry.',
      eligibility: 'Income route: USD 4,350/month net for last 6 months (2026 thresholds, roughly 300x minimum wage). Savings route: USD 72,500+ balance for last 12 months. Family-unity and investment paths also available.',
      processing: '2-6 weeks at consulate abroad; 3-5 weeks for INM card in-country.',
      cost: 'Consulate fee ~USD 51. INM card issuance ~MXN 6,800 (USD 390). Local immigration lawyer (optional) MXN 15-25k.',
      stay: '1 year initially, renewable for 1/2/3-year increments up to 4 total years. At year 4, convert to Permanent Resident.',
      perks: 'Full legal stay + CURP + RFC eligibility. Temporary residents can work in Mexico for any employer once they apply to INM for work permission.'
    },
    secondary: [
      ['Permanent Resident (Residente Permanente)', 'Direct path: USD 7,300/month income for 6 months OR USD 290k savings for 12 months. No time limit, work permitted, path to citizenship after 5 years.'],
      ['Tourist Visa (FMM)', '180 days on arrival, non-renewable, no work. Still heavily used by nomads doing border-runs but 2023+ enforcement has tightened; 3 consecutive FMMs trigger refusal.'],
      ['Digital Nomad Visa (pending)', 'Legislation proposed 2024, not yet in force as of 2026. Temporary Resident remains the practical route.']
    ],
    pitfalls: [
      'Cannot start the process inside Mexico -- you MUST apply at a Mexican consulate abroad first (common consulates: San Diego, Laredo, Guatemala, Belize City, Paris).',
      'The "rentistas" route requires bank statements with consistent balance -- single-month spikes are rejected.',
      'Tax residency triggers at 183+ days/year. Non-resident withholding on Mexico-source income is up to 35%; plan RFC registration early.',
      'Do NOT miss the 30-day INM canje window after entering -- the consular stamp expires and you lose the visa. Book the INM appointment before you fly in.'
    ]
  },
  dubai: {
    primary: {
      name: 'Dubai Golden Visa (10-year)',
      intro: 'Long-term residence permit for investors, entrepreneurs, skilled professionals, specialised talent, and high-achieving students. The flagship residency pathway with no sponsor required.',
      eligibility: 'Professional route: monthly salary AED 30,000+ plus university degree. Investor route: AED 2M real estate OR AED 2M public-fund/investment. Specialised-talent: accredited doctors, scientists, creatives.',
      processing: '2-8 weeks via ICP (Federal Authority for Identity) or GDRFA Dubai. Can be nominated by employer or self-sponsored.',
      cost: 'Government fees AED 2,800-3,800 (USD 760-1,035) for 10 years. Medical + Emirates ID additional AED 1,000-1,500. Medical insurance mandatory (AED 3-10k/year).',
      stay: '10 years, renewable. Unique benefit: unlimited time OUTSIDE UAE without losing residency (standard Dubai residence cards cancel after 180 days outside).',
      perks: 'Self-sponsored, sponsor dependents without salary threshold, no UAE employer required, eligibility for UAE banking, driving licence, mortgage.'
    },
    secondary: [
      ['Freezone Company Licence + Residence Visa', 'IFZA, Meydan, SHAMS, DMCC: set up 1-person company (AED 12-25k/year) bundled with 2-3 year investor visa. Most common remote-worker path.'],
      ['Remote Work Visa (Virtual Working Programme)', '1-year visa, USD 3,500/month income from non-UAE employer, proof of 1 year of employment. Tax residency + Emirates ID included.'],
      ['Employment Visa', 'Sponsor-tied; 2-3 year residence issued by employer. Standard route for corporate relocators.']
    ],
    pitfalls: [
      'The 180-day-outside-UAE rule applies to ALL non-Golden residence visas; missing this cancels your visa automatically.',
      'Freezone "cheap" companies (AED 5-8k) often exclude visa eligibility -- check the package carefully.',
      'Emirates ID issuance delays can push bank-account setup 4-6 weeks. Bring 3+ months of runway in Wise/HSBC.',
      'Tax residency requires 183+ days AND Emirates ID; some banks demand BOTH before opening accounts. CRS reporting applies.'
    ]
  },
  amsterdam: {
    primary: {
      name: 'DAFT (Dutch-American Friendship Treaty) -- US citizens only',
      intro: 'A bilateral treaty dating to 1956 giving US entrepreneurs an easier path to Dutch residency than any other non-EU nationality. Requires setting up a Dutch ZZP (sole proprietorship) or BV (limited company).',
      eligibility: 'US citizenship + EUR 4,500 invested into a Dutch business bank account + business plan. No minimum income.',
      processing: '6-10 weeks at IND (Immigration + Naturalisation Service). Fast-track appointments available in Amsterdam and Rotterdam.',
      cost: 'IND fees EUR 1,540 (2026). KvK (Chamber of Commerce) registration EUR 80. Accountant setup EUR 500-1,500. Total first-year: EUR 2,000-4,000.',
      stay: '2 years initially, renewable for 5 years, then path to permanent residence after 5 years of legal stay.',
      perks: 'Full access to Dutch healthcare, banking, BSN, DigiD. Dependents can apply. Dutch citizenship after 5 years if fluent in Dutch (A2/B1).'
    },
    secondary: [
      ['Highly Skilled Migrant (Kennismigrant)', 'Employer-sponsored; salary thresholds 2026: EUR 5,688/month (30+), EUR 4,171/month (under 30), EUR 2,989/month (post-grad route). 30% ruling often available.'],
      ['Orientation Year (Zoekjaar)', '1-year job-search post-Dutch-masters; converts easily to Highly Skilled Migrant once hired. Only works if you graduated from a Dutch or top-100 global university.'],
      ['Startup Visa', '1-year entrepreneur visa, requires accreditation from a recognised Dutch facilitator (Rockstart, YES!Delft) + self-funding.']
    ],
    pitfalls: [
      'DAFT is US-only; no other nationality qualifies. Dual-nationals with US passport can use it.',
      'BSN appointments in Amsterdam are backlogged 4-8 weeks 2026. Some new arrivals register in satellite cities (Almere, Haarlem) first to jump the queue.',
      'Dutch taxes are steep: income tax up to 49.5% on >EUR 75k; plan the 30% ruling (EUR 0 tax on first 30% of salary for skilled migrants) as employee.',
      'The 30% ruling is being phased down 2024-2027: from 30% → 20% → 10% over 5 years. DAFT self-employed do NOT qualify for 30% ruling.'
    ]
  },
  bali: {
    primary: {
      name: 'E33G -- Indonesia Remote Worker Visa',
      intro: 'Launched 2024 as Indonesia\'s first real long-stay visa for remote professionals. Official successor to the patchwork B211A system.',
      eligibility: 'Employment with a non-Indonesian company + USD 60,000/year minimum income + USD 2,000 proof of funds + passport >18 months validity.',
      processing: '2-4 weeks via Indonesian e-visa portal (evisa.imigrasi.go.id). Can apply from abroad OR convert from B211A in-country.',
      cost: 'Government fee IDR 12M (USD 770). Agent-assisted IDR 18-25M (USD 1,150-1,600) with health-cert + bank-proof documentation included.',
      stay: '1 year initially, renewable for 1 more year (2 years max without tax residency triggers). Multiple-entry allowed.',
      perks: 'Legal remote work, spouse + children dependents, Indonesian tax residency exemption for the first 2 years on foreign income.'
    },
    secondary: [
      ['B211A Visit Visa (Socio-Cultural)', 'Legacy 60-day + 2x60-day extensions (180 days total). Still widely used; requires Indonesian sponsor. Agent cost USD 150-250.'],
      ['KITAS (Investor / Employment)', 'Limited-stay permit tied to Indonesian PT PMA company (USD 700k+ capital) OR employment. 1-2 year status.'],
      ['Second Home Visa', 'Launched 2022 but rarely used; IDR 2B (USD 130k) deposit in an Indonesian bank. Premium path with 5-10 year status.']
    ],
    pitfalls: [
      'E33G does NOT grant a KITAS -- cannot open local bank accounts or sign long leases in your name easily. Wise + passport copy stays the practical stack.',
      'E33G tax exemption only applies if you remain tax non-resident; staying 183+ days/year triggers Indonesian tax on worldwide income after the grace period.',
      'Immigration raids on "digital nomad" coworking spaces in 2023-2024 targeted B211A holders doing onshore work; E33G clarifies the status but enforcement still evolves.',
      'Do not confuse E33G with KITAS-based visas sold by agents as "Digital Nomad KITAS" -- many are repackaged B211A at inflated prices.'
    ]
  },
  barcelona: {
    primary: {
      name: 'DNV -- Spain Digital Nomad Visa',
      intro: 'Launched January 2023 under the Spanish Startup Law. A dedicated 1-year visa for non-EU remote workers employed by non-Spanish companies, extendable to 5 years total.',
      eligibility: 'Employment with non-Spanish company (max 20% Spain-source revenue); EUR 2,760/month income (200% of Spanish minimum wage, 2026); university degree OR 3 years experience; health insurance; clean criminal record.',
      processing: '20-45 days at a Spanish consulate abroad OR UGE-CE (central-unit) if already legally in Spain. Silencio positivo: no response in 20 working days = approved.',
      cost: 'Consulate fees EUR 75. TIE card issuance EUR 16. Local tax lawyer EUR 500-1,500 for the Beckham-Law tax ruling application.',
      stay: '1 year initially from consulate; then 3-year renewals. Permanent residency after 5 years.',
      perks: 'Beckham-Law special tax regime: 24% flat rate on first EUR 600k income for 6 years (vs 47% standard top rate). Dependents allowed.'
    },
    secondary: [
      ['Non-Lucrative Visa (Visado No Lucrativo)', 'For passive-income earners or retirees; EUR 2,400/month passive income required (~400% of Spanish min wage); NO working allowed, even remote. Not suitable for active workers.'],
      ['Entrepreneur Visa', 'Business plan + ENISA approval. Viable for founders, EUR 100k+ recommended capital.'],
      ['Student Visa + Work Authorisation', 'Study at a Spanish master\'s + 30h/week work permit. Popular route for grad-student nomads.']
    ],
    pitfalls: [
      'Beckham-Law tax regime must be claimed within 6 months of becoming Spanish tax-resident -- miss the window and you default to the 47% top rate.',
      'The 20% cap on Spain-source income is strict; Spanish clients must stay under 20% of revenue.',
      'Catalan regional surcharges (IRPF) apply; Barcelona residents face top marginal 50% outside Beckham-Law. Plan the regime from day 1.',
      'Consulate processing varies wildly: London 25 days, LA 45, Sydney 30+. Miami used to be fastest but backlog 2025.'
    ]
  },
  berlin: {
    primary: {
      name: 'Freiberufler / Selbstandig Visa (Freelance)',
      intro: 'Berlin\'s signature pathway: Section 21 of the German Residence Act lets freelancers in "liberal professions" (tech, design, journalism, translation, coaching, arts) self-sponsor a 3-year residence permit.',
      eligibility: 'Profession on the Katalogberufe liberal-professions list + 2-3 letters of intent from German clients + proof of funds (EUR 9,500+) + Berlin address + Anmeldung.',
      processing: '8-14 weeks at Auslanderbehorde Berlin (biggest bottleneck in Germany). Must apply BEFORE current visa expires.',
      cost: 'Residence permit EUR 100. Tax lawyer/consultant EUR 500-1,500 for initial Finanzamt registration.',
      stay: '3 years initially, renewable for 3 more, then permanent residence (Niederlassung) after 5 years of contributions.',
      perks: 'Self-sponsored, no employer needed, freedom to invoice any client globally, path to Blue Card -> PR -> citizenship in 6-8 years.'
    },
    secondary: [
      ['EU Blue Card', 'Employer-sponsored; 2026 threshold EUR 48,300/year (EUR 43,760 for shortage occupations). 4-year status, permanent residence after 33 months (21 with B1 German).'],
      ['Chancenkarte (Opportunity Card)', 'Launched June 2024. Points-based 1-year job-search visa for skilled workers from outside EU. Replaces the old Job Seeker Visa.'],
      ['Freelance -> Self-Employment (Section 21.1)', 'For "commercial" freelancers (e-commerce, shop owners); requires business plan + IHK chamber review + investment proof.']
    ],
    pitfalls: [
      'Anmeldung is the prerequisite for EVERYTHING else -- bank, tax ID, visa appointment. Berlin Burgeramt slots are released at random; use service.berlin.de refreshers or satellite districts (Spandau, Marzahn) as workarounds.',
      'Freiberufler renewal at year 3 requires 1-2 years of German tax filings and income proof -- plan to actually make money through the German invoicing structure, not just hold the visa.',
      'Public health insurance (GKV) is mandatory if freelance income <EUR 69k; premiums are 14-15% of income (minimum base ~EUR 270/mo). Private (PKV) is cheaper initially but harder to switch back.',
      'Berlin Auslanderbehorde is understaffed: book the appointment the day you get your Anmeldung.'
    ]
  },
  'chiang-mai': {
    primary: {
      name: 'DTV -- Destination Thailand Visa (same as Bangkok)',
      intro: 'Chiang Mai is inside Thailand -- same DTV applies (5-year multi-entry, 180-day stays). Most Chiang Mai nomads apply at the Vientiane (Laos) or Savannakhet consulates.',
      eligibility: 'Remote employee/freelancer + THB 500k proof-of-funds OR employment contract; OR soft-power applicant (Muay Thai, Thai cooking, medical treatment -- Chiang Mai has a major Muay Thai + medical scene).',
      processing: '4-8 weeks via Thai embassy abroad. CNX immigration (Promenada office) handles extensions and TM30.',
      cost: 'THB 10,000 government fee. Agent-assisted USD 500-900.',
      stay: '180 days per entry, in-country extension for another 180 (THB 1,900). After 365 days, exit and re-enter.',
      perks: 'Multi-entry; dependents allowed; work permitted for non-Thai employers only.'
    },
    secondary: [
      ['Non-ED (Language School)', 'Chiang Mai has several MOE-accredited schools (AUA, Payap extension, NES) offering Thai-language ED visas. 1-year with in-country renewals. Safer than Bangkok ED schools post-crackdown.'],
      ['LTR (Long-Term Resident)', 'Same as Bangkok: 10-year, USD 80k income OR USD 1M assets, 17% flat tax.'],
      ['Retirement O-A', 'Chiang Mai is the top Thai retirement destination. THB 800k deposit OR monthly pension THB 65k, age 50+.']
    ],
    pitfalls: [
      'Chiang Mai immigration (Promenada Mall) is generally faster + friendlier than Bangkok -- prefer CNX for renewals.',
      'Burning season (Feb-Apr) AQI 250-400 can force premature visa-runs or early exits; budget 2-3 months elsewhere annually.',
      'TM30 + 90-day reporting are strictly enforced in CNX -- miss and you face THB 2,000+ fines.',
      'Thai-language schools vary wildly in legitimacy; 2024 crackdowns revoked several. Stick to AUA, Payap, or government-listed providers.'
    ]
  },
  medellin: {
    primary: {
      name: 'Visa Nomada Digital (Visa V Type)',
      intro: 'Colombia\'s Digital Nomad Visa was launched October 2022 and is among the lowest-income-threshold nomad visas globally. Ideal pathway for Medellin.',
      eligibility: 'Remote employment or freelance income USD 684/month (3x Colombian minimum wage, 2026); non-Colombian employer; clean record; health insurance.',
      processing: '15-30 days via cancilleria.gov.co online portal. Can apply from Colombia or abroad.',
      cost: 'USD 52 study fee + USD 177 visa issuance = USD 229 total. Cheapest premium nomad visa in LATAM.',
      stay: '2 years maximum (not renewable). Must leave and reapply or convert to another visa type.',
      perks: 'Full remote-work legal stay, Cedula de Extranjeria eligibility, bank account access, drivers licence, path to Migrant Visa (M-Type) after 2 years of legal residence.'
    },
    secondary: [
      ['Migrant Visa (M-Type) -- Rentista', 'Passive-income USD 907/month (10x minimum wage), 3-year residence, path to permanent.'],
      ['M-Type Investor', 'USD 45,000+ real-estate investment (150x Colombian min wage); 3 years, path to PR.'],
      ['Tourist Stamp', '90 days + 90 extension (180 max/year). No work permitted; still used informally by many nomads but enforcement tightening.']
    ],
    pitfalls: [
      'Visa Nomada Digital is NOT renewable -- you must plan the transition to M-Type at month 18 or leave.',
      'Cedula de Extranjeria issuance requires in-country biometrics at Migracion Colombia -- build in 2-3 weeks of extra time post-arrival.',
      'Tax residency triggers at 183+ days/year; Colombian worldwide-income taxation applies after the second year.',
      'Security: Medellin has improved dramatically but certain scenarios (unvetted taxis, Parque Lleras late-night) remain higher-risk than Bangkok or Lisbon. DNV does not change this.'
    ]
  },
  paris: {
    primary: {
      name: 'Passeport Talent -- Profession Liberale / Salarie Qualifie',
      intro: 'France\'s multi-category skilled-worker visa launched 2016, modernised 2024 (now "Passeport Talent - Chercheur d\'Emploi" for job seekers). Most common pathway for Paris remote workers.',
      eligibility: 'Highly skilled role: contract with French employer + salary EUR 43,243+/year (2026) OR master\'s degree + EUR 34,594+. Self-employed liberal professions also qualify with sustainability proof.',
      processing: '3-8 weeks at consulate abroad. OFII validation required within 3 months of arrival.',
      cost: 'Consulate fee EUR 99. OFII tax EUR 225. Titre de Sejour card EUR 225 (renewal). Total EUR 549 first year.',
      stay: '4 years initially, renewable. Path to Carte de Resident (10 years) at year 5.',
      perks: 'Family brought as "passeport talent famille" without labour-market test, spouse can work, children enrolled in free public school.'
    },
    secondary: [
      ['Visa VLS-TS Salarie', 'Standard employee visa; 1 year, renewable. For roles below Passeport Talent salary threshold.'],
      ['Profession Liberale (Freelance)', 'Long-stay visa for self-employed liberal professions -- consultants, designers, writers. Requires business plan + sustainability proof.'],
      ['Visa Etudiant + APS', 'Post-study "APS" (Authorisation Provisoire de Sejour) gives 2 years for jobhunt or first employment. Common nomad route via French masters.']
    ],
    pitfalls: [
      'OFII validation within 3 months is NON-negotiable -- miss and your visa is void. Book online at administration-etrangers-en-france.interieur.gouv.fr.',
      'French tax residency triggers at 183+ days/year. Worldwide income + wealth tax (IFI) above EUR 1.3M real estate.',
      '"Impatriate" tax regime (first 5 years): 30% tax break on salary and 50% on foreign-source income. Must be claimed year 1.',
      'Paris apartment rent demands 3-5x rent in monthly income proof; without French payslips, block 12 months rent upfront is standard demand.'
    ]
  },
  prague: {
    primary: {
      name: 'Zivnostensky List (Freelance / Trade Licence)',
      intro: 'Czech Republic\'s "Zivno" is the de-facto nomad route: a trade licence + long-stay visa + residence permit combined. Popular because of flat 15% income tax (effectively 6-9% after expenses) and reciprocal treaties.',
      eligibility: 'Non-EU: trade-licence-eligible profession (IT, design, consulting, translation); bank balance CZK 124,500+ (USD 5,500); clean record; health insurance; accommodation proof.',
      processing: '90-120 days at Czech embassy abroad. Schengen consulates in Manila, Bangkok, Ho Chi Minh, LA are commonly used.',
      cost: 'Visa fee EUR 100. Zivnostensky List issuance CZK 1,000. Residence card CZK 2,500. Accountant CZK 8,000-20,000/year.',
      stay: '1 year initially, then 2-year renewals. Permanent residence after 5 years.',
      perks: 'Flat 15% tax (23% over CZK 1.6M), 60% lump-sum expenses allowed (effective 6% tax rate), EU Schengen mobility, cheap healthcare.'
    },
    secondary: [
      ['EU Blue Card', 'Employment-based, salary threshold CZK 57,081/month (2026). 2-year status.'],
      ['Employee Card (zamestnanecka karta)', 'Standard employer-sponsored visa; 2 years.'],
      ['Student Visa + Post-study Work', '9-month post-graduation job-hunt; converts to work visa on hire.']
    ],
    pitfalls: [
      'Zivno visa cannot be applied for INSIDE Czech Republic -- must apply at an embassy abroad, 90-120 days.',
      'The 60% lump-sum expense deduction is per-trade and capped at CZK 2M of income; plan tax structure with a Czech accountant BEFORE year 1.',
      'Foreign Police registration within 3 days of arrival is non-negotiable; OAMP office in Prague is backlogged.',
      'Public health insurance (VZP) is NOT automatic for Zivno holders -- you must register + pay voluntarily, or use commercial (Slavia, PVZP) at CZK 2,200+/month.'
    ]
  },
  tokyo: {
    primary: {
      name: 'HSP -- Highly Skilled Professional Visa (Points-Based)',
      intro: 'Japan\'s top-tier skilled-worker visa. Points-based system rewarding salary, education, age, Japanese-language ability. 70+ points unlocks 5-year status and fast-track permanent residence in 1-3 years.',
      eligibility: '70+ points from: salary (JPY 10M+ = 40pts), masters degree (20pts), PhD (30pts), Japanese N1 (15pts), age <30 (15pts), recognised research. Many tech professionals hit 70+ naturally.',
      processing: '1-3 months via Japanese embassy abroad OR in-country conversion from existing work visa. Certificate of Eligibility (CoE) is the bottleneck.',
      cost: 'CoE issuance free. Visa issuance JPY 6,000 (USD 40). Ward office registration free.',
      stay: '5 years initially; PR eligibility at 1 year (80+ points) or 3 years (70-79 points) -- vs 10 years for standard work visas.',
      perks: 'Spouse can work unrestricted, parents sponsorship, fast-track PR, multi-entry with unlimited exits, hire domestic help.'
    },
    secondary: [
      ['Engineer / Specialist in Humanities Visa', 'Standard 1/3/5-year work visa for degree holders + related employer role. Most corporate hires.'],
      ['Business Manager Visa', 'For founders: JPY 5M+ capital, office lease, 2+ employees OR 1 employee + business plan. 1-year renewable.'],
      ['Digital Nomad Visa', 'Launched March 2024. 6 months max, non-renewable, JPY 10M annual income. Too short for real settlement but useful for trial stays.']
    ],
    pitfalls: [
      'Tokyo apartment gatekeeping: many buildings refuse foreigners. HSP status helps, but guarantor-company fees (0.5-1 month) are near-universal.',
      'Tax residency at 183+ days/year -- Japan taxes worldwide income at up to 45% + 10% local resident tax. HSP + spouse status does not change this.',
      'Points recalculation: if salary drops below threshold, HSP status can be downgraded at renewal.',
      'My Number + Residence Card + Health Insurance are three separate bureaucratic steps at the ward office -- plan 1-2 ward office trips in week 2.'
    ]
  }
};

// --------------------------------------------------------------------------
// NEIGHBORHOOD_PHOTOS -- Wikipedia article names resolved at build time
// to thumbnail URLs via en.wikipedia.org/api/rest_v1/page/summary.
// Order matches neighborhoods[] per city. Caption is the display label.
// --------------------------------------------------------------------------
export const NEIGHBORHOOD_PHOTOS = {
  bangkok: [
    { article: 'Sukhumvit_Road',                 caption: 'Sukhumvit corridor, Bangkok' },
    { article: 'Silom',                           caption: 'Silom business district' },
    { article: 'Thong_Lo',                        caption: 'Thonglor / Thong Lo' },
    { article: 'Ari,_Bangkok',                    caption: 'Ari neighbourhood' },
    { article: 'Phrom_Phong_BTS_station',         caption: 'Phrom Phong' }
  ],
  'mexico-city': [
    { article: 'Roma,_Mexico_City',               caption: 'Colonia Roma' },
    { article: 'Condesa',                         caption: 'Condesa' },
    { article: 'Polanco,_Mexico_City',            caption: 'Polanco' },
    { article: 'Coyoac%C3%A1n',                   caption: 'Coyoacan' },
    { article: 'Santa_Fe,_Mexico_City',           caption: 'Santa Fe business district' }
  ],
  dubai: [
    { article: 'Dubai_Marina',                    caption: 'Dubai Marina' },
    { article: 'Downtown_Dubai',                  caption: 'Downtown Dubai' },
    { article: 'Jumeirah_Lake_Towers',            caption: 'Jumeirah Lake Towers (JLT)' },
    { article: 'Business_Bay',                    caption: 'Business Bay' },
    { article: 'Deira',                           caption: 'Deira (Old Dubai)' }
  ],
  amsterdam: [
    { article: 'Jordaan',                         caption: 'Jordaan' },
    { article: 'De_Pijp',                         caption: 'De Pijp' },
    { article: 'Oud-West,_Amsterdam',             caption: 'Oud-West' },
    { article: 'Amsterdam-Noord',                 caption: 'Amsterdam-Noord' },
    { article: 'Amsterdam-Oost',                  caption: 'Amsterdam-Oost' }
  ],
  bali: [
    { article: 'Canggu',                          caption: 'Canggu' },
    { article: 'Ubud',                            caption: 'Ubud' },
    { article: 'Seminyak',                        caption: 'Seminyak' },
    { article: 'Uluwatu',                         caption: 'Uluwatu / Bukit Peninsula' },
    { article: 'Sanur',                           caption: 'Sanur' }
  ],
  barcelona: [
    { article: 'Eixample',                        caption: 'Eixample' },
    { article: 'Gr%C3%A0cia',                     caption: 'Gracia' },
    { article: 'Barrio_G%C3%B3tico',              caption: 'Gothic Quarter' },
    { article: 'Poblenou',                        caption: 'Poblenou (22@ tech district)' },
    { article: 'Sarri%C3%A0-Sant_Gervasi',        caption: 'Sarria-Sant Gervasi' }
  ],
  berlin: [
    { article: 'Mitte',                           caption: 'Mitte' },
    { article: 'Kreuzberg',                       caption: 'Kreuzberg' },
    { article: 'Prenzlauer_Berg',                 caption: 'Prenzlauer Berg' },
    { article: 'Friedrichshain',                  caption: 'Friedrichshain' },
    { article: 'Neuk%C3%B6lln',                   caption: 'Neukolln' }
  ],
  'chiang-mai': [
    { article: 'Chiang_Mai_University',           caption: 'Nimman / Chiang Mai University area' },
    { article: 'Tha_Phae_Gate',                   caption: 'Old City / Tha Phae Gate' },
    { article: 'Wat_Phra_Singh',                  caption: 'Santitham / Wat Phra Singh' },
    { article: 'Chang_Khlan',                     caption: 'Chang Khlan / Night Bazaar' },
    { article: 'Hang_Dong_district',              caption: 'Hang Dong (suburban)' }
  ],
  medellin: [
    { article: 'El_Poblado,_Medell%C3%ADn',       caption: 'El Poblado' },
    { article: 'Laureles-Estadio',                caption: 'Laureles-Estadio' },
    { article: 'Envigado',                        caption: 'Envigado' },
    { article: 'Sabaneta,_Antioquia',             caption: 'Sabaneta' },
    { article: 'Itag%C3%BCi',                     caption: 'Itagui (greater Medellin metro)' }
  ],
  paris: [
    { article: 'Le_Marais',                       caption: 'Le Marais' },
    { article: '11th_arrondissement_of_Paris',    caption: '11e arrondissement' },
    { article: 'Canal_Saint-Martin',              caption: 'Canal Saint-Martin / 10e' },
    { article: 'Batignolles',                     caption: 'Batignolles / 17e' },
    { article: 'Belleville,_Paris',               caption: 'Belleville / 20e' }
  ],
  prague: [
    { article: 'Karl%C3%ADn_(Prague)',            caption: 'Karlin' },
    { article: 'Vinohrady',                       caption: 'Vinohrady' },
    { article: 'Hole%C5%A1ovice',                 caption: 'Holesovice' },
    { article: 'Sm%C3%ADchov',                    caption: 'Smichov' },
    { article: 'Old_Town,_Prague',                caption: 'Old Town (Stare Mesto)' }
  ],
  tokyo: [
    { article: 'Shibuya',                         caption: 'Shibuya' },
    { article: 'Shinjuku',                        caption: 'Shinjuku' },
    { article: 'Minato,_Tokyo',                   caption: 'Minato (Roppongi / Azabu)' },
    { article: 'Setagaya',                        caption: 'Setagaya' },
    { article: 'Meguro',                          caption: 'Meguro / Naka-Meguro' }
  ]
};
