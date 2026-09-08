"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles, CheckCircle2, BedDouble, Car, Coffee, Plane } from "lucide-react";

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
          className="mt-16 bg-white border border-gold-primary/20 rounded-2xl p-8 sm:p-10 shadow-sm relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Accommodation Options */}
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-indigo-dark mb-6 flex items-center gap-3">
                <BedDouble className="text-[#A87D46] w-6 h-6" />
                Accommodation Options
              </h4>
              <p className="text-charcoal/80 text-sm mb-6 leading-relaxed font-sans">
                Both packages offer flexible options tailored to your preferences:
              </p>
              <ul className="space-y-4 font-sans text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A87D46] mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-indigo-dark block">Standard</span>
                    <span className="text-charcoal/70">Comfortable and charming 3-star properties.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A87D46] mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-indigo-dark block">Deluxe</span>
                    <span className="text-charcoal/70">Elegant and refined 4-star hotels.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A87D46] mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-indigo-dark block">Luxury</span>
                    <span className="text-charcoal/70">Premium 4- and 5-star or exclusive boutique properties.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Included Services */}
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-indigo-dark mb-6 flex items-center gap-3">
                <Sparkles className="text-[#A87D46] w-6 h-6" />
                Included Services
              </h4>
              <p className="text-charcoal/80 text-sm mb-6 leading-relaxed font-sans">
                Every journey includes premium services to ensure a seamless experience:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F8F4EC] border border-[#D4AF37]/20 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-[#D4AF37]/50 transition-colors">
                  <Car className="text-[#0D2818] w-6 h-6" />
                  <span className="text-xs font-bold font-sans text-indigo-dark">Private A/C Vehicle</span>
                </div>
                <div className="bg-[#F8F4EC] border border-[#D4AF37]/20 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-[#D4AF37]/50 transition-colors">
                  <span className="text-[#0D2818] w-6 h-6 flex items-center justify-center">🤵</span>
                  <span className="text-xs font-bold font-sans text-indigo-dark">Professional Guide</span>
                </div>
                <div className="bg-[#F8F4EC] border border-[#D4AF37]/20 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-[#D4AF37]/50 transition-colors">
                  <Coffee className="text-[#0D2818] w-6 h-6" />
                  <span className="text-xs font-bold font-sans text-indigo-dark">Daily Breakfast</span>
                </div>
                <div className="bg-[#F8F4EC] border border-[#D4AF37]/20 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-[#D4AF37]/50 transition-colors">
                  <Plane className="text-[#0D2818] w-6 h-6" />
                  <span className="text-xs font-bold font-sans text-indigo-dark">Airport Transfers</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

