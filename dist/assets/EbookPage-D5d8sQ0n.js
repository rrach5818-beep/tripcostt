import{s as r,i as l}from"./setPageMeta-BmQKFz2d.js";import{M as n}from"./MainLayout-yopsxLtK.js";import{t as p,a as g}from"./index-C2ZcIkxM.js";function t(o){return["Executive Summary & LCA Index Score","Detailed Cost Breakdown (housing, food, transport, utilities)","Monthly Budget Scenarios (3 profiles)","5 Neighborhood Analyses with rent ranges",`Visa & Tax Guide for ${o}`,"City Comparison vs Peer Destinations","Safety, Quality of Life & Infrastructure Scorecards","Risk Factors & Economic Outlook 2026"]}const c={lisbon:{city:"Lisbon",country:"Portugal",price:9.99,currency:"EUR",pages:28,pdfPath:"/ebooks/LivingCostAtlas_Lisbon_2026.pdf",coverImage:"/images/ebooks/lisbon-cover.png",stripeLink:"https://buy.stripe.com/4gM4gAe7R12xacHbfd3gk00",highlights:t("Lisbon"),stats:{nomadScore:81,avgRent:1800,safety:85,wifi:120}},barcelona:{city:"Barcelona",country:"Spain",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Barcelona_2026.pdf",coverImage:"/images/ebooks/barcelona-cover.png",stripeLink:"https://buy.stripe.com/cNieVe4xhbHbbgLcjh3gk01",highlights:t("Barcelona"),stats:{nomadScore:82,avgRent:1500,safety:75,wifi:140}},bangkok:{city:"Bangkok",country:"Thailand",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Bangkok_2026.pdf",coverImage:"/images/ebooks/bangkok-cover.png",stripeLink:"https://buy.stripe.com/14A7sMgfZ6mRgB55UT3gk02",highlights:t("Bangkok"),stats:{nomadScore:88,avgRent:750,safety:65,wifi:80}},tokyo:{city:"Tokyo",country:"Japan",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Tokyo_2026.pdf",coverImage:"/images/ebooks/tokyo-cover.png",stripeLink:"https://buy.stripe.com/6oU3cw7Jt9z31Gb4QP3gk03",highlights:t("Tokyo"),stats:{nomadScore:80,avgRent:2100,safety:95,wifi:150}},bali:{city:"Bali",country:"Indonesia",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Bali_2026.pdf",coverImage:"/images/ebooks/bali-cover.png",stripeLink:"https://buy.stripe.com/00wfZiaVF6mR70v2IH3gk04",highlights:t("Bali"),stats:{nomadScore:92,avgRent:600,safety:70,wifi:40}},berlin:{city:"Berlin",country:"Germany",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Berlin_2026.pdf",coverImage:"/images/ebooks/berlin-cover.png",stripeLink:"https://buy.stripe.com/fZu8wQ2p912xesXfvt3gk05",highlights:t("Berlin"),stats:{nomadScore:83,avgRent:1650,safety:80,wifi:100}},dubai:{city:"Dubai",country:"UAE",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Dubai_2026.pdf",coverImage:"/images/ebooks/dubai-cover.png",stripeLink:"https://buy.stripe.com/6oUcN62p9cLf84z3ML3gk06",highlights:t("Dubai"),stats:{nomadScore:79,avgRent:2400,safety:95,wifi:120}},paris:{city:"Paris",country:"France",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Paris_2026.pdf",coverImage:"/images/ebooks/paris-cover.png",stripeLink:"https://buy.stripe.com/6oU5kE0h1bHbbgL8313gk07",highlights:t("Paris"),stats:{nomadScore:78,avgRent:2100,safety:70,wifi:200}},"mexico-city":{city:"Mexico City",country:"Mexico",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Mexico_City_2026.pdf",coverImage:"/images/ebooks/mexico-city-cover.png",stripeLink:"https://buy.stripe.com/dRm00k4xh9z31Gb8313gk08",highlights:t("Mexico City"),stats:{nomadScore:66,avgRent:1200,safety:55,wifi:100}},medellin:{city:"Medellin",country:"Colombia",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Medellin_2026.pdf",coverImage:"/images/ebooks/medellin-cover.png",stripeLink:"https://buy.stripe.com/28E9AU1l5h1vckP2IH3gk09",highlights:t("Medellin"),stats:{nomadScore:64,avgRent:900,safety:60,wifi:100}},"chiang-mai":{city:"Chiang Mai",country:"Thailand",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Chiang_Mai_2026.pdf",coverImage:"/images/ebooks/chiang-mai-cover.png",stripeLink:"https://buy.stripe.com/dRmdRafbVeTn84zbfd3gk0a",highlights:t("Chiang Mai"),stats:{nomadScore:67,avgRent:500,safety:85,wifi:90}},amsterdam:{city:"Amsterdam",country:"Netherlands",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Amsterdam_2026.pdf",coverImage:"/images/ebooks/amsterdam-cover.png",stripeLink:"https://buy.stripe.com/eVq6oIe7R26B98Dbfd3gk0b",highlights:t("Amsterdam"),stats:{nomadScore:85,avgRent:2200,safety:80,wifi:200}},prague:{city:"Prague",country:"Czech Republic",price:9.99,currency:"EUR",pages:22,pdfPath:"/ebooks/LivingCostAtlas_Prague_2026.pdf",coverImage:"/images/ebooks/prague-cover.png",stripeLink:"https://buy.stripe.com/4gM6oI7JtfXr70v3ML3gk0c",highlights:t("Prague"),stats:{nomadScore:81,avgRent:1400,safety:85,wifi:180}}};function m(o){const i=o.slug,e=c[i];if(!e)return r({title:"eBook Not Found | Living Cost Atlas",description:"This eBook is not available."}),n(`
      <div style="min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:40px">
        <div>
          <h1 style="font-size:36px;font-weight:800;color:#1e1b4b;margin-bottom:16px">eBook Not Found</h1>
          <p style="color:#6b7280;font-size:17px;margin-bottom:32px">This premium guide is not available yet.</p>
          <a href="/destinations" data-link style="display:inline-block;padding:14px 32px;background:#4f46e5;color:#fff;border-radius:12px;font-weight:600;text-decoration:none">Browse Destinations</a>
        </div>
      </div>
    `);r({title:`${e.city} Cost of Living eBook 2026 | Living Cost Atlas`,description:`The complete ${e.pages}-page relocation guide for ${e.city}, ${e.country}. Data-driven cost breakdowns, neighborhood analysis, visa info & budget scenarios.`,image:`https://www.livingcostatlas.com${e.coverImage}`}),p(i,e),l({"@context":"https://schema.org","@type":"Product",name:`${e.city} Cost of Living & Relocation Guide 2026`,description:`${e.pages}-page premium relocation guide for ${e.city}, ${e.country}. Real cost data, neighborhood analysis, visa guide & budget scenarios.`,image:`https://www.livingcostatlas.com${e.coverImage}`,brand:{"@type":"Brand",name:"Living Cost Atlas"},offers:{"@type":"Offer",price:e.price,priceCurrency:e.currency,availability:"https://schema.org/InStock",url:`https://www.livingcostatlas.com/ebook/${i}`},aggregateRating:{"@type":"AggregateRating",ratingValue:"4.8",reviewCount:"12"}});const a=`
    <style>
      /* ---- Hero ---- */
      .eb-hero {
        background:linear-gradient(160deg,#0f172a 0%,#1e1b4b 40%,#312e81 100%);
        padding:72px 0 80px;position:relative;overflow:hidden;
      }
      .eb-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 50% at 20% 50%,rgba(99,102,241,0.18),transparent 70%);
      }
      .eb-hero::after {
        content:'';position:absolute;top:0;right:0;width:40%;height:100%;
        background:radial-gradient(ellipse 80% 60% at 80% 30%,rgba(212,168,67,0.06),transparent 70%);
      }
      .eb-hero__inner {
        position:relative;z-index:2;display:flex;gap:56px;align-items:center;
        max-width:1100px;margin:0 auto;padding:0 32px;
      }
      .eb-hero__cover {
        flex:0 0 340px;
      }
      .eb-hero__cover img {
        width:340px;height:auto;border-radius:8px;
        box-shadow:0 30px 60px rgba(0,0,0,0.5),0 0 0 1px rgba(255,255,255,0.06);
        transition:transform 0.4s ease;
      }
      .eb-hero__cover:hover img {
        transform:translateY(-6px) scale(1.02);
      }

      .eb-hero__text { flex:1;min-width:0; }
      .eb-hero__badge {
        display:inline-block;padding:6px 14px;border-radius:20px;font-size:11px;
        font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
        background:rgba(212,168,67,0.12);color:#d4a843;border:1px solid rgba(212,168,67,0.25);
        margin-bottom:20px;
      }
      .eb-hero__title {
        font-size:clamp(30px,4.5vw,48px);font-weight:900;color:#fff;
        letter-spacing:-0.03em;line-height:1.12;margin-bottom:18px;
      }
      .eb-hero__title em { font-style:normal;color:#d4a843; }
      .eb-hero__sub {
        font-size:17px;color:rgba(255,255,255,0.55);line-height:1.75;margin-bottom:28px;
      }
      .eb-hero__meta {
        display:flex;gap:32px;margin-bottom:32px;
      }
      .eb-meta {
        display:flex;align-items:center;gap:8px;
      }
      .eb-meta__icon {
        width:36px;height:36px;border-radius:10px;
        background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);
        display:flex;align-items:center;justify-content:center;
        color:#d4a843;font-size:14px;font-weight:800;
      }
      .eb-meta__text {
        font-size:13px;color:rgba(255,255,255,0.5);line-height:1.3;
      }
      .eb-meta__text strong {
        display:block;color:#fff;font-size:15px;font-weight:700;
      }
      .eb-hero__actions {
        display:flex;align-items:center;gap:20px;flex-wrap:wrap;
      }
      .eb-btn-buy {
        display:inline-flex;align-items:center;gap:10px;
        padding:16px 40px;border-radius:12px;font-weight:700;font-size:16px;
        background:linear-gradient(135deg,#d4a843 0%,#f59e0b 100%);color:#1e1b4b;
        text-decoration:none;border:none;cursor:pointer;
        box-shadow:0 8px 28px rgba(212,168,67,0.3);
        transition:transform 0.2s,box-shadow 0.2s;letter-spacing:0.3px;
      }
      .eb-btn-buy:hover {
        transform:translateY(-2px);
        box-shadow:0 14px 36px rgba(212,168,67,0.4);
      }
      .eb-btn-buy svg { flex-shrink:0; }
      .eb-price {
        text-align:center;
      }
      .eb-price__amount {
        font-size:36px;font-weight:900;color:#fff;line-height:1;
      }
      .eb-price__currency {
        font-size:14px;color:rgba(255,255,255,0.45);font-weight:500;
      }
      .eb-hero__trust {
        display:flex;gap:24px;margin-top:20px;
      }
      .eb-trust {
        font-size:12px;color:rgba(255,255,255,0.4);display:flex;align-items:center;gap:6px;
      }
      .eb-trust svg { flex-shrink:0;opacity:0.5; }

      /* ---- Content ---- */
      .eb-content { padding:80px 0;background:#fff; }
      .eb-content__inner { max-width:1100px;margin:0 auto;padding:0 32px; }
      .eb-section-title {
        font-size:32px;font-weight:800;color:#1e1b4b;letter-spacing:-0.03em;
        margin-bottom:6px;
      }
      .eb-section-sub {
        font-size:16px;color:#9ca3af;margin-bottom:44px;
      }
      .eb-gold-line {
        width:48px;height:3px;background:linear-gradient(90deg,#d4a843,#e8c97a);
        border-radius:2px;margin-bottom:16px;
      }

      /* Table of contents grid */
      .eb-toc {
        display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
        gap:14px;margin-bottom:72px;
      }
      .eb-toc__item {
        display:flex;align-items:center;gap:16px;
        padding:16px 20px;background:#fafafa;border-radius:12px;
        border:1px solid #f0f0f0;transition:border-color 0.2s,box-shadow 0.2s;
      }
      .eb-toc__item:hover {
        border-color:#d4a843;box-shadow:0 4px 16px rgba(212,168,67,0.1);
      }
      .eb-toc__num {
        flex:0 0 38px;height:38px;border-radius:10px;
        background:#1e1b4b;
        display:flex;align-items:center;justify-content:center;
        color:#d4a843;font-size:13px;font-weight:800;letter-spacing:0.5px;
      }
      .eb-toc__text {
        font-size:14px;color:#374151;font-weight:500;line-height:1.4;
      }

      /* Features */
      .eb-features {
        display:grid;grid-template-columns:repeat(4,1fr);
        gap:20px;margin-bottom:72px;
      }
      .eb-feature {
        background:#fafafa;border-radius:14px;padding:28px 24px;
        border:1px solid #f0f0f0;text-align:center;
        transition:border-color 0.2s,transform 0.2s;
      }
      .eb-feature:hover { border-color:#e5e7eb;transform:translateY(-2px); }
      .eb-feature__icon {
        width:48px;height:48px;border-radius:12px;margin:0 auto 14px;
        display:flex;align-items:center;justify-content:center;font-size:20px;
      }
      .eb-feature__title {
        font-size:15px;font-weight:700;color:#1e1b4b;margin-bottom:6px;
      }
      .eb-feature__desc {
        font-size:13px;color:#9ca3af;line-height:1.6;
      }

      /* Bottom CTA */
      .eb-bottom-cta {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 100%);
        border-radius:20px;padding:56px 48px;text-align:center;position:relative;overflow:hidden;
      }
      .eb-bottom-cta::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(circle at 50% 0%,rgba(212,168,67,0.08),transparent 60%);
      }
      .eb-bottom-cta h2 {
        font-size:30px;font-weight:800;color:#fff;margin-bottom:12px;position:relative;
      }
      .eb-bottom-cta p {
        font-size:16px;color:rgba(255,255,255,0.55);margin-bottom:32px;
        max-width:560px;margin-left:auto;margin-right:auto;position:relative;
      }

      /* FAQ */
      .eb-faq { margin-top:72px; }
      .eb-faq__item { border-bottom:1px solid #f0f0f0;padding:22px 0; }
      .eb-faq__q { font-size:16px;font-weight:700;color:#1e1b4b;margin-bottom:8px; }
      .eb-faq__a { font-size:14px;color:#6b7280;line-height:1.75; }

      @media(max-width:860px) {
        .eb-hero__inner { flex-direction:column;text-align:center; }
        .eb-hero__cover { flex:none; }
        .eb-hero__cover img { width:260px; }
        .eb-hero__meta { justify-content:center; }
        .eb-hero__actions { justify-content:center; }
        .eb-hero__trust { justify-content:center; }
        .eb-features { grid-template-columns:repeat(2,1fr); }
      }
      @media(max-width:500px) {
        .eb-features { grid-template-columns:1fr; }
        .eb-hero__meta { flex-direction:column;align-items:center;gap:16px; }
      }
    </style>

    <!-- HERO -->
    <section class="eb-hero">
      <div class="eb-hero__inner">
        <div class="eb-hero__cover">
          <img src="${e.coverImage}" alt="${e.city} eBook Cover" width="340" height="483">
        </div>

        <div class="eb-hero__text">
          <div class="eb-hero__badge">Premium Relocation Guide - 2026</div>
          <h1 class="eb-hero__title">
            <em>${e.city}</em> Cost of Living &amp; Relocation Guide
          </h1>
          <p class="eb-hero__sub">
            ${e.pages} pages of data-driven insights for remote workers, expats &amp;
            global professionals planning a move to ${e.city}.
          </p>

          <div class="eb-hero__meta">
            <div class="eb-meta">
              <div class="eb-meta__icon">${e.pages}</div>
              <div class="eb-meta__text"><strong>Pages</strong>In-depth data</div>
            </div>
            <div class="eb-meta">
              <div class="eb-meta__icon">${e.stats.nomadScore}</div>
              <div class="eb-meta__text"><strong>Nomad Score</strong>Out of 100</div>
            </div>
            <div class="eb-meta">
              <div class="eb-meta__icon">${e.stats.safety}</div>
              <div class="eb-meta__text"><strong>Safety Index</strong>Out of 100</div>
            </div>
          </div>

          <div class="eb-hero__actions">
            <div class="eb-price">
              <div class="eb-price__amount">${e.price}<span class="eb-price__currency"> EUR</span></div>
            </div>
            <button class="eb-btn-buy" id="ebook-buy-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Get the eBook
            </button>
          </div>

          <div class="eb-hero__trust">
            <span class="eb-trust">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Secure payment
            </span>
            <span class="eb-trust">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Instant PDF download
            </span>
            <span class="eb-trust">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              30-day money-back
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="eb-content">
      <div class="eb-content__inner">
        <div class="eb-gold-line"></div>
        <h2 class="eb-section-title">What's Inside</h2>
        <p class="eb-section-sub">${e.pages} pages covering everything you need to plan your move to ${e.city}</p>

        <div class="eb-toc">
          ${e.highlights.map((s,d)=>`
            <div class="eb-toc__item">
              <div class="eb-toc__num">${String(d+1).padStart(2,"0")}</div>
              <div class="eb-toc__text">${s}</div>
            </div>
          `).join("")}
        </div>

        <div class="eb-gold-line"></div>
        <h2 class="eb-section-title">Why This Guide?</h2>
        <p class="eb-section-sub">Built from verified data sources, not blog posts</p>

        <div class="eb-features">
          <div class="eb-feature">
            <div class="eb-feature__icon" style="background:#eef2ff;color:#4f46e5;font-weight:800">$</div>
            <div class="eb-feature__title">Real Cost Data</div>
            <div class="eb-feature__desc">Q1 2026 market prices for rent, food, transport &amp; utilities.</div>
          </div>
          <div class="eb-feature">
            <div class="eb-feature__icon" style="background:#ecfdf5;color:#059669;font-weight:800">3x</div>
            <div class="eb-feature__title">Budget Profiles</div>
            <div class="eb-feature__desc">Nomad, professional &amp; premium expat monthly budgets.</div>
          </div>
          <div class="eb-feature">
            <div class="eb-feature__icon" style="background:#fffbeb;color:#d97706;font-weight:800">5</div>
            <div class="eb-feature__title">Neighborhoods</div>
            <div class="eb-feature__desc">Rent ranges, pros/cons &amp; best-for profiles per district.</div>
          </div>
          <div class="eb-feature">
            <div class="eb-feature__icon" style="background:#fef2f2;color:#dc2626;font-weight:800">D8</div>
            <div class="eb-feature__title">Visa &amp; Tax</div>
            <div class="eb-feature__desc">Digital Nomad Visa &amp; IFICI tax incentive guide.</div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="eb-faq">
          <div class="eb-gold-line"></div>
          <h2 class="eb-section-title">FAQ</h2>
          <div class="eb-faq__item">
            <div class="eb-faq__q">What format is the eBook?</div>
            <div class="eb-faq__a">A professionally designed PDF you can read on any device, print, or save offline.</div>
          </div>
          <div class="eb-faq__item">
            <div class="eb-faq__q">How current is the data?</div>
            <div class="eb-faq__a">All prices reflect Q1 2026 market estimates from local databases and government statistics.</div>
          </div>
          <div class="eb-faq__item">
            <div class="eb-faq__q">Is there a refund policy?</div>
            <div class="eb-faq__a">Yes. 30-day money-back guarantee, no questions asked.</div>
          </div>
          <div class="eb-faq__item">
            <div class="eb-faq__q">Will you add more cities?</div>
            <div class="eb-faq__a">Yes, new guides are coming soon. Visit our destinations page to see all covered cities.</div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="eb-bottom-cta" style="margin-top:72px">
          <h2>Ready to Plan Your Move?</h2>
          <p>${e.pages} pages of actionable data for ${e.city}. One purchase, lifetime access.</p>
          <button class="eb-btn-buy" id="ebook-buy-btn-bottom" style="position:relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Get the eBook - ${e.price} EUR
          </button>
          <p style="font-size:12px;color:rgba(255,255,255,0.35);margin-top:16px;position:relative">Secure payment via Stripe. Instant PDF delivery.</p>
        </div>
      </div>
    </section>
  `;return n(a)}function v(){const o=window.location.pathname.replace("/ebook/",""),i=c[o];if(!i)return;const e=()=>{g(o,i),i.stripeLink?window.open(i.stripeLink,"_blank"):window.open(i.pdfPath,"_blank")},a=document.getElementById("ebook-buy-btn"),s=document.getElementById("ebook-buy-btn-bottom");a&&a.addEventListener("click",e),s&&s.addEventListener("click",e)}export{m as EbookPage,v as setupEbookPageInteractivity};
