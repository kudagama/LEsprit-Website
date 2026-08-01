"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function DualParadise() {
  const [hoveredRegion, setHoveredRegion] = useState("sri-lanka");

  return (
    <section id="destinations" className="pt-12 pb-0 bg-indigo-deep text-white relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <span className="font-decorative text-xs tracking-widest text-gold-warm uppercase block mb-2">
          Two Kingdoms of Wonder
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-white mb-4">
          Dual Paradise <span className="gold-gradient-text">Interactive Showcase</span>
        </h2>
        <p className="font-sans text-ivory-sacred/70 max-w-2xl mx-auto font-light text-sm sm:text-base">
          Hover across our dual canvas to explore Sri Lanka’s ancient emerald valleys or the Maldives’ turquoise lagoons. Click any region to view comprehensive itineraries & extra details.
        </p>
      </div>

      {/* Interactive Split Canvas */}
      <div 
        onMouseLeave={() => setHoveredRegion(null)}
        className="w-full flex flex-col md:flex-row md:h-[650px] overflow-visible relative border-y border-gold-border z-10"
      >
        {/* Panel 1: Sri Lanka */}
        <motion.div
          onMouseEnter={() => setHoveredRegion("sri-lanka")}
          animate={{ 
            scale: hoveredRegion === "sri-lanka" ? 1.02 : hoveredRegion === "maldives" ? 0.98 : 1,
            opacity: hoveredRegion === "maldives" ? 0.5 : 1,
            zIndex: hoveredRegion === "sri-lanka" ? 20 : 10
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 min-h-[500px] md:min-h-0 p-8 sm:p-14 flex items-end cursor-pointer overflow-hidden group border-b md:border-b-0 md:border-r border-gold-border/30 shadow-2xl transition-all"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-95"
            style={{ backgroundImage: "url('/assets/images/sri_lanka.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-5 border border-gold-primary/20 group-hover:border-gold-primary group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.2)] transition-all pointer-events-none rounded-lg" />

          {/* Panel Content */}
          <div className="relative z-10 max-w-xl">
            <span className="font-cinzel text-xs text-gold-warm tracking-widest uppercase block mb-1">
              Island of Culture & Diversity
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl text-white mb-2">Sri Lanka</h3>
            <p className="font-sans italic text-ivory-sacred/80 text-sm mb-6">
              "A Land of Timeless Cultural Heritage & Extraordinary Diversity"
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                "UNESCO Heritage (Sigiriya, Kandy, Anuradhapura)",
                "Wildlife Safaris (Yala & Wilpattu Leopards)",
                "Ayurvedic Sanctuary & Tea Country",
                "Authentic Spice & Culinary Journeys",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 font-sans font-medium drop-shadow"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary shadow-[0_0_8px_#D4AF37]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/destinations/sri-lanka"
              className="px-6 py-3 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-wider rounded inline-flex items-center gap-2 hover:shadow-gold transition-all"
            >
              <span>Explore Sri Lanka Expeditions & Details</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Panel 2: Maldives */}
        <motion.div
          onMouseEnter={() => setHoveredRegion("maldives")}
          animate={{ 
            scale: hoveredRegion === "maldives" ? 1.02 : hoveredRegion === "sri-lanka" ? 0.98 : 1,
            opacity: hoveredRegion === "sri-lanka" ? 0.5 : 1,
            zIndex: hoveredRegion === "maldives" ? 20 : 10
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 min-h-[500px] md:min-h-0 p-8 sm:p-14 flex items-end cursor-pointer overflow-hidden group shadow-2xl transition-all"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-95"
            style={{ backgroundImage: "url('/assets/images/maldives.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-5 border border-gold-primary/20 group-hover:border-gold-primary group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.2)] transition-all pointer-events-none rounded-lg" />

          {/* Panel Content */}
          <div className="relative z-10 max-w-xl">
            <span className="font-cinzel text-xs text-gold-warm tracking-widest uppercase block mb-1">
              Secluded Ocean Sanctuary
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl text-white mb-2">Maldives</h3>
            <p className="font-sans italic text-ivory-sacred/80 text-sm mb-6">
              "The Tropical Paradise of the Maldives"
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                "1,000+ Idyllic Islands & 26 Natural Atolls",
                "Manta Ray & Whale Shark Expeditions",
                "Private Overwater Villa Luxury",
                "World-Class Surfing & Yacht Charters",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 font-sans font-medium drop-shadow"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary shadow-[0_0_8px_#D4AF37]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/destinations/maldives"
              className="px-6 py-3 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-wider rounded inline-flex items-center gap-2 hover:shadow-gold transition-all"
            >
              <span>Explore Maldives Escapes & Details</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
