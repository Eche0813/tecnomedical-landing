import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwind()],
    server: {
      watch: {
        usePolling: true // Evita que OneDrive bloquee el detector de cambios
      }
    }
  }
});