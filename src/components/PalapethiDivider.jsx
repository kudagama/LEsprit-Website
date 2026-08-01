"use client";

import { motion } from "framer-motion";

export default function PalapethiDivider({ className = "", variant = "1" }) {
  const svgSrc = variant === "2"
    ? "/assets/images/bg_remove_2.svg"
    : "/assets/images/bg_remove.svg";

  // Significantly increase the thickness (height) to make the divider patterns grand and prominent
  const heightClass = "h-16 md:h-28";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 0.9, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full select-none pointer-events-none overflow-hidden py-0 ${className}`}
    >
      <div
        className={`w-full opacity-90 ${heightClass}`}
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
