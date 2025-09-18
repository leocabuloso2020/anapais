import React from "react";

const Logo: React.FC = () => {
  return (
    <img
      src="/logo.svg" // Certifique-se de que o arquivo logo.svg esteja na pasta 'public'
      alt="Ana Pais Arquitetura Logo"
      className="h-40 w-auto" // Ajustado o tamanho para h-40 (4x o tamanho original de h-10)
    />
  );
};

export default Logo;