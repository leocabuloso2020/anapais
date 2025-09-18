import React from "react";
import { Lightbulb, Handshake, CheckCircle, Sparkles } from "lucide-react";

interface StepCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md border border-border">
    <Icon className="h-12 w-12 text-brand-color mb-4" />
    <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const MethodologySection: React.FC = () => {
  const steps = [
    {
      icon: Handshake,
      title: "Ouvir e Conectar",
      description:
        "Começamos entendendo seu estilo de vida, desejos e necessidades para criar um projeto verdadeiramente seu.",
    },
    {
      icon: Lightbulb,
      title: "Traduzir Identidade",
      description:
        "Transformamos suas ideias em conceitos arquitetônicos, garantindo que cada detalhe reflita sua personalidade.",
    },
    {
      icon: CheckCircle,
      title: "Acompanhar e Executar",
      description:
        "Gerenciamos todas as etapas, da concepção à execução, assegurando a qualidade e a fidelidade ao projeto.",
    },
    {
      icon: Sparkles,
      title: "Entregar Sonhos",
      description:
        "Finalizamos com a entrega de um ambiente que supera suas expectativas, pronto para ser vivido e amado.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Beleza com Propósito: Nossa Metodologia
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Acreditamos que a arquitetura vai além das paredes. É sobre transformar
          vidas e criar espaços que inspiram.
        </p>
        <div className="mt-12 relative w-full h-[400px] overflow-hidden rounded-lg shadow-xl"> {/* Container para a imagem com overflow-hidden */}
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Processo de trabalho"
            className="absolute inset-0 w-full h-full object-cover transform scale-105 animate-[background-zoom-pan_30s_ease-in-out_infinite_alternate]" // Efeito de zoom e movimento
          />
          {/* Overlay com gradiente de transparência para misturar com o fundo */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"> {/* Ajustado o mt para não sobrepor a imagem */}
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;