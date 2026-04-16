function o(a){return`
    <header class="header" data-testid="header">
      <div class="container">
        <div class="header__inner">
          <a href="/" data-link class="header__logo">Living Cost<span>Atlas</span></a>
          <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span class="nav-toggle__bar"></span>
            <span class="nav-toggle__bar"></span>
            <span class="nav-toggle__bar"></span>
          </button>
          <nav class="nav" id="main-nav" data-testid="main-nav">
            <a href="/destinations" data-link class="nav__link">Destinations</a>
            <a href="/calculator"   data-link class="nav__link">Calculator</a>
            <a href="/nomad"        data-link class="nav__link">Rankings</a>
            <a href="/ebooks"       data-link class="nav__link">eBooks</a>
            <a href="/about"        data-link class="nav__link">About</a>
          </nav>
        </div>
      </div>
    </header>

    <main data-testid="main-content">
      ${a}
    </main>

    <footer class="footer" data-testid="footer">
      <style>
        .footer {
          background:#0f0c29;color:rgba(255,255,255,0.6);
          padding:56px 0 0;font-size:14px;
        }
        .footer__grid {
          display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;
          gap:24px;padding-bottom:48px;
          border-bottom:1px solid rgba(255,255,255,0.08);
        }
        .footer__brand-logo {
          font-size:22px;font-weight:900;color:#fff;letter-spacing:-0.02em;margin-bottom:12px;
        }
        .footer__brand-logo span { color:#818cf8; }
        .footer__brand p {
          font-size:13px;line-height:1.7;color:rgba(255,255,255,0.45);
          margin-bottom:14px;max-width:260px;
        }
        .footer__brand-badge {
          display:inline-flex;align-items:center;gap:6px;
          background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);
          color:#a5b4fc;font-size:11px;font-weight:600;letter-spacing:0.5px;
          padding:4px 12px;border-radius:999px;
        }
        .footer__brand-badge::before {
          content:'';width:6px;height:6px;background:#10b981;border-radius:50%;
        }
        .footer__section h4 {
          font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
          color:rgba(255,255,255,0.3);margin-bottom:14px;
        }
        .footer__section a {
          display:block;color:rgba(255,255,255,0.55);text-decoration:none;
          font-size:13px;margin-bottom:7px;transition:color 0.15s;line-height:1.4;
        }
        .footer__section a:hover { color:#fff;text-decoration:none; }
        .footer__bottom {
          display:flex;justify-content:space-between;align-items:center;
          padding:20px 0;flex-wrap:wrap;gap:10px;
        }
        .footer__bottom p { color:rgba(255,255,255,0.25);font-size:12px;margin:0; }
        .footer__legal { display:flex;gap:20px; }
        .footer__legal a {
          color:rgba(255,255,255,0.25);font-size:12px;text-decoration:none;transition:color 0.15s;
        }
        .footer__legal a:hover { color:rgba(255,255,255,0.6); }
        @media(max-width:768px) {
          .footer__grid { grid-template-columns:1fr 1fr;gap:32px; }
          .footer__brand { grid-column:1/-1; }
        }
        @media(max-width:480px) {
          .footer__grid { grid-template-columns:1fr; }
        }
      </style>
      <div class="container">
        <div class="footer__grid">

          <!-- Brand -->
          <div class="footer__brand">
            <div class="footer__brand-logo">Living Cost<span>Atlas</span></div>
            <p>Free cost of living intelligence for digital nomads, remote workers and expats. Real data, updated quarterly.</p>
            <span class="footer__brand-badge">Data updated March 2026</span>
          </div>

          <!-- Explore -->
          <div class="footer__section">
            <h4>Explore</h4>
            <a href="/destinations" data-link>All Destinations</a>
            <a href="/nomad"        data-link>City Rankings</a>
            <a href="/best-cities"  data-link>Best Cities</a>
            <a href="/best-countries" data-link>Best Countries</a>
          </div>

          <!-- Tools -->
          <div class="footer__section">
            <h4>Tools</h4>
            <a href="/calculator"   data-link>Budget Calculator</a>
            <a href="/nomad"        data-link>Nomad Rankings</a>
            <a href="/calculator"   data-link>City Comparison</a>
          </div>

          <!-- Company -->
          <div class="footer__section">
            <h4>Company</h4>
            <a href="/about"        data-link>About Living Cost Atlas</a>
            <a href="/privacy"      data-link>Privacy Policy</a>
            <a href="/terms"        data-link>Terms of Service</a>
            <a href="/legal"        data-link>Legal Notice</a>
          </div>

        </div>
        <div class="footer__bottom">
          <p>  ${new Date().getFullYear()} Living Cost Atlas. All rights reserved. Not financial or legal advice.</p>
        </div>
      </div>
    </footer>
  `}export{o as M};
