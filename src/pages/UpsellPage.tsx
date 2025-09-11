import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Clock, Download, Infinity, Gift, Zap } from "lucide-react";
import { useEffect } from "react";

const UpsellPage = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Oferta Exclusiva - Upgrade Premium por R$ 15,90";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Oferta exclusiva de upgrade! Acesso Premium vitalício com 3500 livros em PDF por apenas R$ 15,90. Desconto limitado!');
    }
  }, []);

  return (
    <main className="min-h-screen gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/95 to-primary opacity-95"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <Badge className="gradient-premium text-accent-foreground px-6 py-3 text-lg font-bold shadow-glow mb-6">
              <Zap className="w-5 h-5 mr-2" />
              OFERTA EXCLUSIVA - DESCONTO ESPECIAL
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-black text-primary-foreground mb-6">
              🎉 PARABÉNS! VOCÊ GANHOU UM{" "}
              <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                DESCONTO EXCLUSIVO!
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-4">
              Oferta especial só para você que estava considerando o plano básico.
            </p>
            
            <div className="bg-red-500/20 border-2 border-red-400 rounded-2xl p-6 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-red-200 mb-4">
                ⚠️ PARE! NÃO COMETA ESSE ERRO
              </h2>
              <p className="text-lg text-red-100 leading-relaxed">
                Você estava prestes a escolher o plano básico por R$ 9,90...
                <br />
                <strong>MAS ISSO SERIA UM GRANDE ERRO!</strong> Você perderia acesso vitalício e todos os bônus exclusivos que podem transformar sua vida financeira para sempre.
              </p>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Essential Plan - Muted */}
            <Card className="shadow-card border-2 border-muted/50 bg-card/30 backdrop-blur-sm relative animate-fade-up opacity-50">
              <CardHeader className="text-center pb-4">
                <Badge variant="outline" className="w-fit mx-auto mb-4 text-muted-foreground/60 border-muted-foreground/30">
                  <Clock className="w-4 h-4 mr-2" />
                  Acesso Essencial
                </Badge>
                <CardTitle className="text-xl font-bold text-muted-foreground/80">
                  Plano Básico
                </CardTitle>
                <div className="space-y-2">
                  <p className="text-2xl font-black text-muted-foreground/70 line-through">R$ 9,90</p>
                  <p className="text-xs text-muted-foreground/50">ainda disponível, mas...</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-muted-foreground/40" />
                    <span className="text-sm text-muted-foreground/70">200 Audiobooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-muted-foreground/40" />
                    <span className="text-sm text-muted-foreground/70">Acesso por 2 meses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Premium Plan - Highlighted */}
            <Card className="shadow-elegant border-4 border-accent bg-card relative animate-fade-up transform scale-105">
              {/* Exclusive Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Badge className="gradient-premium text-accent-foreground px-8 py-3 text-lg font-bold shadow-glow animate-pulse">
                  <Crown className="w-5 h-5 mr-2" />
                  OFERTA EXCLUSIVA
                </Badge>
              </div>
              
              <CardHeader className="text-center pb-4 pt-12">
                <Badge variant="outline" className="w-fit mx-auto mb-4 border-accent text-accent">
                  <Infinity className="w-4 h-4 mr-2" />
                  Acesso Premium Vitalício
                </Badge>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Upgrade Exclusivo com Desconto VIP!
                </CardTitle>
                <div className="space-y-3">
                  <div className="bg-accent/20 border border-accent/40 rounded-xl p-4">
                    <p className="text-sm text-accent font-semibold">De R$ 19,90 por apenas:</p>
                    <p className="text-6xl font-black gradient-accent bg-clip-text text-transparent">R$ 15,90</p>
                    <p className="text-sm text-accent">Desconto de R$ 4,00 exclusivo para você!</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="bg-accent/15 border border-accent/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-accent">Bônus Exclusivos Incluídos:</span>
                  </div>
                  <p className="text-sm text-foreground">✨ 3500 Livros em PDF - Biblioteca gigantesca!</p>
                  <p className="text-sm text-foreground">♾️ Acesso vitalício - Para sempre seu!</p>
                  <p className="text-sm text-foreground">📱 Download ilimitado</p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="p-1 gradient-accent rounded-full">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground font-medium">200 Audiobooks Best-Sellers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 gradient-accent rounded-full">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Bônus: 3500 Livros em PDF</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 gradient-accent rounded-full">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Acesso Vitalício</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 gradient-accent rounded-full">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Download Ilimitado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 gradient-accent rounded-full">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Atualizações Constantes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 gradient-accent rounded-full">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Garantia de 7 Dias</span>
                  </li>
                </ul>
                
                <div className="space-y-4">
                  <CTAButton 
                    variant="premium" 
                    size="xl" 
                    className="w-full text-lg"
                    pulse
                  >
                    🔥 SIM! QUERO O UPGRADE PREMIUM POR R$ 15,90!
                  </CTAButton>
                  
                  <div className="text-center">
                    <p className="text-sm text-accent font-semibold flex items-center justify-center gap-2">
                      <Star className="w-4 h-4" />
                      Oferta por Tempo Limitado • Economize R$ 4,00
                      <Star className="w-4 h-4" />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Options */}
          <div className="text-center space-y-6">
            <div className="bg-card/20 border border-accent/30 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-lg text-primary-foreground mb-4">
                <strong>Por que esta oferta é especial?</strong>
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                Você demonstrou interesse genuíno em transformar sua vida, por isso merece nosso melhor preço. 
                Esta é uma oportunidade única para ter acesso vitalício a todo nosso ecossistema de conhecimento 
                com um desconto exclusivo que não oferecemos para todos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.history.back()}
                className="text-primary-foreground/70 underline hover:text-primary-foreground transition-colors"
              >
                Não, prefiro continuar com o plano de R$ 9,90
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UpsellPage;