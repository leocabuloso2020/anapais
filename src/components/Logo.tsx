import React from "react";
import { cn } from "@/lib/utils"; // Importando a função cn para combinar classes Tailwind

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      src="/logo.svg" // O arquivo logo.svg na pasta 'public' foi atualizado
      alt="Ana Pais Arquitetura Logo"
      className={cn("h-28 sm:h-32 md:h-40 lg:h-48 w-auto max-w-full", className)} // Tamanhos reduzidos para melhor responsividade
    />
  );
};

export default Logo;