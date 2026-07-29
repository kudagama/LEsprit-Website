import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Shield, Car, Plane, Compass } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const SERVICE_DATA = {
  "travel-solutions": {
    title: "FIT, GIT & Corporate MICE Logistics",
    subtitle: "Tailored luxury travel solutions for individuals, group tours, and high-level corporate retreats.",
    overview:
      "Whether arranging an intimate solo honeymoon, a multi-generational family reunion, or an executive corporate retreat across Sri Lanka & the Maldives, our travel solutions team handles every logistical detail with 5-star finesse.",
    features: [
      {
        title: "Free Independent Travelers (FIT)",
        desc: "Tailor-made solo, couple, or family journeys with private concierge and 24/7 dedicated travel designer support.",
      },
      {
        title: "Group Inclusive Tours (GIT)",
        desc: "Seamless group management with private luxury coaches, dedicated tour managers, and exclusive group dining.",
      },
      {
        title: "Corporate MICE & Executive Retreats",
        desc: "High-end corporate incentive programs, international conferences, team retreats, and private island buyouts.",
      },
    ],
  },
  "signature-experiences": {
    title: "Curated Expedition Pursuits",
    subtitle: "Immersive thematic expeditions guided by local historians, naturalists, and wellness specialists.",
    overview:
      "Step beyond standard tourist trails into rare, authentic pursuits. From birdwatching in UNESCO rainforest reserves to sacred Ayurvedic cleanses and high-altitude mountain cycling, we connect you with the soul of the island.",
    features: [
      {
        title: "Adventure, Trekking & Cycling Trails",
        desc: "Private guided treks across Horton Plains, Knuckles Mountain Range, and scenic Central Tea Country cycling trails.",
      },
      {
        title: "Voluntourism & Heritage Conservation",
        desc: "Hands-on participation in turtle hatchery conservation, coral reef restoration, and local village school renovations.",
      },
      {
        title: "Birdwatching & Wildlife Photography Expeditions",
        desc: "Specialist-led expeditions tracking 33 endemic bird species and big game photography in Sinharaja & Yala.",
      },
      {
        title: "Sacred Ayurveda & Holistic Wellness Retreats",
        desc: "Personalized multi-day Panchakarma treatments, yoga, and herbal therapies overseen by qualified Ayurvedic doctors.",
      },
    ],
  },
  "premium-fleet": {
    title: "Private Chauffeur Fleet & Aviation",
    subtitle: "Unrivaled luxury ground transit and domestic aviation charters across Sri Lanka and the Maldives.",
    overview:
      "Travel in supreme comfort with our private fleet of luxury vehicles and dedicated, English-speaking chauffeur guides who serve as your local ambassadors, hosts, and guardians.",
    features: [
      {
        title: "Luxury Sedans & SUVs",
        desc: "Mercedes-Benz E/S-Class, Toyota Land Cruiser, and Audi SUVs equipped with complimentary Wi-Fi, mineral water, and cold towels.",
      },
      {
        title: "Deluxe Micro Vans & Coaster Coaches",
        desc: "High-roof Toyota Alphard/Vellfire micro vans and deluxe luxury coaches for small groups with reclining leather seats.",
      },
      {
        title: "Domestic Aviation & Helicopter Charters",
        desc: "Point-to-point floatplane and helicopter transfers cutting transit times between Colombo, Sri Lankan hill country, and Maldivian resorts.",
      },
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "travel-solutions" },
    { slug: "signature-experiences" },
    { slug: "premium-fleet" },
  ];
}

export default function ServiceDetailPage({ params }) {
  const data = SERVICE_DATA[params.slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ivory-sacred text-charcoal">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-indigo-deep text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 font-cinzel text-xs font-bold text-gold-warm uppercase tracking-widest hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back To Services</span>
          </Link>

          <span className="font-decorative text-xs font-bold text-gold-primary tracking-widest uppercase block mb-2">
            Service Specification
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-white mb-4">{data.title}</h1>
          <p className="font-sans italic text-ivory-sacred/90 text-base max-w-2xl font-light">
            "{data.subtitle}"
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white border border-gold-dark/30 rounded-xl p-8 sm:p-10 shadow-floating">
              <h2 className="font-serif text-2xl text-indigo-dark font-bold mb-4">Service Capabilities</h2>
              <p className="font-sans text-charcoal text-base font-normal leading-relaxed">{data.overview}</p>
            </div>

            {/* Feature Breakdown */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-indigo-dark font-bold">Key Solutions & Modules</h2>
              <div className="grid gap-6">
                {data.features.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-gold-dark/30 hover:border-gold-primary rounded-xl p-6 sm:p-8 shadow-floating transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-dark text-gold-primary font-bold text-xs flex items-center justify-center">
                        ✓
                      </div>
                      <h3 className="font-serif text-xl text-indigo-dark font-bold">{item.title}</h3>
                    </div>
                    <p className="font-sans text-xs text-charcoal font-normal leading-relaxed pl-11">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-emerald-dark text-white border border-gold-border rounded-xl p-8 shadow-2xl">
              <span className="font-cinzel text-xs font-bold text-gold-warm tracking-widest uppercase block mb-1">
                Logistics Concierge
              </span>
              <h3 className="font-serif text-2xl text-gold-primary font-bold mb-4">Request Customized Logistics</h3>
              <p className="font-sans text-xs text-white leading-relaxed mb-6 font-normal">
                Speak directly with our senior transport & expedition coordinators to arrange custom fleet schedules or group arrangements.
              </p>

              <div className="space-y-3 mb-8 text-xs font-sans text-white border-y border-gold-primary/30 py-4 font-normal">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold-primary" />
                  <span>Licensed by Ministry of Tourism Sri Lanka</span>
                </div>
              </div>

              <Link
                href="/#contact"
                className="block w-full text-center py-3.5 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-wider rounded shadow-gold hover:brightness-110 transition-all"
              >
                Inquire For Logistics
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
