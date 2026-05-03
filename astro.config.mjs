// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // El sitio se genera como HTML estático por defecto
  output: 'static',

  // Información del sitio (usada en SEO más adelante)
  site: 'https://astro-campus.example.com',
});