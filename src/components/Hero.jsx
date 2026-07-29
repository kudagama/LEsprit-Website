"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const Hero3DCanvas = dynamic(() => import("./Hero3DCanvas"), { ssr: false });

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-indigo-dark pt-32 pb-20 overflow-hidden">
      {/* 3D Particle Canvas Overlay */}
      <Hero3DCanvas />

      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('/assets/images/hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-indigo-dark/70 to-indigo-dark/40" />
      </div>

      {/* Liyavela Framing Vignette */}
      <div className="absolute inset-6 border border-gold-primary/20 pointer-events-none z-10 hidden sm:block" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-ivory-sacred">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-primary/10 border border-gold-border backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold-primary shadow-[0_0_10px_#D4AF37]" />
          <span className="font-cinzel text-xs tracking-widest text-gold-warm uppercase">
            Sri Lanka & The Maldives — 20+ Years of Craftsmanship
          </span>
        </motion.div>

        {/* Title */}
        <h1 ref={titleRef} className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6 leading-tight">
          Where Royalty Meets <span className="gold-gradient-text">Authenticity</span>.
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className="font-sans text-base sm:text-xl text-ivory-sacred/80 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Two Decades of Crafting Bespoke Luxury Escapes Across Sri Lanka & The Maldives.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-16">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="#destinations"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-widest rounded shadow-gold flex items-center justify-center gap-3"
          >
            <span>Discover Sri Lanka</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="#destinations"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-deep/50 border border-gold-primary text-white font-cinzel text-xs font-semibold uppercase tracking-widest rounded backdrop-blur-md hover:bg-gold-primary/20 flex items-center justify-center gap-3 transition-colors"
          >
            <span>Explore Maldives</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Scroll Indicator */}
        <a href="#concept" className="inline-flex flex-col items-center gap-2 text-gold-warm text-xs font-cinzel tracking-widest uppercase opacity-75 hover:opacity-100 transition-opacity">
          <span>Unfold The Journey</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
