/**
 * NewsletterPopup -- Lead magnet email capture
 * Triggers after 30s or on exit-intent (whichever first)
 * Stores dismissal in localStorage, re-shows after 7 days
 * Submits to Web3Forms (https://web3forms.com)
 * ASCII-only comments (Vite constraint)
 */

import {
  trackNewsletterPopupShown,
  trackNewsletterPopupDismissed,
  trackNewsletterSignup,
  trackFreeGuideDownload
} from '../logic/analytics.js';

const STORAGE_KEY = 'lca_newsletter_seen';
const SUBSCRIBED_KEY = 'lca_newsletter_subscribed';
const REMIND_DAYS = 7;
const TRIGGER_DELAY_MS = 30000;
const FREE_GUIDE_PDF = '/ebooks/LivingCostAtlas_FreeGuide_Top10_2026.pdf';

// Web3Forms endpoint -- replace WEB3FORMS_ACCESS_KEY with the key from
// https://web3forms.com (create account, create form, copy the access key)
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '1a716176-7bc9-4080-884a-cf88a6394cb6';

function shouldShow() {
  // Already subscribed? never show again
  if (localStorage.getItem(SUBSCRIBED_KEY)) return false;
  // Seen recently? wait REMIND_DAYS
  const lastSeen = localStorage.getItem(STORAGE_KEY);
  if (lastSeen) {
    const daysSince = (Date.now() - Number(lastSeen)) / (1000 * 60 * 60 * 24);
    if (daysSince < REMIND_DAYS) return false;
  }
  return true;
}

function markSeen() {
  localStorage.setItem(STORAGE_KEY, String(Date.now()));
}

function markSubscribed(email) {
  localStorage.setItem(SUBSCRIBED_KEY, email);
}

