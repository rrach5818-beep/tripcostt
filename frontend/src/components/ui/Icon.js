/**
 * Icon component
 * SVG inline, stylable via CSS
 */

export function Icon({ name, size = 20, className = '' }) {
  const icons = {
    cost: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    `,
    internet: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M5 12a7 7 0 0114 0M8.5 12a3.5 3.5 0 017 0M12 20h.01" />
      </svg>
    `,
    safety: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"/>
      </svg>
    `,
    nomad: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 3l2.5 5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1z"/>
      </svg>
    `,
    weather: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4"/>
      </svg>
    `
  };

  return `
    <span class="icon ${className}" style="width:${size}px;height:${size}px">
      ${icons[name] ?? ''}
    </span>
  `;
}