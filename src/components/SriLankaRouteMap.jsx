"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Compass, 
  Clock, 
  Car, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Navigation
} from "lucide-react";
import districtsData from "../data/sriLankaDistricts.json";

export const TOUR_ROUTES = {
  "ultimate-10d": {
    id: "ultimate-10d",
    packageId: 1,
    title: "The Ultimate Sri Lankan Journey",
    subtitle: "Culture, Nature, Wildlife & Beach",
    duration: "10 Days / 9 Nights",
    path: "M 48,540 Q 115,450 215,395 Q 210,460 198,518 Q 202,548 218,572 Q 245,625 228,672 Q 160,730 98,755 Q 74,710 64,660 Q 54,600 48,540",
    stops: [
      {
        id: "stop-1",
        num: "01",
        name: "Negombo & Airport",
        label: "Negombo (CMB)",
        days: "Day 01",
        stage: "Arrival & Coastal Unwind",
        region: "Western Coastal Lagoon",
        x: 48,
        y: 540,
        labelOffset: { dx: -14, dy: -2, anchor: "end" },
        image: "/assets/images/packages/sl_tour_1.jpg",
        desc: "VIP airport meet-and-assist with private luxury chauffeur transfer to your coastal retreat. Savor fresh seafood and ocean breezes as you acclimatize in tranquility.",
        highlights: [
          "Private Airport VIP Meet & Fast-Track Assist",
          "Luxury oceanfront suite check-in",
          "Sunset lagoon cocktail & dining"
        ],
        travelTime: "20 mins from Bandaranaike Int. Airport",
        stay: "1 Night at Luxury Beachfront Sanctuary"
      },
      {
        id: "stop-2",
        num: "02",
        name: "Sigiriya & Cultural Triangle",
        label: "Sigiriya",
        days: "Days 02 – 03",
        stage: "Ancient Kingdoms & Sky Citadel",
        region: "Cultural Triangle & Central Plains",
        x: 215,
        y: 395,
        labelOffset: { dx: 14, dy: -4, anchor: "start" },
        image: "/assets/images/pillars/pillar_2.jpg",
        desc: "Climb King Kashyapa's dramatic 5th-century Sigiriya Lion Rock Fortress, wander the Golden Rock Cave Temples of Dambulla, and marvel at UNESCO medieval palaces.",
        highlights: [
          "Sigiriya Lion Rock sunrise private ascent",
          "Dambulla Golden Cave Temple monasteries",
          "Polonnaruwa medieval ruins & elephant gathering"
        ],
        travelTime: "3.5 hrs private chauffeured scenic transfer",
        stay: "2 Nights at Boutique Heritage Lodge"
      },
      {
        id: "stop-3",
        num: "03",
        name: "Kandy Hill Capital",
        label: "Kandy",
        days: "Day 04",
        stage: "Sacred Relics & Royal Valley",
        region: "Central Hill Country Foothills",
        x: 198,
        y: 518,
        labelOffset: { dx: -14, dy: 2, anchor: "end" },
        image: "/assets/images/pillars/pillar_1.jpg",
        desc: "Journey into the misty sanctuary of the last Sri Lankan monarchy. Receive an exclusive blessing at the Sacred Temple of the Tooth Relic amidst evening chanting.",
        highlights: [
          "Private evening Puja ceremony at Temple of the Tooth",
          "Royal Peradeniya Botanical Gardens orchid walk",
          "Curated Kandyan traditional percussion & arts"
        ],
        travelTime: "2.5 hrs via tropical spice gardens",
        stay: "1 Night in Colonial Mountain Estate"
      },
      {
        id: "stop-4",
        num: "04",
        name: "Nuwara Eliya & Tea Country",
        label: "Nuwara Eliya",
        days: "Days 05 – 06",
        stage: "Misty Tea Highlands & Scenic Rails",
        region: "High Mountain Valleys",
        x: 218,
        y: 572,
        labelOffset: { dx: 14, dy: 4, anchor: "start" },
        image: "/assets/images/posters/tea_estate_poster.jpg",
        desc: "Board the world-famous scenic train across emerald ravines and the Nine Arch Bridge. Savor artisanal single-estate Ceylon teas in vintage colonial grandeur.",
        highlights: [
          "First-class scenic highland observation train",
          "Private Ceylon artisanal tea estate tasting",
          "Nine Arch Bridge colonial viaduct trek"
        ],
        travelTime: "2.5 hrs scenic mountain train / drive",
        stay: "2 Nights at Luxury Tea Planter's Bungalow"
      },
      {
        id: "stop-5",
        num: "05",
        name: "Udawalawe National Park",
        label: "Udawalawe",
        days: "Day 07",
        stage: "Wild Plains & Elephant Sanctuary",
        region: "Southern Savanna Basin",
        x: 228,
        y: 672,
        labelOffset: { dx: 14, dy: 4, anchor: "start" },
        image: "/assets/images/posters/wildlife_poster.jpg",
        desc: "Descend to the golden southern plains for open-top 4x4 safaris tracking hundred-strong wild elephant herds, wild leopards, and rich endemic birdlife.",
        highlights: [
          "Private open-top 4x4 safari with senior naturalist",
          "Elephant Transit Home foster care observation",
          "Candlelit savanna dinner under the southern stars"
        ],
        travelTime: "3 hrs via scenic cascading waterfall passes",
        stay: "1 Night at Luxury Safari Glamping Resort"
      },
      {
        id: "stop-6",
        num: "06",
        name: "Galle Historic Fort",
        label: "Galle Fort",
        days: "Day 08",
        stage: "17th-Century Maritime UNESCO Citadel",
        region: "Southern Indian Ocean Coast",
        x: 98,
        y: 755,
        labelOffset: { dx: -14, dy: 14, anchor: "end" },
        image: "/assets/images/packages/sl_tour_2.jpg",
        desc: "Stroll the living ramparts of Galle Fort where Portuguese, Dutch, and British colonial history meets contemporary bohemian art, gems, and fine gastronomy.",
        highlights: [
          "Curated historical walking tour of Galle Fort",
          "Lighthouse ramparts sunset cocktail session",
          "Fine Dutch-colonial fusion dining"
        ],
        travelTime: "2 hrs along southern coastal expressway",
        stay: "1 Night at Historic Boutique Manor"
      },
      {
        id: "stop-7",
        num: "07",
        name: "Bentota Golden Coast",
        label: "Bentota",
        days: "Days 09 – 10",
        stage: "Riviera Sanctuary & VIP Departure",
        region: "Southwestern Riviera",
        x: 64,
        y: 660,
        labelOffset: { dx: -14, dy: -4, anchor: "end" },
        image: "/assets/images/posters/beaches_poster.jpg",
        desc: "Unwind on golden sands, cruise along the tranquil Madu River mangrove archipelago, visit a sea turtle hatchery, and depart with bespoke chauffeur escort.",
        highlights: [
          "Private Madu River mangrove biodiversity boat safari",
          "Kosgoda Sea Turtle Conservation hatchery visit",
          "VIP chauffeur escort to Airport for departure"
        ],
        travelTime: "1.5 hrs direct expressway to Airport",
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
    path: "M 48,540 Q 115,450 215,395 Q 210,460 198,518 Q 202,548 218,572 Q 245,625 228,672 Q 160,730 98,755 Q 60,650 48,540",
    stops: [
      {
        id: "h-stop-1",
        num: "01",
        name: "Negombo & Airport",
        label: "Negombo",
        days: "Day 01",
        stage: "Arrival in Paradise",
        region: "Western Coast",
        x: 48,
        y: 540,
        labelOffset: { dx: -14, dy: -2, anchor: "end" },
        image: "/assets/images/packages/sl_tour_1.jpg",
        desc: "Warm traditional Ayubowan welcome at the airport. Private transfer to your coastal hotel to rest before your grand heritage tour.",
        highlights: [
          "VIP Airport meet-and-greet",
          "Private chauffeur transfer",
          "Coastal relaxation evening"
        ],
        travelTime: "20 mins from Airport",
        stay: "1 Night Beachfront Hotel"
      },
      {
        id: "h-stop-2",
        num: "02",
        name: "Sigiriya & Dambulla",
        label: "Sigiriya",
        days: "Day 02",
        stage: "Cultural Triangle & Rock Fortress",
        region: "Cultural Triangle",
        x: 215,
        y: 395,
        labelOffset: { dx: 14, dy: -4, anchor: "start" },
        image: "/assets/images/pillars/pillar_2.jpg",
        desc: "Ascend the iconic Sigiriya Rock citadel and explore the ancient painted cave temples of Dambulla.",
        highlights: [
          "Sigiriya Lion Rock summit exploration",
          "Dambulla UNESCO Golden Cave Temples",
          "Traditional village catamaran lunch"
        ],
        travelTime: "3.5 hrs scenic drive",
        stay: "1 Night Boutique Resort"
      },
      {
        id: "h-stop-3",
        num: "03",
        name: "Kandy Royal City",
        label: "Kandy",
        days: "Day 03",
        stage: "Sacred Relics & Royal Gardens",
        region: "Central Highlands",
        x: 198,
        y: 518,
        labelOffset: { dx: -14, dy: 2, anchor: "end" },
        image: "/assets/images/pillars/pillar_1.jpg",
        desc: "Visit the revered Temple of the Sacred Tooth Relic, stroll Peradeniya botanical havens, and enjoy evening cultural dances.",
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
        name: "Nuwara Eliya Tea Hills",
        label: "Nuwara Eliya",
        days: "Day 04",
        stage: "Tea Country & Highland Train",
        region: "Central Tea Country",
        x: 218,
        y: 572,
        labelOffset: { dx: 14, dy: 4, anchor: "start" },
        image: "/assets/images/posters/tea_estate_poster.jpg",
        desc: "Scenic highland train through misty tea fields, fresh mountain waterfalls, and private factory tea tasting.",
        highlights: [
          "Scenic hill country train ride",
          "Ceylon tea plantation & tasting session",
          "Gregory Lake evening stroll"
        ],
        travelTime: "2.5 hrs train journey",
        stay: "1 Night Colonial Country Club"
      },
      {
        id: "h-stop-5",
        num: "05",
        name: "Udawalawe Safari",
        label: "Udawalawe",
        days: "Day 05",
        stage: "Wild Plains & Elephant Safari",
        region: "Southern Plains",
        x: 228,
        y: 672,
        labelOffset: { dx: 14, dy: 4, anchor: "start" },
        image: "/assets/images/posters/wildlife_poster.jpg",
        desc: "Unforgettable open jeep safari witnessing wild elephant herds in their native sanctuary.",
        highlights: [
          "Udawalawe 4x4 open safari",
          "Elephant Transit Home rehabilitation visit",
          "Bird watching and reservoir scenery"
        ],
        travelTime: "3 hrs descent to plains",
        stay: "1 Night Safari Lodge"
      },
      {
        id: "h-stop-6",
        num: "06",
        name: "Galle Fort & Departure",
        label: "Galle & Airport",
        days: "Days 06 – 07",
        stage: "Colonial Citadel & Farewell",
        region: "Southern Coast to Airport",
        x: 98,
        y: 755,
        labelOffset: { dx: -14, dy: 14, anchor: "end" },
        image: "/assets/images/packages/sl_tour_2.jpg",
        desc: "Explore the UNESCO Galle Fort ramparts and maritime streets before your comfortable expressway transfer to the airport.",
        highlights: [
          "Galle Fort lighthouse rampart walk",
          "Artisan souvenir & gem shopping",
          "VIP private transfer to Airport"
        ],
        travelTime: "2.5 hrs express to Airport",
        stay: "1 Night Historic Fort Villa / Departure"
      }
    ]
  }
};

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
    }, 4200);
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

  const handleReplay = () => {
    setActiveStopIndex(0);
    setAnimKey(prev => prev + 1);
    restartAutoPlay();
  };

  const handleNextStop = () => {
    setActiveStopIndex(prev => (prev < stops.length - 1 ? prev + 1 : 0));
    restartAutoPlay();
  };

  const handlePrevStop = () => {
    setActiveStopIndex(prev => (prev > 0 ? prev - 1 : stops.length - 1));
    restartAutoPlay();
  };

  const handleStopClick = (idx) => {
    setActiveStopIndex(idx);
    restartAutoPlay();
  };

  return (
    <div className="w-full bg-[#071526] rounded-3xl border border-[#D4AF37]/35 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] p-4 sm:p-7 md:p-10 text-white relative overflow-hidden backdrop-blur-md">
      
      {/* Background Ambience & Motifs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0E3A2F]/20 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Top Controls Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-7 border-b border-[#D4AF37]/20 relative z-10">
        <div>
          <div className="flex items-center gap-2.5 text-[#D4AF37] text-xs sm:text-sm font-cinzel font-bold tracking-[0.2em] uppercase mb-1.5">
            <Compass className="w-4 h-4 text-[#D4AF37] animate-spin-slow" />
            <span>Interactive Expedition Visualizer</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
            Animated <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFF3D0] to-[#A87D46] bg-clip-text text-transparent">Sri Lanka Journey Map</span>
          </h3>
        </div>

        {/* Package Switcher Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => handlePackageChange("ultimate-10d")}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-cinzel font-bold tracking-wider transition-all duration-300 flex items-center gap-2 border ${
              selectedRouteKey === "ultimate-10d"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#A87D46] text-[#071526] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                : "bg-white/5 text-white/80 border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/10"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Ultimate Journey (10 Days)</span>
          </button>

          <button
            onClick={() => handlePackageChange("highlights-7d")}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-cinzel font-bold tracking-wider transition-all duration-300 flex items-center gap-2 border ${
              selectedRouteKey === "highlights-7d"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#A87D46] text-[#071526] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                : "bg-white/5 text-white/80 border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/10"
            }`}
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Sri Lanka Highlights (7 Days)</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Vector Map on Left, Active Stop Details on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 items-center relative z-10">
        
        {/* ============================================================== */}
        {/* LEFT / CENTER: THE LUXURY VECTOR MAP (7 Cols on desktop) */}
        {/* ============================================================== */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          <div className="w-full relative bg-[#040C16] border border-[#D4AF37]/25 rounded-2xl p-4 sm:p-6 shadow-inner overflow-hidden flex items-center justify-center">
            
            {/* Nautical Grid & Ocean Label */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
            
            {/* Compass Rose Ornament */}
            <div className="absolute top-4 right-4 pointer-events-none select-none opacity-70 flex flex-col items-center">
              <svg width="60" height="60" viewBox="0 0 100 100" className="text-[#D4AF37]">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                {/* 4 Points */}
                <polygon points="50,6 55,45 50,50 45,45" fill="currentColor" />
                <polygon points="50,94 55,55 50,50 45,55" fill="currentColor" opacity="0.5" />
                <polygon points="94,50 55,55 50,50 55,45" fill="currentColor" opacity="0.7" />
                <polygon points="6,50 45,55 50,50 45,45" fill="currentColor" opacity="0.5" />
                <text x="50" y="2" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="bold" fontFamily="serif">N</text>
              </svg>
              <span className="font-cinzel text-[10px] text-[#D4AF37]/80 tracking-widest uppercase mt-1">L'Esprit Chart</span>
            </div>

            {/* Ocean Geographic Typographies */}
            <div className="absolute bottom-6 left-6 pointer-events-none select-none text-[11px] font-serif tracking-[0.3em] text-[#D4AF37]/35 uppercase">
              Indian Ocean &bull; 07°55′N 80°45′E
            </div>
            <div className="absolute top-12 left-6 pointer-events-none select-none text-[10px] font-serif tracking-[0.25em] text-[#D4AF37]/25 uppercase hidden sm:block">
              Gulf of Mannar
            </div>
            <div className="absolute bottom-16 right-6 pointer-events-none select-none text-[10px] font-serif tracking-[0.25em] text-[#D4AF37]/25 uppercase hidden sm:block">
              Bay of Bengal
            </div>

            {/* SVG MAP */}
            <svg
              viewBox="0 0 450 793"
              className="w-full h-auto max-h-[580px] sm:max-h-[640px] drop-shadow-[0_0_35px_rgba(212,175,55,0.18)]"
              style={{ overflow: "visible" }}
            >
              <defs>
                {/* Golden Laser Gradient */}
                <linearGradient id="goldLaserGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF3D0" />
                  <stop offset="35%" stopColor="#D4AF37" />
                  <stop offset="70%" stopColor="#A87D46" />
                  <stop offset="100%" stopColor="#FFDF73" />
                </linearGradient>

                {/* Laser Glow Filter */}
                <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Intense Node Glow */}
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. All Sri Lanka Administrative Districts */}
              <g className="districts-layer">
                {districtsData.map((d) => (
                  <path
                    key={d.id}
                    d={d.path}
                    id={`district-${d.id}`}
                    fill="#0B1B2B"
                    stroke="#D4AF37"
                    strokeWidth="0.8"
                    strokeOpacity="0.22"
                    className="transition-colors duration-500 hover:fill-[#12273D] hover:stroke-opacity-60"
                  >
                    <title>{d.name}</title>
                  </path>
                ))}
              </g>

              {/* 2. Outer Island Coastal Glow Contour */}
              <g className="pointer-events-none">
                {districtsData.map((d) => (
                  <path
                    key={`outer-${d.id}`}
                    d={d.path}
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeOpacity="0.35"
                    filter="url(#routeGlow)"
                  />
                ))}
              </g>

              {/* 3. Base Route Guide Path (Dashed subtle track) */}
              <path
                d={currentRoute.path}
                fill="none"
                stroke="rgba(212, 175, 55, 0.25)"
                strokeWidth="3"
                strokeDasharray="6 6"
                strokeLinecap="round"
                className="pointer-events-none"
              />

              {/* 4. Active Animated Golden Laser Route */}
              <motion.path
                key={`laser-route-${selectedRouteKey}-${animKey}`}
                d={currentRoute.path}
                fill="none"
                stroke="url(#goldLaserGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#routeGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3.2, ease: [0.25, 1, 0.5, 1] }}
                className="pointer-events-none"
              />

              {/* 5. Traveling Luminous Beacon along the Path */}
              <circle r="5" fill="#FFF3D0" filter="url(#nodeGlow)" className="pointer-events-none">
                <animateMotion
                  key={`motion-${selectedRouteKey}-${animKey}`}
                  path={currentRoute.path}
                  dur="7s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </circle>

              {/* 6. Waypoint Markers (Stops) */}
              {stops.map((stop, idx) => {
                const isActive = activeStopIndex === idx;
                return (
                  <g
                    key={stop.id}
                    onClick={() => handleStopClick(idx)}
                    className="cursor-pointer group"
                    style={{ transformOrigin: `${stop.x}px ${stop.y}px` }}
                  >
                    {/* Animated Pulsing Radar Waves on Active Stop */}
                    {isActive && (
                      <>
                        <circle
                          cx={stop.x}
                          cy={stop.y}
                          r="18"
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="1.5"
                          className="animate-ping"
                          opacity="0.75"
                        />
                        <circle
                          cx={stop.x}
                          cy={stop.y}
                          r="26"
                          fill="none"
                          stroke="#FFF3D0"
                          strokeWidth="1"
                          className="animate-pulse"
                          opacity="0.4"
                        />
                      </>
                    )}

                    {/* Outer Glowing Halo */}
                    <circle
                      cx={stop.x}
                      cy={stop.y}
                      r={isActive ? "13" : "9"}
                      fill={isActive ? "#D4AF37" : "#071526"}
                      stroke="#D4AF37"
                      strokeWidth={isActive ? "2.5" : "1.8"}
                      filter={isActive ? "url(#nodeGlow)" : undefined}
                      className="transition-all duration-300 group-hover:scale-125"
                    />

                    {/* Stop Number Inside Pin */}
                    <text
                      x={stop.x}
                      y={stop.y + 4}
                      textAnchor="middle"
                      fill={isActive ? "#071526" : "#D4AF37"}
                      fontSize={isActive ? "10" : "8"}
                      fontWeight="bold"
                      fontFamily="sans-serif"
                      className="pointer-events-none select-none transition-all duration-300"
                    >
                      {idx + 1}
                    </text>

                    {/* Elegant Stop Label Chip on Map */}
                    <g className="transition-transform duration-300 group-hover:scale-105">
                      <rect
                        x={
                          stop.labelOffset.anchor === "start"
                            ? stop.x + stop.labelOffset.dx
                            : stop.labelOffset.anchor === "end"
                            ? stop.x + stop.labelOffset.dx - (stop.label.length * 6.5 + 16)
                            : stop.x - (stop.label.length * 6.5 + 16) / 2
                        }
                        y={stop.y + stop.labelOffset.dy - 11}
                        width={stop.label.length * 6.5 + 16}
                        height="20"
                        rx="4"
                        fill={isActive ? "#D4AF37" : "rgba(7, 21, 38, 0.85)"}
                        stroke={isActive ? "#FFF3D0" : "rgba(212, 175, 55, 0.4)"}
                        strokeWidth="1"
                        className="transition-colors duration-300"
                      />
                      <text
                        x={
                          stop.labelOffset.anchor === "start"
                            ? stop.x + stop.labelOffset.dx + 8
                            : stop.labelOffset.anchor === "end"
                            ? stop.x + stop.labelOffset.dx - 8
                            : stop.x
                        }
                        y={stop.y + stop.labelOffset.dy + 3}
                        textAnchor={stop.labelOffset.anchor}
                        fill={isActive ? "#071526" : "#FFF3D0"}
                        fontSize="9.5"
                        fontWeight={isActive ? "700" : "600"}
                        fontFamily="sans-serif"
                        letterSpacing="0.4px"
                        className="pointer-events-none select-none transition-colors duration-300"
                      >
                        {stop.label}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* Bottom Floating Playback Toolbar */}
            <div className="absolute bottom-4 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center gap-2.5 px-4 py-2 bg-[#071526]/90 backdrop-blur-md border border-[#D4AF37]/40 rounded-full shadow-2xl z-20">
              <button
                onClick={handlePrevStop}
                title="Previous Stop"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors text-white/80 hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 px-3 py-1 bg-black/40 border border-[#D4AF37]/30 rounded-full text-xs font-cinzel text-white/90 select-none">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="hidden sm:inline">Stop {activeStop.num} of {stops.length} &bull;</span>
                <span className="font-bold text-[#D4AF37]">{activeStop.label}</span>
              </div>

              <button
                onClick={handleNextStop}
                title="Next Stop"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors text-white/80 hover:text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="w-[1px] h-4 bg-white/20 mx-0.5" />

              <button
                onClick={handleReplay}
                title="Re-animate Path"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors text-[#D4AF37]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Stepper Timeline Buttons */}
          <div className="w-full mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#D4AF37]/30">
            {stops.map((stop, idx) => (
              <button
                key={`btn-${stop.id}`}
                onClick={() => handleStopClick(idx)}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all duration-300 flex items-center gap-1.5 border ${
                  activeStopIndex === idx
                    ? "bg-[#D4AF37] text-[#071526] font-bold border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                    : "bg-[#0B1B2B] text-white/70 border-white/10 hover:border-[#D4AF37]/40 hover:text-white"
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-black/20 flex items-center justify-center text-[10px] font-bold">
                  {idx + 1}
                </span>
                <span>{stop.label}</span>
              </button>
            ))}
          </div>

        </div>

        {/* ============================================================== */}
        {/* RIGHT: ACTIVE STOP HIGHLIGHT CARD (5 Cols on desktop) */}
        {/* ============================================================== */}
        <div className="lg:col-span-5 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedRouteKey}-${activeStop.id}`}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-gradient-to-b from-[#0B1B2B] to-[#071526] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              {/* Card Gold Trim Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Image Showcase */}
                <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-6 border border-[#D4AF37]/30 group">
                  <img
                    src={activeStop.image}
                    alt={activeStop.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071526] via-[#071526]/30 to-transparent" />
                  
                  {/* Stop Stage Badge */}
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-[#071526]/90 backdrop-blur-md border border-[#D4AF37] text-[#D4AF37] font-cinzel text-xs font-bold uppercase tracking-wider rounded">
                    Stop {activeStop.num} &bull; {activeStop.days}
                  </span>

                  {/* Region Badge */}
                  <span className="absolute bottom-3 left-3.5 text-xs font-sans text-white/90 drop-shadow-md flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{activeStop.region}</span>
                  </span>
                </div>

                {/* Subtitle / Stage */}
                <span className="text-xs sm:text-[13px] font-cinzel font-bold text-[#D4AF37] tracking-widest uppercase block mb-1">
                  {activeStop.stage}
                </span>

                {/* Main Stop Title */}
                <h4 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-tight mb-3">
                  {activeStop.name}
                </h4>

                {/* Description Narrative */}
                <p className="font-sans text-sm sm:text-base text-white/80 font-normal leading-relaxed mb-5">
                  {activeStop.desc}
                </p>

                {/* Curated Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-cinzel tracking-wider text-[#D4AF37] uppercase block font-bold mb-2">
                    Curated Key Inclusions
                  </span>
                  {activeStop.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Logistics & Sanctuary Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-black/40 border border-[#D4AF37]/20 rounded-xl mb-6 text-xs text-white/75">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{activeStop.travelTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{activeStop.stay}</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Action Button */}
              <a
                href="#contact"
                className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#FFF3D0] to-[#A87D46] text-[#071526] font-cinzel text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-gold flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
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

