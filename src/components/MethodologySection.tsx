import React from "react";
import { useInView } from "@/hooks/use-in-view";
import ImageCarousel from "@/components/ImageCarousel";

const MethodologySection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3, // A animação será ativada quando 30% da seção estiver visível
  });

  // Voltando para as URLs corretas das imagens do carrossel.
  const carouselImages = [
    "/01.jpg",
    "/02.jpg",
    "/03.jpg",
    "/04.jpg",
    "/05.jpg",
  ];

  return (
    <section ref={ref} className="py-16 bg-background min-h-[calc(100vh-72px)] flex items-center">
      <div className="container mx-auto text-center"> {/* Removido px-4 */}
        
        {/* Bloco de Teste Definitivo */}
        <div className="border-4 border-red-500 p-4 mb-8">
          <p className="text-white mb-2">BLOCO DE TESTE: Se a imagem não aparecer abaixo, o arquivo /01.jpg não está sendo encontrado.</p>
          <img src="/01.jpg" alt="Teste de imagem 01" className="w-48 h-48 mx-auto border-2 border-white" />
        </div>
        {/* Fim do Bloco de Teste */}

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