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
    {"section-style":"mb-10"},
    {"title-section":"text-4xl font-eb text-primary font-semibold text-center uppercase italic"},
    {"service-name":"text-2xl text-center mt-2 text-secondary font-semibold  my-5"},
    [/^text-truncate-(.*)$/, ([, c]) => `line-clamp-${c} break-keep`],
    {"wrapper": "max-w-[1140px] mx-auto p-5"},
    {"header":"bg-cover bg-[url('/bg-header.webp')] lg:bg-none transition-all ease-out duration-300"},
    {"header-fixed":"fixed top-0 left-0 right-0 z-10 bg-cover bg-[url('/bg-header.webp')] transition-all ease-out duration-300"},
    {"flex-service-item":"flex flex-col items-center gap-5 mb-3 md:flex-row"},
    {"bg-body":"bg-[url('/bg-body.png')] to-blue-200/[0.2]"},
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