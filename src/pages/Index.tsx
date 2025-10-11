import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import MethodologyStepsSection from "@/components/MethodologyStepsSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo"; // Importando o componente Logo
import { Instagram, Facebook } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="h-screen w-full max-w-full overflow-y-scroll scroll-snap-type-y-mandatory hide-scrollbar" style={{ scrollPaddingTop: '72px' }}>
      <header className="fixed top-0 left-0 right-0 w-full bg-card shadow-sm py-4 px-6 flex items-center justify-between z-50">
        {/* Logo */}
        <div className="flex-shrink-0"> {/* Garante que o logo não encolha */}
          <a href="/" className="flex items-center">
            <Logo className="h-10 w-auto" /> {/* Usando o componente Logo com tamanho ajustado para o cabeçalho */}
          </a>
        </div>
        
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex flex-grow justify-center"> {/* flex-grow para ocupar espaço e justify-center para centralizar */}
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
        <div className="hidden md:flex items-center space-x-4 flex-shrink-0"> {/* Garante que os ícones sociais não encolham */}
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
      <div className="scroll-snap-align-start">
        <MethodologyStepsSection />
      </div>
      <div id="contact" className="scroll-snap-align-start">
        <Footer />
      </div>

      {/* WhatsAppButton removido daqui */}
    </div>
  );
};

export default Index;