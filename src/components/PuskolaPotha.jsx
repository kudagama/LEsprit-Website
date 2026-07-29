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
    desc: "Custom-tailored, bespoke itineraries designed around your personal rhythm and desires, creating one-of-a-kind voyages.",
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
    <section id="concept" ref={sectionRef} className="py-24 bg-paper-parchment relative overflow-hidden liyavela-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs tracking-widest text-gold-dark uppercase block mb-2">
            The Philosophy of L’Esprit
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-4">
            An Unfolding Digital <span className="gold-gradient-text">"Puskola Potha"</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-gold-primary">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-primary" />
            <span className="text-sm">☸</span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-primary" />
          </div>
        </div>

        {/* Digital Manuscript Canvas Card */}
        <div
          ref={manuscriptRef}
          className="relative bg-white border border-gold-border rounded-xl p-8 sm:p-14 shadow-floating"
        >
          {/* Gold Filigree Borders */}
          <div className="absolute inset-3 border border-gold-primary/20 pointer-events-none rounded-lg" />
          <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-gold-primary" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-gold-primary" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-gold-primary" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-gold-primary" />

          {/* Narrative & Strength Row */}
          <div className="grid md:grid-cols-12 gap-10 items-center mb-16">
            <div className="md:col-span-7">
              <span className="font-cinzel text-xs text-gold-dark tracking-widest uppercase block mb-2">
                Sacred Heritage Narrative
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-indigo-dark mb-4">
                Redefining Authentic 5-Star Luxury
              </h3>
              <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-4">
                Rooted in delivering refined, personalized destination experiences, our concept is built upon two decades of passion. We believe luxury travel is not merely visiting a location—it is about communing with the soul, living history, and fine craftsmanship of the land.
              </p>
              <p className="font-sans text-charcoal/80 text-base leading-relaxed">
                From mist-shrouded emerald tea plantations in the Central Highlands to pristine, untouched Maldivian coral atolls, every itinerary is hand-stitched for those who seek rare, authentic elegance.
              </p>
            </div>

            {/* Our Strength Callout */}
            <div className="md:col-span-5 bg-gradient-to-br from-emerald-dark to-emerald-medium text-white p-8 rounded-lg border border-gold-border relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="text-3xl mb-3">🏛️</div>
              <h4 className="font-serif text-xl text-gold-primary mb-3">
                Our Human Heart & Strength
              </h4>
              <p className="font-sans text-xs text-emerald-100 leading-relaxed mb-6">
                Backed by <strong>20+ years of local mastery</strong>, our true strength lies in an exclusive, tight-knit network of master artisans, cultural historians, environmentalists, and dedicated chauffeur guides who transform every transit into an unforgettable story.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-cinzel text-[0.65rem] px-3 py-1 bg-gold-primary/15 border border-gold-primary/30 text-gold-warm rounded-full">
                  ✓ 20+ Years Excellence
                </span>
                <span className="font-cinzel text-[0.65rem] px-3 py-1 bg-gold-primary/15 border border-gold-primary/30 text-gold-warm rounded-full">
                  ✓ Chauffeur Guides
                </span>
              </div>
            </div>
          </div>

          {/* 5 Pillars Matrix */}
          <div className="pt-10 border-t border-gold-primary/20">
            <div className="text-center mb-10">
              <span className="font-serif text-2xl text-indigo-dark block">Our 5 Core Pillars</span>
              <span className="font-cinzel text-xs text-gold-dark tracking-widest uppercase">
                The Foundations of Every L’Esprit Voyage
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PILLARS.map((p) => {
                const IconComponent = p.icon;
                return (
                  <motion.div
                    key={p.num}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-ivory-sacred border border-gold-border/40 hover:border-gold-primary rounded-lg p-6 relative group transition-colors"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-cinzel text-xs font-bold text-gold-dark">{p.num}</span>
                      <IconComponent className="w-5 h-5 text-gold-primary" />
                    </div>
                    <div className="font-serif text-sm text-emerald-dark font-semibold mb-1 uppercase tracking-wider">
                      {p.subtitle}
                    </div>
                    <h4 className="font-serif text-xl text-indigo-dark mb-2">{p.title}</h4>
                    <p className="font-sans text-xs text-charcoal/70 leading-relaxed">{p.desc}</p>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold-primary to-gold-warm group-hover:w-full transition-all duration-300 rounded-b-lg" />
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
