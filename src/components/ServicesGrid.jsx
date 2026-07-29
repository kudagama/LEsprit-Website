"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Compass, Car, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    id: "travel",
    slug: "travel-solutions",
    category: "Travel Solutions",
    icon: Plane,
    title: "FIT, GIT & Corporate MICE",
    desc: "Specialized travel execution for Free Independent Travelers (FIT), Group Inclusive Tours (GIT), and high-level Corporate MICE.",
    features: [
      "Bespoke Solo & Family FIT Concierge",
      "Exclusive Group Inclusive Journeys (GIT)",
      "Executive Incentive & Retreat Planning (MICE)",
    ],
  },
  {
    id: "experiences",
    slug: "signature-experiences",
    category: "Signature Experiences",
    icon: Compass,
    title: "Curated Expedition Pursuits",
    desc: "Immersive thematic journeys led by local specialists across pristine wilderness, cultural sanctuaries, and private coastal reserves.",
    features: [
      "High-Altitude Trekking & Cycling Trails",
      "Voluntourism & Heritage Conservation",
      "Expert Birdwatching & Photography Expeditions",
      "Sacred Ayurveda & Holistic Wellness Retreats",
    ],
  },
  {
    id: "fleet",
    slug: "premium-fleet",
    category: "Premium Fleet",
    icon: Car,
    title: "Private Chauffeur Fleet & Aviation",
    desc: "Unmatched ground and air luxury transit with professionally trained English-speaking chauffeur guides and seamless domestic air transfers.",
    features: [
      "Luxury Sedans & SUVs (Mercedes, Land Cruiser)",
      "Deluxe Micro Vans & Coaster Coaches",
      "Scenic Domestic Flights & Helicopter Charters",
    ],
  },
];

export default function ServicesGrid() {
  const [filter, setFilter] = useState("all");

  const filteredServices = filter === "all" ? SERVICES : SERVICES.filter((s) => s.id === filter);

  return (
    <section id="services" className="py-24 bg-ivory-sacred relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-decorative text-xs tracking-widest text-gold-dark uppercase block mb-2">
            Expertise & Logistics
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-4">
            Signature Services <span className="gold-gradient-text">& Fleet Solutions</span>
          </h2>
          <p className="font-sans text-charcoal/70 max-w-xl mx-auto text-sm sm:text-base">
            Tailored logistics engineered to perfection. Click any card below to explore full capabilities & specifications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {[
            { id: "all", label: "All Solutions" },
            { id: "travel", label: "Travel Solutions" },
            { id: "experiences", label: "Signature Experiences" },
            { id: "fleet", label: "Premium Fleet" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-6 py-2.5 rounded-full font-cinzel text-xs uppercase tracking-wider transition-all border ${
                filter === btn.id
                  ? "bg-indigo-dark text-gold-primary border-gold-primary shadow-lg"
                  : "bg-white text-charcoal/70 border-gold-border/40 hover:bg-gold-primary/10"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Glass Cards Grid */}
        <motion.div layout className="grid md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((svc) => {
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={svc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-gold-border/40 rounded-xl p-8 shadow-floating hover:border-gold-primary hover:-translate-y-2 transition-all group relative flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-gold-primary/10 flex items-center justify-center text-gold-dark mb-6 group-hover:bg-gold-primary group-hover:text-indigo-deep transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="font-cinzel text-[0.7rem] text-gold-dark uppercase tracking-widest block mb-1">
                      {svc.category}
                    </span>
                    <h3 className="font-serif text-2xl text-indigo-dark mb-3">{svc.title}</h3>
                    <p className="font-sans text-xs text-charcoal/70 leading-relaxed mb-6">
                      {svc.desc}
                    </p>

                    <ul className="pt-6 border-t border-gold-primary/15 space-y-2 mb-8">
                      {svc.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 font-sans text-xs text-charcoal/80">
                          <Check className="w-4 h-4 text-gold-dark shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-2 font-cinzel text-xs font-bold text-gold-dark hover:text-indigo-dark tracking-wider uppercase transition-colors"
                  >
                    <span>Explore Extra Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
