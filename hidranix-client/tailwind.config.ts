import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        phinix: {
          teal: "#088c9c",   // color corporativo
          dark: "#066b75",   // variante más oscura
          light: "#0aaab4",  // variante más clara
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // ejemplo: si usas Inter
      },
    },
  },
  plugins: [],
} satisfies Config;
