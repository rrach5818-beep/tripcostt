/**
 * Badge UI Component
 * Returns HTML string
 */

export function Badge(props = {}) {
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

export function BadgeList(badges = []) {
  return badges.map(badge => Badge(badge)).join('');
}

export default Badge;
