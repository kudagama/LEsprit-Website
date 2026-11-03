"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Compass, 
  LayoutGrid
} from "lucide-react";
import SriLankaRouteMap from "./SriLankaRouteMap";

const SRI_LANKA_PACKAGES = [
  {
    id: 1,
    routeKey: "ultimate-10d",
    title: "The Ultimate Sri Lankan Journey",
    subtitle: "Culture, Nature, Wildlife & Beach",
    duration: "10 Days / 9 Nights",
    location: "Round-Trip from Colombo (CMB) ⇄ Sigiriya • Kandy • Nuwara Eliya • Udawalawe • Galle • Bentota",
    image: "/assets/images/packages/sl_tour_1.jpg",
    tag: "Ultimate Journey",
    highlights: [
      "Explore Polonnaruwa, Dambulla & Temple of the Tooth",
      "Scenic Nanu Oya to Haputale train journey",
      "Thrilling jeep safari in Udawalawe National Park",
      "Madu Ganga Boat Safari & turtle hatchery visit",
      "Two leisure days relaxing on Bentota beaches"
    ]
  },
  {
    id: 2,
    routeKey: "highlights-7d",
    title: "Sri Lanka Highlights",
    subtitle: "Ancient Heritage & Southern Coast",
    duration: "7 Days / 6 Nights",
    location: "Round-Trip from Colombo (CMB) ⇄ Sigiriya • Kandy • Nuwara Eliya • Udawalawe • Galle",
    image: "/assets/images/packages/sl_tour_2.jpg",
    tag: "Highlights Tour",
    highlights: [
      "Discover the Cultural Triangle ruins & Dambulla Cave",
      "Visit a Ceylon tea factory in Nuwara Eliya",
      "Scenic train ride through the Hill Country",
      "Elephant Transit Home & Udawalawe safari",
      "Explore the UNESCO-listed Galle Fort"
    ]
  }
];

const MALDIVES_PACKAGES = [
  {
    id: 3,
    title: "Secluded Atoll & Lagoon Sanctuary",
    subtitle: "Maldives Ultra-Luxury Escape",
    duration: "7 Days / 6 Nights",
    location: "Baa Atoll & Private Sandbanks",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
    tag: "Ocean Sanctuary",
    highlights: [
      "Private Seaplane charters to luxury island",
      "Overwater Sunset Pool Villa sanctuary",
      "Manta Ray snorkeling guided by marine biologists",
      "Private Sandbank dinner under the stars",
      "Bespoke spa therapies & wellness rituals"
    ]
  },
  {
    id: 4,
    title: "The Dual Paradise Signature Voyage",
    subtitle: "Combined Sri Lanka & Maldives Elite Tour",
    duration: "14 Days / 13 Nights",
    location: "Highland Tea Country & Maldivian Atolls",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
    tag: "Elite Combined",
    highlights: [
      "Best of both worlds: Ancient culture & private island",
      "Chauffeur-guided heritage tours in Sri Lanka",
      "Overwater ocean pavilion stay in the Maldives",
      "Seamless private inter-island flight logistics",
      "Dedicated 24/7 concierge & local guide network"
    ]
  }
];

