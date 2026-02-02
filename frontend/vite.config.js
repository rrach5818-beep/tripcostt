import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['frontend-recovery-1.preview.emergentagent.com']
  },
  build: {
    outDir: 'dist'
  }
});
