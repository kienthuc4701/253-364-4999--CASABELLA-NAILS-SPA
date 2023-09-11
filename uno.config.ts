import {
  defineConfig,
  presetMini,
  presetWebFonts ,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  shortcuts: [
    [/^text-truncate-(.*)$/, ([, c]) => `line-clamp-${c} break-keep`],
    {"wrapper": "max-w-[1140px] mx-auto"}
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetRemToPx(),
    presetUno(),
    presetWebFonts(
     {
       provider: 'google', // default provider
       fonts: {
         sans: 'Montserrat',
       }
     }
    ),
    presetAttributify(),
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: "#003511",
      secondary: "#4C9A29",
    },
  },
});