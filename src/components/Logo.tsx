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
      className={cn("h-40 sm:h-48 md:h-64 w-auto", className)} // Ajustado para ser responsivo: h-40 em mobile, h-48 em sm, h-64 em md e acima
    />
  );
};

export default Logo;