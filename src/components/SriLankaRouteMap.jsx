"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  Navigation,
  Landmark
} from "lucide-react";
import districtsData from "../data/sriLankaDistricts.json";

export const TOUR_ROUTES = {
  "ultimate-10d": {
    id: "ultimate-10d",
    packageId: 1,
    title: "The Ultimate Sri Lankan Journey",
    subtitle: "Culture, Nature, Wildlife & Beach",
    duration: "10 Days / 9 Nights",
    path: "M 50,575 Q 115,450 215,395 Q 210,460 198,518 Q 202,548 218,572 Q 245,625 228,672 Q 160,730 98,755 Q 74,710 64,660 Q 52,620 50,575",
    stops: [
      {
        id: "stop-1",
        num: "01",
        town: "Colombo",
        name: "Colombo & Bandaranaike Gateway",
        landmarkName: "Colombo Gateway & Ocean Capital",
        historicalTag: "Bandaranaike Int. Airport (CMB)",
        days: "Day 01",
        stage: "Arrival & Coastal Capital Welcome",
        region: "Western Coastal Capital",
        x: 50,
        y: 575,
        type: "colombo",
        labelOffset: { dx: -18, dy: 6, anchor: "end" },
        image: "/assets/images/packages/sl_tour_1.jpg",
        desc: "Touch down at Bandaranaike International Airport (CMB). Receive VIP fast-track reception followed by private luxury chauffeur escort to your oceanfront Colombo suite or coastal sanctuary.",
        highlights: [
          "Bandaranaike Int. Airport VIP Meet & Fast-Track Assist",
          "Private luxury chauffeur transfer to five-star oceanfront suite",
          "Sunset ocean view dinner & colonial heritage unwind"
        ],
        travelTime: "Bandaranaike International Airport (CMB)",
        stay: "1 Night at Luxury Colombo Oceanfront Suite"
      },
      {
        id: "stop-2",
        num: "02",
        town: "Sigiriya",
        name: "Sigiriya Citadel & Dambulla",
        landmarkName: "Sigiriya Lion Rock Citadel",
        historicalTag: "UNESCO 5th-Century Sky Fortress",
        days: "Days 02 – 03",
        stage: "Ancient Royal Kingdoms",
        region: "Cultural Triangle",
        x: 215,
        y: 395,
        type: "sigiriya",
        labelOffset: { dx: 22, dy: -6, anchor: "start" },
        image: "/assets/images/pillars/pillar_2.jpg",
        desc: "Behold King Kashyapa's dramatic 5th-century palace atop the sheer 200-meter monolith of Sigiriya, ancient water gardens, and the golden cave monasteries of Dambulla.",
        highlights: [
          "Sigiriya Lion Rock sunrise private ascent",
          "Dambulla UNESCO Golden Cave Temples",
          "Ancient Polonnaruwa royal capital exploration"
        ],
        travelTime: "3.5 hrs private chauffeured transfer",
        stay: "2 Nights at Boutique Heritage Estate"
      },
      {
        id: "stop-3",
        num: "03",
        town: "Kandy",
        name: "Kandy Sacred Hill Capital",
        landmarkName: "Temple of the Sacred Tooth",
        historicalTag: "Seat of the Last Royal Monarchy",
        days: "Day 04",
        stage: "Sacred Relics & Royal Valley",
        region: "Central Highlands",
        x: 198,
        y: 518,
        type: "kandy",
        labelOffset: { dx: -22, dy: 0, anchor: "end" },
        image: "/assets/images/pillars/pillar_1.jpg",
        desc: "Ascend to the royal citadel of Kandy. Participate in a private evening Puja at Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) amidst traditional drumming.",
        highlights: [
          "Private Puja blessing at Temple of the Tooth",
          "Royal Peradeniya Botanical Gardens orchid walk",
          "Traditional Kandyan drum & fire performance"
        ],
        travelTime: "2.5 hrs via tropical spice country",
        stay: "1 Night in Colonial Mountain Sanctuary"
      },
      {
        id: "stop-4",
        num: "04",
        town: "Nuwara Eliya",
        name: "Nuwara Eliya & Tea Country",
        landmarkName: "Nine Arch Bridge & Tea Hills",
        historicalTag: "Colonial Viaduct & Ceylon Tea Heritage",
        days: "Days 05 – 06",
        stage: "Misty Tea Highlands & Scenic Rails",
        region: "High Mountain Valleys",
        x: 218,
        y: 572,
        type: "nuwara-eliya",
        labelOffset: { dx: 24, dy: 4, anchor: "start" },
        image: "/assets/images/posters/tea_estate_poster.jpg",
        desc: "Board the world-famous observation train crossing the Nine Arch Bridge into emerald tea valleys. Savor rare artisanal single-estate Ceylon teas in colonial elegance.",
        highlights: [
          "First-class scenic highland observation train",
          "Private Ceylon artisanal tea estate tasting",
          "Colonial Nine Arch Bridge viaduct walk"
        ],
        travelTime: "2.5 hrs scenic mountain rails / drive",
        stay: "2 Nights at Historic Tea Planter's Bungalow"
      },
      {
        id: "stop-5",
        num: "05",
        town: "Udawalawe",
        name: "Udawalawe National Park",
        landmarkName: "Wild Elephant Sanctuary",
        historicalTag: "Pristine Savanna & Tusker Reserve",
        days: "Day 07",
        stage: "Wild Plains & Safari",
        region: "Southern Plains",
        x: 228,
        y: 672,
        type: "udawalawe",
        labelOffset: { dx: 24, dy: 4, anchor: "start" },
        image: "/assets/images/posters/wildlife_poster.jpg",
        desc: "Descend to the golden southern plains for open-top 4x4 safaris observing hundred-strong wild elephant herds, wild water buffaloes, and rare endemic birdlife.",
        highlights: [
          "Private open-top 4x4 safari with senior naturalist",
          "Elephant Transit Home foster rehabilitation visit",
          "Candlelit savanna dinner under the southern stars"
        ],
        travelTime: "3 hrs via scenic waterfall passes",
        stay: "1 Night at Luxury Safari Glamping Lodge"
      },
      {
        id: "stop-6",
        num: "06",
        town: "Galle",
        name: "Galle Historic Dutch Fort",
        landmarkName: "Galle Fort Lighthouse & Ramparts",
        historicalTag: "UNESCO 17th-Century Maritime Fortress",
        days: "Day 08",
        stage: "Maritime Colonial Citadel",
        region: "Southern Ocean Coast",
        x: 98,
        y: 755,
        type: "galle",
        labelOffset: { dx: -20, dy: 14, anchor: "end" },
        image: "/assets/images/packages/sl_tour_2.jpg",
        desc: "Stroll the cobblestone bastions and lighthouse ramparts of Galle Fort, exploring 17th-century Dutch architecture, artisan gem workshops, and oceanfront dining.",
        highlights: [
          "Private architectural walking tour of Galle Fort",
          "Lighthouse ramparts sunset cocktail session",
          "Fine Dutch-colonial fusion dining"
        ],
        travelTime: "2 hrs along southern coastal expressway",
        stay: "1 Night at Historic Fort Boutique Manor"
      },
      {
        id: "stop-7",
        num: "07",
        town: "Bentota",
        name: "Bentota Golden Coast",
        landmarkName: "Palm Riviera & Madu River",
        historicalTag: "Mangrove Archipelago & Golden Sands",
        days: "Days 09 – 10",
        stage: "Coastal Sanctuary & Departure",
        region: "Southwestern Riviera",
        x: 64,
        y: 660,
        type: "bentota",
        labelOffset: { dx: -20, dy: -4, anchor: "end" },
        image: "/assets/images/posters/beaches_poster.jpg",
        desc: "Unwind on golden sands, glide along the biodiverse Madu River mangrove archipelago by boat, visit a sea turtle nursery, and depart with VIP chauffeur escort.",
        highlights: [
          "Private Madu River mangrove boat safari",
          "Kosgoda Sea Turtle Conservation sanctuary",
          "VIP chauffeur transfer to Airport for departure"
        ],
        travelTime: "1.5 hrs private expressway to Colombo (Airport)",
        stay: "1 Night at Private Oceanfront Villa"
      }
    ]
  },
  "highlights-7d": {
    id: "highlights-7d",
    packageId: 2,
    title: "Sri Lanka Highlights",
    subtitle: "Ancient Heritage & Southern Coast",
    duration: "7 Days / 6 Nights",
    path: "M 50,575 Q 115,450 215,395 Q 210,460 198,518 Q 202,548 218,572 Q 245,625 228,672 Q 160,730 98,755 Q 56,660 50,575",
    stops: [
      {
        id: "h-stop-1",
        num: "01",
        town: "Colombo",
        name: "Colombo & Bandaranaike Gateway",
        landmarkName: "Colombo Gateway & Ocean Capital",
        historicalTag: "Bandaranaike Int. Airport (CMB)",
        days: "Day 01",
        stage: "Arrival in Paradise",
        region: "Western Coastal Capital",
        x: 50,
        y: 575,
        type: "colombo",
        labelOffset: { dx: -18, dy: 6, anchor: "end" },
        image: "/assets/images/packages/sl_tour_1.jpg",
        desc: "Warm traditional Ayubowan welcome at Bandaranaike International Airport (CMB). Private luxury chauffeur transfer to your oceanfront sanctuary to rest before your grand heritage tour.",
        highlights: [
          "Bandaranaike Airport VIP meet-and-greet",
          "Private luxury chauffeur transfer",
          "Coastal capital relaxation evening"
        ],
        travelTime: "Bandaranaike International Airport (CMB)",
        stay: "1 Night Beachfront / City Sanctuary"
      },
      {
        id: "h-stop-2",
        num: "02",
        town: "Sigiriya",
        name: "Sigiriya Citadel & Dambulla",
        landmarkName: "Sigiriya Lion Rock Citadel",
        historicalTag: "5th-Century Sky Fortress",
        days: "Day 02",
        stage: "Cultural Triangle & Rock Citadel",
        region: "Cultural Triangle",
        x: 215,
        y: 395,
        type: "sigiriya",
        labelOffset: { dx: 22, dy: -6, anchor: "start" },
        image: "/assets/images/pillars/pillar_2.jpg",
        desc: "Ascend the iconic Sigiriya Rock citadel and explore the ancient painted cave temple monasteries of Dambulla.",
        highlights: [
          "Sigiriya Lion Rock summit exploration",
          "Dambulla UNESCO Golden Cave Temples",
          "Traditional village catamaran lunch"
        ],
        travelTime: "3.5 hrs scenic drive",
        stay: "1 Night Boutique Heritage Resort"
      },
      {
        id: "h-stop-3",
        num: "03",
        town: "Kandy",
        name: "Kandy Royal City",
        landmarkName: "Temple of the Sacred Tooth",
        historicalTag: "Seat of the Kandyan Monarchy",
        days: "Day 03",
        stage: "Sacred Relics & Royal Gardens",
        region: "Central Highlands",
        x: 198,
        y: 518,
        type: "kandy",
        labelOffset: { dx: -22, dy: 0, anchor: "end" },
        image: "/assets/images/pillars/pillar_1.jpg",
        desc: "Visit the revered Temple of the Sacred Tooth Relic, stroll Peradeniya royal botanical gardens, and enjoy evening cultural dances.",
        highlights: [
          "Temple of the Tooth Relic ceremony",
          "Peradeniya Royal Botanical Gardens",
          "Kandyan cultural dance & music show"
        ],
        travelTime: "2.5 hrs scenic route",
        stay: "1 Night Hillside Sanctuary"
      },
      {
        id: "h-stop-4",
        num: "04",
        town: "Nuwara Eliya",
        name: "Nuwara Eliya Tea Hills",
        landmarkName: "Nine Arch Bridge & Tea Hills",
        historicalTag: "Highland Viaduct & Tea Estate",
        days: "Day 04",
        stage: "Tea Country & Highland Rails",
        region: "Central Tea Country",
        x: 218,
        y: 572,
        type: "nuwara-eliya",
        labelOffset: { dx: 24, dy: 4, anchor: "start" },
        image: "/assets/images/posters/tea_estate_poster.jpg",
        desc: "Scenic highland train ride through misty tea fields, fresh mountain waterfalls, and private estate tea tasting.",
        highlights: [
          "Scenic hill country train ride",
          "Ceylon tea plantation & tasting session",
          "Nine Arch Bridge photo stop"
        ],
        travelTime: "2.5 hrs train journey",
        stay: "1 Night Colonial Country Club"
      },
      {
        id: "h-stop-5",
        num: "05",
        town: "Udawalawe",
        name: "Udawalawe Safari",
        landmarkName: "Wild Elephant Sanctuary",
        historicalTag: "Wildlife Reserve",
        days: "Day 05",
        stage: "Wild Plains & Elephant Safari",
        region: "Southern Plains",
        x: 228,
        y: 672,
        type: "udawalawe",
        labelOffset: { dx: 24, dy: 4, anchor: "start" },
        image: "/assets/images/posters/wildlife_poster.jpg",
        desc: "Unforgettable open jeep safari witnessing wild elephant herds in their native savanna sanctuary.",
        highlights: [
          "Udawalawe 4x4 open safari",
          "Elephant Transit Home rehabilitation visit",
          "Bird watching & reservoir scenery"
        ],
        travelTime: "3 hrs descent to plains",
        stay: "1 Night Safari Lodge"
      },
      {
        id: "h-stop-6",
        num: "06",
        town: "Galle",
        name: "Galle Fort & Departure",
        landmarkName: "Galle Fort Lighthouse & Ramparts",
        historicalTag: "17th-Century Dutch Citadel",
        days: "Days 06 – 07",
        stage: "Colonial Citadel & Farewell",
        region: "Southern Coast to Airport",
        x: 98,
        y: 755,
        type: "galle",
        labelOffset: { dx: -20, dy: 14, anchor: "end" },
        image: "/assets/images/packages/sl_tour_2.jpg",
        desc: "Explore the UNESCO Galle Fort ramparts and maritime streets before your comfortable expressway transfer to the airport.",
        highlights: [
          "Galle Fort lighthouse rampart walk",
          "Artisan souvenir & gem shopping",
          "VIP private transfer to Airport"
        ],
        travelTime: "2.5 hrs express to Colombo (Airport)",
        stay: "1 Night Historic Fort Villa / Departure"
      }
    ]
  }
};

