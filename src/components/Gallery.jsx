"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "sri-lanka",
    title: "Tea Country Highlands",
    location: "Ella, Sri Lanka",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
    desc: "Mist-shrouded tea plantations and the iconic Nine Arch Bridge, reflecting centuries of heritage."
  },
  {
    id: 2,
    category: "sri-lanka",
    title: "Sacred Heritage",
    location: "Sigiriya, Sri Lanka",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
    desc: "The towering Sigiriya Rock Fortress, an ancient palace of architectural marvel and royal gardens."
  },
  {
    id: 3,
    category: "sri-lanka",
    title: "Majestic Wildlife",
    location: "Yala National Park",
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80",
    desc: "Encountering the elusive Sri Lankan leopards and elephants roaming free in dry zone reserves."
  },
  {
    id: 4,
    category: "maldives",
    title: "Overwater Sanctum",
    location: "Private Island, Maldives",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
    desc: "Luxury overwater villas hovering above crystal clear turquoise lagoons and vibrant coral gardens."
  },
  {
    id: 5,
    category: "maldives",
    title: "Secluded Shorelines",
    location: "Baa Atoll, Maldives",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80",
    desc: "Powder-soft white sands and towering palms meet the deep sapphire blue of the Indian Ocean."
  },
  {
    id: 6,
    category: "fleet",
    title: "Ocean Exploration",
    location: "Luxury Yacht Charter",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80",
    desc: "Sail in ultimate privacy on custom catamarans and motor yachts, exploring uninhabited islands."
  },
  {
    id: 7,
    category: "experiences",
    title: "Bespoke Dining",
    location: "Private Beach Dinner",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    desc: "Candlelit fine dining under the stars with waves lapping gently at your private sandbank table."
  },
  {
    id: 8,
    category: "experiences",
    title: "Ayurvedic Sanctuary",
    location: "Wellness Retreat",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    desc: "Rebalancing mind, body, and soul with sacred herbal oils and ancient healing rituals."
  }
];

const TABS = [
  { id: "all", label: "All Diaries" },
  { id: "sri-lanka", label: "Sri Lanka" },
  { id: "maldives", label: "Maldives" },
  { id: "experiences", label: "Experiences" },
  { id: "fleet", label: "Luxury Fleet" }
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = filter === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="pt-20 pb-20 bg-paper-parchment relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-cinzel text-xs font-bold tracking-widest text-indigo-dark uppercase block mb-2">
            Visual Diaries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-4">
            The Art of Travel: <span className="text-[#A87D46]">Captured Moments</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-gold-primary mb-4">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-dark" />
            <span className="text-sm font-bold text-gold-dark">☸</span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-dark" />
          </div>
          <p className="font-sans text-charcoal text-sm sm:text-base font-normal max-w-xl mx-auto">
            A visual anthology of luxury, culture, and nature across the Indian Ocean's dual paradises.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setFilter(tab.id);
                setLightboxIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full font-cinzel text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === tab.id
                  ? "bg-indigo-deep text-gold-primary border-gold-primary shadow-gold"
                  : "bg-white text-indigo-dark border-gold-border/60 hover:bg-gold-primary/10 hover:border-gold-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className="relative h-[280px] sm:h-[320px] rounded-xl overflow-hidden shadow-floating group cursor-pointer border border-gold-border/30 bg-white"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-108"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/90 via-indigo-deep/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500 z-10" />

                {/* Floating Gold Border Accent */}
                <div className="absolute inset-4 border border-gold-primary/20 group-hover:border-gold-primary/50 group-hover:shadow-[inset_0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 pointer-events-none rounded-lg z-20" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-indigo-deep/50 backdrop-blur-md border border-gold-primary/30 flex items-center justify-center text-gold-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-cinzel text-[9px] tracking-widest text-gold-warm uppercase font-bold block mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 font-medium">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[11px] text-ivory-sacred/80 leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
                className="relative max-w-5xl max-h-[70vh] w-full flex items-center justify-center p-2 bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-w-full max-h-[68vh] object-contain rounded-xl"
                />
              </motion.div>

              {/* Lightbox Caption */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="text-center mt-6 max-w-2xl px-4 cursor-default"
              >
                <span className="font-cinzel text-xs tracking-[0.2em] text-gold-primary uppercase font-bold block mb-1">
                  {filteredItems[lightboxIndex].location}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="font-sans text-sm text-ivory-sacred/80 leading-relaxed font-light">
                  {filteredItems[lightboxIndex].desc}
                </p>
              </motion.div>

              {/* Mobile Swipe Indicators / Image Count */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-cinzel text-xs text-white/50 tracking-widest uppercase">
                {lightboxIndex + 1} / {filteredItems.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
