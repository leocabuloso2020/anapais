import React from "react";
// import { MadeWithDyad } from "@/components/made-with-dyad"; // Removendo o import
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
// import PortfolioSection from "@/components/PortfolioSection"; // Removido
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
// import BackgroundTexture from "@/components/BackgroundTexture"; // Removendo o import

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative"> {/* 'relative' ainda é útil para outros contextos, mas a textura será no body */}
      {/* <BackgroundTexture /> Removendo o componente */}
      <header className="w-full bg-card shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-bold text-foreground"></div> 
        
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
            {/* Link do Portfólio removido */}
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

      <main className="flex-grow">
        <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <MethodologySection />
        {/* PortfolioSection removido */}
        <div id="faq">
          <FAQSection />
        </div>
      </main>

      <WhatsAppButton />
      <div id="contact">
        <Footer />
      </div>
      {/* <MadeWithDyad /> Removendo o componente */}
    </div>
  );
};

export default Index;