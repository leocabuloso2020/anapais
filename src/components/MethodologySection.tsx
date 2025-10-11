import React from "react";
import { Lightbulb, Handshake, CheckCircle, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/use-in-view"; // Importando o hook useInView
import ImageCarousel from "@/components/ImageCarousel"; // Importando o componente ImageCarousel

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

  // URLs das imagens para o carrossel (as que você enviou)
  const carouselImages = [
    "/img01.jpg",
    "/img02.jpg",
    "/img03.jpg",
    "/img04.jpg",
  ];

  return (
    <section ref={ref} className="py-16 bg-background min-h-[calc(100vh-72px)] flex flex-col justify-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Beleza com Propósito: Nossa Metodologia
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Acreditamos que a arquitetura vai além das paredes. É sobre transformar
          vidas e criar espaços que inspiram.
        </p>
        <div className={`mt-12 relative w-full h-[400px] overflow-hidden rounded-lg shadow-xl ${inView ? "animate-fade-in-from-right" : "opacity-0 translate-x-12"}`}> {/* Aplicando a animação aqui */}
          <ImageCarousel images={carouselImages} altText="Processo de trabalho" />
          {/* O overlay com gradiente de transparência foi movido para dentro do ImageCarousel se necessário, ou pode ser removido se o carrossel já tiver um bom visual */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;