import { LangProvider } from "@/components/LangProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <main>
        <Navbar />
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <CTASection />
        <Footer />
      </main>
    </LangProvider>
  );
}
