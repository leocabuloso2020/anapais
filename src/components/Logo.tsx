import React from "react";

const Logo: React.FC = () => {
  return (
    <img
      src="/logo.svg" // Certifique-se de que o arquivo logo.svg esteja na pasta 'public'
      alt="Ana Pais Arquitetura Logo"
      className="h-[22.4rem] w-auto" // Removido o filtro de cor, o SVG deve ser branco por padrão agora
    />
  );
};

export default Logo;