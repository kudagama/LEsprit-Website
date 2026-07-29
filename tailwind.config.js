/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: "#C5B396", // Soft Champagne Gold
          warm: "#D4C5AD", // Lighter Champagne
          dark: "#937F5A", // Deep muted olive-gold
          glow: "rgba(197, 179, 150, 0.4)",
          border: "rgba(197, 179, 150, 0.4)",
        },
        emerald: {
          dark: "#14251B", // Deep slate-emerald
          medium: "#1A3226",
        },
        indigo: {
          dark: "#111820", // Deep charcoal slate (almost black)
          deep: "#0A0D12", // Ultra dark slate
        },
        ivory: {
          sacred: "#FCFBF8", // Ultra clean alabaster/ivory
        },
        sand: {
          fine: "#F5F3EC",
        },
        paper: {
          parchment: "#F7F5F0", // Very light off-white
        },
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "var(--font-cormorant)", "serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
        decorative: ["var(--font-cinzel-decorative)", "serif"],
      },
      boxShadow: {
        glass: "0 10px 40px rgba(0, 0, 0, 0.05)",
        gold: "0 10px 30px rgba(197, 179, 150, 0.15)",
        floating: "0 8px 30px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
