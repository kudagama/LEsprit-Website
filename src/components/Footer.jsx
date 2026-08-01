"use client";

import { Award, Mail, Phone, MapPin, Instagram, Facebook, ArrowUp, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to L’Esprit Journal.");
  };

  return (
    <footer className="bg-gradient-to-b from-[#071526] via-[#050c14] to-[#020508] text-ivory-sacred/80 pt-20 pb-10 border-t border-gold-border/40 relative overflow-hidden">
      {/* Background Ornament Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-dark/5 rounded-full blur-3xl pointer-events-none" />

      {/* Repeating Traditional Divider at top of footer */}
      <div className="absolute top-0 left-0 right-0 w-full z-10 pointer-events-none select-none opacity-25">
        <div
          className="w-full h-8"
          style={{
            backgroundImage: "url('/assets/images/srilanka.png')",
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'top center',
            backgroundSize: 'auto 100%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Newsletter Signup Row */}
        <div className="border-b border-gold-primary/15 pb-14 mb-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <span className="font-cinzel text-xs font-bold tracking-[0.2em] text-gold-primary uppercase block">
              L’Esprit Dispatch
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
              Subscribe to L’Esprit Journal
            </h3>
            <p className="font-sans text-xs text-ivory-sacred/60 max-w-xl font-normal leading-relaxed">
              Receive private travel briefs, exclusive luxury charter opportunities, and curated cultural stories straight from the Indian Ocean.
            </p>
          </div>
          <div className="lg:col-span-5 w-full">
            <form onSubmit={handleSubscribe} className="relative flex items-center border-b border-gold-primary/30 py-2 group focus-within:border-gold-primary transition-colors">
              <input
                type="email"
                required
                placeholder="Enter your private email address"
                className="w-full bg-transparent text-sm text-white placeholder-ivory-sacred/30 focus:outline-none pr-12 font-sans font-light"
              />
              <button
                type="submit"
                className="absolute right-0 text-gold-primary hover:text-white p-1.5 transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-4.5 h-4.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="font-serif text-2xl font-bold tracking-[0.15em] text-gold-primary block">
                ☸ L’ESPRIT VOYAGES
              </span>
              <p className="font-sans text-xs italic text-gold-warm font-light leading-relaxed">
                "Experience the Soul, Spirit, and Authenticity of Every Journey."
              </p>
            </div>
            <p className="font-sans text-xs text-ivory-sacred/60 leading-relaxed font-normal">
              Stitching bespoke luxury voyages across Sri Lanka and the Maldives for over two decades. We design authentic escapes defined by absolute privacy, cultural immersion, and seamless logistics.
            </p>
            
            {/* Social media icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-gold-border/20 flex items-center justify-center text-gold-warm hover:bg-gold-primary hover:text-[#071526] hover:border-gold-primary transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-gold-border/20 flex items-center justify-center text-gold-warm hover:bg-gold-primary hover:text-[#071526] hover:border-gold-primary transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Journeys (2.5 cols) */}
          <div className="lg:col-span-2.5 lg:pl-6">
            <h4 className="font-cinzel text-xs text-gold-primary uppercase tracking-[0.15em] mb-5 font-bold">
              Bespoke Escapes
            </h4>
            <ul className="space-y-3 text-xs font-sans font-medium text-gray-400">
              <li className="flex items-center group">
                <span className="text-gold-primary/0 group-hover:text-gold-primary group-hover:mr-2.5 transition-all duration-300 select-none">•</span>
                <a href="#destinations" className="group-hover:text-gold-primary group-hover:translate-x-1 transition-all duration-300">Sri Lanka Expeditions</a>
              </li>
              <li className="flex items-center group">
                <span className="text-gold-primary/0 group-hover:text-gold-primary group-hover:mr-2.5 transition-all duration-300 select-none">•</span>
                <a href="#destinations" className="group-hover:text-gold-primary group-hover:translate-x-1 transition-all duration-300">Maldives Lagoons</a>
              </li>
              <li className="flex items-center group">
                <span className="text-gold-primary/0 group-hover:text-gold-primary group-hover:mr-2.5 transition-all duration-300 select-none">•</span>
                <a href="#destinations" className="group-hover:text-gold-primary group-hover:translate-x-1 transition-all duration-300">Multi-Paradise Voyaging</a>
              </li>
              <li className="flex items-center group">
                <span className="text-gold-primary/0 group-hover:text-gold-primary group-hover:mr-2.5 transition-all duration-300 select-none">•</span>
                <a href="#services" className="group-hover:text-gold-primary group-hover:translate-x-1 transition-all duration-300">Ayurveda Wellness</a>
              </li>
              <li className="flex items-center group">
                <span className="text-gold-primary/0 group-hover:text-gold-primary group-hover:mr-2.5 transition-all duration-300 select-none">•</span>
                <a href="#services" className="group-hover:text-gold-primary group-hover:translate-x-1 transition-all duration-300">Private Chauffeur Fleet</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Heritage (2.5 cols) */}
          <div className="lg:col-span-2.5 lg:pl-4">
            <h4 className="font-cinzel text-xs text-gold-primary uppercase tracking-[0.15em] mb-5 font-bold">
              Heritage & Impact
            </h4>
            <ul className="space-y-3 text-xs font-sans font-medium text-gray-400">
              <li className="flex items-center group">
                <span className="text-gold-primary/0 group-hover:text-gold-primary group-hover:mr-2.5 transition-all duration-300 select-none">•</span>
                <a href="#concept" className="group-hover:text-gold-primary group-hover:translate-x-1 transition-all duration-300">Our Philosophy</a>
              </li>
              <li className="flex items-center group">
                <span className="text-gold-primary/0 group-hover:text-gold-primary group-hover:mr-2.5 transition-all duration-300 select-none">•</span>
                <a href="#concept" className="group-hover:text-gold-primary group-hover:translate-x-1 transition-all duration-300">The 5 Core Pillars</a>
              </li>
              <li className="flex items-center group">
                <span className="text-gold-primary/0 group-hover:text-gold-primary group-hover:mr-2.5 transition-all duration-300 select-none">•</span>
                <a href="#sustainability" className="group-hover:text-gold-primary group-hover:translate-x-1 transition-all duration-300">Sustainability Projects</a>
              </li>
              <li className="flex items-center group">
                <span className="text-gold-primary/0 group-hover:text-gold-primary group-hover:mr-2.5 transition-all duration-300 select-none">•</span>
                <a href="#news-social" className="group-hover:text-gold-primary group-hover:translate-x-1 transition-all duration-300">L’Esprit Journal Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Private Concierge (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-cinzel text-xs text-gold-primary uppercase tracking-[0.15em] mb-5 font-bold">
              Atelier Concierge
            </h4>
            <div className="space-y-3.5 text-xs font-sans font-normal text-ivory-sacred/70">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                <a href="mailto:concierge@lespritvoyages.com" className="hover:text-gold-primary transition-colors">
                  concierge@lespritvoyages.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                <a href="tel:+94112345678" className="hover:text-gold-primary transition-colors">
                  +94 (0) 11 234 5678
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                <span>Ward Place, Colombo 07, Sri Lanka</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold-primary/15 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-ivory-sacred/55 font-sans font-medium">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <p>© 2026 L’ESPRIT VOYAGES. All Rights Reserved.</p>
            <div className="hidden sm:block w-[1px] h-3.5 bg-gold-primary/30" />
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold-primary transition-colors">Privacy Guarantee</a>
              <a href="#" className="hover:text-gold-primary transition-colors">Terms of Use</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-primary/5 border border-gold-primary/20 rounded-full text-gold-warm text-[10px] sm:text-xs">
              <Award className="w-4 h-4 text-gold-primary shrink-0 animate-pulse" />
              <span>Official: <strong>Ministry of Tourism Sri Lanka Registered</strong></span>
            </div>
            
            {/* Scroll back to top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-gold-primary/30 bg-white/5 flex items-center justify-center text-gold-warm hover:bg-gold-primary hover:text-[#071526] hover:border-gold-primary transition-all duration-300 cursor-pointer group shadow"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
