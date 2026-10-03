"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    image: "/assets/images/pillars/pillar_1.jpg",
    desc: "Custom-tailored, bespoke itineraries designed around your personal rhythm and desires, capturing the true spirit of discovery.",
  },
  {
    num: "02",
    subtitle: "Originality & Novelty",
    title: "Novelty",
    icon: Award,
    image: "/assets/images/pillars/pillar_2.jpg",
    desc: "Unlocking hidden doors, undiscovered trails, and rare private access unavailable through conventional travel routes.",
  },
  {
    num: "03",
    subtitle: "Artisanal Finesse",
    title: "Finesse",
    icon: ShieldCheck,
    image: "/assets/images/pillars/pillar_3.jpg",
    desc: "Uncompromising attention to detail, flawless execution, and seamless 5-star logistics at every single touchpoint.",
  },
  {
    num: "04",
    subtitle: "Authentic Hospitality",
    title: "Goodness",
    icon: Heart,
    image: "/assets/images/pillars/pillar_4.jpg",
    desc: "Warm Sri Lankan hospitality, genuine human warmth, and respectful immersion with native island communities.",
  },
  {
    num: "05",
    subtitle: "Ecological Stewardship",
    title: "Conservation",
    icon: Leaf,
    image: "/assets/images/pillars/pillar_5.jpg",
    desc: "Active stewardship of fragile ecosystems, wildlife sanctuaries, and sacred heritage preservation.",
  },
];

