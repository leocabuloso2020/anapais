import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo"; // Importando o componente Logo

const HeroSection: React.FC = () => {
  // Substitua '5531999999999' pelo seu número de WhatsApp (código do país + DDD + número, sem espaços ou hífens)
  const whatsappNumber = "5531999999999"; 

  return (
    <section className="relative h-[70vh] md:h-[80vh] bg-background flex items-center justify-center text-center overflow-hidden">
      {/* Imagem de fundo com efeito de zoom e movimento */}
      <img
        src="/bg.jpg" // Usando a nova imagem bg.jpg
        alt="Ambiente arquitetônico elegante"
        className="absolute inset-0 w-full h-full object-cover transform scale-105 animate-[background-zoom-pan_30s_ease-in-out_infinite_alternate]" 
      />
      {/* Overlay com opacidade ajustada para tornar a imagem de fundo mais transparente */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div> {/* Opacidade do overlay ajustada para 50% */}

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center"> 
        <div className="mb-8 animate-fade-in-up"> 
          <Logo />
        </div>
        <h1 className="text-4xl md:text-6xl font-light text-foreground leading-tight mb-4 animate-fade-in-up">
          Ame sua casa. Transforme seu ambiente em um refúgio.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up delay-100">
          Criamos espaços que refletem sua identidade, promovem bem-estar e
          contam sua história.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
          <Button
            className="px-8 py-6 text-lg bg-brand-color hover:bg-brand-color-600 text-white shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}`, "_blank")}
          >
            Quero transformar meu ambiente
          </Button>
          {/* Botão "Fale agora no WhatsApp" removido */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;