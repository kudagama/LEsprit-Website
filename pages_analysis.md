# LEsprit Website - Pages & Project Architecture Analysis

This document provides a detailed analysis of the pages, routing structure, components, and the theme configuration of the **LEsprit Website** (a premium, luxury travel brand website for Sri Lanka & the Maldives).

---

## 📂 1. Routing & Page Directory Structure

The project uses the **Next.js App Router** (located under `src/app`). Below are the primary page routes defined in the workspace:

### 🏠 A. Home Page (`/`)
* **File:** [src/app/page.js](file:///d:/Projects/LEsprit-Website/src/app/page.js)
* **Description:** The landing page that presents the primary brand philosophy, destination previews, services, sustainability initiatives, and an interactive journey planner.
* **Component Composition:**
  1. **`Header`**: Navigation controls, audio toggles, branding.
  2. **`Hero`**: Immersive canvas-based 3D banner.
  3. **`PuskolaPotha`**: Interactive palm-leaf manuscript storytelling element representing cultural heritage.
  4. **`DualParadise`**: Highlights the twin luxury destinations: Sri Lanka and Maldives.
  5. **`ServicesGrid`**: Showcases premium service modules.
  6. **`SustainabilityPanel`**: Details eco-conscious and conservation initiatives.
  7. **`JourneyBuilder`**: Interactive custom itinerary builder wizard.
  8. **`Footer`**: Contact coordinates, business licenses, and official badges.

---

### 🗺️ B. Destination Detail Page (`/destinations/[slug]`)
* **File:** [src/app/destinations/[slug]/page.js](file:///d:/Projects/LEsprit-Website/src/app/destinations/[slug]/page.js)
* **Type:** Dynamic Route (`generateStaticParams` pre-renders pages)
* **Supported Destinations:**
  1. **Sri Lanka** (`/destinations/sri-lanka`): Timeless Heritage & Wild Sanctuary.
  2. **Maldives** (`/destinations/maldives`): The Ultimate Ocean Sanctuary.
* **Page Layout & Sections:**
  * **Dynamic Hero Header**: Loads custom cover images, title, and tagline based on `[slug]`.
  * **Destination Overview**: Detailed narrative of the selected region.
  * **Curated 5-Star Highlights**: Bullet list of elite experiences (e.g. VIP safari trackers, private yacht charters, archaeological access).
  * **Bespoke Itinerary Timeline**: Step-by-step sample day plan with dot indicators.
  * **Atelier Concierge Sidebar**: A direct call-to-action (CTA) widget that prompts users to inquire and customize their trip.

---

### 💼 C. Service Detail Page (`/services/[slug]`)
* **File:** [src/app/services/[slug]/page.js](file:///d:/Projects/LEsprit-Website/src/app/services/[slug]/page.js)
* **Type:** Dynamic Route (`generateStaticParams` pre-renders pages)
* **Supported Services:**
  1. **Travel Solutions** (`/services/travel-solutions`): FIT (Free Independent Travelers), GIT (Group Inclusive Tours) & Corporate MICE.
  2. **Signature Experiences** (`/services/signature-experiences`): Adventure, trekking, conservation voluntourism, birdwatching, and wellness.
  3. **Premium Fleet & Aviation** (`/services/premium-fleet`): Luxury ground transport, micro-vans, and domestic helicopter/floatplane transfers.
* **Page Layout & Sections:**
  * **Service Hero Banner**: Introduction to the logistics / experience module.
  * **Service Capabilities**: Broad description of the solutions.
  * **Key Solutions & Modules Grid**: Individual feature cards breaking down specific offerings (e.g. FIT, GIT, MICE for Travel Solutions; trekking, birdwatching for Signature Experiences; luxury sedans, helicopter charters for Premium Fleet).
  * **Logistics Concierge Sidebar**: Action card to inquire directly with transport & travel designers.

---

## 🎨 2. Design System & Style Guide

The visual language of the site is configured in [tailwind.config.js](file:///d:/Projects/LEsprit-Website/tailwind.config.js). It uses a heritage-infused luxury palette:

### Color Palette

| Token Name | Hex Code | Visual Application |
| :--- | :--- | :--- |
| **`gold.primary`** | `#D4AF37` | Core branding, accents, special button gradients. |
| **`gold.warm`** | `#C5A880` | Subtle text labels, subtitles, and highlights. |
| **`gold.dark`** | `#A87D46` | Borders, shadows, secondary gradients. |
| **`emerald.dark`** | `#0D2818` | Main branding/luxury containers (represents rich wilderness). |
| **`emerald.medium`** | `#16382B` | Hover states, secondary background accents. |
| **`indigo.dark`** | `#0B1B2B` | Text contrast headers, deep premium background cards. |
| **`indigo.deep`** | `#071526` | Hero backgrounds, dark sections (night-sky luxury). |
| **`ivory.sacred`** | `#FAF7F2` | Primary page body background (mimics temple floors/sand). |
| **`sand.fine`** | `#F5F2EB` | Alternative section background panels. |
| **`paper.parchment`** | `#F8F4EC` | Card container backgrounds. |
| **`charcoal`** | `#1A1A1A` | High readability body text. |

### Typography

* **Serif / Cormorant**: Playfair & Cormorant for elegant, high-luxury headings.
* **Sans**: Montserrat for legible, modern, low-fatigue body text.
* **Cinzel**: Used for classical, high-society uppercase headers and navigation labels.
* **Decorative**: Cinzel Decorative used for stylistic emphasis.

---

## ⚙️ 3. Premium Interactive Components

Inside [src/components/](file:///d:/Projects/LEsprit-Website/src/components), the site implements interactive elements:

1. **`Hero3DCanvas.jsx`**: Incorporates React Three Fiber (`@react-three/fiber` / `three`) for 3D elements.
2. **`PuskolaPotha.jsx`**: Features interactive flip or scroll actions representing Sri Lankan palm-leaf books.
3. **`JourneyBuilder.jsx`**: Multi-stage luxury form that collects visitor choices dynamically.
4. **`AudioSoundscape.jsx`**: Synthesizes background audio cues (e.g. tropical nature sounds, waves) to enhance the immersive experience.

---

*Prepared by Antigravity AI Code Assistant.*
