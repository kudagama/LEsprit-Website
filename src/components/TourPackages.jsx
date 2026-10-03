"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles, CheckCircle2, BedDouble, Car, Coffee, Plane, Compass, Key, Gem, Crown, CarFront, UtensilsCrossed, PlaneTakeoff, ShieldCheck } from "lucide-react";

const SRI_LANKA_PACKAGES = [
  {
    id: 1,
    title: "The Ultimate Sri Lankan Journey",
    subtitle: "Culture, Nature, Wildlife & Beach",
    duration: "10 Days / 9 Nights",
    location: "Sigiriya → Kandy → Nuwara Eliya → Galle → Bentota",
    image: "/assets/images/packages/sl_tour_1.jpg",
    tag: "Ultimate Journey",
    highlights: [
      "Explore Polonnaruwa, Dambulla & Temple of the Tooth",
      "Scenic Nanu Oya to Haputale train journey",
      "Thrilling jeep safari in Udawalawe National Park",
      "Madu Ganga Boat Safari & turtle hatchery visit",
      "Two leisure days relaxing on Bentota beaches"
    ]
  },
  {
    id: 2,
    title: "Sri Lanka Highlights",
    subtitle: "Ancient Heritage & Southern Coast",
    duration: "7 Days / 6 Nights",
    location: "Sigiriya → Kandy → Nuwara Eliya → Udawalawe → Galle",
    image: "/assets/images/packages/sl_tour_2.jpg",
    tag: "Highlights Tour",
    highlights: [
      "Discover the Cultural Triangle ruins & Dambulla Cave",
      "Visit a Ceylon tea factory in Nuwara Eliya",
      "Scenic train ride through the Hill Country",
      "Elephant Transit Home & Udawalawe safari",
      "Explore the UNESCO-listed Galle Fort"
    ]
  }
];

const MALDIVES_PACKAGES = [
  {
    id: 3,
    title: "Secluded Atoll & Lagoon Sanctuary",
    subtitle: "Maldives Ultra-Luxury Escape",
    duration: "7 Days / 6 Nights",
    location: "Baa Atoll & Private Sandbanks",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
    tag: "Ocean Sanctuary",
    highlights: [
      "Private Seaplane charters to luxury island",
      "Overwater Sunset Pool Villa sanctuary",
      "Manta Ray snorkeling guided by marine biologists",
      "Private Sandbank dinner under the stars",
      "Bespoke spa therapies & wellness rituals"
    ]
  },
  {
    id: 4,
    title: "The Dual Paradise Signature Voyage",
    subtitle: "Combined Sri Lanka & Maldives Elite Tour",
    duration: "14 Days / 13 Nights",
    location: "Highland Tea Country & Maldivian Atolls",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
    tag: "Elite Combined",
    highlights: [
      "Best of both worlds: Ancient culture & private island",
      "Chauffeur-guided heritage tours in Sri Lanka",
      "Overwater ocean pavilion stay in the Maldives",
      "Seamless private inter-island flight logistics",
      "Dedicated 24/7 concierge & local guide network"
    ]
  }
];

