import React from "react";

const Logo: React.FC = () => {
  return (
    <img
      src="/logo.svg" // Certifique-se de que o arquivo logo.svg esteja na pasta 'public'
      alt="Ana Pais Arquitetura Logo"
      className="h-[22.4rem] w-auto filter brightness(0) invert(1)" // Adicionado filtro para forçar a cor branca
    />
  );
};

export default Logo;