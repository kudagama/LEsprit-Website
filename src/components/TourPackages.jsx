"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

const PACKAGES = [
  {
    id: 1,
    title: "Grand Ceylon & Cultural Heritage",
    subtitle: "Sri Lanka In-Depth Expedition",
    duration: "10 Days / 9 Nights",
    location: "Sigiriya, Kandy, Ella, Yala & Galle",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
    tag: "Cultural & Wildlife",
    highlights: [
      "VIP Fast-Track & Private Luxury SUV transit",
      "Private guided climb of Sigiriya Fortress",
      "Leopard & Elephant Safaris in Yala & Wilpattu",
      "Scenic tea country train in First Class cabin",
      "5-Star Relais & Châteaux colonial stays"
    ]
  },
  {
    id: 2,
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
    id: 3,
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

export default function TourPackages() {
  return (
    <section id="packages" className="pt-20 pb-20 bg-paper-parchment relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs font-bold tracking-widest text-[#A87D46] uppercase block mb-2">
            Curated Journeys
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-4">
            Signature <span className="text-[#A87D46]">Tour Packages</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-gold-primary mb-4">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-dark" />
            <span className="text-sm font-bold text-gold-dark">☸</span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-dark" />
          </div>
          <p className="font-sans text-charcoal text-sm sm:text-base font-normal max-w-xl mx-auto">
            Immerse yourself in our signature itineraries, handcrafted to reveal the authentic soul and spirit of the lands.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
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
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#071526] border border-gold-primary text-gold-warm text-[10px] font-cinzel font-bold tracking-widest uppercase rounded">
                    {pkg.tag}
                  </span>

                  {/* Duration Badge */}
                  <span className="absolute bottom-4 left-4 font-cinzel text-xs font-bold text-white flex items-center gap-1.5 drop-shadow-md">
                    <Calendar className="w-3.5 h-3.5 text-gold-primary" />
                    {pkg.duration}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="font-cinzel text-[10px] tracking-widest text-[#A87D46] font-bold uppercase block mb-1">
                      {pkg.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-indigo-dark font-bold leading-tight group-hover:text-[#A87D46] transition-colors">
                      {pkg.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-charcoal/70 text-xs font-sans font-medium">
                    <MapPin className="w-4 h-4 text-gold-primary shrink-0" />
                    <span>{pkg.location}</span>
                  </div>

                  {/* Highlights list */}
                  <ul className="space-y-2.5 pt-6 border-t border-gold-primary/25">
                    {pkg.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-xs text-charcoal/90 font-sans font-medium leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-dark shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0">
                <a
                  href="#concept"
                  className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black font-cinzel text-xs font-bold uppercase tracking-widest rounded shadow-gold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Custom Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
