import type { Config } from "tailwindcss";

export default {
  content: [
    "./preset.ts",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/nuxt-primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#0f172a",
        primary: "#0f172a",
        "primary-foreground": "#F5FAFF",
        secondary: "#f1f5f9",
        "secondary-foreground": "#0f172a",
        accent: "#f1f5f9",
        "accent-foreground": "#0f172a",
        destructive: "#FF0000",
        "destructive-foreground": "#F5FAFF",
        ring: "#3E4E65",
        input: "#e2e8f0",
        muted: "#f1f5f9",
        "muted-foreground": "#71717a",
        card: "#ffffff",
        "card-foreground": "#0f172a",
        popover: "#ffffff",
        "card-popover": "#0f172a",
      },
      fontFamily: {
        body: "Inter",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  safelist: [
    "bg-primary",
    "text-primary-foreground",
    "bg-secondary",
    "text-secondary-foreground",
    "bg-destructive",
    "text-destructive-foreground",
  ],
} satisfies Config;
