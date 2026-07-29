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

export function generateStaticParams() {
  return [{ slug: "sri-lanka" }, { slug: "maldives" }];
}

export default function DestinationDetailPage({ params }) {
  const data = DESTINATION_DATA[params.slug];

  if (!data) {
    notFound();
  }

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
