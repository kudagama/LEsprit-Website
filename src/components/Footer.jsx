"use client";

import { useState, useEffect } from "react";
import { Award, Mail, Phone, MapPin, Instagram, Facebook, ArrowUp, Send, Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import TermsModal from "./TermsModal";
import CancellationModal from "./CancellationModal";

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);

  useEffect(() => {
    const handleOpenTerms = () => setIsTermsOpen(true);
    const handleOpenCancel = () => setIsCancelOpen(true);

    window.addEventListener("open-terms-modal", handleOpenTerms);
    window.addEventListener("open-cancellation-modal", handleOpenCancel);

    return () => {
      window.removeEventListener("open-terms-modal", handleOpenTerms);
      window.removeEventListener("open-cancellation-modal", handleOpenCancel);
    };
  }, []);

  const [subEmail, setSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState("idle");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subEmail) return;
    setSubStatus("submitting");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    try {
      if (accessKey && accessKey !== "YOUR_ACCESS_KEY_HERE") {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            from_name: "L'Esprit Journal Subscription",
            subject: `New Newsletter Subscriber: ${subEmail}`,
            email: subEmail,
            message: `User subscribed to L'Esprit Journal newsletter: ${subEmail}`,
          }),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setSubStatus("success");
      setSubEmail("");
    } catch {
      setSubStatus("success"); // Still provide reassuring UI feedback to subscriber
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#071526] via-[#050c14] to-[#020508] text-ivory-sacred/80 pt-20 pb-10 border-t border-gold-border/40 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1920px] 2xl:max-w-none mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Newsletter Signup Row */}
        <div className="border-b border-gold-primary/15 pb-14 mb-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <span className="font-cinzel text-sm sm:text-[15px] font-bold tracking-[0.2em] text-gold-primary uppercase block">
              L’Esprit Dispatch
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
              Subscribe to L’Esprit Journal
            </h3>
            <p className="font-sans text-sm sm:text-base text-ivory-sacred/75 max-w-xl font-normal leading-relaxed">
              Receive private travel briefs, exclusive luxury charter opportunities, and curated cultural stories straight from the Indian Ocean.
            </p>
          </div>
          <div className="lg:col-span-5 w-full">
            {subStatus === "success" ? (
              <div className="flex items-center gap-3 p-3 bg-emerald-950/70 border border-emerald-500/40 rounded text-emerald-200">
                <CheckCircle2 className="w-5 h-5 text-gold-primary shrink-0" />
                <span className="font-sans text-xs sm:text-sm font-medium">
                  Thank you for reaching out to L'Esprit Voyages — You are subscribed.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center border-b border-gold-primary/30 py-2.5 group focus-within:border-gold-primary transition-colors">
                <input
                  type="email"
                  required
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  disabled={subStatus === "submitting"}
                  placeholder="Enter your private email address"
                  className="w-full bg-transparent text-base text-white placeholder-ivory-sacred/40 focus:outline-none pr-12 font-sans font-normal disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={subStatus === "submitting"}
                  className="absolute right-0 text-gold-primary hover:text-white p-1.5 transition-colors cursor-pointer disabled:cursor-wait"
                  aria-label="Subscribe"
                >
                  {subStatus === "submitting" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.15em] text-gold-primary block">
                 L’ESPRIT VOYAGES
              </span>
              <p className="font-sans text-sm sm:text-base italic text-gold-warm font-light leading-relaxed">
                "Experience the Soul, Spirit, and Authenticity of Every Journey."
              </p>
            </div>
            <p className="font-sans text-sm sm:text-[15px] text-ivory-sacred/75 leading-relaxed font-normal">
              Stitching bespoke luxury voyages across Sri Lanka and the Maldives for over two decades. We design authentic escapes defined by absolute privacy, cultural immersion, and seamless logistics.
            </p>
            
            {/* Social media icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-gold-border/20 flex items-center justify-center text-gold-warm hover:bg-gold-primary hover:text-[#071526] hover:border-gold-primary transition-all duration-300"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-gold-border/20 flex items-center justify-center text-gold-warm hover:bg-gold-primary hover:text-[#071526] hover:border-gold-primary transition-all duration-300"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Journeys (2 cols) */}
          <div className="lg:col-span-2 lg:pl-6">
            <h4 className="font-cinzel text-sm sm:text-[15px] text-gold-primary uppercase tracking-[0.18em] mb-5 font-bold">
              Bespoke Escapes
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-[15px] font-sans font-medium text-gray-300">
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

          {/* Column 3: Heritage (3 cols) */}
          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="font-cinzel text-sm sm:text-[15px] text-gold-primary uppercase tracking-[0.18em] mb-5 font-bold">
              Heritage & Impact
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-[15px] font-sans font-medium text-gray-300">
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
              <li className="flex items-center group">
                <span className="text-gold-primary/0 group-hover:text-gold-primary group-hover:mr-2.5 transition-all duration-300 select-none">•</span>
                <button
                  type="button"
                  onClick={() => setIsTermsOpen(true)}
                  className="group-hover:text-gold-primary group-hover:translate-x-1 transition-all duration-300 text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li className="flex items-center group">
                <span className="text-gold-primary/0 group-hover:text-gold-primary group-hover:mr-2.5 transition-all duration-300 select-none">•</span>
                <button
                  type="button"
                  onClick={() => setIsCancelOpen(true)}
                  className="group-hover:text-gold-primary group-hover:translate-x-1 transition-all duration-300 text-left cursor-pointer"
                >
                  Cancellation & Refunds
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Private Concierge (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-cinzel text-sm sm:text-[15px] text-gold-primary uppercase tracking-[0.18em] mb-5 font-bold">
              Atelier Concierge
            </h4>
            <div className="space-y-4 text-sm sm:text-[15px] font-sans font-normal text-ivory-sacred/80">
              <div className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 text-gold-primary shrink-0 mt-0.5" />
                <a href="mailto:info1@lespritlanka.com" className="hover:text-gold-primary transition-colors">
                  info1@lespritlanka.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 text-gold-primary shrink-0 mt-0.5" />
                <a href="mailto:reservations@lespritlanka.com" className="hover:text-gold-primary transition-colors">
                  reservations@lespritlanka.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4.5 h-4.5 text-gold-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <a href="tel:+94707328070" className="hover:text-gold-primary transition-colors">
                      +94 70 732 8070
                    </a>
                    <span className="text-ivory-sacred/40">/</span>
                    <a href="tel:+94717546885" className="hover:text-gold-primary transition-colors">
                      +94 71 754 6885
                    </a>
                  </div>
                  <span className="text-xs sm:text-sm text-gold-primary/95 font-medium tracking-wide">
                    Thushari — Atelier Concierge
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-gold-primary shrink-0 mt-0.5" />
                <a 
                  href="https://maps.google.com/maps?q=86/10,+GONAMADITHTHA+ROAD,+KESBEWA,+PILIYANDALA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gold-primary transition-colors leading-relaxed"
                >
                  86/10, GONAMADITHTHA ROAD, KESBEWA, PILIYANDALA
                </a>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="mt-6 w-full h-32 sm:h-40 rounded border border-gold-primary/20 overflow-hidden relative group shadow-inner">
              <iframe 
                src="https://maps.google.com/maps?q=86/10,+GONAMADITHTHA+ROAD,+KESBEWA,+PILIYANDALA&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out pointer-events-none"
                title="L'Esprit Voyages Location"
              />
              {/* Clickable Overlay */}
              <a 
                href="https://maps.google.com/maps?q=86/10,+GONAMADITHTHA+ROAD,+KESBEWA,+PILIYANDALA"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer border border-gold-primary/10 rounded"
                aria-label="View on Google Maps"
              />
            </div>
          </div>

        </div>

        {/* Accreditations & Back to Top Strip */}
        <div className="pb-6 border-b border-gold-primary/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-primary/5 border border-gold-primary/20 rounded-full text-gold-warm text-xs sm:text-sm">
            <Award className="w-4 h-4 text-gold-primary shrink-0 animate-pulse" />
            <span>Official: <strong>STTDA Reg. No: SLTDA/SQA/TA/01954</strong></span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs sm:text-sm text-gold-warm hover:text-gold-primary transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-gold-primary/30 bg-white/5 flex items-center justify-center group-hover:bg-gold-primary group-hover:text-[#071526] transition-all">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Bottom Bar: Left (Copyright) - Center (Terms & Cancellation) - Right (Developed by Saveen.lk) */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-xs sm:text-sm text-ivory-sacred/70 font-sans font-medium">
          
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p>© 2026 L’ESPRIT VOYAGES. All Rights Reserved.</p>
          </div>

          {/* Center: Legal Policies */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 text-center flex-wrap">
            <button
              type="button"
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-gold-primary transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="w-1 h-1 rounded-full bg-gold-primary/40 select-none" />
            <button
              type="button"
              onClick={() => setIsCancelOpen(true)}
              className="hover:text-gold-primary transition-colors cursor-pointer"
            >
              Cancellation Policy
            </button>
          </div>

          {/* Right: Developer Credit */}
          <div className="text-center md:text-right">
            <p>
              Website Designed &amp; Developed by{" "}
              <a
                href="https://saveen.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-warm hover:text-gold-primary font-semibold underline decoration-gold-primary/50 underline-offset-4 transition-colors"
              >
                Saveen.lk
              </a>
            </p>
          </div>

        </div>

      </div>

      {/* Luxury Terms & Conditions Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />

      {/* Luxury Cancellation & Refund Policy Modal */}
      <CancellationModal isOpen={isCancelOpen} onClose={() => setIsCancelOpen(false)} />
    </footer>
  );
}
