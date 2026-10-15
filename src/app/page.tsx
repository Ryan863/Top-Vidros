import { Navbar } from '@/components/Navbar';
import { SocialRail } from '@/components/SocialRail';
import { HeroSection } from '@/components/HeroSection';
import { ServicesGrid } from '@/components/ServicesGrid';
import { TechnicalPillars } from '@/components/TechnicalPillars';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { LocationAndContact } from '@/components/LocationAndContact';
import { Footer } from '@/components/Footer';
import { FloatingWhatsAppCTA } from '@/components/FloatingWhatsAppCTA';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070708] text-white selection:bg-rose-600/40 selection:text-white">
      {/* Suspended Frosted Glass Navbar */}
      <Navbar />

      {/* Left Social Vertical Rail */}
      <SocialRail />

      {/* Full Viewport 100dvh Hero with PC/Mobile Image Switch */}
      <HeroSection />

      {/* Technical Glassmorphism Services Grid with /servicos/ assets */}
      <ServicesGrid />

      {/* 4 Technical Pillars with ABNT Standards */}
      <TechnicalPillars />

      {/* Google 5.0 Star Verified Reviews */}
      <TestimonialsSection />

      {/* Location with Interactive Map & Direct GPS Navigation */}
      <LocationAndContact />

      {/* Editorial Luxury Footer */}
      <Footer />

      {/* Floating Fast Conversion WhatsApp CTA */}
      <FloatingWhatsAppCTA />
    </main>
  );
}
