import{s as o}from"./setPageMeta-BmQKFz2d.js";import{M as r}from"./MainLayout-Du2sJ_sj.js";const i=[{slug:"lisbon",city:"Lisbon",country:"Portugal",price:9.99,pages:28,nomadScore:81,safety:85},{slug:"barcelona",city:"Barcelona",country:"Spain",price:9.99,pages:22,nomadScore:82,safety:75},{slug:"bangkok",city:"Bangkok",country:"Thailand",price:9.99,pages:22,nomadScore:88,safety:65},{slug:"tokyo",city:"Tokyo",country:"Japan",price:9.99,pages:22,nomadScore:80,safety:95},{slug:"bali",city:"Bali",country:"Indonesia",price:9.99,pages:22,nomadScore:92,safety:70},{slug:"berlin",city:"Berlin",country:"Germany",price:9.99,pages:22,nomadScore:83,safety:80},{slug:"dubai",city:"Dubai",country:"UAE",price:9.99,pages:22,nomadScore:79,safety:95},{slug:"paris",city:"Paris",country:"France",price:9.99,pages:22,nomadScore:78,safety:70}];function c(){o({title:"Premium Relocation eBooks | Living Cost Atlas",description:"Data-driven cost of living & relocation guides for digital nomads, remote workers and expats. 20+ pages of real data per city."});const a=`
    <style>
      .eb-hero {
        background:linear-gradient(160deg,#0f172a 0%,#1e1b4b 40%,#312e81 100%);
        padding:72px 0 64px;text-align:center;position:relative;overflow:hidden;
      }
      .eb-hero::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 50% 60% at 50% 40%,rgba(99,102,241,0.18),transparent 70%);
      }
      .eb-hero__inner { position:relative;z-index:2;max-width:700px;margin:0 auto;padding:0 24px; }
      .eb-hero__badge {
        display:inline-block;padding:6px 16px;border-radius:20px;font-size:11px;
        font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
        background:rgba(212,168,67,0.12);color:#d4a843;border:1px solid rgba(212,168,67,0.25);
        margin-bottom:20px;
      }
      .eb-hero__title {
        font-size:clamp(32px,5vw,52px);font-weight:900;color:#fff;
        letter-spacing:-0.03em;line-height:1.1;margin-bottom:16px;
      }
      .eb-hero__title em { font-style:normal;color:#d4a843; }
      .eb-hero__sub {
        font-size:17px;color:rgba(255,255,255,0.55);line-height:1.7;
      }

      .eb-grid-section {
        padding:64px 0 80px;background:#fff;
      }
      .eb-grid-inner {
        max-width:1140px;margin:0 auto;padding:0 24px;
      }
      .eb-grid {
        display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
        gap:24px;
      }
      .eb-card {
        display:flex;flex-direction:column;border-radius:16px;overflow:hidden;
        border:1px solid #f0f0f0;background:#fff;text-decoration:none;color:inherit;
        transition:transform 0.25s,box-shadow 0.25s;
      }
      .eb-card:hover {
        transform:translateY(-4px);
        box-shadow:0 16px 40px rgba(30,27,75,0.12);
      }
      .eb-card__cover {
        background:linear-gradient(135deg,#1e1b4b,#312e81);
        display:flex;align-items:center;justify-content:center;
        padding:24px 20px 16px;
      }
      .eb-card__cover img {
        width:160px;height:auto;border-radius:6px;
        box-shadow:0 12px 30px rgba(0,0,0,0.4);
        transition:transform 0.3s;
      }
      .eb-card:hover .eb-card__cover img { transform:scale(1.03); }
      .eb-card__body {
        padding:20px;flex:1;display:flex;flex-direction:column;
      }
      .eb-card__tags {
        display:flex;gap:8px;margin-bottom:10px;
      }
      .eb-card__tag {
        font-size:11px;font-weight:600;color:#6366f1;
        background:#eef2ff;padding:3px 10px;border-radius:99px;
      }
      .eb-card__title {
        font-size:20px;font-weight:800;color:#1e1b4b;letter-spacing:-0.02em;
        margin-bottom:2px;
      }
      .eb-card__country {
        font-size:14px;color:#9ca3af;margin-bottom:auto;padding-bottom:16px;
      }
      .eb-card__bottom {
        display:flex;justify-content:space-between;align-items:center;
        border-top:1px solid #f0f0f0;padding-top:14px;
      }
      .eb-card__price {
        font-size:18px;font-weight:800;color:#1e1b4b;
      }
      .eb-card__cta {
        font-size:13px;font-weight:600;color:#d4a843;
      }
    </style>

    <section class="eb-hero">
      <div class="eb-hero__inner">
        <div class="eb-hero__badge">Relocation Intelligence Series</div>
        <h1 class="eb-hero__title">Premium City <em>eBooks</em></h1>
        <p class="eb-hero__sub">Data-driven relocation guides for digital nomads, remote workers &amp; expats. Real costs, real neighborhoods, real advice.</p>
      </div>
    </section>

    <section class="eb-grid-section">
      <div class="eb-grid-inner">
        <div class="eb-grid">
          ${i.map(e=>`
    <a href="/ebook/${e.slug}" data-link class="eb-card">
      <div class="eb-card__cover">
        <img src="/images/ebooks/${e.slug}-cover.png" alt="${e.city} eBook Cover" width="200" height="283" loading="lazy">
      </div>
      <div class="eb-card__body">
        <div class="eb-card__tags">
          <span class="eb-card__tag">${e.pages} pages</span>
          <span class="eb-card__tag">Nomad ${e.nomadScore}</span>
        </div>
        <h3 class="eb-card__title">${e.city}</h3>
        <p class="eb-card__country">${e.country}</p>
        <div class="eb-card__bottom">
          <span class="eb-card__price">${e.price} EUR</span>
          <span class="eb-card__cta">View Guide &rarr;</span>
        </div>
      </div>
    </a>
  `).join("")}
        </div>
      </div>
    </section>
  `;return r(a)}export{c as EbooksPage};
