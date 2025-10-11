import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-background min-h-[calc(100vh-72px)] flex items-center"> {/* Adicionado min-h-[calc(100vh-72px)] e flex items-center */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2 flex justify-center">
          <div className="relative w-full max-w-md h-[400px] rounded-lg shadow-xl overflow-hidden"> {/* Diminuído para h-[400px] */}
            <img
              src="/sobre.png" // Caminho atualizado para a imagem que você adicionou
              alt="Ana Pais Arquitetura"
              className="w-full h-full object-cover" // Ajustado para h-full para preencher o contêiner
            />
            {/* Overlay com gradiente de transparência invertido para da direita para a esquerda */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background"></div>
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