function injectStyles() {
  if (document.getElementById('lca-np-styles')) return;
  const style = document.createElement('style');
  style.id = 'lca-np-styles';
  style.textContent = `
    .lca-np-overlay {
      position:fixed;inset:0;z-index:10000;
      background:rgba(15,12,41,0.72);backdrop-filter:blur(6px);
      display:flex;align-items:center;justify-content:center;
      padding:20px;animation:lcaFadeIn .25s ease-out;
    }
    @keyframes lcaFadeIn { from{opacity:0} to{opacity:1} }
    @keyframes lcaSlideUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
    .lca-np-modal {
      background:#fff;border-radius:16px;max-width:520px;width:100%;
      overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,.4);
      animation:lcaSlideUp .35s cubic-bezier(.2,.9,.3,1);
      position:relative;
    }
    .lca-np-close {
      position:absolute;top:12px;right:12px;z-index:2;
      background:rgba(255,255,255,.15);border:none;color:#fff;
      width:32px;height:32px;border-radius:50%;cursor:pointer;
      font-size:18px;display:flex;align-items:center;justify-content:center;
      transition:background .15s;
    }
    .lca-np-close:hover { background:rgba(255,255,255,.28); }
    .lca-np-hero {
      background:linear-gradient(135deg,#1e1b4b 0%,#4f46e5 100%);
      color:#fff;padding:34px 28px 28px;position:relative;overflow:hidden;
    }
    .lca-np-hero::before {
      content:'';position:absolute;top:-40px;right:-40px;
      width:180px;height:180px;border-radius:50%;
      background:radial-gradient(circle,rgba(212,168,67,.25) 0%,transparent 70%);
    }
    .lca-np-badge {
      display:inline-block;background:#d4a843;color:#1e1b4b;
      font-size:11px;font-weight:800;letter-spacing:1.5px;
      padding:4px 10px;border-radius:20px;margin-bottom:14px;
    }
    .lca-np-title {
      font-size:26px;font-weight:900;line-height:1.15;margin:0 0 10px;
      letter-spacing:-0.02em;position:relative;
    }
    .lca-np-sub {
      font-size:14px;line-height:1.55;opacity:.88;margin:0;position:relative;
    }
    .lca-np-body { padding:26px 28px 28px; }
    .lca-np-perks {
      display:flex;flex-direction:column;gap:10px;margin-bottom:20px;
    }
    .lca-np-perk {
      display:flex;align-items:flex-start;gap:10px;font-size:13.5px;color:#334155;line-height:1.45;
    }
    .lca-np-perk-icon {
      width:20px;height:20px;background:#e0e7ff;color:#4f46e5;border-radius:50%;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;
      font-weight:800;font-size:12px;margin-top:1px;
    }
    .lca-np-form { display:flex;flex-direction:column;gap:10px; }
    .lca-np-input {
      width:100%;padding:13px 14px;border:1.5px solid #e2e8f0;border-radius:10px;
      font-size:14px;outline:none;transition:border-color .15s,box-shadow .15s;
      font-family:inherit;color:#1e1b4b;
    }
    .lca-np-input:focus {
      border-color:#4f46e5;box-shadow:0 0 0 4px rgba(79,70,229,.12);
    }
    .lca-np-submit {
      background:linear-gradient(135deg,#4f46e5 0%,#6366f1 100%);
      color:#fff;border:none;padding:14px 20px;border-radius:10px;
      font-size:14.5px;font-weight:700;cursor:pointer;
      transition:transform .15s,box-shadow .15s;
      font-family:inherit;
    }
    .lca-np-submit:hover { transform:translateY(-1px);box-shadow:0 10px 24px rgba(79,70,229,.35); }
    .lca-np-submit:disabled { opacity:.6;cursor:not-allowed; }
    .lca-np-foot {
      font-size:11px;color:#94a3b8;text-align:center;margin-top:14px;
    }
    .lca-np-success {
      text-align:center;padding:10px 6px;
    }
    .lca-np-check {
      width:56px;height:56px;background:#dcfce7;color:#15803d;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      font-size:32px;font-weight:900;margin:0 auto 16px;
    }
    .lca-np-success h3 { font-size:20px;margin:0 0 8px;color:#1e1b4b;font-weight:800; }
    .lca-np-success p { font-size:13.5px;color:#64748b;margin:0 0 20px;line-height:1.55; }
    .lca-np-dl {
      display:inline-flex;align-items:center;gap:8px;
      background:#1e1b4b;color:#fff;text-decoration:none;
      padding:12px 22px;border-radius:10px;font-weight:700;font-size:14px;
      transition:background .15s;
    }
    .lca-np-dl:hover { background:#4f46e5; }
    .lca-np-err {
      color:#b91c1c;font-size:12.5px;background:#fef2f2;border:1px solid #fecaca;
      padding:8px 12px;border-radius:8px;margin-top:4px;
    }
    @media (max-width:520px) {
      .lca-np-hero { padding:26px 20px 22px; }
      .lca-np-title { font-size:22px; }
      .lca-np-body  { padding:22px 20px 22px; }
    }
  `;
  document.head.appendChild(style);
}

function buildModal() {
  const overlay = document.createElement('div');
  overlay.className = 'lca-np-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'lca-np-title');

  overlay.innerHTML = `
    <div class="lca-np-modal">
      <button class="lca-np-close" aria-label="Close">&times;</button>
      <div class="lca-np-hero">
        <div class="lca-np-badge">ANNUAL REPORT</div>
        <h2 class="lca-np-title" id="lca-np-title">Digital Nomad Cities Report 2026</h2>
        <p class="lca-np-sub">Our annual ranking of the 10 most attractive destinations for remote workers -- assessed across cost, infrastructure, safety, and quality-of-life.</p>
      </div>
      <div class="lca-np-body" id="lca-np-body">
        <div class="lca-np-perks">
          <div class="lca-np-perk">
            <div class="lca-np-perk-icon">&#10003;</div>
            <div>Nomad Scores and monthly budgets for 10 cities</div>
          </div>
          <div class="lca-np-perk">
            <div class="lca-np-perk-icon">&#10003;</div>
            <div>WiFi speeds, safety index, and tier rankings</div>
          </div>
          <div class="lca-np-perk">
            <div class="lca-np-perk-icon">&#10003;</div>
            <div>No spam -- quarterly updates only, unsubscribe anytime</div>
          </div>
        </div>
        <form class="lca-np-form" id="lca-np-form" novalidate>
          <input
            type="email" name="email" id="lca-np-email"
            class="lca-np-input" placeholder="your@email.com"
            required autocomplete="email"
          />
          <button type="submit" class="lca-np-submit">Send me the guide</button>
          <div class="lca-np-foot">
            By subscribing you agree to our Privacy Policy.
            We respect your inbox.
          </div>
        </form>
      </div>
    </div>
  `;
  return overlay;
}

