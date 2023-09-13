import {
  defineConfig,
  presetWebFonts ,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  shortcuts: [
    {"title-section":"text-3xl font-eb text-primary font-semibold text-center uppercase italic"},
    [/^text-truncate-(.*)$/, ([, c]) => `line-clamp-${c} break-keep`],
    {"wrapper": "max-w-[1140px] mx-auto"}
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetRemToPx(),
    presetUno(),
    presetAttributify(),
    presetWebFonts(
     {
       provider: 'google', // default provider
       fonts: {
         sans: 'Montserrat',
         eb: 'EB Garamond'
       }
     }
    ),
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: "#003511",
      secondary: "#4C9A29",
      third:"#ACDF87"
    },
  },
});