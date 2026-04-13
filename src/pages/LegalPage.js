import { MainLayout } from '../layouts/MainLayout.js';

function legalLayout({ eyebrow, title, subtitle, sections }) {
  const tocHtml = sections.map(s =>
    `<a href="#${s.id}" class="lp-toc__link">${s.title}</a>`
  ).join('');

  const bodyHtml = sections.map(s => `
    <div class="lp-section" id="${s.id}">
      <h2 class="lp-section__title">${s.title}</h2>
      ${s.content}
    </div>
  `).join('');

  return `
    <style>
      .lp-hero {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);
        padding:52px 0 44px;position:relative;overflow:hidden;
      }
      .lp-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 50% 70% at 70% 50%,rgba(99,102,241,0.18),transparent 70%);
      }
      .lp-hero__inner { position:relative;z-index:2; }
      .lp-hero__eyebrow {
        font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;
        color:#818cf8;margin-bottom:10px;
      }
      .lp-hero__title {
        font-size:clamp(26px,4vw,42px);font-weight:900;color:#fff;
        letter-spacing:-0.025em;margin-bottom:10px;
      }
      .lp-hero__sub { font-size:14px;color:rgba(255,255,255,0.5);margin:0; }

      .lp-layout {
        display:grid;grid-template-columns:220px 1fr;gap:48px;
        padding:56px 0 80px;align-items:start;
      }

      /* TOC sidebar */
      .lp-toc {
        position:sticky;top:80px;background:#fff;
        border:1px solid #e5e7eb;border-radius:14px;padding:20px;
      }
      .lp-toc__label {
        font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
        color:#9ca3af;margin-bottom:12px;
      }
      .lp-toc__link {
        display:block;font-size:12px;font-weight:500;color:#6b7280;
        text-decoration:none;padding:5px 0;border-bottom:1px solid #f9fafb;
        transition:color 0.15s;
      }
      .lp-toc__link:last-child { border-bottom:none; }
      .lp-toc__link:hover { color:#6366f1;text-decoration:none; }
      .lp-toc__date {
        font-size:11px;color:#9ca3af;margin-top:16px;padding-top:12px;
        border-top:1px solid #f1f5f9;
      }

      /* Content */
      .lp-body { max-width:720px; }
      .lp-section { margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid #f1f5f9; }
      .lp-section:last-child { border-bottom:none;margin-bottom:0;padding-bottom:0; }
      .lp-section__title {
        font-size:18px;font-weight:800;color:#111827;letter-spacing:-0.01em;
        margin-bottom:12px;padding-top:8px;
      }
      .lp-section p  { font-size:14px;color:#4b5563;line-height:1.85;margin-bottom:10px; }
      .lp-section p:last-child { margin-bottom:0; }
      .lp-section ul { margin:10px 0 10px 0;padding:0; }
      .lp-section ul li {
        font-size:14px;color:#4b5563;line-height:1.7;
        padding:4px 0 4px 18px;position:relative;
      }
      .lp-section ul li::before {
        content:'-';position:absolute;left:0;color:#9ca3af;
      }
      .lp-section h3 {
        font-size:14px;font-weight:700;color:#374151;margin:16px 0 6px;
      }

      @media(max-width:768px){
        .lp-layout { grid-template-columns:1fr; }
        .lp-toc { position:static; }
      }
    </style>

    <section class="lp-hero">
      <div class="container lp-hero__inner">
        <p class="lp-hero__eyebrow">${eyebrow}</p>
        <h1 class="lp-hero__title">${title}</h1>
        <p class="lp-hero__sub">${subtitle}</p>
      </div>
    </section>

    <div class="container">
      <div class="lp-layout">
        <aside class="lp-toc">
          <div class="lp-toc__label">Contents</div>
          ${tocHtml}
          <div class="lp-toc__date">
            Last updated<br>
            ${new Date().toLocaleDateString('en-US',{year:'numeric',month:'long'})}
          </div>
        </aside>
        <div class="lp-body">${bodyHtml}</div>
      </div>
    </div>
  `;
}

export function LegalPage() {
  return MainLayout(legalLayout({
    eyebrow: 'Legal',
    title: 'Legal Notice',
    subtitle: 'Important information about Living Cost Atlas and our services.',
    sections: [
      {
        id: 'service',
        title: 'Service Provider',
        content: `<p>Living Cost Atlas is a free online platform providing cost of living information and budget planning tools for digital nomads, remote workers and expats. This website operates for informational purposes only and does not constitute financial, legal or relocation advice.</p>`
      },
      {
        id: 'disclaimer',
        title: 'Disclaimer',
        content: `<p>All information on Living Cost Atlas is provided for general informational purposes. While we strive for accuracy, we make no warranties -- express or implied -- about the completeness, accuracy or reliability of the data presented.</p>
        <p>Any reliance you place on our information is strictly at your own risk. Living Cost Atlas shall not be liable for any direct, indirect or consequential loss arising from your use of this website.</p>`
      },
      {
        id: 'data-sources',
        title: 'Data Sources',
        content: `<p>Cost data is compiled from publicly available databases, government statistical offices, community-contributed information and third-party cost-of-living indexes. We cross-reference multiple sources and update data quarterly. We do not guarantee the accuracy of third-party sources.</p>`
      },
      {
        id: 'external-links',
        title: 'External Links',
        content: `<p>This website may link to external sites not under our control. We have no control over the nature, content or availability of those sites. Inclusion of any link does not imply recommendation or endorsement.</p>`
      },
      {
        id: 'copyright',
        title: 'Copyright',
        content: `<p>All original content on Living Cost Atlas -- including text, structure and interface design -- is the property of Living Cost Atlas and protected under international copyright law. Unauthorised reproduction or distribution is prohibited. City and country images are sourced from Unsplash under their free licence.</p>`
      },
      {
        id: 'modifications',
        title: 'Modifications',
        content: `<p>We reserve the right to modify, suspend or discontinue any aspect of our services at any time without prior notice. Legal terms may be updated at any time; continued use of the service constitutes acceptance of the current version.</p>`
      },
      {
        id: 'governing-law',
        title: 'Governing Law',
        content: `<p>These terms are governed by applicable laws. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the appropriate courts.</p>`
      }
    ]
  }));
}

export default LegalPage;
