import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import MethodologyStepsSection from "@/components/MethodologyStepsSection"; // Importando o novo componente
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { Instagram, Facebook } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="h-screen overflow-y-scroll scroll-snap-type-y-mandatory" style={{ scrollPaddingTop: '72px' }}>
      <header className="fixed top-0 left-0 right-0 w-full bg-card shadow-sm py-4 px-6 flex justify-between items-center z-50">
        <div className="text-2xl font-bold text-foreground">
          <a href="/" className="flex items-center">
            {/* Texto "Ana Pais Arquitetura" removido daqui */}
          </a>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-muted-foreground hover:text-brand-color font-medium transition-colors">
                Sobre
              </a>
            </li>
            <li>
              <a href="#services" className="text-muted-foreground hover:text-brand-color font-medium transition-colors">
                Serviços
              </a>
            </li>
            <li>
              <a href="#contact" className="text-muted-foreground hover:text-brand-color font-medium transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Redes Sociais no cabeçalho para desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://instagram.com/anapaisarquitetura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-brand-color transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://facebook.com/anapaisarquitetura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-brand-color transition-colors"
          >
            <Facebook className="h-6 w-6" />
          </a>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </header>

      {/* Seções de conteúdo principal */}
      <div className="scroll-snap-align-start">
        <HeroSection />
      </div>
      <div id="services" className="scroll-snap-align-start">
        <ServicesSection />
      </div>
      <div id="about" className="scroll-snap-align-start">
        <AboutSection />
      </div>
      <div className="scroll-snap-align-start">
        <MethodologySection />
      </div>
      <div className="scroll-snap-align-start"> {/* Nova seção para os passos da metodologia */}
        <MethodologyStepsSection />
      </div>
      <div id="contact" className="scroll-snap-align-start">
        <Footer />
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default Index;