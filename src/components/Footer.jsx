"use client";

import { Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-indigo-deep text-ivory-sacred/80 pt-16 pb-8 border-t border-gold-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand Col */}
          <div className="space-y-3">
            <span className="font-serif text-2xl font-bold text-gold-primary tracking-widest block">
              L’ESPRIT VOYAGES
            </span>
            <p className="font-sans text-xs italic text-gold-warm">
              "Experience the Soul, Spirit, and Authenticity of Every Journey."
            </p>
            <p className="font-sans text-xs text-ivory-sacred/60 leading-relaxed">
              With over two decades of expertise in Sri Lanka and the Maldives, we craft tailor-made luxury escapes that go beyond ordinary tourism, blending elegance, culture, and meaningful local connections.
            </p>
          </div>

          {/* Journeys */}
          <div>
            <h4 className="font-cinzel text-xs text-gold-primary uppercase tracking-widest mb-4">
              Bespoke Journeys
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><a href="#destinations" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Sri Lanka Expeditions</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Maldives Overwater Luxury</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Multi-Paradise Escapes</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Ayurveda Wellness Retreats</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Private Chauffeur Fleet</a></li>
            </ul>
          </div>

          {/* Heritage */}
          <div>
            <h4 className="font-cinzel text-xs text-gold-primary uppercase tracking-widest mb-4">
              Company & Heritage
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><a href="#concept" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Our Philosophy</a></li>
              <li><a href="#concept" className="text-gray-400 hover:text-[#D4AF37] transition-colors">The 5 Core Pillars</a></li>
              <li><a href="#heritage-impact" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Sustainability & Impact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Privacy Guarantee</a></li>
            </ul>
          </div>

          {/* Concierge */}
          <div>
            <h4 className="font-cinzel text-xs text-gold-primary uppercase tracking-widest mb-4">
              Private Concierge
            </h4>
            <ul className="space-y-2 text-xs font-sans text-ivory-sacred/70">
              <li>✉ concierge@lespritvoyages.com</li>
              <li>📞 +94 (0) 11 234 5678</li>
              <li>📍 Ward Place, Colombo 07, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gold-primary/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 L’ESPRIT VOYAGES. All Rights Reserved.</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-primary/10 border border-gold-border rounded-full text-gold-warm">
            <Award className="w-4 h-4 text-gold-primary" />
            <span>Official Registration Seal: <strong>Registered with the Ministry of Tourism Sri Lanka</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
