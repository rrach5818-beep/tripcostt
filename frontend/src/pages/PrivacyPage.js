/**
 * PrivacyPage
 * Privacy Policy
 */

import { MainLayout } from '../layouts/MainLayout.js';

export function PrivacyPage() {
  const content = `
    <div class="page-header page-header--centered" data-testid="page-header">
      <div class="container">
        <p class="page-header__eyebrow">Legal</p>
        <h1 class="page-header__title">Privacy Policy</h1>
        <p class="page-header__subtitle">
          How we collect, use, and protect your information.
        </p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="legal-content">
          <h2>Introduction</h2>
          <p>
            At TripCost, we are committed to protecting your privacy. This Privacy Policy explains 
            how we collect, use, disclose, and safeguard your information when you visit our website. 
            Please read this policy carefully to understand our practices regarding your personal data.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>
            We may collect information that you voluntarily provide when using our services, including:
          </p>
          <ul>
            <li>Contact information when you reach out to us</li>
            <li>Feedback and survey responses</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you access our website, we may automatically collect certain information, including:
          </p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>General geographic location based on IP address</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Improve and personalize user experience</li>
            <li>Analyze usage patterns and trends</li>
            <li>Respond to inquiries and provide support</li>
            <li>Protect against unauthorized access and misuse</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar tracking technologies to collect information about your 
            browsing activities. Cookies are small data files stored on your device that help us 
            improve our services and your experience. You can control cookie settings through your 
            browser preferences.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share 
            information with trusted service providers who assist us in operating our website, 
            conducting our business, or servicing you, as long as those parties agree to keep this 
            information confidential.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. However, 
            no method of transmission over the internet is 100% secure, and we cannot guarantee 
            absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
          <ul>
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate data</li>
            <li>The right to request deletion of your data</li>
            <li>The right to object to processing of your data</li>
            <li>The right to data portability</li>
          </ul>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the 
            privacy practices or content of these external sites. We encourage you to review the 
            privacy policies of any third-party sites you visit.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 16. We do not knowingly 
            collect personal information from children. If you become aware that a child has provided 
            us with personal information, please contact us so we can take appropriate action.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last updated" date. 
            Your continued use of our services after any changes constitutes acceptance of the 
            updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our data practices, 
            please contact us through our official channels.
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

export default PrivacyPage;