/* ==========================================================================
   HANDCRAFTED HISTORICAL LANDMARK SVG ILLUSTRATIONS
   ========================================================================== */
function LandmarkIcon({ type, isActive }) {
  const primaryGold = isActive ? "#C59B27" : "#A87D46";
  const glowFilter = isActive ? "url(#goldSunburstGlow)" : undefined;

  switch (type) {
    case "sigiriya":
      return (
        <g filter={glowFilter} className="transition-transform duration-500">
          {/* Monolith Rock Base */}
          <path d="M -16,11 L -14,-4 Q -16,-15 -10,-19 L 10,-19 Q 16,-15 14,-4 L 16,11 Z" fill={isActive ? "#B88344" : "#9C6B3E"} stroke="#4A2E12" strokeWidth="1.2" />
          {/* Cliff Striations */}
          <line x1="-12" y1="-10" x2="12" y2="-10" stroke="#5A3A1A" strokeWidth="0.8" strokeDasharray="3 2" />
          <line x1="-13" y1="0" x2="13" y2="0" stroke="#5A3A1A" strokeWidth="0.8" strokeDasharray="4 2" />
          {/* Summit Palace Ruins & Flag */}
          <rect x="-9" y="-21" width="18" height="2.5" fill="#E6C875" stroke="#4A2E12" strokeWidth="0.6" rx="1" />
          <polygon points="0,-27 -5,-21 5,-21" fill="#C59B27" stroke="#4A2E12" strokeWidth="0.8" />
          {/* Lion Paws Stairway Base */}
          <path d="M -8,11 Q -6,7 -3,11 M 3,11 Q 6,7 8,11" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      );

    case "kandy":
      return (
        <g filter={glowFilter} className="transition-transform duration-500">
          {/* White Temple Wall Base */}
          <rect x="-14" y="-2" width="28" height="13" fill="#FFFDF8" stroke="#5A3A1A" strokeWidth="1" rx="1" />
          {/* Octagonal Pattirippuwa Tower */}
          <polygon points="-8,-2 -6,-12 6,-12 8,-2" fill="#FAF5EA" stroke="#5A3A1A" strokeWidth="1" />
          {/* Kandyan 2-Tiered Terracotta Roof */}
          <polygon points="0,-17 -16,-10 16,-10" fill="#B34222" stroke="#4A1608" strokeWidth="1" />
          <polygon points="0,-22 -11,-16 11,-16" fill="#B34222" stroke="#4A1608" strokeWidth="1" />
          {/* Golden Pinnacle (Kotha) */}
          <polygon points="0,-28 -2.5,-22 2.5,-22" fill="#D4AF37" stroke="#8C6E15" strokeWidth="0.8" />
          <circle cx="0" cy="-29" r="1.5" fill="#FFEAA7" />
          {/* Sacred Relic Chamber Emblem */}
          <circle cx="0" cy="-6" r="2.5" fill="#D4AF37" />
        </g>
      );

    case "nuwara-eliya":
      return (
        <g filter={glowFilter} className="transition-transform duration-500">
          {/* Tea Country Mountain Silhouette */}
          <path d="M -22,11 Q -11,-3 0,4 Q 11,-3 22,11 Z" fill="#6B9362" stroke="#3D5A36" strokeWidth="0.8" opacity="0.85" />
          {/* Stone Viaduct Structure */}
          <rect x="-16" y="-7" width="32" height="3" fill="#8C7D70" stroke="#3A322A" strokeWidth="0.8" />
          <rect x="-14" y="-4" width="28" height="15" fill="#A8998A" stroke="#3A322A" strokeWidth="0.8" />
          {/* Iconic Arched Spans */}
          <path d="M -12,11 A 3,5 0 0,1 -6,11 M -3,11 A 3,5 0 0,1 3,11 M 6,11 A 3,5 0 0,1 12,11" fill="#42372E" />
          {/* Vintage Ceylon Steam Train Carriages */}
          <rect x="-10" y="-13" width="9" height="5.5" fill="#C0392B" stroke="#4A1608" strokeWidth="0.6" rx="0.5" />
          <rect x="0" y="-13" width="9" height="5.5" fill="#27AE60" stroke="#145A32" strokeWidth="0.6" rx="0.5" />
          {/* Steam Smoke Puffs */}
          <circle cx="-11" cy="-16" r="1.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="-13" cy="-19" r="2.2" fill="#FFFFFF" opacity="0.7" />
        </g>
      );

    case "udawalawe":
      return (
        <g filter={glowFilter} className="transition-transform duration-500">
          {/* Savanna Base Mound */}
          <ellipse cx="0" cy="11" rx="16" ry="3" fill="#D5C59E" opacity="0.8" />
          {/* Elephant Body & Torso */}
          <ellipse cx="2" cy="1" rx="10" ry="8.5" fill={isActive ? "#5E636B" : "#6E727A"} stroke="#2E3033" strokeWidth="1" />
          {/* Head & Large Ear */}
          <circle cx="-8" cy="-2" r="6" fill={isActive ? "#5E636B" : "#6E727A"} stroke="#2E3033" strokeWidth="1" />
          <path d="M -9,-6 C -14,-4 -14,3 -9,2 Z" fill="#4B4E54" stroke="#2E3033" strokeWidth="0.8" />
          {/* Raised Trunk */}
          <path d="M -12,0 C -17,1 -17,-7 -12,-8" fill="none" stroke={isActive ? "#5E636B" : "#6E727A"} strokeWidth="2.4" strokeLinecap="round" />
          {/* White Ivory Tusks */}
          <path d="M -11,1 C -14,4 -9,5 -8,3" fill="none" stroke="#FFFFF0" strokeWidth="1.8" strokeLinecap="round" />
          {/* Sturdy Elephant Legs */}
          <rect x="-4" y="6" width="3.5" height="6.5" fill="#4B4E54" rx="1" />
          <rect x="4" y="6" width="3.5" height="6.5" fill="#4B4E54" rx="1" />
        </g>
      );

    case "galle":
      return (
        <g filter={glowFilter} className="transition-transform duration-500">
          {/* Ocean Waves at Bastion Base */}
          <path d="M -18,11 Q -9,8 0,11 Q 9,14 18,11" fill="none" stroke="#3A7B88" strokeWidth="1.6" />
          {/* Stone Bastion Rampart Wall */}
          <polygon points="-14,11 -14,3 14,3 14,11" fill="#C5B299" stroke="#524332" strokeWidth="1" />
          {/* Fortress Crenels */}
          <rect x="-12" y="1" width="4" height="2" fill="#524332" />
          <rect x="-2" y="1" width="4" height="2" fill="#524332" />
          <rect x="8" y="1" width="4" height="2" fill="#524332" />
          {/* White Tapered Lighthouse Tower */}
          <polygon points="-4,3 -2.5,-18 2.5,-18 4,3" fill="#FFFFFF" stroke="#524332" strokeWidth="0.9" />
          {/* Light Room & Red Dome */}
          <rect x="-5" y="-19" width="10" height="1.5" fill="#524332" />
          <rect x="-3" y="-23" width="6" height="4" fill="#FFEAA7" stroke="#524332" strokeWidth="0.8" />
          <polygon points="0,-27 -4,-23 4,-23" fill="#C0392B" stroke="#524332" strokeWidth="0.8" />
          {/* Rotating Beam Rays */}
          <polygon points="3,-21 24,-28 22,-14" fill="#FFEAA7" opacity="0.45" />
        </g>
      );

    case "bentota":
      return (
        <g filter={glowFilter} className="transition-transform duration-500">
          {/* Golden Sand Shoreline */}
          <ellipse cx="0" cy="11" rx="16" ry="3" fill="#EAD7B7" />
          {/* Leaning Tropical Coconut Palm */}
          <path d="M -8,11 Q -2,1 -5,-12" fill="none" stroke="#6E4720" strokeWidth="2.4" strokeLinecap="round" />
          {/* Palm Canopy Fronds */}
          <path d="M -5,-12 Q -15,-15 -17,-9 M -5,-12 Q -11,-19 -4,-20 M -5,-12 Q 3,-17 5,-10 M -5,-12 Q 1,-5 0,-3" fill="none" stroke="#227B42" strokeWidth="2" strokeLinecap="round" />
          {/* Traditional Outrigger Catamaran (Oruwa) */}
          <path d="M 0,10 Q 7,13 14,10 L 12,7 Q 7,8 2,7 Z" fill="#8C5828" stroke="#4A2E12" strokeWidth="0.8" />
          <polygon points="7,0 7,7 13,7" fill="#FDFBF7" stroke="#6E4720" strokeWidth="0.7" />
        </g>
      );

    case "colombo":
    case "negombo":
    default:
      return (
        <g filter={glowFilter} className="transition-transform duration-500">
          {/* Coastal Lagoon Water */}
          <ellipse cx="0" cy="9" rx="14" ry="3" fill="#C8DEDC" />
          {/* Royal Ayubowan Welcome Gate */}
          <path d="M -10,9 L -10,-4 Q 0,-13 10,-4 L 10,9" fill="none" stroke="#C59B27" strokeWidth="2" />
          <polygon points="0,-16 -4,-11 4,-11" fill="#C59B27" stroke="#7A5A0A" strokeWidth="0.6" />
          {/* Luxury Aircraft Soaring in Arrival */}
          <g transform="translate(1, -7) rotate(-25)">
            <polygon points="0,-8 7,-8 10,-5 6,-5 3,-2 0,-2 2,-5 -1,-5" fill="#0B1B2B" stroke="#D4AF37" strokeWidth="0.8" />
          </g>
        </g>
      );
  }
}

