/**
 * MainLayout Component
 * Main page layout with header and footer
 */

export function MainLayout(content) {
  return `
    <header class="header" data-testid="header">
      <div class="container">
        <div class="header__inner">
          <a href="/" data-link class="header__logo">Trip<span>Cost</span></a>
          <nav class="nav" data-testid="main-nav">
            <a href="/" data-link class="nav__link">Home</a>
            <a href="/destinations" data-link class="nav__link">Destinations</a>
            <a href="/calculator" data-link class="nav__link">Calculator</a>
            <a href="/nomad" data-link class="nav__link">Nomad Rankings</a>
            <a href="/about" data-link class="nav__link">About</a>
          </nav>
        </div>
      </div>
    </header>

    <main data-testid="main-content">
      ${content}
    </main>

    <footer class="footer" data-testid="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <div class="footer__brand-logo">Trip<span>Cost</span></div>
            <p>Your trusted companion for planning international travel and remote work budgets. Real data, smart insights.</p>
          </div>
          <div class="footer__section">
            <h4>Explore</h4>
            <a href="/destinations" data-link>All Destinations</a>
            <a href="/calculator" data-link>Budget Calculator</a>
            <a href="/nomad" data-link>Nomad Rankings</a>
          </div>
          <div class="footer__section">
            <h4>Company</h4>
            <a href="/about" data-link>About Us</a>
            <a href="/legal" data-link>Legal Notice</a>
            <a href="/privacy" data-link>Privacy Policy</a>
            <a href="/terms" data-link>Terms of Service</a>
          </div>
          <div class="footer__section">
            <h4>Resources</h4>
            <a href="/calculator" data-link>Cost Calculator</a>
            <a href="/nomad" data-link>City Comparisons</a>
            <a href="/destinations" data-link>City Guides</a>
          </div>
        </div>
        <div class="footer__bottom">
          <p>© ${new Date().getFullYear()} TripCost. All rights reserved.</p>
          <div class="footer__legal">
            <a href="/privacy" data-link>Privacy</a>
            <a href="/terms" data-link>Terms</a>
            <a href="/legal" data-link>Legal</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export default MainLayout;
