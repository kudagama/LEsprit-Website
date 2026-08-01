"use client";

import { motion } from "framer-motion";

export default function PalapethiDivider({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full flex items-center justify-center py-6 overflow-hidden select-none pointer-events-none ${className}`}
    >
      <svg width="100%" height="32" className="overflow-visible">
        <defs>
          <pattern
            id="palapethi-divider-pattern"
            width="60"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            {/* Kandyan Palapethi (Lotus Petal) Repeating Motif Line Art */}
            {/* Outer Lotus Petal Arc */}
            <path
              d="M 0 30 Q 15 4 30 30 Q 45 4 60 30"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Inner Petal Detailing */}
            <path
              d="M 6 30 C 6 16, 24 16, 24 30"
              fill="none"
              stroke="#C5A880"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M 36 30 C 36 16, 54 16, 54 30"
              fill="none"
              stroke="#C5A880"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Central Vertical Bud Accent */}
            <path
              d="M 15 30 L 15 18"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
              opacity="0.8"
            />
            <path
              d="M 45 30 L 45 18"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
              opacity="0.8"
            />
            {/* Sacred Jewels/Dots */}
            <circle cx="30" cy="14" r="2.2" fill="#D4AF37" />
            <circle cx="0" cy="30" r="1.5" fill="#C5A880" opacity="0.8" />
            <circle cx="60" cy="30" r="1.5" fill="#C5A880" opacity="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="32" fill="url(#palapethi-divider-pattern)" />
      </svg>
    </motion.div>
  );
}
