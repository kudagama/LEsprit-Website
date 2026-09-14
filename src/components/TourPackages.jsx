"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles, CheckCircle2, BedDouble, Car, Coffee, Plane, Compass } from "lucide-react";

const SRI_LANKA_PACKAGES = [
  {
    id: 1,
    title: "The Ultimate Sri Lankan Journey",
    subtitle: "Culture, Nature, Wildlife & Beach",
    duration: "10 Days / 9 Nights",
    location: "Sigiriya → Kandy → Nuwara Eliya → Galle → Bentota",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1588614959060-4d144f28b207?auto=format&fit=crop&w=600&q=80",
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
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
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
            <span className="text-sm font-bold text-gold-dark">☸</span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-dark" />
          </div>
          <p className="font-sans text-charcoal text-sm sm:text-base font-normal max-w-xl mx-auto">
            Immerse yourself in our signature itineraries, handcrafted to reveal the authentic soul and spirit of {region === "sri-lanka" ? "Sri Lanka" : "the Maldives"}.
          </p>
        </div>

        {/* Packages Grid */}
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
                  href="#concept"
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
                <BedDouble className="text-gold-primary w-8 h-8 stroke-[1.5]" />
                Accommodation Tiers
              </h4>
              <p className="text-white/50 text-sm mb-10 font-sans font-light leading-relaxed">
                Tailor your sanctuary. We partner exclusively with properties that meet our rigorous standards for service, design, and authenticity.
              </p>
              
              <div className="space-y-6">
                {[
                  { level: "Standard", desc: "Charming 3-star boutique properties with authentic local character." },
                  { level: "Deluxe", desc: "Refined 4-star hotels offering elevated comfort and amenities." },
                  { level: "Luxury", desc: "Premium 5-star resorts and exclusive private villas." }
                ].map((tier, i) => (
                  <div key={i} className="group relative pl-6 border-l border-gold-primary/30 hover:border-gold-primary transition-colors duration-500">
                    <span className="font-cinzel text-xs font-bold tracking-widest text-gold-primary uppercase block mb-1">
                      {tier.level}
                    </span>
                    <span className="font-sans text-sm text-white/80 font-light block leading-relaxed">
                      {tier.desc}
                    </span>
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
              <p className="text-white/50 text-sm mb-10 font-sans font-light leading-relaxed">
                Every itinerary is underpinned by seamless logistics and uncompromising attention to detail.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Car, label: "Private Chauffeur" },
                  { icon: Compass, label: "Expert Guide" },
                  { icon: Coffee, label: "Daily Breakfast" },
                  { icon: Plane, label: "VIP Transfers" }
                ].map((service, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-white/10 bg-white/5 hover:bg-gold-primary/5 hover:border-gold-primary/40 transition-all duration-500 group rounded-sm">
                    <div className="w-10 h-10 rounded-full border border-gold-primary/20 flex items-center justify-center bg-black group-hover:scale-110 transition-transform duration-500 shadow-gold">
                      <service.icon className="text-gold-primary w-4 h-4" />
                    </div>
                    <span className="font-sans text-sm text-white font-medium tracking-wide">
                      {service.label}
                    </span>
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

