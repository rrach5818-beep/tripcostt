/**
 * Card UI Component
 * Renders a styled card element
 */

/**
 * Create a card element
 * @param {Object} props - Card properties
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Card subtitle
 * @param {string} props.content - Card body content (HTML string)
 * @param {string} props.image - Image URL
 * @param {string} props.imageAlt - Image alt text
 * @param {string} props.footer - Footer content (HTML string)
 * @param {boolean} props.clickable - Make card clickable
 * @param {string} props.href - Link destination
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional classes
 * @param {string} props.testId - data-testid attribute
 * @returns {HTMLElement} - Card element
 */
export function Card(props = {}) {
  const {
    title = '',
    subtitle = '',
    content = '',
    image = '',
    imageAlt = '',
    footer = '',
    clickable = false,
    href = null,
    onClick = null,
    className = '',
    testId = ''
  } = props;

  const card = document.createElement('div');
  card.className = ['card', clickable ? 'card--clickable' : '', className].filter(Boolean).join(' ');
  if (testId) card.setAttribute('data-testid', testId);

  let html = '';

  // Image
  if (image) {
    html += `<img src="${image}" alt="${imageAlt || title}" class="card__image" loading="lazy">`;
  }

  // Header with title/subtitle
  if (title || subtitle) {
    html += '<div class="card__header">';
    if (title) html += `<h3 class="card__title">${title}</h3>`;
    if (subtitle) html += `<p class="card__subtitle">${subtitle}</p>`;
    html += '</div>';
  }

  // Body content
  if (content) {
    html += `<div class="card__body">${content}</div>`;
  }

  // Footer
  if (footer) {
    html += `<div class="card__footer">${footer}</div>`;
  }

  card.innerHTML = html;

  // Handle clicks
  if (clickable && href) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  } else if (onClick) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', onClick);
  }

  return card;
}

/**
 * Create card HTML string
 * @param {Object} props - Same as Card props
 * @returns {string} - HTML string
 */
export function CardHTML(props = {}) {
  const {
    title = '',
    subtitle = '',
    content = '',
    image = '',
    imageAlt = '',
    footer = '',
    clickable = false,
    className = '',
    testId = ''
  } = props;

  const classes = ['card', clickable ? 'card--clickable' : '', className].filter(Boolean).join(' ');
  const testIdAttr = testId ? ` data-testid="${testId}"` : '';

  let html = `<div class="${classes}"${testIdAttr}>`;

  if (image) {
    html += `<img src="${image}" alt="${imageAlt || title}" class="card__image" loading="lazy">`;
  }

  if (title || subtitle) {
    html += '<div class="card__header">';
    if (title) html += `<h3 class="card__title">${title}</h3>`;
    if (subtitle) html += `<p class="card__subtitle">${subtitle}</p>`;
    html += '</div>';
  }

  if (content) {
    html += `<div class="card__body">${content}</div>`;
  }

  if (footer) {
    html += `<div class="card__footer">${footer}</div>`;
  }

  html += '</div>';

  return html;
}

export default Card;