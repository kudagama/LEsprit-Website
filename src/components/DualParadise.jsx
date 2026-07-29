"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function DualParadise() {
  const [hoveredRegion, setHoveredRegion] = useState("sri-lanka");

  return (
    <section id="destinations" className="py-20 bg-indigo-deep text-white relative">
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
      <div className="w-full h-[650px] flex flex-col md:flex-row overflow-hidden relative border-y border-gold-border">
        {/* Panel 1: Sri Lanka */}
        <motion.div
          onMouseEnter={() => setHoveredRegion("sri-lanka")}
          animate={{ flex: hoveredRegion === "sri-lanka" ? 1.8 : 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 p-8 sm:p-14 flex items-end cursor-pointer overflow-hidden group border-b md:border-b-0 md:border-r border-gold-border/30"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
            style={{ backgroundImage: "url('/assets/images/sri_lanka.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-indigo-deep/60 to-transparent" />
          <div className="absolute inset-5 border border-gold-primary/20 group-hover:border-gold-primary group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.2)] transition-all pointer-events-none" />

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
            <div className="flex flex-col gap-2 mb-8">
              {[
                "🏛️ UNESCO Heritage (Sigiriya, Kandy, Anuradhapura)",
                "🐆 Wildlife Safaris (Yala & Wilpattu Leopards)",
                "🌿 Ayurvedic Sanctuary & Tea Country",
                "🍲 Authentic Spice & Culinary Journeys",
              ].map((chip) => (
                <div
                  key={chip}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-deep/80 backdrop-blur-md border border-gold-border/40 rounded text-xs text-ivory-sacred w-fit"
                >
                  <span>{chip}</span>
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
          animate={{ flex: hoveredRegion === "maldives" ? 1.8 : 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 p-8 sm:p-14 flex items-end cursor-pointer overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
            style={{ backgroundImage: "url('/assets/images/maldives.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-indigo-deep/60 to-transparent" />
          <div className="absolute inset-5 border border-gold-primary/20 group-hover:border-gold-primary group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.2)] transition-all pointer-events-none" />

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
            <div className="flex flex-col gap-2 mb-8">
              {[
                "🏝️ 1,000+ Idyllic Islands & 26 Natural Atolls",
                "🦈 Manta Ray & Whale Shark Expeditions",
                "🏡 Private Overwater Villa Luxury",
                "🏄 World-Class Surfing & Yacht Charters",
              ].map((chip) => (
                <div
                  key={chip}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-deep/80 backdrop-blur-md border border-gold-border/40 rounded text-xs text-ivory-sacred w-fit"
                >
                  <span>{chip}</span>
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
