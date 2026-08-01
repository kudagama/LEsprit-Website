"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_VIDEOS = [
  {
    url: "/assets/VIDEOS/253907_small.mp4",
    label: "Maldives Paradise"
  },
  {
    url: "https://player.vimeo.com/external/409217032.hd.mp4?s=a78df790757a3e7efcdbfd3e5e40e6c2e32f7a63&profile_id=174&oauth2_token_id=57447761",
    label: "Tea Estates, Ella"
  },
  {
    url: "https://player.vimeo.com/external/371433846.hd.mp4?s=db527d7fc49c8dfbbf14532b21c43f721c54b0eb&profile_id=174&oauth2_token_id=57447761",
    label: "Untouched Beaches"
  },
  {
    url: "https://player.vimeo.com/external/435674703.hd.mp4?s=086c8f6cdb121fb6bb79e000f074d221c54b0eb&profile_id=174&oauth2_token_id=57447761",
    label: "Heritage Wildlife"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance videos every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_VIDEOS.length) % HERO_VIDEOS.length);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-indigo-dark pt-32 pb-24 overflow-hidden">
      {/* Background Video Carousel Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-105"
              src={HERO_VIDEOS[currentSlide].url}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-indigo-dark/70 to-indigo-dark/40 z-10" />
      </div>

      {/* Liyavela Framing Vignette */}
      <div className="absolute inset-6 border border-gold-primary/20 pointer-events-none z-25 hidden sm:block" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gold-primary/20 bg-indigo-deep/30 backdrop-blur-md flex items-center justify-center text-ivory-sacred hover:bg-gold-primary hover:text-indigo-deep hover:border-gold-primary transition-all z-30 hidden md:flex"
        aria-label="Previous destination"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gold-primary/20 bg-indigo-deep/30 backdrop-blur-md flex items-center justify-center text-ivory-sacred hover:bg-gold-primary hover:text-indigo-deep hover:border-gold-primary transition-all z-30 hidden md:flex"
        aria-label="Next destination"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-ivory-sacred">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-primary/10 border border-gold-border backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-gold-primary shadow-[0_0_10px_#D4AF37]" />
          <span className="font-cinzel text-xs tracking-widest text-gold-warm uppercase">
            L’ESPRIT DE VOYAGE — THE SPIRIT OF BESPOKE JOURNEYS
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6 leading-tight">
          Experience the Soul, Spirit, and <span className="gold-gradient-text">Authenticity</span> of Every Journey.
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-xl text-ivory-sacred/90 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          With over two decades of expertise in Sri Lanka and the Maldives, we craft tailor-made luxury escapes that go beyond ordinary tourism, blending elegance, culture, and meaningful local connections.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-16">
          <a
            href="#destinations"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-widest rounded shadow-gold flex items-center justify-center gap-3 hover:scale-105 transition-transform"
          >
            <span>Discover Sri Lanka</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#destinations"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-deep/50 border border-gold-primary text-white font-cinzel text-xs font-semibold uppercase tracking-widest rounded backdrop-blur-md hover:bg-gold-primary/20 flex items-center justify-center gap-3 transition-colors hover:scale-105"
          >
            <span>Explore Maldives</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <a href="#concept" className="inline-flex flex-col items-center gap-2 text-gold-warm text-xs font-cinzel tracking-widest uppercase opacity-75 hover:opacity-100 transition-opacity">
          <span>Unfold The Spirit Of Journey</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>

      {/* Slide Indicators / Navigation Bullets */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30 max-w-[90vw] overflow-x-auto py-2">
        {HERO_VIDEOS.map((video, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="flex flex-col items-center gap-1.5 group focus:outline-none"
          >
            <span className={`font-cinzel text-[9px] tracking-widest transition-colors uppercase whitespace-nowrap hidden sm:inline ${
              idx === currentSlide ? "text-gold-primary font-bold" : "text-ivory-sacred/40 group-hover:text-ivory-sacred/80"
            }`}>
              {video.label}
            </span>
            <div className={`h-1 rounded-full transition-all duration-500 ${
              idx === currentSlide ? "w-10 bg-gold-primary" : "w-3 bg-ivory-sacred/20 group-hover:bg-ivory-sacred/50"
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
}
