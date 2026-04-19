import{M as s}from"./MainLayout-yopsxLtK.js";function r({eyebrow:e,title:i,subtitle:n,sections:o}){const a=o.map(t=>`<a href="#${t.id}" class="lp-toc__link">${t.title}</a>`).join(""),l=o.map(t=>`
    <div class="lp-section" id="${t.id}">
      <h2 class="lp-section__title">${t.title}</h2>
      ${t.content}
    </div>
  `).join("");return`
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
      .lp-section h3{font-size:14px;font-weight:700;color:#374151;margin:16px 0 6px;}
      @media(max-width:768px){.lp-layout{grid-template-columns:1fr;}.lp-toc{position:static;}}
    </style>
    <section class="lp-hero">
      <div class="container lp-hero__inner">
        <p class="lp-hero__eyebrow">${e}</p>
        <h1 class="lp-hero__title">${i}</h1>
        <p class="lp-hero__sub">${n}</p>
      </div>
    </section>
    <div class="container">
      <div class="lp-layout">
        <aside class="lp-toc">
          <div class="lp-toc__label">Contents</div>
          ${a}
          <div class="lp-toc__date">Last updated<br>${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long"})}</div>
        </aside>
        <div class="lp-body">${l}</div>
      </div>
    </div>`}function c(){return s(r({eyebrow:"Privacy",title:"Privacy Policy",subtitle:"How we collect, use and protect your information.",sections:[{id:"intro",title:"Introduction",content:"<p>Living Cost Atlas is committed to protecting your privacy. This policy explains how we handle information when you use our website. We built Living Cost Atlas with a privacy-first mindset: we collect as little data as possible and never sell it.</p>"},{id:"what-we-collect",title:"Information We Collect",content:`
          <h3>Information you provide</h3>
          <ul>
            <li>Contact information if you reach out to us directly</li>
            <li>Feedback or suggestions you voluntarily submit</li>
          </ul>
          <h3>Automatically collected</h3>
          <p>When you visit Living Cost Atlas, basic analytics data may be collected automatically:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Pages visited and time on page</li>
            <li>General geographic region (country-level only)</li>
            <li>Referring website</li>
          </ul>
          <p>We do not collect names, emails or any personally identifiable information through normal browsing.</p>`},{id:"how-we-use",title:"How We Use Your Information",content:`<p>We use collected data solely to:</p>
          <ul>
            <li>Understand how people use Living Cost Atlas and improve the experience</li>
            <li>Identify and fix technical issues</li>
            <li>Respond to your enquiries if you contact us</li>
          </ul>
          <p>We do not use your data for advertising, profiling or any commercial purpose beyond operating Living Cost Atlas.</p>`},{id:"cookies",title:"Cookies",content:"<p>Living Cost Atlas may use minimal cookies for analytics and session management. We do not use third-party advertising cookies. You can control cookie settings through your browser preferences. Disabling cookies will not affect your ability to use Living Cost Atlas.</p>"},{id:"data-sharing",title:"Data Sharing",content:"<p>We do not sell, rent or trade your personal information to any third party. We may share anonymised, aggregated data (e.g. total page visits) for transparency purposes. If we use analytics providers, they are bound by strict data processing agreements.</p>"},{id:"security",title:"Data Security",content:"<p>We implement appropriate technical measures to protect information against unauthorised access or disclosure. However, no internet transmission is 100% secure. We recommend not sharing sensitive personal data through any online service.</p>"},{id:"your-rights",title:"Your Rights",content:`<p>Depending on your jurisdiction, you may have rights including:</p>
          <ul>
            <li>Access to personal data we hold about you</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data ("right to be forgotten")</li>
            <li>Objection to processing</li>
          </ul>
          <p>To exercise any of these rights, contact us through our official channels.</p>`},{id:"children",title:"Children's Privacy",content:"<p>Living Cost Atlas is not directed at individuals under 16. We do not knowingly collect data from minors. If you believe a child has submitted personal information, contact us and we will delete it promptly.</p>"},{id:"changes",title:"Changes to This Policy",content:"<p>We may update this Privacy Policy periodically. Material changes will be reflected by the updated date below. Continued use of Living Cost Atlas after changes constitutes acceptance of the revised policy.</p>"},{id:"contact",title:"Contact",content:"<p>Questions about this Privacy Policy? Contact us through our official channels and we'll respond as promptly as possible.</p>"}]}))}export{c as PrivacyPage,c as default};
