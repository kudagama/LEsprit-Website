import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-indigo-dark pt-32 pb-20 overflow-hidden">
      {/* Static Minimal Background visual Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: "url('/assets/images/hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-indigo-dark/80 to-indigo-dark/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-ivory-sacred flex flex-col items-center">
        {/* Minimal Badge */}
        <div className="inline-flex items-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
          <span className="font-sans text-[0.65rem] tracking-[0.25em] font-medium text-gold-warm uppercase">
            THE SPIRIT OF BESPOKE JOURNEYS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
        </div>

        {/* High Editorial Title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-[5rem] font-medium tracking-tight mb-8 leading-[1.1] text-ivory-sacred">
          Where Royalty Meets <br className="hidden sm:block" />
          <span className="text-gold-warm italic font-light tracking-normal">The Spirit of Travel.</span>
        </h1>

        {/* Elegant Subtitle */}
        <p className="font-sans text-sm sm:text-base text-ivory-sacred/70 max-w-2xl mx-auto mb-14 font-light leading-relaxed tracking-wide">
          Two Decades of Crafting Bespoke Luxury Escapes Across Sri Lanka & The Maldives — Communing with the Soul & Heritage of Every Destination.
        </p>

        {/* Minimal CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20 w-full sm:w-auto">
          <a
            href="#destinations"
            className="w-full sm:w-auto px-10 py-4 bg-gold-primary text-indigo-deep font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ivory-sacred transition-colors flex items-center justify-center gap-3"
          >
            <span>Discover Sri Lanka</span>
          </a>

          <a
            href="#destinations"
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-ivory-sacred/30 text-ivory-sacred font-sans text-xs font-medium uppercase tracking-[0.2em] hover:bg-ivory-sacred/10 transition-colors flex items-center justify-center gap-3"
          >
            <span>Explore Maldives</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <a href="#concept" className="inline-flex flex-col items-center gap-3 text-gold-primary/70 text-[0.65rem] font-sans font-medium tracking-[0.3em] uppercase hover:text-gold-primary transition-colors">
          <span>Unfold The Journey</span>
          <ChevronDown className="w-4 h-4 opacity-70" />
        </a>
      </div>
    </section>
  );
}
