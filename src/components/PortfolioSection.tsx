import React from "react";
import ImageCarousel from "@/components/ImageCarousel";
import { useInView } from "@/hooks/use-in-view";

const PortfolioSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const portfolioImages = [
    "/portfolio/01.jpg",
    "/portfolio/02.jpg",
    "/portfolio/03.jpg",
    "/portfolio/04.jpg",
    "/portfolio/05.jpg",
    "/portfolio/06.jpg",
    "/portfolio/07.jpg",
    "/portfolio/08.jpg",
    "/portfolio/09.jpg",
    "/portfolio/10.jpg",
    "/portfolio/11.jpg",
    "/portfolio/12.jpg",
    "/portfolio/13.jpg",
    "/portfolio/14.jpg",
    "/portfolio/15.jpg",
  ];

  return (
    <section ref={ref} id="portfolio" className="py-16 bg-background min-h-[calc(100vh-72px)] flex items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Nosso Portfólio
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Explore alguns dos nossos projetos e veja como transformamos espaços com criatividade e sensibilidade.
        </p>
        <div className={`relative w-full aspect-video min-h-[300px] max-h-[550px] overflow-hidden rounded-lg shadow-xl ${inView ? "animate-fade-in-from-right" : "opacity-0 translate-x-12"}`}>
          <ImageCarousel images={portfolioImages} altText="Projeto de arquitetura do portfólio" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;