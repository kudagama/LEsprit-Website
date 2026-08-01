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
      <PalapethiDivider className="my-2" variant="1" />
      <PuskolaPotha />
      <PalapethiDivider className="my-2" variant="2" />
      <DualParadise />
      <PalapethiDivider className="my-2" variant="1" />
      <ServicesGrid />
      <PalapethiDivider className="my-2" variant="2" />
      <SustainabilityPanel />
      <PalapethiDivider className="my-2" variant="1" />
      <JourneyBuilder />
      <Footer />
    </main>
  );
}
