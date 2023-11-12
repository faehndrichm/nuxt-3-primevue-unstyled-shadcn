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
      include: [
        "Calendar",
        "Card",
        "Chart",
        "Checkbox",
        "Button",
        "Datatable",
        "Column",
        "Dialog",
        "Dropdown",
        "Message",
        "InputSwitch",
        "InputText",
        "RadioButton",
        "Slider",
        "Skeleton",
        "TabView",
        "TabPanel",
        "Textarea",
        "Toast",
      ],
      //exclude: ["Editor", "Chart"],
    },
    directives: {
      include: [],
    },
    composables: {
      include: [],
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
});
