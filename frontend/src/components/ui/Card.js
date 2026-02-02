/**
 * Card UI Component
 * Returns HTML string
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
    href = '',
    className = '',
    testId = ''
  } = props;

  const classes = ['card', clickable ? 'card--clickable' : '', className].filter(Boolean).join(' ');
  const testIdAttr = testId ? ` data-testid="${testId}"` : '';

  let html = '';

  if (clickable && href) {
    html += `<a href="${href}" data-link class="${classes}"${testIdAttr} style="display:block;text-decoration:none;color:inherit;">`;
  } else {
    html += `<div class="${classes}"${testIdAttr}>`;
  }

  if (image) {
    html += `<img src="${image}" alt="${imageAlt || title}" class="card__image" loading="lazy">`;
  }

  if (title || subtitle) {
    html += '<div class="card__header">';
    if (title) html += `<h3 style="margin:0;font-size:1.125rem;">${title}</h3>`;
    if (subtitle) html += `<p style="margin:0.25rem 0 0;font-size:0.875rem;color:var(--color-text-tertiary);">${subtitle}</p>`;
    html += '</div>';
  }

  if (content) {
    html += `<div class="card__body">${content}</div>`;
  }

  if (footer) {
    html += `<div class="card__footer">${footer}</div>`;
  }

  html += clickable && href ? '</a>' : '</div>';

  return html;
}

export default Card;
