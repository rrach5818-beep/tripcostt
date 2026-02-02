/**
 * Button UI Component
 * Renders a styled button element
 */

/**
 * Create a button element
 * @param {Object} props - Button properties
 * @param {string} props.text - Button text
 * @param {string} props.variant - 'primary', 'secondary', 'ghost'
 * @param {string} props.size - 'sm', 'md', 'lg'
 * @param {string} props.href - Optional link href
 * @param {Function} props.onClick - Click handler
 * @param {string} props.type - Button type (button, submit)
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.icon - Optional icon HTML
 * @param {string} props.className - Additional classes
 * @param {string} props.testId - data-testid attribute
 * @returns {HTMLElement} - Button element
 */
export function Button(props = {}) {
  const {
    text = '',
    variant = 'primary',
    size = 'md',
    href = null,
    onClick = null,
    type = 'button',
    disabled = false,
    icon = '',
    className = '',
    testId = ''
  } = props;

  const classes = [
    'btn',
    `btn--${variant}`,
    size !== 'md' ? `btn--${size}` : '',
    className
  ].filter(Boolean).join(' ');

  // If href is provided, create an anchor element
  if (href) {
    const anchor = document.createElement('a');
    anchor.href = href;
    anchor.className = classes;
    if (icon) anchor.innerHTML = icon + ' ';
    anchor.innerHTML += text;
    if (testId) anchor.setAttribute('data-testid', testId);
    return anchor;
  }

  // Otherwise create a button element
  const button = document.createElement('button');
  button.type = type;
  button.className = classes;
  button.disabled = disabled;
  if (icon) button.innerHTML = icon + ' ';
  button.innerHTML += text;
  if (testId) button.setAttribute('data-testid', testId);

  if (onClick && !disabled) {
    button.addEventListener('click', onClick);
  }

  return button;
}

/**
 * Create button HTML string
 * @param {Object} props - Same as Button props
 * @returns {string} - HTML string
 */
export function ButtonHTML(props = {}) {
  const {
    text = '',
    variant = 'primary',
    size = 'md',
    href = null,
    type = 'button',
    disabled = false,
    icon = '',
    className = '',
    testId = ''
  } = props;

  const classes = [
    'btn',
    `btn--${variant}`,
    size !== 'md' ? `btn--${size}` : '',
    className
  ].filter(Boolean).join(' ');

  const testIdAttr = testId ? ` data-testid="${testId}"` : '';
  const content = icon ? `${icon} ${text}` : text;

  if (href) {
    return `<a href="${href}" class="${classes}"${testIdAttr}>${content}</a>`;
  }

  const disabledAttr = disabled ? ' disabled' : '';
  return `<button type="${type}" class="${classes}"${disabledAttr}${testIdAttr}>${content}</button>`;
}

export default Button;