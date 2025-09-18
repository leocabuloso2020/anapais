import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo"; // Importando o componente Logo

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] bg-gray-100 flex items-center justify-center text-center overflow-hidden">
      {/* Imagem de fundo - placeholder */}
      <img
        src="https://images.unsplash.com/photo-1583847268964-dd287705ba78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Ambiente arquitetônico elegante"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center"> {/* Adicionado flex-col e items-center */}
        <div className="mb-8 animate-fade-in-up"> {/* Adicionado margem inferior para espaçamento */}
          <Logo />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 animate-fade-in-up">
          Ame sua casa. Transforme seu ambiente em um refúgio.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up delay-100">
          Criamos espaços que refletem sua identidade, promovem bem-estar e
          contam sua história.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
          <Button
            className="px-8 py-6 text-lg bg-brand-color hover:bg-brand-color-600 text-white shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://wa.me/SEUNUMERO", "_blank")}
          >
            Quero transformar meu ambiente
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 text-lg border-brand-color text-brand-color hover:bg-brand-color/10 shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://wa.me/SEUNUMERO", "_blank")}
          >
            Fale agora no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;