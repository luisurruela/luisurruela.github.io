import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: `https://luisurruela.github.io`,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), react()],

  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
