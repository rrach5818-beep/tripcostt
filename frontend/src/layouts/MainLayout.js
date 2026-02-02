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
          </nav>
        </div>
      </div>
    </header>

    <main data-testid="main-content">
      ${content}
    </main>

    <footer class="footer" data-testid="footer">
      <div class="container">
        <div class="footer__inner">
          <p>© 2024 TripCost. All rights reserved.</p>
          <nav class="nav">
            <a href="/" data-link>Home</a>
            <a href="/destinations" data-link>Destinations</a>
            <a href="/calculator" data-link>Calculator</a>
          </nav>
        </div>
      </div>
    </footer>
  `;
}

export default MainLayout;
