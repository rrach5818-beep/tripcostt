/**
 * CookieConsent.js -- GDPR-compliant cookie consent banner.
 *
 * - Defaults to denied for analytics/ads storage (set in index.html before
 *   gtag config).
 * - On Accept: granted for analytics; persists to localStorage.
 * - On Reject: denied for analytics; persists to localStorage.
 * - Hidden after a choice is made; user can re-open via the "Cookie
 *   preferences" link in the footer (data-cookie-prefs).
 *
 * ASCII-only.
 */

const STORAGE_KEY = 'lca_cookie_consent_v1';

function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.choice === 'string' && (parsed.choice === 'accept' || parsed.choice === 'reject')) {
      return parsed;
    }
  } catch (e) { /* fall through */ }
  return null;
}

function writeConsent(choice) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() }));
  } catch (e) { /* localStorage may be disabled */ }
}

function applyConsent(choice) {
  // Forward the user's choice to Google Consent Mode v2.
  if (typeof window.gtag === 'function') {
    const granted = choice === 'accept' ? 'granted' : 'denied';
    window.gtag('consent', 'update', {
      analytics_storage: granted,
      ad_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
    });
  }
}

function bannerHTML() {
  return `
    <div class="lca-cc__inner">
      <div class="lca-cc__text">
        <strong>We use cookies</strong>
        We use analytics cookies to understand how visitors use Living Cost Atlas
        and to improve the experience. You can accept or reject -- the site works
        either way. <a href="/privacy" data-link>Read our privacy policy</a>.
      </div>
      <div class="lca-cc__actions">
        <button class="lca-cc__btn lca-cc__btn--reject" data-cc-action="reject" type="button">Reject all</button>
        <button class="lca-cc__btn lca-cc__btn--accept" data-cc-action="accept" type="button">Accept all</button>
      </div>
    </div>
  `;
}

function bannerCSS() {
  return `
    .lca-cc {
      position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;
      background:#1e1b4b;color:#fff;border-radius:14px;
      box-shadow:0 24px 60px rgba(15,12,46,0.45),0 0 0 1px rgba(255,255,255,0.06);
      border-top:3px solid #d4a843;
      font-family:Inter,'Helvetica Neue',Arial,sans-serif;
      max-width:980px;margin:0 auto;
      animation:lca-cc-slide-up 0.4s ease-out both;
    }
    @keyframes lca-cc-slide-up {
      from { transform:translateY(20px); opacity:0; }
      to   { transform:translateY(0);    opacity:1; }
    }
    .lca-cc__inner {
      display:flex;gap:20px;align-items:center;padding:18px 22px;
    }
    .lca-cc__text {
      flex:1;font-size:13.5px;line-height:1.55;color:rgba(255,255,255,0.85);
    }
    .lca-cc__text strong { display:block;color:#d4a843;font-size:14px;margin-bottom:4px;letter-spacing:0.2px; }
    .lca-cc__text a { color:#c7d2fe;text-decoration:underline;text-underline-offset:2px; }
    .lca-cc__text a:hover { color:#fff; }
    .lca-cc__actions { display:flex;gap:10px;flex:0 0 auto; }
    .lca-cc__btn {
      padding:10px 18px;border-radius:8px;font-size:13px;font-weight:600;
      letter-spacing:0.2px;cursor:pointer;border:1.5px solid transparent;
      transition:all 0.18s ease;font-family:inherit;
    }
    .lca-cc__btn--reject {
      background:transparent;color:rgba(255,255,255,0.85);
      border-color:rgba(255,255,255,0.25);
    }
    .lca-cc__btn--reject:hover { border-color:rgba(255,255,255,0.5);background:rgba(255,255,255,0.06); }
    .lca-cc__btn--accept {
      background:#d4a843;color:#1e1b4b;border-color:#d4a843;
    }
    .lca-cc__btn--accept:hover { background:#e0b455;border-color:#e0b455; }
    @media (max-width: 640px) {
      .lca-cc { left:8px;right:8px;bottom:8px;border-radius:12px; }
      .lca-cc__inner { flex-direction:column;align-items:stretch;padding:16px 18px;gap:14px; }
      .lca-cc__actions { justify-content:stretch; }
      .lca-cc__btn { flex:1;padding:11px 12px; }
    }
  `;
}

function injectStylesOnce() {
  if (document.getElementById('lca-cc-styles')) return;
  const style = document.createElement('style');
  style.id = 'lca-cc-styles';
  style.textContent = bannerCSS();
  document.head.appendChild(style);
}

function showBanner(onChoice) {
  injectStylesOnce();
  if (document.querySelector('.lca-cc')) return;
  const div = document.createElement('div');
  div.className = 'lca-cc';
  div.setAttribute('role', 'dialog');
  div.setAttribute('aria-label', 'Cookie consent');
  div.innerHTML = bannerHTML();
  document.body.appendChild(div);

  div.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cc-action]');
    if (!btn) return;
    const choice = btn.getAttribute('data-cc-action');
    writeConsent(choice);
    applyConsent(choice);
    div.remove();
    if (typeof onChoice === 'function') onChoice(choice);
  });
}

export function mountCookieConsent() {
  // Apply any stored choice immediately on page load (for repeat visits).
  const stored = readConsent();
  if (stored) {
    applyConsent(stored.choice);
  } else {
    // First visit -- show banner after a tiny delay so it doesn't compete
    // with first paint of the page.
    setTimeout(() => showBanner(), 600);
  }

  // Allow re-opening via any element with [data-cookie-prefs] (e.g. footer link)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-cookie-prefs]');
    if (!trigger) return;
    e.preventDefault();
    showBanner();
  });
}
