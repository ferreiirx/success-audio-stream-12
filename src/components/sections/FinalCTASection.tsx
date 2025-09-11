import { CTAButton } from "@/components/ui/cta-button";
import { VolumeX } from "lucide-react";

export const FinalCTASection = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('offers');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <div className="p-3 gradient-accent rounded-full w-fit mx-auto">
            <VolumeX className="w-8 h-8 text-accent-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Não Espere Mais! Sua Jornada Para o
            <span className="block text-accent">Sucesso Começa Agora</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Milhares de pessoas já estão vivendo a vida dos seus sonhos com o conhecimento 
            que você pode ter nas próximas horas. Não seja mais um que fica para trás.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <p className="text-sm text-primary-foreground/60 mb-2">De R$ 69,90 por apenas</p>
              <p className="text-5xl font-black text-accent">R$ 19,90</p>
              <p className="text-sm text-accent font-semibold">Acesso Vitalício</p>
            </div>
            
            <CTAButton 
              variant="premium" 
              size="xl" 
              onClick={scrollToOffers}
              className="min-w-60"
              pulse
            >
              OBTER AGORA!
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};