import React from "react";
import { useInView } from "@/hooks/use-in-view"; // Mantendo o import, mas não usando a lógica de inView para a imagem aqui
import ImageCarousel from "@/components/ImageCarousel"; // Removendo o uso do ImageCarousel aqui

const AboutSection: React.FC = () => {
  // O hook useInView não será mais usado para a imagem nesta seção, mas pode ser útil para outros elementos se necessário.
  // Por simplicidade, vou remover a lógica de inView para a imagem aqui.
  const [ref] = useInView({ threshold: 0.3 }); // Mantendo o ref para a seção, caso queira animar o texto, por exemplo.

  return (
    <section ref={ref} className="py-16 bg-background min-h-[calc(100vh-72px)] flex items-center">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2 flex justify-center">
          <div className="relative w-full max-w-md h-[400px] rounded-lg shadow-xl overflow-hidden"> {/* Removendo a classe de animação */}
            <img
              src="/sobre.png" // Voltando para a imagem original
              alt="Ana Pais Arquitetura"
              className="w-full h-full object-cover"
            />
            {/* Removendo o overlay de gradiente se não for mais necessário */}
          </div>
        </div>
        <div className="lg:order-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Criatividade e Funcionalidade
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Com 12 anos de experiência, Ana Cláudia Pais lidera um escritório
            dedicado a transformar sonhos em realidade arquitetônica. Atendemos
            em Belo Horizonte e remotamente, levando nossa paixão por design e
            soluções inteligentes a clientes em todo o Brasil.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Nossa missão é criar espaços que não apenas impressionem
            visualmente, mas que também melhorem a qualidade de vida, unindo
            estética, conforto e funcionalidade. Acreditamos que a arquitetura
            tem o poder de inspirar e acolher.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
            "Cada projeto é uma nova história a ser contada, com criatividade e
            propósito."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;