import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building, LayoutDashboard, Lightbulb } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-none bg-card"> {/* Adicionado bg-card */}
    <CardHeader className="pb-4 flex flex-col items-center">
      <Icon className="h-12 w-12 text-brand-color mb-4" />
      <CardTitle className="text-xl font-semibold text-foreground">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "Projetos Residenciais",
      description:
        "Criamos lares que contam sua história, com design e funcionalidade.",
    },
    {
      icon: Building,
      title: "Projetos Comerciais",
      description:
        "Espaços que impulsionam negócios, unindo estética e eficiência.",
    },
    {
      icon: LayoutDashboard,
      title: "Design de Interiores",
      description:
        "Transformamos ambientes internos em refúgios de conforto e beleza.",
    },
    {
      icon: Lightbulb,
      title: "Consultoria Arquitetônica",
      description:
        "Orientação especializada para suas ideias, do conceito à execução.",
    },
  ];

  return (
    <section className="py-16 bg-background min-h-[calc(100vh-72px)] flex items-center"> {/* Adicionado min-h-[calc(100vh-72px)] e flex items-center */}
      <div className="container mx-auto text-center"> {/* Removido px-4 */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Projetos com significado e identidade
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;