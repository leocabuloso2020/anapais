import React from "react";

const BackgroundTexture: React.FC = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-50" // Opacidade aumentada para 50% para teste
      style={{
        backgroundImage: "url('/noise-texture.png')", // Usa a imagem salva na pasta public
        backgroundRepeat: "repeat", // Repete a imagem para cobrir todo o espaço
        animation: "texture-scroll 30s linear infinite", // Velocidade da animação ajustada para 30s para teste
      }}
    ></div>
  );
};

export default BackgroundTexture;