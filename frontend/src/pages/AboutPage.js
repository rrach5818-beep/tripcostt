/**
 * AboutPage
 * About TripCost - Mission and company info
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { getAllCities } from '../data/cityService.js';

export function AboutPage() {
  const totalCities = getAllCities().length;

  const content = `
    <div class="page-header page-header--centered" data-testid="page-header">
      <div class="container">
        <p class="page-header__eyebrow">About</p>
        <h1 class="page-header__title">About TripCost</h1>
        <p class="page-header__subtitle">
          Helping digital nomads and remote workers make informed decisions about where to live and work.
        </p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="legal-content">
          <h2>Our Mission</h2>
          <p>
            TripCost was created to solve a common problem faced by digital nomads and remote workers: 
            understanding the true cost of living in different cities around the world. We believe that 
            access to accurate, transparent cost data should be available to everyone planning their next move.
          </p>
          <p>
            Our platform provides comprehensive cost breakdowns for ${totalCities} cities across multiple continents, 
            helping you compare destinations based on accommodation, food, transportation, coworking spaces, 
            and more.
          </p>

          <h2>What We Offer</h2>
          <p>TripCost provides several key features to help you plan your budget:</p>
          <ul>
            <li><strong>City Cost Guides:</strong> Detailed cost breakdowns for ${totalCities} destinations worldwide</li>
            <li><strong>Budget Calculator:</strong> Interactive tool to estimate monthly expenses based on your lifestyle</li>
            <li><strong>Nomad Rankings:</strong> Cities ranked by our comprehensive scoring system</li>
            <li><strong>Comparison Tools:</strong> Side-by-side city comparisons for easier decision making</li>
          </ul>

          <h2>Our Data</h2>
          <p>
            We aggregate cost data from multiple reliable sources including government statistics, 
            international cost of living databases, and crowdsourced information from the digital nomad community. 
            Our data is regularly updated to reflect current market conditions.
          </p>
          <p>
            While we strive for accuracy, please note that actual costs may vary based on individual 
            circumstances, seasonal factors, and exchange rate fluctuations. We recommend using our 
            estimates as a starting point for your research.
          </p>

          <h2>Who We're For</h2>
          <p>TripCost is designed for:</p>
          <ul>
            <li>Digital nomads planning their next destination</li>
            <li>Remote workers considering international relocation</li>
            <li>Freelancers exploring cost-effective work locations</li>
            <li>Companies helping employees with relocation planning</li>
            <li>Anyone curious about the cost of living in different cities</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            Have questions, feedback, or suggestions? We'd love to hear from you. 
            Whether you've found an error in our data or have ideas for new features, 
            your input helps us improve TripCost for everyone.
          </p>
          <p>
            For general inquiries, data corrections, or partnership opportunities, 
            please reach out through our official channels.
          </p>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="cta-section">
          <h2 class="cta-section__title">Ready to explore?</h2>
          <p class="cta-section__subtitle">Start planning your budget with our free calculator.</p>
          <a href="/calculator" data-link class="btn btn--white btn--lg">Try the Calculator</a>
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

export default AboutPage;
