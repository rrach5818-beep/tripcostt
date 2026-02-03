/**
 * TermsPage
 * Terms of Service
 */

import { MainLayout } from '../layouts/MainLayout.js';

export function TermsPage() {
  const content = `
    <div class="page-header page-header--centered" data-testid="page-header">
      <div class="container">
        <p class="page-header__eyebrow">Legal</p>
        <h1 class="page-header__title">Terms of Service</h1>
        <p class="page-header__subtitle">
          Please read these terms carefully before using TripCost.
        </p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="legal-content">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using TripCost, you agree to be bound by these Terms of Service 
            and all applicable laws and regulations. If you do not agree with any of these terms, 
            you are prohibited from using or accessing this site.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on TripCost for personal, 
            non-commercial use only. This is the grant of a license, not a transfer of title, and 
            under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or mirror the materials on any other server</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions 
            and may be terminated by TripCost at any time.
          </p>

          <h2>Service Description</h2>
          <p>
            TripCost provides cost of living information and budget planning tools for informational 
            purposes only. Our services include:
          </p>
          <ul>
            <li>Cost of living data for various cities worldwide</li>
            <li>Budget calculation tools</li>
            <li>City comparison features</li>
            <li>Digital nomad rankings and scores</li>
          </ul>

          <h2>Accuracy of Information</h2>
          <p>
            The cost data and information provided on TripCost are estimates based on various 
            data sources and are intended for general guidance only. Actual costs may vary 
            significantly based on:
          </p>
          <ul>
            <li>Individual lifestyle choices and preferences</li>
            <li>Seasonal variations and local events</li>
            <li>Currency exchange rate fluctuations</li>
            <li>Market conditions and inflation</li>
            <li>Specific neighborhoods within a city</li>
          </ul>
          <p>
            We recommend conducting additional research and consulting local sources before 
            making any financial or relocation decisions.
          </p>

          <h2>User Responsibilities</h2>
          <p>When using TripCost, you agree to:</p>
          <ul>
            <li>Use the service only for lawful purposes</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
            <li>Not interfere with or disrupt the service or servers</li>
            <li>Not use automated systems or software to extract data from the website</li>
            <li>Comply with all applicable local, state, national, and international laws</li>
          </ul>

          <h2>Disclaimer of Warranties</h2>
          <p>
            TripCost is provided on an "as is" and "as available" basis. We make no warranties, 
            expressed or implied, and hereby disclaim and negate all other warranties including, 
            without limitation, implied warranties or conditions of merchantability, fitness for 
            a particular purpose, or non-infringement of intellectual property.
          </p>
          <p>
            We do not warrant that the service will be uninterrupted, timely, secure, or error-free, 
            or that any defects will be corrected.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall TripCost or its operators be liable for any damages (including, 
            without limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on our website, even if we 
            have been notified of the possibility of such damage.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless TripCost and its affiliates from 
            and against any claims, liabilities, damages, losses, and expenses arising out of 
            your use of the service or violation of these Terms.
          </p>

          <h2>Modifications to Service</h2>
          <p>
            We reserve the right to modify or discontinue, temporarily or permanently, the service 
            or any features or portions thereof without prior notice. You agree that we will not 
            be liable for any modification, suspension, or discontinuance of the service.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to revise these Terms of Service at any time without notice. 
            By using this website, you agree to be bound by the current version of these Terms 
            of Service. It is your responsibility to review these terms periodically for changes.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with applicable 
            laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that 
            location for any disputes arising out of or relating to these terms.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms is held to be invalid or unenforceable, the remaining 
            provisions will continue in full force and effect.
          </p>

          <h2>Contact Information</h2>
          <p>
            Questions about the Terms of Service should be sent to us through our official 
            contact channels.
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

export default TermsPage;
