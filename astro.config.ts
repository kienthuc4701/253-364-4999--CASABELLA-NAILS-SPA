import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import unocss from "unocss/vite";


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [unocss()]
  },
  output: 'server',
  integrations: [react({
    experimentalReactChildren: true
  })]
});