/**
 * ArticleBestVisas -- Blog: Best Digital Nomad Visas in 2026
 * Route: /blog/best-digital-nomad-visas-2026
 * ASCII-only (Vite/Rollup constraint -- no emojis, no accented chars, no curly quotes)
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { setPageMeta, injectSchema } from '../logic/setPageMeta.js';

export function ArticleBestVisas() {
  setPageMeta({
    title: 'Best Digital Nomad Visas in 2026: 10 Countries That Welcome Remote Workers | Living Cost Atlas',
    description: 'Complete guide to digital nomad visas in 2026. Compare income requirements, duration and costs for Portugal, Thailand, Taiwan, Germany, Colombia and more.',
    canonical: '/blog/best-digital-nomad-visas-2026',
    image: 'https://www.livingcostatlas.com/og-image.png',
  });

  injectSchema('article-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Digital Nomad Visas in 2026: 10 Countries That Welcome Remote Workers | Living Cost Atlas',
    datePublished: '2026-05-01',
    dateModified: '2026-05-14',
    image: 'https://www.livingcostatlas.com/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'Living Cost Atlas',
      url: 'https://www.livingcostatlas.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Living Cost Atlas',
      url: 'https://www.livingcostatlas.com'
    },
    url: 'https://www.livingcostatlas.com/blog/best-digital-nomad-visas-2026'
  });

  const content = `
    <style>
      .blog-post {
        background: #fafaf9;
        min-height: 100vh;
      }
      .blog-post__container {
        max-width: 760px;
        margin: 0 auto;
        padding: 0 24px 80px;
      }
      .blog-post__breadcrumb {
        padding: 24px 0 0;
        font-size: 13px;
        color: #6b7280;
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .blog-post__breadcrumb a {
        color: #6b7280;
        text-decoration: none;
      }
      .blog-post__breadcrumb a:hover {
        color: #374151;
        text-decoration: underline;
      }
      .blog-post__breadcrumb span {
        color: #9ca3af;
      }
      .blog-post__hero {
        padding-top: 56px;
        padding-bottom: 8px;
      }
      .blog-post__hero h1 {
        font-size: 2.4rem;
        font-weight: 800;
        color: #0f0c29;
        line-height: 1.2;
        margin: 0 0 20px;
        letter-spacing: -0.02em;
      }
      .blog-post__meta {
        font-size: 13px;
        color: #6b7280;
        margin-bottom: 32px;
        display: flex;
        gap: 16px;
        align-items: center;
        flex-wrap: wrap;
      }
      .blog-post__intro {
        font-size: 17px;
        line-height: 1.8;
        color: #374151;
        max-width: 680px;
        margin-bottom: 40px;
      }
      .blog-post__body {
        font-size: 17px;
        line-height: 1.8;
        color: #374151;
        max-width: 680px;
      }
      .blog-post__body h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #0f0c29;
        margin-top: 48px;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 2px solid #e5e7eb;
      }
      .blog-post__body h3 {
        font-size: 1.15rem;
        font-weight: 700;
        color: #1e1b4b;
        margin-top: 32px;
        margin-bottom: 12px;
      }
      .blog-post__body p {
        margin: 0 0 20px;
      }
      .blog-post__body ul {
        margin: 0 0 20px;
        padding-left: 24px;
      }
      .blog-post__body li {
        margin-bottom: 8px;
      }
      .blog-table-wrap {
        width: 100%;
        overflow-x: auto;
        margin: 24px 0;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
      }
      .blog-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;
      }
      .blog-table thead tr {
        background: #1e1b4b;
        color: #fff;
      }
      .blog-table thead th {
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
        white-space: nowrap;
      }
      .blog-table tbody td {
        padding: 10px 12px;
        border-bottom: 1px solid #f3f4f6;
        color: #374151;
      }
      .blog-table tbody tr:nth-child(even) td {
        background: #f3f4f6;
      }
      .blog-table tbody tr:last-child td {
        border-bottom: none;
      }
      .blog-cta {
        background: linear-gradient(135deg, #1e1b4b, #312e81);
        color: #fff;
        border-radius: 16px;
        padding: 32px;
        margin-top: 48px;
      }
      .blog-cta h3 {
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0 0 10px;
        color: #fff;
      }
      .blog-cta p {
        font-size: 15px;
        line-height: 1.65;
        margin: 0 0 20px;
        color: rgba(255,255,255,0.85);
      }
      .blog-cta__btn {
        background: #d4a843;
        color: #1e1b4b;
        text-decoration: none;
        font-weight: 700;
        padding: 12px 28px;
        border-radius: 8px;
        display: inline-block;
        font-size: 15px;
      }
      .blog-cta__btn:hover {
        background: #c49b38;
      }
      .pick-card {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 20px;
      }
      .pick-card h3 {
        margin-top: 0;
      }
      @media (max-width: 600px) {
        .blog-post__hero h1 {
          font-size: 1.8rem;
        }
      }
    </style>

    <div class="blog-post">
      <div class="blog-post__container">

        <nav class="blog-post__breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-link>Home</a>
          <span>/</span>
          <a href="/blog" data-link>Blog</a>
          <span>/</span>
          <span>Best Digital Nomad Visas 2026</span>
        </nav>

        <header class="blog-post__hero">
          <h1>Best Digital Nomad Visas in 2026: 10 Countries That Welcome Remote Workers</h1>
          <div class="blog-post__meta">
            <span>May 2026</span>
            <span>&middot;</span>
            <span>9 min read</span>
          </div>
          <p class="blog-post__intro">
            More countries than ever are rolling out the red carpet for remote workers.
            We cut through the noise and ranked the 10 most accessible digital nomad visas
            by income requirement, processing time, and overall value for money.
          </p>
        </header>

        <div class="blog-post__body">

          <h2>What is a digital nomad visa?</h2>
          <p>
            A digital nomad visa is a special residency permit that lets remote workers,
            freelancers, and location-independent employees live legally in a country while
            earning income from clients or employers outside that country. Unlike a tourist
            visa -- which typically prohibits any form of work -- a digital nomad visa
            explicitly grants the right to work remotely for foreign entities, usually
            without requiring local employment.
          </p>
          <p>
            These visas emerged in response to the post-pandemic surge in remote work.
            Governments saw an opportunity: attract high earners who spend locally but
            draw salaries from abroad, boosting the domestic economy without displacing
            local workers. Most programs require applicants to demonstrate a minimum
            monthly income, hold private health insurance, and pass a background check.
            In exchange, holders get legal status, sometimes a reduced flat tax rate,
            and the freedom to stay far longer than a standard tourist allowance.
          </p>

          <h2>Top 10 Digital Nomad Visas Compared</h2>
          <div class="blog-table-wrap">
            <table class="blog-table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Visa Name</th>
                  <th>Duration</th>
                  <th>Min Monthly Income</th>
                  <th>Application Fee</th>
                  <th>Processing Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Portugal</strong></td>
                  <td>D8 Digital Nomad Visa</td>
                  <td>1 year (renewable 2y)</td>
                  <td>$3,040/mo</td>
                  <td>~$90</td>
                  <td>4-8 weeks</td>
                </tr>
                <tr>
                  <td><strong>Thailand</strong></td>
                  <td>LTR Visa</td>
                  <td>10 years</td>
                  <td>$3,000/mo (passive)</td>
                  <td>$200</td>
                  <td>4-6 weeks</td>
                </tr>
                <tr>
                  <td><strong>Taiwan</strong></td>
                  <td>Gold Card</td>
                  <td>1-3 years</td>
                  <td>$5,000/mo</td>
                  <td>$310</td>
                  <td>2-4 weeks</td>
                </tr>
                <tr>
                  <td><strong>Germany</strong></td>
                  <td>Freelancer Visa</td>
                  <td>3 years</td>
                  <td>varies</td>
                  <td>~$110</td>
                  <td>6-12 weeks</td>
                </tr>
                <tr>
                  <td><strong>Colombia</strong></td>
                  <td>Digital Nomad Visa</td>
                  <td>2 years</td>
                  <td>$650/mo</td>
                  <td>~$55</td>
                  <td>2-4 weeks</td>
                </tr>
                <tr>
                  <td><strong>Estonia</strong></td>
                  <td>Digital Nomad Visa</td>
                  <td>1 year</td>
                  <td>$4,500/mo</td>
                  <td>~$100</td>
                  <td>2-4 weeks</td>
                </tr>
                <tr>
                  <td><strong>Greece</strong></td>
                  <td>Digital Nomad Visa</td>
                  <td>1 year</td>
                  <td>$3,500/mo</td>
                  <td>~$75</td>
                  <td>4-8 weeks</td>
                </tr>
                <tr>
                  <td><strong>Indonesia</strong></td>
                  <td>Bali Digital Nomad Visa</td>
                  <td>60 days (renewable)</td>
                  <td>None</td>
                  <td>$0</td>
                  <td>On arrival</td>
                </tr>
                <tr>
                  <td><strong>Mexico</strong></td>
                  <td>Temporary Resident</td>
                  <td>up to 4 years</td>
                  <td>$2,600/mo</td>
                  <td>~$40</td>
                  <td>2-4 weeks</td>
                </tr>
                <tr>
                  <td><strong>Spain</strong></td>
                  <td>Digital Nomad Visa</td>
                  <td>1 year (renewable 4y)</td>
                  <td>$2,646/mo</td>
                  <td>~$120</td>
                  <td>4-8 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Our Top 3 Picks</h2>

          <div class="pick-card">
            <h3>Portugal D8 -- Best All-Around</h3>
            <p>
              Portugal remains the gold standard for nomads seeking a genuine European base.
              The D8 visa comes with access to the Schengen Area, a mature expat community
              in Lisbon and Porto, and a clear pathway to permanent residency after five years.
              The income requirement of $3,040 per month is achievable for most mid-level
              remote professionals, and the application process -- while not instant -- is
              well-documented with plenty of immigration lawyers familiar with it.
              The Non-Habitual Resident (NHR) tax regime has been restructured in 2024,
              but Portugal still offers competitive incentives for newly arrived foreign earners.
              <a href="/city/lisbon" data-link>See Lisbon cost data &rarr;</a>
            </p>
          </div>

          <div class="pick-card">
            <h3>Colombia -- Most Affordable</h3>
            <p>
              At just $650 per month in minimum income, Colombia's digital nomad visa is the
              most accessible on this list by a wide margin. It is valid for two years and
              renewable, giving you genuine medium-term stability. Medellin has become one of
              the most talked-about nomad hubs in Latin America: the climate is springlike
              year-round, the coworking scene is solid, and a comfortable one-bedroom
              apartment in El Poblado costs around $825 per month. If your budget is tight
              or you want to stretch your dollars in the Americas without sacrificing urban
              amenities, Colombia is the clear winner.
              <a href="/city/medellin" data-link>See Medellin cost data &rarr;</a>
            </p>
          </div>

          <div class="pick-card">
            <h3>Taiwan Gold Card -- Best for Asia</h3>
            <p>
              Taiwan's Gold Card is one of Asia's most underrated visa programs. The income
              bar ($5,000/mo) is higher, but what you get in return is exceptional: one of
              the fastest internet infrastructures in the world, a genuine tech ecosystem,
              outstanding healthcare, and a country with a very high safety index. Processing
              typically takes 2-4 weeks through the online portal, faster than most comparable
              programs. Taipei's cost of living is moderate by East Asian capital standards,
              and the local food culture is widely regarded as among the best in the region.
              The Gold Card also grants work authorization for any employer, not just foreign
              clients, adding flexibility few other programs match.
            </p>
          </div>

          <div class="blog-cta">
            <h3>Compare costs in these cities</h3>
            <p>
              Use our free calculator to estimate your actual monthly spend based on your
              lifestyle -- rent, food, coworking, transport and more.
            </p>
            <a href="/calculator" data-link class="blog-cta__btn">Open free calculator</a>
          </div>

        </div>
      </div>
    </div>
  `;

  return MainLayout(content);
}

export default ArticleBestVisas;
