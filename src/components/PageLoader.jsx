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
    }, 1800); // slightly longer to allow the beautiful drawing animation to display
    return () => clearTimeout(timer);
  }, []);

  // Route change effect
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
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
          className="fixed inset-0 z-[9999] bg-indigo-deep bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-dark/70 via-indigo-deep to-indigo-deep flex flex-col items-center justify-center text-white p-6 overflow-hidden select-none pointer-events-auto"
        >
          {/* Liyavela Framing Corner Vignettes */}
          
          {/* Top-Left Corner Liyavela */}
          <div className="absolute top-6 left-6 w-20 h-20 md:w-28 md:h-28 text-gold-primary/25 pointer-events-none">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M 2 20 V 2 H 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 2 2 C 12 2, 18 12, 14 18 C 10 24, 2 30, 2 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 14 18 C 22 14, 28 4, 38 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
              <path d="M 2 12 C 8 8, 12 16, 14 18" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
              <circle cx="26" cy="10" r="1.5" fill="currentColor" />
              <circle cx="10" cy="26" r="1.5" fill="currentColor" />
              <circle cx="10" cy="10" r="2.2" fill="currentColor" />
            </svg>
          </div>

          {/* Top-Right Corner Liyavela */}
          <div className="absolute top-6 right-6 w-20 h-20 md:w-28 md:h-28 text-gold-primary/25 pointer-events-none rotate-90">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M 2 20 V 2 H 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 2 2 C 12 2, 18 12, 14 18 C 10 24, 2 30, 2 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 14 18 C 22 14, 28 4, 38 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
              <path d="M 2 12 C 8 8, 12 16, 14 18" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
              <circle cx="26" cy="10" r="1.5" fill="currentColor" />
              <circle cx="10" cy="26" r="1.5" fill="currentColor" />
              <circle cx="10" cy="10" r="2.2" fill="currentColor" />
            </svg>
          </div>

          {/* Bottom-Left Corner Liyavela */}
          <div className="absolute bottom-6 left-6 w-20 h-20 md:w-28 md:h-28 text-gold-primary/25 pointer-events-none -rotate-90">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M 2 20 V 2 H 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 2 2 C 12 2, 18 12, 14 18 C 10 24, 2 30, 2 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 14 18 C 22 14, 28 4, 38 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
              <path d="M 2 12 C 8 8, 12 16, 14 18" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
              <circle cx="26" cy="10" r="1.5" fill="currentColor" />
              <circle cx="10" cy="26" r="1.5" fill="currentColor" />
              <circle cx="10" cy="10" r="2.2" fill="currentColor" />
            </svg>
          </div>

          {/* Bottom-Right Corner Liyavela */}
          <div className="absolute bottom-6 right-6 w-20 h-20 md:w-28 md:h-28 text-gold-primary/25 pointer-events-none rotate-180">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M 2 20 V 2 H 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 2 2 C 12 2, 18 12, 14 18 C 10 24, 2 30, 2 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 14 18 C 22 14, 28 4, 38 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
              <path d="M 2 12 C 8 8, 12 16, 14 18" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
              <circle cx="26" cy="10" r="1.5" fill="currentColor" />
              <circle cx="10" cy="26" r="1.5" fill="currentColor" />
              <circle cx="10" cy="10" r="2.2" fill="currentColor" />
            </svg>
          </div>

          {/* Traditional Drawing Lotus Symbol */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-8"
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gold-primary drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
            >
              {/* Subtle gold glowing guide-path */}
              <path
                d="M 50 15 C 38 35, 45 65, 50 85 C 55 65, 62 35, 50 15 Z M 50 35 C 32 45, 30 75, 48 83 C 35 65, 40 45, 50 35 Z M 50 35 C 68 45, 70 75, 52 83 C 65 65, 60 45, 50 35 Z M 50 50 C 15 55, 12 80, 44 85 C 22 75, 30 60, 50 50 Z M 50 50 C 85 55, 88 80, 56 85 C 78 75, 70 60, 50 50 Z M 25 85 C 38 92, 62 92, 75 85 C 62 82, 38 82, 25 85 Z"
                stroke="currentColor"
                strokeWidth="0.8"
                fill="none"
                opacity="0.15"
              />
              {/* Dynamic Path-Drawing Lotus Motif */}
              <motion.path
                d="M 50 15 C 38 35, 45 65, 50 85 C 55 65, 62 35, 50 15 Z M 50 35 C 32 45, 30 75, 48 83 C 35 65, 40 45, 50 35 Z M 50 35 C 68 45, 70 75, 52 83 C 65 65, 60 45, 50 35 Z M 50 50 C 15 55, 12 80, 44 85 C 22 75, 30 60, 50 50 Z M 50 50 C 85 55, 88 80, 56 85 C 78 75, 70 60, 50 50 Z M 25 85 C 38 92, 62 92, 75 85 C 62 82, 38 82, 25 85 Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0.4, 1, 1, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
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
