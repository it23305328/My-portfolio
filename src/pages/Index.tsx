import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WebDevelopmentSection from "@/components/WebDevelopmentSection";
import DatabasesSection from "@/components/DatabasesSection";
import VersionControlSection from "@/components/VersionControlSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <WebDevelopmentSection />
      <DatabasesSection />
      <VersionControlSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
