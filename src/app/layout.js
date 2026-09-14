import { Suspense } from "react";
import { Jost } from "next/font/google";
import PageLoader from "@/components/PageLoader";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-futura",
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
      className={`${jost.variable}`}
    >
      <body className="bg-ivory-sacred text-charcoal antialiased selection:bg-gold-primary selection:text-indigo-deep">
        <SmoothScroll />
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