export default function TourPackages({ region = "sri-lanka" }) {
  const packagesToDisplay = region === "sri-lanka" ? SRI_LANKA_PACKAGES : MALDIVES_PACKAGES;

  return (
    <section id="packages" className="pt-20 pb-20 bg-paper-parchment relative overflow-hidden">
      {/* Subtle background overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 mix-blend-multiply z-0"
        style={{ 
          backgroundImage: "url('/assets/images/bg_remove.svg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundAttachment: "fixed" 
        }}
      />
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-dark/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <span className="font-cinzel text-xs font-bold tracking-widest text-[#A87D46] uppercase block mb-2">
            Curated Journeys
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-4">
            {region === "sri-lanka" ? "Sri Lanka" : "Maldives"} <span className="text-[#A87D46]">Signature Packages</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-gold-primary mb-4">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-dark" />
            <div className="w-1.5 h-1.5 bg-gold-dark rotate-45" />
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-dark" />
          </div>
          <p className="font-sans text-charcoal text-sm sm:text-base font-normal max-w-xl mx-auto">
            Immerse yourself in our signature itineraries, handcrafted to reveal the authentic soul and spirit of {region === "sri-lanka" ? "Sri Lanka" : "the Maldives"}.
          </p>
        </div>

        {/* Packages Grid */}
        {region === "maldives" ? (
          <div className="flex flex-col items-center justify-center py-24 px-8 text-center bg-white border border-gold-border/30 rounded-2xl shadow-floating mx-auto max-w-3xl relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />
            <span className="font-cinzel text-xs font-bold text-gold-primary tracking-widest uppercase block mb-4 relative z-10">
              Anticipate Perfection
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-6 relative z-10">
              Coming Soon
            </h3>
            <p className="font-sans text-charcoal text-sm sm:text-base max-w-lg mx-auto relative z-10 leading-relaxed">
              We are currently handcrafting our exclusive Maldives itineraries. Stay tuned for a collection of unparalleled overwater sanctuaries and pristine ocean experiences.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          {packagesToDisplay.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border border-gold-border/30 rounded-2xl overflow-hidden shadow-floating flex flex-col justify-between group hover:border-[#D4AF37]/50 hover:shadow-xl transition-all duration-500"
            >
              <div>
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#071526] border border-gold-primary text-gold-warm text-[10px] font-cinzel font-bold tracking-widest uppercase rounded">
                    {pkg.tag}
                  </span>

                  {/* Duration Badge */}
                  <span className="absolute bottom-5 left-5 font-cinzel text-sm font-bold text-white flex items-center gap-2 drop-shadow-md">
                    <Calendar className="w-4 h-4 text-gold-primary" />
                    {pkg.duration}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="font-cinzel text-[10px] tracking-widest text-[#A87D46] font-bold uppercase block mb-1.5">
                      {pkg.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-indigo-dark font-bold leading-tight group-hover:text-[#A87D46] transition-colors">
                      {pkg.title}
                    </h3>
                  </div>

                  <div className="flex items-start gap-2 text-charcoal/80 text-sm font-sans font-medium leading-snug">
                    <MapPin className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                    <span>{pkg.location}</span>
                  </div>

                  {/* Highlights list */}
                  <ul className="space-y-3 pt-6 border-t border-gold-primary/25">
                    {pkg.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm text-charcoal/90 font-sans font-medium leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-dark shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0 mt-4">
                <a
                  href="#contact"
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black font-cinzel text-xs font-bold uppercase tracking-widest rounded shadow-gold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request This Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
          </div>
        )}

        {/* Accommodations & Inclusions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-black border border-gold-primary/30 rounded-sm p-10 sm:p-14 shadow-2xl relative z-10 overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gold-primary/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative z-10">
            
            {/* Accommodation Options */}
            <div>
              <h4 className="font-serif text-2xl sm:text-3xl text-white mb-4 flex items-center gap-4">
                <ShieldCheck className="text-gold-primary w-8 h-8 stroke-[1.5]" />
                Accommodation Tiers
              </h4>
              <p className="text-white/50 text-sm mb-8 font-sans font-light leading-relaxed">
                Tailor your sanctuary. We partner exclusively with properties that meet our rigorous standards for service, design, and authenticity.
              </p>
              
              <div className="space-y-4">
                {[
                  { level: "Standard", icon: Key, desc: "Charming 3-star boutique properties with authentic local character." },
                  { level: "Deluxe", icon: Gem, desc: "Refined 4-star hotels offering elevated comfort and amenities." },
                  { level: "Luxury", icon: Crown, desc: "Premium 5-star resorts and exclusive private villas." }
                ].map((tier, i) => (
                  <div key={i} className="group flex items-start gap-5 p-5 rounded-lg border border-white/5 bg-white/5 hover:bg-gold-primary/10 hover:border-gold-primary/30 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full border border-gold-primary/20 bg-black group-hover:scale-110 group-hover:border-gold-primary/50 transition-all duration-500 flex items-center justify-center shrink-0 shadow-gold">
                      <tier.icon className="w-5 h-5 text-gold-primary" />
                    </div>
                    <div>
                      <span className="font-cinzel text-sm font-bold tracking-widest text-gold-primary uppercase block mb-1">
                        {tier.level}
                      </span>
                      <span className="font-sans text-sm text-white/80 font-light block leading-relaxed group-hover:text-white transition-colors">
                        {tier.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Services */}
            <div>
              <h4 className="font-serif text-2xl sm:text-3xl text-white mb-4 flex items-center gap-4">
                <Sparkles className="text-gold-primary w-8 h-8 stroke-[1.5]" />
                Signature Inclusions
              </h4>
              <p className="text-white/50 text-sm mb-8 font-sans font-light leading-relaxed">
                Every itinerary is underpinned by seamless logistics and uncompromising attention to detail.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: CarFront, label: "Private Chauffeur", desc: "Premium vehicles & drivers" },
                  { icon: Compass, label: "Expert Guide", desc: "Deep local knowledge" },
                  { icon: UtensilsCrossed, label: "Daily Breakfast", desc: "Gourmet dining experiences" },
                  { icon: PlaneTakeoff, label: "VIP Transfers", desc: "Seamless global logistics" }
                ].map((service, i) => (
                  <div key={i} className="flex flex-col gap-3 p-5 border border-white/5 bg-white/5 hover:bg-gold-primary/10 hover:border-gold-primary/40 transition-all duration-500 group rounded-lg text-center items-center">
                    <div className="w-12 h-12 rounded-full border border-gold-primary/20 flex items-center justify-center bg-black group-hover:-translate-y-1 group-hover:shadow-gold transition-all duration-500">
                      <service.icon className="text-gold-primary w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-serif text-lg text-white font-medium tracking-wide block mb-1">
                        {service.label}
                      </span>
                      <span className="font-sans text-xs text-white/50 group-hover:text-white/80 transition-colors">
                        {service.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