export default function TourPackages({ region = "sri-lanka" }) {
  const [activeView, setActiveView] = useState("map"); // "map" or "cards"
  const [selectedRouteKey, setSelectedRouteKey] = useState("ultimate-10d");

  const packagesToDisplay = region === "sri-lanka" ? SRI_LANKA_PACKAGES : MALDIVES_PACKAGES;

  return (
    <section id="packages" className="pt-20 pb-20 bg-paper-parchment relative overflow-hidden">
      {/* Subtle background overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 mix-blend-multiply z-0"
        style={{ 
          backgroundImage: "url('/assets/images/bg_remove.svg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundAttachment: "fixed" 
        }}
      />
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-dark/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="w-full max-w-[1920px] 2xl:max-w-none mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <span className="font-cinzel text-sm sm:text-[15px] font-bold tracking-[0.2em] text-[#A87D46] uppercase block mb-2">
            Curated Journeys
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-4">
            {region === "sri-lanka" ? "Sri Lanka" : "Maldives"} <span className="text-[#A87D46]">Signature Packages</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-gold-primary mb-4">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-dark" />
            <div className="w-1.5 h-1.5 bg-gold-dark rotate-45" />
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-dark" />
          </div>
          <p className="font-sans text-charcoal text-base sm:text-lg font-normal max-w-2xl mx-auto">
            Immerse yourself in our signature itineraries, handcrafted to reveal the authentic soul and spirit of {region === "sri-lanka" ? "Sri Lanka" : "the Maldives"}.
          </p>
        </div>

        {/* Sri Lanka Mode Switcher (Interactive Route Map vs Itinerary Cards) */}
        {region === "sri-lanka" && (
          <div className="flex justify-center mb-12 relative z-20">
            <div className="inline-flex p-1.5 bg-[#071526] border border-[#D4AF37]/40 rounded-full shadow-2xl backdrop-blur-md">
              <button
                onClick={() => setActiveView("map")}
                className={`px-5 sm:px-8 py-2.5 rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 ${
                  activeView === "map"
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#A87D46] text-[#071526] shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Interactive Route Map</span>
              </button>
              <button
                onClick={() => setActiveView("cards")}
                className={`px-5 sm:px-8 py-2.5 rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 ${
                  activeView === "cards"
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#A87D46] text-[#071526] shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Itinerary Cards</span>
              </button>
            </div>
          </div>
        )}

        {/* Content Section: Maldives Coming Soon OR Sri Lanka Map / Cards */}
        {region === "maldives" ? (
          <div className="flex flex-col items-center justify-center py-24 px-8 text-center bg-white border border-gold-border/30 rounded-2xl shadow-floating mx-auto max-w-3xl relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />
            <span className="font-cinzel text-sm font-bold text-gold-primary tracking-widest uppercase block mb-4 relative z-10">
              Anticipate Perfection
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-6 relative z-10">
              Coming Soon
            </h3>
            <p className="font-sans text-charcoal text-base sm:text-lg max-w-lg mx-auto relative z-10 leading-relaxed">
              We are currently handcrafting our exclusive Maldives itineraries. Stay tuned for a collection of unparalleled overwater sanctuaries and pristine ocean experiences.
            </p>
          </div>
        ) : activeView === "map" ? (
          /* ============================================================== */
          /* INTERACTIVE ANIMATED SRI LANKA ROUTE MAP VIEW */
          /* ============================================================== */
          <motion.div
            key="interactive-map-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <SriLankaRouteMap
              initialPackage={selectedRouteKey}
              onSelectPackage={(id) => setSelectedRouteKey(id === 1 ? "ultimate-10d" : "highlights-7d")}
            />
          </motion.div>
        ) : (
          /* ============================================================== */
          /* ITINERARY CARDS GRID VIEW */
          /* ============================================================== */
          <motion.div
            key="itinerary-cards-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10"
          >
            {packagesToDisplay.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white border border-gold-border/30 rounded-2xl overflow-hidden shadow-floating flex flex-col justify-between group hover:border-[#D4AF37]/50 hover:shadow-xl transition-all duration-500"
              >
                <div>
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#071526] border border-gold-primary text-gold-warm text-xs sm:text-[13px] font-cinzel font-bold tracking-widest uppercase rounded">
                      {pkg.tag}
                    </span>

                    {/* Duration Badge */}
                    <span className="absolute bottom-5 left-5 font-cinzel text-sm sm:text-base font-bold text-white flex items-center gap-2 drop-shadow-md">
                      <Calendar className="w-4 h-4 text-gold-primary" />
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <span className="font-cinzel text-xs sm:text-sm tracking-widest text-[#A87D46] font-bold uppercase block mb-1.5">
                        {pkg.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-indigo-dark font-bold leading-tight group-hover:text-[#A87D46] transition-colors">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="flex items-start gap-2 text-charcoal/85 text-sm sm:text-base font-sans font-medium leading-snug">
                      <MapPin className="w-4 h-4 text-gold-primary shrink-0 mt-1" />
                      <span>{pkg.location}</span>
                    </div>

                    {/* Highlights list */}
                    <ul className="space-y-3 pt-6 border-t border-gold-primary/25">
                      {pkg.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-sm sm:text-base text-charcoal/90 font-sans font-medium leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-dark shrink-0 mt-1" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 sm:p-8 pt-0 mt-4 space-y-3">
                  <button
                    onClick={() => {
                      setSelectedRouteKey(pkg.routeKey || (pkg.id === 1 ? "ultimate-10d" : "highlights-7d"));
                      setActiveView("map");
                    }}
                    className="w-full py-3.5 border border-[#D4AF37]/60 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#071526] font-cinzel text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                  >
                    <Compass className="w-4 h-4 text-[#A87D46] group-hover/btn:rotate-45 transition-transform" />
                    <span>View Animated Route on Map</span>
                  </button>

                  <a
                    href="#contact"
                    className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black font-cinzel text-sm sm:text-base font-bold uppercase tracking-wider rounded-lg shadow-gold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    <span>Request This Itinerary</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
