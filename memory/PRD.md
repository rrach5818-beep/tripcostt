# TripCost Frontend Application PRD

## Original Problem Statement
Build a production-grade frontend codebase for TripCost using:
- Vanilla JavaScript (ES modules) - NO React/JSX
- CSS only (no Tailwind, no CSS-in-JS)
- Routing via history.pushState
- Components return template literal strings
- Data-first approach with cityDB as source of truth

## Architecture

### Tech Stack
- Vite 5.x for bundling and dev server
- Vanilla JavaScript with ES modules
- Pure CSS with design tokens

### File Structure
```
/app/frontend/
├── index.html                 # Entry HTML with <div id="app">
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── src/
    ├── main.js                # App initialization and router setup
    ├── data/
    │   ├── cityDB.js          # Source of truth - 19 cities
    │   ├── cityContract.js    # Data validation schema
    │   └── cityService.js     # Data access layer
    ├── logic/
    │   ├── budgetCalculator.js # Monthly budget calculations
    │   └── scoreCalculator.js  # Nomad score calculations
    ├── styles/
    │   ├── tokens.css         # CSS variables (colors, spacing, fonts)
    │   ├── base.css           # Reset and base styles
    │   ├── layout.css         # Grid, flexbox, spacing utilities
    │   ├── components.css     # UI component styles
    │   └── pages.css          # Page-specific styles
    ├── components/
    │   ├── ui/                # Button, Card, Badge, Stat
    │   └── city/              # CityHero, CityStats, CitySimulator, CityFAQ
    ├── layouts/
    │   ├── MainLayout.js      # Header + content + footer
    │   └── AppLayout.js       # Wrapper layout
    ├── pages/
    │   ├── HomePage.js        # Landing with featured cities
    │   ├── DestinationsPage.js # All 19 cities grid
    │   ├── CityPage.js        # Individual city details
    │   ├── CalculatorPage.js  # Interactive budget calculator
    │   └── NomadPage.js       # Rankings table
    └── router/
        ├── routes.js          # Route definitions
        └── index.js           # Router logic with history.pushState
```

## Core Requirements

### Routes
- `/` - Homepage with hero, features, top 6 cities
- `/destinations` - All 19 cities grid
- `/city/:slug` - City detail page (e.g., /city/new-york)
- `/calculator` - Budget calculator with interactive updates
- `/nomad` - Digital nomad rankings table

### Calculator Features
- City selection dropdown (19 cities)
- Housing selection: City Center / Suburb
- Lifestyle selection: Budget / Standard / Premium
- Live updates on any selection change
- Shows: Total budget, Accommodation, Food, Transport, Coworking

### City Data
- 19 cities across 5 continents
- Costs: accommodation (center/suburb), food (budget/standard/premium), transport, coworking
- Digital nomad metrics: overallScore, wifiSpeed, coworkingCost, safetyScore
- Multi-currency support (USD, EUR, GBP, SGD)

## What's Implemented (Feb 2, 2026)
- ✅ Complete file structure per specification
- ✅ All 5 routes working with client-side routing
- ✅ Homepage with hero, features, city cards
- ✅ Destinations page with 19 cities
- ✅ City detail pages with hero, stats, cost breakdown, FAQ
- ✅ Interactive budget calculator with live updates
- ✅ Nomad rankings table with all cities
- ✅ 404 page handling
- ✅ Clean CSS with design tokens
- ✅ data-testid attributes on all interactive elements

## Testing Results
- Frontend: 100% pass rate
- All 11 test cases passed
- Navigation, calculator interactivity, multi-currency verified

## Backlog / Future Enhancements
- P1: Add search/filter on destinations page
- P1: Add sorting options on nomad rankings
- P2: Add comparison mode (select 2 cities)
- P2: Dark mode theme
- P3: Save favorite cities to localStorage
- P3: Generate shareable budget report URL

## Next Tasks
1. Add city search/filter functionality
2. Implement sortable columns on nomad table
3. Add responsive mobile navigation
