import React from "react";

const Logo: React.FC = () => {
  return (
    <img
      src="/logo.svg" // O arquivo logo.svg na pasta 'public' foi atualizado
      alt="Ana Pais Arquitetura Logo"
      className="h-[22.4rem] w-auto" // Nenhuma classe de filtro de cor é necessária, pois o SVG já é branco
    />
  );
};

export default Logo;