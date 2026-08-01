"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    quote: "The pinnacle of bespoke travel. Every detail, from the archaeologist-guided climb of Sigiriya to the private tea plantation tasting, was curated to perfection. A truly authentic Sri Lankan journey.",
    author: "Dr. Adrian Vance",
    location: "Geneva, Switzerland",
    trip: "Grand Ceylon & Cultural Heritage",
    rating: 5
  },
  {
    id: 2,
    quote: "Words cannot describe the beauty of Hanifaru Bay, but it was L’Esprit's coordination of our private yacht and diving team that made this vacation unforgettable. Absolute privacy and world-class luxury.",
    author: "The Sterling Family",
    location: "London, United Kingdom",
    trip: "Maldives Secluded Ocean Escape",
    rating: 5
  },
  {
    id: 3,
    quote: "Our dual-paradise voyage was a masterclass in luxury logistics. The transition from the mist-shrouded tea country bungalows to our overwater Maldivian pavilion was seamless. Truly the spirit of bespoke travel.",
    author: "Charlotte & Pierre Lemaire",
    location: "Paris, France",
    trip: "The Dual Paradise Signature Voyage",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="testimonials" className="pt-20 pb-20 bg-ivory-sacred relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-deep/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-cinzel text-xs font-bold tracking-widest text-[#A87D46] uppercase block mb-2">
            Guest Diaries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-4">
            Stories of <span className="text-[#A87D46]">Extraordinary Journeys</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-gold-primary mb-4">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-dark" />
            <span className="text-sm font-bold text-gold-dark">☸</span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-dark" />
          </div>
        </div>

        {/* Carousel Showcase */}
        <div className="relative bg-white border border-gold-border/30 rounded-2xl p-8 sm:p-14 shadow-floating text-center">
          
          {/* Quote Icon */}
          <div className="w-14 h-14 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-dark mx-auto mb-8 shadow-sm">
            <Quote className="w-6 h-6 fill-gold-dark text-gold-dark" />
          </div>

          <div className="min-h-[220px] sm:min-h-[180px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Quote Text */}
                <p className="font-serif text-lg sm:text-2xl text-indigo-dark italic leading-relaxed max-w-3xl mx-auto">
                  "{REVIEWS[activeIndex].quote}"
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1">
                  {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-primary fill-gold-primary" />
                  ))}
                </div>

                {/* Author Info */}
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#A87D46] tracking-widest uppercase block mb-1">
                    {REVIEWS[activeIndex].author}
                  </h4>
                  <span className="font-sans text-xs text-charcoal/60 block">
                    {REVIEWS[activeIndex].location}
                  </span>
                  <span className="font-sans text-[11px] font-bold text-indigo-dark bg-gold-primary/10 border border-gold-primary/20 px-3 py-1 rounded-full inline-block mt-3 uppercase tracking-wider">
                    {REVIEWS[activeIndex].trip}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full border border-gold-primary/30 bg-white hover:bg-gold-primary hover:text-black hover:border-gold-primary flex items-center justify-center text-indigo-dark transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === activeIndex ? "w-8 bg-[#A87D46]" : "w-2.5 bg-gold-primary/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full border border-gold-primary/30 bg-white hover:bg-gold-primary hover:text-black hover:border-gold-primary flex items-center justify-center text-indigo-dark transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
