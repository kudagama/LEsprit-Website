import { Playfair_Display, Cormorant_Garamond, Montserrat, Cinzel, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

export const metadata = {
  title: "L’ESPRIT VOYAGES | Ultra Luxury Bespoke Travel — Sri Lanka & Maldives",
  description: "Experience 5-star luxury escapes, private chauffeur tours, and authentic heritage expeditions across Sri Lanka and the Maldives with L'Esprit Voyages. Two decades of unmatched finesse.",
  keywords: ["Sri Lanka luxury travel", "Maldives overwater villas", "private chauffeur Sri Lanka", "bespoke travel Asia", "L'Esprit Voyages"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} ${cinzel.variable} ${cinzelDecorative.variable}`}
    >
      <body className="bg-ivory-sacred text-charcoal antialiased selection:bg-gold-primary selection:text-indigo-deep">
        {children}
      </body>
    </html>
  );
}