export default function SriLankaRouteMap({ 
  initialPackage = "ultimate-10d",
  onSelectPackage 
}) {
  const [selectedRouteKey, setSelectedRouteKey] = useState(initialPackage);
  const [activeStopIndex, setActiveStopIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);

  const currentRoute = TOUR_ROUTES[selectedRouteKey] || TOUR_ROUTES["ultimate-10d"];
  const stops = currentRoute.stops;
  const activeStop = stops[activeStopIndex] || stops[0];

  // Helper to keep the tour automatically playing and looping continuously
  const restartAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveStopIndex(prev => (prev >= stops.length - 1 ? 0 : prev + 1));
    }, 4500);
  };

  // Sync when initialPackage changes from parent
  useEffect(() => {
    if (initialPackage && TOUR_ROUTES[initialPackage]) {
      setSelectedRouteKey(initialPackage);
      setActiveStopIndex(0);
      setAnimKey(prev => prev + 1);
      restartAutoPlay();
    }
  }, [initialPackage]);

  // Continuous auto-play loop
  useEffect(() => {
    restartAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [selectedRouteKey, stops.length]);

  const handlePackageChange = (key) => {
    setSelectedRouteKey(key);
    setActiveStopIndex(0);
    setAnimKey(prev => prev + 1);
    restartAutoPlay();
    if (onSelectPackage) onSelectPackage(TOUR_ROUTES[key].packageId);
  };

  const handleStopClick = (idx) => {
    setActiveStopIndex(idx);
    restartAutoPlay();
  };

  return (
    <div className="w-full bg-[#FAF7F2] rounded-3xl border border-[#D4AF37]/45 shadow-[0_20px_50px_-15px_rgba(168,125,70,0.18)] p-4 sm:p-7 md:p-10 text-charcoal relative overflow-hidden">
      
      {/* Background Cartography Parchment Subtle Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply z-0"
        style={{ 
          backgroundImage: "url('/assets/images/bg_remove.svg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      />
      
      {/* Top Cartouche Bar: Title & Package Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#D4AF37]/30 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-[#A87D46] text-xs sm:text-sm font-cinzel font-bold tracking-[0.2em] uppercase mb-1.5">
            <Compass className="w-4 h-4 text-[#A87D46]" />
            <span>The Royal Cartography of Ceylon</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-indigo-dark font-bold tracking-tight">
            Historical <span className="text-[#A87D46]">Voyage Expedition Map</span>
          </h3>
        </div>

        {/* Package Switcher Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => handlePackageChange("ultimate-10d")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-cinzel font-bold tracking-wider transition-all duration-300 flex items-center gap-2 border ${
              selectedRouteKey === "ultimate-10d"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#A87D46] text-white border-[#A87D46] shadow-gold scale-105"
                : "bg-white/80 text-charcoal border-gold-border/40 hover:border-[#D4AF37] hover:bg-white shadow-sm"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Ultimate Journey (10 Days)</span>
          </button>

          <button
            onClick={() => handlePackageChange("highlights-7d")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-cinzel font-bold tracking-wider transition-all duration-300 flex items-center gap-2 border ${
              selectedRouteKey === "highlights-7d"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#A87D46] text-white border-[#A87D46] shadow-gold scale-105"
                : "bg-white/80 text-charcoal border-gold-border/40 hover:border-[#D4AF37] hover:bg-white shadow-sm"
            }`}
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Sri Lanka Highlights (7 Days)</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Authentic Illustrated Map on Left, Active Landmark Story on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 items-center relative z-10">
        
        {/* ============================================================== */}
        {/* LEFT / CENTER: THE AUTHENTIC ILLUSTRATED CEYLON MAP (7 Cols) */}
        {/* ============================================================== */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          <div className="w-full relative bg-[#F5F0E6] border-2 border-[#D4AF37]/50 rounded-2xl p-4 sm:p-6 shadow-[inset_0_0_40px_rgba(212,175,55,0.15)] overflow-hidden flex items-center justify-center">
            
            {/* Antique Water-Wash Background Tint & Graticule */}
            <div className="absolute inset-0 bg-radial from-[#F9F5EC] via-[#F3EEE3] to-[#EBE4D5] pointer-events-none" />
            
            {/* Subtle Nautical Graticule Lines */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#A87D46_1px,transparent_1px),linear-gradient(to_bottom,#A87D46_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Antique Royal Compass Rose (Top Right) */}
            <div className="absolute top-4 right-4 pointer-events-none select-none opacity-85 flex flex-col items-center">
              <svg width="70" height="70" viewBox="0 0 100 100" className="text-[#A87D46]">
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                {/* 8 Cardinal Points */}
                <polygon points="50,4 54,44 50,50 46,44" fill="#B33927" stroke="#4A1608" strokeWidth="0.6" />
                <polygon points="50,96 54,56 50,50 46,56" fill="#C59B27" opacity="0.8" />
                <polygon points="96,50 56,54 50,50 56,46" fill="#C59B27" opacity="0.8" />
                <polygon points="4,50 44,54 50,50 44,46" fill="#C59B27" opacity="0.8" />
                <polygon points="82,18 55,47 50,50 53,45" fill="#A87D46" opacity="0.5" />
                <polygon points="18,82 45,53 50,50 47,55" fill="#A87D46" opacity="0.5" />
                <polygon points="82,82 55,53 50,50 53,55" fill="#A87D46" opacity="0.5" />
                <polygon points="18,18 45,47 50,50 47,45" fill="#A87D46" opacity="0.5" />
                <circle cx="50" cy="50" r="3.5" fill="#D4AF37" stroke="#4A1608" strokeWidth="0.8" />
                <text x="50" y="0" textAnchor="middle" fill="#B33927" fontSize="11" fontWeight="bold" fontFamily="serif">N</text>
              </svg>
              <span className="font-cinzel text-[10px] text-[#A87D46] font-bold tracking-widest uppercase mt-0.5">CEYLON</span>
            </div>

            {/* Vintage Sailing Ship in Ocean (Bottom Right) */}
            <div className="absolute bottom-10 right-6 pointer-events-none select-none opacity-40 hidden sm:block">
              <svg width="55" height="50" viewBox="0 0 60 50" fill="none" stroke="#7A5A35" strokeWidth="1">
                {/* Hull */}
                <path d="M 10,38 Q 30,44 50,38 L 46,30 L 16,30 Z" fill="#D5C5A8" />
                {/* Masts & Sails */}
                <line x1="24" y1="30" x2="24" y2="8" />
                <path d="M 24,10 Q 32,16 24,24 Z" fill="#F8F4EB" />
                <line x1="38" y1="30" x2="38" y2="12" />
                <path d="M 38,14 Q 44,18 38,26 Z" fill="#F8F4EB" />
                <path d="M 4,40 Q 30,48 56,40" strokeWidth="1.2" />
              </svg>
              <span className="font-serif italic text-[10px] text-[#7A5A35] block text-center mt-1">Indian Ocean</span>
            </div>

            {/* Ocean Historical Inscriptions */}
            <div className="absolute top-10 left-6 pointer-events-none select-none text-[11px] font-serif tracking-[0.25em] text-[#A87D46]/40 uppercase hidden sm:block">
              Gulf of Mannar
            </div>
            <div className="absolute bottom-6 left-6 pointer-events-none select-none text-[11px] font-serif tracking-[0.25em] text-[#A87D46]/50 uppercase">
              Mare Indicum &bull; 07°55′N 80°45′E
            </div>

            {/* SVG MAP */}
            <svg
              viewBox="0 0 450 793"
              className="w-full h-auto max-h-[580px] sm:max-h-[640px] drop-shadow-[0_8px_25px_rgba(168,125,70,0.15)]"
              style={{ overflow: "visible" }}
            >
              <defs>
                {/* Royal Expedition Thread Gradient */}
                <linearGradient id="expeditionRouteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C59B27" />
                  <stop offset="50%" stopColor="#A87D46" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>

                {/* Golden Sunburst Glow Filter */}
                <filter id="goldSunburstGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Concentric Water Ripples Contour around Ceylon */}
              <g className="pointer-events-none">
                {districtsData.map((d) => (
                  <path
                    key={`ripple-outer-${d.id}`}
                    d={d.path}
                    fill="none"
                    stroke="#DCEAE8"
                    strokeWidth="8"
                    strokeOpacity="0.8"
                  />
                ))}
                {districtsData.map((d) => (
                  <path
                    key={`ripple-line-${d.id}`}
                    d={d.path}
                    fill="none"
                    stroke="#C5A880"
                    strokeWidth="0.8"
                    strokeOpacity="0.35"
                    strokeDasharray="4 4"
                  />
                ))}
              </g>

              {/* 2. All 25 Districts rendered with Authentic Terrain Shading */}
              <g className="districts-layer">
                {districtsData.map((d) => {
                  const isHighland = ["kandy", "nuwara-eliya", "matale", "badulla", "kegalle"].includes(d.id);
                  const isCultural = ["anuradhapura", "polonnaruwa"].includes(d.id);
                  const fillColor = isHighland ? "#EDF5EB" : isCultural ? "#FAF4E6" : "#FCFAF5";

                  return (
                    <path
                      key={d.id}
                      d={d.path}
                      id={`district-${d.id}`}
                      fill={fillColor}
                      stroke="#C5A880"
                      strokeWidth="0.8"
                      strokeOpacity="0.75"
                      className="transition-colors duration-500 hover:fill-[#FFF2D6]"
                    >
                      <title>{d.name}</title>
                    </path>
                  );
                })}
              </g>

              {/* 3. Base Expedition Route Track (Golden dotted stitching) */}
              <path
                d={currentRoute.path}
                fill="none"
                stroke="#C5A880"
                strokeWidth="3"
                strokeDasharray="4 6"
                strokeLinecap="round"
                className="pointer-events-none"
                opacity="0.5"
              />

              {/* 4. Active Animated Golden Route Path */}
              <motion.path
                key={`expedition-path-${selectedRouteKey}-${animKey}`}
                d={currentRoute.path}
                fill="none"
                stroke="url(#expeditionRouteGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3.5, ease: [0.25, 1, 0.5, 1] }}
                className="pointer-events-none"
              />

              {/* 5. Gilded Compass Traveler gliding along the Path */}
              <g className="pointer-events-none">
                <circle r="6" fill="#D4AF37" stroke="#4A2E12" strokeWidth="1" filter="url(#goldSunburstGlow)">
                  <animateMotion
                    key={`motion-${selectedRouteKey}-${animKey}`}
                    path={currentRoute.path}
                    dur="8s"
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                </circle>
              </g>

              {/* 6. Illustrated Historical Landmarks at Each Stop */}
              {stops.map((stop, idx) => {
                const isActive = activeStopIndex === idx;
                return (
                  <g
                    key={stop.id}
                    onClick={() => handleStopClick(idx)}
                    className="cursor-pointer group select-none"
                    style={{ transformOrigin: `${stop.x}px ${stop.y}px` }}
                  >
                    {/* Active Sunburst Ripple Glow */}
                    {isActive && (
                      <>
                        <circle
                          cx={stop.x}
                          cy={stop.y}
                          r="28"
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="1.5"
                          className="animate-ping"
                          opacity="0.6"
                        />
                        <circle
                          cx={stop.x}
                          cy={stop.y}
                          r="22"
                          fill="rgba(212,175,55,0.18)"
                          stroke="#C59B27"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                        />
                      </>
                    )}

                    {/* Landmark Vector Illustration */}
                    <g transform={`translate(${stop.x}, ${stop.y}) scale(${isActive ? 1.3 : 1.05})`}>
                      <LandmarkIcon type={stop.type} isActive={isActive} />
                    </g>

                    {/* Landmark Number Seal Badge */}
                    <g transform={`translate(${stop.x - 14}, ${stop.y - 14})`}>
                      <circle
                        cx="0"
                        cy="0"
                        r={isActive ? "7.5" : "6.5"}
                        fill={isActive ? "#D4AF37" : "#FFFFFF"}
                        stroke="#4A2E12"
                        strokeWidth="1"
                        className="transition-transform duration-300"
                      />
                      <text
                        x="0"
                        y="3"
                        textAnchor="middle"
                        fill={isActive ? "#FFFFFF" : "#5A3A1A"}
                        fontSize="7"
                        fontWeight="bold"
                        fontFamily="serif"
                      >
                        {idx + 1}
                      </text>
                    </g>

                    {/* Antique Cartouche Banner Ribbon for Town Name ONLY (Big & Prominent) */}
                    <g className="transition-transform duration-300 group-hover:scale-110">
                      {/* Soft drop shadow */}
                      <rect
                        x={
                          stop.labelOffset.anchor === "start"
                            ? stop.x + stop.labelOffset.dx + 1
                            : stop.labelOffset.anchor === "end"
                            ? stop.x + stop.labelOffset.dx - (stop.town.length * 9.5 + 24) + 1
                            : stop.x - (stop.town.length * 9.5 + 24) / 2 + 1
                        }
                        y={stop.y + stop.labelOffset.dy - 13 + 1.5}
                        width={stop.town.length * 9.5 + 24}
                        height="26"
                        rx="6"
                        fill="rgba(0,0,0,0.14)"
                      />
                      {/* Main Cartouche Pill */}
                      <rect
                        x={
                          stop.labelOffset.anchor === "start"
                            ? stop.x + stop.labelOffset.dx
                            : stop.labelOffset.anchor === "end"
                            ? stop.x + stop.labelOffset.dx - (stop.town.length * 9.5 + 24)
                            : stop.x - (stop.town.length * 9.5 + 24) / 2
                        }
                        y={stop.y + stop.labelOffset.dy - 13}
                        width={stop.town.length * 9.5 + 24}
                        height="26"
                        rx="6"
                        fill={isActive ? "#4A2E12" : "#FFFFFF"}
                        stroke={isActive ? "#D4AF37" : "#A87D46"}
                        strokeWidth={isActive ? "2" : "1.2"}
                        className="transition-colors duration-300"
                      />
                      {/* Big Bold Town Name */}
                      <text
                        x={
                          stop.labelOffset.anchor === "start"
                            ? stop.x + stop.labelOffset.dx + 12
                            : stop.labelOffset.anchor === "end"
                            ? stop.x + stop.labelOffset.dx - 12
                            : stop.x
                        }
                        y={stop.y + stop.labelOffset.dy + 5}
                        textAnchor={stop.labelOffset.anchor}
                        fill={isActive ? "#FFEAA7" : "#381E0C"}
                        fontSize="14.5"
                        fontWeight="800"
                        fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
                        letterSpacing="0.6px"
                        className="pointer-events-none transition-colors duration-300"
                      >
                        {stop.town}
                      </text>
                    </g>

                  </g>
                );
              })}
            </svg>

          </div>

          {/* Stepper Timeline Buttons */}
          <div className="w-full mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#D4AF37]/30">
            {stops.map((stop, idx) => (
              <button
                key={`btn-${stop.id}`}
                onClick={() => handleStopClick(idx)}
                className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-serif font-bold transition-all duration-300 flex items-center gap-1.5 border ${
                  activeStopIndex === idx
                    ? "bg-[#5A3A1A] text-[#FFEAA7] border-[#D4AF37] shadow-sm scale-105"
                    : "bg-white text-charcoal border-gold-border/40 hover:border-[#D4AF37] hover:bg-[#FAF5EA]"
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center text-[10px] font-bold">
                  {idx + 1}
                </span>
                <span>{stop.town}</span>
              </button>
            ))}
          </div>

        </div>

        {/* ============================================================== */}
        {/* RIGHT: ACTIVE LANDMARK STORY & DETAILS CARD (5 Cols) */}
        {/* ============================================================== */}
        <div className="lg:col-span-5 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedRouteKey}-${activeStop.id}`}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-white border-2 border-[#D4AF37]/40 rounded-2xl p-6 sm:p-7 shadow-floating relative overflow-hidden flex flex-col justify-between"
            >
              {/* Antique Corner Accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Image Showcase */}
                <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-6 border border-[#D4AF37]/30 group">
                  <img
                    src={activeStop.image}
                    alt={activeStop.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Stop Stage Badge */}
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-[#071526]/90 backdrop-blur-md border border-gold-primary text-gold-warm font-cinzel text-xs font-bold uppercase tracking-wider rounded">
                    Stop {activeStop.num} &bull; {activeStop.days}
                  </span>

                  {/* Region Badge */}
                  <span className="absolute bottom-3 left-3.5 text-xs font-sans text-white/95 drop-shadow-md flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gold-primary" />
                    <span>{activeStop.region}</span>
                  </span>
                </div>

                {/* Subtitle / Stage */}
                <div className="flex items-center gap-2 mb-1.5">
                  <Landmark className="w-4 h-4 text-[#A87D46]" />
                  <span className="text-xs sm:text-[13px] font-cinzel font-bold text-[#A87D46] tracking-widest uppercase">
                    {activeStop.historicalTag}
                  </span>
                </div>

                {/* Main Stop Title */}
                <h4 className="font-serif text-2xl sm:text-3xl text-indigo-dark font-bold leading-tight mb-2">
                  {activeStop.name}
                </h4>

                <span className="text-xs font-sans font-bold text-[#5A3A1A] block mb-3 italic">
                  "{activeStop.landmarkName}"
                </span>

                {/* Description Narrative */}
                <p className="font-sans text-sm sm:text-base text-charcoal font-normal leading-relaxed mb-5">
                  {activeStop.desc}
                </p>

                {/* Curated Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-gold-border/30 mb-8">
                  <span className="text-xs font-cinzel tracking-wider text-[#A87D46] uppercase block font-bold mb-2">
                    Historical Curated Inclusions
                  </span>
                  {activeStop.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal font-sans font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-dark shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action Button */}
              <a
                href="#contact"
                className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black font-cinzel text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-gold flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                <span>Customize This Route with L'Esprit</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