function showSuccess(overlay, email) {
  const body = overlay.querySelector('#lca-np-body');
  if (!body) return;
  body.innerHTML = `
    <div class="lca-np-success">
      <div class="lca-np-check">&#10003;</div>
      <h3>Check your inbox!</h3>
      <p>We sent the PDF to <strong>${email}</strong>. You can also download it right now:</p>
      <a href="${FREE_GUIDE_PDF}" class="lca-np-dl" id="lca-np-dl-btn" download target="_blank" rel="noopener">
        &#11015; Download the PDF
      </a>
    </div>
  `;
  // Track free guide download click
  const dlBtn = body.querySelector('#lca-np-dl-btn');
  if (dlBtn) dlBtn.addEventListener('click', () => trackFreeGuideDownload());
}

async function submitEmail(email) {
  // If access key is placeholder, just simulate success (dev mode)
  if (WEB3FORMS_ACCESS_KEY === 'WEB3FORMS_ACCESS_KEY') {
    console.warn('[NewsletterPopup] Web3Forms access key not configured. Simulating success.');
    return { ok: true };
  }
  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        email,
        subject: 'New Living Cost Atlas newsletter signup',
        from_name: 'Living Cost Atlas',
        source: 'lca-newsletter-popup',
        botcheck: ''
      })
    });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok && data.success !== false, data };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

function attachHandlers(overlay) {
  const closeBtn = overlay.querySelector('.lca-np-close');
  const form = overlay.querySelector('#lca-np-form');

  function close() {
    markSeen();
    trackNewsletterPopupDismissed();
    overlay.style.animation = 'lcaFadeIn .2s ease-out reverse';
    setTimeout(() => overlay.remove(), 180);
    document.removeEventListener('keydown', onEsc);
  }
  function onEsc(e) { if (e.key === 'Escape') close(); }

  closeBtn?.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', onEsc);

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = overlay.querySelector('#lca-np-email');
    const submit = overlay.querySelector('.lca-np-submit');
    const email = (input?.value || '').trim();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const existing = overlay.querySelector('.lca-np-err');
      if (existing) existing.remove();
      const err = document.createElement('div');
      err.className = 'lca-np-err';
      err.textContent = 'Please enter a valid email address.';
      form.appendChild(err);
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Sending...';
    const result = await submitEmail(email);
    if (result.ok) {
      markSubscribed(email);
      // Analytics: newsletter_signup + generate_lead (conversion)
      trackNewsletterSignup('popup');
      showSuccess(overlay, email);
    } else {
      submit.disabled = false;
      submit.textContent = 'Send me the guide';
      const err = document.createElement('div');
      err.className = 'lca-np-err';
      err.textContent = 'Could not send. Please try again.';
      form.appendChild(err);
    }
  });
}

function openPopup() {
  if (document.querySelector('.lca-np-overlay')) return;
  injectStyles();
  const overlay = buildModal();
  document.body.appendChild(overlay);
  attachHandlers(overlay);
  // Analytics: popup impression
  trackNewsletterPopupShown();
  // Focus the email field after animation
  setTimeout(() => overlay.querySelector('#lca-np-email')?.focus(), 400);
}

export function initNewsletterPopup() {
  if (!shouldShow()) return;

  let triggered = false;
  function fire() {
    if (triggered) return;
    triggered = true;
    openPopup();
  }

  // Timer trigger
  const timerId = setTimeout(fire, TRIGGER_DELAY_MS);

  // Exit-intent trigger (desktop only)
  function onMouseLeave(e) {
    if (e.clientY <= 0) {
      clearTimeout(timerId);
      fire();
      document.removeEventListener('mouseleave', onMouseLeave);
    }
  }
  document.addEventListener('mouseleave', onMouseLeave);
}

// Manual trigger for CTA buttons
export function showNewsletterPopup() {
  openPopup();
}

export default initNewsletterPopup;
