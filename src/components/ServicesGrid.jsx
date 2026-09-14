"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Compass, Car, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import LiyawelaCard from "./LiyawelaCard";

const FILTER_BUTTONS = [
  { id: "all", label: "All Solutions" },
  { id: "travel", label: "Travel Solutions" },
  { id: "experiences", label: "Signature Experiences" },
  { id: "fleet", label: "Premium Fleet" },
];

const SERVICES = [
  {
    id: "travel",
    slug: "travel-solutions",
    category: "Travel Solutions",
    icon: Plane,
    title: "Travel Solutions",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
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
    <section id="services" className="pt-20 pb-20 bg-ivory-sacred relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-cinzel text-xs font-bold tracking-widest text-[#A87D46] uppercase block mb-2">
            Expertise & Logistics
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-4">
            Signature Services <span className="text-[#A87D46]">& Fleet Solutions</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-gold-primary mb-4">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-dark" />
            <span className="text-sm font-bold text-gold-dark">☸</span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-dark" />
          </div>
          <p className="font-sans text-charcoal/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Tailored logistics engineered to perfection. We provide seamless private transit, aviation charters, and specialized thematic travel execution.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTER_BUTTONS.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-6 py-2.5 rounded-full font-cinzel text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === btn.id
                  ? "bg-indigo-deep text-gold-primary border-gold-primary shadow-gold"
                  : "bg-white text-indigo-dark border-gold-border/60 hover:bg-gold-primary/10 hover:border-gold-primary"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Symmetrical Card Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((svc) => {
              const IconComp = svc.icon;
              return (
                <LiyawelaCard
                  key={svc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col justify-between p-0 overflow-hidden group hover:border-[#D4AF37]/50 hover:shadow-xl transition-all duration-500"
                >
                  <div>
                    {/* Top Image Section */}
                    <div className="relative h-48 overflow-hidden w-full">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      
                      {/* Floating Category Icon */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-indigo-deep border border-gold-primary flex items-center justify-center text-gold-primary shadow-lg">
                        <IconComp className="w-4.5 h-4.5" />
                      </div>

                      {/* Small Category Tag */}
                      <span className="absolute top-4 left-4 px-2.5 py-0.5 bg-white/95 backdrop-blur-sm border border-gold-primary/30 text-gold-dark text-[9px] font-cinzel font-bold tracking-widest uppercase rounded shadow-sm">
                        {svc.category}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <h3 className="font-serif text-xl text-indigo-dark font-bold group-hover:text-gold-dark transition-colors">
                        {svc.title}
                      </h3>
                      <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                        {svc.desc}
                      </p>

                      <ul className="pt-4 border-t border-gold-primary/20 space-y-2.5">
                        {svc.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 font-sans text-[11px] font-medium text-charcoal/90 leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-emerald-dark shrink-0 font-bold mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="p-6 sm:p-8 pt-0 mt-4">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-2 font-cinzel text-xs font-bold text-indigo-dark hover:text-gold-dark tracking-wider uppercase transition-colors"
                    >
                      <span>Explore Extra Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold-dark" />
                    </Link>
                  </div>
                </LiyawelaCard>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
