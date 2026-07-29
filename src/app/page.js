import Header from "../components/Header";
import Hero from "../components/Hero";
import PuskolaPotha from "../components/PuskolaPotha";
import DualParadise from "../components/DualParadise";
import ServicesGrid from "../components/ServicesGrid";
import SustainabilityPanel from "../components/SustainabilityPanel";
import JourneyBuilder from "../components/JourneyBuilder";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory-sacred">
      <Header />
      <Hero />
      <PuskolaPotha />
      <DualParadise />
      <ServicesGrid />
      <SustainabilityPanel />
      <JourneyBuilder />
      <Footer />
    </main>
  );
}
