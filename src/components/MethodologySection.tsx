import React from "react";
import { useInView } from "@/hooks/use-in-view";
import ImageCarousel from "@/components/ImageCarousel";

const MethodologySection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3, // A animação será ativada quando 30% da seção estiver visível
  });

  // URLs das imagens para o carrossel (agora com 5 imagens)
  const carouselImages = [
    "/img01.jpg",
    "/img02.jpg",
    "/img03.jpg",
    "/img04.jpg",
    "/img05.jpg",
  ];

  return (
    <section ref={ref} className="py-16 bg-background min-h-[calc(100vh-72px)] flex items-center">
      <div className="container mx-auto text-center"> {/* Removido px-4 */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Beleza com Propósito: Nossa Metodologia
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Acreditamos que a arquitetura vai além das paredes. É sobre transformar
          vidas e criar espaços que inspiram.
        </p>
        <div className={`relative w-full aspect-video min-h-[300px] max-h-[550px] overflow-hidden rounded-lg shadow-xl ${inView ? "animate-fade-in-from-right" : "opacity-0 translate-x-12"}`}>
          <ImageCarousel images={carouselImages} altText="Processo de trabalho" />
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;