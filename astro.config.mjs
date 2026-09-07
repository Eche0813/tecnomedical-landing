/**
 * @fileoverview Configuración principal de Astro para TECNOMEDICALS S.A.S.
 * Define la salida en modo servidor (SSR), el adaptador de Vercel y el plugin de Tailwind CSS v4 para Vite.
 */

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  /** Modo Server-Side Rendering (SSR) para obtener datos en vivo desde Google Sheets */
  output: 'server',

  /** Adaptador oficial para despliegues en infraestructura serverless de Vercel */
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

  /** Configuración de plugins y servidor de desarrollo en Vite */
  vite: {
    plugins: [
      tailwindcss()
    ],
    server: {
      watch: {
        /** Evita bloqueos en la detección de cambios cuando el proyecto se ubica en sincronización en la nube (ej. OneDrive) */
        usePolling: true
      }
    }
  }
});