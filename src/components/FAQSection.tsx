import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Como funciona o processo de projeto?",
      answer:
        "Nosso processo começa com uma conversa detalhada para entender suas necessidades e desejos. Em seguida, desenvolvemos o conceito, apresentamos as propostas, refinamos o projeto e acompanhamos a execução até a entrega final.",
    },
    {
      question: "Quais áreas vocês atendem?",
      answer:
        "Atendemos projetos residenciais, comerciais e de interiores em Belo Horizonte presencialmente e em todo o Brasil de forma remota, garantindo a mesma qualidade e atenção aos detalhes.",
    },
    {
      question: "Como posso marcar uma reunião?",
      answer:
        "Você pode entrar em contato conosco através do nosso formulário de contato, e-mail ou diretamente pelo WhatsApp. Teremos prazer em agendar uma conversa para discutir seu projeto.",
    },
    {
      question: "Qual o diferencial da Ana Pais Arquitetura?",
      answer:
        "Nosso diferencial está na abordagem personalizada, onde cada projeto é único e reflete a identidade do cliente. Unimos criatividade e funcionalidade, com um acompanhamento próximo e um compromisso com a excelência em cada etapa.",
    },
  ];

  return (
    <section className="py-12 bg-background min-h-[calc(100vh-72px)] flex flex-col justify-center"> {/* Alterado py-16 para py-12, adicionado min-h-[calc(100vh-72px)] e flex flex-col justify-center */}
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8"> {/* Alterado mb-12 para mb-8 */}
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-left">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;