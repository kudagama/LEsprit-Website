import { Suspense } from "react";
import { Playfair_Display, Cormorant_Garamond, Montserrat, Cinzel, Cinzel_Decorative } from "next/font/google";
import PageLoader from "@/components/PageLoader";
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
  title: "L’ESPRIT VOYAGES | The Spirit of Luxury Journeys — Sri Lanka & Maldives",
  description: "Experience L'Esprit de Voyage — the true spirit of bespoke travel, 5-star luxury escapes, and authentic heritage expeditions across Sri Lanka and the Maldives.",
  keywords: ["L'Esprit Voyages", "The Spirit of Travel", "Sri Lanka luxury travel", "Maldives overwater villas", "bespoke travel Asia"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} ${cinzel.variable} ${cinzelDecorative.variable}`}
    >
      <body className="bg-ivory-sacred text-charcoal antialiased selection:bg-gold-primary selection:text-indigo-deep">
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
