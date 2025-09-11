import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como receberei o acesso aos audiobooks?",
    answer: "Após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à nossa plataforma exclusiva, onde poderá baixar e ouvir todos os conteúdos."
  },
  {
    question: "Posso ouvir os audiobooks offline?",
    answer: "Sim! Todos os audiobooks e e-books podem ser baixados para o seu dispositivo, permitindo que você os acesse a qualquer momento, mesmo sem conexão com a internet."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "Para o plano Premium, o acesso é vitalício! Uma vez adquirido, o Pack é seu para sempre, incluindo todas as atualizações futuras. Para o plano Essencial, o acesso é por 2 meses."
  },
  {
    question: "Há alguma garantia?",
    answer: "Sim, oferecemos uma garantia de satisfação. Para o plano Essencial, a garantia é de 7 dias. Para o plano Premium, a garantia é de 15 dias. Se por qualquer motivo você não estiver satisfeito, basta entrar em contato conosco e faremos o reembolso total do seu investimento."
  },
  {
    question: "Os livros em PDF são os mesmos dos audiobooks?",
    answer: "Não necessariamente. Os 200 audiobooks são best-sellers específicos, enquanto os 3500 livros em PDF são um bônus adicional com uma vasta gama de títulos para complementar seu aprendizado."
  },
  {
    question: "Posso acessar em qualquer dispositivo?",
    answer: "Sim! Nossa plataforma é compatível com computadores, tablets e smartphones. Você pode alternar entre dispositivos e continuar de onde parou."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Oferecemos suporte completo via WhatsApp e e-mail. Nossa equipe está pronta para ajudar com qualquer dúvida sobre acesso, downloads ou uso da plataforma."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <HelpCircle className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-5xl font-black text-foreground">
              Dúvidas{" "}
              <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tire todas as suas dúvidas antes de começar sua jornada de transformação.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/80 backdrop-blur-sm rounded-2xl border border-accent/20 px-6 shadow-card hover:shadow-elegant transition-smooth animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent transition-smooth py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};