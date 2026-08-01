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
    desc: "Custom-tailored, bespoke itineraries designed around your personal rhythm and desires, capturing the true spirit of discovery.",
  },
  {
    num: "02",
    subtitle: "Originality & Novelty",
    title: "Novelty",
    icon: Award,
    desc: "Unlocking hidden doors, undiscovered trails, and rare private access unavailable through conventional travel routes.",
  },
  {
    num: "03",
    subtitle: "Artisanal Finesse",
    title: "Finesse",
    icon: ShieldCheck,
    desc: "Uncompromising attention to detail, flawless execution, and seamless 5-star logistics at every single touchpoint.",
  },
  {
    num: "04",
    subtitle: "Authentic Hospitality",
    title: "Goodness",
    icon: Heart,
    desc: "Warm Sri Lankan hospitality, genuine human warmth, and respectful immersion with native island communities.",
  },
  {
    num: "05",
    subtitle: "Ecological Stewardship",
    title: "Conservation",
    icon: Leaf,
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
            <span className="text-sm font-bold text-gold-dark">☸</span>
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
                <div className="text-3xl mb-3">🏛️</div>
                <h4 className="font-serif text-xl text-gold-primary font-bold mb-3">
                  The Human Heart & Spirit
                </h4>
                <p className="font-sans text-xs text-white leading-relaxed mb-6 font-normal">
                  Backed by <strong>20+ years of destination expertise</strong>, our true strength is supported by a strong handpicked network of local experts, artisans, experienced guides, and dedicated chauffeur guides who form the human heart of every journey.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="font-cinzel text-[0.75rem] font-bold px-3 py-1 bg-gold-primary/20 border border-gold-primary text-gold-warm rounded-full">
                    ✓ 20+ Years Excellence
                  </span>
                  <span className="font-cinzel text-[0.75rem] font-bold px-3 py-1 bg-gold-primary/20 border border-gold-primary text-gold-warm rounded-full">
                    ✓ Chauffeur Guides
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
                  src="/assets/images/puskolapotha.jpg"
                  alt="Ancient Puskola Potha Manuscript"
                  className="w-full h-auto object-cover rounded shadow-inner filter brightness-95 group-hover:brightness-100 transition-all duration-700 scale-[1.01] group-hover:scale-105"
                />
                
                {/* Subtle gold shimmer over the image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
              </motion.div>
            </div>
          </div>

          {/* 5 Pillars Matrix */}
          <div className="pt-10 border-t border-gold-primary/30">
            <div className="text-center mb-10">
              <span className="font-serif text-2xl text-indigo-dark font-bold block">The 5 Pillars of L'Esprit</span>
              <span className="font-cinzel text-xs text-indigo-dark font-bold tracking-widest uppercase">
                The Foundations of Every Bespoke Voyage
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PILLARS.map((p) => {
                const IconComponent = p.icon;
                return (
                  <motion.div
                    key={p.num}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-gold-dark/30 hover:border-gold-dark rounded-lg p-6 relative group transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-cinzel text-xs font-bold text-indigo-dark">{p.num}</span>
                      <IconComponent className="w-5 h-5 text-indigo-dark" />
                    </div>
                    <div className="font-serif text-xs text-emerald-dark font-bold mb-1 uppercase tracking-wider">
                      {p.subtitle}
                    </div>
                    <h4 className="font-serif text-xl text-indigo-dark font-bold mb-2">{p.title}</h4>
                    <p className="font-sans text-xs text-charcoal font-normal leading-relaxed">{p.desc}</p>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold-dark to-gold-primary group-hover:w-full transition-all duration-300 rounded-b-lg" />
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
