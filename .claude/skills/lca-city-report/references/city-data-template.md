# City Data Template — TripCost Report

This file defines the complete schema for the `CITY` Python dict that drives the PDF generator.
**Every key listed here is required.** Use `"N/A"` for genuinely unknown fields.

---

## Full Schema with Annotations

```python
CITY = {

    # ── IDENTITY ─────────────────────────────────────────────────────────────
    "name":             "Bangkok",          # City display name
    "country":          "Thailand",         # Country full name
    "year":             "2026",             # Report year
    "currency_sym":     "$",                # Currency symbol used throughout report
    "currency_code":    "USD",              # 3-letter ISO code

    # ── QUICK FACTS ──────────────────────────────────────────────────────────
    "population_city":  "≈ 10.5 million",   # City proper population
    "population_metro": "≈ 17 million",     # Metro area population
    "official_lang":    "Thai",             # Official language
    "english_level":    "Moderate",         # Low / Moderate / High / Very High
    "timezone":         "ICT (UTC+7)",      # Timezone name and UTC offset
    "climate_type":     "Tropical (Aw)",    # Köppen classification + descriptor
    "sunshine_hours":   "≈ 2,500 hrs/yr",  # Annual sunshine hours
    "safety_index":     "47.2 / 100",       # Numbeo Safety Index (if available)
    "visa_options":     "LTR Visa, METV, Elite Visa",  # Key visa types
    "healthcare":       "Public (30B scheme) + Private",
    "avg_local_salary": "$500 – $700 / month",  # Net median local salary

    # ── RENT (monthly, report currency) ──────────────────────────────────────
    "rent_studio_centre":   "$400 – $700",
    "rent_studio_outside":  "$250 – $450",
    "rent_1br_centre":      "$600 – $1,000",
    "rent_1br_outside":     "$350 – $600",
    "rent_2br_centre":      "$900 – $1,600",
    "rent_2br_outside":     "$550 – $900",
    "rent_3br_centre":      "$1,400 – $2,500",
    "rent_3br_outside":     "$800 – $1,400",
    "rent_coliving":        "$300 – $600",
    "rent_shortterm":       "$800 – $1,800",  # Furnished, 1 month

    # ── UTILITIES (monthly) ───────────────────────────────────────────────────
    "util_electricity":     "$30 – $70",
    "util_gas":             "$5 – $15",     # Use "Minimal (electric cooking common)" if N/A
    "util_water":           "$5 – $10",
    "util_condo_fee":       "$30 – $100",
    "util_total":           "$60 – $170",

    # ── INTERNET & MOBILE (monthly) ───────────────────────────────────────────
    "internet_speed":       "≈ 180 Mbps (avg download)",
    "internet_providers":   "AIS Fibre, TRUE Online, NT",
    "internet_cost":        "$15 – $25",
    "mobile_providers":     "AIS, DTAC, TRUE Move",
    "mobile_20gb":          "$8 – $15",
    "mobile_unlimited":     "$15 – $25",

    # ── FOOD (monthly unless noted) ───────────────────────────────────────────
    "grocery_solo_budget":  "$150 – $220",
    "grocery_solo_std":     "$220 – $320",
    "grocery_couple_std":   "$350 – $500",
    "grocery_shops":        "Tops, Big C, Lotus's, Gourmet Market",
    "dining_lunch_menu":    "$2 – $6",         # Local lunch / set menu
    "dining_midrange_2pax": "$20 – $45",       # Mid-range restaurant, 2 persons
    "dining_finedining":    "$60 – $120+",
    "dining_fastfood":      "$4 – $8",
    "dining_coffee":        "$1 – $3",
    "dining_beer":          "$1.50 – $4",
    "dining_wine_bottle":   "$8 – $20",        # Supermarket

    # ── TRANSPORT (monthly unless noted) ─────────────────────────────────────
    "transport_pass":       "$25 – $35",       # Monthly unlimited or equivalent
    "transport_pass_name":  "BTS / MRT monthly pass",
    "transport_rideshare_trip": "$3 – $8",     # 5km trip
    "transport_rideshare_month":"$60 – $120",
    "transport_petrol":     "$1.05 – $1.20 / litre",
    "transport_car_insurance":"$40 – $90",
    "transport_parking":    "$30 – $80",
    "transport_car_total":  "$250 – $500",
    "transport_bike":       "$10 – $20",       # Bike / e-scooter subscription or avg
    "transport_airport":    "$1.50 – $3",      # Airport rail or equivalent single ticket
    "transport_intercity":  "$10 – $30",       # Representative intercity trip

    # ── COWORKING & LIFESTYLE ─────────────────────────────────────────────────
    "cowork_hotdesk":       "$80 – $180",
    "cowork_dedicated":     "$180 – $350",
    "cowork_private":       "$350 – $700",
    "cowork_premium":       "$200 – $400",
    "cowork_premium_names": "Hubba, The Hive, Garage Society",
    "gym_chain":            "$20 – $45",
    "gym_boutique":         "$50 – $100",
    "entertainment_cinema": "$5 – $9",
    "entertainment_streaming":"$10 – $20",
    "entertainment_monthly":"$80 – $180",
    "health_insurance_basic":"$40 – $80",
    "health_insurance_intl":"$100 – $250",
    "school_annual":        "$8,000 – $20,000 / year",
    "school_monthly":       "$670 – $1,670",
    "school_examples":      "NIST, Shrewsbury, Bangkok Prep",

    # ── BUDGET PROFILES ───────────────────────────────────────────────────────
    # These are the 3 total monthly estimates
    "budget_nomad_low":     "$900",
    "budget_nomad_high":    "$1,300",
    "budget_std_low":       "$1,800",
    "budget_std_high":      "$2,600",
    "budget_premium_low":   "$5,500",
    "budget_premium_high":  "$9,000",

    # ── NEIGHBORHOODS (5 districts) ───────────────────────────────────────────
    # Format: list of 5 dicts
    "neighborhoods": [
        {
            "name":     "Sukhumvit",
            "type":     "Expat Hub / Commercial Spine",
            "rent_1br": "$700 – $1,100 / month",
            "rent_2br": "$1,100 – $1,800 / month",
            "vibe":     "Bangkok's primary expat corridor...",
            "pros":     [
                "Unparalleled BTS skytrain access along the full corridor",
                "Highest density of international restaurants, gyms, and medical clinics",
                "Vibrant nightlife and social scene; strong expat community networks",
                "Wide range of serviced apartments and modern condo stock",
            ],
            "cons":     [
                "Traffic congestion severe during peak hours; taxis often impractical",
                "Premium rents inflate costs compared to adjacent areas",
                "Tourism-heavy in lower Sukhumvit (Nana, Asok); less residential feel",
                "Air quality affected by street-level exhaust in busier sections",
            ],
            "best_for": "First-time expats, young professionals, social nomads, corporate relocatees",
        },
        # ... 4 more neighborhoods following the same structure
    ],

    # ── WORK INFRASTRUCTURE SCORES (0–10 float) ───────────────────────────────
    "infra_scores": {
        "Internet Reliability":          8.5,
        "Coworking Ecosystem":           8.0,
        "Startup & Business Ecosystem":  7.0,
        "English Language Friendliness": 6.5,
        "Banking & Financial Services":  6.0,
        "Tax System Complexity":         6.5,
        "Visa & Residency Pathway":      6.0,
        "Office Supply & Business Svcs": 7.5,
    },
    # Justifications (same keys as above)
    "infra_notes": {
        "Internet Reliability":          "AIS and TRUE offer 1Gbps fiber plans; 5G coverage in central districts. Average speeds 150–200 Mbps. Reliable for remote work in modern condos.",
        "Coworking Ecosystem":           "200+ coworking spaces; Hubba, The Hive, and CAMP (no fee) are well-established. Day-pass economy strong. Concentrated in Sukhumvit / Silom.",
        "Startup & Business Ecosystem":  "Active startup scene (Techsauce, dtac accelerate). BOI incentives available. Talent pool large but English-proficiency variable at senior level.",
        "English Language Friendliness": "English widely spoken in tourist, expat, and business zones. Government services predominantly Thai. Rural areas minimal English.",
        "Banking & Financial Services":  "Kasikorn, SCB, Bangkok Bank widely used. Expat account opening requires work permit or long-stay visa. Wise / Revolut widely accepted.",
        "Tax System Complexity":         "Thailand tax treaty network broad. LTR visa holders may claim tax exemptions on foreign income. Regulatory changes introduced in 2024 affect long-term residents.",
        "Visa & Residency Pathway":      "LTR Visa (10-year) for high earners and retirees; METV for short-stay. Thailand Elite Visa available at premium cost. Processing generally smooth.",
        "Office Supply & Business Svcs": "Full ecosystem of international legal, accounting, and HR firms in Bangkok. BOI registration support well-established.",
    },

    # ── QUALITY OF LIFE SCORES ────────────────────────────────────────────────
    "qol_scores": {
        "Crime Rate & Personal Safety":  4.7,
        "Healthcare Quality":            8.5,
        "Walkability":                   6.0,
        "Public Transport Efficiency":   7.5,
        "Air Quality":                   4.5,
        "Climate Comfort":               5.5,
        "Cultural & Social Life":        8.5,
    },
    "qol_notes": {
        "Crime Rate & Personal Safety":  "Numbeo Safety Index 47.2/100. Petty theft and scams targeting tourists are the primary risks. Violent crime against foreigners is uncommon. Political demonstrations have occurred but typically not targeting expats.",
        "Healthcare Quality":            "Bangkok's private hospital network (Bumrungrad, Samitivej, BNH) is world-class and significantly cheaper than Western equivalents. Medical tourism destination. Public system (30B scheme) not recommended for expats.",
        "Walkability":                   "Highly area-dependent. BTS-connected districts (Sukhumvit, Silom) walkable within corridors. Extreme heat (38–40°C in April), poor sidewalk quality, and flooding reduce walkability score significantly.",
        "Public Transport Efficiency":   "BTS Skytrain and MRT Metro provide reliable coverage of core districts. Airport Rail Link serves Suvarnabhumi. Gaps in network and poor interchange design are the main limitations. Bus network extensive but slow.",
        "Air Quality":                   "PM2.5 levels regularly exceed WHO guidelines during dry season (Jan–Apr). Annual average 25–35 µg/m³. Air purifiers advisable in apartments. Significantly worse than European cities.",
        "Climate Comfort":               "Tropical climate with hot season (March–May, up to 42°C), rainy season (June–Oct) with daily storms, and a pleasant cool season (Nov–Feb). Requires lifestyle adjustment for most Western expats.",
        "Cultural & Social Life":        "Unparalleled in Southeast Asia. Street food culture, night markets, temples, rooftop bars, international dining, and live music create exceptional lifestyle richness. Expat social scene very active.",
    },

    # ── PEER CITY COMPARISON ─────────────────────────────────────────────────
    # 4 peers to compare against the subject city
    "peers": [
        {
            "city":         "Bangkok, Thailand",
            "is_subject":   True,           # Set to True for the subject city
            "rent_1br":     "$600 – $1,000",
            "vs_rent":      "Baseline",
            "food_monthly": "$370 – $520",
            "vs_food":      "Baseline",
            "total_std":    "$1,800 – $2,600",
            "vs_total":     "Baseline 100%",
            "tripcost":     "7.10 / 10",
            "visa":         "LTR / Elite Visa",
        },
        {
            "city":         "Chiang Mai, Thailand",
            "is_subject":   False,
            "rent_1br":     "$300 – $550",
            "vs_rent":      "−45% to −50%",
            "food_monthly": "$200 – $320",
            "vs_food":      "−35% to −40%",
            "total_std":    "$1,000 – $1,600",
            "vs_total":     "−35% to −40%",
            "tripcost":     "7.40 / 10",
            "visa":         "LTR / METV",
        },
        {
            "city":         "Kuala Lumpur, Malaysia",
            "is_subject":   False,
            "rent_1br":     "$500 – $850",
            "vs_rent":      "−10% to −20%",
            "food_monthly": "$280 – $420",
            "vs_food":      "−15% to −20%",
            "total_std":    "$1,500 – $2,200",
            "vs_total":     "−15% to −18%",
            "tripcost":     "7.30 / 10",
            "visa":         "DE Rantau Nomad Pass",
        },
        {
            "city":         "Ho Chi Minh City, Vietnam",
            "is_subject":   False,
            "rent_1br":     "$400 – $700",
            "vs_rent":      "−25% to −35%",
            "food_monthly": "$200 – $320",
            "vs_food":      "−35% to −40%",
            "total_std":    "$1,200 – $1,900",
            "vs_total":     "−25% to −30%",
            "tripcost":     "6.80 / 10",
            "visa":         "E-visa (90 days); no nomad visa",
        },
        {
            "city":         "Lisbon, Portugal",
            "is_subject":   False,
            "rent_1br":     "$1,600 – $2,400",
            "vs_rent":      "+100% to +140%",
            "food_monthly": "$530 – $710",
            "vs_food":      "+35% to +45%",
            "total_std":    "$3,100 – $4,200",
            "vs_total":     "+60% to +70%",
            "tripcost":     "7.52 / 10",
            "visa":         "D8 Digital Nomad Visa (EU)",
        },
    ],

    # ── PROS & CONS ───────────────────────────────────────────────────────────
    "pros": [
        ("World-Class Private Healthcare",   "Bumrungrad and Samitivej offer Western-standard care at 30–60% below European costs. Medical tourism infrastructure is unmatched in the region."),
        ("Extreme Food Culture Diversity",   "Street food at $1–3, Michelin-starred restaurants, and 200+ cuisines represented. Food cost-to-quality ratio is among the world's best."),
        ("Coworking & Digital Infrastructure","200+ spaces citywide; fiber internet broadly available; day-pass economy mature and competitively priced."),
        ("Thriving Social Expat Community",  "One of the world's largest expat populations creates instant social networks across all professional segments."),
        ("Cost-Effective Premium Lifestyle", "A lifestyle equivalent to $8,000–10,000/month in London can be replicated for $3,000–4,000/month in Bangkok."),
        ("LTR Visa Framework",               "The 10-year LTR Visa (launched 2022) provides a stable long-term residency option for qualifying high-earners, retirees, and remote workers."),
        ("Cultural Richness",                "World-class temples, night markets, rooftop bars, live music, and proximity to beaches and jungle create exceptional lifestyle variety."),
        ("Central SE Asian Hub",             "Direct flights to 80+ international destinations; hub for exploring Cambodia, Laos, Vietnam, and Indonesia within 1–2 hours."),
    ],
    "cons": [
        ("Air Quality Concerns",             "PM2.5 levels regularly exceed WHO guidelines Jan–April. Air purifiers are a necessity; outdoor exercise should be limited on bad days."),
        ("Extreme Heat & Climate Stress",    "Hot season temperatures of 38–42°C (March–May) and daily storms during rainy season require significant lifestyle adaptation for Western arrivals."),
        ("Traffic Congestion",               "Despite rail transit, surface traffic is among Asia's worst. Taxi and rideshare journeys can take 3–4× the map time during peak hours."),
        ("2024 Foreign Income Tax Change",   "Thailand's Revenue Department ruling on foreign-source income (effective 2024) has created uncertainty for long-stay residents. Tax planning is essential."),
        ("Language Barrier",                 "Thai script and language is among the world's most difficult to learn. Government services, medical paperwork, and leases are Thai-language primary."),
        ("Political Instability History",    "Thailand has experienced multiple coups and political upheavals since 2006. While daily expat life is largely unaffected, long-term institutional stability risk exists."),
        ("Walkability Limitations",          "Heat, inconsistent sidewalks, and soi (lane) culture make Bangkok pedestrian-hostile outside BTS corridors. Car or motorbike dependency is high."),
        ("Visa Policy Unpredictability",     "Visa rules have historically changed without advance notice. The 2024 income tax interpretation is a recent example of policy surprises."),
    ],

    # ── WHO SHOULD MOVE ───────────────────────────────────────────────────────
    "who": [
        ("Solo Digital Nomads",               "STRONG RECOMMEND", "green",
         "Bangkok is the world's #1 digital nomad city by most rankings. Infrastructure, social scene, "
         "food culture, and cost combine to create an unbeatable package for solo remote workers earning "
         "above $2,000/month. The LTR Visa provides legal clarity for longer-term stays."),
        ("Couples Without Children",          "RECOMMEND",        "teal",
         "Couples with dual incomes will find Bangkok extremely livable. 2BR apartments with modern "
         "facilities are available at $900–$1,400/month. The lifestyle richness is exceptional. "
         "Primary concern: air quality and climate adaptation for health-conscious couples."),
        ("Families with School-Age Children", "CONDITIONAL",      "amber",
         "World-class international schools (NIST, Shrewsbury, Bangkok Prep) add $700–1,600/month "
         "per child. The larger family footprint means car dependency. Air quality is a genuine "
         "concern for children. Families committed to SE Asian life will find Bangkok excellent; "
         "casual relocatees should budget carefully."),
        ("Startup Founders",                  "STRONG RECOMMEND", "green",
         "Bangkok's startup ecosystem (Techsauce, dtac accelerate, BOI incentives) is the strongest "
         "in mainland Southeast Asia. Talent costs are 40–70% below Singapore equivalents. "
         "Regional market access from a Bangkok base is excellent."),
        ("Retirees",                          "STRONG RECOMMEND", "green",
         "Thailand's Retirement Visa (Non-OA) is one of the world's most accessible retirement "
         "pathways, requiring proof of $25,000 in a Thai bank account or $2,000/month pension. "
         "Private healthcare, low costs, warm climate, and cultural richness make Bangkok "
         "a premier global retirement destination — with climate adaptation as the key trade-off."),
    ],

    # ── RISK FACTORS ─────────────────────────────────────────────────────────
    "risks": [
        ("Foreign Income Tax Ruling (2024)", "HIGH MONITOR", "red",
         "Thailand's Revenue Department Instruction Paw 161/2566 (effective Jan 2024) requires "
         "assessment of foreign-source income remitted to Thailand in the same calendar year it "
         "is earned. Impact varies by individual circumstances and applicable tax treaties. "
         "Professional tax advice is strongly recommended before establishing fiscal residency."),
        ("Political & Coup Risk",            "MODERATE",     "amber",
         "Thailand has experienced 13 successful coups since 1932. The most recent (2014) lasted "
         "5 years. Daily expat life has historically been minimally disrupted, but institutional "
         "uncertainty — including judicial interventions dissolving governing parties — creates "
         "long-term stability questions. The 2023 election and coalition formation demonstrated "
         "continued elite power struggles."),
        ("Air Quality & Climate",            "HIGH MONITOR", "red",
         "Seasonal air pollution (PM2.5) from agricultural burning and traffic poses genuine "
         "long-term health risks for residents with respiratory conditions. Bangkok's climate "
         "change trajectory projects increasing frequency of extreme heat events. HEPA air "
         "purifiers and monitoring apps (Air4Thai, IQAir) are essential tools."),
        ("Visa Policy Unpredictability",     "MODERATE",     "amber",
         "Thailand visa rules have a history of abrupt change. The Elite Visa program, "
         "30-day exemption periods, and border-run policies have all been modified without "
         "significant advance notice. The LTR Visa (2022) represents a more stable framework "
         "but is subject to regulatory interpretation."),
        ("Currency Risk",                    "LOW–MODERATE", "teal",
         "The Thai Baht has been relatively stable against USD (28–35 THB/USD range since 2019). "
         "USD-earning expats have benefited from a favorable exchange environment. However, "
         "emerging market currency risk is always present and should be hedged for large "
         "long-term financial commitments."),
        ("Inflation & Cost Trajectory",      "LOW",          "green",
         "Thai CPI has been moderate at 1–3% annually in recent years. Healthcare and schooling "
         "costs in the private sector have seen above-inflation increases (4–6% annually). "
         "Overall cost trajectory remains favorable relative to European and North American peers."),
    ],

    # ── TRIPCOST INDEX ────────────────────────────────────────────────────────
    "index_scores": {
        "Affordability":      8.5,
        "Infrastructure":     7.5,
        "Safety":             4.7,
        "Quality of Life":    7.0,
        "Economic Stability": 6.0,
    },
    "index_rationale": {
        "Affordability":      "Exceptional cost-to-lifestyle ratio; one of the world's most affordable major cities for expats",
        "Infrastructure":     "Strong fiber internet and coworking; banking and English proficiency moderate in government contexts",
        "Safety":             "Petty crime and political risk moderate the score; violent crime against expats remains low",
        "Quality of Life":    "Outstanding food, culture, and healthcare; air quality and climate are material deductions",
        "Economic Stability": "Stable currency and low inflation offset by foreign income tax uncertainty and political risk",
    },

    # ── FINAL VERDICT ─────────────────────────────────────────────────────────
    "verdict_nomads":   (
        "Bangkok remains the world's undisputed digital nomad capital in 2026. "
        "For remote workers earning above $2,000/month, no other city matches "
        "the combination of infrastructure quality, food culture, social scene, "
        "and cost efficiency. The LTR Visa provides legal structure; the coworking "
        "ecosystem is world-class. Air quality is the primary operational concern. "
        "Total monthly budgets of $1,800–2,600 support an exceptional lifestyle.",
        "Recommendation: Proceed without hesitation. Bangkok is the global benchmark for remote work lifestyle value."
    ),
    "verdict_families": (
        "Families with school-age children face significant added costs "
        "($700–1,600/month per child for international schooling) and air quality "
        "concerns that require serious consideration. Against this, Bangkok's "
        "private healthcare, family-friendly facilities, and lifestyle richness "
        "are exceptional. Families earning above $6,000/month net and committed "
        "to SE Asian life will find Bangkok outstanding value versus Singapore or HK.",
        "Recommendation: Proceed with detailed budget modeling and air quality risk assessment."
    ),
    "verdict_founders": (
        "Bangkok's startup ecosystem is the strongest in mainland SE Asia. "
        "Talent costs are 40–70% below Singapore, BOI incentives are substantial, "
        "and the regional market access from Bangkok is excellent. Tax planning "
        "in light of the 2024 income tax changes is non-negotiable for founders. "
        "Early-stage and growth-stage operations will find Bangkok exceptionally cost-effective.",
        "Recommendation: Proceed for SE Asian market operations. Engage tax counsel before incorporation."
    ),
    "closing_statement": (
        "Bangkok in 2026 is a city of extraordinary contrasts: world-class private "
        "healthcare alongside toxic air quality seasons; ultra-efficient BTS skytrain "
        "alongside gridlocked streets below; $1 pad thai alongside Michelin-starred "
        "establishments. For the internationally mobile professional with the cultural "
        "adaptability to navigate these contrasts, Bangkok offers a quality-to-cost "
        "ratio that remains, in 2026, unmatched by any major city on the planet."
    ),
}
```

---

## Minimal Working Example (for testing)

If you only need to test the generator quickly, you can use abbreviated neighborhood data
with just 2–3 items. The generator will still produce all 13 sections; neighborhood section
will simply have fewer entries.

## Scoring Quick-Reference

| City Type | Affordability | Safety | QoL |
|-----------|--------------|--------|-----|
| SE Asia (BKK, HCMC) | 8–9 | 5–6 | 7–8 |
| Latam (MDE, CDMX) | 7–8 | 4–6 | 7–8 |
| Eastern EU (Tbilisi, Warsaw) | 7–8 | 7–8 | 7–8 |
| Western EU (Lisbon, Valencia) | 5–6 | 8–9 | 8–9 |
| Gulf (Dubai) | 5–6 | 8–9 | 7–8 |
| Premium (Singapore, NYC) | 2–3 | 8–9 | 8–9 |
