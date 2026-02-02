/**
 * AppLayout Component
 * Simpler layout wrapper for app pages
 */

import { MainLayout } from './MainLayout.js';

export function AppLayout(pageContent) {
  return MainLayout(pageContent);
}

export default AppLayout;
