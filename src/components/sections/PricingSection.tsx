import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Clock, Download, Infinity, Gift } from "lucide-react";
import { UpsellModal } from "@/components/ui/upsell-modal";
import { useState } from "react";

const features = {
  essential: [
    "200 Audiobooks Best-Sellers",
    "Acesso por 2 Meses",
    "Garantia de 7 Dias"
  ],
  premium: [
    "200 Audiobooks Best-Sellers",
    "Bônus: 3500 Livros em PDF",
    "Acesso Vitalício",
    "Download Ilimitado",
    "Atualizações Constantes",
    "Garantia de 7 Dias"
  ]
};

export const PricingSection = () => {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  return (
    <section id="offers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">
              200 Audiobooks Best-Sellers
            </span>{" "}
            Esperando por Você
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Uma biblioteca completa que transformará sua mentalidade e multiplicará suas oportunidades. Comece hoje!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Essential Plan - Less Attractive */}
            <Card className="shadow-sm border border-muted bg-card/50 relative animate-fade-up">
              <CardHeader className="text-center pb-4 pt-6">
                <Badge variant="secondary" className="w-fit mx-auto mb-4 text-muted-foreground text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  Acesso Essencial
                </Badge>
                <CardTitle className="text-lg font-semibold text-muted-foreground">
                  Comece sua jornada
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-center">
                    <p className="text-2xl text-muted-foreground line-through mb-1">De R$ 39,90</p>
                    <p className="text-4xl font-bold text-foreground mb-2">R$ 9,90</p>
                  </div>
                  <p className="text-sm text-muted-foreground">pagamento único</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {features.essential.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="p-1 bg-muted rounded-full">
                        <Check className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <CTAButton 
                  variant="outline" 
                  size="default" 
                  onClick={() => setIsUpsellOpen(true)}
                  className="w-full text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  COMEÇAR POR R$ 9,90
                </CTAButton>
              </CardContent>
            </Card>

            {/* Premium Plan - Highlighted */}
            <Card className="shadow-elegant border-2 border-accent bg-card relative animate-fade-up transform hover:scale-105 transition-smooth">
            {/* Most Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <Badge className="gradient-premium text-accent-foreground px-4 py-1 text-xs md:text-sm font-bold shadow-glow">
                <Crown className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                MAIS POPULAR
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-4 pt-6">
              <Badge variant="outline" className="w-fit mx-auto mb-4 border-accent text-accent text-xs md:text-sm">
                <Infinity className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                Acesso Premium
              </Badge>
              <CardTitle className="text-2xl font-bold text-foreground">
                A Escolha Inteligente para o Sucesso Duradouro!
              </CardTitle>
              <div className="space-y-2">
                <div className="text-center">
                  <p className="text-2xl text-muted-foreground line-through mb-1">De R$ 69,90</p>
                  <p className="text-5xl font-black gradient-accent bg-clip-text text-transparent">R$ 19,90</p>
                  <p className="text-sm text-accent font-semibold bg-accent/20 px-3 py-1 rounded-full inline-block">
                    Promoção Limitada
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">pagamento único • acesso vitalício</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-accent">Bônus Exclusivo Incluído:</span>
                </div>
                <p className="text-sm text-foreground">3500 Livros em PDF - Uma biblioteca digital gigantesca!</p>
              </div>
              
              <ul className="space-y-3">
                {features.premium.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="p-1 gradient-accent rounded-full">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3">
                <CTAButton 
                  variant="premium" 
                  size="default" 
                  className="w-full text-sm md:text-base py-2 md:py-3"
                  pulse
                >
                  QUERO O ACESSO PREMIUM AGORA!
                </CTAButton>
                
                <div className="text-center">
                  <p className="text-sm text-accent font-semibold flex items-center justify-center gap-2">
                    <Star className="w-4 h-4" />
                    Melhor Custo-Benefício • Acesso Para Sempre
                    <Star className="w-4 h-4" />
                  </p>
                </div>
              </div>
            </CardContent>
            </Card>
          </div>
          
        </div>

        <UpsellModal open={isUpsellOpen} onOpenChange={setIsUpsellOpen} />

        <div className="text-center mt-12 animate-fade-up">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong>Por que o Premium é melhor?</strong> O Essencial te dá um gostinho, 
            mas o Premium entrega transformação completa e duradoura.
          </p>
        </div>
      </div>
    </section>
  );
};