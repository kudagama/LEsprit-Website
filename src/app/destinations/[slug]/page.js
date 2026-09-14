import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Calendar, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const DESTINATION_DATA = {
  "sri-lanka": {
    title: "Sri Lanka: Timeless Heritage & Wild Sanctuary",
    tagline: "A Land of Timeless Cultural Heritage & Extraordinary Diversity",
    heroImage: "/assets/images/sri_lanka.png",
    overview:
      "Embark on an extraordinary journey through mist-shrouded emerald tea estates, ancient royal kingdoms, and untouched coastal wildlife reserves. Sri Lanka is a island where 2,500 years of living history meet unmatched 5-star hospitality.",
    highlights: [
      "Private Dawn Access to Sigiriya Rock Fortress with Senior Archaeologists",
      "VIP 4x4 Jeep Tracking for Leopards & Sloth Bears in Yala & Wilpattu",
      "Restored Colonial Planter Bungalow Stay with Private Tea Tasting",
      "Sacred Ayurvedic Mind-Body Rejuvenation with Master Practitioners",
      "Private Helicopter Transfers across Sacred Cities & Coastal Reserves",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    ],
    packages: [
      {
        title: "Classical Cultural Heritage",
        duration: "7 Days / 6 Nights",
        price: "From $3,200 / person",
        desc: "Embark on an archaeological voyage through Sri Lanka's cultural triangle. Stay in bespoke luxury jungle villas and enjoy private archaeologist-guided ascents of Sigiriya.",
        highlights: ["Sigiriya private sunrise access", "Kandy Temple VIP tour", "Artisan pottery masterclass"]
      },
      {
        title: "Wild Safari & Emerald Highlands",
        duration: "9 Days / 8 Nights",
        price: "From $4,500 / person",
        desc: "Track leopards in Yala National Park and unwind in tea estate bungalows. Combines thrilling wildlife jeep safaris with the cool colonial charm of tea country.",
        highlights: ["Yala luxury tented safari camp", "Private tea tasting & plucking", "Scenic train ride from Kandy"]
      },
      {
        title: "Sacred Ayurveda & Coastal Wellness",
        duration: "10 Days / 9 Nights",
        price: "From $5,100 / person",
        desc: "Immerse your body and mind in traditional Ayurvedic healing, coupled with private yoga classes overlooking the pristine southern coastline of Weligama.",
        highlights: ["Consultation with Ayurvedic Master", "Daily customized herbal treatments", "Beachfront villa with private pool"]
      }
    ],
    itinerary: [
      {
        day: "Day 01 - 02",
        title: "The Ancient Cultural Triangle & Sigiriya",
        desc: "Arrive in luxury with private chauffeur transit to a secluded jungle villa. Ascend the ancient Sigiriya fortress at sunrise before private crowds arrive, followed by an artisan pottery workshop.",
      },
      {
        day: "Day 03 - 04",
        title: "Mist-Covered Tea Highlands & Colonial Estates",
        desc: "Board the scenic private train or helicopter to Nuwara Eliya. Stay in a century-old planter bungalow, enjoying high-tea and private tea factory harvesting.",
      },
      {
        day: "Day 05 - 06",
        title: "Wild Leopard Safaris in Yala National Park",
        desc: "Check into a luxury safari camp on the park border. Guided by expert naturalists, track Sri Lankan leopards, wild elephant herds, and rare endemic birds.",
      },
      {
        day: "Day 07",
        title: "Southern Coastal Sunset & Farewell",
        desc: "Unwind at a private cliffside resort overlooking the Indian Ocean. Enjoy a private seafood dining experience prepared by your dedicated personal chef.",
      },
    ],
  },
  maldives: {
    title: "Maldives: The Ultimate Ocean Sanctuary",
    tagline: "The Tropical Paradise of the Maldives",
    heroImage: "/assets/images/maldives.png",
    overview:
      "Discover the pinnacle of secluded luxury amidst 1,000+ coral islands and crystal-clear turquoise lagoons. The Maldives offers unmatched privacy, overwater villas with glass viewports, and pristine marine encounters.",
    highlights: [
      "Private Overwater Villas with Personal Butler & Infinity Plunge Pool",
      "Snorkeling & Diving with Manta Rays & Gentle Whale Sharks in Hanifaru Bay",
      "Private Island Yacht Charters Across 26 Natural Atolls",
      "Submerged Undersea Gourmet Dining & Deep-Sea Hydrothermal Spas",
      "Exclusive Access to Uncrowded Secret Surfing Reef Breaks",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80"
    ],
    packages: [
      {
        title: "Romantic Overwater Sanctuary",
        duration: "5 Days / 4 Nights",
        price: "From $6,400 / person",
        desc: "Designed exclusively for couples seeking absolute privacy. Enjoy an overwater villa with a private pool, direct ocean ladder, and dedicated 24/7 personal butler service.",
        highlights: ["Private sandbank candlelit dinner", "Overwater couple's spa session", "Champagne sunset cruise"]
      },
      {
        title: "Manta & Whale Shark Marine Safari",
        duration: "7 Days / 6 Nights",
        price: "From $8,200 / person",
        desc: "An extraordinary marine journey in the UNESCO biosphere reserve of Baa Atoll. Snorkel with giant manta rays and track whale sharks with marine biologists.",
        highlights: ["Private Hanifaru Bay speed-boat access", "Diving with PADI certified guides", "Undersea dining experience"]
      },
      {
        title: "Bespoke Yacht Charter & Island Hopping",
        duration: "8 Days / 7 Nights",
        price: "From $14,500 / person",
        desc: "Charter a private luxury mega-yacht to cruise across uncrowded natural atolls. Perfect for surfing secret reef breaks and exploring uninhabited private sandbanks.",
        highlights: ["Dedicated private captain & chef", "Snorkeling in untouched coral gardens", "Jet ski & water-sports access"]
      }
    ],
    itinerary: [
      {
        day: "Day 01 - 02",
        title: "Seaplane Arrival & Overwater Villa Sanctuary",
        desc: "Scenic seaplane arrival directly to your private lagoon resort. Step into your overwater villa featuring direct coral reef access and 24/7 butler service.",
      },
      {
        day: "Day 03 - 04",
        title: "Hanifaru Bay Marine Expeditions",
        desc: "Embark on a private speed-boat excursion guided by marine biologists to swim alongside majestic Manta Rays and gentle Whale Sharks.",
      },
      {
        day: "Day 05 - 06",
        title: "Private Sandbank Picnic & Undersea Fine Dining",
        desc: "Spend an afternoon on an uninhabited private sandbank, followed by a multi-course submerged wine-pairing dinner surrounded by coral reef life.",
      },
      {
        day: "Day 07",
        title: "Sunset Yacht Cruise & Hydrothermal Spa",
        desc: "Relax with custom overwater spa treatments before boarding a private luxury yacht for a champagne sunset dolphin cruise.",
      },
    ],
  },
};

