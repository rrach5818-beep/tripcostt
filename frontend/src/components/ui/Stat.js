/**
 * Stat UI Component
 * Renders a styled statistic display
 */

/**
 * Create a stat element
 * @param {Object} props - Stat properties
 * @param {string} props.label - Stat label
 * @param {string|number} props.value - Stat value
 * @param {string} props.change - Change indicator (e.g., '+5%')
 * @param {boolean} props.positive - Whether change is positive
 * @param {string} props.size - 'sm', 'md', 'lg'
 * @param {string} props.className - Additional classes
 * @param {string} props.testId - data-testid attribute
 * @returns {HTMLElement} - Stat element
 */
export function Stat(props = {}) {
  const {
    label = '',
    value = '',
    change = '',
    positive = true,
    size = 'md',
    className = '',
    testId = ''
  } = props;

  const stat = document.createElement('div');
  stat.className = ['stat', className].filter(Boolean).join(' ');
  if (testId) stat.setAttribute('data-testid', testId);

  let html = '';

  if (label) {
    html += `<span class="stat__label">${label}</span>`;
  }

  const valueClass = size === 'lg' ? 'stat__value stat__value--lg' : 'stat__value';
  html += `<span class="${valueClass}">${value}</span>`;

  if (change) {
    const changeClass = positive ? 'stat__change stat__change--positive' : 'stat__change stat__change--negative';
    const arrow = positive ? '↑' : '↓';
    html += `<span class="${changeClass}">${arrow} ${change}</span>`;
  }

  stat.innerHTML = html;

  return stat;
}

/**
 * Create stat HTML string
 * @param {Object} props - Same as Stat props
 * @returns {string} - HTML string
 */
export function StatHTML(props = {}) {
  const {
    label = '',
    value = '',
    change = '',
    positive = true,
    size = 'md',
    className = '',
    testId = ''
  } = props;

  const classes = ['stat', className].filter(Boolean).join(' ');
  const testIdAttr = testId ? ` data-testid="${testId}"` : '';

  let html = `<div class="${classes}"${testIdAttr}>`;

  if (label) {
    html += `<span class="stat__label">${label}</span>`;
  }

  const valueClass = size === 'lg' ? 'stat__value stat__value--lg' : 'stat__value';
  html += `<span class="${valueClass}">${value}</span>`;

  if (change) {
    const changeClass = positive ? 'stat__change stat__change--positive' : 'stat__change stat__change--negative';
    const arrow = positive ? '↑' : '↓';
    html += `<span class="${changeClass}">${arrow} ${change}</span>`;
  }

  html += '</div>';

  return html;
}

/**
 * Create a stat grid
 * @param {Array} stats - Array of stat props
 * @param {number} columns - Number of columns
 * @returns {string} - HTML string
 */
export function StatGridHTML(stats = [], columns = 4) {
  const gridClass = `grid grid-cols-${columns}`;
  const statsHtml = stats.map(stat => StatHTML(stat)).join('');
  return `<div class="${gridClass} gap-6">${statsHtml}</div>`;
}

export default Stat;