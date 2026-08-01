import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-indigo-dark pt-32 pb-20 overflow-hidden">
      {/* Static Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/assets/images/hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-indigo-dark/70 to-indigo-dark/40" />
      </div>

      {/* Liyavela Framing Vignette */}
      <div className="absolute inset-6 border border-gold-primary/20 pointer-events-none z-10 hidden sm:block" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-ivory-sacred">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-primary/10 border border-gold-border backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-gold-primary shadow-[0_0_10px_#D4AF37]" />
          <span className="font-cinzel text-xs tracking-widest text-gold-warm uppercase">
            L’ESPRIT DE VOYAGE — THE SPIRIT OF BESPOKE JOURNEYS
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6 leading-tight">
          Experience the Soul, Spirit, and <span className="gold-gradient-text">Authenticity</span> of Every Journey.
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-xl text-ivory-sacred/90 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          With over two decades of expertise in Sri Lanka and the Maldives, we craft tailor-made luxury escapes that go beyond ordinary tourism, blending elegance, culture, and meaningful local connections.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-16">
          <a
            href="#destinations"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-widest rounded shadow-gold flex items-center justify-center gap-3 hover:scale-105 transition-transform"
          >
            <span>Discover Sri Lanka</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#destinations"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-deep/50 border border-gold-primary text-white font-cinzel text-xs font-semibold uppercase tracking-widest rounded backdrop-blur-md hover:bg-gold-primary/20 flex items-center justify-center gap-3 transition-colors hover:scale-105"
          >
            <span>Explore Maldives</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <a href="#concept" className="inline-flex flex-col items-center gap-2 text-gold-warm text-xs font-cinzel tracking-widest uppercase opacity-75 hover:opacity-100 transition-opacity">
          <span>Unfold The Spirit Of Journey</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
