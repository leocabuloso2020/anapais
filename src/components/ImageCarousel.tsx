import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
  altText: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altText }) => {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent>
        {images.map((imageSrc, index) => (
          <CarouselItem key={index}>
            {/* Removido o div com p-1 para que a imagem preencha o CarouselItem diretamente */}
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