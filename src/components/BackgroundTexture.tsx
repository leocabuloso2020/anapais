import React from "react";

const BackgroundTexture: React.FC = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-20" // Posiciona fixo, atrás de tudo, e com baixa opacidade
      style={{
        backgroundImage: "url('/noise-texture.png')", // Usa a imagem salva na pasta public
        backgroundRepeat: "repeat", // Repete a imagem para cobrir todo o espaço
        animation: "texture-scroll 60s linear infinite", // Aplica a animação de rolagem lenta
      }}
    ></div>
  );
};

export default BackgroundTexture;