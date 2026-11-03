"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Compass, ShieldCheck, Heart, Leaf } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
  {
    num: "01",
    subtitle: "Creativity & Vision",
    title: "Design",
    icon: Compass,
    image: "/assets/images/pillars/pillar_1.jpg?v=4",
    desc: "Custom-tailored, bespoke itineraries designed around your personal rhythm and desires, capturing the true spirit of discovery.",
  },
  {
    num: "02",
    subtitle: "Originality & Novelty",
    title: "Novelty",
    icon: Award,
    image: "/assets/images/pillars/pillar_2.jpg?v=3",
    desc: "Unlocking hidden doors, undiscovered trails, and rare private access unavailable through conventional travel routes.",
  },
  {
    num: "03",
    subtitle: "Artisanal Finesse",
    title: "Finesse",
    icon: ShieldCheck,
    image: "/assets/images/pillars/pillar_3.jpg?v=3",
    desc: "Uncompromising attention to detail, flawless execution, and seamless 5-star logistics at every single touchpoint.",
  },
  {
    num: "04",
    subtitle: "Authentic Hospitality",
    title: "Goodness",
    icon: Heart,
    image: "/assets/images/pillars/pillar_4.jpg?v=3",
    desc: "Warm Sri Lankan hospitality, genuine human warmth, and respectful immersion with native island communities.",
  },
  {
    num: "05",
    subtitle: "Ecological Stewardship",
    title: "Conservation",
    icon: Leaf,
    image: "/assets/images/pillars/pillar_5.jpg?v=3",
    desc: "Active stewardship of fragile ecosystems, wildlife sanctuaries, and sacred heritage preservation.",
  },
];

