import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { pagesBuildPlugin } from './scripts/pages-build-plugin.mjs';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), pagesBuildPlugin()],
  build: { chunkSizeWarningLimit: 1600 },
});
