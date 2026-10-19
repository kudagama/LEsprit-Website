"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowUpRight, Phone, Mail, Sparkles } from "lucide-react";

const SEARCH_ITEMS = [
  { title: "Sri Lanka Expeditions", category: "Destination", targetId: "destinations", keywords: ["sri lanka", "culture", "ceylon", "island"] },
  { title: "Maldives Sanctuaries", category: "Destination", targetId: "destinations", keywords: ["maldives", "overwater", "lagoon", "atoll"] },
  { title: "Cultural Heritage & Ancient Kingdoms", category: "Package", targetId: "packages", keywords: ["sigiriya", "kandy", "anuradhapura", "temple", "culture", "heritage"] },
  { title: "The Untamed Wild & Leopard Safaris", category: "Package", targetId: "packages", keywords: ["yala", "wilpattu", "leopard", "wildlife", "safari", "elephant"] },
  { title: "Tea Country Elegance & Highlands", category: "Package", targetId: "packages", keywords: ["ella", "tea", "nuwara eliya", "mountains", "scenic"] },
  { title: "Oceanic Overwater Sanctuary", category: "Package", targetId: "packages", keywords: ["ocean", "villas", "bungalow", "coral"] },
  { title: "Private Chauffeur Fleet", category: "Services", targetId: "services", keywords: ["chauffeur", "luxury fleet", "car", "driver", "transport"] },
  { title: "Private Jet & Helicopter Charters", category: "Services", targetId: "services", keywords: ["jet", "helicopter", "aviation", "flight"] },
  { title: "Ayurveda Wellness Retreats", category: "Services", targetId: "services", keywords: ["ayurveda", "spa", "wellness", "healing", "retreat"] },
  { title: "Digital Puskola Potha & 5 Pillars", category: "Heritage", targetId: "concept", keywords: ["puskola potha", "pillars", "history", "philosophy", "story"] },
  { title: "Sustainability & Ethical Impact", category: "Heritage", targetId: "heritage-impact", keywords: ["sustainability", "schools", "artisans", "green", "plastic"] },
  { title: "Bespoke Journey Builder", category: "Atelier", targetId: "contact", keywords: ["inquire", "contact", "plan", "book", "quote", "custom"] },
  { title: "L’Esprit Journal & Stories", category: "Journal", targetId: "news-social", keywords: ["news", "journal", "stories", "instagram", "articles"] }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close search dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResults = searchQuery.trim() === ""
    ? []
    : SEARCH_ITEMS.filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.keywords.some((k) => k.toLowerCase().includes(query))
        );
      });

  const handleSelectSearchResult = (targetId) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setMobileSearchOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (href) => {
    setSideMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-indigo-deep/95 backdrop-blur-md py-2.5 border-b border-gold-border shadow-2xl"
            : "bg-transparent py-6 sm:py-7"
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-14 2xl:px-20 flex justify-between items-center gap-4">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center shrink-0 z-10"
            aria-label="L'Esprit Voyages Home"
          >
            <img 
              src="/assets/images/logo.png" 
              alt="L'ESPRIT VOYAGES" 
              className={`w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] origin-left transition-all duration-500 ${
                isScrolled 
                  ? "h-8 md:h-10 transform scale-[2.8] md:scale-[3.2]" 
                  : "h-11 md:h-14 transform scale-[2.4] md:scale-[2.8]"
              }`}
            />
          </a>

          {/* Desktop Nav Links (Center) */}
          <nav className="hidden xl:flex items-center gap-7 2xl:gap-8">
            {[
              { label: "Our Concept", href: "#concept" },
              { label: "Destinations", href: "#destinations" },
              { label: "Signature Packages", href: "#packages" },
              { label: "Services", href: "#services" },
              { label: "Heritage Impact", href: "#heritage-impact" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-cinzel text-sm lg:text-[15px] uppercase tracking-wider text-ivory-sacred/90 hover:text-gold-primary transition-colors relative py-1 group font-semibold whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right-hand Corner Controls: Search Bar + Inquire Button + 3 Lines (Menu) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            
            {/* Desktop Search Bar */}
            <div ref={searchRef} className="relative hidden md:block">
              <div className="flex items-center bg-black/40 backdrop-blur-md border border-gold-primary/30 hover:border-gold-primary/70 focus-within:border-gold-primary rounded-full px-3.5 py-2 transition-all duration-300 w-36 lg:w-48 xl:w-56 focus-within:w-56 lg:focus-within:w-72 shadow-inner">
                <Search className="w-4 h-4 text-gold-warm shrink-0 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  placeholder="Search journeys..."
                  className="bg-transparent text-white text-xs lg:text-sm placeholder:text-ivory-sacred/45 focus:outline-none w-full font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setIsSearchOpen(false);
                    }}
                    className="text-ivory-sacred/50 hover:text-white ml-1.5 p-0.5 cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {isSearchOpen && searchQuery.trim() !== "" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2.5 right-0 w-80 max-h-84 overflow-y-auto bg-[#071526]/98 backdrop-blur-2xl border border-gold-primary/40 rounded-xl shadow-2xl p-2 z-50 divide-y divide-white/5"
                  >
                    {filteredResults.length > 0 ? (
                      filteredResults.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectSearchResult(item.targetId)}
                          className="w-full text-left p-2.5 hover:bg-gold-primary/15 rounded-lg transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <div>
                            <span className="text-[10px] uppercase font-cinzel font-bold text-gold-warm tracking-wider block">
                              {item.category}
                            </span>
                            <span className="text-sm font-sans text-white font-medium group-hover:text-gold-primary transition-colors">
                              {item.title}
                            </span>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-gold-primary/60 group-hover:text-gold-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </button>
                      ))
                    ) : (
                      <div className="p-4 text-center text-xs text-ivory-sacred/50 font-sans">
                        No matching destinations or journeys found.
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Search Icon Toggle */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="md:hidden w-10 h-10 rounded-lg border border-gold-primary/30 flex items-center justify-center text-gold-warm hover:text-gold-primary hover:border-gold-primary bg-black/20 transition-all cursor-pointer"
              aria-label="Toggle Mobile Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Inquire Button */}
            <a
              href="#contact"
              className="px-4 sm:px-6 py-2.5 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md hover:shadow-gold hover:-translate-y-0.5 transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Inquire</span>
            </a>

            {/* 3 Lines (Iri Kali Thunak) - Hamburger Menu Button */}
            <button
              onClick={() => setSideMenuOpen(true)}
              className="flex flex-col justify-center items-center gap-[5px] w-10 sm:w-11 h-10 sm:h-11 rounded-lg border border-gold-primary/30 hover:border-gold-primary bg-black/25 hover:bg-gold-primary/10 transition-all p-2 group cursor-pointer shadow-sm"
              aria-label="Open Navigation Menu"
              title="Menu"
            >
              <span className="w-5 h-[2px] bg-gold-warm group-hover:bg-gold-primary rounded-full transition-all group-hover:w-6" />
              <span className="w-5 h-[2px] bg-gold-warm group-hover:bg-gold-primary rounded-full transition-all" />
              <span className="w-5 h-[2px] bg-gold-warm group-hover:bg-gold-primary rounded-full transition-all group-hover:w-4" />
            </button>

          </div>

        </div>

        {/* Mobile Search Input Overlay */}
        <AnimatePresence>
          {mobileSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden px-4 pt-3 pb-2 bg-[#071526]/98 border-b border-gold-border/40"
            >
              <div className="flex items-center bg-black/50 border border-gold-primary/40 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-gold-warm mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, packages, fleet..."
                  className="bg-transparent text-white text-sm placeholder:text-ivory-sacred/45 focus:outline-none w-full"
                  autoFocus
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="text-white/60 p-1">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {searchQuery.trim() !== "" && (
                <div className="mt-2 max-h-60 overflow-y-auto divide-y divide-white/10 rounded-lg bg-black/40 p-2">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectSearchResult(item.targetId)}
                        className="w-full text-left p-2.5 text-sm text-white hover:text-gold-primary flex justify-between items-center"
                      >
                        <span>{item.title}</span>
                        <span className="text-[10px] text-gold-warm uppercase">{item.category}</span>
                      </button>
                    ))
                  ) : (
                    <div className="p-3 text-center text-xs text-white/50">No results found</div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Luxury Slide-Out Menu Drawer (Triggered by 3 Lines) */}
      <AnimatePresence>
        {sideMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSideMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[998] cursor-pointer"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[420px] lg:w-[460px] bg-gradient-to-b from-[#071526] via-[#050c14] to-[#020508] border-l border-gold-border/40 z-[999] shadow-2xl flex flex-col justify-between p-8 sm:p-10 overflow-y-auto"
            >
              {/* Drawer Top */}
              <div>
                <div className="flex justify-between items-center pb-8 border-b border-gold-primary/20">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-gold-primary">
                    L’ESPRIT VOYAGES
                  </span>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSideMenuOpen(false)}
                    className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-warm hover:text-white hover:bg-gold-primary/20 transition-all cursor-pointer"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Subtitle / Philosophy */}
                <p className="font-sans text-xs italic text-gold-warm/80 font-light mt-4 mb-8">
                  "Experience the Soul, Spirit, and Authenticity of Every Journey."
                </p>

                {/* Menu Navigation Links */}
                <nav className="space-y-4">
                  {[
                    { num: "01", label: "Our Concept & Heritage", href: "#concept" },
                    { num: "02", label: "Dual Paradise Destinations", href: "#destinations" },
                    { num: "03", label: "Signature Tour Packages", href: "#packages" },
                    { num: "04", label: "Curated Luxury Services", href: "#services" },
                    { num: "05", label: "Heritage Impact & Sustainability", href: "#heritage-impact" },
                    { num: "06", label: "L’Esprit Journal & Stories", href: "#news-social" }
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="group flex items-center gap-4 py-2.5 border-b border-white/5 hover:border-gold-primary/30 transition-all cursor-pointer"
                    >
                      <span className="font-cinzel text-xs text-gold-warm font-bold tracking-wider select-none">
                        {item.num}
                      </span>
                      <span className="font-serif text-lg sm:text-xl text-white group-hover:text-gold-primary group-hover:translate-x-1.5 transition-all">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer Bottom: Concierge Contact & Inquire CTA */}
              <div className="pt-8 mt-8 border-t border-gold-primary/20 space-y-6">
                
                {/* Atelier Concierge Details */}
                <div className="space-y-2.5 text-xs text-ivory-sacred/75 font-sans">
                  <span className="font-cinzel text-xs uppercase tracking-widest text-gold-primary font-bold block mb-1">
                    Atelier Concierge
                  </span>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-gold-primary shrink-0" />
                    <span>+94 70 732 8070 / +94 71 754 6885 (Thushari)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-gold-primary shrink-0" />
                    <a href="mailto:reservations@lespritlanka.com" className="hover:text-gold-primary transition-colors">
                      reservations@lespritlanka.com
                    </a>
                  </div>
                </div>

                {/* Primary CTA */}
                <a
                  href="#contact"
                  onClick={() => setSideMenuOpen(false)}
                  className="w-full py-3.5 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-sm font-bold uppercase tracking-wider rounded-md shadow-gold hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Inquire Bespoke Journey</span>
                </a>

                <p className="text-[11px] text-center text-ivory-sacred/40 font-sans">
                  Official: STTDA Reg. No: SLTDA/SQA/TA/01954
                </p>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
