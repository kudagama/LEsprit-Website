"use client";

import { motion } from "framer-motion";

export default function LiyawelaCard({ children, className = "", ...props }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative bg-paper-parchment border border-gold-border hover:border-gold-primary rounded-xl p-8 shadow-floating hover:shadow-gold transition-all group overflow-hidden ${className}`}
      {...props}
    >
      {/* Top-Left Liyawela (Vine Scroll) Corner Ornament */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-2 left-2 text-gold-warm/30 group-hover:text-gold-primary/55 pointer-events-none transition-all duration-500 transform group-hover:scale-105"
      >
        {/* Border corner line */}
        <path d="M 2 20 V 2 H 20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        {/* Scrolling vine scrolls */}
        <path
          d="M 2 2 C 12 2, 18 12, 14 18 C 10 24, 2 30, 2 38"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M 14 18 C 22 14, 28 4, 38 4"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M 2 12 C 8 8, 12 16, 14 18"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.7"
        />
        {/* Lotus scroll details */}
        <circle cx="26" cy="10" r="1.5" fill="currentColor" />
        <circle cx="10" cy="26" r="1.5" fill="currentColor" />
        <circle cx="10" cy="10" r="2.2" fill="currentColor" />
      </svg>

      {/* Bottom-Right Liyawela (Vine Scroll) Corner Ornament */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-2 right-2 text-gold-warm/30 group-hover:text-gold-primary/55 pointer-events-none transition-all duration-500 transform rotate-180 group-hover:scale-105"
      >
        {/* Border corner line */}
        <path d="M 2 20 V 2 H 20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        {/* Winding vine scroll */}
        <path
          d="M 2 2 C 12 2, 18 12, 14 18 C 10 24, 2 30, 2 38"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M 14 18 C 22 14, 28 4, 38 4"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M 2 12 C 8 8, 12 16, 14 18"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.7"
        />
        {/* Lotus details */}
        <circle cx="26" cy="10" r="1.5" fill="currentColor" />
        <circle cx="10" cy="26" r="1.5" fill="currentColor" />
        <circle cx="10" cy="10" r="2.2" fill="currentColor" />
      </svg>

      {/* Card Content Wrapper */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
