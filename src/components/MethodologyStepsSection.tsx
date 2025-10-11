import React from "react";
import { Lightbulb, Handshake, CheckCircle, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

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

const MethodologyStepsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3, // A animação será ativada quando 30% da seção estiver visível
  });

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
    <section ref={ref} className="py-16 bg-background min-h-[calc(100vh-72px)] flex items-center">
      <div className="container mx-auto text-center"> {/* Removido px-4 */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Nosso Processo Criativo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologyStepsSection;