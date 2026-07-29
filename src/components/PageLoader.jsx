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
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-indigo-deep flex flex-col items-center justify-center text-ivory-sacred p-6 overflow-hidden select-none pointer-events-auto"
        >
          {/* Animated Symbol */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-3xl text-gold-primary/70 mb-8"
          >
            ☸
          </motion.div>

          {/* Animating Brand Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-5xl font-medium tracking-[0.15em] text-ivory-sacred text-center mb-4"
          >
            L’ESPRIT VOYAGES
          </motion.h1>

          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-[0.65rem] sm:text-[0.7rem] font-medium tracking-[0.35em] text-gold-primary uppercase text-center mb-12"
          >
            L’ESPRIT DE VOYAGE — THE SPIRIT OF LUXURY JOURNEYS
          </motion.span>

          {/* Minimalist Loading Bar */}
          <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1/2 bg-gold-primary/50"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
