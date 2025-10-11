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
      className={cn("h-64 w-auto", className)} // Aplicando className para permitir sobrescrever o tamanho padrão
    />
  );
};

export default Logo;