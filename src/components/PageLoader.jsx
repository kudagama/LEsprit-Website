"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  // Initial load effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Route change effect
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-indigo-deep flex flex-col items-center justify-center text-white p-6 overflow-hidden select-none pointer-events-auto"
        >
          {/* Background Liyavela Motif Vignette */}
          <div className="absolute inset-8 border border-gold-primary/20 pointer-events-none rounded-lg" />
          <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-gold-primary" />
          <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-gold-primary" />
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-gold-primary" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-gold-primary" />

          {/* Animated Symbol */}
          <motion.div
            animate={{ rotate: [0, 360], scale: [0.95, 1.05, 0.95] }}
            transition={{ rotate: { duration: 12, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
            className="text-3xl text-gold-primary mb-6"
          >
            ☸
          </motion.div>

          {/* Animating Brand Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-primary to-ivory-sacred text-center mb-3"
          >
            L’ESPRIT VOYAGES
          </motion.h1>

          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold-warm uppercase text-center mb-10"
          >
            L’ESPRIT DE VOYAGE — THE SPIRIT OF LUXURY JOURNEYS
          </motion.span>

          {/* Pulsing Gold Loading Line */}
          <div className="w-48 h-[2px] bg-indigo-dark relative overflow-hidden rounded-full border border-gold-primary/30">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-gold-primary to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