const PACKAGES = [
  {
    id: 1,
    title: "Grand Ceylon & Cultural Heritage",
    subtitle: "Sri Lanka In-Depth Expedition",
    duration: "10 Days / 9 Nights",
    location: "Sigiriya, Kandy, Ella, Yala & Galle",
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

export function generateStaticParams() {
  return [{ slug: "sri-lanka" }, { slug: "maldives" }];
}

export default function DestinationDetailPage({ params }) {
  const data = DESTINATION_DATA[params.slug];

  if (!data) {
    notFound();
  }

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (params.slug === "sri-lanka") {
      return pkg.id === 1 || pkg.id === 3;
    } else if (params.slug === "maldives") {
      return pkg.id === 2 || pkg.id === 3;
    }
    return false;
  });

  return (
    <main className="min-h-screen bg-ivory-sacred text-charcoal">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-16 bg-indigo-deep text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url('${data.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-indigo-deep/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link
            href="/#destinations"
            className="inline-flex items-center gap-2 font-cinzel text-xs font-bold text-gold-warm uppercase tracking-widest hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back To Experience</span>
          </Link>

          <span className="font-decorative text-sm text-gold-primary tracking-widest uppercase block mb-2 font-bold">
            Curated Expedition Brief
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium mb-3">
            {data.title}
          </h1>
          <p className="font-sans italic text-ivory-sacred text-lg max-w-2xl font-light">
            "{data.tagline}"
          </p>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-14">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-14">
            {/* Overview */}
            <div className="bg-white border border-gold-dark/30 rounded-xl p-8 sm:p-10 shadow-floating">
              <h2 className="font-serif text-2xl text-indigo-dark font-bold mb-4">Destination Overview</h2>
              <p className="font-sans text-charcoal text-base font-normal leading-relaxed">{data.overview}</p>
            </div>

            {/* Signature Highlights */}
            <div className="bg-white border border-gold-dark/30 rounded-xl p-8 sm:p-10 shadow-floating">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-indigo-dark" />
                <h2 className="font-serif text-2xl text-indigo-dark font-bold">Curated 5-Star Highlights</h2>
              </div>
              <div className="space-y-3">
                {data.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm font-medium text-charcoal">
                    <CheckCircle2 className="w-5 h-5 text-emerald-dark shrink-0 mt-0.5 font-bold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curated Tour Packages */}
            <div className="bg-white border border-gold-dark/30 rounded-xl p-8 sm:p-10 shadow-floating">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-indigo-dark" />
                <h2 className="font-serif text-2xl text-indigo-dark font-bold">Our Curated Tour Packages</h2>
              </div>
              <p className="font-sans text-xs text-charcoal mb-8 leading-relaxed">
                Choose from our pre-designed luxury concepts or use them as a starting point to craft your own customized journey.
              </p>
              
              <div className="grid gap-6">
                {filteredPackages.map((pkg) => (
                  <div key={pkg.title} className="border border-gold-dark/20 rounded-lg p-6 hover:border-gold-primary hover:shadow-md transition-all bg-ivory-sacred/40">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="font-cinzel text-[10px] font-bold text-gold-dark tracking-widest uppercase block mb-1">
                          {pkg.duration}
                        </span>
                        <h3 className="font-serif text-lg text-indigo-dark font-bold">{pkg.title}</h3>
                      </div>
                      <span className="font-sans text-xs font-semibold text-emerald-dark bg-emerald-dark/15 px-3 py-1 rounded-full shrink-0 self-start sm:self-center">
                        {pkg.tag}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-charcoal leading-relaxed mb-4">{pkg.subtitle} — {pkg.location}</p>
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gold-dark/10">
                      {pkg.highlights.map((hl) => (
                        <span key={hl} className="font-sans text-[10px] bg-white border border-gold-dark/20 text-indigo-dark px-2 py-0.5 rounded">
                          ✨ {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Itinerary Timeline */}
            <div className="bg-white border border-gold-dark/30 rounded-xl p-8 sm:p-10 shadow-floating">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="w-6 h-6 text-indigo-dark" />
                <h2 className="font-serif text-2xl text-indigo-dark font-bold">Sample Bespoke Itinerary Timeline</h2>
              </div>

              <div className="space-y-8 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gold-dark/30">
                {data.itinerary.map((step) => (
                  <div key={step.title} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-indigo-dark text-gold-primary border border-gold-dark flex items-center justify-center text-xs font-bold">
                      •
                    </div>
                    <span className="font-cinzel text-xs font-bold text-indigo-dark uppercase tracking-wider block mb-1">
                      {step.day}
                    </span>
                    <h3 className="font-serif text-xl text-indigo-dark font-bold mb-2">{step.title}</h3>
                    <p className="font-sans text-xs text-charcoal font-normal leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Destination Gallery */}
            <div className="bg-white border border-gold-dark/30 rounded-xl p-8 sm:p-10 shadow-floating">
              <h2 className="font-serif text-2xl text-indigo-dark font-bold mb-6">Visual Journey</h2>
              <div className="grid grid-cols-2 gap-4">
                {data.gallery.map((img, idx) => (
                  <div key={idx} className="relative h-40 sm:h-64 rounded-xl overflow-hidden shadow-sm group border border-gold-border/20">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${img}')` }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-emerald-dark text-white border border-gold-border rounded-xl p-8 shadow-2xl">
              <div className="text-3xl mb-3">🏛️</div>
              <span className="font-cinzel text-xs font-bold text-gold-warm tracking-widest uppercase block mb-1">
                Atelier Concierge
              </span>
              <h3 className="font-serif text-2xl text-gold-primary font-bold mb-4">Craft Your Escapes</h3>
              <p className="font-sans text-xs text-white leading-relaxed mb-6 font-normal">
                Our Atelier Travel Designers will stitch a custom private itinerary tailored to your exact dates and party size.
              </p>

              <div className="space-y-3 mb-8 text-xs font-sans text-white border-y border-gold-primary/30 py-4 font-normal">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-primary" />
                  <span>20+ Years Dedicated Chauffeur Fleet</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-primary" />
                  <span>Private Aviation & Island Charters</span>
                </div>
              </div>

              <Link
                href="/#contact"
                className="block w-full text-center py-3.5 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-wider rounded shadow-gold hover:brightness-110 transition-all"
              >
                Inquire For This Region
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
