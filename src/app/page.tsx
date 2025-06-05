import HeroSection from '../components/HeroSection';
import ConsultoriaSection from '../components/ConsultoriaSection';
import TouristSection from '../components/TouristSection';
import DestinosSection from '../components/DestinosSection';
import PacotesSection from '../components/PacotesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConsultoriaSection />
      <TouristSection />
      <DestinosSection />
      <PacotesSection />
      <Footer />
    </>
  );
}