export default function PuskolaPotha() {
  const sectionRef = useRef(null);
  const manuscriptRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  useEffect(() => {
    if (manuscriptRef.current) {
      gsap.fromTo(
        manuscriptRef.current,
        { opacity: 0, scale: 0.95, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="concept" ref={sectionRef} className="pt-12 pb-12 bg-paper-parchment relative overflow-hidden liyavela-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs font-bold tracking-widest text-indigo-dark uppercase block mb-2">
            The Philosophy of L’Esprit — The Spirit of Travel
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-4">
            An Unfolding Digital <span className="text-[#A87D46]">"Puskola Potha"</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-gold-primary">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-dark" />
            <div className="w-1.5 h-1.5 bg-gold-dark rotate-45" />
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-dark" />
          </div>
        </div>

        {/* Content Wrapper for Scroll Entry Animation */}
        <div ref={manuscriptRef} className="space-y-16">
          {/* Narrative & Strength Row with Scroll-Animated Side Image */}
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Left Content Column (Text & Callout Stacked) */}
            <div className="md:col-span-7 flex flex-col gap-8">
              <div>
                <span className="font-cinzel text-xs font-bold text-indigo-dark tracking-widest uppercase block mb-2">
                  L’Esprit — The Spirit of Journeys Narrative
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-indigo-dark mb-4">
                  Redefining Authentic 5-Star Luxury
                </h3>
                <p className="font-sans text-charcoal text-base font-normal leading-relaxed mb-4">
                  In French, <strong>L’ESPRIT VOYAGES</strong> translates to <em>"The Spirit of Journeys."</em> Rooted in delivering refined, personalized destination experiences, our concept is built upon two decades of passion. We believe luxury travel is not merely visiting a location—it is about communing with the soul, living history, and fine craftsmanship of the land.
                </p>
                <p className="font-sans text-charcoal text-base font-normal leading-relaxed">
                  From mist-shrouded emerald tea plantations in the Central Highlands to pristine, untouched Maldivian coral atolls, every itinerary is hand-stitched for those who seek rare, authentic elegance.
                </p>
              </div>

              {/* Our Strength Callout */}
              <div className="bg-gradient-to-br from-emerald-dark to-emerald-medium text-white p-6 sm:p-8 rounded-lg border border-gold-border relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/10 rounded-full blur-2xl pointer-events-none" />
                <Heart className="w-8 h-8 text-gold-primary mb-4" />
                <h4 className="font-serif text-xl text-gold-primary font-bold mb-3">
                  The Human Heart & Spirit
                </h4>
                <p className="font-sans text-xs text-white leading-relaxed mb-6 font-normal">
                  Backed by <strong>20+ years of destination expertise</strong>, our true strength is supported by a strong handpicked network of local experts, artisans, experienced guides, and dedicated chauffeur guides who form the human heart of every journey.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="font-cinzel text-[0.75rem] font-bold px-3 py-1 bg-gold-primary/20 border border-gold-primary text-gold-warm rounded-full">
                    20+ Years Excellence
                  </span>
                  <span className="font-cinzel text-[0.75rem] font-bold px-3 py-1 bg-gold-primary/20 border border-gold-primary text-gold-warm rounded-full">
                    Chauffeur Guides
                  </span>
                </div>
              </div>
            </div>

            {/* Right Scroll-Animated Image Column */}
            <div className="md:col-span-5 relative flex items-center justify-center">
              <motion.div 
                style={{ y }}
                className="relative border-2 border-gold-primary/30 rounded-lg p-2.5 bg-paper-parchment/30 shadow-2xl overflow-hidden group max-w-sm md:max-w-full"
              >
                {/* Traditional Liyavela corners on the image frame */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-gold-primary" />
                <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-gold-primary" />
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-gold-primary" />
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-gold-primary" />
                
                <img
                  src="/assets/images/puskolapotha.jpg?v=2"
                  alt="Ancient Puskola Potha Manuscript"
                  className="w-full h-auto object-cover rounded shadow-inner filter brightness-95 group-hover:brightness-100 transition-all duration-700 scale-[1.01] group-hover:scale-105"
                />
                
                {/* Subtle gold shimmer over the image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
              </motion.div>
            </div>
          </div>

          {/* 5 Pillars Matrix */}
          <div className="pt-20 border-t border-gold-primary/30 mt-16">
            <div className="text-center mb-16">
              <span className="font-cinzel text-sm text-gold-dark font-bold tracking-[0.2em] uppercase mb-3 block">
                The Foundations of Every Bespoke Voyage
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl text-indigo-dark font-bold">
                The 5 Pillars of L'Esprit
              </h3>
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
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071526] via-[#071526]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                    </div>

                    {/* Background number watermark */}
                    <div className="absolute -right-4 -bottom-6 text-[10rem] xl:text-[12rem] font-cinzel font-bold text-white/5 group-hover:text-white/10 transition-colors duration-700 pointer-events-none select-none z-0">
                      {p.num}
                    </div>
                    
                    <div className="relative z-10 h-full p-5 xl:p-6 flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-gold-primary/40 group-hover:bg-gold-primary group-hover:border-gold-primary transition-all duration-500 flex items-center justify-center mb-8 shrink-0">
                        <IconComponent className="w-5 h-5 text-gold-primary group-hover:text-[#071526] transition-colors duration-500" />
                      </div>
                      
                      <div className="mt-auto">
                        <div className="font-cinzel text-[10px] xl:text-xs text-gold-primary font-bold mb-3 uppercase tracking-wider xl:tracking-[0.1em] opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                          {p.subtitle}
                        </div>
                        
                        <h4 className="font-serif text-xl xl:text-2xl text-white font-bold mb-4 group-hover:-translate-y-1 transition-transform duration-500 break-words drop-shadow-lg">
                          {p.title}
                        </h4>
                        
                        <div className="hidden lg:grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                          <div className="overflow-hidden">
                            <p className="font-sans text-sm text-white/90 leading-relaxed pt-2 pb-1 drop-shadow-md">
                              {p.desc}
                            </p>
                          </div>
                        </div>
                        {/* Mobile Description Fallback (always visible on small screens) */}
                        <div className="lg:hidden">
                          <p className="font-sans text-sm text-white/90 leading-relaxed pt-2 pb-1 drop-shadow-md">
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
  );
}
