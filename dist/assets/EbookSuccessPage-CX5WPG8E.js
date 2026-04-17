import{s as c}from"./setPageMeta-BmQKFz2d.js";import{M as t}from"./MainLayout-CBxf94lM.js";import{c as r}from"./index-Cl71dEOS.js";const a={lisbon:{city:"Lisbon",country:"Portugal",price:9.99,currency:"EUR",file:"LivingCostAtlas_Lisbon_2026.pdf"},barcelona:{city:"Barcelona",country:"Spain",price:9.99,currency:"EUR",file:"LivingCostAtlas_Barcelona_2026.pdf"},bangkok:{city:"Bangkok",country:"Thailand",price:9.99,currency:"EUR",file:"LivingCostAtlas_Bangkok_2026.pdf"},tokyo:{city:"Tokyo",country:"Japan",price:9.99,currency:"EUR",file:"LivingCostAtlas_Tokyo_2026.pdf"},bali:{city:"Bali",country:"Indonesia",price:9.99,currency:"EUR",file:"LivingCostAtlas_Bali_2026.pdf"},berlin:{city:"Berlin",country:"Germany",price:9.99,currency:"EUR",file:"LivingCostAtlas_Berlin_2026.pdf"},dubai:{city:"Dubai",country:"UAE",price:9.99,currency:"EUR",file:"LivingCostAtlas_Dubai_2026.pdf"},paris:{city:"Paris",country:"France",price:9.99,currency:"EUR",file:"LivingCostAtlas_Paris_2026.pdf"},"mexico-city":{city:"Mexico City",country:"Mexico",price:9.99,currency:"EUR",file:"LivingCostAtlas_Mexico_City_2026.pdf"},medellin:{city:"Medellin",country:"Colombia",price:9.99,currency:"EUR",file:"LivingCostAtlas_Medellin_2026.pdf"},"chiang-mai":{city:"Chiang Mai",country:"Thailand",price:9.99,currency:"EUR",file:"LivingCostAtlas_Chiang_Mai_2026.pdf"},amsterdam:{city:"Amsterdam",country:"Netherlands",price:9.99,currency:"EUR",file:"LivingCostAtlas_Amsterdam_2026.pdf"},prague:{city:"Prague",country:"Czech Republic",price:9.99,currency:"EUR",file:"LivingCostAtlas_Prague_2026.pdf"}};function u(s){const i=s.slug,e=a[i];if(!e)return t(`
      <div style="min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:40px">
        <div>
          <h1 style="font-size:32px;font-weight:800;color:#1e1b4b">Page Not Found</h1>
          <a href="/ebooks" data-link style="color:#4f46e5;margin-top:16px;display:inline-block">Browse eBooks</a>
        </div>
      </div>
    `);c({title:`Download Your ${e.city} eBook | Living Cost Atlas`,description:`Your ${e.city} relocation guide is ready for download.`});const o=`lca_purchase_${i}`;sessionStorage.getItem(o)||(r(i,e),sessionStorage.setItem(o,String(Date.now())));const n=`
    <style>
      .success-page {
        min-height:80vh;display:flex;align-items:center;justify-content:center;
        background:linear-gradient(160deg,#0f172a 0%,#1e1b4b 40%,#312e81 100%);
        padding:60px 24px;position:relative;overflow:hidden;
      }
      .success-page::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 50% 50% at 50% 40%,rgba(99,102,241,0.15),transparent 70%);
      }
      .success-card {
        position:relative;z-index:2;background:#fff;border-radius:24px;
        padding:56px 48px;max-width:560px;width:100%;text-align:center;
        box-shadow:0 25px 60px rgba(0,0,0,0.3);
      }
      .success-icon {
        width:72px;height:72px;border-radius:50%;
        background:linear-gradient(135deg,#059669,#34d399);
        display:flex;align-items:center;justify-content:center;
        margin:0 auto 24px;
      }
      .success-icon svg { color:#fff; }
      .success-title {
        font-size:28px;font-weight:800;color:#1e1b4b;margin-bottom:8px;
        letter-spacing:-0.02em;
      }
      .success-sub {
        font-size:16px;color:#6b7280;line-height:1.6;margin-bottom:32px;
      }
      .success-download {
        display:inline-flex;align-items:center;gap:10px;
        padding:18px 44px;border-radius:14px;font-weight:700;font-size:17px;
        background:linear-gradient(135deg,#d4a843 0%,#f59e0b 100%);color:#1e1b4b;
        text-decoration:none;
        box-shadow:0 8px 28px rgba(212,168,67,0.3);
        transition:transform 0.2s,box-shadow 0.2s;
      }
      .success-download:hover {
        transform:translateY(-2px);
        box-shadow:0 14px 36px rgba(212,168,67,0.4);
      }
      .success-info {
        margin-top:28px;font-size:13px;color:#9ca3af;line-height:1.6;
      }
      .success-links {
        margin-top:32px;display:flex;justify-content:center;gap:24px;
      }
      .success-links a {
        font-size:14px;color:#4f46e5;text-decoration:none;font-weight:600;
      }
      .success-links a:hover { text-decoration:underline; }
    </style>

    <section class="success-page">
      <div class="success-card">
        <div class="success-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h1 class="success-title">Payment Successful!</h1>
        <p class="success-sub">
          Thank you for your purchase. Your <strong>${e.city} Relocation Guide</strong> is ready.
        </p>
        <a href="/ebooks/${e.file}" class="success-download" download>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </a>
        <p class="success-info">
          A copy has also been sent to your email.<br>
          If you have any issues, contact support@livingcostatlas.com
        </p>
        <div class="success-links">
          <a href="/city/${i}" data-link>Explore ${e.city}</a>
          <a href="/ebooks" data-link>Browse More Guides</a>
        </div>
      </div>
    </section>
  `;return t(n)}export{u as EbookSuccessPage};
