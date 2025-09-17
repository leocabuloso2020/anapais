import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  const whatsappLink = "https://wa.me/SEUNUMERO"; // Substitua SEUNUMERO pelo número de WhatsApp

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        className="rounded-full w-16 h-16 flex items-center justify-center shadow-lg bg-green-500 hover:bg-green-600 transition-colors duration-300"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;