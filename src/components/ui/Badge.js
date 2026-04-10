<<<<<<< HEAD
/**
 * Badge UI Component
 * Modern, semantic, data-driven badge
 */

export function Badge(props = {}) {
  const {
    text = '',
    variant = 'default',   // success | warning | error | info | neutral
    tone = 'soft',         // soft | solid | outline
    size = 'sm',           // xs | sm | md
    className = '',
    testId = ''
  } = props;

  // Construction des classes de manière déclarative
  const classes = [
    'badge',
    `badge--${variant}`,
    `badge--${tone}`,
    `badge--${size}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  const testIdAttr = testId ? ` data-testid="${testId}"` : '';

  return `
    <span class="${classes}"${testIdAttr}>
      ${text}
    </span>
  `;
=======
/**
 * Badge UI Component
 * Modern, semantic, data-driven badge
 */

export function Badge(props = {}) {
  const {
    text = '',
    variant = 'default',   // success | warning | error | info | neutral
    tone = 'soft',         // soft | solid | outline
    size = 'sm',           // xs | sm | md
    className = '',
    testId = ''
  } = props;

  // Construction des classes de manière déclarative
  const classes = [
    'badge',
    `badge--${variant}`,
    `badge--${tone}`,
    `badge--${size}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  const testIdAttr = testId ? ` data-testid="${testId}"` : '';

  return `
    <span class="${classes}"${testIdAttr}>
      ${text}
    </span>
  `;
>>>>>>> f5684a6278b64a9f195794048f99a666f88c917b
}