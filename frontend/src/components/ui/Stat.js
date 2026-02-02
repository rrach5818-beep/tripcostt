/**
 * Stat UI Component
 * Returns HTML string
 */

export function Stat(props = {}) {
  const {
    label = '',
    value = '',
    size = 'md',
    className = '',
    testId = ''
  } = props;

  const classes = ['stat', className].filter(Boolean).join(' ');
  const testIdAttr = testId ? ` data-testid="${testId}"` : '';
  const valueClass = size === 'lg' ? 'stat__value stat__value--lg' : 'stat__value';

  return `
    <div class="${classes}"${testIdAttr}>
      ${label ? `<span class="stat__label">${label}</span>` : ''}
      <span class="${valueClass}">${value}</span>
    </div>
  `;
}

export function StatGrid(stats = [], columns = 4) {
  const statsHtml = stats.map(stat => Stat(stat)).join('');
  return `<div class="grid grid-cols-${columns} gap-6 lg-grid-cols-2 md-grid-cols-1">${statsHtml}</div>`;
}

export default Stat;
