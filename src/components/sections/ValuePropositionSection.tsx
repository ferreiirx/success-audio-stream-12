import { CTAButton } from "@/components/ui/cta-button";
import { Calculator, TrendingUp, BookOpen, Users } from "lucide-react";
import preco1Img from "@/assets/preco1.jpg";
import preco2Img from "@/assets/preco2.jpg";
import preco3Img from "@/assets/preco3.jpg";
import preco4Img from "@/assets/preco4.jpg";

const stats = [
  {
    icon: BookOpen,
    value: "200+",
    label: "Audiobooks Best-Sellers"
  },
  {
    icon: Users,
    value: "10.000+",
    label: "Vidas Transformadas"
  },
  {
    icon: TrendingUp,
    value: "3.700",
    label: "Total de Obras (com bônus)"
  },
  {
    icon: Calculator,
    value: "95%",
    label: "Economia vs Compra Individual"
  }
];

export const ValuePropositionSection = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('offers');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 gradient-accent rounded-2xl w-fit mx-auto mb-4 shadow-glow">
                <stat.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-foreground mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
            Invista em Você: O Melhor{" "}
            <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">
              Custo-Benefício
            </span>{" "}
            do Mercado
          </h2>

          <div className="bg-accent/10 border-2 border-accent/30 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Calculator className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Faça as Contas:</h3>
            </div>
            
            {/* Price Comparison Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[preco1Img, preco2Img, preco3Img, preco4Img].map((img, index) => (
                <div key={index} className="bg-card/60 rounded-xl p-3 border border-accent/20">
                  <img 
                    src={img} 
                    alt={`Preço audiobook ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-card/60 rounded-2xl p-6 border border-accent/20 text-center">
                  <p className="text-lg text-muted-foreground mb-2">1 audiobook no mercado:</p>
                  <p className="text-4xl font-bold text-foreground">R$ 25-50</p>
                </div>
                <div className="bg-card/80 rounded-2xl p-6 border-2 border-accent/40 text-center">
                  <p className="text-lg text-muted-foreground mb-2">Nosso pack completo:</p>
                  <p className="text-5xl font-black gradient-accent bg-clip-text text-transparent">R$ 19,90</p>
                  <p className="text-sm text-accent font-semibold bg-accent/20 px-3 py-1 rounded-full mt-2">
                    200 audiobooks + 3500 PDFs
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl p-8 border-2 border-accent/30 text-center">
                <p className="text-2xl font-bold text-accent mb-4">Você Economiza</p>
                <p className="text-6xl font-black text-foreground mb-2">R$ 4.980</p>
                <p className="text-sm text-muted-foreground">
                  Comparado à compra individual dos audiobooks
                </p>
                <div className="bg-accent/20 rounded-xl p-3 mt-4">
                  <p className="text-xs text-accent font-semibold">
                    Economia de mais de 95%!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Uma rápida pesquisa revela que um audiobook best-seller custa mais que todo nosso acervo. 
            <strong className="text-foreground"> Esta é sua chance de acelerar seu crescimento sem comprometer o orçamento.</strong>
          </p>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Não Espere Mais! Sua Jornada para o Sucesso Começa Agora.
            </h3>
            
            <p className="text-lg text-muted-foreground">
              Quantas oportunidades você já perdeu por falta de conhecimento? 
              O futuro pertence àqueles que se preparam hoje.
            </p>

            <CTAButton 
              variant="premium" 
              size="xl" 
              onClick={scrollToOffers}
              className="max-w-md mx-auto text-lg py-4"
              pulse
            >
              OBTER AGORA
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};