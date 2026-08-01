import Header from "../components/Header";
import Hero from "../components/Hero";
import PuskolaPotha from "../components/PuskolaPotha";
import DualParadise from "../components/DualParadise";
import ServicesGrid from "../components/ServicesGrid";
import SustainabilityPanel from "../components/SustainabilityPanel";
import JourneyBuilder from "../components/JourneyBuilder";
import Footer from "../components/Footer";
import PalapethiDivider from "../components/PalapethiDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory-sacred overflow-x-hidden">
      <Header />
      <Hero />
      <PalapethiDivider className="my-8" />
      <PuskolaPotha />
      <PalapethiDivider className="my-8" />
      <DualParadise />
      <PalapethiDivider className="my-8" />
      <ServicesGrid />
      <PalapethiDivider className="my-8" />
      <SustainabilityPanel />
      <PalapethiDivider className="my-8" />
      <JourneyBuilder />
      <Footer />
    </main>
  );
}
