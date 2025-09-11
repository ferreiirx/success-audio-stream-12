import { CTAButton } from "@/components/ui/cta-button";
import { Separator } from "@/components/ui/separator";
import { VolumeX, Mail, MessageCircle, Shield, FileText } from "lucide-react";

export const Footer = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('offers');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <Separator className="bg-primary-foreground/20" />

      {/* Footer Info */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 gradient-accent rounded-lg">
                  <span className="w-6 h-6 text-accent-foreground text-xl">🎧</span>
                </div>
                <h3 className="text-xl font-bold">AudioBooks Success</h3>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed">
                Transformando vidas através do conhecimento em áudio. 
                Sua jornada para o sucesso começa com um clique.
              </p>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                Garantia Total
              </h4>
              <div className="space-y-3 text-primary-foreground/70">
                <p className="text-sm">7 dias de garantia incondicional</p>
                <p className="text-sm">100% do seu dinheiro de volta se não ficar satisfeito</p>
                <p className="text-sm font-semibold text-accent">Risco ZERO para você!</p>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                Termos e Políticas
              </h4>
              <div className="space-y-2 text-primary-foreground/70">
                <a href="#" className="block hover:text-accent transition-smooth">Termos de Uso</a>
                <a href="#" className="block hover:text-accent transition-smooth">Política de Privacidade</a>
                <a href="#" className="block hover:text-accent transition-smooth">Política de Reembolso</a>
                <a href="#" className="block hover:text-accent transition-smooth">Contato</a>
              </div>
            </div>
          </div>

          <Separator className="bg-primary-foreground/20 my-8" />

          <div className="text-center text-primary-foreground/60">
            <p>&copy; 2024 AudioBooks Success. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">
              Este produto não garante resultados financeiros específicos. 
              Os resultados dependem do comprometimento e aplicação individual.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};