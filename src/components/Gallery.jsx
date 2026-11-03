"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    image: "/assets/images/gallery/moment_sigiriya_viewpoint.jpg",
    location: "Pidurangala & Sigiriya Citadel",
    title: "Dawn Vista of the Ancient Fortress"
  },
  {
    id: 2,
    image: "/assets/images/gallery/moment_safari_sunset.jpg",
    location: "Minneriya & Kaudulla Wilderness",
    title: "Sunset Wild Elephant Gathering"
  },
  {
    id: 3,
    image: "/assets/images/gallery/moment_scenic_train.jpg",
    location: "Ella & Highland Tea Valleys",
    title: "Iconic Ceylon Scenic Rail Odyssey"
  },
  {
    id: 4,
    image: "/assets/images/gallery/moment_kandy_blessing.jpg",
    location: "Temple of the Sacred Tooth, Kandy",
    title: "Sacred Lotus Flower Offering"
  },
  {
    id: 5,
    image: "/assets/images/gallery/moment_rafting_adventure.jpg",
    location: "Kitulgala Rapids, Kelani River",
    title: "Wild White Water Rafting Expedition"
  },
  {
    id: 6,
    image: "/assets/images/gallery/moment_tropical_coast.jpg",
    location: "Bentota & Southern Coastlines",
    title: "Azure Reefs & Palm-Fringed Shores"
  },
  {
    id: 7,
    image: "/assets/images/gallery/moment_artisan_crafts.jpg",
    location: "Galle Fort Heritage Quarter",
    title: "Traditional Sculptures & Folk Artistry"
  },
  {
    id: 8,
    image: "/assets/images/gallery/moment_ayurveda_healing.jpg",
    location: "Ayurveda Wellness Retreat, Sri Lanka",
    title: "Harmonic Sound Healing & Inner Balance"
  },
  {
    id: 9,
    image: "/assets/images/gallery/moment_galle_fort_cafe.jpg",
    location: "Galle Fort Historic Ramparts",
    title: "Al Fresco Seafood & Colonial Streets"
  },
  {
    id: 10,
    image: "/assets/images/gallery/moment_jeep_safari.jpg",
    location: "Yala National Park Safari",
    title: "Wilderness Expedition Companions"
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

  // Translate horizontal track leftwards based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

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
    <section ref={targetRef} id="gallery" className="relative h-[600vh] bg-paper-parchment">
      {/* Sticky Fullscreen Wrapper */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Header */}
        <div className="w-full text-center z-20 mb-8 sm:mb-12 shrink-0 px-6 pt-16 sm:pt-0">
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
          <motion.div style={{ x }} className="flex flex-nowrap w-max gap-6 sm:gap-10 pl-8 sm:pl-20 pr-[65vw]">
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
                
                {/* Clean hover gradient & elegant caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute bottom-5 left-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                  <span className="font-cinzel text-[11px] font-bold text-gold-warm tracking-widest uppercase block mb-1">
                    {item.location}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-white font-medium drop-shadow-md">
                    {item.title}
                  </h4>
                </div>
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
