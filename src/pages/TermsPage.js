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
      .lp-hero{background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#0f172a 100%);padding:52px 0 44px;position:relative;overflow:hidden;}
      .lp-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 50% 70% at 70% 50%,rgba(99,102,241,0.18),transparent 70%);}
      .lp-hero__inner{position:relative;z-index:2;}
      .lp-hero__eyebrow{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#818cf8;margin-bottom:10px;}
      .lp-hero__title{font-size:clamp(26px,4vw,42px);font-weight:900;color:#fff;letter-spacing:-0.025em;margin-bottom:10px;}
      .lp-hero__sub{font-size:14px;color:rgba(255,255,255,0.5);margin:0;}
      .lp-layout{display:grid;grid-template-columns:220px 1fr;gap:48px;padding:56px 0 80px;align-items:start;}
      .lp-toc{position:sticky;top:80px;background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:20px;}
      .lp-toc__label{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;margin-bottom:12px;}
      .lp-toc__link{display:block;font-size:12px;font-weight:500;color:#6b7280;text-decoration:none;padding:5px 0;border-bottom:1px solid #f9fafb;transition:color 0.15s;}
      .lp-toc__link:last-child{border-bottom:none;}
      .lp-toc__link:hover{color:#6366f1;text-decoration:none;}
      .lp-toc__date{font-size:11px;color:#9ca3af;margin-top:16px;padding-top:12px;border-top:1px solid #f1f5f9;}
      .lp-body{max-width:720px;}
      .lp-section{margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid #f1f5f9;}
      .lp-section:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0;}
      .lp-section__title{font-size:18px;font-weight:800;color:#111827;letter-spacing:-0.01em;margin-bottom:12px;padding-top:8px;}
      .lp-section p{font-size:14px;color:#4b5563;line-height:1.85;margin-bottom:10px;}
      .lp-section p:last-child{margin-bottom:0;}
      .lp-section ul{margin:10px 0;padding:0;}
      .lp-section ul li{font-size:14px;color:#4b5563;line-height:1.7;padding:4px 0 4px 18px;position:relative;}
      .lp-section ul li::before{content:'-';position:absolute;left:0;color:#9ca3af;}
      @media(max-width:768px){.lp-layout{grid-template-columns:1fr;}.lp-toc{position:static;}}
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
          <div class="lp-toc__date">Last updated<br>${new Date().toLocaleDateString('en-US',{year:'numeric',month:'long'})}</div>
        </aside>
        <div class="lp-body">${bodyHtml}</div>
      </div>
    </div>`;
}

export function TermsPage() {
  return MainLayout(legalLayout({
    eyebrow: 'Terms',
    title: 'Terms of Service',
    subtitle: 'Please read these terms carefully before using Living Cost Atlas.',
    sections: [
      {
        id: 'agreement',
        title: 'Agreement to Terms',
        content: `<p>By accessing or using Living Cost Atlas, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the website.</p>`
      },
      {
        id: 'service',
        title: 'Service Description',
        content: `<p>Living Cost Atlas provides cost of living data, budget planning tools and nomad rankings for informational purposes only. Our services include:</p>
          <ul>
            <li>City cost guides covering housing, food, transport and coworking</li>
            <li>Interactive budget comparison calculator</li>
            <li>Digital nomad rankings and scoring</li>
            <li>Visa and tax information by destination</li>
          </ul>
          <p>Living Cost Atlas is free to use. No account or payment is required to access core features.</p>`
      },
      {
        id: 'accuracy',
        title: 'Accuracy of Information',
        content: `<p>Cost data on Living Cost Atlas is based on research from multiple sources and represents estimates intended for general guidance. Actual costs may vary significantly based on:</p>
          <ul>
            <li>Individual lifestyle choices and neighbourhood selection</li>
            <li>Seasonal variations and local market conditions</li>
            <li>Currency exchange rate fluctuations</li>
            <li>Inflation and economic changes after our last update</li>
          </ul>
          <p>We strongly recommend conducting your own research and consulting local sources before making financial or relocation decisions.</p>`
      },
      {
        id: 'licence',
        title: 'Use Licence',
        content: `<p>You are granted a limited, non-exclusive licence to access and use Living Cost Atlas for personal, non-commercial purposes. You may not:</p>
          <ul>
            <li>Systematically copy, scrape or redistribute our data</li>
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to our systems</li>
            <li>Interfere with or disrupt the service or servers</li>
          </ul>`
      },
      {
        id: 'disclaimers',
        title: 'Disclaimer of Warranties',
        content: `<p>Living Cost Atlas is provided on an "as is" and "as available" basis. We make no warranties -- expressed or implied -- including warranties of merchantability or fitness for a particular purpose. We do not warrant that the service will be uninterrupted, error-free or free of harmful components.</p>`
      },
      {
        id: 'liability',
        title: 'Limitation of Liability',
        content: `<p>Living Cost Atlas and its operators shall not be liable for any direct, indirect, incidental or consequential damages arising from your use of the service, including but not limited to financial decisions made based on our data.</p>`
      },
      {
        id: 'modifications',
        title: 'Modifications',
        content: `<p>We reserve the right to modify or discontinue the service at any time without notice. We may update these Terms at any time; continued use constitutes acceptance of the revised terms.</p>`
      },
      {
        id: 'governing-law',
        title: 'Governing Law',
        content: `<p>These terms are governed by applicable laws. Disputes will be subject to the exclusive jurisdiction of the appropriate courts.</p>`
      },
      {
        id: 'contact',
        title: 'Contact',
        content: `<p>Questions about these Terms of Service? Reach us through our official contact channels.</p>`
      }
    ]
  }));
}

export default TermsPage;
