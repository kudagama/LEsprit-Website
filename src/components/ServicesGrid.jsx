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
    <section id="services" className="py-24 md:py-32 bg-ivory-sacred relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Minimal Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-charcoal/60 uppercase block mb-4">
            Expertise & Logistics
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium mb-6">
            Signature Services <span className="text-gold-dark italic font-light">& Fleet Solutions</span>
          </h2>
          <p className="font-sans text-charcoal/70 font-light max-w-xl mx-auto text-sm">
            Tailored logistics engineered to perfection. Select a capability below to explore full specifications.
          </p>
        </div>

        {/* Minimal Category Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {[
            { id: "all", label: "All Solutions" },
            { id: "travel", label: "Travel Solutions" },
            { id: "experiences", label: "Signature Experiences" },
            { id: "fleet", label: "Premium Fleet" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-6 py-3 font-sans text-[0.65rem] font-semibold uppercase tracking-wider transition-all border-b-2 ${
                filter === btn.id
                  ? "border-charcoal text-charcoal"
                  : "border-transparent text-charcoal/50 hover:text-charcoal"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Minimal Editorial Cards Grid */}
        <motion.div layout className="grid lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredServices.map((svc) => {
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={svc.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-charcoal/5 p-10 flex flex-col justify-between group hover:border-gold-primary/30 transition-colors"
                >
                  <div>
                    <div className="mb-8 text-gold-dark opacity-80">
                      <IconComp className="w-8 h-8 stroke-[1.5]" />
                    </div>

                    <span className="font-sans text-[0.65rem] font-semibold text-charcoal/50 uppercase tracking-[0.15em] block mb-3">
                      {svc.category}
                    </span>
                    <h3 className="font-serif text-2xl text-charcoal font-medium mb-4 leading-snug">{svc.title}</h3>
                    <p className="font-sans text-sm text-charcoal/70 font-light leading-relaxed mb-8">
                      {svc.desc}
                    </p>

                    <ul className="space-y-3 mb-10">
                      {svc.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 font-sans text-xs font-light text-charcoal/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-3 font-sans text-[0.65rem] font-semibold text-charcoal hover:text-gold-dark tracking-widest uppercase transition-colors pt-6 border-t border-charcoal/5"
                  >
                    <span>View Specifications</span>
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
