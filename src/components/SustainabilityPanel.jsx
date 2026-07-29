"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Droplets } from "lucide-react";

export default function SustainabilityPanel() {
  return (
    <section id="heritage-impact" className="py-20 bg-sand-fine relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden bg-emerald-dark text-white border border-gold-border shadow-2xl">
          {/* Background image overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('/assets/images/sustainability.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-dark/95 via-emerald-dark/90 to-indigo-deep/95" />

          {/* Content Grid */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 p-8 sm:p-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <span className="font-cinzel text-xs text-gold-warm tracking-widest uppercase block mb-2">
                Ethical Luxury
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6 leading-tight">
                Travel that Leaves a <span className="gold-gradient-text">Lasting Heritage</span>
              </h2>
              <p className="font-sans text-emerald-100/80 text-sm sm:text-base leading-relaxed mb-10">
                At L’Esprit Voyages, true luxury safeguards the natural beauty and local communities that make our destinations extraordinary. We integrate sustainable practices directly into every itinerary.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gold-primary/20">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-primary block">
                    100%
                  </span>
                  <span className="font-sans text-xs text-emerald-200">
                    Single-Use Plastic Free Vehicles
                  </span>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-primary block">
                    25+
                  </span>
                  <span className="font-sans text-xs text-emerald-200">
                    Local Schools Renovated
                  </span>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-primary block">
                    150+
                  </span>
                  <span className="font-sans text-xs text-emerald-200">
                    Artisans Directly Supported
                  </span>
                </div>
              </div>
            </div>

            {/* Right Pillars */}
            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  icon: Leaf,
                  title: "Environmental Impact Reduction",
                  desc: "Optimized eco-logistics, low-emission fleet routing, and carbon offset initiatives preserving Sri Lanka’s rainforests.",
                },
                {
                  icon: Users,
                  title: "Community First Initiatives",
                  desc: "Funding local village school renovations, classroom technology enhancements, and directly commissioning craftspeople.",
                },
                {
                  icon: Droplets,
                  title: "Plastic Waste Elimination",
                  desc: "Complimentary custom copper reusable water bottles provided to guests with vehicle refillable mineral water stations.",
                },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 6 }}
                    className="p-5 bg-white/5 border border-gold-border/30 backdrop-blur-md rounded-lg flex gap-4 items-start hover:bg-gold-primary/10 hover:border-gold-primary transition-all"
                  >
                    <div className="p-2 bg-gold-primary/20 rounded text-gold-primary shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-gold-warm mb-1">{item.title}</h4>
                      <p className="font-sans text-xs text-emerald-100/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
