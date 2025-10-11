import React from "react";

const Logo: React.FC = () => {
  return (
    <img
      src="/logo.svg" // Certifique-se de que o arquivo logo.svg esteja na pasta 'public'
      alt="Ana Pais Arquitetura Logo"
      className="h-[22.4rem] w-auto filter invert" // Aumentado em 40% (de h-64 para h-[22.4rem])
    />
  );
};

export default Logo;