/**
 * Badge UI Component
 * Renders a styled badge/tag element
 */

/**
 * Create a badge element
 * @param {Object} props - Badge properties
 * @param {string} props.text - Badge text
 * @param {string} props.variant - 'default', 'primary', 'success', 'warning', 'error'
 * @param {string} props.className - Additional classes
 * @param {string} props.testId - data-testid attribute
 * @returns {HTMLElement} - Badge element
 */
export function Badge(props = {}) {
  const {
    text = '',
    variant = 'default',
    className = '',
    testId = ''
  } = props;

  const badge = document.createElement('span');
  badge.className = ['badge', `badge--${variant}`, className].filter(Boolean).join(' ');
  badge.textContent = text;
  if (testId) badge.setAttribute('data-testid', testId);

  return badge;
}

/**
 * Create badge HTML string
 * @param {Object} props - Same as Badge props
 * @returns {string} - HTML string
 */
export function BadgeHTML(props = {}) {
  const {
    text = '',
    variant = 'default',
    className = '',
    testId = ''
  } = props;

  const classes = ['badge', `badge--${variant}`, className].filter(Boolean).join(' ');
  const testIdAttr = testId ? ` data-testid="${testId}"` : '';

  return `<span class="${classes}"${testIdAttr}>${text}</span>`;
}

/**
 * Create multiple badges HTML
 * @param {Array} badges - Array of badge props
 * @returns {string} - HTML string with all badges
 */
export function BadgeListHTML(badges = []) {
  return badges.map(badge => BadgeHTML(badge)).join('');
}

export default Badge;