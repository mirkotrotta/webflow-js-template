// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: './',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
    port: 3000,
  },
});
