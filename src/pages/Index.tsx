import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Index: React.FC = () => {
  return (
    <div className="h-screen overflow-y-scroll scroll-snap-type-y-mandatory">
      <header className="fixed top-0 left-0 right-0 w-full bg-card shadow-sm py-4 px-6 flex justify-between items-center z-50">
        <div className="text-2xl font-bold text-foreground">
          <a href="/" className="flex items-center">
            {/* Usando uma tag img direta para um logo menor no cabeçalho */}
            <img src="/logo.svg" alt="Ana Pais Arquitetura Logo" className="h-10 w-auto filter invert" />
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
              <a href="#faq" className="text-muted-foreground hover:text-brand-color font-medium transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="text-muted-foreground hover:text-brand-color font-medium transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </header>

      {/* Seções de conteúdo principal, cada uma se encaixando na tela cheia */}
      {/* O pt-[72px] na primeira seção compensa a altura do cabeçalho fixo */}
      <div className="h-screen scroll-snap-align-start pt-[72px]">
        <HeroSection />
      </div>
      <div id="services" className="h-screen scroll-snap-align-start">
        <ServicesSection />
      </div>
      <div id="about" className="h-screen scroll-snap-align-start">
        <AboutSection />
      </div>
      <div className="h-screen scroll-snap-align-start"> {/* MethodologySection */}
        <MethodologySection />
      </div>
      <div id="faq" className="h-screen scroll-snap-align-start">
        <FAQSection />
      </div>
      <div id="contact" className="h-screen scroll-snap-align-start">
        <Footer />
      </div>

      <WhatsAppButton /> {/* Este permanece fixo e fora do fluxo de scroll-snap */}
    </div>
  );
};

export default Index;