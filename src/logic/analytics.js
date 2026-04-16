/**
 * analytics.js -- Centralized GA4 event tracking
 * Standard ecommerce events (view_item, begin_checkout, purchase)
 * plus custom events for newsletter, navigation, etc.
 * ASCII-only comments (Vite constraint)
 */

function hasGtag() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

function safeGtag() {
  if (!hasGtag()) return;
  try {
    window.gtag.apply(null, arguments);
  } catch (e) {
    // swallow analytics errors -- never break UX
    console.warn('[analytics]', e);
  }
}

// -- Raw event -----------------------------------------------------------
export function trackEvent(name, params = {}) {
  safeGtag('event', name, params);
}

// -- Page view -----------------------------------------------------------
export function trackPageView(path, title) {
  safeGtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href
  });
}

// -- Ebook ecommerce events ---------------------------------------------
function ebookItem(ebook, slug) {
  return {
    item_id: slug,
    item_name: `${ebook.city} Cost of Living eBook 2026`,
    item_brand: 'Living Cost Atlas',
    item_category: 'eBook',
    item_category2: ebook.country,
    price: ebook.price,
    quantity: 1
  };
}

// Fired when user lands on an individual ebook landing page
export function trackEbookView(slug, ebook) {
  trackEvent('view_item', {
    currency: ebook.currency || 'EUR',
    value: ebook.price,
    items: [ebookItem(ebook, slug)]
  });
}

// Fired when user clicks the Buy button (leaving for Stripe checkout)
export function trackEbookBuyClick(slug, ebook) {
  trackEvent('select_item', { items: [ebookItem(ebook, slug)] });
  trackEvent('begin_checkout', {
    currency: ebook.currency || 'EUR',
    value: ebook.price,
    items: [ebookItem(ebook, slug)]
  });
}

// Fired on the success page (conversion)
export function trackEbookPurchase(slug, ebook, transactionId) {
  trackEvent('purchase', {
    transaction_id: transactionId || `lca_${slug}_${Date.now()}`,
    currency: ebook.currency || 'EUR',
    value: ebook.price,
    items: [ebookItem(ebook, slug)]
  });
}

// Fired on catalog /ebooks page
export function trackEbookCatalogView(slugs = []) {
  trackEvent('view_item_list', {
    item_list_id: 'ebook_catalog',
    item_list_name: 'eBook Catalog',
    items: slugs.map(s => ({ item_id: s, item_name: s }))
  });
}

// -- Newsletter events --------------------------------------------------
export function trackNewsletterPopupShown() {
  trackEvent('newsletter_popup_shown', { source: 'auto_trigger' });
}

export function trackNewsletterPopupDismissed() {
  trackEvent('newsletter_popup_dismissed');
}

export function trackNewsletterSignup(source = 'popup') {
  trackEvent('newsletter_signup', { source, value: 1 });
  // Also fire a conversion event for easier tracking in GA4
  trackEvent('generate_lead', { source, value: 1 });
}

export function trackFreeGuideDownload() {
  trackEvent('free_guide_download', { item_name: 'Top 10 Cities 2026' });
}

// -- Calculator / comparison events ------------------------------------
export function trackCalculatorUse(cityA, cityB) {
  trackEvent('calculator_compare', { city_a: cityA, city_b: cityB });
}

export default {
  trackEvent,
  trackPageView,
  trackEbookView,
  trackEbookBuyClick,
  trackEbookPurchase,
  trackEbookCatalogView,
  trackNewsletterPopupShown,
  trackNewsletterPopupDismissed,
  trackNewsletterSignup,
  trackFreeGuideDownload,
  trackCalculatorUse
};
