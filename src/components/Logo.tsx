import React from "react";

const Logo: React.FC = () => {
  return (
    <img
      src="/logo.svg" // Certifique-se de que o arquivo logo.svg esteja na pasta 'public'
      alt="Ana Pais Arquitetura Logo"
      className="h-64 w-auto" // Ampliado o tamanho para h-64
    />
  );
};

export default Logo;