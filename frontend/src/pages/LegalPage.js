/**
 * LegalPage
 * Legal Notice / Impressum
 */

import { MainLayout } from '../layouts/MainLayout.js';

export function LegalPage() {
  const content = `
    <div class="page-header page-header--centered" data-testid="page-header">
      <div class="container">
        <p class="page-header__eyebrow">Legal</p>
        <h1 class="page-header__title">Legal Notice</h1>
        <p class="page-header__subtitle">
          Important legal information about TripCost and our services.
        </p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="legal-content">
          <h2>Service Provider</h2>
          <p>
            TripCost is an online platform providing cost of living information and budget 
            planning tools for digital nomads and remote workers. This website is operated 
            for informational purposes only.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The information provided on TripCost is for general informational purposes only. 
            While we strive to keep the information up to date and accurate, we make no 
            representations or warranties of any kind, express or implied, about the completeness, 
            accuracy, reliability, suitability, or availability of the information, products, 
            services, or related graphics contained on the website.
          </p>
          <p>
            Any reliance you place on such information is strictly at your own risk. In no 
            event will we be liable for any loss or damage including without limitation, indirect 
            or consequential loss or damage, or any loss or damage whatsoever arising from loss 
            of data or profits arising out of, or in connection with, the use of this website.
          </p>

          <h2>Data Sources</h2>
          <p>
            Cost data presented on TripCost is compiled from various sources including 
            publicly available databases, government statistics, and community-contributed 
            information. We do not guarantee the accuracy of third-party data sources.
          </p>

          <h2>External Links</h2>
          <p>
            Through this website, you may be able to link to other websites which are not 
            under our control. We have no control over the nature, content, and availability 
            of those sites. The inclusion of any links does not necessarily imply a recommendation 
            or endorsement of the views expressed within them.
          </p>

          <h2>Copyright</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, 
            and software, is the property of TripCost or its content suppliers and is protected 
            by international copyright laws. Unauthorized reproduction or distribution of any 
            materials from this website is strictly prohibited.
          </p>

          <h2>Modifications</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any aspect of our services 
            at any time without prior notice. We may also modify these legal terms at any time, 
            and such modifications will be effective immediately upon posting.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with 
            applicable laws, and any disputes relating to these terms will be subject to 
            the exclusive jurisdiction of the appropriate courts.
          </p>

          <p style="margin-top: var(--space-8); color: var(--color-text-tertiary); font-size: var(--font-size-sm);">
            Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </section>
  `;

  return MainLayout(content);
}

export default LegalPage;
