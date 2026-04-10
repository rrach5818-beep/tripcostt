/**
 * CityPage — Full Redesign V2
 * Full-bleed hero, sticky nav, visual cost bars, image city cards
 */

import { MainLayout } from '../layouts/MainLayout.js';
import { getCityBySlug, getAllCities } from '../data/cityService.js';
import { formatCurrency } from '../logic/budgetCalculator.js';
import { getCityIntro, getCostSectionText, getLifestyleText, getNomadText, getFAQ } from '../data/cityTextTemplates.js';
import { getCityMetaTitle, getCityMetaDescription } from '../data/citySeoTemplates.js';
import { setPageMeta } from '../logic/setPageMeta.js';

export function CityPage(params) {
  const { slug } = params;
  const city = getCityBySlug(slug);

  if (!city) {
    return MainLayout(`
      <div style="text-align:center;padding:120px 24px">
        <div style="font-size:48px;margin-bottom:16px">🌍</div>
        <h1 style="font-size:28px;font-weight:800;color:#111827;margin-bottom:12px">City not found</h1>
        <p style="color:#6b7280;margin-bottom:32px">We couldn't find a city with that name.</p>
        <a href="/destinations" data-link class="btn btn--primary btn--lg">Browse all destinations</a>
      </div>
    `);
  }

  /* ── Data normalisation ───────────────────────────────── */
  const costs      = city.costs ?? {};
  const acc        = costs.accommodation ?? {};
  const food       = costs.food ?? {};
  const nomad      = city.digitalNomad ?? {};
  const visa       = city.visa ?? {};
  const tax        = city.tax ?? {};
  const infra      = city.infrastructure ?? {};
  const safety     = city.safety ?? {};
  const macro      = city.macro ?? {};

  const monthlyCenter = (acc.center ?? 0) * 30 + (food.standard ?? 0) * 30 + (costs.transport ?? 0) + (costs.coworking ?? 0);
  const monthlySuburb = (acc.suburb ?? 0) * 30 + (food.standard ?? 0) * 30 + (costs.transport ?? 0) + (costs.coworking ?? 0);

  /* ── Texts ────────────────────────────────────────────── */
  const introText     = getCityIntro(city);
  const lifestyleText = getLifestyleText(city);
  const nomadText     = getNomadText(city);
  const faqItems      = getFAQ(city);
  const metaTitle     = getCityMetaTitle(city);
  const metaDesc      = getCityMetaDescription(city);

  /* ── Similar cities ───────────────────────────────────── */
  const allCities = getAllCities();
  let similar = allCities.filter(c => c.slug !== city.slug && c.country === city.country);
  if (similar.length < 3) similar = allCities.filter(c => c.slug !== city.slug && c.continent === city.continent);
  similar = similar.slice(0, 4);

  /* ── Badges ───────────────────────────────────────────── */
  const badges = [];
  if (monthlyCenter < 1000)            badges.push({ text: 'Very Affordable', color: '#065f46', bg: '#d1fae5' });
  else if (monthlyCenter < 1600)       badges.push({ text: 'Affordable',      color: '#065f46', bg: '#d1fae5' });
  else if (monthlyCenter > 3000)       badges.push({ text: 'High Cost',       color: '#7f1d1d', bg: '#fee2e2' });
  if (nomad.wifiSpeed >= 100)          badges.push({ text: `${nomad.wifiSpeed} Mbps`,  color: '#1e3a5f', bg: '#dbeafe' });
  if (visa.remoteFriendly)             badges.push({ text: 'Nomad Visa',      color: '#4c1d95', bg: '#ede9fe' });
  if ((safety.safetyIndex ?? 0) >= 80) badges.push({ text: 'Very Safe',       color: '#065f46', bg: '#d1fae5' });

  const badgesHtml = badges.slice(0, 3).map(b =>
    `<span style="background:${b.bg};color:${b.color};font-size:11px;font-weight:700;
      padding:4px 12px;border-radius:999px;letter-spacing:0.3px">${b.text}</span>`
  ).join('');

  /* ── Score color helper ───────────────────────────────── */
  function sc(v, hi=80, mid=60) {
    return v >= hi ? '#10b981' : v >= mid ? '#f59e0b' : '#ef4444';
  }

  /* ── Cost bars ────────────────────────────────────────── */
  const maxCost = Math.max(acc.center*30, acc.suburb*30, food.budget*30, food.standard*30, food.premium*30, costs.transport, costs.coworking);
  function bar(val, color='#6366f1') {
    const w = maxCost > 0 ? Math.round((val / maxCost) * 100) : 0;
    return `<div style="flex:1;height:6px;background:#f1f5f9;border-radius:6px;overflow:hidden">
      <div style="height:100%;width:${w}%;background:${color};border-radius:6px;transition:width 0.5s"></div>
    </div>`;
  }
  function costRow(label, val, color) {
    return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <span style="font-size:12px;color:#6b7280;width:100px;flex-shrink:0">${label}</span>
      ${bar(val, color)}
      <span style="font-size:13px;font-weight:700;color:#111827;white-space:nowrap;min-width:64px;text-align:right">
        ${formatCurrency(val, city.currencySymbol)}/mo
      </span>
    </div>`;
  }

  /* ── FAQ html ─────────────────────────────────────────── */
  const coreFaq = [
    {
      q: `How much does it cost to live in ${city.name}?`,
      a: `A standard lifestyle in ${city.name} costs between ${formatCurrency(monthlySuburb, city.currencySymbol)}/month (suburb) and ${formatCurrency(monthlyCenter, city.currencySymbol)}/month (city center), covering accommodation, food, transport and coworking.`
    },
    {
      q: `Is ${city.name} safe for digital nomads?`,
      a: `${city.name} has a safety index of ${safety.safetyIndex ?? 'N/A'}/100. ${(safety.safetyIndex ?? 0) >= 70 ? 'It is generally considered safe. Normal precautions apply.' : 'Exercise standard urban caution.'}`
    },
    {
      q: `How is the internet in ${city.name}?`,
      a: `Average WiFi speed in ${city.name} is ${nomad.wifiSpeed ?? 'N/A'} Mbps — ${(nomad.wifiSpeed ?? 0) >= 100 ? 'excellent for video calls and remote work' : (nomad.wifiSpeed ?? 0) >= 50 ? 'good for most remote tasks' : 'adequate for basic tasks'}. Coworking spaces offer faster dedicated lines.`
    },
    {
      q: `Does ${city.name} have a digital nomad visa?`,
      a: visa.remoteFriendly
        ? `Yes — ${city.name} offers a remote work visa (${visa.type}). Stay up to ${visa.stayDurationMonths} months. Minimum income requirement: ${visa.minIncomeRequirement > 0 ? '$'+visa.minIncomeRequirement+'/mo' : 'none stated'}. Processing: ~${visa.processingTimeDays} days.`
        : `${city.name} does not currently offer a dedicated digital nomad visa. Standard tourist or long-stay visas apply. Always verify with official sources before travelling.`
    },
  ];
  const allFaq = [...(faqItems || []), ...coreFaq];
  const faqHtml = allFaq.map((item, i) => `
    <div class="cp-faq-item${i===0?' is-open':''}">
      <button class="cp-faq-q">
        <span>${item.q || item.question}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="cp-faq-a">${item.a || item.answer}</div>
    </div>
  `).join('');

  /* ── Similar city cards ───────────────────────────────── */
  const similarHtml = similar.map(c => {
    const m = Math.round((c.costs?.accommodation?.center ?? 0) * 30 + (c.costs?.food?.standard ?? 0) * 30 + (c.costs?.transport ?? 0) + (c.costs?.coworking ?? 0));
    return `
      <a href="/city/${c.slug}" data-link class="cp-sim-card">
        <div class="cp-sim-card__img">
          <img src="${c.image}" alt="${c.name}" loading="lazy" />
          <div class="cp-sim-card__overlay"></div>
          <span class="cp-sim-card__score" style="background:${sc(c.digitalNomad?.overallScore ?? 0)}">${c.digitalNomad?.overallScore ?? '—'}</span>
        </div>
        <div class="cp-sim-card__body">
          <strong>${c.name}</strong>
          <span>${c.country}</span>
          <span class="cp-sim-card__price">~$${m.toLocaleString()}/mo</span>
        </div>
      </a>
    `;
  }).join('');

  /* ── Compare links ────────────────────────────────────── */
  const compareHtml = similar.map(c =>
    `<a href="/compare/${city.slug}-vs-${c.slug}" data-link class="cp-compare-pill">
      ${city.name} vs ${c.name}
    </a>`
  ).join('');

  /* ── Infra scores ─────────────────────────────────────── */
  function infraBar(label, val, max=100) {
    const pct = Math.round((val / max) * 100);
    const color = sc(val, 80, 60);
    return `
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;margin-bottom:5px">
          <span style="font-size:12px;color:#6b7280;font-weight:500">${label}</span>
          <span style="font-size:12px;font-weight:700;color:${color}">${val}/100</span>
        </div>
        <div style="height:6px;background:#f1f5f9;border-radius:6px;overflow:hidden">
          <div style="height:100%;width:${pct}%;background:${color};border-radius:6px;transition:width 0.5s"></div>
        </div>
      </div>`;
  }

  /* ═══════════════════════════════════════════════════════
     PAGE CONTENT
  ═══════════════════════════════════════════════════════ */
  const content = `
    <style>
      /* ── Hero ───────────────────────────── */
      .cp-hero {
        position:relative;min-height:480px;display:flex;align-items:flex-end;
        overflow:hidden;
      }
      .cp-hero__img {
        position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
        display:block;
      }
      .cp-hero__gradient {
        position:absolute;inset:0;
        background:linear-gradient(to top,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.4) 50%,rgba(0,0,0,0.15) 100%);
      }
      .cp-hero__content {
        position:relative;z-index:2;padding:48px 0 44px;width:100%;
      }
      .cp-hero__badges { display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px; }
      .cp-hero__title {
        font-size:clamp(30px,5vw,52px);font-weight:900;color:#fff;
        letter-spacing:-0.025em;line-height:1.05;margin-bottom:8px;
      }
      .cp-hero__sub {
        font-size:15px;color:rgba(255,255,255,0.65);margin-bottom:24px;
      }
      .cp-hero__kpis {
        display:flex;gap:0;background:rgba(0,0,0,0.45);backdrop-filter:blur(10px);
        border:1px solid rgba(255,255,255,0.1);border-radius:14px;
        overflow:hidden;width:fit-content;margin-bottom:28px;
      }
      .cp-hero__kpi {
        padding:14px 24px;border-right:1px solid rgba(255,255,255,0.1);
      }
      .cp-hero__kpi:last-child { border-right:none; }
      .cp-hero__kpi-label { font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:3px; }
      .cp-hero__kpi-val { font-size:20px;font-weight:800;color:#fff;letter-spacing:-0.02em; }
      .cp-hero__actions { display:flex;gap:12px;flex-wrap:wrap; }
      .cp-btn-primary {
        display:inline-flex;align-items:center;gap:7px;
        background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;
        font-size:14px;font-weight:600;padding:11px 22px;border-radius:10px;
        text-decoration:none;transition:opacity 0.2s,transform 0.2s;
        box-shadow:0 4px 16px rgba(99,102,241,0.4);
      }
      .cp-btn-primary:hover { opacity:0.9;transform:translateY(-1px);color:#fff;text-decoration:none; }
      .cp-btn-secondary {
        display:inline-flex;align-items:center;gap:7px;
        background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);
        color:rgba(255,255,255,0.9);font-size:14px;font-weight:500;
        padding:11px 20px;border-radius:10px;text-decoration:none;
        transition:background 0.2s;
      }
      .cp-btn-secondary:hover { background:rgba(255,255,255,0.2);color:#fff;text-decoration:none; }

      /* ── Sticky nav ─────────────────────── */
      .cp-nav {
        position:sticky;top:0;z-index:100;
        background:#fff;border-bottom:1px solid #e5e7eb;
        box-shadow:0 2px 8px rgba(0,0,0,0.05);
      }
      .cp-nav__inner {
        display:flex;gap:0;overflow-x:auto;scrollbar-width:none;
      }
      .cp-nav__inner::-webkit-scrollbar { display:none; }
      .cp-nav__link {
        flex-shrink:0;padding:14px 20px;font-size:13px;font-weight:600;
        color:#6b7280;text-decoration:none;border-bottom:2px solid transparent;
        transition:color 0.15s,border-color 0.15s;white-space:nowrap;
      }
      .cp-nav__link:hover { color:#6366f1;text-decoration:none; }
      .cp-nav__link.is-active { color:#6366f1;border-bottom-color:#6366f1; }

      /* ── Sections ───────────────────────── */
      .cp-section { padding:56px 0;border-bottom:1px solid #f1f5f9; }
      .cp-section:last-child { border-bottom:none; }
      .cp-section--alt { background:#f9fafb; }
      .cp-section__eyebrow {
        font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
        color:#6366f1;margin-bottom:10px;
      }
      .cp-section__title {
        font-size:26px;font-weight:800;color:#111827;letter-spacing:-0.02em;margin-bottom:8px;
      }
      .cp-section__lead { font-size:15px;color:#4b5563;line-height:1.8;max-width:700px; }

      /* ── KPI grid ───────────────────────── */
      .cp-kpis {
        display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:32px;
      }
      .cp-kpi {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;
        padding:20px;transition:transform 0.2s,box-shadow 0.2s;
      }
      .cp-kpi:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,0.07); }
      .cp-kpi__icon { font-size:24px;margin-bottom:10px; }
      .cp-kpi__label { font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;margin-bottom:4px; }
      .cp-kpi__val { font-size:24px;font-weight:900;color:#1e1b4b;letter-spacing:-0.02em; }
      .cp-kpi__sub { font-size:11px;color:#9ca3af;margin-top:3px; }

      /* ── Cost breakdown grid ────────────── */
      .cp-costs {
        display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:32px;
      }
      .cp-cost-card {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:22px;
      }
      .cp-cost-card__title {
        font-size:13px;font-weight:700;color:#111827;margin-bottom:4px;
        display:flex;align-items:center;gap:8px;
      }
      .cp-cost-card__desc { font-size:12px;color:#9ca3af;margin-bottom:16px;line-height:1.5; }

      /* ── Infrastructure ─────────────────── */
      .cp-infra {
        display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:32px;
      }
      .cp-infra-card {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:22px;
      }
      .cp-infra-card__title {
        font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
        color:#9ca3af;margin-bottom:16px;
      }

      /* ── FAQ ────────────────────────────── */
      .cp-faq-list { display:flex;flex-direction:column;gap:10px;margin-top:28px; }
      .cp-faq-item {
        background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;
      }
      .cp-faq-q {
        width:100%;display:flex;justify-content:space-between;align-items:center;
        padding:16px 20px;font-size:14px;font-weight:600;color:#111827;
        cursor:pointer;background:none;border:none;text-align:left;gap:12px;
        transition:color 0.15s;
      }
      .cp-faq-q:hover { color:#6366f1; }
      .cp-faq-q svg { flex-shrink:0;transition:transform 0.2s; }
      .cp-faq-item.is-open .cp-faq-q svg { transform:rotate(180deg); }
      .cp-faq-a {
        max-height:0;overflow:hidden;transition:max-height 0.3s ease,padding 0.3s;
        font-size:14px;color:#4b5563;line-height:1.8;padding:0 20px;
      }
      .cp-faq-item.is-open .cp-faq-a { max-height:300px;padding:0 20px 18px; }

      /* ── Similar cities ─────────────────── */
      .cp-similar {
        display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:28px;
      }
      .cp-sim-card {
        display:block;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;
        text-decoration:none;transition:transform 0.2s,box-shadow 0.2s,border-color 0.2s;
        background:#fff;
      }
      .cp-sim-card:hover {
        transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,0.1);
        border-color:#c7d2fe;text-decoration:none;
      }
      .cp-sim-card__img { position:relative;height:130px;overflow:hidden; }
      .cp-sim-card__img img { width:100%;height:100%;object-fit:cover;transition:transform 0.3s; }
      .cp-sim-card:hover .cp-sim-card__img img { transform:scale(1.06); }
      .cp-sim-card__overlay { position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.4),transparent 60%); }
      .cp-sim-card__score {
        position:absolute;top:8px;right:8px;color:#fff;font-size:11px;font-weight:800;
        padding:3px 8px;border-radius:999px;
      }
      .cp-sim-card__body {
        padding:12px 14px;display:flex;flex-direction:column;gap:2px;
      }
      .cp-sim-card__body strong { font-size:13px;font-weight:700;color:#111827; }
      .cp-sim-card__body span { font-size:11px;color:#9ca3af; }
      .cp-sim-card__price { font-size:12px;font-weight:700;color:#6366f1 !important;margin-top:4px !important; }

      /* ── Compare pills ──────────────────── */
      .cp-compare-pills { display:flex;flex-wrap:wrap;gap:8px;margin-top:20px; }
      .cp-compare-pill {
        padding:7px 16px;border:1.5px solid #e5e7eb;border-radius:999px;
        font-size:12px;font-weight:600;color:#4f46e5;text-decoration:none;
        background:#f9fafb;transition:all 0.15s;
      }
      .cp-compare-pill:hover {
        border-color:#c7d2fe;background:#eef2ff;text-decoration:none;
      }

      /* ── Visa card ──────────────────────── */
      .cp-visa {
        background:#fff;border:1px solid #e5e7eb;border-radius:16px;
        overflow:hidden;margin-top:32px;max-width:600px;
      }
      .cp-visa__head {
        display:flex;align-items:center;justify-content:space-between;
        padding:16px 20px;border-bottom:1px solid #f1f5f9;
        background:#f9fafb;
      }
      .cp-visa__head-title { font-size:13px;font-weight:700;color:#111827; }
      .cp-visa__tag {
        font-size:11px;font-weight:700;padding:4px 12px;border-radius:999px;
      }
      .cp-visa__body { padding:16px 20px; }
      .cp-visa__row {
        display:flex;justify-content:space-between;align-items:center;
        padding:8px 0;border-bottom:1px solid #f9fafb;font-size:13px;
      }
      .cp-visa__row:last-child { border-bottom:none; }
      .cp-visa__row-label { color:#6b7280; }
      .cp-visa__row-val { font-weight:700;color:#111827; }

      /* ── CTA ────────────────────────────── */
      .cp-cta {
        background:linear-gradient(135deg,#1e1b4b 0%,#312e81 60%,#1e1b4b 100%);
        padding:72px 0;text-align:center;position:relative;overflow:hidden;
      }
      .cp-cta::before {
        content:'';position:absolute;inset:0;
        background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(99,102,241,0.25),transparent 70%);
      }
      .cp-cta__inner { position:relative;z-index:2; }
      .cp-cta h2 { font-size:36px;font-weight:800;color:#fff;letter-spacing:-0.025em;margin-bottom:12px; }
      .cp-cta p { font-size:16px;color:rgba(255,255,255,0.6);margin-bottom:32px; }

      /* ── Responsive ─────────────────────── */
      @media(max-width:900px) {
        .cp-kpis  { grid-template-columns:1fr 1fr; }
        .cp-costs { grid-template-columns:1fr; }
        .cp-infra { grid-template-columns:1fr; }
        .cp-similar { grid-template-columns:1fr 1fr; }
        .cp-hero__kpis { width:100%;overflow-x:auto; }
      }
      @media(max-width:560px) {
        .cp-kpis { grid-template-columns:1fr 1fr; }
        .cp-similar { grid-template-columns:1fr 1fr; }
        .cp-hero__kpi { padding:10px 16px; }
        .cp-hero__kpi-val { font-size:16px; }
      }
    </style>

    <!-- ══ HERO — full bleed image ════════════════════════ -->
    <section class="cp-hero">
      <img class="cp-hero__img" src="${city.image}" alt="Cost of living in ${city.name}" />
      <div class="cp-hero__gradient"></div>
      <div class="cp-hero__content">
        <div class="container">
          <div class="cp-hero__badges">${badgesHtml}</div>
          <h1 class="cp-hero__title">Cost of Living in ${city.name}</h1>
          <p class="cp-hero__sub">${city.country} · ${city.continent} · Updated March 2026</p>

          <div class="cp-hero__kpis">
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Monthly (center)</div>
              <div class="cp-hero__kpi-val">${formatCurrency(monthlyCenter, city.currencySymbol)}</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Nomad Score</div>
              <div class="cp-hero__kpi-val">${nomad.overallScore ?? '—'}/100</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">Safety Index</div>
              <div class="cp-hero__kpi-val">${safety.safetyIndex ?? '—'}/100</div>
            </div>
            <div class="cp-hero__kpi">
              <div class="cp-hero__kpi-label">WiFi Speed</div>
              <div class="cp-hero__kpi-val">${nomad.wifiSpeed ?? '—'} Mbps</div>
            </div>
          </div>

          <div class="cp-hero__actions">
            <a href="/calculator" data-link class="cp-btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Calculate my budget
            </a>
            ${similar[0] ? `<a href="/compare/${city.slug}-vs-${similar[0].slug}" data-link class="cp-btn-secondary">Compare with ${similar[0].name} →</a>` : ''}
          </div>
        </div>
      </div>
    </section>

    <!-- ══ STICKY NAV ══════════════════════════════════════ -->
    <nav class="cp-nav">
      <div class="container">
        <div class="cp-nav__inner">
          <a href="#overview"       class="cp-nav__link is-active" data-section="overview">Overview</a>
          <a href="#costs"          class="cp-nav__link" data-section="costs">Costs</a>
          <a href="#infrastructure" class="cp-nav__link" data-section="infrastructure">Infrastructure</a>
          <a href="#visa"           class="cp-nav__link" data-section="visa">Visa & Tax</a>
          <a href="#lifestyle"      class="cp-nav__link" data-section="lifestyle">Lifestyle</a>
          <a href="#nomads"         class="cp-nav__link" data-section="nomads">For Nomads</a>
          <a href="#faq"            class="cp-nav__link" data-section="faq">FAQ</a>
          <a href="#similar"        class="cp-nav__link" data-section="similar">Similar Cities</a>
        </div>
      </div>
    </nav>

    <!-- ══ OVERVIEW ════════════════════════════════════════ -->
    <section class="cp-section" id="overview">
      <div class="container">
        <p class="cp-section__eyebrow">At a Glance</p>
        <h2 class="cp-section__title">${city.name} Overview</h2>
        <p class="cp-section__lead">${introText}</p>

        <div class="cp-kpis">
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🏠</div>
            <div class="cp-kpi__label">City Center rent</div>
            <div class="cp-kpi__val">${formatCurrency(acc.center * 30, city.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🍽️</div>
            <div class="cp-kpi__label">Food (standard)</div>
            <div class="cp-kpi__val">${formatCurrency(food.standard * 30, city.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">🚇</div>
            <div class="cp-kpi__label">Transport</div>
            <div class="cp-kpi__val">${formatCurrency(costs.transport, city.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
          <div class="cp-kpi">
            <div class="cp-kpi__icon">💻</div>
            <div class="cp-kpi__label">Coworking</div>
            <div class="cp-kpi__val">${formatCurrency(costs.coworking, city.currencySymbol)}</div>
            <div class="cp-kpi__sub">per month</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ COSTS ═══════════════════════════════════════════ -->
    <section class="cp-section cp-section--alt" id="costs">
      <div class="container">
        <p class="cp-section__eyebrow">Monthly Expenses</p>
        <h2 class="cp-section__title">Cost Breakdown in ${city.name}</h2>
        <p class="cp-section__lead">
          All prices in USD. Bar lengths are relative to the highest cost category.
        </p>
        <div class="cp-costs">

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🏠 Accommodation</div>
            <div class="cp-cost-card__desc">${getCostSectionText(city, 'accommodation')}</div>
            ${costRow('City center', acc.center * 30, '#6366f1')}
            ${costRow('Suburb', acc.suburb * 30, '#8b5cf6')}
          </div>

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🍽️ Food & Dining</div>
            <div class="cp-cost-card__desc">${getCostSectionText(city, 'food')}</div>
            ${costRow('Budget', food.budget * 30, '#10b981')}
            ${costRow('Standard', food.standard * 30, '#059669')}
            ${costRow('Premium', food.premium * 30, '#047857')}
          </div>

          <div class="cp-cost-card">
            <div class="cp-cost-card__title">🚇 Transport & Work</div>
            <div class="cp-cost-card__desc">${getCostSectionText(city, 'transport')}</div>
            ${costRow('Transport', costs.transport, '#f59e0b')}
            ${costRow('Coworking', costs.coworking, '#d97706')}
          </div>

        </div>
      </div>
    </section>

    <!-- ══ INFRASTRUCTURE ══════════════════════════════════ -->
    <section class="cp-section" id="infrastructure">
      <div class="container">
        <p class="cp-section__eyebrow">City Quality</p>
        <h2 class="cp-section__title">Infrastructure & Quality of Life</h2>
        <div class="cp-infra">

          <div class="cp-infra-card">
            <div class="cp-infra-card__title">Infrastructure Scores</div>
            ${infraBar('Public Transport', infra.publicTransportQuality ?? 0)}
            ${infraBar('Healthcare', infra.healthcareQuality ?? 0)}
            ${infraBar('English Proficiency', infra.englishProficiency ?? 0)}
            ${infraBar('Airport Connectivity', infra.airportConnectivity ?? 0)}
          </div>

          <div class="cp-infra-card">
            <div class="cp-infra-card__title">Safety & Macro</div>
            ${infraBar('Safety Index', safety.safetyIndex ?? 0)}
            ${infraBar('Nomad Score', nomad.overallScore ?? 0)}
            <div style="margin-top:20px;padding-top:16px;border-top:1px solid #f1f5f9">
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                <span style="color:#6b7280">Crime Level</span>
                <strong style="color:#111827">${safety.crimeLevel ?? '—'}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
                <span style="color:#6b7280">Currency Stability</span>
                <strong style="color:#111827">${macro.currencyStability ?? '—'}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:12px">
                <span style="color:#6b7280">Inflation Rate</span>
                <strong style="color:#111827">${macro.inflationRate ?? '—'}%</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ══ VISA & TAX ══════════════════════════════════════ -->
    <section class="cp-section cp-section--alt" id="visa">
      <div class="container">
        <p class="cp-section__eyebrow">Legal & Financial</p>
        <h2 class="cp-section__title">Visa & Tax in ${city.name}</h2>
        <p class="cp-section__lead">
          ${visa.remoteFriendly
            ? `${city.name} offers a dedicated remote work visa — one of the most accessible destinations for digital nomads and expats.`
            : `${city.name} does not currently offer a dedicated digital nomad visa. Standard tourist or long-stay visas apply.`}
        </p>
        <div class="cp-visa">
          <div class="cp-visa__head">
            <span class="cp-visa__head-title">${visa.type ?? 'Standard Visa'}</span>
            <span class="cp-visa__tag" style="background:${visa.remoteFriendly ? '#d1fae5' : '#f1f5f9'};color:${visa.remoteFriendly ? '#065f46' : '#6b7280'}">
              ${visa.remoteFriendly ? '✅ Nomad Friendly' : '⬜ Standard'}
            </span>
          </div>
          <div class="cp-visa__body">
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Max stay</span>
              <span class="cp-visa__row-val">${visa.stayDurationMonths ?? '—'} months</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Processing time</span>
              <span class="cp-visa__row-val">~${visa.processingTimeDays ?? '—'} days</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Min. income required</span>
              <span class="cp-visa__row-val">${visa.minIncomeRequirement > 0 ? '$'+visa.minIncomeRequirement+'/mo' : 'None stated'}</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Income tax (top rate)</span>
              <span class="cp-visa__row-val">${tax.personalIncomeTaxTopRate ?? '—'}%</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Corporate tax</span>
              <span class="cp-visa__row-val">${tax.corporateTax ?? '—'}%</span>
            </div>
            <div class="cp-visa__row">
              <span class="cp-visa__row-label">Capital gains tax</span>
              <span class="cp-visa__row-val">${tax.capitalGainsTax ?? '—'}%</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ LIFESTYLE ═══════════════════════════════════════ -->
    <section class="cp-section" id="lifestyle">
      <div class="container">
        <p class="cp-section__eyebrow">Daily Life</p>
        <h2 class="cp-section__title">Living in ${city.name}</h2>
        <p class="cp-section__lead">${lifestyleText}</p>
      </div>
    </section>

    <!-- ══ FOR NOMADS ══════════════════════════════════════ -->
    <section class="cp-section cp-section--alt" id="nomads">
      <div class="container">
        <p class="cp-section__eyebrow">Remote Work</p>
        <h2 class="cp-section__title">Is ${city.name} good for digital nomads?</h2>
        <p class="cp-section__lead">${nomadText}</p>
      </div>
    </section>

    <!-- ══ FAQ ═════════════════════════════════════════════ -->
    <section class="cp-section" id="faq">
      <div class="container">
        <p class="cp-section__eyebrow">Questions</p>
        <h2 class="cp-section__title">FAQ — Living in ${city.name}</h2>
        <div class="cp-faq-list">${faqHtml}</div>
      </div>
    </section>

    <!-- ══ SIMILAR CITIES ══════════════════════════════════ -->
    <section class="cp-section cp-section--alt" id="similar">
      <div class="container">
        <p class="cp-section__eyebrow">Explore More</p>
        <h2 class="cp-section__title">Cities similar to ${city.name}</h2>
        <p class="cp-section__lead">Same region, comparable cost or lifestyle profile.</p>
        <div class="cp-similar">${similarHtml}</div>

        <div style="margin-top:32px">
          <p style="font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:12px">Compare ${city.name} with</p>
          <div class="cp-compare-pills">${compareHtml}</div>
        </div>
      </div>
    </section>

    <!-- ══ CTA ════════════════════════════════════════════ -->
    <section class="cp-cta">
      <div class="cp-cta__inner container">
        <h2>Plan your budget for ${city.name}</h2>
        <p>Get a personalized cost estimate based on your income and lifestyle.</p>
        <a href="/calculator" data-link class="cp-btn-primary" style="display:inline-flex;font-size:15px;padding:13px 28px">
          Open the Calculator →
        </a>
      </div>
    </section>
  `;

  setPageMeta({ title: metaTitle, description: metaDesc });

  // FAQ JSON-LD schema
  const existingSchema = document.getElementById('faq-jsonld');
  if (existingSchema) existingSchema.remove();
  const faqScript = document.createElement('script');
  faqScript.type = 'application/ld+json';
  faqScript.id   = 'faq-jsonld';
  faqScript.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaq.map(item => ({
      '@type': 'Question',
      name: item.q || item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.a || item.answer }
    }))
  });
  document.head.appendChild(faqScript);

  return MainLayout(content);
}

/* ─────────────────────────────────────────────────────────
   Interactivity
───────────────────────────────────────────────────────── */
export function setupCityPageInteractivity() {

  // FAQ accordion
  document.querySelectorAll('.cp-faq-item').forEach(item => {
    item.querySelector('.cp-faq-q')?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.cp-faq-item').forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  // Sticky nav active section tracking
  const sections = document.querySelectorAll('[id]');
  const navLinks  = document.querySelectorAll('.cp-nav__link[data-section]');

  if (navLinks.length && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('is-active'));
          const active = document.querySelector(`.cp-nav__link[data-section="${entry.target.id}"]`);
          if (active) active.classList.add('is-active');
        }
      });
    }, { rootMargin: '-50% 0px -40% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.dataset.section;
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

export default CityPage;
