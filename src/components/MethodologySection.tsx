import React from "react";
import { Lightbulb, Handshake, CheckCircle, Sparkles } from "lucide-react";

interface StepCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
    <Icon className="h-12 w-12 text-brand-color mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Beleza com Propósito: Nossa Metodologia
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Acreditamos que a arquitetura vai além das paredes. É sobre transformar
          vidas e criar espaços que inspiram.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Processo de trabalho"
            className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;