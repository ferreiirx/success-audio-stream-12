import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Clock, Download, Infinity, Gift, Zap } from "lucide-react";

interface UpsellModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const UpsellModal = ({ open, onOpenChange }: UpsellModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xs sm:max-w-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300 mx-1 w-[calc(100vw-0.5rem)] sm:mx-4 sm:w-[calc(100vw-2rem)] md:w-full p-1 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-center">
            <Badge className="gradient-premium text-accent-foreground px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-bold shadow-glow mb-4 animate-pulse">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              OFERTA EXCLUSIVA - DESCONTO ESPECIAL
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 sm:space-y-6">
          <div className="text-center">
            <h1 className="text-sm sm:text-2xl md:text-3xl font-black text-foreground mb-1 sm:mb-4">
              🎉 PARABÉNS! VOCÊ GANHOU UM{" "}
              <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                DESCONTO EXCLUSIVO!
              </span>
            </h1>
            
            <p className="text-xs sm:text-lg text-muted-foreground leading-relaxed mb-1 sm:mb-4">
              Oferta especial para quem estava considerando o plano básico.
            </p>
            
            <div className="bg-red-500/20 border-2 border-red-400 rounded-xl p-1 sm:p-6 mb-2 sm:mb-6">
              <h2 className="text-xs sm:text-xl md:text-2xl font-bold text-red-600 mb-1 sm:mb-4">
                ⚠️ PARE! NÃO COMETA ESSE ERRO
              </h2>
              <p className="text-xs sm:text-base text-red-700 leading-relaxed">
                Você estava prestes a escolher o plano básico por R$ 9,90...
                <br />
                <strong>MAS ISSO SERIA UM ERRO!</strong> Você perderia acesso vitalício e bônus exclusivos.
              </p>
            </div>
          </div>

          {/* Premium Plan - Highlighted */}
          <Card className="shadow-elegant border-4 border-accent bg-card relative">
            {/* Exclusive Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="gradient-premium text-accent-foreground px-4 py-1 sm:px-8 sm:py-2 text-xs sm:text-sm font-bold shadow-glow animate-pulse">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                OFERTA EXCLUSIVA
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-2 sm:pb-4 pt-4 sm:pt-8">
              <Badge variant="outline" className="w-fit mx-auto mb-2 sm:mb-4 border-accent text-accent text-xs">
                <Infinity className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Acesso Premium Vitalício
              </Badge>
              <CardTitle className="text-xs sm:text-xl font-bold text-foreground">
                Upgrade Exclusivo com Desconto VIP!
              </CardTitle>
              <div className="space-y-1 sm:space-y-3">
                <div className="bg-accent/20 border border-accent/40 rounded-xl p-1 sm:p-4">
                  <p className="text-xs sm:text-sm text-accent font-semibold">De R$ 19,90 por apenas:</p>
                  <p className="text-xl sm:text-4xl font-black gradient-accent bg-clip-text text-transparent">R$ 15,90</p>
                  <p className="text-xs sm:text-sm text-accent">Desconto de R$ 4,00 exclusivo para você!</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-2 sm:space-y-6">
              <div className="bg-accent/15 border border-accent/30 rounded-xl p-1 sm:p-4">
                <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <Gift className="w-3 h-3 sm:w-5 sm:h-5 text-accent" />
                  <span className="text-xs sm:text-base font-semibold text-accent">Bônus Exclusivos Incluídos:</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground">✨ 3500 Livros em PDF - Biblioteca gigantesca!</p>
                <p className="text-xs sm:text-sm text-foreground">♾️ Acesso vitalício - Para sempre seu!</p>
                <p className="text-xs sm:text-sm text-foreground">📱 Download ilimitado</p>
              </div>
              
              <ul className="space-y-1 sm:space-y-3">
                <li className="flex items-center gap-1 sm:gap-3">
                  <div className="p-1 gradient-accent rounded-full">
                    <Check className="w-2 h-2 sm:w-4 sm:h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-xs sm:text-base">200 Audiobooks Best-Sellers</span>
                </li>
                <li className="flex items-center gap-1 sm:gap-3">
                  <div className="p-1 gradient-accent rounded-full">
                    <Check className="w-2 h-2 sm:w-4 sm:h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-xs sm:text-base">Bônus: 3500 Livros em PDF</span>
                </li>
                <li className="flex items-center gap-1 sm:gap-3">
                  <div className="p-1 gradient-accent rounded-full">
                    <Check className="w-2 h-2 sm:w-4 sm:h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-xs sm:text-base">Acesso Vitalício</span>
                </li>
                <li className="flex items-center gap-1 sm:gap-3">
                  <div className="p-1 gradient-accent rounded-full">
                    <Check className="w-2 h-2 sm:w-4 sm:h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-xs sm:text-base">Download Ilimitado</span>
                </li>
                <li className="flex items-center gap-1 sm:gap-3">
                  <div className="p-1 gradient-accent rounded-full">
                    <Check className="w-2 h-2 sm:w-4 sm:h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-xs sm:text-base">Atualizações Constantes</span>
                </li>
                <li className="flex items-center gap-1 sm:gap-3">
                  <div className="p-1 gradient-accent rounded-full">
                    <Check className="w-2 h-2 sm:w-4 sm:h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-xs sm:text-base">Garantia de 7 Dias</span>
                </li>
              </ul>
              
              <div className="space-y-2 sm:space-y-4">
                <CTAButton 
                  variant="premium" 
                  size="sm" 
                  className="w-full text-xs sm:text-lg py-1 sm:py-4"
                  pulse
                >
                  🔥 QUERO UPGRADE PREMIUM!
                </CTAButton>
                
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-accent font-semibold flex items-center justify-center gap-1 sm:gap-2">
                    <Star className="w-2 h-2 sm:w-4 sm:h-4" />
                    Oferta por Tempo Limitado • Economize R$ 4,00
                    <Star className="w-2 h-2 sm:w-4 sm:h-4" />
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <div className="bg-card/20 border border-accent/30 rounded-xl p-2 sm:p-6 backdrop-blur-sm mb-1 sm:mb-4">
              <p className="text-xs sm:text-lg text-foreground mb-1 sm:mb-4">
                <strong>Por que esta oferta é especial?</strong>
              </p>
              <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                Você demonstrou interesse genuíno, por isso merece nosso melhor preço. 
                Uma oportunidade única com desconto exclusivo.
              </p>
            </div>

            <button 
              onClick={() => onOpenChange(false)}
              className="text-muted-foreground underline hover:text-foreground transition-colors text-xs sm:text-sm"
            >
              Não, prefiro continuar com o plano de R$ 9,90
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};