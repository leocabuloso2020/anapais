import React from "react";

const Logo: React.FC = () => {
  return (
    <img
      src="/logo.svg" // O arquivo logo.svg na pasta 'public' foi atualizado
      alt="Ana Pais Arquitetura Logo"
      className="h-48 w-auto" // Tamanho ajustado para ser menor
    />
  );
};

export default Logo;