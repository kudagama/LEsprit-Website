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

  useEffect(() => {
    if (manuscriptRef.current) {
      gsap.fromTo(
        manuscriptRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
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
    <section id="concept" ref={sectionRef} className="py-24 md:py-32 bg-paper-parchment relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-charcoal/60 uppercase block mb-4">
            The Philosophy of L’Esprit
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium mb-6 tracking-tight">
            The Spirit of <span className="text-gold-dark italic font-light">True Luxury</span>
          </h2>
          <div className="flex justify-center">
            <span className="w-12 h-[1px] bg-charcoal/20" />
          </div>
        </div>

        {/* Minimal Manuscript Card */}
        <div
          ref={manuscriptRef}
          className="relative bg-white border border-charcoal/5 rounded p-8 sm:p-16 shadow-glass"
        >
          {/* Narrative & Strength Row */}
          <div className="grid md:grid-cols-12 gap-14 items-start mb-20">
            <div className="md:col-span-7">
              <span className="font-sans text-[0.65rem] font-bold text-charcoal/50 tracking-[0.2em] uppercase block mb-4">
                Redefining Authentic 5-Star Luxury
              </span>
              <h3 className="font-serif text-3xl text-charcoal mb-6 leading-snug font-medium">
                Communing with the soul, living history, and fine craftsmanship of the land.
              </h3>
              <p className="font-sans text-charcoal/70 text-sm font-light leading-relaxed mb-6">
                In French, <strong>L’ESPRIT VOYAGES</strong> translates to <em>"The Spirit of Journeys."</em> Rooted in delivering refined, personalized destination experiences, our concept is built upon two decades of passion. We believe luxury travel is not merely visiting a location—it is about immersion.
              </p>
              <p className="font-sans text-charcoal/70 text-sm font-light leading-relaxed">
                From mist-shrouded emerald tea plantations in the Central Highlands to pristine, untouched Maldivian coral atolls, every itinerary is hand-stitched for those who seek rare, authentic elegance without the noise of mass tourism.
              </p>
            </div>

            {/* Our Strength Callout (Minimal) */}
            <div className="md:col-span-5 bg-ivory-sacred p-10 rounded border border-charcoal/5">
              <div className="mb-6 flex items-center justify-center w-12 h-12 bg-charcoal/5 rounded-full text-gold-dark">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-2xl text-charcoal font-medium mb-4">
                Local Mastery & Heritage
              </h4>
              <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed mb-8">
                Backed by <strong>20+ years of local mastery</strong>, our true strength lies in an exclusive network of master artisans, cultural historians, and dedicated chauffeur guides who embody the spirit of authentic hospitality.
              </p>
              <div className="flex flex-col gap-3 border-t border-charcoal/10 pt-6">
                <span className="font-sans text-[0.65rem] font-semibold tracking-wider text-charcoal uppercase flex items-center gap-3">
                  <span className="w-1 h-1 bg-gold-dark rounded-full" /> 20+ Years Excellence
                </span>
                <span className="font-sans text-[0.65rem] font-semibold tracking-wider text-charcoal uppercase flex items-center gap-3">
                  <span className="w-1 h-1 bg-gold-dark rounded-full" /> Elite Chauffeur Fleet
                </span>
              </div>
            </div>
          </div>

          {/* 5 Pillars Minimal Matrix */}
          <div>
            <div className="mb-12 border-b border-charcoal/10 pb-4">
              <span className="font-serif text-2xl text-charcoal font-medium">The 5 Pillars</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
              {PILLARS.map((p) => {
                const IconComponent = p.icon;
                return (
                  <div key={p.num} className="group relative">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-sans text-[0.6rem] font-medium text-charcoal/40">{p.num}</span>
                      <IconComponent className="w-4 h-4 text-gold-dark" />
                    </div>
                    <h4 className="font-serif text-lg text-charcoal font-medium mb-1">{p.title}</h4>
                    <div className="font-sans text-[0.65rem] text-charcoal/50 font-semibold mb-3 uppercase tracking-wider">
                      {p.subtitle}
                    </div>
                    <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
