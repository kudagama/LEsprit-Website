"use client";

import { motion } from "framer-motion";

export default function PalapethiDivider({ className = "", variant = "1", height = "h-8 md:h-12" }) {
  const svgSrc = variant === "2"
    ? "/assets/images/bg_remove_2.svg"
    : "/assets/images/bg_remove.svg";

  // Repeating horizontal traditional ornament edge-to-edge at 75% opacity
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0.9 }}
      whileInView={{ opacity: 0.75, scaleY: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full select-none pointer-events-none overflow-hidden flex items-center ${className}`}
    >
      <div
        className={`w-full ${height}`}
        style={{
          backgroundImage: `url(${svgSrc})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          backgroundSize: 'auto 100%'
        }}
      />
    </motion.div>
  );
}