export default function PuskolaPotha() {
  const sectionRef = useRef(null);
  const aboutIntroRef = useRef(null);

  useEffect(() => {
    if (aboutIntroRef.current) {
      gsap.fromTo(
        aboutIntroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutIntroRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div id="concept" ref={sectionRef} className="relative w-full">
      {/* ========================================================= */}
      {/* PACIFIC STYLE ABOUT US SECTION (WITHOUT VIDEO BANNER)     */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-24 bg-paper-parchment overflow-hidden liyavela-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={aboutIntroRef} className="relative z-20">
            {/* 2-Column Pacific Layout (Image matches right column height exactly without gap) */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
              {/* Left Column: Framed Image (takes exact height of right column) */}
              <div className="lg:col-span-6 relative h-[380px] sm:h-[450px] lg:h-auto">
                <div className="relative lg:absolute lg:inset-0 rounded-md overflow-hidden border-[12px] sm:border-[16px] border-white shadow-[0_15px_35px_-8px_rgba(0,0,0,0.18)] bg-white h-full w-full">
                  <img
                    src="/assets/images/nine-arch-bridge.jpg"
                    alt="An Unfolding Digital Puskola Potha"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Corner Accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-primary pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-primary pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Heading, Subheading, Narrative & Button without gap */}
              <div className="lg:col-span-6 flex flex-col justify-start pt-0">
                <span className="font-['Arizonia',cursive] text-3xl sm:text-4xl text-[#A87D46] block mb-2 leading-none">
                  The Philosophy of L’Esprit
                </span>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-indigo-dark leading-[1.3] mb-3">
                  An Unfolding Digital <span className="gold-gradient-text">"Puskola Potha"</span>
                </h2>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-indigo-dark mb-4">
                  Redefining Authentic 5-Star Luxury
                </h3>

                <p className="font-sans text-charcoal text-base sm:text-lg leading-relaxed mb-4">
                  In French, <strong className="text-indigo-dark">L’ESPRIT VOYAGES</strong> translates to <em className="text-[#A87D46]">"The Spirit of Journeys."</em> Rooted in delivering refined, personalized destination experiences, our concept is built upon two decades of passion. We believe luxury travel is not merely visiting a location—it is about communing with the soul, living history, and fine craftsmanship of the land.
                </p>

                <p className="font-sans text-charcoal/80 text-sm sm:text-base leading-relaxed mb-6">
                  From mist-shrouded emerald tea plantations in the Central Highlands to pristine, untouched Maldivian coral atolls, every itinerary is hand-stitched for those who seek rare, authentic elegance.
                </p>

                {/* Our Strength Callout */}
                <div className="bg-gradient-to-br from-[#0B1B2B] to-[#16382B] text-white p-5 sm:p-6 rounded-lg border border-gold-primary/30 relative overflow-hidden shadow-lg mb-6">
                  <div className="flex items-center gap-2 text-gold-primary font-serif font-bold text-lg mb-2">
                    <Heart className="w-5 h-5 text-gold-primary" />
                    <span>Our Human Heart & Strength</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
                    Backed by <strong className="text-white font-semibold">20+ years of destination expertise</strong>, our true strength is supported by a strong handpicked network of local experts, artisans, experienced guides, and dedicated chauffeur guides who form the human heart of every journey.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] font-bold px-3 py-1 bg-gold-primary/20 border border-gold-primary/40 text-gold-warm rounded-full">
                      ✓ 20+ Years Excellence
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 bg-gold-primary/20 border border-gold-primary/40 text-gold-warm rounded-full">
                      ✓ Private Chauffeur Guides
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 bg-gold-primary/20 border border-gold-primary/40 text-gold-warm rounded-full">
                      ✓ Curated Artisan Access
                    </span>
                  </div>
                </div>

                <div className="pt-0">
                  <a
                    href="#journey"
                    className="inline-block bg-gradient-to-r from-gold-primary to-gold-dark hover:from-[#E5C158] hover:to-gold-primary text-indigo-deep font-sans font-bold text-xs sm:text-sm uppercase tracking-[2px] px-8 py-4 rounded transition-all duration-300 shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.55)] hover:-translate-y-0.5 cursor-pointer"
                  >
                    Explore Bespoke Journeys
                  </a>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* CORE VALUES MATRIX (5 PILLARS OF PUSKOLA POTHA)           */}
            {/* ========================================================= */}
            <div className="pt-24 mt-16 border-t border-gold-primary/20">
              <div className="text-center mb-14">
                <span className="font-['Arizonia',cursive] text-2xl sm:text-3xl text-gold-dark block mb-2">
                  The Foundations of Every Bespoke Voyage
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-indigo-dark font-bold">
                  An Unfolding Digital <span className="text-[#A87D46]">"Puskola Potha"</span> — The 5 Pillars
                </h3>
                <div className="flex items-center justify-center gap-4 text-gold-primary mt-4">
                  <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-dark" />
                  <div className="w-1.5 h-1.5 bg-gold-dark rotate-45" />
                  <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-dark" />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[480px]">
                {PILLARS.map((p, idx) => {
                  const IconComponent = p.icon;
                  return (
                    <motion.div
                      key={p.num}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="group relative flex-1 bg-[#071526] hover:flex-[1.7] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-gold-primary/30 hover:border-gold-primary rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer flex flex-col"
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0 z-0">
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071526] via-[#071526]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                      </div>

                      {/* Watermark Number */}
                      <div className="absolute -right-4 -bottom-6 text-[10rem] xl:text-[12rem] font-serif font-bold text-white/5 group-hover:text-white/10 transition-colors duration-700 pointer-events-none select-none z-0">
                        {p.num}
                      </div>
                      
                      <div className="relative z-10 h-full p-5 xl:p-6 flex flex-col">
                        <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-gold-primary/40 group-hover:bg-gold-primary group-hover:border-gold-primary transition-all duration-500 flex items-center justify-center mb-8 shrink-0">
                          <IconComponent className="w-5 h-5 text-gold-primary group-hover:text-[#071526] transition-colors duration-500" />
                        </div>
                        
                        <div className="mt-auto">
                          <div className="font-sans text-xs xl:text-sm text-gold-primary font-bold mb-3 uppercase tracking-wider xl:tracking-[0.1em] opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                            {p.subtitle}
                          </div>
                          
                          <h4 className="font-serif text-2xl xl:text-3xl text-white font-bold mb-4 group-hover:-translate-y-1 transition-transform duration-500 break-words drop-shadow-lg">
                            {p.title}
                          </h4>
                          
                          {/* Desktop expandable description */}
                          <div className="hidden lg:grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                            <div className="overflow-hidden">
                              <p className="font-sans text-sm sm:text-base text-white/95 leading-relaxed pt-2 pb-1 drop-shadow-md">
                                {p.desc}
                              </p>
                            </div>
                          </div>
                          {/* Mobile description */}
                          <div className="lg:hidden">
                            <p className="font-sans text-sm sm:text-base text-white/95 leading-relaxed pt-2 pb-1 drop-shadow-md">
                              {p.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
