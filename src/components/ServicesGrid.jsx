"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Compass, Car, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import LiyawelaCard from "./LiyawelaCard";

const SERVICES = [
  {
    id: "travel",
    slug: "travel-solutions",
    category: "Travel Solutions",
    icon: Plane,
    title: "Travel Solutions",
    desc: "Specialized travel execution for individuals, group tours, and high-level corporate retreats across our destinations.",
    features: [
      "FIT (Free Independent Travelers)",
      "GIT (Group Inclusive Tours)",
      "MICE (Meetings, Incentives, Conferences & Exhibitions)",
    ],
  },
  {
    id: "experiences",
    slug: "signature-experiences",
    category: "Signature Experiences",
    icon: Compass,
    title: "Signature & Specialized Experiences",
    desc: "Immersive thematic journeys led by local specialists across pristine wilderness, cultural sanctuaries, and private coastal reserves.",
    features: [
      "Tailor-Made Journeys & À La Carte Travel",
      "Adventure Expeditions, Hiking & Trekking Tours",
      "Cycling Tours & Voluntourism Programs",
      "Birdwatching Expeditions & Photography Journeys",
      "Wellness Retreats (Ayurveda & Yoga) & Sports Travel Programs",
    ],
  },
  {
    id: "fleet",
    slug: "premium-fleet",
    category: "Premium Fleet",
    icon: Car,
    title: "Premium Transport Fleet",
    desc: "Unmatched ground transit and domestic aviation charters, ensuring seamless logistics with dedicated chauffeur-driven services.",
    features: [
      "Private Cars & Luxury SUVs",
      "Micro Vans & Deluxe Coaches",
      "Chauffeur-Driven Vehicles",
      "Domestic Flight Arrangements",
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
          <span className="font-decorative text-xs font-bold tracking-widest text-indigo-dark uppercase block mb-2">
            Expertise & Logistics
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-4">
            Signature Services <span className="gold-gradient-text">& Fleet Solutions</span>
          </h2>
          <p className="font-sans text-charcoal font-normal max-w-xl mx-auto text-sm sm:text-base">
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
              className={`px-6 py-2.5 rounded-full font-cinzel text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === btn.id
                  ? "bg-indigo-dark text-gold-primary border-gold-primary shadow-lg"
                  : "bg-white text-indigo-dark border-gold-dark/40 hover:bg-gold-primary/10"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Glass Cards Grid */}
        <motion.div layout className="flex flex-wrap justify-center gap-8">
          <AnimatePresence>
            {filteredServices.map((svc) => {
              const IconComp = svc.icon;
              return (
                <LiyawelaCard
                  key={svc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-full md:w-[350px] lg:w-[380px] flex flex-col justify-between shrink-0"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-indigo-dark flex items-center justify-center text-gold-primary mb-6 group-hover:bg-gold-primary group-hover:text-indigo-deep transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="font-cinzel text-[0.75rem] font-bold text-indigo-dark uppercase tracking-widest block mb-1">
                      {svc.category}
                    </span>
                    <h3 className="font-serif text-2xl text-indigo-dark font-bold mb-3">{svc.title}</h3>
                    <p className="font-sans text-xs text-charcoal font-normal leading-relaxed mb-6">
                      {svc.desc}
                    </p>

                    <ul className="pt-6 border-t border-gold-primary/20 space-y-2 mb-8">
                      {svc.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 font-sans text-xs font-medium text-charcoal">
                          <Check className="w-4 h-4 text-emerald-dark shrink-0 font-bold" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-2 font-cinzel text-xs font-bold text-indigo-dark hover:text-gold-dark tracking-wider uppercase transition-colors"
                  >
                    <span>Explore Extra Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold-dark" />
                  </Link>
                </LiyawelaCard>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
