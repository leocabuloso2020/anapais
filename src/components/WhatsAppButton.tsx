import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  // Substitua '5531999999999' pelo seu número de WhatsApp (código do país + DDD + número, sem espaços ou hífens)
  const whatsappLink = "https://wa.me/5531999999999"; 

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        className="rounded-full w-16 h-16 flex items-center justify-center shadow-lg bg-brand-color hover:bg-brand-color-600 transition-colors duration-300"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;