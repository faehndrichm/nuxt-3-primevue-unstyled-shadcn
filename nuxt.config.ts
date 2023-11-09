const path = require("path");
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue", "@nuxtjs/google-fonts"],
  primevue: {
    options: { unstyled: true },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    importPT: {
      as: "MyCustomPreset",
      from: path.resolve(__dirname, "./preset.ts"),
    },
    components: {
      exclude: ["Editor", "Chart"],
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
});
