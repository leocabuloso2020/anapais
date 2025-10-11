import React from "react";

const Logo: React.FC = () => {
  return (
    <img
      src="/logo.svg" // O arquivo logo.svg na pasta 'public' foi atualizado
      alt="Ana Pais Arquitetura Logo"
      className="h-[18rem] w-auto" // Tamanho ajustado para ser um pouco menor
    />
  );
};

export default Logo;