import React from "react";
import { useInView } from "@/hooks/use-in-view";
import ImageCarousel from "@/components/ImageCarousel";

// Importando as imagens diretamente para garantir que sejam encontradas
import image1 from "/01.jpg";
import image2 from "/02.jpg";
import image3 from "/03.jpg";
import image4 from "/04.jpg";
import image5 from "/05.jpg";

const MethodologySection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3, // A animação será ativada quando 30% da seção estiver visível
  });

  // Array com as imagens importadas
  const carouselImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
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
          <ImageCarousel images={carouselImages} altText="" />
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;