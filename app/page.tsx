import { LangProvider } from "@/components/LangProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import TechStackRow from "@/components/TechStackRow";
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
        <MetricsSection />
        <TechStackRow />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <CTASection />
        <Footer />
      </main>
    </LangProvider>
  );
}
