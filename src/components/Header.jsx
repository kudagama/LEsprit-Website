"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-indigo-deep/95 backdrop-blur-md py-4 border-b border-gold-border shadow-xl"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-ivory-sacred to-gold-primary">
            L’ESPRIT VOYAGES
          </span>
          <span className="font-cinzel text-[0.6rem] tracking-[0.25em] text-gold-warm uppercase -mt-1">
            L’ESPRIT DE VOYAGE — SRI LANKA & MALDIVES
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Our Concept", "Destinations", "Services", "Heritage Impact"].map((item) => {
            const href = `#${item.toLowerCase().replace(" ", "-")}`;
            return (
              <a
                key={item}
                href={href}
                className="font-cinzel text-xs uppercase tracking-widest text-ivory-sacred/90 hover:text-gold-primary transition-colors relative py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-primary transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-wider rounded hover:shadow-gold hover:-translate-y-0.5 transition-all"
          >
            Plan Your Journey
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gold-warm p-2"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-indigo-deep/98 border-b border-gold-border px-6 py-6"
          >
            <div className="flex flex-col gap-5">
              {["Our Concept", "Destinations", "Services", "Heritage Impact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-cinzel text-sm uppercase tracking-widest text-ivory-sacred hover:text-gold-primary"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-6 py-3 bg-gold-primary text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-wider rounded"
                >
                  Plan Your Journey
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
