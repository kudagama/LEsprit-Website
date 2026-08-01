"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
    location: "Ella, Sri Lanka",
    title: "Tea Country Highlands"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
    location: "Sigiriya, Sri Lanka",
    title: "Sacred Heritage"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80",
    location: "Yala National Park",
    title: "Majestic Wildlife"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
    location: "Private Island, Maldives",
    title: "Overwater Sanctum"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80",
    location: "Baa Atoll, Maldives",
    title: "Secluded Shorelines"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80",
    location: "Luxury Yacht Charter",
    title: "Ocean Exploration"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    location: "Private Beach Dinner",
    title: "Bespoke Dining"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    location: "Wellness Retreat",
    title: "Ayurvedic Sanctuary"
  }
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const targetRef = useRef(null);
  
  // Track scroll position of the gallery section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Translate horizontal track leftwards from 0% to -76% based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-76%"]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <section ref={targetRef} id="gallery" className="relative h-[450vh] bg-paper-parchment">
      {/* Sticky Fullscreen Wrapper */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Header */}
        <div className="absolute top-10 sm:top-14 left-6 right-6 text-center z-20">
          <span className="font-cinzel text-xs font-bold tracking-widest text-[#A87D46] uppercase block mb-1">
            Visual Diaries
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-indigo-dark mb-2">
            The Art of Travel: <span className="text-[#A87D46]">Captured Moments</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-primary mx-auto mt-2" />
        </div>

        {/* Horizontal Sliding Track */}
        <div className="relative flex items-center justify-start w-full">
          <motion.div style={{ x }} className="flex gap-6 sm:gap-10 pl-8 sm:pl-20 pr-[40vw]">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="relative w-[280px] sm:w-[450px] h-[340px] sm:h-[480px] shrink-0 rounded-2xl overflow-hidden shadow-floating group cursor-pointer border border-gold-border/20 bg-white"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Clean hover overlays - no text */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 z-10" />
                <div className="absolute inset-4 border border-gold-primary/0 group-hover:border-gold-primary/40 transition-all duration-500 pointer-events-none rounded-xl z-20" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar Indicator at bottom */}
        <div className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gold-primary/20 z-20 rounded-full">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-[#A87D46] rounded-full origin-left"
          />
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 select-none cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all z-50 cursor-pointer hidden sm:flex"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all z-50 cursor-pointer hidden sm:flex"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Frame */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[75vh] w-full flex items-center justify-center p-2 bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-w-full max-h-[72vh] object-contain rounded-xl"
              />
            </motion.div>

            {/* Lightbox Caption (Brief title/location) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="text-center mt-6 max-w-2xl px-4 cursor-default"
            >
              <span className="font-cinzel text-xs tracking-[0.2em] text-gold-primary uppercase font-bold block mb-1">
                {GALLERY_ITEMS[lightboxIndex].location}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h3>
            </motion.div>

            {/* Image Count */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-cinzel text-xs text-white/50 tracking-widest uppercase">
              {lightboxIndex + 1} / {GALLERY_ITEMS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
