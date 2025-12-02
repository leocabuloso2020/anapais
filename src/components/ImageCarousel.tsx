import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // Importando o plugin de autoplay

interface ImageCarouselProps {
  images: string[];
  altText: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altText }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }) // Configura o autoplay para 5 segundos e não para ao interagir
  );

  return (
    <Carousel
      plugins={[plugin.current]} // Aplica o plugin de autoplay
      className="w-full h-full relative" // Adicionado 'relative' para garantir o posicionamento correto das setas
      opts={{
        loop: true, // Garante que o carrossel irá repetir as imagens
      }}
    >
      <CarouselContent className="h-full"> {/* Adicionado h-full aqui */}
        {images.map((imageSrc, index) => (
          <CarouselItem key={index} className="h-full"> {/* Adicionado h-full aqui */}
            <img
              src={imageSrc}
              alt={`${altText} ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
};

export default ImageCarousel;