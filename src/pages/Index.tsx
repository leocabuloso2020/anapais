import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import MethodologyStepsSection from "@/components/MethodologyStepsSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { Instagram, Facebook } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="w-full max-w-full"> {/* Simplificado para w-full max-w-full */}
      <header className="fixed top-0 left-0 right-0 w-full bg-card shadow-sm py-4 flex items-center justify-between z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Placeholder vazio para equilibrar o layout no desktop */}
          <div className="hidden md:block w-24"></div>
          
          {/* Navigation Links (Desktop) - Centralizado */}
          <nav className="hidden md:flex flex-grow justify-center">
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

          {/* Redes Sociais no cabeçalho para desktop - Alinhado à direita */}
          <div className="hidden md:flex items-center space-x-4 w-24 justify-end">
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
        </div>
      </header>

      {/* Seções de conteúdo principal */}
      <div> {/* Removido scroll-snap-align-start */}
        <HeroSection />
      </div>
      <div id="services"> {/* Removido scroll-snap-align-start */}
        <ServicesSection />
      </div>
      <div id="about"> {/* Removido scroll-snap-align-start */}
        <AboutSection />
      </div>
      <div> {/* Removido scroll-snap-align-start */}
        <MethodologySection />
      </div>
      <div> {/* Removido scroll-snap-align-start */}
        <MethodologyStepsSection />
      </div>
      <div id="contact"> {/* Removido scroll-snap-align-start */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;