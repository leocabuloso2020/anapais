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
      className={cn("h-32 sm:h-40 md:h-48 lg:h-64 w-auto max-w-full", className)} // Reduzido h-32 para mobile, adicionado max-w-full
    />
  );
};

export default Logo;