import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { Volume2 } from "lucide-react";
import { UpsellModal } from "@/components/ui/upsell-modal";
import { useState } from "react";
import livrosImage from "@/assets/livros.png";
import domilaoImg from "@/assets/domilaoaomilhao.png";

export const HeroSection = () => {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  
  const scrollToOffers = () => {
    const offersSection = document.getElementById('offers');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/95 to-primary opacity-95"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2 gradient-accent text-accent-foreground border-0">
                <Volume2 className="w-4 h-4 mr-2" />
                200+ Audiobooks Best-Sellers
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-primary-foreground leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  200 Audiobooks
                </span>{" "}
                <span className="text-primary-foreground">Best-Sellers</span>
              </h1>
              
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-foreground/70 leading-relaxed">
                Desvende Seu{" "}
                <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                  Potencial
                </span>
              </h2>

              {/* Imagem principal abaixo do título - apenas mobile */}
              <div className="flex justify-center lg:hidden">
                <img 
                  src={livrosImage} 
                  alt="Biblioteca de audiobooks para transformar sua vida"
                  className="h-80 w-auto object-contain rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Simple Card with Price and CTA */}
            <div className="bg-card/90 border border-accent/30 rounded-2xl p-6 backdrop-blur-sm text-center relative">
              {/* Últimas Unidades Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                  ÚLTIMAS UNIDADES
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">Comece hoje por apenas</p>
              <div className="space-y-1 mb-4">
                <p className="text-2xl text-muted-foreground line-through">De R$ 39,90</p>
                <p className="text-5xl font-black gradient-accent bg-clip-text text-transparent">R$ 9,90</p>
              </div>
              
              <CTAButton 
                variant="premium" 
                size="default" 
                onClick={scrollToOffers}
                className="w-full max-w-xs mx-auto"
              >
                OBTER AGORA
              </CTAButton>
            </div>

            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Você sente que está pronto para o próximo nível? 
              <strong className="text-primary-foreground"> Chega de desculpas. Transforme sua vida agora.</strong>
            </p>
          </div>

          {/* Hero Image - Hidden on mobile */}
          <div className="relative animate-scale-in hidden lg:block">
            <div className="relative">
              <img 
                src={livrosImage} 
                alt="Biblioteca de audiobooks para sucesso pessoal e financeiro"
                className="w-full h-auto rounded-3xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      <UpsellModal open={isUpsellOpen} onOpenChange={setIsUpsellOpen} />
    </section>
  );
};