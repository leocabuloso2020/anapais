import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import PortfolioSection from "@/components/PortfolioSection";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo"; // Importando o novo componente Logo

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-bold text-gray-900">
          <Logo /> {/* Usando o componente Logo aqui */}
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-gray-700 hover:text-brand-green font-medium transition-colors">
                Sobre
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-700 hover:text-brand-green font-medium transition-colors">
                Serviços
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-gray-700 hover:text-brand-green font-medium transition-colors">
                Portfólio
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-700 hover:text-brand-green font-medium transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-brand-green font-medium transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile menu toggle could go here */}
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
        <div id="portfolio">
          <PortfolioSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
      </main>

      <WhatsAppButton />
      <div id="contact">
        <Footer />
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;