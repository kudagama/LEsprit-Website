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
          primary: "#D4AF37",
          warm: "#C5A880",
          dark: "#A87D46",
          glow: "rgba(212, 175, 55, 0.4)",
          border: "rgba(212, 175, 55, 0.3)",
        },
        emerald: {
          dark: "#0D2818",
          medium: "#16382B",
        },
        indigo: {
          dark: "#0B1B2B",
          deep: "#071526",
        },
        ivory: {
          sacred: "#FAF7F2",
        },
        sand: {
          fine: "#F5F2EB",
        },
        paper: {
          parchment: "#F8F4EC",
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
        glass: "0 20px 50px rgba(0, 0, 0, 0.25)",
        gold: "0 10px 30px rgba(212, 175, 55, 0.25)",
        floating: "0 15px 35px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
