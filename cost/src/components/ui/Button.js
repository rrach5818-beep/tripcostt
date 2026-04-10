/**
 * Button UI Component
 * Returns HTML string
 */

export function Button(props = {}) {
  const {
    text = '',
    variant = 'primary',
    size = 'md',
    href = null,
    type = 'button',
    disabled = false,
    className = '',
    testId = ''
  } = props;

  const classes = [
    'btn',
    `btn--${variant}`,
    size === 'lg' ? 'btn--lg' : '',
    className
  ].filter(Boolean).join(' ');

  const testIdAttr = testId ? ` data-testid="${testId}"` : '';

  if (href) {
    return `<a href="${href}" data-link class="${classes}"${testIdAttr}>${text}</a>`;
  }

  const disabledAttr = disabled ? ' disabled' : '';
  return `<button type="${type}" class="${classes}"${disabledAttr}${testIdAttr}>${text}</button>`;
}

export default Button;
