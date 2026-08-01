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
      backgroundImage: {
        'liyavela-watermark': "url(\"data:image/svg+xml;utf8,<svg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'><path d='M0 80 C40 80, 60 40, 80 40 C100 40, 120 80, 160 80 C120 80, 100 120, 80 120 C60 120, 40 80, 0 80 Z' fill='none' stroke='%23D4AF37' stroke-width='0.8' stroke-opacity='0.05'/><circle cx='80' cy='80' r='8' fill='none' stroke='%23C5A880' stroke-width='0.8' stroke-opacity='0.06'/><path d='M80 40 C80 60, 60 80, 40 80' fill='none' stroke='%23D4AF37' stroke-width='0.6' stroke-opacity='0.04'/><path d='M80 120 C80 100, 100 80, 120 80' fill='none' stroke='%23D4AF37' stroke-width='0.6' stroke-opacity='0.04'/></svg>\")",
        'palapethi-watermark': "url(\"data:image/svg+xml;utf8,<svg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'><path d='M0 40 Q20 10 40 40 Q60 10 80 40' fill='none' stroke='%23D4AF37' stroke-width='1' stroke-opacity='0.04'/><circle cx='40' cy='22' r='2' fill='%23D4AF37' fill-opacity='0.04'/></svg>\")"
      },
    },
  },
  plugins: [],
};
