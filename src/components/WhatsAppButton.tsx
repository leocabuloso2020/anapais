import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  // Substitua '5531999999999' pelo seu número de WhatsApp (código do país + DDD + número, sem espaços ou hífens)
  const whatsappLink = "https://wa.me/5531993221301"; 

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        className="rounded-full w-20 h-20 flex items-center justify-center shadow-lg bg-brand-color hover:bg-brand-color-600 transition-colors duration-300 text-[0px]" // Adicionado text-[0px]
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle width="72" height="72" className="text-white !w-[72px] !h-[72px]" /> {/* Adicionado !w-[72px] !h-[72px] para forçar o tamanho */}
      </Button>
    </a>
  );
};

export default WhatsAppButton;