import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
}) => (
  <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
    <img
      src={image}
      alt={title}
      className="w-full h-60 object-cover"
    />
    <CardContent className="p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/10">
        Ver Mais
      </Button>
    </CardContent>
  </Card>
);

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Residência Harmonia",
      description: "Um lar moderno e acolhedor com espaços integrados.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560185879-c7778d99975b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Escritório Inovação",
      description: "Ambiente de trabalho que inspira criatividade e produtividade.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570129477494-6973ea9232c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Apartamento Urbano",
      description: "Design inteligente para a vida na cidade, com conforto e estilo.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519947292026-a89497975332?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Clínica Bem-Estar",
      description: "Espaço de saúde que transmite tranquilidade e profissionalismo.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Nosso Portfólio: Projetos que Inspiram
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;